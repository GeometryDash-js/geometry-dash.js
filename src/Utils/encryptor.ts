import sha1 from 'sha1'

class Encryptor {

    public chk(str: string, salt: string, key: number) {
        return this.xor.encrypt(
            sha1(str + salt), key
        )
    }

    public xor = {

        encrypt: function (str: string, key: number) {
            const first = String.fromCodePoint(
                ...str.split('')
                    .map(
                        (char, x) => { 
                            return char.charCodeAt(0) ^ key.toString().charCodeAt(x % key.toString().length)
                        }
                    )
                )
            return Buffer.from(first).toString('base64').replace(/\//g, '_').replace(/\+/g, '-')
        }

    }

    public base64 = {

        encrypt: function (str: string) {
            return Buffer.from(str).toString('base64').replace(/\//g, '_').replace(/\+/g, "-")
        },

        decrypt: function (str: string) {
            return Buffer.from(str.replace(/\//g, '_').replace(/\+/g, '-'), 'base64').toString()
        }
    }

}

export default new Encryptor()