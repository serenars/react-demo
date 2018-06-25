import React from 'react'

import {
    message,
} from 'antd'

message.config({
    top: 100,
    duration: 3,
})

export default {
    success: (content, duration, onClose) => message.success(content, duration, onClose),
    error: (content, duration, onClose) => message.error(content, duration, onClose),
    info: (content, duration, onClose) => message.info(content, duration, onClose),
    warning: (content, duration, onClose) => message.warning(content, duration, onClose),
    warn: (content, duration, onClose) => message.warn(content, duration, onClose),
    loading: (content, duration, onClose) => message.loading(content, duration, onClose),
}
