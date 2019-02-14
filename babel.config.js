module.exports = function config(api) {
    api.cache(true);

    return {
        presets: [
            ['@babel/preset-env', { useBuiltIns: 'entry' }],
            '@babel/preset-react',
        ],
        plugins: [
            [
                '@babel/plugin-proposal-class-properties',
                {
                    loose: true,
                },
            ],
            '@babel/plugin-proposal-object-rest-spread',
        ],
    };
};