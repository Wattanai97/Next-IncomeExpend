import {numadd,numsub} from './app/Testfunction'
import Num from './app/Testfunction';
const {Up,Down} = Num;

test('No.1 adds 2 + 2 to equal 4', () => {
    expect(numadd(2, 2)).toBe(4);
  });
  // 
test('No.2 adds 1 - 2 to equal -1', () => {
    expect(numsub(1, 2)).toBe(-1);
  });
test('No.3 adds 5 * 2 to equal 10', () => {
    expect(Up(5, 2)).toBe(10);
  });
test('No.4 adds 10 / 2 to equal 5', () => {
    expect(Down(10, 2)).toBe(5);
  });