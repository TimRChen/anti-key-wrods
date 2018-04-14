# anti-key-words
To Anti any Dirty Words(zh/en).

[在线demo点击这里查看](https://timrchen.github.io/demo-item-display/test-anti/dist/)

## version 1.0.4
* 修复打包过程中抛出的异常.

## version 1.0.3
* 修复一些已知问题.

## version 1.0.0
* 支持多达33个脏词、25个独立脏字的过滤筛选

## How to start
```bash
$ npm install anti-key-words --save
```
or
```bash
$ npm i --save anti-key-words
```

## Usage
### ES6 `import`
```js
import AntiKeyWords from "anti-key-words";
let inputValue = ""; // .. any string (include dirty words)

// initialize antikeywords class.
let antiKeyWords = new AntiKeyWords(inputValue);

antiKeyWords.filterKeyWords();

console.log(antiKeyWords.outputString); // Hi, **
```
### CMD
```js
const AntiKeyWords = require("anti-key-words");

// usage like ES6..
```


## How to contribute
### 修改ts文件后集成js请执行:
```bash
$ npm run prepublishOnly
```
### 删除集成js文件
```bash
$ npm run clean
```
### 发布
```bash
$ npm publish
```

## Todo
* 替换符号自定义功能
* 关键词json文件自定义功能
* 优化过滤流程



## LICENSE

MIT © [TimRChen](https://github.com/TimRChen/anti-key-wrods/blob/master/LICENSE)