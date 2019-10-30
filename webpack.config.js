const path = require("path")
const VueLoaderPlugin = require("vue-loader/lib/plugin")

module.exports = {
    mode:"development",
    entry:{
        app:"./vue-carts-demo/main.js"
    },
    output:{
        filename:"app.bundle.js",
        path:path.resolve(__dirname,"vue-carts-demo")
    },
    resolve: {
        extensions: [".js",".css",".vue"]
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                loaders:"style-loader!css-loader"
            },
            {
                test:/\.vue$/,
                loaders:"vue-loader"
            },
            {
                test:/\.(png|jpg|gif)$/,
                loaders:"url-loader"
            }
        ]
    },
    plugins: [
       new VueLoaderPlugin()
    ]
}
