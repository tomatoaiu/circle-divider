import { circleDivider } from '../src/main'

describe('circle divider', () => {
  test('1 is -180 to 179', () => {
    expect(circleDivider({ divideCount: 1, offset: 0 }))
      .toEqual(
        [
          { min: -180, max: 179, index: 1 }
        ]
      );
  });

  test('2 is -90 to 89, 90 to 179 and -180 to -91', () => {
    expect(circleDivider({ divideCount: 2, offset: 0 }))
      .toEqual(
        [
          { min:  -90, max:   89, index: 1 },
          { min:   90, max:  179, index: 2 },
          { min: -180, max:  -91, index: 2 }
        ]
      );
  });

  test('3 is -60 to 59, 60 to 179, -180 to -61', () => {
    expect(circleDivider({ divideCount: 3, offset: 0 }))
      .toEqual(
        [
          { min:  -60, max:  59, index: 1 },
          { min:   60, max: 179, index: 2 },
          { min: -180, max: -61, index: 3 }
        ]
      );
  });

  test('4 is -45 to 44, 45 to 134, 135 to 179 and -180 to -136, -135 to -46', () => {
    expect(circleDivider({ divideCount: 4, offset: 0 }))
      .toEqual(
        [
          { min:  -45, max:   44, index: 1 },
          { min:   45, max:  134, index: 2 },
          { min:  135, max:  179, index: 3 },
          { min: -180, max: -136, index: 3 },
          { min: -135, max:  -46, index: 4 }
        ]
      );
  });

  test('5 is -36 to 35, 36 to 107, 108 to 179, -180 to -109, -108 to -37', () => {
    expect(circleDivider({ divideCount: 5, offset: 0 }))
      .toEqual(
        [
          { min:  -36, max:   35, index: 1 },
          { min:   36, max:  107, index: 2 },
          { min:  108, max:  179, index: 3 },
          { min: -180, max: -109, index: 4 },
          { min: -108, max:  -37, index: 5 }
        ]
      );
  });

  test('offset -90 and 2 is -180 to -1, 0 to 179', () => {
    expect(circleDivider({ divideCount: 2, offset: -90 }))
      .toEqual(
        [
          { min: -180, max:  -1, index: 1 },
          { min:    0, max: 179, index: 2 }
        ]
      );
  });

  test('offset -90 and 4 is -135 to -46, -45 to 44, 45 to 134, 135 to 179 and -180 to -136', () => {
    expect(circleDivider({ divideCount: 4, offset: -90 }))
      .toEqual(
        [
          { min: -135, max:  -46, index: 1 },
          { min:  -45, max:   44, index: 2 },
          { min:   45, max:  134, index: 3 },
          { min:  135, max:  179, index: 4 },
          { min: -180, max: -136, index: 4 }
        ]
      );
  });
});
