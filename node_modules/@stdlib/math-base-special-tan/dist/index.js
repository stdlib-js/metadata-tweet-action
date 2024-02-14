"use strict";var _=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=_(function(N,t){
var n=require('@stdlib/number-float64-base-get-high-word/dist'),i=require('@stdlib/math-base-special-kernel-tan/dist'),v=require('@stdlib/math-base-special-rempio2/dist'),f=[0,0],H=2147483647,O=1072243195,s=2146435072,W=1044381696;function o(e){var r,a;return r=n(e),r&=H,r<=O?r<W?e:i(e,0,1):r>=s?NaN:(a=v(e,f),i(f[0],f[1],1-((a&1)<<1)))}t.exports=o
});var G=u();module.exports=G;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
