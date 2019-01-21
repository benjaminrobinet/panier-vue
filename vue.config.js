module.exports = {
    productionSourceMap: true,
    css: {
        // extract CSS in components into a single CSS file (only in production)
        extract: true,

        // enable CSS source maps?
        sourceMap: true,

        // Load global grid
        loaderOptions: {
            sass: {
                data: '@import "@/assets/style/scss/_grid.scss";'
            }
        }
    }
};