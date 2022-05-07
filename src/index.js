import Hello from "./components/hello/index.js";
import Test from "./components/test/index.js";
function install(Vue) {
    Vue.use(Hello);
    Vue.use(Test);
}

/***
在es模块中， 能被按需引入的变量需要用这些方式导出：
export const a = 1
export function a(){}
export { a, b }
而不能使用export default
***/

export {
    Hello,
    Test
};

export default install;  //umd
