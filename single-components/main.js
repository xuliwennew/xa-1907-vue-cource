import Vue from "vue"
import hello from "./hello"


new Vue({
    el:"#app",
    render(h){
        return h(hello)
    }
})
