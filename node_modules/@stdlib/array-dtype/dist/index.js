"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=t(function(B,a){
var v={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};a.exports=v
});var u=t(function(b,n){
var c=require('@stdlib/array-float64/dist'),p=require('@stdlib/array-float32/dist'),q=require('@stdlib/array-uint32/dist'),x=require('@stdlib/array-int32/dist'),f=require('@stdlib/array-uint16/dist'),m=require('@stdlib/array-int16/dist'),C=require('@stdlib/array-uint8/dist'),U=require('@stdlib/array-uint8c/dist'),I=require('@stdlib/array-int8/dist'),d=require('@stdlib/array-complex64/dist'),S=require('@stdlib/array-complex128/dist'),T=[c,p,x,q,m,f,I,C,U,d,S];n.exports=T
});var y=t(function(j,o){
var F=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];o.exports=F
});var s=t(function(k,l){
var g=require('@stdlib/assert-is-buffer/dist'),E=require('@stdlib/assert-is-array/dist'),P=require('@stdlib/utils-constructor-name/dist'),Y=i(),D=u(),A=y(),N=A.length;function O(e){var r;if(E(e))return"generic";if(g(e))return null;for(r=0;r<N;r++)if(e instanceof D[r])return A[r];return Y[P(e)]||null}l.exports=O
});var R=s();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
