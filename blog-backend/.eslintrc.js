module.exports = {
    "extends" : "airbnb-base",
    "settings": {
        "ipmort/resolver": {
            node: { paths: [path.resolve('./src')] }
        },
    },
    "rules" : {
        "no-unused-vars" : 1,
        "comma-dangle" : 0,
        "eol-last" : 0,
        "no-console" : 0
    }
};