function printReverse (array) {
    for (var i = array.length - 1; i >=0; i--) {
        console.log(array[i]);
    }
}

function isUniform(array) {
    var first = array[0];
    for (var i = 0; i<array.length; i++) {
        if (array[i] !== first) {
            return false;
        }
    }
    return true;
}

function sumArray(array) {
    var total = 0;
    array.forEach(function(element) {
        total += element;
    });
    return total;
}

function max(array) {
    var max = array[0];
    for (var i=0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}