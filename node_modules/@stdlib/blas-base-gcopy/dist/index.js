"use strict";var b=function(c,a){return function(){return a||c((a={exports:{}}).exports,a),a.exports}};var g=b(function(H,m){
function z(c,a,f,u,o,i,t){var v,e,s,r,l,n,q;for(v=a.data,e=o.data,r=a.accessors[0],s=o.accessors[1],l=u,n=t,q=0;q<c;q++)s(e,n,r(v,l)),l+=f,n+=i;return a}m.exports=z
});var M=b(function(I,k){
var j=require('@stdlib/array-base-arraylike2object/dist'),A=g(),P=8;function B(c,a,f,u,o){var i,t,v,e,s,r;if(c<=0)return u;if(v=j(a),e=j(u),v.accessorProtocol||e.accessorProtocol)return f<0?i=(1-c)*f:i=0,o<0?t=(1-c)*o:t=0,A(c,v,f,i,e,o,t),e.data;if(f===1&&o===1){if(s=c%P,s>0)for(r=0;r<s;r++)u[r]=a[r];if(c<P)return u;for(r=s;r<c;r+=P)u[r]=a[r],u[r+1]=a[r+1],u[r+2]=a[r+2],u[r+3]=a[r+3],u[r+4]=a[r+4],u[r+5]=a[r+5],u[r+6]=a[r+6],u[r+7]=a[r+7];return u}for(f<0?i=(1-c)*f:i=0,o<0?t=(1-c)*o:t=0,r=0;r<c;r++)u[t]=a[i],i+=f,t+=o;return u}k.exports=B
});var h=b(function(J,R){
var O=require('@stdlib/array-base-arraylike2object/dist'),C=g(),p=8;function D(c,a,f,u,o,i,t){var v,e,s,r,l,n;if(c<=0)return o;if(s=O(a),r=O(o),s.accessorProtocol||r.accessorProtocol)return C(c,s,f,u,r,i,t),r.data;if(v=u,e=t,f===1&&i===1){if(l=c%p,l>0)for(n=0;n<l;n++)o[e]=a[v],v+=f,e+=i;if(c<p)return o;for(n=l;n<c;n+=p)o[e]=a[v],o[e+1]=a[v+1],o[e+2]=a[v+2],o[e+3]=a[v+3],o[e+4]=a[v+4],o[e+5]=a[v+5],o[e+6]=a[v+6],o[e+7]=a[v+7],v+=p,e+=p;return o}for(n=0;n<c;n++)o[e]=a[v],v+=f,e+=i;return o}R.exports=D
});var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=M(),F=h();E(w,"ndarray",F);module.exports=w;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
