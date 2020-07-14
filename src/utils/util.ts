import Cookies from 'js-cookie';
import { parse } from 'querystring';

export const TOKEN_KEY = 'Authorization';

export const setToken = (token: string) => {
    Cookies.set(TOKEN_KEY, token, { expires: 1 });
};

export const getToken = () => {
    const token = Cookies.get(TOKEN_KEY);
    if (token) return token;
    return false;
};

export const removeToken = () => {
    const token = Cookies.get(TOKEN_KEY);
    if (token) {
        Cookies.remove(TOKEN_KEY);
    }
};


// 获取参数
export const getPageQuery = () => parse(window.location.href.split('?')[1]);


// 获取url参数
export const getUrlParams = (name: string) => {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    const r = window.location.search.substr(1).match(reg);
    if (r != null)
        return decodeURIComponent(r[2]);
    return null;
};

// 判断是不是移动端
export const isMobile = () => {
    return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
};

// 是否为IOS
export const isAndroid = () => {
    const u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
        console.log(window);
        return true;
    }
    return false;
};

// 是否为安卓
export const isIos = () => {
    const u = navigator.userAgent;
    return u.indexOf('iPhone') > -1 || u.indexOf('iOS') > -1;
};

// 是否为微信
export const isWenxin = () => {
    return /MicroMessenger/i.test(navigator.userAgent);
};

export const getType = (value: any) => {
    if (value === null) return String(value);
    return typeof value === 'object'
        ? Object.prototype.toString.call(value).replace('[object ', '').replace(']', '').toLowerCase()
        : typeof value;
};


/**
 * 获取url参数
 * @param val
 */
export const getQueryParm = (val: any) => {
    if (!val) return false;
    const query = window.location.search.substring(1);
    const vars = query.split('&');
    // console.log(vars)
    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split('=');
        if (pair[0] === val) return pair[1];
    }
    return false;
};


/**
 * 时间格式转换
 * @param timestamp 13位时间戳
 * @param type 转换类型
 */
export const utilToTimeByStamp = (timestamp: string, type: string) => {
    if (!timestamp) {
        return null;
    }
    let result;
    let date = new Date(timestamp);
    let Y = date.getFullYear();
    let M =
        date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    switch (type) {
        case 'yyyy.MM.dd':
            result = `${Y}.${M}.${D}`;
            break;
        case 'yyyyMMdd':
            result = `${Y}${M}${D}`;
            break;
        case 'yyyy-MM-dd':
            result = `${Y}-${M}- ${D}`;
            break;
        case 'yyyy-MM-dd HH':
            result = `${Y}-${M}-${D} ${h}`;
            break;
        case 'yyyy-MM-dd HH:mm':
            result = `${Y}-${M}-${D} ${h}:${m}`;
            break;
        case 'yyyy-MM-dd HH:mm:ss':
            result = `${Y}-${M}-${D} ${h}:${m}:${s}`;
            break;
    }
    return result;
};
