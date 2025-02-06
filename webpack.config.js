const path = require('path');

const entries = ['d3-chord/v3.0.1', 'd3/v7.9.0', 'd3-sankey/v0.12.3', 'dom-api'];

module.exports = {
    context: __dirname,
    entry: {
        '@gravity-ui/date-utils/v2.3.0': {
            import: '@gravity-ui/date-utils.2.3.0',
        },
        '@gravity-ui/date-utils/v2.5.3': {
            import: '@gravity-ui/date-utils.2.5.3',
        },
        ...entries.reduce((acc, entry) => {
            acc[entry] = path.resolve(__dirname, `./src/entries/${entry.replace('/', '_')}.js`);
            return acc;
        }, {}),
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
