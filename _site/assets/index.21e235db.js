import{e as k}from"./eagerLoader.b4c3b78a.js";/* empty css              */import{S as y,i as v,s as w,e as p,t as F,c as u,a as r,b as j,d as i,f as c,g,h as _,j as L,n as f,k as x,l as E}from"./client.7da81969.js";function d(l,a,n){const s=l.slice();return s[1]=a[n],s}function b(l){let a,n,s=l[1].name+"",t,o;return{c(){a=p("li"),n=p("a"),t=F(s),this.h()},l(e){a=u(e,"LI",{});var m=r(a);n=u(m,"A",{href:!0});var h=r(n);t=j(h,s),h.forEach(i),m.forEach(i),this.h()},h(){c(n,"href",o=l[1].slug)},m(e,m){g(e,a,m),_(a,n),_(n,t)},p(e,m){m&1&&s!==(s=e[1].name+"")&&L(t,s),m&1&&o!==(o=e[1].slug)&&c(n,"href",o)},d(e){e&&i(a)}}}function I(l){let a,n=l[0],s=[];for(let t=0;t<n.length;t+=1)s[t]=b(d(l,n,t));return{c(){a=p("ul");for(let t=0;t<s.length;t+=1)s[t].c()},l(t){a=u(t,"UL",{});var o=r(a);for(let e=0;e<s.length;e+=1)s[e].l(o);o.forEach(i)},m(t,o){g(t,a,o);for(let e=0;e<s.length;e+=1)s[e].m(a,null)},p(t,[o]){if(o&1){n=t[0];let e;for(e=0;e<n.length;e+=1){const m=d(t,n,e);s[e]?s[e].p(m,o):(s[e]=b(m),s[e].c(),s[e].m(a,null))}for(;e<s.length;e+=1)s[e].d(1);s.length=n.length}},i:f,o:f,d(t){t&&i(a),x(s,t)}}}function A(l,a,n){let{tshirts:s=[]}=a;return console.dir(s),l.$$set=t=>{"tshirts"in t&&n(0,s=t.tshirts)},[s]}class C extends y{constructor(a){super();v(this,a,A,I,w,{tshirts:0})}}k({id:"0",Component:C,renderer:E,props:{tshirts:[{name:"Face the possum ed. 1",images:["/_assets/face-the-possum-1.png","/_assets/face-the-possum-1-back.png"],slug:"face-the-possum-1"},{name:"11ty was the Imposster",images:["/_assets/imposster.png","/_assets/imposster-back.png"],slug:"imposster"},{name:"Weighing the poss and cons",images:["/_assets/poss-and-cons.png","/_assets/poss-and-cons-back.png"],slug:"poss-and-cons"},{name:"2 Fast 2 Furryous",images:["/_assets/furryous.png","/_assets/furryous-back.png"],slug:"furryous"},{name:"Me and the possum posse",images:["/_assets/possum-posse.png","/_assets/possum-posse-back.png"],slug:"possum-posse"},{name:"Face the possum ed. 3",images:["/_assets/face-the-possum-3.png","/_assets/face-the-possum-3-back.png"],slug:"face-the-possum-3"},{name:"Do the impossumble",images:["/_assets/do-the-impossumble.png","/_assets/do-the-impossumble-back.png"],slug:"do-the-impossumble"},{name:"Anything is possumbowl",images:["/_assets/possumbowl.png","/_assets/possumbowl-back.png"],slug:"possumbowl"},{name:"11ty 1.0 when?",images:["/_assets/eleventy-one-when.png","/_assets/eleventy-one-when-back.png"],slug:"eleventy-one-when"},{name:"It possumtimes be like that",images:["/_assets/possumtimes.png","/_assets/possumtimes-back.png"],slug:"possumtimes"},{name:"Face the possum ed. 2",images:["/_assets/face-the-possum-2.png","/_assets/face-the-possum-2-back.png"],slug:"face-the-possum-2"}],hydrate:"eager"}});