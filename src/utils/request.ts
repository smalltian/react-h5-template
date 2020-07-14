/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */

import { extend } from 'umi-request';
import { Toast } from 'antd-mobile';
import LoadingCom from '@/components/Loading';
import { getToken } from '@/utils/util';

const codeMessage: any = {
    200: '服务器成功返回请求的数据。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '登录失效，请重新登录。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
};

const request = extend({
    // prefix: '/api/v1',//前缀
    // errorHandler, //默认错误处理
    credentials: 'include', //默认请求是否带上cookie
    timeout: 90000, // 超时
});

interface RequestOptions {
    url: string;
    options: any;
}

let defaultOptions = {
    loading: true,
    notToast: false,
};

request.interceptors.request.use(
    (url, options): RequestOptions => {
        let headers: any = {
            'Content-Type': 'application/json',
        };

        // @ts-ignore
        if (options.loading) {
            // @ts-ignore
            defaultOptions.loading = options.loading;
        } else {
            defaultOptions.loading = true;
        }
        // @ts-ignore
        defaultOptions.notToast = !!options.notToast;

        if (getToken()) {
            headers.Authorization = getToken();
        }
        options.headers = headers;
        if (defaultOptions.loading) {
            LoadingCom.loading();
        }

        return {
            url: `${url}`,
            options: { ...options, interceptors: true },
        };
    },
    { global: true },
);

request.interceptors.response.use(async response => {
    if (defaultOptions.loading) {
        LoadingCom.close();
    }
    const data = await response.clone().json();
    if (response.status !== 200) {
        errorHandler({ response });
    }
    if (response.status === 200 && data.code && Number(data.code) !== 0) {
        if (!defaultOptions.notToast) {
            Toast.fail(data.message);
        }
    }
    return response;
});

const errorHandler = (error: { response: Response }): Response => {
    const { response } = error;
    const errorMessage = codeMessage[response.status];
    if (!defaultOptions.notToast) {
        Toast.fail(errorMessage);
    }
    if (response.status === 401) {

    }
    return response;
};

export default request;
