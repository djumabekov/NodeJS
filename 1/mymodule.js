let name = "Askar";

function sum(a, b){
    console.log(a + b);
}

// module.exports.name = name;
// module.exports.sum = sum;

module.exports = {
    name: name,
    sum: sum,
}