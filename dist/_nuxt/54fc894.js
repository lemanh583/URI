(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1384:function(e,o,r){var n;!function(t,w){"use strict";var l="function",d="undefined",c="object",m="string",h="major",f="model",v="name",k="type",x="vendor",y="version",_="architecture",T="console",S="mobile",z="tablet",N="smarttv",A="wearable",C="embedded",E="Amazon",O="Apple",U="ASUS",j="BlackBerry",P="Browser",R="Chrome",M="Firefox",B="Google",V="Huawei",D="LG",I="Microsoft",W="Motorola",F="Opera",G="Samsung",H="Sharp",L="Sony",Z="Xiaomi",$="Zebra",X="Facebook",J="Chromium OS",K="Mac OS",Q=function(e){for(var o={},i=0;i<e.length;i++)o[e[i].toUpperCase()]=e[i];return o},Y=function(e,o){return typeof e===m&&-1!==ii(o).indexOf(ii(e))},ii=function(e){return e.toLowerCase()},ei=function(e,o){if(typeof e===m)return e=e.replace(/^\s\s*/,""),typeof o===d?e:e.substring(0,350)},oi=function(e,o){for(var r,n,p,q,t,d,i=0;i<o.length&&!t;){var m=o[i],h=o[i+1];for(r=n=0;r<m.length&&!t&&m[r];)if(t=m[r++].exec(e))for(p=0;p<h.length;p++)d=t[++n],typeof(q=h[p])===c&&q.length>0?2===q.length?typeof q[1]==l?this[q[0]]=q[1].call(this,d):this[q[0]]=q[1]:3===q.length?typeof q[1]!==l||q[1].exec&&q[1].test?this[q[0]]=d?d.replace(q[1],q[2]):w:this[q[0]]=d?q[1].call(this,d,q[2]):w:4===q.length&&(this[q[0]]=d?q[3].call(this,d.replace(q[1],q[2])):w):this[q]=d||w;i+=2}},ai=function(e,map){for(var i in map)if(typeof map[i]===c&&map[i].length>0){for(var o=0;o<map[i].length;o++)if(Y(map[i][o],e))return"?"===i?w:i}else if(Y(map[i],e))return"?"===i?w:i;return e},ri={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},ni={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[y,[v,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[y,[v,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[v,y],[/opios[\/ ]+([\w\.]+)/i],[y,[v,F+" Mini"]],[/\bopr\/([\w\.]+)/i],[y,[v,F]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[v,y],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[y,[v,"UC"+P]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[y,[v,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[y,[v,"WeChat"]],[/konqueror\/([\w\.]+)/i],[y,[v,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[y,[v,"IE"]],[/yabrowser\/([\w\.]+)/i],[y,[v,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[v,/(.+)/,"$1 Secure "+P],y],[/\bfocus\/([\w\.]+)/i],[y,[v,M+" Focus"]],[/\bopt\/([\w\.]+)/i],[y,[v,F+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[y,[v,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[y,[v,"Dolphin"]],[/coast\/([\w\.]+)/i],[y,[v,F+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[y,[v,"MIUI "+P]],[/fxios\/([-\w\.]+)/i],[y,[v,M]],[/\bqihu|(qi?ho?o?|360)browser/i],[[v,"360 "+P]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[v,/(.+)/,"$1 "+P],y],[/(comodo_dragon)\/([\w\.]+)/i],[[v,/_/g," "],y],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[v,y],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[v],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[v,X],y],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[v,y],[/\bgsa\/([\w\.]+) .*safari\//i],[y,[v,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[y,[v,R+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[v,R+" WebView"],y],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[y,[v,"Android "+P]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[v,y],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[y,[v,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[y,v],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[v,[y,ai,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[v,y],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[v,"Netscape"],y],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[y,[v,M+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[v,y],[/(cobalt)\/([\w\.]+)/i],[v,[y,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[_,"amd64"]],[/(ia32(?=;))/i],[[_,ii]],[/((?:i[346]|x)86)[;\)]/i],[[_,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[_,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[_,"armhf"]],[/windows (ce|mobile); ppc;/i],[[_,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[_,/ower/,"",ii]],[/(sun4\w)[;\)]/i],[[_,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[_,ii]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[f,[x,G],[k,z]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[f,[x,G],[k,S]],[/\((ip(?:hone|od)[\w ]*);/i],[f,[x,O],[k,S]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[f,[x,O],[k,z]],[/(macintosh);/i],[f,[x,O]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[f,[x,H],[k,S]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[f,[x,V],[k,z]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[f,[x,V],[k,S]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[f,/_/g," "],[x,Z],[k,S]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[f,/_/g," "],[x,Z],[k,z]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[f,[x,"OPPO"],[k,S]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[f,[x,"Vivo"],[k,S]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[f,[x,"Realme"],[k,S]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[f,[x,W],[k,S]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[f,[x,W],[k,z]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[f,[x,D],[k,z]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[f,[x,D],[k,S]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[f,[x,"Lenovo"],[k,z]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[f,/_/g," "],[x,"Nokia"],[k,S]],[/(pixel c)\b/i],[f,[x,B],[k,z]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[f,[x,B],[k,S]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[f,[x,L],[k,S]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[f,"Xperia Tablet"],[x,L],[k,z]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[f,[x,"OnePlus"],[k,S]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[f,[x,E],[k,z]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[f,/(.+)/g,"Fire Phone $1"],[x,E],[k,S]],[/(playbook);[-\w\),; ]+(rim)/i],[f,x,[k,z]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[f,[x,j],[k,S]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[f,[x,U],[k,z]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[f,[x,U],[k,S]],[/(nexus 9)/i],[f,[x,"HTC"],[k,z]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[x,[f,/_/g," "],[k,S]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[f,[x,"Acer"],[k,z]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[f,[x,"Meizu"],[k,S]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[x,f,[k,S]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[x,f,[k,z]],[/(surface duo)/i],[f,[x,I],[k,z]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[f,[x,"Fairphone"],[k,S]],[/(u304aa)/i],[f,[x,"AT&T"],[k,S]],[/\bsie-(\w*)/i],[f,[x,"Siemens"],[k,S]],[/\b(rct\w+) b/i],[f,[x,"RCA"],[k,z]],[/\b(venue[\d ]{2,7}) b/i],[f,[x,"Dell"],[k,z]],[/\b(q(?:mv|ta)\w+) b/i],[f,[x,"Verizon"],[k,z]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[f,[x,"Barnes & Noble"],[k,z]],[/\b(tm\d{3}\w+) b/i],[f,[x,"NuVision"],[k,z]],[/\b(k88) b/i],[f,[x,"ZTE"],[k,z]],[/\b(nx\d{3}j) b/i],[f,[x,"ZTE"],[k,S]],[/\b(gen\d{3}) b.+49h/i],[f,[x,"Swiss"],[k,S]],[/\b(zur\d{3}) b/i],[f,[x,"Swiss"],[k,z]],[/\b((zeki)?tb.*\b) b/i],[f,[x,"Zeki"],[k,z]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[x,"Dragon Touch"],f,[k,z]],[/\b(ns-?\w{0,9}) b/i],[f,[x,"Insignia"],[k,z]],[/\b((nxa|next)-?\w{0,9}) b/i],[f,[x,"NextBook"],[k,z]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[x,"Voice"],f,[k,S]],[/\b(lvtel\-)?(v1[12]) b/i],[[x,"LvTel"],f,[k,S]],[/\b(ph-1) /i],[f,[x,"Essential"],[k,S]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[f,[x,"Envizen"],[k,z]],[/\b(trio[-\w\. ]+) b/i],[f,[x,"MachSpeed"],[k,z]],[/\btu_(1491) b/i],[f,[x,"Rotor"],[k,z]],[/(shield[\w ]+) b/i],[f,[x,"Nvidia"],[k,z]],[/(sprint) (\w+)/i],[x,f,[k,S]],[/(kin\.[onetw]{3})/i],[[f,/\./g," "],[x,I],[k,S]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[f,[x,$],[k,z]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[f,[x,$],[k,S]],[/smart-tv.+(samsung)/i],[x,[k,N]],[/hbbtv.+maple;(\d+)/i],[[f,/^/,"SmartTV"],[x,G],[k,N]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[x,D],[k,N]],[/(apple) ?tv/i],[x,[f,O+" TV"],[k,N]],[/crkey/i],[[f,R+"cast"],[x,B],[k,N]],[/droid.+aft(\w)( bui|\))/i],[f,[x,E],[k,N]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[f,[x,H],[k,N]],[/(bravia[\w ]+)( bui|\))/i],[f,[x,L],[k,N]],[/(mitv-\w{5}) bui/i],[f,[x,Z],[k,N]],[/Hbbtv.*(technisat) (.*);/i],[x,f,[k,N]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[x,ei],[f,ei],[k,N]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[k,N]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[x,f,[k,T]],[/droid.+; (shield) bui/i],[f,[x,"Nvidia"],[k,T]],[/(playstation [345portablevi]+)/i],[f,[x,L],[k,T]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[f,[x,I],[k,T]],[/((pebble))app/i],[x,f,[k,A]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[f,[x,O],[k,A]],[/droid.+; (glass) \d/i],[f,[x,B],[k,A]],[/droid.+; (wt63?0{2,3})\)/i],[f,[x,$],[k,A]],[/(quest( 2| pro)?)/i],[f,[x,X],[k,A]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[x,[k,C]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[f,[k,S]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[f,[k,z]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[k,z]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[k,S]],[/(android[-\w\. ]{0,9});.+buil/i],[f,[x,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[y,[v,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[y,[v,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[v,y],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[y,v]],os:[[/microsoft (windows) (vista|xp)/i],[v,y],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[v,[y,ai,ri]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[v,"Windows"],[y,ai,ri]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[y,/_/g,"."],[v,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[v,K],[y,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[y,v],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[v,y],[/\(bb(10);/i],[y,[v,j]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[y,[v,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[y,[v,M+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[y,[v,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[y,[v,"watchOS"]],[/crkey\/([\d\.]+)/i],[y,[v,R+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[v,J],y],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[v,y],[/(sunos) ?([\w\.\d]*)/i],[[v,"Solaris"],y],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[v,y]]},ti=function(e,o){if(typeof e===c&&(o=e,e=w),!(this instanceof ti))return new ti(e,o).getResult();var r=typeof t!==d&&t.navigator?t.navigator:w,n=e||(r&&r.userAgent?r.userAgent:""),T=r&&r.userAgentData?r.userAgentData:w,N=o?function(e,o){var r={};for(var i in e)o[i]&&o[i].length%2==0?r[i]=o[i].concat(e[i]):r[i]=e[i];return r}(ni,o):ni;return this.getBrowser=function(){var e,o={};return o[v]=w,o[y]=w,oi.call(o,n,N.browser),o[h]=typeof(e=o[y])===m?e.replace(/[^\d\.]/g,"").split(".")[0]:w,r&&r.brave&&typeof r.brave.isBrave==l&&(o[v]="Brave"),o},this.getCPU=function(){var e={};return e[_]=w,oi.call(e,n,N.cpu),e},this.getDevice=function(){var e={};return e[x]=w,e[f]=w,e[k]=w,oi.call(e,n,N.device),!e[k]&&T&&T.mobile&&(e[k]=S),"Macintosh"==e[f]&&r&&typeof r.standalone!==d&&r.maxTouchPoints&&r.maxTouchPoints>2&&(e[f]="iPad",e[k]=z),e},this.getEngine=function(){var e={};return e[v]=w,e[y]=w,oi.call(e,n,N.engine),e},this.getOS=function(){var e={};return e[v]=w,e[y]=w,oi.call(e,n,N.os),!e[v]&&T&&"Unknown"!=T.platform&&(e[v]=T.platform.replace(/chrome os/i,J).replace(/macos/i,K)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=typeof e===m&&e.length>350?ei(e,350):e,this},this.setUA(n),this};ti.VERSION="1.0.34",ti.BROWSER=Q([v,y,h]),ti.CPU=Q([_]),ti.DEVICE=Q([f,x,k,T,S,N,z,A,C]),ti.ENGINE=ti.OS=Q([v,y]),typeof o!==d?(typeof e!==d&&e.exports&&(o=e.exports=ti),o.UAParser=ti):r(1385)?(n=function(){return ti}.call(o,r,o,e))===w||(e.exports=n):typeof t!==d&&(t.UAParser=ti);var si=typeof t!==d&&(t.jQuery||t.Zepto);if(si&&!si.ua){var bi=new ti;si.ua=bi.getResult(),si.ua.get=function(){return bi.getUA()},si.ua.set=function(e){bi.setUA(e);var o=bi.getResult();for(var r in o)si.ua[r]=o[r]}}}("object"==typeof window?window:this)},1385:function(e,o){(function(o){e.exports=o}).call(this,{})}}]);