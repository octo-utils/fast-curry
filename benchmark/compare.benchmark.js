/* Created by tommyZZM.OSX on 2017/1/23. */
"use strict";
const Benchmark = require("benchmark");

const riimCurry = require("@riim/curry");
const dominictarrCurry = require("curry");
const castCurry = require("cast-curry");
const justCurry = require("just-curry");
const autoCurry = require("auto-curry");
const lightCurry = require("light-curry");
const thisablesCurry = require("@thisables/curry").curry;
const ibrokethatCurry = require("@ibrokethat/curry");
const instantCurry = require("instant-curry");
const fjCurry = require("fj-curry").curry;
const curryD = require("curry-d").curry;
const ramdaCurry = require("ramda").curry;
const fastCurry = require("../");

const suite = new Benchmark.Suite();

let sum;
let addOne;
let res;

suite
    .add("riimCurry.create", function() {
        sum = riimCurry(function(a, b) { return a + b; });
    })
    .add("riimCurry.lift", function() {
        addOne = sum(1);
    })
    .add("riimCurry.call", function() {
        res = addOne(2);
    })

    .add("dominictarrCurry.create", function() {
        sum = dominictarrCurry(function(a, b) { return a + b; });
    })
    .add("dominictarrCurry.lift", function() {
        addOne = sum(1);
    })
    .add("dominictarrCurry.call", function() {
        res = addOne(2);
    })

    .add("castCurry.create", function() {
        sum = castCurry(function(a, b) { return a + b; });
    })
    .add("castCurry.lift", function() {
        addOne = sum(1);
    })
    .add("castCurry.call", function() {
        res = addOne(2);
    })

    .add("justCurry.create", function() {
        sum = justCurry(function(a, b) { return a + b; });
    })
    .add("justCurry.lift", function() {
        addOne = sum(1);
    })
    .add("justCurry.call", function() {
        res = addOne(2);
    })

    .add("autoCurry.create", function() {
        sum = autoCurry(function(a, b) { return a + b; });
    })
    .add("autoCurry.lift", function() {
        addOne = sum(1);
    })
    .add("autoCurry.call", function() {
        res = addOne(2);
    })

    .add("lightCurry.create", function() {
        sum = lightCurry(function(a, b) { return a + b; });
    })
    .add("lightCurry.lift", function() {
        addOne = sum(1);
    })
    .add("lightCurry.call", function() {
        res = addOne(2);
    })

    .add("thisablesCurry.create", function() {
        sum = thisablesCurry.call(function(a, b) { return a + b; });
    })
    .add("thisablesCurry.lift", function() {
        addOne = sum(1);
    })
    .add("thisablesCurry.call", function() {
        res = addOne(2);
    })

    .add("ibrokethatCurry.create", function() {
        sum = ibrokethatCurry(function(a, b) { return a + b; });
    })
    .add("ibrokethatCurry.lift", function() {
        addOne = sum(1);
    })
    .add("ibrokethatCurry.call", function() {
        res = addOne(2);
    })

    .add("instantCurry.create", function() {
        sum = instantCurry(function(a, b) { return a + b; });
    })
    .add("instantCurry.lift", function() {
        addOne = sum(1);
    })
    .add("instantCurry.call", function() {
        res = addOne(2);
    })

    .add("fjCurry.create", function() {
        sum = fjCurry(function(a, b) { return a + b; });
    })
    .add("fjCurry.lift", function() {
        addOne = sum(1);
    })
    .add("fjCurry.call", function() {
        res = addOne(2);
    })

    .add("curryD.create", function() {
        sum = curryD(function(a, b) { return a + b; });
    })
    .add("curryD.lift", function() {
        addOne = sum(1);
    })
    .add("curryD.call", function() {
        res = addOne(2);
    })

    .add("ramdaCurry.create", function() {
        sum = ramdaCurry(function(a, b) { return a + b; });
    })
    .add("ramdaCurry.lift", function() {
        addOne = sum(1);
    })
    .add("ramdaCurry.call", function() {
        res = addOne(2);
    })

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
