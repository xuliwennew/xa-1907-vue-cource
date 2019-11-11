
// step3 nodejs  3000
// express + handlebars / vue
// koa2 express koa2 es6
const express = require("express")
const router = express.Router()
var server = express()


//jsp asp.net php python express koa
router.get("/",(req,res)=>{
    // step1 : 创建一个vue 实例
    const Vue = require("vue")

    let app = new Vue({
        template:'<h1>hello vue server render</h1>'
    })


   //step2: 使用vue-server-renderer把app生成为html
    const render = require("vue-server-renderer").createRenderer()

    render.renderToString(app,(err,html)=>{
        console.log(html)
        res.send(html)
    })

})

server.use("/",router)

server.listen(3000,()=>{
    console.log("server is ready on port 3000")
})



