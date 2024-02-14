"use strict";var i=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var y=i(function(j,n){
var p=require('@stdlib/array-int8/dist'),c=require('@stdlib/array-uint8/dist'),l=require('@stdlib/array-uint8c/dist'),U=require('@stdlib/array-int16/dist'),m=require('@stdlib/array-uint16/dist'),F=require('@stdlib/array-int32/dist'),I=require('@stdlib/array-uint32/dist'),d=require('@stdlib/array-float32/dist'),T=require('@stdlib/array-float64/dist'),h=[T,d,F,I,U,m,p,c,l];n.exports=h
});var u=i(function(w,C){C.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var v=i(function(D,s){
var S=require('@stdlib/utils-constructor-name/dist'),g=require('@stdlib/utils-function-name/dist'),q=require('@stdlib/utils-get-prototype-of/dist'),x=require('@stdlib/assert-has-float64array-support/dist'),N=require('@stdlib/array-float64/dist'),A=y(),o=u(),t=x()?q(N):f;t=g(t)==="TypedArray"?t:f;function f(){}function O(r){var a,e;if(typeof r!="object"||r===null)return!1;if(r instanceof t)return!0;for(e=0;e<A.length;e++)if(r instanceof A[e])return!0;for(;r;){for(a=S(r),e=0;e<o.length;e++)if(o[e]===a)return!0;r=q(r)}return!1}s.exports=O
});var R=v();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
