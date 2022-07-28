import '../css/index.less';
import '../font/iconfont.css';

const add = function add(x, y) {
  return x + y;
};

const b = add(2, 3);
console.log(b);
console.log(add(1, 2));
const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('哈哈哈，我是promise');
  }, 3000);
});
console.log(promise);
