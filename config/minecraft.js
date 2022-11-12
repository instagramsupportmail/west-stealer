module.exports = (client) => {
    return {
        directory: {
            "Minecraft": `${process.env.APPDATA}\\Roaming\\.minecraft\\launcher_profiles.json`,
        },
    }
}