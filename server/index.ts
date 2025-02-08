import 'dotenv'
import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { serveStatic } from 'hono/bun'

import mongoose from 'mongoose'

import { newsRouter } from './src/routes/newsRouter'


//Настройки
const app = new Hono()
    .use("*", logger())
    .get('*', serveStatic({ root:'././frontend/dist'}))
    .get('*', serveStatic({ path:'././frontend/dist/index.html'}))

//Routes
const apiRoutes = app.basePath('/api')
    .route('/posts', newsRouter)



//Запуск сервера
const server = Bun.serve({
    port: process.env.PORT || 3000,
    fetch: app.fetch
})
console.log(`Сервер запущен по адресу -> http://localhost:${server.port} \n \nApi -> http://localhost:${server.port}/api \n`);

//Запуск базы данных
async function StartDB () {
    if(process.env.URL_DATABASE){
        try{
            return await mongoose.connect(process.env.URL_DATABASE).then(
                () => {
                    console.log(`База данных запущена`);
                }
            )
        }
        catch (err){
            return console.log('Ошибка базыданных -', err)
        }
    } 
    else return console.log('Env строка базы данных не найдена...')
}

StartDB()
    
export type ApiRoutes = typeof apiRoutes