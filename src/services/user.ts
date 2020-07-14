import request from '@/utils/request';

export interface LoginParams {

}

// 登录
export async function apiLogin(params: LoginParams) {
    return request('', {
        method: 'post',
        params,
    });
}
