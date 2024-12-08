import Koa from 'koa'
import http from 'http'
import { Server } from 'socket.io'
import logger from './utils/logger.js'

const app = new Koa()
const server = http.createServer(app)

const io = new Server(server)

io.on('connection', socket => {
  logger.info('有位靓仔进入了聊天室：', socket)
  socket.on('disconnect', () => {
    logger.info('靓仔离开了聊天室')
  })
})

server.listen(3306, () => {
  logger.info('服务器已启动')
})

// app.use(async ctx => {
//   ctx.body = 'Hello World'
// })

// app.listen()