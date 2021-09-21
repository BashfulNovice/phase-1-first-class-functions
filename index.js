function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return function helloLab (labName) {
        console.log(`Hello there, ${labName}.`)
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('Ooooooo Spooky invisible function!')
    }
}
