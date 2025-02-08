import { Hono, type Context } from "hono";

export const newsRouter = new Hono()

newsRouter.get('/', (c: Context) => {
    const res = c.json({'test': 'test'}) 
    
    return res
})