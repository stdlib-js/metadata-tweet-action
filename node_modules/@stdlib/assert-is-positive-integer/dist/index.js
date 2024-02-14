"use strict";var r=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var t=r(function(x,u){
var q=require('@stdlib/assert-is-integer/dist').isPrimitive;function P(e){return q(e)&&e>0}u.exports=P
});var s=r(function(d,v){
var O=require('@stdlib/assert-is-integer/dist').isObject;function g(e){return O(e)&&e.valueOf()>0}v.exports=g
});var o=r(function(y,c){
var m=t(),I=s();function b(e){return m(e)||I(e)}c.exports=b
});var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),n=o(),f=t(),j=s();a(n,"isPrimitive",f);a(n,"isObject",j);module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
