function exponencial(valor) {
    return function(arg){
        return  arg ** valor // clousure
    }
}
const exp = exponencial(2)
exp(2)


function clourserSum(numFijo) {
    return function(noFijo){
        return  noFijo + numFijo // clousure
    }
}
const suma = clourserSum(5)
suma(2)