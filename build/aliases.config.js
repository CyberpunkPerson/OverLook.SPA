const path = require('path');

const aliases = {
    '@': '../src',
    '@components': '../src/components',
    '@router': '../src/router',
    '@scss': '../src/assets/scss',
    '@img': '../src/assets/img',
    '@base': '../src/components/base',
    '@model': '../src/components/model',
    '@layout': '../src/components/layout',
    '@store' : '../src/store',
    '@utils' : '../src/utils',
    '@plugins' : '../src/plugins'
};

module.exports = {
    webpack: {}
};

for (const alias in aliases) {
    const aliasTo = aliases[alias];
    module.exports.webpack[alias] = resolvePath(aliasTo);
}

function resolvePath(_path) {
    return path.resolve(__dirname, _path);
}