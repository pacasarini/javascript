function gets() {
    return 10;
}

function print(texto) {
    console.log(texto);
}

//module.exports.gets = gets;     -> //fariamos assim se fosse somente uma função

module.exports = { gets, print };