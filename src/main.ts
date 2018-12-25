export function circleDivider ({ divideCount = 1, offset = 0 }: Arg): Result[] {
  const scale = 360 / divideCount;

  const res = [];

  [...Array(divideCount)].forEach((_: Object, i: number) => {
    const min = i * scale - scale / 2 + offset;
    const max = i * scale + scale / 2 - 1 + offset;

    if (min < 180 && max <= 179) {
      res.push({ min, max, index: i + 1 });
    } else if (min >= 180) {
      res.push({ min: min - 360, max: max - 360, index: i + 1 });
    } else {
      res.push({ min, max: 179, index: i + 1 });
      res.push({ min: -180, max: max - 360, index: i + 1 });
    }
  });

  return res;
}

type Result = {
  min: number;
  max: number;
  index: number;
}

type Arg = {
  divideCount?: number;
  offset?: number;
}
