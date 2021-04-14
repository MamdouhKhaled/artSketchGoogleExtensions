const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');

const config = {
    // devtool: 'source-map',
    entry: {
        popup: path.join(__dirname, "src", "js", "popup.js"),
        options: path.join(__dirname, "src", "js", "options.js"),
        background: path.join(__dirname, "src", "js", "background.js"),
        tabs: path.join(__dirname, "src", "js", "tabs.js")
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: "assets/js/[name].js"
    },
    devServer: {
        index: 'tabs.html',
        writeToDisk: true
    },
    module: {
        rules: [{
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer()]
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: "assets/images",
                    }
                }, ],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            root: path.join(__dirname, 'build')
        }),
        new CopyPlugin({
            patterns: [{
                    from: 'src/icon',
                    to: 'assets/icon'
                },
                {
                    from: 'src/manifest.json',
                    to: `${__dirname}/build`
                },
            ],
        }),
        new HtmlWebPackPlugin({
            template: path.join(__dirname, "src", "popup.html"),
            filename: 'popup.html',
            chunks:['popup']
        }),
        new HtmlWebPackPlugin({
            template: path.join(__dirname, "src", "background.html"),
            filename: 'background.html',
            chunks:['background']
        }),
        new HtmlWebPackPlugin({
            template: path.join(__dirname, "src", "options.html"),
            filename: 'options.html',
            chunks:['options']
        }),
        new HtmlWebPackPlugin({
            template: path.join(__dirname, "src", "tabs.html"),
            filename: 'tabs.html',
            chunks:['tabs']
        }),
        new MiniCssExtractPlugin({
            filename: "assets/css/[name].css"
        })
    ]
}

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = 'source-map';
    }
    return config;
};