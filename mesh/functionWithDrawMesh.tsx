import {
    Asset,
    deserializeAddress,
    deserializeDatum,
    mConStr0,
    mConStr1,
    MeshTxBuilder,
    MeshValue,
    pubKeyAddress,
    pubKeyHash,
    signData,
    SLOT_CONFIG_NETWORK,
    unixTimeToEnclosingSlot,
    UTxO,
    Transaction
  } from "@meshsdk/core";
  import { MeshVestingContract, VestingDatum } from "@meshsdk/contract";
  import {
    blockchainProvider,
    getScript,
    getTxBuilder,
    getUtxoByTxHash,
    getWalletInfoForTx,

  } from "./common";
  
  export async function unlock(txHash: string, wallet: any) {
    
  
       //process.argv[2];
      const contractutxos = await blockchainProvider.fetchUTxOs(txHash);
      //console.log("Contract UTXOs:", contractutxos);
  
      // Tìm UTXO hợp lệ
      const vestingUtxo = contractutxos[0];
  
      // if (!vestingUtxo || !vestingUtxo.input || !vestingUtxo.output) {
      //   console.error("Invalid UTXO data:", vestingUtxo);
      //   throw new Error("Invalid UTXO data.");
      // }
  
      // console.log("Vesting UTXO:", vestingUtxo);
  
      const { utxos, walletAddress, collateral } = await getWalletInfoForTx(wallet);
      const { input: collateralInput, output: collateralOutput } = collateral;
      // if (!collateral || collateral.length === 0) {
      //   throw new Error("No collateral UTXO found in the wallet.");
      // }
  
      //const collateralInput = collateral[0].input;
      //const collateralOutput = collateral[0].output;
  
      // console.log("Collateral Input:", collateralInput);
      // console.log("Collateral Output:", collateralOutput);
  
      const { scriptAddr, scriptCbor } = getScript();
      const { pubKeyHash } = deserializeAddress(walletAddress);
  //     type Integer = { int: number | bigint };
  //     const byteString = (bytes: string): ByteString => {
  //       // check if the string is a hex string with regex
  //       if (bytes.length % 2 !== 0) {
  //         throw new Error("Invalid hex string - odd length: " + bytes);
  //       }
  //       if (!/^[0-9a-fA-F]*$/.test(bytes)) {
  //         throw new Error("Invalid hex string - non-hex string character: " + bytes);
  //       }
  //       return {
  //         bytes,
  //       };
  //     };
  //     const builtinByteString = (bytes: string): BuiltinByteString => {
  //       return byteString(bytes);
  //     };
  //     export type VestingDatum = ConStr0<
  //   [Integer, BuiltinByteString, BuiltinByteString]
  // >;
      const datum = deserializeDatum<VestingDatum>(vestingUtxo.output.plutusData!);
     // console.log("Datum:", datum);
  
      const invalidBefore = 
        Math.max(unixTimeToEnclosingSlot(
          Math.min(datum.fields[0].int as number, Date.now()),
          SLOT_CONFIG_NETWORK.preprod,
        ) + 1, 0);
  
      const txBuilder = new MeshTxBuilder({
        fetcher: blockchainProvider,
        submitter: blockchainProvider,
      });
  
     
      //const signerHash = deserializeAddress(walletAddress).pubKeyHash;
      await txBuilder
        .spendingPlutusScriptV3()
        .txIn(
          vestingUtxo.input.txHash,
          vestingUtxo.input.outputIndex,
          vestingUtxo.output.amount,
          scriptAddr
        )
        .spendingReferenceTxInInlineDatumPresent()
        
        .spendingReferenceTxInRedeemerValue("")
        //.txInInlineDatumPresent()
        //.txInDatumValue(mConStr0([invalidBefore, ownerPubKeyHash, beneficiaryPubKeyHash]))  
        //.txInRedeemerValue(mConStr1([]))
       //.txInDatumValue(mConStr0([signerHash]))
        .txInScript(scriptCbor)
        .txOut(walletAddress, [])
        .txInCollateral(
          collateralInput.txHash,
          collateralInput.outputIndex,
          collateralOutput.amount,
          collateralOutput.address
        )
        .invalidBefore(invalidBefore)
        .requiredSignerHash(pubKeyHash)
        .changeAddress(walletAddress)
        .selectUtxosFrom(utxos)
        .metadataValue('674', {msg:['abc', 'abc']})
        .setNetwork("preprod")
        .complete();
  
    
  
      const unsignedTx = txBuilder.txHex;
  
    
      const signedTx = await wallet.signTx(unsignedTx, true);
  
  
      const txhash = await wallet.submitTx(signedTx);
      return txhash;
   
  }
  
  