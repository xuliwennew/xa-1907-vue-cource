import Vue from "vue"
import carts from "./views/carts"


let bus = new Vue();

Vue.prototype.$bus = bus;


new Vue({
    el:"#app",
    render(h){
        return h(carts)
    }
})
