const path = require('path');

module.exports = {
    entry: {
        '@gravity-ui/date-utils/v2.3.0': {
            import: '@gravity-ui/date-utils.2.3.0',
        },
        '@gravity-ui/date-utils/v2.5.3': {
            import: '@gravity-ui/date-utils.2.5.3',
        },
        'd3-chord/v3.0.1': './src/entries/d3-chord_v3.0.1.ts',
        'd3/v7.9.0': './src/entries/d3_v7.9.0.ts',
    },
    mode: 'production',
    output: {
        globalObject: 'this',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        chunkFormat: 'commonjs',
        library: {
            type: 'global',
        },
    },
    resolve: {
        extensions: ['.ts', '.js'],
    }
};
