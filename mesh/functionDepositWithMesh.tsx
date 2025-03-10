import {
    Asset,
    deserializeAddress,
    mConStr0,
    MeshTxBuilder,
    MeshValue,
    Transaction,
  } from "@meshsdk/core";
  import { MeshVestingContract } from "@meshsdk/contract";
  import {
    getScript,
    getTxBuilder,
   
    blockchainProvider,
    getWalletInfoForTx,
  } from "./common";
  import { CardanoWallet, useWallet } from "@meshsdk/react";
  export async function lock(beneficiary: string, assets: Asset[], wallet: any, lockUntilTimeStamp: number) {
  
    const { scriptAddr, scriptCbor } = getScript();
    const value = MeshValue.fromAssets(assets);
    console.log(value);
    const meshTxBuilder = new MeshTxBuilder({
      fetcher: blockchainProvider,
      submitter: blockchainProvider,
    });
    const txBuilder = new MeshTxBuilder({
      fetcher: blockchainProvider,
      submitter: blockchainProvider,
    });
  
    // const contract = new MeshVestingContract({
    //   mesh: meshTxBuilder,
    //   fetcher: blockchainProvider,
    //   wallet: wallet,
    //   networkId: 0,
    // });
  


  
    
  
    // const tx = await contract.depositFund(
    //     assets,
    //     lockUntilTimeStamp.getTime(),
    //     beneficiary,
    //   );
  
    const { utxos, walletAddress, collateral } = await getWalletInfoForTx(wallet);
    const { pubKeyHash: ownerPubKeyHash } = deserializeAddress(walletAddress);
    const { pubKeyHash: beneficiaryPubKeyHash } = deserializeAddress(beneficiary);

  
    await txBuilder
      .txOut(scriptAddr, assets)
      .txOutInlineDatumValue(
        mConStr0([lockUntilTimeStamp, ownerPubKeyHash, beneficiaryPubKeyHash])
      )
      .metadataValue('674', {msg:['abc', 'abc']})
      .changeAddress(walletAddress)
      
      .selectUtxosFrom(utxos)
      .complete();
  
    const unsignedTx = txBuilder.txHex;

    
  
    const signedTx = await wallet.signTx(unsignedTx);

    const txHash = await wallet.submitTx(signedTx);
    
    return txHash;
  }


  