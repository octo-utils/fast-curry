/* Created by tommyZZM.OSX on 2017/1/21. */
"use strict";

const TYPE_OF_FUNCTION = "function";
const arityMap = {};

const arity0 = _createArityFunction(0);
const arity1 = _createArityFunction(1);
for (let i = 2; i <= 6; i++) {
    arityMap[i] = _createArityFunction(i);
}

module.exports = curry;

function curry(fn) {
    if (typeof fn !== TYPE_OF_FUNCTION) {
        throw new TypeError("argument 1 must be an function");
    }

    const length = fn.length;

    if (length === 0) return arity0(fn);
    if (length === 1) return arity1(fn);

    return _arity(length, _curryN(length, [], fn));
}

function _curryN(length, received, fn) {
    let fullFillFlag = false;
    let fullFillCombined = void 0;
    return function() {
        const argumentsLength = arguments.length;
        const receivedLength = received.length;
        const isFullFilled = argumentsLength >= length;
        const argumentsLengthOffset = isFullFilled ?
                                      length : argumentsLength;
        const combinedLength = argumentsLengthOffset + receivedLength;

        let combined = isFullFilled ?
            (fullFillCombined || (fullFillCombined = [])) : [];

        let idxCombined = 0;
        let aritiesLeft = length;

        while (idxCombined < combinedLength) {
            if (idxCombined < receivedLength) {
                !fullFillFlag && (combined[idxCombined] = received[idxCombined]);
            } else {
                combined[idxCombined] = arguments[idxCombined - receivedLength];
                aritiesLeft --;
            }

            idxCombined ++;
        }

        if (isFullFilled) {
            fullFillFlag = true;
            return fn.apply(void 0, combined);
        }

        return _arity(aritiesLeft, _curryN(aritiesLeft, combined, fn));

    }
}

function _arity(length, fn) {
    let arity = arityMap[length] ||
                (arityMap[length] = _createArityFunction(length));
    return arity(fn);
}

function _createArityFunction(number) {
    let placeHolders = "_";

    for (let i=1; i<number; i++) {
        placeHolders = placeHolders + ",_" + i;
    }

    return new Function(
        'fn', "return function(" + placeHolders + ") {" +
        "return fn.apply(this, arguments); };"
    );
}
