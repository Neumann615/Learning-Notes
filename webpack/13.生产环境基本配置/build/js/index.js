!function () {
    "use strict";
    const o = function (o, e) {
        return o + e
    }, e = o(2, 3);
    console.log(e), console.log(o(1, 2));
    const n = new Promise((o => {
        setTimeout((() => {
            o("哈哈哈，我是promise")
        }), 3e3)
    }));
    console.log(n)
}();