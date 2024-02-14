"use strict";var e=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var t=e(function(d,v){
var b=require('@stdlib/assert-is-number/dist').isPrimitive;function a(i){return b(i)&&i>0}v.exports=a
});var s=e(function(y,c){
var q=require('@stdlib/assert-is-number/dist').isObject;function P(i){return q(i)&&i.valueOf()>0}c.exports=P
});var m=e(function(R,n){
var O=t(),N=s();function f(i){return O(i)||N(i)}n.exports=f
});var o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=m(),j=t(),p=s();o(u,"isPrimitive",j);o(u,"isObject",p);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
