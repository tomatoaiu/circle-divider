# Circle-Divider

## Usage
```js
import { circleDivider } from 'circle-Divider'

const divide = circleDivider({ divideCount: 4, offset: 0 });
```

## Result 
n(divideCount), offset=0
```
n = 1: -180~179
n = 2:   -90~89, 90~179: -91~-180
n = 3:   -60~59, 60~179, -61~-180
n = 4:   -45~44, 45~134,  135~179:-136~-180, -46~-135
n = 5:   -36~35, 36~107,  108~179, -37~-108, -109~-180
```
