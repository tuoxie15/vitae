webpackJsonp([23],{157:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(11),i=r(s),o=a(2),f=r(o),n=a(12),l=r(n),u=a(4),d=r(u),c=a(3),_=r(c),p=a(1),h=r(p),v=a(171),m=r(v),k=function(e){function t(){return(0,f.default)(this,t),(0,d.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,_.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props.num,t=m.default.star0;switch(e){case 0:t=m.default.star0;break;case 1:t=m.default.star1;break;case 2:t=m.default.star2;break;case 3:t=m.default.star3;break;case 4:t=m.default.star4;break;case 5:t=m.default.star5;break;default:t=m.default.star0}return h.default.createElement("div",{className:m.default.star},h.default.createElement("i",{className:t}))}}]),t}(p.Component);t.default=k},171:function(e,t){e.exports={star:"Star__star___j4CGX",star0:"Star__star0___rmfKj",star1:"Star__star1___3rf9o",star2:"Star__star2___3DTSf",star3:"Star__star3___KLQ7o",star4:"Star__star4___3QOSy",star5:"Star__star5___1lUMp"}},242:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(47),i=r(s),o=a(11),f=r(o),n=a(2),l=r(n),u=a(12),d=r(u),c=a(4),_=r(c),p=a(3),h=r(p),v=a(20),m=r(v),k=a(1),y=r(k),E=a(15),g=function(e){function t(e,a){(0,l.default)(this,t);var r=(0,_.default)(this,(t.__proto__||(0,f.default)(t)).call(this,e,a));return!(0,m.default)(e.user.info)&&e.user.info.liked_offer_ids.find(function(t){return t==e.offerId})?r.state={liked:!0}:r.state={liked:!1},r}return(0,h.default)(t,e),(0,d.default)(t,[{key:"componentWillReceiveProps",value:function(e){this.props.usage&&(!(0,m.default)(e.user.info)&&e.user.info.liked_offer_ids.find(function(t){return t==e.offerId})?this.state={liked:!0}:this.state={liked:!1})}},{key:"switchOfferLikeable",value:function(e,t,a){var r=this.props.offerChangeLike;if(this.props.user.signed)"unlike"==a?(i.default.info("取消收藏成功",1),(0,E.saOperation)(this.props.category,"取消收藏",Number(t),this.props.offerName)):(i.default.info("收藏成功",1),(0,E.saOperation)(this.props.category,"添加收藏",Number(t),this.props.offerName)),r(t,a),this.setState({liked:!this.state.liked});else{var s=void 0;s=/^\/[A-Za-z]+[^\/]*$/.test(window.location.pathname)?"搜索结果页":"",(0,E.saBtnClick)("收藏",s?s:this.props.category),i.default.info("请先登录",2),this.context.router.push("/users/sign_in")}}},{key:"render",value:function(){var e=this;return y.default.createElement("div",{style:this.props.styleOut?this.props.styleOut:{}},this.state.liked&&y.default.createElement("div",{style:this.props.styleIn?this.props.styleIn:{},className:"collect-already collect-btn",onClick:function(){return e.switchOfferLikeable(event,e.props.offerId,"unlike")}},this.props.word&&"收藏"),!this.state.liked&&y.default.createElement("div",{style:this.props.styleIn?this.props.styleIn:{},className:"collect-not collect-btn",onClick:function(){return e.switchOfferLikeable(event,e.props.offerId,"like")}},this.props.word&&"收藏"))}}]),t}(k.Component);g.propTypes={offerChangeLike:y.default.PropTypes.func.isRequired},g.contextTypes={router:y.default.PropTypes.object.isRequired},t.default=g},477:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=h.default.load("token");return(0,u.default)({},_.CALL_API,{endpoint:m.default.api_root_v1+"/user/likes/offers?page="+e,method:"GET",headers:(0,c.default)(m.default.headers,{Authorization:"Bearer "+t}),types:[k,{type:y,payload:function(e,t,a){return a.json()}},E]})}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments[1],a=g[t.type];return a?a(e,t):e}Object.defineProperty(t,"__esModule",{value:!0}),t.actions=t.FETCH_FAVORITES_FAILURE=t.FETCH_FAVORITES_SUCCESS=t.FETCH_FAVORITES_REQUEST=void 0;var o,f=a(6),n=r(f),l=a(8),u=r(l),d=a(194),c=r(d);t.fetchFavorites=s,t.default=i;var _=a(41),p=a(17),h=r(p),v=a(29),m=r(v),k=t.FETCH_FAVORITES_REQUEST="FETCH_FAVORITES_REQUEST",y=t.FETCH_FAVORITES_SUCCESS="FETCH_FAVORITES_SUCCESS",E=t.FETCH_FAVORITES_FAILURE="FETCH_FAVORITES_FAILURE",g=(t.actions={fetchFavorites:s},o={},(0,u.default)(o,k,function(e,t){return(0,n.default)({},e,{isFetching:!0,error:{},items:[]})}),(0,u.default)(o,y,function(e,t){return(0,n.default)({},e,{isFetching:!1,error:{},lastUpdate:Date.now(),items:t.payload})}),(0,u.default)(o,E,function(e,t){return(0,n.default)({},e,{isFetching:!1,error:{},items:[]})}),o),F={isFetching:!1,error:{},items:[]}},742:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(11),i=r(s),o=a(2),f=r(o),n=a(12),l=r(n),u=a(4),d=r(u),c=a(3),_=r(c),p=a(20),h=r(p),v=a(1),m=r(v),k=a(125),y=(r(k),a(44)),E=r(y),g=a(18),F=a(157),T=r(F),S=a(62),C=r(S),I=a(242),L=r(I),R=a(52),O=a(1124),b=r(O),M=function(e){function t(){return(0,f.default)(this,t),(0,d.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,_.default)(t,e),(0,l.default)(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.user,a=e.setTitle,r=e.getMe;a("我的收藏"),(0,R.bindWechat)("我的收藏 - 住百家","不住酒店,住百家"),t.signed||this.context.router.push("/users/sign_in"),r(),this.state={offers:[],page:1,fetchBack:!1}}},{key:"componentDidMount",value:function(){var e=this.props.fetchFavorites;e()}},{key:"componentWillReceiveProps",value:function(e){if(this.props.offerLike.isFetching&&!e.offerLike.isFetching){for(var t=this.state.offers,a=void 0,r=0;r<t.length;r++)t[r].id==e.offerLike.offerId&&(a=r);t.splice(a,1),this.setState({offers:t,fetchBack:!0})}if(void 0!==e.favorites.lastUpdate&&e.favorites.lastUpdate!==this.props.favorites.lastUpdate)if(this.state.fetchBack){for(var s=[],i=[],r=this.state.offers.length-10>0?this.state.offers.length-10:0;r<this.state.offers.length;r++)s.push(this.state.offers[r].id);for(var o=0;o<e.favorites.items.length;o++)s.indexOf(e.favorites.items[o].id)==-1&&i.push(e.favorites.items[o]);this.setState({offers:this.state.offers.concat(i),fetchBack:!1})}else this.setState({offers:this.state.offers.concat(e.favorites.items),fetchBack:!1})}},{key:"fetchMoreOffers",value:function(e){var t=this.props.fetchFavorites;this.state.fetchBack?t(e):(t(e+1),this.setState({page:this.state.page+1}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.favorites,r=t.location,s=a.isFetching,i=a.error,o=a.items,f=!0;o.length<10&&(f=!1);var n="";if(r.query)var l=r.query.s?"?s="+r.query.s:"",u=r.query.c?"&c="+r.query.c:"",d=r.query.l?"&l="+r.query.l:"",n=l+u+d;return m.default.createElement("div",{style:{minHeight:"4.9rem"}},s&&(0,h.default)(this.state.offers)&&m.default.createElement("div",{className:"loading"},m.default.createElement(C.default,null)),!s&&(0,h.default)(i)&&(0,h.default)(this.state.offers)&&m.default.createElement("h3",{className:b.default.noLiked},"您还没有收藏哦"),!(0,h.default)(this.state.offers)&&m.default.createElement("ul",{style:{opacity:s?.5:1}},m.default.createElement(E.default,{title:"我的收藏 - 住百家"}),this.state.offers.map(function(t,a){return m.default.createElement("li",{className:b.default.likeCon,key:a},m.default.createElement(g.Link,{to:{pathname:"/offers/"+t.id,search:n}},m.default.createElement("img",{className:b.default.showImg,src:t.primary_image.oi750x500_url}),m.default.createElement("p",{className:b.default.price},t.price_per_night,m.default.createElement("span",null,"起/晚")),m.default.createElement("h3",{className:b.default.title},t.name),m.default.createElement("em",{className:b.default.max},"最多入住",t.max_guest_count,"人"),t.offer_review_counts>0&&parseInt(t.star_rank)>0&&m.default.createElement("div",{className:b.default.starRank},m.default.createElement("i",null,t.offer_review_counts,"条评价"),m.default.createElement(T.default,{num:parseInt(t.star_rank)}))),m.default.createElement(L.default,{category:"我的收藏",offerName:t.name,user:e.props.user,offerId:t.id,offerChangeLike:e.props.offerChangeLike,offerLike:e.props.offerLike,word:!1,usage:!0}))})),f&&m.default.createElement("div",{className:b.default.loadMoreBtn,onClick:function(){return e.fetchMoreOffers(e.state.page)}},"加载更多",m.default.createElement("i",{className:b.default.loadMoreBtnArrow})))}}]),t}(v.Component);M.propTypes={fetchFavorites:m.default.PropTypes.func.isRequired,favorites:m.default.PropTypes.object.isRequired,user:m.default.PropTypes.object.isRequired,setTitle:m.default.PropTypes.func.isRequired},M.contextTypes={router:m.default.PropTypes.object.isRequired},t.default=M},743:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(28),i=a(477),o=a(287),f=a(42),n=a(132),l=a(742),u=r(l),d={fetchFavorites:i.fetchFavorites,offerChangeLike:o.offerChangeLike,setTitle:f.setTitle,getMe:n.getMe},c=function(e){return{favorites:e.favorites,user:e.user,offerLike:e.offerLike}};t.default=(0,s.connect)(c,d)(u.default)},1124:function(e,t){e.exports={ellipsis:"Favorites__ellipsis___2I9IL",likeCon:"Favorites__likeCon___3mxJu",title:"Favorites__title___1KPV-",showImg:"Favorites__showImg___3qLLT",price:"Favorites__price___fShXD",max:"Favorites__max___2doRj",starRank:"Favorites__starRank___1yKVL",noLiked:"Favorites__noLiked___BFcRv",loadMoreBtn:"Favorites__loadMoreBtn___CoVn_",loadMoreBtnArrow:"Favorites__loadMoreBtnArrow___ifz3v"}}});