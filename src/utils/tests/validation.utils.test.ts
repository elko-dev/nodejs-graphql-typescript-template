import {
    isValidEmail
} from '../validation.utils';
describe('ValidationUtils', () => {
    describe('isValidEmail', () => {
        it('Is not valid email', async () => {
            const email = isValidEmail('d.dd.dd');
            expect(email).toEqual(false);
        });
    });
    describe('isValidEmail', () => {
        it('Is valid email', async () => {
            const email = isValidEmail('c.porth@elko.dev');
            expect(email).toEqual(true);
        });
    });
});