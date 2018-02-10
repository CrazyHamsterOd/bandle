module.exports = {
    entry: "./app.js",
    output: {
        filename: "bundle.js"
    },
    module: {
        rules:[
            { test: /\.hbs$/, use: "html-loader"}
        ] 
    }
}