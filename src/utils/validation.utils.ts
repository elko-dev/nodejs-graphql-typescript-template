
export type NullType = null | undefined;
export type Str = string | NullType;

export const isValidEmail = (email: string): boolean => {
    if (!!email) {
        const regex: RegExp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        const string: string = String(email).toLowerCase().trim();
        const match = regex.test(string) && string.includes('.') && string.includes('@');
        return match;
    } else {
        return false;
    }
};
export const isEmpty = (item: Str | object | any[]): boolean => {
    if (item) {
        if (typeof item === 'string') {
            try {
                const str = (item || '').trim();
                return str === '' || str.length === 0;
            } catch (e) {
                return true;
            }
        } else if (typeof item === 'object' && !Array.isArray(item)) {
            try {
                const obj = JSON.stringify(item);
                return obj === JSON.stringify({});
            } catch (e) {
                return true;
            }
        } else if (typeof item === 'undefined') {
            return true;
        } else if (Array.isArray(item)) {
            try {
                return Array.from(item).length === 0;
            } catch (e) {
                return true;
            }
        } else {
            throw new Error('Unable to find empty object');
        }
    } else {
        return true;
    }
};
