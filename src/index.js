let array =  [1, 2, 3, 4];

exports.min = function min (array) {
    if (array) {
        if (typeof array !== 'undefined' && array.length > 0 && Array.isArray(array)) {
            let min = array[0];
            for (let i = 0; i < array.length; i++) {
                if (min > array[i]) min = array[i];
            }
            return min;

        } else {
            return 0;
        }
    }
}

exports.max = function max (array) {
    if (array) {
        if (typeof array !== 'undefined' && array.length > 0 && Array.isArray(array)) {
            let max = array[0];
            for (let i = 0; i < array.length; i++) {
                if (max < array[i]) max = array[i];
            }
            return max;
        } else {
            return 0;
        }
    }
}
    exports.avg = function avg(array) {
        if (array) {
            if (typeof array !== 'undefined' && array.length > 0 && Array.isArray(array)) {
                let total = 0;
                let avg;
                for (let i = 0; i < array.length; i++) {
                    total += array[i];
                    avg = total / array.length;
                }
                return avg;
            } else {
                return 0;
            }

        }
    }
