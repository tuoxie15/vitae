webpackJsonp([24],{21:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(57),o=l(n),i=a(56),u=l(i);o.default.Group=u.default,t.default=o.default,e.exports=t.default},56:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.prefixCls,a=void 0===t?"ant-btn-group":t,l=e.size,n=void 0===l?"":l,o=e.className,u=p(e,["prefixCls","size","className"]),s={large:"lg",small:"sm"}[n]||"",f=(0,c.default)(a,(0,r.default)({},a+"-"+s,s),o);return d.default.createElement("div",(0,i.default)({},u,{className:f}))}Object.defineProperty(t,"__esModule",{value:!0});var o=a(6),i=l(o),u=a(8),r=l(u);t.default=n;var s=a(1),d=l(s),f=a(7),c=l(f),p=function(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,l=Object.getOwnPropertySymbols(e);n<l.length;n++)t.indexOf(l[n])<0&&(a[l[n]]=e[l[n]]);return a};e.exports=t.default},57:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){return"string"==typeof e}function o(e){if(null!=e)return n(e.type)&&C(e.props.children)?h.default.cloneElement(e,{},e.props.children.split("").join(" ")):n(e)?(C(e)&&(e=e.split("").join(" ")),h.default.createElement("span",null,e)):e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(6),u=l(i),r=a(8),s=l(r),d=a(2),f=l(d),c=a(4),p=l(c),m=a(3),_=l(m),g=a(1),h=l(g),k=a(7),y=l(k),E=a(14),T=a(22),b=l(T),v=a(26),O=l(v),B=function(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,l=Object.getOwnPropertySymbols(e);n<l.length;n++)t.indexOf(l[n])<0&&(a[l[n]]=e[l[n]]);return a},N=/^[\u4e00-\u9fa5]{2}$/,C=N.test.bind(N),P=function(e){function t(a){(0,f.default)(this,t);var l=(0,p.default)(this,e.call(this,a));return l.handleClick=function(e){l.setState({clicked:!0}),clearTimeout(l.timeout),l.timeout=setTimeout(function(){return l.setState({clicked:!1})},500);var t=l.props.onClick;t&&t(e)},l.handleMouseUp=function(e){(0,E.findDOMNode)(l).blur(),l.props.onMouseUp&&l.props.onMouseUp(e)},l.state={loading:a.loading},l}return(0,_.default)(t,e),t.prototype.componentWillReceiveProps=function(e){var t=this,a=this.props.loading,l=e.loading;a&&clearTimeout(this.delayTimeout),l?this.delayTimeout=setTimeout(function(){return t.setState({loading:l})},200):this.setState({loading:l})},t.prototype.componentWillUnmount=function(){this.timeout&&clearTimeout(this.timeout),this.delayTimeout&&clearTimeout(this.delayTimeout)},t.prototype.render=function(){var e,t=this.props,a=t.type,l=t.shape,n=t.size,i=void 0===n?"":n,r=t.className,d=t.htmlType,f=t.children,c=t.icon,p=t.prefixCls,m=t.ghost,_=B(t,["type","shape","size","className","htmlType","children","icon","prefixCls","ghost"]),g=this.state,k=g.loading,E=g.clicked,T={large:"lg",small:"sm"}[i]||"",v=(0,y.default)(p,(e={},(0,s.default)(e,p+"-"+a,a),(0,s.default)(e,p+"-"+l,l),(0,s.default)(e,p+"-"+T,T),(0,s.default)(e,p+"-icon-only",!f&&c),(0,s.default)(e,p+"-loading",k),(0,s.default)(e,p+"-clicked",E),(0,s.default)(e,p+"-background-ghost",m),e),r),N=k?"loading":c,C=N?h.default.createElement(b.default,{type:N}):null,P=h.default.Children.map(f,o);return h.default.createElement("button",(0,u.default)({},(0,O.default)(_,["loading","clicked"]),{type:d||"button",className:v,onMouseUp:this.handleMouseUp,onClick:this.handleClick}),C,P)},t}(h.default.Component);t.default=P,P.__ANT_BUTTON=!0,P.defaultProps={prefixCls:"ant-btn",loading:!1,clicked:!1,ghost:!1},P.propTypes={type:h.default.PropTypes.string,shape:h.default.PropTypes.oneOf(["circle","circle-outline"]),size:h.default.PropTypes.oneOf(["large","default","small"]),htmlType:h.default.PropTypes.oneOf(["submit","button","reset"]),onClick:h.default.PropTypes.func,loading:h.default.PropTypes.bool,className:h.default.PropTypes.string,icon:h.default.PropTypes.string},e.exports=t.default},474:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=_.default.load("token");return(0,d.default)({},p.CALL_API,{endpoint:h.default.api_root_v1+"/bookings/"+e,method:"GET",headers:(0,c.default)(h.default.headers,{Authorization:"Bearer "+t}),types:[k,{type:y,payload:function(e,t,a){return a.json()}},E]})}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments[1],a=T[t.type];return a?a(e,t):e}Object.defineProperty(t,"__esModule",{value:!0}),t.actions=t.FETCH_BOOKING_FAILURE=t.FETCH_BOOKING_SUCCESS=t.FETCH_BOOKING_REQUEST=void 0;var i,u=a(6),r=l(u),s=a(8),d=l(s),f=a(194),c=l(f);t.fetchBooking=n,t.default=o;var p=a(41),m=a(17),_=l(m),g=a(29),h=l(g),k=t.FETCH_BOOKING_REQUEST="FETCH_BOOKING_REQUEST",y=t.FETCH_BOOKING_SUCCESS="FETCH_BOOKING_SUCCESS",E=t.FETCH_BOOKING_FAILURE="FETCH_BOOKING_FAILURE",T=(t.actions={fetchBooking:n},i={},(0,d.default)(i,k,function(e,t){return(0,r.default)({},e,{isFetching:!0,error:{},info:{}})}),(0,d.default)(i,y,function(e,t){return(0,r.default)({},e,{isFetching:!1,error:{},lastUpdate:Date.now(),info:t.payload})}),(0,d.default)(i,E,function(e,t){return(0,r.default)({},e,{isFetching:!1,error:{},info:{}})}),i),b={isFetching:!1,error:{},info:{}}},733:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(21),o=l(n),i=a(11),u=l(i),r=a(2),s=l(r),d=a(12),f=l(d),c=a(4),p=l(c),m=a(3),_=l(m),g=a(20),h=l(g),k=a(1),y=l(k),E=a(44),T=l(E),b=a(62),v=l(b),O=a(52),B=a(1121),N=l(B),C=function(e){function t(e,a){(0,s.default)(this,t);var l=(0,p.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e));return l.setVisible=l.setVisible.bind(l),l.state={remarked:!1},l}return(0,_.default)(t,e),(0,f.default)(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.user,a=e.setTitle;a("订单详情"),(0,O.bindWechat)("我的订单 - 住百家","不住酒店,住百家"),t.signed||this.context.router.push("/users/sign_in")}},{key:"componentDidMount",value:function(){var e=this.props,t=e.params,a=e.fetchBooking;a(t.id)}},{key:"setVisible",value:function(){this.setState({remarked:!this.state.remarked})}},{key:"handClick",value:function(e){window.location.href="/payments/pay/"+e}},{key:"render",value:function(){var e=this,t=this.props.booking,a=t.error,l=t.isFetching,n=t.info,i=this.state.remarked?"收起":"查看",u=this.state.remarked?"remark-default remark-show":"remark-default remark-hidden";return y.default.createElement("div",null,l&&(0,h.default)(n)&&y.default.createElement("div",{className:"loading"},y.default.createElement(v.default,null)),!l&&!(0,h.default)(a)&&(0,h.default)(n)&&y.default.createElement("h3",null,"服务器异常，刷新重新获取数据"),!(0,h.default)(n)&&y.default.createElement("div",{className:N.default.bookingWrap,style:{opacity:l?.5:1}},y.default.createElement(T.default,{title:"订单详情 - 住百家"}),y.default.createElement("div",{className:N.default.bookingTop},y.default.createElement("img",{src:n.offer.primary_image.xxlarge_url}),y.default.createElement("div",{className:N.default.bookingTime},y.default.createElement("div",{className:N.default.bookStartTime},y.default.createElement("span",{className:N.default.timeHead},"入住时间"),y.default.createElement("span",{className:N.default.specificTime},n.checkin_date)),y.default.createElement("div",{className:N.default.bookEndTime},y.default.createElement("span",{className:N.default.timeHead},"退房时间"),y.default.createElement("span",{className:N.default.specificTime},n.checkout_date)))),y.default.createElement("div",{className:N.default.orderDetails},y.default.createElement("ul",null,y.default.createElement("li",null,y.default.createElement("span",null,"订单状态："),n.status_text),y.default.createElement("li",null,y.default.createElement("span",null,"入住天数："),n.nights,"天"),y.default.createElement("li",null,y.default.createElement("span",null,"入住人数："),n.guests_count,"人"),y.default.createElement("li",null,y.default.createElement("span",null,"订单总价："),n.total_price,"元"),y.default.createElement("li",null,y.default.createElement("span",null,"订单编号："),n.bill_no))),n.memo&&y.default.createElement("div",{className:N.default.remarkBox},y.default.createElement("h3",null,y.default.createElement("span",{className:N.default.remarkSpan},"备注"),y.default.createElement("a",{className:N.default.moreShow,onClick:this.setVisible},i)),y.default.createElement("p",{className:u},n.memo)),y.default.createElement("div",{className:N.default.contactInformation},y.default.createElement("h5",null,"联系人信息："),y.default.createElement("p",null,"姓名：    ",n.guest_name),y.default.createElement("p",null,"手机：    ",n.guest_phone),y.default.createElement("p",null,"邮箱：    ",n.guest_email)),n.can_pay&&y.default.createElement(o.default,{className:N.default.bookingBtn,type:"primary",onClick:function(){return e.handClick(n.bill_no)}},"去支付")))}}]),t}(k.Component);C.propTypes={params:y.default.PropTypes.object.isRequired,fetchBooking:y.default.PropTypes.func.isRequired,booking:y.default.PropTypes.object.isRequired,user:y.default.PropTypes.object.isRequired,setTitle:y.default.PropTypes.func.isRequired},C.contextTypes={router:y.default.PropTypes.object.isRequired},t.default=C},734:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(28),o=a(474),i=a(42),u=a(733),r=l(u),s={fetchBooking:o.fetchBooking,setTitle:i.setTitle},d=function(e){return{booking:e.booking,user:e.user}};t.default=(0,n.connect)(d,s)(r.default)},1121:function(e,t){e.exports={clearFix:"Booking__clearFix___1kKPQ",bookingWrap:"Booking__bookingWrap___1Ytz8",bookingBtn:"Booking__bookingBtn___beOBI",bookingTop:"Booking__bookingTop___3Xzmg",bookingTime:"Booking__bookingTime___3MPXs",timeHead:"Booking__timeHead___3Z42r",specificTime:"Booking__specificTime___2ARsW",bookStartTime:"Booking__bookStartTime___1R3C6",bookEndTime:"Booking__bookEndTime___3Vph9",orderDetails:"Booking__orderDetails___1z0FY",remarkBox:"Booking__remarkBox___19kUL",moreShow:"Booking__moreShow___4D1hG",contactInformation:"Booking__contactInformation___2k1CX"}}});