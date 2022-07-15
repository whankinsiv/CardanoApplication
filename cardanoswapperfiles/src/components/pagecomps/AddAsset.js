export class AddAsset {
    constructor(name, amount) {
        this.state = {
            AssetName: null,
            AssetAmount: 0
        }
    }

    SetName = (name) => {
        this.state.AssetName = name;
    }

    SetAmount = (amount) => {
        this.state.AssetAmount = amount
    }
}