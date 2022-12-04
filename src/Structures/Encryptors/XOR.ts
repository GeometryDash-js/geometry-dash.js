import Base64 from "./Base64"

export default class XOR {
    /**
     * @param str The string you want to XOR encrypt/decrypt.
     * @param key The encryption key.
     */
    public static base(str: string, key: number): string {
        const encrypted = String.fromCodePoint( 
            ...str.split('')
            .map((char, x) => { 
                return char.charCodeAt(0) ^ key.toString().charCodeAt(x % key.toString().length)
            })
        )
        return encrypted
    }

    /**
     * @param str The string you want to XOR encrypt.
     * @param key The encryption key.
     */
    public static encrypt(str: string, key: number): string {
        const encrypted = XOR.base(str, key)
        return Base64.encrypt(encrypted)
    }

    /**
     * @param str The string you want to XOR decrypt.
     * @param key The encryption key.
     */
    public static decrypt(str: string, key: number): string {
        const encrypted = Base64.decrypt(str)
        return XOR.base(encrypted, key)
    }
}