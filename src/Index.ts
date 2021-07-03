import taskHandler from './taskHandler'
import client from './Client'

client.on('connect', () => {
    console.log("Reids connected.")
})

client.on('ready', async () => {
    console.log("Redis is ready.")
    await taskHandler();
})

client.on('error', e => {
    console.error(`Redis Error:${e}`)
})