const gd = require('../dist/index').default

async function a() {
    const a = await gd.getTopArtists()
    console.log(a)
}

a()