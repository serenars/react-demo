export const DEV = 'development'
export const PRO = 'production'

const env = DEV

let host
if (env === PRO) {
    host = 'http://120.77.171.67:8080'
} else if (env === DEV) {
    host = 'http://120.77.171.67:8080'
} else {
    host = 'http://120.77.171.67:8080'
}

export default {

    // 应用版本号
    version: '1.0.0',

    // 运行环境
    env,

    server: {
        host,
    },
}
