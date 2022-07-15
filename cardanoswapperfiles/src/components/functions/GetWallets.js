function GetWallets() {
    var Wallets = [];
    for (const key in window.cardano) {
        if (window.cardano[key].enable && Wallets.indexOf(key) === -1) {
            if (key !== "ccvault") {
                if (key !== "yoroi") {
                    Wallets.push(key);
                }
            }
        }
    }
    return (Wallets)
}

export default GetWallets