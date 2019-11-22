module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-preset-env': {
            stage: 2,
            features: {
                'nesting-rules': true,
                'custom-media-queries': true,
            },
        },
        'autoprefixer': {},
        'postcss-flexbugs-fixes': {},
        'css-mqpacker': {},
        // 'cssnano': options.env === 'production' ? options.cssnano : false,
    },
};


