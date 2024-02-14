"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=c(function(L,q){
var A=require('@stdlib/stats-base-dists-cosine-cdf/dist'),E=1e4,O=1e-12;function R(e,r,t){var i,n,s,a,u;for(u=1,i=r-t,n=r+t;u<E;){if(a=(i+n)/2,n-i<O)return a;s=A(a,r,t),e>s?i=a:n=a,u+=1}return a}q.exports=R
});var l=c(function(M,N){
var f=require('@stdlib/math-base-assert-is-nan/dist'),T=v();function d(e,r,t){return f(r)||f(t)||f(e)||t<0||e<0||e>1?NaN:t===0?r:T(e,r,t)}N.exports=d
});var b=c(function(S,y){
var C=require('@stdlib/utils-constant-function/dist'),F=require('@stdlib/stats-base-dists-degenerate-quantile/dist').factory,o=require('@stdlib/math-base-assert-is-nan/dist'),I=v();function g(e,r){if(o(e)||o(r)||r<0)return C(NaN);if(r===0)return F(e);return t;function t(i){return o(i)||i<0||i>1?NaN:I(i,e,r)}}y.exports=g
});var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=l(),w=b();h(x,"factory",w);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
