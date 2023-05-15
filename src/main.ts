import {createApp} from 'vue'
import App from './App.vue'
// 1. 引入你需要的组件
import {Button, Icon, NavBar, Tabbar, TabbarItem} from 'vant';

const app = createApp(App)
// 顺序不能反过来
app.use(Button);
app.use(NavBar);
app.use(Icon);
app.use(Tabbar);
app.use(TabbarItem);
app.mount('#app')


