(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qa="170",ln={ROTATE:0,DOLLY:1,PAN:2},En={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yu=0,Bl=1,Mu=2,mh=1,gh=2,Hn=3,Yn=0,je=1,Ne=2,ri=0,os=1,zl=2,kl=3,Hl=4,Su=5,wi=100,bu=101,wu=102,Eu=103,Tu=104,Au=200,Cu=201,Ru=202,Pu=203,sa=204,ra=205,Lu=206,Du=207,Iu=208,Uu=209,Nu=210,Ou=211,Fu=212,Bu=213,zu=214,oa=0,aa=1,la=2,ps=3,ca=4,ha=5,ua=6,da=7,_h=0,ku=1,Hu=2,oi=0,Vu=1,Gu=2,Wu=3,vh=4,Xu=5,qu=6,Yu=7,xh=300,ms=301,gs=302,fa=303,pa=304,oo=306,jr=1e3,Ti=1001,ma=1002,en=1003,$u=1004,hr=1005,Tn=1006,_o=1007,Ai=1008,$n=1009,yh=1010,Mh=1011,Xs=1012,tl=1013,Ri=1014,An=1015,nr=1016,el=1017,nl=1018,_s=1020,Sh=35902,bh=1021,wh=1022,vn=1023,Eh=1024,Th=1025,as=1026,vs=1027,il=1028,sl=1029,Ah=1030,rl=1031,ol=1033,Vr=33776,Gr=33777,Wr=33778,Xr=33779,ga=35840,_a=35841,va=35842,xa=35843,ya=36196,Ma=37492,Sa=37496,ba=37808,wa=37809,Ea=37810,Ta=37811,Aa=37812,Ca=37813,Ra=37814,Pa=37815,La=37816,Da=37817,Ia=37818,Ua=37819,Na=37820,Oa=37821,qr=36492,Fa=36494,Ba=36495,Ch=36283,za=36284,ka=36285,Ha=36286,ju=3200,Zu=3201,Rh=0,Ju=1,si="",ye="srgb",Ss="srgb-linear",ao="linear",oe="srgb",zi=7680,Vl=519,Ku=512,Qu=513,td=514,Ph=515,ed=516,nd=517,id=518,sd=519,Gl=35044,Wl="300 es",Wn=2e3,Zr=2001;class Ii{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xl=1234567;const ls=Math.PI/180,qs=180/Math.PI;function Ui(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]).toLowerCase()}function Pe(n,t,e){return Math.max(t,Math.min(e,n))}function al(n,t){return(n%t+t)%t}function rd(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function od(n,t,e){return n!==t?(e-n)/(t-n):0}function zs(n,t,e){return(1-e)*n+e*t}function ad(n,t,e,i){return zs(n,t,1-Math.exp(-e*i))}function ld(n,t=1){return t-Math.abs(al(n,t*2)-t)}function cd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function hd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function ud(n,t){return n+Math.floor(Math.random()*(t-n+1))}function dd(n,t){return n+Math.random()*(t-n)}function fd(n){return n*(.5-Math.random())}function pd(n){n!==void 0&&(Xl=n);let t=Xl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function md(n){return n*ls}function gd(n){return n*qs}function _d(n){return(n&n-1)===0&&n!==0}function vd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function xd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function yd(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),d=o((t-i)/2),f=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function es(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ge(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ys={DEG2RAD:ls,RAD2DEG:qs,generateUUID:Ui,clamp:Pe,euclideanModulo:al,mapLinear:rd,inverseLerp:od,lerp:zs,damp:ad,pingpong:ld,smoothstep:cd,smootherstep:hd,randInt:ud,randFloat:dd,randFloatSpread:fd,seededRandom:pd,degToRad:md,radToDeg:gd,isPowerOfTwo:_d,ceilPowerOfTwo:vd,floorPowerOfTwo:xd,setQuaternionFromProperEuler:yd,normalize:Ge,denormalize:es};class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Pe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,i,s,r,o,a,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],v=s[1],y=s[4],x=s[7],U=s[2],C=s[5],R=s[8];return r[0]=o*_+a*v+l*U,r[3]=o*m+a*y+l*C,r[6]=o*p+a*x+l*R,r[1]=c*_+h*v+u*U,r[4]=c*m+h*y+u*C,r[7]=c*p+h*x+u*R,r[2]=d*_+f*v+g*U,r[5]=d*m+f*y+g*C,r[8]=d*p+f*x+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(vo.makeScale(t,e)),this}rotate(t){return this.premultiply(vo.makeRotation(-t)),this}translate(t,e){return this.premultiply(vo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vo=new qt;function Lh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function $s(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Md(){const n=$s("canvas");return n.style.display="block",n}const ql={};function Fs(n){n in ql||(ql[n]=!0,console.warn(n))}function Sd(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function bd(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function wd(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const te={enabled:!0,workingColorSpace:Ss,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===oe&&(n.r=Xn(n.r),n.g=Xn(n.g),n.b=Xn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===oe&&(n.r=cs(n.r),n.g=cs(n.g),n.b=cs(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===si?ao:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Xn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function cs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Yl=[.64,.33,.3,.6,.15,.06],$l=[.2126,.7152,.0722],jl=[.3127,.329],Zl=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jl=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[Ss]:{primaries:Yl,whitePoint:jl,transfer:ao,toXYZ:Zl,fromXYZ:Jl,luminanceCoefficients:$l,workingColorSpaceConfig:{unpackColorSpace:ye},outputColorSpaceConfig:{drawingBufferColorSpace:ye}},[ye]:{primaries:Yl,whitePoint:jl,transfer:oe,toXYZ:Zl,fromXYZ:Jl,luminanceCoefficients:$l,outputColorSpaceConfig:{drawingBufferColorSpace:ye}}});let ki;class Ed{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ki===void 0&&(ki=$s("canvas")),ki.width=t.width,ki.height=t.height;const i=ki.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$s("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Xn(e[i]/255)*255):e[i]=Xn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Td=0;class Dh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Ui(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(xo(s[o].image)):r.push(xo(s[o]))}else r=xo(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function xo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ed.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ad=0;class Fe extends Ii{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,i=Ti,s=Ti,r=Tn,o=Ai,a=vn,l=$n,c=Fe.DEFAULT_ANISOTROPY,h=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Ui(),this.name="",this.source=new Dh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jr:t.x=t.x-Math.floor(t.x);break;case Ti:t.x=t.x<0?0:1;break;case ma:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jr:t.y=t.y-Math.floor(t.y);break;case Ti:t.y=t.y<0?0:1;break;case ma:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=xh;Fe.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,i=0,s=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,x=(f+1)/2,U=(p+1)/2,C=(h+d)/4,R=(u+_)/4,D=(g+m)/4;return y>x&&y>U?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=C/i,r=R/i):x>U?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=C/s,r=D/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=R/r,s=D/r),this.set(i,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cd extends Ii{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Fe(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Dh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends Cd{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ih extends Fe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rd extends Fe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*_,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const U=Math.sqrt(y),C=Math.atan2(U,p*v);m=Math.sin(m*C)/U,a=Math.sin(a*C)/U}const x=a*v;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const U=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=U,c*=U,h*=U,u*=U}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(t=0,e=0,i=0){E.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return yo.copy(this).projectOnVector(t),this.sub(yo)}reflect(t){return this.sub(yo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Pe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yo=new E,Kl=new hi;class di{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,dn):dn.fromBufferAttribute(r,o),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ur.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ur.copy(i.boundingBox)),ur.applyMatrix4(t.matrixWorld),this.union(ur)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rs),dr.subVectors(this.max,Rs),Hi.subVectors(t.a,Rs),Vi.subVectors(t.b,Rs),Gi.subVectors(t.c,Rs),Jn.subVectors(Vi,Hi),Kn.subVectors(Gi,Vi),mi.subVectors(Hi,Gi);let e=[0,-Jn.z,Jn.y,0,-Kn.z,Kn.y,0,-mi.z,mi.y,Jn.z,0,-Jn.x,Kn.z,0,-Kn.x,mi.z,0,-mi.x,-Jn.y,Jn.x,0,-Kn.y,Kn.x,0,-mi.y,mi.x,0];return!Mo(e,Hi,Vi,Gi,dr)||(e=[1,0,0,0,1,0,0,0,1],!Mo(e,Hi,Vi,Gi,dr))?!1:(fr.crossVectors(Jn,Kn),e=[fr.x,fr.y,fr.z],Mo(e,Hi,Vi,Gi,dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Un=[new E,new E,new E,new E,new E,new E,new E,new E],dn=new E,ur=new di,Hi=new E,Vi=new E,Gi=new E,Jn=new E,Kn=new E,mi=new E,Rs=new E,dr=new E,fr=new E,gi=new E;function Mo(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){gi.fromArray(n,r);const a=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),l=t.dot(gi),c=e.dot(gi),h=i.dot(gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Pd=new di,Ps=new E,So=new E;class bs{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Pd.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ps.subVectors(t,this.center);const e=Ps.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ps,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(So.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ps.copy(t.center).add(So)),this.expandByPoint(Ps.copy(t.center).sub(So))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new E,bo=new E,pr=new E,Qn=new E,wo=new E,mr=new E,Eo=new E;class lo{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){bo.copy(t).add(e).multiplyScalar(.5),pr.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(bo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(pr),a=Qn.dot(this.direction),l=-Qn.dot(pr),c=Qn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(bo).addScaledVector(pr,d),f}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);const i=Nn.dot(this.direction),s=Nn.dot(Nn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,i,s,r){wo.subVectors(e,t),mr.subVectors(i,t),Eo.crossVectors(wo,mr);let o=this.direction.dot(Eo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qn.subVectors(this.origin,t);const l=a*this.direction.dot(mr.crossVectors(Qn,mr));if(l<0)return null;const c=a*this.direction.dot(wo.cross(Qn));if(c<0||l+c>o)return null;const h=-a*Qn.dot(Eo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,i,s,r,o,a,l,c,h,u,d,f,g,_,m){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,f,g,_,m)}set(t,e,i,s,r,o,a,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Wi.setFromMatrixColumn(t,0).length(),r=1/Wi.setFromMatrixColumn(t,1).length(),o=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ld,t,Dd)}lookAt(t,e,i){const s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),ti.crossVectors(i,Ke),ti.lengthSq()===0&&(Math.abs(i.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),ti.crossVectors(i,Ke)),ti.normalize(),gr.crossVectors(Ke,ti),s[0]=ti.x,s[4]=gr.x,s[8]=Ke.x,s[1]=ti.y,s[5]=gr.y,s[9]=Ke.y,s[2]=ti.z,s[6]=gr.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],v=i[3],y=i[7],x=i[11],U=i[15],C=s[0],R=s[4],D=s[8],b=s[12],M=s[1],L=s[5],W=s[9],w=s[13],N=s[2],I=s[6],A=s[10],B=s[14],k=s[3],q=s[7],j=s[11],Q=s[15];return r[0]=o*C+a*M+l*N+c*k,r[4]=o*R+a*L+l*I+c*q,r[8]=o*D+a*W+l*A+c*j,r[12]=o*b+a*w+l*B+c*Q,r[1]=h*C+u*M+d*N+f*k,r[5]=h*R+u*L+d*I+f*q,r[9]=h*D+u*W+d*A+f*j,r[13]=h*b+u*w+d*B+f*Q,r[2]=g*C+_*M+m*N+p*k,r[6]=g*R+_*L+m*I+p*q,r[10]=g*D+_*W+m*A+p*j,r[14]=g*b+_*w+m*B+p*Q,r[3]=v*C+y*M+x*N+U*k,r[7]=v*R+y*L+x*I+U*q,r[11]=v*D+y*W+x*A+U*j,r[15]=v*b+y*w+x*B+U*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+_*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-i*o*d+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],v=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,y=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,x=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,U=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,C=e*v+i*y+s*x+r*U;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return t[0]=v*R,t[1]=(_*d*r-u*m*r-_*s*f+i*m*f+u*s*p-i*d*p)*R,t[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*R,t[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*R,t[4]=y*R,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*R,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*R,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*R,t[8]=x*R,t[9]=(g*u*r-h*_*r-g*i*f+e*_*f+h*i*p-e*u*p)*R,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*p+e*a*p)*R,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*f-e*a*f)*R,t[12]=U*R,t[13]=(h*_*s-g*u*s+g*i*d-e*_*d-h*i*m+e*u*m)*R,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*m-e*a*m)*R,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*d+e*a*d)*R,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,v=l*c,y=l*h,x=l*u,U=i.x,C=i.y,R=i.z;return s[0]=(1-(_+p))*U,s[1]=(f+x)*U,s[2]=(g-y)*U,s[3]=0,s[4]=(f-x)*C,s[5]=(1-(d+p))*C,s[6]=(m+v)*C,s[7]=0,s[8]=(g+y)*R,s[9]=(m-v)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Wi.set(s[0],s[1],s[2]).length();const o=Wi.set(s[4],s[5],s[6]).length(),a=Wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],fn.copy(this);const c=1/r,h=1/o,u=1/a;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,e.setFromRotationMatrix(fn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Wn){const l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let f,g;if(a===Wn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Zr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Wn){const l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),d=(e+t)*c,f=(i+s)*h;let g,_;if(a===Wn)g=(o+r)*u,_=-2*u;else if(a===Zr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Wi=new E,fn=new ce,Ld=new E(0,0,0),Dd=new E(1,1,1),ti=new E,gr=new E,Ke=new E,Ql=new ce,tc=new hi;class Cn{constructor(t=0,e=0,i=0,s=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ql.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ql,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tc.setFromEuler(this),this.setFromQuaternion(tc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class ll{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Id=0;const ec=new E,Xi=new hi,On=new ce,_r=new E,Ls=new E,Ud=new E,Nd=new hi,nc=new E(1,0,0),ic=new E(0,1,0),sc=new E(0,0,1),rc={type:"added"},Od={type:"removed"},qi={type:"childadded",child:null},To={type:"childremoved",child:null};class _e extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new E,e=new Cn,i=new hi,s=new E(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new qt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.premultiply(Xi),this}rotateX(t){return this.rotateOnAxis(nc,t)}rotateY(t){return this.rotateOnAxis(ic,t)}rotateZ(t){return this.rotateOnAxis(sc,t)}translateOnAxis(t,e){return ec.copy(t).applyQuaternion(this.quaternion),this.position.add(ec.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nc,t)}translateY(t){return this.translateOnAxis(ic,t)}translateZ(t){return this.translateOnAxis(sc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?_r.copy(t):_r.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Ls,_r,this.up):On.lookAt(_r,Ls,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),Xi.setFromRotationMatrix(On),this.quaternion.premultiply(Xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rc),qi.child=t,this.dispatchEvent(qi),qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Od),To.child=t,this.dispatchEvent(To),To.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rc),qi.child=t,this.dispatchEvent(qi),qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,t,Ud),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,Nd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}_e.DEFAULT_UP=new E(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new E,Fn=new E,Ao=new E,Bn=new E,Yi=new E,$i=new E,oc=new E,Co=new E,Ro=new E,Po=new E,Lo=new be,Do=new be,Io=new be;class an{constructor(t=new E,e=new E,i=new E){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),pn.subVectors(t,e),s.cross(pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){pn.subVectors(s,e),Fn.subVectors(i,e),Ao.subVectors(t,e);const o=pn.dot(pn),a=pn.dot(Fn),l=pn.dot(Ao),c=Fn.dot(Fn),h=Fn.dot(Ao),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(o,Bn.y),l.addScaledVector(a,Bn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Lo.setScalar(0),Do.setScalar(0),Io.setScalar(0),Lo.fromBufferAttribute(t,e),Do.fromBufferAttribute(t,i),Io.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Lo,r.x),o.addScaledVector(Do,r.y),o.addScaledVector(Io,r.z),o}static isFrontFacing(t,e,i,s){return pn.subVectors(i,e),Fn.subVectors(t,e),pn.cross(Fn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),pn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return an.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Yi.subVectors(s,i),$i.subVectors(r,i),Co.subVectors(t,i);const l=Yi.dot(Co),c=$i.dot(Co);if(l<=0&&c<=0)return e.copy(i);Ro.subVectors(t,s);const h=Yi.dot(Ro),u=$i.dot(Ro);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Yi,o);Po.subVectors(t,r);const f=Yi.dot(Po),g=$i.dot(Po);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector($i,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return oc.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(oc,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(i).addScaledVector(Yi,o).addScaledVector($i,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},vr={h:0,s:0,l:0};function Uo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Jt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=te.workingColorSpace){if(t=al(t,1),e=Pe(e,0,1),i=Pe(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Uo(o,r,t+1/3),this.g=Uo(o,r,t),this.b=Uo(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=ye){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){const i=Uh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return te.fromWorkingColorSpace(ke.copy(this),t),Math.round(Pe(ke.r*255,0,255))*65536+Math.round(Pe(ke.g*255,0,255))*256+Math.round(Pe(ke.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(ke.copy(this),e);const i=ke.r,s=ke.g,r=ke.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=ye){te.fromWorkingColorSpace(ke.copy(this),t);const e=ke.r,i=ke.g,s=ke.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(vr);const i=zs(ei.h,vr.h,e),s=zs(ei.s,vr.s,e),r=zs(ei.l,vr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new Jt;Jt.NAMES=Uh;let Fd=0;class ws extends Ii{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Ui(),this.name="",this.blending=os,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sa,this.blendDst=ra,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(i.blending=this.blending),this.side!==Yn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sa&&(i.blendSrc=this.blendSrc),this.blendDst!==ra&&(i.blendDst=this.blendDst),this.blendEquation!==wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class he extends ws{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=_h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new E,xr=new lt;class xn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Gl,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)xr.fromBufferAttribute(this,e),xr.applyMatrix3(t),this.setXY(e,xr.x,xr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=es(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ge(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=es(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=es(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=es(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=es(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),s=Ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),s=Ge(s,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gl&&(t.usage=this.usage),t}}class Nh extends xn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Oh extends xn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class jt extends xn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Bd=0;const sn=new ce,No=new _e,ji=new E,Qe=new di,Ds=new di,Ue=new E;class we extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lh(t)?Oh:Nh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new qt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,i){return sn.makeTranslation(t,e,i),this.applyMatrix4(sn),this}scale(t,e,i){return sn.makeScale(t,e,i),this.applyMatrix4(sn),this}lookAt(t){return No.lookAt(t),No.updateMatrix(),this.applyMatrix4(No.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new jt(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(t){const i=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ds.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(Qe.min,Ds.min),Qe.expandByPoint(Ue),Ue.addVectors(Qe.max,Ds.max),Qe.expandByPoint(Ue)):(Qe.expandByPoint(Ds.min),Qe.expandByPoint(Ds.max))}Qe.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ue));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ue.fromBufferAttribute(a,c),l&&(ji.fromBufferAttribute(t,c),Ue.add(ji)),s=Math.max(s,i.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new E,l[D]=new E;const c=new E,h=new E,u=new E,d=new lt,f=new lt,g=new lt,_=new E,m=new E;function p(D,b,M){c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,b),u.fromBufferAttribute(i,M),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),a[D].add(_),a[b].add(_),a[M].add(_),l[D].add(m),l[b].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let D=0,b=v.length;D<b;++D){const M=v[D],L=M.start,W=M.count;for(let w=L,N=L+W;w<N;w+=3)p(t.getX(w+0),t.getX(w+1),t.getX(w+2))}const y=new E,x=new E,U=new E,C=new E;function R(D){U.fromBufferAttribute(s,D),C.copy(U);const b=a[D];y.copy(b),y.sub(U.multiplyScalar(U.dot(b))).normalize(),x.crossVectors(C,b);const L=x.dot(l[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,L)}for(let D=0,b=v.length;D<b;++D){const M=v[D],L=M.start,W=M.count;for(let w=L,N=L+W;w<N;w+=3)R(t.getX(w+0)),R(t.getX(w+1)),R(t.getX(w+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new E,r=new E,o=new E,a=new E,l=new E,c=new E,h=new E,u=new E;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new xn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ac=new ce,_i=new lo,yr=new bs,lc=new E,Mr=new E,Sr=new E,br=new E,Oo=new E,wr=new E,cc=new E,Er=new E;class ft extends _e{constructor(t=new we,e=new he){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){wr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Oo.fromBufferAttribute(u,t),o?wr.addScaledVector(Oo,h):wr.addScaledVector(Oo.sub(e),h))}e.add(wr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere),yr.applyMatrix4(r),_i.copy(t.ray).recast(t.near),!(yr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(yr,lc)===null||_i.origin.distanceToSquared(lc)>(t.far-t.near)**2))&&(ac.copy(r).invert(),_i.copy(t.ray).applyMatrix4(ac),!(i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,U=y;x<U;x+=3){const C=a.getX(x),R=a.getX(x+1),D=a.getX(x+2);s=Tr(this,p,t,i,c,h,u,C,R,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);s=Tr(this,o,t,i,c,h,u,v,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,U=y;x<U;x+=3){const C=x,R=x+1,D=x+2;s=Tr(this,p,t,i,c,h,u,C,R,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,y=m+1,x=m+2;s=Tr(this,o,t,i,c,h,u,v,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function zd(n,t,e,i,s,r,o,a){let l;if(t.side===je?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Yn,a),l===null)return null;Er.copy(a),Er.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Er);return c<e.near||c>e.far?null:{distance:c,point:Er.clone(),object:n}}function Tr(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Mr),n.getVertexPosition(l,Sr),n.getVertexPosition(c,br);const h=zd(n,t,e,i,Mr,Sr,br,cc);if(h){const u=new E;an.getBarycoord(cc,Mr,Sr,br,u),s&&(h.uv=an.getInterpolatedAttribute(s,a,l,c,u,new lt)),r&&(h.uv1=an.getInterpolatedAttribute(r,a,l,c,u,new lt)),o&&(h.normal=an.getInterpolatedAttribute(o,a,l,c,u,new E),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new E,materialIndex:0};an.getNormal(Mr,Sr,br,d.normal),h.face=d,h.barycoord=u}return h}class le extends we{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(u,2));function g(_,m,p,v,y,x,U,C,R,D,b){const M=x/R,L=U/D,W=x/2,w=U/2,N=C/2,I=R+1,A=D+1;let B=0,k=0;const q=new E;for(let j=0;j<A;j++){const Q=j*L-w;for(let at=0;at<I;at++){const gt=at*M-W;q[_]=gt*v,q[m]=Q*y,q[p]=N,c.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[p]=C>0?1:-1,h.push(q.x,q.y,q.z),u.push(at/R),u.push(1-j/D),B+=1}}for(let j=0;j<D;j++)for(let Q=0;Q<R;Q++){const at=d+Q+I*j,gt=d+Q+I*(j+1),Y=d+(Q+1)+I*(j+1),nt=d+(Q+1)+I*j;l.push(at,gt,nt),l.push(gt,Y,nt),k+=6}a.addGroup(f,k,b),f+=k,d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new le(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function We(n){const t={};for(let e=0;e<n.length;e++){const i=xs(n[e]);for(const s in i)t[s]=i[s]}return t}function kd(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Fh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Hd={clone:xs,merge:We};var Vd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends ws{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vd,this.fragmentShader=Gd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xs(t.uniforms),this.uniformsGroups=kd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Bh extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ni=new E,hc=new lt,uc=new lt;class on extends Bh{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ls*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,hc,uc),e.subVectors(uc,hc)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ls*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zi=-90,Ji=1;class Wd extends _e{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(Zi,Ji,t,e);s.layers=this.layers,this.add(s);const r=new on(Zi,Ji,t,e);r.layers=this.layers,this.add(r);const o=new on(Zi,Ji,t,e);o.layers=this.layers,this.add(o);const a=new on(Zi,Ji,t,e);a.layers=this.layers,this.add(a);const l=new on(Zi,Ji,t,e);l.layers=this.layers,this.add(l);const c=new on(Zi,Ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Wn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Zr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class zh extends Fe{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ms,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Xd extends Pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new zh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new le(5,5,5),r=new ui({name:"CubemapFromEquirect",uniforms:xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:je,blending:ri});r.uniforms.tEquirect.value=e;const o=new ft(s,r),a=e.minFilter;return e.minFilter===Ai&&(e.minFilter=Tn),new Wd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Fo=new E,qd=new E,Yd=new qt;class ii{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Fo.subVectors(i,e).cross(qd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Fo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Yd.getNormalMatrix(t),s=this.coplanarPoint(Fo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new bs,Ar=new E;class cl{constructor(t=new ii,e=new ii,i=new ii,s=new ii,r=new ii,o=new ii){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Wn){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],v=s[13],y=s[14],x=s[15];if(i[0].setComponents(l-r,d-c,m-f,x-p).normalize(),i[1].setComponents(l+r,d+c,m+f,x+p).normalize(),i[2].setComponents(l+o,d+h,m+g,x+v).normalize(),i[3].setComponents(l-o,d-h,m-g,x-v).normalize(),i[4].setComponents(l-a,d-u,m-_,x-y).normalize(),e===Wn)i[5].setComponents(l+a,d+u,m+_,x+y).normalize();else if(e===Zr)i[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Ar.x=s.normal.x>0?t.max.x:t.min.x,Ar.y=s.normal.y>0?t.max.y:t.min.y,Ar.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ar)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kh(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function $d(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class yn extends we{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const v=p*d-o;for(let y=0;y<c;y++){const x=y*u-r;g.push(x,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const y=v+c*p,x=v+c*(p+1),U=v+1+c*(p+1),C=v+1+c*p;f.push(y,x,C),f.push(x,U,C)}this.setIndex(f),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yn(t.width,t.height,t.widthSegments,t.heightSegments)}}var jd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zd=`#ifdef USE_ALPHAHASH
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
#endif`,Jd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ef=`#ifdef USE_AOMAP
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
#endif`,nf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sf=`#ifdef USE_BATCHING
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
#endif`,rf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,of=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,af=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cf=`#ifdef USE_IRIDESCENCE
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
#endif`,hf=`#ifdef USE_BUMPMAP
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
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xf=`#define PI 3.141592653589793
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
} // validated`,yf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mf=`vec3 transformedNormal = objectNormal;
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
#endif`,Sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ef=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Af=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cf=`#ifdef USE_ENVMAP
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
#endif`,Rf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pf=`#ifdef USE_ENVMAP
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
#endif`,Lf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Df=`#ifdef USE_ENVMAP
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
#endif`,If=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Of=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ff=`#ifdef USE_GRADIENTMAP
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
}`,Bf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hf=`uniform bool receiveShadow;
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
#endif`,Vf=`#ifdef USE_ENVMAP
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
#endif`,Gf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yf=`PhysicalMaterial material;
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
#endif`,$f=`struct PhysicalMaterial {
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
}`,jf=`
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
#endif`,Zf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ep=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,np=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ip=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rp=`#if defined( USE_POINTS_UV )
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
#endif`,op=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ap=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`#ifdef USE_MORPHTARGETS
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
#endif`,dp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vp=`#ifdef USE_NORMALMAP
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
#endif`,xp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ep=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ap=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Up=`float getShadowMask() {
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
}`,Np=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Op=`#ifdef USE_SKINNING
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
#endif`,Fp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bp=`#ifdef USE_SKINNING
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
#endif`,zp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gp=`#ifdef USE_TRANSMISSION
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
#endif`,Wp=`#ifdef USE_TRANSMISSION
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
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$p=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zp=`uniform sampler2D t2D;
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
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`#include <common>
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
}`,nm=`#if DEPTH_PACKING == 3200
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
}`,im=`#define DISTANCE
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
}`,sm=`#define DISTANCE
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
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,om=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`uniform float scale;
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
}`,lm=`uniform vec3 diffuse;
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
}`,cm=`#include <common>
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
}`,hm=`uniform vec3 diffuse;
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
}`,um=`#define LAMBERT
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
}`,dm=`#define LAMBERT
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
}`,fm=`#define MATCAP
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
}`,pm=`#define MATCAP
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
}`,mm=`#define NORMAL
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
}`,gm=`#define NORMAL
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
}`,_m=`#define PHONG
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
}`,vm=`#define PHONG
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
}`,xm=`#define STANDARD
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
}`,ym=`#define STANDARD
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
}`,Mm=`#define TOON
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
}`,Sm=`#define TOON
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
}`,bm=`uniform float size;
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
}`,wm=`uniform vec3 diffuse;
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
}`,Em=`#include <common>
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
}`,Tm=`uniform vec3 color;
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
}`,Am=`uniform float rotation;
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
}`,Cm=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:jd,alphahash_pars_fragment:Zd,alphamap_fragment:Jd,alphamap_pars_fragment:Kd,alphatest_fragment:Qd,alphatest_pars_fragment:tf,aomap_fragment:ef,aomap_pars_fragment:nf,batching_pars_vertex:sf,batching_vertex:rf,begin_vertex:of,beginnormal_vertex:af,bsdfs:lf,iridescence_fragment:cf,bumpmap_pars_fragment:hf,clipping_planes_fragment:uf,clipping_planes_pars_fragment:df,clipping_planes_pars_vertex:ff,clipping_planes_vertex:pf,color_fragment:mf,color_pars_fragment:gf,color_pars_vertex:_f,color_vertex:vf,common:xf,cube_uv_reflection_fragment:yf,defaultnormal_vertex:Mf,displacementmap_pars_vertex:Sf,displacementmap_vertex:bf,emissivemap_fragment:wf,emissivemap_pars_fragment:Ef,colorspace_fragment:Tf,colorspace_pars_fragment:Af,envmap_fragment:Cf,envmap_common_pars_fragment:Rf,envmap_pars_fragment:Pf,envmap_pars_vertex:Lf,envmap_physical_pars_fragment:Vf,envmap_vertex:Df,fog_vertex:If,fog_pars_vertex:Uf,fog_fragment:Nf,fog_pars_fragment:Of,gradientmap_pars_fragment:Ff,lightmap_pars_fragment:Bf,lights_lambert_fragment:zf,lights_lambert_pars_fragment:kf,lights_pars_begin:Hf,lights_toon_fragment:Gf,lights_toon_pars_fragment:Wf,lights_phong_fragment:Xf,lights_phong_pars_fragment:qf,lights_physical_fragment:Yf,lights_physical_pars_fragment:$f,lights_fragment_begin:jf,lights_fragment_maps:Zf,lights_fragment_end:Jf,logdepthbuf_fragment:Kf,logdepthbuf_pars_fragment:Qf,logdepthbuf_pars_vertex:tp,logdepthbuf_vertex:ep,map_fragment:np,map_pars_fragment:ip,map_particle_fragment:sp,map_particle_pars_fragment:rp,metalnessmap_fragment:op,metalnessmap_pars_fragment:ap,morphinstance_vertex:lp,morphcolor_vertex:cp,morphnormal_vertex:hp,morphtarget_pars_vertex:up,morphtarget_vertex:dp,normal_fragment_begin:fp,normal_fragment_maps:pp,normal_pars_fragment:mp,normal_pars_vertex:gp,normal_vertex:_p,normalmap_pars_fragment:vp,clearcoat_normal_fragment_begin:xp,clearcoat_normal_fragment_maps:yp,clearcoat_pars_fragment:Mp,iridescence_pars_fragment:Sp,opaque_fragment:bp,packing:wp,premultiplied_alpha_fragment:Ep,project_vertex:Tp,dithering_fragment:Ap,dithering_pars_fragment:Cp,roughnessmap_fragment:Rp,roughnessmap_pars_fragment:Pp,shadowmap_pars_fragment:Lp,shadowmap_pars_vertex:Dp,shadowmap_vertex:Ip,shadowmask_pars_fragment:Up,skinbase_vertex:Np,skinning_pars_vertex:Op,skinning_vertex:Fp,skinnormal_vertex:Bp,specularmap_fragment:zp,specularmap_pars_fragment:kp,tonemapping_fragment:Hp,tonemapping_pars_fragment:Vp,transmission_fragment:Gp,transmission_pars_fragment:Wp,uv_pars_fragment:Xp,uv_pars_vertex:qp,uv_vertex:Yp,worldpos_vertex:$p,background_vert:jp,background_frag:Zp,backgroundCube_vert:Jp,backgroundCube_frag:Kp,cube_vert:Qp,cube_frag:tm,depth_vert:em,depth_frag:nm,distanceRGBA_vert:im,distanceRGBA_frag:sm,equirect_vert:rm,equirect_frag:om,linedashed_vert:am,linedashed_frag:lm,meshbasic_vert:cm,meshbasic_frag:hm,meshlambert_vert:um,meshlambert_frag:dm,meshmatcap_vert:fm,meshmatcap_frag:pm,meshnormal_vert:mm,meshnormal_frag:gm,meshphong_vert:_m,meshphong_frag:vm,meshphysical_vert:xm,meshphysical_frag:ym,meshtoon_vert:Mm,meshtoon_frag:Sm,points_vert:bm,points_frag:wm,shadow_vert:Em,shadow_frag:Tm,sprite_vert:Am,sprite_frag:Cm},vt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},wn={basic:{uniforms:We([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:We([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:We([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:We([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:We([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:We([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:We([vt.points,vt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:We([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:We([vt.common,vt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:We([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:We([vt.sprite,vt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:We([vt.common,vt.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:We([vt.lights,vt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};wn.physical={uniforms:We([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Cr={r:0,b:0,g:0},xi=new Cn,Rm=new ce;function Pm(n,t,e,i,s,r,o){const a=new Jt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function _(v){let y=!1;const x=g(v);x===null?p(a,l):x&&x.isColor&&(p(x,1),y=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===oo)?(h===void 0&&(h=new ft(new le(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:xs(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),xi.copy(y.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Rm.makeRotationFromEuler(xi)),h.material.toneMapped=te.getTransfer(x.colorSpace)!==oe,(u!==x||d!==x.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ft(new yn(2,2),new ui({name:"BackgroundMaterial",uniforms:xs(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=te.getTransfer(x.colorSpace)!==oe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,y){v.getRGB(Cr,Fh(n)),i.buffers.color.setClear(Cr.r,Cr.g,Cr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:_,addToRenderList:m}}function Lm(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(M,L,W,w,N){let I=!1;const A=u(w,W,L);r!==A&&(r=A,c(r.object)),I=f(M,w,W,N),I&&g(M,w,W,N),N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(I||o)&&(o=!1,x(M,L,W,w),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,L,W){const w=W.wireframe===!0;let N=i[M.id];N===void 0&&(N={},i[M.id]=N);let I=N[L.id];I===void 0&&(I={},N[L.id]=I);let A=I[w];return A===void 0&&(A=d(l()),I[w]=A),A}function d(M){const L=[],W=[],w=[];for(let N=0;N<e;N++)L[N]=0,W[N]=0,w[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:W,attributeDivisors:w,object:M,attributes:{},index:null}}function f(M,L,W,w){const N=r.attributes,I=L.attributes;let A=0;const B=W.getAttributes();for(const k in B)if(B[k].location>=0){const j=N[k];let Q=I[k];if(Q===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),j===void 0||j.attribute!==Q||Q&&j.data!==Q.data)return!0;A++}return r.attributesNum!==A||r.index!==w}function g(M,L,W,w){const N={},I=L.attributes;let A=0;const B=W.getAttributes();for(const k in B)if(B[k].location>=0){let j=I[k];j===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(j=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(j=M.instanceColor));const Q={};Q.attribute=j,j&&j.data&&(Q.data=j.data),N[k]=Q,A++}r.attributes=N,r.attributesNum=A,r.index=w}function _(){const M=r.newAttributes;for(let L=0,W=M.length;L<W;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){const W=r.newAttributes,w=r.enabledAttributes,N=r.attributeDivisors;W[M]=1,w[M]===0&&(n.enableVertexAttribArray(M),w[M]=1),N[M]!==L&&(n.vertexAttribDivisor(M,L),N[M]=L)}function v(){const M=r.newAttributes,L=r.enabledAttributes;for(let W=0,w=L.length;W<w;W++)L[W]!==M[W]&&(n.disableVertexAttribArray(W),L[W]=0)}function y(M,L,W,w,N,I,A){A===!0?n.vertexAttribIPointer(M,L,W,N,I):n.vertexAttribPointer(M,L,W,w,N,I)}function x(M,L,W,w){_();const N=w.attributes,I=W.getAttributes(),A=L.defaultAttributeValues;for(const B in I){const k=I[B];if(k.location>=0){let q=N[B];if(q===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(q=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(q=M.instanceColor)),q!==void 0){const j=q.normalized,Q=q.itemSize,at=t.get(q);if(at===void 0)continue;const gt=at.buffer,Y=at.type,nt=at.bytesPerElement,ct=Y===n.INT||Y===n.UNSIGNED_INT||q.gpuType===tl;if(q.isInterleavedBufferAttribute){const st=q.data,pt=st.stride,At=q.offset;if(st.isInstancedInterleavedBuffer){for(let Ot=0;Ot<k.locationSize;Ot++)p(k.location+Ot,st.meshPerAttribute);M.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ot=0;Ot<k.locationSize;Ot++)m(k.location+Ot);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let Ot=0;Ot<k.locationSize;Ot++)y(k.location+Ot,Q/k.locationSize,Y,j,pt*nt,(At+Q/k.locationSize*Ot)*nt,ct)}else{if(q.isInstancedBufferAttribute){for(let st=0;st<k.locationSize;st++)p(k.location+st,q.meshPerAttribute);M.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let st=0;st<k.locationSize;st++)m(k.location+st);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let st=0;st<k.locationSize;st++)y(k.location+st,Q/k.locationSize,Y,j,Q*nt,Q/k.locationSize*st*nt,ct)}}else if(A!==void 0){const j=A[B];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(k.location,j);break;case 3:n.vertexAttrib3fv(k.location,j);break;case 4:n.vertexAttrib4fv(k.location,j);break;default:n.vertexAttrib1fv(k.location,j)}}}}v()}function U(){D();for(const M in i){const L=i[M];for(const W in L){const w=L[W];for(const N in w)h(w[N].object),delete w[N];delete L[W]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const W in L){const w=L[W];for(const N in w)h(w[N].object),delete w[N];delete L[W]}delete i[M.id]}function R(M){for(const L in i){const W=i[L];if(W[M.id]===void 0)continue;const w=W[M.id];for(const N in w)h(w[N].object),delete w[N];delete W[M.id]}}function D(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:b,dispose:U,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Dm(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Im(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==vn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const D=R===nr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==$n&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==An&&!D)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:U,maxSamples:C}}function Um(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new ii,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const v=r?0:i,y=v*4;let x=p.clippingState||null;l.value=x,x=h(g,d,y,f);for(let U=0;U!==y;++U)x[U]=e[U];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Nm(n){let t=new WeakMap;function e(o,a){return a===fa?o.mapping=ms:a===pa&&(o.mapping=gs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===fa||a===pa)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Xd(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Hh extends Bh{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const is=4,dc=[.125,.215,.35,.446,.526,.582],Ei=20,Bo=new Hh,fc=new Jt;let zo=null,ko=0,Ho=0,Vo=!1;const bi=(1+Math.sqrt(5))/2,Ki=1/bi,pc=[new E(-bi,Ki,0),new E(bi,Ki,0),new E(-Ki,0,bi),new E(Ki,0,bi),new E(0,bi,-Ki),new E(0,bi,Ki),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)];class mc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){zo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),Vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(zo,ko,Ho),this._renderer.xr.enabled=Vo,t.scissorTest=!1,Rr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ms||t.mapping===gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),Vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:nr,format:vn,colorSpace:Ss,depthBuffer:!1},s=gc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gc(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Om(r)),this._blurMaterial=Fm(r,t,e)}return s}_compileMaterial(t){const e=new ft(this._lodPlanes[0],t);this._renderer.compile(e,Bo)}_sceneToCubeUV(t,e,i,s){const a=new on(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(fc),h.toneMapping=oi,h.autoClear=!1;const f=new he({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),g=new ft(new le,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(fc),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;Rr(s,v*y,p>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ms||t.mapping===gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_c());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ft(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Rr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Bo)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=pc[(s-r-1)%pc.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ft(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ei-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ei;m>Ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ei}`);const p=[];let v=0;for(let R=0;R<Ei;++R){const D=R/_,b=Math.exp(-D*D/2);p.push(b),R===0?v+=b:R<m&&(v+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const x=this._sizeLods[s],U=3*x*(s>y-is?s-y+is:0),C=4*(this._cubeSize-x);Rr(e,U,C,3*x,2*x),l.setRenderTarget(e),l.render(u,Bo)}}function Om(n){const t=[],e=[],i=[];let s=n;const r=n-is+1+dc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-is?l=dc[o-n+is-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),y=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let C=0;C<f;C++){const R=C%3*2/3-1,D=C>2?0:-1,b=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];v.set(b,_*g*C),y.set(d,m*g*C);const M=[C,C,C,C,C,C];x.set(M,p*g*C)}const U=new we;U.setAttribute("position",new xn(v,_)),U.setAttribute("uv",new xn(y,m)),U.setAttribute("faceIndex",new xn(x,p)),t.push(U),s>is&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function gc(n,t,e){const i=new Pi(n,t,e);return i.texture.mapping=oo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Fm(n,t,e){const i=new Float32Array(Ei),s=new E(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hl(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function _c(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hl(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function vc(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function hl(){return`

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
	`}function Bm(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===fa||l===pa,h=l===ms||l===gs;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new mc(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new mc(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function zm(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Fs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function km(n,t,e,i){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],n.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let y=0,x=v.length;y<x;y+=3){const U=v[y+0],C=v[y+1],R=v[y+2];d.push(U,C,C,R,R,U)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const U=y+0,C=y+1,R=y+2;d.push(U,C,C,R,R,U)}}else return;const m=new(Lh(d)?Oh:Nh)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Hm(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),e.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*o,g),e.update(f,i,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*_[v];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Vm(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Gm(n,t,e){const i=new WeakMap,s=new be;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let M=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let U=a.attributes.position.count*x,C=1;U>t.maxTextureSize&&(C=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const R=new Float32Array(U*C*4*u),D=new Ih(R,U,C,u);D.type=An,D.needsUpdate=!0;const b=x*4;for(let L=0;L<u;L++){const W=p[L],w=v[L],N=y[L],I=U*C*4*L;for(let A=0;A<W.count;A++){const B=A*b;g===!0&&(s.fromBufferAttribute(W,A),R[I+B+0]=s.x,R[I+B+1]=s.y,R[I+B+2]=s.z,R[I+B+3]=0),_===!0&&(s.fromBufferAttribute(w,A),R[I+B+4]=s.x,R[I+B+5]=s.y,R[I+B+6]=s.z,R[I+B+7]=0),m===!0&&(s.fromBufferAttribute(N,A),R[I+B+8]=s.x,R[I+B+9]=s.y,R[I+B+10]=s.z,R[I+B+11]=N.itemSize===4?s.w:1)}}d={count:u,texture:D,size:new lt(U,C)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Wm(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Vh extends Fe{constructor(t,e,i,s,r,o,a,l,c,h=as){if(h!==as&&h!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===as&&(i=Ri),i===void 0&&h===vs&&(i=_s),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Gh=new Fe,xc=new Vh(1,1),Wh=new Ih,Xh=new Rd,qh=new zh,yc=[],Mc=[],Sc=new Float32Array(16),bc=new Float32Array(9),wc=new Float32Array(4);function Es(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=yc[s];if(r===void 0&&(r=new Float32Array(s),yc[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function De(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ie(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function co(n,t){let e=Mc[t];e===void 0&&(e=new Int32Array(t),Mc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Xm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function qm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2fv(this.addr,t),Ie(e,t)}}function Ym(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;n.uniform3fv(this.addr,t),Ie(e,t)}}function $m(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4fv(this.addr,t),Ie(e,t)}}function jm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,i))return;wc.set(i),n.uniformMatrix2fv(this.addr,!1,wc),Ie(e,i)}}function Zm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,i))return;bc.set(i),n.uniformMatrix3fv(this.addr,!1,bc),Ie(e,i)}}function Jm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,i))return;Sc.set(i),n.uniformMatrix4fv(this.addr,!1,Sc),Ie(e,i)}}function Km(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Qm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2iv(this.addr,t),Ie(e,t)}}function t0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3iv(this.addr,t),Ie(e,t)}}function e0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4iv(this.addr,t),Ie(e,t)}}function n0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function i0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2uiv(this.addr,t),Ie(e,t)}}function s0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3uiv(this.addr,t),Ie(e,t)}}function r0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4uiv(this.addr,t),Ie(e,t)}}function o0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(xc.compareFunction=Ph,r=xc):r=Gh,e.setTexture2D(t||r,s)}function a0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Xh,s)}function l0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||qh,s)}function c0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Wh,s)}function h0(n){switch(n){case 5126:return Xm;case 35664:return qm;case 35665:return Ym;case 35666:return $m;case 35674:return jm;case 35675:return Zm;case 35676:return Jm;case 5124:case 35670:return Km;case 35667:case 35671:return Qm;case 35668:case 35672:return t0;case 35669:case 35673:return e0;case 5125:return n0;case 36294:return i0;case 36295:return s0;case 36296:return r0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return l0;case 36289:case 36303:case 36311:case 36292:return c0}}function u0(n,t){n.uniform1fv(this.addr,t)}function d0(n,t){const e=Es(t,this.size,2);n.uniform2fv(this.addr,e)}function f0(n,t){const e=Es(t,this.size,3);n.uniform3fv(this.addr,e)}function p0(n,t){const e=Es(t,this.size,4);n.uniform4fv(this.addr,e)}function m0(n,t){const e=Es(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function g0(n,t){const e=Es(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function _0(n,t){const e=Es(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function v0(n,t){n.uniform1iv(this.addr,t)}function x0(n,t){n.uniform2iv(this.addr,t)}function y0(n,t){n.uniform3iv(this.addr,t)}function M0(n,t){n.uniform4iv(this.addr,t)}function S0(n,t){n.uniform1uiv(this.addr,t)}function b0(n,t){n.uniform2uiv(this.addr,t)}function w0(n,t){n.uniform3uiv(this.addr,t)}function E0(n,t){n.uniform4uiv(this.addr,t)}function T0(n,t,e){const i=this.cache,s=t.length,r=co(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Gh,r[o])}function A0(n,t,e){const i=this.cache,s=t.length,r=co(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Xh,r[o])}function C0(n,t,e){const i=this.cache,s=t.length,r=co(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||qh,r[o])}function R0(n,t,e){const i=this.cache,s=t.length,r=co(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Wh,r[o])}function P0(n){switch(n){case 5126:return u0;case 35664:return d0;case 35665:return f0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return _0;case 5124:case 35670:return v0;case 35667:case 35671:return x0;case 35668:case 35672:return y0;case 35669:case 35673:return M0;case 5125:return S0;case 36294:return b0;case 36295:return w0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return C0;case 36289:case 36303:case 36311:case 36292:return R0}}class L0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=h0(e.type)}}class D0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=P0(e.type)}}class I0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Go=/(\w+)(\])?(\[|\.)?/g;function Ec(n,t){n.seq.push(t),n.map[t.id]=t}function U0(n,t,e){const i=n.name,s=i.length;for(Go.lastIndex=0;;){const r=Go.exec(i),o=Go.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ec(e,c===void 0?new L0(a,n,t):new D0(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new I0(a),Ec(e,u)),e=u}}}class Yr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);U0(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Tc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const N0=37297;let O0=0;function F0(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Ac=new qt;function B0(n){te._getMatrix(Ac,te.workingColorSpace,n);const t=`mat3( ${Ac.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(n)){case ao:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Cc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+F0(n.getShaderSource(t),o)}else return s}function z0(n,t){const e=B0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function k0(n,t){let e;switch(t){case Vu:e="Linear";break;case Gu:e="Reinhard";break;case Wu:e="Cineon";break;case vh:e="ACESFilmic";break;case qu:e="AgX";break;case Yu:e="Neutral";break;case Xu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Pr=new E;function H0(){te.getLuminanceCoefficients(Pr);const n=Pr.x.toFixed(4),t=Pr.y.toFixed(4),e=Pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bs).join(`
`)}function G0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function W0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Bs(n){return n!==""}function Rc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const X0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Va(n){return n.replace(X0,Y0)}const q0=new Map;function Y0(n,t){let e=$t[t];if(e===void 0){const i=q0.get(t);if(i!==void 0)e=$t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Va(e)}const $0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lc(n){return n.replace($0,j0)}function j0(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Dc(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Z0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===mh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===gh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Hn&&(t="SHADOWMAP_TYPE_VSM"),t}function J0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ms:case gs:t="ENVMAP_TYPE_CUBE";break;case oo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function K0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case gs:t="ENVMAP_MODE_REFRACTION";break}return t}function Q0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case _h:t="ENVMAP_BLENDING_MULTIPLY";break;case ku:t="ENVMAP_BLENDING_MIX";break;case Hu:t="ENVMAP_BLENDING_ADD";break}return t}function tg(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function eg(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Z0(e),c=J0(e),h=K0(e),u=Q0(e),d=tg(e),f=V0(e),g=G0(r),_=s.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bs).join(`
`),p.length>0&&(p+=`
`)):(m=[Dc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),p=[Dc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?$t.tonemapping_pars_fragment:"",e.toneMapping!==oi?k0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,z0("linearToOutputTexel",e.outputColorSpace),H0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bs).join(`
`)),o=Va(o),o=Rc(o,e),o=Pc(o,e),a=Va(a),a=Rc(a,e),a=Pc(a,e),o=Lc(o),a=Lc(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+m+o,x=v+p+a,U=Tc(s,s.VERTEX_SHADER,y),C=Tc(s,s.FRAGMENT_SHADER,x);s.attachShader(_,U),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(L){if(n.debug.checkShaderErrors){const W=s.getProgramInfoLog(_).trim(),w=s.getShaderInfoLog(U).trim(),N=s.getShaderInfoLog(C).trim();let I=!0,A=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(I=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,U,C);else{const B=Cc(s,U,"vertex"),k=Cc(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+W+`
`+B+`
`+k)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(w===""||N==="")&&(A=!1);A&&(L.diagnostics={runnable:I,programLog:W,vertexShader:{log:w,prefix:m},fragmentShader:{log:N,prefix:p}})}s.deleteShader(U),s.deleteShader(C),D=new Yr(s,_),b=W0(s,_)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,N0)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=O0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=C,this}let ng=0;class ig{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new sg(t),e.set(t,i)),i}}class sg{constructor(t){this.id=ng++,this.code=t,this.usedTimes=0}}function rg(n,t,e,i,s,r,o){const a=new ll,l=new ig,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,L,W,w){const N=W.fog,I=w.geometry,A=b.isMeshStandardMaterial?W.environment:null,B=(b.isMeshStandardMaterial?e:t).get(b.envMap||A),k=B&&B.mapping===oo?B.image.height:null,q=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const j=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Q=j!==void 0?j.length:0;let at=0;I.morphAttributes.position!==void 0&&(at=1),I.morphAttributes.normal!==void 0&&(at=2),I.morphAttributes.color!==void 0&&(at=3);let gt,Y,nt,ct;if(q){const re=wn[q];gt=re.vertexShader,Y=re.fragmentShader}else gt=b.vertexShader,Y=b.fragmentShader,l.update(b),nt=l.getVertexShaderID(b),ct=l.getFragmentShaderID(b);const st=n.getRenderTarget(),pt=n.state.buffers.depth.getReversed(),At=w.isInstancedMesh===!0,Ot=w.isBatchedMesh===!0,Gt=!!b.map,it=!!b.matcap,ht=!!B,O=!!b.aoMap,Ut=!!b.lightMap,ut=!!b.bumpMap,Tt=!!b.normalMap,_t=!!b.displacementMap,zt=!!b.emissiveMap,wt=!!b.metalnessMap,P=!!b.roughnessMap,S=b.anisotropy>0,X=b.clearcoat>0,tt=b.dispersion>0,ot=b.iridescence>0,et=b.sheen>0,Pt=b.transmission>0,xt=S&&!!b.anisotropyMap,Et=X&&!!b.clearcoatMap,Zt=X&&!!b.clearcoatNormalMap,dt=X&&!!b.clearcoatRoughnessMap,Ct=ot&&!!b.iridescenceMap,kt=ot&&!!b.iridescenceThicknessMap,Ht=et&&!!b.sheenColorMap,Rt=et&&!!b.sheenRoughnessMap,Kt=!!b.specularMap,Yt=!!b.specularColorMap,ue=!!b.specularIntensityMap,H=Pt&&!!b.transmissionMap,yt=Pt&&!!b.thicknessMap,K=!!b.gradientMap,rt=!!b.alphaMap,bt=b.alphaTest>0,Mt=!!b.alphaHash,Wt=!!b.extensions;let Se=oi;b.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Se=n.toneMapping);const Be={shaderID:q,shaderType:b.type,shaderName:b.name,vertexShader:gt,fragmentShader:Y,defines:b.defines,customVertexShaderID:nt,customFragmentShaderID:ct,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Ot,batchingColor:Ot&&w._colorsTexture!==null,instancing:At,instancingColor:At&&w.instanceColor!==null,instancingMorph:At&&w.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?n.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Ss,alphaToCoverage:!!b.alphaToCoverage,map:Gt,matcap:it,envMap:ht,envMapMode:ht&&B.mapping,envMapCubeUVHeight:k,aoMap:O,lightMap:Ut,bumpMap:ut,normalMap:Tt,displacementMap:d&&_t,emissiveMap:zt,normalMapObjectSpace:Tt&&b.normalMapType===Ju,normalMapTangentSpace:Tt&&b.normalMapType===Rh,metalnessMap:wt,roughnessMap:P,anisotropy:S,anisotropyMap:xt,clearcoat:X,clearcoatMap:Et,clearcoatNormalMap:Zt,clearcoatRoughnessMap:dt,dispersion:tt,iridescence:ot,iridescenceMap:Ct,iridescenceThicknessMap:kt,sheen:et,sheenColorMap:Ht,sheenRoughnessMap:Rt,specularMap:Kt,specularColorMap:Yt,specularIntensityMap:ue,transmission:Pt,transmissionMap:H,thicknessMap:yt,gradientMap:K,opaque:b.transparent===!1&&b.blending===os&&b.alphaToCoverage===!1,alphaMap:rt,alphaTest:bt,alphaHash:Mt,combine:b.combine,mapUv:Gt&&_(b.map.channel),aoMapUv:O&&_(b.aoMap.channel),lightMapUv:Ut&&_(b.lightMap.channel),bumpMapUv:ut&&_(b.bumpMap.channel),normalMapUv:Tt&&_(b.normalMap.channel),displacementMapUv:_t&&_(b.displacementMap.channel),emissiveMapUv:zt&&_(b.emissiveMap.channel),metalnessMapUv:wt&&_(b.metalnessMap.channel),roughnessMapUv:P&&_(b.roughnessMap.channel),anisotropyMapUv:xt&&_(b.anisotropyMap.channel),clearcoatMapUv:Et&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&_(b.sheenRoughnessMap.channel),specularMapUv:Kt&&_(b.specularMap.channel),specularColorMapUv:Yt&&_(b.specularColorMap.channel),specularIntensityMapUv:ue&&_(b.specularIntensityMap.channel),transmissionMapUv:H&&_(b.transmissionMap.channel),thicknessMapUv:yt&&_(b.thicknessMap.channel),alphaMapUv:rt&&_(b.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Tt||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!I.attributes.uv&&(Gt||rt),fog:!!N,useFog:b.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:pt,skinning:w.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:at,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Se,decodeVideoTexture:Gt&&b.map.isVideoTexture===!0&&te.getTransfer(b.map.colorSpace)===oe,decodeVideoTextureEmissive:zt&&b.emissiveMap.isVideoTexture===!0&&te.getTransfer(b.emissiveMap.colorSpace)===oe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ne,flipSided:b.side===je,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Wt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&b.extensions.multiDraw===!0||Ot)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)M.push(L),M.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(v(M,b),y(M,b),M.push(n.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function v(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){const M=g[b.type];let L;if(M){const W=wn[M];L=Hd.clone(W.uniforms)}else L=b.uniforms;return L}function U(b,M){let L;for(let W=0,w=h.length;W<w;W++){const N=h[W];if(N.cacheKey===M){L=N,++L.usedTimes;break}}return L===void 0&&(L=new eg(n,M,b,r),h.push(L)),L}function C(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function R(b){l.remove(b)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:U,releaseProgram:C,releaseShaderCache:R,programs:h,dispose:D}}function og(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function ag(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Ic(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Uc(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,f,g,_,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||ag),i.length>1&&i.sort(d||Ic),s.length>1&&s.sort(d||Ic)}function h(){for(let u=t,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function lg(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Uc,n.set(i,[o])):s>=r.length?(o=new Uc,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function cg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new Jt};break;case"SpotLight":e={position:new E,direction:new E,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new E,halfWidth:new E,halfHeight:new E};break}return n[t.id]=e,e}}}function hg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let ug=0;function dg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function fg(n){const t=new cg,e=hg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new E);const s=new E,r=new ce,o=new ce;function a(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,y=0,x=0,U=0,C=0,R=0;c.sort(dg);for(let b=0,M=c.length;b<M;b++){const L=c[b],W=L.color,w=L.intensity,N=L.distance,I=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=W.r*w,u+=W.g*w,d+=W.b*w;else if(L.isLightProbe){for(let A=0;A<9;A++)i.probe[A].addScaledVector(L.sh.coefficients[A],w);R++}else if(L.isDirectionalLight){const A=t.get(L);if(A.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const B=L.shadow,k=e.get(L);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,i.directionalShadow[f]=k,i.directionalShadowMap[f]=I,i.directionalShadowMatrix[f]=L.shadow.matrix,v++}i.directional[f]=A,f++}else if(L.isSpotLight){const A=t.get(L);A.position.setFromMatrixPosition(L.matrixWorld),A.color.copy(W).multiplyScalar(w),A.distance=N,A.coneCos=Math.cos(L.angle),A.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),A.decay=L.decay,i.spot[_]=A;const B=L.shadow;if(L.map&&(i.spotLightMap[U]=L.map,U++,B.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[_]=B.matrix,L.castShadow){const k=e.get(L);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,i.spotShadow[_]=k,i.spotShadowMap[_]=I,x++}_++}else if(L.isRectAreaLight){const A=t.get(L);A.color.copy(W).multiplyScalar(w),A.halfWidth.set(L.width*.5,0,0),A.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=A,m++}else if(L.isPointLight){const A=t.get(L);if(A.color.copy(L.color).multiplyScalar(L.intensity),A.distance=L.distance,A.decay=L.decay,L.castShadow){const B=L.shadow,k=e.get(L);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,k.shadowCameraNear=B.camera.near,k.shadowCameraFar=B.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=I,i.pointShadowMatrix[g]=L.shadow.matrix,y++}i.point[g]=A,g++}else if(L.isHemisphereLight){const A=t.get(L);A.skyColor.copy(L.color).multiplyScalar(w),A.groundColor.copy(L.groundColor).multiplyScalar(w),i.hemi[p]=A,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const D=i.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==v||D.numPointShadows!==y||D.numSpotShadows!==x||D.numSpotMaps!==U||D.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+U-C,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,D.directionalLength=f,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=v,D.numPointShadows=y,D.numSpotShadows=x,D.numSpotMaps=U,D.numLightProbes=R,i.version=ug++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const y=c[p];if(y.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(y.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Nc(n){const t=new fg(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function pg(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Nc(n),t.set(s,[a])):r>=o.length?(a=new Nc(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class mg extends ws{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ju,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gg extends ws{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const _g=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vg=`uniform sampler2D shadow_pass;
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
}`;function xg(n,t,e){let i=new cl;const s=new lt,r=new lt,o=new be,a=new mg({depthPacking:Zu}),l=new gg,c={},h=e.maxTextureSize,u={[Yn]:je,[je]:Yn,[Ne]:Ne},d=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:_g,fragmentShader:vg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new we;g.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ft(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mh;let p=this.type;this.render=function(C,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const b=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),W=n.state;W.setBlending(ri),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const w=p!==Hn&&this.type===Hn,N=p===Hn&&this.type!==Hn;for(let I=0,A=C.length;I<A;I++){const B=C[I],k=B.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const q=k.getFrameExtents();if(s.multiply(q),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,k.mapSize.y=r.y)),k.map===null||w===!0||N===!0){const Q=this.type!==Hn?{minFilter:en,magFilter:en}:{};k.map!==null&&k.map.dispose(),k.map=new Pi(s.x,s.y,Q),k.map.texture.name=B.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const j=k.getViewportCount();for(let Q=0;Q<j;Q++){const at=k.getViewport(Q);o.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),W.viewport(o),k.updateMatrices(B,Q),i=k.getFrustum(),x(R,D,k.camera,B,this.type)}k.isPointLightShadow!==!0&&this.type===Hn&&v(k,D),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,M,L)};function v(C,R){const D=t.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Pi(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(R,null,D,d,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(R,null,D,f,_,null)}function y(C,R,D,b){let M=null;const L=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)M=L;else if(M=D.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const W=M.uuid,w=R.uuid;let N=c[W];N===void 0&&(N={},c[W]=N);let I=N[w];I===void 0&&(I=M.clone(),N[w]=I,R.addEventListener("dispose",U)),M=I}if(M.visible=R.visible,M.wireframe=R.wireframe,b===Hn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=n.properties.get(M);W.light=D}return M}function x(C,R,D,b,M){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Hn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const w=t.update(C),N=C.material;if(Array.isArray(N)){const I=w.groups;for(let A=0,B=I.length;A<B;A++){const k=I[A],q=N[k.materialIndex];if(q&&q.visible){const j=y(C,q,b,M);C.onBeforeShadow(n,C,R,D,w,j,k),n.renderBufferDirect(D,null,w,j,C,k),C.onAfterShadow(n,C,R,D,w,j,k)}}}else if(N.visible){const I=y(C,N,b,M);C.onBeforeShadow(n,C,R,D,w,I,null),n.renderBufferDirect(D,null,w,I,C,null),C.onAfterShadow(n,C,R,D,w,I,null)}}const W=C.children;for(let w=0,N=W.length;w<N;w++)x(W[w],R,D,b,M)}function U(C){C.target.removeEventListener("dispose",U);for(const D in c){const b=c[D],M=C.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const yg={[oa]:aa,[la]:ua,[ca]:da,[ps]:ha,[aa]:oa,[ua]:la,[da]:ca,[ha]:ps};function Mg(n,t){function e(){let H=!1;const yt=new be;let K=null;const rt=new be(0,0,0,0);return{setMask:function(bt){K!==bt&&!H&&(n.colorMask(bt,bt,bt,bt),K=bt)},setLocked:function(bt){H=bt},setClear:function(bt,Mt,Wt,Se,Be){Be===!0&&(bt*=Se,Mt*=Se,Wt*=Se),yt.set(bt,Mt,Wt,Se),rt.equals(yt)===!1&&(n.clearColor(bt,Mt,Wt,Se),rt.copy(yt))},reset:function(){H=!1,K=null,rt.set(-1,0,0,0)}}}function i(){let H=!1,yt=!1,K=null,rt=null,bt=null;return{setReversed:function(Mt){if(yt!==Mt){const Wt=t.get("EXT_clip_control");yt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);const Se=bt;bt=null,this.setClear(Se)}yt=Mt},getReversed:function(){return yt},setTest:function(Mt){Mt?st(n.DEPTH_TEST):pt(n.DEPTH_TEST)},setMask:function(Mt){K!==Mt&&!H&&(n.depthMask(Mt),K=Mt)},setFunc:function(Mt){if(yt&&(Mt=yg[Mt]),rt!==Mt){switch(Mt){case oa:n.depthFunc(n.NEVER);break;case aa:n.depthFunc(n.ALWAYS);break;case la:n.depthFunc(n.LESS);break;case ps:n.depthFunc(n.LEQUAL);break;case ca:n.depthFunc(n.EQUAL);break;case ha:n.depthFunc(n.GEQUAL);break;case ua:n.depthFunc(n.GREATER);break;case da:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}rt=Mt}},setLocked:function(Mt){H=Mt},setClear:function(Mt){bt!==Mt&&(yt&&(Mt=1-Mt),n.clearDepth(Mt),bt=Mt)},reset:function(){H=!1,K=null,rt=null,bt=null,yt=!1}}}function s(){let H=!1,yt=null,K=null,rt=null,bt=null,Mt=null,Wt=null,Se=null,Be=null;return{setTest:function(re){H||(re?st(n.STENCIL_TEST):pt(n.STENCIL_TEST))},setMask:function(re){yt!==re&&!H&&(n.stencilMask(re),yt=re)},setFunc:function(re,hn,Dn){(K!==re||rt!==hn||bt!==Dn)&&(n.stencilFunc(re,hn,Dn),K=re,rt=hn,bt=Dn)},setOp:function(re,hn,Dn){(Mt!==re||Wt!==hn||Se!==Dn)&&(n.stencilOp(re,hn,Dn),Mt=re,Wt=hn,Se=Dn)},setLocked:function(re){H=re},setClear:function(re){Be!==re&&(n.clearStencil(re),Be=re)},reset:function(){H=!1,yt=null,K=null,rt=null,bt=null,Mt=null,Wt=null,Se=null,Be=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,y=null,x=null,U=null,C=null,R=new Jt(0,0,0),D=0,b=!1,M=null,L=null,W=null,w=null,N=null;const I=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let A=!1,B=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(k)[1]),A=B>=1):k.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),A=B>=2);let q=null,j={};const Q=n.getParameter(n.SCISSOR_BOX),at=n.getParameter(n.VIEWPORT),gt=new be().fromArray(Q),Y=new be().fromArray(at);function nt(H,yt,K,rt){const bt=new Uint8Array(4),Mt=n.createTexture();n.bindTexture(H,Mt),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Wt=0;Wt<K;Wt++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(yt,0,n.RGBA,1,1,rt,0,n.RGBA,n.UNSIGNED_BYTE,bt):n.texImage2D(yt+Wt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,bt);return Mt}const ct={};ct[n.TEXTURE_2D]=nt(n.TEXTURE_2D,n.TEXTURE_2D,1),ct[n.TEXTURE_CUBE_MAP]=nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[n.TEXTURE_2D_ARRAY]=nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ct[n.TEXTURE_3D]=nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(n.DEPTH_TEST),o.setFunc(ps),ut(!1),Tt(Bl),st(n.CULL_FACE),O(ri);function st(H){h[H]!==!0&&(n.enable(H),h[H]=!0)}function pt(H){h[H]!==!1&&(n.disable(H),h[H]=!1)}function At(H,yt){return u[H]!==yt?(n.bindFramebuffer(H,yt),u[H]=yt,H===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=yt),H===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=yt),!0):!1}function Ot(H,yt){let K=f,rt=!1;if(H){K=d.get(yt),K===void 0&&(K=[],d.set(yt,K));const bt=H.textures;if(K.length!==bt.length||K[0]!==n.COLOR_ATTACHMENT0){for(let Mt=0,Wt=bt.length;Mt<Wt;Mt++)K[Mt]=n.COLOR_ATTACHMENT0+Mt;K.length=bt.length,rt=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,rt=!0);rt&&n.drawBuffers(K)}function Gt(H){return g!==H?(n.useProgram(H),g=H,!0):!1}const it={[wi]:n.FUNC_ADD,[bu]:n.FUNC_SUBTRACT,[wu]:n.FUNC_REVERSE_SUBTRACT};it[Eu]=n.MIN,it[Tu]=n.MAX;const ht={[Au]:n.ZERO,[Cu]:n.ONE,[Ru]:n.SRC_COLOR,[sa]:n.SRC_ALPHA,[Nu]:n.SRC_ALPHA_SATURATE,[Iu]:n.DST_COLOR,[Lu]:n.DST_ALPHA,[Pu]:n.ONE_MINUS_SRC_COLOR,[ra]:n.ONE_MINUS_SRC_ALPHA,[Uu]:n.ONE_MINUS_DST_COLOR,[Du]:n.ONE_MINUS_DST_ALPHA,[Ou]:n.CONSTANT_COLOR,[Fu]:n.ONE_MINUS_CONSTANT_COLOR,[Bu]:n.CONSTANT_ALPHA,[zu]:n.ONE_MINUS_CONSTANT_ALPHA};function O(H,yt,K,rt,bt,Mt,Wt,Se,Be,re){if(H===ri){_===!0&&(pt(n.BLEND),_=!1);return}if(_===!1&&(st(n.BLEND),_=!0),H!==Su){if(H!==m||re!==b){if((p!==wi||x!==wi)&&(n.blendEquation(n.FUNC_ADD),p=wi,x=wi),re)switch(H){case os:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zl:n.blendFunc(n.ONE,n.ONE);break;case kl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case os:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case kl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}v=null,y=null,U=null,C=null,R.set(0,0,0),D=0,m=H,b=re}return}bt=bt||yt,Mt=Mt||K,Wt=Wt||rt,(yt!==p||bt!==x)&&(n.blendEquationSeparate(it[yt],it[bt]),p=yt,x=bt),(K!==v||rt!==y||Mt!==U||Wt!==C)&&(n.blendFuncSeparate(ht[K],ht[rt],ht[Mt],ht[Wt]),v=K,y=rt,U=Mt,C=Wt),(Se.equals(R)===!1||Be!==D)&&(n.blendColor(Se.r,Se.g,Se.b,Be),R.copy(Se),D=Be),m=H,b=!1}function Ut(H,yt){H.side===Ne?pt(n.CULL_FACE):st(n.CULL_FACE);let K=H.side===je;yt&&(K=!K),ut(K),H.blending===os&&H.transparent===!1?O(ri):O(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);const rt=H.stencilWrite;a.setTest(rt),rt&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),zt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?st(n.SAMPLE_ALPHA_TO_COVERAGE):pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ut(H){M!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),M=H)}function Tt(H){H!==yu?(st(n.CULL_FACE),H!==L&&(H===Bl?n.cullFace(n.BACK):H===Mu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pt(n.CULL_FACE),L=H}function _t(H){H!==W&&(A&&n.lineWidth(H),W=H)}function zt(H,yt,K){H?(st(n.POLYGON_OFFSET_FILL),(w!==yt||N!==K)&&(n.polygonOffset(yt,K),w=yt,N=K)):pt(n.POLYGON_OFFSET_FILL)}function wt(H){H?st(n.SCISSOR_TEST):pt(n.SCISSOR_TEST)}function P(H){H===void 0&&(H=n.TEXTURE0+I-1),q!==H&&(n.activeTexture(H),q=H)}function S(H,yt,K){K===void 0&&(q===null?K=n.TEXTURE0+I-1:K=q);let rt=j[K];rt===void 0&&(rt={type:void 0,texture:void 0},j[K]=rt),(rt.type!==H||rt.texture!==yt)&&(q!==K&&(n.activeTexture(K),q=K),n.bindTexture(H,yt||ct[H]),rt.type=H,rt.texture=yt)}function X(){const H=j[q];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function tt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ot(){try{n.compressedTexImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function et(){try{n.texSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Pt(){try{n.texSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function xt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Et(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Zt(){try{n.texStorage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function dt(){try{n.texStorage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ct(){try{n.texImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function kt(){try{n.texImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ht(H){gt.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),gt.copy(H))}function Rt(H){Y.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),Y.copy(H))}function Kt(H,yt){let K=c.get(yt);K===void 0&&(K=new WeakMap,c.set(yt,K));let rt=K.get(H);rt===void 0&&(rt=n.getUniformBlockIndex(yt,H.name),K.set(H,rt))}function Yt(H,yt){const rt=c.get(yt).get(H);l.get(yt)!==rt&&(n.uniformBlockBinding(yt,rt,H.__bindingPointIndex),l.set(yt,rt))}function ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},q=null,j={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,y=null,x=null,U=null,C=null,R=new Jt(0,0,0),D=0,b=!1,M=null,L=null,W=null,w=null,N=null,gt.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:pt,bindFramebuffer:At,drawBuffers:Ot,useProgram:Gt,setBlending:O,setMaterial:Ut,setFlipSided:ut,setCullFace:Tt,setLineWidth:_t,setPolygonOffset:zt,setScissorTest:wt,activeTexture:P,bindTexture:S,unbindTexture:X,compressedTexImage2D:tt,compressedTexImage3D:ot,texImage2D:Ct,texImage3D:kt,updateUBOMapping:Kt,uniformBlockBinding:Yt,texStorage2D:Zt,texStorage3D:dt,texSubImage2D:et,texSubImage3D:Pt,compressedTexSubImage2D:xt,compressedTexSubImage3D:Et,scissor:Ht,viewport:Rt,reset:ue}}function Oc(n,t,e,i){const s=Sg(i);switch(e){case bh:return n*t;case Eh:return n*t;case Th:return n*t*2;case il:return n*t/s.components*s.byteLength;case sl:return n*t/s.components*s.byteLength;case Ah:return n*t*2/s.components*s.byteLength;case rl:return n*t*2/s.components*s.byteLength;case wh:return n*t*3/s.components*s.byteLength;case vn:return n*t*4/s.components*s.byteLength;case ol:return n*t*4/s.components*s.byteLength;case Vr:case Gr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Wr:case Xr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _a:case xa:return Math.max(n,16)*Math.max(t,8)/4;case ga:case va:return Math.max(n,8)*Math.max(t,8)/2;case ya:case Ma:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Sa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wa:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case La:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Da:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ua:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Na:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Oa:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case qr:case Fa:case Ba:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ch:case za:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ka:case Ha:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sg(n){switch(n){case $n:case yh:return{byteLength:1,components:1};case Xs:case Mh:case nr:return{byteLength:2,components:1};case el:case nl:return{byteLength:2,components:4};case Ri:case tl:case An:return{byteLength:4,components:1};case Sh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function bg(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,S){return f?new OffscreenCanvas(P,S):$s("canvas")}function _(P,S,X){let tt=1;const ot=wt(P);if((ot.width>X||ot.height>X)&&(tt=X/Math.max(ot.width,ot.height)),tt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const et=Math.floor(tt*ot.width),Pt=Math.floor(tt*ot.height);u===void 0&&(u=g(et,Pt));const xt=S?g(et,Pt):u;return xt.width=et,xt.height=Pt,xt.getContext("2d").drawImage(P,0,0,et,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+et+"x"+Pt+")."),xt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){n.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(P,S,X,tt,ot=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let et=S;if(S===n.RED&&(X===n.FLOAT&&(et=n.R32F),X===n.HALF_FLOAT&&(et=n.R16F),X===n.UNSIGNED_BYTE&&(et=n.R8)),S===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(et=n.R8UI),X===n.UNSIGNED_SHORT&&(et=n.R16UI),X===n.UNSIGNED_INT&&(et=n.R32UI),X===n.BYTE&&(et=n.R8I),X===n.SHORT&&(et=n.R16I),X===n.INT&&(et=n.R32I)),S===n.RG&&(X===n.FLOAT&&(et=n.RG32F),X===n.HALF_FLOAT&&(et=n.RG16F),X===n.UNSIGNED_BYTE&&(et=n.RG8)),S===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(et=n.RG8UI),X===n.UNSIGNED_SHORT&&(et=n.RG16UI),X===n.UNSIGNED_INT&&(et=n.RG32UI),X===n.BYTE&&(et=n.RG8I),X===n.SHORT&&(et=n.RG16I),X===n.INT&&(et=n.RG32I)),S===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(et=n.RGB8UI),X===n.UNSIGNED_SHORT&&(et=n.RGB16UI),X===n.UNSIGNED_INT&&(et=n.RGB32UI),X===n.BYTE&&(et=n.RGB8I),X===n.SHORT&&(et=n.RGB16I),X===n.INT&&(et=n.RGB32I)),S===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(et=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(et=n.RGBA16UI),X===n.UNSIGNED_INT&&(et=n.RGBA32UI),X===n.BYTE&&(et=n.RGBA8I),X===n.SHORT&&(et=n.RGBA16I),X===n.INT&&(et=n.RGBA32I)),S===n.RGB&&X===n.UNSIGNED_INT_5_9_9_9_REV&&(et=n.RGB9_E5),S===n.RGBA){const Pt=ot?ao:te.getTransfer(tt);X===n.FLOAT&&(et=n.RGBA32F),X===n.HALF_FLOAT&&(et=n.RGBA16F),X===n.UNSIGNED_BYTE&&(et=Pt===oe?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(et=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(et=n.RGB5_A1)}return(et===n.R16F||et===n.R32F||et===n.RG16F||et===n.RG32F||et===n.RGBA16F||et===n.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function x(P,S){let X;return P?S===null||S===Ri||S===_s?X=n.DEPTH24_STENCIL8:S===An?X=n.DEPTH32F_STENCIL8:S===Xs&&(X=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ri||S===_s?X=n.DEPTH_COMPONENT24:S===An?X=n.DEPTH_COMPONENT32F:S===Xs&&(X=n.DEPTH_COMPONENT16),X}function U(P,S){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==en&&P.minFilter!==Tn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function C(P){const S=P.target;S.removeEventListener("dispose",C),D(S),S.isVideoTexture&&h.delete(S)}function R(P){const S=P.target;S.removeEventListener("dispose",R),M(S)}function D(P){const S=i.get(P);if(S.__webglInit===void 0)return;const X=P.source,tt=d.get(X);if(tt){const ot=tt[S.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&b(P),Object.keys(tt).length===0&&d.delete(X)}i.remove(P)}function b(P){const S=i.get(P);n.deleteTexture(S.__webglTexture);const X=P.source,tt=d.get(X);delete tt[S.__cacheKey],o.memory.textures--}function M(P){const S=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(S.__webglFramebuffer[tt]))for(let ot=0;ot<S.__webglFramebuffer[tt].length;ot++)n.deleteFramebuffer(S.__webglFramebuffer[tt][ot]);else n.deleteFramebuffer(S.__webglFramebuffer[tt]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[tt])}else{if(Array.isArray(S.__webglFramebuffer))for(let tt=0;tt<S.__webglFramebuffer.length;tt++)n.deleteFramebuffer(S.__webglFramebuffer[tt]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let tt=0;tt<S.__webglColorRenderbuffer.length;tt++)S.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[tt]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const X=P.textures;for(let tt=0,ot=X.length;tt<ot;tt++){const et=i.get(X[tt]);et.__webglTexture&&(n.deleteTexture(et.__webglTexture),o.memory.textures--),i.remove(X[tt])}i.remove(P)}let L=0;function W(){L=0}function w(){const P=L;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),L+=1,P}function N(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function I(P,S){const X=i.get(P);if(P.isVideoTexture&&_t(P),P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){const tt=P.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(X,P,S);return}}e.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+S)}function A(P,S){const X=i.get(P);if(P.version>0&&X.__version!==P.version){Y(X,P,S);return}e.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+S)}function B(P,S){const X=i.get(P);if(P.version>0&&X.__version!==P.version){Y(X,P,S);return}e.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+S)}function k(P,S){const X=i.get(P);if(P.version>0&&X.__version!==P.version){nt(X,P,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+S)}const q={[jr]:n.REPEAT,[Ti]:n.CLAMP_TO_EDGE,[ma]:n.MIRRORED_REPEAT},j={[en]:n.NEAREST,[$u]:n.NEAREST_MIPMAP_NEAREST,[hr]:n.NEAREST_MIPMAP_LINEAR,[Tn]:n.LINEAR,[_o]:n.LINEAR_MIPMAP_NEAREST,[Ai]:n.LINEAR_MIPMAP_LINEAR},Q={[Ku]:n.NEVER,[sd]:n.ALWAYS,[Qu]:n.LESS,[Ph]:n.LEQUAL,[td]:n.EQUAL,[id]:n.GEQUAL,[ed]:n.GREATER,[nd]:n.NOTEQUAL};function at(P,S){if(S.type===An&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Tn||S.magFilter===_o||S.magFilter===hr||S.magFilter===Ai||S.minFilter===Tn||S.minFilter===_o||S.minFilter===hr||S.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,q[S.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,q[S.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,q[S.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,j[S.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,j[S.minFilter]),S.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Q[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===en||S.minFilter!==hr&&S.minFilter!==Ai||S.type===An&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function gt(P,S){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",C));const tt=S.source;let ot=d.get(tt);ot===void 0&&(ot={},d.set(tt,ot));const et=N(S);if(et!==P.__cacheKey){ot[et]===void 0&&(ot[et]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ot[et].usedTimes++;const Pt=ot[P.__cacheKey];Pt!==void 0&&(ot[P.__cacheKey].usedTimes--,Pt.usedTimes===0&&b(S)),P.__cacheKey=et,P.__webglTexture=ot[et].texture}return X}function Y(P,S,X){let tt=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(tt=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(tt=n.TEXTURE_3D);const ot=gt(P,S),et=S.source;e.bindTexture(tt,P.__webglTexture,n.TEXTURE0+X);const Pt=i.get(et);if(et.version!==Pt.__version||ot===!0){e.activeTexture(n.TEXTURE0+X);const xt=te.getPrimaries(te.workingColorSpace),Et=S.colorSpace===si?null:te.getPrimaries(S.colorSpace),Zt=S.colorSpace===si||xt===Et?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let dt=_(S.image,!1,s.maxTextureSize);dt=zt(S,dt);const Ct=r.convert(S.format,S.colorSpace),kt=r.convert(S.type);let Ht=y(S.internalFormat,Ct,kt,S.colorSpace,S.isVideoTexture);at(tt,S);let Rt;const Kt=S.mipmaps,Yt=S.isVideoTexture!==!0,ue=Pt.__version===void 0||ot===!0,H=et.dataReady,yt=U(S,dt);if(S.isDepthTexture)Ht=x(S.format===vs,S.type),ue&&(Yt?e.texStorage2D(n.TEXTURE_2D,1,Ht,dt.width,dt.height):e.texImage2D(n.TEXTURE_2D,0,Ht,dt.width,dt.height,0,Ct,kt,null));else if(S.isDataTexture)if(Kt.length>0){Yt&&ue&&e.texStorage2D(n.TEXTURE_2D,yt,Ht,Kt[0].width,Kt[0].height);for(let K=0,rt=Kt.length;K<rt;K++)Rt=Kt[K],Yt?H&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,Rt.width,Rt.height,Ct,kt,Rt.data):e.texImage2D(n.TEXTURE_2D,K,Ht,Rt.width,Rt.height,0,Ct,kt,Rt.data);S.generateMipmaps=!1}else Yt?(ue&&e.texStorage2D(n.TEXTURE_2D,yt,Ht,dt.width,dt.height),H&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt.width,dt.height,Ct,kt,dt.data)):e.texImage2D(n.TEXTURE_2D,0,Ht,dt.width,dt.height,0,Ct,kt,dt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Yt&&ue&&e.texStorage3D(n.TEXTURE_2D_ARRAY,yt,Ht,Kt[0].width,Kt[0].height,dt.depth);for(let K=0,rt=Kt.length;K<rt;K++)if(Rt=Kt[K],S.format!==vn)if(Ct!==null)if(Yt){if(H)if(S.layerUpdates.size>0){const bt=Oc(Rt.width,Rt.height,S.format,S.type);for(const Mt of S.layerUpdates){const Wt=Rt.data.subarray(Mt*bt/Rt.data.BYTES_PER_ELEMENT,(Mt+1)*bt/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,Mt,Rt.width,Rt.height,1,Ct,Wt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Rt.width,Rt.height,dt.depth,Ct,Rt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,Ht,Rt.width,Rt.height,dt.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?H&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Rt.width,Rt.height,dt.depth,Ct,kt,Rt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,K,Ht,Rt.width,Rt.height,dt.depth,0,Ct,kt,Rt.data)}else{Yt&&ue&&e.texStorage2D(n.TEXTURE_2D,yt,Ht,Kt[0].width,Kt[0].height);for(let K=0,rt=Kt.length;K<rt;K++)Rt=Kt[K],S.format!==vn?Ct!==null?Yt?H&&e.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,Rt.width,Rt.height,Ct,Rt.data):e.compressedTexImage2D(n.TEXTURE_2D,K,Ht,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?H&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,Rt.width,Rt.height,Ct,kt,Rt.data):e.texImage2D(n.TEXTURE_2D,K,Ht,Rt.width,Rt.height,0,Ct,kt,Rt.data)}else if(S.isDataArrayTexture)if(Yt){if(ue&&e.texStorage3D(n.TEXTURE_2D_ARRAY,yt,Ht,dt.width,dt.height,dt.depth),H)if(S.layerUpdates.size>0){const K=Oc(dt.width,dt.height,S.format,S.type);for(const rt of S.layerUpdates){const bt=dt.data.subarray(rt*K/dt.data.BYTES_PER_ELEMENT,(rt+1)*K/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,rt,dt.width,dt.height,1,Ct,kt,bt)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Ct,kt,dt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ht,dt.width,dt.height,dt.depth,0,Ct,kt,dt.data);else if(S.isData3DTexture)Yt?(ue&&e.texStorage3D(n.TEXTURE_3D,yt,Ht,dt.width,dt.height,dt.depth),H&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Ct,kt,dt.data)):e.texImage3D(n.TEXTURE_3D,0,Ht,dt.width,dt.height,dt.depth,0,Ct,kt,dt.data);else if(S.isFramebufferTexture){if(ue)if(Yt)e.texStorage2D(n.TEXTURE_2D,yt,Ht,dt.width,dt.height);else{let K=dt.width,rt=dt.height;for(let bt=0;bt<yt;bt++)e.texImage2D(n.TEXTURE_2D,bt,Ht,K,rt,0,Ct,kt,null),K>>=1,rt>>=1}}else if(Kt.length>0){if(Yt&&ue){const K=wt(Kt[0]);e.texStorage2D(n.TEXTURE_2D,yt,Ht,K.width,K.height)}for(let K=0,rt=Kt.length;K<rt;K++)Rt=Kt[K],Yt?H&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,Ct,kt,Rt):e.texImage2D(n.TEXTURE_2D,K,Ht,Ct,kt,Rt);S.generateMipmaps=!1}else if(Yt){if(ue){const K=wt(dt);e.texStorage2D(n.TEXTURE_2D,yt,Ht,K.width,K.height)}H&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ct,kt,dt)}else e.texImage2D(n.TEXTURE_2D,0,Ht,Ct,kt,dt);m(S)&&p(tt),Pt.__version=et.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function nt(P,S,X){if(S.image.length!==6)return;const tt=gt(P,S),ot=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+X);const et=i.get(ot);if(ot.version!==et.__version||tt===!0){e.activeTexture(n.TEXTURE0+X);const Pt=te.getPrimaries(te.workingColorSpace),xt=S.colorSpace===si?null:te.getPrimaries(S.colorSpace),Et=S.colorSpace===si||Pt===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const Zt=S.isCompressedTexture||S.image[0].isCompressedTexture,dt=S.image[0]&&S.image[0].isDataTexture,Ct=[];for(let rt=0;rt<6;rt++)!Zt&&!dt?Ct[rt]=_(S.image[rt],!0,s.maxCubemapSize):Ct[rt]=dt?S.image[rt].image:S.image[rt],Ct[rt]=zt(S,Ct[rt]);const kt=Ct[0],Ht=r.convert(S.format,S.colorSpace),Rt=r.convert(S.type),Kt=y(S.internalFormat,Ht,Rt,S.colorSpace),Yt=S.isVideoTexture!==!0,ue=et.__version===void 0||tt===!0,H=ot.dataReady;let yt=U(S,kt);at(n.TEXTURE_CUBE_MAP,S);let K;if(Zt){Yt&&ue&&e.texStorage2D(n.TEXTURE_CUBE_MAP,yt,Kt,kt.width,kt.height);for(let rt=0;rt<6;rt++){K=Ct[rt].mipmaps;for(let bt=0;bt<K.length;bt++){const Mt=K[bt];S.format!==vn?Ht!==null?Yt?H&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt,0,0,Mt.width,Mt.height,Ht,Mt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt,Kt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt,0,0,Mt.width,Mt.height,Ht,Rt,Mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt,Kt,Mt.width,Mt.height,0,Ht,Rt,Mt.data)}}}else{if(K=S.mipmaps,Yt&&ue){K.length>0&&yt++;const rt=wt(Ct[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,yt,Kt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(dt){Yt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ct[rt].width,Ct[rt].height,Ht,Rt,Ct[rt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Kt,Ct[rt].width,Ct[rt].height,0,Ht,Rt,Ct[rt].data);for(let bt=0;bt<K.length;bt++){const Wt=K[bt].image[rt].image;Yt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt+1,0,0,Wt.width,Wt.height,Ht,Rt,Wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt+1,Kt,Wt.width,Wt.height,0,Ht,Rt,Wt.data)}}else{Yt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ht,Rt,Ct[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Kt,Ht,Rt,Ct[rt]);for(let bt=0;bt<K.length;bt++){const Mt=K[bt];Yt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt+1,0,0,Ht,Rt,Mt.image[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt+1,Kt,Ht,Rt,Mt.image[rt])}}}m(S)&&p(n.TEXTURE_CUBE_MAP),et.__version=ot.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function ct(P,S,X,tt,ot,et){const Pt=r.convert(X.format,X.colorSpace),xt=r.convert(X.type),Et=y(X.internalFormat,Pt,xt,X.colorSpace),Zt=i.get(S),dt=i.get(X);if(dt.__renderTarget=S,!Zt.__hasExternalTextures){const Ct=Math.max(1,S.width>>et),kt=Math.max(1,S.height>>et);ot===n.TEXTURE_3D||ot===n.TEXTURE_2D_ARRAY?e.texImage3D(ot,et,Et,Ct,kt,S.depth,0,Pt,xt,null):e.texImage2D(ot,et,Et,Ct,kt,0,Pt,xt,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),Tt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,ot,dt.__webglTexture,0,ut(S)):(ot===n.TEXTURE_2D||ot>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,tt,ot,dt.__webglTexture,et),e.bindFramebuffer(n.FRAMEBUFFER,null)}function st(P,S,X){if(n.bindRenderbuffer(n.RENDERBUFFER,P),S.depthBuffer){const tt=S.depthTexture,ot=tt&&tt.isDepthTexture?tt.type:null,et=x(S.stencilBuffer,ot),Pt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=ut(S);Tt(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt,et,S.width,S.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt,et,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,et,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pt,n.RENDERBUFFER,P)}else{const tt=S.textures;for(let ot=0;ot<tt.length;ot++){const et=tt[ot],Pt=r.convert(et.format,et.colorSpace),xt=r.convert(et.type),Et=y(et.internalFormat,Pt,xt,et.colorSpace),Zt=ut(S);X&&Tt(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Zt,Et,S.width,S.height):Tt(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Zt,Et,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Et,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pt(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=i.get(S.depthTexture);tt.__renderTarget=S,(!tt.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),I(S.depthTexture,0);const ot=tt.__webglTexture,et=ut(S);if(S.depthTexture.format===as)Tt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ot,0,et):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ot,0);else if(S.depthTexture.format===vs)Tt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ot,0,et):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function At(P){const S=i.get(P),X=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const tt=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),tt){const ot=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,tt.removeEventListener("dispose",ot)};tt.addEventListener("dispose",ot),S.__depthDisposeCallback=ot}S.__boundDepthTexture=tt}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");pt(S.__webglFramebuffer,P)}else if(X){S.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[tt]),S.__webglDepthbuffer[tt]===void 0)S.__webglDepthbuffer[tt]=n.createRenderbuffer(),st(S.__webglDepthbuffer[tt],P,!1);else{const ot=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=S.__webglDepthbuffer[tt];n.bindRenderbuffer(n.RENDERBUFFER,et),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,et)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),st(S.__webglDepthbuffer,P,!1);else{const tt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,ot)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ot(P,S,X){const tt=i.get(P);S!==void 0&&ct(tt.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&At(P)}function Gt(P){const S=P.texture,X=i.get(P),tt=i.get(S);P.addEventListener("dispose",R);const ot=P.textures,et=P.isWebGLCubeRenderTarget===!0,Pt=ot.length>1;if(Pt||(tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture()),tt.__version=S.version,o.memory.textures++),et){X.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer[xt]=[];for(let Et=0;Et<S.mipmaps.length;Et++)X.__webglFramebuffer[xt][Et]=n.createFramebuffer()}else X.__webglFramebuffer[xt]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer=[];for(let xt=0;xt<S.mipmaps.length;xt++)X.__webglFramebuffer[xt]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(Pt)for(let xt=0,Et=ot.length;xt<Et;xt++){const Zt=i.get(ot[xt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&Tt(P)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let xt=0;xt<ot.length;xt++){const Et=ot[xt];X.__webglColorRenderbuffer[xt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[xt]);const Zt=r.convert(Et.format,Et.colorSpace),dt=r.convert(Et.type),Ct=y(Et.internalFormat,Zt,dt,Et.colorSpace,P.isXRRenderTarget===!0),kt=ut(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,kt,Ct,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,X.__webglColorRenderbuffer[xt])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),st(X.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(et){e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),at(n.TEXTURE_CUBE_MAP,S);for(let xt=0;xt<6;xt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Et=0;Et<S.mipmaps.length;Et++)ct(X.__webglFramebuffer[xt][Et],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Et);else ct(X.__webglFramebuffer[xt],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);m(S)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let xt=0,Et=ot.length;xt<Et;xt++){const Zt=ot[xt],dt=i.get(Zt);e.bindTexture(n.TEXTURE_2D,dt.__webglTexture),at(n.TEXTURE_2D,Zt),ct(X.__webglFramebuffer,P,Zt,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,0),m(Zt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let xt=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(xt=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(xt,tt.__webglTexture),at(xt,S),S.mipmaps&&S.mipmaps.length>0)for(let Et=0;Et<S.mipmaps.length;Et++)ct(X.__webglFramebuffer[Et],P,S,n.COLOR_ATTACHMENT0,xt,Et);else ct(X.__webglFramebuffer,P,S,n.COLOR_ATTACHMENT0,xt,0);m(S)&&p(xt),e.unbindTexture()}P.depthBuffer&&At(P)}function it(P){const S=P.textures;for(let X=0,tt=S.length;X<tt;X++){const ot=S[X];if(m(ot)){const et=v(P),Pt=i.get(ot).__webglTexture;e.bindTexture(et,Pt),p(et),e.unbindTexture()}}}const ht=[],O=[];function Ut(P){if(P.samples>0){if(Tt(P)===!1){const S=P.textures,X=P.width,tt=P.height;let ot=n.COLOR_BUFFER_BIT;const et=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pt=i.get(P),xt=S.length>1;if(xt)for(let Et=0;Et<S.length;Et++)e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Et=0;Et<S.length;Et++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ot|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ot|=n.STENCIL_BUFFER_BIT)),xt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pt.__webglColorRenderbuffer[Et]);const Zt=i.get(S[Et]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Zt,0)}n.blitFramebuffer(0,0,X,tt,0,0,X,tt,ot,n.NEAREST),l===!0&&(ht.length=0,O.length=0,ht.push(n.COLOR_ATTACHMENT0+Et),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ht.push(et),O.push(et),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xt)for(let Et=0;Et<S.length;Et++){e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,Pt.__webglColorRenderbuffer[Et]);const Zt=i.get(S[Et]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,Zt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const S=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function ut(P){return Math.min(s.maxSamples,P.samples)}function Tt(P){const S=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function _t(P){const S=o.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function zt(P,S){const X=P.colorSpace,tt=P.format,ot=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==Ss&&X!==si&&(te.getTransfer(X)===oe?(tt!==vn||ot!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),S}function wt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=w,this.resetTextureUnits=W,this.setTexture2D=I,this.setTexture2DArray=A,this.setTexture3D=B,this.setTextureCube=k,this.rebindTextures=Ot,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=Tt}function wg(n,t){function e(i,s=si){let r;const o=te.getTransfer(s);if(i===$n)return n.UNSIGNED_BYTE;if(i===el)return n.UNSIGNED_SHORT_4_4_4_4;if(i===nl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Sh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===yh)return n.BYTE;if(i===Mh)return n.SHORT;if(i===Xs)return n.UNSIGNED_SHORT;if(i===tl)return n.INT;if(i===Ri)return n.UNSIGNED_INT;if(i===An)return n.FLOAT;if(i===nr)return n.HALF_FLOAT;if(i===bh)return n.ALPHA;if(i===wh)return n.RGB;if(i===vn)return n.RGBA;if(i===Eh)return n.LUMINANCE;if(i===Th)return n.LUMINANCE_ALPHA;if(i===as)return n.DEPTH_COMPONENT;if(i===vs)return n.DEPTH_STENCIL;if(i===il)return n.RED;if(i===sl)return n.RED_INTEGER;if(i===Ah)return n.RG;if(i===rl)return n.RG_INTEGER;if(i===ol)return n.RGBA_INTEGER;if(i===Vr||i===Gr||i===Wr||i===Xr)if(o===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ga||i===_a||i===va||i===xa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_a)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===va)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ya||i===Ma||i===Sa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ya||i===Ma)return o===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Sa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ba||i===wa||i===Ea||i===Ta||i===Aa||i===Ca||i===Ra||i===Pa||i===La||i===Da||i===Ia||i===Ua||i===Na||i===Oa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ba)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ea)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ta)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Aa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ca)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ra)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===La)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Da)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ia)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ua)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Na)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Oa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qr||i===Fa||i===Ba)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===qr)return o===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ba)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ch||i===za||i===ka||i===Ha)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===qr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===za)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ha)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_s?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Eg extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Bt extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tg={type:"move"};class Wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Bt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Ag=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cg=`
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

}`;class Rg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Fe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ui({vertexShader:Ag,fragmentShader:Cg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ft(new yn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pg extends Ii{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new Rg,m=e.getContextAttributes();let p=null,v=null;const y=[],x=[],U=new lt;let C=null;const R=new on;R.viewport=new be;const D=new on;D.viewport=new be;const b=[R,D],M=new Eg;let L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let nt=y[Y];return nt===void 0&&(nt=new Wo,y[Y]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Y){let nt=y[Y];return nt===void 0&&(nt=new Wo,y[Y]=nt),nt.getGripSpace()},this.getHand=function(Y){let nt=y[Y];return nt===void 0&&(nt=new Wo,y[Y]=nt),nt.getHandSpace()};function w(Y){const nt=x.indexOf(Y.inputSource);if(nt===-1)return;const ct=y[nt];ct!==void 0&&(ct.update(Y.inputSource,Y.frame,c||o),ct.dispatchEvent({type:Y.type,data:Y.inputSource}))}function N(){s.removeEventListener("select",w),s.removeEventListener("selectstart",w),s.removeEventListener("selectend",w),s.removeEventListener("squeeze",w),s.removeEventListener("squeezestart",w),s.removeEventListener("squeezeend",w),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",I);for(let Y=0;Y<y.length;Y++){const nt=x[Y];nt!==null&&(x[Y]=null,y[Y].disconnect(nt))}L=null,W=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,v=null,gt.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",w),s.addEventListener("selectstart",w),s.addEventListener("selectend",w),s.addEventListener("squeeze",w),s.addEventListener("squeezestart",w),s.addEventListener("squeezeend",w),s.addEventListener("end",N),s.addEventListener("inputsourceschange",I),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){const nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Pi(f.framebufferWidth,f.framebufferHeight,{format:vn,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,ct=null,st=null;m.depth&&(st=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?vs:as,ct=m.stencil?_s:Ri);const pt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(pt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Pi(d.textureWidth,d.textureHeight,{format:vn,type:$n,depthTexture:new Vh(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),gt.setContext(s),gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function I(Y){for(let nt=0;nt<Y.removed.length;nt++){const ct=Y.removed[nt],st=x.indexOf(ct);st>=0&&(x[st]=null,y[st].disconnect(ct))}for(let nt=0;nt<Y.added.length;nt++){const ct=Y.added[nt];let st=x.indexOf(ct);if(st===-1){for(let At=0;At<y.length;At++)if(At>=x.length){x.push(ct),st=At;break}else if(x[At]===null){x[At]=ct,st=At;break}if(st===-1)break}const pt=y[st];pt&&pt.connect(ct)}}const A=new E,B=new E;function k(Y,nt,ct){A.setFromMatrixPosition(nt.matrixWorld),B.setFromMatrixPosition(ct.matrixWorld);const st=A.distanceTo(B),pt=nt.projectionMatrix.elements,At=ct.projectionMatrix.elements,Ot=pt[14]/(pt[10]-1),Gt=pt[14]/(pt[10]+1),it=(pt[9]+1)/pt[5],ht=(pt[9]-1)/pt[5],O=(pt[8]-1)/pt[0],Ut=(At[8]+1)/At[0],ut=Ot*O,Tt=Ot*Ut,_t=st/(-O+Ut),zt=_t*-O;if(nt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(zt),Y.translateZ(_t),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),pt[10]===-1)Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const wt=Ot+_t,P=Gt+_t,S=ut-zt,X=Tt+(st-zt),tt=it*Gt/P*wt,ot=ht*Gt/P*wt;Y.projectionMatrix.makePerspective(S,X,tt,ot,wt,P),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function q(Y,nt){nt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(nt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let nt=Y.near,ct=Y.far;_.texture!==null&&(_.depthNear>0&&(nt=_.depthNear),_.depthFar>0&&(ct=_.depthFar)),M.near=D.near=R.near=nt,M.far=D.far=R.far=ct,(L!==M.near||W!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,W=M.far),R.layers.mask=Y.layers.mask|2,D.layers.mask=Y.layers.mask|4,M.layers.mask=R.layers.mask|D.layers.mask;const st=Y.parent,pt=M.cameras;q(M,st);for(let At=0;At<pt.length;At++)q(pt[At],st);pt.length===2?k(M,R,D):M.projectionMatrix.copy(R.projectionMatrix),j(Y,M,st)};function j(Y,nt,ct){ct===null?Y.matrix.copy(nt.matrixWorld):(Y.matrix.copy(ct.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(nt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=qs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let Q=null;function at(Y,nt){if(h=nt.getViewerPose(c||o),g=nt,h!==null){const ct=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let st=!1;ct.length!==M.cameras.length&&(M.cameras.length=0,st=!0);for(let At=0;At<ct.length;At++){const Ot=ct[At];let Gt=null;if(f!==null)Gt=f.getViewport(Ot);else{const ht=u.getViewSubImage(d,Ot);Gt=ht.viewport,At===0&&(t.setRenderTargetTextures(v,ht.colorTexture,d.ignoreDepthValues?void 0:ht.depthStencilTexture),t.setRenderTarget(v))}let it=b[At];it===void 0&&(it=new on,it.layers.enable(At),it.viewport=new be,b[At]=it),it.matrix.fromArray(Ot.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(Ot.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),At===0&&(M.matrix.copy(it.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),st===!0&&M.cameras.push(it)}const pt=s.enabledFeatures;if(pt&&pt.includes("depth-sensing")){const At=u.getDepthInformation(ct[0]);At&&At.isValid&&At.texture&&_.init(t,At,s.renderState)}}for(let ct=0;ct<y.length;ct++){const st=x[ct],pt=y[ct];st!==null&&pt!==void 0&&pt.update(st,nt,c||o)}Q&&Q(Y,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),g=null}const gt=new kh;gt.setAnimationLoop(at),this.setAnimationLoop=function(Y){Q=Y},this.dispose=function(){}}}const yi=new Cn,Lg=new ce;function Dg(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Fh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,yi.copy(x),yi.x*=-1,yi.y*=-1,yi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),m.envMapRotation.value.setFromMatrix4(Lg.makeRotationFromEuler(yi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ig(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const x=y.program;i.uniformBlockBinding(v,x)}function c(v,y){let x=s[v.id];x===void 0&&(g(v),x=h(v),s[v.id]=x,v.addEventListener("dispose",m));const U=y.program;i.updateUBOMapping(v,U);const C=t.render.frame;r[v.id]!==C&&(d(v),r[v.id]=C)}function h(v){const y=u();v.__bindingPointIndex=y;const x=n.createBuffer(),U=v.__size,C=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,U,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=s[v.id],x=v.uniforms,U=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let C=0,R=x.length;C<R;C++){const D=Array.isArray(x[C])?x[C]:[x[C]];for(let b=0,M=D.length;b<M;b++){const L=D[b];if(f(L,C,b,U)===!0){const W=L.__offset,w=Array.isArray(L.value)?L.value:[L.value];let N=0;for(let I=0;I<w.length;I++){const A=w[I],B=_(A);typeof A=="number"||typeof A=="boolean"?(L.__data[0]=A,n.bufferSubData(n.UNIFORM_BUFFER,W+N,L.__data)):A.isMatrix3?(L.__data[0]=A.elements[0],L.__data[1]=A.elements[1],L.__data[2]=A.elements[2],L.__data[3]=0,L.__data[4]=A.elements[3],L.__data[5]=A.elements[4],L.__data[6]=A.elements[5],L.__data[7]=0,L.__data[8]=A.elements[6],L.__data[9]=A.elements[7],L.__data[10]=A.elements[8],L.__data[11]=0):(A.toArray(L.__data,N),N+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,y,x,U){const C=v.value,R=y+"_"+x;if(U[R]===void 0)return typeof C=="number"||typeof C=="boolean"?U[R]=C:U[R]=C.clone(),!0;{const D=U[R];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return U[R]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function g(v){const y=v.uniforms;let x=0;const U=16;for(let R=0,D=y.length;R<D;R++){const b=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,L=b.length;M<L;M++){const W=b[M],w=Array.isArray(W.value)?W.value:[W.value];for(let N=0,I=w.length;N<I;N++){const A=w[N],B=_(A),k=x%U,q=k%B.boundary,j=k+q;x+=q,j!==0&&U-j<B.storage&&(x+=U-j),W.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=x,x+=B.storage}}}const C=x%U;return C>0&&(x+=U-C),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Ug{constructor(t={}){const{canvas:e=Md(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ye,this.toneMapping=oi,this.toneMappingExposure=1;const x=this;let U=!1,C=0,R=0,D=null,b=-1,M=null;const L=new be,W=new be;let w=null;const N=new Jt(0);let I=0,A=e.width,B=e.height,k=1,q=null,j=null;const Q=new be(0,0,A,B),at=new be(0,0,A,B);let gt=!1;const Y=new cl;let nt=!1,ct=!1;const st=new ce,pt=new ce,At=new E,Ot=new be,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function ht(){return D===null?k:1}let O=i;function Ut(T,V){return e.getContext(T,V)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qa}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),O===null){const V="webgl2";if(O=Ut(V,T),O===null)throw Ut(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ut,Tt,_t,zt,wt,P,S,X,tt,ot,et,Pt,xt,Et,Zt,dt,Ct,kt,Ht,Rt,Kt,Yt,ue,H;function yt(){ut=new zm(O),ut.init(),Yt=new wg(O,ut),Tt=new Im(O,ut,t,Yt),_t=new Mg(O,ut),Tt.reverseDepthBuffer&&d&&_t.buffers.depth.setReversed(!0),zt=new Vm(O),wt=new og,P=new bg(O,ut,_t,wt,Tt,Yt,zt),S=new Nm(x),X=new Bm(x),tt=new $d(O),ue=new Lm(O,tt),ot=new km(O,tt,zt,ue),et=new Wm(O,ot,tt,zt),Ht=new Gm(O,Tt,P),dt=new Um(wt),Pt=new rg(x,S,X,ut,Tt,ue,dt),xt=new Dg(x,wt),Et=new lg,Zt=new pg(ut),kt=new Pm(x,S,X,_t,et,f,l),Ct=new xg(x,et,Tt),H=new Ig(O,zt,Tt,_t),Rt=new Dm(O,ut,zt),Kt=new Hm(O,ut,zt),zt.programs=Pt.programs,x.capabilities=Tt,x.extensions=ut,x.properties=wt,x.renderLists=Et,x.shadowMap=Ct,x.state=_t,x.info=zt}yt();const K=new Pg(x,O);this.xr=K,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=ut.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ut.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(T){T!==void 0&&(k=T,this.setSize(A,B,!1))},this.getSize=function(T){return T.set(A,B)},this.setSize=function(T,V,Z=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=T,B=V,e.width=Math.floor(T*k),e.height=Math.floor(V*k),Z===!0&&(e.style.width=T+"px",e.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(A*k,B*k).floor()},this.setDrawingBufferSize=function(T,V,Z){A=T,B=V,k=Z,e.width=Math.floor(T*Z),e.height=Math.floor(V*Z),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(Q)},this.setViewport=function(T,V,Z,J){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,V,Z,J),_t.viewport(L.copy(Q).multiplyScalar(k).round())},this.getScissor=function(T){return T.copy(at)},this.setScissor=function(T,V,Z,J){T.isVector4?at.set(T.x,T.y,T.z,T.w):at.set(T,V,Z,J),_t.scissor(W.copy(at).multiplyScalar(k).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(T){_t.setScissorTest(gt=T)},this.setOpaqueSort=function(T){q=T},this.setTransparentSort=function(T){j=T},this.getClearColor=function(T){return T.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(T=!0,V=!0,Z=!0){let J=0;if(T){let G=!1;if(D!==null){const mt=D.texture.format;G=mt===ol||mt===rl||mt===sl}if(G){const mt=D.texture.type,St=mt===$n||mt===Ri||mt===Xs||mt===_s||mt===el||mt===nl,Lt=kt.getClearColor(),Dt=kt.getClearAlpha(),Vt=Lt.r,Xt=Lt.g,It=Lt.b;St?(g[0]=Vt,g[1]=Xt,g[2]=It,g[3]=Dt,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=Vt,_[1]=Xt,_[2]=It,_[3]=Dt,O.clearBufferiv(O.COLOR,0,_))}else J|=O.COLOR_BUFFER_BIT}V&&(J|=O.DEPTH_BUFFER_BIT),Z&&(J|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),Et.dispose(),Zt.dispose(),wt.dispose(),S.dispose(),X.dispose(),et.dispose(),ue.dispose(),H.dispose(),Pt.dispose(),K.dispose(),K.removeEventListener("sessionstart",Pl),K.removeEventListener("sessionend",Ll),pi.stop()};function rt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const T=zt.autoReset,V=Ct.enabled,Z=Ct.autoUpdate,J=Ct.needsUpdate,G=Ct.type;yt(),zt.autoReset=T,Ct.enabled=V,Ct.autoUpdate=Z,Ct.needsUpdate=J,Ct.type=G}function Mt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Wt(T){const V=T.target;V.removeEventListener("dispose",Wt),Se(V)}function Se(T){Be(T),wt.remove(T)}function Be(T){const V=wt.get(T).programs;V!==void 0&&(V.forEach(function(Z){Pt.releaseProgram(Z)}),T.isShaderMaterial&&Pt.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,Z,J,G,mt){V===null&&(V=Gt);const St=G.isMesh&&G.matrixWorld.determinant()<0,Lt=_u(T,V,Z,J,G);_t.setMaterial(J,St);let Dt=Z.index,Vt=1;if(J.wireframe===!0){if(Dt=ot.getWireframeAttribute(Z),Dt===void 0)return;Vt=2}const Xt=Z.drawRange,It=Z.attributes.position;let ne=Xt.start*Vt,de=(Xt.start+Xt.count)*Vt;mt!==null&&(ne=Math.max(ne,mt.start*Vt),de=Math.min(de,(mt.start+mt.count)*Vt)),Dt!==null?(ne=Math.max(ne,0),de=Math.min(de,Dt.count)):It!=null&&(ne=Math.max(ne,0),de=Math.min(de,It.count));const fe=de-ne;if(fe<0||fe===1/0)return;ue.setup(G,J,Lt,Z,Dt);let Ye,ie=Rt;if(Dt!==null&&(Ye=tt.get(Dt),ie=Kt,ie.setIndex(Ye)),G.isMesh)J.wireframe===!0?(_t.setLineWidth(J.wireframeLinewidth*ht()),ie.setMode(O.LINES)):ie.setMode(O.TRIANGLES);else if(G.isLine){let Nt=J.linewidth;Nt===void 0&&(Nt=1),_t.setLineWidth(Nt*ht()),G.isLineSegments?ie.setMode(O.LINES):G.isLineLoop?ie.setMode(O.LINE_LOOP):ie.setMode(O.LINE_STRIP)}else G.isPoints?ie.setMode(O.POINTS):G.isSprite&&ie.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)ie.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))ie.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Nt=G._multiDrawStarts,In=G._multiDrawCounts,se=G._multiDrawCount,un=Dt?tt.get(Dt).bytesPerElement:1,Bi=wt.get(J).currentProgram.getUniforms();for(let Je=0;Je<se;Je++)Bi.setValue(O,"_gl_DrawID",Je),ie.render(Nt[Je]/un,In[Je])}else if(G.isInstancedMesh)ie.renderInstances(ne,fe,G.count);else if(Z.isInstancedBufferGeometry){const Nt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,In=Math.min(Z.instanceCount,Nt);ie.renderInstances(ne,fe,In)}else ie.render(ne,fe)};function re(T,V,Z){T.transparent===!0&&T.side===Ne&&T.forceSinglePass===!1?(T.side=je,T.needsUpdate=!0,cr(T,V,Z),T.side=Yn,T.needsUpdate=!0,cr(T,V,Z),T.side=Ne):cr(T,V,Z)}this.compile=function(T,V,Z=null){Z===null&&(Z=T),p=Zt.get(Z),p.init(V),y.push(p),Z.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),T!==Z&&T.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const J=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const mt=G.material;if(mt)if(Array.isArray(mt))for(let St=0;St<mt.length;St++){const Lt=mt[St];re(Lt,Z,G),J.add(Lt)}else re(mt,Z,G),J.add(mt)}),y.pop(),p=null,J},this.compileAsync=function(T,V,Z=null){const J=this.compile(T,V,Z);return new Promise(G=>{function mt(){if(J.forEach(function(St){wt.get(St).currentProgram.isReady()&&J.delete(St)}),J.size===0){G(T);return}setTimeout(mt,10)}ut.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let hn=null;function Dn(T){hn&&hn(T)}function Pl(){pi.stop()}function Ll(){pi.start()}const pi=new kh;pi.setAnimationLoop(Dn),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(T){hn=T,K.setAnimationLoop(T),T===null?pi.stop():pi.start()},K.addEventListener("sessionstart",Pl),K.addEventListener("sessionend",Ll),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(V),V=K.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,V,D),p=Zt.get(T,y.length),p.init(V),y.push(p),pt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Y.setFromProjectionMatrix(pt),ct=this.localClippingEnabled,nt=dt.init(this.clippingPlanes,ct),m=Et.get(T,v.length),m.init(),v.push(m),K.enabled===!0&&K.isPresenting===!0){const mt=x.xr.getDepthSensingMesh();mt!==null&&go(mt,V,-1/0,x.sortObjects)}go(T,V,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(q,j),it=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,it&&kt.addToRenderList(m,T),this.info.render.frame++,nt===!0&&dt.beginShadows();const Z=p.state.shadowsArray;Ct.render(Z,T,V),nt===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,G=m.transmissive;if(p.setupLights(),V.isArrayCamera){const mt=V.cameras;if(G.length>0)for(let St=0,Lt=mt.length;St<Lt;St++){const Dt=mt[St];Il(J,G,T,Dt)}it&&kt.render(T);for(let St=0,Lt=mt.length;St<Lt;St++){const Dt=mt[St];Dl(m,T,Dt,Dt.viewport)}}else G.length>0&&Il(J,G,T,V),it&&kt.render(T),Dl(m,T,V);D!==null&&(P.updateMultisampleRenderTarget(D),P.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(x,T,V),ue.resetDefaultState(),b=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],nt===!0&&dt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function go(T,V,Z,J){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){J&&Ot.setFromMatrixPosition(T.matrixWorld).applyMatrix4(pt);const St=et.update(T),Lt=T.material;Lt.visible&&m.push(T,St,Lt,Z,Ot.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Y.intersectsObject(T))){const St=et.update(T),Lt=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ot.copy(T.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Ot.copy(St.boundingSphere.center)),Ot.applyMatrix4(T.matrixWorld).applyMatrix4(pt)),Array.isArray(Lt)){const Dt=St.groups;for(let Vt=0,Xt=Dt.length;Vt<Xt;Vt++){const It=Dt[Vt],ne=Lt[It.materialIndex];ne&&ne.visible&&m.push(T,St,ne,Z,Ot.z,It)}}else Lt.visible&&m.push(T,St,Lt,Z,Ot.z,null)}}const mt=T.children;for(let St=0,Lt=mt.length;St<Lt;St++)go(mt[St],V,Z,J)}function Dl(T,V,Z,J){const G=T.opaque,mt=T.transmissive,St=T.transparent;p.setupLightsView(Z),nt===!0&&dt.setGlobalState(x.clippingPlanes,Z),J&&_t.viewport(L.copy(J)),G.length>0&&lr(G,V,Z),mt.length>0&&lr(mt,V,Z),St.length>0&&lr(St,V,Z),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Il(T,V,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new Pi(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?nr:$n,minFilter:Ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const mt=p.state.transmissionRenderTarget[J.id],St=J.viewport||L;mt.setSize(St.z,St.w);const Lt=x.getRenderTarget();x.setRenderTarget(mt),x.getClearColor(N),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear(),it&&kt.render(Z);const Dt=x.toneMapping;x.toneMapping=oi;const Vt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),nt===!0&&dt.setGlobalState(x.clippingPlanes,J),lr(T,Z,J),P.updateMultisampleRenderTarget(mt),P.updateRenderTargetMipmap(mt),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let It=0,ne=V.length;It<ne;It++){const de=V[It],fe=de.object,Ye=de.geometry,ie=de.material,Nt=de.group;if(ie.side===Ne&&fe.layers.test(J.layers)){const In=ie.side;ie.side=je,ie.needsUpdate=!0,Ul(fe,Z,J,Ye,ie,Nt),ie.side=In,ie.needsUpdate=!0,Xt=!0}}Xt===!0&&(P.updateMultisampleRenderTarget(mt),P.updateRenderTargetMipmap(mt))}x.setRenderTarget(Lt),x.setClearColor(N,I),Vt!==void 0&&(J.viewport=Vt),x.toneMapping=Dt}function lr(T,V,Z){const J=V.isScene===!0?V.overrideMaterial:null;for(let G=0,mt=T.length;G<mt;G++){const St=T[G],Lt=St.object,Dt=St.geometry,Vt=J===null?St.material:J,Xt=St.group;Lt.layers.test(Z.layers)&&Ul(Lt,V,Z,Dt,Vt,Xt)}}function Ul(T,V,Z,J,G,mt){T.onBeforeRender(x,V,Z,J,G,mt),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(x,V,Z,J,T,mt),G.transparent===!0&&G.side===Ne&&G.forceSinglePass===!1?(G.side=je,G.needsUpdate=!0,x.renderBufferDirect(Z,V,J,G,T,mt),G.side=Yn,G.needsUpdate=!0,x.renderBufferDirect(Z,V,J,G,T,mt),G.side=Ne):x.renderBufferDirect(Z,V,J,G,T,mt),T.onAfterRender(x,V,Z,J,G,mt)}function cr(T,V,Z){V.isScene!==!0&&(V=Gt);const J=wt.get(T),G=p.state.lights,mt=p.state.shadowsArray,St=G.state.version,Lt=Pt.getParameters(T,G.state,mt,V,Z),Dt=Pt.getProgramCacheKey(Lt);let Vt=J.programs;J.environment=T.isMeshStandardMaterial?V.environment:null,J.fog=V.fog,J.envMap=(T.isMeshStandardMaterial?X:S).get(T.envMap||J.environment),J.envMapRotation=J.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,Vt===void 0&&(T.addEventListener("dispose",Wt),Vt=new Map,J.programs=Vt);let Xt=Vt.get(Dt);if(Xt!==void 0){if(J.currentProgram===Xt&&J.lightsStateVersion===St)return Ol(T,Lt),Xt}else Lt.uniforms=Pt.getUniforms(T),T.onBeforeCompile(Lt,x),Xt=Pt.acquireProgram(Lt,Dt),Vt.set(Dt,Xt),J.uniforms=Lt.uniforms;const It=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(It.clippingPlanes=dt.uniform),Ol(T,Lt),J.needsLights=xu(T),J.lightsStateVersion=St,J.needsLights&&(It.ambientLightColor.value=G.state.ambient,It.lightProbe.value=G.state.probe,It.directionalLights.value=G.state.directional,It.directionalLightShadows.value=G.state.directionalShadow,It.spotLights.value=G.state.spot,It.spotLightShadows.value=G.state.spotShadow,It.rectAreaLights.value=G.state.rectArea,It.ltc_1.value=G.state.rectAreaLTC1,It.ltc_2.value=G.state.rectAreaLTC2,It.pointLights.value=G.state.point,It.pointLightShadows.value=G.state.pointShadow,It.hemisphereLights.value=G.state.hemi,It.directionalShadowMap.value=G.state.directionalShadowMap,It.directionalShadowMatrix.value=G.state.directionalShadowMatrix,It.spotShadowMap.value=G.state.spotShadowMap,It.spotLightMatrix.value=G.state.spotLightMatrix,It.spotLightMap.value=G.state.spotLightMap,It.pointShadowMap.value=G.state.pointShadowMap,It.pointShadowMatrix.value=G.state.pointShadowMatrix),J.currentProgram=Xt,J.uniformsList=null,Xt}function Nl(T){if(T.uniformsList===null){const V=T.currentProgram.getUniforms();T.uniformsList=Yr.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function Ol(T,V){const Z=wt.get(T);Z.outputColorSpace=V.outputColorSpace,Z.batching=V.batching,Z.batchingColor=V.batchingColor,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.instancingMorph=V.instancingMorph,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function _u(T,V,Z,J,G){V.isScene!==!0&&(V=Gt),P.resetTextureUnits();const mt=V.fog,St=J.isMeshStandardMaterial?V.environment:null,Lt=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ss,Dt=(J.isMeshStandardMaterial?X:S).get(J.envMap||St),Vt=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Xt=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),It=!!Z.morphAttributes.position,ne=!!Z.morphAttributes.normal,de=!!Z.morphAttributes.color;let fe=oi;J.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(fe=x.toneMapping);const Ye=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ie=Ye!==void 0?Ye.length:0,Nt=wt.get(J),In=p.state.lights;if(nt===!0&&(ct===!0||T!==M)){const nn=T===M&&J.id===b;dt.setState(J,T,nn)}let se=!1;J.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==In.state.version||Nt.outputColorSpace!==Lt||G.isBatchedMesh&&Nt.batching===!1||!G.isBatchedMesh&&Nt.batching===!0||G.isBatchedMesh&&Nt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Nt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Nt.instancing===!1||!G.isInstancedMesh&&Nt.instancing===!0||G.isSkinnedMesh&&Nt.skinning===!1||!G.isSkinnedMesh&&Nt.skinning===!0||G.isInstancedMesh&&Nt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Nt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Nt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Nt.instancingMorph===!1&&G.morphTexture!==null||Nt.envMap!==Dt||J.fog===!0&&Nt.fog!==mt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==dt.numPlanes||Nt.numIntersection!==dt.numIntersection)||Nt.vertexAlphas!==Vt||Nt.vertexTangents!==Xt||Nt.morphTargets!==It||Nt.morphNormals!==ne||Nt.morphColors!==de||Nt.toneMapping!==fe||Nt.morphTargetsCount!==ie)&&(se=!0):(se=!0,Nt.__version=J.version);let un=Nt.currentProgram;se===!0&&(un=cr(J,V,G));let Bi=!1,Je=!1,As=!1;const pe=un.getUniforms(),Mn=Nt.uniforms;if(_t.useProgram(un.program)&&(Bi=!0,Je=!0,As=!0),J.id!==b&&(b=J.id,Je=!0),Bi||M!==T){_t.buffers.depth.getReversed()?(st.copy(T.projectionMatrix),bd(st),wd(st),pe.setValue(O,"projectionMatrix",st)):pe.setValue(O,"projectionMatrix",T.projectionMatrix),pe.setValue(O,"viewMatrix",T.matrixWorldInverse);const jn=pe.map.cameraPosition;jn!==void 0&&jn.setValue(O,At.setFromMatrixPosition(T.matrixWorld)),Tt.logarithmicDepthBuffer&&pe.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&pe.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Je=!0,As=!0)}if(G.isSkinnedMesh){pe.setOptional(O,G,"bindMatrix"),pe.setOptional(O,G,"bindMatrixInverse");const nn=G.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),pe.setValue(O,"boneTexture",nn.boneTexture,P))}G.isBatchedMesh&&(pe.setOptional(O,G,"batchingTexture"),pe.setValue(O,"batchingTexture",G._matricesTexture,P),pe.setOptional(O,G,"batchingIdTexture"),pe.setValue(O,"batchingIdTexture",G._indirectTexture,P),pe.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&pe.setValue(O,"batchingColorTexture",G._colorsTexture,P));const Cs=Z.morphAttributes;if((Cs.position!==void 0||Cs.normal!==void 0||Cs.color!==void 0)&&Ht.update(G,Z,un),(Je||Nt.receiveShadow!==G.receiveShadow)&&(Nt.receiveShadow=G.receiveShadow,pe.setValue(O,"receiveShadow",G.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Mn.envMap.value=Dt,Mn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&V.environment!==null&&(Mn.envMapIntensity.value=V.environmentIntensity),Je&&(pe.setValue(O,"toneMappingExposure",x.toneMappingExposure),Nt.needsLights&&vu(Mn,As),mt&&J.fog===!0&&xt.refreshFogUniforms(Mn,mt),xt.refreshMaterialUniforms(Mn,J,k,B,p.state.transmissionRenderTarget[T.id]),Yr.upload(O,Nl(Nt),Mn,P)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Yr.upload(O,Nl(Nt),Mn,P),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&pe.setValue(O,"center",G.center),pe.setValue(O,"modelViewMatrix",G.modelViewMatrix),pe.setValue(O,"normalMatrix",G.normalMatrix),pe.setValue(O,"modelMatrix",G.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const nn=J.uniformsGroups;for(let jn=0,Zn=nn.length;jn<Zn;jn++){const Fl=nn[jn];H.update(Fl,un),H.bind(Fl,un)}}return un}function vu(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function xu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,V,Z){wt.get(T.texture).__webglTexture=V,wt.get(T.depthTexture).__webglTexture=Z;const J=wt.get(T);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,V){const Z=wt.get(T);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,Z=0){D=T,C=V,R=Z;let J=!0,G=null,mt=!1,St=!1;if(T){const Dt=wt.get(T);if(Dt.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(O.FRAMEBUFFER,null),J=!1;else if(Dt.__webglFramebuffer===void 0)P.setupRenderTarget(T);else if(Dt.__hasExternalTextures)P.rebindTextures(T,wt.get(T.texture).__webglTexture,wt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const It=T.depthTexture;if(Dt.__boundDepthTexture!==It){if(It!==null&&wt.has(It)&&(T.width!==It.image.width||T.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(T)}}const Vt=T.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(St=!0);const Xt=wt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Xt[V])?G=Xt[V][Z]:G=Xt[V],mt=!0):T.samples>0&&P.useMultisampledRTT(T)===!1?G=wt.get(T).__webglMultisampledFramebuffer:Array.isArray(Xt)?G=Xt[Z]:G=Xt,L.copy(T.viewport),W.copy(T.scissor),w=T.scissorTest}else L.copy(Q).multiplyScalar(k).floor(),W.copy(at).multiplyScalar(k).floor(),w=gt;if(_t.bindFramebuffer(O.FRAMEBUFFER,G)&&J&&_t.drawBuffers(T,G),_t.viewport(L),_t.scissor(W),_t.setScissorTest(w),mt){const Dt=wt.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+V,Dt.__webglTexture,Z)}else if(St){const Dt=wt.get(T.texture),Vt=V||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Dt.__webglTexture,Z||0,Vt)}b=-1},this.readRenderTargetPixels=function(T,V,Z,J,G,mt,St){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=wt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&St!==void 0&&(Lt=Lt[St]),Lt){_t.bindFramebuffer(O.FRAMEBUFFER,Lt);try{const Dt=T.texture,Vt=Dt.format,Xt=Dt.type;if(!Tt.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-J&&Z>=0&&Z<=T.height-G&&O.readPixels(V,Z,J,G,Yt.convert(Vt),Yt.convert(Xt),mt)}finally{const Dt=D!==null?wt.get(D).__webglFramebuffer:null;_t.bindFramebuffer(O.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(T,V,Z,J,G,mt,St){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=wt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&St!==void 0&&(Lt=Lt[St]),Lt){const Dt=T.texture,Vt=Dt.format,Xt=Dt.type;if(!Tt.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=T.width-J&&Z>=0&&Z<=T.height-G){_t.bindFramebuffer(O.FRAMEBUFFER,Lt);const It=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,It),O.bufferData(O.PIXEL_PACK_BUFFER,mt.byteLength,O.STREAM_READ),O.readPixels(V,Z,J,G,Yt.convert(Vt),Yt.convert(Xt),0);const ne=D!==null?wt.get(D).__webglFramebuffer:null;_t.bindFramebuffer(O.FRAMEBUFFER,ne);const de=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Sd(O,de,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,It),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,mt),O.deleteBuffer(It),O.deleteSync(de),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,V=null,Z=0){T.isTexture!==!0&&(Fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,T=arguments[1]);const J=Math.pow(2,-Z),G=Math.floor(T.image.width*J),mt=Math.floor(T.image.height*J),St=V!==null?V.x:0,Lt=V!==null?V.y:0;P.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,St,Lt,G,mt),_t.unbindTexture()},this.copyTextureToTexture=function(T,V,Z=null,J=null,G=0){T.isTexture!==!0&&(Fs("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,T=arguments[1],V=arguments[2],G=arguments[3]||0,Z=null);let mt,St,Lt,Dt,Vt,Xt,It,ne,de;const fe=T.isCompressedTexture?T.mipmaps[G]:T.image;Z!==null?(mt=Z.max.x-Z.min.x,St=Z.max.y-Z.min.y,Lt=Z.isBox3?Z.max.z-Z.min.z:1,Dt=Z.min.x,Vt=Z.min.y,Xt=Z.isBox3?Z.min.z:0):(mt=fe.width,St=fe.height,Lt=fe.depth||1,Dt=0,Vt=0,Xt=0),J!==null?(It=J.x,ne=J.y,de=J.z):(It=0,ne=0,de=0);const Ye=Yt.convert(V.format),ie=Yt.convert(V.type);let Nt;V.isData3DTexture?(P.setTexture3D(V,0),Nt=O.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(P.setTexture2DArray(V,0),Nt=O.TEXTURE_2D_ARRAY):(P.setTexture2D(V,0),Nt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);const In=O.getParameter(O.UNPACK_ROW_LENGTH),se=O.getParameter(O.UNPACK_IMAGE_HEIGHT),un=O.getParameter(O.UNPACK_SKIP_PIXELS),Bi=O.getParameter(O.UNPACK_SKIP_ROWS),Je=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,fe.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,fe.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Dt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Vt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Xt);const As=T.isDataArrayTexture||T.isData3DTexture,pe=V.isDataArrayTexture||V.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Mn=wt.get(T),Cs=wt.get(V),nn=wt.get(Mn.__renderTarget),jn=wt.get(Cs.__renderTarget);_t.bindFramebuffer(O.READ_FRAMEBUFFER,nn.__webglFramebuffer),_t.bindFramebuffer(O.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let Zn=0;Zn<Lt;Zn++)As&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,wt.get(T).__webglTexture,G,Xt+Zn),T.isDepthTexture?(pe&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,wt.get(V).__webglTexture,G,de+Zn),O.blitFramebuffer(Dt,Vt,mt,St,It,ne,mt,St,O.DEPTH_BUFFER_BIT,O.NEAREST)):pe?O.copyTexSubImage3D(Nt,G,It,ne,de+Zn,Dt,Vt,mt,St):O.copyTexSubImage2D(Nt,G,It,ne,de+Zn,Dt,Vt,mt,St);_t.bindFramebuffer(O.READ_FRAMEBUFFER,null),_t.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else pe?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(Nt,G,It,ne,de,mt,St,Lt,Ye,ie,fe.data):V.isCompressedArrayTexture?O.compressedTexSubImage3D(Nt,G,It,ne,de,mt,St,Lt,Ye,fe.data):O.texSubImage3D(Nt,G,It,ne,de,mt,St,Lt,Ye,ie,fe):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,G,It,ne,mt,St,Ye,ie,fe.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,G,It,ne,fe.width,fe.height,Ye,fe.data):O.texSubImage2D(O.TEXTURE_2D,G,It,ne,mt,St,Ye,ie,fe);O.pixelStorei(O.UNPACK_ROW_LENGTH,In),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,se),O.pixelStorei(O.UNPACK_SKIP_PIXELS,un),O.pixelStorei(O.UNPACK_SKIP_ROWS,Bi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Je),G===0&&V.generateMipmaps&&O.generateMipmap(Nt),_t.unbindTexture()},this.copyTextureToTexture3D=function(T,V,Z=null,J=null,G=0){return T.isTexture!==!0&&(Fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,J=arguments[1]||null,T=arguments[2],V=arguments[3],G=arguments[4]||0),Fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,V,Z,J,G)},this.initRenderTarget=function(T){wt.get(T).__webglFramebuffer===void 0&&P.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),_t.unbindTexture()},this.resetState=function(){C=0,R=0,D=null,_t.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}class ul{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Jt(t),this.near=e,this.far=i}clone(){return new ul(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ng extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Og extends Fe{constructor(t=null,e=1,i=1,s,r,o,a,l,c=en,h=en,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fc extends xn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Qi=new ce,Bc=new ce,Lr=[],zc=new di,Fg=new ce,Is=new ft,Us=new bs;class _n extends ft{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Fc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Fg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Qi),zc.copy(t.boundingBox).applyMatrix4(Qi),this.boundingBox.union(zc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new bs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Qi),Us.copy(t.boundingSphere).applyMatrix4(Qi),this.boundingSphere.union(Us)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Is.geometry=this.geometry,Is.material=this.material,Is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Us.copy(this.boundingSphere),Us.applyMatrix4(i),t.ray.intersectsSphere(Us)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qi),Bc.multiplyMatrices(i,Qi),Is.matrixWorld=Bc,Is.raycast(t,Lr);for(let o=0,a=Lr.length;o<a;o++){const l=Lr[o];l.instanceId=r,l.object=this,e.push(l)}Lr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Fc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Og(new Float32Array(s*this.count),s,this.count,il,An));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class dl extends ws{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Jr=new E,Kr=new E,kc=new ce,Ns=new lo,Dr=new bs,Xo=new E,Hc=new E;class Bg extends _e{constructor(t=new we,e=new dl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Jr.fromBufferAttribute(e,s-1),Kr.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Jr.distanceTo(Kr);t.setAttribute("lineDistance",new jt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dr.copy(i.boundingSphere),Dr.applyMatrix4(s),Dr.radius+=r,t.ray.intersectsSphere(Dr)===!1)return;kc.copy(s).invert(),Ns.copy(t.ray).applyMatrix4(kc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),v=h.getX(_+1),y=Ir(this,t,Ns,l,p,v);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Ir(this,t,Ns,l,_,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=Ir(this,t,Ns,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Ir(this,t,Ns,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ir(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(Jr.fromBufferAttribute(o,s),Kr.fromBufferAttribute(o,r),e.distanceSqToSegment(Jr,Kr,Xo,Hc)>i)return;Xo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Xo);if(!(l<t.near||l>t.far))return{distance:l,point:Hc.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Vc=new E,Gc=new E;class Yh extends Bg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Vc.fromBufferAttribute(e,s),Gc.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Vc.distanceTo(Gc);t.setAttribute("lineDistance",new jt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vn extends Fe{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ln{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new lt:new E);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new E,s=[],r=[],o=[],a=new E,l=new ce;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new E)}r[0]=new E,o[0]=new E;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Pe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Pe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class fl extends Ln{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new lt){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class zg extends fl{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function pl(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Ur=new E,qo=new pl,Yo=new pl,$o=new pl;class ho extends Ln{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new E){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Ur.subVectors(s[0],s[1]).add(s[0]),c=Ur);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ur.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ur),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),qo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Yo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),$o.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(qo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Yo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),$o.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(qo.calc(l),Yo.calc(l),$o.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new E().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Wc(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function kg(n,t){const e=1-n;return e*e*t}function Hg(n,t){return 2*(1-n)*n*t}function Vg(n,t){return n*n*t}function ks(n,t,e,i){return kg(n,t)+Hg(n,e)+Vg(n,i)}function Gg(n,t){const e=1-n;return e*e*e*t}function Wg(n,t){const e=1-n;return 3*e*e*n*t}function Xg(n,t){return 3*(1-n)*n*n*t}function qg(n,t){return n*n*n*t}function Hs(n,t,e,i,s){return Gg(n,t)+Wg(n,e)+Xg(n,i)+qg(n,s)}class $h extends Ln{constructor(t=new lt,e=new lt,i=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new lt){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Hs(t,s.x,r.x,o.x,a.x),Hs(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Yg extends Ln{constructor(t=new E,e=new E,i=new E,s=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new E){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Hs(t,s.x,r.x,o.x,a.x),Hs(t,s.y,r.y,o.y,a.y),Hs(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class jh extends Ln{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $g extends Ln{constructor(t=new E,e=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new E){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new E){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zh extends Ln{constructor(t=new lt,e=new lt,i=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new lt){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(ks(t,s.x,r.x,o.x),ks(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ml extends Ln{constructor(t=new E,e=new E,i=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new E){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(ks(t,s.x,r.x,o.x),ks(t,s.y,r.y,o.y),ks(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jh extends Ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Wc(a,l.x,c.x,h.x,u.x),Wc(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new lt().fromArray(s))}return this}}var Qr=Object.freeze({__proto__:null,ArcCurve:zg,CatmullRomCurve3:ho,CubicBezierCurve:$h,CubicBezierCurve3:Yg,EllipseCurve:fl,LineCurve:jh,LineCurve3:$g,QuadraticBezierCurve:Zh,QuadraticBezierCurve3:ml,SplineCurve:Jh});class jg extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qr[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Qr[s.type]().fromJSON(s))}return this}}class Ga extends jg{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new jh(this.currentPoint.clone(),new lt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Zh(this.currentPoint.clone(),new lt(t,e),new lt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new $h(this.currentPoint.clone(),new lt(t,e),new lt(i,s),new lt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Jh(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new fl(t,e,i,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class gl extends we{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Pe(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new E,d=new lt,f=new E,g=new E,_=new E;let m=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let v=0;v<=e;v++){const y=i+v*h*s,x=Math.sin(y),U=Math.cos(y);for(let C=0;C<=t.length-1;C++){u.x=t[C].x*x,u.y=t[C].y,u.z=t[C].x*U,o.push(u.x,u.y,u.z),d.x=v/e,d.y=C/(t.length-1),a.push(d.x,d.y);const R=l[3*C+0]*x,D=l[3*C+1],b=l[3*C+0]*U;c.push(R,D,b)}}for(let v=0;v<e;v++)for(let y=0;y<t.length-1;y++){const x=y+v*t.length,U=x,C=x+t.length,R=x+t.length+1,D=x+1;r.push(U,C,D),r.push(R,D,C)}this.setIndex(r),this.setAttribute("position",new jt(o,3)),this.setAttribute("uv",new jt(a,2)),this.setAttribute("normal",new jt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gl(t.points,t.segments,t.phiStart,t.phiLength)}}class _l extends gl{constructor(t=1,e=1,i=4,s=8){const r=new Ga;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new _l(t.radius,t.length,t.capSegments,t.radialSegments)}}class ss extends we{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new E,h=new lt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=i+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new jt(o,3)),this.setAttribute("normal",new jt(a,3)),this.setAttribute("uv",new jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ss(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Oe extends we{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=i/2;let p=0;v(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(f,2));function v(){const x=new E,U=new E;let C=0;const R=(e-t)/i;for(let D=0;D<=r;D++){const b=[],M=D/r,L=M*(e-t)+t;for(let W=0;W<=s;W++){const w=W/s,N=w*l+a,I=Math.sin(N),A=Math.cos(N);U.x=L*I,U.y=-M*i+m,U.z=L*A,u.push(U.x,U.y,U.z),x.set(I,R,A).normalize(),d.push(x.x,x.y,x.z),f.push(w,1-M),b.push(g++)}_.push(b)}for(let D=0;D<s;D++)for(let b=0;b<r;b++){const M=_[b][D],L=_[b+1][D],W=_[b+1][D+1],w=_[b][D+1];(t>0||b!==0)&&(h.push(M,L,w),C+=3),(e>0||b!==r-1)&&(h.push(L,W,w),C+=3)}c.addGroup(p,C,0),p+=C}function y(x){const U=g,C=new lt,R=new E;let D=0;const b=x===!0?t:e,M=x===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const L=g;for(let W=0;W<=s;W++){const N=W/s*l+a,I=Math.cos(N),A=Math.sin(N);R.x=b*A,R.y=m*M,R.z=b*I,u.push(R.x,R.y,R.z),d.push(0,M,0),C.x=I*.5+.5,C.y=A*.5*M+.5,f.push(C.x,C.y),g++}for(let W=0;W<s;W++){const w=U+W,N=L+W;x===!0?h.push(N,N+1,w):h.push(N+1,N,w),D+=3}c.addGroup(p,D,x===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qn extends Oe{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new qn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vl extends we{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new jt(r,3)),this.setAttribute("normal",new jt(r.slice(),3)),this.setAttribute("uv",new jt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new E,x=new E,U=new E;for(let C=0;C<e.length;C+=3)f(e[C+0],y),f(e[C+1],x),f(e[C+2],U),l(y,x,U,v)}function l(v,y,x,U){const C=U+1,R=[];for(let D=0;D<=C;D++){R[D]=[];const b=v.clone().lerp(x,D/C),M=y.clone().lerp(x,D/C),L=C-D;for(let W=0;W<=L;W++)W===0&&D===C?R[D][W]=b:R[D][W]=b.clone().lerp(M,W/L)}for(let D=0;D<C;D++)for(let b=0;b<2*(C-D)-1;b++){const M=Math.floor(b/2);b%2===0?(d(R[D][M+1]),d(R[D+1][M]),d(R[D][M])):(d(R[D][M+1]),d(R[D+1][M+1]),d(R[D+1][M]))}}function c(v){const y=new E;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(v),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){const v=new E;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const x=m(v)/2/Math.PI+.5,U=p(v)/Math.PI+.5;o.push(x,1-U)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){const y=o[v+0],x=o[v+2],U=o[v+4],C=Math.max(y,x,U),R=Math.min(y,x,U);C>.9&&R<.1&&(y<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),U<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,y){const x=v*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function g(){const v=new E,y=new E,x=new E,U=new E,C=new lt,R=new lt,D=new lt;for(let b=0,M=0;b<r.length;b+=9,M+=6){v.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),C.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),D.set(o[M+4],o[M+5]),U.copy(v).add(y).add(x).divideScalar(3);const L=m(U);_(C,M+0,v,L),_(R,M+2,y,L),_(D,M+4,x,L)}}function _(v,y,x,U){U<0&&v.x===1&&(o[y]=v.x-1),x.x===0&&x.z===0&&(o[y]=U/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vl(t.vertices,t.indices,t.radius,t.details)}}const Nr=new E,Or=new E,jo=new E,Fr=new an;class Kh extends we{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(ls*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:p}=Fr;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Fr.getNormal(jo),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let v=0;v<3;v++){const y=(v+1)%3,x=u[v],U=u[y],C=Fr[h[v]],R=Fr[h[y]],D=`${x}_${U}`,b=`${U}_${x}`;b in d&&d[b]?(jo.dot(d[b].normal)<=r&&(f.push(C.x,C.y,C.z),f.push(R.x,R.y,R.z)),d[b]=null):D in d||(d[D]={index0:c[v],index1:c[y],normal:jo.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:m}=d[g];Nr.fromBufferAttribute(a,_),Or.fromBufferAttribute(a,m),f.push(Nr.x,Nr.y,Nr.z),f.push(Or.x,Or.y,Or.z)}this.setAttribute("position",new jt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Ni extends Ga{constructor(t){super(t),this.uuid=Ui(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Ga().fromJSON(s))}return this}}const Zg={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Qh(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(i&&(r=e_(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let g=e;g<s;g+=e)u=n[g],d=n[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return js(r,o,e,a,l,f,0),o}};function Qh(n,t,e,i,s){let r,o;if(s===d_(n,t,e,i)>0)for(r=t;r<e;r+=i)o=Xc(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=Xc(r,n[r],n[r+1],o);return o&&uo(o,o.next)&&(Js(o),o=o.next),o}function Li(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(uo(e,e.next)||Me(e.prev,e,e.next)===0)){if(Js(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function js(n,t,e,i,s,r,o){if(!n)return;!o&&r&&o_(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Kg(n,i,s,r):Jg(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),Js(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Qg(Li(n),t,e),js(n,t,e,i,s,r,2)):o===2&&t_(n,t,e,i,s,r):js(Li(n),t,e,i,s,r,1);break}}}function Jg(n){const t=n.prev,e=n,i=n.next;if(Me(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&rs(s,a,r,l,o,c,g.x,g.y)&&Me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Kg(n,t,e,i){const s=n.prev,r=n,o=n.next;if(Me(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=Wa(f,g,t,e,i),v=Wa(_,m,t,e,i);let y=n.prevZ,x=n.nextZ;for(;y&&y.z>=p&&x&&x.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&rs(a,h,l,u,c,d,y.x,y.y)&&Me(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&rs(a,h,l,u,c,d,x.x,x.y)&&Me(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&rs(a,h,l,u,c,d,y.x,y.y)&&Me(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=v;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&rs(a,h,l,u,c,d,x.x,x.y)&&Me(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Qg(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!uo(s,r)&&tu(s,i,i.next,r)&&Zs(s,r)&&Zs(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Js(i),Js(i.next),i=n=r),i=i.next}while(i!==n);return Li(i)}function t_(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&c_(o,a)){let l=eu(o,a);o=Li(o,o.next),l=Li(l,l.next),js(o,t,e,i,s,r,0),js(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function e_(n,t,e,i){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Qh(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(l_(c));for(s.sort(n_),r=0;r<s.length;r++)e=i_(s[r],e);return e}function n_(n,t){return n.x-t.x}function i_(n,t){const e=s_(n,t);if(!e)return t;const i=eu(e,n);return Li(i,i.next),Li(e,e.next)}function s_(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&rs(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Zs(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&r_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function r_(n,t){return Me(n.prev,n,t.prev)<0&&Me(t.next,n,n.next)<0}function o_(n,t,e,i){let s=n;do s.z===0&&(s.z=Wa(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,a_(s)}function a_(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function Wa(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function l_(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function rs(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function c_(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!h_(n,t)&&(Zs(n,t)&&Zs(t,n)&&u_(n,t)&&(Me(n.prev,n,t.prev)||Me(n,t.prev,t))||uo(n,t)&&Me(n.prev,n,n.next)>0&&Me(t.prev,t,t.next)>0)}function Me(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function uo(n,t){return n.x===t.x&&n.y===t.y}function tu(n,t,e,i){const s=zr(Me(n,t,e)),r=zr(Me(n,t,i)),o=zr(Me(e,i,n)),a=zr(Me(e,i,t));return!!(s!==r&&o!==a||s===0&&Br(n,e,t)||r===0&&Br(n,i,t)||o===0&&Br(e,n,i)||a===0&&Br(e,t,i))}function Br(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function zr(n){return n>0?1:n<0?-1:0}function h_(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&tu(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Zs(n,t){return Me(n.prev,n,n.next)<0?Me(n,t,n.next)>=0&&Me(n,n.prev,t)>=0:Me(n,t,n.prev)<0||Me(n,n.next,t)<0}function u_(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function eu(n,t){const e=new Xa(n.i,n.x,n.y),i=new Xa(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Xc(n,t,e,i){const s=new Xa(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Js(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Xa(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function d_(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class ai{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return ai.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];qc(t),Yc(i,t);let o=t.length;e.forEach(qc);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Yc(i,e[l]);const a=Zg.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function qc(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Yc(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Ts extends we{constructor(t=new Ni([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new jt(s,3)),this.setAttribute("uv",new jt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:f_;let y,x=!1,U,C,R,D;p&&(y=p.getSpacedPoints(h),x=!0,d=!1,U=p.computeFrenetFrames(h,!1),C=new E,R=new E,D=new E),d||(m=0,f=0,g=0,_=0);const b=a.extractPoints(c);let M=b.shape;const L=b.holes;if(!ai.isClockWise(M)){M=M.reverse();for(let it=0,ht=L.length;it<ht;it++){const O=L[it];ai.isClockWise(O)&&(L[it]=O.reverse())}}const w=ai.triangulateShape(M,L),N=M;for(let it=0,ht=L.length;it<ht;it++){const O=L[it];M=M.concat(O)}function I(it,ht,O){return ht||console.error("THREE.ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(ht,O)}const A=M.length,B=w.length;function k(it,ht,O){let Ut,ut,Tt;const _t=it.x-ht.x,zt=it.y-ht.y,wt=O.x-it.x,P=O.y-it.y,S=_t*_t+zt*zt,X=_t*P-zt*wt;if(Math.abs(X)>Number.EPSILON){const tt=Math.sqrt(S),ot=Math.sqrt(wt*wt+P*P),et=ht.x-zt/tt,Pt=ht.y+_t/tt,xt=O.x-P/ot,Et=O.y+wt/ot,Zt=((xt-et)*P-(Et-Pt)*wt)/(_t*P-zt*wt);Ut=et+_t*Zt-it.x,ut=Pt+zt*Zt-it.y;const dt=Ut*Ut+ut*ut;if(dt<=2)return new lt(Ut,ut);Tt=Math.sqrt(dt/2)}else{let tt=!1;_t>Number.EPSILON?wt>Number.EPSILON&&(tt=!0):_t<-Number.EPSILON?wt<-Number.EPSILON&&(tt=!0):Math.sign(zt)===Math.sign(P)&&(tt=!0),tt?(Ut=-zt,ut=_t,Tt=Math.sqrt(S)):(Ut=_t,ut=zt,Tt=Math.sqrt(S/2))}return new lt(Ut/Tt,ut/Tt)}const q=[];for(let it=0,ht=N.length,O=ht-1,Ut=it+1;it<ht;it++,O++,Ut++)O===ht&&(O=0),Ut===ht&&(Ut=0),q[it]=k(N[it],N[O],N[Ut]);const j=[];let Q,at=q.concat();for(let it=0,ht=L.length;it<ht;it++){const O=L[it];Q=[];for(let Ut=0,ut=O.length,Tt=ut-1,_t=Ut+1;Ut<ut;Ut++,Tt++,_t++)Tt===ut&&(Tt=0),_t===ut&&(_t=0),Q[Ut]=k(O[Ut],O[Tt],O[_t]);j.push(Q),at=at.concat(Q)}for(let it=0;it<m;it++){const ht=it/m,O=f*Math.cos(ht*Math.PI/2),Ut=g*Math.sin(ht*Math.PI/2)+_;for(let ut=0,Tt=N.length;ut<Tt;ut++){const _t=I(N[ut],q[ut],Ut);st(_t.x,_t.y,-O)}for(let ut=0,Tt=L.length;ut<Tt;ut++){const _t=L[ut];Q=j[ut];for(let zt=0,wt=_t.length;zt<wt;zt++){const P=I(_t[zt],Q[zt],Ut);st(P.x,P.y,-O)}}}const gt=g+_;for(let it=0;it<A;it++){const ht=d?I(M[it],at[it],gt):M[it];x?(R.copy(U.normals[0]).multiplyScalar(ht.x),C.copy(U.binormals[0]).multiplyScalar(ht.y),D.copy(y[0]).add(R).add(C),st(D.x,D.y,D.z)):st(ht.x,ht.y,0)}for(let it=1;it<=h;it++)for(let ht=0;ht<A;ht++){const O=d?I(M[ht],at[ht],gt):M[ht];x?(R.copy(U.normals[it]).multiplyScalar(O.x),C.copy(U.binormals[it]).multiplyScalar(O.y),D.copy(y[it]).add(R).add(C),st(D.x,D.y,D.z)):st(O.x,O.y,u/h*it)}for(let it=m-1;it>=0;it--){const ht=it/m,O=f*Math.cos(ht*Math.PI/2),Ut=g*Math.sin(ht*Math.PI/2)+_;for(let ut=0,Tt=N.length;ut<Tt;ut++){const _t=I(N[ut],q[ut],Ut);st(_t.x,_t.y,u+O)}for(let ut=0,Tt=L.length;ut<Tt;ut++){const _t=L[ut];Q=j[ut];for(let zt=0,wt=_t.length;zt<wt;zt++){const P=I(_t[zt],Q[zt],Ut);x?st(P.x,P.y+y[h-1].y,y[h-1].x+O):st(P.x,P.y,u+O)}}}Y(),nt();function Y(){const it=s.length/3;if(d){let ht=0,O=A*ht;for(let Ut=0;Ut<B;Ut++){const ut=w[Ut];pt(ut[2]+O,ut[1]+O,ut[0]+O)}ht=h+m*2,O=A*ht;for(let Ut=0;Ut<B;Ut++){const ut=w[Ut];pt(ut[0]+O,ut[1]+O,ut[2]+O)}}else{for(let ht=0;ht<B;ht++){const O=w[ht];pt(O[2],O[1],O[0])}for(let ht=0;ht<B;ht++){const O=w[ht];pt(O[0]+A*h,O[1]+A*h,O[2]+A*h)}}i.addGroup(it,s.length/3-it,0)}function nt(){const it=s.length/3;let ht=0;ct(N,ht),ht+=N.length;for(let O=0,Ut=L.length;O<Ut;O++){const ut=L[O];ct(ut,ht),ht+=ut.length}i.addGroup(it,s.length/3-it,1)}function ct(it,ht){let O=it.length;for(;--O>=0;){const Ut=O;let ut=O-1;ut<0&&(ut=it.length-1);for(let Tt=0,_t=h+m*2;Tt<_t;Tt++){const zt=A*Tt,wt=A*(Tt+1),P=ht+Ut+zt,S=ht+ut+zt,X=ht+ut+wt,tt=ht+Ut+wt;At(P,S,X,tt)}}}function st(it,ht,O){l.push(it),l.push(ht),l.push(O)}function pt(it,ht,O){Ot(it),Ot(ht),Ot(O);const Ut=s.length/3,ut=v.generateTopUV(i,s,Ut-3,Ut-2,Ut-1);Gt(ut[0]),Gt(ut[1]),Gt(ut[2])}function At(it,ht,O,Ut){Ot(it),Ot(ht),Ot(Ut),Ot(ht),Ot(O),Ot(Ut);const ut=s.length/3,Tt=v.generateSideWallUV(i,s,ut-6,ut-3,ut-2,ut-1);Gt(Tt[0]),Gt(Tt[1]),Gt(Tt[3]),Gt(Tt[1]),Gt(Tt[2]),Gt(Tt[3])}function Ot(it){s.push(l[it*3+0]),s.push(l[it*3+1]),s.push(l[it*3+2])}function Gt(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return p_(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Qr[s.type]().fromJSON(s)),new Ts(i,t.options)}}const f_={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new lt(r,o),new lt(a,l),new lt(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new lt(o,1-l),new lt(c,1-u),new lt(d,1-g),new lt(_,1-p)]:[new lt(a,1-l),new lt(h,1-u),new lt(f,1-g),new lt(m,1-p)]}};function p_(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class li extends vl{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new li(t.radius,t.detail)}}class xl extends we{constructor(t=new Ni([new lt(0,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new jt(s,3)),this.setAttribute("normal",new jt(r,3)),this.setAttribute("uv",new jt(o,2));function c(h){const u=s.length/3,d=h.extractPoints(e);let f=d.shape;const g=d.holes;ai.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const v=g[m];ai.isClockWise(v)===!0&&(g[m]=v.reverse())}const _=ai.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const v=g[m];f=f.concat(v)}for(let m=0,p=f.length;m<p;m++){const v=f[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,p=_.length;m<p;m++){const v=_[m],y=v[0]+u,x=v[1]+u,U=v[2]+u;i.push(y,x,U),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return m_(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];i.push(o)}return new xl(i,t.curveSegments)}}function m_(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class Ve extends we{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new E,d=new E,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const v=[],y=p/i;let x=0;p===0&&o===0?x=.5/e:p===i&&l===Math.PI&&(x=-.5/e);for(let U=0;U<=e;U++){const C=U/e;u.x=-t*Math.cos(s+C*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+C*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(C+x,1-y),v.push(c++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<e;v++){const y=h[p][v+1],x=h[p][v],U=h[p+1][v],C=h[p+1][v+1];(p!==0||o>0)&&f.push(y,x,C),(p!==i-1||l<Math.PI)&&f.push(x,U,C)}this.setIndex(f),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ve(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class to extends we{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new E,u=new E,d=new E;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,v=(s+1)*f+g;o.push(_,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new jt(a,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new to(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class yl extends we{constructor(t=new ml(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new E,l=new E,c=new lt;let h=new E;const u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(f,2));function _(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),v(),p()}function m(y){h=t.getPointAt(y/e,h);const x=o.normals[y],U=o.binormals[y];for(let C=0;C<=s;C++){const R=C/s*Math.PI*2,D=Math.sin(R),b=-Math.cos(R);l.x=b*x.x+D*U.x,l.y=b*x.y+D*U.y,l.z=b*x.z+D*U.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let x=1;x<=s;x++){const U=(s+1)*(y-1)+(x-1),C=(s+1)*y+(x-1),R=(s+1)*y+x,D=(s+1)*(y-1)+x;g.push(U,C,D),g.push(C,R,D)}}function v(){for(let y=0;y<=e;y++)for(let x=0;x<=s;x++)c.x=y/e,c.y=x/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new yl(new Qr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class xe extends ws{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rh,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class g_ extends dl{static get type(){return"LineDashedMaterial"}constructor(t){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const $c={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class __{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const v_=new __;class Ml{constructor(t){this.manager=t!==void 0?t:v_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ml.DEFAULT_MATERIAL_NAME="__DEFAULT";class x_ extends Ml{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=$c.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=$s("img");function l(){h(),$c.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class y_ extends Ml{constructor(t){super(t)}load(t,e,i,s){const r=new Fe,o=new x_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class nu extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class M_ extends nu{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Zo=new ce,jc=new E,Zc=new E;class S_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cl,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;jc.setFromMatrixPosition(t.matrixWorld),e.position.copy(jc),Zc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zc),e.updateMatrixWorld(),Zo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class b_ extends S_{constructor(){super(new Hh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class w_ extends nu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new b_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class E_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Jc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Jc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Jc(){return performance.now()}const Kc=new ce;class iu{constructor(t,e,i=0,s=1/0){this.ray=new lo(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new ll,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Kc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kc),this}intersectObject(t,e=!0,i=[]){return qa(t,this,i,e),i.sort(Qc),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)qa(t[s],this,i,e);return i.sort(Qc),i}}function Qc(n,t){return n.distance-t.distance}function qa(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)qa(r[o],t,e,!0)}}class th{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Pe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class T_ extends Ii{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qa);const Oi={person:{name:"Manu Pratap Singh",headline:"Product Manager, AI Strategy",subline:"0→1 platforms in AdTech, Gaming and SaaS · The Lisbon MBA 2026",location:"Lisbon, Portugal",email:"sam123.manu@gmail.com",linkedin:"https://www.linkedin.com/in/pratapmanusingh",cvFile:"Manu_Pratap_Singh_CV.pdf"},cv:{availability:"Available full-time from mid-December 2026",lookingFor:"Product Manager and consulting roles in AI, platforms and growth",openTo:"Lisbon, anywhere in Europe, or remote",summary:{text:"I'm a product manager with 4+ years building consumer and B2B platforms from zero to scale: I grew a real-money gaming app to 1M+ users and built an ad exchange from scratch that carried $100k/month in ad spend. Today I lead AI strategy, product quality and company direction at a CRM and automation company while finishing The Lisbon MBA. I have an engineering degree, read API docs, turn them into build plans and work with engineers as a peer."},signature:[{value:"1M+",label:"users and $500k+ in deposits on a real-money gaming platform",where:"GMNG"},{value:"$100k/mo",label:"ad spend through an ad exchange I built from scratch",where:"XY ADS"},{value:"< 2 months",label:"to make a whole company AI-native",where:"MR Neo"},{value:"+30%",label:"new-user retention from Everybody Wins, my idea",where:"GMNG"}],experience:[{ids:["mr-neo"],company:"MR Neo",role:"Product Manager, AI Strategy",dates:"Aug 2026 – present",location:"India-based company · remote, part-time alongside the MBA",context:"Business automation and CRM platform. The founder brought me in; I report to him and own where AI creates value, product quality and, increasingly, company strategy.",bullets:[{text:"Reset pricing and positioning: introduced competitor benchmarking and try-before-you-upgrade add-ons, and moved the company from “a CRM/CPaaS” to helping customers grow their business. Now shaping company strategy and the operating model."},{text:"Made the whole company AI-native in **under two months**: a central AI knowledge base connected to the codebase, documentation and website, a sales AI workspace and automated team workflows. Sales decks now need **1–2 iterations** instead of many rounds, and information lag across teams has gone."},{text:"Leading the redesign into an **AI-first platform** for early 2027, where users mainly work through AI and manual paths remain."},{text:"Designed flow-conflict detection for the automation builder, so users see which flows overlap, contradict or supersede each other before they break, and an AI daily briefing on each person's tasks and workload for the week."},{text:"Unblocked a Shopify integration the developers had been stuck on for a month by speccing the integration hub, API choice and build steps; shipped and approved."},{text:"Set the product-quality bar: audited the 60+ page platform and turned my own testing method into reusable AI skills the whole team now uses."}]},{ids:["xy-ads"],company:"XY ADS",role:"Product Manager, Product & Platform",dates:"Aug 2023 – Jan 2025",location:"Gurgaon, India",context:"High-volume performance marketing agency and GMNG's parent company. I joined with no marketing background and was working at the level of 5–6-year veterans within 2–3 months.",bullets:[{text:"Built a proprietary ad exchange from scratch, moving clients from manually run DSP campaigns to a self-service platform: **$100k/month** in ad spend ran through it by the time I left, and one client grew to **$30k/month**."},{text:"Wrote API-level OpenRTB PRDs and scaled the architecture to **100M+ monthly impressions**; integrated many DSPs and SSPs by breaking each partner's API docs into the exact APIs developers had to build."},{text:"Built and led the team: interviewed and hired **3 developers**; developers and designers reported to me."},{text:"Cut operating costs **15%** by moving vendors to long-term, tiered, volume-based contracts."},{text:"Designed role-based access (RBAC) so agency teams could run campaigns under central master accounts, and directed the developers to cut latency under very high traffic."}]},{ids:["gmng"],company:"GMNG",role:"Product Manager",promotion:"Promoted from Associate PM within 11 months (APM Feb 2021 – Jan 2022 · PM Feb 2022 – Jul 2023)",dates:"Feb 2021 – Jul 2023",location:"Gurgaon, India",context:"Real-money mobile gaming platform (poker and other skill games). As PM I led a team of 8–9 across development, customer support and sales.",bullets:[{text:"Scaled the platform to **1M+ users** and **$500k+ in user deposits**; a two-tier referral scheme alone brought in **200,000+ new users** in a single month."},{text:"Everybody Wins (my idea): diagnosed new-user churn caused by loss aversion and gave new players a second chance after losing their first real-money game. It **tripled gameplay frequency** and lifted new-user retention **30%** and revenue **50%** in key games."},{text:"Designed a 7-day gamified poker onboarding loop (my idea): **60%** of the targeted high-paying players converted, bringing in **$40,000** in revenue."},{text:"Conceptualised an ad-tech Offer Wall, packaged it as a B2B SaaS module and licensed it to **3–4 companies** for about **$5–6k/month**."},{text:"Found that **80%** of depositors used Paytm and pivoted the payment gateway toward it, resolving deposit drop-offs."},{text:"Redesigned the homepage and first-time experience (**+20%** user satisfaction in an in-app survey) and integrated third-party gaming services that removed wait times and lifted revenue **20%**."},{text:"Onboarded partnerships with Dream11 and Pocket52, and contributed to shareholder presentations that secured **$100,000** in development funding."}]},{ids:["library"],company:"Career break",role:"GMAT and MBA applications",dates:"Feb – Dec 2025",location:"India",context:"Prepared for the GMAT and applied to MBA programmes; admitted to The Lisbon MBA (Jan 2026).",bullets:[]}],projects:[{ids:["lara-hotel"],name:"Lará",kind:"Current project · AI hotel platform",dates:"Oct 2026 – now",summary:"A white-label app that runs a hotel's operations and improves the guest experience with AI, for guests and every team: front desk, restaurant and bar, housekeeping and managers. I'm prototyping it with AI coding tools; the proof of concept is built and I'm preparing the pitch to a first hotel.",bullets:[{text:"AI concierge that knows the hotel and books services for guests; allergy alerts reach the restaurant team and manager within seconds and must be acknowledged, even with AI switched off."},{text:"**4** end-to-end pitch scenarios working live; AI reply drafts in Portuguese, English, French and German; iPhone and web."}]},{ids:["sovena"],name:"Sovena",kind:"MBA summer internship · 8 weeks · Lisbon",dates:"Jul – Aug 2026",summary:"Portuguese food group. Reviewed its 59-product tea range: ran consumer surveys, social listening and market research, recommended repositioning from health claims to consumption occasions, presented to a director, and handed over the research as a queryable AI research base (NotebookLM).",bullets:[]},{ids:["dhl","dhl-plane"],name:"DHL Express",kind:"MBA consulting project",dates:"2026",summary:"Market understanding for urgent 50kg+ SPOT shipments. Confidential.",bullets:[]},{ids:["vision-lab"],name:"Food image-recognition app",kind:"Undergraduate final project",dates:"2020 – 2021",summary:"A convolutional neural network (CNN) trained on 10,000 images to classify 100 foods, built into a calorie-tracking app.",bullets:[]}],education:[{ids:["lisbon-mba"],name:"The Lisbon MBA International",school:"Católica | Nova · Lisbon",dates:"Jan – Dec 2026",note:"Completing December 2026."},{ids:["mit-sloan"],name:"MIT Sloan Summer Immersion Certificate",school:"MIT Sloan · Boston · part of The Lisbon MBA",dates:"Jun 2026",note:"Managing Technological Innovation and Leadership; Global Markets and Strategy; Global Compliance and Ethical Issues; visits to Boston-based companies."},{ids:["manipal"],name:"B.Tech, Information Technology, minor in Digital Marketing",school:"Manipal Institute of Technology · India",dates:"2016 – 2020",note:""}],skills:[{label:"Product",text:"Product strategy, 0→1 platform builds, PRDs, pricing and positioning, growth, retention and onboarding, third-party API integrations, product QA and UX audits, hiring and leading cross-functional teams"},{label:"AI",text:"AI strategy and adoption, AI-first product design, AI knowledge bases and assistants on company data, AI-assisted testing and prototyping, workflow automation"},{label:"Technical",text:"APIs, OpenRTB, RBAC, SQL (working), Postman, Jira, Figma, Claude, NotebookLM"},{label:"Languages",text:"English (proficient), Hindi (native)"}],beyond:{text:"50m rifle shooting at national level · mixed martial arts (state-level training) · travel · I set up a library for underprivileged children in Rajasthan, India, and taught young people basic computer skills."}},title:{eyebrow:"Product Manager · AI Strategy",headline:["Ten years.","Five islands.","One climb."],lede:"From an engineering degree in India to **leading AI strategy** at an Indian CRM company, while finishing an MBA in Lisbon.",stats:[{value:"1M+",label:"users on a gaming platform"},{value:"$100k",label:"a month through an ad exchange I built"},{value:"< 2 mo",label:"to make a company AI-native"},{value:"+30%",label:"new-user retention"}]},chapters:[{n:"01",title:"Foundations",years:"2016 – 2020",place:"Manipal, India",lede:"An engineering degree, and a first taste of AI.",card:"B.Tech in IT · a CNN food-recognition app",points:["**B.Tech in Information Technology** at Manipal, with a minor in Digital Marketing","Trained a **CNN on 10,000 images** to recognise 100 foods, built into a calorie-tracking app","**4 verified AI and ML certificates**, from TensorFlow to ML for product managers"]},{n:"02",title:"Build & scale",years:"2021 – 2025",place:"Gurgaon, India",lede:"Two companies, one pattern: build the product from zero, then scale it.",card:"1M+ users · $100k/mo ad exchange",points:["**1M+ users** and $500k+ in deposits at GMNG, where I went from Associate PM to PM in **11 months**","An ad exchange built from scratch at XY ADS, carrying **$100k a month** in ad spend","2025: the GMAT, MBA applications, and a library for underprivileged children"]},{n:"03",title:"New perspective",years:"2026",place:"Lisbon · Boston · India, remote",lede:"An MBA in Lisbon, a summer at MIT Sloan, and AI strategy for an Indian CRM company.",card:"MBA + MIT Sloan · AI-native in < 2 months",points:["**The Lisbon MBA** at Católica | Nova, completing December 2026, with a Summer Immersion at **MIT Sloan**","**Sovena** internship: reviewed 59 tea products and recommended a new positioning","**MR Neo**: made the whole company AI-native in **under two months**, now leading its AI-first redesign","**DHL Express** consulting project: market understanding for urgent 50kg+ SPOT shipments. Confidential."],extras:["mit-sloan","dhl"]},{n:"04",title:"Building now",years:"2026 · Now",place:"Lisbon",lede:"Lará: an AI platform that runs a hotel and looks after its guests.",card:"Lará, an AI hotel platform",points:["Proof of concept built with AI coding tools; preparing the pitch to a **first hotel**","AI concierge for guests, AI reply drafts in **4 languages**, and allergy alerts the team must acknowledge","Off the clock: **50m rifle shooting** at national level, and mixed martial arts"]},{n:"05",title:"What's next",years:"From mid-December 2026",place:"",lede:"The road's paved to mid-December 2026. The next stretch leads to your office.",card:"Your team. Available mid-December.",points:["Looking for **Product Manager and consulting roles** in AI, platforms and growth","Based in Lisbon; open to anywhere in Europe, or remote","Available full-time from **mid-December 2026**"],cta:!0}],buildings:[{id:"manipal",order:1,buildYear:2016,yearLabel:"2016–2020",district:"india",style:"campus",name:"Manipal Institute of Technology",role:"B.Tech, Information Technology · minor in Digital Marketing",dates:"2016 – Oct 2020",location:"India",story:"Where it started: an engineering degree in Information Technology, with a minor in Digital Marketing. It's the reason I can read API docs and talk to engineers as a peer.",metrics:[],highlights:[{text:"B.Tech, Information Technology, minor in Digital Marketing, 2016 – Oct 2020"}],tags:["Engineering","IT","Digital Marketing"]},{id:"vision-lab",order:2,buildYear:2020,yearLabel:"2020–21",district:"india",style:"lab",name:"Image Recognition Lab",role:"Undergraduate final project",dates:"2020 – 2021",location:"Manipal, India",story:"A calorie-tracking app that recognises food from a photo. I trained a convolutional neural network (CNN) on 10,000 images to classify 100 foods, then built it into the app.",metrics:[{value:"10,000",label:"training images",vizType:"scan"},{value:"100",label:"foods recognised",vizType:"scan"}],highlights:[{text:"Food image-recognition classifier: a CNN trained on 10,000 images to classify 100 foods, built into a calorie-tracking app"}],tags:["CNN","TensorFlow","Python","Computer vision"]},{id:"learning-tower",order:3,buildYear:2020,yearLabel:"2020–2025",district:"india",style:"learning-tower",name:"Learning Tower",role:"Courses and certificates",dates:"2020 – 2025",location:null,story:"Each floor is one AI or machine learning course, stacked in the order I finished them: TensorFlow, CNNs and Python in 2020, then ML for product managers in 2025. Every floor links to its certificate on Coursera.",metrics:[{value:"4",label:"verified AI/ML certificates",vizType:"floors"}],certificates:[{title:"Introduction to TensorFlow for AI, ML and Deep Learning",issuer:"DeepLearning.AI · Coursera",date:"2020-04-26",topic:"AI/ML",verify:"https://coursera.org/verify/5PEQPPYS4HFL",shortTitle:"TensorFlow for AI & ML"},{title:"Convolutional Neural Networks in TensorFlow",issuer:"DeepLearning.AI · Coursera",date:"2020-06-14",topic:"AI/ML",verify:"https://coursera.org/verify/XRJEAPU85WAA",shortTitle:"CNNs in TensorFlow"},{title:"Python for Data Science, AI & Development",issuer:"IBM · Coursera",date:"2020-10-31",topic:"AI/ML",verify:"https://coursera.org/verify/LGR9L3QVWSQY",shortTitle:"Python for Data Science & AI"},{title:"Machine Learning Foundations for Product Managers",issuer:"Duke University · Coursera",date:"2025-07-06",topic:"Product",verify:"https://coursera.org/verify/ZPDM0PJ66P53",shortTitle:"ML for Product Managers"}],highlights:[],tags:["AI/ML","Product"],howTo:"Tap a course below (or a floor on the tower) to light it up."},{id:"gmng",order:4,buildYear:2021,yearLabel:"2021–2023",district:"india",style:"arcade",name:"GMNG",role:"Associate Product Manager → Product Manager (promoted within 11 months)",dates:"Feb 2021 – Jul 2023",location:"Gurgaon, India",floors:[{label:"APM",dates:"Feb 2021 – Jan 2022"},{label:"PM",dates:"Feb 2022 – Jul 2023"}],story:"A real-money mobile gaming platform (poker and other skill games). I grew it to 1M+ users, designed the features that kept new players coming back, and turned an ad-tech idea into a B2B product other companies paid for. As PM I led a team of 8–9 across development, support and sales.",metrics:[{value:"1M+",label:"users",vizType:"crowd"},{value:"200,000+",label:"new users in one month (referrals)",vizType:"stream"},{value:"+30%",label:"new-user retention (Everybody Wins)",vizType:"lift"},{value:"3×",label:"gameplay frequency",vizType:"lift"}],highlights:[{text:"Scaled the platform to 1M+ users and $500k+ in user deposits"},{text:"Everybody Wins (my idea): a second chance for new players who lose their first real-money game. It tackled churn caused by loss aversion, tripled gameplay frequency, and lifted new-user retention 30% and revenue 50% in key games"},{text:"7-day gamified poker onboarding loop (my idea): 60% of the targeted high-paying players converted, bringing in $40,000 in revenue"},{text:"Two-tier referral scheme that brought in 200,000+ new users in a single month"},{text:"Conceptualised an ad-tech Offer Wall and licensed it as a B2B SaaS module to 3–4 companies for about $5–6k/month"},{text:"Found that 80% of depositors used Paytm and pivoted the payment gateway toward it, resolving deposit drop-offs"},{text:"Redesigned the homepage, UI and first-time experience: user satisfaction up 20% in an in-app survey"},{text:"Integrated third-party gaming services, eliminating wait times and lifting revenue 20%"},{text:"Onboarded partnerships with Dream11 and Pocket52; contributed to shareholder presentations that secured $100,000 in development funding"}],tags:["Growth","Retention","Gamification","Payments","B2B SaaS","Team leadership"],card:{hero:{value:"1M+",label:"users on a real-money gaming platform, and $500k+ in deposits"},proofs:[{value:"+30%",label:"new-user retention from Everybody Wins, my idea"},{value:"200k+",label:"new users in one month from a referral scheme"},{value:"$100k",label:"development funding, from shareholder presentations I contributed to"}]}},{id:"xy-ads",order:5,buildYear:2023,yearLabel:"2023–2025",district:"india",style:"tower",name:"XY ADS",role:"Product Manager, Product & Platform",dates:"Aug 2023 – Jan 2025",location:"Gurgaon, India",story:"A high-volume performance marketing agency, and GMNG's parent company. I built its ad exchange from scratch, so clients moved from manually run campaigns to a self-service platform. I joined with no marketing background and was working at the level of 5–6-year veterans within 2–3 months.",metrics:[{value:"100M+",label:"monthly impressions (architecture)",vizType:"ticker"},{value:"$100k",label:"ad spend per month through the platform",vizType:"money"},{value:"$30k",label:"per month from one client",vizType:"money"},{value:"−15%",label:"operating costs",vizType:"drop"}],highlights:[{text:"Built a proprietary ad exchange from scratch: wrote API-level OpenRTB PRDs and scaled the architecture to 100M+ monthly impressions"},{text:"Moved clients from manually run DSP campaigns to self-service: $100k/month in ad spend by the time I left, with one client growing to $30k/month"},{text:"Integrated many DSPs and SSPs by breaking each partner's API docs into the exact APIs developers had to build"},{text:"Interviewed and hired 3 developers; developers and designers reported to me"},{text:"Cut operating costs 15% with long-term, tiered, volume-based vendor contracts"},{text:"Designed role-based access (RBAC) so agency teams could run campaigns under central master accounts"},{text:"Directed the developers to cut latency under very high traffic"}],tags:["OpenRTB","Ad exchange","Programmatic","DSP/SSP","RBAC","0→1"],card:{hero:{value:"$100k/mo",label:"ad spend through an ad exchange I built from scratch"},proofs:[{value:"100M+",label:"monthly impressions the architecture scaled to"},{value:"$30k/mo",label:"from one client on the platform"},{value:"−15%",label:"operating costs, from new vendor contracts"}]}},{id:"library",order:6,buildYear:2025,yearLabel:"2025",district:"india",style:"library",name:"The Library",role:"GMAT, MBA applications and a library for children",dates:"Feb – Dec 2025",location:"Rajasthan, India",story:"A year to step back and invest, in myself and in others. I prepared for the GMAT and applied to MBA programmes, and set up a library for underprivileged children, where I taught young people basic computer skills. I was admitted to The Lisbon MBA, starting January 2026.",metrics:[],highlights:[{text:"2025: GMAT and MBA applications (admitted to The Lisbon MBA, Jan 2026)"},{text:"Established a library for underprivileged children; taught basic computer skills to youth in Rajasthan, India"}],tags:["GMAT","MBA","Community","Education"]},{id:"lisbon-mba",order:7,buildYear:2026,yearLabel:"2026",district:"lisbon",style:"university",name:"The Lisbon MBA · Católica | Nova",role:"MBA International + MIT Sloan Summer Immersion",dates:"Jan – Dec 2026",location:"Lisbon, Portugal · Boston, US",annex:{name:"MIT Sloan annex",dates:"Jun 2026"},story:"An international MBA in Lisbon, including a month at MIT Sloan in Boston studying technological innovation and global strategy.",metrics:[],highlights:[{text:"The Lisbon MBA International, Católica | Nova, completing December 2026"},{text:"MIT Sloan Summer Immersion Certificate, Boston, June 2026: Managing Technological Innovation, Global Strategy, Compliance and Ethics"},{text:"DHL Express consulting project: market understanding for urgent 50kg+ SPOT shipments (confidential)"}],tags:["MBA","MIT Sloan","Strategy"]},{id:"sovena",order:8,buildYear:2026,yearLabel:"Jul–Aug 2026",district:"lisbon",style:"teahouse",name:"Sovena",role:"Summer internship (8 weeks)",dates:"Jul – Aug 2026",location:"Lisbon, Portugal",story:"Sovena is a Portuguese food group. My brief was to review its 59-product tea range and recommend what to do with it, from packaging to marketing. My answer: sell an occasion, not a health claim.",metrics:[{value:"59",label:"tea products reviewed",vizType:"none"}],highlights:[{text:"Built the research base: consumer surveys, social listening (Reddit and other platforms) and market research"},{text:"Recommended repositioning from health claims to consumption occasions; presented to a director"},{text:"Handed over the whole research corpus as a queryable AI research base (NotebookLM) so the team can keep making informed decisions"}],tags:["FMCG","Consumer research","Positioning","NotebookLM"]},{id:"mr-neo",order:9,buildYear:2026,yearLabel:"Aug 2026 – now",district:"lisbon",style:"hq-ai",name:"MR Neo",role:"Product Manager, AI Strategy (part-time, alongside the MBA)",dates:"Aug 2026 – present",location:"India-based company · remote",story:"A business automation and CRM platform. The founder brought me in to shape the company's direction and to put AI to work across the product and the business: I reset pricing and positioning, made the whole company AI-native in under two months, and I'm now leading its redesign into an AI-first platform.",metrics:[{value:"< 2 months",label:"to make the whole company AI-native",vizType:"lights"},{value:"AI-first",label:"platform redesign I'm leading for early 2027",vizType:"none"},{value:"1–2",label:"sales deck iterations, down from many rounds",vizType:"drop"},{value:"1 month",label:"Shopify integration had been stuck before I specced the fix",vizType:"none"}],highlights:[{text:"Made the company AI-native in under two months: a central AI knowledge base connected to the codebase, documentation and website, a sales AI workspace, and automated workflows. Deck revisions fell to 1–2 iterations and information lag across teams disappeared"},{text:"Reset pricing and positioning: competitor benchmarking and try-before-you-upgrade add-ons, and a shift from 'a CRM/CPaaS' to helping customers grow their business; now shaping company strategy and the operating model"},{text:"Leading the redesign into an AI-first platform for early 2027, where users mainly work through AI and manual paths remain"},{text:"Designed flow-conflict detection for the automation builder, so users see which flows overlap, contradict or supersede each other before they break"},{text:"Designed an AI daily briefing for the tasks page that briefs each person on their week and, for developers, links a bug report to where the fix probably sits"},{text:"Unblocked a Shopify integration the developers had been stuck on for a month by speccing the integration hub, API choice and build steps; shipped and approved"},{text:"Set the product-quality bar: audited the 60+ page platform and turned my own testing method into reusable AI skills the whole team now uses"}],tags:["AI strategy","AI adoption","Pricing & positioning","Product design","Integrations"],card:{hero:{value:"< 2 months",label:"to make the whole company AI-native"},proofs:[{value:"AI-first",label:"platform redesign I'm leading for early 2027"},{value:"1–2",label:"sales deck iterations, down from many rounds"},{value:"1 month",label:"the Shopify integration had been stuck, until I specced the fix"}]}},{id:"lara-hotel",order:10,buildYear:2026,underConstruction:!0,yearLabel:"Now · building",district:"lisbon",style:"hotel-construction",name:"Lará Hotel 🚧",role:"Current project: AI hotel platform",dates:"Oct 2026 – now",location:"Lisbon, Portugal",status:"Proof of concept built · preparing the pitch to a first hotel",story:"A white-label app that runs a hotel's operations and improves the guest experience with AI, for guests and every team: front desk, restaurant & bar, housekeeping, managers and admins. It started as a prototype and is now being built into a full platform, which I'm prototyping with AI coding tools.",metrics:[{value:"4",label:"end-to-end pitch scenarios working live",vizType:"crane"},{value:"4",label:"languages for AI reply drafts",vizType:"bubbles"},{value:"260",label:"automatic database security tests",vizType:"none"}],highlights:[{text:"AI concierge that knows the hotel, books services for guests, and passes allergies straight to the restaurant"},{text:"Allergy safety alerts reach the restaurant team and manager within seconds and must be acknowledged. They work even with AI switched off"},{text:"Live request loop: a guest books the spa or a table, it lands in the right team's queue, staff confirm or transfer it, and the manager sees everything"},{text:"Checkout → housekeeping → QR check-in: the room flows from departure to cleaning to the next guest, who logs in by scanning a code"},{text:"AI staff assistant answering from the hotel's own procedures, AI reply drafts in Portuguese, English, French and German, and AI-drafted manager briefings"},{text:"Room suggestions, weather-aware guest suggestions, loyalty points and a manager dashboard on live numbers; English and Portuguese throughout; iPhone and web"},{text:"Built in 7 phases with security attack-and-harden passes, on free cloud tiers until a hotel signs"}],screenshots:[{file:"hotel/01-welcome.jpg",caption:"Each hotel gets its own brand: guests log in, or scan a QR code from the front desk"},{file:"hotel/02-room-suggestions.jpg",caption:"Room suggestions from the guest's likes and booking, plus upgrade offers for loyal guests"},{file:"hotel/03-front-desk-board.jpg",caption:"Live front-desk board: arrivals, departures, known guests and rooms that need action"},{file:"hotel/04-staff-assistant.jpg",caption:"AI staff assistant answering from the hotel's own documents"}],tags:["AI product","Hospitality","iOS + web","0→1"]},{id:"hobby-park",order:11,buildYear:null,yearLabel:"Off the clock",district:"park",style:"park",name:"Hobby Park",role:"Shooting range · MMA dojo",dates:null,location:null,story:"Off the clock: national-level 50m rifle shooting, mixed martial arts, and travel.",metrics:[],highlights:[{text:"50m rifle shooting, national level"},{text:"Mixed martial arts, state-level training"},{text:"Travel"}],tags:["Shooting","MMA","Travel"]},{id:"post-office",order:12,buildYear:null,yearLabel:"Say hello",district:"park",style:"post-office",name:"Contact Me",role:"Get in touch · email, LinkedIn or my CV",dates:null,location:"Lisbon, Portugal",story:"Want to talk about a role? This is the place. Email me, connect on LinkedIn, or download my CV. Looking for product and consulting roles in AI, platforms and growth, available from mid-December 2026.",metrics:[],highlights:[{text:"Lisbon-based; open to anywhere in Europe and to remote roles"},{text:"Available from mid-December 2026"}],links:[{label:"Email",href:"mailto:sam123.manu@gmail.com"},{label:"LinkedIn",href:"https://www.linkedin.com/in/pratapmanusingh"},{label:"Download CV",href:"Manu_Pratap_Singh_CV.pdf"}],tags:[]},{id:"your-plot",order:13,buildYear:2026,yearLabel:"Mid-Dec 2026",district:"park",style:"empty-plot",name:"The next stretch",role:"Where the road goes next",dates:"Ready mid-December 2026",location:"Lisbon · Europe · Remote",story:"The road's paved to mid-December 2026. The next stretch leads to your office: in Lisbon, anywhere in Europe, or remote.",sign:"The road's paved to mid-December 2026. The next stretch leads to your office.",metrics:[],highlights:[{text:"Available from mid-December 2026"},{text:"Lisbon-based; open to anywhere in Europe and to remote roles"}],tags:[],visual:"The paved road ends at a 'paving ends' marker. A gravel stretch with survey stakes leads on to an empty plot. The sign stands where the asphalt stops.",cta:{label:"Contact me",opens:"A small card over the scene, with two one-click actions",actions:[{label:"View my CV",href:"Manu_Pratap_Singh_CV.pdf",kind:"cv",note:"Opens the PDF in a new tab (with download)"},{label:"Email me",href:"mailto:sam123.manu@gmail.com?subject=Claiming%20my%20spot%20on%20your%20road&body=Hi%20Manu%2C%0A%0AI%20saw%20your%20city%20portfolio%20and%20would%20like%20to%20talk%20about%20a%20role%20at%20",kind:"email",note:"Opens the visitor's email app with the subject and first line filled in"},{label:"Copy email",value:"sam123.manu@gmail.com",kind:"copy",note:"Fallback for visitors without an email app; shows 'Copied'"}]}}],vehicles:[{id:"dhl-plane",count:1,style:"cargo-plane",district:"lisbon",route:"lisbon-sky",depot:"lisbon-mba",colors:{body:"#FFCC00",stripe:"#D40511"},banner:"DHL EXPRESS · MBA CONSULTING PROJECT",cargo:"Crate slung under the plane, stamped 'URGENT · 50 KG+'",behaviour:"Loops slowly over the Lisbon district towing a long banner; its shadow glides over the city. A floating label makes it easy to find. Click it: the camera follows the plane and its panel opens.",panel:{name:"DHL Express",role:"MBA consulting project",dates:"2026",story:'Market understanding for urgent 50kg+ "SPOT" shipments.',note:"Confidential."},label:"✈ DHL project"}],islets:[{id:"mit-sloan",name:"MIT Sloan",role:"Summer Immersion Certificate · part of The Lisbon MBA",dates:"Jun 2026",location:"Boston, US",yearLabel:"Jun 2026",after:"lisbon-mba",story:"One month on MIT's campus in Boston, taught by MIT Sloan faculty, with visits to Boston-based companies.",highlights:[{text:"MIT Sloan Summer Immersion Certificate, Boston, June 2026"},{text:"Courses: Managing Technological Innovation and Leadership, Global Markets and Strategy, Global Compliance and Ethical Issues"},{text:"Visits to Boston-based companies"}],tags:["MIT Sloan","Innovation","Strategy"]}]},su=Oi.person,A_=Oi.vehicles||[],fo=Oi.islets||[],ys=2026.9,C_=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];function R_(n,t){if(n.style==="empty-plot")return 2026.84;if(n.buildYear==null)return 2026.78+t*.01;if(n.buildYear!==2026)return n.buildYear;const e=(n.dates||"").toLowerCase().match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/);return 2026+(e?C_.indexOf(e[0])/12:0)}const Xe=Oi.buildings.slice().sort((n,t)=>n.order-t.order).map((n,t)=>({...n,index:t,appearYear:R_(n,t)}));Object.fromEntries(Xe.map(n=>[n.id,n]));function P_(n){if(!n.date)return 2020;const t=new Date(n.date);return t.getFullYear()+t.getMonth()/12}const L_=Oi.title,ir=Oi.chapters||[],Ce=(n,t,e)=>Math.min(e,Math.max(t,n)),Jo=(n,t,e)=>n+(t-n)*e,hs=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,eo=n=>1-Math.pow(1-n,3),eh=n=>1+2.4*Math.pow(n-1,3)+1.4*Math.pow(n-1,2),us=()=>typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches;function Ya(n=7){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const no=new Set;function ds({duration:n=1,ease:t=hs,onUpdate:e,onDone:i}){const s={elapsed:0,duration:Math.max(1e-4,n),ease:t,onUpdate:e,onDone:i,dead:!1};return no.add(s),{cancel:()=>{s.dead=!0,no.delete(s)}}}function D_(n){var t,e;for(const i of[...no]){if(i.dead)continue;i.elapsed+=n;const s=Ce(i.elapsed/i.duration,0,1);(t=i.onUpdate)==null||t.call(i,i.ease(s),s),s>=1&&(no.delete(i),(e=i.onDone)==null||e.call(i))}}const Ko=new Map;function F(n,t={}){const e=n+JSON.stringify(t);if(!t.unique&&Ko.has(e))return Ko.get(e);const{unique:i,...s}=t,r=new xe({color:n,roughness:.85,metalness:0,flatShading:!0,...s});return i||Ko.set(e,r),r}function ru({text:n,sub:t,w:e=512,h:i=128,bg:s="#243447",fg:r="#ffffff",font:o="Inter",weight:a=700,size:l,border:c,align:h="center",radius:u=18}){const d=document.createElement("canvas");d.width=e,d.height=i;const f=d.getContext("2d");return ou(f,{text:n,sub:t,w:e,h:i,bg:s,fg:r,font:o,weight:a,size:l,border:c,align:h,radius:u}),d}function ou(n,{text:t,sub:e,w:i,h:s,bg:r,fg:o,font:a="Inter",weight:l=700,size:c,border:h,align:u="center",radius:d=18}){n.clearRect(0,0,i,s),r&&(n.fillStyle=r,nh(n,0,0,i,s,d),n.fill()),h&&(n.strokeStyle=h,n.lineWidth=8,nh(n,4,4,i-8,s-8,d),n.stroke()),n.fillStyle=o,n.textAlign=u,n.textBaseline="middle";let f=c||Math.floor(s*(e?.38:.5));for(n.font=`${l} ${f}px ${a}, system-ui, sans-serif`;n.measureText(t).width>i*.92&&f>10;)f-=2,n.font=`${l} ${f}px ${a}, system-ui, sans-serif`;const g=t,_=u==="center"?i/2:i*.06;if(n.fillText(g,_,e?s*.38:s/2),e){n.globalAlpha=.8;let m=Math.floor(s*.22);for(n.font=`500 ${m}px ${a}, system-ui, sans-serif`;n.measureText(e).width>i*.92&&m>10;)m-=2,n.font=`500 ${m}px ${a}, system-ui, sans-serif`;n.fillText(e,_,s*.74),n.globalAlpha=1}}function nh(n,t,e,i,s,r){n.beginPath(),n.moveTo(t+r,e),n.arcTo(t+i,e,t+i,e+s,r),n.arcTo(t+i,e+s,t,e+s,r),n.arcTo(t,e+s,t,e,r),n.arcTo(t,e,t+i,e,r),n.closePath()}function He(n,t,e,{emissive:i=!1,doubleSide:s=!0}={}){const r=ru(n),o=new Vn(r);o.colorSpace=ye,o.anisotropy=4;const a={map:o,transparent:!0,side:s?Ne:Yn,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2},l=i?new he(a):new xe({...a,roughness:.7}),c=new ft(new yn(t,e),l);return c.userData.canvas=r,c.userData.texture=o,c}function $(n,t,e,i,s=0,r=0,o=0){const a=new ft(new le(n,t,e),i);return a.position.set(s,r+t/2,o),a.castShadow=!0,a.receiveShadow=!0,a}function Qt(n,t,e,i,s=12,r=0,o=0,a=0){const l=new ft(new Oe(n,t,e,s),i);return l.position.set(r,o+e/2,a),l.castShadow=!0,l.receiveShadow=!0,l}function au(n,t){try{if(t===void 0)return localStorage.getItem(n);localStorage.setItem(n,t)}catch{return null}return t}function lu(n){return n>=1e6?(n/1e6).toFixed(n>=1e7?0:1).replace(/\.0$/,"")+"M":n>=1e3?Math.round(n).toLocaleString("en-US"):Math.round(n).toString()}const ih=[{key:"foundations",title:"Foundations",years:"2016 — 2020",stops:["manipal","vision-lab","learning-tower"],w:74,d:64,top:2,place:"india"},{key:"build",title:"Build & scale",years:"2021 — 2025",stops:["gmng","xy-ads","library"],w:78,d:66,top:9,place:"india"},{key:"perspective",title:"New perspective",years:"2026",stops:["lisbon-mba","sovena","mr-neo"],w:84,d:68,top:16,place:"lisbon"},{key:"horizon",title:"Building now",years:"2026 · Now",stops:["lara-hotel","hobby-park","post-office"],w:88,d:72,top:24,place:"horizon"},{key:"next",title:"What's next",years:"From mid-December 2026",stops:["your-plot"],w:52,d:52,top:32,place:"next"}],I_=32,U_=[28,14,0,-14,-28],me=(()=>{const n=[];let t=0;ih.forEach((i,s)=>{s&&(t+=ih[s-1].w/2+I_+i.w/2),n.push({...i,index:s,x:t,z:U_[s]})});const e=(n[0].x+n[n.length-1].x)/2;return n.forEach(i=>{i.x-=e,i.pathZ=i.z+i.d/2-14,i.rowX=14,i.slots=[i.pathZ-14,i.pathZ-36],i.streetEnd=i.place==="next"?i.pathZ-12:i.pathZ-47}),n})(),mn=(()=>{const n=me[me.length-1],t=me[0].x-me[0].w/2,e=n.x+n.w/2;return{w:e-t+60,d:220,minX:t,maxX:e,centerX:(t+e)/2}})(),N_=Object.fromEntries(me.flatMap(n=>n.stops.map(t=>[t,n]))),O_=[[-1,0],[-1,1],[1,1],[1,0]];function F_(){const n=[];for(const t of me)t.stops.map(i=>Xe.find(s=>s.id===i)).filter(Boolean).forEach((i,s)=>{const r=i.style==="empty-plot",[o,a]=O_[s],l=r?new E(t.x,t.top,t.streetEnd-11):new E(t.x+o*t.rowX,t.top,t.slots[a]),c=r?new E(0,0,1):new E(-o,0,0);n.push({stop:i,island:t,pos:l,face:c,side:r?0:o,t:i.index/(Xe.length-1)})});return n.sort((t,e)=>t.stop.order-e.stop.order)}const io=F_(),B_=Object.fromEntries(io.map(n=>[n.stop.id,n])),cu=me.slice(0,-1).map((n,t)=>{const e=me[t+1];return{index:t,from:n,to:e,a:new E(n.x+n.w/2-.5,n.top,n.pathZ),b:new E(e.x-e.w/2+.5,e.top,e.pathZ),year:["2021","2026","NOW","NEXT"][t],suspension:e.place==="lisbon",unbuilt:e.place==="next"}}),rn=-7,Ft={sea:"#2f7896",rock:"#b6c1b5",edge:"#e2dbc2",stone:"#f1eee3",walk:"#e6dfcc",coral:"#d9734e",gold:"#c9a35f",white:"#faf7ec",trim:"#e3dcc9",dark:"#254953",grass:"#a9c39c",leaf:"#759d78",leaf2:"#507e68",red:"#c0392b",yellow:"#f2c230",saffron:"#f08a24"},z_={padTop:.32},gn=(n,t=1)=>F(n,{flatShading:!1,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-t,polygonOffsetUnits:-t});function hu(n,t,e=3){const i=new Ni;return i.moveTo(-n/2+e,-t/2),i.lineTo(n/2-e,-t/2),i.quadraticCurveTo(n/2,-t/2,n/2,-t/2+e),i.lineTo(n/2,t/2-e),i.quadraticCurveTo(n/2,t/2,n/2-e,t/2),i.lineTo(-n/2+e,t/2),i.quadraticCurveTo(-n/2,t/2,-n/2,t/2-e),i.lineTo(-n/2,-t/2+e),i.quadraticCurveTo(-n/2,-t/2,-n/2+e,-t/2),i}function fs(n,t,e,i,s=.3){const r=new Ts(n,{depth:e-t,bevelEnabled:s>0,bevelSize:s,bevelThickness:s*.5,bevelSegments:2,curveSegments:8});r.rotateX(-Math.PI/2),r.translate(0,t,0);const o=new ft(r,i);return o.castShadow=o.receiveShadow=!0,o}function Mi(n,t,e,i){const s=[],r=[],o=new E(0,1,0);n.forEach((c,h)=>{const u=n[Math.min(h+1,n.length-1)],d=n[Math.max(h-1,0)],f=u.clone().sub(d).setY(0).normalize(),g=new E().crossVectors(o,f).normalize().multiplyScalar(t/2);for(const _ of[c.clone().add(g),c.clone().sub(g),c.clone().add(g).setY(c.y-e),c.clone().sub(g).setY(c.y-e)])s.push(_.x,_.y,_.z)});for(let c=0;c<n.length-1;c++){const h=c*4,u=h+4;r.push(h,u,h+1,h+1,u,u+1,h+2,h+3,u+2,h+3,u+3,u+2,h,h+2,u,h+2,u+2,u,h+1,u+1,h+3,h+3,u+1,u+3)}const a=new we;a.setAttribute("position",new jt(s,3)),a.setIndex(r),a.computeVertexNormals();const l=new ft(a,i);return l.castShadow=l.receiveShadow=!0,l}const tn=(n,t,e,i=40)=>{const s=new ft(new yl(new ho(n),i,t,6,!1),e);return s.castShadow=!0,s};function Qo(n,{bg:t=Ft.dark,fg:e="#f6e7c1",w:i=7,h:s=2.3}={}){const r=He({text:n,w:512,h:168,bg:t,fg:e,radius:30},i,s);return r.userData.billboard=!0,r}function k_(n=1){const t=new Bt,e=[];for(let s=0;s<=5;s++)e.push(new E(Math.sin(s*.45)*.6*n,s*1.3*n,0));t.add(tn(e,.28*n,F("#8b6b4a"),12));const i=e[5];for(let s=0;s<7;s++){const r=s/7*Math.PI*2;t.add(tn([i,i.clone().add(new E(Math.cos(r)*2.2*n,.7*n,Math.sin(r)*2.2*n)),i.clone().add(new E(Math.cos(r)*4*n,-1*n,Math.sin(r)*4*n))],.24*n,F("#4f8a52"),8))}return t}function H_(){const n=new Bt;n.add($(1.6,1.2,2.6,F(Ft.yellow),0,.35,0)),n.add($(1.7,.25,2.2,F("#1f2a2c"),0,1.55,-.1)),n.add($(1.3,.7,.1,F("#3a5a66",{roughness:.3}),0,.9,1.25));for(const[t,e]of[[-.7,-.8],[.7,-.8],[0,1]]){const i=new ft(new Oe(.35,.35,.25,10),F("#222"));i.rotation.z=Math.PI/2,i.position.set(t,.35,e),n.add(i)}return n}function V_(){const n=new Bt,t=F("#e7c9a0");n.add($(9,1,9,F("#d8b88e"),0,0,0)),n.add($(6,3.4,6,t,0,1,0)),n.add($(3,2.6,.4,F("#7a3b1e"),0,1,3.05));for(let s=0;s<5;s++)n.add($(5.2-s*.9,1.1,5.2-s*.9,t,0,4.4+s*1.05,0));const e=new ft(new Ve(.9,12,8),F("#d9a84e",{metalness:.4}));e.position.y=10.1,n.add(e),n.add(Qt(.06,.06,3,F("#5b3a2a"),6,0,10.4,0));const i=new ft(new we().setFromPoints([new E(0,13.3,0),new E(1.8,12.8,0),new E(0,12.2,0)]),new xe({color:Ft.saffron,side:Ne}));return n.add(i),n.add(tn([new E(-1.6,3.6,3.3),new E(0,3,3.4),new E(1.6,3.6,3.3)],.14,F("#f2a51d"),10)),n.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),n}function G_(n){const t=new Bt;t.add($(6,6,5.5,F(n),0,0,0)),t.add($(6.4,.6,5.9,F("#f4e6d0"),0,6,0)),t.add($(2.6,1.6,1,F("#f4e6d0"),0,3.4,3.1));const e=new ft(new Ve(1.3,10,6,0,Math.PI*2,0,Math.PI/2),F("#f4e6d0"));e.position.set(0,5,3.1),e.scale.set(1,.6,.6),t.add(e);for(const i of[-2,0,2])t.add($(.9,1.2,.1,F("#3d5a66"),i,1.2,2.8));return t.traverse(i=>{i.isMesh&&(i.castShadow=!0)}),t}function W_(){const n=new Bt;n.add($(3.4,1.6,2,F("#8b5a3c"),0,0,0));const t=document.createElement("canvas");t.width=64,t.height=16;const e=t.getContext("2d");for(let r=0;r<8;r++)e.fillStyle=r%2?"#ffffff":"#d9534f",e.fillRect(r*8,0,8,16);const i=new Vn(t);i.colorSpace=ye;const s=new ft(new le(4,.2,2.8),new xe({map:i}));s.position.set(0,3,.4),s.rotation.x=.18,n.add(s);for(const r of[-1.8,1.8])n.add($(.12,3,.12,F("#5b3a2a"),r,0,1.6));return n.add(Qt(.35,.3,.6,F("#c0c4c8",{metalness:.6}),10,.8,1.6,0)),n.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),n}function X_(){const n=new Bt,t=F("#7b6450");n.add(Qt(.9,1.3,5,t,8));for(let e=0;e<8;e++){const i=e/8*Math.PI*2;n.add(Qt(.12,.12,4.6,t,5,Math.cos(i)*3.2,0,Math.sin(i)*3.2))}for(const[e,i,s,r]of[[0,6.2,0,3.6],[2.6,5.6,1,2.8],[-2.6,5.8,-.6,3],[.6,6,-2.4,2.6],[-.8,5.6,2.4,2.5]]){const o=new ft(new li(r,1),F("#5f8f4e"));o.position.set(e,i,s),o.scale.y=.65,n.add(o)}return n.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),n}function q_(){const n=new Bt,t=$(12,.12,2.4,gn("#c9a46a",2),0,0,0);t.castShadow=!1,n.add(t);for(const i of[-5.4,5.4])for(const s of[-.35,0,.35])n.add($(.1,1.2,.1,F("#f4ead2"),i,0,s));const e=(i,s,r)=>{const o=new Bt;o.add(Qt(.3,.35,1.1,F(i),8));const a=new ft(new Ve(.3,8,6),F("#b98563"));return a.position.y=1.4,o.add(a),o.position.set(s,0,r),o.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),o};return n.add(e("#ffffff",-4.6,.6),e("#3d7ea6",4.4,-.6),e("#e07a5f",1,2.4),e("#f2c14e",-1.5,-2.6)),n.add($(.12,.9,.12,F("#d9b98c"),-4.2,.4,.6)),n}function Y_(n,t=6.5){const e=new Bt,i=[new E(-n/2,t,0),new E(0,t-1,0),new E(n/2,t,0)],s=new ho(i);e.add(tn(i,.04,F("#555"),12));const r=["#f2c14e","#e07a5f","#3d7ea6","#81b29a","#d94a8c","#f08a24"],o=new we().setFromPoints([new E(-.35,0,0),new E(.35,0,0),new E(0,-.8,0)]);o.computeVertexNormals();const a=Math.floor(n/1.2);for(let l=1;l<a;l++){const c=s.getPoint(l/a),h=new ft(o,new xe({color:r[l%r.length],side:Ne}));h.position.copy(c),e.add(h)}for(const l of[-n/2,n/2])e.add(Qt(.08,.08,t,F(Ft.dark),6,l,0,0));return e}function $_(){const n=document.createElement("canvas");n.width=n.height=256;const t=n.getContext("2d");t.fillStyle="#f6f3ea",t.fillRect(0,0,256,256);for(let i=0;i<8;i++)for(let s=0;s<8;s++)t.save(),t.translate(s*32+16,i*32+16),t.strokeStyle="#2f5d9b",t.lineWidth=3,t.beginPath(),t.arc(0,0,9,0,Math.PI*2),t.stroke(),t.fillStyle="#2f5d9b",t.rotate(Math.PI/4),t.fillRect(-4,-4,8,8),t.restore();const e=new Vn(n);return e.colorSpace=ye,e.wrapS=e.wrapT=jr,e}function j_(n){const t=new Bt;t.add($(6,5.5,5,F(n),0,0,0));const e=new ft(new qn(4.6,2.4,4),F("#cf6a43"));e.rotation.y=Math.PI/4,e.position.y=6.7,e.scale.set(1,1,.85),t.add(e);for(const i of[-1.6,1.6])t.add($(1,1.3,.1,F("#2f5d9b"),i,2.6,2.55));return t.traverse(i=>{i.isMesh&&(i.castShadow=!0)}),t}function Z_(){const n=document.createElement("canvas");n.width=190,n.height=100;const t=n.getContext("2d");for(let i=0;i<13;i++)t.fillStyle=i%2?"#ffffff":"#b22234",t.fillRect(0,i*100/13,190,100/13+.5);t.fillStyle="#3c3b6e",t.fillRect(0,0,76,54),t.fillStyle="#ffffff";for(let i=0;i<5;i++)for(let s=0;s<6;s++)t.beginPath(),t.arc(7+s*12.5,6+i*10.5,1.8,0,Math.PI*2),t.fill();const e=new Vn(n);return e.colorSpace=ye,e}function J_(){const i=new Bt,s=hu(44,32,4);i.add(fs(s,rn-2,8-.9,F(Ft.rock),.6)),i.add(fs(s,8-.9,8-.25,F(Ft.edge),.35)),i.add(fs(s,8-.25,8,F(Ft.stone),.15));const r=He({text:"MIT SLOAN · BOSTON",sub:"SUMMER IMMERSION · JUN 2026",w:1600,h:320,bg:"rgba(250,247,236,0.95)",fg:"#7a1f2b",weight:700,radius:34},34,6.8,{doubleSide:!1});r.position.set(0,8-1.15-3.4,32/2+.8),i.add(r);const o=F("#ece6d8"),a=new Bt;a.position.set(4,8,-3),a.add($(20,6,9,o,0,0,0)),a.add($(20.6,.6,9.6,F("#ddd5c4"),0,6,0));for(let _=0;_<8;_++)a.add(Qt(.38,.42,5.2,F("#f6f2e8"),10,-5.6+_*1.6,.3,5.1));a.add($(13.4,1.1,1.6,F("#ddd5c4"),0,5.5,5.1));const l=new Ni;l.moveTo(-6.9,0),l.lineTo(6.9,0),l.lineTo(0,1.9),l.closePath();const c=new Ts(l,{depth:1.6,bevelEnabled:!1});c.translate(0,0,-.8);const h=new ft(c,F("#ddd5c4"));h.position.set(0,6.6,5.1),a.add(h),a.add(Qt(3.4,3.6,2.6,o,24,0,6.6,-.5));const u=new ft(new Ve(3.6,24,12,0,Math.PI*2,0,Math.PI/2),F("#d8d2c4"));u.position.set(0,9.2,-.5),a.add(u),a.add(Qt(.6,.8,1,o,12,0,12.6,-.5));for(const _ of[-7.5,-5,5,7.5])a.add($(1,2.4,.1,F("#3d5a66"),_,1.6,4.55));a.traverse(_=>{_.isMesh&&(_.castShadow=_.receiveShadow=!0)}),i.add(a);const d=F("#9c4a35");for(let _=0;_<4;_++){const m=new Bt;m.position.set(-17+_*3.4,8,-9);const p=7+_%2*1.2;m.add($(3.3,p,6,d,0,0,0)),m.add($(2,p-2,1,F("#a85640"),0,1,3.3)),m.add($(3.5,.4,6.2,F("#2b2b2b"),0,p,0));for(let v=0;v<3;v++)m.add($(1.4,1,.1,F("#33454f"),0,1.6+v*2,3.85));m.add($(1.1,1.6,.1,F("#1f2a37"),-1.1,0,3.05)),m.traverse(v=>{v.isMesh&&(v.castShadow=!0)}),i.add(m)}for(const[_,m]of[[-16,6],[-11,9],[-6,6.5],[15,10],[18,4],[-19,1]]){const p=new Bt;p.add(Qt(.25,.35,2.2,F("#8a6a4c"),6));const v=new ft(new li(1.8,1),F(Ft.leaf));v.position.y=3.3,p.add(v),p.position.set(_,8,m),p.traverse(y=>{y.isMesh&&(y.castShadow=!0)}),i.add(p)}i.add(Qt(.1,.12,10,F("#c9ccd1",{metalness:.5}),8,-9,8,9));const f=new ft(new yn(3.8,2).translate(1.9,0,0),new xe({map:Z_(),side:Ne}));f.position.set(-8.9,8+8.9,9),i.add(f);const g=$(4,.12,12,gn(Ft.walk,1),4,8,9);return g.castShadow=!1,i.add(g),i.add($(10,.4,3,F("#ab7750"),12,rn+.3,32/2+4)),{group:i,W:44,D:32,TOP:8,flag:f}}function K_(n){const t=new Bt;t.name="terrain",n.add(t);const e=Ya(42),i=new _e,s={tram:null,boats:[],beam:null},r=new ft(new yn(6e3,6e3),new xe({color:Ft.sea,roughness:.35,metalness:.15}));r.rotation.x=-Math.PI/2,r.position.y=rn,r.receiveShadow=!0,t.add(r);const o=new _n(new le(1,.05,.25),new he({color:"#9cc9d2",transparent:!0,opacity:.45}),160);for(let w=0;w<160;w++)i.position.set(mn.centerX+(e()-.5)*620,rn+.05,(e()-.5)*320),i.scale.set(3+e()*9,1,1),i.rotation.set(0,(e()-.5)*.2,0),i.updateMatrix(),o.setMatrixAt(w,i.matrix);t.add(o);const a=me.map(()=>[]),l=(w,N,I,A,B)=>a[w.index].push({x0:N-A,x1:N+A,z0:I-B,z1:I+B}),c=(w,N,I,A)=>Math.abs(N)>w.w/2-A-1||Math.abs(I)>w.d/2-A-1?!1:a[w.index].every(B=>N+A<B.x0||N-A>B.x1||I+A<B.z0||I-A>B.z1),h=me.map(w=>{const N=new Bt;N.name=`island-${w.index}`,N.position.set(w.x,0,w.z),t.add(N);const I=hu(w.w,w.d,4);N.add(fs(I,rn-2,w.top-.9,F(Ft.rock),.6)),N.add(fs(I,w.top-.9,w.top-.25,F(Ft.edge),.35)),N.add(fs(I,w.top-.25,w.top,F(Ft.stone),.15));for(let ct=rn+2;ct<w.top-1.6-Math.min(8.5,w.top-rn-1.6);ct+=2.6){const st=$(w.w-6,.12,.12,F(Ft.edge),0,ct,w.d/2+.62);st.castShadow=!1,N.add(st)}const A=Math.min(8.5,w.top-rn-1.6),B=Math.min(A*5,w.w-8),k=He({text:`0${w.index+1}  ${w.title.toUpperCase()}`,sub:w.years.toUpperCase(),w:1600,h:320,bg:"rgba(250,247,236,0.95)",fg:"#2f5550",weight:700,radius:34},B,A,{doubleSide:!1});k.position.set(0,w.top-1.15-A/2,w.d/2+.8),N.add(k);const q=w.pathZ-w.z,j=w.streetEnd-w.z,Q=$(w.w-1,.12,6,gn(Ft.walk,1),0,w.top,q),at=$(w.w-1,.14,1.3,gn(Ft.coral,2),0,w.top+.02,q),gt=$(7,.12,q-j,gn(Ft.walk,1),0,w.top,(q+j)/2),Y=$(1,.14,q-j-3,gn(Ft.coral,2),0,w.top+.02,(q+j)/2-1.5);[Q,at,gt,Y].forEach(ct=>{ct.castShadow=!1,N.add(ct)}),l(w,0,q,w.w/2,3.5),l(w,0,(q+j)/2,4,(q-j)/2+1);const nt=$(w.w-10,.2,2.2,gn(Ft.grass,1),0,w.top,-(w.d/2-2.2));return nt.castShadow=!1,N.add(nt),N}),u=[];for(const w of io){const N=w.island,I=w.pos.x-N.x,A=w.pos.z-N.z;if(w.stop.style==="empty-plot"){l(N,I,A,10,13);continue}const B=$(20,z_.padTop-.02,20,F(Ft.white),I,N.top+.02,A);B.castShadow=!1,h[N.index].add(B),l(N,I,A,10.5,10.5)}for(const w of me){if(w.place==="next")continue;const N=new Set(io.filter(I=>I.island===w).map(I=>`${Math.sign(I.pos.x-w.x)}:${I.pos.z}`));for(const I of[-1,1])for(const A of w.slots){if(N.has(`${I}:${A}`))continue;const B=h[w.index],k=I*w.rowX,q=A-w.z,j=$(18,.2,18,gn(Ft.grass,1),k,w.top,q);j.castShadow=!1,B.add(j);for(const[Q,at]of[[-5,-5],[5,-5],[-5,5],[5,5]]){const gt=new Bt;gt.add(Qt(.25,.35,2.2,F("#8a6a4c"),6));const Y=new ft(new li(1.7,1),F(Ft.leaf));Y.position.y=3.2,gt.add(Y),gt.position.set(k+Q,w.top,q+at),gt.traverse(nt=>{nt.isMesh&&(nt.castShadow=!0)}),B.add(gt)}B.add($(3,.5,1,F("#ab7750"),k,w.top,q),Qt(1.4,1.6,.6,F(Ft.white),16,k,w.top,q-3.5)),l(w,k,q,10.5,10.5)}}for(const w of me){const N=h[w.index],I=w.pathZ-w.z,A=(q,j,Q,at,gt=0)=>c(w,j,Q,at)?(q.position.set(j,w.top,Q),q.rotation.y=gt,N.add(q),l(w,j,Q,at,at),!0):!1,B=w.slots.map(q=>q-w.z),k=w.rowX+10+(w.w/2-w.rowX-10)/2;if(w.place==="india"){const q=w.index===1;A(V_(),q?k:-k,B[q?1:0],4.6,q?-Math.PI/2:Math.PI/2);for(const[at,gt]of[[0,"#e8a0a8"],[1,"#6f8fc9"],[2,"#e5b465"]]){const Y=(q?-1:1)*k;A(G_(gt),Y,B[0]-14+at*9+(q?4:0),3.4,(q?1:-1)*Math.PI/2)}A(q_(),q?14:-16,I+7.5,3),A(W_(),q?-18:20,I+7,2.2,Math.PI),A(X_(),q?-w.w/2+9:w.w/2-9,I+7.5,4);for(const at of[-w.w/2+5,-6,6,w.w/2-5,0])A(k_(.9+e()*.2),at,I+9.5,1.6,e()*6);for(const at of B){const gt=Y_(7.5);gt.position.set(0,w.top,at+11),N.add(gt)}const j=H_();j.position.set(q?10:-12,w.top+.1,I+1.6),j.rotation.y=Math.PI/2,N.add(j);const Q=$(w.w*.3,.35,1.6,F("#e3913f"),-w.w*.25,w.top,I+4.4);Q.castShadow=!1,N.add(Q)}if(w.place==="lisbon"){const q=$_();q.repeat.set(4,1.6);const j=new ft(new yn(26,8),new xe({map:q,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}));j.rotation.x=-Math.PI/2,j.position.set(-12,w.top+.05,I+7.5),j.receiveShadow=!0,N.add(j),l(w,-12,I+7.5,13,4);const Q=w.streetEnd-w.z;for(const gt of[-1.1,1.1])N.add($(.18,.1,I-Q,F("#4a5560"),gt,w.top+.08,(I+Q)/2));const at=new Bt;at.add($(2.4,2.4,7,F(Ft.yellow),0,.3,0),$(2.6,.35,7.3,F(Ft.white),0,2.7,0));for(const gt of[-1,1])at.add($(.05,.9,5.6,F("#3d6f7b",{roughness:.3}),gt*1.22,1.5,0));at.add(tn([new E(0,3,0),new E(0,4.6,-1)],.05,F("#333"),2)),at.position.set(0,w.top,(I+Q)/2),at.traverse(gt=>{gt.isMesh&&(gt.castShadow=!0)}),N.add(at),s.tram={tram:at,mid:(I+Q)/2,span:(I-Q)/2-6};for(const[gt,Y,nt]of[[-1,0,"#f7f2e7"],[-1,1,"#f3d9a8"],[1,0,"#e9eef2"],[1,1,"#f7f2e7"]])A(j_(nt),gt*k,B[Y],3.6,gt*-Math.PI/2);for(const gt of[8,20,w.w/2-6])A(new Bt().add(Qt(.25,.35,2.2,F("#8a6a4c"),6),new ft(new li(1.7,1).translate(0,3.2,0),F(Ft.leaf))),gt,I+8,2)}if(w.place==="horizon"){const q=new Bt;q.add(Qt(1.4,2,13,F(Ft.white),16));for(let at=0;at<3;at++)q.add(Qt(1.85-at*.15,1.95-at*.15,1.1,F(Ft.red),16,0,2+at*3.6,0));q.add(Qt(1.2,1.2,1.8,new xe({color:"#fff4c2",emissive:"#ffd76a",emissiveIntensity:1.2}),16,0,13,0)),q.add(Qt(.2,1.6,1.4,F(Ft.gold,{metalness:.4}),16,0,14.8,0));const j=new ft(new qn(4,26,24,1,!0).translate(0,-13,0),new he({color:"#ffd76a",transparent:!0,opacity:.22,depthWrite:!1,side:Ne})),Q=new Bt;Q.position.y=13.9,j.rotation.z=Math.PI/2,Q.add(j),q.add(Q),q.traverse(at=>{at.isMesh&&at!==j&&(at.castShadow=!0)}),A(q,k,B[1],2.5),s.beam=Q}}const d=new Jt,f=new Oe(.25,.35,2.2,6).translate(0,1.1,0),g=new li(1.7,1).translate(0,3.2,0),_=F("#3d6f7b",{roughness:.25,metalness:.3});for(const w of me){const N=h[w.index],I=w.pathZ-w.z;if(w.place!=="india"&&w.place!=="next")for(let j=0,Q=0;j<80&&Q<3;j++){const at=w.slots[1]-w.z+4,gt=(e()-.5)*(w.w-10),Y=-w.d/2+5+e()*(at+w.d/2-5);if(!c(w,gt,Y,3.6))continue;const nt=4+w.index*2.6+e()*(3+w.index*2),ct=5+e()*2,st=5+e()*2,pt=new Bt;pt.position.set(gt,w.top,Y),pt.add($(ct,nt,st,F("#eef1f2"),0,0,0));for(let At=0;At<Math.max(1,Math.floor(nt/2.4));At++)pt.add($(ct+.06,.8,st+.06,_,0,.9+At*2.4,0));pt.add($(ct+.4,.3,st+.4,F(Ft.trim),0,nt,0)),pt.traverse(At=>{At.isMesh&&(At.castShadow=At.receiveShadow=!0)}),N.add(pt),l(w,gt,Y,ct/2+1,st/2+1),Q++}const A=[];for(let j=-w.w/2+4;j<=w.w/2-4;j+=5.5)for(const Q of[-w.d/2+4,I+9])c(w,j,Q,1.8)&&(A.push({x:j,z:Q}),l(w,j,Q,1.8,1.8));for(let j=-w.d/2+8;j<I-4;j+=6)for(const Q of[-w.w/2+3.5,w.w/2-3.5])c(w,Q,j,1.8)&&(A.push({x:Q,z:j}),l(w,Q,j,1.8,1.8));if(A.length){const j=new _n(f,F("#8a6a4c"),A.length),Q=new _n(g,F("#ffffff"),A.length);A.forEach((at,gt)=>{i.position.set(at.x,w.top,at.z),i.rotation.set(0,e()*6,0),i.scale.setScalar(.75+e()*.35),i.updateMatrix(),j.setMatrixAt(gt,i.matrix),Q.setMatrixAt(gt,i.matrix),Q.setColorAt(gt,d.set(e()<.6?Ft.leaf:Ft.leaf2))}),j.castShadow=Q.castShadow=!0,N.add(j,Q)}const B=[];for(let j=-w.w/2+4;j<=w.w/2-4;j+=9)B.push({x:j,z:I+3.8,r:0});for(let j=I-6;j>w.streetEnd-w.z+2;j-=9)for(const Q of[-1,1])B.push({x:Q*4.2,z:j,r:Q>0?-Math.PI/2:Math.PI/2});const k=new _n(new Oe(.1,.12,3.6,6).translate(0,1.8,0),F(Ft.dark),B.length),q=new _n(new le(.9,.18,.4).translate(.3,3.6,0),new xe({color:Ft.gold,emissive:"#ffd27a",emissiveIntensity:.25}),B.length);B.forEach((j,Q)=>{i.position.set(j.x,w.top,j.z),i.rotation.set(0,j.r,0),i.scale.setScalar(1),i.updateMatrix(),k.setMatrixAt(Q,i.matrix),q.setMatrixAt(Q,i.matrix)}),k.castShadow=!0,N.add(k,q)}const m=cu.map(w=>{const N=new Bt;N.name=`bridge-${w.index}`,t.add(N);const{a:I,b:A}=w,B=A.clone().sub(I).setY(0).normalize(),k=new E(-B.z,0,B.x);if(w.suspension){const at=Array.from({length:21},(ct,st)=>I.clone().lerp(A,st/20).add(new E(0,.15,0)));N.add(Mi(at,6.5,.9,F("#7d8a8f"))),N.add(Mi(at.map(ct=>ct.clone().add(new E(0,.05,0))),1.3,.1,gn(Ft.coral,2)));const gt=F(Ft.red,{roughness:.5}),Y=[I.clone().lerp(A,.2),I.clone().lerp(A,.8)];for(const ct of Y){for(const pt of[-1,1])N.add($(.9,16,.9,gt,ct.x+k.x*3.4*pt,ct.y-3,ct.z+k.z*3.4*pt));const st=$(.9,.9,7.6,gt,ct.x,ct.y+11.6,ct.z);st.rotation.y=Math.atan2(k.x,k.z),N.add(st)}for(const ct of[-1,1]){const st=k.clone().multiplyScalar(3.4*ct),pt=Y[0].clone().add(st).setY(Y[0].y+12.5),At=Y[1].clone().add(st).setY(Y[1].y+12.5),Ot=Array.from({length:17},(Gt,it)=>{const ht=pt.clone().lerp(At,it/16);return ht.y-=Math.sin(it/16*Math.PI)*10,ht});N.add(tn(Ot,.2,gt,40)),N.add(tn([I.clone().add(st).setY(I.y+.6),pt],.2,gt,4),tn([At,A.clone().add(st).setY(A.y+.6)],.2,gt,4));for(let Gt=2;Gt<=14;Gt+=2){const it=Ot[Gt],ht=I.clone().lerp(A,.2+Gt/16*.6);N.add(tn([it,new E(it.x,ht.y+.2,it.z)],.07,gt,2))}}const nt=Qo("LISBON",{bg:Ft.red,fg:"#ffffff",w:8,h:2.6});return nt.position.copy(I.clone().lerp(A,.5)).add(new E(0,15,0)),N.add(nt),N}const q=Array.from({length:41},(at,gt)=>{const Y=gt/40,nt=I.clone().lerp(A,Y);return nt.y+=Math.sin(Y*Math.PI)*6+.15,nt});if(w.unbuilt){const at=q.slice(0,24);N.add(Mi(at,6.5,.8,F(Ft.white))),N.add(Mi(at.map(pt=>pt.clone().add(new E(0,.05,0))),1.3,.1,gn(Ft.coral,2)));const gt=Mi(q.slice(23),6.5,.8,new he({color:"#ffffff",transparent:!0,opacity:.22,depthWrite:!1}));gt.castShadow=!1,N.add(gt);for(let pt=25;pt<40;pt+=2){const At=q[pt],Ot=$(1.3,.12,1.2,F(Ft.coral),At.x,At.y+.05,At.z);Ot.castShadow=!1,N.add(Ot)}const Y=q[23],nt=F("#d9a441");for(const pt of[-1,1])for(const At of[-1,1])N.add($(.2,12,.2,nt,Y.x+At*1.2,Y.y-9,Y.z+pt*3.4));for(let pt=-8;pt<=2;pt+=2.5)N.add($(2.8,.15,7.2,nt,Y.x,Y.y+pt,Y.z));const ct=pt=>Ys.lerp(I.y-6,A.y-6,pt)+Math.sin(pt*Math.PI)*11.5;for(const pt of[-1,1]){const At=k.clone().multiplyScalar(2.7*pt);N.add(tn(Array.from({length:12},(Ot,Gt)=>{const it=Gt/11*.575,ht=I.clone().lerp(A,it).add(At);return ht.y=ct(it),ht}),.45,F(Ft.trim),24))}const st=Qo("NEXT",{bg:Ft.coral,fg:"#ffffff"});return st.position.copy(q[20]).add(new E(0,4.8,0)),N.add(st,Qt(.12,.12,3.4,F(Ft.dark),6,q[20].x,q[20].y,q[20].z)),N}N.add(Mi(q,6.5,.8,F(Ft.white))),N.add(Mi(q.map(at=>at.clone().add(new E(0,.05,0))),1.3,.1,gn(Ft.coral,2)));const j=at=>Ys.lerp(I.y-6,A.y-6,at)+Math.sin(at*Math.PI)*11.5;for(const at of[-1,1]){const gt=k.clone().multiplyScalar(2.7*at),Y=Array.from({length:21},(nt,ct)=>{const st=ct/20,pt=I.clone().lerp(A,st).add(gt);return pt.y=j(st),pt});N.add(tn(Y,.45,F(Ft.trim),40)),N.add(tn(q.map(nt=>nt.clone().add(k.clone().multiplyScalar(3.1*at)).add(new E(0,1.1,0))),.12,F(Ft.gold,{metalness:.4,roughness:.35}),60));for(let nt=4;nt<=36;nt+=4){const ct=q[nt].clone().add(gt),st=j(nt/40);ct.y-.7-st>.5&&N.add(tn([ct.clone().setY(ct.y-.7),new E(ct.x,st,ct.z)],.07,F(Ft.trim),2))}}const Q=Qo(w.year);return Q.position.copy(q[20]).add(new E(0,4.8,0)),N.add(Q,Qt(.12,.12,3.4,F(Ft.dark),6,q[20].x,q[20].y,q[20].z)),N}),p=me.find(w=>w.place==="lisbon"),v=J_();v.group.name="islet-mit-sloan",v.group.position.set(p.x+18,0,p.z+p.d/2+v.D/2+26),t.add(v.group);const y=new ft(new le(v.W,20,v.D),new he({visible:!1}));y.position.set(0,v.TOP+4,0),y.userData.extraId="mit-sloan",v.group.add(y);const x=new E(p.x+18,rn+.1,p.z+p.d/2+2),U=new E(v.group.position.x-6,rn+.1,v.group.position.z-v.D/2-2),C=new ml(x,x.clone().lerp(U,.5).add(new E(-14,0,0)),U),R=new _n(new Oe(.45,.45,.12,10),new he({color:"#ffffff"}),18);for(let w=0;w<18;w++)i.position.copy(C.getPoint((w+.5)/18)),i.rotation.set(0,0,0),i.scale.setScalar(1),i.updateMatrix(),R.setMatrixAt(w,i.matrix);v.group.attach(R);const D=()=>v.group.localToWorld(new E(0,v.TOP,0)),b=me[0];for(let w=0;w<3;w++)t.add($(3,.4,14,F("#ab7750"),b.x-14+w*5,rn+.3,b.z+b.d/2+9));for(let w=0;w<4;w++){const N=new Bt;N.add($(2,.8,6,F(Ft.white),0,0,0)),N.add(Qt(.07,.07,7,F(Ft.dark),6,0,.8,0));const I=new we().setFromPoints([new E(0,1.4,0),new E(0,7.4,0),new E(0,1.4,3.6)]);I.computeVertexNormals(),N.add(new ft(I,new xe({color:"#f7f3df",side:Ne}))),N.traverse(B=>{B.isMesh&&(B.castShadow=!0)});const A=mn.centerX+(w-1.5)*120+e()*30;N.position.set(A,rn+.2,(w%2?1:-1)*(75+e()*30)),N.userData={x0:A,speed:2+e()*2,phase:e()*6},t.add(N),s.boats.push(N)}const M=[2015.7,2020.75,2025.7,2026.4,2026.55],L=2026.25;function W(w){const N=Ce((w-L)/.2,0,1);v.group.visible=N>0,v.group.position.y=(1-eo(N))*-20,h.forEach((I,A)=>{const B=Ce((w-M[A])/.25,0,1);I.visible=B>0,I.position.y=(1-eo(B))*-(me[A].top+12)}),m.forEach((I,A)=>{I.visible=w>=M[A+1]+.15})}return{group:t,clouds:new Bt,obstacles:[],islandGroups:h,setYear:W,pickables:[y],extras:{"mit-sloan":{anchor:w=>w.copy(D()).add(new E(4,17,-3)),focus:()=>{const w=D().add(new E(2,4,0));return{target:w,pos:w.clone().add(new E(18,40,82))}}}},update(w,N=0,I){if(I){const A=I.aspect<.9;for(const B of u){const k=A?B.spots.tall:B.spots.wide;B.holder.position.z=k.z,B.holder.position.y=k.y+Math.sin(N*.9+B.phase)*.8,B.holder.scale.setScalar(A?1.2:1),B.beam.visible=B.emitter.visible=!A;const q=B.holder.getWorldPosition(new E);B.holder.quaternion.copy(I.quaternion);const j=I.position.distanceTo(q),Q=Math.min(1,Math.max(0,(j-110)/140));B.panel.material.opacity=Q,B.beam.material.opacity=.18*Q,B.panel.visible=Q>.02}}s.tram&&(s.tram.tram.position.z=s.tram.mid+Math.sin(N*.25)*s.tram.span),s.beam&&(s.beam.rotation.y=N*.6),v.flag.rotation.y=Math.sin(N*1.7)*.12;for(const A of s.boats)A.position.x=A.userData.x0+Math.sin(N*.05*A.userData.speed+A.userData.phase)*40,A.rotation.z=Math.sin(N*1.3+A.userData.phase)*.04}}}const Q_=.32,tv=new y_;function kr(n,t,e,i){const s=new Ni;s.moveTo(-t/2,0),s.lineTo(t/2,0),s.lineTo(0,e),s.closePath();const r=new Ts(s,{depth:n,bevelEnabled:!1});r.translate(0,0,-n/2),r.rotateY(Math.PI/2);const o=new ft(r,F(i));return o.castShadow=!0,o}function ev(n,t,e,i){const s=new Ni;s.moveTo(-n/2,0),s.lineTo(n/2,0),s.lineTo(0,t),s.closePath();const r=new Ts(s,{depth:e,bevelEnabled:!1});r.translate(0,0,-e/2);const o=new ft(r,F(i));return o.castShadow=!0,o}function Si(n,{w:t,h:e,rows:i,cols:s,x:r=0,y:o,z:a,color:l="#3f5b74",ww:c=.9,wh:h=1.1,emissive:u="#ffd98a",lit:d=.12,rotY:f=0}){const g=new le(c,h,.15),_=new _n(g,new xe({color:l,emissive:u,emissiveIntensity:d,roughness:.3,metalness:.1}),i*s),m=new _e;let p=0;for(let v=0;v<i;v++)for(let y=0;y<s;y++){const x=s===1?0:-t/2+t*y/(s-1),U=i===1?0:e*v/(i-1);m.position.set(x,U,0),m.updateMatrix(),_.setMatrixAt(p++,m.matrix)}return _.position.set(r,o,a),_.rotation.y=f,n.add(_),_}function zn(n,t,{y:e,z:i,w:s=9,h:r=1.8,bg:o="#243447",fg:a="#fff",sub:l,emissive:c=!1}){const h=He({text:t,sub:l,w:1024,h:Math.round(1024*r/s),bg:o,fg:a},s,r,{emissive:c});return h.position.set(0,e,i),n.add(h),h}function nv(n){const t=new Bt;t.add(Qt(.32,.38,1.1,F(n),6));const e=new ft(new Ve(.3,8,6),F("#f0c8a0"));return e.position.y=1.4,t.add(e),t}const iv={campus(n){n.add($(16,6,8,F("#e9cfa5"),0,0,-1)),n.add($(16.6,.6,8.6,F("#c98f62"),0,6,-1));for(let r=0;r<6;r++)n.add(Qt(.38,.45,5,F("#f6ead2"),8,-6.25+r*2.5,.3,3.6));n.add($(15.5,.35,2.2,F("#d9b98c"),0,0,3.8)),n.add($(15.5,.8,1.8,F("#c98f62"),0,5.3,3.6)),n.add($(3.6,14,3.6,F("#e3c294"),0,0,-3));const e=new ft(new qn(3.1,3.6,4),F("#b5654a"));e.rotation.y=Math.PI/4,e.position.set(0,15.8,-3),e.castShadow=!0,n.add(e);const i=new Vn(sv());i.colorSpace=ye;const s=new ft(new ss(1.25,24),new he({map:i}));return s.position.set(0,11.6,-1.18),n.add(s),Si(n,{w:12,h:2.2,rows:2,cols:7,y:1.8,z:3.05}),zn(n,"MANIPAL INSTITUTE OF TECHNOLOGY",{y:7.4,z:3.2,w:11,h:1.3,bg:"#7a2e2e"}),n.add($(16,.15,3.5,F("#9cc56e"),0,.05,6.8)),{clock:s}},lab(n){n.add(Qt(6,6.3,3.6,F("#f4f1ea"),20));const t=new ft(new Ve(5.8,20,10,0,Math.PI*2,0,Math.PI/2),F("#d9e4ec",{flatShading:!0}));t.position.y=3.6,t.castShadow=!0,n.add(t),Si(n,{w:6,h:0,rows:1,cols:4,y:1.9,z:6.2,color:"#5a7d99"});const e=$(.6,.6,7,F("#3a4250"),0,8.8,2.4);n.add(e),n.add($(.6,3.6,.6,F("#3a4250"),0,6,-1.2));const i=new Bt;i.position.set(0,9.1,6.2);const s=Qt(1.1,1.1,1.8,F("#2b3240"),16);s.rotation.x=Math.PI/2.6,s.position.set(0,0,0),i.add(s);const r=new ft(new ss(.75,20),new he({color:"#6fd3ff"}));r.position.set(0,-.75,.55),r.rotation.x=Math.PI/2+.3,i.add(r),n.add(i),n.add(Qt(1.9,1.6,.9,F("#cbd2da"),16,0,0,8.2)),n.add(Qt(1.8,1.4,.18,F("#ffffff"),20,0,.9,8.2));const o=new ft(new Ve(.62,12,10),F("#d64545"));o.position.set(-.4,1.6,8.2);const a=new ft(new Ve(.5,10,8),F("#a3c454"));return a.position.set(.6,1.5,8),o.castShadow=a.castShadow=!0,n.add(o,a),zn(n,"IMAGE RECOGNITION LAB",{y:4.6,z:6.15,w:9,h:1.15}),{eye:i,lens:r,plate:new E(0,1.6,8.2)}},"learning-tower"(n,t){const e=t.certificates||[];n.add($(8,2.2,8,F("#e8dfcf"),0,0,0)),n.add($(3,1.8,.3,F("#3f5b74"),0,0,4.05));const i=[],s=["#f4efe4","#efe6d4","#f4efe4","#efe6d4","#f4efe4","#efe6d4"];e.forEach((l,c)=>{const h=new Bt;h.position.y=2.2+c*3.4;const u=$(7,3,7,F(s[c%s.length]),0,0,0),d=new ft(new le(7.2,1.1,7.2),new xe({color:"#40607c",emissive:"#ffcf6b",emissiveIntensity:.08,roughness:.3}));d.position.y=1.55;const f=$(7.6,.4,7.6,F("#d8cbb3"),0,3,0);[u,d,f].forEach(g=>{g.userData.certIndex=c}),h.add(u,d,f),h.userData={year:P_(l),band:d,index:c},n.add(h),i.push(h)});const r=2.2+e.length*3.4+.4,o=new ft(new Oe(0,3.2,2.6,4),F("#c66b4f"));o.rotation.y=Math.PI/4,o.position.y=r+1.3,o.castShadow=!0,n.add(o),n.add(Qt(.12,.12,3.4,F("#3a4250"),6,0,r+2.4,0));const a=new ft(new Ve(.35,8,6),new he({color:"#ff7a59"}));return a.position.y=r+6,n.add(a),zn(n,"LEARNING TOWER",{y:1.1,z:4.2,w:6.6,h:1}),{floors:i,crown:o,tip:a,top:r}},arcade(n){n.add($(17,5,10,F("#5b3fa0"),0,0,-1)),n.add($(14,4.2,8,F("#7656c2"),0,5,-2)),n.add($(17.4,.4,10.4,F("#2e2350"),0,5,-1)),n.add($(14.4,.4,8.4,F("#2e2350"),0,9.2,-2)),n.add($(10,3.2,.2,new xe({color:"#2a1d4a",emissive:"#ff4fd8",emissiveIntensity:.25,roughness:.2}),0,.4,4.05));const e=new he({color:"#ff5fd2"}),i=new he({color:"#4ff0ff"}),s=new ft(new le(17.2,.22,.22),e);s.position.set(0,4.85,4.12);const r=new ft(new le(14.2,.22,.22),i);r.position.set(0,9.05,2.12),n.add(s,r);const o=new _n(new Ve(.2,6,4),new he({color:"#ffe17a"}),16),a=new _e;for(let u=0;u<16;u++)a.position.set(-7.5+u,3.9,4.25),a.updateMatrix(),o.setMatrixAt(u,a.matrix);n.add(o);const l=He({text:"GMNG",w:512,h:192,bg:"#1b1233",fg:"#ff7be5",border:"#4ff0ff"},7,2.6,{emissive:!0});l.position.set(0,11.2,.5),n.add(l),n.add($(.3,1.6,.3,F("#2e2350"),-2.5,9.4,.4),$(.3,1.6,.3,F("#2e2350"),2.5,9.4,.4));const c=He({text:"APM · 2021",w:512,h:128,bg:"#ffffff",fg:"#3b2a6b"},3.4,.85);c.position.set(-6.2,4.3,4.13);const h=He({text:"PM · 2022–23",w:512,h:128,bg:"#ffffff",fg:"#3b2a6b"},3.6,.9);return h.position.set(-4.4,8.2,2.13),n.add(c,h),Si(n,{w:10,h:0,rows:1,cols:5,y:6.9,z:2.1,color:"#2a1d4a",emissive:"#4ff0ff",lit:.5}),n.add($(17,.12,4.5,F("#e4d6f2"),0,.03,6.4)),{door:new E(0,0,4.3),plaza:new E(0,0,6.6),bulbs:o}},tower(n){const t=new xe({color:"#8fbcd8",roughness:.15,metalness:.35,flatShading:!0});n.add($(12,3.4,10,F("#dfe5ea"),0,0,0)),n.add($(7,26,7,t,0,3.4,-1));for(let l=0;l<9;l++)n.add($(7.2,.25,7.2,F("#e9eef2"),0,4.2+l*2.9,-1));n.add($(7.4,.8,7.4,F("#d0d8df"),0,29.4,-1)),n.add(Qt(.1,.1,5,F("#3a4250"),6,1.8,30.2,-1.8));const e=new ft(new Ve(.3,8,6),new he({color:"#ff4d4d"}));e.position.set(1.8,35.3,-1.8),n.add(e),n.add($(.4,4.5,.4,F("#3a4250"),-3.5,3.4,3.2),$(.4,4.5,.4,F("#3a4250"),3.5,3.4,3.2));const i=ru({text:"XY ADS",sub:"Ad exchange · built from scratch",w:1024,h:384,bg:"#111827",fg:"#ffffff"}),s=new Vn(i);s.colorSpace=ye;const r=new ft(new yn(9,3.4),new he({map:s}));r.position.set(0,9.5,3.4),n.add(r,$(9.4,3.8,.3,F("#2b3240"),0,7.6,3.2));const o=[],a=[[-8.2,-6.5,"DSP"],[8.2,-6.5,"SSP"],[-8.2,5.5,"DSP"],[8.2,4.5,"SSP"]];for(const[l,c,h]of a){const u=3+Math.abs(l+c)%3;n.add($(3,u,3,F(h==="DSP"?"#f6d6a8":"#cde3c7"),l,0,c));const d=He({text:h,w:256,h:128,bg:"#243447",fg:"#fff"},1.6,.8);d.position.set(l,u+.7,c),d.userData.billboard=!0,n.add(d),o.push(new E(l,u+.2,c))}return{board:r,canvas:i,texture:s,partners:o,hub:new E(0,27,-1),blink:e}},library(n){const t="#f3ead8";for(let r=0;r<3;r++)n.add($(15-r*.8,.45,10-r*.6,F("#ddd2bd"),0,r*.45,0));n.add($(13,6,7,F(t),0,1.35,-1));for(let r=0;r<6;r++)n.add(Qt(.42,.48,5.4,F("#fbf6ea"),10,-5+r*2,1.35,3.2));n.add($(13.6,.7,2.4,F("#e9dcc2"),0,6.75,2.6));const e=ev(13.6,2.6,2.4,"#e9dcc2");e.position.set(0,7.45,2.6),n.add(e),n.add($(13.4,.5,7.4,F("#c46b4e"),0,7.35,-1.2)),zn(n,"THE LIBRARY",{y:8.3,z:3.85,w:5,h:.9,bg:"#f3ead8",fg:"#5b4636"});const i=["#c0504d","#4f81bd","#9bbb59","#f2c14e","#8064a2"];for(let r=0;r<3;r++)for(let o=0;o<4;o++){const a=$(1.4,.32,1,F(i[(r+o)%5]),-5+r*5,1.35+o*.32,5.4);a.rotation.y=o%2*.3-.15,n.add(a)}const s=[];return[["#e07a5f",-3],["#3d7ea6",2.5],["#f2c14e",4.3]].forEach(([r,o])=>{const a=nv(r);a.scale.setScalar(.7),a.position.set(o,1.35,4.4),n.add(a),s.push(a)}),{kids:s}},university(n){const t="#fbf7ef";n.add($(14,7,6,F(t),0,0,-3));const e=kr(14.6,6.8,2.8,"#cf6a43");e.position.set(0,7,-3),n.add(e);for(const l of[-1,1]){n.add($(4.5,5.5,8,F(t),l*6.3,0,2));const c=kr(8.6,5.1,2.2,"#cf6a43");c.rotation.y=Math.PI/2,c.position.set(l*6.3,5.5,2),n.add(c)}const i=document.createElement("canvas");i.width=256,i.height=32;const s=i.getContext("2d");s.fillStyle="#ffffff",s.fillRect(0,0,256,32);for(let l=0;l<16;l++)s.fillStyle="#2f5d9b",s.save(),s.translate(l*16+8,16),s.rotate(Math.PI/4),s.fillRect(-5,-5,10,10),s.restore();const r=new Vn(i);r.colorSpace=ye;const o=new ft(new yn(14,.9),new xe({map:r,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));o.position.set(0,1.4,.03),n.add(o),n.add($(3.2,4.2,.4,F("#2f3a48"),0,0,.1));const a=new ft(new Oe(1.6,1.6,.42,16,1,!1,0,Math.PI),F("#2f3a48"));return a.rotation.z=Math.PI/2,a.rotation.y=Math.PI/2,a.position.set(0,4.2,.1),n.add(a),Si(n,{w:9,h:2.6,rows:2,cols:5,y:2.6,z:.05,color:"#3f5b74"}),zn(n,"CATÓLICA | NOVA · THE LISBON MBA",{y:6.2,z:.12,w:10,h:.95,bg:"#1d3557"}),n.add($(8,.12,6,F("#e8dcc8"),0,.03,5.5)),{depot:new E(0,0,6)}},teahouse(n){n.add($(10,4.6,8,F("#e2ecd7"),0,0,-1));const t=kr(10.8,9,3.2,"#3f6b4a");t.position.set(0,4.6,-1),n.add(t),n.add($(2,3,.25,F("#6b4f3a"),0,0,3.1)),Si(n,{w:6,h:0,rows:1,cols:2,y:2.4,z:3.05,color:"#557a5f",ww:1.4,wh:1.4});const e=new Bt;e.position.set(0,7.2,-1),e.add(Qt(2.2,3.2,.4,F("#ffffff"),20,0,-.3,0)),e.add(Qt(2.3,1.6,2.6,F("#ffffff"),20,0,0,0));const i=new ft(new ss(2.1,20),F("#b5793b"));i.rotation.x=-Math.PI/2,i.position.y=2.45,e.add(i);const s=new ft(new to(.75,.22,6,12),F("#ffffff"));s.position.set(2.4,1.3,0),e.add(s),e.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),n.add(e),zn(n,"SOVENA · TEA HOUSE",{y:4,z:3.08,w:6.4,h:.9,bg:"#3f6b4a"});const r=new _n(new li(.7,0),F("#5f9a52"),24),o=new _e;let a=0;for(let l=0;l<3;l++)for(let c=0;c<8;c++)o.position.set(-7+c*2,.6,5+l*1.6),o.scale.set(1,.8,1),o.updateMatrix(),r.setMatrixAt(a++,o.matrix);return r.castShadow=!0,n.add(r),{steamFrom:new E(0,9.8,-1)}},"hq-ai"(n){n.add($(14,5,10,F("#f4f5f7"),0,0,-1));const t=new xe({color:"#2d3a4a",roughness:.2,metalness:.4});n.add($(11,6,8,t,1,5,-2)),n.add($(11.4,.4,8.4,F("#e7eaee"),1,11,-2)),Si(n,{w:11,h:0,rows:1,cols:6,y:2.6,z:4.05,color:"#2d3a4a",emissive:"#7fd6ff",lit:.15});const e=[];for(let r=0;r<3;r++)for(let o=0;o<4;o++){const a=new xe({color:"#36465a",emissive:"#7cf0c5",emissiveIntensity:0,roughness:.4}),l=new ft(new le(2.1,.3,1.8),a);l.position.set(-2.6+o*2.4,11.55,-4.6+r*2.2),l.castShadow=!0,n.add(l),e.push(l)}const i=new ft(new to(1.6,.22,8,32),new he({color:"#7cf0c5"}));i.position.set(-5,8.6,2.2),n.add(i);const s=He({text:"AI",w:256,h:256,bg:null,fg:"#7cf0c5"},2.2,2.2,{emissive:!0});return s.position.set(-5,8.6,2.25),n.add(s),zn(n,"MR NEO",{y:4,z:4.06,w:4,h:1,bg:"#111827"}),{panels:e,ring:i,ai:s}},"hotel-construction"(n,t){n.add($(14,9,8,F("#f6ecdc"),0,0,-2));for(let g=0;g<3;g++)Si(n,{w:11,h:0,rows:1,cols:6,y:1.7+g*3,z:2.08,color:"#40607c",ww:1.2,wh:1.5,lit:.18}),g>0&&n.add($(13,.18,.9,F("#d8c7ad"),0,g*3,2.4));const i=F("#c9c4bb");for(let g=0;g<2;g++){n.add($(14,.35,8,i,0,9+g*3,-2));for(const _ of[-6.6,-2.2,2.2,6.6])for(const m of[-5.6,1.6])n.add($(.45,3,.45,i,_,9.35+g*3,m))}const s=F("#d9a441");for(let g=0;g<5;g++)n.add($(.15,15,.15,s,7.6,0,-5.6+g*2));for(let g=0;g<5;g++)n.add($(.15,.15,8.4,s,7.6,3+g*3,-2));const r=new Bt;r.position.set(-9,0,-7);const o=F("#f2b632");r.add($(1.3,26,1.3,o));for(let g=0;g<9;g++){const _=$(1.8,.18,.18,F("#c88f12"),0,1+g*2.8,.66);_.rotation.z=.7*(g%2?1:-1),r.add(_)}const a=new Bt;a.position.y=26,a.add($(24,.9,1,o,6,0,0)),a.add($(3,2.2,1.8,F("#5b6573"),-5,-.6,0)),a.add($(1.8,1.6,1.8,F("#e7e1d4"),0,-1.7,0)),a.add($(.6,3,.6,o,0,.8,0));const l=new Bt;l.position.x=12;const c=new ft(new Oe(.06,.06,1,4),F("#333"));l.add(c);const h=new Bt,u=$(3,1.2,1.8,F("#b8b2a7"));u.position.y=-1.3,h.add($(.5,.5,.5,F("#333"),0,-.5,0),u),l.add(h),a.add(l),r.add(a),n.add(r),n.add($(17,2.6,.25,F("#2f4a3a"),0,0,5.2));const d=He({text:"LARÁ · OPENING SOON",sub:"An AI hotel platform, under construction",w:1024,h:256,bg:"#f2b632",fg:"#2a2a2a"},8.6,2.15);return d.position.set(0,10.6,2.3),n.add(d),(t.screenshots||[]).slice(0,4).forEach((g,_)=>{const m=tv.load(g.file);m.colorSpace=ye;const p=new ft(new yn(1.75,3.6),new he({map:m}));p.position.set(-5.4+_*3.6,2.25,5.43),n.add(p,$(2.05,3.9,.15,F("#1f2a37"),-5.4+_*3.6,.3,5.3))}),{jib:a,trolley:l,cable:c,hook:h,windowsAt:[new E(-5,11.5,0),new E(5,4,2.2),new E(5,11.5,0),new E(-5,4,2.2)],door:new E(0,0,6)}},park(n){const t=new Bt;t.position.set(-4.5,0,0),t.add($(7,3,3,F("#d9c6a1"),0,0,4));const e=kr(7.4,3.6,1.2,"#7b5c3e");e.position.set(0,3,4),t.add(e);for(let c=0;c<3;c++)t.add($(.15,.6,9,F("#efe3c8"),-2.2+c*2.2,0,-2.5));const i=new Vn(rv());i.colorSpace=ye;const s=[];for(let c=0;c<3;c++){const h=new ft(new ss(.9,24),new he({map:i}));h.position.set(-2.2+c*2.2,1.6,-7.2),t.add(h,$(.18,1.2,.18,F("#6b4f3a"),-2.2+c*2.2,0,-7.3)),s.push(h)}t.add($(8,2.4,.5,F("#9c8463"),0,0,-8)),n.add(t);const r=new Bt;r.position.set(5.5,0,-1),r.add($(6,.6,6,F("#cbbba0"))),r.add($(5,3.2,5,F("#f4ead6"),0,.6,0));const o=new ft(new qn(5.2,2.2,4),F("#b23a2f"));o.rotation.y=Math.PI/4,o.position.y=4.9;const a=new ft(new qn(3.4,1.8,4),F("#b23a2f"));a.rotation.y=Math.PI/4,a.position.y=6.6,o.castShadow=a.castShadow=!0,r.add(o,a,$(1.4,2.2,.15,F("#5b3a2a"),0,.6,2.55));const l=He({text:"MMA DOJO",w:512,h:128,bg:"#1f2a37",fg:"#fff"},2.8,.7);return l.position.set(0,3.3,2.6),r.add(l),n.add(r),zn(n,"HOBBY PARK",{y:2.4,z:7.5,w:4.4,h:.9,bg:"#2f6b4f"}),n.add($(.2,2,.2,F("#6b4f3a"),-1.9,0,7.4),$(.2,2,.2,F("#6b4f3a"),1.9,0,7.4)),{targets:s}},"post-office"(n){const t="#d9734e",e="#243447";n.add($(16,.5,12,F("#e9e3d6"),0,0,-1)),n.add($(15,9,10,F("#fbf7ef"),0,.5,-1.5));const i=new xe({color:"#7fb3c4",roughness:.15,metalness:.3,emissive:"#ffe2b0",emissiveIntensity:.12});n.add($(12.6,7.6,.2,i,0,.9,3.55));for(let c=0;c<=6;c++)n.add($(.18,7.6,.3,F(e),-6.3+c*2.1,.9,3.6));n.add($(12.8,.25,.4,F(e),0,4.6,3.6)),n.add($(3.4,3.4,.25,F("#ffe9c7",{emissive:"#ffd58a",emissiveIntensity:.5}),0,.5,3.7)),n.add($(7,.35,3,F(t),0,4.1,4.9));for(const c of[-3.2,3.2])n.add($(.2,3.6,.2,F(e),c,.5,6.2));zn(n,"CONTACT ME",{y:10.6,z:3.7,w:13,h:2.2,bg:t,fg:"#ffffff"});const s=new Bt;s.position.set(0,13.6,-1.5),s.add($(7,4.4,.6,F("#ffffff",{emissive:"#ffffff",emissiveIntensity:.15})));const r=new Ni;r.moveTo(-3.5,4.4),r.lineTo(0,1.6),r.lineTo(3.5,4.4),r.closePath();const o=new ft(new xl(r),new xe({color:t,side:Ne}));o.position.z=.32,s.add(o),s.add($(.3,3,.3,F(e),-2.5,-3,0),$(.3,3,.3,F(e),2.5,-3,0)),s.traverse(c=>{c.isMesh&&(c.castShadow=!0)}),s.userData.billboard=!0,n.add(s);const a=He({text:"CONTACT ME",w:1024,h:256,bg:t,fg:"#ffffff"},9,2.25);a.position.set(7.6,7.2,-1.5),a.rotation.y=Math.PI/2,n.add(a);const l=new Bt;return l.position.set(5.6,.5,6),l.add(Qt(.6,.6,2.2,F("#c8102e"),14),Qt(.68,.68,.3,F("#a50d26"),14,0,2.2,0)),n.add(l),n.add($(2.4,.5,.8,F("#ab7750"),-5.4,.5,6.4)),{flag:s,mailFrom:new E(0,14.5,-1)}},"empty-plot"(n){n.add($(18,.3,16,F("#cdb995"),0,.02,0));const t=[[-8,-7],[8,-7],[8,7],[-8,7]];t.forEach(([u,d])=>{n.add($(.25,1.4,.25,F("#a77d4f"),u,.3,d)),n.add($(.7,.45,.04,F("#ff7a2f"),u+.35,1.3,d))});for(let u=0;u<4;u++){const[d,f]=t[u],[g,_]=t[(u+1)%4],m=$(Math.hypot(g-d,_-f),.05,.05,F("#ffffff"),(d+g)/2,1.4,(f+_)/2);m.rotation.y=-Math.atan2(_-f,g-d),m.castShadow=!1,n.add(m)}const e=new ft(new le(12,14,9),new he({color:"#ffffff",transparent:!0,opacity:.14,depthWrite:!1}));e.position.y=7.3;const i=new Yh(new Kh(e.geometry),new g_({color:"#d9734e",dashSize:.7,gapSize:.45}));i.computeLineDistances(),i.position.y=7.3,n.add(e,i);const s=He({text:"YOUR OFFICE HERE",w:1024,h:200,size:84,bg:"#ffffff",fg:"#243447",border:"#ff7a2f"},11,2.15);s.position.set(0,15.8,0),s.userData.billboard=!0,n.add(s);const r=document.createElement("canvas");r.width=256,r.height=32;const o=r.getContext("2d");for(let u=0;u<16;u++)o.fillStyle=u%2?"#ffffff":"#d7263d",o.fillRect(u*16,0,16,32);const a=new Vn(r);a.colorSpace=ye;const l=new ft(new le(7,.5,.25),new xe({map:a}));l.position.set(0,1.3,9.5),l.castShadow=!0,n.add(l,$(.3,1.5,.3,F("#3a4250"),-3.5,.2,9.5),$(.3,1.5,.3,F("#3a4250"),3.5,.2,9.5));const c=new Bt;c.position.set(8.5,.2,10),c.rotation.y=.2;const h=He({text:"The road's paved to mid-December 2026.",sub:"The next stretch leads to your office →",w:1280,h:320,bg:"#243447",fg:"#ffffff"},12,3);return h.position.y=4.6,c.add(h,$(.3,3.2,.3,F("#3a4250"),-4.8,0,-.1),$(.3,3.2,.3,F("#3a4250"),4.8,0,-.1)),n.add(c),{hereSign:s,ghost:e,edges:i,roadSign:h}}};function sv(){const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d");return t.fillStyle="#fbf6ea",t.beginPath(),t.arc(64,64,62,0,Math.PI*2),t.fill(),t.strokeStyle="#3a2e25",t.lineWidth=5,t.stroke(),t.lineCap="round",t.beginPath(),t.moveTo(64,64),t.lineTo(64,26),t.stroke(),t.beginPath(),t.moveTo(64,64),t.lineTo(92,74),t.stroke(),n}function rv(){const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d");return["#ffffff","#1f2a37","#4f81bd","#d7263d","#f2c14e"].forEach((i,s)=>{t.fillStyle=i,t.beginPath(),t.arc(64,64,62-s*12,0,Math.PI*2),t.fill()}),n}function ov(n){const t=[],e=[];for(const a of io){const{stop:l}=a,c=new Bt;c.name=l.id,c.position.copy(a.pos),c.rotation.y=Math.atan2(a.face.x,a.face.z),n.add(c),c.updateMatrixWorld(!0);const h=new Bt,u=l.style==="empty-plot"?0:Q_;h.position.y=u,c.add(h);const d=iv[l.style],f=d?d(h,l,a)||{}:{};h.traverse(x=>{x.isMesh&&(x.userData.stopId=l.id,x.castShadow===void 0&&(x.castShadow=!0))}),h.updateMatrixWorld(!0);const _=new di().setFromObject(h).getSize(new E),m=l.style==="empty-plot"?11:Math.min(_.y,40),p=new Yh(new Kh(new le(Math.min(_.x,18),m,Math.min(_.z,18))),new dl({color:"#ff8a3d",transparent:!0,opacity:.9}));p.position.y=m/2,p.visible=!1,c.add(p);const v=new ft(new le(18,Math.max(6,m),18),new he({visible:!1}));v.position.y=Math.max(6,m)/2,v.userData.stopId=l.id,c.add(v),e.push(v),h.traverse(x=>{x.isMesh&&x.userData.certIndex!==void 0&&e.unshift(x)});const y={stop:l,place:a,root:c,inner:h,parts:f,height:m,scaffold:p,radius:l.style==="empty-plot"?4:9.5,anchor:new E(0,m+2.2,0),progress:1,hover:0,hoverTarget:0,baseY:u};t.push(y)}function i(a){for(const l of t){const c=Math.max(.005,Math.min(.7,ys-l.stop.appearYear-.005)),h=Ce((a-l.stop.appearYear)/c,0,1);l.progress=h;const u=h>0;l.inner.visible=u;const d=h>=1?1:Math.max(.001,eh(h));if(l.inner.scale.set(1,d,1),l.scaffold.visible=h>0&&h<1,l.scaffold.material.opacity=.9*(1-h),l.parts.floors)for(const f of l.parts.floors){const g=Ce((a-f.userData.year)/.25,0,1);f.visible=g>0,f.scale.set(1,Math.max(.001,eh(g)),1)}}}const s=[];for(const a of t)a.inner.traverse(l=>{l.userData.billboard&&s.push({o:l,root:a.root})});const r=new E;function o(a,l,c){if(c)for(const{o:d,root:f}of s)d.getWorldPosition(r),d.rotation.y=Math.atan2(c.position.x-r.x,c.position.z-r.z)-f.rotation.y;for(const d of t)d.hover+=(d.hoverTarget-d.hover)*Math.min(1,a*7),d.inner.position.y=d.baseY+d.hover*.45;const h=t.find(d=>d.parts.blink);h&&(h.parts.blink.visible=Math.sin(l*4)>0);const u=t.find(d=>d.parts.tip);u&&u.parts.tip.material.color.setHSL(.03,.9,.55+Math.sin(l*3)*.15)}return{city:t,pickables:e,setYear:i,update:o,byId:Object.fromEntries(t.map(a=>[a.stop.id,a]))}}function sh(n,t,e){const i=n.getContext("2d");ou(i,{text:t,sub:e,w:n.width,h:n.height,bg:"#111827",fg:"#7cf0c5"})}const rh=["#e07a5f","#3d7ea6","#f2c14e","#81b29a","#9b5de5","#f28482","#2a9d8f"];function ta(n,t,e,{to:i,label:s,prefix:r="",suffix:o="",duration:a=3,cls:l="",final:c}){let h=0;const u=n.add(t,e,d(0),l);function d(f){return`<span class="big">${r}${lu(f)}${o}</span>${s}`}return{update(f){if(h>=a)return;h+=f;const g=eo(Ce(h/a,0,1));u.set(h>=a&&c?`<span class="big">${c}</span>${s}`:d(i*g))},remove:()=>u.remove()}}function oh(n,t){const e=new _l(.28,.7,2,6);e.translate(0,.65,0);const i=new _n(e,new xe({roughness:.8}),t),s=new Jt;for(let r=0;r<t;r++)i.setColorAt(r,s.set(rh[r%rh.length]));return i.count=0,i.castShadow=!0,n.add(i),i}const av={gmng(n,t){const{inner:e,parts:i}=n,s=Ya(3),r=oh(e,260),o=Array.from({length:70},()=>({t:s(),lane:(s()-.5)*3,speed:.25+s()*.2})),a=Array.from({length:190},()=>({x:(s()-.5)*15,z:i.plaza.z-1.8+s()*3.6+(s()<.35?3:0)})),l=new _e;let c=0;const h=ta(t,e,new E(0,14.5,0),{to:2e5,prefix:"+",label:"new users in one month",duration:3.2});let u=null;return{update(d){c+=d,h.update(d),c>2.4&&!u&&(u=ta(t,e,new E(-8,7,5),{to:1e6,label:"users",suffix:"+",duration:2.5,cls:"light",final:"1M+"})),u==null||u.update(d);let f=0;for(const _ of o){_.t+=d*_.speed,_.t>1&&(_.t-=1);const m=20-_.t*(20-i.door.z);l.position.set(_.lane+Math.sin((_.t+_.lane)*20)*.1,Math.abs(Math.sin(_.t*60))*.12,m),l.rotation.y=Math.PI,l.scale.setScalar(1),l.updateMatrix(),r.setMatrixAt(f++,l.matrix)}const g=Math.floor(Ce((c-1.5)/3.5,0,1)*a.length);for(let _=0;_<g;_++){const m=a[_];l.position.set(m.x,Math.max(0,Math.sin(c*6+_)*.08),m.z),l.rotation.y=_,l.updateMatrix(),r.setMatrixAt(f++,l.matrix)}r.count=f,r.instanceMatrix.needsUpdate=!0},dispose(){h.remove(),u==null||u.remove(),e.remove(r),r.geometry.dispose()}}},"xy-ads"(n,t){const{inner:e,parts:i}=n,s=Ya(9),r=new _n(new Ve(.32,6,4),new he({color:"#7cf0c5"}),60);e.add(r);const o=Array.from({length:60},(g,_)=>({p:_%i.partners.length,t:s(),speed:.5+s()*.6,out:s()<.5})),a=new _e;let l=0,c=0;const h=ta(t,e,new E(0,37,-1),{to:1e8,label:"impressions / month",suffix:"+",duration:3.5,final:"100M+"}),u=new E,d=new E,f=new E;return{update(g){l+=g,h.update(g);const _=Ce(l/3.5,0,1),m=1e8*eo(_);Math.floor(l*12)!==c&&(c=Math.floor(l*12),sh(i.canvas,_>=1?"100M+":lu(m),"impressions / month"),i.texture.needsUpdate=!0),o.forEach((p,v)=>{p.t+=g*p.speed,p.t>1&&(p.t=0,p.out=!p.out);const y=p.out?i.hub:i.partners[p.p],x=p.out?i.partners[p.p]:i.hub;u.copy(y),d.copy(x),f.copy(u).add(d).multiplyScalar(.5),f.y+=6;const U=p.t,C=1-U;a.position.set(C*C*u.x+2*C*U*f.x+U*U*d.x,C*C*u.y+2*C*U*f.y+U*U*d.y,C*C*u.z+2*C*U*f.z+U*U*d.z),a.updateMatrix(),r.setMatrixAt(v,a.matrix)}),r.instanceMatrix.needsUpdate=!0},dispose(){h.remove(),e.remove(r),sh(i.canvas,"XY ADS","Ad exchange · built from scratch"),i.texture.needsUpdate=!0}}},"mr-neo"(n,t){const{inner:e,parts:i}=n;let s=0;const r=t.add(e,new E(3,15.5,-2),'<span class="big">&lt; 2 months</span>to an AI-native company');let o=null;return{update(a){s+=a;const l=Math.floor(Ce((s-.4)/2.6,0,1)*i.panels.length);i.panels.forEach((c,h)=>{c.material.emissiveIntensity=h<l?.9:0}),l===i.panels.length&&!o&&(o=t.add(e,new E(-5,12,2.2),"✨ Strategy · pricing · AI-first redesign","light")),i.ring.rotation.z+=a*1.5},dispose(){r.remove(),o==null||o.remove(),i.panels.forEach(a=>{a.material.emissiveIntensity=0})}}},"vision-lab"(n,t){const{inner:e,parts:i}=n,s=new ft(new qn(2.2,7.4,20,1,!0),new he({color:"#6fd3ff",transparent:!0,opacity:.18,side:Ne,depthWrite:!1}));s.position.set(0,5.3,7.4),s.rotation.x=.12,e.add(s);let r=0,o=null,a=null;return{update(l){r+=l,s.material.opacity=.12+Math.abs(Math.sin(r*3))*.18,s.rotation.z=Math.sin(r*1.6)*.18,r>1.4&&!o&&(o=t.add(e,new E(-1.5,3.4,8.2),"🍎 Apple · recognised","light")),r>2.4&&!a&&(a=t.add(e,new E(2.2,2.6,8.2),'<span class="big">100</span>foods · 10,000 training images'))},dispose(){e.remove(s),o==null||o.remove(),a==null||a.remove()}}},"learning-tower"(n,t){const{inner:e,parts:i,stop:s}=n,r=s.certificates||[];let o=0,a=null;const l=[];i.floors.forEach((u,d)=>{const f=r[d]||{},g=f.date?new Date(f.date).getFullYear():"",_=innerWidth<=600,m=_?new E(0,u.position.y+2,3.8):new E(4.6,u.position.y+2.4,3.6);setTimeout(()=>{const p=_?`<b>${d+1}</b> · ${f.shortTitle||f.title}`:`<b>Floor ${d+1}</b> · ${f.shortTitle||f.title} · ${g}`;c||(l[d]=t.add(e,m,p,"light floor-tag"))},250+d*320)});let c=!1;const h=()=>{i.floors.forEach((u,d)=>{var m,p;const f=o>.3+d*.32,g=a===null?f:a===d,_=u.userData.band.material;_.emissiveIntensity=g?a===d?1.2:.7:.05,_.color.set(a===d?"#ffd56b":g?"#f2c14e":"#40607c"),(p=(m=l[d])==null?void 0:m.el)==null||p.classList.toggle("picked",a===d)})};return{update(u){o+=u,h()},highlight(u){a=u,h()},dispose(){c=!0,l.forEach(u=>u==null?void 0:u.remove()),i.floors.forEach(u=>{u.userData.band.material.emissiveIntensity=.08,u.userData.band.material.color.set("#40607c")})}}},"lara-hotel"(n,t){const{inner:e,parts:i}=n,s=[["⚠️ Nut allergy → restaurant alerted","alert"],["✉️ Reply drafted in Portuguese",""],["🛏️ Suggested: room 315, sea view","light"],["☀️ Morning briefing ready",""],["🧹 Room 204: cleaned → ready","light"]];let r=0,o=0,a=[];const l=oh(e,12),c=new _e;return{update(h){if(r+=h,Math.floor(r/1.5)>=o){const[d,f]=s[o%s.length],g=i.windowsAt[o%i.windowsAt.length];a.push(t.add(e,g,d,f)),a.length>2&&a.shift().remove(),o++}for(let d=0;d<12;d++){const f=(r*.18+d/12)%1;c.position.set(-3+d%4*2,0,16-f*10),c.rotation.y=Math.PI,c.updateMatrix(),l.setMatrixAt(d,c.matrix)}l.count=12,l.instanceMatrix.needsUpdate=!0},dispose(){a.forEach(h=>h.remove()),e.remove(l)}}},"post-office"(n,t){const{inner:e,parts:i}=n,s=new ft(new le(1.2,.1,.8),new xe({color:"#ffffff"}));e.add(s);let r=0;const o=t.add(e,new E(0,18.5,-1.5),"✉️ Email · LinkedIn · CV, one click each","light");return{update(a){r+=a;const l=r*.5%1;s.position.set(i.mailFrom.x-l*2,i.mailFrom.y+l*10,i.mailFrom.z+l*6),s.rotation.set(l*4,l*6,0),s.visible=l<.95},dispose(){e.remove(s),o.remove()}}},"your-plot"(n,t){const{inner:e}=n,i=t.add(e,new E(0,13.4,0),"🏗️ Ready to break ground mid-Dec 2026","");return{update(){},dispose(){i.remove()}}},"hobby-park"(n,t){const{inner:e,parts:i}=n;let s=0;const r=t.add(e,new E(-4.5,5,-7),"🎯 50m rifle · national level","light");return{update(o){s+=o,i.targets.forEach((a,l)=>{a.scale.setScalar(1+Math.max(0,Math.sin(s*5-l))*.15)})},dispose(){r.remove(),i.targets.forEach(o=>o.scale.setScalar(1))}}}};function lv(n,t){let e=null;const i=[],s=n.byId.sovena;if(s)for(let r=0;r<6;r++){const o=new ft(new Ve(.45,6,5),new he({color:"#ffffff",transparent:!0,opacity:.5,depthWrite:!1}));s.inner.add(o),i.push({s:o,t:r/6})}return{start(r){this.stop();const o=n.byId[r],a=av[r];o&&a&&(e={id:r,fx:a(o,t)})},stop(){e==null||e.fx.dispose(),e=null},highlight(r){var o,a;(a=e==null?void 0:(o=e.fx).highlight)==null||a.call(o,r)},update(r,o){e==null||e.fx.update(r,o);const a=n.byId["lara-hotel"];if(a){const{jib:c,trolley:h,cable:u,hook:d}=a.parts;c.rotation.y=Math.sin(o*.25)*.9+.4,h.position.x=9+Math.sin(o*.4)*4;const f=8+Math.sin(o*.7)*6;u.scale.y=f,u.position.y=-f/2,d.position.y=-f}const l=n.byId["vision-lab"];l&&(l.parts.eye.rotation.y=Math.sin(o*.8)*.25);for(const c of i){c.t=(c.t+r*.25)%1;const h=s.parts.steamFrom;c.s.position.set(h.x+Math.sin(c.t*8+c.s.id)*.5,h.y+c.t*5,h.z),c.s.scale.setScalar(.6+c.t*1.4),c.s.material.opacity=.55*(1-c.t)}},get activeId(){return e==null?void 0:e.id}}}function cv(n,t,e){const i=new Bt;for(const s of[1,-1]){const r=He({text:n,sub:t,w:2048,h:320,bg:"#ffffff",fg:e.stripe,border:e.body},26,4.1,{doubleSide:!1});r.rotation.y=s>0?Math.PI/2:-Math.PI/2,r.position.x=s*.03,i.add(r)}return i}function hv(n,t){const e=new Bt,i=F(n.body,{flatShading:!0}),s=F(n.stripe),r=new ft(new Oe(1.5,1.1,13,12),i);r.rotation.x=Math.PI/2;const o=new ft(new Ve(1.5,12,8,0,Math.PI*2,0,Math.PI/2),i);o.rotation.x=Math.PI/2,o.position.z=6.5;const a=new ft(new qn(1.1,3.4,12),i);a.rotation.x=-Math.PI/2,a.position.z=-8.2;const l=new ft(new Oe(1.53,1.33,2.2,12),s);l.rotation.x=Math.PI/2,l.position.z=-2;const c=new ft(new le(2.2,.7,1.4),F("#24323f",{roughness:.2}));c.position.set(0,.95,5.4);const h=new ft(new le(22,.45,3.4),i);h.position.set(0,.5,1);const u=[-11,11].map(R=>{const D=new ft(new le(.6,.5,3.4),s);return D.position.set(R,.5,1),D}),d=new ft(new le(8,.3,2),i);d.position.set(0,.6,-8.5);const f=new ft(new le(.35,3.6,2.6),s);f.position.set(0,2.3,-8.4),e.add(r,o,a,l,c,h,...u,d,f);const g=[];for(const R of[-5,5]){const D=new ft(new Oe(.75,.6,3,10),F("#5b6573"));D.rotation.x=Math.PI/2,D.position.set(R,.2,2.6);const b=new Bt;b.position.set(R,.2,4.2);for(let M=0;M<3;M++){const L=new ft(new le(.3,3.6,.12),F("#2b3240"));L.rotation.z=M*Math.PI*2/3,b.add(L)}e.add(D,b),g.push(b)}const _=new ft(new Oe(.05,.05,3,4),F("#333"));_.position.set(0,-2.6,.5);const m=new ft(new le(2.6,2,2.6),F("#b98a52"));m.position.set(0,-5,.5);const p=He({text:"URGENT · 50 KG+",w:512,h:128,bg:"#d40511",fg:"#fff"},2.5,.62);p.position.set(0,-5,1.82);const v=p.clone();v.position.z=-.82,v.rotation.y=Math.PI,e.add(_,m,p,v);const[y,x]=t.split("·").map(R=>R.trim()),U=new ft(new Oe(.05,.05,9,4),F("#333"));U.rotation.x=Math.PI/2,U.position.set(0,0,-14.5);const C=cv(y,x,n);return C.position.set(0,0,-32),e.add(U,C),e.traverse(R=>{R.isMesh&&(R.castShadow=!0)}),{g:e,props:g,banner:C}}function uv(n,t){const e=new Bt;n.add(e);const i=t.find(h=>h.style==="cargo-plane"),s=[];let r=null,o=null;if(i){const h=hv(i.colors,i.banner);r=h,h.g.traverse(f=>{f.isMesh&&(f.userData.vehicleId=i.id)});const u=new ft(new le(26,10,50),new he({visible:!1}));u.position.set(0,-1,-12),u.userData.vehicleId=i.id,h.g.add(u),s.push(u),e.add(h.g);const d=me.find(f=>f.place==="lisbon");o={cx:d.x,cz:d.z,rx:70,rz:52,alt:d.top+52,u:.15,speed:.022}}const a=new E,l=new E,c=(h,u)=>u.set(o.cx+Math.cos(h*Math.PI*2)*o.rx,o.alt+Math.sin(h*Math.PI*4)*2.5,o.cz+Math.sin(h*Math.PI*2)*o.rz);return{plane:(r==null?void 0:r.g)||null,pickables:s,vehicleData:i,update(h,u=0){if(r){o.u=(o.u+h*o.speed)%1,c(o.u,a),c(o.u+.01,l),r.g.position.copy(a),r.g.lookAt(l),r.g.rotateZ(-.22);for(const d of r.props)d.rotation.z+=h*30;r.banner.rotation.y=Math.sin(u*2.2)*.05}}}}const ah={type:"change"},Sl={type:"start"},uu={type:"end"},Hr=new lo,lh=new ii,dv=Math.cos(70*Ys.DEG2RAD),Re=new E,$e=2*Math.PI,ae={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ea=1e-6;class fv extends T_{constructor(t,e=null){super(t,e),this.state=ae.NONE,this.enabled=!0,this.target=new E,this.cursor=new E,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ln.ROTATE,MIDDLE:ln.DOLLY,RIGHT:ln.PAN},this.touches={ONE:En.ROTATE,TWO:En.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new E,this._lastQuaternion=new hi,this._lastTargetPosition=new E,this._quat=new hi().setFromUnitVectors(t.up,new E(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new th,this._sphericalDelta=new th,this._scale=1,this._panOffset=new E,this._rotateStart=new lt,this._rotateEnd=new lt,this._rotateDelta=new lt,this._panStart=new lt,this._panEnd=new lt,this._panDelta=new lt,this._dollyStart=new lt,this._dollyEnd=new lt,this._dollyDelta=new lt,this._dollyDirection=new E,this._mouse=new lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=mv.bind(this),this._onPointerDown=pv.bind(this),this._onPointerUp=gv.bind(this),this._onContextMenu=bv.bind(this),this._onMouseWheel=xv.bind(this),this._onKeyDown=yv.bind(this),this._onTouchStart=Mv.bind(this),this._onTouchMove=Sv.bind(this),this._onMouseDown=_v.bind(this),this._onMouseMove=vv.bind(this),this._interceptControlDown=wv.bind(this),this._interceptControlUp=Ev.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ah),this.update(),this.state=ae.NONE}update(t=null){const e=this.object.position;Re.copy(e).sub(this.target),Re.applyQuaternion(this._quat),this._spherical.setFromVector3(Re),this.autoRotate&&this.state===ae.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=$e:i>Math.PI&&(i-=$e),s<-Math.PI?s+=$e:s>Math.PI&&(s-=$e),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Re.setFromSpherical(this._spherical),Re.applyQuaternion(this._quatInverse),e.copy(this.target).add(Re),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Re.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new E(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new E(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Re.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Hr.origin.copy(this.object.position),Hr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Hr.direction))<dv?this.object.lookAt(this.target):(lh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Hr.intersectPlane(lh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ea||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ea||this._lastTargetPosition.distanceToSquared(this.target)>ea?(this.dispatchEvent(ah),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?$e/60*this.autoRotateSpeed*t:$e/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Re.setFromMatrixColumn(e,0),Re.multiplyScalar(-t),this._panOffset.add(Re)}_panUp(t,e){this.screenSpacePanning===!0?Re.setFromMatrixColumn(e,1):(Re.setFromMatrixColumn(e,0),Re.crossVectors(this.object.up,Re)),Re.multiplyScalar(t),this._panOffset.add(Re)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Re.copy(s).sub(this.target);let r=Re.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft($e*this._rotateDelta.x/e.clientHeight),this._rotateUp($e*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp($e*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-$e*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft($e*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-$e*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft($e*this._rotateDelta.x/e.clientHeight),this._rotateUp($e*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function pv(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function mv(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function gv(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(uu),this.state=ae.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function _v(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ln.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ae.DOLLY;break;case ln.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ae.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ae.ROTATE}break;case ln.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ae.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ae.PAN}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(Sl)}function vv(n){switch(this.state){case ae.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ae.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ae.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function xv(n){this.enabled===!1||this.enableZoom===!1||this.state!==ae.NONE||(n.preventDefault(),this.dispatchEvent(Sl),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(uu))}function yv(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function Mv(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case En.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ae.TOUCH_ROTATE;break;case En.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ae.TOUCH_PAN;break;default:this.state=ae.NONE}break;case 2:switch(this.touches.TWO){case En.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ae.TOUCH_DOLLY_PAN;break;case En.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ae.TOUCH_DOLLY_ROTATE;break;default:this.state=ae.NONE}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(Sl)}function Sv(n){switch(this._trackPointer(n),this.state){case ae.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ae.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ae.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ae.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ae.NONE}}function bv(n){this.enabled!==!1&&n.preventDefault()}function wv(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ev(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Tv extends fv{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:ln.PAN,MIDDLE:ln.DOLLY,RIGHT:ln.ROTATE},this.touches={ONE:En.PAN,TWO:En.DOLLY_ROTATE}}}function Av(n){const t=new on(32,1,4,1500),e=new Tv(t,n);e.enableDamping=!0,e.dampingFactor=.08,e.maxPolarAngle=1.32,e.minPolarAngle=.25,e.minDistance=22,e.maxDistance=900,e.screenSpacePanning=!1,e.zoomToCursor=!1,e.zoomSpeed=.9,e.rotateSpeed=.6,e.panSpeed=1.1,e.mouseButtons={LEFT:ln.PAN,MIDDLE:ln.DOLLY,RIGHT:ln.ROTATE},e.touches={ONE:En.PAN,TWO:En.DOLLY_ROTATE};let i=null,s="overview",r=!1,o=null;const a={x:0,y:0,tx:0,ty:0};function l(){const M=t.aspect,L=Ys.degToRad(t.fov),W=2*Math.atan(Math.tan(L/2)*M);if(M<.9){const A=new E(mn.centerX+14,8,10),B=new E(-.78,.58,.24).normalize(),k=Math.max(mn.d*.98/2/Math.tan(W/2),mn.w*.58/2/Math.tan(L/2));return{pos:A.clone().addScaledVector(B,k),target:A}}const w=new E(mn.centerX+2,10,0),N=new E(.12,.6,.79).normalize(),I=Math.max(mn.w*.98/2/Math.tan(W/2),mn.d*.78/2/Math.tan(L/2));return{pos:w.clone().addScaledVector(N,I),target:w}}function c(){const M=e.enableDamping,L=e.enabled;e.enabled=!0,e.enableDamping=!1,e.update(),e.enableDamping=M,e.enabled=L}function h(M,L,W=1.15,w){i==null||i.cancel(),c();const N=t.position.clone(),I=e.target.clone();us()&&(W=.25),e.enabled=!1,i=ds({duration:W,ease:hs,onUpdate:A=>{t.position.lerpVectors(N,M,A);const B=Math.sin(A*Math.PI)*Math.min(60,N.distanceTo(M)*.18);t.position.y+=B,e.target.lerpVectors(I,L,A),t.lookAt(e.target)},onDone:()=>{i=null,s!=="drive"&&s!=="follow"&&!r&&(e.enabled=!0,e.update()),w==null||w()}})}function u(){s==="drive"||r||(i&&(i.cancel(),i=null),s==="follow"&&(s="focus",o=null),r||(e.enabled=!0))}function d(M){r=M,M?e.enabled=!1:!i&&s!=="follow"&&s!=="drive"&&(e.enabled=!0)}function f(M){if(s==="drive")return;u();const L=t.position.clone().sub(e.target),W=L.length(),w=Ce(W*M,e.minDistance,e.maxDistance),N=L.normalize();i=ds({duration:us()?.01:.35,ease:hs,onUpdate:I=>{t.position.copy(e.target).addScaledVector(N,Jo(W,w,I)),t.lookAt(e.target)},onDone:()=>{i=null,e.update()}})}function g(M,L){if(s==="drive")return;u();const W=t.position.clone().sub(e.target).normalize(),w=Ce(M/Math.max(.2,L),e.minDistance,e.maxDistance);t.position.copy(e.target).addScaledVector(W,w),t.lookAt(e.target)}const _=()=>t.position.distanceTo(e.target);function m(M){if(s==="drive")return;u();const L=t.position.clone().sub(e.target),W=new E(0,1,0);i=ds({duration:us()?.01:.45,ease:hs,onUpdate:w=>{t.position.copy(e.target).add(L.clone().applyAxisAngle(W,M*w)),t.lookAt(e.target)},onDone:()=>{i=null,e.update()}})}function p(M=1.2){s="overview",o=null;const{pos:L,target:W}=l();h(L,W,M)}function v(M){s="focus",o=null;const{place:L,height:W}=M,w=M.stop.style==="learning-tower",N=L.pos.clone().setY(L.pos.y+Math.min(W,30)*(w?.5:.42)),I=(w?66:Ce(W*2.6,58,100))*(t.aspect<.9?w?1.9:1.5:1),A=L.face.clone();let B;if(Math.abs(A.x)>.5)B=N.clone().add(A.clone().multiplyScalar(I*.5)).add(new E(0,0,I*.6)).add(new E(0,I*(w?.62:.92),0));else{const k=new E(-A.z,0,A.x).multiplyScalar(.45);B=N.clone().add(A.multiplyScalar(I*.78)).add(k.multiplyScalar(I)).add(new E(0,I*(w?.36:.55),0))}h(B,N)}let y="chase";function x(M,L){s="focus",o=null,h(M,L)}function U(M,L="chase"){i==null||i.cancel(),i=null,c(),s="follow",o=M,y=L,e.enabled=!1}function C(M){s=M,M==="drive"&&(e.enabled=!1)}function R(M,L){a.tx=M,a.ty=L}function D(M,L){t.aspect=M/L,t.updateProjectionMatrix()}function b(M,L){var w;if(s==="follow"&&o){const N=o.getWorldPosition(new E),I=o.getWorldQuaternion(new hi),A=new E(0,0,1).applyQuaternion(I).setY(0).normalize();let B;if(y==="side"){const k=new E(-A.z,0,A.x);B=N.clone().addScaledVector(k,92).addScaledVector(A,-20).add(new E(0,34,0)),N.addScaledVector(A,-20).add(new E(0,-4,0))}else if(y==="drone"){const k=t.aspect<.9?new E(-46,58,22):new E(14,50,62);B=N.clone().add(k)}else B=N.clone().addScaledVector(A,-22).add(new E(0,14,0));t.position.lerp(B,Math.min(1,M*2.5)),e.target.lerp(N,Math.min(1,M*4)),t.lookAt(e.target)}else!i&&s!=="drive"&&(e.update(),e.target.x=Ce(e.target.x,mn.minX-30,mn.maxX+30),e.target.z=Ce(e.target.z,-220/2,mn.d/2),e.target.y=Ce(e.target.y,-2,70));const W=Math.min(1,M*6);a.x=Jo(a.x,a.tx,W),a.y=Jo(a.y,a.ty,W),Math.abs(a.x)>.5||Math.abs(a.y)>.5?t.setViewOffset(L.w,L.h,a.x,a.y,L.w,L.h):(w=t.view)!=null&&w.enabled&&t.clearViewOffset()}return{camera:t,controls:e,overview:p,overviewPose:l,focusBuilding:v,follow:U,flyTo:h,setMode:C,setPanelOffset:R,resize:D,update:b,interrupt:u,zoomBy:f,rotateBy:m,zoomLive:g,distance:_,focusPoint:x,setLocked:d,get locked(){return r},get mode(){return s},get flying(){return!!i}}}const Ae=new E;function Cv(n,t,e){const i=t.map(f=>{const g=document.createElement("button");return g.className="label"+(f.stop.underConstruction?" now":"")+(f.stop.style==="empty-plot"?" always":""),g.setAttribute("role","listitem"),g.setAttribute("aria-label",`${f.stop.order}. ${f.stop.name.replace(/[^\p{L}\p{N}\s|·&.,'’-]/gu,"").trim()}, ${f.stop.yearLabel}`),g.innerHTML=`<span class="n">${f.stop.order}</span><span class="t"></span><span class="y"></span>`,g.querySelector(".t").textContent=f.stop.style==="empty-plot"?"Your office →":Rv(f.stop.name),g.querySelector(".y").textContent=f.stop.yearLabel,g.addEventListener("click",_=>{_.stopPropagation(),e(f.stop.id)}),g.addEventListener("mouseenter",()=>{f.hoverTarget=1}),g.addEventListener("mouseleave",()=>{f.hoverTarget=0}),n.appendChild(g),{b:f,el:g}});let s=null,r=null,o=!1,a=null;const l=new iu;let c=[],h=0;const u=new E,d=[];return{setOccluders(f){c=f},invalidate(){for(const f of i)f.dirty=!0;for(const f of d)f.w=0,f.h=0},addExtra(f,g,_,m=null){n.appendChild(f),d.push({el:f,anchorFn:g,hiddenFn:_,island:m})},setView({hidden:f=!1,island:g=null}={}){o=f,a=g},setFocused(f){var g;s=f,r=((g=i.find(_=>_.b.stop.id===f))==null?void 0:g.b.place.island)||null},setHot(f){for(const g of i){const _=g.b.stop.id===f;g.el.classList.contains("hot")!==_&&(g.el.classList.toggle("hot",_),g.dirty=!0)}},update(f,g){const _=[],m=c.length&&h++%8===0;m&&f.getWorldPosition(u);for(const v of i){const{b:y,el:x}=v;if(Ae.copy(y.anchor),Ae.y=y.height*y.inner.scale.y+2.2+y.hover*.8+y.baseY,y.root.localToWorld(Ae),m){const N=y.root.position.clone().setY(y.root.position.y+Math.max(2,y.height*.5)).clone().sub(u),I=N.length();l.set(u,N.normalize()),l.far=I-4,v.occluded=l.intersectObjects(c,!1).length>0}const U=f.position.distanceTo(Ae);Ae.project(f);const C=Ae.z>1,R=y.progress>.6,D=(Ae.x*.5+.5)*g.w,b=(-Ae.y*.5+.5)*g.h,M=s===y.stop.id,L=!!r&&y.place.island!==r||a!=null&&y.place.island.index!==a,W=o||C||!R||M||L||v.occluded||D<-80||D>g.w+80||b<-40||b>g.h+40;if(x.classList.toggle("gone",W),x.classList.toggle("dim",!!s&&!M),x.tabIndex=R?0:-1,!W){const w=Math.max(.78,Math.min(1.08,260/U+.55));(!v.w||v.dirty)&&(v.w=x.offsetWidth,v.h=x.offsetHeight,v.dirty=!1),_.push({it:v,x:D,y:b,s:w,dist:U})}}for(const v of d){v.anchorFn(Ae);const y=f.position.distanceTo(Ae);Ae.project(f);const x=o||Ae.z>1||v.hiddenFn()||!!s||a!=null&&v.island!=null&&v.island!==a;v.el.classList.toggle("gone",x),v.el.classList.toggle("dim",!!s),!x&&(v.w||(v.w=v.el.offsetWidth,v.h=v.el.offsetHeight),v.w&&_.push({it:v,x:(Ae.x*.5+.5)*g.w,y:(-Ae.y*.5+.5)*g.h,s:1,dist:y+1e6}))}_.sort((v,y)=>v.dist-y.dist);const p=[];for(const v of _){const y=v.it.w*v.s,x=v.it.h*v.s;let U=v.y-x;for(let R=0;R<6;R++){const D=p.find(b=>v.x-y/2<b.r&&v.x+y/2>b.l&&U<b.b&&U+x>b.t);if(!D)break;U=D.t-x-4}if(v.it.anchorFn&&v.y-(U+x)>30){v.it.el.classList.add("gone");continue}p.push({l:v.x-y/2,r:v.x+y/2,t:U,b:U+x});const C=U+x;v.it.el.style.transform=`translate(${v.x.toFixed(1)}px, ${C.toFixed(1)}px) translate(-50%, -100%) scale(${v.s.toFixed(3)})`,v.it.el.style.zIndex=String(1e3-Math.round(v.dist)),v.it.el.classList.toggle("nudged",C<v.y-2)}}}}function Rv(n){return n.replace("Manipal Institute of Technology","Manipal").replace("The Lisbon MBA · Católica | Nova","Lisbon MBA").replace(" 🚧","").replace("The Library","Library").replace("Contact Me","✉ Contact me")}function Pv(n){const t=new Set;return{add(e,i,s,r=""){const o=document.createElement("div");o.className="badge "+r,o.innerHTML=s,n.appendChild(o);const a={el:o,object3d:e,localPos:i.clone(),dead:!1};return t.add(a),{el:o,set(l){o.innerHTML=l},remove(){a.dead=!0,t.delete(a),o.style.transition="opacity 0.25s",o.style.opacity="0",setTimeout(()=>o.remove(),260)}}},clear(){for(const e of[...t])e.el.remove(),t.delete(e)},update(e,i){for(const s of t){if(Ae.copy(s.localPos),s.object3d.localToWorld(Ae),Ae.project(e),Ae.z>1){s.el.style.opacity="0";continue}let r=(Ae.x*.5+.5)*i.w;const o=Math.max(-Ae.y*.5*i.h+.5*i.h,150);if(!s.el.classList.contains("floor-tag")||i.w<=600){const l=(s.el.offsetWidth||0)/2+8;l*2<i.w&&(r=Math.min(i.w-l,Math.max(l,r)))}s.el.style.opacity="";const a=s.el.classList.contains("floor-tag")&&i.w>600;s.el.style.transform=a?`translate(${r.toFixed(1)}px, ${o.toFixed(1)}px) translate(8px, -50%)`:`translate(${r.toFixed(1)}px, ${o.toFixed(1)}px) translate(-50%, -100%)`}}}}function z(n,t={},...e){const[i,...s]=n.split("."),r=document.createElement(i||"div");s.length&&(r.className=s.join(" "));for(const[o,a]of Object.entries(t||{}))a==null||a===!1||(o.startsWith("on")&&typeof a=="function"?r.addEventListener(o.slice(2),a):o==="text"?r.textContent=a:r.setAttribute(o,a===!0?"":a));for(const o of e.flat())o==null||o===!1||r.append(o instanceof Node?o:document.createTextNode(String(o)));return r}function du(n,t,e=1100){const i=String(t).match(/^([^\d]*)([\d,.]+)(.*)$/);if(!i||/–/.test(t)||matchMedia("(prefers-reduced-motion: reduce)").matches){n.textContent=t;return}const[,s,r,o]=i,a=parseFloat(r.replace(/,/g,"")),l=(r.split(".")[1]||"").length,c=r.includes(","),h=performance.now(),u=d=>{const f=Math.min(1,(d-h)/e),g=1-Math.pow(1-f,3);let _=(a*g).toFixed(l);c&&(_=Number(_).toLocaleString("en-US")),n.textContent=s+_+o,f<1?requestAnimationFrame(u):n.textContent=t};requestAnimationFrame(u)}function ch(n=""){return String(n).split(/\*\*(.+?)\*\*/).map((t,e)=>e%2?z("strong",{text:t}):t)}function $a(n,{animate:t=!1,onClaim:e,hotCert:i,onCert:s,bare:r=!1,skipStory:o=!1,skipMetrics:a=!1}={}){var u,d,f,g,_;const l=n.underConstruction||/now|present/i.test(n.dates||""),c=document.createDocumentFragment();if(!r){c.append(z("span.chip"+(l?".now":""),{},l?"● ":"",n.yearLabel),z("h2",{text:n.name.replace(" 🚧","")})),n.role&&c.append(z("p.role",{text:n.role}));const m=[n.dates,n.location].filter(Boolean).join(" · ");m&&c.append(z("p.meta",{text:m}))}if(n.status&&c.append(z("p.status",{},"🚧 ",n.status)),n.story&&!o&&c.append(z("p.story",{text:n.story})),(u=n.metrics)!=null&&u.length&&!a){const m=z("div.metrics");for(const p of n.metrics){const v=z("div.v");t?du(v,p.value):v.textContent=p.value,m.append(z("div.metric",{},v,z("div.l",{text:p.label})))}c.append(m)}if((d=n.certificates)!=null&&d.length){c.append(z("h3",{text:"Certificates · one per floor"})),n.howTo&&s&&c.append(z("p.howto",{text:n.howTo}));const m=z("ul.certs"),p=v=>{m.querySelectorAll("li").forEach(y=>y.classList.toggle("hot",Number(y.dataset.cert)===v)),s==null||s(v)};n.certificates.forEach((v,y)=>{const x=v.date?new Date(v.date).toLocaleDateString("en-GB",{month:"short",year:"numeric"}):"";m.append(z("li"+(i===y?".hot":""),{"data-cert":y,tabindex:s?0:null,onmouseenter:s?()=>s(y):null,onmouseleave:s?()=>s(m.querySelector("li.hot")?Number(m.querySelector("li.hot").dataset.cert):null):null,onclick:s?U=>{U.target.closest("a")||p(y)}:null,onkeydown:s?U=>{U.key==="Enter"&&p(y)}:null},z("div.t",{},z("span.floor",{text:`Floor ${y+1}`}),v.title),z("div.s",{},z("span",{text:[v.issuer,x].filter(Boolean).join(" · ")}),v.verify?z("a",{href:v.verify,target:"_blank",rel:"noopener",text:"Verify ↗"}):null)))}),c.append(m)}if((f=n.highlights)!=null&&f.length){const m=n.certificates?"Notes":{"empty-plot":"The details","post-office":"The details",park:"Off the clock",campus:"Highlights",university:"Highlights",library:"Highlights"}[n.style]||(n.id==="dhl"?"The project":"What I did");c.append(z("h3",{text:m})),c.append(z("ul.highlights",{},n.highlights.map(p=>z("li",{text:p.text}))))}(g=n.screenshots)!=null&&g.length&&(c.append(z("h3",{text:"From the app"})),c.append(z("div.shots",{},n.screenshots.map(m=>z("figure",{},z("img",{src:m.file,alt:m.caption,loading:"lazy"}),z("figcaption",{text:m.caption}))))));const h=[];n.cta&&h.push(z("button.primary",{onclick:()=>e==null?void 0:e()},`${n.cta.label} →`));for(const m of n.links||[])h.push(z("a.ghost",{href:m.href,target:m.href.startsWith("mailto:")?null:"_blank",rel:"noopener"},m.label));return h.length&&c.append(z("div.links",{},h)),(_=n.tags)!=null&&_.length&&c.append(z("div.tags",{},n.tags.map(m=>z("span",{text:m})))),c}function Lv(n,{chapter:t,prev:e,next:i,position:s,onNav:r,onClaim:o,onCert:a,hotCert:l}={}){var v,y,x,U,C;const c=document.createDocumentFragment(),h=n.name.replace(" 🚧",""),u=n.underConstruction||/now|present/i.test(n.dates||"");c.append(z("p.card-eyebrow"+(u?".now":""),{text:t?`Chapter ${t.n} · ${t.title}`:n.yearLabel||""})),c.append(z("h2.card-title",{text:h})),n.role&&c.append(z("p.card-role",{text:n.role}));const d=[n.dates,n.location].filter(Boolean).join(" · ");d&&c.append(z("p.card-meta",{text:d}));const f=n.metrics||[],g=((v=n.card)==null?void 0:v.hero)||f[0],_=((y=n.card)==null?void 0:y.proofs)||f.slice(1,4);if(g){const R=z("div.hero-v"+(String(g.value).length>6?".long":""));du(R,g.value),c.append(z("div.hero",{},R,z("div.hero-l",{text:g.label}))),_.length&&c.append(z("ul.proofs",{},_.map(D=>z("li",{},z("span.v",{text:D.value}),z("span.l",{text:D.label})))))}else n.story&&c.append(z("p.card-story",{text:n.story}));const m=!!((x=n.certificates)!=null&&x.length||n.cta||(U=n.links)!=null&&U.length),p=z("div.card-more",{hidden:m?null:!0},$a(n,{bare:!0,skipStory:!g,skipMetrics:!0,onClaim:o,onCert:a,hotCert:l}));if(!m&&((C=n.highlights)!=null&&C.length||g)){const R=z("button.card-toggle",{type:"button","aria-expanded":"false",onclick:()=>{const D=p.hidden;p.hidden=!D,R.setAttribute("aria-expanded",String(D)),R.textContent=D?"Show less":"Read the full story ›",D&&p.scrollIntoView({behavior:"smooth",block:"start"})}},"Read the full story ›");c.append(R)}return c.append(p),(e||i)&&c.append(z("nav.card-nav",{"aria-label":"Buildings"},z("button",{type:"button",onclick:()=>r(-1),disabled:e?null:!0},e?`‹ ${e}`:""),z("span",{text:s||""}),z("button.next",{type:"button",onclick:()=>r(1),disabled:i?null:!0},i?`${i} ›`:""))),c}function Dv({el:n,body:t,closeBtn:e,onClose:i,onNav:s,onClaim:r,onCert:o}){e.addEventListener("click",()=>i());let a=null;return{open(l,{hotCert:c,nav:h={}}={}){var u;a=l.id,t.replaceChildren(Lv(l,{...h,onNav:s,onClaim:r,onCert:o,hotCert:c})),t.scrollTop=0,n.hidden=!1,c!=null&&((u=t.querySelector(`[data-cert="${c}"]`))==null||u.scrollIntoView({block:"center"}))},close(){a=null,n.hidden=!0},get isOpen(){return!n.hidden},get currentId(){return a}}}function Iv(n,t,e,i){const s=(e==null?void 0:e.actions)||[{label:"View my CV",href:i.cvFile,kind:"cv"},{label:"Email me",href:`mailto:${i.email}`,kind:"email"},{label:"Copy email",value:i.email,kind:"copy"}],r={cv:"📄",email:"✉️",copy:"📋"},o={cv:"Opens the PDF · one page",email:i.email,copy:"For when you have no mail app here"};for(const c of s){const h=[z("span.ic",{text:r[c.kind]||"→"}),z("span",{},c.label,z("small",{text:o[c.kind]||""}))];if(c.kind==="copy"){const u=z("button",{onclick:async()=>{let d=!1;try{await navigator.clipboard.writeText(c.value),d=!0}catch{}if(!d){const f=z("textarea",{},c.value);document.body.append(f),f.select();try{d=document.execCommand("copy")}catch{d=!1}f.remove()}u.querySelector("small").textContent=d?"Copied ✓":c.value}},h);t.append(u)}else t.append(z("a"+(c.kind==="email"?".main":""),{href:c.href,target:c.kind==="cv"?"_blank":null,rel:"noopener"},h))}let a=null;const l=()=>{var c;n.hidden=!0,(c=a==null?void 0:a.focus)==null||c.call(a)};return n.addEventListener("click",c=>{(c.target===n||c.target.closest("[data-close]"))&&l()}),{open(){var c;a=document.activeElement,n.hidden=!1,(c=n.querySelector(".claim-actions a, .claim-actions button"))==null||c.focus()},close:l,get isOpen(){return!n.hidden}}}function hh(n=""){return String(n).split(/\*\*(.+?)\*\*/).map((t,e)=>e%2?z("strong",{text:t}):t)}const Uv=(n="")=>n.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"");function Nv(n,{person:t,stops:e,extras:i=[],onClaim:s,onClose:r}){var _,m;const o=Oi.cv,a={},l=(p,v=[])=>{for(const y of v)a[y]??(a[y]=p);return p},c={},h=(p,v,...y)=>{const x=z("section.qv-section",{"aria-labelledby":`qv-h-${p}`},z("h2.qv-h",{id:`qv-h-${p}`,text:v}),...y);return c[p]=x,x},u=p=>p==null?void 0:p.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"}),d=[["experience","Experience"],["projects","Projects"],["education","Education"],["skills","Skills"]],f=z("div.quick-top.qv-top",{},z("div.bar.qv-bar",{},z("div.qv-brand",{},z("strong",{text:t.name}),z("span",{text:"CV"})),o?z("nav.qv-nav",{"aria-label":"CV sections"},d.map(([p,v])=>z("button",{type:"button",onclick:()=>u(c[p])},v))):null,z("div.qv-actions",{},z("button.ghost",{type:"button",onclick:r},z("span",{"aria-hidden":"true",text:"← "}),z("span.qv-long",{text:"Back to the "}),"city"),z("button.primary",{type:"button",onclick:s},"Contact me")))),g=z("div.quick-inner.qv-sheet");if(o){const p=Uv(t.linkedin),v=l(z("header.qv-header",{},z("p.qv-status",{},z("span.qv-dot",{"aria-hidden":"true"}),o.availability),z("h1.qv-name",{text:t.name}),z("p.qv-headline",{text:t.headline}),z("p.qv-sub",{text:t.subline}),z("ul.qv-facts",{},z("li",{},z("span",{text:"Based in"}),t.location),z("li",{},z("span",{text:"Open to"}),o.openTo),z("li",{},z("span",{text:"Looking for"}),o.lookingFor)),z("div.qv-contact",{},z("a.primary",{href:`mailto:${t.email}`},"Email me"),z("a.ghost",{href:t.linkedin,target:"_blank",rel:"noopener"},"LinkedIn ↗"),z("a.ghost",{href:t.cvFile,target:"_blank",rel:"noopener",download:""},"Download CV (PDF)")),z("p.qv-print-contact",{text:[t.location,t.email,p].join("  ·  ")})),["post-office","your-plot"]),y=z("p.qv-summary",{text:(_=o.summary)==null?void 0:_.text}),x=z("div.qv-signature",{role:"list","aria-label":"Signature results"},(o.signature||[]).map(A=>z("div.qv-stat",{role:"listitem"},z("div.qv-stat-v",{text:A.value}),z("div.qv-stat-l",{text:A.label}),z("div.qv-stat-w",{text:A.where})))),U=A=>A!=null&&A.length?z("ul.qv-bullets",{},A.map(B=>z("li",{},hh(B.text??B)))):null,C=(A,B,k)=>z("div.qv-entry-head",{},z("div.qv-entry-title",{},A,B),z("p.qv-dates",{text:k})),R=(o.experience||[]).map(A=>{var B,k;return l(z("article.qv-entry"+((B=A.bullets)!=null&&B.length?"":".qv-entry-short"),{id:`q-${(k=A.ids)==null?void 0:k[0]}`},C(z("h3.qv-role",{text:A.role}),z("p.qv-org",{},z("strong",{text:A.company}),A.location?z("span",{text:` · ${A.location}`}):null),A.dates),A.promotion?z("p.qv-promo",{text:A.promotion}):null,A.context?z("p.qv-context",{text:A.context}):null,U(A.bullets)),A.ids)}),D=(o.projects||[]).map(A=>{var B;return l(z("article.qv-entry.qv-project",{id:`q-${(B=A.ids)==null?void 0:B[0]}`},C(z("h3.qv-role",{text:A.name}),z("p.qv-org",{text:A.kind}),A.dates),A.summary?z("p.qv-context",{},hh(A.summary)):null,U(A.bullets)),A.ids)}),b=(o.education||[]).map(A=>{var B;return l(z("article.qv-entry.qv-entry-short",{id:`q-${(B=A.ids)==null?void 0:B[0]}`},C(z("h3.qv-role",{text:A.name}),z("p.qv-org",{text:A.school}),A.dates),A.note?z("p.qv-context",{text:A.note}):null),A.ids)}),M=e.find(A=>{var B;return(B=A.certificates)==null?void 0:B.length}),L=((M==null?void 0:M.certificates)||[]).map(A=>{const B=A.date?new Date(A.date).toLocaleDateString("en-GB",{month:"short",year:"numeric"}):"";return z("li",{},z("div",{},z("strong",{text:A.title}),z("span",{text:[A.issuer,B].filter(Boolean).join(" · ")})),A.verify?z("a",{href:A.verify,target:"_blank",rel:"noopener","aria-label":`Verify certificate: ${A.title}`},"Verify ↗"):null)}),W=L.length?l(z("div.qv-certs",{},z("h3.qv-subh",{text:"Certifications"}),z("ul",{},L)),M?[M.id]:[]):null,w=z("dl.qv-skills",{},(o.skills||[]).map(A=>z("div",{},z("dt",{text:A.label}),z("dd",{text:A.text})))),N=l(z("div.qv-beyond",{},z("h3.qv-subh",{text:"Beyond work"}),z("p",{text:(m=o.beyond)==null?void 0:m.text})),["hobby-park"]),I=z("div.qv-cta",{},z("div",{},z("p.qv-cta-t",{text:"Let's talk"}),z("p.qv-cta-s",{text:`${o.lookingFor} · ${o.openTo} · ${o.availability.replace(/^Available/,"available")}.`})),z("div.qv-cta-actions",{},z("button.primary",{type:"button",onclick:s},"Contact me"),z("a.ghost",{href:`mailto:${t.email}`},t.email),z("button.ghost",{type:"button",onclick:r},"← Back to the city")));g.append(v,y,x,h("experience","Experience",R),h("projects","Projects",D),h("education","Education",b,W),h("skills","Skills",w,N),I)}else{g.append(z("h1",{text:t.name}),z("p.lede",{},`${t.headline} · ${t.subline}`));for(const p of e){g.append(l(z("article",{},$a(p,{onClaim:s})),[p.id]));for(const v of i.filter(y=>y.after===p.id))g.append(l(z("article",{},$a(v)),[v.id]))}}return n.tabIndex=-1,n.append(f,g),{open(p){var y;n.hidden=!1;const v=p&&a[p];v?v.scrollIntoView():n.scrollTop=0,(y=n.focus)==null||y.call(n,{preventScroll:!0})},close(){n.hidden=!0},get isOpen(){return!n.hidden}}}const ts=new E;function Ov(n,t,e){const i=me.map((r,o)=>{const a=t[o]||{},l=(a.card||a.lede||"").replace(/\*\*/g,""),c=z("button.era"+(o===me.length-1?".next":""),{type:"button","aria-label":`Chapter ${a.n}: ${a.title}, ${a.years}. ${l}`,onclick:h=>{h.stopPropagation(),e(o)}},z("span.n",{text:a.n}),z("span.t",{text:a.title}),z("span.y",{text:a.years}),z("span.h",{text:a.card||""}));return n.append(c),{I:r,el:c,w:0}});let s=!1;return{set visible(r){r!==s&&(s=r,n.classList.toggle("on",r))},get visible(){return s},invalidate(){for(const r of i)r.w=0},update(r,o){if(!s)return;const a=r.aspect<.9;n.classList.toggle("chips",a),i.forEach((l,c)=>{const{I:h,el:u}=l;if(a?ts.set(h.x,h.top+6,h.z):ts.set(h.x,h.top+34,h.z-h.d/2+8),ts.project(r),ts.z>1){u.style.visibility="hidden";return}u.style.visibility="";let d=(ts.x*.5+.5)*o.w;const f=(-ts.y*.5+.5)*o.h;l.w||(l.w=u.offsetWidth);const g=l.w/2+12,_=a?d+(c%2?-70:70):d,m=Math.min(o.w-g,Math.max(g,_));u.style.setProperty("--stem",`${50+(d-m)/(l.w||1)*100}%`),u.style.transform=`translate(${m.toFixed(1)}px, ${f.toFixed(1)}px) translate(-50%, ${a?"-50%":"-100%"})`})}}}function Fv({rig:n,titleEl:t,storyEl:e,title:i,chapters:s,names:r,onOpen:o,onClaim:a,onCV:l,onExplore:c,onChapter:h,blocked:u}){let d="off",f=-1;const g=()=>n.camera.aspect<.9;t.append(z("div.title-fade",{"aria-hidden":"true"}),z("div.title-inner",{},z("p.title-name",{text:i.name||"Manu Pratap Singh"}),z("p.eyebrow",{text:i.eyebrow}),z("h1",{},i.headline.flatMap((I,A)=>A?[z("br"),I]:[I])),z("p.title-lede",{},ch(i.lede)),z("div.title-stats",{},i.stats.map(I=>z("div",{},z("b",{text:I.value}),z("span",{text:I.label})))),z("div.title-actions",{},z("button.primary.big",{type:"button",onclick:()=>b(0)},"Start the journey ›"),z("button.ghost.big",{type:"button",onclick:()=>l()},"View CV")),z("p.title-avail",{},z("i",{"aria-hidden":"true"}),i.available||"Available full-time from mid-December 2026"),z("button.title-explore",{type:"button",onclick:()=>c()},"or explore the city freely")),z("p.title-hint",{"aria-hidden":"true",text:"Scroll to begin ↓"}));const _=z("div.story-col",{"aria-live":"polite"}),m=z("nav.story-rail",{"aria-label":"Chapters"},s.map((I,A)=>z("button",{type:"button","aria-label":`Chapter ${I.n}: ${I.title}`,title:I.title,onclick:()=>b(A)},z("span",{text:I.n}))));e.append(_,m);const p=z("button.title-tab",{type:"button",hidden:!0,"aria-label":"Back to the overview",onclick:()=>D()},z("span.tab-name",{text:i.name||"Manu Pratap Singh"}),z("span.tab-line",{text:i.headline.join(" ")}),z("span.tab-back",{text:"Back to the overview ›"}));t.after(p);let v=null;_.addEventListener("animationend",()=>_.classList.remove("enter"));function y(I){const A=s[I],k=[...me[I].stops,...A.extras||[]],q=s[I+1];_.replaceChildren(z("p.eyebrow",{text:[`Chapter ${A.n}`,A.years,A.place].filter(Boolean).join(" · ")}),z("h2",{text:A.title}),z("p.story-lede",{text:A.lede}),z("ul.story-points",{},A.points.map(j=>z("li",{},ch(j)))),A.cta?z("div.story-actions",{},z("button.primary",{type:"button",onclick:()=>a()},"Contact me"),z("button.ghost",{type:"button",onclick:()=>l()},"View CV")):z("div.story-stops",{},z("span",{text:"Open"}),k.filter(j=>r[j]).map(j=>z("button.ghost",{type:"button",onclick:()=>o(j)},r[j]))),z("p.story-next",{},q?`${g()?"Swipe up":"Scroll ↓"} to cross the bridge to ${q.title}`:"The end of the road, for now."," · ",z("button",{type:"button",onclick:()=>c()},"explore freely"))),m.querySelectorAll("button").forEach((j,Q)=>j.classList.toggle("on",Q===I))}const x=()=>Math.min(500,innerWidth*.4);function U(I){const A=me[I],B=n.camera,k=g(),q=2*Math.atan(Math.tan(Ys.degToRad(B.fov)/2)*B.aspect),j=(A.w+A.d*.45)*({lisbon:1.45,next:1.7}[A.place]||1.1),Q=k?1:(innerWidth-x())/innerWidth,at=1.22*(j/2)/(Math.tan(q/2)*Q),gt=new E(A.x+(A.place==="lisbon"?8:0),A.top+3,A.z+(A.place==="lisbon"?14:-4)),Y=(k?new E(-.25,.8,.55):new E(-.35,.62,.7)).normalize();return{pos:gt.clone().addScaledVector(Y,at),target:gt}}function C(){if(g())return n.overviewPose();const I=me[2],A=new E(I.x+5,22,I.z),B=new E(-.7,.5,.6).normalize(),k=390*Math.max(1,1.6/n.camera.aspect);return{pos:A.clone().addScaledVector(B,k),target:A}}function R(){if(d==="title"){const{pos:I,target:A}=C();n.setPanelOffset(0,g()?(t.querySelector(".title-inner").offsetHeight||innerHeight*.5)*.5:0),n.focusPoint(I,A)}else if(d==="story"){const{pos:I,target:A}=U(f);n.setPanelOffset(g()?0:-x()/2,g()?(_.offsetHeight||innerHeight*.45)*.5:0),n.focusPoint(I,A)}}function D(){d="title",f=-1,n.setLocked(!0),clearTimeout(v),p.hidden=!0,t.classList.remove("tucked"),e.hidden=!0,t.hidden=!1,h(-1),requestAnimationFrame(R)}function b(I){I=Math.max(0,Math.min(s.length-1,I));const A=d!=="story"||I!==f;d="story",f=I,n.setLocked(!0),clearTimeout(v),p.hidden=!0,t.classList.remove("tucked"),t.hidden=!0,e.hidden=!1,e.classList.remove("away"),A&&(y(I),_.classList.remove("enter"),_.offsetWidth,_.classList.add("enter")),h(I),requestAnimationFrame(R)}function M(I){if(d==="title"){I>0&&b(0);return}if(d==="story"){if(I<0&&f===0)return D();I>0&&f===s.length-1||b(f+I)}}let L=0,W=0,w=0;addEventListener("wheel",I=>{var B,k;if(d==="off"||u()||I.ctrlKey||(k=(B=I.target).closest)!=null&&k.call(B,"#panel, #quick, .modal"))return;I.preventDefault();const A=performance.now();A-w>220&&(L=0),w=A,!(A<W)&&(L+=I.deltaY+I.deltaX*.5,Math.abs(L)>46&&(M(Math.sign(L)),L=0,W=A+900))},{passive:!1});let N=null;return addEventListener("touchstart",I=>{var A,B;if(d==="off"||u()||I.touches.length!==1){N=null;return}if((B=(A=I.target).closest)!=null&&B.call(A,"#panel, #quick, .modal, #topbar")){N=null;return}N={x:I.touches[0].clientX,y:I.touches[0].clientY}},{passive:!0}),addEventListener("touchend",I=>{if(!N)return;const A=I.changedTouches[0],B=A.clientX-N.x,k=N.y-A.clientY;N=null,Math.abs(k)>50&&Math.abs(k)>Math.abs(B)*1.2&&M(k>0?1:-1)},{passive:!0}),{showTitle:D,go:b,step:M,frame:R,away(I){e.classList.toggle("away",I)},resume(){d==="story"?b(f):d==="title"&&D()},hide(){const I=d==="title";d="off",e.hidden=!0,p.hidden=!1,p.classList.toggle("fresh",I),I?(t.classList.add("tucked"),clearTimeout(v),v=setTimeout(()=>{t.hidden=!0,t.classList.remove("tucked")},450)):t.hidden=!0,n.setLocked(!1),n.setPanelOffset(0,0)},get mode(){return d},get index(){return f}}}function Bv(){const n=new Bt,t=F("#d9734e",{roughness:.45});n.add($(2.4,.9,4.4,t,0,.35,0)),n.add($(2.1,.85,2.3,F("#eaf2f5",{roughness:.15,metalness:.2}),0,1.25,-.25)),n.add($(2.2,.18,2.4,t,0,2.1,-.25));for(const e of[-.75,.75])n.add($(.5,.25,.08,new he({color:"#fff6c9"}),e,.75,2.22));for(const e of[-.75,.75])n.add($(.5,.2,.08,new he({color:"#ff5a4f"}),e,.75,-2.22));for(const[e,i]of[[-1.15,1.4],[1.15,1.4],[-1.15,-1.4],[1.15,-1.4]]){const s=new ft(new Oe(.45,.45,.35,12),F("#1f2329"));s.rotation.z=Math.PI/2,s.position.set(e,.45,i),n.add(s)}return n.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),n}function zv(){const n=[],t=[],i=(s,r,o)=>n.push(new E(s,r,o));return me.forEach((s,r)=>{const o=s.top+.18,a=s.pathZ;if(s.place==="next")return;r===0&&i(s.x-s.w/2+5,o,a),i(s.x-7,o,a),i(s.x-1.7,o,a-5);const l=s.stops.map(g=>B_[g]).filter(Boolean),c=[...new Set(l.map(g=>g.pos.z))].sort((g,_)=>_-g);for(const g of c)i(s.x-1.7,o,g);const h=c[c.length-1];i(s.x-1.7,o,h-3),i(s.x,o,h-5.5),i(s.x+1.7,o,h-3);for(const g of[...c].reverse().slice(1))i(s.x+1.7,o,g);i(s.x+1.7,o,a-5),i(s.x+7,o,a),l.forEach(g=>t.push({id:g.stop.id,point:new E(s.x+(g.side>0?1.7:-1.7),o,g.pos.z)})),s.place==="lisbon"&&(i(s.x+18,o,a),t.push({id:"mit-sloan",extra:!0,point:new E(s.x+18,o,a)})),i(s.x+s.w/2-.5,o,a);const u=cu[r];if(!u)return;const d=20,f=g=>{const _=u.a.clone().lerp(u.b,g);return _.y+=(u.suspension?0:Math.sin(g*Math.PI)*6)+.35,_};if(u.unbuilt){for(let g=1;g<=11;g++)n.push(f(g/d));t.push({id:"your-plot",point:f(.55)})}else for(let g=1;g<=d;g++)n.push(f(g/d))}),{curve:new ho(n,!1,"centripetal",.5),parks:t}}function kv({scene:n,rig:t,onArrive:e,onLeave:i,onStatus:s}){const{curve:r,parks:o}=zv();r.arcLengthDivisions=4e3;const a=r.getLength(),l=4e3,c=r.getSpacedPoints(l);let h=0;for(const x of o){let U=h,C=1/0;for(let R=h;R<=l;R++){const D=c[R].distanceToSquared(x.point);D<C&&(C=D,U=R)}x.u=U/l,h=U}const u=Bv();n.add(u);const d=new E;let f=0,g=-1,_=null,m=!1,p=1;const v=x=>{const U=r.getPointAt(Ce(x,0,1));u.position.copy(U),r.getPointAt(Ce(x+.0015*p,0,1),d),d.distanceToSquared(U)>1e-6&&u.lookAt(d)};v(0);function y(x){if(x=Ce(x,0,o.length-1),x===g&&!_){e(o[x]);return}m=!0,_==null||_.cancel();const U=o[x],C=f,R=Math.abs(U.u-C)*a;p=U.u>=C?1:-1,g=x,t.follow(u,"drone"),s({driving:!0,index:x,total:o.length,park:U});const D=us()?.3:Ce(R/28,1.4,7);_=ds({duration:D,ease:hs,onUpdate:b=>{f=C+(U.u-C)*b,v(f)},onDone:()=>{_=null,s({driving:!1,index:x,total:o.length,park:U})}})}return{car:u,parks:o,get active(){return m},get index(){return g},get driving(){return!!_},next(){y(g+1)},prev(){y(Math.max(0,g-1))},go:y,jumpTo(x){const U=o.findIndex(C=>C.id===x);U<0||(_==null||_.cancel(),_=null,g=U,f=o[U].u,p=1,v(f))},glideTo(x){const U=o.findIndex(b=>b.id===x);if(U<0||U===g&&!_)return;_==null||_.cancel();const C=o[U],R=f;p=C.u>=R?1:-1,g=U;const D=us()?.3:Ce(Math.abs(C.u-R)*a/45,1.2,4);_=ds({duration:D,ease:hs,onUpdate:b=>{f=R+(C.u-R)*b,v(f)},onDone:()=>{_=null}})},end(){_==null||_.cancel(),_=null,m=!1},setVisible(x){u.visible=x}}}const ve=n=>document.getElementById(n),Ze=ve("scene"),Ee={w:innerWidth,h:innerHeight},ja=()=>innerWidth<=860,Rn=new Ug({canvas:Ze,antialias:!0,alpha:!0,powerPreference:"high-performance"});Rn.setPixelRatio(Math.min(devicePixelRatio,2));Rn.setSize(Ee.w,Ee.h,!1);Rn.outputColorSpace=ye;Rn.toneMapping=vh;Rn.toneMappingExposure=1.05;Rn.shadowMap.enabled=!0;Rn.shadowMap.type=gh;const Hv="#f3d6b8",Pn=new Ng;Pn.fog=new ul(Hv,500,1400);Pn.add(new M_("#ffe7cc","#55708c",1.7));const fi=new w_("#ffc489",3.6);fi.position.set(230,120,90);fi.castShadow=!0;fi.shadow.mapSize.set(ja()?1024:2048,ja()?1024:2048);Object.assign(fi.shadow.camera,{left:-260,right:260,top:170,bottom:-170,near:10,far:700});fi.shadow.camera.updateProjectionMatrix();fi.shadow.bias=-4e-4;fi.shadow.normalBias=.6;Pn.add(fi);const Fi=K_(Pn),sr=ov(Pn),{city:Vv,byId:Gn}=sr,fu=Pv(ve("badges")),Di=lv(sr,fu),Ms=uv(Pn,A_),ee=Av(Ze);ee.resize(Ee.w,Ee.h);const bn=Ms.vehicleData,Ks=bn&&{id:"dhl",after:bn.depot,order:0,yearLabel:"MBA project · 2026",name:bn.panel.name,role:bn.panel.role,dates:bn.panel.dates,story:bn.panel.story,highlights:[{text:bn.panel.note}],tags:["Logistics","Market research","Consulting"]},Qs=Object.fromEntries(fo.map(n=>[n.id,n])),Le={selected:null,cityYear:ys,exploring:!1},na=Xe.find(n=>n.cta),ci=Iv(ve("claim"),ve("claim-actions"),na==null?void 0:na.cta,su),qe=Dv({el:ve("panel"),body:ve("panel-body"),closeBtn:ve("panel-close"),onClose:()=>ar(),onNav:n=>Ka(n),onClaim:()=>ci.open(),onCert:n=>Di.highlight(n)}),Ci=Nv(ve("quick"),{person:su,stops:Xe,extras:[...fo,...Ks?[Ks]:[]],onClaim:()=>ci.open(),onClose:()=>Ci.close()}),cn=Cv(ve("labels"),Vv,n=>or(n));cn.setOccluders(Fi.islandGroups.map(n=>n.children[0]));const rr=me.findIndex(n=>n.place==="lisbon");var fh;const Gv=z("button.label.vehicle",{"aria-label":"DHL Express, MBA consulting project (plane)",onclick:n=>{n.stopPropagation(),Al()}},z("span.n",{text:"✈"}),z("span.t",{text:((fh=bn==null?void 0:bn.label)==null?void 0:fh.replace("✈ ",""))||"DHL project"}));var ph;for(const n of fo){const t=(ph=Fi.extras)==null?void 0:ph[n.id];if(!t)continue;const e=z("button.label.islet",{"aria-label":`${n.name}, ${n.location}`,onclick:i=>{i.stopPropagation(),mo(n.id)}},z("span.n",{text:"★"}),z("span.t",{text:`${n.name} · Boston`}));cn.addExtra(e,i=>t.anchor(i),()=>Le.selected===n.id||Le.cityYear<2026.4,rr)}Ms.plane&&cn.addExtra(Gv,n=>{Ms.plane.getWorldPosition(n),n.y+=7},()=>Le.selected==="dhl",rr);const ia=()=>{},tr=kv({scene:Pn,rig:ee,onArrive:ia,onLeave:ia,onStatus:ia}),Za={...Object.fromEntries(Xe.map(n=>[n.id,n.style==="empty-plot"?"Your office":n.name.replace(" 🚧","").replace("The Lisbon MBA · Católica | Nova","The Lisbon MBA")])),...Object.fromEntries(fo.map(n=>[n.id,n.name])),...Ks?{dhl:"DHL Express"}:{}},ge=Fv({rig:ee,titleEl:ve("title"),storyEl:ve("story"),title:L_,chapters:ir,names:Za,onOpen:n=>n==="dhl"?Al():Qs[n]?mo(n):or(n),onClaim:()=>ci.open(),onCV:()=>Ci.open(),onExplore:()=>El(),onChapter:n=>{Cl(),Le.exploring=!1,bl(),qe.isOpen&&ar({quiet:!0}),n<0?tr.jumpTo(Xe[0].id):tr.glideTo(me[n].stops[0])},blocked:()=>qe.isOpen||Ci.isOpen||ci.isOpen}),so=Ov(ve("eras"),ir,n=>ge.go(n)),Ja=ve("btn-mode");function bl(){Ja.replaceChildren(z("span.long",{text:Le.exploring?"‹ Back to the story":"Explore freely"}),z("span.short",{text:Le.exploring?"‹ Story":"Explore"})),Ja.title=Le.exploring?"Return to the chapter you were on":"Move around the city yourself"}let wl=0;Ja.addEventListener("click",()=>Le.exploring?ge.go(wl):El());function El(){ge.index>=0&&(wl=ge.index),Cl(),qe.isOpen&&ar({quiet:!0}),ge.hide(),Le.exploring=!0,bl(),ee.overview()}function er(n){const t=N_[n];return t?t.index:n==="dhl"||Qs[n]?rr:-1}function Wv(n){const t=Xe.findIndex(i=>i.id===n),e=ir[er(n)];return t<0?{chapter:e}:{chapter:e,prev:Xe[t-1]&&Za[Xe[t-1].id],next:Xe[t+1]&&Za[Xe[t+1].id],position:`${t+1} of ${Xe.length}`}}function po(){if(qe.isOpen)if(ja()){const n=ve("panel").getBoundingClientRect().height||Ee.h*.5;ee.setPanelOffset(0,n*.5)}else{const n=ve("panel").getBoundingClientRect().width||420;ee.setPanelOffset((n+24)*.5,0)}}function Tl(n){Cl(),ge.mode==="title"&&ge.go(Math.max(0,er(n))),ge.mode==="story"&&(wl=Math.max(0,er(n)),ge.away(!0))}function or(n,{hotCert:t}={}){var s;const e=Gn[n];if(!e||e.progress<=0)return;const i=qe.isOpen&&qe.currentId===n;Tl(n),tr.jumpTo(n),Le.selected=n,ee.focusBuilding(e),i&&t!=null?(ve("panel-body").querySelectorAll(".certs li").forEach(r=>r.classList.toggle("hot",Number(r.dataset.cert)===t)),(s=ve("panel-body").querySelector(`[data-cert="${t}"]`))==null||s.scrollIntoView({block:"nearest",behavior:"smooth"})):(qe.open(e.stop,{hotCert:t,nav:Wv(n)}),Di.start(n)),t!=null&&Di.highlight(t),cn.setFocused(n),requestAnimationFrame(po)}function Al(){Ks&&(Tl("dhl"),Le.selected="dhl",Di.stop(),cn.setFocused(null),qe.open(Ks,{nav:{chapter:ir[rr]}}),ee.follow(Ms.plane,"side"),requestAnimationFrame(po))}function mo(n){var r;const t=Qs[n],e=(r=Fi.extras)==null?void 0:r[n];if(!t||!e)return;Tl(n),tr.jumpTo(n),Le.selected=n,Di.stop(),cn.setFocused(null),qe.open(t,{nav:{chapter:ir[rr]}});const{pos:i,target:s}=e.focus();ee.focusPoint(i,s),requestAnimationFrame(po)}function ar({quiet:n=!1}={}){const t=Le.selected;Le.selected=null,qe.close(),Di.stop(),cn.setFocused(null),ee.setPanelOffset(0,0),!n&&(ge.mode==="story"?ge.go(t?Math.max(0,er(t)):ge.index):ge.mode==="title"?ge.resume():ee.overview())}function Ka(n){const t=Xe.findIndex(i=>i.id===Le.selected),e=Xe[t<0?0:t+n];e&&or(e.id)}ve("btn-home").addEventListener("click",()=>{qe.isOpen&&ar({quiet:!0}),ge.showTitle()});ve("btn-claim").addEventListener("click",()=>ci.open());ve("btn-quick").addEventListener("click",()=>Ci.open(Le.selected));addEventListener("keydown",n=>{var i,s,r,o;if((s=(i=n.target).closest)!=null&&s.call(i,"input, textarea"))return;if(n.key==="Escape")return ci.isOpen?ci.close():Ci.isOpen?Ci.close():qe.isOpen?ar():Le.exploring?ee.overview():void 0;if(ci.isOpen||Ci.isOpen)return;const t=["ArrowDown","ArrowRight","PageDown"," "].includes(n.key),e=["ArrowUp","ArrowLeft","PageUp"].includes(n.key);if(!(!t&&!e)&&!((o=(r=n.target).closest)!=null&&o.call(r,"button, a")&&n.key===" ")){if(n.preventDefault(),qe.isOpen){n.key==="ArrowRight"&&Ka(1),n.key==="ArrowLeft"&&Ka(-1);return}ge.mode!=="off"&&ge.step(t?1:-1)}});addEventListener("wheel",n=>{var t,e;n.ctrlKey&&(n.preventDefault(),n.target!==Ze&&!((e=(t=n.target).closest)!=null&&e.call(t,"#panel, #quick, .modal"))&&Ze.dispatchEvent(new WheelEvent("wheel",n)))},{passive:!1});let ro=null;addEventListener("gesturestart",n=>{var t,e;n.preventDefault(),!ee.locked&&!((e=(t=n.target).closest)!=null&&e.call(t,"#panel, #quick, .modal"))&&(ro=ee.distance())},{passive:!1});addEventListener("gesturechange",n=>{n.preventDefault(),ro!=null&&ee.zoomLive(ro,n.scale)},{passive:!1});addEventListener("gestureend",n=>{n.preventDefault(),ro=null},{passive:!1});for(const n of[ve("labels"),ve("eras")])n.addEventListener("wheel",t=>{ge.mode==="off"&&(t.preventDefault(),t.stopPropagation(),Ze.dispatchEvent(new WheelEvent("wheel",t)))},{passive:!1});Ze.addEventListener("pointerdown",()=>ee.interrupt(),{capture:!0});Ze.addEventListener("wheel",()=>ee.interrupt(),{capture:!0,passive:!0});const uh=new iu,dh=new lt;let ns=null,kn=null,Vs=null;function pu(n,t){const e=Ze.getBoundingClientRect();dh.set((n-e.left)/e.width*2-1,-((t-e.top)/e.height)*2+1),uh.setFromCamera(dh,ee.camera);const i=uh.intersectObjects([...sr.pickables,...Ms.pickables,...Fi.pickables||[]],!1);for(const s of i){const r=s.object;if(r.userData.vehicleId)return{vehicle:r.userData.vehicleId};if(r.userData.extraId)return{extra:r.userData.extraId};const o=r.userData.stopId;if(!o||Gn[o].progress<=0)continue;const a=i.find(l=>{var c;return l.object.userData.stopId===o&&l.object.userData.certIndex!==void 0&&((c=l.object.parent)==null?void 0:c.visible)});return{id:o,cert:a==null?void 0:a.object.userData.certIndex}}return null}Ze.addEventListener("pointerdown",n=>{ns={x:n.clientX,y:n.clientY,t:performance.now()}});Ze.addEventListener("pointerup",n=>{if(!ns)return;const t=Math.hypot(n.clientX-ns.x,n.clientY-ns.y),e=performance.now()-ns.t<600;if(ns=null,t>7||!e)return;const i=pu(n.clientX,n.clientY);ge.mode==="title"&&El(),i!=null&&i.vehicle?Al():i!=null&&i.extra?mo(i.extra):i!=null&&i.id&&or(i.id,{hotCert:i.cert})});Ze.addEventListener("pointermove",n=>{n.pointerType==="mouse"&&(Vs={x:n.clientX,y:n.clientY})});Ze.addEventListener("pointerleave",()=>{Vs=null});function Xv(){if(!Vs||ee.flying){kn&&(Gn[kn]&&(Gn[kn].hoverTarget=0),kn=null,cn.setHot(null)),Ze.classList.remove("hovering");return}const n=pu(Vs.x,Vs.y),t=(n==null?void 0:n.id)||null;Ze.classList.toggle("hovering",!!n),t!==kn&&(kn&&Gn[kn]&&(Gn[kn].hoverTarget=0),kn=t,t&&(Gn[t].hoverTarget=1),cn.setHot(t))}function Gs(n){Le.cityYear=n,Fi.setYear(n),tr.setVisible(n>=2016),sr.setYear(n)}let Ws=null;function qv(){Gs(2015.7),Ws=ds({duration:4.5,ease:n=>n,onUpdate:n=>Gs(2015.7+n*(ys-2015.7)),onDone:()=>{Ws=null,Gs(ys)}}),au("manu-city-intro","1")}function Cl(){Ws&&(Ws.cancel(),Ws=null,Gs(ys))}let $r=600;function Rl(){Ee.w=innerWidth,Ee.h=innerHeight,Rn.setPixelRatio(Math.min(devicePixelRatio,2)),Rn.setSize(Ee.w,Ee.h,!1),ee.resize(Ee.w,Ee.h),Fi.clouds.visible=Ee.w/Ee.h>.9,document.body.classList.toggle("tall",Ee.w/Ee.h<.9);const{pos:n,target:t}=ee.overviewPose();$r=n.distanceTo(t),Pn.fog.near=$r*.75,Pn.fog.far=Math.min($r*1.9,1480),cn.invalidate(),so.invalidate(),qe.isOpen?po():ge.frame()}addEventListener("resize",Rl);const Yv=new E_;let Os=0,$v=0;function jv(){so.visible=Le.exploring&&!qe.isOpen&&ee.distance()>$r*.55,cn.setView({hidden:ge.mode==="title"||so.visible,island:ge.mode==="story"?ge.index:null})}function mu(){(innerWidth!==Ee.w||innerHeight!==Ee.h)&&Rl();const n=Yv.getDelta(),t=Math.min(.05,n);Os+=t,D_(Math.min(.25,n)),Fi.update(t,Os,ee.camera),Ms.update(t,Os),Di.update(t,Os),sr.update(t,Os,ee.camera),ee.update(t,Ee),($v++&1)===0&&Xv(),Rn.render(Pn,ee.camera),jv(),cn.update(ee.camera,Ee),so.update(ee.camera,Ee),fu.update(ee.camera,Ee),requestAnimationFrame(mu)}Rl();bl();const Zv=!au("manu-city-intro"),Sn=location.hash.replace("#","");Gs(ys);const{pos:Jv,target:gu}=ee.overviewPose();ee.camera.position.copy(Jv);ee.controls.target.copy(gu);ee.camera.lookAt(gu);mu();requestAnimationFrame(()=>{ve("loading").classList.add("done"),setTimeout(()=>ve("loading").remove(),600),ge.showTitle(),Sn&&(Gn[Sn]||Qs[Sn])&&ge.go(Math.max(0,er(Sn))),Sn&&Gn[Sn]?or(Sn):Sn&&Qs[Sn]?mo(Sn):Zv&&!us()&&qv()});
