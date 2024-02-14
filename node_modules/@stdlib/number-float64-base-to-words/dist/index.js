"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=i(function(T,v){
var f=require('@stdlib/assert-is-little-endian/dist'),u,a,s;f===!0?(a=1,s=0):(a=0,s=1);u={HIGH:a,LOW:s};v.exports=u
});var t=i(function(U,W){
var l=require('@stdlib/array-uint32/dist'),p=require('@stdlib/array-float64/dist'),q=c(),H=new p(1),o=new l(H.buffer),x=q.HIGH,G=q.LOW;function y(e,r,O,n){return H[0]=e,r[n]=o[x],r[n+O]=o[G],r}W.exports=y
});var d=i(function(V,I){
var A=t();function E(e){return A(e,[0,0],1,0)}I.exports=E
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),L=d(),w=t();g(L,"assign",w);module.exports=L;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
