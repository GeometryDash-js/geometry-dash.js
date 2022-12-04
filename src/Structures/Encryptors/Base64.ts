export default class Base64 {
    /**
     * @param str The string you want to encrypt.
     */
    public static encrypt(str: string): string {
        return Buffer.from(str).toString('base64').replace(/\//g, '_').replace(/\+/g, "-")
    }

    /**
     * @param str The string you want to decrypt
     */
    public static decrypt(str: string): string {
        return Buffer.from(str.replace(/\//g, '_').replace(/\+/g, '-'), 'base64').toString()
    }
}