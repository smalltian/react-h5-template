const fs = require('fs')
const path = require('path')
const baseUrl = path.resolve(__dirname, '../src')

// 将 base-case 转为 PascalCase
const getPascalCase = str => {
    let arr = str.split('-')
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1)
    }
    return arr.join('')
}

// 获取变量名
const getbasePascal = str => {
    let arr = str.split('-')
    for (let i = 0; i < arr.length; i++) {
        if(i>0){
            arr[i] = arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1)
        }
    }
    return arr.join('')
}

const dirName = process.argv[2]
const fcapPirname = dirName.substring(0, 1).toUpperCase() + dirName.substring(1)
const capPirName = getPascalCase(String(fcapPirname))
const lessName = dirName.replace(/-/g, '_')
const varName = getbasePascal(String(dirName))
console.log(dirName, fcapPirname, capPirName, lessName,varName)

if (!dirName) {
    console.log('====文件名称不能为空====')
    process.exit(1)
}

// 创建 tsx page 模版
const pageTep = `
import React from 'react'
import { connect, ConnectProps } from 'umi'
import { ConnectState } from './model'
import styles from './index.less'

export interface ${capPirName}Props extends Partial<ConnectProps> {

}

const ${capPirName}:React.FC<${capPirName}Props> = props => {
    return (
        <div>
            <h1 className={styles.${lessName}}>${capPirName}</h1>
        </div>
    )
}

export default connect(({ ${varName} }: ConnectState) => ({${varName} }))(${capPirName})

`

// less模版
const lessTep = `
.${lessName}{
    width: 100%;
}
`

// data模版
const dataTep = `
export interface ${capPirName}Data {

}

export interface ParamsData {

}

`

// service模版
const serviceTep = `
import request from '@/utils/request';
import { ParamsData } from './data';

export async function apiFn(params: ParamsData) {
    return request('/api/xxx', {
        method: 'get',
        params,
    });
}

`

// model模版
const modelTep = `
import { Effect, Reducer } from 'umi';
import { ${capPirName}Data } from './data';
import { apiFn } from './service';


// 对页面暴露参数
export interface ConnectState {
    ${varName}: ${capPirName}State // 自己定义
}

export interface ${capPirName}State {
    data?: ${capPirName}Data // 自己定义
}

export interface ${capPirName}ModalType {
    namespace: string;
    state: ${capPirName}State;
    effects: {
        fn1: Effect;
    };
    reducers: {
        fn2: Reducer<${capPirName}State>;
    };
}

const ${capPirName}Modal: ${capPirName}ModalType = {
    namespace: "${varName}", // 自己定义
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

export default ${capPirName}Modal;

`

// 创建文件夹
fs.mkdirSync(`${baseUrl}/pages/${capPirName}`)
// 打开文件夹
process.chdir(`${baseUrl}/pages/${capPirName}`)
fs.writeFileSync(`index.tsx`, pageTep)
fs.writeFileSync(`model.ts`,modelTep)
fs.writeFileSync(`index.less`,lessTep)
fs.writeFileSync(`service.ts`,serviceTep)
fs.writeFileSync(`data.d.ts`,dataTep)


