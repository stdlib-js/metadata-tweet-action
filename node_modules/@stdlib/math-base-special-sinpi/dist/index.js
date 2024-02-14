"use strict";var f=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var v=f(function(b,s){
var q=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/math-base-assert-is-infinite/dist'),t=require('@stdlib/math-base-special-cos/dist'),a=require('@stdlib/math-base-special-sin/dist'),o=require('@stdlib/math-base-special-abs/dist'),u=require('@stdlib/math-base-special-copysign/dist'),n=require('@stdlib/constants-float64-pi/dist');function p(i){var r,e;return q(i)?NaN:c(i)?NaN:(e=i%2,r=o(e),r===0||r===1?u(0,e):r<.25?a(n*e):r<.75?(r=.5-r,u(t(n*r),e)):r<1.25?(e=u(1,e)-e,a(n*e)):r<1.75?(r-=1.5,-u(t(n*r),e)):(e-=u(2,e),a(n*e)))}s.exports=p
});var N=v();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
