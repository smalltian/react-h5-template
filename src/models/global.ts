import { Effect, Reducer } from '@@/plugin-dva/connect'

export interface GlobalModalState {
    appName?: string
}

export interface GlobalModelType {
    namespace: string;
    state: GlobalModalState;
    effects: {
        fn1: Effect;
    };
    reducers: {
        fn2: Reducer<GlobalModalState>;
    };
}

const GlobalModel: GlobalModelType = {
    namespace: 'global',
    state: {
        appName: 'umi-h5'
    },
    effects: {
        * fn1({ payload }, { call, put }) {

        },
    },
    reducers: {
        fn2(state, action) {
            return {
                ...state,
                setting: action.payload,
            }
        },
    },

}


export default GlobalModel
