// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

enum Matcher {
  'ToEqual' = 'toEqual',
  'ToBeNull' = 'toBeNull',
}

const testCases = [
  {
    a: 1,
    b: 2,
    action: Action.Add,
    expected: 3,
    matcher: Matcher.ToEqual,
  },
  {
    a: 4,
    b: 2,
    action: Action.Subtract,
    expected: 2,
    matcher: Matcher.ToEqual,
  },
  {
    a: 3,
    b: 2,
    action: Action.Multiply,
    expected: 6,
    matcher: Matcher.ToEqual,
  },
  {
    a: 10,
    b: 2,
    action: Action.Divide,
    expected: 5,
    matcher: Matcher.ToEqual,
  },
  {
    a: 10,
    b: 2,
    action: Action.Exponentiate,
    expected: 100,
    matcher: Matcher.ToEqual,
  },
  { a: 4, b: 2, action: 'x', expected: null, matcher: Matcher.ToBeNull },
  {
    a: 4,
    b: '2',
    action: Action.Add,
    expected: null,
    matcher: Matcher.ToBeNull,
  },
];

describe.each(testCases)(
  'simpleCalculator({a: $a, b: $b, action: $action})',
  ({ a, b, action, expected, matcher }) => {
    switch (matcher) {
      case Matcher.ToEqual:
        test(`should return ${expected}`, () => {
          expect(simpleCalculator({ a, b, action })).toEqual(expected);
        });
        break;
      case Matcher.ToBeNull:
        test(`should return ${expected}`, () => {
          expect(simpleCalculator({ a, b, action })).toBeNull();
        });
        break;
      default:
        throw new Error(`Unexpected Matcher - ${matcher}`);
    }
  },
);
