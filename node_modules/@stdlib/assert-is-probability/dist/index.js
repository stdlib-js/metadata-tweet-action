"use strict";var e=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var t=e(function(N,b){
var v=require('@stdlib/assert-is-number/dist').isPrimitive;function q(i){return v(i)&&i>=0&&i<=1}b.exports=q
});var s=e(function(d,c){
var m=require('@stdlib/assert-is-number/dist').isObject;function O(i){return m(i)&&i.valueOf()>=0&&i.valueOf()<=1}c.exports=O
});var a=e(function(l,n){
var P=t(),f=s();function j(i){return P(i)||f(i)}n.exports=j
});var o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=a(),p=t(),x=s();o(u,"isPrimitive",p);o(u,"isObject",x);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
