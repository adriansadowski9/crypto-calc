(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(n,t,e){n.exports=e.p+"static/media/background.93363dd2.webp"},44:function(n,t,e){n.exports=e(80)},80:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),i=e(18),o=e.n(i),c=e(19),l=e(21),u=e(3),s=e(4),d=e(6),p=e(5),m=e(7),h=e(1),f=e(17),b=e(13),v=e(2),g=e(36),x=e.n(g),j={white:"hsl(0, 0%, 100%)",gray:"hsl(210, 1%, 97%)",darkblue:"hsl(214, 97%, 14%)",transparentDarkblue:"rgba(2,31,70,0.5)",black:"hsl(0, 0%, 0%)",font:{size:{extrasmall:"1rem",small:"1.3rem",normal:"1.6rem",big:"2rem"},family:{montserrat:'"Montserrat", sans-serif'},weight:{light:"300",regular:"400",bold:"600"}}};function O(){var n=Object(h.a)(["\n  *, *::before, *::after {\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  \n  html {\n    font-size: 62.5%;\n  }\n  \n  body {\n    font-family: ",";\n    font-size: 1.6rem;\n    margin: 0;\n    color: ",";\n    background: ",";\n    background-image: url(","), linear-gradient(",",",");\n    background-blend-mode: luminosity;\n  }\n"]);return O=function(){return n},n}var y=Object(v.a)(O(),j.font.family.montserrat,j.white,j.darkblue,x.a,j.darkblue,j.darkblue),k=e(39),w=e.n(k),E=e(40),C=e.n(E).a.create({baseURL:"https://api.coinpaprika.com/v1/"}),z=function(){return C.get("tickers")},_=function(n,t,e){return C.get("price-converter?base_currency_id=".concat(n,"&quote_currency_id=").concat(t,"&amount=").concat(e))},S=e(20);function D(){var n=Object(h.a)(["\n    padding: 10px 5px;\n    text-transform: uppercase;\n    background: ",";\n    color: ",";\n    border: 1px solid ",";\n    border-radius: 2px;\n    margin-bottom: 10px;\n    @media (min-width: 1024px) {\n        margin-bottom: 0;\n    }\n"]);return D=function(){return n},n}var q=v.b.select(D(),j.white,j.black,j.darkblue),U=function(n){function t(){var n,e;Object(u.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=Object(d.a)(this,(n=Object(p.a)(t)).call.apply(n,[this].concat(i)))).getOption=function(n){return r.a.createElement("option",{key:n.id,value:n.id},n.name)},e}return Object(m.a)(t,n),Object(s.a)(t,[{key:"render",value:function(){var n=this.props,t=n.coins,e=n.value,a=n.name,i=n.handleChange;return r.a.createElement(q,{value:e,name:a,onChange:i},r.a.createElement("option",{key:"usd-us-dollars",value:"usd-us-dollars"},"US Dollars"),r.a.createElement("option",{key:"pln-polish-zloty",value:"pln-polish-zloty"},"Polish zloty"),t.map(this.getOption))}}]),t}(r.a.Component);function F(){var n=Object(h.a)(["\n  padding: 10px;\n  width: 100%;\n  text-align: center;\n  background: ",";\n  color: ",";\n  border: none;\n  border-radius: 2px;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: all .5s ease;\n  transition-property: background, color, border;\n  @media (min-width: 1024px) {\n    height: 37px;\n    width: 49%;\n    position: absolute;\n    bottom: 0;\n    right: 0;\n  }\n  :hover {\n      background: ",";\n      color: ",";\n      border: 1px solid ",";\n  }\n"]);return F=function(){return n},n}var I=v.b.button(F(),j.darkblue,j.white,j.white,j.darkblue,j.darkblue),N=function(n){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,n),Object(s.a)(t,[{key:"render",value:function(){var n=this.props.handleClick;return r.a.createElement("div",null,r.a.createElement(I,{onClick:n},"convert"))}}]),t}(r.a.Component);function M(){var n=Object(h.a)(["\n  color: ",";\n  font-weight: ",";\n  text-align: center;\n  text-transform: uppercase;\n"]);return M=function(){return n},n}function A(){var n=Object(h.a)(["\n  padding: 10px 5px;\n  background: ",";\n  color: ",";\n  border: 1px solid ",";\n  border-radius: 2px;\n  margin-bottom: 10px;\n  @media (min-width: 1024px) {\n    margin-bottom: 0;\n  }\n"]);return A=function(){return n},n}function P(){var n=Object(h.a)(["\n  color: ",";\n  text-transform: uppercase;\n  text-align: left;\n  font-weight: ",";\n  font-size: ",";\n"]);return P=function(){return n},n}function R(){var n=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  @media (min-width: 1024px) {\n    width: 49%;\n  }\n"]);return R=function(){return n},n}function X(){var n=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  @media (min-width: 1024px) {\n    flex-direction: row;\n    justify-content: space-between;\n    margin-bottom: 10px;\n    position: relative;\n  }\n"]);return X=function(){return n},n}function $(){var n=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 700px;\n  margin-top: 25%;\n  margin-bottom: 100px;\n  padding: 10px 15px;\n  background: ",";\n  border-radius: 5px;\n  @media (min-width: 1024px) {\n    padding: 20px 30px;\n  }\n"]);return $=function(){return n},n}var H=v.b.div($(),j.white),J=v.b.div(X()),L=v.b.div(R()),B=v.b.label(P(),j.black,j.font.weight.light,j.font.size.small),V=v.b.input(A(),j.white,j.black,j.darkblue),W=v.b.p(M(),j.darkblue,j.font.weight.bold),G=function(n){function t(){var n,e;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=Object(d.a)(this,(n=Object(p.a)(t)).call.apply(n,[this].concat(r)))).convertCrypto=function(){(0,e.props.handleConversion)(e.input.value)},e}return Object(m.a)(t,n),Object(s.a)(t,[{key:"render",value:function(){var n=this,t=this.props,e=t.coins,a=t.convert,i=t.coinChange;return r.a.createElement(H,null,r.a.createElement(J,null,r.a.createElement(L,null,r.a.createElement(B,{htmlFor:"firstCoin"},"from"),r.a.createElement(U,{coins:e,value:a.firstCoin,name:"firstCoin",handleChange:i})),r.a.createElement(L,null,r.a.createElement(B,{htmlFor:"secondCoin"},"to"),r.a.createElement(U,{coins:e,value:a.secondCoin,name:"secondCoin",handleChange:i}))),r.a.createElement(J,null,r.a.createElement(L,null,r.a.createElement(B,{htmlFor:"amount"},"amount"),r.a.createElement(V,{type:"text",name:"amount",ref:function(t){return n.input=t},defaultValue:"1"})),r.a.createElement(N,{handleClick:this.convertCrypto},"convert")),a.data.price?r.a.createElement(W,null,a.data.amount," ",a.data.base_currency_name," = ",a.data.price," ",a.data.quote_currency_name):"")}}]),t}(r.a.Component);function K(){var n=Object(h.a)(["\n    display: flex;\n    justify-content: center;\n"]);return K=function(){return n},n}var Q=v.b.div(K()),T=function(n){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,n),Object(s.a)(t,[{key:"render",value:function(){var n=this.props,t=n.coins,e=n.convert,a=n.coinChange,i=n.handleConversion;return r.a.createElement(Q,null,r.a.createElement(S.Helmet,null,r.a.createElement("title",null,"crypto.calc"),r.a.createElement("meta",{name:"description",content:"Calculator for cryptocurrencies"})),r.a.createElement(G,{coins:t,convert:e,handleConversion:i,coinChange:a}))}}]),t}(r.a.Component);function Y(){var n=Object(h.a)(["\n    height: 22px;\n    margin-right: 5px;\n"]);return Y=function(){return n},n}var Z=v.b.img(Y()),nn=function(n){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,n),Object(s.a)(t,[{key:"render",value:function(){var n=this.props.id,t="https://static.coinpaprika.com/coin/".concat(n,"/logo-thumb.png");return r.a.createElement(Z,{src:t,alt:n})}}]),t}(r.a.Component);function tn(){var n=Object(h.a)(["\n    ","\n"]);return tn=function(){return n},n}function en(){var n=Object(h.a)(["\n    ","\n    border-top-left-radius: 5px;\n"]);return en=function(){return n},n}function an(){var n=Object(h.a)(["\n    ","\n    color: ",';\n    ::after {\n        content: "','";\n    }\n']);return an=function(){return n},n}function rn(){var n=Object(h.a)(["\n    ","  \n"]);return rn=function(){return n},n}var on=function(){return"\n    color: ".concat(j.darkblue,";\n    font-weight: ").concat(j.font.weight.bold,";\n    font-size: ").concat(j.font.size.extrasmall,";\n    border: 1px solid ").concat(j.gray,";\n    height: 28px;\n    padding: 0 5px;\n    text-align: left;\n    vertical-align: center; \n    white-space: nowrap;  \n    @media (min-width: 1024px) {\n        font-size: ").concat(j.font.size.small,";\n        height: 40px;\n    }\n")},cn=function(){return"\n    position: absolute;\n    top: auto;\n    left: 0;\n    width: 150px;\n    height: 28px;\n    padding: 2px 5px;\n    display: flex;\n    justify-content: left;\n    align-items: center;\n    border: 1px solid ".concat(j.gray,";\n    color: ").concat(j.darkblue,";\n    font-weight: ").concat(j.font.weight.bold,";\n    font-size: ").concat(j.font.size.extrasmall,";\n    text-align: left;\n    white-space: unset;\n    backface-visibility: hidden;\n    word-wrap: break-word;\n    word-break: break-word;\n    overflow-wrap: break-word;\n    @media (min-width: 1024px) {\n        font-size: ").concat(j.font.size.small,";\n        height: 40px;\n    }\n")},ln=v.b.th(rn(),on),un=v.b.td(an(),on,function(n){return n.checkSign?n.content<0?"red":"green":j.darkblue},function(n){return n.checkSign?" %":""}),sn=v.b.th(en(),cn),dn=v.b.td(tn(),cn),pn=function(n){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,n),Object(s.a)(t,[{key:"render",value:function(){var n=this.props,t=n.header,e=n.fixed,a=n.content,i=n.image,o=n.checkSign;return t?e?r.a.createElement(sn,null," ",a," "):r.a.createElement(ln,null," ",a," "):i?r.a.createElement(dn,null,r.a.createElement(nn,{id:i})," ",a):r.a.createElement(un,{checkSign:o,content:a}," ",a)}}]),t}(r.a.Component),mn=function(n){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,n),Object(s.a)(t,[{key:"render",value:function(){var n=this.props,t=n.header,e=n.content;if(t)return r.a.createElement("tr",null,e.map(function(n){return"Name"===n?r.a.createElement(pn,{key:n,header:t,fixed:!0,content:n}):r.a.createElement(pn,{key:n,header:t,content:n})}));var a=[e.name,"".concat(e.quotes.USD.price," $"),e.quotes.USD.percent_change_1h,e.quotes.USD.percent_change_24h,e.quotes.USD.percent_change_7d,"".concat(e.quotes.USD.market_cap," $")];return r.a.createElement("tr",null,a.map(function(n,t){return n===e.name?r.a.createElement(pn,{key:"".concat(e.id,"-").concat(n,"-").concat(t),image:e.id,fixed:!0,content:n}):"number"==typeof n?r.a.createElement(pn,{key:"".concat(e.id,"-").concat(n,"-").concat(t),checkSign:!0,content:n}):r.a.createElement(pn,{key:"".concat(e.id,"-").concat(n,"-").concat(t),content:n})}))}}]),t}(r.a.Component);function hn(){var n=Object(h.a)(["\n    border-spacing: 0px;\n    width: 100%;\n"]);return hn=function(){return n},n}function fn(){var n=Object(h.a)(["\n    overflow-x: auto;\n    margin-left: 150px;\n"]);return fn=function(){return n},n}function bn(){var n=Object(h.a)(["\n    position: relative;\n    max-width: 100vw;\n    background: ",";\n    border-top-right-radius: 5px;\n    border-top-left-radius: 5px;\n    padding-right: 5px;\n    margin-bottom: 40px;\n"]);return bn=function(){return n},n}var vn=v.b.div(bn(),j.white),gn=v.b.div(fn()),xn=v.b.table(hn()),jn=function(n){function t(){var n,e;Object(u.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=Object(d.a)(this,(n=Object(p.a)(t)).call.apply(n,[this].concat(i)))).getCoinRow=function(n){return r.a.createElement(mn,{key:n.id,content:n})},e}return Object(m.a)(t,n),Object(s.a)(t,[{key:"render",value:function(){var n=this.props,t=n.headings,e=n.coins;return r.a.createElement(vn,null,r.a.createElement(gn,null,r.a.createElement(xn,null,r.a.createElement("thead",null,r.a.createElement(mn,{header:!0,content:t})),r.a.createElement("tbody",null,e.map(this.getCoinRow)))))}}]),t}(r.a.Component),On=function(n){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,n),Object(s.a)(t,[{key:"render",value:function(){var n=this.props.coins;return r.a.createElement("div",null,r.a.createElement(S.Helmet,null,r.a.createElement("title",null,"coin list - crypto.calc"),r.a.createElement("meta",{name:"description",content:"List of 200 most popular cryptocurrencies"})),r.a.createElement(jn,{headings:["Name","Price","1h","24h","7d","MarketCap"],coins:n}))}}]),t}(r.a.Component);function yn(){var n=Object(h.a)(["\n  text-align: center;\n  margin-top: 50px;\n"]);return yn=function(){return n},n}var kn=v.b.h2(yn()),wn=function(n){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,n),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(kn,null,"404: Page not found"))}}]),t}(r.a.Component);function En(){var n=Object(h.a)(["\n    text-decoration: none;\n    color: ",";\n    font-weight: ",";\n    padding: 5px 15px 5px 5px;\n    position: relative;\n    transition: padding .5s ease;\n    ::after {\n        content: '';\n        position: absolute;\n        top: 10%;\n        right: 0;\n        width: 10px;\n        height: 80%;\n        background: ",";\n        transition: transform .5s ease;\n    }\n    :hover {\n        padding: 5px 30px 5px 5px;\n        ::after {\n            transform: translateX(-50%) rotate(90deg);\n        }\n    }\n"]);return En=function(){return n},n}function Cn(){var n=Object(h.a)(["\n    font-size: ",";\n    font-weight: ",";\n    color: ",";\n    background: ",";\n    border-radius: 2px;\n    padding: 5px 10px;\n    margin: 0;\n"]);return Cn=function(){return n},n}function zn(){var n=Object(h.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px 15px;\n    margin: 0 auto;\n    @media (min-width: 1024px) {\n        max-width: 1024px;\n    }\n"]);return zn=function(){return n},n}var _n=v.b.div(zn()),Sn=v.b.h1(Cn(),j.font.size.big,j.font.weight.light,j.darkblue,j.white),Dn=Object(v.b)(f.b)(En(),j.white,j.font.weight.light,j.white),qn=Object(b.e)(function(n){return r.a.createElement(_n,null,r.a.createElement(Sn,null,"crypto.calc"),"/"===n.location.pathname?r.a.createElement(Dn,{to:"/coinlist"},"coin list"):r.a.createElement(Dn,{to:"/"},"home"))});function Un(){var n=Object(h.a)(["\n    font-weight: ",";\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    align-content: center;\n    padding: 0 20px;\n"]);return Un=function(){return n},n}var Fn=v.b.span(Un(),j.font.weight.bold),In=function(n){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,n),Object(s.a)(t,[{key:"render",value:function(){var n=this.props.coin,t=n.quotes.USD.price;return t=+t.toFixed(2),r.a.createElement(Fn,null,r.a.createElement(nn,{id:n.id})," ",t,"$")}}]),t}(r.a.Component);function Nn(){var n=Object(h.a)(["\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    animation: coins 5s linear infinite;\n\n    @keyframes coins {\n        0% {\n        transform: translateX(0);\n        }\n        100% {\n        transform: translateX(-83%);\n        }\n    }\n\n    @media (min-width: 1024px) {\n        animation: coins 20s linear infinite;\n    }\n\n    @media (min-width: 1600px) {\n        animation: coins 30s linear infinite;\n    }\n"]);return Nn=function(){return n},n}function Mn(){var n=Object(h.a)(["\n    position: ",";\n    bottom: 0;\n    height: 40px;\n    background: ",";\n    width: 100%;\n    overflow: hidden;\n"]);return Mn=function(){return n},n}var An=v.b.div(Mn(),function(n){return"/"===n.path?"absolute":"fixed"},function(n){return"/"===n.path?j.transparentDarkblue:j.darkblue}),Pn=v.b.div(Nn()),Rn=function(n){function t(){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this))).getCoin=function(n){if(n.quotes.USD.price>=.005)return r.a.createElement(In,{key:n.id,coin:n})},n.firstInit=!0,n}return Object(m.a)(t,n),Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(n){return this.firstInit?(this.firstInit=!this.firstInit,!0):this.props.location.pathname!==n.location.pathname}},{key:"render",value:function(){var n=this.props.coins;return r.a.createElement(An,{path:this.props.location.pathname},r.a.createElement(Pn,null,n.map(this.getCoin)))}}]),t}(r.a.Component),Xn=Object(b.e)(Rn);function $n(){var n=Object(h.a)(["\n    position: relative;\n    min-height: 100vh;\n    min-height: calc(100vh - var(--vh-offset, 0px));\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n"]);return $n=function(){return n},n}function Hn(){var n=Object(h.a)(["\n    padding: 0 15px;\n    width: 100%;\n    @media (min-width: 1024px) {\n      margin: 0 auto;\n      max-width: 1024px;\n    }\n"]);return Hn=function(){return n},n}var Jn=v.b.div(Hn()),Ln=v.b.div($n()),Bn=function(n){function t(){var n,e;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=Object(d.a)(this,(n=Object(p.a)(t)).call.apply(n,[this].concat(r)))).state={coins:[],convert:{data:{},firstCoin:"btc-bitcoin",secondCoin:"usd-us-dollars",amount:1}},e.changeCoin=function(n){e.setState({convert:Object(l.a)({},e.state.convert,Object(c.a)({},n.target.name,n.target.value))})},e.handleConversion=function(n){isNaN(n)&&(n=Number(n.replace(",","."))),isNaN(n)||e.doConversion(n)},e.doConversion=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.state.convert.amount,t=e.state.convert,a=t.firstCoin,r=t.secondCoin;e.setState({convert:Object(l.a)({},e.state.convert,{amount:n})}),_(a,r,n).then(function(n){"usd-us-dollars"!==n.data.quote_currency_id&&"pln-polish-zloty"!==n.data.quote_currency_id||(n.data.price=parseFloat(Math.round(n.data.price*Math.pow(10,2))/Math.pow(10,2)).toFixed(2)),e.setState({convert:Object(l.a)({},e.state.convert,{data:n.data})})})},e.refreshData=function(){z().then(function(n){var t=n.data.sort(function(n,t){return n.rank>t.rank?1:-1}).slice(0,100);e.setState({coins:t})}),0!==Object.keys(e.state.convert.data).length&&e.doConversion()},e}return Object(m.a)(t,n),Object(s.a)(t,[{key:"componentDidMount",value:function(){var n=this;w()();z().then(function(t){var e=t.data.sort(function(n,t){return n.rank>t.rank?1:-1}).slice(0,100);n.setState({coins:e})}),this.interval=setInterval(function(){return n.refreshData()},3e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.inverval)}},{key:"render",value:function(){var n=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null),r.a.createElement(f.a,{basename:"/crypto-calc"},r.a.createElement(Ln,null,r.a.createElement(qn,null),r.a.createElement(Jn,null,r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",render:function(){return r.a.createElement(T,{coins:n.state.coins,convert:n.state.convert,handleConversion:n.handleConversion,coinChange:n.changeCoin})}}),r.a.createElement(b.a,{path:"/coinlist",render:function(){return r.a.createElement(On,{coins:n.state.coins})}}),r.a.createElement(b.a,{component:wn}))),r.a.createElement(Xn,{coins:this.state.coins}))))}}]),t}(r.a.Component);o.a.render(r.a.createElement(Bn,null),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.b9480f02.chunk.js.map