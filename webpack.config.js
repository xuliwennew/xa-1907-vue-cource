const path = require("path")
const VueLoaderPlugin = require("vue-loader/lib/plugin")

module.exports = {
    mode:"development",
    entry:{
        app:"./single-components/main.js"
    },
    output:{
        filename:"app.bundle.js",
        path:path.resolve(__dirname,"single-components")
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
            }
        ]
    },
    plugins: [
       new VueLoaderPlugin()
    ]
}
