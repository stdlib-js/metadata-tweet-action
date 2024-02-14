"use strict";var e=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var s=e(function(h,u){
var c=typeof String.prototype.trimRight!="undefined";u.exports=c
});var a=e(function(I,o){
var l=require('@stdlib/string-base-replace/dist'),m=/[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/;function q(r){return l(r,m,"")}o.exports=q
});var f=e(function(A,n){
var x=String.prototype.trimRight;n.exports=x
});var v=e(function(B,p){
var g=f();function y(r){return g.call(r)}p.exports=y
});var R=s(),S=a(),b=v(),i;R?i=b:i=S;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
