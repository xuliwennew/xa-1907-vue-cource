const path = require("path")

module.exports = {
    mode:"development",
    entry:{
        app:"./webpack-demo/js/main.js"
    },
    output:{
        filename:"app.bundle.js",
        path:path.resolve(__dirname,"webpack-demo/js")
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                loaders:"style-loader!css-loader"
            }
        ]
    }
}
