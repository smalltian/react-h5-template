
import request from '@/utils/request';
import { ParamsData } from './data';

export async function apiFn(params: ParamsData) {
    return request('/api/xxx', {
        method: 'get',
        params,
    });
}

