"use strict";var i=function(r,s){return function(){return s||r((s={exports:{}}).exports,s),s.exports}};var b=i(function(R0,I){
function D(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}I.exports=D
});var N=i(function(S0,A){
function E(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}A.exports=E
});var g=i(function(U0,W){
function G(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}W.exports=G
});var m=i(function(V0,k){
function H(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}k.exports=H
});var h=i(function(Y0,w){
function J(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}w.exports=J
});var O=i(function(d0,F){
function K(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}F.exports=K
});var R=i(function(j0,P){
function L(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}P.exports=L
});var U=i(function(z0,S){
function Q(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}S.exports=Q
});var Y=i(function(M0,V){
function X(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}V.exports=X
});var j=i(function(B0,d){
function Z(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}d.exports=Z
});var B=i(function(D0,M){
var _=require('@stdlib/math-base-assert-is-nan/dist'),$=require('@stdlib/math-base-assert-is-infinite/dist'),x=require('@stdlib/math-base-special-abs/dist'),f=require('@stdlib/math-base-special-ln/dist'),r0=require('@stdlib/math-base-special-trunc/dist'),e0=require('@stdlib/math-base-special-sinpi/dist'),a0=require('@stdlib/constants-float64-pi/dist'),y=require('@stdlib/constants-float64-pinf/dist'),t0=b(),i0=N(),u0=g(),v0=m(),s0=h(),n0=O(),l0=R(),o0=U(),f0=Y(),p0=j(),c0=.07721566490153287,y0=.3224670334241136,q0=1,T0=-.07721566490153287,C0=.48383612272381005,I0=-.1475877229945939,b0=.06462494023913339,A0=-.07721566490153287,N0=1,W0=.4189385332046727,c=1.4616321449683622,g0=4503599627370496,k0=0x400000000000000,m0=8470329472543003e-37,z=1.4616321449683622,w0=-.12148629053584961,h0=-3638676997039505e-33;function F0(r){var s,q,u,T,n,l,o,C,p,v,e,a,t;if(_(r)||$(r))return r;if(r===0)return y;if(r<0?(s=!0,r=-r):s=!1,r<m0)return-f(r);if(s){if(r>=g0||(p=e0(r),p===0))return y;q=f(a0/x(p*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(t=-f(r),r>=c-1+.27?(e=1-r,u=0):r>=c-1-.27?(e=r-(z-1),u=1):(e=r,u=2)):(t=0,r>=c+.27?(e=2-r,u=0):r>=c-.27?(e=r-z,u=1):(e=r-1,u=2)),u){case 0:a=e*e,l=c0+a*t0(a),n=a*(y0+a*i0(a)),o=e*l+n,t+=o-.5*e;break;case 1:a=e*e,v=a*e,l=C0+v*s0(v),n=I0+v*n0(v),T=b0+v*l0(v),o=a*l-(h0-v*(n+e*T)),t+=w0+o;break;case 2:l=e*(A0+e*o0(e)),n=N0+e*f0(e),t+=-.5*e+l/n;break}else if(r<8)switch(u=r0(r),e=r-u,o=e*(T0+e*v0(e)),C=q0+e*u0(e),t=.5*e+o/C,a=1,u){case 7:a*=e+6;case 6:a*=e+5;case 5:a*=e+4;case 4:a*=e+3;case 3:a*=e+2,t+=f(a)}else r<k0?(p=f(r),a=1/r,e=a*a,v=W0+a*p0(e),t=(r-.5)*(p-1)+v):t=r*(f(r)-1);return s&&(t=q-t),t}M.exports=F0
});var O0=B();module.exports=O0;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
