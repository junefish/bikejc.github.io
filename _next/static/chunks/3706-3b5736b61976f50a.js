"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3706],{4672:function(e,s,r){r.d(s,{Z:function(){return o}});var a=r(5893),i=r(1499),l=(r(7294),r(1664)),n=r(6284),t=r(4768);var c=function(e){var s=e.node,r=e.children,i=s.children,l=s.tagName;if(0==i.length)throw new Error("No node.children found in header: ".concat(e,", ").concat(r));var n=i[i.length-1];if(i.length>1&&"a"==n.tagName&&0==n.children.length){var t=r.slice(0,r.length-1),c=n.properties.id;return(0,a.jsx)("a",{id:c,href:"#".concat(c),children:(0,a.jsx)(l,{children:t})})}return(0,a.jsx)(l,{children:r})};function o(e){return(0,a.jsx)(n.D,{children:e,remarkPlugins:[i.Z],rehypePlugins:[t.Z],components:{a:function(e){var s=e.href,r=e.children;return(0,a.jsx)(l.default,{href:s||"#",children:(0,a.jsx)("a",{target:(null===s||void 0===s?void 0:s.startsWith("http"))?"_blank":"_self",children:r})})},h1:c,h2:c,h3:c,h4:c,h5:c,h6:c}})}},3706:function(e,s,r){r.d(s,{T3:function(){return S},Pg:function(){return B}});var a=r(5893),i=(r(7294),r(9008)),l=r(4298),n={"":{"":"Home",about:{"":"About",history:"History",founding:"Founding","board-members":"Board Members","non-profit-information":"Non Profit Information"},projects:{"":"Projects","bike-lanes":"Bike Lanes","bike-share":"Bike Share","bike-racks":"Bike Racks","revised-zoning":"Revised Zoning",gsv:"Grand Street Vision"},events:{"":"Events","jersey-city-ward-tour":{"":"Jersey City Ward Tour","ward-tour-registration":{"":{redirect:"https://www.eventbrite.com/e/jersey-city-ward-tour-2022-tickets-324066169637"}},volunteer:"Volunteer for the Ward Tour","ward-tour-route":"Ward Tour Route","finish-line-festival":"Finish Line Festival","ward-tour-sponsors":"Ward Tour Sponsors","ward-tour-faqs":"Ward Tour FAQs"},"bike-jcast":{"":"Bike JCast","bike-jcast-2017":"Bike JCast 2017"},calendar:"Calendar"},news:{"":"News",articles:{"":"Articles and Press Releases","citi-bike-jc-rebalancing":"Citi Bike JC Rebalancing","2016-ward-tour-press-release":"2016 Ward Tour Press Release","grand-street-vision-protected-bike-lane-petition":"Grand Street Vision - Protected Bike Lane Petition","job-posting-contract-grant-writer":"Job Posting: Contract Grant Writer","design-bike-jcs-7th-annual-ward-tour-poster":"Design Bike JC's 7th Annual Ward Tour Poster","jersey-citys-first-permanent-bike-lane":"Jersey City's First Permanent Bike Lane","installation-jersey-citys-new-bike-racks-underway":"New Bike Rack Installation Underway","bike-jc-awarded-jersey-city-green-award":"Bike JC Awarded 'Jersey City Green Award'","footbridge-liberty-state-park-arrives":"Footbridge to Liberty State Park Arrives"},"media-coverage":"Media Coverage"},support:{"":"Support",sponsors:"Sponsors",volunteer:"Volunteer",donate:"Donate","cool-swag-cool-bikers":"Cool Swag for Cool Bikers!"},resources:{"":"Resources","citi-bike-usage-jersey-city-2018":"Citi Bike Usage 2018","rules-road":"Rules of the Road","bike-maps":"Bike Maps","national-bike-registry":"National Bike Registry","speed-hump-requests":"Speed Hump Requests","bike-racks-businesses":"Bike Racks for Businesses","useful-links":"Useful Links"},"contact-us":"Contact"}};function t(e){var s=("/"==e?[""]:e.split("/")).reduce((function(e,s){var r,a,i=e.path,l=e.breadcrumbs,n=(e.name,e.sitemap),t=i&&"/"==i[i.length-1]?"":"/",c="".concat(i).concat(t).concat(s),o=n[s];if("string"===typeof o)r=o;else{if(void 0===(r=o[""]))throw Error("Sitemap error: no name at:",o);if("string"!==typeof r&&(a=r&&r.redirect,r=void 0,!a))throw Error("Sitemap entry should either be string (page title) or type { redirect: string }")}return{path:c,breadcrumbs:r?l.concat([{href:c,text:r}]):l,name:r,redirect:a,sitemap:o}}),{path:"",breadcrumbs:[],name:"",sitemap:n});return{breadcrumbs:s.breadcrumbs,name:s.name,redirect:s.redirect,sitemap:s.sitemap}}var c=r(1864),o=r(4672);function d(e,s){(null==s||s>e.length)&&(s=e.length);for(var r=0,a=new Array(s);r<s;r++)a[r]=e[r];return a}function h(e,s,r){return s in e?Object.defineProperty(e,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[s]=r,e}function m(e){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(s){h(e,s,r[s])}))}return e}function j(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,i,l=[],n=!0,t=!1;try{for(r=r.call(e);!(n=(a=r.next()).done)&&(l.push(a.value),!s||l.length!==s);n=!0);}catch(c){t=!0,i=c}finally{try{n||null==r.return||r.return()}finally{if(t)throw i}}return l}}(e,s)||function(e,s){if(!e)return;if("string"===typeof e)return d(e,s);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,s)}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(){return(0,a.jsx)("div",{className:"contain-to-grid show-for-small",children:(0,a.jsxs)("nav",{className:"top-bar","data-options":"",children:[(0,a.jsxs)("ul",{className:"title-area",children:[(0,a.jsx)("li",{className:"name",children:(0,a.jsx)("h1",{children:(0,a.jsx)("a",{className:"active",href:"/",rel:"home",title:"bikejc Home",children:"bikejc"})})}),(0,a.jsx)("li",{className:"toggle-topbar menu-icon",children:(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("span",{children:"Menu"})})})]}),(0,a.jsx)("section",{className:"top-bar-section",children:(0,a.jsxs)("ul",{className:"main-nav left",id:"main-menu",children:[(0,a.jsxs)("li",{className:"first expanded has-dropdown about not-click",children:[(0,a.jsx)("a",{className:"about",href:"/about",children:"About"}),(0,a.jsxs)("ul",{className:"dropdown",children:[(0,a.jsx)("li",{className:"title back js-generated",children:(0,a.jsx)("h5",{children:(0,a.jsx)("a",{href:"#",children:"Back"})})}),(0,a.jsx)("li",{className:"first expanded show-for-small",children:(0,a.jsx)("a",{className:"about",href:"/about",children:"About"})}),(0,a.jsx)("li",{className:"first leaf history",children:(0,a.jsx)("a",{className:"history",href:"/about/history",children:"History"})}),(0,a.jsx)("li",{className:"leaf",children:(0,a.jsx)("a",{href:"/about/founding",children:"Founding"})}),(0,a.jsx)("li",{className:"leaf about board-members",children:(0,a.jsx)("a",{className:"about board-members",href:"/about/board-members",children:"Board Members"})}),(0,a.jsx)("li",{className:"last leaf non-profit",children:(0,a.jsx)("a",{className:"non-profit",href:"/about/non-profit-information",children:"Non-Profit Information"})})]})]}),(0,a.jsxs)("li",{className:"expanded has-dropdown projects not-click",children:[(0,a.jsx)("a",{className:"projects",href:"/projects",children:"Projects"}),(0,a.jsxs)("ul",{className:"dropdown",children:[(0,a.jsx)("li",{className:"title back js-generated",children:(0,a.jsx)("h5",{children:(0,a.jsx)("a",{href:"#",children:"Back"})})}),(0,a.jsx)("li",{className:"expanded show-for-small",children:(0,a.jsx)("a",{className:"projects",href:"/projects",children:"Projects"})}),(0,a.jsx)("li",{className:"first leaf bike-lanes projects",children:(0,a.jsx)("a",{className:"bike-lanes projects",href:"/projects/bike-lanes",children:"Bike Lanes"})}),(0,a.jsx)("li",{className:"leaf projects bike-share",children:(0,a.jsx)("a",{className:"projects bike-share",href:"/projects/bike-share",children:"Bike Share"})}),(0,a.jsx)("li",{className:"leaf projects bike-racks",children:(0,a.jsx)("a",{className:"projects bike-racks",href:"/projects/bike-racks",children:"Bike Racks"})}),(0,a.jsx)("li",{className:"leaf projects revised-zoning",children:(0,a.jsx)("a",{className:"projects revised-zoning",href:"/projects/revised-zoning",children:"Revised Zoning"})}),(0,a.jsx)("li",{className:"last leaf",children:(0,a.jsx)("a",{href:"/projects/gsv",children:"Grand Street Vision"})})]})]}),(0,a.jsxs)("li",{className:"expanded has-dropdown events not-click",children:[(0,a.jsx)("a",{className:"events",href:"/events",children:"Events"}),(0,a.jsxs)("ul",{className:"dropdown",children:[(0,a.jsx)("li",{className:"title back js-generated",children:(0,a.jsx)("h5",{children:(0,a.jsx)("a",{href:"#",children:"Back"})})}),(0,a.jsx)("li",{className:"expanded show-for-small",children:(0,a.jsx)("a",{className:"events",href:"/events",children:"Events"})}),(0,a.jsxs)("li",{className:"first expanded has-dropdown ward-tour not-click",title:"Jersey City Ward Tour",children:[(0,a.jsx)("a",{className:"ward-tour",href:"/events/jersey-city-ward-tour",title:"Jersey City Ward Tour",children:"Jersey City Ward Tour"}),(0,a.jsxs)("ul",{className:"dropdown",children:[(0,a.jsx)("li",{className:"title back js-generated",children:(0,a.jsx)("h5",{children:(0,a.jsx)("a",{href:"#",children:"Back"})})}),(0,a.jsx)("li",{className:"first expanded show-for-small",children:(0,a.jsx)("a",{className:"ward-tour",href:"/events/jersey-city-ward-tour",title:"Jersey City Ward Tour",children:"Jersey City Ward Tour"})}),(0,a.jsxs)("li",{className:"first expanded has-dropdown ward-tour not-click",title:"Ward Tour Waiver",children:[(0,a.jsx)("a",{className:"ward-tour",href:"/events/jersey-city-ward-tour/ward-tour-registration",title:"Ward Tour Waiver",children:"Ward Tour Registration"}),(0,a.jsxs)("ul",{className:"dropdown",children:[(0,a.jsx)("li",{className:"title back js-generated",children:(0,a.jsx)("h5",{children:(0,a.jsx)("a",{href:"#",children:"Back"})})}),(0,a.jsx)("li",{className:"first expanded show-for-small",children:(0,a.jsx)("a",{className:"ward-tour",href:"/events/jersey-city-ward-tour/ward-tour-registration",title:"Ward Tour Waiver",children:"Ward Tour Registration"})}),(0,a.jsx)("li",{className:"first leaf",children:(0,a.jsx)("a",{href:"/events/jersey-city-ward-tour/ward-tour-registration/15-mile-route-registration-form",children:"15 Mile Route Registration Form"})}),(0,a.jsx)("li",{className:"last leaf",children:(0,a.jsx)("a",{href:"/events/jersey-city-ward-tour/ward-tour-registration/register-25-mile-ride",children:"25 Mile Route Registration Form"})})]})]}),(0,a.jsx)("li",{className:"leaf ward-tour",children:(0,a.jsx)("a",{className:"ward-tour",href:"/ward-tour/volunteer",children:"Volunteer for the Ward Tour"})}),(0,a.jsx)("li",{className:"leaf",children:(0,a.jsx)("a",{href:"/events/jersey-city-ward-tour/ward-tour-route",children:"Ward Tour Route"})}),(0,a.jsx)("li",{className:"leaf",children:(0,a.jsx)("a",{href:"/events/jersey-city-ward-tour/finish-line-festival",children:"Finish Line Festival"})}),(0,a.jsx)("li",{className:"leaf",children:(0,a.jsx)("a",{href:"/events/jersey-city-ward-tour/ward-tour-sponsors",children:"Ward Tour Sponsors"})}),(0,a.jsx)("li",{className:"last leaf",children:(0,a.jsx)("a",{href:"/events/jersey-city-ward-tour/ward-tour-faqs",children:"Ward Tour FAQs"})})]})]}),(0,a.jsxs)("li",{className:"expanded has-dropdown not-click",children:[(0,a.jsx)("a",{href:"/events/bike-jcast",children:"Bike JCast"}),(0,a.jsxs)("ul",{className:"dropdown",children:[(0,a.jsx)("li",{className:"title back js-generated",children:(0,a.jsx)("h5",{children:(0,a.jsx)("a",{href:"#",children:"Back"})})}),(0,a.jsx)("li",{className:"expanded show-for-small",children:(0,a.jsx)("a",{href:"/events/bike-jcast",children:"Bike JCast"})}),(0,a.jsx)("li",{className:"first last leaf",children:(0,a.jsx)("a",{href:"/events/bike-jcast/bike-jcast-2017",children:"Bike JCast 2017"})})]})]}),(0,a.jsx)("li",{className:"leaf",children:(0,a.jsx)("a",{href:"/events/neighborhood-cleanup",children:"Neighborhood Cleanup"})}),(0,a.jsx)("li",{className:"last leaf calendar",children:(0,a.jsx)("a",{className:"calendar",href:"/events/calendar",children:"Calendar"})})]})]}),(0,a.jsxs)("li",{className:"expanded has-dropdown news not-click",children:[(0,a.jsx)("a",{className:"news",href:"/news",children:"News"}),(0,a.jsxs)("ul",{className:"dropdown",children:[(0,a.jsx)("li",{className:"title back js-generated",children:(0,a.jsx)("h5",{children:(0,a.jsx)("a",{href:"#",children:"Back"})})}),(0,a.jsx)("li",{className:"expanded show-for-small",children:(0,a.jsx)("a",{className:"news",href:"/news",children:"News"})}),(0,a.jsxs)("li",{className:"first expanded has-dropdown articles news not-click",children:[(0,a.jsx)("a",{className:"articles news",href:"/news/articles",children:"Articles and Press Releases"}),(0,a.jsxs)("ul",{className:"dropdown",children:[(0,a.jsx)("li",{className:"title back js-generated",children:(0,a.jsx)("h5",{children:(0,a.jsx)("a",{href:"#",children:"Back"})})}),(0,a.jsx)("li",{className:"first expanded show-for-small",children:(0,a.jsx)("a",{className:"articles news",href:"/news/articles",children:"Articles and Press Releases"})}),(0,a.jsx)("li",{className:"first leaf",children:(0,a.jsx)("a",{href:"/news/articles/2016-ward-tour-press-release",children:"2016 Ward Tour Press Release"})}),(0,a.jsx)("li",{className:"leaf",children:(0,a.jsx)("a",{href:"/news/articles-and-press-releases/grand-street-vision-protected-bike-lane-petition",children:"Grand Street Vision - Protected Bike Lane Petition"})}),(0,a.jsx)("li",{className:"leaf",children:(0,a.jsx)("a",{href:"/news/articles/job-posting-contract-grant-writer",children:"Job Posting: Contract Grant Writer"})}),(0,a.jsx)("li",{className:"leaf",children:(0,a.jsx)("a",{href:"/news/articles/design-bike-jcs-7th-annual-ward-tour-poster",children:"Design Bike JC's 7th Annual Ward Tour Poster"})}),(0,a.jsx)("li",{className:"leaf",children:(0,a.jsx)("a",{href:"/news/articles/jersey-citys-first-permanent-bike-lane",children:"Jersey City's First Permanent Bike Lane"})}),(0,a.jsx)("li",{className:"leaf",children:(0,a.jsx)("a",{href:"/news/articles/installation-jersey-citys-new-bike-racks-underway",children:"New Bike Rack Installation Underway"})}),(0,a.jsx)("li",{className:"leaf",children:(0,a.jsx)("a",{href:"/news/articles/bike-jc-awarded-jersey-city-green-award",children:"Bike JC Awarded 'Jersey City Green Award'"})}),(0,a.jsx)("li",{className:"last leaf",children:(0,a.jsx)("a",{href:"/news/articles/footbridge-liberty-state-park-arrives",children:"Footbridge to Liberty State Park Arrives"})})]})]}),(0,a.jsx)("li",{className:"last leaf media-coverage news",children:(0,a.jsx)("a",{className:"media-coverage news",href:"/news/media-coverage",children:"Media Coverage"})})]})]}),(0,a.jsxs)("li",{className:"expanded has-dropdown support not-click",children:[(0,a.jsx)("a",{className:"support",href:"/support",children:"Support"}),(0,a.jsxs)("ul",{className:"dropdown",children:[(0,a.jsx)("li",{className:"title back js-generated",children:(0,a.jsx)("h5",{children:(0,a.jsx)("a",{href:"#",children:"Back"})})}),(0,a.jsx)("li",{className:"expanded show-for-small",children:(0,a.jsx)("a",{className:"support",href:"/support",children:"Support"})}),(0,a.jsx)("li",{className:"first leaf sponsors",children:(0,a.jsx)("a",{className:"sponsors",href:"/support/sponsors",children:"Sponsors"})}),(0,a.jsx)("li",{className:"leaf",children:(0,a.jsx)("a",{href:"/support/volunteer",children:"Volunteer"})}),(0,a.jsx)("li",{className:"leaf donate",children:(0,a.jsx)("a",{className:"donate",href:"/support/donate",children:"Donate"})}),(0,a.jsx)("li",{className:"last leaf merchandise",children:(0,a.jsx)("a",{className:"merchandise",href:"/support/cool-swag-cool-bikers",children:"Cool Swag for Cool Bikers!"})})]})]}),(0,a.jsxs)("li",{className:"expanded has-dropdown resources not-click",children:[(0,a.jsx)("a",{className:"resources",href:"/resources",children:"Resources"}),(0,a.jsxs)("ul",{className:"dropdown",children:[(0,a.jsx)("li",{className:"title back js-generated",children:(0,a.jsx)("h5",{children:(0,a.jsx)("a",{href:"#",children:"Back"})})}),(0,a.jsx)("li",{className:"expanded show-for-small",children:(0,a.jsx)("a",{className:"resources",href:"/resources",children:"Resources"})}),(0,a.jsx)("li",{className:"first leaf",children:(0,a.jsx)("a",{href:"/citi-bike-usage-jersey-city-2018",children:"Citi Bike Usage 2018"})}),(0,a.jsx)("li",{className:"leaf road-rules",children:(0,a.jsx)("a",{className:"road-rules",href:"/resources/rules-road",children:"Rules of the Road"})}),(0,a.jsx)("li",{className:"leaf bike-maps",children:(0,a.jsx)("a",{className:"bike-maps",href:"/resources/bike-maps",children:"Bike Maps"})}),(0,a.jsx)("li",{className:"leaf",children:(0,a.jsx)("a",{href:"/resources/national-bike-registry",children:"National Bike Registry"})}),(0,a.jsx)("li",{className:"leaf",children:(0,a.jsx)("a",{href:"/resources/speed-hump-requests",children:"Speed Hump Requests"})}),(0,a.jsx)("li",{className:"leaf",children:(0,a.jsx)("a",{href:"/resources/bike-racks-businesses",children:"Bike Racks for Businesses"})}),(0,a.jsx)("li",{className:"last leaf useful-links",children:(0,a.jsx)("a",{className:"useful-links",href:"/resources/useful-links",children:"Useful Links"})})]})]}),(0,a.jsx)("li",{className:"last leaf contact",children:(0,a.jsx)("a",{className:"contact",href:"/contact-us",children:"Contact"})})]})})]})})}function x(e){var s=e.path,r=n[""],i=Object.keys(r).length,l=Object.entries(r).map((function(e,r){var l=j(e,2),n=l[0],t=l[1],c="string"===typeof t?t:t[""],o="/".concat(n),d=o.length;return(0,a.jsx)(k,{idx:r,n:i,active:s==o||s.substring(0,d)==o&&s.length>d&&"/"==s[d]&&"/"!=s,text:c,href:o},n)}));return(0,a.jsxs)("section",{className:"row main-menu-wrapper hide-for-small",children:[(0,a.jsxs)("div",{className:"logo-container",children:[(0,a.jsx)("a",{className:"active",href:"/",rel:"home",title:"bikejc Home",children:(0,a.jsx)("img",{alt:"bikejc logo",className:"logo",src:"/files/logo.png",title:"bikejc Home",typeof:"foaf:Image"})}),(0,a.jsx)("div",{className:"element-invisible",id:"site-name",children:(0,a.jsx)("strong",{children:(0,a.jsx)("a",{href:"/",rel:"home",title:"Home",children:(0,a.jsx)("span",{children:"bikejc"})})})})]}),(0,a.jsxs)("nav",{className:"navigation",id:"main-menu",role:"navigation",children:[(0,a.jsx)("h2",{className:"element-invisible",children:"Main menu"}),(0,a.jsx)("ul",{className:"links inline-list clearfix",id:"main-menu-links",children:l})]})]})}function f(e){var s=e.srcs;return(0,a.jsx)("section",{className:"l-header-region row",children:(0,a.jsx)("div",{className:"large-12 columns home-splash-image",children:(0,a.jsx)("section",{className:"block block-nivo-slider block-nivo-slider-nivo-slider header",children:(0,a.jsxs)("div",{className:"slider-wrapper theme-light",children:[(0,a.jsx)("div",{className:"ribbon"}),(0,a.jsx)("div",{className:"nivoSlider",id:"slider",children:s.map((function(e,s){return(0,a.jsx)("img",{id:"slide-".concat(s),"data-thumb":e,src:e,alt:"",title:"",typeof:"foaf:Image","data-transition":"",className:"slide"},"".concat(s))}))})]})})})})}function b(e){var s=e.src;return(0,a.jsx)("section",{className:"l-header-region row",children:(0,a.jsx)("div",{className:"large-12 columns",children:(0,a.jsx)("section",{className:"block block-views page-header-banner block-views-page-header-image-view-block header",children:(0,a.jsx)("div",{className:"view view-page-header-image-view view-id-page_header_image_view view-display-id-block",children:(0,a.jsx)("div",{className:"view-content",children:(0,a.jsx)("div",{className:"views-row views-row-1 views-row-odd views-row-first views-row-last",children:(0,a.jsx)("div",{className:"views-field views-field-field-page-header-image",children:(0,a.jsx)("div",{className:"field-content",children:(0,a.jsx)("img",{alt:"",height:"200",src:s,typeof:"foaf:Image",width:"1000"})})})})})})})})})}function p(e){var s=e.path,r=e.banners;return(0,a.jsxs)("header",{className:"l-header",role:"banner",children:[(0,a.jsx)(u,{}),(0,a.jsx)(x,{path:s}),r.length>1?(0,a.jsx)(f,{srcs:r}):(0,a.jsx)(b,{src:r[0]})]})}function k(e){var s=e.idx,r=e.n,i=e.active,l=e.text,n=e.href,t=[],c=[];return 0==s&&t.push("first"),t.push("leaf"),i&&(t.push("active"),t.push("active-trail"),c.push("active"),c.push("active-trail")),s+1==r&&t.push("last"),(0,a.jsx)("li",{className:t.join(" "),children:(0,a.jsx)("a",{href:n,className:c.join(" "),children:l})},l)}function N(e){var s=e.title,r=e.activePath,i=e.breadcrumbs,l=i.length;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{className:"block-title",children:s}),(0,a.jsx)("div",{className:"menu-block-wrapper menu-block-1 menu-name-main-menu parent-mlid-0 menu-level-2",children:(0,a.jsx)("ul",{className:"menu",children:i.map((function(e,s){var i=e.href,n=e.text;return(0,a.jsx)(k,{idx:s,n:l,active:!!r&&i==r,text:n,href:i},n)}))})})]})}function w(e){var s=e.sectionMenu;return(0,a.jsxs)("aside",{className:"large-4 sidebar-second columns sidebar columns",role:"complementary",children:[(0,a.jsxs)("section",{className:"block block-block social-media block-block-6 block-odd clearfix",children:[(0,a.jsx)("h2",{className:"block-title",children:"Follow Us"}),(0,a.jsx)("div",{children:(0,a.jsx)("a",{className:"twitter",href:"http://www.twitter.com/bikejc",target:"_blank"})}),(0,a.jsx)("div",{children:(0,a.jsx)("a",{className:"facebook",href:"https://www.facebook.com/bikeJC",target:"_blank"})}),(0,a.jsx)("div",{children:(0,a.jsx)("a",{className:"instagram",href:"http://www.instagram.com/bikejcgram",target:"_blank"})})]}),(0,a.jsx)("section",{className:"block block-menu-block block-menu-block-1 block-even clearfix",children:s?(0,a.jsx)(N,m({},s)):null}),(0,a.jsxs)("section",{className:"block block-block block-block-13 block-even clearfix",children:[(0,a.jsx)("h2",{className:"block-title",children:"Ward Tour 2022"}),(0,a.jsx)("a",{href:"https://www.eventbrite.com/e/jersey-city-ward-tour-2022-tickets-324066169637",children:(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"The Jersey City Ward Tour is back! Sunday, June 5, roll out 11am from City Hall!"})," ",(0,a.jsx)("strong",{children:"2,000 Bikes. 15 Miles. 6 Wards, finishing at the Jersey City Jazz Festival."})," ",(0,a.jsx)("strong",{children:"REGISTER HERE"})]})})]}),(0,a.jsxs)("section",{className:"block block-block block-block-14 block-odd clearfix",children:[(0,a.jsx)("h2",{className:"block-title",children:"Cool Swag!"}),(0,a.jsx)("p",{}),(0,a.jsxs)("p",{children:[(0,a.jsx)("a",{href:"/support/cool-swag-cool-bikers",children:(0,a.jsx)("img",{src:"/files/Retro Banner.jpg"})}),(0,a.jsx)("br",{})]}),(0,a.jsx)("div",{className:"center",children:(0,a.jsx)("p",{children:(0,a.jsx)("strong",{children:"Support BikeJC's important work through a tax deductible donation and receive cool swag!"})})})]}),(0,a.jsxs)("section",{className:"block block-block donate block-block-8 block-odd clearfix",children:[(0,a.jsx)("h4",{children:"Donate to Bike JC"}),(0,a.jsx)("a",{className:"button small radius",href:"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BMJXSWD8HGWXW",children:"Make a Paypal Donation"})]})]})}function g(e){var s=e.breadcrumbs;return s.length?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{className:"element-invisible",children:"You are here"}),(0,a.jsx)("ul",{className:"breadcrumbs",children:s.map((function(e,r){var i=e.href,l=e.text;return(0,a.jsx)("li",{className:r+1==s.length?"current":"",children:(0,a.jsx)("a",{href:i,children:l})},i)}))})]}):null}function v(e){var s=e.breadcrumbs,r=e.sectionMenu,i=e.children;return(0,a.jsxs)("main",{className:"row l-main",role:"main",children:[(0,a.jsxs)("div",{className:"large-8 main columns",children:[(0,a.jsx)("a",{id:"main-content"}),(0,a.jsx)(g,{breadcrumbs:s||[]}),i]}),(0,a.jsx)(w,{sectionMenu:r})]})}function y(){return(0,a.jsxs)("section",{className:"l-triptych row",children:[(0,a.jsx)("div",{className:"triptych-first large-4 columns",children:(0,a.jsxs)("section",{className:"block block-block promo-box first-box block-block-2",children:[(0,a.jsx)("h4",{children:"Subscribe to Our Mailing List + Monthly Newsletter"}),(0,a.jsx)("div",{id:"mc_embed_signup",children:(0,a.jsxs)("form",{action:"https://bikejc.us1.list-manage.com/subscribe/post?u=29e08864eb550bdd5c90dd362&id=9fce58455b",className:"validate",id:"mc-embedded-subscribe-form",method:"post",name:"mc-embedded-subscribe-form",target:"_blank",children:[(0,a.jsx)("input",{className:"email",id:"mce-EMAIL",name:"EMAIL",placeholder:"email address",type:"email"}),(0,a.jsx)("div",{style:{position:"absolute",left:"-5000px"},children:(0,a.jsx)("input",{name:"b_29e08864eb550bdd5c90dd362_9fce58455b",tabIndex:-1,type:"text"})}),(0,a.jsx)("div",{className:"clear",children:(0,a.jsx)("input",{className:"button",id:"mc-embedded-subscribe",name:"subscribe",type:"submit",value:"Subscribe"})})]})})]})}),(0,a.jsx)("div",{className:"triptych-middle large-4 columns",children:(0,a.jsxs)("section",{className:"block block-block promo-box second-box block-block-3",children:[(0,a.jsx)("h4",{children:"Follow Bike JC on Twitter"}),(0,a.jsx)("p",{children:"Making Jersey City bike-friendly since 2009"}),(0,a.jsx)("p",{children:"Tweeting bike community news since 2010"}),(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:"https://twitter.com/bikejc",target:"_blank",children:"Tweet @bikejc!"})})]})}),(0,a.jsx)("div",{className:"triptych-last large-4 columns",children:(0,a.jsxs)("section",{className:"block block-block promo-box third-box block-block-4",children:[(0,a.jsx)("h4",{children:"We're Now on Instagram"}),(0,a.jsx)("p",{children:"Check out our official instagram account"}),(0,a.jsx)("p",{children:"Show us your photos of biking in JC at #bikejc!"}),(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:"https://instagram.com/bikejcgram/",target:"_blank",children:"@bikejcgram/"})})]})})]})}function C(){return(0,a.jsxs)("footer",{className:"l-footer panel row",role:"contentinfo",children:[(0,a.jsxs)("div",{className:"footer large-12 columns",children:[(0,a.jsx)("section",{className:"block block-menu-block block-menu-block-2",children:(0,a.jsx)("div",{className:"menu-block-wrapper menu-block-2 menu-name-menu-footer-main parent-mlid-0 menu-level-1",children:(0,a.jsxs)("ul",{className:"menu",children:[(0,a.jsx)("li",{className:"first leaf",children:(0,a.jsx)("a",{href:"/about",children:"about"})}),(0,a.jsx)("li",{className:"leaf",children:(0,a.jsx)("a",{href:"/projects",children:"projects"})}),(0,a.jsx)("li",{className:"leaf",children:(0,a.jsx)("a",{href:"/events",children:"events"})}),(0,a.jsx)("li",{className:"leaf",children:(0,a.jsx)("a",{href:"/news",children:"news"})}),(0,a.jsx)("li",{className:"leaf",children:(0,a.jsx)("a",{href:"/support",children:"support"})}),(0,a.jsx)("li",{className:"leaf",children:(0,a.jsx)("a",{href:"/resources",children:"resources"})}),(0,a.jsx)("li",{className:"last leaf",children:(0,a.jsx)("a",{href:"/contact-us",children:"contact"})})]})})}),(0,a.jsx)("section",{className:"block block-block site-info block-block-7",children:(0,a.jsxs)("div",{className:"site-credits",children:["site by ",(0,a.jsx)("a",{href:"http://www.designsprawl.com/",target:"blank",children:"design sprawl"})]})})]}),(0,a.jsx)("div",{className:"copyright large-12 columns",children:(0,a.jsx)("span",{children:" \xa9 2022 bikejc Information likes to be shared."})})]})}var B=function(e){return function(){return(0,a.jsx)(S,m({},e))}};function S(e){var s=e.path,r=e.h1,n=e.description,d=e.banner,h=e.article,m=e.ctime,u=e.mtime,x=e.documentClasses,f=e.articleClasses,b=e.md,k=e.children;d?"string"===typeof d&&(d=[d]):d=["/files/lincoln-park-banner.jpg"];var N="/"==s;h=!1!==h&&!(void 0===h&&N);var w=t(s),g=w.breadcrumbs,B=w.name,S=w.redirect,R=w.sitemap;if(S)return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.default,{children:[(0,a.jsx)("meta",{httpEquiv:"refresh",content:"0,url=".concat(S)}),(0,a.jsx)("title",{children:"Redirecting"})]}),(0,a.jsxs)("div",{children:["This page has moved. Click ",(0,a.jsx)("a",{href:S,children:"here"})," to go to the new page."]})]});if("string"!==typeof B)throw Error("Sitemap error: name ".concat(B," must be string, got:"),B);var W=void 0;if(!N){var P="string"===typeof R?(0,c.dirname)(s):s,J=t(P),T=J.name,_=J.sitemap;if("string"!==typeof T)throw Error("Sitemap error: sectionPath ".concat(P," must have string name, got:"),T);var A=[];Object.entries(_).forEach((function(e){var s=j(e,2),r=s[0],a=s[1];if(""!=r){var i="".concat(P,"/").concat(r),l="string"===typeof a?a:a[""];"string"===typeof l&&A.push({href:i,text:l})}})),A.length>1&&(W={title:T,activePath:s,breadcrumbs:A})}if(k){if(b)throw Error("Pass either `children` or `md`")}else{if(!b)throw Error("Pass either `children` or `md`");k=(0,o.Z)(b)}var M,E="bikejc | ".concat(B),F=function(e){return n&&(0,a.jsx)("meta",{content:n,name:e})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{content:"width=device-width, maximum-scale = 1.0",name:"viewport"}),F("description"),(0,a.jsx)("link",{href:s,rel:"canonical"}),(0,a.jsx)("link",{href:s,rel:"shortlink"}),(0,a.jsx)("meta",{content:"bikejc",property:"og:site_name"}),(0,a.jsx)("meta",{content:"article",property:"og:type"}),(0,a.jsx)("meta",{content:s,property:"og:url"}),(0,a.jsx)("meta",{content:B,property:"og:title"}),F("og:description"),u&&(0,a.jsx)("meta",{content:u,property:"og:updated_time"}),(0,a.jsx)("meta",{content:"summary",name:"twitter:card"}),(0,a.jsx)("meta",{content:s,name:"twitter:url"}),(0,a.jsx)("meta",{content:B,name:"twitter:title"}),F("twitter:description"),m&&(0,a.jsx)("meta",{content:m,property:"article:published_time"}),u&&(0,a.jsx)("meta",{content:u,property:"article:modified_time"}),(0,a.jsx)(l.default,{src:"/files/drupal.js"}),(0,a.jsx)(l.default,{src:"/files/foundation-init.js"}),(0,a.jsxs)(i.default,{children:[(0,a.jsx)("title",{children:E}),(0,a.jsx)("meta",{charSet:"utf-8"}),(0,a.jsx)("link",{rel:"icon",href:"/misc/favicon.ico",type:"image/x-icon"})]}),(0,a.jsx)("div",{className:"skip-link",children:(0,a.jsx)("a",{href:"#main-content",className:"element-invisible element-focusable",children:"Skip to main content"})}),(0,a.jsxs)("div",{className:"page ".concat((x||[]).join(" ")),role:"document",children:[(0,a.jsx)(p,{path:s,banners:d}),(0,a.jsxs)(v,{sectionMenu:W,breadcrumbs:N?[]:g,children:[(0,a.jsx)("h1",{className:"title",id:"page-title",children:r||B}),h?(M=k,(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("article",{about:s,className:"node node-page view-mode-full ".concat((f||[]).join(" ")),typeof:"sioc:Item foaf:Document",children:(0,a.jsx)("div",{className:"field field-name-body field-type-text-with-summary field-label-hidden field-wrapper body field",children:M})})})):k]}),N&&(0,a.jsx)(y,{}),(0,a.jsx)(C,{})]})]})}}}]);