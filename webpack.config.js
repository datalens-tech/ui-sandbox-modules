const path = require('path');

const entries = ['d3-chord/v3.0.1', 'd3/v7.9.0'];

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
            acc[entry] = `./src/entries/${entry.replace('/', '_')}.ts`;
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
