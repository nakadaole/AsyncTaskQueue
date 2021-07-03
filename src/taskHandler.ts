import { popTask } from './Utils'
import client from './Client'

function handleTask(task: string) {
    return new Promise<void>((resolve) => {
        setTimeout(async () => {
            console.log(`Handling task: ${task}...`);
            resolve();
        }, 1000)
    })
}

export default async function taskHandler() {
    const task: any = await popTask()
    await handleTask(task)
    // recursion
    await taskHandler()
}