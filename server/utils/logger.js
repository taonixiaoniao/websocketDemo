// const log4j = require('log4js')
import log4j from 'log4js'

const levels = {
  'trace': log4j.levels.TRACE,
  'debug': log4j.levels.DEBUG,
  'info': log4j.levels.INFO,
  'warn': log4j.levels.WARN,
  'error': log4j.levels.ERROR,
  'fatal': log4j.levels.FATAL
}

// log4j配置
log4j.configure({
  appenders: {
    console: { type: 'console' },
    info: {
      type: 'file',
      filename: 'logs/info',
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true      // 设置文件名称为 filename + pattern
    },
    error: {
      type: 'dateFile',
      filename: 'logs/err',
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true      // 设置文件名称为 filename + pattern
    }
  },
  categories: {
    default: {
      appenders: ['console'],
      level: 'debug'
    },
    info: {
      appenders: ['info', 'console'],
      level: 'info'
    },
    error: {
      appenders: ['error', 'console'],
      level: 'error'
    }
  }
})

/**
 * 日志输出 level为bug
 * @param { string } content
 */
export const debug = ( content ) => {
  let logger = log4j.getLogger('debug')
  logger.level = levels.debug
  logger.debug(content)
}

/**
* 日志输出 level为info
* @param { string } content
*/
export const info = ( content ) => {
  let logger = log4j.getLogger('info')
  logger.level = levels.info
  logger.info(content)
}

/**
* 日志输出 level为error
* @param { string } content
*/
export const error = ( content ) => {
  let logger = log4j.getLogger('error')
  logger.level = levels.error
  logger.error(content)
}

export default {
  debug,
  info,
  error
}