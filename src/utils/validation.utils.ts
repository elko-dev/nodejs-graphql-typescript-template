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
