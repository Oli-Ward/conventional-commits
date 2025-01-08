import logger from "./logger"

export function hello(who: string = "world"): string {
    logger.info(`Hello, ${who}!`)
    return `Hello ${who}!`
}

hello("world")
