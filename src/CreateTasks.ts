import { TASK_NAME, TASK_AMOUNT, setRedisValue, delRedisKey } from './Utils'
import client from './Client'

client.on('ready', async () => {
    try {
        await delRedisKey(TASK_NAME);

        for (let i = TASK_AMOUNT; i > 0; i--) {
            await client.lpush(TASK_NAME, `task-${i}`)
        }

        // callback
        client.lrange(TASK_NAME, 0, TASK_AMOUNT, async (err, reply) => {
            if (err) {
                throw new Error(err.message);
            }
            console.log(reply)
            process.exit()
        })

    } catch (error) {
        console.error(error)
    }
})