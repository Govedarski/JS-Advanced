function requestValidator(obj) {
    const VALID_METHODS = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const VALIDATION_URI_REGEX = new RegExp('(^[\\w.]+$)|^\\*$');
    const VALID_VERSIONS = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const INVALID_MASSAGE_SYMBOLS = ['<', '>', '&', '\'', '"', '\\'];

    const isValid = {
        method: (obj) => VALID_METHODS.includes(obj.method),
        uri: (obj) => VALIDATION_URI_REGEX.test(obj.uri),
        version: (obj) => VALID_VERSIONS.includes(obj.version),
        message: (obj) => !INVALID_MASSAGE_SYMBOLS.some(symbol => obj.message.includes(symbol)),
    };

    for (const prop in isValid) {
        if (!obj.hasOwnProperty(prop) || !isValid[prop](obj)) {
            throw Error(`Invalid request header: Invalid ${prop === 'uri' ? 'URI' : prop[0].toUpperCase() + prop.slice(1)}`);
        }
    }

    return obj;
}

console.log(requestValidator({
    method: 'GET',
    uri: '',
    version: 'HTTP/1.1',
    message: ''
}));

console.log(requestValidator({
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'

}));
console.log(requestValidator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}));