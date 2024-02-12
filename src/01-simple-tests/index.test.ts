import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const payload = { a: 4, b: 2, action: Action.Add };
    expect(simpleCalculator(payload)).toEqual(6);
  });

  test('should subtract two numbers', () => {
    const payload = { a: 4, b: 2, action: Action.Subtract };
    expect(simpleCalculator(payload)).toEqual(2);
  });

  test('should multiply two numbers', () => {
    const payload = { a: 4, b: 2, action: Action.Multiply };
    expect(simpleCalculator(payload)).toEqual(8);
  });

  test('should divide two numbers', () => {
    const payload = { a: 4, b: 2, action: Action.Divide };
    expect(simpleCalculator(payload)).toEqual(2);
  });

  test('should exponentiate two numbers', () => {
    const payload = { a: 4, b: 2, action: Action.Exponentiate };
    expect(simpleCalculator(payload)).toEqual(16);
  });

  test('should return null for invalid action', () => {
    const payload = { a: 4, b: 2, action: 'ad' };
    expect(simpleCalculator(payload)).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const payload = { a: 4, b: '2', action: Action.Add };
    expect(simpleCalculator(payload)).toBeNull();
  });
});
