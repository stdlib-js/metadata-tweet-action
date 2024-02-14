"use strict";var t=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var v=t(function(d,n){
function P(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}n.exports=P
});var o=t(function(j,f){
var R=require('@stdlib/constants-float64-sqrt-two-pi/dist'),s=require('@stdlib/math-base-special-pow/dist'),T=require('@stdlib/math-base-special-exp/dist'),_=v(),E=143.01608;function F(r){var e,i,u;return e=1/r,e=1+e*_(e),i=T(r),r>E?(u=s(r,.5*r-.25),i=u*(u/i)):i=s(r,r-.5)/i,R*i*e}f.exports=F
});var l=t(function(k,q){
var L=require('@stdlib/constants-float64-eulergamma/dist');function S(r,e){return e/((1+L*r)*r)}q.exports=S
});var c=t(function(B,p){
function b(r){var e,i,u;return r===0?1:(r<0?e=-r:e=r,e<=1?(i=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),u=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,i=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),u=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),i/u)}p.exports=b
});var A=t(function(C,y){
var z=require('@stdlib/math-base-assert-is-nan/dist'),G=require('@stdlib/math-base-assert-is-integer/dist'),M=require('@stdlib/math-base-assert-is-negative-zero/dist'),m=require('@stdlib/math-base-special-abs/dist'),O=require('@stdlib/math-base-special-floor/dist'),Q=require('@stdlib/math-base-special-sin/dist'),g=require('@stdlib/constants-float64-pinf/dist'),I=require('@stdlib/constants-float64-ninf/dist'),N=require('@stdlib/constants-float64-pi/dist'),w=o(),h=l(),U=c();function W(r){var e,i,u,a;if(G(r)&&r<0||r===I||z(r))return NaN;if(r===0)return M(r)?I:g;if(r>171.61447887182297)return g;if(r<-170.5674972726612)return 0;if(i=m(r),i>33)return r>=0?w(r):(u=O(i),u&1?e=1:e=-1,a=i-u,a>.5&&(u+=1,a=i-u),a=i*Q(N*a),e*N/(m(a)*w(i)));for(a=1;r>=3;)r-=1,a*=r;for(;r<0;){if(r>-1e-9)return h(r,a);a/=r,r+=1}for(;r<2;){if(r<1e-9)return h(r,a);a/=r,r+=1}return r===2?a:(r-=2,a*U(r))}y.exports=W
});var X=A();module.exports=X;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
