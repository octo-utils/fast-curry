## fast-curry

[![npm](https://img.shields.io/npm/v/fast-curry.svg?style=flat-square)](https://www.npmjs.com/package/fast-curry)

[![npm](https://nodei.co/npm/fast-curry.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/fast-curry)

simple fast curry implementation inspire by [`ramda`](https://github.com/ramda/ramda) and [`@riim/curry`](https://github.com/Riim/curry)

## Usage

```javascript
var curry = require('fast-curry');

var sum = curry(function(a, b) { return a + b; });
var addOne = sum(1); // or sum(curry.__, 1)

console.log(addOne(2));
// => 3
```

## Benchmark (nodejs v7.3.0 | macOS | 2.2 GHz Intel Core i7)

Benchmark sources can be found in the [folder](https://github.com/octo-utils/fast-curry/blob/master/benchmark/)

Create - `sum = curry((a, b) => a + b)` - least important result
Lift - `addOne = sum(1)`
Call - `addOne(2)` - much more important result than the previous two

Results in K ops/sec.

| Library                                                              | Create     | Lift       | Call       |
|----------------------------------------------------------------------|------------|------------|------------|
| fast-curry                                                           | 11,381,182 | 8,833,228  | 19,496,006 |
| [ramda/R.curry](http://ramdajs.com/docs/#curry)                      | 7,247,796  | 8,294,710  | 12,819,816 |
| [@riim/curry](https://github.com/Riim/curry)                         | 3,460,089  | 7,929,335  | 3,605,139  |
| [curry](https://www.npmjs.com/package/curry)                         | 14,404,001 | 2,596,561  | 1,665,675  |
| [cast-curry](https://www.npmjs.com/package/cast-curry)               | 8,831,008  | 1,127,958  | 2,498,141  |
| [just-curry](https://www.npmjs.com/package/just-curry)               | 5,008,961  | 1,555,059  | 1,453,120  |
| [auto-curry](https://www.npmjs.com/package/auto-curry)               | 3,673,706  | 1,487,674  | 1,230,014  |
| [light-curry](https://www.npmjs.com/package/light-curry)             | 23,778,508 | 5,122,704  | 2,037,435  |
| [@thisables/curry](https://www.npmjs.com/package/@thisables/curry)   | 751,430    | 1,466,132  | 976,244    |
| [@ibrokethat/curry](https://www.npmjs.com/package/@ibrokethat/curry) | 16,650,913 | 2,270,749  | 5,113,183  |
| [instant-curry](https://www.npmjs.com/package/instant-curry)         | 25,928,526 | 3,904,823  | 13,582,536 |
| [fj-curry](https://www.npmjs.com/package/fj-curry)                   | 15,964,714 | 3,035,876  | 2,264,332  |
| [curry-d](https://www.npmjs.com/package/curry-d)                     | 10,620,788 | 2,122,769  | 1,735,257  |

## Reference

- [bluebird | Optimization-killers](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers) ([译文](http://dev.zm1v1.com/2015/08/19/javascript-optimization-killers/))
- [Bluebird 是如何做到比原生实现更快的？](http://mp.weixin.qq.com/s?__biz=MzA4NjE3MDg4OQ==&mid=2650964223&idx=1&sn=f2c37c05fb6ad370a67c59ca745bd7bf)

