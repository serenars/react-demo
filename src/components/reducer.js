
import {createAction, handleActions} from 'redux-actions'

const init_state = {
    attend_info: {
        annualLeave: 0,
        attend: 0,
        avgHours: 0,
        lateTimes: 0,
        laterMinutes: 0,
        leaveHours: 0,
        needAttend: 0,
        oaSignTimes: 0,
        totalLeave: 0,
    },
}

// 员工个人考勤统计数据处理
export const _home_me_atten_data = createAction('_home_me_atten_data')

export default handleActions({
    [_home_me_atten_data]: (state, {payload}) => {
        return {
            ...state,
            attend_info: payload,
        }
    }
}, init_state)
