import storage from 'store';

export const setStorage = (key: string, val: any) => {
    storage.set(key, val);
};

export const getStorage = (key: string) => {
    const val = storage.get(key);
    if (val) {
        return val;
    } else {
        return false;
    }
};

export const removeStorage = (key: string) => {
    const val = storage.get(key);
    if (val) {
        storage.remove(key);
    }
};

export const clearStorage = () => {
    storage.clearAll();
};
