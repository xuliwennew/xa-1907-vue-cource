const path = require("path")
const VueLoaderPlugin = require("vue-loader/lib/plugin")

module.exports = {
    mode:"development",
    entry:{
        app:"./vue3x-api/main.js"
    },
    output:{
        filename:"app2.bundle.js",
        path:path.resolve(__dirname,"vue3x-api")
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
