import { useState, useRef } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useTransaction } from "../context/TransactionContext";
import { useWallet } from "@meshsdk/react";
import { lock } from '../mesh/functionDepositWithMesh';
import { unlock } from "../mesh/functionWithDrawMesh";
import {useWalletContext} from "../pages/index";
async function main(){
    const {wallet, connected} = useWalletContext();
    const assets =[{
        unit: "lovelace",
        quantity: "100000000"
    }];
    const beneficiary =  "addr_test1qp32dhvj6nmhn8qjce8vsv3s0x70rrth7udxy32a7lm5yl7vchlp2ahqwyyfpv4l7fszccrngx2vcmmu5x3d3t3cy2uqpd7ewx";

    lock(beneficiary, assets, wallet);
    
}
main();
//npx tsx testFullFunction.ts