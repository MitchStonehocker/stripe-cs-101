(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,n,t){e.exports=t(52)},27:function(e,n,t){},28:function(e,n,t){},49:function(e,n,t){},52:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),o=t(4),l=t.n(o),c=(t(27),t(10),t(28),t(3)),r=t(8),u=t.n(r),s=t(19),p=t(20),m=t.n(p),d=t(21),g=t.n(d),h=t(6);t(49);h.a.configure();var E="pk_test_zSYvufXGddHIsuW5E4v3r9v0",y="http://localhost:7500/checkout";function b(e){var n=e.product,t=Object(a.useState)(null),o=Object(c.a)(t,2),l=o[0],r=o[1],p=Object(a.useState)(null),d=Object(c.a)(p,2),b=d[0],f=d[1],k=Object(a.useState)(null),j=Object(c.a)(k,2),C=j[0],v=j[1];function w(){return(w=Object(s.a)(u.a.mark((function e(t,a){var i,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(">>>-Store-handleToken-token->",t),r({name:t.card.name,email:t.email}),console.log(">>>-Store-handleToken-addresses->",a),f({title:a.billing_name,street:a.billing_address_line1,city:a.billing_address_city,state:a.billing_address_state,zip:a.billing_address_zip,country:a.billing_address_country,countryCode:a.billing_address_country_code}),v({title:a.shipping_name,street:a.shipping_address_line1,city:a.shipping_address_city,state:a.shipping_address_state,zip:a.shipping_address_zip,country:a.shipping_address_country}),e.next=8,g.a.post(y,{token:t,product:n});case 8:i=e.sent,console.log(">>>-Response->",i),o=i.data.status,console.log(">>>-Response.data->",i.data),"success"===o?Object(h.a)("Success! Check email for details",{type:"success"}):Object(h.a)("Something went wrong",{type:"error"}),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(">>>-StripeCheckoutButton-catch-- is the server running? --\x3e"),console.log(">>>-StripeCheckoutButton-catch->",e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}return i.a.createElement("div",null,i.a.createElement(m.a,{stripeKey:E,token:function(e,n){return w.apply(this,arguments)},amount:100*n.price,name:n.name,billingAddress:!0,shippingAddress:!0}),i.a.createElement("div",null,l?i.a.createElement("div",null,i.a.createElement("h5",null,"User"),i.a.createElement("ul",null,i.a.createElement("li",null,l.name),i.a.createElement("li",null,l.email))):null,b?i.a.createElement("div",null,i.a.createElement("h5",null,"Billing address"),i.a.createElement("ul",null,i.a.createElement("li",null,b.title),i.a.createElement("li",null,b.street),i.a.createElement("li",null,b.city),i.a.createElement("li",null,b.state),i.a.createElement("li",null,b.zip),i.a.createElement("li",null,b.country),i.a.createElement("li",null,b.countryCode))):null,C?i.a.createElement("div",null,i.a.createElement("h5",null,"Shipping address"),i.a.createElement("ul",null,i.a.createElement("li",null,C.title),i.a.createElement("li",null,C.street),i.a.createElement("li",null,C.city),i.a.createElement("li",null,C.state),i.a.createElement("li",null,C.zip),i.a.createElement("li",null,C.country),i.a.createElement("li",null,C.countryCode))):null))}var f=[{id:0,name:"Cranberry Lemon",price:10,imagePath300:"images/CranberryLemon300.jpg",imagePath600:"images/CranberryLemon600.jpg",garnishes:"Sugared cranberries: 1 cup normal cake size",sizes:["regular","mini"],coupon:{couponType:"New",couponLocation:"",couponID:"",couponUnit:"",couponQuantity:"",couponExpiry:""},description:"This moist rum cake is loaded with fresh cranberries along with fresh squeezed lemon juice and zest. It\u2019s a great dessert for the entire fall and winter season."},{id:1,name:"Original",price:10,imagePath300:"images/Original300.jpg",imagePath600:"images/Original600.jpg",garnishes:"",sizes:["regular","mini"],coupon:{couponType:"Coupon",couponLocation:"facebook",couponID:"8116491632888194521",couponUnit:"Percent",couponQuantity:"15",couponExpiry:"2019-10-10"},description:"Made from scratch with premium ingredients, this moist delicious vanilla rum cake is a top shelf original."},{id:2,name:"Dark Chocolate",price:10,imagePath300:"images/DarkChocolate300.jpg",imagePath600:"images/DarkChocolate600.jpg",garnishes:"",sizes:["regular","mini"],coupon:{couponType:"Coupon",couponLocation:"facebook",couponID:"4121272542865338333",couponUnit:"Percent",couponQuantity:"15",couponExpiry:"2019-10-10"},description:"Made from scratch with fresh ingredients and premium dark chocolate with a buttery and real rum sauce."},{id:3,name:"Bananas Foster",price:10,imagePath300:"images/BananasFoster300.jpg",imagePath600:"images/BananasFoster600.jpg",garnishes:"",sizes:["regular","mini"],coupon:{couponType:"Coupon",couponLocation:"facebook",couponID:"3359501940720522637",couponUnit:"percent",couponQuantity:"15",couponExpiry:"2019-10-10"},description:"Caramelized bananas top this banana rum cake producing a smooth and sweet tasty treat."},{id:4,name:"Ginger Lime",price:10,imagePath300:"images/GingerLime300.jpg",imagePath600:"images/GingerLime600.jpg",garnishes:"",sizes:["regular","mini"],coupon:{couponType:"Coupon",couponLocation:"facebook",couponID:"5875205429321172897",couponUnit:"percent",couponQuantity:"15",couponExpiry:"2019-10-10"},description:"Crystallized ginger bits along with lime zest and juice makes this a moist and zingy cake that will test your taste buds with tingle and delight."},{id:5,name:"Coconut",price:10,imagePath300:"images/Coconut300.jpg",imagePath600:"images/Coconut600.jpg",garnishes:"",sizes:["regular","mini"],coupon:{couponType:"Coupon",couponLocation:"facebook",couponID:"7752985497517278006",couponUnit:"percent",couponQuantity:"15",couponExpiry:"2019-10-10"},description:"If you like coconut, try coconut soaked in rum.  There are so many coconut flakes in this moist coconut rum cake you will think you are on a beach with a delicious cocktail."},{id:6,name:"Spiced Apple",price:10,imagePath300:"images/SpicedApple300.jpg",imagePath600:"images/SpicedApple600.jpg",garnishes:"",sizes:["regular","mini"],coupon:{couponType:"Coupon",couponLocation:"facebook",couponID:"1178969077236784993",couponUnit:"percent",couponQuantity:"15",couponExpiry:"2019-10-10"},description:"Loads of delicious spiced apple pieces are swirled throughout this cake.  You will yield to the eye-closing deliciousness."},{id:7,name:"Cinnamon Bun",price:10,imagePath300:"images/CinnamonBun300.jpg",imagePath600:"images/CinnamonBun600.jpg",garnishes:"",sizes:["regular","mini"],coupon:{couponType:"Coupon",couponLocation:"facebook",couponID:"3376166476843835844",couponUnit:"percent",couponQuantity:"15",couponExpiry:"2019-10-10"},description:"All the cinnamon bun flavors of cream cheese and layers of cinnamon sugar swirls.  Just close your eyes and shiver with delight..."},{id:8,name:"Apple Cinnamon",price:10,imagePath300:"images/AppleCinnamon300.jpg",imagePath600:"images/AppleCinnamon600.jpg",garnishes:"",sizes:["regular","mini"],coupon:{couponType:"Coupon",couponLocation:"facebook",couponID:"8282539994401140249",couponUnit:"percent",couponQuantity:"15",couponExpiry:"2019-10-10"},description:"Like the Spiced Apple and Cinnamon Bun?  Try this with your coffee \u2013 just once.  We dare you!  You\u2019ll be hooked."},{id:9,name:"Butter Maple Pecan",price:10,imagePath300:"images/ButterMaplePecan300.jpg",imagePath600:"images/ButterMaplePecan600.jpg",garnishes:"Candied pecans: 1 cup normal cake size",sizes:["regular","mini"],coupon:{couponType:"New",couponLocation:"",couponID:"",couponUnit:"",couponQuantity:"",couponExpiry:""},description:"Delicious maple syrup along with crushed pecans and rum, make this a divine rum cake for any occasions this fall."}];function k(){var e=Object(a.useState)(f),n=Object(c.a)(e,1)[0],t=Object(a.useState)(null),o=Object(c.a)(t,2),l=o[0],r=o[1];return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"product"},i.a.createElement("table",{style:{width:"100%"}},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Select"),i.a.createElement("th",null,"Cake"),i.a.createElement("th",null,"Price"),i.a.createElement("th",null,"Garnish"))),i.a.createElement("tbody",null,n.map((function(e){return i.a.createElement("tr",{key:e.id},i.a.createElement("td",null,i.a.createElement("input",{type:"radio",name:"item",value:e.id,onClick:function(e){return n=e.target.value,void r(f.filter((function(e){return e.id.toString()===n.toString()}))[0]);var n}})),i.a.createElement("td",null,e.name),i.a.createElement("td",null,"$",e.price.toFixed(2)),i.a.createElement("td",null,e.garnishes))})))),l?i.a.createElement("div",null,i.a.createElement("br",null),i.a.createElement("hr",null),i.a.createElement("h4",null,"Your selection"),i.a.createElement("br",null),i.a.createElement("table",{style:{width:"100%"}},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Cake"),i.a.createElement("th",null,"Price"),i.a.createElement("th",null,"Garnish"))),i.a.createElement("tbody",null,i.a.createElement("tr",{key:l.id},i.a.createElement("td",null,l.name),i.a.createElement("td",null,"$",l.price.toFixed(2)),i.a.createElement("td",null,l.garnishes)))),i.a.createElement("br",null),i.a.createElement("hr",null),i.a.createElement("h4",null,"Buy it now!"),i.a.createElement("br",null),i.a.createElement(b,{product:l})):null))}l.a.render(i.a.createElement((function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("p",null,"header")),i.a.createElement("main",{className:"App-main"},i.a.createElement(k,null)),i.a.createElement("footer",{className:"App-footer"},i.a.createElement("p",null,"footer")))}),null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.373ed2d4.chunk.js.map