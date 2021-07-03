import client from './Client';

export const getRedisValue = (key: string): Promise<string | null> => {
    return new Promise(async (resolve, reject) => {
        try {
            const reply: any = await client.get(key);
            resolve(reply);
        } catch (error) {
            reject(error);
        }
    });
}

export const setRedisValue = (key: string, value: string) => {
    return new Promise(async (resolve, reject) => {
        try {
            const reply: any = await client.set(key, value);
            resolve(reply);
        } catch (error) {
            reject(error);
        }
    });
}

export const delRedisKey = (key: string) => {
    return new Promise(async (resolve, reject) => {
        try {
            const reply: any = await client.del(key);
            resolve(reply);
        } catch (error) {
            reject(error);
        }
    });
}

export const popTask = () => new Promise(resolve => client.blpop(TASK_NAME, 1000, (err, reply) => resolve(reply[1])));

export const TASK_NAME: string = "localTask1"
export const TASK_AMOUNT: number = 20