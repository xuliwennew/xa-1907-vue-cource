import Vue from "vue"
import main from "./views/main"


new Vue({
    el:"#app",
    render(h){
        return h(main)
    }
})
