const path = require('path');
module.exports = {
    module: {
        loaders: [
            {
                loader: "babel-loader",

                include: [
                    path.resolve(__dirname, "src"),
                ],

                test: /\.js?$/,

                // Options to configure babel with
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-object-rest-spread']
                }
            },
        ]
    },
    entry: {
        cpanel: ["./src/control-panel.js"],
        board: ["./src/message-board.js"],
        tasks: ["./src/tasks.js"]
    },
    output: {
        path: path.resolve(__dirname, "public"),
        publicPath: "/assets/",
        filename: "[name].bundle.js"
    },
    // entry: {
    //     a: "./a",
    //     b: "./b",
    //     c: ["./c", "./d"]
    // },
    // output: {
    //     path: path.join(__dirname, "public"),
    //     filename: "[name].entry.js"
    // },
    devServer: { inline: true },
    devtool: 'source-map',

}