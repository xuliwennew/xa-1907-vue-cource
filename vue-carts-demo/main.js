import Vue from "vue"
import carts from "./views/carts"


new Vue({
    el:"#app",
    render(h){
        return h(carts)
    }
})
