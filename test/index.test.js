/* Created by tommyZZM.OSX on 2017/1/21. */
"use strict";
const expect = require("chai").expect;
const curry = require("../");

describe("basic usage", function () {
    it("#create", function () {
        let sumFull = (a, b, c) => a + b + c;
        let sum = curry(sumFull);
        let sum1 = sum(1);
        let sum1_2 = sum1(2);

        let sum1_2_3 = sum1_2(3);

        expect(sum.length).to.be.equal(3);
        expect(sum1.length).to.be.equal(2);
        expect(sum1_2.length).to.be.equal(1);

        expect(sum1_2_3).to.be.equal(6);
    })

    it("#create lift", function () {

        let sumAB = curry(function(a, b) { ;return a + b; });
        let addOne1 = sumAB(1);
        let addOne2 = sumAB(1);
        expect(addOne1).to.be.not.equal(addOne2)
        expect(addOne1(2)).to.be.equal(3);
        expect(addOne1(3)).to.be.equal(4);
        expect(addOne2(4)).to.be.equal(5);
        expect(addOne2(5)).to.be.equal(6);
    })
})
