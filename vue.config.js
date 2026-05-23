const path = require("path");

module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
        config.module
            .rule("markdown")
            .test(/\.md$/)
            .use("local-markdown-loader")
            .loader(path.resolve(__dirname, "build/markdown-loader.js"));
    }
}
