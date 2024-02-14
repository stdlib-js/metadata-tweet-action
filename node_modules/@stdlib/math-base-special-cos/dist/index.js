"use strict";var s=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var n=s(function(G,u){
var v=require('@stdlib/number-float64-base-get-high-word/dist'),f=require('@stdlib/math-base-special-kernel-cos/dist'),t=require('@stdlib/math-base-special-kernel-sin/dist'),_=require('@stdlib/math-base-special-rempio2/dist'),e=[0,0],H=2147483647,c=1072243195,o=1044381696,O=2146435072;function W(a){var r,i;if(r=v(a),r&=H,r<=c)return r<o?1:f(a,0);if(r>=O)return NaN;switch(i=_(a,e),i&3){case 0:return f(e[0],e[1]);case 1:return-t(e[0],e[1]);case 2:return-f(e[0],e[1]);default:return t(e[0],e[1])}}u.exports=W
});var q=n();module.exports=q;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
