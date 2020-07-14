
import { Effect, Reducer } from 'umi';
import { DemoTestData } from './data';
import { apiFn } from './service';


// 对页面暴露参数
export interface ConnectState {
    demoTest: DemoTestState // 自己定义
}

export interface DemoTestState {
    data?: DemoTestData // 自己定义
}

export interface DemoTestModalType {
    namespace: string;
    state: DemoTestState;
    effects: {
        fn1: Effect;
    };
    reducers: {
        fn2: Reducer<DemoTestState>;
    };
}

const DemoTestModal: DemoTestModalType = {
    namespace: "demoTest", // 自己定义
    state: {
        data: {}
    },
    effects: {
        * fn1({ payload }, { call, put }) {
            let response = yield call(apiFn, payload);
            if (response.status === 200) {
                yield put({
                    type: 'fn2',
                    payload: response.data,
                });
            }
        },
    },
    reducers: {
        fn2(state, action) {
            return {
                ...state,
                data: action.payload,
            };
        },
    },
};

export default DemoTestModal;

