import Vue from "vue"
import app from "./app"


let bus = new Vue();

Vue.prototype.$bus = bus;


new Vue({
    el:"#app",
    render(h){
        return h(app)
    }
})
