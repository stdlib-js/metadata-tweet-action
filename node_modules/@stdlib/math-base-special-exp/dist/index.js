"use strict";var v=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var f=v(function(H,s){
function L(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}s.exports=L
});var c=v(function(U,p){
var R=require('@stdlib/math-base-special-ldexp/dist'),F=f();function _(r,t,u){var e,a,i,n;return e=r-t,a=e*e,i=e-a*F(a),n=1-(t-e*i/(2-i)-r),R(n,u)}p.exports=_
});var O=v(function(V,E){
var m=require('@stdlib/math-base-assert-is-nan/dist'),o=require('@stdlib/math-base-special-trunc/dist'),y=require('@stdlib/constants-float64-ninf/dist'),N=require('@stdlib/constants-float64-pinf/dist'),I=c(),A=.6931471803691238,G=19082149292705877e-26,l=1.4426950408889634,P=709.782712893384,W=-745.1332191019411,q=1/(1<<28),Z=-q;function d(r){var t,u,e;return m(r)||r===N?r:r===y?0:r>P?N:r<W?0:r>Z&&r<q?1+r:(r<0?e=o(l*r-.5):e=o(l*r+.5),t=r-e*A,u=e*G,I(t,u,e))}E.exports=d
});var k=O();module.exports=k;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
