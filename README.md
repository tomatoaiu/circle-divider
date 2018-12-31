# Circle-Divider

[![current npm version](https://img.shields.io/npm/v/circle-divider.svg)](https://www.npmjs.com/package/circle-divider)

## Usage
```js
import { circleDivider } from 'circle-divider'

const divide = circleDivider({ divideCount: 4, offset: 0 });
```

## Result 
n(divideCount), offset=0
```
n = 1: -180~179
n = 2:   -90~89, 90~179: -91~-180
n = 3:   -60~59,           60~179,           -61~-180
n = 4:   -45~44,           45~134,  135~179:-136~-180, -46~-135
n = 5:   -36~35,           36~107,            108~179, -37~-108, -109~-180
```

n = 4, offset = 0
```javascript
{ min:  -45, max:   44, index: 1 },
{ min:   45, max:  134, index: 2 },
{ min:  135, max:  179, index: 3 },
{ min: -180, max: -136, index: 3 },
{ min: -135, max:  -46, index: 4 }
```
