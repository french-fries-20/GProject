/// <reference types="vite/client" />
//vue类型声明,让TS知道 .vue文件是什么
declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}