"use strict";var v=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var s=v(function(O,n){
var c=require('@stdlib/constants-float64-high-word-abs-mask/dist'),f=require('@stdlib/constants-float64-high-word-exponent-mask/dist'),q=require('@stdlib/number-float64-base-get-high-word/dist'),t=require('@stdlib/math-base-special-kernel-cos/dist'),a=require('@stdlib/math-base-special-kernel-sin/dist'),o=require('@stdlib/math-base-special-rempio2/dist'),_=1072243195,H=1045430272,e=[0,0];function S(i){var r,u;if(r=q(i),r&=c,r<=_)return r<H?i:a(i,0);if(r>=f)return NaN;switch(u=o(i,e),u&3){case 0:return a(e[0],e[1]);case 1:return t(e[0],e[1]);case 2:return-a(e[0],e[1]);default:return-t(e[0],e[1])}}n.exports=S
});var A=s();module.exports=A;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
