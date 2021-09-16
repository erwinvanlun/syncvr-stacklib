"use strict";
exports.__esModule = true;
exports.bffSayHello = exports.ErrorCodes = void 0;
var ResultCodesEnum;
(function (ErrorCodes) {
    ErrorCodes["FibonacciNegative"] = "Fibonacci-Negative";
    ErrorCodes["FibonacciNonInteger"] = "Fibonacci-Non-Integer";
    ErrorCodes["FibonacciNoNumber"] = "Fibonacci-No-Number";
})(ResultCodesEnum = exports.ErrorCodes || (exports.ErrorCodes = {}));
function bffSayHello() {
    console.log('this is bff speaking');
}
exports.bffSayHello = bffSayHello;
