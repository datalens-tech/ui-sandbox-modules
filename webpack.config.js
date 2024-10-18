const path = require('path');

module.exports = {
    entry: {
        '@gravity-ui/date-utils/v2.3.0': {
            import: '@gravity-ui/date-utils.2.3.0',
        },
        '@gravity-ui/date-utils/v2.5.3': {
            import: '@gravity-ui/date-utils.2.5.3',
        }
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
};
