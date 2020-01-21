import Vue from "vue";
import App from "./App.vue";
import store from "./store/index";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

new Vue({
  el: "#app",
  store,
  render: h => h(App)
});
