/* Created by tommyZZM.OSX on 2017/1/22. */
"use strict";
const Benchmark = require("benchmark");
const fastCurry = require("../");
const suite = new Benchmark.Suite();

let sum;
let addOne;
let res;

suite
    .add("fastCurry.create", function() {
        sum = fastCurry(function(a, b) { return a + b; });
    })
    .add("fastCurry.lift", function() {
        addOne = sum(1);
    })
    .add("fastCurry.call", function() {
        res = addOne(2);
    })
    .on("cycle", function(event) {
        console.log(String(event.target));
    })
    .run({ "async": true });
