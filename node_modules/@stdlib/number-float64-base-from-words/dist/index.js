"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=t(function(p,u){
var c=require('@stdlib/assert-is-little-endian/dist'),s,i,a;c===!0?(i=1,a=0):(i=0,a=1);s={HIGH:i,LOW:a};u.exports=s
});var W=t(function(x,I){
var L=require('@stdlib/array-uint32/dist'),f=require('@stdlib/array-float64/dist'),H=v(),o=new f(1),n=new L(o.buffer),q=H.HIGH,O=H.LOW;function d(e,r){return n[q]=e,n[O]=r,o[0]}I.exports=d
});var G=W();module.exports=G;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
