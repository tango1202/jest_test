import { plus, minus } from '../src/operator'; // 테스트할 모듈. 확장자를 안붙여도 됩니다.

describe('other 테스트', () => { // 테스트 범주
    it('plus() 테스트', () => { // 테스트케이스
        expect(plus(1, 2)).toBe(3);
    });
});