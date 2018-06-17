export const DEV = 'development'
export const DEV_LOCA = 'development_location'
export const PRO = 'production'

const env = DEV

let host
let weibo_host
if (env === PRO) {
    host = 'https://res.wondershare.cn'
    weibo_host = 'http://weibo.wondershare.cn'

    global.console = {
        info: () => {},
        log: () => {},
        warn: () => {},
        debug: () => {},
        error: () => {},
    }
} else if (env === DEV) {
    host = 'https://rest.wondershare.cn'
    weibo_host = 'https://weibo57.wondershare.cn'
    // weibo_host = 'https://192.168.10.46'
    // weibo_host = 'http://weibo.wondershare.cn'
} else {
    // host = 'http://127.0.0.1:3000'
    host = 'http://10.11.4.123:3000'
    // host = 'http://10.12.15.68:3000'

    weibo_host = 'https://weibo57.wondershare.cn'
}

export default {

    // 应用版本号
    version: '2.3.8',

    // 运行环境
    env,

    weather_key: 'fa3a7fbef33a43ab8f6a774cbf817457',

    server: {
        host,
    },

    weibo: {
        host: weibo_host,
        avatar: '/storage/avatars/',
    },
}
