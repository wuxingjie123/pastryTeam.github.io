define(["~/lib/byteArray"],function(n){function r(n){for(var r="",t=0;3>=t;t++)r+=g.charAt(n>>8*t+4&15)+g.charAt(n>>8*t&15);return r}function t(n){var r,t=(n.length+8>>6)+1,e=new Array(16*t);for(r=0;16*t>r;r++)e[r]=0;for(r=0;r<n.length;r++)e[r>>2]|=n[r]<<r%4*8;return e[r>>2]|=128<<r%4*8,e[16*t-2]=8*n.length,e}function e(n,r){var t=(65535&n)+(65535&r),e=(n>>16)+(r>>16)+(t>>16);return e<<16|65535&t}function u(n,r){return n<<r|n>>>32-r}function f(n,r,t,f,i,o){return e(u(e(e(r,n),e(f,o)),i),t)}function i(n,r,t,e,u,i,o){return f(r&t|~r&e,n,r,u,i,o)}function o(n,r,t,e,u,i,o){return f(r&e|t&~e,n,r,u,i,o)}function c(n,r,t,e,u,i,o){return f(r^t^e,n,r,u,i,o)}function a(n,r,t,e,u,i,o){return f(t^(r|~e),n,r,u,i,o)}function h(n){for(var u=t(n),f=1732584193,h=-271733879,g=-1732584194,y=271733878,s,B,l,v,A=0;A<u.length;A+=16)s=f,B=h,l=g,v=y,f=i(f,h,g,y,u[A+0],7,-680876936),y=i(y,f,h,g,u[A+1],12,-389564586),g=i(g,y,f,h,u[A+2],17,606105819),h=i(h,g,y,f,u[A+3],22,-1044525330),f=i(f,h,g,y,u[A+4],7,-176418897),y=i(y,f,h,g,u[A+5],12,1200080426),g=i(g,y,f,h,u[A+6],17,-1473231341),h=i(h,g,y,f,u[A+7],22,-45705983),f=i(f,h,g,y,u[A+8],7,1770035416),y=i(y,f,h,g,u[A+9],12,-1958414417),g=i(g,y,f,h,u[A+10],17,-42063),h=i(h,g,y,f,u[A+11],22,-1990404162),f=i(f,h,g,y,u[A+12],7,1804603682),y=i(y,f,h,g,u[A+13],12,-40341101),g=i(g,y,f,h,u[A+14],17,-1502002290),h=i(h,g,y,f,u[A+15],22,1236535329),f=o(f,h,g,y,u[A+1],5,-165796510),y=o(y,f,h,g,u[A+6],9,-1069501632),g=o(g,y,f,h,u[A+11],14,643717713),h=o(h,g,y,f,u[A+0],20,-373897302),f=o(f,h,g,y,u[A+5],5,-701558691),y=o(y,f,h,g,u[A+10],9,38016083),g=o(g,y,f,h,u[A+15],14,-660478335),h=o(h,g,y,f,u[A+4],20,-405537848),f=o(f,h,g,y,u[A+9],5,568446438),y=o(y,f,h,g,u[A+14],9,-1019803690),g=o(g,y,f,h,u[A+3],14,-187363961),h=o(h,g,y,f,u[A+8],20,1163531501),f=o(f,h,g,y,u[A+13],5,-1444681467),y=o(y,f,h,g,u[A+2],9,-51403784),g=o(g,y,f,h,u[A+7],14,1735328473),h=o(h,g,y,f,u[A+12],20,-1926607734),f=c(f,h,g,y,u[A+5],4,-378558),y=c(y,f,h,g,u[A+8],11,-2022574463),g=c(g,y,f,h,u[A+11],16,1839030562),h=c(h,g,y,f,u[A+14],23,-35309556),f=c(f,h,g,y,u[A+1],4,-1530992060),y=c(y,f,h,g,u[A+4],11,1272893353),g=c(g,y,f,h,u[A+7],16,-155497632),h=c(h,g,y,f,u[A+10],23,-1094730640),f=c(f,h,g,y,u[A+13],4,681279174),y=c(y,f,h,g,u[A+0],11,-358537222),g=c(g,y,f,h,u[A+3],16,-722521979),h=c(h,g,y,f,u[A+6],23,76029189),f=c(f,h,g,y,u[A+9],4,-640364487),y=c(y,f,h,g,u[A+12],11,-421815835),g=c(g,y,f,h,u[A+15],16,530742520),h=c(h,g,y,f,u[A+2],23,-995338651),f=a(f,h,g,y,u[A+0],6,-198630844),y=a(y,f,h,g,u[A+7],10,1126891415),g=a(g,y,f,h,u[A+14],15,-1416354905),h=a(h,g,y,f,u[A+5],21,-57434055),f=a(f,h,g,y,u[A+12],6,1700485571),y=a(y,f,h,g,u[A+3],10,-1894986606),g=a(g,y,f,h,u[A+10],15,-1051523),h=a(h,g,y,f,u[A+1],21,-2054922799),f=a(f,h,g,y,u[A+8],6,1873313359),y=a(y,f,h,g,u[A+15],10,-30611744),g=a(g,y,f,h,u[A+6],15,-1560198380),h=a(h,g,y,f,u[A+13],21,1309151649),f=a(f,h,g,y,u[A+4],6,-145523070),y=a(y,f,h,g,u[A+11],10,-1120210379),g=a(g,y,f,h,u[A+2],15,718787259),h=a(h,g,y,f,u[A+9],21,-343485551),f=e(f,s),h=e(h,B),g=e(g,l),y=e(y,v);return r(f)+r(h)+r(g)+r(y)}var g="0123456789ABCDEF";return n.Md5={getHashByBytes:h,getHashByString:function(r,t){return t||(t="utf8"),this.getHashByBytes(n.string2Bytes(r,t))}},n.Md5});