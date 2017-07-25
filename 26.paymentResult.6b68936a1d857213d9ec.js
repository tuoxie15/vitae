webpackJsonp([26],{490:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=g.default.load("token");return(0,f.default)({},c.CALL_API,{endpoint:h.default.api_root_v1+"/bookings/"+e,method:"GET",headers:(0,_.default)(h.default.headers,{Authorization:"Bearer "+t}),types:[E,{type:y,payload:function(e,t,n){return n.json()}},b]})}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments[1],n=k[t.type];return n?n(e,t):e}Object.defineProperty(t,"__esModule",{value:!0}),t.actions=t.FETCH_BOOKING_FAILURE=t.FETCH_BOOKING_SUCCESS=t.FETCH_BOOKING_REQUEST=void 0;var u,i=n(6),l=a(i),s=n(8),f=a(s),d=n(194),_=a(d);t.fetchBooking=o,t.default=r;var c=n(41),p=n(17),g=a(p),m=n(29),h=a(m),E=t.FETCH_BOOKING_REQUEST="FETCH_BOOKING_REQUEST",y=t.FETCH_BOOKING_SUCCESS="FETCH_BOOKING_SUCCESS",b=t.FETCH_BOOKING_FAILURE="FETCH_BOOKING_FAILURE",k=(t.actions={fetchBooking:o},u={},(0,f.default)(u,E,function(e,t){return(0,l.default)({},e,{isFetching:!0,error:{},info:{}})}),(0,f.default)(u,y,function(e,t){return(0,l.default)({},e,{isFetching:!1,error:{},lastUpdate:Date.now(),info:t.payload})}),(0,f.default)(u,b,function(e,t){return(0,l.default)({},e,{isFetching:!1,error:{message:"Missing Booking Info"},info:{}})}),u),v={isFetching:!1,error:{},info:{}}},814:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(47),r=a(o),u=n(11),i=a(u),l=n(2),s=a(l),f=n(12),d=a(f),_=n(4),c=a(_),p=n(3),g=a(p),m=n(51),h=a(m),E=n(20),y=a(E),b=n(1),k=a(b),v=n(18),C=n(17),O=(a(C),n(122)),N=n(1147),T=a(N),B=n(1665),F=a(B),P=function(e){function t(e,n){return(0,s.default)(this,t),(0,c.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e))}return(0,g.default)(t,e),(0,d.default)(t,[{key:"componentWillMount",value:function(){var e=this.props.user;e.signed||this.context.router.push("/users/sign_in")}},{key:"componentDidMount",value:function(){var e=this.props,t=e.params,n=e.fetchBooking;n(t.bill_no)}},{key:"componentWillReceiveProps",value:function(e){(0,y.default)(e.booking.info)||"status_paid"==e.booking.info.status?(0,y.default)(e.booking.error)||(r.default.warning("请求错误"),this.context.router.push("/")):this.context.router.push("/customer/bookings/"+e.params.bill_no)}},{key:"render",value:function(){var e=this.props,t=e.params,n=e.booking;return k.default.createElement("div",{className:T.default.payingContainer},!(0,y.default)(t)&&!(0,h.default)(t.bill_no)&&!(0,y.default)(n.info)&&k.default.createElement("div",null,k.default.createElement("img",{src:F.default,className:T.default.img}),k.default.createElement("h1",{className:T.default.titles},"您已支付成功"),k.default.createElement("p",{className:T.default.explainStart},"住百家将在48小时内为您确认房态，"),k.default.createElement("p",{className:T.default.explain},"会尽快将预定结果通过短信、微信和邮件告"),k.default.createElement("p",{className:T.default.explain},"知您，请耐心等待"),k.default.createElement("hr",null),k.default.createElement(v.Link,{to:{pathname:"/customer/bookings/"+t.bill_no},className:T.default.order},"查看订单"),k.default.createElement("p",{className:T.default.problem},"如有任何问题，请随时拨打住百家7*24小时客服热线"),k.default.createElement("p",{className:T.default.phone},(0,O.bindGetUtmSource)("phone"))))}}]),t}(b.Component);P.propTypes={params:k.default.PropTypes.object.isRequired,fetchBooking:k.default.PropTypes.func.isRequired,booking:k.default.PropTypes.object.isRequired,user:k.default.PropTypes.object.isRequired},P.contextTypes={router:k.default.PropTypes.object.isRequired},t.default=P},815:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(28),r=n(490),u=n(814),i=a(u),l={fetchBooking:r.fetchBooking},s=function(e){return{booking:e.paymentResult,user:e.user}};t.default=(0,o.connect)(s,l)(i.default)},1147:function(e,t){e.exports={payingContainer:"Paying__payingContainer___31gSl",img:"Paying__img___rKNuN",titles:"Paying__titles___2OFJf",explain:"Paying__explain___3Cz4b",explainStart:"Paying__explainStart___RkBxi",order:"Paying__order___1LUK5",problem:"Paying__problem___1SCld",phone:"Paying__phone___130NF"}},1665:function(e,t,n){e.exports=n.p+"5840b6d90d6aee39982ef9f4ff1b1420.png"}});