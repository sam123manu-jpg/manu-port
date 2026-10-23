(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ul="170",fn={ROTATE:0,DOLLY:1,PAN:2},Un={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fu=0,yc=1,pu=2,ed=1,nd=2,$n=3,Kn=0,je=1,Se=2,gi=0,xs=1,_o=2,bc=3,Mc=4,mu=5,Oi=100,gu=101,vu=102,_u=103,xu=104,yu=200,bu=201,Mu=202,Su=203,Ua=204,Na=205,wu=206,Eu=207,Tu=208,Au=209,Cu=210,Ru=211,Pu=212,Lu=213,Iu=214,Oa=0,Fa=1,ka=2,Es=3,Ba=4,za=5,Ha=6,Va=7,id=0,Du=1,Uu=2,vi=0,Nu=1,Ou=2,Fu=3,sd=4,ku=5,Bu=6,zu=7,rd=300,Ts=301,As=302,Ga=303,Wa=304,Po=306,xo=1e3,ki=1001,Xa=1002,on=1003,Hu=1004,Cr=1005,Nn=1006,Go=1007,Bi=1008,Qn=1009,od=1010,ad=1011,cr=1012,Nl=1013,Hi=1014,On=1015,yr=1016,Ol=1017,Fl=1018,Cs=1020,ld=35902,cd=1021,hd=1022,wn=1023,dd=1024,ud=1025,ys=1026,Rs=1027,kl=1028,Bl=1029,fd=1030,zl=1031,Hl=1033,lo=33776,co=33777,ho=33778,uo=33779,qa=35840,Ya=35841,$a=35842,ja=35843,Za=36196,Ja=37492,Ka=37496,Qa=37808,tl=37809,el=37810,nl=37811,il=37812,sl=37813,rl=37814,ol=37815,al=37816,ll=37817,cl=37818,hl=37819,dl=37820,ul=37821,fo=36492,fl=36494,pl=36495,pd=36283,ml=36284,gl=36285,vl=36286,Vu=3200,Gu=3201,md=0,Wu=1,mi="",Me="srgb",Os="srgb-linear",Lo="linear",de="srgb",Ji=7680,Sc=519,Xu=512,qu=513,Yu=514,gd=515,$u=516,ju=517,Zu=518,Ju=519,wc=35044,Ec="300 es",jn=2e3,yo=2001;class Yi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Tc=1234567;const bs=Math.PI/180,hr=180/Math.PI;function $i(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]).toLowerCase()}function De(n,t,e){return Math.max(t,Math.min(e,n))}function Vl(n,t){return(n%t+t)%t}function Ku(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Qu(n,t,e){return n!==t?(e-n)/(t-n):0}function ir(n,t,e){return(1-e)*n+e*t}function tf(n,t,e,i){return ir(n,t,1-Math.exp(-e*i))}function ef(n,t=1){return t-Math.abs(Vl(n,t*2)-t)}function nf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function sf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function rf(n,t){return n+Math.floor(Math.random()*(t-n+1))}function of(n,t){return n+Math.random()*(t-n)}function af(n){return n*(.5-Math.random())}function lf(n){n!==void 0&&(Tc=n);let t=Tc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function cf(n){return n*bs}function hf(n){return n*hr}function df(n){return(n&n-1)===0&&n!==0}function uf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ff(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function pf(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),d=r((t-i)/2),u=o((t-i)/2),f=r((i-t)/2),p=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*d,l*u,a*c);break;case"YZY":n.set(l*u,a*h,l*d,a*c);break;case"ZXZ":n.set(l*d,l*u,a*h,a*c);break;case"XZX":n.set(a*h,l*p,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*p,a*c);break;case"ZYZ":n.set(l*p,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ps(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ye(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const dr={DEG2RAD:bs,RAD2DEG:hr,generateUUID:$i,clamp:De,euclideanModulo:Vl,mapLinear:Ku,inverseLerp:Qu,lerp:ir,damp:tf,pingpong:ef,smoothstep:nf,smootherstep:sf,randInt:rf,randFloat:of,randFloatSpread:af,seededRandom:lf,degToRad:cf,radToDeg:hf,isPowerOfTwo:df,ceilPowerOfTwo:uf,floorPowerOfTwo:ff,setQuaternionFromProperEuler:pf,normalize:Ye,denormalize:ps};class dt{constructor(t=0,e=0){dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(De(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,i,s,r,o,a,l,c){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],p=i[8],v=s[0],g=s[3],m=s[6],b=s[1],y=s[4],_=s[7],U=s[2],R=s[5],P=s[8];return r[0]=o*v+a*b+l*U,r[3]=o*g+a*y+l*R,r[6]=o*m+a*_+l*P,r[1]=c*v+h*b+d*U,r[4]=c*g+h*y+d*R,r[7]=c*m+h*_+d*P,r[2]=u*v+f*b+p*U,r[5]=u*g+f*y+p*R,r[8]=u*m+f*_+p*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=e*d+i*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return t[0]=d*v,t[1]=(s*c-h*i)*v,t[2]=(a*i-s*o)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Wo.makeScale(t,e)),this}rotate(t){return this.premultiply(Wo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Wo=new $t;function vd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ur(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function mf(){const n=ur("canvas");return n.style.display="block",n}const Ac={};function er(n){n in Ac||(Ac[n]=!0,console.warn(n))}function gf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function vf(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function _f(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const se={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(n.r=Zn(n.r),n.g=Zn(n.g),n.b=Zn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(n.r=Ms(n.r),n.g=Ms(n.g),n.b=Ms(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===mi?Lo:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Zn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ms(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Cc=[.64,.33,.3,.6,.15,.06],Rc=[.2126,.7152,.0722],Pc=[.3127,.329],Lc=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ic=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);se.define({[Os]:{primaries:Cc,whitePoint:Pc,transfer:Lo,toXYZ:Lc,fromXYZ:Ic,luminanceCoefficients:Rc,workingColorSpaceConfig:{unpackColorSpace:Me},outputColorSpaceConfig:{drawingBufferColorSpace:Me}},[Me]:{primaries:Cc,whitePoint:Pc,transfer:de,toXYZ:Lc,fromXYZ:Ic,luminanceCoefficients:Rc,outputColorSpaceConfig:{drawingBufferColorSpace:Me}}});let Ki;class xf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ki===void 0&&(Ki=ur("canvas")),Ki.width=t.width,Ki.height=t.height;const i=Ki.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ur("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Zn(e[i]/255)*255):e[i]=Zn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yf=0;class _d{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=$i(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Xo(s[o].image)):r.push(Xo(s[o]))}else r=Xo(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Xo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bf=0;class He extends Yi{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,i=ki,s=ki,r=Nn,o=Bi,a=wn,l=Qn,c=He.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=$i(),this.name="",this.source=new _d(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xo:t.x=t.x-Math.floor(t.x);break;case ki:t.x=t.x<0?0:1;break;case Xa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xo:t.y=t.y-Math.floor(t.y);break;case ki:t.y=t.y<0?0:1;break;case Xa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=rd;He.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,i=0,s=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,_=(f+1)/2,U=(m+1)/2,R=(h+u)/4,P=(d+v)/4,I=(p+g)/4;return y>_&&y>U?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=R/i,r=P/i):_>U?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=R/s,r=I/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=P/r,s=I/r),this.set(i,s,r,e),this}let b=Math.sqrt((g-p)*(g-p)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(g-p)/b,this.y=(d-v)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mf extends Yi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new He(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new _d(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends Mf{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class xd extends He{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sf extends He{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ti{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3];const u=r[o+0],f=r[o+1],p=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=p,t[e+3]=v;return}if(d!==v||l!==u||c!==f||h!==p){let g=1-a;const m=l*u+c*f+h*p+d*v,b=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const U=Math.sqrt(y),R=Math.atan2(U,m*b);g=Math.sin(g*R)/U,a=Math.sin(a*R)/U}const _=a*b;if(l=l*g+u*_,c=c*g+f*_,h=h*g+p*_,d=d*g+v*_,g===1-a){const U=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=U,c*=U,h*=U,d*=U}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-a*f,t[e+2]=c*p+h*f+a*u-l*d,t[e+3]=h*p-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,i=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return qo.copy(this).projectOnVector(t),this.sub(qo)}reflect(t){return this.sub(qo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(De(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qo=new T,Dc=new ti;class ni{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,vn):vn.fromBufferAttribute(r,o),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rr.copy(i.boundingBox)),Rr.applyMatrix4(t.matrixWorld),this.union(Rr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($s),Pr.subVectors(this.max,$s),Qi.subVectors(t.a,$s),ts.subVectors(t.b,$s),es.subVectors(t.c,$s),ai.subVectors(ts,Qi),li.subVectors(es,ts),Ei.subVectors(Qi,es);let e=[0,-ai.z,ai.y,0,-li.z,li.y,0,-Ei.z,Ei.y,ai.z,0,-ai.x,li.z,0,-li.x,Ei.z,0,-Ei.x,-ai.y,ai.x,0,-li.y,li.x,0,-Ei.y,Ei.x,0];return!Yo(e,Qi,ts,es,Pr)||(e=[1,0,0,0,1,0,0,0,1],!Yo(e,Qi,ts,es,Pr))?!1:(Lr.crossVectors(ai,li),e=[Lr.x,Lr.y,Lr.z],Yo(e,Qi,ts,es,Pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Vn=[new T,new T,new T,new T,new T,new T,new T,new T],vn=new T,Rr=new ni,Qi=new T,ts=new T,es=new T,ai=new T,li=new T,Ei=new T,$s=new T,Pr=new T,Lr=new T,Ti=new T;function Yo(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ti.fromArray(n,r);const a=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),l=t.dot(Ti),c=e.dot(Ti),h=i.dot(Ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const wf=new ni,js=new T,$o=new T;class Fs{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):wf.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;js.subVectors(t,this.center);const e=js.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(js,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($o.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(js.copy(t.center).add($o)),this.expandByPoint(js.copy(t.center).sub($o))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new T,jo=new T,Ir=new T,ci=new T,Zo=new T,Dr=new T,Jo=new T;class Io{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){jo.copy(t).add(e).multiplyScalar(.5),Ir.copy(e).sub(t).normalize(),ci.copy(this.origin).sub(jo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ir),a=ci.dot(this.direction),l=-ci.dot(Ir),c=ci.lengthSq(),h=Math.abs(1-o*o);let d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){const v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(jo).addScaledVector(Ir,u),f}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);const i=Gn.dot(this.direction),s=Gn.dot(Gn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,i,s,r){Zo.subVectors(e,t),Dr.subVectors(i,t),Jo.crossVectors(Zo,Dr);let o=this.direction.dot(Jo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,t);const l=a*this.direction.dot(Dr.crossVectors(ci,Dr));if(l<0)return null;const c=a*this.direction.dot(Zo.cross(ci));if(c<0||l+c>o)return null;const h=-a*ci.dot(Jo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,i,s,r,o,a,l,c,h,d,u,f,p,v,g){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,d,u,f,p,v,g)}set(t,e,i,s,r,o,a,l,c,h,d,u,f,p,v,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/ns.setFromMatrixColumn(t,0).length(),r=1/ns.setFromMatrixColumn(t,1).length(),o=1/ns.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,p=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-v*c,e[9]=-a*l,e[2]=v-u*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,p=c*h,v=c*d;e[0]=u+v*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=v+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,p=c*h,v=c*d;e[0]=u-v*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,p=a*h,v=a*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,p=a*l,v=a*c;e[0]=l*h,e[4]=v-u*d,e[8]=p*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-v*d}else if(t.order==="XZY"){const u=o*l,f=o*c,p=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=o*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ef,t,Tf)}lookAt(t,e,i){const s=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),hi.crossVectors(i,nn),hi.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),hi.crossVectors(i,nn)),hi.normalize(),Ur.crossVectors(nn,hi),s[0]=hi.x,s[4]=Ur.x,s[8]=nn.x,s[1]=hi.y,s[5]=Ur.y,s[9]=nn.y,s[2]=hi.z,s[6]=Ur.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],p=i[2],v=i[6],g=i[10],m=i[14],b=i[3],y=i[7],_=i[11],U=i[15],R=s[0],P=s[4],I=s[8],M=s[12],x=s[1],C=s[5],z=s[9],w=s[13],D=s[2],F=s[6],N=s[10],G=s[14],H=s[3],q=s[7],$=s[11],B=s[15];return r[0]=o*R+a*x+l*D+c*H,r[4]=o*P+a*C+l*F+c*q,r[8]=o*I+a*z+l*N+c*$,r[12]=o*M+a*w+l*G+c*B,r[1]=h*R+d*x+u*D+f*H,r[5]=h*P+d*C+u*F+f*q,r[9]=h*I+d*z+u*N+f*$,r[13]=h*M+d*w+u*G+f*B,r[2]=p*R+v*x+g*D+m*H,r[6]=p*P+v*C+g*F+m*q,r[10]=p*I+v*z+g*N+m*$,r[14]=p*M+v*w+g*G+m*B,r[3]=b*R+y*x+_*D+U*H,r[7]=b*P+y*C+_*F+U*q,r[11]=b*I+y*z+_*N+U*$,r[15]=b*M+y*w+_*G+U*B,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],v=t[7],g=t[11],m=t[15];return p*(+r*l*d-s*c*d-r*a*u+i*c*u+s*a*f-i*l*f)+v*(+e*l*f-e*c*u+r*o*u-s*o*f+s*c*h-r*l*h)+g*(+e*c*d-e*a*f-r*o*d+i*o*f+r*a*h-i*c*h)+m*(-s*a*h-e*l*d+e*a*u+s*o*d-i*o*u+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],v=t[13],g=t[14],m=t[15],b=d*g*c-v*u*c+v*l*f-a*g*f-d*l*m+a*u*m,y=p*u*c-h*g*c-p*l*f+o*g*f+h*l*m-o*u*m,_=h*v*c-p*d*c+p*a*f-o*v*f-h*a*m+o*d*m,U=p*d*l-h*v*l-p*a*u+o*v*u+h*a*g-o*d*g,R=e*b+i*y+s*_+r*U;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return t[0]=b*P,t[1]=(v*u*r-d*g*r-v*s*f+i*g*f+d*s*m-i*u*m)*P,t[2]=(a*g*r-v*l*r+v*s*c-i*g*c-a*s*m+i*l*m)*P,t[3]=(d*l*r-a*u*r-d*s*c+i*u*c+a*s*f-i*l*f)*P,t[4]=y*P,t[5]=(h*g*r-p*u*r+p*s*f-e*g*f-h*s*m+e*u*m)*P,t[6]=(p*l*r-o*g*r-p*s*c+e*g*c+o*s*m-e*l*m)*P,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*f+e*l*f)*P,t[8]=_*P,t[9]=(p*d*r-h*v*r-p*i*f+e*v*f+h*i*m-e*d*m)*P,t[10]=(o*v*r-p*a*r+p*i*c-e*v*c-o*i*m+e*a*m)*P,t[11]=(h*a*r-o*d*r-h*i*c+e*d*c+o*i*f-e*a*f)*P,t[12]=U*P,t[13]=(h*v*s-p*d*s+p*i*u-e*v*u-h*i*g+e*d*g)*P,t[14]=(p*a*s-o*v*s-p*i*l+e*v*l+o*i*g-e*a*g)*P,t[15]=(o*d*s-h*a*s+h*i*l-e*d*l-o*i*u+e*a*u)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,v=o*h,g=o*d,m=a*d,b=l*c,y=l*h,_=l*d,U=i.x,R=i.y,P=i.z;return s[0]=(1-(v+m))*U,s[1]=(f+_)*U,s[2]=(p-y)*U,s[3]=0,s[4]=(f-_)*R,s[5]=(1-(u+m))*R,s[6]=(g+b)*R,s[7]=0,s[8]=(p+y)*P,s[9]=(g-b)*P,s[10]=(1-(u+v))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=ns.set(s[0],s[1],s[2]).length();const o=ns.set(s[4],s[5],s[6]).length(),a=ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],_n.copy(this);const c=1/r,h=1/o,d=1/a;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=d,_n.elements[9]*=d,_n.elements[10]*=d,e.setFromRotationMatrix(_n),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=jn){const l=this.elements,c=2*r/(e-t),h=2*r/(i-s),d=(e+t)/(e-t),u=(i+s)/(i-s);let f,p;if(a===jn)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===yo)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=jn){const l=this.elements,c=1/(e-t),h=1/(i-s),d=1/(o-r),u=(e+t)*c,f=(i+s)*h;let p,v;if(a===jn)p=(o+r)*d,v=-2*d;else if(a===yo)p=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ns=new T,_n=new pe,Ef=new T(0,0,0),Tf=new T(1,1,1),hi=new T,Ur=new T,nn=new T,Uc=new pe,Nc=new ti;class kn{constructor(t=0,e=0,i=0,s=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(De(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-De(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(De(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Uc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nc.setFromEuler(this),this.setFromQuaternion(Nc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class Gl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Af=0;const Oc=new T,is=new ti,Wn=new pe,Nr=new T,Zs=new T,Cf=new T,Rf=new ti,Fc=new T(1,0,0),kc=new T(0,1,0),Bc=new T(0,0,1),zc={type:"added"},Pf={type:"removed"},ss={type:"childadded",child:null},Ko={type:"childremoved",child:null};class be extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new T,e=new kn,i=new ti,s=new T(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new $t}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(Fc,t)}rotateY(t){return this.rotateOnAxis(kc,t)}rotateZ(t){return this.rotateOnAxis(Bc,t)}translateOnAxis(t,e){return Oc.copy(t).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fc,t)}translateY(t){return this.translateOnAxis(kc,t)}translateZ(t){return this.translateOnAxis(Bc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Nr.copy(t):Nr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Zs,Nr,this.up):Wn.lookAt(Nr,Zs,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),is.setFromRotationMatrix(Wn),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zc),ss.child=t,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pf),Ko.child=t,this.dispatchEvent(Ko),Ko.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zc),ss.child=t,this.dispatchEvent(ss),ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,t,Cf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,Rf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}be.DEFAULT_UP=new T(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new T,Xn=new T,Qo=new T,qn=new T,rs=new T,os=new T,Hc=new T,ta=new T,ea=new T,na=new T,ia=new Ae,sa=new Ae,ra=new Ae;class un{constructor(t=new T,e=new T,i=new T){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),xn.subVectors(t,e),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){xn.subVectors(s,e),Xn.subVectors(i,e),Qo.subVectors(t,e);const o=xn.dot(xn),a=xn.dot(Xn),l=xn.dot(Qo),c=Xn.dot(Xn),h=Xn.dot(Qo),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qn.x),l.addScaledVector(o,qn.y),l.addScaledVector(a,qn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return ia.setScalar(0),sa.setScalar(0),ra.setScalar(0),ia.fromBufferAttribute(t,e),sa.fromBufferAttribute(t,i),ra.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ia,r.x),o.addScaledVector(sa,r.y),o.addScaledVector(ra,r.z),o}static isFrontFacing(t,e,i,s){return xn.subVectors(i,e),Xn.subVectors(t,e),xn.cross(Xn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),xn.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return un.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;rs.subVectors(s,i),os.subVectors(r,i),ta.subVectors(t,i);const l=rs.dot(ta),c=os.dot(ta);if(l<=0&&c<=0)return e.copy(i);ea.subVectors(t,s);const h=rs.dot(ea),d=os.dot(ea);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(rs,o);na.subVectors(t,r);const f=rs.dot(na),p=os.dot(na);if(p>=0&&f<=p)return e.copy(r);const v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(i).addScaledVector(os,a);const g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return Hc.subVectors(r,s),a=(d-h)/(d-h+(f-p)),e.copy(s).addScaledVector(Hc,a);const m=1/(g+v+u);return o=v*m,a=u*m,e.copy(i).addScaledVector(rs,o).addScaledVector(os,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const yd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Or={h:0,s:0,l:0};function oa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=i,se.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=se.workingColorSpace){if(t=Vl(t,1),e=De(e,0,1),i=De(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=oa(o,r,t+1/3),this.g=oa(o,r,t),this.b=oa(o,r,t-1/3)}return se.toWorkingColorSpace(this,s),this}setStyle(t,e=Me){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Me){const i=yd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zn(t.r),this.g=Zn(t.g),this.b=Zn(t.b),this}copyLinearToSRGB(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Me){return se.fromWorkingColorSpace(Xe.copy(this),t),Math.round(De(Xe.r*255,0,255))*65536+Math.round(De(Xe.g*255,0,255))*256+Math.round(De(Xe.b*255,0,255))}getHexString(t=Me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(Xe.copy(this),e);const i=Xe.r,s=Xe.g,r=Xe.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=Me){se.fromWorkingColorSpace(Xe.copy(this),t);const e=Xe.r,i=Xe.g,s=Xe.b;return t!==Me?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(Or);const i=ir(di.h,Or.h,e),s=ir(di.s,Or.s,e),r=ir(di.l,Or.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new Qt;Qt.NAMES=yd;let Lf=0;class ks extends Yi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=$i(),this.name="",this.blending=xs,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ua,this.blendDst=Na,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(i.blending=this.blending),this.side!==Kn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ua&&(i.blendSrc=this.blendSrc),this.blendDst!==Na&&(i.blendDst=this.blendDst),this.blendEquation!==Oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Jt extends ks{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new T,Fr=new dt;class Tn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=wc,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Fr.fromBufferAttribute(this,e),Fr.applyMatrix3(t),this.setXY(e,Fr.x,Fr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ps(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ye(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ps(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ps(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ps(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ps(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),i=Ye(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),i=Ye(i,this.array),s=Ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),i=Ye(i,this.array),s=Ye(s,this.array),r=Ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wc&&(t.usage=this.usage),t}}class bd extends Tn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Md extends Tn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Xt extends Tn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let If=0;const ln=new pe,aa=new be,as=new T,sn=new ni,Js=new ni,Be=new T;class Ee extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vd(t)?Md:bd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new $t().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,i){return ln.makeTranslation(t,e,i),this.applyMatrix4(ln),this}scale(t,e,i){return ln.makeScale(t,e,i),this.applyMatrix4(ln),this}lookAt(t){return aa.lookAt(t),aa.updateMatrix(),this.applyMatrix4(aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xt(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Js.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(sn.min,Js.min),sn.expandByPoint(Be),Be.addVectors(sn.max,Js.max),sn.expandByPoint(Be)):(sn.expandByPoint(Js.min),sn.expandByPoint(Js.max))}sn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Be));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Be.fromBufferAttribute(a,c),l&&(as.fromBufferAttribute(t,c),Be.add(as)),s=Math.max(s,i.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new T,l[I]=new T;const c=new T,h=new T,d=new T,u=new dt,f=new dt,p=new dt,v=new T,g=new T;function m(I,M,x){c.fromBufferAttribute(i,I),h.fromBufferAttribute(i,M),d.fromBufferAttribute(i,x),u.fromBufferAttribute(r,I),f.fromBufferAttribute(r,M),p.fromBufferAttribute(r,x),h.sub(c),d.sub(c),f.sub(u),p.sub(u);const C=1/(f.x*p.y-p.x*f.y);isFinite(C)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(C),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(C),a[I].add(v),a[M].add(v),a[x].add(v),l[I].add(g),l[M].add(g),l[x].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let I=0,M=b.length;I<M;++I){const x=b[I],C=x.start,z=x.count;for(let w=C,D=C+z;w<D;w+=3)m(t.getX(w+0),t.getX(w+1),t.getX(w+2))}const y=new T,_=new T,U=new T,R=new T;function P(I){U.fromBufferAttribute(s,I),R.copy(U);const M=a[I];y.copy(M),y.sub(U.multiplyScalar(U.dot(M))).normalize(),_.crossVectors(R,M);const C=_.dot(l[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,C)}for(let I=0,M=b.length;I<M;++I){const x=b[I],C=x.start,z=x.count;for(let w=C,D=C+z;w<D;w+=3)P(t.getX(w+0)),P(t.getX(w+1)),P(t.getX(w+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const s=new T,r=new T,o=new T,a=new T,l=new T,c=new T,h=new T,d=new T;if(t)for(let u=0,f=t.count;u<f;u+=3){const p=t.getX(u+0),v=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,p=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let m=0;m<h;m++)u[p++]=c[f++]}return new Tn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vc=new pe,Ai=new Io,kr=new Fs,Gc=new T,Br=new T,zr=new T,Hr=new T,la=new T,Vr=new T,Wc=new T,Gr=new T;class ht extends be{constructor(t=new Ee,e=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Vr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(la.fromBufferAttribute(d,t),o?Vr.addScaledVector(la,h):Vr.addScaledVector(la.sub(e),h))}e.add(Vr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),kr.copy(i.boundingSphere),kr.applyMatrix4(r),Ai.copy(t.ray).recast(t.near),!(kr.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(kr,Gc)===null||Ai.origin.distanceToSquared(Gc)>(t.far-t.near)**2))&&(Vc.copy(r).invert(),Ai.copy(t.ray).applyMatrix4(Vc),!(i.boundingBox!==null&&Ai.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ai)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=u.length;p<v;p++){const g=u[p],m=o[g.materialIndex],b=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=b,U=y;_<U;_+=3){const R=a.getX(_),P=a.getX(_+1),I=a.getX(_+2);s=Wr(this,m,t,i,c,h,d,R,P,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const b=a.getX(g),y=a.getX(g+1),_=a.getX(g+2);s=Wr(this,o,t,i,c,h,d,b,y,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=u.length;p<v;p++){const g=u[p],m=o[g.materialIndex],b=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=b,U=y;_<U;_+=3){const R=_,P=_+1,I=_+2;s=Wr(this,m,t,i,c,h,d,R,P,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const b=g,y=g+1,_=g+2;s=Wr(this,o,t,i,c,h,d,b,y,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Df(n,t,e,i,s,r,o,a){let l;if(t.side===je?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Kn,a),l===null)return null;Gr.copy(a),Gr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Gr);return c<e.near||c>e.far?null:{distance:c,point:Gr.clone(),object:n}}function Wr(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Br),n.getVertexPosition(l,zr),n.getVertexPosition(c,Hr);const h=Df(n,t,e,i,Br,zr,Hr,Wc);if(h){const d=new T;un.getBarycoord(Wc,Br,zr,Hr,d),s&&(h.uv=un.getInterpolatedAttribute(s,a,l,c,d,new dt)),r&&(h.uv1=un.getInterpolatedAttribute(r,a,l,c,d,new dt)),o&&(h.normal=un.getInterpolatedAttribute(o,a,l,c,d,new T),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new T,materialIndex:0};un.getNormal(Br,zr,Hr,u.normal),h.face=u,h.barycoord=d}return h}class oe extends Ee{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,s,o,2),p("x","z","y",1,-1,t,i,-e,s,o,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(d,2));function p(v,g,m,b,y,_,U,R,P,I,M){const x=_/P,C=U/I,z=_/2,w=U/2,D=R/2,F=P+1,N=I+1;let G=0,H=0;const q=new T;for(let $=0;$<N;$++){const B=$*C-w;for(let W=0;W<F;W++){const nt=W*x-z;q[v]=nt*b,q[g]=B*y,q[m]=D,c.push(q.x,q.y,q.z),q[v]=0,q[g]=0,q[m]=R>0?1:-1,h.push(q.x,q.y,q.z),d.push(W/P),d.push(1-$/I),G+=1}}for(let $=0;$<I;$++)for(let B=0;B<P;B++){const W=u+B+F*$,nt=u+B+F*($+1),j=u+(B+1)+F*($+1),tt=u+(B+1)+F*$;l.push(W,nt,tt),l.push(nt,j,tt),H+=6}a.addGroup(f,H,M),f+=H,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ps(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function $e(n){const t={};for(let e=0;e<n.length;e++){const i=Ps(n[e]);for(const s in i)t[s]=i[s]}return t}function Uf(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Sd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const Nf={clone:Ps,merge:$e};var Of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ff=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends ks{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Of,this.fragmentShader=Ff,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ps(t.uniforms),this.uniformsGroups=Uf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class wd extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new T,Xc=new dt,qc=new dt;class hn extends wd{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=hr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hr*2*Math.atan(Math.tan(bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,Xc,qc),e.subVectors(qc,Xc)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(bs*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ls=-90,cs=1;class kf extends be{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(ls,cs,t,e);s.layers=this.layers,this.add(s);const r=new hn(ls,cs,t,e);r.layers=this.layers,this.add(r);const o=new hn(ls,cs,t,e);o.layers=this.layers,this.add(o);const a=new hn(ls,cs,t,e);a.layers=this.layers,this.add(a);const l=new hn(ls,cs,t,e);l.layers=this.layers,this.add(l);const c=new hn(ls,cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===jn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===yo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Ed extends He{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ts,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Bf extends Vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ed(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new oe(5,5,5),r=new Mi({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:je,blending:gi});r.uniforms.tEquirect.value=e;const o=new ht(s,r),a=e.minFilter;return e.minFilter===Bi&&(e.minFilter=Nn),new kf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const ca=new T,zf=new T,Hf=new $t;class pi{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=ca.subVectors(i,e).cross(zf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ca),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Hf.getNormalMatrix(t),s=this.coplanarPoint(ca).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new Fs,Xr=new T;class Wl{constructor(t=new pi,e=new pi,i=new pi,s=new pi,r=new pi,o=new pi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=jn){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],p=s[9],v=s[10],g=s[11],m=s[12],b=s[13],y=s[14],_=s[15];if(i[0].setComponents(l-r,u-c,g-f,_-m).normalize(),i[1].setComponents(l+r,u+c,g+f,_+m).normalize(),i[2].setComponents(l+o,u+h,g+p,_+b).normalize(),i[3].setComponents(l-o,u-h,g-p,_-b).normalize(),i[4].setComponents(l-a,u-d,g-v,_-y).normalize(),e===jn)i[5].setComponents(l+a,u+d,g+v,_+y).normalize();else if(e===yo)i[5].setComponents(a,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(t){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Xr.x=s.normal.x>0?t.max.x:t.min.x,Xr.y=s.normal.y>0?t.max.y:t.min.y,Xr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Td(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Vf(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){const p=d[u],v=d[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){const v=d[f];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class pn extends Ee{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],p=[],v=[],g=[];for(let m=0;m<h;m++){const b=m*u-o;for(let y=0;y<c;y++){const _=y*d-r;p.push(_,-b,0),v.push(0,0,1),g.push(y/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){const y=b+c*m,_=b+c*(m+1),U=b+1+c*(m+1),R=b+1+c*m;f.push(y,_,R),f.push(_,U,R)}this.setIndex(f),this.setAttribute("position",new Xt(p,3)),this.setAttribute("normal",new Xt(v,3)),this.setAttribute("uv",new Xt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Gf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Kf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ep=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,np=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ip=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,up=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",yp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ap=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ip=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Up=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Np=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$p=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,em=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,im=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,am=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,um=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Am=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Om=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ng=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ig=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ag=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_g=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:Gf,alphahash_pars_fragment:Wf,alphamap_fragment:Xf,alphamap_pars_fragment:qf,alphatest_fragment:Yf,alphatest_pars_fragment:$f,aomap_fragment:jf,aomap_pars_fragment:Zf,batching_pars_vertex:Jf,batching_vertex:Kf,begin_vertex:Qf,beginnormal_vertex:tp,bsdfs:ep,iridescence_fragment:np,bumpmap_pars_fragment:ip,clipping_planes_fragment:sp,clipping_planes_pars_fragment:rp,clipping_planes_pars_vertex:op,clipping_planes_vertex:ap,color_fragment:lp,color_pars_fragment:cp,color_pars_vertex:hp,color_vertex:dp,common:up,cube_uv_reflection_fragment:fp,defaultnormal_vertex:pp,displacementmap_pars_vertex:mp,displacementmap_vertex:gp,emissivemap_fragment:vp,emissivemap_pars_fragment:_p,colorspace_fragment:xp,colorspace_pars_fragment:yp,envmap_fragment:bp,envmap_common_pars_fragment:Mp,envmap_pars_fragment:Sp,envmap_pars_vertex:wp,envmap_physical_pars_fragment:Np,envmap_vertex:Ep,fog_vertex:Tp,fog_pars_vertex:Ap,fog_fragment:Cp,fog_pars_fragment:Rp,gradientmap_pars_fragment:Pp,lightmap_pars_fragment:Lp,lights_lambert_fragment:Ip,lights_lambert_pars_fragment:Dp,lights_pars_begin:Up,lights_toon_fragment:Op,lights_toon_pars_fragment:Fp,lights_phong_fragment:kp,lights_phong_pars_fragment:Bp,lights_physical_fragment:zp,lights_physical_pars_fragment:Hp,lights_fragment_begin:Vp,lights_fragment_maps:Gp,lights_fragment_end:Wp,logdepthbuf_fragment:Xp,logdepthbuf_pars_fragment:qp,logdepthbuf_pars_vertex:Yp,logdepthbuf_vertex:$p,map_fragment:jp,map_pars_fragment:Zp,map_particle_fragment:Jp,map_particle_pars_fragment:Kp,metalnessmap_fragment:Qp,metalnessmap_pars_fragment:tm,morphinstance_vertex:em,morphcolor_vertex:nm,morphnormal_vertex:im,morphtarget_pars_vertex:sm,morphtarget_vertex:rm,normal_fragment_begin:om,normal_fragment_maps:am,normal_pars_fragment:lm,normal_pars_vertex:cm,normal_vertex:hm,normalmap_pars_fragment:dm,clearcoat_normal_fragment_begin:um,clearcoat_normal_fragment_maps:fm,clearcoat_pars_fragment:pm,iridescence_pars_fragment:mm,opaque_fragment:gm,packing:vm,premultiplied_alpha_fragment:_m,project_vertex:xm,dithering_fragment:ym,dithering_pars_fragment:bm,roughnessmap_fragment:Mm,roughnessmap_pars_fragment:Sm,shadowmap_pars_fragment:wm,shadowmap_pars_vertex:Em,shadowmap_vertex:Tm,shadowmask_pars_fragment:Am,skinbase_vertex:Cm,skinning_pars_vertex:Rm,skinning_vertex:Pm,skinnormal_vertex:Lm,specularmap_fragment:Im,specularmap_pars_fragment:Dm,tonemapping_fragment:Um,tonemapping_pars_fragment:Nm,transmission_fragment:Om,transmission_pars_fragment:Fm,uv_pars_fragment:km,uv_pars_vertex:Bm,uv_vertex:zm,worldpos_vertex:Hm,background_vert:Vm,background_frag:Gm,backgroundCube_vert:Wm,backgroundCube_frag:Xm,cube_vert:qm,cube_frag:Ym,depth_vert:$m,depth_frag:jm,distanceRGBA_vert:Zm,distanceRGBA_frag:Jm,equirect_vert:Km,equirect_frag:Qm,linedashed_vert:tg,linedashed_frag:eg,meshbasic_vert:ng,meshbasic_frag:ig,meshlambert_vert:sg,meshlambert_frag:rg,meshmatcap_vert:og,meshmatcap_frag:ag,meshnormal_vert:lg,meshnormal_frag:cg,meshphong_vert:hg,meshphong_frag:dg,meshphysical_vert:ug,meshphysical_frag:fg,meshtoon_vert:pg,meshtoon_frag:mg,points_vert:gg,points_frag:vg,shadow_vert:_g,shadow_frag:xg,sprite_vert:yg,sprite_frag:bg},_t={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},In={basic:{uniforms:$e([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:$e([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:$e([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:$e([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:$e([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:$e([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:$e([_t.points,_t.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:$e([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:$e([_t.common,_t.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:$e([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:$e([_t.sprite,_t.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:$e([_t.common,_t.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:$e([_t.lights,_t.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};In.physical={uniforms:$e([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const qr={r:0,b:0,g:0},Ri=new kn,Mg=new pe;function Sg(n,t,e,i,s,r,o){const a=new Qt(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function p(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?e:t).get(y)),y}function v(b){let y=!1;const _=p(b);_===null?m(a,l):_&&_.isColor&&(m(_,1),y=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(b,y){const _=p(y);_&&(_.isCubeTexture||_.mapping===Po)?(h===void 0&&(h=new ht(new oe(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:Ps(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ri.copy(y.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(Ri)),h.material.toneMapped=se.getTransfer(_.colorSpace)!==de,(d!==_||u!==_.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=_,u=_.version,f=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ht(new pn(2,2),new Mi({name:"BackgroundMaterial",uniforms:Ps(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=se.getTransfer(_.colorSpace)!==de,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=_,u=_.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,y){b.getRGB(qr,Sd(n)),i.buffers.color.setClear(qr.r,qr.g,qr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:v,addToRenderList:g}}function wg(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(x,C,z,w,D){let F=!1;const N=d(w,z,C);r!==N&&(r=N,c(r.object)),F=f(x,w,z,D),F&&p(x,w,z,D),D!==null&&t.update(D,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,_(x,C,z,w),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function h(x){return n.deleteVertexArray(x)}function d(x,C,z){const w=z.wireframe===!0;let D=i[x.id];D===void 0&&(D={},i[x.id]=D);let F=D[C.id];F===void 0&&(F={},D[C.id]=F);let N=F[w];return N===void 0&&(N=u(l()),F[w]=N),N}function u(x){const C=[],z=[],w=[];for(let D=0;D<e;D++)C[D]=0,z[D]=0,w[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:w,object:x,attributes:{},index:null}}function f(x,C,z,w){const D=r.attributes,F=C.attributes;let N=0;const G=z.getAttributes();for(const H in G)if(G[H].location>=0){const $=D[H];let B=F[H];if(B===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(B=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(B=x.instanceColor)),$===void 0||$.attribute!==B||B&&$.data!==B.data)return!0;N++}return r.attributesNum!==N||r.index!==w}function p(x,C,z,w){const D={},F=C.attributes;let N=0;const G=z.getAttributes();for(const H in G)if(G[H].location>=0){let $=F[H];$===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&($=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&($=x.instanceColor));const B={};B.attribute=$,$&&$.data&&(B.data=$.data),D[H]=B,N++}r.attributes=D,r.attributesNum=N,r.index=w}function v(){const x=r.newAttributes;for(let C=0,z=x.length;C<z;C++)x[C]=0}function g(x){m(x,0)}function m(x,C){const z=r.newAttributes,w=r.enabledAttributes,D=r.attributeDivisors;z[x]=1,w[x]===0&&(n.enableVertexAttribArray(x),w[x]=1),D[x]!==C&&(n.vertexAttribDivisor(x,C),D[x]=C)}function b(){const x=r.newAttributes,C=r.enabledAttributes;for(let z=0,w=C.length;z<w;z++)C[z]!==x[z]&&(n.disableVertexAttribArray(z),C[z]=0)}function y(x,C,z,w,D,F,N){N===!0?n.vertexAttribIPointer(x,C,z,D,F):n.vertexAttribPointer(x,C,z,w,D,F)}function _(x,C,z,w){v();const D=w.attributes,F=z.getAttributes(),N=C.defaultAttributeValues;for(const G in F){const H=F[G];if(H.location>=0){let q=D[G];if(q===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(q=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(q=x.instanceColor)),q!==void 0){const $=q.normalized,B=q.itemSize,W=t.get(q);if(W===void 0)continue;const nt=W.buffer,j=W.type,tt=W.bytesPerElement,lt=j===n.INT||j===n.UNSIGNED_INT||q.gpuType===Nl;if(q.isInterleavedBufferAttribute){const it=q.data,pt=it.stride,Tt=q.offset;if(it.isInstancedInterleavedBuffer){for(let Nt=0;Nt<H.locationSize;Nt++)m(H.location+Nt,it.meshPerAttribute);x.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Nt=0;Nt<H.locationSize;Nt++)g(H.location+Nt);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let Nt=0;Nt<H.locationSize;Nt++)y(H.location+Nt,B/H.locationSize,j,$,pt*tt,(Tt+B/H.locationSize*Nt)*tt,lt)}else{if(q.isInstancedBufferAttribute){for(let it=0;it<H.locationSize;it++)m(H.location+it,q.meshPerAttribute);x.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let it=0;it<H.locationSize;it++)g(H.location+it);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let it=0;it<H.locationSize;it++)y(H.location+it,B/H.locationSize,j,$,B*tt,B/H.locationSize*it*tt,lt)}}else if(N!==void 0){const $=N[G];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(H.location,$);break;case 3:n.vertexAttrib3fv(H.location,$);break;case 4:n.vertexAttrib4fv(H.location,$);break;default:n.vertexAttrib1fv(H.location,$)}}}}b()}function U(){I();for(const x in i){const C=i[x];for(const z in C){const w=C[z];for(const D in w)h(w[D].object),delete w[D];delete C[z]}delete i[x]}}function R(x){if(i[x.id]===void 0)return;const C=i[x.id];for(const z in C){const w=C[z];for(const D in w)h(w[D].object),delete w[D];delete C[z]}delete i[x.id]}function P(x){for(const C in i){const z=i[C];if(z[x.id]===void 0)continue;const w=z[x.id];for(const D in w)h(w[D].object),delete w[D];delete z[x.id]}}function I(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:M,dispose:U,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:g,disableUnusedAttributes:b}}function Eg(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),e.update(h,i,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let p=0;p<d;p++)f+=h[p];e.update(f,i,1)}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],h[p],u[p]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let p=0;for(let v=0;v<d;v++)p+=h[v]*u[v];e.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Tg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==wn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const I=P===yr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Qn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==On&&!I)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=p>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:U,maxSamples:R}}function Ag(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new pi,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const p=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,m=n.get(d);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{const b=r?0:i,y=b*4;let _=m.clippingState||null;l.value=_,_=h(p,u,y,f);for(let U=0;U!==y;++U)_[U]=e[U];m.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,p){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=l.value,p!==!0||g===null){const m=f+v*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,_=f;y!==v;++y,_+=4)o.copy(d[y]).applyMatrix4(b,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function Cg(n){let t=new WeakMap;function e(o,a){return a===Ga?o.mapping=Ts:a===Wa&&(o.mapping=As),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ga||a===Wa)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Bf(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Ad extends wd{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const gs=4,Yc=[.125,.215,.35,.446,.526,.582],Fi=20,ha=new Ad,$c=new Qt;let da=null,ua=0,fa=0,pa=!1;const Ni=(1+Math.sqrt(5))/2,hs=1/Ni,jc=[new T(-Ni,hs,0),new T(Ni,hs,0),new T(-hs,0,Ni),new T(hs,0,Ni),new T(0,Ni,-hs),new T(0,Ni,hs),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class Zc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){da=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(da,ua,fa),this._renderer.xr.enabled=pa,t.scissorTest=!1,Yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ts||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),da=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:yr,format:wn,colorSpace:Os,depthBuffer:!1},s=Jc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jc(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rg(r)),this._blurMaterial=Pg(r,t,e)}return s}_compileMaterial(t){const e=new ht(this._lodPlanes[0],t);this._renderer.compile(e,ha)}_sceneToCubeUV(t,e,i,s){const a=new hn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor($c),h.toneMapping=vi,h.autoClear=!1;const f=new Jt({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),p=new ht(new oe,f);let v=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,v=!0):(f.color.copy($c),v=!0);for(let m=0;m<6;m++){const b=m%3;b===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):b===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const y=this._cubeSize;Yr(s,b*y,m>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=g}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ts||t.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ht(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Yr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ha)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=jc[(s-r-1)%jc.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ht(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Fi-1),v=r/p,g=isFinite(r)?1+Math.floor(h*v):Fi;g>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Fi}`);const m=[];let b=0;for(let P=0;P<Fi;++P){const I=P/v,M=Math.exp(-I*I/2);m.push(M),P===0?b+=M:P<g&&(b+=2*M)}for(let P=0;P<m.length;P++)m[P]=m[P]/b;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=p,u.mipInt.value=y-i;const _=this._sizeLods[s],U=3*_*(s>y-gs?s-y+gs:0),R=4*(this._cubeSize-_);Yr(e,U,R,3*_,2*_),l.setRenderTarget(e),l.render(d,ha)}}function Rg(n){const t=[],e=[],i=[];let s=n;const r=n-gs+1+Yc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-gs?l=Yc[o-n+gs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,p=6,v=3,g=2,m=1,b=new Float32Array(v*p*f),y=new Float32Array(g*p*f),_=new Float32Array(m*p*f);for(let R=0;R<f;R++){const P=R%3*2/3-1,I=R>2?0:-1,M=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];b.set(M,v*p*R),y.set(u,g*p*R);const x=[R,R,R,R,R,R];_.set(x,m*p*R)}const U=new Ee;U.setAttribute("position",new Tn(b,v)),U.setAttribute("uv",new Tn(y,g)),U.setAttribute("faceIndex",new Tn(_,m)),t.push(U),s>gs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Jc(n,t,e){const i=new Vi(n,t,e);return i.texture.mapping=Po,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Pg(n,t,e){const i=new Float32Array(Fi),s=new T(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Kc(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Qc(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Xl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Lg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ga||l===Wa,h=l===Ts||l===As;if(c||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Zc(n)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Zc(n)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Ig(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&er("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Dg(n,t,e,i){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const p in u.attributes)t.remove(u.attributes[p]);for(const p in u.morphAttributes){const v=u.morphAttributes[p];for(let g=0,m=v.length;g<m;g++)t.remove(v[g])}u.removeEventListener("dispose",o),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const p in u)t.update(u[p],n.ARRAY_BUFFER);const f=d.morphAttributes;for(const p in f){const v=f[p];for(let g=0,m=v.length;g<m;g++)t.update(v[g],n.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,p=d.attributes.position;let v=0;if(f!==null){const b=f.array;v=f.version;for(let y=0,_=b.length;y<_;y+=3){const U=b[y+0],R=b[y+1],P=b[y+2];u.push(U,R,R,P,P,U)}}else if(p!==void 0){const b=p.array;v=p.version;for(let y=0,_=b.length/3-1;y<_;y+=3){const U=y+0,R=y+1,P=y+2;u.push(U,R,R,P,P,U)}}else return;const g=new(vd(u)?Md:bd)(u,1);g.version=v;const m=r.get(d);m&&t.remove(m),r.set(d,g)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Ug(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*o),e.update(f,i,1)}function c(u,f,p){p!==0&&(n.drawElementsInstanced(i,f,r,u*o,p),e.update(f,i,p))}function h(u,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,i,1)}function d(u,f,p,v){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<u.length;m++)c(u[m]/o,f[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,v,0,p);let m=0;for(let b=0;b<p;b++)m+=f[b]*v[b];e.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Ng(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Og(n,t,e){const i=new WeakMap,s=new Ae;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==d){let M=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",M)};u!==void 0&&u.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),p===!0&&(y=2),v===!0&&(y=3);let _=a.attributes.position.count*y,U=1;_>t.maxTextureSize&&(U=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const R=new Float32Array(_*U*4*d),P=new xd(R,_,U,d);P.type=On,P.needsUpdate=!0;const I=y*4;for(let x=0;x<d;x++){const C=g[x],z=m[x],w=b[x],D=_*U*4*x;for(let F=0;F<C.count;F++){const N=F*I;f===!0&&(s.fromBufferAttribute(C,F),R[D+N+0]=s.x,R[D+N+1]=s.y,R[D+N+2]=s.z,R[D+N+3]=0),p===!0&&(s.fromBufferAttribute(z,F),R[D+N+4]=s.x,R[D+N+5]=s.y,R[D+N+6]=s.z,R[D+N+7]=0),v===!0&&(s.fromBufferAttribute(w,F),R[D+N+8]=s.x,R[D+N+9]=s.y,R[D+N+10]=s.z,R[D+N+11]=w.itemSize===4?s.w:1)}}u={count:d,texture:P,size:new dt(_,U)},i.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Fg(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Cd extends He{constructor(t,e,i,s,r,o,a,l,c,h=ys){if(h!==ys&&h!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ys&&(i=Hi),i===void 0&&h===Rs&&(i=Cs),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Rd=new He,th=new Cd(1,1),Pd=new xd,Ld=new Sf,Id=new Ed,eh=[],nh=[],ih=new Float32Array(16),sh=new Float32Array(9),rh=new Float32Array(4);function Bs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=eh[s];if(r===void 0&&(r=new Float32Array(s),eh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Fe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ke(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Do(n,t){let e=nh[t];e===void 0&&(e=new Int32Array(t),nh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function kg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Bg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2fv(this.addr,t),ke(e,t)}}function zg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;n.uniform3fv(this.addr,t),ke(e,t)}}function Hg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4fv(this.addr,t),ke(e,t)}}function Vg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Fe(e,i))return;rh.set(i),n.uniformMatrix2fv(this.addr,!1,rh),ke(e,i)}}function Gg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Fe(e,i))return;sh.set(i),n.uniformMatrix3fv(this.addr,!1,sh),ke(e,i)}}function Wg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Fe(e,i))return;ih.set(i),n.uniformMatrix4fv(this.addr,!1,ih),ke(e,i)}}function Xg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function qg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2iv(this.addr,t),ke(e,t)}}function Yg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3iv(this.addr,t),ke(e,t)}}function $g(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4iv(this.addr,t),ke(e,t)}}function jg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Zg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2uiv(this.addr,t),ke(e,t)}}function Jg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3uiv(this.addr,t),ke(e,t)}}function Kg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4uiv(this.addr,t),ke(e,t)}}function Qg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(th.compareFunction=gd,r=th):r=Rd,e.setTexture2D(t||r,s)}function t0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ld,s)}function e0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Id,s)}function n0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Pd,s)}function i0(n){switch(n){case 5126:return kg;case 35664:return Bg;case 35665:return zg;case 35666:return Hg;case 35674:return Vg;case 35675:return Gg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return $g;case 5125:return jg;case 36294:return Zg;case 36295:return Jg;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return e0;case 36289:case 36303:case 36311:case 36292:return n0}}function s0(n,t){n.uniform1fv(this.addr,t)}function r0(n,t){const e=Bs(t,this.size,2);n.uniform2fv(this.addr,e)}function o0(n,t){const e=Bs(t,this.size,3);n.uniform3fv(this.addr,e)}function a0(n,t){const e=Bs(t,this.size,4);n.uniform4fv(this.addr,e)}function l0(n,t){const e=Bs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function c0(n,t){const e=Bs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function h0(n,t){const e=Bs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function d0(n,t){n.uniform1iv(this.addr,t)}function u0(n,t){n.uniform2iv(this.addr,t)}function f0(n,t){n.uniform3iv(this.addr,t)}function p0(n,t){n.uniform4iv(this.addr,t)}function m0(n,t){n.uniform1uiv(this.addr,t)}function g0(n,t){n.uniform2uiv(this.addr,t)}function v0(n,t){n.uniform3uiv(this.addr,t)}function _0(n,t){n.uniform4uiv(this.addr,t)}function x0(n,t,e){const i=this.cache,s=t.length,r=Do(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Rd,r[o])}function y0(n,t,e){const i=this.cache,s=t.length,r=Do(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ld,r[o])}function b0(n,t,e){const i=this.cache,s=t.length,r=Do(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Id,r[o])}function M0(n,t,e){const i=this.cache,s=t.length,r=Do(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Pd,r[o])}function S0(n){switch(n){case 5126:return s0;case 35664:return r0;case 35665:return o0;case 35666:return a0;case 35674:return l0;case 35675:return c0;case 35676:return h0;case 5124:case 35670:return d0;case 35667:case 35671:return u0;case 35668:case 35672:return f0;case 35669:case 35673:return p0;case 5125:return m0;case 36294:return g0;case 36295:return v0;case 36296:return _0;case 35678:case 36198:case 36298:case 36306:case 35682:return x0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return M0}}class w0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=i0(e.type)}}class E0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=S0(e.type)}}class T0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const ma=/(\w+)(\])?(\[|\.)?/g;function oh(n,t){n.seq.push(t),n.map[t.id]=t}function A0(n,t,e){const i=n.name,s=i.length;for(ma.lastIndex=0;;){const r=ma.exec(i),o=ma.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){oh(e,c===void 0?new w0(a,n,t):new E0(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new T0(a),oh(e,d)),e=d}}}class po{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);A0(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function ah(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const C0=37297;let R0=0;function P0(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const lh=new $t;function L0(n){se._getMatrix(lh,se.workingColorSpace,n);const t=`mat3( ${lh.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(n)){case Lo:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function ch(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+P0(n.getShaderSource(t),o)}else return s}function I0(n,t){const e=L0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function D0(n,t){let e;switch(t){case Nu:e="Linear";break;case Ou:e="Reinhard";break;case Fu:e="Cineon";break;case sd:e="ACESFilmic";break;case Bu:e="AgX";break;case zu:e="Neutral";break;case ku:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const $r=new T;function U0(){se.getLuminanceCoefficients($r);const n=$r.x.toFixed(4),t=$r.y.toFixed(4),e=$r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nr).join(`
`)}function O0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function F0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function nr(n){return n!==""}function hh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const k0=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(n){return n.replace(k0,z0)}const B0=new Map;function z0(n,t){let e=Zt[t];if(e===void 0){const i=B0.get(t);if(i!==void 0)e=Zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return _l(e)}const H0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uh(n){return n.replace(H0,V0)}function V0(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fh(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function G0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ed?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===nd?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===$n&&(t="SHADOWMAP_TYPE_VSM"),t}function W0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ts:case As:t="ENVMAP_TYPE_CUBE";break;case Po:t="ENVMAP_TYPE_CUBE_UV";break}return t}function X0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case As:t="ENVMAP_MODE_REFRACTION";break}return t}function q0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case id:t="ENVMAP_BLENDING_MULTIPLY";break;case Du:t="ENVMAP_BLENDING_MIX";break;case Uu:t="ENVMAP_BLENDING_ADD";break}return t}function Y0(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function $0(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=G0(e),c=W0(e),h=X0(e),d=q0(e),u=Y0(e),f=N0(e),p=O0(r),v=s.createProgram();let g,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(nr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(nr).join(`
`),m.length>0&&(m+=`
`)):(g=[fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nr).join(`
`),m=[fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vi?"#define TONE_MAPPING":"",e.toneMapping!==vi?Zt.tonemapping_pars_fragment:"",e.toneMapping!==vi?D0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,I0("linearToOutputTexel",e.outputColorSpace),U0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(nr).join(`
`)),o=_l(o),o=hh(o,e),o=dh(o,e),a=_l(a),a=hh(a,e),a=dh(a,e),o=uh(o),a=uh(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=b+g+o,_=b+m+a,U=ah(s,s.VERTEX_SHADER,y),R=ah(s,s.FRAGMENT_SHADER,_);s.attachShader(v,U),s.attachShader(v,R),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(C){if(n.debug.checkShaderErrors){const z=s.getProgramInfoLog(v).trim(),w=s.getShaderInfoLog(U).trim(),D=s.getShaderInfoLog(R).trim();let F=!0,N=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,U,R);else{const G=ch(s,U,"vertex"),H=ch(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+G+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(w===""||D==="")&&(N=!1);N&&(C.diagnostics={runnable:F,programLog:z,vertexShader:{log:w,prefix:g},fragmentShader:{log:D,prefix:m}})}s.deleteShader(U),s.deleteShader(R),I=new po(s,v),M=F0(s,v)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,C0)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=R0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=R,this}let j0=0;class Z0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new J0(t),e.set(t,i)),i}}class J0{constructor(t){this.id=j0++,this.code=t,this.usedTimes=0}}function K0(n,t,e,i,s,r,o){const a=new Gl,l=new Z0,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let f=s.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,x,C,z,w){const D=z.fog,F=w.geometry,N=M.isMeshStandardMaterial?z.environment:null,G=(M.isMeshStandardMaterial?e:t).get(M.envMap||N),H=G&&G.mapping===Po?G.image.height:null,q=p[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const $=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,B=$!==void 0?$.length:0;let W=0;F.morphAttributes.position!==void 0&&(W=1),F.morphAttributes.normal!==void 0&&(W=2),F.morphAttributes.color!==void 0&&(W=3);let nt,j,tt,lt;if(q){const ce=In[q];nt=ce.vertexShader,j=ce.fragmentShader}else nt=M.vertexShader,j=M.fragmentShader,l.update(M),tt=l.getVertexShaderID(M),lt=l.getFragmentShaderID(M);const it=n.getRenderTarget(),pt=n.state.buffers.depth.getReversed(),Tt=w.isInstancedMesh===!0,Nt=w.isBatchedMesh===!0,Wt=!!M.map,ot=!!M.matcap,ut=!!G,O=!!M.aoMap,Ot=!!M.lightMap,ft=!!M.bumpMap,At=!!M.normalMap,vt=!!M.displacementMap,zt=!!M.emissiveMap,wt=!!M.metalnessMap,L=!!M.roughnessMap,E=M.anisotropy>0,Z=M.clearcoat>0,st=M.dispersion>0,ct=M.iridescence>0,rt=M.sheen>0,Pt=M.transmission>0,xt=E&&!!M.anisotropyMap,Et=Z&&!!M.clearcoatMap,te=Z&&!!M.clearcoatNormalMap,mt=Z&&!!M.clearcoatRoughnessMap,Ct=ct&&!!M.iridescenceMap,Ht=ct&&!!M.iridescenceThicknessMap,Vt=rt&&!!M.sheenColorMap,Rt=rt&&!!M.sheenRoughnessMap,ie=!!M.specularMap,jt=!!M.specularColorMap,me=!!M.specularIntensityMap,V=Pt&&!!M.transmissionMap,yt=Pt&&!!M.thicknessMap,et=!!M.gradientMap,at=!!M.alphaMap,St=M.alphaTest>0,bt=!!M.alphaHash,qt=!!M.extensions;let Te=vi;M.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Te=n.toneMapping);const Ge={shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:nt,fragmentShader:j,defines:M.defines,customVertexShaderID:tt,customFragmentShaderID:lt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Nt,batchingColor:Nt&&w._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&w.instanceColor!==null,instancingMorph:Tt&&w.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:it===null?n.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Os,alphaToCoverage:!!M.alphaToCoverage,map:Wt,matcap:ot,envMap:ut,envMapMode:ut&&G.mapping,envMapCubeUVHeight:H,aoMap:O,lightMap:Ot,bumpMap:ft,normalMap:At,displacementMap:u&&vt,emissiveMap:zt,normalMapObjectSpace:At&&M.normalMapType===Wu,normalMapTangentSpace:At&&M.normalMapType===md,metalnessMap:wt,roughnessMap:L,anisotropy:E,anisotropyMap:xt,clearcoat:Z,clearcoatMap:Et,clearcoatNormalMap:te,clearcoatRoughnessMap:mt,dispersion:st,iridescence:ct,iridescenceMap:Ct,iridescenceThicknessMap:Ht,sheen:rt,sheenColorMap:Vt,sheenRoughnessMap:Rt,specularMap:ie,specularColorMap:jt,specularIntensityMap:me,transmission:Pt,transmissionMap:V,thicknessMap:yt,gradientMap:et,opaque:M.transparent===!1&&M.blending===xs&&M.alphaToCoverage===!1,alphaMap:at,alphaTest:St,alphaHash:bt,combine:M.combine,mapUv:Wt&&v(M.map.channel),aoMapUv:O&&v(M.aoMap.channel),lightMapUv:Ot&&v(M.lightMap.channel),bumpMapUv:ft&&v(M.bumpMap.channel),normalMapUv:At&&v(M.normalMap.channel),displacementMapUv:vt&&v(M.displacementMap.channel),emissiveMapUv:zt&&v(M.emissiveMap.channel),metalnessMapUv:wt&&v(M.metalnessMap.channel),roughnessMapUv:L&&v(M.roughnessMap.channel),anisotropyMapUv:xt&&v(M.anisotropyMap.channel),clearcoatMapUv:Et&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:te&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&v(M.sheenRoughnessMap.channel),specularMapUv:ie&&v(M.specularMap.channel),specularColorMapUv:jt&&v(M.specularColorMap.channel),specularIntensityMapUv:me&&v(M.specularIntensityMap.channel),transmissionMapUv:V&&v(M.transmissionMap.channel),thicknessMapUv:yt&&v(M.thicknessMap.channel),alphaMapUv:at&&v(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(At||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!F.attributes.uv&&(Wt||at),fog:!!D,useFog:M.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:pt,skinning:w.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:W,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Te,decodeVideoTexture:Wt&&M.map.isVideoTexture===!0&&se.getTransfer(M.map.colorSpace)===de,decodeVideoTextureEmissive:zt&&M.emissiveMap.isVideoTexture===!0&&se.getTransfer(M.emissiveMap.colorSpace)===de,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Se,flipSided:M.side===je,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:qt&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&M.extensions.multiDraw===!0||Nt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function m(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)x.push(C),x.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(b(x,M),y(x,M),x.push(n.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function b(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function y(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function _(M){const x=p[M.type];let C;if(x){const z=In[x];C=Nf.clone(z.uniforms)}else C=M.uniforms;return C}function U(M,x){let C;for(let z=0,w=h.length;z<w;z++){const D=h[z];if(D.cacheKey===x){C=D,++C.usedTimes;break}}return C===void 0&&(C=new $0(n,x,M,r),h.push(C)),C}function R(M){if(--M.usedTimes===0){const x=h.indexOf(M);h[x]=h[h.length-1],h.pop(),M.destroy()}}function P(M){l.remove(M)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:_,acquireProgram:U,releaseProgram:R,releaseShaderCache:P,programs:h,dispose:I}}function Q0(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function tv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function ph(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function mh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d,u,f,p,v,g){let m=n[t];return m===void 0?(m={id:d.id,object:d,geometry:u,material:f,groupOrder:p,renderOrder:d.renderOrder,z:v,group:g},n[t]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=f,m.groupOrder=p,m.renderOrder=d.renderOrder,m.z=v,m.group=g),t++,m}function a(d,u,f,p,v,g){const m=o(d,u,f,p,v,g);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(d,u,f,p,v,g){const m=o(d,u,f,p,v,g);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(d,u){e.length>1&&e.sort(d||tv),i.length>1&&i.sort(u||ph),s.length>1&&s.sort(u||ph)}function h(){for(let d=t,u=n.length;d<u;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function ev(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new mh,n.set(i,[o])):s>=r.length?(o=new mh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function nv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Qt};break;case"SpotLight":e={position:new T,direction:new T,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new T,halfWidth:new T,halfHeight:new T};break}return n[t.id]=e,e}}}function iv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let sv=0;function rv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ov(n){const t=new nv,e=iv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new T);const s=new T,r=new pe,o=new pe;function a(c){let h=0,d=0,u=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,b=0,y=0,_=0,U=0,R=0,P=0;c.sort(rv);for(let M=0,x=c.length;M<x;M++){const C=c[M],z=C.color,w=C.intensity,D=C.distance,F=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=z.r*w,d+=z.g*w,u+=z.b*w;else if(C.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(C.sh.coefficients[N],w);P++}else if(C.isDirectionalLight){const N=t.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const G=C.shadow,H=e.get(C);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,i.directionalShadow[f]=H,i.directionalShadowMap[f]=F,i.directionalShadowMatrix[f]=C.shadow.matrix,b++}i.directional[f]=N,f++}else if(C.isSpotLight){const N=t.get(C);N.position.setFromMatrixPosition(C.matrixWorld),N.color.copy(z).multiplyScalar(w),N.distance=D,N.coneCos=Math.cos(C.angle),N.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),N.decay=C.decay,i.spot[v]=N;const G=C.shadow;if(C.map&&(i.spotLightMap[U]=C.map,U++,G.updateMatrices(C),C.castShadow&&R++),i.spotLightMatrix[v]=G.matrix,C.castShadow){const H=e.get(C);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=F,_++}v++}else if(C.isRectAreaLight){const N=t.get(C);N.color.copy(z).multiplyScalar(w),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),i.rectArea[g]=N,g++}else if(C.isPointLight){const N=t.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),N.distance=C.distance,N.decay=C.decay,C.castShadow){const G=C.shadow,H=e.get(C);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,H.shadowCameraNear=G.camera.near,H.shadowCameraFar=G.camera.far,i.pointShadow[p]=H,i.pointShadowMap[p]=F,i.pointShadowMatrix[p]=C.shadow.matrix,y++}i.point[p]=N,p++}else if(C.isHemisphereLight){const N=t.get(C);N.skyColor.copy(C.color).multiplyScalar(w),N.groundColor.copy(C.groundColor).multiplyScalar(w),i.hemi[m]=N,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const I=i.hash;(I.directionalLength!==f||I.pointLength!==p||I.spotLength!==v||I.rectAreaLength!==g||I.hemiLength!==m||I.numDirectionalShadows!==b||I.numPointShadows!==y||I.numSpotShadows!==_||I.numSpotMaps!==U||I.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+U-R,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,I.directionalLength=f,I.pointLength=p,I.spotLength=v,I.rectAreaLength=g,I.hemiLength=m,I.numDirectionalShadows=b,I.numPointShadows=y,I.numSpotShadows=_,I.numSpotMaps=U,I.numLightProbes=P,i.version=sv++)}function l(c,h){let d=0,u=0,f=0,p=0,v=0;const g=h.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){const y=c[m];if(y.isDirectionalLight){const _=i.directional[d];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),d++}else if(y.isSpotLight){const _=i.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const _=i.rectArea[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){const _=i.point[u];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:i}}function gh(n){const t=new ov(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function av(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new gh(n),t.set(s,[a])):r>=o.length?(a=new gh(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class lv extends ks{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Vu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cv extends ks{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const hv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function uv(n,t,e){let i=new Wl;const s=new dt,r=new dt,o=new Ae,a=new lv({depthPacking:Gu}),l=new cv,c={},h=e.maxTextureSize,d={[Kn]:je,[je]:Kn,[Se]:Se},u=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:hv,fragmentShader:dv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const p=new Ee;p.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ht(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ed;let m=this.type;this.render=function(R,P,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const M=n.getRenderTarget(),x=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),z=n.state;z.setBlending(gi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const w=m!==$n&&this.type===$n,D=m===$n&&this.type!==$n;for(let F=0,N=R.length;F<N;F++){const G=R[F],H=G.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const q=H.getFrameExtents();if(s.multiply(q),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,H.mapSize.y=r.y)),H.map===null||w===!0||D===!0){const B=this.type!==$n?{minFilter:on,magFilter:on}:{};H.map!==null&&H.map.dispose(),H.map=new Vi(s.x,s.y,B),H.map.texture.name=G.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const $=H.getViewportCount();for(let B=0;B<$;B++){const W=H.getViewport(B);o.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),z.viewport(o),H.updateMatrices(G,B),i=H.getFrustum(),_(P,I,H.camera,G,this.type)}H.isPointLightShadow!==!0&&this.type===$n&&b(H,I),H.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(M,x,C)};function b(R,P){const I=t.update(v);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Vi(s.x,s.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(P,null,I,u,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(P,null,I,f,v,null)}function y(R,P,I,M){let x=null;const C=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)x=C;else if(x=I.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const z=x.uuid,w=P.uuid;let D=c[z];D===void 0&&(D={},c[z]=D);let F=D[w];F===void 0&&(F=x.clone(),D[w]=F,P.addEventListener("dispose",U)),x=F}if(x.visible=P.visible,x.wireframe=P.wireframe,M===$n?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:d[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=n.properties.get(x);z.light=I}return x}function _(R,P,I,M,x){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===$n)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const w=t.update(R),D=R.material;if(Array.isArray(D)){const F=w.groups;for(let N=0,G=F.length;N<G;N++){const H=F[N],q=D[H.materialIndex];if(q&&q.visible){const $=y(R,q,M,x);R.onBeforeShadow(n,R,P,I,w,$,H),n.renderBufferDirect(I,null,w,$,R,H),R.onAfterShadow(n,R,P,I,w,$,H)}}}else if(D.visible){const F=y(R,D,M,x);R.onBeforeShadow(n,R,P,I,w,F,null),n.renderBufferDirect(I,null,w,F,R,null),R.onAfterShadow(n,R,P,I,w,F,null)}}const z=R.children;for(let w=0,D=z.length;w<D;w++)_(z[w],P,I,M,x)}function U(R){R.target.removeEventListener("dispose",U);for(const I in c){const M=c[I],x=R.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const fv={[Oa]:Fa,[ka]:Ha,[Ba]:Va,[Es]:za,[Fa]:Oa,[Ha]:ka,[Va]:Ba,[za]:Es};function pv(n,t){function e(){let V=!1;const yt=new Ae;let et=null;const at=new Ae(0,0,0,0);return{setMask:function(St){et!==St&&!V&&(n.colorMask(St,St,St,St),et=St)},setLocked:function(St){V=St},setClear:function(St,bt,qt,Te,Ge){Ge===!0&&(St*=Te,bt*=Te,qt*=Te),yt.set(St,bt,qt,Te),at.equals(yt)===!1&&(n.clearColor(St,bt,qt,Te),at.copy(yt))},reset:function(){V=!1,et=null,at.set(-1,0,0,0)}}}function i(){let V=!1,yt=!1,et=null,at=null,St=null;return{setReversed:function(bt){if(yt!==bt){const qt=t.get("EXT_clip_control");yt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT);const Te=St;St=null,this.setClear(Te)}yt=bt},getReversed:function(){return yt},setTest:function(bt){bt?it(n.DEPTH_TEST):pt(n.DEPTH_TEST)},setMask:function(bt){et!==bt&&!V&&(n.depthMask(bt),et=bt)},setFunc:function(bt){if(yt&&(bt=fv[bt]),at!==bt){switch(bt){case Oa:n.depthFunc(n.NEVER);break;case Fa:n.depthFunc(n.ALWAYS);break;case ka:n.depthFunc(n.LESS);break;case Es:n.depthFunc(n.LEQUAL);break;case Ba:n.depthFunc(n.EQUAL);break;case za:n.depthFunc(n.GEQUAL);break;case Ha:n.depthFunc(n.GREATER);break;case Va:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}at=bt}},setLocked:function(bt){V=bt},setClear:function(bt){St!==bt&&(yt&&(bt=1-bt),n.clearDepth(bt),St=bt)},reset:function(){V=!1,et=null,at=null,St=null,yt=!1}}}function s(){let V=!1,yt=null,et=null,at=null,St=null,bt=null,qt=null,Te=null,Ge=null;return{setTest:function(ce){V||(ce?it(n.STENCIL_TEST):pt(n.STENCIL_TEST))},setMask:function(ce){yt!==ce&&!V&&(n.stencilMask(ce),yt=ce)},setFunc:function(ce,mn,zn){(et!==ce||at!==mn||St!==zn)&&(n.stencilFunc(ce,mn,zn),et=ce,at=mn,St=zn)},setOp:function(ce,mn,zn){(bt!==ce||qt!==mn||Te!==zn)&&(n.stencilOp(ce,mn,zn),bt=ce,qt=mn,Te=zn)},setLocked:function(ce){V=ce},setClear:function(ce){Ge!==ce&&(n.clearStencil(ce),Ge=ce)},reset:function(){V=!1,yt=null,et=null,at=null,St=null,bt=null,qt=null,Te=null,Ge=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],p=null,v=!1,g=null,m=null,b=null,y=null,_=null,U=null,R=null,P=new Qt(0,0,0),I=0,M=!1,x=null,C=null,z=null,w=null,D=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,G=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(H)[1]),N=G>=1):H.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),N=G>=2);let q=null,$={};const B=n.getParameter(n.SCISSOR_BOX),W=n.getParameter(n.VIEWPORT),nt=new Ae().fromArray(B),j=new Ae().fromArray(W);function tt(V,yt,et,at){const St=new Uint8Array(4),bt=n.createTexture();n.bindTexture(V,bt),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qt=0;qt<et;qt++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(yt,0,n.RGBA,1,1,at,0,n.RGBA,n.UNSIGNED_BYTE,St):n.texImage2D(yt+qt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,St);return bt}const lt={};lt[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),lt[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),lt[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(n.DEPTH_TEST),o.setFunc(Es),ft(!1),At(yc),it(n.CULL_FACE),O(gi);function it(V){h[V]!==!0&&(n.enable(V),h[V]=!0)}function pt(V){h[V]!==!1&&(n.disable(V),h[V]=!1)}function Tt(V,yt){return d[V]!==yt?(n.bindFramebuffer(V,yt),d[V]=yt,V===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=yt),V===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=yt),!0):!1}function Nt(V,yt){let et=f,at=!1;if(V){et=u.get(yt),et===void 0&&(et=[],u.set(yt,et));const St=V.textures;if(et.length!==St.length||et[0]!==n.COLOR_ATTACHMENT0){for(let bt=0,qt=St.length;bt<qt;bt++)et[bt]=n.COLOR_ATTACHMENT0+bt;et.length=St.length,at=!0}}else et[0]!==n.BACK&&(et[0]=n.BACK,at=!0);at&&n.drawBuffers(et)}function Wt(V){return p!==V?(n.useProgram(V),p=V,!0):!1}const ot={[Oi]:n.FUNC_ADD,[gu]:n.FUNC_SUBTRACT,[vu]:n.FUNC_REVERSE_SUBTRACT};ot[_u]=n.MIN,ot[xu]=n.MAX;const ut={[yu]:n.ZERO,[bu]:n.ONE,[Mu]:n.SRC_COLOR,[Ua]:n.SRC_ALPHA,[Cu]:n.SRC_ALPHA_SATURATE,[Tu]:n.DST_COLOR,[wu]:n.DST_ALPHA,[Su]:n.ONE_MINUS_SRC_COLOR,[Na]:n.ONE_MINUS_SRC_ALPHA,[Au]:n.ONE_MINUS_DST_COLOR,[Eu]:n.ONE_MINUS_DST_ALPHA,[Ru]:n.CONSTANT_COLOR,[Pu]:n.ONE_MINUS_CONSTANT_COLOR,[Lu]:n.CONSTANT_ALPHA,[Iu]:n.ONE_MINUS_CONSTANT_ALPHA};function O(V,yt,et,at,St,bt,qt,Te,Ge,ce){if(V===gi){v===!0&&(pt(n.BLEND),v=!1);return}if(v===!1&&(it(n.BLEND),v=!0),V!==mu){if(V!==g||ce!==M){if((m!==Oi||_!==Oi)&&(n.blendEquation(n.FUNC_ADD),m=Oi,_=Oi),ce)switch(V){case xs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _o:n.blendFunc(n.ONE,n.ONE);break;case bc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _o:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case bc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}b=null,y=null,U=null,R=null,P.set(0,0,0),I=0,g=V,M=ce}return}St=St||yt,bt=bt||et,qt=qt||at,(yt!==m||St!==_)&&(n.blendEquationSeparate(ot[yt],ot[St]),m=yt,_=St),(et!==b||at!==y||bt!==U||qt!==R)&&(n.blendFuncSeparate(ut[et],ut[at],ut[bt],ut[qt]),b=et,y=at,U=bt,R=qt),(Te.equals(P)===!1||Ge!==I)&&(n.blendColor(Te.r,Te.g,Te.b,Ge),P.copy(Te),I=Ge),g=V,M=!1}function Ot(V,yt){V.side===Se?pt(n.CULL_FACE):it(n.CULL_FACE);let et=V.side===je;yt&&(et=!et),ft(et),V.blending===xs&&V.transparent===!1?O(gi):O(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);const at=V.stencilWrite;a.setTest(at),at&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),zt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?it(n.SAMPLE_ALPHA_TO_COVERAGE):pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ft(V){x!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),x=V)}function At(V){V!==fu?(it(n.CULL_FACE),V!==C&&(V===yc?n.cullFace(n.BACK):V===pu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pt(n.CULL_FACE),C=V}function vt(V){V!==z&&(N&&n.lineWidth(V),z=V)}function zt(V,yt,et){V?(it(n.POLYGON_OFFSET_FILL),(w!==yt||D!==et)&&(n.polygonOffset(yt,et),w=yt,D=et)):pt(n.POLYGON_OFFSET_FILL)}function wt(V){V?it(n.SCISSOR_TEST):pt(n.SCISSOR_TEST)}function L(V){V===void 0&&(V=n.TEXTURE0+F-1),q!==V&&(n.activeTexture(V),q=V)}function E(V,yt,et){et===void 0&&(q===null?et=n.TEXTURE0+F-1:et=q);let at=$[et];at===void 0&&(at={type:void 0,texture:void 0},$[et]=at),(at.type!==V||at.texture!==yt)&&(q!==et&&(n.activeTexture(et),q=et),n.bindTexture(V,yt||lt[V]),at.type=V,at.texture=yt)}function Z(){const V=$[q];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function st(){try{n.compressedTexImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ct(){try{n.compressedTexImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function rt(){try{n.texSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pt(){try{n.texSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Et(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function te(){try{n.texStorage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function mt(){try{n.texStorage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ct(){try{n.texImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ht(){try{n.texImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Vt(V){nt.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),nt.copy(V))}function Rt(V){j.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),j.copy(V))}function ie(V,yt){let et=c.get(yt);et===void 0&&(et=new WeakMap,c.set(yt,et));let at=et.get(V);at===void 0&&(at=n.getUniformBlockIndex(yt,V.name),et.set(V,at))}function jt(V,yt){const at=c.get(yt).get(V);l.get(yt)!==at&&(n.uniformBlockBinding(yt,at,V.__bindingPointIndex),l.set(yt,at))}function me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},q=null,$={},d={},u=new WeakMap,f=[],p=null,v=!1,g=null,m=null,b=null,y=null,_=null,U=null,R=null,P=new Qt(0,0,0),I=0,M=!1,x=null,C=null,z=null,w=null,D=null,nt.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:pt,bindFramebuffer:Tt,drawBuffers:Nt,useProgram:Wt,setBlending:O,setMaterial:Ot,setFlipSided:ft,setCullFace:At,setLineWidth:vt,setPolygonOffset:zt,setScissorTest:wt,activeTexture:L,bindTexture:E,unbindTexture:Z,compressedTexImage2D:st,compressedTexImage3D:ct,texImage2D:Ct,texImage3D:Ht,updateUBOMapping:ie,uniformBlockBinding:jt,texStorage2D:te,texStorage3D:mt,texSubImage2D:rt,texSubImage3D:Pt,compressedTexSubImage2D:xt,compressedTexSubImage3D:Et,scissor:Vt,viewport:Rt,reset:me}}function vh(n,t,e,i){const s=mv(i);switch(e){case cd:return n*t;case dd:return n*t;case ud:return n*t*2;case kl:return n*t/s.components*s.byteLength;case Bl:return n*t/s.components*s.byteLength;case fd:return n*t*2/s.components*s.byteLength;case zl:return n*t*2/s.components*s.byteLength;case hd:return n*t*3/s.components*s.byteLength;case wn:return n*t*4/s.components*s.byteLength;case Hl:return n*t*4/s.components*s.byteLength;case lo:case co:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ho:case uo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ya:case ja:return Math.max(n,16)*Math.max(t,8)/4;case qa:case $a:return Math.max(n,8)*Math.max(t,8)/2;case Za:case Ja:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ka:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case tl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case el:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case nl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case il:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case sl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case rl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ol:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case al:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ll:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case cl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case hl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case dl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ul:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case fo:case fl:case pl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case pd:case ml:return Math.ceil(n/4)*Math.ceil(t/4)*8;case gl:case vl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mv(n){switch(n){case Qn:case od:return{byteLength:1,components:1};case cr:case ad:case yr:return{byteLength:2,components:1};case Ol:case Fl:return{byteLength:2,components:4};case Hi:case Nl:case On:return{byteLength:4,components:1};case ld:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function gv(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(L,E){return f?new OffscreenCanvas(L,E):ur("canvas")}function v(L,E,Z){let st=1;const ct=wt(L);if((ct.width>Z||ct.height>Z)&&(st=Z/Math.max(ct.width,ct.height)),st<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const rt=Math.floor(st*ct.width),Pt=Math.floor(st*ct.height);d===void 0&&(d=p(rt,Pt));const xt=E?p(rt,Pt):d;return xt.width=rt,xt.height=Pt,xt.getContext("2d").drawImage(L,0,0,rt,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+rt+"x"+Pt+")."),xt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),L;return L}function g(L){return L.generateMipmaps}function m(L){n.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(L,E,Z,st,ct=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let rt=E;if(E===n.RED&&(Z===n.FLOAT&&(rt=n.R32F),Z===n.HALF_FLOAT&&(rt=n.R16F),Z===n.UNSIGNED_BYTE&&(rt=n.R8)),E===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(rt=n.R8UI),Z===n.UNSIGNED_SHORT&&(rt=n.R16UI),Z===n.UNSIGNED_INT&&(rt=n.R32UI),Z===n.BYTE&&(rt=n.R8I),Z===n.SHORT&&(rt=n.R16I),Z===n.INT&&(rt=n.R32I)),E===n.RG&&(Z===n.FLOAT&&(rt=n.RG32F),Z===n.HALF_FLOAT&&(rt=n.RG16F),Z===n.UNSIGNED_BYTE&&(rt=n.RG8)),E===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(rt=n.RG8UI),Z===n.UNSIGNED_SHORT&&(rt=n.RG16UI),Z===n.UNSIGNED_INT&&(rt=n.RG32UI),Z===n.BYTE&&(rt=n.RG8I),Z===n.SHORT&&(rt=n.RG16I),Z===n.INT&&(rt=n.RG32I)),E===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(rt=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(rt=n.RGB16UI),Z===n.UNSIGNED_INT&&(rt=n.RGB32UI),Z===n.BYTE&&(rt=n.RGB8I),Z===n.SHORT&&(rt=n.RGB16I),Z===n.INT&&(rt=n.RGB32I)),E===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(rt=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(rt=n.RGBA16UI),Z===n.UNSIGNED_INT&&(rt=n.RGBA32UI),Z===n.BYTE&&(rt=n.RGBA8I),Z===n.SHORT&&(rt=n.RGBA16I),Z===n.INT&&(rt=n.RGBA32I)),E===n.RGB&&Z===n.UNSIGNED_INT_5_9_9_9_REV&&(rt=n.RGB9_E5),E===n.RGBA){const Pt=ct?Lo:se.getTransfer(st);Z===n.FLOAT&&(rt=n.RGBA32F),Z===n.HALF_FLOAT&&(rt=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(rt=Pt===de?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&(rt=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(rt=n.RGB5_A1)}return(rt===n.R16F||rt===n.R32F||rt===n.RG16F||rt===n.RG32F||rt===n.RGBA16F||rt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function _(L,E){let Z;return L?E===null||E===Hi||E===Cs?Z=n.DEPTH24_STENCIL8:E===On?Z=n.DEPTH32F_STENCIL8:E===cr&&(Z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Hi||E===Cs?Z=n.DEPTH_COMPONENT24:E===On?Z=n.DEPTH_COMPONENT32F:E===cr&&(Z=n.DEPTH_COMPONENT16),Z}function U(L,E){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==on&&L.minFilter!==Nn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function R(L){const E=L.target;E.removeEventListener("dispose",R),I(E),E.isVideoTexture&&h.delete(E)}function P(L){const E=L.target;E.removeEventListener("dispose",P),x(E)}function I(L){const E=i.get(L);if(E.__webglInit===void 0)return;const Z=L.source,st=u.get(Z);if(st){const ct=st[E.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&M(L),Object.keys(st).length===0&&u.delete(Z)}i.remove(L)}function M(L){const E=i.get(L);n.deleteTexture(E.__webglTexture);const Z=L.source,st=u.get(Z);delete st[E.__cacheKey],o.memory.textures--}function x(L){const E=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(E.__webglFramebuffer[st]))for(let ct=0;ct<E.__webglFramebuffer[st].length;ct++)n.deleteFramebuffer(E.__webglFramebuffer[st][ct]);else n.deleteFramebuffer(E.__webglFramebuffer[st]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[st])}else{if(Array.isArray(E.__webglFramebuffer))for(let st=0;st<E.__webglFramebuffer.length;st++)n.deleteFramebuffer(E.__webglFramebuffer[st]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let st=0;st<E.__webglColorRenderbuffer.length;st++)E.__webglColorRenderbuffer[st]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[st]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=L.textures;for(let st=0,ct=Z.length;st<ct;st++){const rt=i.get(Z[st]);rt.__webglTexture&&(n.deleteTexture(rt.__webglTexture),o.memory.textures--),i.remove(Z[st])}i.remove(L)}let C=0;function z(){C=0}function w(){const L=C;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),C+=1,L}function D(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function F(L,E){const Z=i.get(L);if(L.isVideoTexture&&vt(L),L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){const st=L.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(Z,L,E);return}}e.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+E)}function N(L,E){const Z=i.get(L);if(L.version>0&&Z.__version!==L.version){j(Z,L,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+E)}function G(L,E){const Z=i.get(L);if(L.version>0&&Z.__version!==L.version){j(Z,L,E);return}e.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+E)}function H(L,E){const Z=i.get(L);if(L.version>0&&Z.__version!==L.version){tt(Z,L,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+E)}const q={[xo]:n.REPEAT,[ki]:n.CLAMP_TO_EDGE,[Xa]:n.MIRRORED_REPEAT},$={[on]:n.NEAREST,[Hu]:n.NEAREST_MIPMAP_NEAREST,[Cr]:n.NEAREST_MIPMAP_LINEAR,[Nn]:n.LINEAR,[Go]:n.LINEAR_MIPMAP_NEAREST,[Bi]:n.LINEAR_MIPMAP_LINEAR},B={[Xu]:n.NEVER,[Ju]:n.ALWAYS,[qu]:n.LESS,[gd]:n.LEQUAL,[Yu]:n.EQUAL,[Zu]:n.GEQUAL,[$u]:n.GREATER,[ju]:n.NOTEQUAL};function W(L,E){if(E.type===On&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Nn||E.magFilter===Go||E.magFilter===Cr||E.magFilter===Bi||E.minFilter===Nn||E.minFilter===Go||E.minFilter===Cr||E.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,q[E.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,q[E.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,q[E.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,$[E.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,$[E.minFilter]),E.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,B[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===on||E.minFilter!==Cr&&E.minFilter!==Bi||E.type===On&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(L,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function nt(L,E){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",R));const st=E.source;let ct=u.get(st);ct===void 0&&(ct={},u.set(st,ct));const rt=D(E);if(rt!==L.__cacheKey){ct[rt]===void 0&&(ct[rt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),ct[rt].usedTimes++;const Pt=ct[L.__cacheKey];Pt!==void 0&&(ct[L.__cacheKey].usedTimes--,Pt.usedTimes===0&&M(E)),L.__cacheKey=rt,L.__webglTexture=ct[rt].texture}return Z}function j(L,E,Z){let st=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(st=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(st=n.TEXTURE_3D);const ct=nt(L,E),rt=E.source;e.bindTexture(st,L.__webglTexture,n.TEXTURE0+Z);const Pt=i.get(rt);if(rt.version!==Pt.__version||ct===!0){e.activeTexture(n.TEXTURE0+Z);const xt=se.getPrimaries(se.workingColorSpace),Et=E.colorSpace===mi?null:se.getPrimaries(E.colorSpace),te=E.colorSpace===mi||xt===Et?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let mt=v(E.image,!1,s.maxTextureSize);mt=zt(E,mt);const Ct=r.convert(E.format,E.colorSpace),Ht=r.convert(E.type);let Vt=y(E.internalFormat,Ct,Ht,E.colorSpace,E.isVideoTexture);W(st,E);let Rt;const ie=E.mipmaps,jt=E.isVideoTexture!==!0,me=Pt.__version===void 0||ct===!0,V=rt.dataReady,yt=U(E,mt);if(E.isDepthTexture)Vt=_(E.format===Rs,E.type),me&&(jt?e.texStorage2D(n.TEXTURE_2D,1,Vt,mt.width,mt.height):e.texImage2D(n.TEXTURE_2D,0,Vt,mt.width,mt.height,0,Ct,Ht,null));else if(E.isDataTexture)if(ie.length>0){jt&&me&&e.texStorage2D(n.TEXTURE_2D,yt,Vt,ie[0].width,ie[0].height);for(let et=0,at=ie.length;et<at;et++)Rt=ie[et],jt?V&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,Rt.width,Rt.height,Ct,Ht,Rt.data):e.texImage2D(n.TEXTURE_2D,et,Vt,Rt.width,Rt.height,0,Ct,Ht,Rt.data);E.generateMipmaps=!1}else jt?(me&&e.texStorage2D(n.TEXTURE_2D,yt,Vt,mt.width,mt.height),V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,mt.width,mt.height,Ct,Ht,mt.data)):e.texImage2D(n.TEXTURE_2D,0,Vt,mt.width,mt.height,0,Ct,Ht,mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){jt&&me&&e.texStorage3D(n.TEXTURE_2D_ARRAY,yt,Vt,ie[0].width,ie[0].height,mt.depth);for(let et=0,at=ie.length;et<at;et++)if(Rt=ie[et],E.format!==wn)if(Ct!==null)if(jt){if(V)if(E.layerUpdates.size>0){const St=vh(Rt.width,Rt.height,E.format,E.type);for(const bt of E.layerUpdates){const qt=Rt.data.subarray(bt*St/Rt.data.BYTES_PER_ELEMENT,(bt+1)*St/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,bt,Rt.width,Rt.height,1,Ct,qt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,Rt.width,Rt.height,mt.depth,Ct,Rt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,et,Vt,Rt.width,Rt.height,mt.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?V&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,Rt.width,Rt.height,mt.depth,Ct,Ht,Rt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,et,Vt,Rt.width,Rt.height,mt.depth,0,Ct,Ht,Rt.data)}else{jt&&me&&e.texStorage2D(n.TEXTURE_2D,yt,Vt,ie[0].width,ie[0].height);for(let et=0,at=ie.length;et<at;et++)Rt=ie[et],E.format!==wn?Ct!==null?jt?V&&e.compressedTexSubImage2D(n.TEXTURE_2D,et,0,0,Rt.width,Rt.height,Ct,Rt.data):e.compressedTexImage2D(n.TEXTURE_2D,et,Vt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?V&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,Rt.width,Rt.height,Ct,Ht,Rt.data):e.texImage2D(n.TEXTURE_2D,et,Vt,Rt.width,Rt.height,0,Ct,Ht,Rt.data)}else if(E.isDataArrayTexture)if(jt){if(me&&e.texStorage3D(n.TEXTURE_2D_ARRAY,yt,Vt,mt.width,mt.height,mt.depth),V)if(E.layerUpdates.size>0){const et=vh(mt.width,mt.height,E.format,E.type);for(const at of E.layerUpdates){const St=mt.data.subarray(at*et/mt.data.BYTES_PER_ELEMENT,(at+1)*et/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,at,mt.width,mt.height,1,Ct,Ht,St)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Ct,Ht,mt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Vt,mt.width,mt.height,mt.depth,0,Ct,Ht,mt.data);else if(E.isData3DTexture)jt?(me&&e.texStorage3D(n.TEXTURE_3D,yt,Vt,mt.width,mt.height,mt.depth),V&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Ct,Ht,mt.data)):e.texImage3D(n.TEXTURE_3D,0,Vt,mt.width,mt.height,mt.depth,0,Ct,Ht,mt.data);else if(E.isFramebufferTexture){if(me)if(jt)e.texStorage2D(n.TEXTURE_2D,yt,Vt,mt.width,mt.height);else{let et=mt.width,at=mt.height;for(let St=0;St<yt;St++)e.texImage2D(n.TEXTURE_2D,St,Vt,et,at,0,Ct,Ht,null),et>>=1,at>>=1}}else if(ie.length>0){if(jt&&me){const et=wt(ie[0]);e.texStorage2D(n.TEXTURE_2D,yt,Vt,et.width,et.height)}for(let et=0,at=ie.length;et<at;et++)Rt=ie[et],jt?V&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,Ct,Ht,Rt):e.texImage2D(n.TEXTURE_2D,et,Vt,Ct,Ht,Rt);E.generateMipmaps=!1}else if(jt){if(me){const et=wt(mt);e.texStorage2D(n.TEXTURE_2D,yt,Vt,et.width,et.height)}V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ct,Ht,mt)}else e.texImage2D(n.TEXTURE_2D,0,Vt,Ct,Ht,mt);g(E)&&m(st),Pt.__version=rt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function tt(L,E,Z){if(E.image.length!==6)return;const st=nt(L,E),ct=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+Z);const rt=i.get(ct);if(ct.version!==rt.__version||st===!0){e.activeTexture(n.TEXTURE0+Z);const Pt=se.getPrimaries(se.workingColorSpace),xt=E.colorSpace===mi?null:se.getPrimaries(E.colorSpace),Et=E.colorSpace===mi||Pt===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const te=E.isCompressedTexture||E.image[0].isCompressedTexture,mt=E.image[0]&&E.image[0].isDataTexture,Ct=[];for(let at=0;at<6;at++)!te&&!mt?Ct[at]=v(E.image[at],!0,s.maxCubemapSize):Ct[at]=mt?E.image[at].image:E.image[at],Ct[at]=zt(E,Ct[at]);const Ht=Ct[0],Vt=r.convert(E.format,E.colorSpace),Rt=r.convert(E.type),ie=y(E.internalFormat,Vt,Rt,E.colorSpace),jt=E.isVideoTexture!==!0,me=rt.__version===void 0||st===!0,V=ct.dataReady;let yt=U(E,Ht);W(n.TEXTURE_CUBE_MAP,E);let et;if(te){jt&&me&&e.texStorage2D(n.TEXTURE_CUBE_MAP,yt,ie,Ht.width,Ht.height);for(let at=0;at<6;at++){et=Ct[at].mipmaps;for(let St=0;St<et.length;St++){const bt=et[St];E.format!==wn?Vt!==null?jt?V&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,St,0,0,bt.width,bt.height,Vt,bt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,St,ie,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,St,0,0,bt.width,bt.height,Vt,Rt,bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,St,ie,bt.width,bt.height,0,Vt,Rt,bt.data)}}}else{if(et=E.mipmaps,jt&&me){et.length>0&&yt++;const at=wt(Ct[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,yt,ie,at.width,at.height)}for(let at=0;at<6;at++)if(mt){jt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Ct[at].width,Ct[at].height,Vt,Rt,Ct[at].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ie,Ct[at].width,Ct[at].height,0,Vt,Rt,Ct[at].data);for(let St=0;St<et.length;St++){const qt=et[St].image[at].image;jt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,St+1,0,0,qt.width,qt.height,Vt,Rt,qt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,St+1,ie,qt.width,qt.height,0,Vt,Rt,qt.data)}}else{jt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Vt,Rt,Ct[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ie,Vt,Rt,Ct[at]);for(let St=0;St<et.length;St++){const bt=et[St];jt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,St+1,0,0,Vt,Rt,bt.image[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,St+1,ie,Vt,Rt,bt.image[at])}}}g(E)&&m(n.TEXTURE_CUBE_MAP),rt.__version=ct.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function lt(L,E,Z,st,ct,rt){const Pt=r.convert(Z.format,Z.colorSpace),xt=r.convert(Z.type),Et=y(Z.internalFormat,Pt,xt,Z.colorSpace),te=i.get(E),mt=i.get(Z);if(mt.__renderTarget=E,!te.__hasExternalTextures){const Ct=Math.max(1,E.width>>rt),Ht=Math.max(1,E.height>>rt);ct===n.TEXTURE_3D||ct===n.TEXTURE_2D_ARRAY?e.texImage3D(ct,rt,Et,Ct,Ht,E.depth,0,Pt,xt,null):e.texImage2D(ct,rt,Et,Ct,Ht,0,Pt,xt,null)}e.bindFramebuffer(n.FRAMEBUFFER,L),At(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,st,ct,mt.__webglTexture,0,ft(E)):(ct===n.TEXTURE_2D||ct>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,st,ct,mt.__webglTexture,rt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function it(L,E,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,L),E.depthBuffer){const st=E.depthTexture,ct=st&&st.isDepthTexture?st.type:null,rt=_(E.stencilBuffer,ct),Pt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=ft(E);At(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt,rt,E.width,E.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt,rt,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,rt,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pt,n.RENDERBUFFER,L)}else{const st=E.textures;for(let ct=0;ct<st.length;ct++){const rt=st[ct],Pt=r.convert(rt.format,rt.colorSpace),xt=r.convert(rt.type),Et=y(rt.internalFormat,Pt,xt,rt.colorSpace),te=ft(E);Z&&At(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,te,Et,E.width,E.height):At(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,Et,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Et,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pt(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const st=i.get(E.depthTexture);st.__renderTarget=E,(!st.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),F(E.depthTexture,0);const ct=st.__webglTexture,rt=ft(E);if(E.depthTexture.format===ys)At(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ct,0,rt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ct,0);else if(E.depthTexture.format===Rs)At(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ct,0,rt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function Tt(L){const E=i.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const st=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),st){const ct=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,st.removeEventListener("dispose",ct)};st.addEventListener("dispose",ct),E.__depthDisposeCallback=ct}E.__boundDepthTexture=st}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");pt(E.__webglFramebuffer,L)}else if(Z){E.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[st]),E.__webglDepthbuffer[st]===void 0)E.__webglDepthbuffer[st]=n.createRenderbuffer(),it(E.__webglDepthbuffer[st],L,!1);else{const ct=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=E.__webglDepthbuffer[st];n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ct,n.RENDERBUFFER,rt)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),it(E.__webglDepthbuffer,L,!1);else{const st=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ct),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,ct)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(L,E,Z){const st=i.get(L);E!==void 0&&lt(st.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&Tt(L)}function Wt(L){const E=L.texture,Z=i.get(L),st=i.get(E);L.addEventListener("dispose",P);const ct=L.textures,rt=L.isWebGLCubeRenderTarget===!0,Pt=ct.length>1;if(Pt||(st.__webglTexture===void 0&&(st.__webglTexture=n.createTexture()),st.__version=E.version,o.memory.textures++),rt){Z.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[xt]=[];for(let Et=0;Et<E.mipmaps.length;Et++)Z.__webglFramebuffer[xt][Et]=n.createFramebuffer()}else Z.__webglFramebuffer[xt]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let xt=0;xt<E.mipmaps.length;xt++)Z.__webglFramebuffer[xt]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(Pt)for(let xt=0,Et=ct.length;xt<Et;xt++){const te=i.get(ct[xt]);te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&At(L)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let xt=0;xt<ct.length;xt++){const Et=ct[xt];Z.__webglColorRenderbuffer[xt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[xt]);const te=r.convert(Et.format,Et.colorSpace),mt=r.convert(Et.type),Ct=y(Et.internalFormat,te,mt,Et.colorSpace,L.isXRRenderTarget===!0),Ht=ft(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ht,Ct,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,Z.__webglColorRenderbuffer[xt])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),it(Z.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(rt){e.bindTexture(n.TEXTURE_CUBE_MAP,st.__webglTexture),W(n.TEXTURE_CUBE_MAP,E);for(let xt=0;xt<6;xt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Et=0;Et<E.mipmaps.length;Et++)lt(Z.__webglFramebuffer[xt][Et],L,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Et);else lt(Z.__webglFramebuffer[xt],L,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);g(E)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let xt=0,Et=ct.length;xt<Et;xt++){const te=ct[xt],mt=i.get(te);e.bindTexture(n.TEXTURE_2D,mt.__webglTexture),W(n.TEXTURE_2D,te),lt(Z.__webglFramebuffer,L,te,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,0),g(te)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let xt=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(xt=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(xt,st.__webglTexture),W(xt,E),E.mipmaps&&E.mipmaps.length>0)for(let Et=0;Et<E.mipmaps.length;Et++)lt(Z.__webglFramebuffer[Et],L,E,n.COLOR_ATTACHMENT0,xt,Et);else lt(Z.__webglFramebuffer,L,E,n.COLOR_ATTACHMENT0,xt,0);g(E)&&m(xt),e.unbindTexture()}L.depthBuffer&&Tt(L)}function ot(L){const E=L.textures;for(let Z=0,st=E.length;Z<st;Z++){const ct=E[Z];if(g(ct)){const rt=b(L),Pt=i.get(ct).__webglTexture;e.bindTexture(rt,Pt),m(rt),e.unbindTexture()}}}const ut=[],O=[];function Ot(L){if(L.samples>0){if(At(L)===!1){const E=L.textures,Z=L.width,st=L.height;let ct=n.COLOR_BUFFER_BIT;const rt=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pt=i.get(L),xt=E.length>1;if(xt)for(let Et=0;Et<E.length;Et++)e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Et=0;Et<E.length;Et++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ct|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ct|=n.STENCIL_BUFFER_BIT)),xt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pt.__webglColorRenderbuffer[Et]);const te=i.get(E[Et]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,Z,st,0,0,Z,st,ct,n.NEAREST),l===!0&&(ut.length=0,O.length=0,ut.push(n.COLOR_ATTACHMENT0+Et),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ut.push(rt),O.push(rt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xt)for(let Et=0;Et<E.length;Et++){e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,Pt.__webglColorRenderbuffer[Et]);const te=i.get(E[Et]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,te,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const E=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function ft(L){return Math.min(s.maxSamples,L.samples)}function At(L){const E=i.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function vt(L){const E=o.render.frame;h.get(L)!==E&&(h.set(L,E),L.update())}function zt(L,E){const Z=L.colorSpace,st=L.format,ct=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Z!==Os&&Z!==mi&&(se.getTransfer(Z)===de?(st!==wn||ct!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),E}function wt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=w,this.resetTextureUnits=z,this.setTexture2D=F,this.setTexture2DArray=N,this.setTexture3D=G,this.setTextureCube=H,this.rebindTextures=Nt,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=At}function vv(n,t){function e(i,s=mi){let r;const o=se.getTransfer(s);if(i===Qn)return n.UNSIGNED_BYTE;if(i===Ol)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Fl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ld)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===od)return n.BYTE;if(i===ad)return n.SHORT;if(i===cr)return n.UNSIGNED_SHORT;if(i===Nl)return n.INT;if(i===Hi)return n.UNSIGNED_INT;if(i===On)return n.FLOAT;if(i===yr)return n.HALF_FLOAT;if(i===cd)return n.ALPHA;if(i===hd)return n.RGB;if(i===wn)return n.RGBA;if(i===dd)return n.LUMINANCE;if(i===ud)return n.LUMINANCE_ALPHA;if(i===ys)return n.DEPTH_COMPONENT;if(i===Rs)return n.DEPTH_STENCIL;if(i===kl)return n.RED;if(i===Bl)return n.RED_INTEGER;if(i===fd)return n.RG;if(i===zl)return n.RG_INTEGER;if(i===Hl)return n.RGBA_INTEGER;if(i===lo||i===co||i===ho||i===uo)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qa||i===Ya||i===$a||i===ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Za||i===Ja||i===Ka)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Za||i===Ja)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ka)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Qa||i===tl||i===el||i===nl||i===il||i===sl||i===rl||i===ol||i===al||i===ll||i===cl||i===hl||i===dl||i===ul)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Qa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===tl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===el)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===il)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===rl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ol)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===al)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ll)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ul)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fo||i===fl||i===pl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===fo)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pd||i===ml||i===gl||i===vl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===fo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ml)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class _v extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class kt extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xv={type:"move"};class ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,i),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new kt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const yv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Mv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new He,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Mi({vertexShader:yv,fragmentShader:bv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ht(new pn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sv extends Yi{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null;const v=new Mv,g=e.getContextAttributes();let m=null,b=null;const y=[],_=[],U=new dt;let R=null;const P=new hn;P.viewport=new Ae;const I=new hn;I.viewport=new Ae;const M=[P,I],x=new _v;let C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let tt=y[j];return tt===void 0&&(tt=new ga,y[j]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(j){let tt=y[j];return tt===void 0&&(tt=new ga,y[j]=tt),tt.getGripSpace()},this.getHand=function(j){let tt=y[j];return tt===void 0&&(tt=new ga,y[j]=tt),tt.getHandSpace()};function w(j){const tt=_.indexOf(j.inputSource);if(tt===-1)return;const lt=y[tt];lt!==void 0&&(lt.update(j.inputSource,j.frame,c||o),lt.dispatchEvent({type:j.type,data:j.inputSource}))}function D(){s.removeEventListener("select",w),s.removeEventListener("selectstart",w),s.removeEventListener("selectend",w),s.removeEventListener("squeeze",w),s.removeEventListener("squeezestart",w),s.removeEventListener("squeezeend",w),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",F);for(let j=0;j<y.length;j++){const tt=_[j];tt!==null&&(_[j]=null,y[j].disconnect(tt))}C=null,z=null,v.reset(),t.setRenderTarget(m),f=null,u=null,d=null,s=null,b=null,nt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",w),s.addEventListener("selectstart",w),s.addEventListener("selectend",w),s.addEventListener("squeeze",w),s.addEventListener("squeezestart",w),s.addEventListener("squeezeend",w),s.addEventListener("end",D),s.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){const tt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Vi(f.framebufferWidth,f.framebufferHeight,{format:wn,type:Qn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let tt=null,lt=null,it=null;g.depth&&(it=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=g.stencil?Rs:ys,lt=g.stencil?Cs:Hi);const pt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(pt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new Vi(u.textureWidth,u.textureHeight,{format:wn,type:Qn,depthTexture:new Cd(u.textureWidth,u.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),nt.setContext(s),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function F(j){for(let tt=0;tt<j.removed.length;tt++){const lt=j.removed[tt],it=_.indexOf(lt);it>=0&&(_[it]=null,y[it].disconnect(lt))}for(let tt=0;tt<j.added.length;tt++){const lt=j.added[tt];let it=_.indexOf(lt);if(it===-1){for(let Tt=0;Tt<y.length;Tt++)if(Tt>=_.length){_.push(lt),it=Tt;break}else if(_[Tt]===null){_[Tt]=lt,it=Tt;break}if(it===-1)break}const pt=y[it];pt&&pt.connect(lt)}}const N=new T,G=new T;function H(j,tt,lt){N.setFromMatrixPosition(tt.matrixWorld),G.setFromMatrixPosition(lt.matrixWorld);const it=N.distanceTo(G),pt=tt.projectionMatrix.elements,Tt=lt.projectionMatrix.elements,Nt=pt[14]/(pt[10]-1),Wt=pt[14]/(pt[10]+1),ot=(pt[9]+1)/pt[5],ut=(pt[9]-1)/pt[5],O=(pt[8]-1)/pt[0],Ot=(Tt[8]+1)/Tt[0],ft=Nt*O,At=Nt*Ot,vt=it/(-O+Ot),zt=vt*-O;if(tt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(zt),j.translateZ(vt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),pt[10]===-1)j.projectionMatrix.copy(tt.projectionMatrix),j.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const wt=Nt+vt,L=Wt+vt,E=ft-zt,Z=At+(it-zt),st=ot*Wt/L*wt,ct=ut*Wt/L*wt;j.projectionMatrix.makePerspective(E,Z,st,ct,wt,L),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function q(j,tt){tt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(tt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let tt=j.near,lt=j.far;v.texture!==null&&(v.depthNear>0&&(tt=v.depthNear),v.depthFar>0&&(lt=v.depthFar)),x.near=I.near=P.near=tt,x.far=I.far=P.far=lt,(C!==x.near||z!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,z=x.far),P.layers.mask=j.layers.mask|2,I.layers.mask=j.layers.mask|4,x.layers.mask=P.layers.mask|I.layers.mask;const it=j.parent,pt=x.cameras;q(x,it);for(let Tt=0;Tt<pt.length;Tt++)q(pt[Tt],it);pt.length===2?H(x,P,I):x.projectionMatrix.copy(P.projectionMatrix),$(j,x,it)};function $(j,tt,lt){lt===null?j.matrix.copy(tt.matrixWorld):(j.matrix.copy(lt.matrixWorld),j.matrix.invert(),j.matrix.multiply(tt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(tt.projectionMatrix),j.projectionMatrixInverse.copy(tt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=hr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let B=null;function W(j,tt){if(h=tt.getViewerPose(c||o),p=tt,h!==null){const lt=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let it=!1;lt.length!==x.cameras.length&&(x.cameras.length=0,it=!0);for(let Tt=0;Tt<lt.length;Tt++){const Nt=lt[Tt];let Wt=null;if(f!==null)Wt=f.getViewport(Nt);else{const ut=d.getViewSubImage(u,Nt);Wt=ut.viewport,Tt===0&&(t.setRenderTargetTextures(b,ut.colorTexture,u.ignoreDepthValues?void 0:ut.depthStencilTexture),t.setRenderTarget(b))}let ot=M[Tt];ot===void 0&&(ot=new hn,ot.layers.enable(Tt),ot.viewport=new Ae,M[Tt]=ot),ot.matrix.fromArray(Nt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(Nt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),Tt===0&&(x.matrix.copy(ot.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),it===!0&&x.cameras.push(ot)}const pt=s.enabledFeatures;if(pt&&pt.includes("depth-sensing")){const Tt=d.getDepthInformation(lt[0]);Tt&&Tt.isValid&&Tt.texture&&v.init(t,Tt,s.renderState)}}for(let lt=0;lt<y.length;lt++){const it=_[lt],pt=y[lt];it!==null&&pt!==void 0&&pt.update(it,tt,c||o)}B&&B(j,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),p=null}const nt=new Td;nt.setAnimationLoop(W),this.setAnimationLoop=function(j){B=j},this.dispose=function(){}}}const Pi=new kn,wv=new pe;function Ev(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Sd(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,b,y,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,b,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===je&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===je&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const b=t.get(m),y=b.envMap,_=b.envMapRotation;y&&(g.envMap.value=y,Pi.copy(_),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),g.envMapRotation.value.setFromMatrix4(wv.makeRotationFromEuler(Pi)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,b,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=y*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,b){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===je&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const b=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Tv(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){const _=y.program;i.uniformBlockBinding(b,_)}function c(b,y){let _=s[b.id];_===void 0&&(p(b),_=h(b),s[b.id]=_,b.addEventListener("dispose",g));const U=y.program;i.updateUBOMapping(b,U);const R=t.render.frame;r[b.id]!==R&&(u(b),r[b.id]=R)}function h(b){const y=d();b.__bindingPointIndex=y;const _=n.createBuffer(),U=b.__size,R=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,U,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,_),_}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const y=s[b.id],_=b.uniforms,U=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let R=0,P=_.length;R<P;R++){const I=Array.isArray(_[R])?_[R]:[_[R]];for(let M=0,x=I.length;M<x;M++){const C=I[M];if(f(C,R,M,U)===!0){const z=C.__offset,w=Array.isArray(C.value)?C.value:[C.value];let D=0;for(let F=0;F<w.length;F++){const N=w[F],G=v(N);typeof N=="number"||typeof N=="boolean"?(C.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,z+D,C.__data)):N.isMatrix3?(C.__data[0]=N.elements[0],C.__data[1]=N.elements[1],C.__data[2]=N.elements[2],C.__data[3]=0,C.__data[4]=N.elements[3],C.__data[5]=N.elements[4],C.__data[6]=N.elements[5],C.__data[7]=0,C.__data[8]=N.elements[6],C.__data[9]=N.elements[7],C.__data[10]=N.elements[8],C.__data[11]=0):(N.toArray(C.__data,D),D+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,y,_,U){const R=b.value,P=y+"_"+_;if(U[P]===void 0)return typeof R=="number"||typeof R=="boolean"?U[P]=R:U[P]=R.clone(),!0;{const I=U[P];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return U[P]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function p(b){const y=b.uniforms;let _=0;const U=16;for(let P=0,I=y.length;P<I;P++){const M=Array.isArray(y[P])?y[P]:[y[P]];for(let x=0,C=M.length;x<C;x++){const z=M[x],w=Array.isArray(z.value)?z.value:[z.value];for(let D=0,F=w.length;D<F;D++){const N=w[D],G=v(N),H=_%U,q=H%G.boundary,$=H+q;_+=q,$!==0&&U-$<G.storage&&(_+=U-$),z.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=G.storage}}}const R=_%U;return R>0&&(_+=U-R),b.__size=_,b.__cache={},this}function v(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function g(b){const y=b.target;y.removeEventListener("dispose",g);const _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class Av{constructor(t={}){const{canvas:e=mf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const b=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Me,this.toneMapping=vi,this.toneMappingExposure=1;const _=this;let U=!1,R=0,P=0,I=null,M=-1,x=null;const C=new Ae,z=new Ae;let w=null;const D=new Qt(0);let F=0,N=e.width,G=e.height,H=1,q=null,$=null;const B=new Ae(0,0,N,G),W=new Ae(0,0,N,G);let nt=!1;const j=new Wl;let tt=!1,lt=!1;const it=new pe,pt=new pe,Tt=new T,Nt=new Ae,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function ut(){return I===null?H:1}let O=i;function Ot(A,X){return e.getContext(A,X)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ul}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",bt,!1),O===null){const X="webgl2";if(O=Ot(X,A),O===null)throw Ot(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ft,At,vt,zt,wt,L,E,Z,st,ct,rt,Pt,xt,Et,te,mt,Ct,Ht,Vt,Rt,ie,jt,me,V;function yt(){ft=new Ig(O),ft.init(),jt=new vv(O,ft),At=new Tg(O,ft,t,jt),vt=new pv(O,ft),At.reverseDepthBuffer&&u&&vt.buffers.depth.setReversed(!0),zt=new Ng(O),wt=new Q0,L=new gv(O,ft,vt,wt,At,jt,zt),E=new Cg(_),Z=new Lg(_),st=new Vf(O),me=new wg(O,st),ct=new Dg(O,st,zt,me),rt=new Fg(O,ct,st,zt),Vt=new Og(O,At,L),mt=new Ag(wt),Pt=new K0(_,E,Z,ft,At,me,mt),xt=new Ev(_,wt),Et=new ev,te=new av(ft),Ht=new Sg(_,E,Z,vt,rt,f,l),Ct=new uv(_,rt,At),V=new Tv(O,zt,At,vt),Rt=new Eg(O,ft,zt),ie=new Ug(O,ft,zt),zt.programs=Pt.programs,_.capabilities=At,_.extensions=ft,_.properties=wt,_.renderLists=Et,_.shadowMap=Ct,_.state=vt,_.info=zt}yt();const et=new Sv(_,O);this.xr=et,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=ft.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ft.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(N,G,!1))},this.getSize=function(A){return A.set(N,G)},this.setSize=function(A,X,K=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=A,G=X,e.width=Math.floor(A*H),e.height=Math.floor(X*H),K===!0&&(e.style.width=A+"px",e.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(N*H,G*H).floor()},this.setDrawingBufferSize=function(A,X,K){N=A,G=X,H=K,e.width=Math.floor(A*K),e.height=Math.floor(X*K),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(B)},this.setViewport=function(A,X,K,Q){A.isVector4?B.set(A.x,A.y,A.z,A.w):B.set(A,X,K,Q),vt.viewport(C.copy(B).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(W)},this.setScissor=function(A,X,K,Q){A.isVector4?W.set(A.x,A.y,A.z,A.w):W.set(A,X,K,Q),vt.scissor(z.copy(W).multiplyScalar(H).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(A){vt.setScissorTest(nt=A)},this.setOpaqueSort=function(A){q=A},this.setTransparentSort=function(A){$=A},this.getClearColor=function(A){return A.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(A=!0,X=!0,K=!0){let Q=0;if(A){let Y=!1;if(I!==null){const gt=I.texture.format;Y=gt===Hl||gt===zl||gt===Bl}if(Y){const gt=I.texture.type,Mt=gt===Qn||gt===Hi||gt===cr||gt===Cs||gt===Ol||gt===Fl,Lt=Ht.getClearColor(),It=Ht.getClearAlpha(),Gt=Lt.r,Yt=Lt.g,Dt=Lt.b;Mt?(p[0]=Gt,p[1]=Yt,p[2]=Dt,p[3]=It,O.clearBufferuiv(O.COLOR,0,p)):(v[0]=Gt,v[1]=Yt,v[2]=Dt,v[3]=It,O.clearBufferiv(O.COLOR,0,v))}else Q|=O.COLOR_BUFFER_BIT}X&&(Q|=O.DEPTH_BUFFER_BIT),K&&(Q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),Et.dispose(),te.dispose(),wt.dispose(),E.dispose(),Z.dispose(),rt.dispose(),me.dispose(),V.dispose(),Pt.dispose(),et.dispose(),et.removeEventListener("sessionstart",uc),et.removeEventListener("sessionend",fc),wi.stop()};function at(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const A=zt.autoReset,X=Ct.enabled,K=Ct.autoUpdate,Q=Ct.needsUpdate,Y=Ct.type;yt(),zt.autoReset=A,Ct.enabled=X,Ct.autoUpdate=K,Ct.needsUpdate=Q,Ct.type=Y}function bt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function qt(A){const X=A.target;X.removeEventListener("dispose",qt),Te(X)}function Te(A){Ge(A),wt.remove(A)}function Ge(A){const X=wt.get(A).programs;X!==void 0&&(X.forEach(function(K){Pt.releaseProgram(K)}),A.isShaderMaterial&&Pt.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,K,Q,Y,gt){X===null&&(X=Wt);const Mt=Y.isMesh&&Y.matrixWorld.determinant()<0,Lt=hu(A,X,K,Q,Y);vt.setMaterial(Q,Mt);let It=K.index,Gt=1;if(Q.wireframe===!0){if(It=ct.getWireframeAttribute(K),It===void 0)return;Gt=2}const Yt=K.drawRange,Dt=K.attributes.position;let re=Yt.start*Gt,ge=(Yt.start+Yt.count)*Gt;gt!==null&&(re=Math.max(re,gt.start*Gt),ge=Math.min(ge,(gt.start+gt.count)*Gt)),It!==null?(re=Math.max(re,0),ge=Math.min(ge,It.count)):Dt!=null&&(re=Math.max(re,0),ge=Math.min(ge,Dt.count));const _e=ge-re;if(_e<0||_e===1/0)return;me.setup(Y,Q,Lt,K,It);let Je,ae=Rt;if(It!==null&&(Je=st.get(It),ae=ie,ae.setIndex(Je)),Y.isMesh)Q.wireframe===!0?(vt.setLineWidth(Q.wireframeLinewidth*ut()),ae.setMode(O.LINES)):ae.setMode(O.TRIANGLES);else if(Y.isLine){let Ft=Q.linewidth;Ft===void 0&&(Ft=1),vt.setLineWidth(Ft*ut()),Y.isLineSegments?ae.setMode(O.LINES):Y.isLineLoop?ae.setMode(O.LINE_LOOP):ae.setMode(O.LINE_STRIP)}else Y.isPoints?ae.setMode(O.POINTS):Y.isSprite&&ae.setMode(O.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ae.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))ae.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ft=Y._multiDrawStarts,Hn=Y._multiDrawCounts,le=Y._multiDrawCount,gn=It?st.get(It).bytesPerElement:1,Zi=wt.get(Q).currentProgram.getUniforms();for(let en=0;en<le;en++)Zi.setValue(O,"_gl_DrawID",en),ae.render(Ft[en]/gn,Hn[en])}else if(Y.isInstancedMesh)ae.renderInstances(re,_e,Y.count);else if(K.isInstancedBufferGeometry){const Ft=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Hn=Math.min(K.instanceCount,Ft);ae.renderInstances(re,_e,Hn)}else ae.render(re,_e)};function ce(A,X,K){A.transparent===!0&&A.side===Se&&A.forceSinglePass===!1?(A.side=je,A.needsUpdate=!0,Ar(A,X,K),A.side=Kn,A.needsUpdate=!0,Ar(A,X,K),A.side=Se):Ar(A,X,K)}this.compile=function(A,X,K=null){K===null&&(K=A),m=te.get(K),m.init(X),y.push(m),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),A!==K&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights();const Q=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const gt=Y.material;if(gt)if(Array.isArray(gt))for(let Mt=0;Mt<gt.length;Mt++){const Lt=gt[Mt];ce(Lt,K,Y),Q.add(Lt)}else ce(gt,K,Y),Q.add(gt)}),y.pop(),m=null,Q},this.compileAsync=function(A,X,K=null){const Q=this.compile(A,X,K);return new Promise(Y=>{function gt(){if(Q.forEach(function(Mt){wt.get(Mt).currentProgram.isReady()&&Q.delete(Mt)}),Q.size===0){Y(A);return}setTimeout(gt,10)}ft.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let mn=null;function zn(A){mn&&mn(A)}function uc(){wi.stop()}function fc(){wi.start()}const wi=new Td;wi.setAnimationLoop(zn),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(A){mn=A,et.setAnimationLoop(A),A===null?wi.stop():wi.start()},et.addEventListener("sessionstart",uc),et.addEventListener("sessionend",fc),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(X),X=et.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,X,I),m=te.get(A,y.length),m.init(X),y.push(m),pt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),j.setFromProjectionMatrix(pt),lt=this.localClippingEnabled,tt=mt.init(this.clippingPlanes,lt),g=Et.get(A,b.length),g.init(),b.push(g),et.enabled===!0&&et.isPresenting===!0){const gt=_.xr.getDepthSensingMesh();gt!==null&&Vo(gt,X,-1/0,_.sortObjects)}Vo(A,X,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(q,$),ot=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,ot&&Ht.addToRenderList(g,A),this.info.render.frame++,tt===!0&&mt.beginShadows();const K=m.state.shadowsArray;Ct.render(K,A,X),tt===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=g.opaque,Y=g.transmissive;if(m.setupLights(),X.isArrayCamera){const gt=X.cameras;if(Y.length>0)for(let Mt=0,Lt=gt.length;Mt<Lt;Mt++){const It=gt[Mt];mc(Q,Y,A,It)}ot&&Ht.render(A);for(let Mt=0,Lt=gt.length;Mt<Lt;Mt++){const It=gt[Mt];pc(g,A,It,It.viewport)}}else Y.length>0&&mc(Q,Y,A,X),ot&&Ht.render(A),pc(g,A,X);I!==null&&(L.updateMultisampleRenderTarget(I),L.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(_,A,X),me.resetDefaultState(),M=-1,x=null,y.pop(),y.length>0?(m=y[y.length-1],tt===!0&&mt.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function Vo(A,X,K,Q){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){Q&&Nt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(pt);const Mt=rt.update(A),Lt=A.material;Lt.visible&&g.push(A,Mt,Lt,K,Nt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||j.intersectsObject(A))){const Mt=rt.update(A),Lt=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Nt.copy(A.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Nt.copy(Mt.boundingSphere.center)),Nt.applyMatrix4(A.matrixWorld).applyMatrix4(pt)),Array.isArray(Lt)){const It=Mt.groups;for(let Gt=0,Yt=It.length;Gt<Yt;Gt++){const Dt=It[Gt],re=Lt[Dt.materialIndex];re&&re.visible&&g.push(A,Mt,re,K,Nt.z,Dt)}}else Lt.visible&&g.push(A,Mt,Lt,K,Nt.z,null)}}const gt=A.children;for(let Mt=0,Lt=gt.length;Mt<Lt;Mt++)Vo(gt[Mt],X,K,Q)}function pc(A,X,K,Q){const Y=A.opaque,gt=A.transmissive,Mt=A.transparent;m.setupLightsView(K),tt===!0&&mt.setGlobalState(_.clippingPlanes,K),Q&&vt.viewport(C.copy(Q)),Y.length>0&&Tr(Y,X,K),gt.length>0&&Tr(gt,X,K),Mt.length>0&&Tr(Mt,X,K),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function mc(A,X,K,Q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Q.id]===void 0&&(m.state.transmissionRenderTarget[Q.id]=new Vi(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?yr:Qn,minFilter:Bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));const gt=m.state.transmissionRenderTarget[Q.id],Mt=Q.viewport||C;gt.setSize(Mt.z,Mt.w);const Lt=_.getRenderTarget();_.setRenderTarget(gt),_.getClearColor(D),F=_.getClearAlpha(),F<1&&_.setClearColor(16777215,.5),_.clear(),ot&&Ht.render(K);const It=_.toneMapping;_.toneMapping=vi;const Gt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),m.setupLightsView(Q),tt===!0&&mt.setGlobalState(_.clippingPlanes,Q),Tr(A,K,Q),L.updateMultisampleRenderTarget(gt),L.updateRenderTargetMipmap(gt),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Dt=0,re=X.length;Dt<re;Dt++){const ge=X[Dt],_e=ge.object,Je=ge.geometry,ae=ge.material,Ft=ge.group;if(ae.side===Se&&_e.layers.test(Q.layers)){const Hn=ae.side;ae.side=je,ae.needsUpdate=!0,gc(_e,K,Q,Je,ae,Ft),ae.side=Hn,ae.needsUpdate=!0,Yt=!0}}Yt===!0&&(L.updateMultisampleRenderTarget(gt),L.updateRenderTargetMipmap(gt))}_.setRenderTarget(Lt),_.setClearColor(D,F),Gt!==void 0&&(Q.viewport=Gt),_.toneMapping=It}function Tr(A,X,K){const Q=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,gt=A.length;Y<gt;Y++){const Mt=A[Y],Lt=Mt.object,It=Mt.geometry,Gt=Q===null?Mt.material:Q,Yt=Mt.group;Lt.layers.test(K.layers)&&gc(Lt,X,K,It,Gt,Yt)}}function gc(A,X,K,Q,Y,gt){A.onBeforeRender(_,X,K,Q,Y,gt),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(_,X,K,Q,A,gt),Y.transparent===!0&&Y.side===Se&&Y.forceSinglePass===!1?(Y.side=je,Y.needsUpdate=!0,_.renderBufferDirect(K,X,Q,Y,A,gt),Y.side=Kn,Y.needsUpdate=!0,_.renderBufferDirect(K,X,Q,Y,A,gt),Y.side=Se):_.renderBufferDirect(K,X,Q,Y,A,gt),A.onAfterRender(_,X,K,Q,Y,gt)}function Ar(A,X,K){X.isScene!==!0&&(X=Wt);const Q=wt.get(A),Y=m.state.lights,gt=m.state.shadowsArray,Mt=Y.state.version,Lt=Pt.getParameters(A,Y.state,gt,X,K),It=Pt.getProgramCacheKey(Lt);let Gt=Q.programs;Q.environment=A.isMeshStandardMaterial?X.environment:null,Q.fog=X.fog,Q.envMap=(A.isMeshStandardMaterial?Z:E).get(A.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Gt===void 0&&(A.addEventListener("dispose",qt),Gt=new Map,Q.programs=Gt);let Yt=Gt.get(It);if(Yt!==void 0){if(Q.currentProgram===Yt&&Q.lightsStateVersion===Mt)return _c(A,Lt),Yt}else Lt.uniforms=Pt.getUniforms(A),A.onBeforeCompile(Lt,_),Yt=Pt.acquireProgram(Lt,It),Gt.set(It,Yt),Q.uniforms=Lt.uniforms;const Dt=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Dt.clippingPlanes=mt.uniform),_c(A,Lt),Q.needsLights=uu(A),Q.lightsStateVersion=Mt,Q.needsLights&&(Dt.ambientLightColor.value=Y.state.ambient,Dt.lightProbe.value=Y.state.probe,Dt.directionalLights.value=Y.state.directional,Dt.directionalLightShadows.value=Y.state.directionalShadow,Dt.spotLights.value=Y.state.spot,Dt.spotLightShadows.value=Y.state.spotShadow,Dt.rectAreaLights.value=Y.state.rectArea,Dt.ltc_1.value=Y.state.rectAreaLTC1,Dt.ltc_2.value=Y.state.rectAreaLTC2,Dt.pointLights.value=Y.state.point,Dt.pointLightShadows.value=Y.state.pointShadow,Dt.hemisphereLights.value=Y.state.hemi,Dt.directionalShadowMap.value=Y.state.directionalShadowMap,Dt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Dt.spotShadowMap.value=Y.state.spotShadowMap,Dt.spotLightMatrix.value=Y.state.spotLightMatrix,Dt.spotLightMap.value=Y.state.spotLightMap,Dt.pointShadowMap.value=Y.state.pointShadowMap,Dt.pointShadowMatrix.value=Y.state.pointShadowMatrix),Q.currentProgram=Yt,Q.uniformsList=null,Yt}function vc(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=po.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function _c(A,X){const K=wt.get(A);K.outputColorSpace=X.outputColorSpace,K.batching=X.batching,K.batchingColor=X.batchingColor,K.instancing=X.instancing,K.instancingColor=X.instancingColor,K.instancingMorph=X.instancingMorph,K.skinning=X.skinning,K.morphTargets=X.morphTargets,K.morphNormals=X.morphNormals,K.morphColors=X.morphColors,K.morphTargetsCount=X.morphTargetsCount,K.numClippingPlanes=X.numClippingPlanes,K.numIntersection=X.numClipIntersection,K.vertexAlphas=X.vertexAlphas,K.vertexTangents=X.vertexTangents,K.toneMapping=X.toneMapping}function hu(A,X,K,Q,Y){X.isScene!==!0&&(X=Wt),L.resetTextureUnits();const gt=X.fog,Mt=Q.isMeshStandardMaterial?X.environment:null,Lt=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Os,It=(Q.isMeshStandardMaterial?Z:E).get(Q.envMap||Mt),Gt=Q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Yt=!!K.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Dt=!!K.morphAttributes.position,re=!!K.morphAttributes.normal,ge=!!K.morphAttributes.color;let _e=vi;Q.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(_e=_.toneMapping);const Je=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ae=Je!==void 0?Je.length:0,Ft=wt.get(Q),Hn=m.state.lights;if(tt===!0&&(lt===!0||A!==x)){const an=A===x&&Q.id===M;mt.setState(Q,A,an)}let le=!1;Q.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Hn.state.version||Ft.outputColorSpace!==Lt||Y.isBatchedMesh&&Ft.batching===!1||!Y.isBatchedMesh&&Ft.batching===!0||Y.isBatchedMesh&&Ft.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ft.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ft.instancing===!1||!Y.isInstancedMesh&&Ft.instancing===!0||Y.isSkinnedMesh&&Ft.skinning===!1||!Y.isSkinnedMesh&&Ft.skinning===!0||Y.isInstancedMesh&&Ft.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ft.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ft.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ft.instancingMorph===!1&&Y.morphTexture!==null||Ft.envMap!==It||Q.fog===!0&&Ft.fog!==gt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==mt.numPlanes||Ft.numIntersection!==mt.numIntersection)||Ft.vertexAlphas!==Gt||Ft.vertexTangents!==Yt||Ft.morphTargets!==Dt||Ft.morphNormals!==re||Ft.morphColors!==ge||Ft.toneMapping!==_e||Ft.morphTargetsCount!==ae)&&(le=!0):(le=!0,Ft.__version=Q.version);let gn=Ft.currentProgram;le===!0&&(gn=Ar(Q,X,Y));let Zi=!1,en=!1,qs=!1;const xe=gn.getUniforms(),Pn=Ft.uniforms;if(vt.useProgram(gn.program)&&(Zi=!0,en=!0,qs=!0),Q.id!==M&&(M=Q.id,en=!0),Zi||x!==A){vt.buffers.depth.getReversed()?(it.copy(A.projectionMatrix),vf(it),_f(it),xe.setValue(O,"projectionMatrix",it)):xe.setValue(O,"projectionMatrix",A.projectionMatrix),xe.setValue(O,"viewMatrix",A.matrixWorldInverse);const ri=xe.map.cameraPosition;ri!==void 0&&ri.setValue(O,Tt.setFromMatrixPosition(A.matrixWorld)),At.logarithmicDepthBuffer&&xe.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&xe.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),x!==A&&(x=A,en=!0,qs=!0)}if(Y.isSkinnedMesh){xe.setOptional(O,Y,"bindMatrix"),xe.setOptional(O,Y,"bindMatrixInverse");const an=Y.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),xe.setValue(O,"boneTexture",an.boneTexture,L))}Y.isBatchedMesh&&(xe.setOptional(O,Y,"batchingTexture"),xe.setValue(O,"batchingTexture",Y._matricesTexture,L),xe.setOptional(O,Y,"batchingIdTexture"),xe.setValue(O,"batchingIdTexture",Y._indirectTexture,L),xe.setOptional(O,Y,"batchingColorTexture"),Y._colorsTexture!==null&&xe.setValue(O,"batchingColorTexture",Y._colorsTexture,L));const Ys=K.morphAttributes;if((Ys.position!==void 0||Ys.normal!==void 0||Ys.color!==void 0)&&Vt.update(Y,K,gn),(en||Ft.receiveShadow!==Y.receiveShadow)&&(Ft.receiveShadow=Y.receiveShadow,xe.setValue(O,"receiveShadow",Y.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Pn.envMap.value=It,Pn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&X.environment!==null&&(Pn.envMapIntensity.value=X.environmentIntensity),en&&(xe.setValue(O,"toneMappingExposure",_.toneMappingExposure),Ft.needsLights&&du(Pn,qs),gt&&Q.fog===!0&&xt.refreshFogUniforms(Pn,gt),xt.refreshMaterialUniforms(Pn,Q,H,G,m.state.transmissionRenderTarget[A.id]),po.upload(O,vc(Ft),Pn,L)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(po.upload(O,vc(Ft),Pn,L),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&xe.setValue(O,"center",Y.center),xe.setValue(O,"modelViewMatrix",Y.modelViewMatrix),xe.setValue(O,"normalMatrix",Y.normalMatrix),xe.setValue(O,"modelMatrix",Y.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const an=Q.uniformsGroups;for(let ri=0,oi=an.length;ri<oi;ri++){const xc=an[ri];V.update(xc,gn),V.bind(xc,gn)}}return gn}function du(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function uu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,X,K){wt.get(A.texture).__webglTexture=X,wt.get(A.depthTexture).__webglTexture=K;const Q=wt.get(A);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=K===void 0,Q.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,X){const K=wt.get(A);K.__webglFramebuffer=X,K.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,K=0){I=A,R=X,P=K;let Q=!0,Y=null,gt=!1,Mt=!1;if(A){const It=wt.get(A);if(It.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(O.FRAMEBUFFER,null),Q=!1;else if(It.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(It.__hasExternalTextures)L.rebindTextures(A,wt.get(A.texture).__webglTexture,wt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Dt=A.depthTexture;if(It.__boundDepthTexture!==Dt){if(Dt!==null&&wt.has(Dt)&&(A.width!==Dt.image.width||A.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const Gt=A.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Mt=!0);const Yt=wt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Yt[X])?Y=Yt[X][K]:Y=Yt[X],gt=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?Y=wt.get(A).__webglMultisampledFramebuffer:Array.isArray(Yt)?Y=Yt[K]:Y=Yt,C.copy(A.viewport),z.copy(A.scissor),w=A.scissorTest}else C.copy(B).multiplyScalar(H).floor(),z.copy(W).multiplyScalar(H).floor(),w=nt;if(vt.bindFramebuffer(O.FRAMEBUFFER,Y)&&Q&&vt.drawBuffers(A,Y),vt.viewport(C),vt.scissor(z),vt.setScissorTest(w),gt){const It=wt.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+X,It.__webglTexture,K)}else if(Mt){const It=wt.get(A.texture),Gt=X||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,It.__webglTexture,K||0,Gt)}M=-1},this.readRenderTargetPixels=function(A,X,K,Q,Y,gt,Mt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=wt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Mt!==void 0&&(Lt=Lt[Mt]),Lt){vt.bindFramebuffer(O.FRAMEBUFFER,Lt);try{const It=A.texture,Gt=It.format,Yt=It.type;if(!At.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-Q&&K>=0&&K<=A.height-Y&&O.readPixels(X,K,Q,Y,jt.convert(Gt),jt.convert(Yt),gt)}finally{const It=I!==null?wt.get(I).__webglFramebuffer:null;vt.bindFramebuffer(O.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(A,X,K,Q,Y,gt,Mt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=wt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Mt!==void 0&&(Lt=Lt[Mt]),Lt){const It=A.texture,Gt=It.format,Yt=It.type;if(!At.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=A.width-Q&&K>=0&&K<=A.height-Y){vt.bindFramebuffer(O.FRAMEBUFFER,Lt);const Dt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Dt),O.bufferData(O.PIXEL_PACK_BUFFER,gt.byteLength,O.STREAM_READ),O.readPixels(X,K,Q,Y,jt.convert(Gt),jt.convert(Yt),0);const re=I!==null?wt.get(I).__webglFramebuffer:null;vt.bindFramebuffer(O.FRAMEBUFFER,re);const ge=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await gf(O,ge,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Dt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,gt),O.deleteBuffer(Dt),O.deleteSync(ge),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,X=null,K=0){A.isTexture!==!0&&(er("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1]);const Q=Math.pow(2,-K),Y=Math.floor(A.image.width*Q),gt=Math.floor(A.image.height*Q),Mt=X!==null?X.x:0,Lt=X!==null?X.y:0;L.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,K,0,0,Mt,Lt,Y,gt),vt.unbindTexture()},this.copyTextureToTexture=function(A,X,K=null,Q=null,Y=0){A.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,A=arguments[1],X=arguments[2],Y=arguments[3]||0,K=null);let gt,Mt,Lt,It,Gt,Yt,Dt,re,ge;const _e=A.isCompressedTexture?A.mipmaps[Y]:A.image;K!==null?(gt=K.max.x-K.min.x,Mt=K.max.y-K.min.y,Lt=K.isBox3?K.max.z-K.min.z:1,It=K.min.x,Gt=K.min.y,Yt=K.isBox3?K.min.z:0):(gt=_e.width,Mt=_e.height,Lt=_e.depth||1,It=0,Gt=0,Yt=0),Q!==null?(Dt=Q.x,re=Q.y,ge=Q.z):(Dt=0,re=0,ge=0);const Je=jt.convert(X.format),ae=jt.convert(X.type);let Ft;X.isData3DTexture?(L.setTexture3D(X,0),Ft=O.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(L.setTexture2DArray(X,0),Ft=O.TEXTURE_2D_ARRAY):(L.setTexture2D(X,0),Ft=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,X.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,X.unpackAlignment);const Hn=O.getParameter(O.UNPACK_ROW_LENGTH),le=O.getParameter(O.UNPACK_IMAGE_HEIGHT),gn=O.getParameter(O.UNPACK_SKIP_PIXELS),Zi=O.getParameter(O.UNPACK_SKIP_ROWS),en=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,_e.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,_e.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,It),O.pixelStorei(O.UNPACK_SKIP_ROWS,Gt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Yt);const qs=A.isDataArrayTexture||A.isData3DTexture,xe=X.isDataArrayTexture||X.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Pn=wt.get(A),Ys=wt.get(X),an=wt.get(Pn.__renderTarget),ri=wt.get(Ys.__renderTarget);vt.bindFramebuffer(O.READ_FRAMEBUFFER,an.__webglFramebuffer),vt.bindFramebuffer(O.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let oi=0;oi<Lt;oi++)qs&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,wt.get(A).__webglTexture,Y,Yt+oi),A.isDepthTexture?(xe&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,wt.get(X).__webglTexture,Y,ge+oi),O.blitFramebuffer(It,Gt,gt,Mt,Dt,re,gt,Mt,O.DEPTH_BUFFER_BIT,O.NEAREST)):xe?O.copyTexSubImage3D(Ft,Y,Dt,re,ge+oi,It,Gt,gt,Mt):O.copyTexSubImage2D(Ft,Y,Dt,re,ge+oi,It,Gt,gt,Mt);vt.bindFramebuffer(O.READ_FRAMEBUFFER,null),vt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else xe?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Ft,Y,Dt,re,ge,gt,Mt,Lt,Je,ae,_e.data):X.isCompressedArrayTexture?O.compressedTexSubImage3D(Ft,Y,Dt,re,ge,gt,Mt,Lt,Je,_e.data):O.texSubImage3D(Ft,Y,Dt,re,ge,gt,Mt,Lt,Je,ae,_e):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Y,Dt,re,gt,Mt,Je,ae,_e.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Y,Dt,re,_e.width,_e.height,Je,_e.data):O.texSubImage2D(O.TEXTURE_2D,Y,Dt,re,gt,Mt,Je,ae,_e);O.pixelStorei(O.UNPACK_ROW_LENGTH,Hn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,le),O.pixelStorei(O.UNPACK_SKIP_PIXELS,gn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Zi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,en),Y===0&&X.generateMipmaps&&O.generateMipmap(Ft),vt.unbindTexture()},this.copyTextureToTexture3D=function(A,X,K=null,Q=null,Y=0){return A.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,Q=arguments[1]||null,A=arguments[2],X=arguments[3],Y=arguments[4]||0),er('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,X,K,Q,Y)},this.initRenderTarget=function(A){wt.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),vt.unbindTexture()},this.resetState=function(){R=0,P=0,I=null,vt.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}}class ql{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Qt(t),this.near=e,this.far=i}clone(){return new ql(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Cv extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Rv extends He{constructor(t=null,e=1,i=1,s,r,o,a,l,c=on,h=on,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _h extends Tn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ds=new pe,xh=new pe,jr=[],yh=new ni,Pv=new pe,Ks=new ht,Qs=new Fs;class Sn extends ht{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _h(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Pv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ds),yh.copy(t.boundingBox).applyMatrix4(ds),this.boundingBox.union(yh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ds),Qs.copy(t.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(Qs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Ks.geometry=this.geometry,Ks.material=this.material,Ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qs.copy(this.boundingSphere),Qs.applyMatrix4(i),t.ray.intersectsSphere(Qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ds),xh.multiplyMatrices(i,ds),Ks.matrixWorld=xh,Ks.raycast(t,jr);for(let o=0,a=jr.length;o<a;o++){const l=jr[o];l.instanceId=r,l.object=this,e.push(l)}jr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new _h(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Rv(new Float32Array(s*this.count),s,this.count,kl,On));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Yl extends ks{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const bo=new T,Mo=new T,bh=new pe,tr=new Io,Zr=new Fs,va=new T,Mh=new T;class Lv extends be{constructor(t=new Ee,e=new Yl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)bo.fromBufferAttribute(e,s-1),Mo.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=bo.distanceTo(Mo);t.setAttribute("lineDistance",new Xt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere),Zr.applyMatrix4(s),Zr.radius+=r,t.ray.intersectsSphere(Zr)===!1)return;bh.copy(s).invert(),tr.copy(t.ray).applyMatrix4(bh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=f,g=p-1;v<g;v+=c){const m=h.getX(v),b=h.getX(v+1),y=Jr(this,t,tr,l,m,b);y&&e.push(y)}if(this.isLineLoop){const v=h.getX(p-1),g=h.getX(f),m=Jr(this,t,tr,l,v,g);m&&e.push(m)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let v=f,g=p-1;v<g;v+=c){const m=Jr(this,t,tr,l,v,v+1);m&&e.push(m)}if(this.isLineLoop){const v=Jr(this,t,tr,l,p-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Jr(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(bo.fromBufferAttribute(o,s),Mo.fromBufferAttribute(o,r),e.distanceSqToSegment(bo,Mo,va,Mh)>i)return;va.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(va);if(!(l<t.near||l>t.far))return{distance:l,point:Mh.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Sh=new T,wh=new T;class Dd extends Lv{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Sh.fromBufferAttribute(e,s),wh.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Sh.distanceTo(wh);t.setAttribute("lineDistance",new Xt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Dn extends He{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new dt:new T);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new T,s=[],r=[],o=[],a=new T,l=new pe;for(let f=0;f<=t;f++){const p=f/t;s[f]=this.getTangentAt(p,new T)}r[0]=new T,o[0]=new T;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(De(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(De(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class $l extends Bn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new dt){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Iv extends $l{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function jl(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Kr=new T,_a=new jl,xa=new jl,ya=new jl;class Uo extends Bn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new T){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Kr.subVectors(s[0],s[1]).add(s[0]),c=Kr);const d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Kr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Kr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),_a.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,v,g),xa.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,v,g),ya.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,v,g)}else this.curveType==="catmullrom"&&(_a.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),xa.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),ya.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(_a.calc(l),xa.calc(l),ya.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Eh(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function Dv(n,t){const e=1-n;return e*e*t}function Uv(n,t){return 2*(1-n)*n*t}function Nv(n,t){return n*n*t}function sr(n,t,e,i){return Dv(n,t)+Uv(n,e)+Nv(n,i)}function Ov(n,t){const e=1-n;return e*e*e*t}function Fv(n,t){const e=1-n;return 3*e*e*n*t}function kv(n,t){return 3*(1-n)*n*n*t}function Bv(n,t){return n*n*n*t}function rr(n,t,e,i,s){return Ov(n,t)+Fv(n,e)+kv(n,i)+Bv(n,s)}class Ud extends Bn{constructor(t=new dt,e=new dt,i=new dt,s=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new dt){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(rr(t,s.x,r.x,o.x,a.x),rr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zv extends Bn{constructor(t=new T,e=new T,i=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new T){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(rr(t,s.x,r.x,o.x,a.x),rr(t,s.y,r.y,o.y,a.y),rr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Nd extends Bn{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hv extends Bn{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Od extends Bn{constructor(t=new dt,e=new dt,i=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new dt){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(sr(t,s.x,r.x,o.x),sr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zl extends Bn{constructor(t=new T,e=new T,i=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new T){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(sr(t,s.x,r.x,o.x),sr(t,s.y,r.y,o.y),sr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fd extends Bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Eh(a,l.x,c.x,h.x,d.x),Eh(a,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new dt().fromArray(s))}return this}}var So=Object.freeze({__proto__:null,ArcCurve:Iv,CatmullRomCurve3:Uo,CubicBezierCurve:Ud,CubicBezierCurve3:zv,EllipseCurve:$l,LineCurve:Nd,LineCurve3:Hv,QuadraticBezierCurve:Od,QuadraticBezierCurve3:Zl,SplineCurve:Fd});class Vv extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new So[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new So[s.type]().fromJSON(s))}return this}}class xl extends Vv{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Nd(this.currentPoint.clone(),new dt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Od(this.currentPoint.clone(),new dt(t,e),new dt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new Ud(this.currentPoint.clone(),new dt(t,e),new dt(i,s),new dt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Fd(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new $l(t,e,i,s,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Jl extends Ee{constructor(t=[new dt(0,-.5),new dt(.5,0),new dt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=De(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,d=new T,u=new dt,f=new T,p=new T,v=new T;let g=0,m=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:g=t[b+1].x-t[b].x,m=t[b+1].y-t[b].y,f.x=m*1,f.y=-g,f.z=m*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:g=t[b+1].x-t[b].x,m=t[b+1].y-t[b].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let b=0;b<=e;b++){const y=i+b*h*s,_=Math.sin(y),U=Math.cos(y);for(let R=0;R<=t.length-1;R++){d.x=t[R].x*_,d.y=t[R].y,d.z=t[R].x*U,o.push(d.x,d.y,d.z),u.x=b/e,u.y=R/(t.length-1),a.push(u.x,u.y);const P=l[3*R+0]*_,I=l[3*R+1],M=l[3*R+0]*U;c.push(P,I,M)}}for(let b=0;b<e;b++)for(let y=0;y<t.length-1;y++){const _=y+b*t.length,U=_,R=_+t.length,P=_+t.length+1,I=_+1;r.push(U,R,I),r.push(P,I,R)}this.setIndex(r),this.setAttribute("position",new Xt(o,3)),this.setAttribute("uv",new Xt(a,2)),this.setAttribute("normal",new Xt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jl(t.points,t.segments,t.phiStart,t.phiLength)}}class Kl extends Jl{constructor(t=1,e=1,i=4,s=8){const r=new xl;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new Kl(t.radius,t.length,t.capSegments,t.radialSegments)}}class vs extends Ee{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new T,h=new dt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=i+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(a,3)),this.setAttribute("uv",new Xt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Oe extends Ee{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let p=0;const v=[],g=i/2;let m=0;b(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Xt(d,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(f,2));function b(){const _=new T,U=new T;let R=0;const P=(e-t)/i;for(let I=0;I<=r;I++){const M=[],x=I/r,C=x*(e-t)+t;for(let z=0;z<=s;z++){const w=z/s,D=w*l+a,F=Math.sin(D),N=Math.cos(D);U.x=C*F,U.y=-x*i+g,U.z=C*N,d.push(U.x,U.y,U.z),_.set(F,P,N).normalize(),u.push(_.x,_.y,_.z),f.push(w,1-x),M.push(p++)}v.push(M)}for(let I=0;I<s;I++)for(let M=0;M<r;M++){const x=v[M][I],C=v[M+1][I],z=v[M+1][I+1],w=v[M][I+1];(t>0||M!==0)&&(h.push(x,C,w),R+=3),(e>0||M!==r-1)&&(h.push(C,z,w),R+=3)}c.addGroup(m,R,0),m+=R}function y(_){const U=p,R=new dt,P=new T;let I=0;const M=_===!0?t:e,x=_===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,g*x,0),u.push(0,x,0),f.push(.5,.5),p++;const C=p;for(let z=0;z<=s;z++){const D=z/s*l+a,F=Math.cos(D),N=Math.sin(D);P.x=M*N,P.y=g*x,P.z=M*F,d.push(P.x,P.y,P.z),u.push(0,x,0),R.x=F*.5+.5,R.y=N*.5*x+.5,f.push(R.x,R.y),p++}for(let z=0;z<s;z++){const w=U+z,D=C+z;_===!0?h.push(D,D+1,w):h.push(D+1,D,w),I+=3}c.addGroup(m,I,_===!0?1:2),m+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Jn extends Oe{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Jn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ql extends Ee{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Xt(r,3)),this.setAttribute("normal",new Xt(r.slice(),3)),this.setAttribute("uv",new Xt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const y=new T,_=new T,U=new T;for(let R=0;R<e.length;R+=3)f(e[R+0],y),f(e[R+1],_),f(e[R+2],U),l(y,_,U,b)}function l(b,y,_,U){const R=U+1,P=[];for(let I=0;I<=R;I++){P[I]=[];const M=b.clone().lerp(_,I/R),x=y.clone().lerp(_,I/R),C=R-I;for(let z=0;z<=C;z++)z===0&&I===R?P[I][z]=M:P[I][z]=M.clone().lerp(x,z/C)}for(let I=0;I<R;I++)for(let M=0;M<2*(R-I)-1;M++){const x=Math.floor(M/2);M%2===0?(u(P[I][x+1]),u(P[I+1][x]),u(P[I][x])):(u(P[I][x+1]),u(P[I+1][x+1]),u(P[I+1][x]))}}function c(b){const y=new T;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(b),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){const b=new T;for(let y=0;y<r.length;y+=3){b.x=r[y+0],b.y=r[y+1],b.z=r[y+2];const _=g(b)/2/Math.PI+.5,U=m(b)/Math.PI+.5;o.push(_,1-U)}p(),d()}function d(){for(let b=0;b<o.length;b+=6){const y=o[b+0],_=o[b+2],U=o[b+4],R=Math.max(y,_,U),P=Math.min(y,_,U);R>.9&&P<.1&&(y<.2&&(o[b+0]+=1),_<.2&&(o[b+2]+=1),U<.2&&(o[b+4]+=1))}}function u(b){r.push(b.x,b.y,b.z)}function f(b,y){const _=b*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function p(){const b=new T,y=new T,_=new T,U=new T,R=new dt,P=new dt,I=new dt;for(let M=0,x=0;M<r.length;M+=9,x+=6){b.set(r[M+0],r[M+1],r[M+2]),y.set(r[M+3],r[M+4],r[M+5]),_.set(r[M+6],r[M+7],r[M+8]),R.set(o[x+0],o[x+1]),P.set(o[x+2],o[x+3]),I.set(o[x+4],o[x+5]),U.copy(b).add(y).add(_).divideScalar(3);const C=g(U);v(R,x+0,b,C),v(P,x+2,y,C),v(I,x+4,_,C)}}function v(b,y,_,U){U<0&&b.x===1&&(o[y]=b.x-1),_.x===0&&_.z===0&&(o[y]=U/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ql(t.vertices,t.indices,t.radius,t.details)}}const Qr=new T,to=new T,ba=new T,eo=new un;class kd extends Ee{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(bs*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:v,b:g,c:m}=eo;if(v.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),eo.getNormal(ba),d[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,d[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let b=0;b<3;b++){const y=(b+1)%3,_=d[b],U=d[y],R=eo[h[b]],P=eo[h[y]],I=`${_}_${U}`,M=`${U}_${_}`;M in u&&u[M]?(ba.dot(u[M].normal)<=r&&(f.push(R.x,R.y,R.z),f.push(P.x,P.y,P.z)),u[M]=null):I in u||(u[I]={index0:c[b],index1:c[y],normal:ba.clone()})}}for(const p in u)if(u[p]){const{index0:v,index1:g}=u[p];Qr.fromBufferAttribute(a,v),to.fromBufferAttribute(a,g),f.push(Qr.x,Qr.y,Qr.z),f.push(to.x,to.y,to.z)}this.setAttribute("position",new Xt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class ji extends xl{constructor(t){super(t),this.uuid=$i(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new xl().fromJSON(s))}return this}}const Gv={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Bd(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,u,f;if(i&&(r=$v(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let p=e;p<s;p+=e)d=n[p],u=n[p+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return fr(r,o,e,a,l,f,0),o}};function Bd(n,t,e,i,s){let r,o;if(s===r_(n,t,e,i)>0)for(r=t;r<e;r+=i)o=Th(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=Th(r,n[r],n[r+1],o);return o&&No(o,o.next)&&(mr(o),o=o.next),o}function Gi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(No(e,e.next)||we(e.prev,e,e.next)===0)){if(mr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function fr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Qv(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Xv(n,i,s,r):Wv(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),mr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=qv(Gi(n),t,e),fr(n,t,e,i,s,r,2)):o===2&&Yv(n,t,e,i,s,r):fr(Gi(n),t,e,i,s,r,1);break}}}function Wv(n){const t=n.prev,e=n,i=n.next;if(we(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&_s(s,a,r,l,o,c,p.x,p.y)&&we(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Xv(n,t,e,i){const s=n.prev,r=n,o=n.next;if(we(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=a<l?a<c?a:c:l<c?l:c,p=h<d?h<u?h:u:d<u?d:u,v=a>l?a>c?a:c:l>c?l:c,g=h>d?h>u?h:u:d>u?d:u,m=yl(f,p,t,e,i),b=yl(v,g,t,e,i);let y=n.prevZ,_=n.nextZ;for(;y&&y.z>=m&&_&&_.z<=b;){if(y.x>=f&&y.x<=v&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&_s(a,h,l,d,c,u,y.x,y.y)&&we(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=f&&_.x<=v&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&_s(a,h,l,d,c,u,_.x,_.y)&&we(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=v&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&_s(a,h,l,d,c,u,y.x,y.y)&&we(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=b;){if(_.x>=f&&_.x<=v&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&_s(a,h,l,d,c,u,_.x,_.y)&&we(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function qv(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!No(s,r)&&zd(s,i,i.next,r)&&pr(s,r)&&pr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),mr(i),mr(i.next),i=n=r),i=i.next}while(i!==n);return Gi(i)}function Yv(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&n_(o,a)){let l=Hd(o,a);o=Gi(o,o.next),l=Gi(l,l.next),fr(o,t,e,i,s,r,0),fr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function $v(n,t,e,i){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Bd(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(e_(c));for(s.sort(jv),r=0;r<s.length;r++)e=Zv(s[r],e);return e}function jv(n,t){return n.x-t.x}function Zv(n,t){const e=Jv(n,t);if(!e)return t;const i=Hd(e,n);return Gi(i,i.next),Gi(e,e.next)}function Jv(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>i&&(i=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,d;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&_s(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),pr(e,n)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&Kv(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function Kv(n,t){return we(n.prev,n,t.prev)<0&&we(t.next,n,n.next)<0}function Qv(n,t,e,i){let s=n;do s.z===0&&(s.z=yl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,t_(s)}function t_(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function yl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function e_(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function _s(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function n_(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!i_(n,t)&&(pr(n,t)&&pr(t,n)&&s_(n,t)&&(we(n.prev,n,t.prev)||we(n,t.prev,t))||No(n,t)&&we(n.prev,n,n.next)>0&&we(t.prev,t,t.next)>0)}function we(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function No(n,t){return n.x===t.x&&n.y===t.y}function zd(n,t,e,i){const s=io(we(n,t,e)),r=io(we(n,t,i)),o=io(we(e,i,n)),a=io(we(e,i,t));return!!(s!==r&&o!==a||s===0&&no(n,e,t)||r===0&&no(n,i,t)||o===0&&no(e,n,i)||a===0&&no(e,t,i))}function no(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function io(n){return n>0?1:n<0?-1:0}function i_(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&zd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function pr(n,t){return we(n.prev,n,n.next)<0?we(n,t,n.next)>=0&&we(n,n.prev,t)>=0:we(n,t,n.prev)<0||we(n,n.next,t)<0}function s_(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Hd(n,t){const e=new bl(n.i,n.x,n.y),i=new bl(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Th(n,t,e,i){const s=new bl(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function mr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function bl(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function r_(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class _i{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return _i.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Ah(t),Ch(i,t);let o=t.length;e.forEach(Ah);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Ch(i,e[l]);const a=Gv.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Ah(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Ch(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class zs extends Ee{constructor(t=new ji([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Xt(s,3)),this.setAttribute("uv",new Xt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:o_;let y,_=!1,U,R,P,I;m&&(y=m.getSpacedPoints(h),_=!0,u=!1,U=m.computeFrenetFrames(h,!1),R=new T,P=new T,I=new T),u||(g=0,f=0,p=0,v=0);const M=a.extractPoints(c);let x=M.shape;const C=M.holes;if(!_i.isClockWise(x)){x=x.reverse();for(let ot=0,ut=C.length;ot<ut;ot++){const O=C[ot];_i.isClockWise(O)&&(C[ot]=O.reverse())}}const w=_i.triangulateShape(x,C),D=x;for(let ot=0,ut=C.length;ot<ut;ot++){const O=C[ot];x=x.concat(O)}function F(ot,ut,O){return ut||console.error("THREE.ExtrudeGeometry: vec does not exist"),ot.clone().addScaledVector(ut,O)}const N=x.length,G=w.length;function H(ot,ut,O){let Ot,ft,At;const vt=ot.x-ut.x,zt=ot.y-ut.y,wt=O.x-ot.x,L=O.y-ot.y,E=vt*vt+zt*zt,Z=vt*L-zt*wt;if(Math.abs(Z)>Number.EPSILON){const st=Math.sqrt(E),ct=Math.sqrt(wt*wt+L*L),rt=ut.x-zt/st,Pt=ut.y+vt/st,xt=O.x-L/ct,Et=O.y+wt/ct,te=((xt-rt)*L-(Et-Pt)*wt)/(vt*L-zt*wt);Ot=rt+vt*te-ot.x,ft=Pt+zt*te-ot.y;const mt=Ot*Ot+ft*ft;if(mt<=2)return new dt(Ot,ft);At=Math.sqrt(mt/2)}else{let st=!1;vt>Number.EPSILON?wt>Number.EPSILON&&(st=!0):vt<-Number.EPSILON?wt<-Number.EPSILON&&(st=!0):Math.sign(zt)===Math.sign(L)&&(st=!0),st?(Ot=-zt,ft=vt,At=Math.sqrt(E)):(Ot=vt,ft=zt,At=Math.sqrt(E/2))}return new dt(Ot/At,ft/At)}const q=[];for(let ot=0,ut=D.length,O=ut-1,Ot=ot+1;ot<ut;ot++,O++,Ot++)O===ut&&(O=0),Ot===ut&&(Ot=0),q[ot]=H(D[ot],D[O],D[Ot]);const $=[];let B,W=q.concat();for(let ot=0,ut=C.length;ot<ut;ot++){const O=C[ot];B=[];for(let Ot=0,ft=O.length,At=ft-1,vt=Ot+1;Ot<ft;Ot++,At++,vt++)At===ft&&(At=0),vt===ft&&(vt=0),B[Ot]=H(O[Ot],O[At],O[vt]);$.push(B),W=W.concat(B)}for(let ot=0;ot<g;ot++){const ut=ot/g,O=f*Math.cos(ut*Math.PI/2),Ot=p*Math.sin(ut*Math.PI/2)+v;for(let ft=0,At=D.length;ft<At;ft++){const vt=F(D[ft],q[ft],Ot);it(vt.x,vt.y,-O)}for(let ft=0,At=C.length;ft<At;ft++){const vt=C[ft];B=$[ft];for(let zt=0,wt=vt.length;zt<wt;zt++){const L=F(vt[zt],B[zt],Ot);it(L.x,L.y,-O)}}}const nt=p+v;for(let ot=0;ot<N;ot++){const ut=u?F(x[ot],W[ot],nt):x[ot];_?(P.copy(U.normals[0]).multiplyScalar(ut.x),R.copy(U.binormals[0]).multiplyScalar(ut.y),I.copy(y[0]).add(P).add(R),it(I.x,I.y,I.z)):it(ut.x,ut.y,0)}for(let ot=1;ot<=h;ot++)for(let ut=0;ut<N;ut++){const O=u?F(x[ut],W[ut],nt):x[ut];_?(P.copy(U.normals[ot]).multiplyScalar(O.x),R.copy(U.binormals[ot]).multiplyScalar(O.y),I.copy(y[ot]).add(P).add(R),it(I.x,I.y,I.z)):it(O.x,O.y,d/h*ot)}for(let ot=g-1;ot>=0;ot--){const ut=ot/g,O=f*Math.cos(ut*Math.PI/2),Ot=p*Math.sin(ut*Math.PI/2)+v;for(let ft=0,At=D.length;ft<At;ft++){const vt=F(D[ft],q[ft],Ot);it(vt.x,vt.y,d+O)}for(let ft=0,At=C.length;ft<At;ft++){const vt=C[ft];B=$[ft];for(let zt=0,wt=vt.length;zt<wt;zt++){const L=F(vt[zt],B[zt],Ot);_?it(L.x,L.y+y[h-1].y,y[h-1].x+O):it(L.x,L.y,d+O)}}}j(),tt();function j(){const ot=s.length/3;if(u){let ut=0,O=N*ut;for(let Ot=0;Ot<G;Ot++){const ft=w[Ot];pt(ft[2]+O,ft[1]+O,ft[0]+O)}ut=h+g*2,O=N*ut;for(let Ot=0;Ot<G;Ot++){const ft=w[Ot];pt(ft[0]+O,ft[1]+O,ft[2]+O)}}else{for(let ut=0;ut<G;ut++){const O=w[ut];pt(O[2],O[1],O[0])}for(let ut=0;ut<G;ut++){const O=w[ut];pt(O[0]+N*h,O[1]+N*h,O[2]+N*h)}}i.addGroup(ot,s.length/3-ot,0)}function tt(){const ot=s.length/3;let ut=0;lt(D,ut),ut+=D.length;for(let O=0,Ot=C.length;O<Ot;O++){const ft=C[O];lt(ft,ut),ut+=ft.length}i.addGroup(ot,s.length/3-ot,1)}function lt(ot,ut){let O=ot.length;for(;--O>=0;){const Ot=O;let ft=O-1;ft<0&&(ft=ot.length-1);for(let At=0,vt=h+g*2;At<vt;At++){const zt=N*At,wt=N*(At+1),L=ut+Ot+zt,E=ut+ft+zt,Z=ut+ft+wt,st=ut+Ot+wt;Tt(L,E,Z,st)}}}function it(ot,ut,O){l.push(ot),l.push(ut),l.push(O)}function pt(ot,ut,O){Nt(ot),Nt(ut),Nt(O);const Ot=s.length/3,ft=b.generateTopUV(i,s,Ot-3,Ot-2,Ot-1);Wt(ft[0]),Wt(ft[1]),Wt(ft[2])}function Tt(ot,ut,O,Ot){Nt(ot),Nt(ut),Nt(Ot),Nt(ut),Nt(O),Nt(Ot);const ft=s.length/3,At=b.generateSideWallUV(i,s,ft-6,ft-3,ft-2,ft-1);Wt(At[0]),Wt(At[1]),Wt(At[3]),Wt(At[1]),Wt(At[2]),Wt(At[3])}function Nt(ot){s.push(l[ot*3+0]),s.push(l[ot*3+1]),s.push(l[ot*3+2])}function Wt(ot){r.push(ot.x),r.push(ot.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return a_(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new So[s.type]().fromJSON(s)),new zs(i,t.options)}}const o_={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new dt(r,o),new dt(a,l),new dt(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],d=t[i*3+2],u=t[s*3],f=t[s*3+1],p=t[s*3+2],v=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new dt(o,1-l),new dt(c,1-d),new dt(u,1-p),new dt(v,1-m)]:[new dt(a,1-l),new dt(h,1-d),new dt(f,1-p),new dt(g,1-m)]}};function a_(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class xi extends Ql{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xi(t.radius,t.detail)}}class wo extends Ee{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let d=t;const u=(e-t)/s,f=new T,p=new dt;for(let v=0;v<=s;v++){for(let g=0;g<=i;g++){const m=r+g/i*o;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}d+=u}for(let v=0;v<s;v++){const g=v*(i+1);for(let m=0;m<i;m++){const b=m+g,y=b,_=b+i+1,U=b+i+2,R=b+1;a.push(y,_,R),a.push(_,U,R)}}this.setIndex(a),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class tc extends Ee{constructor(t=new ji([new dt(0,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Xt(s,3)),this.setAttribute("normal",new Xt(r,3)),this.setAttribute("uv",new Xt(o,2));function c(h){const d=s.length/3,u=h.extractPoints(e);let f=u.shape;const p=u.holes;_i.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const b=p[g];_i.isClockWise(b)===!0&&(p[g]=b.reverse())}const v=_i.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const b=p[g];f=f.concat(b)}for(let g=0,m=f.length;g<m;g++){const b=f[g];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let g=0,m=v.length;g<m;g++){const b=v[g],y=b[0]+d,_=b[1]+d,U=b[2]+d;i.push(y,_,U),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return l_(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];i.push(o)}return new tc(i,t.curveSegments)}}function l_(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class qe extends Ee{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new T,u=new T,f=[],p=[],v=[],g=[];for(let m=0;m<=i;m++){const b=[],y=m/i;let _=0;m===0&&o===0?_=.5/e:m===i&&l===Math.PI&&(_=-.5/e);for(let U=0;U<=e;U++){const R=U/e;d.x=-t*Math.cos(s+R*r)*Math.sin(o+y*a),d.y=t*Math.cos(o+y*a),d.z=t*Math.sin(s+R*r)*Math.sin(o+y*a),p.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),g.push(R+_,1-y),b.push(c++)}h.push(b)}for(let m=0;m<i;m++)for(let b=0;b<e;b++){const y=h[m][b+1],_=h[m][b],U=h[m+1][b],R=h[m+1][b+1];(m!==0||o>0)&&f.push(y,_,R),(m!==i-1||l<Math.PI)&&f.push(_,U,R)}this.setIndex(f),this.setAttribute("position",new Xt(p,3)),this.setAttribute("normal",new Xt(v,3)),this.setAttribute("uv",new Xt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class gr extends Ee{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new T,d=new T,u=new T;for(let f=0;f<=i;f++)for(let p=0;p<=s;p++){const v=p/s*r,g=f/i*Math.PI*2;d.x=(t+e*Math.cos(g))*Math.cos(v),d.y=(t+e*Math.cos(g))*Math.sin(v),d.z=e*Math.sin(g),a.push(d.x,d.y,d.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(p/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let p=1;p<=s;p++){const v=(s+1)*f+p-1,g=(s+1)*(f-1)+p-1,m=(s+1)*(f-1)+p,b=(s+1)*f+p;o.push(v,g,b),o.push(g,m,b)}this.setIndex(o),this.setAttribute("position",new Xt(a,3)),this.setAttribute("normal",new Xt(l,3)),this.setAttribute("uv",new Xt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ec extends Ee{constructor(t=new Zl(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new T,l=new T,c=new dt;let h=new T;const d=[],u=[],f=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new Xt(d,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(f,2));function v(){for(let y=0;y<e;y++)g(y);g(r===!1?e:0),b(),m()}function g(y){h=t.getPointAt(y/e,h);const _=o.normals[y],U=o.binormals[y];for(let R=0;R<=s;R++){const P=R/s*Math.PI*2,I=Math.sin(P),M=-Math.cos(P);l.x=M*_.x+I*U.x,l.y=M*_.y+I*U.y,l.z=M*_.z+I*U.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function m(){for(let y=1;y<=e;y++)for(let _=1;_<=s;_++){const U=(s+1)*(y-1)+(_-1),R=(s+1)*y+(_-1),P=(s+1)*y+_,I=(s+1)*(y-1)+_;p.push(U,R,I),p.push(R,P,I)}}function b(){for(let y=0;y<=e;y++)for(let _=0;_<=s;_++)c.x=y/e,c.y=_/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ec(new So[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class ye extends ks{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=md,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class c_ extends Yl{static get type(){return"LineDashedMaterial"}constructor(t){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const Rh={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class h_{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}}const d_=new h_;class nc{constructor(t){this.manager=t!==void 0?t:d_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}nc.DEFAULT_MATERIAL_NAME="__DEFAULT";class u_ extends nc{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Rh.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=ur("img");function l(){h(),Rh.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class f_ extends nc{constructor(t){super(t)}load(t,e,i,s){const r=new He,o=new u_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class Vd extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class p_ extends Vd{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ma=new pe,Ph=new T,Lh=new T;class m_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wl,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Ph.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ph),Lh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lh),e.updateMatrixWorld(),Ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ma),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ma)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class g_ extends m_{constructor(){super(new Ad(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class v_ extends Vd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new g_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class __{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ih(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ih();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ih(){return performance.now()}const Dh=new pe;class Gd{constructor(t,e,i=0,s=1/0){this.ray=new Io(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Gl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Dh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dh),this}intersectObject(t,e=!0,i=[]){return Ml(t,this,i,e),i.sort(Uh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Ml(t[s],this,i,e);return i.sort(Uh),i}}function Uh(n,t){return n.distance-t.distance}function Ml(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Ml(r[o],t,e,!0)}}class Nh{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(De(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class x_ extends Yi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ul}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ul);const An={person:{name:"Manu Pratap Singh",headline:"Product Manager, AI Strategy",subline:"0→1 platforms in AdTech, Gaming and SaaS · The Lisbon MBA 2026",location:"Lisbon, Portugal",email:"sam123.manu@gmail.com",linkedin:"https://www.linkedin.com/in/pratapmanusingh",cvFile:"Manu_Pratap_Singh_CV.pdf"},cv:{availability:"Available full-time from mid-December 2026",lookingFor:"Product Manager and consulting roles in AI, platforms and growth",openTo:"Lisbon, anywhere in Europe, or remote",summary:{text:"I'm a product manager with 4+ years building consumer and B2B platforms from zero to scale: I grew a real-money gaming app to 1M+ users and built an ad exchange from scratch with $100k/month in ad spend running through it. Today I lead AI strategy, product quality and company direction at a CRM and automation company while finishing The Lisbon MBA. I have an engineering degree, read API docs, turn them into build plans and work with engineers as a peer."},signature:[{value:"1M+",label:"users and $500k+ in deposits on a real-money gaming platform",where:"GMNG"},{value:"$100k/mo",label:"ad spend through an ad exchange I built from scratch",where:"XY ADS"},{value:"< 2 months",label:"to make a whole company AI-native",where:"MR Neo"},{value:"+30%",label:"new-user retention from Everybody Wins, my idea",where:"GMNG"}],featuredCases:["ai-testing-skills","self-serve-exchange","everybody-wins"],experience:[{ids:["mr-neo"],company:"MR Neo",role:"Product Manager, AI Strategy",dates:"Aug 2026 – present",location:"India-based company · remote, part-time alongside the MBA",context:"Business automation and CRM platform. The founder brought me in; I report to him and own where AI creates value, product quality and, increasingly, company strategy.",bullets:[{text:"Reset pricing and positioning: introduced competitor benchmarking and try-before-you-upgrade add-ons, and moved the company from “a CRM/CPaaS” to helping customers grow their business. Now shaping company strategy and the operating model."},{text:"Made the whole company AI-native in **under two months**: a central AI knowledge base connected to the codebase, documentation and website, a sales AI workspace and automated team workflows. Sales decks now need **1–2 iterations** instead of many rounds, and information lag across teams has gone."},{text:"Leading the redesign into an **AI-first platform** for early 2027, where users mainly work through AI and manual paths remain."},{text:"Designed flow-conflict detection for the automation builder, so users see which flows overlap, contradict or supersede each other before they break, and an AI daily briefing on each person's tasks and workload for the week."},{text:"Unblocked a Shopify integration the developers had been stuck on for a month by speccing the integration hub, API choice and build steps; shipped and approved."},{text:"Set the product-quality bar: audited the 60+ page platform and turned my own testing method into reusable AI skills the whole team now uses."}]},{ids:["xy-ads"],company:"XY ADS",role:"Product Manager, Product & Platform",dates:"Aug 2023 – Jan 2025",location:"Gurgaon, India",context:"High-volume performance marketing agency and GMNG's parent company. I joined with no marketing background and was working at the level of 5–6-year veterans within 2–3 months.",bullets:[{text:"Built a proprietary ad exchange from scratch, moving clients from manually run DSP campaigns to a self-service platform: **$100k/month** in ad spend ran through it by the time I left, and one client grew to **$30k/month**."},{text:"Wrote API-level OpenRTB PRDs and architected the exchange for **100M+ monthly impressions**; integrated many DSPs and SSPs by breaking each partner's API docs into the exact APIs developers had to build."},{text:"Built and led the team: interviewed and hired **3 developers** and a designer; developers and designers reported to me."},{text:"Cut operating costs **15%** by moving vendors to long-term, tiered, volume-based contracts."},{text:"Designed role-based access (RBAC) so agency teams could run campaigns under central master accounts, and directed the developers to cut latency under very high traffic."}]},{ids:["gmng"],company:"GMNG",role:"Product Manager",promotion:"Promoted from Associate PM within 11 months (APM Feb 2021 – Jan 2022 · PM Feb 2022 – Jul 2023)",dates:"Feb 2021 – Jul 2023",location:"Gurgaon, India",context:"Real-money mobile gaming platform (poker and other skill games). As PM I led a team of 8–9 across development, customer support and sales.",bullets:[{text:"Scaled the platform to **1M+ users** and **$500k+ in user deposits**; a two-tier referral scheme alone brought in **200,000+ new users** in a single month."},{text:"Everybody Wins (my idea): diagnosed new-user churn caused by loss aversion and gave new players a second chance after losing their first real-money game, lifting new-user retention **30%**."},{text:"Designed a 7-day gamified poker onboarding loop (my idea): **60%** of the targeted high-paying players converted, bringing in **$40,000** in revenue."},{text:"Led an engagement push as PM (more games, the 7-day poker loop, UI changes such as pinned favourite games and faster app loading) that together **tripled gameplay frequency** and lifted revenue **50%** in key games."},{text:"Conceptualised an ad-tech Offer Wall, packaged it as a B2B SaaS module and licensed it to **3–4 companies** for about **$5–6k/month**."},{text:"Found that **80%** of depositors used Paytm and pivoted the payment gateway toward it, resolving deposit drop-offs."},{text:"Redesigned the homepage and first-time experience (**+20%** user satisfaction in an in-app survey) and integrated third-party gaming services that removed wait times and lifted revenue **20%**."},{text:"Onboarded vendor partnerships with Dream11 and Pocket52, and contributed to shareholder presentations that secured **$100,000** in development funding."}]},{ids:["library"],company:"Career break",role:"GMAT and MBA applications",dates:"Feb – Dec 2025",location:"India",context:"Prepared for the GMAT and applied to MBA programmes; admitted to The Lisbon MBA (Jan 2026).",bullets:[]}],projects:[{ids:["lara-hotel"],name:"Lará",kind:"Current project · AI hotel platform",dates:"Oct 2026 – now",summary:"A white-label app that runs a hotel's operations and improves the guest experience with AI, for guests and every team: front desk, restaurant and bar, housekeeping and managers. I'm prototyping it with AI coding tools; the proof of concept is built and I'm preparing the pitch to a first hotel.",bullets:[{text:"AI concierge that knows the hotel and books services for guests; allergy alerts reach the restaurant team and manager within seconds and must be acknowledged, even with AI switched off."},{text:"**4** end-to-end pitch scenarios working live; AI reply drafts in Portuguese, English, French and German; iPhone and web."}]},{ids:["sovena"],name:"Sovena",kind:"MBA summer internship · 8 weeks · Lisbon",dates:"Jul – Aug 2026",summary:"Portuguese food group. Reviewed its 59-product tea range: ran consumer surveys, social listening and market research, recommended repositioning from health claims to consumption occasions, presented to a director, and handed over the research as a queryable AI research base (NotebookLM).",bullets:[]},{ids:["dhl","dhl-plane"],name:"DHL Express",kind:"MBA consulting project",dates:"2026",summary:"Market understanding for urgent 50kg+ SPOT shipments. Confidential.",bullets:[]},{ids:["vision-lab"],name:"Food image-recognition app",kind:"Undergraduate final project",dates:"2020 – 2021",summary:"A convolutional neural network (CNN) trained on 10,000 images to classify 100 foods, built into a calorie-tracking app.",bullets:[]}],education:[{ids:["lisbon-mba"],name:"The Lisbon MBA International",school:"Católica | Nova · Lisbon",dates:"Jan – Dec 2026",note:"Completing December 2026."},{ids:["mit-sloan"],name:"MIT Sloan Summer Immersion Certificate",school:"MIT Sloan · Boston · part of The Lisbon MBA",dates:"Jun 2026",note:"Managing Technological Innovation and Leadership; Global Markets and Strategy; Global Compliance and Ethical Issues."},{ids:["manipal"],name:"B.Tech, Information Technology, minor in Digital Marketing",school:"Manipal Institute of Technology · India",dates:"2016 – 2020",note:""}],skills:[{label:"Product",text:"Product strategy, 0→1 platform builds, PRDs, pricing and positioning, growth, retention and onboarding, third-party API integrations, product QA and UX audits, hiring and leading cross-functional teams"},{label:"AI",text:"AI strategy and adoption, AI-first product design, AI knowledge bases and assistants on company data, AI-assisted testing and prototyping, workflow automation"},{label:"Technical",text:"APIs, OpenRTB, RBAC, SQL (working), Postman, Jira, Figma, Claude, NotebookLM"},{label:"Languages",text:"English (proficient), Hindi (native)"}],beyond:{text:"50m rifle shooting at national level · mixed martial arts (state-level training) · travel · I set up a library for underprivileged children in Rajasthan, India, and taught young people basic computer skills."}},title:{eyebrow:"Product Manager · AI Strategy",headline:["Ten years.","Five islands.","One climb."],lede:"From an engineering degree in India to **leading AI strategy** at an Indian CRM company, while finishing an MBA in Lisbon.",stats:[{value:"1M+",label:"users on a gaming platform"},{value:"$100k",label:"a month in ad spend through an ad exchange I built"},{value:"< 2 mo",label:"to make a company AI-native"},{value:"+30%",label:"new-user retention"}]},chapters:[{n:"01",title:"Foundations",years:"2016 – 2020",place:"Manipal, India",lede:"An engineering degree, and a first taste of AI.",card:"B.Tech in IT · a CNN food-recognition app",points:["**B.Tech in Information Technology** at Manipal, with a minor in Digital Marketing","Trained a **CNN on 10,000 images** to recognise 100 foods, built into a calorie-tracking app","**4 verified AI and ML certificates**, from TensorFlow to ML for product managers"]},{n:"02",title:"Build & scale",years:"2021 – 2025",place:"Gurgaon, India",lede:"Two companies, one pattern: build the product from zero, then scale it.",card:"1M+ users · $100k/mo ad spend",points:["**1M+ users** and $500k+ in deposits at GMNG, where I went from Associate PM to PM in **11 months**","An ad exchange built from scratch at XY ADS, with **$100k a month** in ad spend running through it","2025: the GMAT, MBA applications, and a library for underprivileged children"]},{n:"03",title:"New perspective",years:"2026",place:"Lisbon · Boston · India, remote",lede:"An MBA in Lisbon, a summer at MIT Sloan, and AI strategy for an Indian CRM company.",card:"MBA + MIT Sloan · AI-native in < 2 months",points:["**The Lisbon MBA** at Católica | Nova, completing December 2026, with a Summer Immersion at **MIT Sloan**","**Sovena** internship: reviewed 59 tea products and recommended a new positioning","**MR Neo**: made the whole company AI-native in **under two months**, now leading its AI-first redesign","**DHL Express** consulting project: market understanding for urgent 50kg+ SPOT shipments. Confidential."],extras:["mit-sloan","dhl"]},{n:"04",title:"Building now",years:"2026 · Now",place:"Lisbon",lede:"Lará: an AI platform that runs a hotel and looks after its guests.",card:"Lará, an AI hotel platform",points:["Proof of concept built with AI coding tools; preparing the pitch to a **first hotel**","AI concierge for guests, AI reply drafts in **4 languages**, and allergy alerts the team must acknowledge","Off the clock: **50m rifle shooting** at national level, and mixed martial arts"]},{n:"05",title:"What's next",years:"From mid-December 2026",place:"",lede:"The road's paved to mid-December 2026. The next stretch leads to your office.",card:"Your team. Available full-time from mid-December 2026.",points:["Looking for **Product Manager and consulting roles** in AI, platforms and growth","Based in Lisbon; open to anywhere in Europe, or remote","Available full-time from **mid-December 2026**"],cta:!0}],makeTheCall:{intro:"Five real decisions from my career. Make each call yourself, then see what I chose and what happened.",scoreLines:{5:"Same instincts. Let’s talk.","3-4":"Close. The calls we made differently would be a good interview conversation.","0-2":"Different instincts, which makes for a good conversation."},decisions:[{id:"gmng-first-loss",active:!0,buildingId:"gmng",caseStudyId:"everybody-wins",title:"GMNG, Associate PM: new players quitting",situation:"You're an Associate PM at a real-money gaming app. New players deposit, play their first game, lose, and never come back. What do you try?",options:[{id:"a",text:"Lower the entry fee on first games so a loss hurts less."},{id:"b",text:"If a new player loses their first real-money game, give them in-game currency to play another real-money game."},{id:"c",text:"Send win-back notifications with a deposit bonus a few days later."}],manuChoice:"b",outcome:"The problem was loss aversion: new players hated losing their first deposit. “Everybody Wins” gave them a second chance, so most won one of their first two games. It ran on a dual wallet that kept game points separate from withdrawable cash. New-user retention rose 30%.",lesson:"Fix the feeling behind the churn, not just the number."},{id:"gmng-payments",active:!0,buildingId:"gmng",caseStudyId:"paytm-pivot",title:"GMNG: deposits that never came",situation:"You launched card payments because you and your friends all pay by card. Two months later, deposits are tiny. What now?",options:[{id:"a",text:"Talk to the players who did deposit before changing anything."},{id:"b",text:"Run a deposit bonus to get people paying by card."},{id:"c",text:"Add more card networks and a smoother checkout."}],manuChoice:"a",outcome:"80% of depositors used Paytm. I moved the payment gateway to it, and the deposit drop-offs stopped.",lesson:"My habits weren't my customers' habits."},{id:"xyads-who-for",active:!0,buildingId:"xy-ads",caseStudyId:"self-serve-exchange",title:"XY ADS: who to build the ad exchange for",situation:"You're building an ad exchange from scratch, with no marketing background. Competing platforms are powerful but confusing, and built for experienced agencies. Who do you design for?",options:[{id:"a",text:"Experienced agencies: match the competitors feature for feature."},{id:"b",text:"The agency's own campaign team only."},{id:"c",text:"Small businesses and owner-run shops with no marketing expertise."}],manuChoice:"c",outcome:"Clients moved from manually run campaigns to a self-service platform. By the time I left, $100k a month in ad spend ran through it, and one client had grown to $30k a month.",lesson:"The gap in the market was ease of use, not more features."},{id:"mrneo-testing",active:!0,buildingId:"mr-neo",caseStudyId:"ai-testing-skills",title:"MR Neo: a big product, no testing process",situation:"You join a CRM and automation company. The product has 60+ pages, plenty of bugs and no testing process, and you're one person. What do you do?",options:[{id:"a",text:"Test every page yourself and log the bugs."},{id:"b",text:"Ask the founder to hire a QA tester."},{id:"c",text:"Record yourself testing and thinking aloud, then turn that into AI skills the whole team can run."}],manuChoice:"c",outcome:"I recorded 4–5 hours of myself testing, turned it into reusable Claude skills built on existing bug-finding skills, and shared them. They found roughly 500–600 bugs and UX issues, and the team now uses and improves them.",lesson:"Don't just do the work with AI. Turn the way you work into something the team can reuse."},{id:"lara-allergy",active:!0,buildingId:"lara-hotel",caseStudyId:"building-lara-with-ai",title:"Lará: an allergy and an AI concierge",situation:"Your hotel app's AI concierge handles guest requests. A guest mentions a severe allergy. How should that reach the restaurant?",options:[{id:"a",text:"A separate alert that reaches the restaurant team and manager within seconds, must be acknowledged, and works even with AI switched off."},{id:"b",text:"Through the AI concierge, like every other request."},{id:"c",text:"Saved to the guest's profile for staff to check before service."}],manuChoice:"a",outcome:"That’s how Lará works: allergy alerts never depend on the AI.",lesson:"Use AI for convenience, never as the only path for something safety-critical."}]},caseStudies:{labels:{problem:"The problem",whatIDid:"What I did",whatItDoes:"What it does",howIUsedAI:"How I used AI",myCall:"My call",result:"The result",also:"Also",whatNext:"What's next"},items:[{id:"everybody-wins",buildingId:"gmng",title:"Everybody Wins",problem:"New players quit after losing their first real-money game.",whatIDid:["Diagnosed the churn as loss aversion: new players hated losing their first deposit.","Designed a second-chance model: the loser of a first real-money game gets in-game currency to play again for real money.","Built it on a dual-wallet economy that keeps game points separate from withdrawable cash. A game developer built it in Unity."],myCall:"Tackle the fear of losing, not just the drop-off.",result:"New-user retention rose 30%. Here, conversion meant playing a second game after depositing and playing the first."},{id:"one-field-signup",buildingId:"gmng",title:"One-field sign-up",problem:"People downloaded the app but dropped out at registration.",whatIDid:["Benchmarked how other apps handle sign-up.","Replaced the form with one entry point for everyone: phone number, then OTP, then log in if the number exists or create the account if not.","Collected profile details later."],result:"Sign-up drop-off fell by about 60%."},{id:"paytm-pivot",buildingId:"gmng",title:"The Paytm pivot",problem:"I launched card payments assuming cards would dominate, because my friends and I used them. After about two months there were very few deposits.",whatIDid:["Spoke to customers and found 80% of depositors used Paytm.","Moved the payment gateway to it."],myCall:"My habits weren't the customer's.",result:"Deposit drop-offs resolved."},{id:"poker-habit-loop",buildingId:"gmng",title:"The 7-day poker habit loop",problem:"Poker was one of the highest-revenue, higher-margin games, but its learning curve kept players away.",whatIDid:["While testing it, I noticed I'd built a daily habit myself, so the team recreated those steps as a 7-day gamified onboarding loop.","Each day had a small, fun goal, including spending a free allowance (about $10 per user for the week).","It targeted high-paying players from other games."],result:"60% of the targeted cohort converted, bringing in $40,000 in revenue."},{id:"offer-wall",buildingId:"gmng",title:"The Offer Wall",problem:"The parent agency paid other platforms to run app-install campaigns.",whatIDid:["Saw those campaigns could run inside GMNG as an in-game Offer Wall: players earn rewards, and the group earns on installs and actions.","Proposed selling it to other gaming companies."],result:"Packaged as a B2B SaaS module and licensed to 3–4 companies for about $5–6k a month."},{id:"self-serve-exchange",buildingId:"xy-ads",title:"A self-serve ad exchange",problem:"Clients who needed a DSP ran campaigns manually, and competing platforms were confusing and built for experienced agencies.",whatIDid:["Owned the build and direction of a proprietary ad exchange from scratch (I didn't write the code).","Wrote API-level OpenRTB PRDs covering business logic, data architecture, API and data workflows, and unit economics.","Architected it for 100M+ monthly impressions.","Integrated many DSPs and SSPs by breaking each partner's API docs into the exact APIs developers had to build.","Designed role-based access so agency teams could run campaigns under central master accounts.","Interviewed and hired 3 developers and the designer."],myCall:"Design for small businesses and owner-run shops with no marketing expertise.",result:"$100k a month in ad spend ran through it by the time I left, and one client grew to $30k a month.",also:"Cut operating costs 15% by moving vendors to long-term, tiered, volume-based contracts."},{id:"learning-adtech-fast",buildingId:"xy-ads",title:"Learning AdTech fast",problem:"I moved into AdTech with no marketing background. When GMNG closed, I was the GMNG employee the group kept, and it moved me into a domain I'd never worked in to build its exchange.",whatIDid:["Spent 2–3 months researching ad exchanges, Google Ads and the ad ecosystem, and taught myself OpenRTB and ad-serving concepts.","My method: start from the problem, list the ideal features, sketch a first mock, and only then study competitors, so my thinking isn't anchored to what exists."],result:"Within that time, colleagues with 5–6 years in the industry were coming to me with questions about how the systems worked."},{id:"ai-testing-skills",buildingId:"mr-neo",title:"AI testing skills",problem:"A 60+ page CRM and automation platform with no testing process.",whatIDid:["Recorded 4–5 hours of myself testing the platform and thinking aloud: what I click and why.","Turned that into reusable Claude skills, and folded in existing skills to make them better at finding bugs."],howIUsedAI:"The skills now run the testing method I recorded.",myCall:"Build on existing skills instead of starting from zero, and hand them to the team to keep improving.",result:"Roughly 500–600 bugs and UX issues found. The team uses and improves the skills to find bugs, UX issues and feature ideas.",media:[]},{id:"ai-native-company",buildingId:"mr-neo",title:"An AI-native company in under two months",problem:"Current company and product information was slow to reach people, and sales decks went through many rounds.",whatIDid:["Set up a central AI knowledge base connected read-only to the codebase, documentation and website, kept current as the single source of truth.","Built a sales AI workspace grounded in company knowledge and sales frameworks, for pitches, decks and outreach planning.","Automated day-to-day workflows for sales and development."],myCall:"Read-only codebase access, and one source of truth for the whole company.",result:"Done in under two months. Sales decks need 1–2 iterations instead of many rounds, there is virtually no delay in anyone getting current information, and developers ship features with fewer bugs."},{id:"shopify-unblock",buildingId:"mr-neo",title:"Unblocking the Shopify integration",problem:"The developers had been stuck on a Shopify integration for a month.",whatIDid:["Read Shopify's API documentation and specced the integration hub: the UI, which APIs to use and the build steps."],result:"Built, approved and shipped.",also:"My usual pattern: the developers try first. When they're stuck, I read the partner's API docs and give them a step-by-step plan. I did the same for the Google Ads integration."},{id:"flow-conflict-detection",buildingId:"mr-neo",title:"Flow conflict detection",status:"Designed, not yet built",problem:"A gap I found myself, not from a customer: when someone builds their 21st automation flow, they can’t see which flows fire first, overlap, contradict or supersede each other.",whatIDid:["Designed how this should look and work, including warnings while building if a new flow duplicates an existing one or would break another."],howIUsedAI:"I designed it in Claude Design."},{id:"building-lara-with-ai",buildingId:"lara-hotel",title:"Building Lará with AI",status:"Proof of concept built; preparing the pitch to a first hotel",problem:"A white-label app to run a hotel's operations and improve the guest experience, for guests and every team: front desk, restaurant and bar, housekeeping and managers.",whatIDid:["Prototyped it with AI coding tools in 7 phases, each with a security attack-and-harden pass.","Runs on free cloud tiers until a hotel signs."],whatItDoes:["An AI concierge that knows the hotel and books services.","A live request loop: requests land in the right team's queue, and managers see everything.","Checkout to housekeeping to QR check-in.","An AI staff assistant answering from the hotel's own procedures.","AI reply drafts in Portuguese, English, French and German.","AI-drafted manager briefings."],myCall:"Allergy alerts never depend on the AI: they reach the restaurant team and manager within seconds, must be acknowledged, and work with AI switched off.",result:"260 automatic database security tests, and 4 end-to-end pitch scenarios working live.",media:[{file:"hotel/01-welcome.jpg",caption:"Each hotel gets its own brand: guests log in, or scan a QR code from the front desk (demo data)",alt:"Lará guest welcome screen"},{file:"hotel/02-room-suggestions.jpg",caption:"Room suggestions from the guest's likes and booking, plus upgrade offers for loyal guests (demo data)",alt:"Lará room suggestions screen"},{file:"hotel/03-front-desk-board.jpg",caption:"Live front-desk board: arrivals, departures, known guests and rooms that need action (demo data)",alt:"Lará front-desk board"},{file:"hotel/04-staff-assistant.jpg",caption:"AI staff assistant answering from the hotel's own documents (demo data)",alt:"Lará AI staff assistant"}],links:[{label:"How I built this city and Lará with AI ›",href:"how-built/"}]},{id:"sovena-occasions",buildingId:"sovena",title:"Selling an occasion, not a health claim",problem:"Review a 59-product tea range, from packaging to marketing.",whatIDid:["Built the research base: consumer surveys, social listening on Reddit and other platforms, and market research.","Recommended selling an occasion rather than a health claim, and presented it to a director."],howIUsedAI:"Handed the whole research corpus over as a queryable NotebookLM workspace, so the team can keep using it.",myCall:"Sell an occasion, not a health claim."},{id:"food-recognition",buildingId:"vision-lab",title:"Food recognition (undergraduate final project)",whatIDid:["Trained a convolutional neural network on 10,000 images to classify 100 foods, and built it into a calorie-tracking app."]}]},buildings:[{id:"manipal",order:1,buildYear:2016,yearLabel:"2016–2020",district:"india",style:"campus",name:"Manipal Institute of Technology",hook:"B.Tech in IT",career:!0,role:"B.Tech, Information Technology · minor in Digital Marketing",dates:"2016 – Oct 2020",location:"India",story:"Where it started: an engineering degree in Information Technology, with a minor in Digital Marketing. It's the reason I can read API docs and talk to engineers as a peer.",metrics:[],highlights:[{text:"B.Tech, Information Technology, minor in Digital Marketing, 2016 – Oct 2020"}],tags:["Engineering","IT","Digital Marketing"]},{id:"vision-lab",order:2,buildYear:2020,yearLabel:"2020–21",district:"india",style:"lab",name:"Image Recognition Lab",hook:"CNN · 100 foods",ai:"ai-subject",career:!0,role:"Undergraduate final project",dates:"2020 – 2021",location:"Manipal, India",story:"A calorie-tracking app that recognises food from a photo. I trained a convolutional neural network (CNN) on 10,000 images to classify 100 foods, then built it into the app.",metrics:[{value:"10,000",label:"training images",vizType:"scan"},{value:"100",label:"foods recognised",vizType:"scan"}],highlights:[{text:"Food image-recognition classifier: a CNN trained on 10,000 images to classify 100 foods, built into a calorie-tracking app"}],tags:["CNN","TensorFlow","Python","Computer vision"]},{id:"learning-tower",order:3,buildYear:2020,yearLabel:"2020–2025",district:"india",style:"learning-tower",name:"Learning Tower",hook:"4 AI/ML certificates",ai:"ai-subject",career:!0,role:"Courses and certificates",dates:"2020 – 2025",location:null,story:"Each floor is one AI or machine learning course, stacked in the order I finished them: TensorFlow, CNNs and Python in 2020, then ML for product managers in 2025. Every floor links to its certificate on Coursera.",metrics:[{value:"4",label:"verified AI/ML certificates",vizType:"floors"}],certificates:[{title:"Introduction to TensorFlow for AI, ML and Deep Learning",issuer:"DeepLearning.AI · Coursera",date:"2020-04-26",topic:"AI/ML",verify:"https://coursera.org/verify/5PEQPPYS4HFL",shortTitle:"TensorFlow for AI & ML"},{title:"Convolutional Neural Networks in TensorFlow",issuer:"DeepLearning.AI · Coursera",date:"2020-06-14",topic:"AI/ML",verify:"https://coursera.org/verify/XRJEAPU85WAA",shortTitle:"CNNs in TensorFlow"},{title:"Python for Data Science, AI & Development",issuer:"IBM · Coursera",date:"2020-10-31",topic:"AI/ML",verify:"https://coursera.org/verify/LGR9L3QVWSQY",shortTitle:"Python for Data Science & AI"},{title:"Machine Learning Foundations for Product Managers",issuer:"Duke University · Coursera",date:"2025-07-06",topic:"Product",verify:"https://coursera.org/verify/ZPDM0PJ66P53",shortTitle:"ML for Product Managers"}],highlights:[],tags:["AI/ML","Product"],howTo:"Tap a course below (or a floor on the tower) to light it up."},{id:"gmng",order:4,buildYear:2021,yearLabel:"2021–2023",district:"india",style:"arcade",name:"GMNG",hook:"1M+ users",career:!0,role:"Associate Product Manager → Product Manager (promoted within 11 months)",dates:"Feb 2021 – Jul 2023",location:"Gurgaon, India",floors:[{label:"APM",dates:"Feb 2021 – Jan 2022"},{label:"PM",dates:"Feb 2022 – Jul 2023"}],story:"A real-money mobile gaming platform (poker and other skill games). I grew it to 1M+ users, designed the features that kept new players coming back, and turned an ad-tech idea into a B2B product other companies paid for. As PM I led a team of 8–9 across development, support and sales.",metrics:[{value:"1M+",label:"users",vizType:"crowd"},{value:"200,000+",label:"new users in one month (referrals)",vizType:"stream"},{value:"+30%",label:"new-user retention (Everybody Wins)",vizType:"lift"},{value:"3×",label:"gameplay frequency, from the engagement push I led (combined result)",vizType:"lift"}],highlights:[{text:"Scaled the platform to 1M+ users and $500k+ in user deposits"},{text:"Everybody Wins (my idea): a second chance for new players who lose their first real-money game. It tackled churn caused by loss aversion and lifted new-user retention 30%"},{text:"7-day gamified poker onboarding loop (my idea): 60% of the targeted high-paying players converted, bringing in $40,000 in revenue"},{text:"The engagement push I led as PM (more games, the 7-day poker loop, UI changes such as pinned favourite games and faster app loading) tripled gameplay frequency and lifted revenue 50% in key games, as a combined result"},{text:"Two-tier referral scheme that brought in 200,000+ new users in a single month"},{text:"Conceptualised an ad-tech Offer Wall and licensed it as a B2B SaaS module to 3–4 companies for about $5–6k/month"},{text:"Found that 80% of depositors used Paytm and pivoted the payment gateway toward it, resolving deposit drop-offs"},{text:"Redesigned the homepage, UI and first-time experience: user satisfaction up 20% in an in-app survey"},{text:"Integrated third-party gaming services, eliminating wait times and lifting revenue 20%"},{text:"Onboarded vendor partnerships with Dream11 and Pocket52; contributed to shareholder presentations that secured $100,000 in development funding"}],tags:["Growth","Retention","Gamification","Payments","B2B SaaS","Team leadership"],card:{hero:{value:"1M+",label:"users on a real-money gaming platform, and $500k+ in deposits"},proofs:[{value:"+30%",label:"new-user retention from Everybody Wins, my idea"},{value:"200k+",label:"new users in one month from a referral scheme"},{value:"$100k",label:"development funding, from shareholder presentations I contributed to"}]}},{id:"xy-ads",order:5,buildYear:2023,yearLabel:"2023–2025",district:"india",style:"tower",name:"XY ADS",hook:"$100k/mo ad spend",career:!0,role:"Product Manager, Product & Platform",dates:"Aug 2023 – Jan 2025",location:"Gurgaon, India",story:"A high-volume performance marketing agency, and GMNG's parent company. I built its ad exchange from scratch, so clients moved from manually run campaigns to a self-service platform. I joined with no marketing background and was working at the level of 5–6-year veterans within 2–3 months.",metrics:[{value:"100M+",label:"monthly impressions the architecture was built to handle",vizType:"ticker"},{value:"$100k",label:"ad spend per month through the platform",vizType:"money"},{value:"$30k",label:"monthly ad spend from one client",vizType:"money"},{value:"−15%",label:"operating costs",vizType:"drop"}],highlights:[{text:"Built a proprietary ad exchange from scratch: wrote API-level OpenRTB PRDs and architected the exchange for 100M+ monthly impressions"},{text:"Moved clients from manually run DSP campaigns to self-service: $100k/month in ad spend by the time I left, with one client growing to $30k/month"},{text:"Integrated many DSPs and SSPs by breaking each partner's API docs into the exact APIs developers had to build"},{text:"Interviewed and hired 3 developers and a designer; developers and designers reported to me"},{text:"Cut operating costs 15% with long-term, tiered, volume-based vendor contracts"},{text:"Designed role-based access (RBAC) so agency teams could run campaigns under central master accounts"},{text:"Directed the developers to cut latency under very high traffic"}],tags:["OpenRTB","Ad exchange","Programmatic","DSP/SSP","RBAC","0→1"],card:{hero:{value:"$100k/mo",label:"ad spend through an ad exchange I built from scratch"},proofs:[{value:"100M+",label:"monthly impressions the architecture was built to handle"},{value:"$30k/mo",label:"monthly ad spend from one client on the platform"},{value:"−15%",label:"operating costs, from new vendor contracts"}]}},{id:"library",order:6,buildYear:2025,yearLabel:"2025",district:"india",style:"library",name:"The Library",hook:"GMAT year",career:!0,role:"GMAT, MBA applications and a library for children",dates:"Feb – Dec 2025",location:"Rajasthan, India",story:"A year to step back and invest, in myself and in others. I prepared for the GMAT and applied to MBA programmes, and set up a library for underprivileged children, where I taught young people basic computer skills. I was admitted to The Lisbon MBA, starting January 2026.",metrics:[],highlights:[{text:"2025: GMAT and MBA applications (admitted to The Lisbon MBA, Jan 2026)"},{text:"Established a library for underprivileged children; taught basic computer skills to youth in Rajasthan, India"}],tags:["GMAT","MBA","Community","Education"]},{id:"lisbon-mba",order:7,buildYear:2026,yearLabel:"2026",district:"lisbon",style:"university",name:"The Lisbon MBA · Católica | Nova",hook:"Católica | Nova",career:!0,role:"MBA International + MIT Sloan Summer Immersion",dates:"Jan – Dec 2026",location:"Lisbon, Portugal · Boston, US",annex:{name:"MIT Sloan annex",dates:"Jun 2026"},story:"An international MBA in Lisbon, including a month at MIT Sloan in Boston studying technological innovation and global strategy.",metrics:[],highlights:[{text:"The Lisbon MBA International, Católica | Nova, completing December 2026"},{text:"MIT Sloan Summer Immersion Certificate, Boston, June 2026: Managing Technological Innovation, Global Strategy, Compliance and Ethics"},{text:"DHL Express consulting project: market understanding for urgent 50kg+ SPOT shipments (confidential)"}],tags:["MBA","MIT Sloan","Strategy"]},{id:"sovena",order:8,buildYear:2026,yearLabel:"Jul–Aug 2026",district:"lisbon",style:"teahouse",name:"Sovena",hook:"59 teas reviewed",ai:"built-with-ai",career:!0,role:"Summer internship (8 weeks)",dates:"Jul – Aug 2026",location:"Lisbon, Portugal",story:"Sovena is a Portuguese food group. My brief was to review its 59-product tea range and recommend what to do with it, from packaging to marketing. My answer: sell an occasion, not a health claim.",metrics:[{value:"59",label:"tea products reviewed",vizType:"none"}],highlights:[{text:"Built the research base: consumer surveys, social listening (Reddit and other platforms) and market research"},{text:"Recommended repositioning from health claims to consumption occasions; presented to a director"},{text:"Handed over the whole research corpus as a queryable AI research base (NotebookLM) so the team can keep making informed decisions"}],tags:["FMCG","Consumer research","Positioning","NotebookLM"]},{id:"mr-neo",order:9,buildYear:2026,yearLabel:"Aug 2026 – now",district:"lisbon",style:"hq-ai",name:"MR Neo",hook:"AI-native in < 2 months",ai:"built-with-ai",career:!0,role:"Product Manager, AI Strategy (part-time, alongside the MBA)",dates:"Aug 2026 – present",location:"India-based company · remote",story:"A business automation and CRM platform. The founder brought me in to shape the company's direction and to put AI to work across the product and the business: I reset pricing and positioning, made the whole company AI-native in under two months, and I'm now leading its redesign into an AI-first platform.",metrics:[{value:"< 2 months",label:"to make the whole company AI-native",vizType:"lights"},{value:"AI-first",label:"platform redesign I'm leading for early 2027",vizType:"none"},{value:"1–2",label:"sales deck iterations, down from many rounds",vizType:"drop"},{value:"1 month",label:"Shopify integration had been stuck before I specced the fix",vizType:"none"}],highlights:[{text:"Made the company AI-native in under two months: a central AI knowledge base connected to the codebase, documentation and website, a sales AI workspace, and automated workflows. Deck revisions fell to 1–2 iterations and information lag across teams disappeared"},{text:"Reset pricing and positioning: competitor benchmarking and try-before-you-upgrade add-ons, and a shift from 'a CRM/CPaaS' to helping customers grow their business; now shaping company strategy and the operating model"},{text:"Leading the redesign into an AI-first platform for early 2027, where users mainly work through AI and manual paths remain"},{text:"Designed flow-conflict detection for the automation builder, so users see which flows overlap, contradict or supersede each other before they break"},{text:"Designed an AI daily briefing for the tasks page that briefs each person on their week and, for developers, links a bug report to where the fix probably sits"},{text:"Unblocked a Shopify integration the developers had been stuck on for a month by speccing the integration hub, API choice and build steps; shipped and approved"},{text:"Set the product-quality bar: audited the 60+ page platform and turned my own testing method into reusable AI skills the whole team now uses"}],tags:["AI strategy","AI adoption","Pricing & positioning","Product design","Integrations"],card:{hero:{value:"< 2 months",label:"to make the whole company AI-native"},proofs:[{value:"AI-first",label:"platform redesign I'm leading for early 2027"},{value:"1–2",label:"sales deck iterations, down from many rounds"},{value:"1 month",label:"the Shopify integration had been stuck, until I specced the fix"}]}},{id:"lara-hotel",order:10,buildYear:2026,underConstruction:!0,yearLabel:"Now · building",district:"lisbon",style:"hotel-construction",name:"Lará Hotel 🚧",hook:"AI hotel platform",ai:"built-with-ai",career:!0,role:"Current project: AI hotel platform",dates:"Oct 2026 – now",location:"Lisbon, Portugal",status:"Proof of concept built · preparing the pitch to a first hotel",story:"A white-label app that runs a hotel's operations and improves the guest experience with AI, for guests and every team: front desk, restaurant & bar, housekeeping, managers and admins. I prototyped it with AI coding tools; the proof of concept is built and I'm preparing the pitch to a first hotel.",metrics:[{value:"4",label:"end-to-end pitch scenarios working live",vizType:"crane"},{value:"4",label:"languages for AI reply drafts",vizType:"bubbles"},{value:"260",label:"automatic database security tests",vizType:"none"}],highlights:[{text:"AI concierge that knows the hotel and books services for guests"},{text:"Allergy safety alerts reach the restaurant team and manager within seconds and must be acknowledged. They work even with AI switched off"},{text:"Live request loop: a guest books the spa or a table, it lands in the right team's queue, staff confirm or transfer it, and the manager sees everything"},{text:"Checkout → housekeeping → QR check-in: the room flows from departure to cleaning to the next guest, who logs in by scanning a code"},{text:"AI staff assistant answering from the hotel's own procedures, AI reply drafts in Portuguese, English, French and German, and AI-drafted manager briefings"},{text:"Room suggestions, weather-aware guest suggestions, loyalty points and a manager dashboard on live numbers; the app in English and Portuguese, AI reply drafts in 4 languages; iPhone and web"},{text:"Built in 7 phases with security attack-and-harden passes, on free cloud tiers until a hotel signs"}],screenshots:[{file:"hotel/01-welcome.jpg",caption:"Each hotel gets its own brand: guests log in, or scan a QR code from the front desk (demo data)"},{file:"hotel/02-room-suggestions.jpg",caption:"Room suggestions from the guest's likes and booking, plus upgrade offers for loyal guests (demo data)"},{file:"hotel/03-front-desk-board.jpg",caption:"Live front-desk board: arrivals, departures, known guests and rooms that need action (demo data)"},{file:"hotel/04-staff-assistant.jpg",caption:"AI staff assistant answering from the hotel's own documents (demo data)"}],tags:["AI product","Hospitality","iOS + web","0→1"]},{id:"hobby-park",order:11,buildYear:null,yearLabel:"Off the clock",district:"park",style:"park",name:"Hobby Park",hook:"50m rifle · national level",career:!1,role:"Shooting range · MMA dojo",dates:null,location:null,story:"Off the clock: national-level 50m rifle shooting, mixed martial arts, and travel.",metrics:[],highlights:[{text:"50m rifle shooting, national level"},{text:"Mixed martial arts, state-level training"},{text:"Travel"}],tags:["Shooting","MMA","Travel"]},{id:"post-office",order:12,buildYear:null,yearLabel:"Say hello",district:"park",style:"post-office",name:"Contact Me",hook:"Email · LinkedIn · CV",career:!1,role:"Get in touch · email, LinkedIn or my CV",dates:null,location:"Lisbon, Portugal",story:"Want to talk about a role? This is the place. Email me, connect on LinkedIn, or download my CV. Looking for Product Manager and consulting roles in AI, platforms and growth. Available full-time from mid-December 2026.",metrics:[],highlights:[{text:"Lisbon-based; open to anywhere in Europe and to remote roles"},{text:"Available full-time from mid-December 2026"}],links:[{label:"Email",href:"mailto:sam123.manu@gmail.com"},{label:"LinkedIn",href:"https://www.linkedin.com/in/pratapmanusingh"},{label:"Download CV",href:"Manu_Pratap_Singh_CV.pdf"}],tags:[]},{id:"your-plot",order:13,buildYear:2026,yearLabel:"Mid-Dec 2026",district:"park",style:"empty-plot",name:"The next stretch",hook:"From mid-December 2026",career:!1,role:"Where the road goes next",dates:"Ready mid-December 2026",location:"Lisbon · Europe · Remote",story:"The road's paved to mid-December 2026. The next stretch leads to your office: in Lisbon, anywhere in Europe, or remote.",sign:"The road's paved to mid-December 2026. The next stretch leads to your office.",metrics:[],highlights:[{text:"Available full-time from mid-December 2026"},{text:"Lisbon-based; open to anywhere in Europe and to remote roles"}],tags:[],visual:"The paved road ends at a 'paving ends' marker. A gravel stretch with survey stakes leads on to an empty plot. The sign stands where the asphalt stops.",cta:{label:"Contact me",opens:"A small card over the scene, with two one-click actions",actions:[{label:"View my CV",href:"Manu_Pratap_Singh_CV.pdf",kind:"cv",note:"Opens the PDF in a new tab (with download)"},{label:"Email me",href:"mailto:sam123.manu@gmail.com?subject=Claiming%20my%20spot%20on%20your%20road&body=Hi%20Manu%2C%0A%0AI%20saw%20your%20city%20portfolio%20and%20would%20like%20to%20talk%20about%20a%20role%20at%20",kind:"email",note:"Opens the visitor's email app with the subject and first line filled in"},{label:"Copy email",value:"sam123.manu@gmail.com",kind:"copy",note:"Fallback for visitors without an email app; shows 'Copied'"}]}}],vehicles:[{id:"dhl-plane",count:1,style:"cargo-plane",district:"lisbon",route:"lisbon-sky",depot:"lisbon-mba",colors:{body:"#FFCC00",stripe:"#D40511"},banner:"DHL EXPRESS · MBA CONSULTING PROJECT",cargo:"Crate slung under the plane, stamped 'URGENT · 50 KG+'",behaviour:"Loops slowly over the Lisbon district towing a long banner; its shadow glides over the city. A floating label makes it easy to find. Click it: the camera follows the plane and its panel opens.",panel:{name:"DHL Express",role:"MBA consulting project",dates:"2026",story:'Market understanding for urgent 50kg+ "SPOT" shipments.',note:"Confidential."},label:"✈ DHL project"}],islets:[{id:"mit-sloan",name:"MIT Sloan",role:"Summer Immersion Certificate · part of The Lisbon MBA",dates:"Jun 2026",location:"Boston, US",yearLabel:"Jun 2026",after:"lisbon-mba",story:"One month on MIT's campus in Boston, taught by MIT Sloan faculty.",highlights:[{text:"MIT Sloan Summer Immersion Certificate, Boston, June 2026"},{text:"Courses: Managing Technological Innovation and Leadership, Global Markets and Strategy, Global Compliance and Ethical Issues"}],tags:["MIT Sloan","Innovation","Strategy"]}]},Oo=An.person,y_=An.vehicles||[],br=An.islets||[],ic=2026.9,b_=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];function M_(n,t){if(n.style==="empty-plot")return 2026.84;if(n.buildYear==null)return 2026.78+t*.01;if(n.buildYear!==2026)return n.buildYear;const e=(n.dates||"").toLowerCase().match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/);return 2026+(e?b_.indexOf(e[0])/12:0)}const Ue=An.buildings.slice().sort((n,t)=>n.order-t.order).map((n,t)=>({...n,index:t,appearYear:M_(n,t)}));Object.fromEntries(Ue.map(n=>[n.id,n]));function S_(n){if(!n.date)return 2020;const t=new Date(n.date);return t.getFullYear()+t.getMonth()/12}const Wd=An.title,Hs=An.chapters||[],w_=An.makeTheCall||{decisions:[]},Fo=An.caseStudies?.items||[],E_=An.caseStudies?.labels||{},Ne=(n,t,e)=>Math.min(e,Math.max(t,n)),Sa=(n,t,e)=>n+(t-n)*e,Ss=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,Sl=n=>1-Math.pow(1-n,3),Oh=n=>1+2.4*Math.pow(n-1,3)+1.4*Math.pow(n-1,2),yi=()=>typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches;function wl(n=7){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const Eo=new Set;function or({duration:n=1,ease:t=Ss,onUpdate:e,onDone:i}){const s={elapsed:0,duration:Math.max(1e-4,n),ease:t,onUpdate:e,onDone:i,dead:!1};return Eo.add(s),{cancel:()=>{s.dead=!0,Eo.delete(s)}}}function T_(n){for(const t of[...Eo]){if(t.dead)continue;t.elapsed+=n;const e=Ne(t.elapsed/t.duration,0,1);t.onUpdate?.(t.ease(e),e),e>=1&&(Eo.delete(t),t.onDone?.())}}const wa=new Map;function k(n,t={}){const e=n+JSON.stringify(t);if(!t.unique&&wa.has(e))return wa.get(e);const{unique:i,...s}=t,r=new ye({color:n,roughness:.85,metalness:0,flatShading:!0,...s});return i||wa.set(e,r),r}function Xd({text:n,sub:t,w:e=512,h:i=128,bg:s="#243447",fg:r="#ffffff",font:o="Inter",weight:a=700,size:l,border:c,align:h="center",radius:d=18}){const u=document.createElement("canvas");u.width=e,u.height=i;const f=u.getContext("2d");return To(f,{text:n,sub:t,w:e,h:i,bg:s,fg:r,font:o,weight:a,size:l,border:c,align:h,radius:d}),u}function To(n,{text:t,sub:e,w:i,h:s,bg:r,fg:o,font:a="Inter",weight:l=700,size:c,border:h,align:d="center",radius:u=18}){n.clearRect(0,0,i,s),r&&(n.fillStyle=r,Fh(n,0,0,i,s,u),n.fill()),h&&(n.strokeStyle=h,n.lineWidth=8,Fh(n,4,4,i-8,s-8,u),n.stroke()),n.fillStyle=o,n.textAlign=d,n.textBaseline="middle";let f=c||Math.floor(s*(e?.38:.5));for(n.font=`${l} ${f}px ${a}, system-ui, sans-serif`;n.measureText(t).width>i*.92&&f>10;)f-=2,n.font=`${l} ${f}px ${a}, system-ui, sans-serif`;const p=t,v=d==="center"?i/2:i*.06;if(n.fillText(p,v,e?s*.38:s/2),e){n.globalAlpha=.8;let g=Math.floor(s*.22);for(n.font=`500 ${g}px ${a}, system-ui, sans-serif`;n.measureText(e).width>i*.92&&g>10;)g-=2,n.font=`500 ${g}px ${a}, system-ui, sans-serif`;n.fillText(e,v,s*.74),n.globalAlpha=1}}function Fh(n,t,e,i,s,r){n.beginPath(),n.moveTo(t+r,e),n.arcTo(t+i,e,t+i,e+s,r),n.arcTo(t+i,e+s,t,e+s,r),n.arcTo(t,e+s,t,e,r),n.arcTo(t,e,t+i,e,r),n.closePath()}function Ie(n,t,e,{emissive:i=!1,doubleSide:s=!0}={}){const r=Xd(n),o=new Dn(r);o.colorSpace=Me,o.anisotropy=4;const a={map:o,transparent:!0,side:s?Se:Kn,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2},l=i?new Jt(a):new ye({...a,roughness:.7}),c=new ht(new pn(t,e),l);return c.userData.canvas=r,c.userData.texture=o,c}function J(n,t,e,i,s=0,r=0,o=0){const a=new ht(new oe(n,t,e),i);return a.position.set(s,r+t/2,o),a.castShadow=!0,a.receiveShadow=!0,a}function ee(n,t,e,i,s=12,r=0,o=0,a=0){const l=new ht(new Oe(n,t,e,s),i);return l.position.set(r,o+e/2,a),l.castShadow=!0,l.receiveShadow=!0,l}function Ls(n,t){try{if(t===void 0)return localStorage.getItem(n);localStorage.setItem(n,t)}catch{return null}return t}function A_(n){return n>=1e6?(n/1e6).toFixed(n>=1e7?0:1).replace(/\.0$/,"")+"M":n>=1e3?Math.round(n).toLocaleString("en-US"):Math.round(n).toString()}const kh=[{key:"foundations",title:"Foundations",years:"2016 — 2020",stops:["manipal","vision-lab","learning-tower"],w:74,d:64,top:2,place:"india"},{key:"build",title:"Build & scale",years:"2021 — 2025",stops:["gmng","xy-ads","library"],w:78,d:66,top:9,place:"india"},{key:"perspective",title:"New perspective",years:"2026",stops:["lisbon-mba","sovena","mr-neo"],w:84,d:68,top:16,place:"lisbon"},{key:"horizon",title:"Building now",years:"2026 · Now",stops:["lara-hotel","hobby-park","post-office"],w:88,d:72,top:24,place:"horizon"},{key:"next",title:"What's next",years:"From mid-December 2026",stops:["your-plot"],w:52,d:52,top:32,place:"next"}],C_=32,R_=[28,14,0,-14,-28],ue=(()=>{const n=[];let t=0;kh.forEach((i,s)=>{s&&(t+=kh[s-1].w/2+C_+i.w/2),n.push({...i,index:s,x:t,z:R_[s]})});const e=(n[0].x+n[n.length-1].x)/2;return n.forEach(i=>{i.x-=e,i.pathZ=i.z+i.d/2-14,i.rowX=14,i.slots=[i.pathZ-14,i.pathZ-36],i.streetEnd=i.place==="next"?i.pathZ-12:i.pathZ-47}),n})(),bn=(()=>{const n=ue[ue.length-1],t=ue[0].x-ue[0].w/2,e=n.x+n.w/2;return{w:e-t+60,d:220,minX:t,maxX:e,centerX:(t+e)/2}})(),P_=Object.fromEntries(ue.flatMap(n=>n.stops.map(t=>[t,n]))),L_=[[-1,0],[-1,1],[1,1],[1,0]];function I_(){const n=[];for(const t of ue)t.stops.map(i=>Ue.find(s=>s.id===i)).filter(Boolean).forEach((i,s)=>{const r=i.style==="empty-plot",[o,a]=L_[s],l=r?new T(t.x,t.top,t.streetEnd-11):new T(t.x+o*t.rowX,t.top,t.slots[a]),c=r?new T(0,0,1):new T(-o,0,0);n.push({stop:i,island:t,pos:l,face:c,side:r?0:o,t:i.index/(Ue.length-1)})});return n.sort((t,e)=>t.stop.order-e.stop.order)}const Ao=I_(),D_=Object.fromEntries(Ao.map(n=>[n.stop.id,n])),qd=ue.slice(0,-1).map((n,t)=>{const e=ue[t+1];return{index:t,from:n,to:e,a:new T(n.x+n.w/2-.5,n.top,n.pathZ),b:new T(e.x-e.w/2+.5,e.top,e.pathZ),year:["2021","2026","NOW","NEXT"][t],suspension:e.place==="lisbon",unbuilt:e.place==="next"}}),cn=-7,Bt={sea:"#2f7896",rock:"#b6c1b5",edge:"#8f8873",stone:"#a39b86",walk:"#f4efe3",coral:"#d9734e",gold:"#c9a35f",white:"#faf7ec",trim:"#e3dcc9",dark:"#254953",grass:"#a9c39c",leaf:"#759d78",leaf2:"#507e68",red:"#c0392b",yellow:"#f2c230",saffron:"#f08a24"},U_={padTop:.32},Mn=(n,t=1)=>k(n,{flatShading:!1,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-t,polygonOffsetUnits:-t});function Yd(n,t,e=3){const i=new ji;return i.moveTo(-n/2+e,-t/2),i.lineTo(n/2-e,-t/2),i.quadraticCurveTo(n/2,-t/2,n/2,-t/2+e),i.lineTo(n/2,t/2-e),i.quadraticCurveTo(n/2,t/2,n/2-e,t/2),i.lineTo(-n/2+e,t/2),i.quadraticCurveTo(-n/2,t/2,-n/2,t/2-e),i.lineTo(-n/2,-t/2+e),i.quadraticCurveTo(-n/2,-t/2,-n/2+e,-t/2),i}function ws(n,t,e,i,s=.3){const r=new zs(n,{depth:e-t,bevelEnabled:s>0,bevelSize:s,bevelThickness:s*.5,bevelSegments:2,curveSegments:8});r.rotateX(-Math.PI/2),r.translate(0,t,0);const o=new ht(r,i);return o.castShadow=o.receiveShadow=!0,o}function Li(n,t,e,i){const s=[],r=[],o=new T(0,1,0);n.forEach((c,h)=>{const d=n[Math.min(h+1,n.length-1)],u=n[Math.max(h-1,0)],f=d.clone().sub(u).setY(0).normalize(),p=new T().crossVectors(o,f).normalize().multiplyScalar(t/2);for(const v of[c.clone().add(p),c.clone().sub(p),c.clone().add(p).setY(c.y-e),c.clone().sub(p).setY(c.y-e)])s.push(v.x,v.y,v.z)});for(let c=0;c<n.length-1;c++){const h=c*4,d=h+4;r.push(h,d,h+1,h+1,d,d+1,h+2,h+3,d+2,h+3,d+3,d+2,h,h+2,d,h+2,d+2,d,h+1,d+1,h+3,h+3,d+1,d+3)}const a=new Ee;a.setAttribute("position",new Xt(s,3)),a.setIndex(r),a.computeVertexNormals();const l=new ht(a,i);return l.castShadow=l.receiveShadow=!0,l}const rn=(n,t,e,i=40)=>{const s=new ht(new ec(new Uo(n),i,t,6,!1),e);return s.castShadow=!0,s};function Ea(n,{bg:t=Bt.dark,fg:e="#f6e7c1",w:i=7,h:s=2.3}={}){const r=Ie({text:n,w:512,h:168,bg:t,fg:e,radius:30},i,s);return r.userData.billboard=!0,r}function N_(n=1){const t=new kt,e=[];for(let s=0;s<=5;s++)e.push(new T(Math.sin(s*.45)*.6*n,s*1.3*n,0));t.add(rn(e,.28*n,k("#8b6b4a"),12));const i=e[5];for(let s=0;s<7;s++){const r=s/7*Math.PI*2;t.add(rn([i,i.clone().add(new T(Math.cos(r)*2.2*n,.7*n,Math.sin(r)*2.2*n)),i.clone().add(new T(Math.cos(r)*4*n,-1*n,Math.sin(r)*4*n))],.24*n,k("#4f8a52"),8))}return t}function O_(){const n=new kt;n.add(J(1.6,1.2,2.6,k(Bt.yellow),0,.35,0)),n.add(J(1.7,.25,2.2,k("#1f2a2c"),0,1.55,-.1)),n.add(J(1.3,.7,.1,k("#3a5a66",{roughness:.3}),0,.9,1.25));for(const[t,e]of[[-.7,-.8],[.7,-.8],[0,1]]){const i=new ht(new Oe(.35,.35,.25,10),k("#222"));i.rotation.z=Math.PI/2,i.position.set(t,.35,e),n.add(i)}return n}function F_(){const n=new kt,t=k("#e7c9a0");n.add(J(9,1,9,k("#d8b88e"),0,0,0)),n.add(J(6,3.4,6,t,0,1,0)),n.add(J(3,2.6,.4,k("#7a3b1e"),0,1,3.05));for(let s=0;s<5;s++)n.add(J(5.2-s*.9,1.1,5.2-s*.9,t,0,4.4+s*1.05,0));const e=new ht(new qe(.9,12,8),k("#d9a84e",{metalness:.4}));e.position.y=10.1,n.add(e),n.add(ee(.06,.06,3,k("#5b3a2a"),6,0,10.4,0));const i=new ht(new Ee().setFromPoints([new T(0,13.3,0),new T(1.8,12.8,0),new T(0,12.2,0)]),new ye({color:Bt.saffron,side:Se}));return n.add(i),n.add(rn([new T(-1.6,3.6,3.3),new T(0,3,3.4),new T(1.6,3.6,3.3)],.14,k("#f2a51d"),10)),n.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),n}function k_(n){const t=new kt;t.add(J(6,6,5.5,k(n),0,0,0)),t.add(J(6.4,.6,5.9,k("#f4e6d0"),0,6,0)),t.add(J(2.6,1.6,1,k("#f4e6d0"),0,3.4,3.1));const e=new ht(new qe(1.3,10,6,0,Math.PI*2,0,Math.PI/2),k("#f4e6d0"));e.position.set(0,5,3.1),e.scale.set(1,.6,.6),t.add(e);for(const i of[-2,0,2])t.add(J(.9,1.2,.1,k("#3d5a66"),i,1.2,2.8));return t.traverse(i=>{i.isMesh&&(i.castShadow=!0)}),t}function B_(){const n=new kt;n.add(J(3.4,1.6,2,k("#8b5a3c"),0,0,0));const t=document.createElement("canvas");t.width=64,t.height=16;const e=t.getContext("2d");for(let r=0;r<8;r++)e.fillStyle=r%2?"#ffffff":"#d9534f",e.fillRect(r*8,0,8,16);const i=new Dn(t);i.colorSpace=Me;const s=new ht(new oe(4,.2,2.8),new ye({map:i}));s.position.set(0,3,.4),s.rotation.x=.18,n.add(s);for(const r of[-1.8,1.8])n.add(J(.12,3,.12,k("#5b3a2a"),r,0,1.6));return n.add(ee(.35,.3,.6,k("#c0c4c8",{metalness:.6}),10,.8,1.6,0)),n.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),n}function z_(){const n=new kt,t=k("#7b6450");n.add(ee(.9,1.3,5,t,8));for(let e=0;e<8;e++){const i=e/8*Math.PI*2;n.add(ee(.12,.12,4.6,t,5,Math.cos(i)*3.2,0,Math.sin(i)*3.2))}for(const[e,i,s,r]of[[0,6.2,0,3.6],[2.6,5.6,1,2.8],[-2.6,5.8,-.6,3],[.6,6,-2.4,2.6],[-.8,5.6,2.4,2.5]]){const o=new ht(new xi(r,1),k("#5f8f4e"));o.position.set(e,i,s),o.scale.y=.65,n.add(o)}return n.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),n}function H_(){const n=new kt,t=J(12,.12,2.4,Mn("#c9a46a",2),0,0,0);t.castShadow=!1,n.add(t);for(const i of[-5.4,5.4])for(const s of[-.35,0,.35])n.add(J(.1,1.2,.1,k("#f4ead2"),i,0,s));const e=(i,s,r)=>{const o=new kt;o.add(ee(.3,.35,1.1,k(i),8));const a=new ht(new qe(.3,8,6),k("#b98563"));return a.position.y=1.4,o.add(a),o.position.set(s,0,r),o.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),o};return n.add(e("#ffffff",-4.6,.6),e("#3d7ea6",4.4,-.6),e("#e07a5f",1,2.4),e("#f2c14e",-1.5,-2.6)),n.add(J(.12,.9,.12,k("#d9b98c"),-4.2,.4,.6)),n}function V_(n,t=6.5){const e=new kt,i=[new T(-n/2,t,0),new T(0,t-1,0),new T(n/2,t,0)],s=new Uo(i);e.add(rn(i,.04,k("#555"),12));const r=["#f2c14e","#e07a5f","#3d7ea6","#81b29a","#d94a8c","#f08a24"],o=new Ee().setFromPoints([new T(-.35,0,0),new T(.35,0,0),new T(0,-.8,0)]);o.computeVertexNormals();const a=Math.floor(n/1.2);for(let l=1;l<a;l++){const c=s.getPoint(l/a),h=new ht(o,new ye({color:r[l%r.length],side:Se}));h.position.copy(c),e.add(h)}for(const l of[-n/2,n/2])e.add(ee(.08,.08,t,k(Bt.dark),6,l,0,0));return e}function G_(){const n=document.createElement("canvas");n.width=n.height=256;const t=n.getContext("2d");t.fillStyle="#f6f3ea",t.fillRect(0,0,256,256);for(let i=0;i<8;i++)for(let s=0;s<8;s++)t.save(),t.translate(s*32+16,i*32+16),t.strokeStyle="#2f5d9b",t.lineWidth=3,t.beginPath(),t.arc(0,0,9,0,Math.PI*2),t.stroke(),t.fillStyle="#2f5d9b",t.rotate(Math.PI/4),t.fillRect(-4,-4,8,8),t.restore();const e=new Dn(n);return e.colorSpace=Me,e.wrapS=e.wrapT=xo,e}function W_(n){const t=new kt;t.add(J(6,5.5,5,k(n),0,0,0));const e=new ht(new Jn(4.6,2.4,4),k("#cf6a43"));e.rotation.y=Math.PI/4,e.position.y=6.7,e.scale.set(1,1,.85),t.add(e);for(const i of[-1.6,1.6])t.add(J(1,1.3,.1,k("#2f5d9b"),i,2.6,2.55));return t.traverse(i=>{i.isMesh&&(i.castShadow=!0)}),t}function X_(){const n=document.createElement("canvas");n.width=190,n.height=100;const t=n.getContext("2d");for(let i=0;i<13;i++)t.fillStyle=i%2?"#ffffff":"#b22234",t.fillRect(0,i*100/13,190,100/13+.5);t.fillStyle="#3c3b6e",t.fillRect(0,0,76,54),t.fillStyle="#ffffff";for(let i=0;i<5;i++)for(let s=0;s<6;s++)t.beginPath(),t.arc(7+s*12.5,6+i*10.5,1.8,0,Math.PI*2),t.fill();const e=new Dn(n);return e.colorSpace=Me,e}function q_(){const i=new kt,s=Yd(44,32,4);i.add(ws(s,cn-2,8-.9,k(Bt.rock),.6)),i.add(ws(s,8-.9,8-.25,k(Bt.edge),.35)),i.add(ws(s,8-.25,8,k(Bt.stone),.15));const r=Ie({text:"MIT SLOAN · BOSTON",sub:"SUMMER IMMERSION · JUN 2026",w:1600,h:320,bg:"rgba(250,247,236,0.95)",fg:"#7a1f2b",weight:700,radius:34},34,6.8,{doubleSide:!1});r.position.set(0,8-1.15-3.4,32/2+.8),i.add(r);const o=k("#ece6d8"),a=new kt;a.position.set(4,8,-3),a.add(J(20,6,9,o,0,0,0)),a.add(J(20.6,.6,9.6,k("#ddd5c4"),0,6,0));for(let v=0;v<8;v++)a.add(ee(.38,.42,5.2,k("#f6f2e8"),10,-5.6+v*1.6,.3,5.1));a.add(J(13.4,1.1,1.6,k("#ddd5c4"),0,5.5,5.1));const l=new ji;l.moveTo(-6.9,0),l.lineTo(6.9,0),l.lineTo(0,1.9),l.closePath();const c=new zs(l,{depth:1.6,bevelEnabled:!1});c.translate(0,0,-.8);const h=new ht(c,k("#ddd5c4"));h.position.set(0,6.6,5.1),a.add(h),a.add(ee(3.4,3.6,2.6,o,24,0,6.6,-.5));const d=new ht(new qe(3.6,24,12,0,Math.PI*2,0,Math.PI/2),k("#d8d2c4"));d.position.set(0,9.2,-.5),a.add(d),a.add(ee(.6,.8,1,o,12,0,12.6,-.5));for(const v of[-7.5,-5,5,7.5])a.add(J(1,2.4,.1,k("#3d5a66"),v,1.6,4.55));a.traverse(v=>{v.isMesh&&(v.castShadow=v.receiveShadow=!0)}),i.add(a);const u=k("#9c4a35");for(let v=0;v<4;v++){const g=new kt;g.position.set(-17+v*3.4,8,-9);const m=7+v%2*1.2;g.add(J(3.3,m,6,u,0,0,0)),g.add(J(2,m-2,1,k("#a85640"),0,1,3.3)),g.add(J(3.5,.4,6.2,k("#2b2b2b"),0,m,0));for(let b=0;b<3;b++)g.add(J(1.4,1,.1,k("#33454f"),0,1.6+b*2,3.85));g.add(J(1.1,1.6,.1,k("#1f2a37"),-1.1,0,3.05)),g.traverse(b=>{b.isMesh&&(b.castShadow=!0)}),i.add(g)}for(const[v,g]of[[-16,6],[-11,9],[-6,6.5],[15,10],[18,4],[-19,1]]){const m=new kt;m.add(ee(.25,.35,2.2,k("#8a6a4c"),6));const b=new ht(new xi(1.8,1),k(Bt.leaf));b.position.y=3.3,m.add(b),m.position.set(v,8,g),m.traverse(y=>{y.isMesh&&(y.castShadow=!0)}),i.add(m)}i.add(ee(.1,.12,10,k("#c9ccd1",{metalness:.5}),8,-9,8,9));const f=new ht(new pn(3.8,2).translate(1.9,0,0),new ye({map:X_(),side:Se}));f.position.set(-8.9,8+8.9,9),i.add(f);const p=J(4,.12,12,Mn(Bt.walk,1),4,8,9);return p.castShadow=!1,i.add(p),i.add(J(10,.4,3,k("#ab7750"),12,cn+.3,32/2+4)),{group:i,W:44,D:32,TOP:8,flag:f}}function Y_(n){const t=new kt;t.name="terrain",n.add(t);const e=wl(42),i=new be,s={tram:null,boats:[],beam:null},r=new ht(new pn(6e3,6e3),new ye({color:Bt.sea,roughness:.35,metalness:.15}));r.rotation.x=-Math.PI/2,r.position.y=cn,r.receiveShadow=!0,t.add(r);const o=new Sn(new oe(1,.05,.25),new Jt({color:"#9cc9d2",transparent:!0,opacity:.45}),160);for(let w=0;w<160;w++)i.position.set(bn.centerX+(e()-.5)*620,cn+.05,(e()-.5)*320),i.scale.set(3+e()*9,1,1),i.rotation.set(0,(e()-.5)*.2,0),i.updateMatrix(),o.setMatrixAt(w,i.matrix);t.add(o);const a=ue.map(()=>[]),l=(w,D,F,N,G)=>a[w.index].push({x0:D-N,x1:D+N,z0:F-G,z1:F+G}),c=(w,D,F,N)=>Math.abs(D)>w.w/2-N-1||Math.abs(F)>w.d/2-N-1?!1:a[w.index].every(G=>D+N<G.x0||D-N>G.x1||F+N<G.z0||F-N>G.z1),h=ue.map(w=>{const D=new kt;D.name=`island-${w.index}`,D.position.set(w.x,0,w.z),t.add(D);const F=Yd(w.w,w.d,4);D.add(ws(F,cn-2,w.top-.9,k(Bt.rock),.6)),D.add(ws(F,w.top-.9,w.top-.25,k(Bt.edge),.35)),D.add(ws(F,w.top-.25,w.top,k(Bt.stone),.15));for(let lt=cn+2;lt<w.top-1.6-Math.min(8.5,w.top-cn-1.6);lt+=2.6){const it=J(w.w-6,.12,.12,k(Bt.edge),0,lt,w.d/2+.62);it.castShadow=!1,D.add(it)}const N=Math.min(8.5,w.top-cn-1.6),G=Math.min(N*5,w.w-8),H=Ie({text:`0${w.index+1}  ${w.title.toUpperCase()}`,sub:w.years.toUpperCase(),w:1600,h:320,bg:"rgba(250,247,236,0.95)",fg:"#2f5550",weight:700,radius:34},G,N,{doubleSide:!1});H.position.set(0,w.top-1.15-N/2,w.d/2+.8),D.add(H);const q=w.pathZ-w.z,$=w.streetEnd-w.z,B=J(w.w-1,.12,6,Mn(Bt.walk,1),0,w.top,q),W=J(w.w-1,.14,1.3,Mn(Bt.coral,2),0,w.top+.02,q),nt=J(7,.12,q-$,Mn(Bt.walk,1),0,w.top,(q+$)/2),j=J(1,.14,q-$-3,Mn(Bt.coral,2),0,w.top+.02,(q+$)/2-1.5);[B,W,nt,j].forEach(lt=>{lt.castShadow=!1,D.add(lt)}),l(w,0,q,w.w/2,3.5),l(w,0,(q+$)/2,4,(q-$)/2+1);const tt=J(w.w-10,.2,2.2,Mn(Bt.grass,1),0,w.top,-(w.d/2-2.2));return tt.castShadow=!1,D.add(tt),D}),d=[];for(const w of Ao){const D=w.island,F=w.pos.x-D.x,N=w.pos.z-D.z;if(w.stop.style==="empty-plot"){l(D,F,N,10,13);continue}const G=J(20,U_.padTop-.02,20,k("#fbf8f0"),F,D.top+.02,N);G.castShadow=!1,h[D.index].add(G),l(D,F,N,10.5,10.5)}for(const w of ue){if(w.place==="next")continue;const D=new Set(Ao.filter(F=>F.island===w).map(F=>`${Math.sign(F.pos.x-w.x)}:${F.pos.z}`));for(const F of[-1,1])for(const N of w.slots){if(D.has(`${F}:${N}`))continue;const G=h[w.index],H=F*w.rowX,q=N-w.z,$=J(18,.2,18,Mn(Bt.grass,1),H,w.top,q);$.castShadow=!1,G.add($);for(const[B,W]of[[-5,-5],[5,-5],[-5,5],[5,5]]){const nt=new kt;nt.add(ee(.25,.35,2.2,k("#8a6a4c"),6));const j=new ht(new xi(1.7,1),k(Bt.leaf));j.position.y=3.2,nt.add(j),nt.position.set(H+B,w.top,q+W),nt.traverse(tt=>{tt.isMesh&&(tt.castShadow=!0)}),G.add(nt)}G.add(J(3,.5,1,k("#ab7750"),H,w.top,q),ee(1.4,1.6,.6,k(Bt.white),16,H,w.top,q-3.5)),l(w,H,q,10.5,10.5)}}for(const w of ue){const D=h[w.index],F=w.pathZ-w.z,N=(q,$,B,W,nt=0)=>c(w,$,B,W)?(q.position.set($,w.top,B),q.rotation.y=nt,D.add(q),l(w,$,B,W,W),!0):!1,G=w.slots.map(q=>q-w.z),H=w.rowX+10+(w.w/2-w.rowX-10)/2;if(w.place==="india"){const q=w.index===1;N(F_(),q?H:-H,G[q?1:0],4.6,q?-Math.PI/2:Math.PI/2);for(const[W,nt]of[[0,"#e8a0a8"],[1,"#6f8fc9"],[2,"#e5b465"]]){const j=(q?-1:1)*H;N(k_(nt),j,G[0]-14+W*9+(q?4:0),3.4,(q?1:-1)*Math.PI/2)}N(H_(),q?14:-16,F+7.5,3),N(B_(),q?-18:20,F+7,2.2,Math.PI),N(z_(),q?-w.w/2+9:w.w/2-9,F+7.5,4);for(const W of[-w.w/2+5,-6,6,w.w/2-5,0])N(N_(.9+e()*.2),W,F+9.5,1.6,e()*6);for(const W of G){const nt=V_(7.5);nt.position.set(0,w.top,W+11),D.add(nt)}const $=O_();$.position.set(q?10:-12,w.top+.1,F+1.6),$.rotation.y=Math.PI/2,D.add($);const B=J(w.w*.3,.35,1.6,k("#e3913f"),-w.w*.25,w.top,F+4.4);B.castShadow=!1,D.add(B)}if(w.place==="lisbon"){const q=G_();q.repeat.set(4,1.6);const $=new ht(new pn(26,8),new ye({map:q,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}));$.rotation.x=-Math.PI/2,$.position.set(-12,w.top+.05,F+7.5),$.receiveShadow=!0,D.add($),l(w,-12,F+7.5,13,4);const B=w.streetEnd-w.z;for(const nt of[-1.1,1.1])D.add(J(.18,.1,F-B,k("#4a5560"),nt,w.top+.08,(F+B)/2));const W=new kt;W.add(J(2.4,2.4,7,k(Bt.yellow),0,.3,0),J(2.6,.35,7.3,k(Bt.white),0,2.7,0));for(const nt of[-1,1])W.add(J(.05,.9,5.6,k("#3d6f7b",{roughness:.3}),nt*1.22,1.5,0));W.add(rn([new T(0,3,0),new T(0,4.6,-1)],.05,k("#333"),2)),W.position.set(0,w.top,(F+B)/2),W.traverse(nt=>{nt.isMesh&&(nt.castShadow=!0)}),D.add(W),s.tram={tram:W,mid:(F+B)/2,span:(F-B)/2-6};for(const[nt,j,tt]of[[-1,0,"#f7f2e7"],[-1,1,"#f3d9a8"],[1,0,"#e9eef2"],[1,1,"#f7f2e7"]])N(W_(tt),nt*H,G[j],3.6,nt*-Math.PI/2);for(const nt of[8,20,w.w/2-6])N(new kt().add(ee(.25,.35,2.2,k("#8a6a4c"),6),new ht(new xi(1.7,1).translate(0,3.2,0),k(Bt.leaf))),nt,F+8,2)}if(w.place==="horizon"){const q=new kt;q.add(ee(1.4,2,13,k(Bt.white),16));for(let W=0;W<3;W++)q.add(ee(1.85-W*.15,1.95-W*.15,1.1,k(Bt.red),16,0,2+W*3.6,0));q.add(ee(1.2,1.2,1.8,new ye({color:"#fff4c2",emissive:"#ffd76a",emissiveIntensity:1.2}),16,0,13,0)),q.add(ee(.2,1.6,1.4,k(Bt.gold,{metalness:.4}),16,0,14.8,0));const $=new ht(new Jn(4,26,24,1,!0).translate(0,-13,0),new Jt({color:"#ffd76a",transparent:!0,opacity:.22,depthWrite:!1,side:Se})),B=new kt;B.position.y=13.9,$.rotation.z=Math.PI/2,B.add($),q.add(B),q.traverse(W=>{W.isMesh&&W!==$&&(W.castShadow=!0)}),N(q,H,G[1],2.5),s.beam=B}}const u=new Qt,f=new Oe(.25,.35,2.2,6).translate(0,1.1,0),p=new xi(1.7,1).translate(0,3.2,0),v=k("#3d6f7b",{roughness:.25,metalness:.3});for(const w of ue){const D=h[w.index],F=w.pathZ-w.z;if(w.place!=="india"&&w.place!=="next")for(let $=0,B=0;$<80&&B<3;$++){const W=w.slots[1]-w.z+4,nt=(e()-.5)*(w.w-10),j=-w.d/2+5+e()*(W+w.d/2-5);if(!c(w,nt,j,3.6))continue;const tt=4+w.index*2.6+e()*(3+w.index*2),lt=5+e()*2,it=5+e()*2,pt=new kt;pt.position.set(nt,w.top,j),pt.add(J(lt,tt,it,k("#eef1f2"),0,0,0));for(let Tt=0;Tt<Math.max(1,Math.floor(tt/2.4));Tt++)pt.add(J(lt+.06,.8,it+.06,v,0,.9+Tt*2.4,0));pt.add(J(lt+.4,.3,it+.4,k(Bt.trim),0,tt,0)),pt.traverse(Tt=>{Tt.isMesh&&(Tt.castShadow=Tt.receiveShadow=!0)}),D.add(pt),l(w,nt,j,lt/2+1,it/2+1),B++}const N=[];for(let $=-w.w/2+4;$<=w.w/2-4;$+=5.5)for(const B of[-w.d/2+4,F+9])c(w,$,B,1.8)&&(N.push({x:$,z:B}),l(w,$,B,1.8,1.8));for(let $=-w.d/2+8;$<F-4;$+=6)for(const B of[-w.w/2+3.5,w.w/2-3.5])c(w,B,$,1.8)&&(N.push({x:B,z:$}),l(w,B,$,1.8,1.8));if(N.length){const $=new Sn(f,k("#8a6a4c"),N.length),B=new Sn(p,k("#ffffff"),N.length);N.forEach((W,nt)=>{i.position.set(W.x,w.top,W.z),i.rotation.set(0,e()*6,0),i.scale.setScalar(.75+e()*.35),i.updateMatrix(),$.setMatrixAt(nt,i.matrix),B.setMatrixAt(nt,i.matrix),B.setColorAt(nt,u.set(e()<.6?Bt.leaf:Bt.leaf2))}),$.castShadow=B.castShadow=!0,D.add($,B)}const G=[];for(let $=-w.w/2+4;$<=w.w/2-4;$+=9)G.push({x:$,z:F+3.8,r:0});for(let $=F-6;$>w.streetEnd-w.z+2;$-=9)for(const B of[-1,1])G.push({x:B*4.2,z:$,r:B>0?-Math.PI/2:Math.PI/2});const H=new Sn(new Oe(.1,.12,3.6,6).translate(0,1.8,0),k(Bt.dark),G.length),q=new Sn(new oe(.9,.18,.4).translate(.3,3.6,0),new ye({color:Bt.gold,emissive:"#ffd27a",emissiveIntensity:.25}),G.length);G.forEach(($,B)=>{i.position.set($.x,w.top,$.z),i.rotation.set(0,$.r,0),i.scale.setScalar(1),i.updateMatrix(),H.setMatrixAt(B,i.matrix),q.setMatrixAt(B,i.matrix)}),H.castShadow=!0,D.add(H,q)}const g=qd.map(w=>{const D=new kt;D.name=`bridge-${w.index}`,t.add(D);const{a:F,b:N}=w,G=N.clone().sub(F).setY(0).normalize(),H=new T(-G.z,0,G.x);if(w.suspension){const W=Array.from({length:21},(lt,it)=>F.clone().lerp(N,it/20).add(new T(0,.15,0)));D.add(Li(W,6.5,.9,k("#7d8a8f"))),D.add(Li(W.map(lt=>lt.clone().add(new T(0,.05,0))),1.3,.1,Mn(Bt.coral,2)));const nt=k(Bt.red,{roughness:.5}),j=[F.clone().lerp(N,.2),F.clone().lerp(N,.8)];for(const lt of j){for(const pt of[-1,1])D.add(J(.9,16,.9,nt,lt.x+H.x*3.4*pt,lt.y-3,lt.z+H.z*3.4*pt));const it=J(.9,.9,7.6,nt,lt.x,lt.y+11.6,lt.z);it.rotation.y=Math.atan2(H.x,H.z),D.add(it)}for(const lt of[-1,1]){const it=H.clone().multiplyScalar(3.4*lt),pt=j[0].clone().add(it).setY(j[0].y+12.5),Tt=j[1].clone().add(it).setY(j[1].y+12.5),Nt=Array.from({length:17},(Wt,ot)=>{const ut=pt.clone().lerp(Tt,ot/16);return ut.y-=Math.sin(ot/16*Math.PI)*10,ut});D.add(rn(Nt,.2,nt,40)),D.add(rn([F.clone().add(it).setY(F.y+.6),pt],.2,nt,4),rn([Tt,N.clone().add(it).setY(N.y+.6)],.2,nt,4));for(let Wt=2;Wt<=14;Wt+=2){const ot=Nt[Wt],ut=F.clone().lerp(N,.2+Wt/16*.6);D.add(rn([ot,new T(ot.x,ut.y+.2,ot.z)],.07,nt,2))}}const tt=Ea("LISBON",{bg:Bt.red,fg:"#ffffff",w:8,h:2.6});return tt.position.copy(F.clone().lerp(N,.5)).add(new T(0,15,0)),D.add(tt),D}const q=Array.from({length:41},(W,nt)=>{const j=nt/40,tt=F.clone().lerp(N,j);return tt.y+=Math.sin(j*Math.PI)*6+.15,tt});if(w.unbuilt){const W=q.slice(0,24);D.add(Li(W,6.5,.8,k(Bt.white))),D.add(Li(W.map(pt=>pt.clone().add(new T(0,.05,0))),1.3,.1,Mn(Bt.coral,2)));const nt=Li(q.slice(23),6.5,.8,new Jt({color:"#ffffff",transparent:!0,opacity:.22,depthWrite:!1}));nt.castShadow=!1,D.add(nt);for(let pt=25;pt<40;pt+=2){const Tt=q[pt],Nt=J(1.3,.12,1.2,k(Bt.coral),Tt.x,Tt.y+.05,Tt.z);Nt.castShadow=!1,D.add(Nt)}const j=q[23],tt=k("#d9a441");for(const pt of[-1,1])for(const Tt of[-1,1])D.add(J(.2,12,.2,tt,j.x+Tt*1.2,j.y-9,j.z+pt*3.4));for(let pt=-8;pt<=2;pt+=2.5)D.add(J(2.8,.15,7.2,tt,j.x,j.y+pt,j.z));const lt=pt=>dr.lerp(F.y-6,N.y-6,pt)+Math.sin(pt*Math.PI)*11.5;for(const pt of[-1,1]){const Tt=H.clone().multiplyScalar(2.7*pt);D.add(rn(Array.from({length:12},(Nt,Wt)=>{const ot=Wt/11*.575,ut=F.clone().lerp(N,ot).add(Tt);return ut.y=lt(ot),ut}),.45,k(Bt.trim),24))}const it=Ea("NEXT",{bg:Bt.coral,fg:"#ffffff"});return it.position.copy(q[20]).add(new T(0,4.8,0)),D.add(it,ee(.12,.12,3.4,k(Bt.dark),6,q[20].x,q[20].y,q[20].z)),D}D.add(Li(q,6.5,.8,k(Bt.white))),D.add(Li(q.map(W=>W.clone().add(new T(0,.05,0))),1.3,.1,Mn(Bt.coral,2)));const $=W=>dr.lerp(F.y-6,N.y-6,W)+Math.sin(W*Math.PI)*11.5;for(const W of[-1,1]){const nt=H.clone().multiplyScalar(2.7*W),j=Array.from({length:21},(tt,lt)=>{const it=lt/20,pt=F.clone().lerp(N,it).add(nt);return pt.y=$(it),pt});D.add(rn(j,.45,k(Bt.trim),40)),D.add(rn(q.map(tt=>tt.clone().add(H.clone().multiplyScalar(3.1*W)).add(new T(0,1.1,0))),.12,k(Bt.gold,{metalness:.4,roughness:.35}),60));for(let tt=4;tt<=36;tt+=4){const lt=q[tt].clone().add(nt),it=$(tt/40);lt.y-.7-it>.5&&D.add(rn([lt.clone().setY(lt.y-.7),new T(lt.x,it,lt.z)],.07,k(Bt.trim),2))}}const B=Ea(w.year);return B.position.copy(q[20]).add(new T(0,4.8,0)),D.add(B,ee(.12,.12,3.4,k(Bt.dark),6,q[20].x,q[20].y,q[20].z)),D}),m=ue.find(w=>w.place==="lisbon"),b=q_();b.group.name="islet-mit-sloan",b.group.position.set(m.x+18,0,m.z+m.d/2+b.D/2+26),t.add(b.group);const y=new ht(new oe(b.W,20,b.D),new Jt({visible:!1}));y.position.set(0,b.TOP+4,0),y.userData.extraId="mit-sloan",b.group.add(y);const _=new T(m.x+18,cn+.1,m.z+m.d/2+2),U=new T(b.group.position.x-6,cn+.1,b.group.position.z-b.D/2-2),R=new Zl(_,_.clone().lerp(U,.5).add(new T(-14,0,0)),U),P=new Sn(new Oe(.45,.45,.12,10),new Jt({color:"#ffffff"}),18);for(let w=0;w<18;w++)i.position.copy(R.getPoint((w+.5)/18)),i.rotation.set(0,0,0),i.scale.setScalar(1),i.updateMatrix(),P.setMatrixAt(w,i.matrix);b.group.attach(P);const I=()=>b.group.localToWorld(new T(0,b.TOP,0)),M=ue[0];for(let w=0;w<3;w++)t.add(J(3,.4,14,k("#ab7750"),M.x-14+w*5,cn+.3,M.z+M.d/2+9));for(let w=0;w<4;w++){const D=new kt;D.add(J(2,.8,6,k(Bt.white),0,0,0)),D.add(ee(.07,.07,7,k(Bt.dark),6,0,.8,0));const F=new Ee().setFromPoints([new T(0,1.4,0),new T(0,7.4,0),new T(0,1.4,3.6)]);F.computeVertexNormals(),D.add(new ht(F,new ye({color:"#f7f3df",side:Se}))),D.traverse(G=>{G.isMesh&&(G.castShadow=!0)});const N=bn.centerX+(w-1.5)*120+e()*30;D.position.set(N,cn+.2,(w%2?1:-1)*(75+e()*30)),D.userData={x0:N,speed:2+e()*2,phase:e()*6},t.add(D),s.boats.push(D)}const x=[2015.7,2020.75,2025.7,2026.4,2026.55],C=2026.25;function z(w){const D=Ne((w-C)/.2,0,1);b.group.visible=D>0,b.group.position.y=(1-Sl(D))*-20,h.forEach((F,N)=>{const G=Ne((w-x[N])/.25,0,1);F.visible=G>0,F.position.y=(1-Sl(G))*-(ue[N].top+12)}),g.forEach((F,N)=>{F.visible=w>=x[N+1]+.15})}return{group:t,clouds:new kt,obstacles:[],islandGroups:h,setYear:z,pickables:[y],extras:{"mit-sloan":{anchor:w=>w.copy(I()).add(new T(4,17,-3)),focus:()=>{const w=I().add(new T(2,4,0));return{target:w,pos:w.clone().add(new T(18,40,82))}}}},update(w,D=0,F){if(F){const N=F.aspect<.9;for(const G of d){const H=N?G.spots.tall:G.spots.wide;G.holder.position.z=H.z,G.holder.position.y=H.y+Math.sin(D*.9+G.phase)*.8,G.holder.scale.setScalar(N?1.2:1),G.beam.visible=G.emitter.visible=!N;const q=G.holder.getWorldPosition(new T);G.holder.quaternion.copy(F.quaternion);const $=F.position.distanceTo(q),B=Math.min(1,Math.max(0,($-110)/140));G.panel.material.opacity=B,G.beam.material.opacity=.18*B,G.panel.visible=B>.02}}s.tram&&(s.tram.tram.position.z=s.tram.mid+Math.sin(D*.25)*s.tram.span),s.beam&&(s.beam.rotation.y=D*.6),b.flag.rotation.y=Math.sin(D*1.7)*.12;for(const N of s.boats)N.position.x=N.userData.x0+Math.sin(D*.05*N.userData.speed+N.userData.phase)*40,N.rotation.z=Math.sin(D*1.3+N.userData.phase)*.04}}}const $_=.32,j_=new f_,$d=[];function Z_(){for(const{material:n,file:t}of $d.splice(0))j_.load(t,e=>{e.colorSpace=Me,n.map=e,n.color.set("#ffffff"),n.needsUpdate=!0})}function so(n,t,e,i){const s=new ji;s.moveTo(-t/2,0),s.lineTo(t/2,0),s.lineTo(0,e),s.closePath();const r=new zs(s,{depth:n,bevelEnabled:!1});r.translate(0,0,-n/2),r.rotateY(Math.PI/2);const o=new ht(r,k(i));return o.castShadow=!0,o}function J_(n,t,e,i){const s=new ji;s.moveTo(-n/2,0),s.lineTo(n/2,0),s.lineTo(0,t),s.closePath();const r=new zs(s,{depth:e,bevelEnabled:!1});r.translate(0,0,-e/2);const o=new ht(r,k(i));return o.castShadow=!0,o}function Ii(n,{w:t,h:e,rows:i,cols:s,x:r=0,y:o,z:a,color:l="#3f5b74",ww:c=.9,wh:h=1.1,emissive:d="#ffd98a",lit:u=.12,rotY:f=0}){const p=new oe(c,h,.15),v=new Sn(p,new ye({color:l,emissive:d,emissiveIntensity:u,roughness:.3,metalness:.1}),i*s),g=new be;let m=0;for(let b=0;b<i;b++)for(let y=0;y<s;y++){const _=s===1?0:-t/2+t*y/(s-1),U=i===1?0:e*b/(i-1);g.position.set(_,U,0),g.updateMatrix(),v.setMatrixAt(m++,g.matrix)}return v.position.set(r,o,a),v.rotation.y=f,n.add(v),v}function Yn(n,t,{y:e,z:i,w:s=9,h:r=1.8,bg:o="#243447",fg:a="#fff",sub:l,emissive:c=!1}){const h=Ie({text:t,sub:l,w:1024,h:Math.round(1024*r/s),bg:o,fg:a},s,r,{emissive:c});return h.position.set(0,e,i),n.add(h),h}function K_(n){const t=new kt;t.add(ee(.32,.38,1.1,k(n),6));const e=new ht(new qe(.3,8,6),k("#f0c8a0"));return e.position.y=1.4,t.add(e),t}const Q_={campus(n){n.add(J(16,6,8,k("#e9cfa5"),0,0,-1)),n.add(J(16.6,.6,8.6,k("#c98f62"),0,6,-1));for(let r=0;r<6;r++)n.add(ee(.38,.45,5,k("#f6ead2"),8,-6.25+r*2.5,.3,3.6));n.add(J(15.5,.35,2.2,k("#d9b98c"),0,0,3.8)),n.add(J(15.5,.8,1.8,k("#c98f62"),0,5.3,3.6)),n.add(J(3.6,14,3.6,k("#e3c294"),0,0,-3));const e=new ht(new Jn(3.1,3.6,4),k("#b5654a"));e.rotation.y=Math.PI/4,e.position.set(0,15.8,-3),e.castShadow=!0,n.add(e);const i=new Dn(tx());i.colorSpace=Me;const s=new ht(new vs(1.25,24),new Jt({map:i}));return s.position.set(0,11.6,-1.18),n.add(s),Ii(n,{w:12,h:2.2,rows:2,cols:7,y:1.8,z:3.05}),Yn(n,"MANIPAL INSTITUTE OF TECHNOLOGY",{y:7.4,z:3.2,w:11,h:1.3,bg:"#7a2e2e"}),n.add(J(16,.15,3.5,k("#9cc56e"),0,.05,6.8)),{clock:s}},lab(n){n.add(ee(6,6.3,3.6,k("#f4f1ea"),20));const t=new ht(new qe(5.8,20,10,0,Math.PI*2,0,Math.PI/2),k("#d9e4ec",{flatShading:!0}));t.position.y=3.6,t.castShadow=!0,n.add(t),Ii(n,{w:6,h:0,rows:1,cols:4,y:1.9,z:6.2,color:"#5a7d99"});const e=J(.6,.6,7,k("#3a4250"),0,8.8,2.4);n.add(e),n.add(J(.6,3.6,.6,k("#3a4250"),0,6,-1.2));const i=new kt;i.position.set(0,9.1,6.2);const s=ee(1.1,1.1,1.8,k("#2b3240"),16);s.rotation.x=Math.PI/2.6,s.position.set(0,0,0),i.add(s);const r=new ht(new vs(.75,20),new Jt({color:"#6fd3ff"}));r.position.set(0,-.75,.55),r.rotation.x=Math.PI/2+.3,i.add(r),n.add(i),n.add(ee(1.9,1.6,.9,k("#cbd2da"),16,0,0,8.2)),n.add(ee(1.8,1.4,.18,k("#ffffff"),20,0,.9,8.2));const o=new ht(new qe(.62,12,10),k("#d64545"));o.position.set(-.4,1.6,8.2);const a=new ht(new qe(.5,10,8),k("#a3c454"));return a.position.set(.6,1.5,8),o.castShadow=a.castShadow=!0,n.add(o,a),Yn(n,"IMAGE RECOGNITION LAB",{y:4.6,z:6.15,w:9,h:1.15}),{eye:i,lens:r,plate:new T(0,1.6,8.2)}},"learning-tower"(n,t){const e=t.certificates||[];n.add(J(8,2.2,8,k("#e8dfcf"),0,0,0)),n.add(J(3,1.8,.3,k("#3f5b74"),0,0,4.05));const i=[],s=["#f4efe4","#efe6d4","#f4efe4","#efe6d4","#f4efe4","#efe6d4"];e.forEach((l,c)=>{const h=new kt;h.position.y=2.2+c*3.4;const d=J(7,3,7,k(s[c%s.length]),0,0,0),u=new ht(new oe(7.2,1.1,7.2),new ye({color:"#40607c",emissive:"#ffcf6b",emissiveIntensity:.08,roughness:.3}));u.position.y=1.55;const f=J(7.6,.4,7.6,k("#d8cbb3"),0,3,0);[d,u,f].forEach(p=>{p.userData.certIndex=c}),h.add(d,u,f),h.userData={year:S_(l),band:u,index:c},n.add(h),i.push(h)});const r=2.2+e.length*3.4+.4,o=new ht(new Oe(0,3.2,2.6,4),k("#c66b4f"));o.rotation.y=Math.PI/4,o.position.y=r+1.3,o.castShadow=!0,n.add(o),n.add(ee(.12,.12,3.4,k("#3a4250"),6,0,r+2.4,0));const a=new ht(new qe(.35,8,6),new Jt({color:"#ff7a59"}));return a.position.y=r+6,n.add(a),Yn(n,"LEARNING TOWER",{y:1.1,z:4.2,w:6.6,h:1}),{floors:i,crown:o,tip:a,top:r}},arcade(n){n.add(J(17,5,10,k("#5b3fa0"),0,0,-1)),n.add(J(14,4.2,8,k("#7656c2"),0,5,-2)),n.add(J(17.4,.4,10.4,k("#2e2350"),0,5,-1)),n.add(J(14.4,.4,8.4,k("#2e2350"),0,9.2,-2)),n.add(J(10,3.2,.2,new ye({color:"#2a1d4a",emissive:"#ff4fd8",emissiveIntensity:.25,roughness:.2}),0,.4,4.05));const e=new Jt({color:"#ff5fd2"}),i=new Jt({color:"#4ff0ff"}),s=new ht(new oe(17.2,.22,.22),e);s.position.set(0,4.85,4.12);const r=new ht(new oe(14.2,.22,.22),i);r.position.set(0,9.05,2.12),n.add(s,r);const o=new Sn(new qe(.2,6,4),new Jt({color:"#ffe17a"}),16),a=new be;for(let d=0;d<16;d++)a.position.set(-7.5+d,3.9,4.25),a.updateMatrix(),o.setMatrixAt(d,a.matrix);n.add(o);const l=Ie({text:"GMNG",w:512,h:192,bg:"#1b1233",fg:"#ff7be5",border:"#4ff0ff"},7,2.6,{emissive:!0});l.position.set(0,11.2,.5),n.add(l),n.add(J(.3,1.6,.3,k("#2e2350"),-2.5,9.4,.4),J(.3,1.6,.3,k("#2e2350"),2.5,9.4,.4));const c=Ie({text:"APM · 2021",w:512,h:128,bg:"#ffffff",fg:"#3b2a6b"},3.4,.85);c.position.set(-6.2,4.3,4.13);const h=Ie({text:"PM · 2022–23",w:512,h:128,bg:"#ffffff",fg:"#3b2a6b"},3.6,.9);return h.position.set(-4.4,8.2,2.13),n.add(c,h),Ii(n,{w:10,h:0,rows:1,cols:5,y:6.9,z:2.1,color:"#2a1d4a",emissive:"#4ff0ff",lit:.5}),n.add(J(17,.12,4.5,k("#e4d6f2"),0,.03,6.4)),{door:new T(0,0,4.3),plaza:new T(0,0,6.6),bulbs:o}},tower(n){const t=new ye({color:"#8fbcd8",roughness:.15,metalness:.35,flatShading:!0});n.add(J(12,3.4,10,k("#dfe5ea"),0,0,0)),n.add(J(7,26,7,t,0,3.4,-1));for(let l=0;l<9;l++)n.add(J(7.2,.25,7.2,k("#e9eef2"),0,4.2+l*2.9,-1));n.add(J(7.4,.8,7.4,k("#d0d8df"),0,29.4,-1)),n.add(ee(.1,.1,5,k("#3a4250"),6,1.8,30.2,-1.8));const e=new ht(new qe(.3,8,6),new Jt({color:"#ff4d4d"}));e.position.set(1.8,35.3,-1.8),n.add(e),n.add(J(.4,4.5,.4,k("#3a4250"),-3.5,3.4,3.2),J(.4,4.5,.4,k("#3a4250"),3.5,3.4,3.2));const i=Xd({text:"XY ADS",sub:"Ad exchange · built from scratch",w:1024,h:384,bg:"#111827",fg:"#ffffff"}),s=new Dn(i);s.colorSpace=Me;const r=new ht(new pn(9,3.4),new Jt({map:s}));r.position.set(0,9.5,3.4),n.add(r,J(9.4,3.8,.3,k("#2b3240"),0,7.6,3.2));const o=[],a=[[-8.2,-6.5,"DSP"],[8.2,-6.5,"SSP"],[-8.2,5.5,"DSP"],[8.2,4.5,"SSP"]];for(const[l,c,h]of a){const d=3+Math.abs(l+c)%3;n.add(J(3,d,3,k(h==="DSP"?"#f6d6a8":"#cde3c7"),l,0,c));const u=Ie({text:h,w:256,h:128,bg:"#243447",fg:"#fff"},1.6,.8);u.position.set(l,d+.7,c),u.userData.billboard=!0,n.add(u),o.push(new T(l,d+.2,c))}return{board:r,canvas:i,texture:s,partners:o,hub:new T(0,27,-1),blink:e}},library(n){const t="#f3ead8";for(let r=0;r<3;r++)n.add(J(15-r*.8,.45,10-r*.6,k("#ddd2bd"),0,r*.45,0));n.add(J(13,6,7,k(t),0,1.35,-1));for(let r=0;r<6;r++)n.add(ee(.42,.48,5.4,k("#fbf6ea"),10,-5+r*2,1.35,3.2));n.add(J(13.6,.7,2.4,k("#e9dcc2"),0,6.75,2.6));const e=J_(13.6,2.6,2.4,"#e9dcc2");e.position.set(0,7.45,2.6),n.add(e),n.add(J(13.4,.5,7.4,k("#c46b4e"),0,7.35,-1.2)),Yn(n,"THE LIBRARY",{y:8.3,z:3.85,w:5,h:.9,bg:"#f3ead8",fg:"#5b4636"});const i=["#c0504d","#4f81bd","#9bbb59","#f2c14e","#8064a2"];for(let r=0;r<3;r++)for(let o=0;o<4;o++){const a=J(1.4,.32,1,k(i[(r+o)%5]),-5+r*5,1.35+o*.32,5.4);a.rotation.y=o%2*.3-.15,n.add(a)}const s=[];return[["#e07a5f",-3],["#3d7ea6",2.5],["#f2c14e",4.3]].forEach(([r,o])=>{const a=K_(r);a.scale.setScalar(.7),a.position.set(o,1.35,4.4),n.add(a),s.push(a)}),{kids:s}},university(n){const t="#fbf7ef";n.add(J(14,7,6,k(t),0,0,-3));const e=so(14.6,6.8,2.8,"#cf6a43");e.position.set(0,7,-3),n.add(e);for(const l of[-1,1]){n.add(J(4.5,5.5,8,k(t),l*6.3,0,2));const c=so(8.6,5.1,2.2,"#cf6a43");c.rotation.y=Math.PI/2,c.position.set(l*6.3,5.5,2),n.add(c)}const i=document.createElement("canvas");i.width=256,i.height=32;const s=i.getContext("2d");s.fillStyle="#ffffff",s.fillRect(0,0,256,32);for(let l=0;l<16;l++)s.fillStyle="#2f5d9b",s.save(),s.translate(l*16+8,16),s.rotate(Math.PI/4),s.fillRect(-5,-5,10,10),s.restore();const r=new Dn(i);r.colorSpace=Me;const o=new ht(new pn(14,.9),new ye({map:r,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));o.position.set(0,1.4,.03),n.add(o),n.add(J(3.2,4.2,.4,k("#2f3a48"),0,0,.1));const a=new ht(new Oe(1.6,1.6,.42,16,1,!1,0,Math.PI),k("#2f3a48"));return a.rotation.z=Math.PI/2,a.rotation.y=Math.PI/2,a.position.set(0,4.2,.1),n.add(a),Ii(n,{w:9,h:2.6,rows:2,cols:5,y:2.6,z:.05,color:"#3f5b74"}),Yn(n,"CATÓLICA | NOVA · THE LISBON MBA",{y:6.2,z:.12,w:10,h:.95,bg:"#1d3557"}),n.add(J(8,.12,6,k("#e8dcc8"),0,.03,5.5)),{depot:new T(0,0,6)}},teahouse(n){n.add(J(10,4.6,8,k("#e2ecd7"),0,0,-1));const t=so(10.8,9,3.2,"#3f6b4a");t.position.set(0,4.6,-1),n.add(t),n.add(J(2,3,.25,k("#6b4f3a"),0,0,3.1)),Ii(n,{w:6,h:0,rows:1,cols:2,y:2.4,z:3.05,color:"#557a5f",ww:1.4,wh:1.4});const e=new kt;e.position.set(0,7.2,-1),e.add(ee(2.2,3.2,.4,k("#ffffff"),20,0,-.3,0)),e.add(ee(2.3,1.6,2.6,k("#ffffff"),20,0,0,0));const i=new ht(new vs(2.1,20),k("#b5793b"));i.rotation.x=-Math.PI/2,i.position.y=2.45,e.add(i);const s=new ht(new gr(.75,.22,6,12),k("#ffffff"));s.position.set(2.4,1.3,0),e.add(s),e.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),n.add(e),Yn(n,"SOVENA · TEA HOUSE",{y:4,z:3.08,w:6.4,h:.9,bg:"#3f6b4a"});const r=new Sn(new xi(.7,0),k("#5f9a52"),24),o=new be;let a=0;for(let l=0;l<3;l++)for(let c=0;c<8;c++)o.position.set(-7+c*2,.6,5+l*1.6),o.scale.set(1,.8,1),o.updateMatrix(),r.setMatrixAt(a++,o.matrix);return r.castShadow=!0,n.add(r),{steamFrom:new T(0,9.8,-1)}},"hq-ai"(n){n.add(J(14,5,10,k("#f4f5f7"),0,0,-1));const t=new ye({color:"#2d3a4a",roughness:.2,metalness:.4});n.add(J(11,6,8,t,1,5,-2)),n.add(J(11.4,.4,8.4,k("#e7eaee"),1,11,-2)),Ii(n,{w:11,h:0,rows:1,cols:6,y:2.6,z:4.05,color:"#2d3a4a",emissive:"#7fd6ff",lit:.15});const e=[];for(let r=0;r<3;r++)for(let o=0;o<4;o++){const a=new ye({color:"#36465a",emissive:"#7cf0c5",emissiveIntensity:0,roughness:.4}),l=new ht(new oe(2.1,.3,1.8),a);l.position.set(-2.6+o*2.4,11.55,-4.6+r*2.2),l.castShadow=!0,n.add(l),e.push(l)}const i=new ht(new gr(1.6,.22,8,32),new Jt({color:"#7cf0c5"}));i.position.set(-5,8.6,2.2),n.add(i);const s=Ie({text:"AI",w:256,h:256,bg:null,fg:"#7cf0c5"},2.2,2.2,{emissive:!0});return s.position.set(-5,8.6,2.25),n.add(s),Yn(n,"MR NEO",{y:4,z:4.06,w:4,h:1,bg:"#111827"}),{panels:e,ring:i,ai:s}},"hotel-construction"(n,t){n.add(J(14,9,8,k("#f6ecdc"),0,0,-2));for(let p=0;p<3;p++)Ii(n,{w:11,h:0,rows:1,cols:6,y:1.7+p*3,z:2.08,color:"#40607c",ww:1.2,wh:1.5,lit:.18}),p>0&&n.add(J(13,.18,.9,k("#d8c7ad"),0,p*3,2.4));const i=k("#c9c4bb");for(let p=0;p<2;p++){n.add(J(14,.35,8,i,0,9+p*3,-2));for(const v of[-6.6,-2.2,2.2,6.6])for(const g of[-5.6,1.6])n.add(J(.45,3,.45,i,v,9.35+p*3,g))}const s=k("#d9a441");for(let p=0;p<5;p++)n.add(J(.15,15,.15,s,7.6,0,-5.6+p*2));for(let p=0;p<5;p++)n.add(J(.15,.15,8.4,s,7.6,3+p*3,-2));const r=new kt;r.position.set(-9,0,-7);const o=k("#f2b632");r.add(J(1.3,26,1.3,o));for(let p=0;p<9;p++){const v=J(1.8,.18,.18,k("#c88f12"),0,1+p*2.8,.66);v.rotation.z=.7*(p%2?1:-1),r.add(v)}const a=new kt;a.position.y=26,a.add(J(24,.9,1,o,6,0,0)),a.add(J(3,2.2,1.8,k("#5b6573"),-5,-.6,0)),a.add(J(1.8,1.6,1.8,k("#e7e1d4"),0,-1.7,0)),a.add(J(.6,3,.6,o,0,.8,0));const l=new kt;l.position.x=12;const c=new ht(new Oe(.06,.06,1,4),k("#333"));l.add(c);const h=new kt,d=J(3,1.2,1.8,k("#b8b2a7"));d.position.y=-1.3,h.add(J(.5,.5,.5,k("#333"),0,-.5,0),d),l.add(h),a.add(l),r.add(a),n.add(r),n.add(J(17,2.6,.25,k("#2f4a3a"),0,0,5.2));const u=Ie({text:"LARÁ · OPENING SOON",sub:"An AI hotel platform, under construction",w:1024,h:256,bg:"#f2b632",fg:"#2a2a2a"},8.6,2.15);return u.position.set(0,10.6,2.3),n.add(u),(t.screenshots||[]).slice(0,4).forEach((p,v)=>{const g=new Jt({color:"#dfe6ee"});$d.push({material:g,file:p.file});const m=new ht(new pn(1.75,3.6),g);m.position.set(-5.4+v*3.6,2.25,5.43),n.add(m,J(2.05,3.9,.15,k("#1f2a37"),-5.4+v*3.6,.3,5.3))}),{jib:a,trolley:l,cable:c,hook:h,windowsAt:[new T(-5,11.5,0),new T(5,4,2.2),new T(5,11.5,0),new T(-5,4,2.2)],door:new T(0,0,6)}},park(n){const t=new kt;t.position.set(-4.5,0,0),t.add(J(7,3,3,k("#d9c6a1"),0,0,4));const e=so(7.4,3.6,1.2,"#7b5c3e");e.position.set(0,3,4),t.add(e);for(let c=0;c<3;c++)t.add(J(.15,.6,9,k("#efe3c8"),-2.2+c*2.2,0,-2.5));const i=new Dn(ex());i.colorSpace=Me;const s=[];for(let c=0;c<3;c++){const h=new ht(new vs(.9,24),new Jt({map:i}));h.position.set(-2.2+c*2.2,1.6,-7.2),t.add(h,J(.18,1.2,.18,k("#6b4f3a"),-2.2+c*2.2,0,-7.3)),s.push(h)}t.add(J(8,2.4,.5,k("#9c8463"),0,0,-8)),n.add(t);const r=new kt;r.position.set(5.5,0,-1),r.add(J(6,.6,6,k("#cbbba0"))),r.add(J(5,3.2,5,k("#f4ead6"),0,.6,0));const o=new ht(new Jn(5.2,2.2,4),k("#b23a2f"));o.rotation.y=Math.PI/4,o.position.y=4.9;const a=new ht(new Jn(3.4,1.8,4),k("#b23a2f"));a.rotation.y=Math.PI/4,a.position.y=6.6,o.castShadow=a.castShadow=!0,r.add(o,a,J(1.4,2.2,.15,k("#5b3a2a"),0,.6,2.55));const l=Ie({text:"MMA DOJO",w:512,h:128,bg:"#1f2a37",fg:"#fff"},2.8,.7);return l.position.set(0,3.3,2.6),r.add(l),n.add(r),Yn(n,"HOBBY PARK",{y:2.4,z:7.5,w:4.4,h:.9,bg:"#2f6b4f"}),n.add(J(.2,2,.2,k("#6b4f3a"),-1.9,0,7.4),J(.2,2,.2,k("#6b4f3a"),1.9,0,7.4)),{targets:s}},"post-office"(n){const t="#d9734e",e="#243447";n.add(J(16,.5,12,k("#e9e3d6"),0,0,-1)),n.add(J(15,9,10,k("#fbf7ef"),0,.5,-1.5));const i=new ye({color:"#7fb3c4",roughness:.15,metalness:.3,emissive:"#ffe2b0",emissiveIntensity:.12});n.add(J(12.6,7.6,.2,i,0,.9,3.55));for(let c=0;c<=6;c++)n.add(J(.18,7.6,.3,k(e),-6.3+c*2.1,.9,3.6));n.add(J(12.8,.25,.4,k(e),0,4.6,3.6)),n.add(J(3.4,3.4,.25,k("#ffe9c7",{emissive:"#ffd58a",emissiveIntensity:.5}),0,.5,3.7)),n.add(J(7,.35,3,k(t),0,4.1,4.9));for(const c of[-3.2,3.2])n.add(J(.2,3.6,.2,k(e),c,.5,6.2));Yn(n,"CONTACT ME",{y:10.6,z:3.7,w:13,h:2.2,bg:t,fg:"#ffffff"});const s=new kt;s.position.set(0,13.6,-1.5),s.add(J(7,4.4,.6,k("#ffffff",{emissive:"#ffffff",emissiveIntensity:.15})));const r=new ji;r.moveTo(-3.5,4.4),r.lineTo(0,1.6),r.lineTo(3.5,4.4),r.closePath();const o=new ht(new tc(r),new ye({color:t,side:Se}));o.position.z=.32,s.add(o),s.add(J(.3,3,.3,k(e),-2.5,-3,0),J(.3,3,.3,k(e),2.5,-3,0)),s.traverse(c=>{c.isMesh&&(c.castShadow=!0)}),s.userData.billboard=!0,n.add(s);const a=Ie({text:"CONTACT ME",w:1024,h:256,bg:t,fg:"#ffffff"},9,2.25);a.position.set(7.6,7.2,-1.5),a.rotation.y=Math.PI/2,n.add(a);const l=new kt;return l.position.set(5.6,.5,6),l.add(ee(.6,.6,2.2,k("#c8102e"),14),ee(.68,.68,.3,k("#a50d26"),14,0,2.2,0)),n.add(l),n.add(J(2.4,.5,.8,k("#ab7750"),-5.4,.5,6.4)),{flag:s,mailFrom:new T(0,14.5,-1)}},"empty-plot"(n){n.add(J(18,.3,16,k("#cdb995"),0,.02,0));const t=[[-8,-7],[8,-7],[8,7],[-8,7]];t.forEach(([d,u])=>{n.add(J(.25,1.4,.25,k("#a77d4f"),d,.3,u)),n.add(J(.7,.45,.04,k("#ff7a2f"),d+.35,1.3,u))});for(let d=0;d<4;d++){const[u,f]=t[d],[p,v]=t[(d+1)%4],g=J(Math.hypot(p-u,v-f),.05,.05,k("#ffffff"),(u+p)/2,1.4,(f+v)/2);g.rotation.y=-Math.atan2(v-f,p-u),g.castShadow=!1,n.add(g)}const e=new ht(new oe(12,14,9),new Jt({color:"#ffffff",transparent:!0,opacity:.14,depthWrite:!1}));e.position.y=7.3;const i=new Dd(new kd(e.geometry),new c_({color:"#d9734e",dashSize:.7,gapSize:.45}));i.computeLineDistances(),i.position.y=7.3,n.add(e,i);const s=Ie({text:"YOUR OFFICE HERE",w:1024,h:200,size:84,bg:"#ffffff",fg:"#243447",border:"#ff7a2f"},11,2.15);s.position.set(0,15.8,0),s.userData.billboard=!0,n.add(s);const r=document.createElement("canvas");r.width=256,r.height=32;const o=r.getContext("2d");for(let d=0;d<16;d++)o.fillStyle=d%2?"#ffffff":"#d7263d",o.fillRect(d*16,0,16,32);const a=new Dn(r);a.colorSpace=Me;const l=new ht(new oe(7,.5,.25),new ye({map:a}));l.position.set(0,1.3,9.5),l.castShadow=!0,n.add(l,J(.3,1.5,.3,k("#3a4250"),-3.5,.2,9.5),J(.3,1.5,.3,k("#3a4250"),3.5,.2,9.5));const c=new kt;c.position.set(8.5,.2,10),c.rotation.y=.2;const h=Ie({text:"The road's paved to mid-December 2026.",sub:"The next stretch leads to your office →",w:1280,h:320,bg:"#243447",fg:"#ffffff"},12,3);return h.position.y=4.6,c.add(h,J(.3,3.2,.3,k("#3a4250"),-4.8,0,-.1),J(.3,3.2,.3,k("#3a4250"),4.8,0,-.1)),n.add(c),{hereSign:s,ghost:e,edges:i,roadSign:h}}};function tx(){const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d");return t.fillStyle="#fbf6ea",t.beginPath(),t.arc(64,64,62,0,Math.PI*2),t.fill(),t.strokeStyle="#3a2e25",t.lineWidth=5,t.stroke(),t.lineCap="round",t.beginPath(),t.moveTo(64,64),t.lineTo(64,26),t.stroke(),t.beginPath(),t.moveTo(64,64),t.lineTo(92,74),t.stroke(),n}function ex(){const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d");return["#ffffff","#1f2a37","#4f81bd","#d7263d","#f2c14e"].forEach((i,s)=>{t.fillStyle=i,t.beginPath(),t.arc(64,64,62-s*12,0,Math.PI*2),t.fill()}),n}const ro=1.3,nx=new Set(["post-office","hobby-park"]),ix=n=>n.style!=="empty-plot"&&(n.career||nx.has(n.id));let Ta=null;function sx(){if(!Ta){const t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d"),i=e.createRadialGradient(128,128,30,128,128,128);i.addColorStop(0,"rgba(20,16,12,0.55)"),i.addColorStop(1,"rgba(20,16,12,0)"),e.fillStyle=i,e.fillRect(0,0,256,256),Ta=new Dn(t)}const n=new ht(new pn(30,30),new Jt({map:Ta,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));return n.renderOrder=1,n.rotation.x=-Math.PI/2,n.raycast=()=>{},n}const rx=new ye({color:"#2f3b4a",roughness:.7}),ox=new ye({color:"#d9734e",roughness:.6}),ax=new Jt({color:"#1f2329",side:je,polygonOffset:!0,polygonOffsetFactor:2,polygonOffsetUnits:2}),Aa=.12,Ca=new ni,Di=new T,Bh=new T;function lx(n){const t=[];n.traverse(e=>{if(!e.isMesh||e.isInstancedMesh||!e.geometry||e.userData.outline||e.material?.transparent||e.material?.map)return;const i=e.geometry.type;if(i==="PlaneGeometry"||i==="RingGeometry"||i==="CircleGeometry")return;e.geometry.computeBoundingBox(),Ca.copy(e.geometry.boundingBox),Ca.getSize(Di),Ca.getCenter(Bh);const s=new T;if(e.getWorldScale(s),Math.min(Di.x*s.x,Di.y*s.y,Di.z*s.z)<.6)return;const r=new T(1+2*Aa/(Di.x*s.x),1+2*Aa/(Di.y*s.y),1+2*Aa/(Di.z*s.z)),o=new ht(e.geometry,ax);o.scale.copy(r),o.position.copy(Bh).multiply(new T(1-r.x,1-r.y,1-r.z)),o.userData.outline=!0,o.raycast=()=>{},t.push([e,o])});for(const[e,i]of t)e.add(i)}function cx(n){const t=[],e=[];for(const a of Ao){const{stop:l}=a,c=new kt;c.name=l.id,c.position.copy(a.pos),c.rotation.y=Math.atan2(a.face.x,a.face.z),n.add(c),c.updateMatrixWorld(!0);const h=new kt,d=ix(l),u=l.style==="empty-plot"?0:$_,f=u+(d?ro:0);h.position.y=f,c.add(h);let p=null;if(d){p=new kt;const P=sx();P.position.y=u+.05;const I=new ht(new oe(18.5,ro-.24,18.5),rx);I.position.y=u+(ro-.24)/2;const M=new ht(new oe(18.9,.24,18.9),ox);M.position.y=u+ro-.12;for(const x of[I,M])x.castShadow=!0,x.receiveShadow=!0,x.userData.stopId=l.id;p.add(P,I,M),c.add(p)}const v=Q_[l.style],g=v?v(h,l,a)||{}:{};d&&innerWidth>860&&lx(h),h.traverse(P=>{P.isMesh&&(P.userData.stopId=l.id,P.castShadow===void 0&&(P.castShadow=!0))}),h.updateMatrixWorld(!0);const b=new ni().setFromObject(h).getSize(new T),y=l.style==="empty-plot"?11:Math.min(b.y,40),_=new Dd(new kd(new oe(Math.min(b.x,18),y,Math.min(b.z,18))),new Yl({color:"#ff8a3d",transparent:!0,opacity:.9}));_.position.y=f+y/2,_.visible=!1,c.add(_);const U=new ht(new oe(18,Math.max(6,y+f),18),new Jt({visible:!1}));U.position.y=Math.max(6,y+f)/2,U.userData.stopId=l.id,c.add(U),e.push(U),h.traverse(P=>{P.isMesh&&P.userData.certIndex!==void 0&&e.unshift(P)});const R={stop:l,place:a,root:c,inner:h,parts:g,height:y,scaffold:_,radius:l.style==="empty-plot"?4:9.5,anchor:new T(0,y+2.2,0),progress:1,hover:0,hoverTarget:0,baseY:f,groundY:u,base:p};t.push(R)}function i(a){for(const l of t){const c=Math.max(.005,Math.min(.7,ic-l.stop.appearYear-.005)),h=Ne((a-l.stop.appearYear)/c,0,1);l.progress=h;const d=h>0;l.inner.visible=d,l.base&&(l.base.visible=d,l.base.scale.set(1,Math.max(.001,Math.min(1,h*4)),1));const u=h>=1?1:Math.max(.001,Oh(h));if(l.inner.scale.set(1,u,1),l.scaffold.visible=h>0&&h<1,l.scaffold.material.opacity=.9*(1-h),l.parts.floors)for(const f of l.parts.floors){const p=Ne((a-f.userData.year)/.25,0,1);f.visible=p>0,f.scale.set(1,Math.max(.001,Oh(p)),1)}}}const s=[];for(const a of t)a.inner.traverse(l=>{l.userData.billboard&&s.push({o:l,root:a.root})});const r=new T;function o(a,l,c){if(c)for(const{o:u,root:f}of s)u.getWorldPosition(r),u.rotation.y=Math.atan2(c.position.x-r.x,c.position.z-r.z)-f.rotation.y;for(const u of t)u.hover+=(u.hoverTarget-u.hover)*Math.min(1,a*7),u.inner.position.y=u.baseY+u.hover*.45;const h=t.find(u=>u.parts.blink);h&&(h.parts.blink.visible=Math.sin(l*4)>0);const d=t.find(u=>u.parts.tip);d&&d.parts.tip.material.color.setHSL(.03,.9,.55+Math.sin(l*3)*.15)}return{city:t,pickables:e,setYear:i,update:o,byId:Object.fromEntries(t.map(a=>[a.stop.id,a]))}}function zh(n,t,e){const i=n.getContext("2d");To(i,{text:t,sub:e,w:n.width,h:n.height,bg:"#111827",fg:"#7cf0c5"})}const Hh=["#e07a5f","#3d7ea6","#f2c14e","#81b29a","#9b5de5","#f28482","#2a9d8f"],hx=(n="")=>String(n).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function Ra(n,t,e,{to:i,label:s,prefix:r="",suffix:o="",duration:a=3,cls:l="",final:c}){let h=a;const d=n.add(t,e,c?`<span class="big">${c}</span>${s}`:u(i),l);function u(f){return`<span class="big">${r}${A_(f)}${o}</span>${s}`}return{update(f){if(h>=a)return;h+=f;const p=Sl(Ne(h/a,0,1));d.set(h>=a&&c?`<span class="big">${c}</span>${s}`:u(i*p))},remove:()=>d.remove()}}function Vh(n,t){const e=new Kl(.28,.7,2,6);e.translate(0,.65,0);const i=new Sn(e,new ye({roughness:.8}),t),s=new Qt;for(let r=0;r<t;r++)i.setColorAt(r,s.set(Hh[r%Hh.length]));return i.count=0,i.castShadow=!0,n.add(i),i}const dx={gmng(n,t){const{inner:e,parts:i}=n,s=wl(3),r=Vh(e,260),o=Array.from({length:70},()=>({t:s(),lane:(s()-.5)*3,speed:.25+s()*.2})),a=Array.from({length:190},()=>({x:(s()-.5)*15,z:i.plaza.z-1.8+s()*3.6+(s()<.35?3:0)})),l=new be;let c=0;const h=Ra(t,e,new T(0,14.5,0),{to:2e5,label:"new users in one month",duration:3.2,final:"200,000+"});let d=null;return{update(u){c+=u,h.update(u),c>2.4&&!d&&(d=Ra(t,e,new T(-8,7,5),{to:1e6,label:"users",suffix:"+",duration:2.5,cls:"light",final:"1M+"})),d?.update(u);let f=0;for(const v of o){v.t+=u*v.speed,v.t>1&&(v.t-=1);const g=20-v.t*(20-i.door.z);l.position.set(v.lane+Math.sin((v.t+v.lane)*20)*.1,Math.abs(Math.sin(v.t*60))*.12,g),l.rotation.y=Math.PI,l.scale.setScalar(1),l.updateMatrix(),r.setMatrixAt(f++,l.matrix)}const p=Math.floor(Ne((c-1.5)/3.5,0,1)*a.length);for(let v=0;v<p;v++){const g=a[v];l.position.set(g.x,Math.max(0,Math.sin(c*6+v)*.08),g.z),l.rotation.y=v,l.updateMatrix(),r.setMatrixAt(f++,l.matrix)}r.count=f,r.instanceMatrix.needsUpdate=!0},dispose(){h.remove(),d?.remove(),e.remove(r),r.geometry.dispose()}}},"xy-ads"(n,t){const{inner:e,parts:i}=n,s=wl(9),r=new Sn(new qe(.32,6,4),new Jt({color:"#7cf0c5"}),60);e.add(r);const o=Array.from({length:60},(p,v)=>({p:v%i.partners.length,t:s(),speed:.5+s()*.6,out:s()<.5})),a=new be;let l=0,c=0;const h=Ra(t,e,new T(0,37,-1),{to:1e8,label:"monthly impressions it was built to handle",suffix:"+",duration:.001,final:"100M+"}),d=new T,u=new T,f=new T;return{update(p){l+=p,h.update(p),Math.floor(l*12)!==c&&(c=Math.floor(l*12),zh(i.canvas,"100M+","built to handle / month"),i.texture.needsUpdate=!0),o.forEach((v,g)=>{v.t+=p*v.speed,v.t>1&&(v.t=0,v.out=!v.out);const m=v.out?i.hub:i.partners[v.p],b=v.out?i.partners[v.p]:i.hub;d.copy(m),u.copy(b),f.copy(d).add(u).multiplyScalar(.5),f.y+=6;const y=v.t,_=1-y;a.position.set(_*_*d.x+2*_*y*f.x+y*y*u.x,_*_*d.y+2*_*y*f.y+y*y*u.y,_*_*d.z+2*_*y*f.z+y*y*u.z),a.updateMatrix(),r.setMatrixAt(g,a.matrix)}),r.instanceMatrix.needsUpdate=!0},dispose(){h.remove(),e.remove(r),zh(i.canvas,"XY ADS","Ad exchange · built from scratch"),i.texture.needsUpdate=!0}}},"mr-neo"(n,t){const{inner:e,parts:i}=n;let s=0;const r=t.add(e,new T(3,15.5,-2),'<span class="big">&lt; 2 months</span>to an AI-native company');let o=null;return{update(a){s+=a;const l=Math.floor(Ne((s-.4)/2.6,0,1)*i.panels.length);i.panels.forEach((c,h)=>{c.material.emissiveIntensity=h<l?.9:0}),l===i.panels.length&&!o&&(o=t.add(e,new T(-5,12,2.2),"✨ Strategy · pricing · AI-first redesign","light")),i.ring.rotation.z+=a*1.5},dispose(){r.remove(),o?.remove(),i.panels.forEach(a=>{a.material.emissiveIntensity=0})}}},"vision-lab"(n,t){const{inner:e,parts:i}=n,s=new ht(new Jn(2.2,7.4,20,1,!0),new Jt({color:"#6fd3ff",transparent:!0,opacity:.18,side:Se,depthWrite:!1}));s.position.set(0,5.3,7.4),s.rotation.x=.12,e.add(s);let r=0,o=null,a=null;return{update(l){r+=l,s.material.opacity=.12+Math.abs(Math.sin(r*3))*.18,s.rotation.z=Math.sin(r*1.6)*.18,r>1.4&&!o&&(o=t.add(e,new T(-1.5,3.4,8.2),"🍎 Apple · recognised","light")),r>2.4&&!a&&(a=t.add(e,new T(2.2,2.6,8.2),'<span class="big">100</span>foods · 10,000 training images'))},dispose(){e.remove(s),o?.remove(),a?.remove()}}},"learning-tower"(n,t){const{inner:e,parts:i,stop:s}=n,r=s.certificates||[];let o=0,a=null;const l=[];i.floors.forEach((d,u)=>{const f=r[u]||{},p=f.date?new Date(f.date).getFullYear():"",v=innerWidth<=600,g=v?new T(0,d.position.y+2,3.8):new T(4.6,d.position.y+2.4,3.6);setTimeout(()=>{const m=hx(f.shortTitle||f.title||""),b=v?`<b>${u+1}</b> · ${m}`:`<b>Floor ${u+1}</b> · ${m} · ${p}`;c||(l[u]=t.add(e,g,b,"light floor-tag"))},250+u*320)});let c=!1;const h=()=>{i.floors.forEach((d,u)=>{const f=o>.3+u*.32,p=a===null?f:a===u,v=d.userData.band.material;v.emissiveIntensity=p?a===u?1.2:.7:.05,v.color.set(a===u?"#ffd56b":p?"#f2c14e":"#40607c"),l[u]?.el?.classList.toggle("picked",a===u)})};return{update(d){o+=d,h()},highlight(d){a=d,h()},dispose(){c=!0,l.forEach(d=>d?.remove()),i.floors.forEach(d=>{d.userData.band.material.emissiveIntensity=.08,d.userData.band.material.color.set("#40607c")})}}},"lara-hotel"(n,t){const{inner:e,parts:i}=n,s=[["⚠️ Nut allergy → restaurant alerted","alert"],["✉️ Reply drafted in Portuguese",""],["🛏️ Suggested: room 315, sea view","light"],["☀️ Morning briefing ready",""],["🧹 Room 204: cleaned → ready","light"]];let r=0,o=0,a=[];const l=Vh(e,12),c=new be;return{update(h){if(r+=h,Math.floor(r/1.5)>=o){const[u,f]=s[o%s.length],p=i.windowsAt[o%i.windowsAt.length];a.push(t.add(e,p,u,f)),a.length>2&&a.shift().remove(),o++}for(let u=0;u<12;u++){const f=(r*.18+u/12)%1;c.position.set(-3+u%4*2,0,16-f*10),c.rotation.y=Math.PI,c.updateMatrix(),l.setMatrixAt(u,c.matrix)}l.count=12,l.instanceMatrix.needsUpdate=!0},dispose(){a.forEach(h=>h.remove()),e.remove(l)}}},"post-office"(n,t){const{inner:e,parts:i}=n,s=new ht(new oe(1.2,.1,.8),new ye({color:"#ffffff"}));e.add(s);let r=0;const o=t.add(e,new T(0,18.5,-1.5),"✉️ Email · LinkedIn · CV, one click each","light");return{update(a){r+=a;const l=r*.5%1;s.position.set(i.mailFrom.x-l*2,i.mailFrom.y+l*10,i.mailFrom.z+l*6),s.rotation.set(l*4,l*6,0),s.visible=l<.95},dispose(){e.remove(s),o.remove()}}},"your-plot"(n,t){const{inner:e}=n,i=t.add(e,new T(0,13.4,0),"🏗️ Ready to break ground mid-Dec 2026","");return{update(){},dispose(){i.remove()}}},"hobby-park"(n,t){const{inner:e,parts:i}=n;let s=0;const r=t.add(e,new T(-4.5,5,-7),"🎯 50m rifle · national level","light");return{update(o){s+=o,i.targets.forEach((a,l)=>{a.scale.setScalar(1+Math.max(0,Math.sin(s*5-l))*.15)})},dispose(){r.remove(),i.targets.forEach(o=>o.scale.setScalar(1))}}}};function ux(n,t){let e=null;const i=[],s=n.byId.sovena;if(s)for(let r=0;r<6;r++){const o=new ht(new qe(.45,6,5),new Jt({color:"#ffffff",transparent:!0,opacity:.5,depthWrite:!1}));s.inner.add(o),i.push({s:o,t:r/6})}return{start(r){this.stop();const o=n.byId[r],a=dx[r];o&&a&&(e={id:r,fx:a(o,t)})},stop(){e?.fx.dispose(),e=null},highlight(r){e?.fx.highlight?.(r)},update(r,o){e?.fx.update(r,o);const a=n.byId["lara-hotel"];if(a){const{jib:c,trolley:h,cable:d,hook:u}=a.parts;c.rotation.y=Math.sin(o*.25)*.9+.4,h.position.x=9+Math.sin(o*.4)*4;const f=8+Math.sin(o*.7)*6;d.scale.y=f,d.position.y=-f/2,u.position.y=-f}const l=n.byId["vision-lab"];l&&(l.parts.eye.rotation.y=Math.sin(o*.8)*.25);for(const c of i){c.t=(c.t+r*.25)%1;const h=s.parts.steamFrom;c.s.position.set(h.x+Math.sin(c.t*8+c.s.id)*.5,h.y+c.t*5,h.z),c.s.scale.setScalar(.6+c.t*1.4),c.s.material.opacity=.55*(1-c.t)}},get activeId(){return e?.id}}}function fx(n,t,e){const i=new kt;for(const s of[1,-1]){const r=Ie({text:n,sub:t,w:2048,h:320,bg:"#ffffff",fg:e.stripe,border:e.body},26,4.1,{doubleSide:!1});r.rotation.y=s>0?Math.PI/2:-Math.PI/2,r.position.x=s*.03,i.add(r)}return i}function px(n,t){const e=new kt,i=k(n.body,{flatShading:!0}),s=k(n.stripe),r=new ht(new Oe(1.5,1.1,13,12),i);r.rotation.x=Math.PI/2;const o=new ht(new qe(1.5,12,8,0,Math.PI*2,0,Math.PI/2),i);o.rotation.x=Math.PI/2,o.position.z=6.5;const a=new ht(new Jn(1.1,3.4,12),i);a.rotation.x=-Math.PI/2,a.position.z=-8.2;const l=new ht(new Oe(1.53,1.33,2.2,12),s);l.rotation.x=Math.PI/2,l.position.z=-2;const c=new ht(new oe(2.2,.7,1.4),k("#24323f",{roughness:.2}));c.position.set(0,.95,5.4);const h=new ht(new oe(22,.45,3.4),i);h.position.set(0,.5,1);const d=[-11,11].map(P=>{const I=new ht(new oe(.6,.5,3.4),s);return I.position.set(P,.5,1),I}),u=new ht(new oe(8,.3,2),i);u.position.set(0,.6,-8.5);const f=new ht(new oe(.35,3.6,2.6),s);f.position.set(0,2.3,-8.4),e.add(r,o,a,l,c,h,...d,u,f);const p=[];for(const P of[-5,5]){const I=new ht(new Oe(.75,.6,3,10),k("#5b6573"));I.rotation.x=Math.PI/2,I.position.set(P,.2,2.6);const M=new kt;M.position.set(P,.2,4.2);for(let x=0;x<3;x++){const C=new ht(new oe(.3,3.6,.12),k("#2b3240"));C.rotation.z=x*Math.PI*2/3,M.add(C)}e.add(I,M),p.push(M)}const v=new ht(new Oe(.05,.05,3,4),k("#333"));v.position.set(0,-2.6,.5);const g=new ht(new oe(2.6,2,2.6),k("#b98a52"));g.position.set(0,-5,.5);const m=Ie({text:"URGENT · 50 KG+",w:512,h:128,bg:"#d40511",fg:"#fff"},2.5,.62);m.position.set(0,-5,1.82);const b=m.clone();b.position.z=-.82,b.rotation.y=Math.PI,e.add(v,g,m,b);const[y,_]=t.split("·").map(P=>P.trim()),U=new ht(new Oe(.05,.05,9,4),k("#333"));U.rotation.x=Math.PI/2,U.position.set(0,0,-14.5);const R=fx(y,_,n);return R.position.set(0,0,-32),e.add(U,R),e.traverse(P=>{P.isMesh&&(P.castShadow=!0)}),{g:e,props:p,banner:R}}function mx(n,t){const e=new kt;n.add(e);const i=t.find(h=>h.style==="cargo-plane"),s=[];let r=null,o=null;if(i){const h=px(i.colors,i.banner);r=h,h.g.traverse(f=>{f.isMesh&&(f.userData.vehicleId=i.id)});const d=new ht(new oe(26,10,50),new Jt({visible:!1}));d.position.set(0,-1,-12),d.userData.vehicleId=i.id,h.g.add(d),s.push(d),e.add(h.g);const u=ue.find(f=>f.place==="lisbon");o={cx:u.x,cz:u.z,rx:70,rz:52,alt:u.top+52,u:.15,speed:.022}}const a=new T,l=new T,c=(h,d)=>d.set(o.cx+Math.cos(h*Math.PI*2)*o.rx,o.alt+Math.sin(h*Math.PI*4)*2.5,o.cz+Math.sin(h*Math.PI*2)*o.rz);return{plane:r?.g||null,pickables:s,vehicleData:i,update(h,d=0){if(r){o.u=(o.u+h*o.speed)%1,c(o.u,a),c(o.u+.01,l),r.g.position.copy(a),r.g.lookAt(l),r.g.rotateZ(-.22);for(const u of r.props)u.rotation.z+=h*30;r.banner.rotation.y=Math.sin(d*2.2)*.05}}}}const Gh={type:"change"},sc={type:"start"},jd={type:"end"},oo=new Io,Wh=new pi,gx=Math.cos(70*dr.DEG2RAD),Le=new T,Ke=2*Math.PI,fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Pa=1e-6;class vx extends x_{constructor(t,e=null){super(t,e),this.state=fe.NONE,this.enabled=!0,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fn.ROTATE,MIDDLE:fn.DOLLY,RIGHT:fn.PAN},this.touches={ONE:Un.ROTATE,TWO:Un.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new ti,this._lastTargetPosition=new T,this._quat=new ti().setFromUnitVectors(t.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Nh,this._sphericalDelta=new Nh,this._scale=1,this._panOffset=new T,this._rotateStart=new dt,this._rotateEnd=new dt,this._rotateDelta=new dt,this._panStart=new dt,this._panEnd=new dt,this._panDelta=new dt,this._dollyStart=new dt,this._dollyEnd=new dt,this._dollyDelta=new dt,this._dollyDirection=new T,this._mouse=new dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=xx.bind(this),this._onPointerDown=_x.bind(this),this._onPointerUp=yx.bind(this),this._onContextMenu=Ax.bind(this),this._onMouseWheel=Sx.bind(this),this._onKeyDown=wx.bind(this),this._onTouchStart=Ex.bind(this),this._onTouchMove=Tx.bind(this),this._onMouseDown=bx.bind(this),this._onMouseMove=Mx.bind(this),this._interceptControlDown=Cx.bind(this),this._interceptControlUp=Rx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Gh),this.update(),this.state=fe.NONE}update(t=null){const e=this.object.position;Le.copy(e).sub(this.target),Le.applyQuaternion(this._quat),this._spherical.setFromVector3(Le),this.autoRotate&&this.state===fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ke:i>Math.PI&&(i-=Ke),s<-Math.PI?s+=Ke:s>Math.PI&&(s-=Ke),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Le.setFromSpherical(this._spherical),Le.applyQuaternion(this._quatInverse),e.copy(this.target).add(Le),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Le.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new T(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new T(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Le.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(oo.origin.copy(this.object.position),oo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(oo.direction))<gx?this.object.lookAt(this.target):(Wh.setFromNormalAndCoplanarPoint(this.object.up,this.target),oo.intersectPlane(Wh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Pa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Pa||this._lastTargetPosition.distanceToSquared(this.target)>Pa?(this.dispatchEvent(Gh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ke/60*this.autoRotateSpeed*t:Ke/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Le.setFromMatrixColumn(e,0),Le.multiplyScalar(-t),this._panOffset.add(Le)}_panUp(t,e){this.screenSpacePanning===!0?Le.setFromMatrixColumn(e,1):(Le.setFromMatrixColumn(e,0),Le.crossVectors(this.object.up,Le)),Le.multiplyScalar(t),this._panOffset.add(Le)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Le.copy(s).sub(this.target);let r=Le.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new dt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function _x(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function xx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function yx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(jd),this.state=fe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function bx(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case fn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=fe.DOLLY;break;case fn.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=fe.ROTATE}break;case fn.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=fe.PAN}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(sc)}function Mx(n){switch(this.state){case fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Sx(n){this.enabled===!1||this.enableZoom===!1||this.state!==fe.NONE||(n.preventDefault(),this.dispatchEvent(sc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(jd))}function wx(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function Ex(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Un.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=fe.TOUCH_ROTATE;break;case Un.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=fe.TOUCH_PAN;break;default:this.state=fe.NONE}break;case 2:switch(this.touches.TWO){case Un.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=fe.TOUCH_DOLLY_PAN;break;case Un.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=fe.TOUCH_DOLLY_ROTATE;break;default:this.state=fe.NONE}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(sc)}function Tx(n){switch(this._trackPointer(n),this.state){case fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=fe.NONE}}function Ax(n){this.enabled!==!1&&n.preventDefault()}function Cx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Rx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Px extends vx{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:fn.PAN,MIDDLE:fn.DOLLY,RIGHT:fn.ROTATE},this.touches={ONE:Un.PAN,TWO:Un.DOLLY_ROTATE}}}function Lx(n){const t=new hn(32,1,4,1500),e=new Px(t,n);e.enableDamping=!0,e.dampingFactor=.08,e.maxPolarAngle=1.32,e.minPolarAngle=.25,e.minDistance=22,e.maxDistance=900,e.screenSpacePanning=!1,e.zoomToCursor=!1,e.zoomSpeed=.9,e.rotateSpeed=.6,e.panSpeed=1.1,e.mouseButtons={LEFT:fn.PAN,MIDDLE:fn.DOLLY,RIGHT:fn.ROTATE},e.touches={ONE:Un.PAN,TWO:Un.DOLLY_ROTATE};let i=null,s="overview",r=!1,o=null;const a={x:0,y:0,tx:0,ty:0};function l(){const x=t.aspect,C=dr.degToRad(t.fov),z=2*Math.atan(Math.tan(C/2)*x);if(x<.9){const N=new T(bn.centerX+14,8,10),G=new T(-.78,.58,.24).normalize(),H=Math.max(bn.d*.98/2/Math.tan(z/2),bn.w*.58/2/Math.tan(C/2));return{pos:N.clone().addScaledVector(G,H),target:N}}const w=new T(bn.centerX+2,10,0),D=new T(.12,.6,.79).normalize(),F=Math.max(bn.w*.98/2/Math.tan(z/2),bn.d*.78/2/Math.tan(C/2));return{pos:w.clone().addScaledVector(D,F),target:w}}function c(){const x=e.enableDamping,C=e.enabled;e.enabled=!0,e.enableDamping=!1,e.update(),e.enableDamping=x,e.enabled=C}function h(x,C,z=1.15,w){i?.cancel(),c();const D=t.position.clone(),F=e.target.clone();yi()&&(z=.25),e.enabled=!1,i=or({duration:z,ease:Ss,onUpdate:N=>{t.position.lerpVectors(D,x,N);const G=Math.sin(N*Math.PI)*Math.min(60,D.distanceTo(x)*.18);t.position.y+=G,e.target.lerpVectors(F,C,N),t.lookAt(e.target)},onDone:()=>{i=null,s!=="drive"&&s!=="follow"&&!r&&(e.enabled=!0,e.update()),w?.()}})}function d(){s==="drive"||r||(i&&(i.cancel(),i=null),s==="follow"&&(s="focus",o=null),r||(e.enabled=!0))}function u(x){r=x,x?e.enabled=!1:!i&&s!=="follow"&&s!=="drive"&&(e.enabled=!0)}function f(x){if(s==="drive")return;d();const C=t.position.clone().sub(e.target),z=C.length(),w=Ne(z*x,e.minDistance,e.maxDistance),D=C.normalize();i=or({duration:yi()?.01:.35,ease:Ss,onUpdate:F=>{t.position.copy(e.target).addScaledVector(D,Sa(z,w,F)),t.lookAt(e.target)},onDone:()=>{i=null,e.update()}})}function p(x,C){if(s==="drive")return;d();const z=t.position.clone().sub(e.target).normalize(),w=Ne(x/Math.max(.2,C),e.minDistance,e.maxDistance);t.position.copy(e.target).addScaledVector(z,w),t.lookAt(e.target)}const v=()=>t.position.distanceTo(e.target);function g(x){if(s==="drive")return;d();const C=t.position.clone().sub(e.target),z=new T(0,1,0);i=or({duration:yi()?.01:.45,ease:Ss,onUpdate:w=>{t.position.copy(e.target).add(C.clone().applyAxisAngle(z,x*w)),t.lookAt(e.target)},onDone:()=>{i=null,e.update()}})}function m(x=1.2){s="overview",o=null;const{pos:C,target:z}=l();h(C,z,x)}function b(x){s="focus",o=null;const{place:C,height:z}=x,w=x.stop.style==="learning-tower",D=C.pos.clone().setY(C.pos.y+Math.min(z,30)*(w?.5:.42)),F=(w?66:Ne(z*2.6,58,100))*(t.aspect<.9?w?1.9:1.5:1),N=C.face.clone();let G;if(Math.abs(N.x)>.5)G=D.clone().add(N.clone().multiplyScalar(F*.5)).add(new T(0,0,F*.6)).add(new T(0,F*(w?.62:.92),0));else{const H=new T(-N.z,0,N.x).multiplyScalar(.45);G=D.clone().add(N.multiplyScalar(F*.78)).add(H.multiplyScalar(F)).add(new T(0,F*(w?.36:.55),0))}h(G,D)}let y="chase";function _(x,C,z,w=1.15){s="focus",o=null,h(x,C,w,z)}function U(x,C="chase"){i?.cancel(),i=null,c(),s="follow",o=x,y=C,e.enabled=!1}function R(x){s=x,x==="drive"&&(e.enabled=!1)}function P(x,C){a.tx=x,a.ty=C}function I(x,C){t.aspect=x/C,t.updateProjectionMatrix()}function M(x,C){if(s==="follow"&&o){const w=o.getWorldPosition(new T),D=o.getWorldQuaternion(new ti),F=new T(0,0,1).applyQuaternion(D).setY(0).normalize();let N;if(y==="side"){const G=new T(-F.z,0,F.x);N=w.clone().addScaledVector(G,92).addScaledVector(F,-20).add(new T(0,34,0)),w.addScaledVector(F,-20).add(new T(0,-4,0))}else if(y==="drone"){const G=t.aspect<.9?new T(-46,58,22):new T(14,50,62);N=w.clone().add(G)}else N=w.clone().addScaledVector(F,-22).add(new T(0,14,0));t.position.lerp(N,Math.min(1,x*2.5)),e.target.lerp(w,Math.min(1,x*4)),t.lookAt(e.target)}else!i&&s!=="drive"&&(e.update(),e.target.x=Ne(e.target.x,bn.minX-30,bn.maxX+30),e.target.z=Ne(e.target.z,-220/2,bn.d/2),e.target.y=Ne(e.target.y,-2,70));const z=Math.min(1,x*6);a.x=Sa(a.x,a.tx,z),a.y=Sa(a.y,a.ty,z),Math.abs(a.x)>.5||Math.abs(a.y)>.5?t.setViewOffset(C.w,C.h,a.x,a.y,C.w,C.h):t.view?.enabled&&t.clearViewOffset()}return{camera:t,controls:e,overview:m,overviewPose:l,focusBuilding:b,follow:U,flyTo:h,setMode:R,setPanelOffset:P,resize:I,update:M,interrupt:d,zoomBy:f,rotateBy:g,zoomLive:p,distance:v,focusPoint:_,setLocked:u,get locked(){return r},get mode(){return s},get flying(){return!!i}}}const Pe=new T;function Ix(n,t,e,{onHover:i=()=>{}}={}){const s=b=>b.replace(/[^\p{L}\p{N}\s|·&.,'’<>/$+-]/gu,"").trim(),r=t.map(b=>{const y=b.stop,_=document.createElement("button");_.className="label"+(y.underConstruction?" now":"")+(y.style==="empty-plot"?" always":"");const U=y.style==="empty-plot"?"Your office →":Dx(y.name),R=y.hook||"";_.append(Object.assign(document.createElement("span"),{className:"n",textContent:String(y.order)}),Object.assign(document.createElement("span"),{className:"t",textContent:U})),R&&_.append(Object.assign(document.createElement("span"),{className:"k",textContent:R}));const P=y.ai==="built-with-ai"?"Built with AI":y.ai==="ai-subject"?"AI subject":"";if(P){_.classList.add("has-ai");const C=Object.assign(document.createElement("span"),{className:"ai-chip "+(y.ai==="built-with-ai"?"built":"subject")});C.append(Object.assign(document.createElement("span"),{className:"ai-star",textContent:"✦"}),Object.assign(document.createElement("span"),{className:"ai-word",textContent:P})),C.setAttribute("aria-hidden","true"),_.append(C)}_.append(Object.assign(document.createElement("span"),{className:"chev",textContent:"›",ariaHidden:"true"}));const I=()=>`${s(y.name)}${R?`: ${s(R)}`:""}${P?`. ${P}`:""}. ${y.yearLabel}${_.classList.contains("unvisited")?". Not visited yet":""}`;_.setAttribute("aria-label",I()),_.addEventListener("click",C=>{C.stopPropagation(),e(y.id)});const M=()=>{b.hoverTarget=1,i(y.id)},x=()=>{b.hoverTarget=0,i(null)};return _.addEventListener("mouseenter",M),_.addEventListener("mouseleave",x),_.addEventListener("focus",M),_.addEventListener("blur",x),n.appendChild(_),{b,el:_,label:I}});let o=null,a=null,l=!1,c=null,h=!1,d=[];const u=new Gd;let f=[],p=0;const v=new T,g=[],m=(b,y)=>d.some(_=>b>_.left&&b<_.right&&y>_.top&&y<_.bottom);return{setOccluders(b){f=b},invalidate(){for(const b of r)b.dirty=!0;for(const b of g)b.w=0,b.h=0},addExtra(b,y,_,U=null){b.querySelector(".chev")||b.append(Object.assign(document.createElement("span"),{className:"chev",textContent:"›",ariaHidden:"true"})),n.appendChild(b),g.push({el:b,anchorFn:y,hiddenFn:_,island:U})},setView({hidden:b=!1,island:y=null,avoidRects:_=[]}={}){l=b,c=y,d=_},setAiOnly(b){h=b},setVisited(b){for(const y of r){const U=(!(y.b.stop.style==="empty-plot")||y.el.dataset.pitch==="1")&&!b.has(y.b.stop.id);y.el.classList.contains("unvisited")!==U&&(y.el.classList.toggle("unvisited",U),y.el.setAttribute("aria-label",y.label()))}},setFocused(b){o=b,a=r.find(y=>y.b.stop.id===b)?.b.place.island||null},setHot(b){for(const y of r){const _=y.b.stop.id===b;y.el.classList.contains("hot")!==_&&(y.el.classList.toggle("hot",_),y.dirty=!0)}},update(b,y){const _=[],U=f.length&&p++%8===0;U&&b.getWorldPosition(v);const R=y.w<=600;for(const M of r){const{b:x,el:C}=M;if(Pe.copy(x.anchor),Pe.y=x.height*x.inner.scale.y+2.2+x.hover*.8+x.baseY,x.root.localToWorld(Pe),U){const B=x.root.position.clone().setY(x.root.position.y+Math.max(2,x.height*.5)).clone().sub(v),W=B.length();u.set(v,B.normalize()),u.far=W-4,M.occluded=u.intersectObjects(f,!1).length>0}const z=b.position.distanceTo(Pe);Pe.project(b);const w=Pe.z>1,D=x.progress>.6,F=(Pe.x*.5+.5)*y.w,N=(-Pe.y*.5+.5)*y.h,G=o===x.stop.id,H=!!a&&x.place.island!==a||c!=null&&x.place.island.index!==c,q=l||h&&!C.classList.contains("has-ai")||w||!D||G||H||M.occluded||m(F,N)||F<-80||F>y.w+80||N<-40||N>y.h+40;if(C.classList.toggle("gone",q),C.classList.toggle("dim",!!o&&!G),C.tabIndex=D&&!q?0:-1,!q){const $=R?1:Math.max(.86,Math.min(1.08,260/z+.55));(!M.w||M.dirty)&&(M.w=C.offsetWidth,M.h=C.offsetHeight,M.dirty=!1),_.push({it:M,x:F,y:N,s:$,dist:z})}}for(const M of g){M.anchorFn(Pe);const x=b.position.distanceTo(Pe);Pe.project(b);const C=(Pe.x*.5+.5)*y.w,z=(-Pe.y*.5+.5)*y.h,w=l||h&&!M.el.classList.contains("buildlog")||Pe.z>1||M.hiddenFn()||!!o||m(C,z)||c!=null&&M.island!=null&&M.island!==c;M.el.classList.toggle("gone",w),M.el.classList.toggle("dim",!!o),!w&&(M.w||(M.w=M.el.offsetWidth,M.h=M.el.offsetHeight),M.w&&_.push({it:M,x:C,y:z,s:1,dist:x+1e6}))}_.sort((M,x)=>M.dist-x.dist);const P=[],I=3;for(const M of _){const x=M.it.w*M.s,C=M.it.h*M.s,z=q=>Math.min(y.w-x/2-6,Math.max(x/2+6,q));let w=z(M.x);const D=q=>P.find($=>w-x/2<$.r+I&&w+x/2>$.l-I&&q<$.b+I&&q+C>$.t-I),F=q=>d.find($=>w-x/2<$.right&&w+x/2>$.left&&q<$.bottom&&q+C>$.top),N=q=>{let $=q<0?M.y-C:M.y+8;for(let B=0;B<14;B++){const W=D($);if(!W)break;$=q<0?W.t-C-I-1:W.b+I+1}return D($)||F($)?null:$};let G=N(-1);if(M.it.anchorFn&&(G==null||M.y-(G+C)>30)){M.it.el.classList.add("gone");continue}if(G==null&&(G=N(1)),G==null){const q=F(M.y-C);if(q){const $=q.right+x/2+6,B=q.left-x/2-6,W=Math.abs($-M.x)<Math.abs(B-M.x)?$:B;Math.abs(W-M.x)<x&&(w=z(W),G=N(-1)??N(1))}}if(G==null){M.it.el.classList.add("gone"),M.it.el.tabIndex=-1;continue}P.push({l:w-x/2,r:w+x/2,t:G,b:G+C});const H=G+C;M.it.el.style.transform=`translate(${w.toFixed(1)}px, ${H.toFixed(1)}px) translate(-50%, -100%) scale(${M.s.toFixed(3)})`,M.it.el.style.zIndex=String(1e3-Math.round(M.dist)),M.it.el.classList.toggle("nudged",H<M.y-2||G>M.y)}}}}function Dx(n){return n.replace("Manipal Institute of Technology","Manipal").replace("The Lisbon MBA · Católica | Nova","Lisbon MBA").replace(" 🚧","").replace("The Library","Library").replace("Contact Me","✉ Contact me")}function Ux(n){const t=new Set;return{add(e,i,s,r=""){const o=document.createElement("div");o.className="badge "+r,o.innerHTML=s,n.appendChild(o);const a={el:o,object3d:e,localPos:i.clone(),dead:!1};return t.add(a),{el:o,set(l){o.innerHTML=l},remove(){a.dead=!0,t.delete(a),o.style.transition="opacity 0.25s",o.style.opacity="0",setTimeout(()=>o.remove(),260)}}},clear(){for(const e of[...t])e.el.remove(),t.delete(e)},update(e,i){const s=[];for(const r of t){if(Pe.copy(r.localPos),r.object3d.localToWorld(Pe),Pe.project(e),Pe.z>1){r.el.style.opacity="0";continue}let o=(Pe.x*.5+.5)*i.w;const a=Math.max(-Pe.y*.5*i.h+.5*i.h,150);if(r.el.style.display==="none")continue;if(!r.el.classList.contains("floor-tag")||i.w<=600){const c=(r.el.offsetWidth||0)/2+8;c*2<i.w&&(o=Math.min(i.w-c,Math.max(c,o)))}r.el.style.opacity="";const l=r.el.classList.contains("floor-tag")&&i.w>600;if(!l){const c=r.el.offsetWidth||0,h=r.el.offsetHeight||0;let d=a;for(let u=0;u<6;u++){const f=s.find(p=>o-c/2<p.r&&o+c/2>p.l&&d-h<p.b&&d>p.t);if(!f)break;d=f.t-6}s.push({l:o-c/2,r:o+c/2,t:d-h,b:d}),r.el.style.transform=`translate(${o.toFixed(1)}px, ${d.toFixed(1)}px) translate(-50%, -100%)`;continue}r.el.style.transform=l?`translate(${o.toFixed(1)}px, ${a.toFixed(1)}px) translate(8px, -50%)`:`translate(${o.toFixed(1)}px, ${a.toFixed(1)}px) translate(-50%, -100%)`}}}}function S(n,t={},...e){const[i,...s]=n.split("."),r=document.createElement(i||"div");s.length&&(r.className=s.join(" "));for(const[o,a]of Object.entries(t||{}))a==null||a===!1||(o.startsWith("on")&&typeof a=="function"?r.addEventListener(o.slice(2),a):o==="text"?r.textContent=a:r.setAttribute(o,a===!0?"":a));for(const o of e.flat())o==null||o===!1||r.append(o instanceof Node?o:document.createTextNode(String(o)));return r}function Zd(n,t,e=1100){const i=String(t).match(/^([^\d]*)([\d,.]+)(.*)$/);if(!i||/–/.test(t)||matchMedia("(prefers-reduced-motion: reduce)").matches){n.textContent=t;return}const[,s,r,o]=i,a=parseFloat(r.replace(/,/g,"")),l=(r.split(".")[1]||"").length,c=r.includes(","),h=performance.now(),d=u=>{const f=Math.min(1,(u-h)/e),p=1-Math.pow(1-f,3);let v=(a*p).toFixed(l);c&&(v=Number(v).toLocaleString("en-US")),n.textContent=s+v+o,f<1?requestAnimationFrame(d):n.textContent=t};requestAnimationFrame(d)}function Jd(n=""){return String(n).split(/\*\*(.+?)\*\*/).map((t,e)=>e%2?S("strong",{text:t}):t)}const us=n=>n!=null&&n!==""&&!JSON.stringify(n).includes("TODO-MANU");function El(n,{animate:t=!1,onClaim:e,hotCert:i,onCert:s,bare:r=!1,skipStory:o=!1,skipMetrics:a=!1}={}){const l=n.underConstruction||/now|present/i.test(n.dates||""),c=document.createDocumentFragment();if(!r){c.append(S("span.chip"+(l?".now":""),{},l?"● ":"",n.yearLabel),S("h2",{text:n.name.replace(" 🚧","")})),n.role&&c.append(S("p.role",{text:n.role}));const d=[n.dates,n.location].filter(Boolean).join(" · ");d&&c.append(S("p.meta",{text:d}))}if(n.status&&c.append(S("p.status",{},"🚧 ",n.status)),n.story&&!o&&c.append(S("p.story",{text:n.story})),n.metrics?.length&&!a){const d=S("div.metrics");for(const u of n.metrics){const f=S("div.v");t?Zd(f,u.value):f.textContent=u.value,d.append(S("div.metric",{},f,S("div.l",{text:u.label})))}c.append(d)}if(n.certificates?.length){c.append(S("h3",{text:"Certificates · one per floor"})),n.howTo&&s&&c.append(S("p.howto",{text:n.howTo}));const d=S("ul.certs"),u=f=>{d.querySelectorAll("li").forEach(p=>p.classList.toggle("hot",Number(p.dataset.cert)===f)),s?.(f)};n.certificates.forEach((f,p)=>{const v=f.date?new Date(f.date).toLocaleDateString("en-GB",{month:"short",year:"numeric"}):"";d.append(S("li"+(i===p?".hot":""),{"data-cert":p,tabindex:s?0:null,onmouseenter:s?()=>s(p):null,onmouseleave:s?()=>s(d.querySelector("li.hot")?Number(d.querySelector("li.hot").dataset.cert):null):null,onclick:s?g=>{g.target.closest("a")||u(p)}:null,onkeydown:s?g=>{g.key==="Enter"&&u(p)}:null},S("div.t",{},S("span.floor",{text:`Floor ${p+1}`}),f.title),S("div.s",{},S("span",{text:[f.issuer,v].filter(Boolean).join(" · ")}),f.verify?S("a",{href:f.verify,target:"_blank",rel:"noopener",text:"Verify ↗"}):null)))}),c.append(d)}if(n.highlights?.length){const d=n.certificates?"Notes":{"empty-plot":"The details","post-office":"The details",park:"Off the clock",campus:"Highlights",university:"Highlights",library:"Highlights"}[n.style]||(n.id==="dhl"?"The project":"What I did");c.append(S("h3",{text:d})),c.append(S("ul.highlights",{},n.highlights.map(u=>S("li",{text:u.text}))))}n.screenshots?.length&&(c.append(S("h3",{text:"From the app"})),c.append(S("div.shots",{},n.screenshots.map(d=>S("figure",{},S("img",{src:d.file,alt:d.caption,loading:"lazy"}),S("figcaption",{text:d.caption}))))));const h=[];n.cta&&h.push(S("button.primary",{onclick:()=>e?.()},`${n.cta.label} →`));for(const d of n.links||[])h.push(S("a.ghost",{href:d.href,target:d.href.startsWith("mailto:")?null:"_blank",rel:"noopener"},d.label));return h.length&&c.append(S("div.links",{},h)),n.tags?.length&&c.append(S("div.tags",{},n.tags.map(d=>S("span",{text:d})))),c}function Nx(n,{chapter:t,prev:e,next:i,position:s,onNav:r,onClaim:o,onCert:a,hotCert:l,caseId:c,onCase:h,tab:d}={}){const u=document.createDocumentFragment(),f=document.createDocumentFragment(),p=document.createDocumentFragment(),v=n.name.replace(" 🚧",""),g=n.underConstruction||/now|present/i.test(n.dates||"");f.append(S("p.card-eyebrow"+(g?".now":""),{text:t?`Chapter ${t.n} · ${t.title}`:n.yearLabel||""})),f.append(S("h2.card-title",{text:v})),n.role&&f.append(S("p.card-role",{text:n.role}));const m=[n.dates,n.location].filter(Boolean).join(" · ");m&&f.append(S("p.card-meta",{text:m}));const b=n.metrics||[],y=n.card?.hero||b[0],_=n.card?.proofs||b.slice(1,4);if(y){const I=S("div.hero-v"+(String(y.value).length>6?".long":""));Zd(I,y.value),p.append(S("div.hero",{},I,S("div.hero-l",{text:y.label}))),_.length&&p.append(S("ul.proofs",{},_.map(M=>S("li",{},S("span.v",{text:M.value}),S("span.l",{text:M.label})))))}else n.story&&p.append(S("p.card-story",{text:n.story}));const U=!!(n.certificates?.length||n.cta||n.links?.length),R=S("div.card-more",{hidden:U?null:!0},El(n,{bare:!0,skipStory:!y,skipMetrics:!0,onClaim:o,onCert:a,hotCert:l}));if(!U&&(n.highlights?.length||y)){const I=S("button.card-toggle",{type:"button","aria-expanded":"false",onclick:()=>{const M=R.hidden;R.hidden=!M,I.setAttribute("aria-expanded",String(M)),I.textContent=M?"Show less":"Read the full story ›",M&&R.scrollIntoView({behavior:"smooth",block:"start"})}},"Read the full story ›");p.append(I)}p.append(R),u.append(f);const P=Fo.filter(I=>I.buildingId===n.id);return P.length?u.append(Fx(p,P,{caseId:c,onCase:h,tab:d})):u.append(p),(e||i)&&u.append(S("nav.card-nav",{"aria-label":"Buildings"},S("button",{type:"button",onclick:()=>r(-1),disabled:e?null:!0},e?`‹ ${e}`:""),S("span",{text:s||""}),S("button.next",{type:"button",onclick:()=>r(1),disabled:i?null:!0},i?`${i} ›`:""))),u}let Ox=0;function Fx(n,t,{caseId:e,onCase:i,tab:s}){const r=++Ox,o=!!e||s==="cases",a=[S("div.tab-pane",{id:`pane-o-${r}`,role:"tabpanel","aria-labelledby":`tab-o-${r}`,tabindex:"0"},n),S("div.tab-pane",{id:`pane-c-${r}`,role:"tabpanel","aria-labelledby":`tab-c-${r}`,tabindex:"0"},S("ul.cases",{},t.map(d=>kx(d,d.id===e,i))))],l=[S("button.tab",{type:"button",role:"tab",id:`tab-o-${r}`,"aria-controls":`pane-o-${r}`},"Overview"),S("button.tab",{type:"button",role:"tab",id:`tab-c-${r}`,"aria-controls":`pane-c-${r}`},"Case studies",S("span.tab-count",{text:String(t.length)}))],c=(d,u)=>{l.forEach((f,p)=>{f.setAttribute("aria-selected",String(p===d)),f.tabIndex=p===d?0:-1,a[p].hidden=p!==d}),u&&l[d].focus()};l.forEach((d,u)=>{d.addEventListener("click",()=>c(u)),d.addEventListener("keydown",f=>{(f.key==="ArrowRight"||f.key==="ArrowLeft")&&(f.preventDefault(),f.stopPropagation(),c(1-u,!0))})}),c(o?1:0);const h=document.createDocumentFragment();return h.append(S("div.tabs",{role:"tablist","aria-label":"Building details"},l),...a),h}function kx(n,t,e){const i=E_,s=`case-${n.id}`,r=[];us(n.status)&&r.push(S("p.case-status",{text:n.status}));for(const d of["problem","whatIDid","whatItDoes","howIUsedAI","myCall","result","also","whatNext"]){const u=n[d];if(!us(u))continue;const f=Array.isArray(u)?S("ul",{},u.map(p=>S("li",{text:p}))):S("p",{text:u});r.push(S("section.case-sec"+(d==="myCall"?".call":d==="result"?".result":""),{},S("h4",{text:i[d]||d}),f))}const o=(n.media||[]).filter(us);o.length&&r.push(S("div.case-media",{},o.map(d=>S("figure",{},/\.(mp4|webm)$/i.test(d.file)?S("video",{src:d.file,muted:!0,loop:!0,playsinline:!0,autoplay:matchMedia("(prefers-reduced-motion: reduce)").matches?null:!0,"aria-label":d.alt||""}):S("img",{src:d.file,alt:d.alt||"",loading:"lazy"}),us(d.caption)?S("figcaption",{text:d.caption}):null))));const a=(n.links||[]).filter(us);a.length&&r.push(S("p.case-links",{},a.map(d=>S("a",{href:d.href},d.label))));const l=us(n.problem)?n.problem:(Array.isArray(n.whatIDid)?n.whatIDid[0]:n.whatIDid)||"",c=S("div.case-body",{id:s,hidden:t?null:!0},r),h=S("button.case-head",{type:"button","aria-expanded":String(!!t),"aria-controls":s},S("span.case-title",{text:n.title}),S("span.case-sum",{text:l}),S("span.case-chev",{"aria-hidden":"true",text:"›"}));return h.addEventListener("click",()=>{const d=c.hidden;c.hidden=!d,h.setAttribute("aria-expanded",String(d)),e?.(d?n.id:null)}),S("li.case"+(t?".open":""),{"data-case":n.id},S("h3.case-h",{},h),c)}function Bx({el:n,body:t,closeBtn:e,onClose:i,onNav:s,onClaim:r,onCert:o,onCase:a}){e.addEventListener("click",()=>i());let l=null;return{open(c,{hotCert:h,nav:d={},caseId:u,tab:f}={}){l=c.id,t.replaceChildren(Nx(c,{...d,onNav:s,onClaim:r,onCert:o,hotCert:h,caseId:u,onCase:a,tab:f})),t.scrollTop=0,n.hidden=!1,h!=null&&t.querySelector(`[data-cert="${h}"]`)?.scrollIntoView({block:"center"}),u&&requestAnimationFrame(()=>t.querySelector(`[data-case="${u}"]`)?.scrollIntoView({block:"start"}))},openContent(c,h){l=c,t.replaceChildren(h),t.scrollTop=0,n.hidden=!1},close(){l=null,n.hidden=!0},get isOpen(){return!n.hidden},get currentId(){return l}}}function zx(n,t,e,i){const s=e?.actions||[{label:"View my CV",href:i.cvFile,kind:"cv"},{label:"Email me",href:`mailto:${i.email}`,kind:"email"},{label:"Copy email",value:i.email,kind:"copy"}],r={cv:"📄",email:"✉️",copy:"📋"},o={cv:"Opens the PDF · one page",email:i.email,copy:"For when you have no mail app here"};for(const c of s){const h=[S("span.ic",{text:r[c.kind]||"→"}),S("span",{},c.label,S("small",{text:o[c.kind]||""}))];if(c.kind==="copy"){const d=S("button",{onclick:async()=>{let u=!1;try{await navigator.clipboard.writeText(c.value),u=!0}catch{}if(!u){const f=S("textarea",{},c.value);document.body.append(f),f.select();try{u=document.execCommand("copy")}catch{u=!1}f.remove()}d.querySelector("small").textContent=u?"Copied ✓":c.value}},h);t.append(d)}else t.append(S("a"+(c.kind==="email"?".main":""),{href:c.href,target:c.kind==="cv"?"_blank":null,rel:"noopener"},h))}let a=null;const l=()=>{n.hidden=!0,a?.focus?.()};return n.addEventListener("click",c=>{(c.target===n||c.target.closest("[data-close]"))&&l()}),{open(){a=document.activeElement,n.hidden=!1,n.querySelector(".claim-actions a, .claim-actions button")?.focus()},close:l,get isOpen(){return!n.hidden}}}function Xh(n=""){return String(n).split(/\*\*(.+?)\*\*/).map((t,e)=>e%2?S("strong",{text:t}):t)}const Hx=(n="")=>n.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"");function Vx(n,{person:t,stops:e,extras:i=[],onClaim:s,onGame:r,onCase:o,onClose:a}){const l=An.cv,c={},h=(m,b=[])=>{for(const y of b)c[y]??=m;return m},d={},u=(m,b,...y)=>{const _=S("section.qv-section",{"aria-labelledby":`qv-h-${m}`},S("h2.qv-h",{id:`qv-h-${m}`,text:b}),...y);return d[m]=_,_},f=m=>m?.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"}),p=[["experience","Experience"],["projects","Projects"],["education","Education"],["skills","Skills"]],v=S("div.quick-top.qv-top",{},S("div.bar.qv-bar",{},S("div.qv-brand",{},S("strong",{text:t.name}),S("span",{text:"CV"})),l?S("nav.qv-nav",{"aria-label":"CV sections"},p.map(([m,b])=>S("button",{type:"button",onclick:()=>f(d[m])},b))):null,S("div.qv-actions",{},S("button.ghost",{type:"button",onclick:a},S("span",{"aria-hidden":"true",text:"← "}),S("span.qv-long",{text:"Back to the "}),"city"),S("button.primary",{type:"button",onclick:s},"Contact me")))),g=S("div.quick-inner.qv-sheet");if(l){const m=Hx(t.linkedin),b=h(S("header.qv-header",{},S("p.qv-status",{},S("span.qv-dot",{"aria-hidden":"true"}),l.availability),S("h1.qv-name",{text:t.name}),S("p.qv-headline",{text:t.headline}),S("p.qv-sub",{text:t.subline}),S("ul.qv-facts",{},S("li",{},S("span",{text:"Based in"}),t.location),S("li",{},S("span",{text:"Open to"}),l.openTo),S("li",{},S("span",{text:"Looking for"}),l.lookingFor)),S("div.qv-contact",{},S("a.primary",{href:`mailto:${t.email}`},"Email me"),S("a.ghost",{href:t.linkedin,target:"_blank",rel:"noopener"},"LinkedIn ↗"),S("a.ghost",{href:t.cvFile,target:"_blank",rel:"noopener",download:""},"Download CV (PDF)")),S("p.qv-print-contact",{text:[t.location,t.email,m].join("  ·  ")})),["post-office","your-plot"]),y=S("p.qv-summary",{text:l.summary?.text}),_=S("div.qv-signature",{role:"list","aria-label":"Signature results"},(l.signature||[]).map(B=>S("div.qv-stat",{role:"listitem"},S("div.qv-stat-v",{text:B.value}),S("div.qv-stat-l",{text:B.label}),S("div.qv-stat-w",{text:B.where})))),U=An.caseStudies?.items||[],R=Object.fromEntries(e.map(B=>[B.id,B.name.replace(" 🚧","")])),P=B=>typeof B=="string"&&B&&!B.includes("TODO-MANU"),I=(l.featuredCases||[]).map(B=>U.find(W=>W.id===B)).filter(Boolean),M=I.length?S("section.qv-cases",{"aria-labelledby":"qv-h-cases"},S("h2.qv-h",{id:"qv-h-cases",text:"Three cases in 60 seconds"}),S("div.qv-case-grid",{},I.map(B=>S("article.qv-case",{},S("p.qv-case-where",{text:R[B.buildingId]||""}),S("h3",{text:B.title}),P(B.problem)?S("p.qv-case-p",{text:B.problem}):null,P(B.myCall)?S("p.qv-case-call",{},S("span",{text:"My call "}),B.myCall):null,P(B.result)?S("p.qv-case-r",{},S("span",{text:"Result "}),B.result):null,o?S("button.qv-case-open",{type:"button",onclick:()=>o(B.id)},"Open it in the city ›"):null))),r?S("div.qv-call",{},S("div",{},S("p.qv-call-t",{text:"Make the call"}),S("p.qv-call-s",{text:"Five real decisions from my career. Make each call, then see mine."})),S("button.primary",{type:"button",onclick:B=>r(B.currentTarget)},"Play ›")):null):null,x=B=>B?.length?S("ul.qv-bullets",{},B.map(W=>S("li",{},Xh(W.text??W)))):null,C=(B,W,nt)=>S("div.qv-entry-head",{},S("div.qv-entry-title",{},B,W),S("p.qv-dates",{text:nt})),z=(l.experience||[]).map(B=>h(S("article.qv-entry"+(B.bullets?.length?"":".qv-entry-short"),{id:`q-${B.ids?.[0]}`},C(S("h3.qv-role",{text:B.role}),S("p.qv-org",{},S("strong",{text:B.company}),B.location?S("span",{text:` · ${B.location}`}):null),B.dates),B.promotion?S("p.qv-promo",{text:B.promotion}):null,B.context?S("p.qv-context",{text:B.context}):null,x(B.bullets)),B.ids)),w=(l.projects||[]).map(B=>h(S("article.qv-entry.qv-project",{id:`q-${B.ids?.[0]}`},C(S("h3.qv-role",{text:B.name}),S("p.qv-org",{text:B.kind}),B.dates),B.summary?S("p.qv-context",{},Xh(B.summary)):null,x(B.bullets)),B.ids)),D=(l.education||[]).map(B=>h(S("article.qv-entry.qv-entry-short",{id:`q-${B.ids?.[0]}`},C(S("h3.qv-role",{text:B.name}),S("p.qv-org",{text:B.school}),B.dates),B.note?S("p.qv-context",{text:B.note}):null),B.ids)),F=e.find(B=>B.certificates?.length),N=(F?.certificates||[]).map(B=>{const W=B.date?new Date(B.date).toLocaleDateString("en-GB",{month:"short",year:"numeric"}):"";return S("li",{},S("div",{},S("strong",{text:B.title}),S("span",{text:[B.issuer,W].filter(Boolean).join(" · ")})),B.verify?S("a",{href:B.verify,target:"_blank",rel:"noopener","aria-label":`Verify certificate: ${B.title}`},"Verify ↗"):null)}),G=N.length?h(S("div.qv-certs",{},S("h3.qv-subh",{text:"Certifications"}),S("ul",{},N)),F?[F.id]:[]):null,H=S("dl.qv-skills",{},(l.skills||[]).map(B=>S("div",{},S("dt",{text:B.label}),S("dd",{text:B.text})))),q=h(S("div.qv-beyond",{},S("h3.qv-subh",{text:"Beyond work"}),S("p",{text:l.beyond?.text})),["hobby-park"]),$=S("div.qv-cta",{},S("div",{},S("p.qv-cta-t",{text:"Let's talk"}),S("p.qv-cta-s",{text:`${l.lookingFor} · ${l.openTo} · ${l.availability.replace(/^Available/,"available")}.`})),S("div.qv-cta-actions",{},S("button.primary",{type:"button",onclick:s},"Contact me"),r?S("button.ghost",{type:"button",onclick:B=>r(B.currentTarget)},"Make the call"):null,S("a.ghost",{href:`mailto:${t.email}`},t.email),S("a.ghost",{href:"how-built/"},"How this city was built"),S("button.ghost",{type:"button",onclick:a},"← Back to the city")));g.append(b,_,...M?[M]:[],y,u("experience","Experience",z),u("projects","Projects",w),u("education","Education",D,G),u("skills","Skills",H,q),$)}else{g.append(S("h1",{text:t.name}),S("p.lede",{},`${t.headline} · ${t.subline}`));for(const m of e){g.append(h(S("article",{},El(m,{onClaim:s})),[m.id]));for(const b of i.filter(y=>y.after===m.id))g.append(h(S("article",{},El(b)),[b.id]))}}return n.tabIndex=-1,n.append(v,g),{open(m){n.hidden=!1;const b=m&&c[m];b?b.scrollIntoView():n.scrollTop=0,n.focus?.({preventScroll:!0})},close(){n.hidden=!0},get isOpen(){return!n.hidden}}}const fs=new T;function Gx(n,t,e,{onArcade:i}={}){const s=ue.map((o,a)=>{const l=t[a]||{},c=(l.card||l.lede||"").replace(/\*\*/g,""),h=a===ue.length-1,d=[S("span.n",{text:l.n}),S("span.t",{text:l.title}),S("span.y",{text:l.years}),S("span.h",{text:l.card||""})],u=`Chapter ${l.n}: ${l.title}, ${l.years}. ${c}`,f=v=>{v.stopPropagation(),e(a)},p=h&&i?S("div.era.next.has-arcade",{role:"group","aria-label":`Chapter ${l.n}: ${l.title}`},S("button.era-main",{type:"button","aria-label":u,onclick:f},d),S("button.era-arcade",{type:"button",onclick:v=>{v.stopPropagation(),i(v.currentTarget)}},S("span.era-arcade-i",{"aria-hidden":"true",text:"▶"}),"Arcade: Make the call")):S("button.era"+(h?".next":""),{type:"button","aria-label":u,onclick:f},d);return n.append(p),{I:o,el:p,w:0}});let r=!1;return n.inert=!0,n.setAttribute("aria-hidden","true"),{set visible(o){o!==r&&(r=o,n.classList.toggle("on",o),n.inert=!o,n.setAttribute("aria-hidden",String(!o)))},get visible(){return r},invalidate(){for(const o of s)o.w=0,o.h=0},update(o,a,l=1/0,c=0){if(!r)return;const h=o.aspect<.9;n.classList.toggle("chips",h);const d=[];if(s.forEach((u,f)=>{const{I:p,el:v}=u;h?fs.set(p.x,p.top+6,p.z):fs.set(p.x,p.top+34,p.z-p.d/2+8),fs.project(o);const g=(fs.x*.5+.5)*a.w,m=(-fs.y*.5+.5)*a.h;if(fs.z>1||m>l||h&&m<c-30){v.style.visibility="hidden";return}u.w||(u.w=v.offsetWidth,u.h=v.offsetHeight),d.push({it:u,i:f,x:g,y:m})}),h){d.sort((f,p)=>f.y-p.y);let u=c+6;for(const f of d)f.y=Math.max(f.y,u+f.it.h/2),u=f.y+f.it.h/2+6}for(const{it:u,i:f,x:p,y:v}of d){const{el:g}=u;if(v>l){g.style.visibility="hidden";continue}g.style.visibility="";const m=u.w/2+12,b=h?p+(f%2?-70:70):p,y=Math.min(a.w-m,Math.max(m,b));g.style.setProperty("--stem",`${50+(p-y)/(u.w||1)*100}%`),g.style.transform=`translate(${y.toFixed(1)}px, ${v.toFixed(1)}px) translate(-50%, ${h?"-50%":"-100%"})`}}}}const qh="manu-city-tap-hint",Wx=":not(.gone):not(.vehicle):not(.islet):not(.booth):not(.buildlog)",Yh="Tap a building to open its story";function Xx(){const n=matchMedia("(hover: none) and (pointer: coarse)"),t=S("div.tap-note",{role:"status",hidden:!0},Yh);document.body.append(t);const e=S("span.tap-ring",{"aria-hidden":"true"});let i=0,s=0,r=!1,o=0;function a(){const h=innerWidth/2,d=o/2;let u=null,f=1/0;for(const p of document.querySelectorAll(`#labels .label${Wx}, #eras.on .era`)){if(p.style.visibility==="hidden")continue;const v=p.getBoundingClientRect();if(v.bottom>o-8||v.top<60)continue;const g=document.elementFromPoint(v.left+v.width/2,v.top+v.height/2);if(!g||!p.contains(g))continue;const m=Math.hypot(v.left+v.width/2-h,v.top+v.height/2-d);m<f&&(f=m,u=p)}return u}function l(){clearTimeout(i),clearInterval(s),e.remove(),t.hidden=!0}function c(h,d=Yh){if(r||!n.matches||Ls(qh))return;o=h;const u=a();u&&(r=!0,Ls(qh,"1"),u.querySelector(".n")?.append(e),t.textContent=d,t.style.bottom=`${Math.round(innerHeight-o+14)}px`,t.hidden=!1,s=setInterval(()=>{const f=e.closest(".label:not(.gone), #eras.on .era");if(f&&f.style.visibility!=="hidden")return;const p=a();p?p.querySelector(".n")?.append(e):e.remove()},400),i=setTimeout(l,9e3))}return{show:c,hide:l}}function Kd(n,t,{flyby:e=!0}={}){n.classList.add("booting"),n.append(S("div.title-fade",{"aria-hidden":"true"}),S("div.title-inner",{},S("button.title-grip",{type:"button","data-act":"tuck","aria-label":"Hide this card to explore the city"}),S("p.title-name",{text:t.name||"Manu Pratap Singh"}),S("p.eyebrow",{text:t.eyebrow}),S("h1",{},t.headline.flatMap((i,s)=>s?[S("br"),i]:[i])),S("p.title-lede",{},Jd(t.lede)),S("div.title-stats",{},t.stats.map(i=>S("div",{},S("b",{text:i.value}),S("span",{text:i.label})))),S("div.title-actions",{},S("button.primary.big",{type:"button","data-act":"start"},"Start the journey ›"),S("button.ghost.big",{type:"button","data-act":"cv"},"View CV")),S("p.title-avail",{},S("i",{"aria-hidden":"true"}),t.available||"Available full-time from mid-December 2026"),S("p.title-more",{},e?S("button.title-flyby",{type:"button","data-act":"flyby"},"▶ Watch the 60-second fly-by"):null,S("button.title-explore",{type:"button","data-act":"explore"},"or explore the city freely"))),S("p.title-hint",{"aria-hidden":"true",text:"Click any building, or scroll to begin ↓"})),n.hidden=!1}function qx({rig:n,titleEl:t,storyEl:e,title:i,chapters:s,names:r,onOpen:o,onClaim:a,onCV:l,onGame:c,onFlyby:h,onExplore:d,onChapter:u,blocked:f}){let p="off",v=-1;const g=()=>n.camera.aspect<.9;t.firstChild||Kd(t,i,{flyby:!!h});const m=(W,nt)=>t.querySelector(`[data-act="${W}"]`)?.addEventListener("click",nt);m("start",()=>N(0)),m("cv",()=>l()),m("flyby",()=>h?.()),m("explore",()=>d()),m("tuck",()=>d()),t.classList.remove("booting");const b=S("div.story-col",{"aria-live":"polite"}),y=S("nav.story-rail",{"aria-label":"Chapters"},s.map((W,nt)=>S("button",{type:"button","aria-label":`Chapter ${W.n}: ${W.title}`,title:W.title,onclick:()=>N(nt)},S("span",{text:W.n}))));e.append(b,y);const _=S("button.title-tab",{type:"button",hidden:!0,"aria-label":"Back to the start",onclick:()=>F()},S("span.tab-name",{text:i.name||"Manu Pratap Singh"}),S("span.tab-line",{text:i.headline.join(" ")}),S("span.tab-back",{text:"Back to the start ›"}));t.after(_);let U=null;const R=96;let P=!1;const I=S("button.story-grip",{type:"button","aria-expanded":"true","aria-label":"Minimise the chapter",onclick:()=>M(!P)},S("span.grip-chev",{"aria-hidden":"true"}));function M(W){W!==P&&(P=W,W&&(b.scrollTop=0),e.classList.toggle("min",W),I.setAttribute("aria-expanded",String(!W)),I.setAttribute("aria-label",W?"Show the chapter":"Minimise the chapter"),p==="story"&&(W?(D(),n.setLocked(!1)):(n.setLocked(!0),requestAnimationFrame(D))))}b.addEventListener("click",W=>{!P||W.target.closest(".story-grip")||(W.preventDefault(),W.stopPropagation(),M(!1))},!0),b.addEventListener("animationend",()=>b.classList.remove("enter"));function x(W){const nt=s[W],tt=[...ue[W].stops,...nt.extras||[]],lt=s[W+1];b.replaceChildren(I,S("p.eyebrow",{text:[`Chapter ${nt.n}`,nt.years,nt.place].filter(Boolean).join(" · ")}),S("h2",{text:nt.title}),S("p.story-lede",{text:nt.lede}),S("ul.story-points",{},nt.points.map(it=>S("li",{},Jd(it)))),nt.cta?S("div.story-actions",{},S("button.primary",{type:"button",onclick:()=>a()},"Contact me"),S("button.ghost",{type:"button",onclick:()=>l()},"View CV"),c?S("button.ghost",{type:"button",onclick:it=>c(it.currentTarget)},"Make the call"):null):S("div.story-stops",{},S("span",{text:"Open"}),tt.filter(it=>r[it]).map(it=>S("button.ghost",{type:"button",onclick:()=>o(it)},r[it]))),S("div.story-nav",{},S("button.ghost",{type:"button","aria-label":W?`Back to chapter ${s[W-1].n}: ${s[W-1].title}`:"Back to the start",onclick:()=>G(-1)},"‹ Back"),lt?S("button.primary",{type:"button","aria-label":`Next, chapter ${lt.n}: ${lt.title}`,onclick:()=>G(1)},`${lt.title} ›`):null)),b.scrollTop=0,y.querySelectorAll("button").forEach((it,pt)=>it.classList.toggle("on",pt===W))}const C=()=>Math.min(500,innerWidth*.4);function z(W){const nt=ue[W],j=n.camera,tt=g(),lt=2*Math.atan(Math.tan(dr.degToRad(j.fov)/2)*j.aspect),it=(nt.w+nt.d*.45)*({lisbon:1.45,next:1.7}[nt.place]||1.1),pt=tt?1:(innerWidth-C())/innerWidth,Tt=1.22*(it/2)/(Math.tan(lt/2)*pt),Nt=new T(nt.x+(nt.place==="lisbon"?8:0),nt.top+3,nt.z+(nt.place==="lisbon"?14:-4)),Wt=(tt?new T(-.25,.8,.55):new T(-.35,.62,.7)).normalize();return{pos:Nt.clone().addScaledVector(Wt,Tt),target:Nt}}function w(){if(g())return n.overviewPose();const W=ue[2],nt=new T(W.x+5,22,W.z),j=new T(-.7,.5,.6).normalize(),tt=390*Math.max(1,1.6/n.camera.aspect);return{pos:nt.clone().addScaledVector(j,tt),target:nt}}function D(){if(p==="title"){const{pos:W,target:nt}=w();n.setPanelOffset(0,g()?(t.querySelector(".title-inner").offsetHeight||innerHeight*.5)*.5:0),n.focusPoint(W,nt)}else if(p==="story"){const{pos:W,target:nt}=z(v);n.setPanelOffset(g()?0:-C()/2,g()?(P?R:b.offsetHeight||innerHeight*.45)*.5:0),n.focusPoint(W,nt)}}function F(){M(!1),p="title",v=-1,n.setLocked(!0),clearTimeout(U),_.hidden=!0,t.classList.remove("tucked"),e.hidden=!0,t.hidden=!1,u(-1),requestAnimationFrame(D)}function N(W,{keepMin:nt=!1,still:j=!1}={}){nt||M(!1),W=Math.max(0,Math.min(s.length-1,W));const tt=p!=="story"||W!==v;p="story",v=W,n.setLocked(!P),clearTimeout(U),_.hidden=!0,t.classList.remove("tucked"),t.hidden=!0,e.hidden=!1,e.classList.remove("away"),tt&&(x(W),b.classList.remove("enter"),b.offsetWidth,b.classList.add("enter")),u(W),j||requestAnimationFrame(D)}function G(W){if(p==="title"){W>0&&N(0);return}if(p==="story"){if(W<0&&v===0)return F();W>0&&v===s.length-1||N(v+W,{keepMin:!0})}}let H=0,q=0,$=0;addEventListener("wheel",W=>{if(p==="off"||f()||W.ctrlKey||W.target.closest?.("#panel, #quick, .modal"))return;W.preventDefault();const nt=performance.now();nt-$>220&&(H=0),$=nt,!(nt<q)&&(H+=W.deltaY+W.deltaX*.5,Math.abs(H)>46&&(G(Math.sign(H)),H=0,q=nt+900))},{passive:!1});let B=null;return addEventListener("touchstart",W=>{if(B=null,f()||W.touches.length!==1)return;const nt=W.target;if(nt.closest?.("#panel, #quick, .modal, #topbar"))return;const j=!_.hidden&&!!nt.closest?.(".title-tab");p==="off"&&!j||(B={x:W.touches[0].clientX,y:W.touches[0].clientY,sheet:!!nt.closest?.(".story-col"),tab:j,atTop:b.scrollTop<=0})},{passive:!0}),addEventListener("touchend",W=>{if(!B)return;const nt=W.changedTouches[0],j=nt.clientX-B.x,tt=B.y-nt.clientY,{sheet:lt,tab:it,atTop:pt}=B;if(B=null,!(Math.abs(tt)<50||Math.abs(tt)<Math.abs(j)*1.2)){if(it){tt>0&&F();return}if(p==="title"){tt>0?N(0):d();return}if(lt){P?tt>0&&M(!1):tt<0&&pt&&b.scrollTop<=0&&M(!0);return}P||G(tt>0?1:-1)}},{passive:!0}),{showTitle:F,go:N,step:G,frame:D,away(W){e.classList.toggle("away",W)},resume(){p==="story"?N(v,{keepMin:!0}):p==="title"&&F()},minimise(){p==="story"&&g()&&M(!0)},hide(){const W=p==="title";p="off",e.hidden=!0,_.hidden=!1,_.classList.toggle("fresh",W),W?(t.classList.add("tucked"),clearTimeout(U),U=setTimeout(()=>{t.hidden=!0,t.classList.remove("tucked")},450)):t.hidden=!0,n.setLocked(!1),n.setPanelOffset(0,0)},get mode(){return p},get index(){return v},get minimised(){return P&&p==="story"}}}const $h="manu-city-best-call",Yx=n=>JSON.stringify(n).includes("TODO-MANU"),jh=["A","B","C"];function $x({data:n,person:t,onCase:e,onExplore:i,onClose:s=()=>{},onStart:r=()=>{},onEnd:o=()=>{}}){const a=(n?.decisions||[]).filter(x=>x.active&&!Yx(x)),l=a.length,c=S("div.game-body"),h=S("div.modal-card.game-card.arcade-screen",{},S("button.panel-close",{type:"button","aria-label":"Close the game",onclick:()=>M()},"×"),c),d=S("div.modal.game",{id:"game",role:"dialog","aria-modal":"true","aria-labelledby":"game-title",hidden:!0},h);document.getElementById("app").append(d);let u=0,f=0,p=null;const v=(...x)=>c.replaceChildren(...x.filter(Boolean));function g(x){const C=n.scoreLines||{};return x===l?C[5]:x>=3?C["3-4"]:C["0-2"]}const m=()=>Number(Ls($h))||0;function b(x){return S("div.game-head",{},S("p.eyebrow",{text:"Make the call"}),S("p.game-score",{"aria-label":`Score ${f}`},S("span",{text:"1UP"}),` ${f}`),S("div.game-progress",{"aria-label":`Question ${x+1} of ${l}`},S("span",{text:`Q ${x+1}/${l}`}),S("span.game-dots",{"aria-hidden":"true"},a.map((C,z)=>S("i"+(z<x?".done":z===x?".on":""))))))}function y(){const x=S("h2.game-logo",{id:"game-title",tabindex:"-1"},S("span",{text:"Make"}),S("span",{text:"the call"})),C=S("button.primary.game-start",{type:"button",onclick:()=>P()},"Press start");v(S("div.game-head",{},S("p.eyebrow",{text:"The arcade"}),m()?S("p.game-score",{},S("span",{text:"HI"}),` ${m()}/${l}`):null),x,S("p.game-coin",{"aria-hidden":"true",text:"Insert coin"}),n.intro?S("p.game-intro",{text:n.intro}):null,n.intro?null:S("p.game-rules",{text:`${l} real decisions from my career. Make each call, then see mine.`}),C),h.scrollTop=0,C.focus()}function _(x){const C=a[x],z=S("div.game-reveal",{"aria-live":"polite"}),w=C.options.map((F,N)=>S("button.game-option",{type:"button","data-id":F.id,onclick:()=>U(C,F.id,w,z)},S("span.game-letter.l"+N,{"aria-hidden":"true",text:jh[N]}),S("span.game-text",{text:F.text}))),D=S("h2",{id:"game-title",tabindex:"-1",text:C.title});v(b(x),D,S("p.game-situation",{text:C.situation}),S("div.game-options",{role:"group","aria-label":"Your options"},w),z),h.scrollTop=0,D.focus()}function U(x,C,z,w){const D=C===x.manuChoice;D&&(f+=1),h.querySelector(".game-score")?.replaceChildren(S("span",{text:"1UP"}),` ${f}`),h.classList.remove("flash-same","flash-diff"),h.offsetWidth,h.classList.add(D?"flash-same":"flash-diff");for(const H of z){const q=H.dataset.id;H.disabled=!0,H.classList.toggle("picked",q===C),H.classList.toggle("manu",q===x.manuChoice),H.classList.toggle("other",q!==C&&q!==x.manuChoice);const $=[];q===C&&$.push("Your call"),q===x.manuChoice&&$.push("My call"),$.length&&H.append(S("span.game-tag",{text:$.join(" · ")}))}const F=H=>jh[x.options.findIndex(q=>q.id===H)],N=u===l-1,G=S("button.primary",{type:"button",onclick:()=>N?R():_(++u)},N?"See your result ›":"Next ›");w.replaceChildren(S("p.game-banner"+(D?".same":""),{"aria-hidden":"true",text:D?"Match!":"Different call"}),S("p.game-verdict"+(D?".same":""),{text:D?`Same call: ${F(C)}.`:`You chose ${F(C)}. I chose ${F(x.manuChoice)}.`}),S("h3",{text:"What happened"}),S("p.game-outcome",{text:x.outcome}),S("p.game-lesson",{text:x.lesson}),S("div.game-actions",{},x.caseStudyId?S("button.ghost",{type:"button",onclick:()=>{M(!1),e(x.caseStudyId,x.buildingId)}},"See the case study ›"):null,G)),G.focus({preventScroll:!0}),w.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"nearest"})}function R(){o(f,l);let x=m();f>x&&(x=f,Ls($h,String(f)));const C=S("h2",{id:"game-title",tabindex:"-1",text:`You made ${f} of ${l} calls the way I did.`});v(S("div.game-head",{},S("p.eyebrow",{text:"Make the call"}),S("p.game-score",{},S("span",{text:"HI"}),` ${x}/${l}`)),S("p.game-final",{"aria-hidden":"true"},S("span",{text:"Score"}),S("b",{text:`${f}/${l}`})),C,S("p.game-band",{text:g(f)}),x>f?S("p.game-best",{text:`Your best so far: ${x} of ${l}.`}):null,S("div.game-end-actions",{},S("a.primary",{href:t.cvFile,target:"_blank",rel:"noopener"},"View my CV"),S("a.ghost",{href:`mailto:${t.email}`},"Email me"),S("button.ghost",{type:"button",onclick:()=>{M(!1),i()}},"Explore the city")),S("button.game-again",{type:"button",onclick:()=>P()},"Play again")),C.focus()}function P(){r(),u=0,f=0,_(0)}d.addEventListener("keydown",x=>{if(x.key==="Escape"){x.stopPropagation(),M();return}if(x.key!=="Tab")return;const C=[...h.querySelectorAll('button:not([disabled]), a[href], [tabindex="0"]')];if(!C.length)return;const z=C[0],w=C[C.length-1];x.shiftKey&&document.activeElement===z?(x.preventDefault(),w.focus()):!x.shiftKey&&document.activeElement===w&&(x.preventDefault(),z.focus())}),d.addEventListener("click",x=>{x.target===d&&M()});function I(x){l&&(p=x||document.activeElement,d.hidden=!1,h.classList.remove("power-on"),h.offsetWidth,h.classList.add("power-on"),y())}function M(x=!0){d.hidden||(d.hidden=!0,x&&(s(),p?.focus?.()))}return{open:I,close:M,get isOpen(){return!d.hidden},get available(){return l>0}}}function jx({screen:n="YOUR CALL?",sub:t="5 real decisions"}={}){const e=new kt;e.name="make-the-call-booth";const i=k("#243447",{roughness:.55}),s=k("#d9734e",{roughness:.5});e.add(J(4.4,.35,3.6,k("#efe9dc"),0,0,0)),e.add(J(3.2,5.4,2.2,i,0,.35,-.2)),e.add(J(3.4,.35,1.3,s,0,2.55,1.2));const r=["#d9734e","#f2c14e","#4fb3a9"];[-.9,0,.9].forEach((l,c)=>e.add(ee(.24,.24,.22,new Jt({color:r[c]}),14,l,2.9,1.3)));const o=Ie({text:n,sub:t,w:512,h:320,bg:"#0f1b2a",fg:"#7cf0c5"},2.6,1.6,{emissive:!0,doubleSide:!1});o.position.set(0,4.3,.92),e.add(o),e.add(J(3.7,1.1,2.5,s,0,5.75,-.2));const a=Ie({text:"MAKE THE CALL",w:768,h:160,bg:"#d9734e",fg:"#ffffff"},3.5,.75,{emissive:!0,doubleSide:!1});return a.position.set(0,6.3,1.06),e.add(a),e.userData.screen=o,e.traverse(l=>{l.isMesh&&(l.castShadow=!0,l.receiveShadow=!0)}),e}function Zx(){const n=new kt;n.name="build-log-sign";const t=k("#3a2f28");n.add(J(.35,6.2,.35,t,-3.4,0,0),J(.35,6.2,.35,t,3.4,0,0)),n.add(J(8,3.6,.3,k("#1e3a5f"),0,2.8,0));const e=Ie({text:"BUILT WITH AI",sub:"How this city and Lará were built ›",w:1024,h:440,bg:"#1e3a5f",fg:"#ffffff",border:"#8fb8ff"},7.6,3.25,{emissive:!0,doubleSide:!1});e.position.set(0,4.6,.17),n.add(e),n.traverse(s=>{s.isMesh&&(s.castShadow=!0,s.receiveShadow=!0)});const i=new ht(new oe(9,7,2),new Jt({visible:!1}));return i.position.y=3.5,i.userData.buildLog=!0,n.add(i),n.userData.hit=i,n}function Jx(n,{plot:t=!1,extras:e=[]}={}){const i=new Map,s=new wo(13.6,15.6,72),r=new wo(15.6,18.2,72),o=new Oe(5.5,7.5,70,32,1,!0);o.translate(0,35,0);const a=o.attributes.position,l=[];for(let d=0;d<a.count;d++){const u=1-a.getY(d)/70;l.push(u,u,u)}o.setAttribute("color",new Xt(l,3));const c=new Jt({color:"#ffffff",vertexColors:!0,transparent:!0,opacity:.1,blending:_o,depthWrite:!1,side:Se}),h=[];for(const d of n){if(d.stop.style==="empty-plot"&&!t)continue;const u=new ht(s,new Jt({color:"#fffaf0",transparent:!0,opacity:.85,depthWrite:!1,side:Se})),f=new ht(r,new Jt({color:"#ffd38a",transparent:!0,opacity:.35,depthWrite:!1,side:Se}));if(f.raycast=()=>{},u.add(f),u.userData.glow=f,u.rotation.x=-Math.PI/2,u.position.y=(d.groundY??d.baseY)+.04,u.renderOrder=2,u.raycast=()=>{},u.userData.offset=i.size*.7,d.root.add(u),d.stop.ai!=="built-with-ai"){const p=new ht(o,c);p.position.y=d.baseY,p.raycast=()=>{},d.root.add(p),h.push({beam:p,b:d})}i.set(d.stop.id,{mesh:u,b:d,seen:!1})}for(const d of e){const u=new kt;u.position.set(d.x,d.y,d.z),u.scale.setScalar(d.scale||1);const f=new ht(s,new Jt({color:"#fffaf0",transparent:!0,opacity:.85,depthWrite:!1,side:Se})),p=new ht(r,new Jt({color:"#ffd38a",transparent:!0,opacity:.35,depthWrite:!1,side:Se}));p.raycast=()=>{},f.add(p),f.userData.glow=p,f.rotation.x=-Math.PI/2,f.position.y=.06,f.renderOrder=2,f.raycast=()=>{},f.userData.offset=i.size*.7;const v=new ht(o,c);v.raycast=()=>{},u.add(f,v),d.parent.add(u);const g={get progress(){return d.shown()?1:0}};h.push({beam:v,b:g}),i.set(d.id,{mesh:f,b:g,seen:!1})}return{setVisited(d){for(const[u,f]of i)f.seen=d.has(u)},setBeams(d){c.opacity=d?.1:0},update(d){const u=yi();for(const{beam:f,b:p}of h)f.visible=p.progress>.6&&c.opacity>0;for(const f of i.values()){const{mesh:p,b:v,seen:g}=f,m=v.progress>.6?1:0,b=p.userData.glow;if(g||u)p.material.opacity=m*(g?.6:.85),b.material.opacity=m*(g?.15:.35),p.scale.setScalar(1);else{const y=.5+.5*Math.sin(d*2.2+p.userData.offset);p.material.opacity=m*(.7+.3*y),b.material.opacity=m*(.2+.35*y),p.scale.setScalar(1+.04*Math.sin(d*2.2+p.userData.offset))}}}}}function Kx(n){let t=null;const e=new Map,i=new Map;function s(o){if(!i.has(o)){const a=o.clone();a.emissive&&(a.emissive=new Qt("#ffb070"),a.emissiveIntensity=.45),i.set(o,a)}return i.get(o)}function r(){for(const[o,a]of e)o.material=a;e.clear(),t=null}return{set(o){if(o===t)return;r();const a=o&&n[o];a&&(t=o,a.inner.traverse(l=>{!l.isMesh||!l.material||Array.isArray(l.material)||!l.material.emissive||l.material.map||(e.set(l,l.material),l.material=s(l.material))}))}}}const Qx="#3b82f6";function ty(n,{lights:t=[]}={}){const e=new Oe(5.5,7.5,70,32,1,!0);e.translate(0,35,0);const i=e.attributes.position,s=[];for(let u=0;u<i.count;u++){const f=1-i.getY(u)/70;s.push(f,f,f)}e.setAttribute("color",new Xt(s,3));const r=new gr(8.5,.35,8,64),o=[];for(const u of n){const f=u.stop.ai;if(!f)continue;const p=f==="built-with-ai";let v=null;p&&(v=new ht(e,new Jt({color:Qx,vertexColors:!0,transparent:!0,opacity:.2,blending:_o,depthWrite:!1,side:Se})),v.position.y=u.baseY,v.raycast=()=>{},u.root.add(v));const g=new ht(r,new Jt({color:p?"#bcd6ff":"#9cc3ff",transparent:!0,opacity:p?.9:.55}));g.rotation.x=Math.PI/2,g.scale.setScalar(p?1:.85),g.position.y=u.height+(p?6:4),g.raycast=()=>{},u.root.add(g),o.push({b:u,built:p,beam:v,ring:g,base:{beam:.2,ring:p?.9:.55}})}const a=new Map,l=new Map,c=u=>{if(!l.has(u)){const f=u.clone();f.emissive=new Qt("#5b9cff"),f.emissiveIntensity=.38,l.set(u,f)}return l.get(u)};let h=!1;const d=t.map(u=>u.intensity);return{get on(){return h},setMode(u){if(u!==h){h=u,t.forEach((f,p)=>{f.intensity=d[p]*(h?.42:1)});for(const f of o)f.beam&&(f.beam.material.opacity=h?.42:f.base.beam),f.ring.material.opacity=h?1:f.base.ring,f.b.inner.traverse(p=>{!p.isMesh||!p.material||Array.isArray(p.material)||!p.material.emissive||p.material.map||(h?(a.set(p,p.material),p.material=c(p.material)):a.has(p)&&(p.material=a.get(p)))});h||a.clear()}},update(u){const f=yi();for(const p of o)p.ring.visible=p.b.progress>.6,p.beam&&(p.beam.visible=p.b.progress>.6),f||(p.ring.rotation.z=u*.4,p.ring.position.y=p.b.height+(p.built?6:4)+Math.sin(u*1.2+p.b.stop.order)*.5)}}}function ey({stops:n,chapters:t,extras:e=[],onPick:i}){const s=Object.fromEntries(n.map(u=>[u.id,u])),r=S("div.list-body"),o=S("div.modal-card.list-card",{},S("button.panel-close",{type:"button","aria-label":"Close the list",onclick:()=>d()},"×"),S("h2",{id:"list-title",tabindex:"-1",text:"Buildings"}),r),a=S("div.modal",{id:"buildings",role:"dialog","aria-modal":"true","aria-labelledby":"list-title",hidden:!0},o);document.getElementById("app").append(a);let l=null;function c(u){const f=n.filter(g=>g.career).length,p=n.filter(g=>g.career&&u.has(g.id)).length,v=[S("p.list-sub",{text:`You've visited ${p} of ${f} career buildings.`})];ue.forEach((g,m)=>{const b=t[m],y=[...g.stops,...e.filter(_=>_.island===m).map(_=>_.id)];v.push(S("h3.list-ch",{text:`${b?.n||""} · ${b?.title||""}`})),v.push(S("ul.list-items",{},y.map(_=>{const U=s[_]||e.find(I=>I.id===_);if(!U)return null;const R=(U.style==="empty-plot"?"The next stretch: your office":U.name).replace(" 🚧",""),P=U.career?u.has(_)?S("span.lv",{text:"✓ Visited"}):S("span.lv.no",{text:"Not yet"}):S("span");return S("li",{},S("button",{type:"button",onclick:()=>{d(!1),i(_)}},S("span.ln",{"aria-hidden":"true",text:U.order?String(U.order):"★"}),S("span",{},R,U.hook?S("span.lh",{text:U.hook}):null),P))}).filter(Boolean)))}),r.replaceChildren(...v)}a.addEventListener("keydown",u=>{if(u.key==="Escape"){u.stopPropagation(),d();return}if(u.key!=="Tab")return;const f=[...o.querySelectorAll("button")],p=f[0],v=f[f.length-1];u.shiftKey&&document.activeElement===p?(u.preventDefault(),v.focus()):!u.shiftKey&&document.activeElement===v&&(u.preventDefault(),p.focus())}),a.addEventListener("click",u=>{u.target===a&&d()});function h(u,f){l=f||document.activeElement,c(u),a.hidden=!1,o.scrollTop=0,o.querySelector("#list-title").focus()}function d(u=!0){a.hidden=!0,u&&l?.focus?.()}return{open:h,close:d,get isOpen(){return!a.hidden}}}const ny=5.2;function iy({stops:n,byId:t,rig:e,highlighter:i,labels:s,onStart:r,onEnd:o}){const a=n.filter(R=>R.career&&t[R.id]),l=S("div.fb-caption",{"aria-live":"polite"}),c=S("div.fb-progress",{"aria-hidden":"true"},a.map(()=>S("i"))),h=S("button.fb-btn",{type:"button",onclick:()=>U()},"Pause"),d=S("div",{id:"flyby",role:"region","aria-label":"60-second fly-by",hidden:!0},c,l,S("div.fb-controls",{},h,S("button.fb-btn",{type:"button",onclick:()=>b(p+1)},"Next ›"),S("button.fb-btn.exit",{type:"button",onclick:()=>_()},"Exit")));document.getElementById("app").append(d);let u=!1,f=!1,p=-1,v=0,g=!1;function m(R){const P=a[R],I=t[P.id];i.set(P.id),I.hoverTarget=1;for(const x of a)x.id!==P.id&&(t[x.id].hoverTarget=0);s.setFocused(null),s.setHot(P.id),g||e.focusBuilding(I);const M=P.hook||"";l.replaceChildren(...[S("span.fb-count",{text:`${R+1} of ${a.length}`}),S("strong",{text:P.name.replace(" 🚧","").replace("The Lisbon MBA · Católica | Nova","The Lisbon MBA")}),S("span.fb-years",{text:P.yearLabel||P.dates||""}),M?S("span.fb-result",{text:M}):null].filter(Boolean)),c.querySelectorAll("i").forEach((x,C)=>{x.classList.toggle("done",C<R),x.classList.toggle("on",C===R)})}function b(R){if(u){if(R>=a.length){_();return}p=Math.max(0,R),v=0,m(p)}}function y(){g=yi(),u=!0,f=!1,h.textContent="Pause",d.hidden=!1,r(),g&&e.overview(.01),e.setLocked(!0),b(0),d.querySelector(".fb-btn").focus({preventScroll:!0})}function _(R="exit"){if(u){u=!1,d.hidden=!0,i.set(null);for(const P of a)t[P.id].hoverTarget=0;s.setHot(null),e.setLocked(!1),o(R)}}function U(){f=!f,h.textContent=f?"Play":"Pause"}return{start:y,stop:_,get active(){return u},update(R){!u||f||(v+=R,v>=ny&&b(p+1))}}}function sy(n,{person:t,caseTitle:e,onCase:i}){const s=document.createDocumentFragment();s.append(S("p.card-eyebrow",{text:`For ${n.company}`})),s.append(S("h2.card-title",{text:`The next stretch leads to ${n.company}`})),n.role&&s.append(S("p.card-role",{text:n.role})),n.greeting&&s.append(S("p.pitch-greeting",{text:n.greeting}));const r=(n.sections||[]).filter(o=>o.text);return r.length&&s.append(S("ol.pitch-sections",{},r.map((o,a)=>S("li.pitch-sec",{"data-kind":o.kind||""},S("span.pitch-n",{"aria-hidden":"true",text:String(a+1)}),S("div",{},o.title?S("h3",{text:o.title}):null,S("p",{text:o.text}),o.image?.file?S("img",{src:o.image.file,alt:o.image.alt||"",loading:"lazy"}):null,o.link?.href?S("a.pitch-link",{href:o.link.href,target:"_blank",rel:"noopener"},`${o.link.label||"Open"} ↗`):null))))),e&&i&&s.append(S("div.pitch-start",{},S("span",{text:"Where to start"}),S("button",{type:"button",onclick:()=>i()},`${e} ›`))),s.append(S("div.pitch-actions",{},S("a.primary",{href:t.cvFile,target:"_blank",rel:"noopener"},"My CV"),S("a.ghost",{href:`mailto:${t.email}?subject=${encodeURIComponent(`${n.role||"Role"} at ${n.company}`)}`},"Email me"),S("a.ghost",{href:t.linkedin,target:"_blank",rel:"noopener"},"LinkedIn ↗"))),s.append(S("p.pitch-note",{text:"I get a note if you open my CV or a case study here, so I can follow up."})),s}const ry="https://manu-visits.sam123-manu.workers.dev";function oy(n){const t={caseStudy(){},cv(){}};if(!n||!navigator.sendBeacon)return t;const e=`${ry}/v`,i=new Set;let s=!1,r="";function o(){if(!s&&!i.size)return;const a={slug:n,cv:s,cases:[...i]},l=JSON.stringify(a);l!==r&&(r=l,navigator.sendBeacon(e,new Blob([l],{type:"text/plain"})))}return addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&o()}),addEventListener("pagehide",o),addEventListener("click",a=>{/\.pdf$/i.test(a.target.closest?.("a[href]")?.getAttribute("href")||"")&&(s=!0)},!0),{caseStudy(a){a&&i.add(a)},cv(){s=!0}}}function ay(){const n=new kt,t=k("#d9734e",{roughness:.45});n.add(J(2.4,.9,4.4,t,0,.35,0)),n.add(J(2.1,.85,2.3,k("#eaf2f5",{roughness:.15,metalness:.2}),0,1.25,-.25)),n.add(J(2.2,.18,2.4,t,0,2.1,-.25));for(const e of[-.75,.75])n.add(J(.5,.25,.08,new Jt({color:"#fff6c9"}),e,.75,2.22));for(const e of[-.75,.75])n.add(J(.5,.2,.08,new Jt({color:"#ff5a4f"}),e,.75,-2.22));for(const[e,i]of[[-1.15,1.4],[1.15,1.4],[-1.15,-1.4],[1.15,-1.4]]){const s=new ht(new Oe(.45,.45,.35,12),k("#1f2329"));s.rotation.z=Math.PI/2,s.position.set(e,.45,i),n.add(s)}return n.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),n}function ly(){const n=[],t=[],i=(s,r,o)=>n.push(new T(s,r,o));return ue.forEach((s,r)=>{const o=s.top+.18,a=s.pathZ;if(s.place==="next")return;r===0&&i(s.x-s.w/2+5,o,a),i(s.x-7,o,a),i(s.x-1.7,o,a-5);const l=s.stops.map(p=>D_[p]).filter(Boolean),c=[...new Set(l.map(p=>p.pos.z))].sort((p,v)=>v-p);for(const p of c)i(s.x-1.7,o,p);const h=c[c.length-1];i(s.x-1.7,o,h-3),i(s.x,o,h-5.5),i(s.x+1.7,o,h-3);for(const p of[...c].reverse().slice(1))i(s.x+1.7,o,p);i(s.x+1.7,o,a-5),i(s.x+7,o,a),l.forEach(p=>t.push({id:p.stop.id,point:new T(s.x+(p.side>0?1.7:-1.7),o,p.pos.z)})),s.place==="lisbon"&&(i(s.x+18,o,a),t.push({id:"mit-sloan",extra:!0,point:new T(s.x+18,o,a)})),i(s.x+s.w/2-.5,o,a);const d=qd[r];if(!d)return;const u=20,f=p=>{const v=d.a.clone().lerp(d.b,p);return v.y+=(d.suspension?0:Math.sin(p*Math.PI)*6)+.35,v};if(d.unbuilt){for(let p=1;p<=11;p++)n.push(f(p/u));t.push({id:"your-plot",point:f(.55)})}else for(let p=1;p<=u;p++)n.push(f(p/u))}),{curve:new Uo(n,!1,"centripetal",.5),parks:t}}function cy({scene:n,rig:t,onArrive:e,onLeave:i,onStatus:s}){const{curve:r,parks:o}=ly();r.arcLengthDivisions=4e3;const a=r.getLength(),l=4e3,c=r.getSpacedPoints(l);let h=0;for(const _ of o){let U=h,R=1/0;for(let P=h;P<=l;P++){const I=c[P].distanceToSquared(_.point);I<R&&(R=I,U=P)}_.u=U/l,h=U}const d=ay();n.add(d);const u=new T;let f=0,p=-1,v=null,g=!1,m=1;const b=_=>{const U=r.getPointAt(Ne(_,0,1));d.position.copy(U),r.getPointAt(Ne(_+.0015*m,0,1),u),u.distanceToSquared(U)>1e-6&&d.lookAt(u)};b(0);function y(_){if(_=Ne(_,0,o.length-1),_===p&&!v){e(o[_]);return}g=!0,v?.cancel();const U=o[_],R=f,P=Math.abs(U.u-R)*a;m=U.u>=R?1:-1,p=_,t.follow(d,"drone"),s({driving:!0,index:_,total:o.length,park:U});const I=yi()?.3:Ne(P/28,1.4,7);v=or({duration:I,ease:Ss,onUpdate:M=>{f=R+(U.u-R)*M,b(f)},onDone:()=>{v=null,s({driving:!1,index:_,total:o.length,park:U})}})}return{car:d,parks:o,get active(){return g},get index(){return p},get driving(){return!!v},next(){y(p+1)},prev(){y(Math.max(0,p-1))},go:y,jumpTo(_){const U=o.findIndex(R=>R.id===_);U<0||(v?.cancel(),v=null,p=U,f=o[U].u,m=1,b(f))},glideTo(_){const U=o.findIndex(M=>M.id===_);if(U<0||U===p&&!v)return;v?.cancel();const R=o[U],P=f;m=R.u>=P?1:-1,p=U;const I=yi()?.3:Ne(Math.abs(R.u-P)*a/45,1.2,4);v=or({duration:I,ease:Ss,onUpdate:M=>{f=P+(R.u-P)*M,b(f)},onDone:()=>{v=null}})},end(){v?.cancel(),v=null,g=!1},setVisible(_){d.visible=_}}}performance.mark("city:start");const ne=n=>document.getElementById(n),Ze=ne("scene"),he={w:innerWidth,h:innerHeight};function hy(){try{const n=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(n.getContext("webgl2")||n.getContext("webgl")))}catch{return!1}}if(!hy())throw window.__cityFallback?.("webgl"),new Error("WebGL is not available: showing the static CV instead");Kd(ne("title"),Wd);window.__titleShown=!0;ne("loading").classList.add("done");await new Promise(n=>requestAnimationFrame(()=>setTimeout(n,0)));const Tl=()=>innerWidth<=860,Cn=new Av({canvas:Ze,antialias:!0,alpha:!0,powerPreference:"high-performance"});Cn.setPixelRatio(Math.min(devicePixelRatio,2));Cn.setSize(he.w,he.h,!1);Cn.outputColorSpace=Me;Cn.toneMapping=sd;Cn.toneMappingExposure=1.05;Cn.shadowMap.enabled=!0;Cn.shadowMap.type=nd;Cn.debug.checkShaderErrors=!1;const dy="#f3d6b8",Rn=new Cv;Rn.fog=new ql(dy,500,1400);const Qd=new p_("#ffe7cc","#55708c",1.7);Rn.add(Qd);const ii=new v_("#ffc489",3.6);ii.position.set(230,120,90);ii.castShadow=!0;ii.shadow.mapSize.set(Tl()?1024:2048,Tl()?1024:2048);Object.assign(ii.shadow.camera,{left:-260,right:260,top:170,bottom:-170,near:10,far:700});ii.shadow.camera.updateProjectionMatrix();ii.shadow.bias=-4e-4;ii.shadow.normalBias=.6;Rn.add(ii);performance.mark("city:renderer");const si=Y_(Rn);performance.mark("city:terrain");const Mr=cx(Rn);performance.mark("city:buildings");const{city:rc,byId:ze}=Mr,tu=Ux(ne("badges")),Wi=ux(Mr,tu),Is=mx(Rn,y_),Kt=Lx(Ze);Kt.resize(he.w,he.h);const fi=Is.vehicleData,Ds=fi&&{id:"dhl",after:fi.depot,order:0,yearLabel:"MBA project · 2026",name:fi.panel.name,role:fi.panel.role,dates:fi.panel.dates,story:fi.panel.story,highlights:[{text:fi.panel.note}],tags:["Logistics","Market research","Consulting"]},Xi=Object.fromEntries(br.map(n=>[n.id,n])),Ce={selected:null,cityYear:ic,exploring:!1},uy=Ue.find(n=>n.cta),bi=zx(ne("claim"),ne("claim-actions"),uy?.cta,Oo),ve=Bx({el:ne("panel"),body:ne("panel-body"),closeBtn:ne("panel-close"),onClose:()=>Si(),onNav:n=>Il(n),onClaim:()=>bi.open(),onCert:n=>Wi.highlight(n),onCase:n=>{oc(n?`case/${n}`:""),n&&ac.caseStudy(Fo.find(t=>t.id===n)?.title)}});function oc(n){const t=location.pathname+location.search+(n?`#${n}`:"");try{history.replaceState(null,"",t)}catch{}}const tn=Vx(ne("quick"),{person:Oo,stops:Ue,extras:[...br,...Ds?[Ds]:[]],onClaim:()=>bi.open(),onGame:n=>Ws(n),onCase:n=>{tn.close(),Er(n)},onClose:()=>tn.close()}),vr=Kx(ze);let Al=null;const Ve=Ix(ne("labels"),rc,n=>ei(n),{onHover:n=>{Al=n,vr.set(n||Ln)}}),Fn=window.__pitch&&window.__pitch.company?window.__pitch:null,ac=oy(Fn?.slug);{const n=tn.open.bind(tn);tn.open=(...t)=>(ac.cv(),n(...t))}const La=Rn.getObjectByName("islet-mit-sloan"),lc=Jx(rc,{plot:!!Fn,extras:La?[{id:"mit-sloan",parent:La,x:4,y:8.36,z:.5,scale:.78,shown:()=>La.visible}]:[]}),Vs=ty(rc,{lights:[Qd,ii]});Ve.setOccluders(si.islandGroups.map(n=>n.children[0]));const qi=ue.findIndex(n=>n.place==="lisbon"),fy=S("button.label.vehicle",{"aria-label":"DHL Express, MBA consulting project (plane)",onclick:n=>{n.stopPropagation(),zo()}},S("span.n",{text:"✈"}),S("span.t",{text:fi?.label?.replace("✈ ","")||"DHL project"}));for(const n of br){const t=si.extras?.[n.id];if(!t)continue;const e=S("button.label.islet",{"aria-label":`${n.name}, ${n.location}`,onclick:i=>{i.stopPropagation(),wr(n.id)}},S("span.n",{text:"★"}),S("span.t",{text:`${n.name} · Boston`}));Ve.addExtra(e,i=>t.anchor(i),()=>Ce.selected===n.id||Ce.cityYear<2026.4,qi)}Is.plane&&Ve.addExtra(fy,n=>{Is.plane.getWorldPosition(n),n.y+=7},()=>Ce.selected==="dhl",qi);const Ia=()=>{},_r=cy({scene:Rn,rig:Kt,onArrive:Ia,onLeave:Ia,onStatus:Ia}),Cl={...Object.fromEntries(Ue.map(n=>[n.id,n.style==="empty-plot"?"Your office":n.name.replace(" 🚧","").replace("The Lisbon MBA · Católica | Nova","The Lisbon MBA")])),...Object.fromEntries(br.map(n=>[n.id,n.name])),...Ds?{dhl:"DHL Express"}:{}},Gs=Xx(),eu=(n,t,e)=>setTimeout(()=>{const i=document.querySelector(n);i&&t()&&!ve.isOpen&&Gs.show(i.getBoundingClientRect().top,e)},1500),Ut=qx({rig:Kt,titleEl:ne("title"),storyEl:ne("story"),title:Wd,chapters:Hs,names:Cl,onOpen:n=>n==="dhl"?zo():Xi[n]?wr(n):ei(n),onClaim:()=>bi.open(),onCV:()=>tn.open(),onGame:n=>Ws(n),onFlyby:()=>Qe.start(),onExplore:()=>Xs(),onChapter:n=>{Gs.hide(),n>=0&&eu("#story .story-col",()=>Ut.mode==="story"&&Ut.index===n),Ce.exploring=!1,Sr(),ve.isOpen&&Si({quiet:!0}),n<0?_r.jumpTo(Ue[0].id):_r.glideTo(ue[n].stops[0])},blocked:()=>ve.isOpen||tn.isOpen||bi.isOpen||En.isOpen||ar?.isOpen}),Co=Gx(ne("eras"),Hs,n=>Ut.go(n),{onArcade:n=>Ws(n)}),En=$x({data:w_,person:Oo,onCase:(n,t)=>{tn.close(),Er(n)||ei(t)},onExplore:()=>{tn.close(),Xs()},onClose:()=>my()}),Da=ne("btn-call");En.available?Da.addEventListener("click",()=>Ws(Da)):Da.hidden=!0;const ao=ue.findIndex(n=>n.place==="next"),dn=jx({screen:"INSERT COIN",sub:"Make the call"});if(En.available&&ao>=0){const n=ue[ao];dn.position.set(-12,n.top,n.pathZ-n.z-5),dn.rotation.y=.35;const t=new ht(new oe(5.5,8,4.5),new Jt({visible:!1}));t.position.set(0,4,0),t.userData.boothId="make-the-call",dn.add(t),dn.userData.hit=t,si.islandGroups[ao].add(dn);const e=S("button.label.booth",{"aria-label":"Make the call: a 5-question game",onclick:i=>{i.stopPropagation(),Ws(e)}},S("span.n",{text:"?"}),S("span.t",{text:"Arcade: Make the call"}));Ve.addExtra(e,i=>{dn.getWorldPosition(i),i.y+=8},()=>!1,ao)}let Rl=null;function py(){dn.updateMatrixWorld(!0);const n=new T;dn.userData.screen.getWorldPosition(n);const t=new T(0,0,1).applyQuaternion(dn.getWorldQuaternion(new ti)),e=Kt.camera.aspect<.9?46:26;return{pos:n.clone().addScaledVector(t,e).add(new T(0,e*.42,0)),target:n}}function Ws(n){if(!En.available||En.isOpen)return;if(tn.isOpen||!dn.parent){En.open(n);return}Rl={mode:Ut.mode,index:Ut.index},Qe.active&&Qe.stop("opened"),ve.isOpen&&Si({quiet:!0}),Gs.hide(),Ut.mode!=="off"&&Ut.hide(),Ce.exploring=!0,Sr();const{pos:t,target:e}=py();document.body.classList.add("to-arcade"),Kt.focusPoint(t,e,()=>{document.body.classList.remove("to-arcade"),En.open(n)},1.6)}function my(){const n=Rl;Rl=null,n&&(n.mode==="title"?Ut.showTitle():n.mode==="story"&&Ut.go(n.index))}const mo=Zx();{const n=ze["lara-hotel"],t=n.place.island;mo.position.set(n.place.pos.x-n.place.side*2-t.x,t.top,n.place.pos.z+11-t.z),si.islandGroups[t.index].add(mo);const e=S("a.label.buildlog",{href:"how-built/","aria-label":"Build log: how this city and Lará were built with AI",onclick:i=>i.stopPropagation()},S("span.n",{text:"✦"}),S("span.t",{text:"Build log"}));Ve.addExtra(e,i=>{mo.getWorldPosition(i),i.y+=7.5},()=>!1,t.index)}const Pl=ne("btn-mode");function Sr(){Pl.replaceChildren(S("span.long",{text:Ce.exploring?"‹ Back to the story":"Explore freely"}),S("span.short",{text:Ce.exploring?"‹ Story":"Explore"})),Pl.title=Ce.exploring?"Return to the chapter you were on":"Move around the city yourself"}let cc=0;Pl.addEventListener("click",()=>Ce.exploring?Ut.go(cc):Xs());function Xs(){Gs.hide(),Ut.index>=0&&(cc=Ut.index),ve.isOpen&&Si({quiet:!0}),Ut.hide(),Ce.exploring=!0,Sr(),Kt.overview()}function Us(n){const t=P_[n];return t?t.index:n==="dhl"||Xi[n]?qi:-1}function gy(n){const t=Ue.findIndex(i=>i.id===n),e=Hs[Us(n)];return t<0?{chapter:e}:{chapter:e,prev:Ue[t-1]&&Cl[Ue[t-1].id],next:Ue[t+1]&&Cl[Ue[t+1].id],position:`${t+1} of ${Ue.length}`}}function ko(){if(ve.isOpen)if(Tl()){const n=ne("panel").getBoundingClientRect().height||he.h*.5;Kt.setPanelOffset(0,n*.5)}else{const n=ne("panel").getBoundingClientRect().width||420;Kt.setPanelOffset((n+24)*.5,0)}}function hc(n){Gs.hide(),Ut.mode==="title"&&Ut.go(Math.max(0,Us(n))),Ut.mode==="story"&&(cc=Math.max(0,Us(n)),Ut.away(!0))}const nu="manu-city-visited",zi=new Set((()=>{try{const n=JSON.parse(Ls(nu)||"[]");return Array.isArray(n)?n.filter(t=>typeof t=="string"):[]}catch{return[]}})()),Zh=Ue.filter(n=>n.career).length,iu=ne("btn-reset");iu.addEventListener("click",()=>{Ut.mode==="story"?Ut.frame():Ut.mode==="title"?Ut.showTitle():Kt.overview()});const Ns=ne("btn-buildings"),Bo=ne("btn-ai"),xr=ne("ai-legend");function dc(n){vr.set(null),Vs.setMode(n),lc.setBeams(!n),document.body.classList.toggle("ai-mode",n),Ve.setAiOnly(n),Bo.setAttribute("aria-pressed",String(n)),xr.hidden=!n,n&&(ve.isOpen&&Si({quiet:!0}),Ut.mode!=="off"?Xs():Kt.overview())}Bo.addEventListener("click",()=>dc(!Vs.on));xr.querySelector("[data-ai-off]").addEventListener("click",()=>{dc(!1),Bo.focus()});function su(){Ve.setVisited(zi),lc.setVisited(zi);const n=Ue.filter(t=>t.career&&zi.has(t.id)).length;Ns.replaceChildren("Buildings",S("small",{text:`Visited ${n} of ${Zh}`})),Ns.setAttribute("aria-label",`Buildings list. You've visited ${n} of ${Zh} career buildings.`)}function Ll(n){!ze[n]&&!Xi[n]||zi.has(n)||(zi.add(n),Ls(nu,JSON.stringify([...zi])),su())}const ar=ey({stops:Ue,chapters:Hs,extras:[...br.map(n=>({id:n.id,name:`${n.name} · Boston`,hook:n.role,island:qi})),...Ds?[{id:"dhl",name:"DHL Express (the plane)",hook:"MBA consulting project · Confidential",island:qi}]:[]],onPick:n=>n==="dhl"?zo():Xi[n]?wr(n):ei(n)});Ns.addEventListener("click",()=>ar.open(zi,Ns));const Qe=iy({stops:Ue,byId:ze,rig:Kt,highlighter:vr,labels:Ve,onStart:()=>{Gs.hide(),ve.isOpen&&Si({quiet:!0}),Ut.hide(),Ce.exploring=!0,Sr()},onEnd:n=>{n!=="opened"&&Kt.overview()}});function vy(){const n=Fo.find(t=>t.id===Fn.suggestedCase);ve.openContent("your-plot",sy(Fn,{person:Oo,caseTitle:n&&`${n.title} (${ze[n.buildingId]?.stop.name.replace(" 🚧","")||""})`,onCase:n?()=>Er(n.id):null}))}function ei(n,{hotCert:t,caseId:e,tab:i}={}){Qe.active&&Qe.stop("opened"),!i&&Vs.on&&ze[n]?.stop.ai&&(i="cases");const s=ze[n];if(!s||s.progress<=0)return;const r=ve.isOpen&&ve.currentId===n&&!e;hc(n),_r.jumpTo(n),Ce.selected=n,Ll(n),Kt.focusBuilding(s),Fn&&n==="your-plot"?(vy(),Ll(n)):r&&t!=null?(ne("panel-body").querySelectorAll(".certs li").forEach(o=>o.classList.toggle("hot",Number(o.dataset.cert)===t)),ne("panel-body").querySelector(`[data-cert="${t}"]`)?.scrollIntoView({block:"nearest",behavior:"smooth"})):(ve.open(s.stop,{hotCert:t,nav:gy(n),caseId:e,tab:i}),Wi.start(n)),t!=null&&Wi.highlight(t),Ve.setFocused(n),requestAnimationFrame(ko)}function zo(){Ds&&(hc("dhl"),Ce.selected="dhl",Wi.stop(),Ve.setFocused(null),ve.open(Ds,{nav:{chapter:Hs[qi]}}),Kt.follow(Is.plane,"side"),requestAnimationFrame(ko))}function wr(n){const t=Xi[n],e=si.extras?.[n];if(!t||!e)return;hc(n),_r.jumpTo(n),Ce.selected=n,Ll(n),Wi.stop(),Ve.setFocused(null),ve.open(t,{nav:{chapter:Hs[qi]}});const{pos:i,target:s}=e.focus();Kt.focusPoint(i,s),requestAnimationFrame(ko)}function Si({quiet:n=!1}={}){const t=Ce.selected;if(location.hash.startsWith("#case/")&&oc(""),Ce.selected=null,ve.close(),Wi.stop(),Ve.setFocused(null),Kt.setPanelOffset(0,0),!n)if(Ut.mode==="story"){const e=t?Math.max(0,Us(t)):Ut.index;Ut.minimised?Ut.go(e,{keepMin:!0,still:!0}):Ut.go(e)}else Ut.mode==="title"?Ut.resume():Kt.overview()}function Il(n){const t=Ue.findIndex(i=>i.id===Ce.selected),e=Ue[t<0?0:t+n];e&&ei(e.id)}ne("btn-home").addEventListener("click",()=>{ve.isOpen&&Si({quiet:!0}),Ut.showTitle()});ne("btn-claim").addEventListener("click",()=>bi.open());ne("btn-quick").addEventListener("click",()=>tn.open(Ce.selected));addEventListener("keydown",n=>{if(n.target.closest?.("input, textarea")||n.target.closest?.('[role="tab"]')&&n.key.startsWith("Arrow"))return;if(n.key==="Escape")return Qe.active?Qe.stop():En.isOpen?En.close():ar.isOpen?ar.close():bi.isOpen?bi.close():tn.isOpen?tn.close():ve.isOpen?Si():Vs.on?dc(!1):Ce.exploring?Kt.overview():void 0;if(bi.isOpen||tn.isOpen||En.isOpen||ar.isOpen||Qe.active)return;const t=["ArrowDown","ArrowRight","PageDown"," "].includes(n.key),e=["ArrowUp","ArrowLeft","PageUp"].includes(n.key);if(!(!t&&!e)&&!(n.target.closest?.("button, a")&&n.key===" ")){if(n.preventDefault(),ve.isOpen){n.key==="ArrowRight"&&Il(1),n.key==="ArrowLeft"&&Il(-1);return}Ut.mode!=="off"&&Ut.step(t?1:-1)}});addEventListener("wheel",n=>{n.ctrlKey&&(n.preventDefault(),n.target!==Ze&&!n.target.closest?.("#panel, #quick, .modal")&&Ze.dispatchEvent(new WheelEvent("wheel",n)))},{passive:!1});let Ro=null;addEventListener("gesturestart",n=>{n.preventDefault(),!Kt.locked&&!n.target.closest?.("#panel, #quick, .modal")&&(Ro=Kt.distance())},{passive:!1});addEventListener("gesturechange",n=>{n.preventDefault(),Ro!=null&&Kt.zoomLive(Ro,n.scale)},{passive:!1});addEventListener("gestureend",n=>{n.preventDefault(),Ro=null},{passive:!1});for(const n of[ne("labels"),ne("eras")])n.addEventListener("wheel",t=>{Ut.mode==="off"&&(t.preventDefault(),t.stopPropagation(),Ze.dispatchEvent(new WheelEvent("wheel",t)))},{passive:!1});Ze.addEventListener("pointerdown",()=>Kt.interrupt(),{capture:!0});for(const n of["pointerdown","keydown","wheel","touchstart"])addEventListener(n,Z_,{once:!0,passive:!0});const ru=ne("topbar");ru.tabIndex=-1;Ze.addEventListener("pointerup",()=>ru.focus({preventScroll:!0}));Ze.addEventListener("wheel",()=>Kt.interrupt(),{capture:!0,passive:!0});const Jh=new Gd,Kh=new dt;let ms=null,Ln=null,lr=null;function ou(n,t){const e=Ze.getBoundingClientRect();Kh.set((n-e.left)/e.width*2-1,-((t-e.top)/e.height)*2+1),Jh.setFromCamera(Kh,Kt.camera);const i=Jh.intersectObjects([...Mr.pickables,...Is.pickables,...si.pickables||[],...dn.userData.hit?[dn.userData.hit]:[],mo.userData.hit],!1);if(i.some(s=>s.object.userData.boothId))return{booth:!0};for(const s of i){const r=s.object;if(r.userData.buildLog)return{buildLog:!0};if(r.userData.vehicleId)return{vehicle:r.userData.vehicleId};if(r.userData.extraId)return{extra:r.userData.extraId};const o=r.userData.stopId;if(!o||ze[o].progress<=0)continue;const a=i.find(l=>l.object.userData.stopId===o&&l.object.userData.certIndex!==void 0&&l.object.parent?.visible);return{id:o,cert:a?.object.userData.certIndex}}return null}Ze.addEventListener("pointerdown",n=>{ms={x:n.clientX,y:n.clientY,t:performance.now()}});Ze.addEventListener("pointerup",n=>{if(!ms)return;const t=Math.hypot(n.clientX-ms.x,n.clientY-ms.y),e=performance.now()-ms.t<600;if(ms=null,t>7||!e)return;const i=ou(n.clientX,n.clientY);Ut.mode==="title"&&Xs(),i?.buildLog?location.href="how-built/":i?.booth?Ws():i?.vehicle?zo():i?.extra?wr(i.extra):i?.id?ei(i.id,{hotCert:i.cert}):Ut.minimise()});Ze.addEventListener("pointermove",n=>{n.pointerType==="mouse"&&(lr={x:n.clientX,y:n.clientY})});Ze.addEventListener("pointerleave",()=>{lr=null});function _y(){if(!lr||Kt.flying){Ln&&(ze[Ln]&&(ze[Ln].hoverTarget=0),Ln=null,Ve.setHot(null),Al||vr.set(null)),Ze.classList.remove("hovering");return}const n=ou(lr.x,lr.y),t=n?.id||null;Ze.classList.toggle("hovering",!!n),t!==Ln&&(Ln&&ze[Ln]&&(ze[Ln].hoverTarget=0),Ln=t,t&&(ze[t].hoverTarget=1),Ve.setHot(t),Al||vr.set(t))}function xy(n){Ce.cityYear=n,si.setYear(n),_r.setVisible(n>=2016),Mr.setYear(n)}let go=600;function Ho(){he.w=innerWidth,he.h=innerHeight,Cn.setPixelRatio(Math.min(devicePixelRatio,2)),Cn.setSize(he.w,he.h,!1),Kt.resize(he.w,he.h),si.clouds.visible=he.w/he.h>.9,document.body.classList.toggle("tall",he.w/he.h<.9);const{pos:n,target:t}=Kt.overviewPose();go=n.distanceTo(t),Rn.fog.near=go*.75,Rn.fog.far=Math.min(go*1.9,1480),Ve.invalidate(),Co.invalidate(),vo=null,ve.isOpen?ko():Ut.frame()}addEventListener("resize",Ho);const Qh=new __;let Ui=0,yy=0;function by(){const n=[],t=(e,i={})=>{if(!e||e.hidden||e.closest("[hidden]"))return;const s=e.getBoundingClientRect();s.width&&n.push({left:s.left-(i.l||0),right:s.right+(i.r||0),top:s.top-(i.t||0),bottom:s.bottom+(i.b||0)})};if(t(ne("topbar"),{b:6}),Ut.mode==="title"){const e=document.querySelector(".title-inner");if(he.w>860&&e){const i=e.getBoundingClientRect();n.push({left:-9999,right:i.right+28,top:-9999,bottom:9999})}else t(e,{t:24})}return Ut.mode==="story"&&(t(document.querySelector("#story:not(.away) .story-col")),t(document.querySelector("#story:not(.away) .story-rail"),{l:8,r:8,t:8,b:8})),ve.isOpen&&t(ne("panel")),t(Ns),t(xr,{l:4,r:4,t:4,b:4}),he.w<=860&&t(Bo),n}let My=0,vo=null,td="",au=1/0,lu=0;function Sy(){Co.visible=Ce.exploring&&!ve.isOpen&&!Vs.on&&!Qe.active&&Kt.distance()>go*.8||Ut.mode==="title"&&he.w<=860&&!ve.isOpen&&!Qe.active;const n=`${Ut.mode}|${Ut.index}|${Ut.minimised}|${ve.isOpen}|${xr.hidden}|${Qe.active}|${he.w}x${he.h}|${document.querySelector("#story")?.className}`;if(n!==td||My++%12===0||!vo){vo=by(),td=n;const t=Ut.mode==="title"&&he.w<=860&&document.querySelector("#title .title-inner");au=t?t.getBoundingClientRect().top-12:1/0,lu=ne("topbar").getBoundingClientRect().bottom}Ve.setView({hidden:Co.visible,island:Ut.mode==="story"&&!Ut.minimised?Ut.index:null,avoidRects:vo}),document.body.classList.toggle("labels-compact",Ut.mode==="title"&&he.w<=860),document.body.classList.toggle("title-mode",Ut.mode==="title"),document.body.classList.toggle("flyby-on",Qe.active),document.body.classList.toggle("exploring",Ut.mode==="off"),document.body.classList.toggle("card-open",ve.isOpen),xr.classList.toggle("behind",ve.isOpen),Ns.hidden=Ut.mode==="story"&&he.w<=860,iu.hidden=!(Ut.mode==="off"||Ut.minimised)||ve.isOpen||Qe.active||En.isOpen}function Dl(){if(document.documentElement.classList.contains("no-city")){Qh.getDelta(),requestAnimationFrame(Dl);return}(innerWidth!==he.w||innerHeight!==he.h)&&Ho();const n=Qh.getDelta(),t=Math.min(.05,n);Ui+=t,T_(Math.min(.25,n)),si.update(t,Ui,Kt.camera),Is.update(t,Ui),Wi.update(t,Ui),lc.update(Ui),Qe.update(t),Vs.update(Ui),Mr.update(t,Ui,Kt.camera),Kt.update(t,he),(yy++&1)===0&&_y(),Cn.render(Rn,Kt.camera),Sy(),Ve.update(Kt.camera,he),Co.update(Kt.camera,he,au,lu),tu.update(Kt.camera,he),requestAnimationFrame(Dl)}function Er(n){const t=Fo.find(e=>e.id===n);return!t||!ze[t.buildingId]?!1:(ac.caseStudy(t.title),Ut.mode!=="off"&&Ut.go(Math.max(0,Us(t.buildingId))),ei(t.buildingId,{caseId:n}),oc(`case/${n}`),!0)}addEventListener("hashchange",()=>{const n=location.hash.match(/^#case\/([\w-]+)$/);n&&Er(n[1])});if(Fn){const n=ze["your-plot"],t=n?.parts.roadSign;if(t?.userData.canvas){const s=t.userData.canvas;To(s.getContext("2d"),{text:"The road's paved to mid-December 2026.",sub:`The next stretch leads to ${Fn.company} →`,w:s.width,h:s.height,bg:"#243447",fg:"#ffffff"}),t.userData.texture.needsUpdate=!0}const e=n?.parts.hereSign;if(e?.userData.canvas){const s=e.userData.canvas;To(s.getContext("2d"),{text:`${Fn.company.toUpperCase()} HERE`,w:s.width,h:s.height,size:84,bg:"#ffffff",fg:"#243447",border:"#ff7a2f"}),e.userData.texture.needsUpdate=!0}const i=[...document.querySelectorAll("#labels .label")].find(s=>/Your office/.test(s.textContent));i&&(i.querySelector(".t").textContent=`${Fn.company} →`,i.dataset.pitch="1")}su();Ho();Sr();const yn=location.hash.replace("#","");xy(ic);const{pos:wy,target:cu}=Kt.overviewPose();Kt.camera.position.copy(wy);Kt.controls.target.copy(cu);Kt.camera.lookAt(cu);performance.mark("city:ui");Dl();performance.mark("city:first-frame");requestAnimationFrame(()=>{window.__cityReady=!0,document.documentElement.classList.add("city-ready");const n=document.querySelectorAll("#cv-static a, #cv-static button"),t=()=>{const i=document.documentElement.classList.contains("no-city");n.forEach(s=>i?s.removeAttribute("tabindex"):s.setAttribute("tabindex","-1"))};if(t(),new MutationObserver(t).observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),document.getElementById("cvs-open-city")?.addEventListener("click",()=>{document.documentElement.classList.remove("no-city"),Ho()}),setTimeout(()=>ne("loading")?.remove(),600),Ut.showTitle(),eu("#title .title-inner",()=>Ut.mode==="title"&&!ne("title").classList.contains("tucked"),"Tap an island to open its chapter"),Fn){Xs(),ei("your-plot");return}const e=yn.match(/^case\/([\w-]+)$/);if(e){Er(e[1]);return}yn&&(ze[yn]||Xi[yn])&&Ut.go(Math.max(0,Us(yn))),yn&&ze[yn]?ei(yn):yn&&Xi[yn]&&wr(yn)});
