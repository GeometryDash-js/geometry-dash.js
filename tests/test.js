const gd = require('../dist/index').default

async function a() {
    const song = await gd.getSongInfo('533927')
    console.log(song)
}

a()