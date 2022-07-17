import React, { ReactDOM, setState, useState } from 'react';
import { DisplayConnectWallet, DisplayWalletInfo, DisplayWalletLoading } from '../../containers/navbar/Navbar';
import { closePopup } from './ConnectWalletPopup';
import {
    Value,
    Address,
    TransactionUnspentOutput,
} from '@emurgo/cardano-serialization-lib-asmjs';
import { CloseButtonPushed, DisconnectButtonPushed, DisplayWalletBalance, DisplayWalletName, DisplayRewardAddress } from './DisconnectWalletpopup'
import { GrClose } from 'react-icons/gr';
import { AssetDisplay } from './AssetDisplay';
import { AddAsset } from './AddAsset.js';

let Buffer = require('buffer/').Buffer;
export class WalletHandler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            WalletAPI: null,
            WalletConnected: false,
            WalletName: null,
            Balance: 0,
            WalletLoading: false,
            StakeAddress: null,
            NumofAssets: 0,
            Assets: [],
            AllAssetNames: []
        };
    }

    async Getbalance() {
        return this.state.Balance;
    }

    async GetStakeAddress() {
        const responseCBOR = await this.state.WalletAPI.getRewardAddresses();
        const addressCbor = responseCBOR[0];
        const rewardAddress = Address.from_bytes(Buffer.from(addressCbor, "hex")).to_bech32()
        return rewardAddress
    }

    async GetUtxos() {
        var multiAssetStr = "";
        const rawUtxos = await this.state.WalletAPI.getUtxos();
        for (const rawUtxo of rawUtxos) {
            const utxo = TransactionUnspentOutput.from_bytes(Buffer.from(rawUtxo, "hex"));
            const output = utxo.output();
            this.state.Balance += (output.amount().coin().to_str()) / 1000000; /* Adds the Utxo ADA balances */
            const multiasset = output.amount().multiasset(); /* Check for any tokens */
            if (multiasset) {
                const keys = multiasset.keys(); /* Get policy Ids in UTXO */
                const N = keys.len();
                for (let i = 0; i < N; i++) {
                    const policyId = keys.get(i);
                    const policyIdHex = Buffer.from(policyId.to_bytes(), "utf8").toString("hex");
                    const assets = multiasset.get(policyId);
                    const assetNames = assets.keys(); /* Might need to change this! If names arent working */
                    const K = assetNames.len()
                    for (let j = 0; j < K; j++) {
                        const assetName = assetNames.get(j);
                        const assetNameString = Buffer.from(assetName.name(), "utf8").toString();
                        const assetNameHex = Buffer.from(assetName.name(), "utf8").toString("hex")
                        const multiassetAmt = multiasset.get_asset(policyId, assetName).to_str();
                        const assetAmount = Number(multiassetAmt);


                        /* Add the Asset to the asset array */
                        let alreadyExists = false;
                        for (let l = 0; l <= this.state.NumofAssets; l++) {
                            if ((assetNameString === this.state.AllAssetNames[l])) {
                                alreadyExists = true;
                                let assetIndex = this.state.Assets[l];
                                assetIndex.SetAmount(assetIndex.state.AssetAmount + assetAmount);
                                console.log("Increasing " + assetIndex.state.AssetName + " balance to: " + assetIndex.state.AssetAmount);
                                break;
                            }
                        }
                        if (!alreadyExists) { /* If the asset does not yet exist, create a new AddAsset instance */
                            this.state.AllAssetNames[this.state.NumofAssets] = assetNameString;
                            this.state.Assets[this.state.NumofAssets] = new AddAsset();
                            let currentAsset = this.state.Assets[this.state.NumofAssets]; /* Add to the end of the array */
                            currentAsset.SetName(assetNameString);
                            currentAsset.SetAmount(assetAmount);
                            this.state.NumofAssets = this.state.NumofAssets + 1;
                            console.log("Adding " + currentAsset.state.AssetName + " Amount: " + currentAsset.state.AssetAmount);
                        }
                    }
                }
            }
        }
    }


    ConnectWallet = async (SelectedWallet) => {
        closePopup();
        DisplayWalletLoading();
        this.state.WalletAPI = await window.cardano[SelectedWallet].enable();
        this.state.StakeAddress = await this.GetStakeAddress();
        console.log("Connected to Wallet API: ", this.state.WalletAPI);
        this.state.WalletName = SelectedWallet;
        await this.GetUtxos();
        /* Load all wallet info before here  */
        this.state.WalletConnected = true;
        this.RefreshData();
    }

    RefreshData = () => {
        DisplayWalletBalance();
        DisplayWalletName();
        DisplayRewardAddress();
        DisplayWalletInfo();

    }

    async DiconnectWallet() {
        this.state.WalletAPI = null;
        this.state.WalletConnected = false;
        this.state.WalletConnected = false;
        this.state.Balance = 0;
        this.state.Assets = null;
    }
    /* Gets the balance of the connected wallet minus total locked.
       Note: Does not include rewards available  */

};
