"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=f(function(R,c){
var a=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-special-sinpi/dist'),s=require('@stdlib/constants-float64-pi/dist');function y(e,r,i){var t;return a(e)||a(r)||a(i)||i<0?NaN:i===0?e<r?0:1:e<r-i?0:e>r+i?1:(t=(e-r)/i,(1+t+p(t)/s)/2)}c.exports=y
});var q=f(function(b,o){
var d=require('@stdlib/utils-constant-function/dist'),z=require('@stdlib/stats-base-dists-degenerate-cdf/dist').factory,u=require('@stdlib/math-base-assert-is-nan/dist'),I=require('@stdlib/math-base-special-sinpi/dist'),P=require('@stdlib/constants-float64-pi/dist');function g(e,r){if(u(e)||u(r)||r<0)return d(NaN);if(r===0)return z(e);return i;function i(t){var n;return u(t)?NaN:t<e-r?0:t>e+r?1:(n=(t-e)/r,(1+n+I(n)/P)/2)}}o.exports=g
});var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),N=v(),F=q();l(N,"factory",F);module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
