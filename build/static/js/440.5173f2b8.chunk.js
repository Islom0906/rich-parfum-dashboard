"use strict";(self.webpackChunkcrema=self.webpackChunkcrema||[]).push([[440],{98440:function(a,e,l){l.r(e),l.d(e,{default:function(){return G}});var i=l(72791),n=l(38006),s=l(1413),r=l(29439),h=l(2409),p=l(2649),m=l(87309),d=l(30914),t=l(49389),o=l(14138),c=l(65532),u=l(54641),x=l(80184),j=function(){var a=(0,u.f)().user,e=(0,i.useState)("/assets/images/placeholder.jpg"),l=(0,r.Z)(e,2),n=l[0],j=l[1],g=(0,c.uI)({accept:"image/*",onDrop:function(a){j(URL.createObjectURL(a[0]))}}),f=g.getRootProps,b=g.getInputProps;return(0,x.jsxs)(h.Z,{onFinish:function(a){console.log("Finish:",a)},initialValues:(0,s.Z)((0,s.Z)({},a),{},{userImage:a.photoURL?a.photoURL:"/assets/images/placeholder.jpg"}),children:[(0,x.jsxs)(h.Z.Item,{className:"info-upload",children:[(0,x.jsx)(p.C,{className:"info-upload-avatar",src:n}),(0,x.jsxs)("div",{className:"info-upload-content",children:[(0,x.jsxs)("div",{className:"info-upload-btn-group",children:[(0,x.jsxs)("div",(0,s.Z)((0,s.Z)({},f({className:"dropzone"})),{},{children:[(0,x.jsx)("input",(0,s.Z)({},b())),(0,x.jsx)("label",{htmlFor:"icon-button-file",children:(0,x.jsx)(m.Z,{type:"primary",children:"Upload"})})]})),(0,x.jsx)(m.Z,{onClick:function(){j("/assets/images/placeholder.jpg")},children:"Reset"})]}),(0,x.jsx)("p",{children:"Allowed JPG, GIF or PNG. Max size of 800kB"})]})]}),(0,x.jsxs)(o.iB,{gutter:16,children:[(0,x.jsx)(d.Z,{xs:24,md:12,children:(0,x.jsx)(h.Z.Item,{name:"displayName",rules:[{required:!0,message:"Please input your Full Name!"}],children:(0,x.jsx)(t.Z,{placeholder:"Full Name"})})}),(0,x.jsx)(d.Z,{xs:24,md:12,children:(0,x.jsx)(h.Z.Item,{name:"username",rules:[{required:!0,message:"Please input your User Name!"}],children:(0,x.jsx)(t.Z,{placeholder:"User Name"})})}),(0,x.jsx)(d.Z,{xs:24,md:12,children:(0,x.jsx)(h.Z.Item,{name:"email",rules:[{required:!0,message:"Please input your e-mail address!"}],children:(0,x.jsx)(t.Z,{type:"text",placeholder:"E-mail"})})}),(0,x.jsx)(d.Z,{xs:24,md:12,children:(0,x.jsx)(h.Z.Item,{name:"company",rules:[{required:!0,message:"Please input your company!"}],children:(0,x.jsx)(t.Z,{type:"text",placeholder:"Company"})})}),(0,x.jsx)(d.Z,{xs:24,md:24,children:(0,x.jsxs)(h.Z.Item,{shouldUpdate:!0,className:"user-profile-group-btn",children:[(0,x.jsx)(m.Z,{type:"primary",htmlType:"submit",children:"Save Changes"}),(0,x.jsx)(m.Z,{htmlType:"cancel",children:"Cancel"})]})})]})]})},g=l(98056),f=function(){return(0,x.jsxs)(h.Z,{className:"user-profile-form",initialValues:{remember:!0},onFinish:function(a){console.log("Success:",a)},onFinishFailed:function(a){console.log("Failed:",a)},children:[(0,x.jsx)("h3",{className:"user-profile-form-title",children:(0,x.jsx)(g.Z,{id:"userProfile.changePassword"})}),(0,x.jsxs)(o.iB,{gutter:16,children:[(0,x.jsx)(d.Z,{xs:24,md:12,children:(0,x.jsx)(h.Z.Item,{name:"oldPassword",rules:[{required:!0,message:"Please input your Enter Password"}],children:(0,x.jsx)(t.Z.Password,{placeholder:"Enter password"})})}),(0,x.jsx)(d.Z,{xs:24,md:12}),(0,x.jsx)(d.Z,{xs:24,md:12,children:(0,x.jsx)(h.Z.Item,{name:"password",rules:[{required:!0,message:"Please input your New Password!"}],children:(0,x.jsx)(t.Z.Password,{placeholder:"Enter new password"})})}),(0,x.jsx)(d.Z,{xs:24,md:12,children:(0,x.jsx)(h.Z.Item,{name:"confirmPassword",rules:[{required:!0,message:"Please input Your Confirm Password!"},function(a){var e=a.getFieldValue;return{validator:function(a,l){return l&&e("password")!==l?Promise.reject("The Confirm Password that you entered do not match!"):Promise.resolve()}}}],children:(0,x.jsx)(t.Z.Password,{placeholder:"Confirm new password"})})}),(0,x.jsx)(d.Z,{xs:24,md:24,children:(0,x.jsxs)(h.Z.Item,{shouldUpdate:!0,className:"user-profile-group-btn",children:[(0,x.jsx)(m.Z,{type:"primary",htmlType:"submit",children:"Save Changes"}),(0,x.jsx)(m.Z,{htmlType:"cancel",children:"Cancel"})]})})]})]})},b=l(83734),Z=l(57123),k=[{id:4,name:"Afganistan",alpha2:"af",alpha3:"afg"},{id:528,name:"Alankomaat",alpha2:"nl",alpha3:"nld"},{id:8,name:"Albania",alpha2:"al",alpha3:"alb"},{id:12,name:"Algeria",alpha2:"dz",alpha3:"dza"},{id:20,name:"Andorra",alpha2:"ad",alpha3:"and"},{id:24,name:"Angola",alpha2:"ao",alpha3:"ago"},{id:28,name:"Antigua ja Barbuda",alpha2:"ag",alpha3:"atg"},{id:784,name:"Arabiemiirikunnat",alpha2:"ae",alpha3:"are"},{id:32,name:"Argentiina",alpha2:"ar",alpha3:"arg"},{id:51,name:"Armenia",alpha2:"am",alpha3:"arm"},{id:36,name:"Australia",alpha2:"au",alpha3:"aus"},{id:31,name:"Azerbaid\u017ean",alpha2:"az",alpha3:"aze"},{id:44,name:"Bahama",alpha2:"bs",alpha3:"bhs"},{id:48,name:"Bahrain",alpha2:"bh",alpha3:"bhr"},{id:50,name:"Bangladesh",alpha2:"bd",alpha3:"bgd"},{id:52,name:"Barbados",alpha2:"bb",alpha3:"brb"},{id:56,name:"Belgia",alpha2:"be",alpha3:"bel"},{id:84,name:"Belize",alpha2:"bz",alpha3:"blz"},{id:204,name:"Benin",alpha2:"bj",alpha3:"ben"},{id:64,name:"Bhutan",alpha2:"bt",alpha3:"btn"},{id:68,name:"Bolivia",alpha2:"bo",alpha3:"bol"},{id:70,name:"Bosnia ja Hertsegovina",alpha2:"ba",alpha3:"bih"},{id:72,name:"Botswana",alpha2:"bw",alpha3:"bwa"},{id:76,name:"Brasilia",alpha2:"br",alpha3:"bra"},{id:96,name:"Brunei",alpha2:"bn",alpha3:"brn"},{id:100,name:"Bulgaria",alpha2:"bg",alpha3:"bgr"},{id:854,name:"Burkina Faso",alpha2:"bf",alpha3:"bfa"},{id:108,name:"Burundi",alpha2:"bi",alpha3:"bdi"},{id:152,name:"Chile",alpha2:"cl",alpha3:"chl"},{id:188,name:"Costa Rica",alpha2:"cr",alpha3:"cri"},{id:262,name:"Djibouti",alpha2:"dj",alpha3:"dji"},{id:212,name:"Dominica",alpha2:"dm",alpha3:"dma"},{id:214,name:"Dominikaaninen tasavalta",alpha2:"do",alpha3:"dom"},{id:218,name:"Ecuador",alpha2:"ec",alpha3:"ecu"},{id:818,name:"Egypti",alpha2:"eg",alpha3:"egy"},{id:222,name:"El Salvador",alpha2:"sv",alpha3:"slv"},{id:232,name:"Eritrea",alpha2:"er",alpha3:"eri"},{id:724,name:"Espanja",alpha2:"es",alpha3:"esp"},{id:231,name:"Etiopia",alpha2:"et",alpha3:"eth"},{id:710,name:"Etel\xe4-Afrikka",alpha2:"za",alpha3:"zaf"},{id:728,name:"Etel\xe4-Sudan",alpha2:"ss",alpha3:"ssd"},{id:242,name:"Fid\u017ei",alpha2:"fj",alpha3:"fji"},{id:608,name:"Filippiinit",alpha2:"ph",alpha3:"phl"},{id:266,name:"Gabon",alpha2:"ga",alpha3:"gab"},{id:270,name:"Gambia",alpha2:"gm",alpha3:"gmb"},{id:268,name:"Georgia",alpha2:"ge",alpha3:"geo"},{id:288,name:"Ghana",alpha2:"gh",alpha3:"gha"},{id:308,name:"Grenada",alpha2:"gd",alpha3:"grd"},{id:320,name:"Guatemala",alpha2:"gt",alpha3:"gtm"},{id:324,name:"Guinea",alpha2:"gn",alpha3:"gin"},{id:624,name:"Guinea-Bissau",alpha2:"gw",alpha3:"gnb"},{id:328,name:"Guyana",alpha2:"gy",alpha3:"guy"},{id:332,name:"Haiti",alpha2:"ht",alpha3:"hti"},{id:340,name:"Honduras",alpha2:"hn",alpha3:"hnd"},{id:360,name:"Indonesia",alpha2:"id",alpha3:"idn"},{id:356,name:"Intia",alpha2:"in",alpha3:"ind"},{id:368,name:"Irak",alpha2:"iq",alpha3:"irq"},{id:364,name:"Iran",alpha2:"ir",alpha3:"irn"},{id:372,name:"Irlanti",alpha2:"ie",alpha3:"irl"},{id:352,name:"Islanti",alpha2:"is",alpha3:"isl"},{id:376,name:"Israel",alpha2:"il",alpha3:"isr"},{id:380,name:"Italia",alpha2:"it",alpha3:"ita"},{id:626,name:"It\xe4-Timor",alpha2:"tl",alpha3:"tls"},{id:40,name:"It\xe4valta",alpha2:"at",alpha3:"aut"},{id:388,name:"Jamaika",alpha2:"jm",alpha3:"jam"},{id:392,name:"Japani",alpha2:"jp",alpha3:"jpn"},{id:887,name:"Jemen",alpha2:"ye",alpha3:"yem"},{id:400,name:"Jordania",alpha2:"jo",alpha3:"jor"},{id:116,name:"Kambod\u017ea",alpha2:"kh",alpha3:"khm"},{id:120,name:"Kamerun",alpha2:"cm",alpha3:"cmr"},{id:124,name:"Kanada",alpha2:"ca",alpha3:"can"},{id:132,name:"Kap Verde",alpha2:"cv",alpha3:"cpv"},{id:398,name:"Kazakstan",alpha2:"kz",alpha3:"kaz"},{id:404,name:"Kenia",alpha2:"ke",alpha3:"ken"},{id:140,name:"Keski-Afrikan tasavalta",alpha2:"cf",alpha3:"caf"},{id:156,name:"Kiina",alpha2:"cn",alpha3:"chn"},{id:417,name:"Kirgisia",alpha2:"kg",alpha3:"kgz"},{id:296,name:"Kiribati",alpha2:"ki",alpha3:"kir"},{id:170,name:"Kolumbia",alpha2:"co",alpha3:"col"},{id:174,name:"Komorit",alpha2:"km",alpha3:"com"},{id:180,name:"Kongon demokraattinen tasavalta",alpha2:"cd",alpha3:"cod"},{id:178,name:"Kongon tasavalta",alpha2:"cg",alpha3:"cog"},{id:408,name:"Korean demokraattinen kansantasavalta",alpha2:"kp",alpha3:"prk"},{id:410,name:"Korean tasavalta",alpha2:"kr",alpha3:"kor"},{id:300,name:"Kreikka",alpha2:"gr",alpha3:"grc"},{id:191,name:"Kroatia",alpha2:"hr",alpha3:"hrv"},{id:192,name:"Kuuba",alpha2:"cu",alpha3:"cub"},{id:414,name:"Kuwait",alpha2:"kw",alpha3:"kwt"},{id:196,name:"Kypros",alpha2:"cy",alpha3:"cyp"},{id:418,name:"Laos",alpha2:"la",alpha3:"lao"},{id:428,name:"Latvia",alpha2:"lv",alpha3:"lva"},{id:426,name:"Lesotho",alpha2:"ls",alpha3:"lso"},{id:422,name:"Libanon",alpha2:"lb",alpha3:"lbn"},{id:430,name:"Liberia",alpha2:"lr",alpha3:"lbr"},{id:434,name:"Libya",alpha2:"ly",alpha3:"lby"},{id:438,name:"Liechtenstein",alpha2:"li",alpha3:"lie"},{id:440,name:"Liettua",alpha2:"lt",alpha3:"ltu"},{id:442,name:"Luxemburg",alpha2:"lu",alpha3:"lux"},{id:450,name:"Madagaskar",alpha2:"mg",alpha3:"mdg"},{id:454,name:"Malawi",alpha2:"mw",alpha3:"mwi"},{id:462,name:"Malediivit",alpha2:"mv",alpha3:"mdv"},{id:458,name:"Malesia",alpha2:"my",alpha3:"mys"},{id:466,name:"Mali",alpha2:"ml",alpha3:"mli"},{id:470,name:"Malta",alpha2:"mt",alpha3:"mlt"},{id:504,name:"Marokko",alpha2:"ma",alpha3:"mar"},{id:584,name:"Marshallinsaaret",alpha2:"mh",alpha3:"mhl"},{id:478,name:"Mauritania",alpha2:"mr",alpha3:"mrt"},{id:480,name:"Mauritius",alpha2:"mu",alpha3:"mus"},{id:484,name:"Meksiko",alpha2:"mx",alpha3:"mex"},{id:583,name:"Mikronesian liittovaltio",alpha2:"fm",alpha3:"fsm"},{id:498,name:"Moldova",alpha2:"md",alpha3:"mda"},{id:492,name:"Monaco",alpha2:"mc",alpha3:"mco"},{id:496,name:"Mongolia",alpha2:"mn",alpha3:"mng"},{id:499,name:"Montenegro",alpha2:"me",alpha3:"mne"},{id:508,name:"Mosambik",alpha2:"mz",alpha3:"moz"},{id:104,name:"Myanmar",alpha2:"mm",alpha3:"mmr"},{id:516,name:"Namibia",alpha2:"na",alpha3:"nam"},{id:520,name:"Nauru",alpha2:"nr",alpha3:"nru"},{id:524,name:"Nepal",alpha2:"np",alpha3:"npl"},{id:558,name:"Nicaragua",alpha2:"ni",alpha3:"nic"},{id:562,name:"Niger",alpha2:"ne",alpha3:"ner"},{id:566,name:"Nigeria",alpha2:"ng",alpha3:"nga"},{id:578,name:"Norja",alpha2:"no",alpha3:"nor"},{id:384,name:"Norsunluurannikko",alpha2:"ci",alpha3:"civ"},{id:512,name:"Oman",alpha2:"om",alpha3:"omn"},{id:586,name:"Pakistan",alpha2:"pk",alpha3:"pak"},{id:585,name:"Palau",alpha2:"pw",alpha3:"plw"},{id:591,name:"Panama",alpha2:"pa",alpha3:"pan"},{id:598,name:"Papua-Uusi-Guinea",alpha2:"pg",alpha3:"png"},{id:600,name:"Paraguay",alpha2:"py",alpha3:"pry"},{id:604,name:"Peru",alpha2:"pe",alpha3:"per"},{id:807,name:"Pohjois-Makedonia",alpha2:"mk",alpha3:"mkd"},{id:620,name:"Portugali",alpha2:"pt",alpha3:"prt"},{id:616,name:"Puola",alpha2:"pl",alpha3:"pol"},{id:226,name:"P\xe4iv\xe4ntasaajan Guinea",alpha2:"gq",alpha3:"gnq"},{id:634,name:"Qatar",alpha2:"qa",alpha3:"qat"},{id:250,name:"Ranska",alpha2:"fr",alpha3:"fra"},{id:642,name:"Romania",alpha2:"ro",alpha3:"rou"},{id:646,name:"Ruanda",alpha2:"rw",alpha3:"rwa"},{id:752,name:"Ruotsi",alpha2:"se",alpha3:"swe"},{id:659,name:"Saint Kitts ja Nevis",alpha2:"kn",alpha3:"kna"},{id:662,name:"Saint Lucia",alpha2:"lc",alpha3:"lca"},{id:670,name:"Saint Vincent ja Grenadiinit",alpha2:"vc",alpha3:"vct"},{id:276,name:"Saksa",alpha2:"de",alpha3:"deu"},{id:90,name:"Salomonsaaret",alpha2:"sb",alpha3:"slb"},{id:894,name:"Sambia",alpha2:"zm",alpha3:"zmb"},{id:882,name:"Samoa",alpha2:"ws",alpha3:"wsm"},{id:674,name:"San Marino",alpha2:"sm",alpha3:"smr"},{id:678,name:"S\xe3o Tom\xe9 ja Pr\xedncipe",alpha2:"st",alpha3:"stp"},{id:682,name:"Saudi-Arabia",alpha2:"sa",alpha3:"sau"},{id:686,name:"Senegal",alpha2:"sn",alpha3:"sen"},{id:688,name:"Serbia",alpha2:"rs",alpha3:"srb"},{id:690,name:"Seychellit",alpha2:"sc",alpha3:"syc"},{id:694,name:"Sierra Leone",alpha2:"sl",alpha3:"sle"},{id:702,name:"Singapore",alpha2:"sg",alpha3:"sgp"},{id:703,name:"Slovakia",alpha2:"sk",alpha3:"svk"},{id:705,name:"Slovenia",alpha2:"si",alpha3:"svn"},{id:706,name:"Somalia",alpha2:"so",alpha3:"som"},{id:144,name:"Sri Lanka",alpha2:"lk",alpha3:"lka"},{id:729,name:"Sudan",alpha2:"sd",alpha3:"sdn"},{id:246,name:"Suomi",alpha2:"fi",alpha3:"fin"},{id:740,name:"Suriname",alpha2:"sr",alpha3:"sur"},{id:748,name:"Swazimaa",alpha2:"sz",alpha3:"swz"},{id:756,name:"Sveitsi",alpha2:"ch",alpha3:"che"},{id:760,name:"Syyria",alpha2:"sy",alpha3:"syr"},{id:762,name:"Tad\u017eikistan",alpha2:"tj",alpha3:"tjk"},{id:834,name:"Tansania",alpha2:"tz",alpha3:"tza"},{id:208,name:"Tanska",alpha2:"dk",alpha3:"dnk"},{id:764,name:"Thaimaa",alpha2:"th",alpha3:"tha"},{id:768,name:"Togo",alpha2:"tg",alpha3:"tgo"},{id:776,name:"Tonga",alpha2:"to",alpha3:"ton"},{id:780,name:"Trinidad ja Tobago",alpha2:"tt",alpha3:"tto"},{id:148,name:"T\u0161ad",alpha2:"td",alpha3:"tcd"},{id:203,name:"T\u0161ekki",alpha2:"cz",alpha3:"cze"},{id:788,name:"Tunisia",alpha2:"tn",alpha3:"tun"},{id:792,name:"Turkki",alpha2:"tr",alpha3:"tur"},{id:795,name:"Turkmenistan",alpha2:"tm",alpha3:"tkm"},{id:798,name:"Tuvalu",alpha2:"tv",alpha3:"tuv"},{id:800,name:"Uganda",alpha2:"ug",alpha3:"uga"},{id:804,name:"Ukraina",alpha2:"ua",alpha3:"ukr"},{id:348,name:"Unkari",alpha2:"hu",alpha3:"hun"},{id:858,name:"Uruguay",alpha2:"uy",alpha3:"ury"},{id:554,name:"Uusi-Seelanti",alpha2:"nz",alpha3:"nzl"},{id:860,name:"Uzbekistan",alpha2:"uz",alpha3:"uzb"},{id:112,name:"Valko-Ven\xe4j\xe4",alpha2:"by",alpha3:"blr"},{id:548,name:"Vanuatu",alpha2:"vu",alpha3:"vut"},{id:862,name:"Venezuela",alpha2:"ve",alpha3:"ven"},{id:643,name:"Ven\xe4j\xe4",alpha2:"ru",alpha3:"rus"},{id:704,name:"Vietnam",alpha2:"vn",alpha3:"vnm"},{id:233,name:"Viro",alpha2:"ee",alpha3:"est"},{id:826,name:"Yhdistynyt kuningaskunta",alpha2:"gb",alpha3:"gbr"},{id:840,name:"Yhdysvallat",alpha2:"us",alpha3:"usa"},{id:716,name:"Zimbabwe",alpha2:"zw",alpha3:"zwe"}],v=function(){var a=b.Z.Option;console.log(k);var e=t.Z.TextArea;return(0,x.jsxs)(h.Z,{className:"user-profile-form",initialValues:{remember:!0},onFinish:function(a){console.log("Success:",a)},onFinishFailed:function(a){console.log("Failed:",a)},children:[(0,x.jsx)("h3",{className:"user-profile-form-title",children:(0,x.jsx)(g.Z,{id:"userProfile.information"})}),(0,x.jsxs)(o.iB,{gutter:16,children:[(0,x.jsx)(d.Z,{xs:24,md:24,children:(0,x.jsx)(h.Z.Item,{name:"bio",rules:[{required:!0,message:"Please input your Bio Data"}],children:(0,x.jsx)(e,{rows:4,placeholder:"Your Bio data here..."})})}),(0,x.jsx)(d.Z,{xs:24,md:12,children:(0,x.jsx)(h.Z.Item,{name:"birthdate",rules:[{required:!0,message:"Please input Date!"}],children:(0,x.jsx)(Z.Z,{style:{width:"100%"},format:"DD M YYYY"})})}),(0,x.jsx)(d.Z,{xs:24,md:12,children:(0,x.jsx)(h.Z.Item,{name:"country",rules:[{required:!0,message:"Please input Your Country!"}],children:(0,x.jsx)(b.Z,{showSearch:!0,style:{width:"100%"},placeholder:"Select a country",optionFilterProp:"children",filterOption:function(a,e){return e.children.toLowerCase().indexOf(a.toLowerCase())>=0},children:k.map((function(e,l){return(0,x.jsx)(a,{value:e.name,children:e.name},l)}))})})}),(0,x.jsx)(d.Z,{xs:24,md:12,children:(0,x.jsx)(h.Z.Item,{name:"website",rules:[{required:!0,message:"Please input your Website!"}],children:(0,x.jsx)(t.Z,{placeholder:"Website"})})}),(0,x.jsx)(d.Z,{xs:24,md:12,children:(0,x.jsx)(h.Z.Item,{name:"phone",rules:[{required:!0,message:"Please input your Phone number!"}],children:(0,x.jsx)(t.Z,{placeholder:"Phone Number"})})}),(0,x.jsx)(d.Z,{xs:24,md:24,children:(0,x.jsxs)(h.Z.Item,{shouldUpdate:!0,className:"user-profile-group-btn",children:[(0,x.jsx)(m.Z,{type:"primary",htmlType:"submit",children:"Save Changes"}),(0,x.jsx)(m.Z,{htmlType:"cancel",children:"Cancel"})]})})]})]})},y=l(25581),N=function(a){var e=a.notification;function l(a){console.log("switch to ".concat(a))}return(0,x.jsxs)(h.Z,{className:"user-profile-form",initialValues:{remember:!0},onFinish:function(a){console.log("Success:",a)},onFinishFailed:function(a){console.log("Failed:",a)},children:[(0,x.jsxs)("div",{className:"profile-notification",children:[(0,x.jsx)("h3",{className:"user-profile-form-title",children:(0,x.jsx)(g.Z,{id:"userProfile.activity"})}),(0,x.jsx)("div",{className:"notification-list",children:e.activity.map((function(a,e){return(0,x.jsxs)("div",{className:"notification-list-item",children:[(0,x.jsx)(y.Z,{defaultChecked:a.defaultChecked,onChange:l}),(0,x.jsx)("label",{className:"label",children:a.title})]},e)}))})]}),(0,x.jsxs)("div",{className:"profile-notification",children:[(0,x.jsx)("h3",{className:"user-profile-form-title",children:(0,x.jsx)(g.Z,{id:"userProfile.application"})}),(0,x.jsx)("div",{className:"notification-list",children:e.application.map((function(a,e){return(0,x.jsxs)("div",{className:"notification-list-item",children:[(0,x.jsx)(y.Z,{defaultChecked:a.defaultChecked,onChange:l}),(0,x.jsx)("label",{className:"label",children:a.title})]},e)}))})]}),(0,x.jsxs)(h.Z.Item,{shouldUpdate:!0,className:"user-profile-group-btn",children:[(0,x.jsx)(m.Z,{type:"primary",htmlType:"submit",children:"Save Changes"}),(0,x.jsx)(m.Z,{htmlType:"cancel",children:"Cancel"})]})]})},P=l(16546),w=l(45987),I=l(2730),C=l(28182),S=["title","extra","children","cover","className","actions","heightFull"],F=function(a){var e=a.title,l=a.extra,i=a.children,n=a.cover,r=a.className,h=a.actions,p=a.heightFull,m=(0,w.Z)(a,S);return(0,x.jsx)(I.Z,(0,s.Z)((0,s.Z)({className:(0,C.Z)("card",{heightFull:p},r),title:e,extra:l||null,cover:n,actions:h,bordered:!1},m),{},{children:i}))},z=F;F.defaultProps={};var T=function(a){var e=a.member,l=(0,i.useState)(!1),n=(0,r.Z)(l,2),s=n[0],h=n[1];return(0,x.jsxs)(z,{heightFull:!0,className:"member-card",children:[(0,x.jsx)("h4",{className:"member-card-title",children:e.title}),s?(0,x.jsx)("div",{className:"member-info",children:(0,x.jsx)("div",{className:"member-info-content",children:(0,x.jsx)(m.Z,{type:"primary",ghost:!0,onClick:function(){h(!s)},children:"Connect"})})}):(0,x.jsxs)("div",{className:"member-info",children:[(0,x.jsx)("div",{className:"member-thumb",children:(0,x.jsx)(p.C,{src:e.image,alt:e.username})}),(0,x.jsxs)("div",{className:"member-info-content",children:[(0,x.jsx)("h5",{children:e.username}),(0,x.jsx)(m.Z,{type:"primary",className:"disconnect-btn",onClick:function(){h(!s)},children:"Disconnect"})]})]})]})},K=function(a){var e=a.profileConnection;return(0,x.jsxs)("div",{className:"profile-connection",children:[(0,x.jsx)("h3",{className:"profile-connection-title",children:(0,x.jsx)(g.Z,{id:"userProfile.profileConnections"})}),(0,x.jsx)(P.Z,{gutter:16,children:e.map((function(a,e){return(0,x.jsx)(d.Z,{xs:24,md:12,lg:8,xl:12,xxl:8,children:(0,x.jsx)("div",{className:"member-item",children:(0,x.jsx)(T,{member:a})})},e)}))})]})},q=function(a){var e=a.socialLink;return(0,x.jsxs)(h.Z,{className:"user-profile-form",initialValues:{remember:!0},onFinish:function(a){console.log("Success:",a)},onFinishFailed:function(a){console.log("Failed:",a)},children:[(0,x.jsx)("h3",{className:"user-profile-form-title",children:(0,x.jsx)(g.Z,{id:"userProfile.socialLink"})}),(0,x.jsxs)(P.Z,{gutter:16,children:[(0,x.jsx)(d.Z,{xs:24,md:12,children:(0,x.jsx)(h.Z.Item,{name:"twitter",rules:[{required:!0,message:"Please Enter your Twitter url"}],children:(0,x.jsx)(t.Z,{placeholder:"Twitter"})})}),(0,x.jsx)(d.Z,{xs:24,md:12,children:(0,x.jsx)(h.Z.Item,{name:"facebook",rules:[{required:!0,message:"Please Enter your Facebook url"}],children:(0,x.jsx)(t.Z,{placeholder:"Facebook"})})}),(0,x.jsx)(d.Z,{xs:24,md:12,children:(0,x.jsx)(h.Z.Item,{name:"google",rules:[{required:!0,message:"Please Enter your Google url"}],children:(0,x.jsx)(t.Z,{placeholder:"Google"})})}),(0,x.jsx)(d.Z,{xs:24,md:12,children:(0,x.jsx)(h.Z.Item,{name:"linkedIn",rules:[{required:!0,message:"Please Enter your LinkedIn url"}],children:(0,x.jsx)(t.Z,{placeholder:"LinkedIn"})})}),(0,x.jsx)(d.Z,{xs:24,md:12,children:(0,x.jsx)(h.Z.Item,{name:"instagram",rules:[{required:!0,message:"Please Enter your Instagram url"}],children:(0,x.jsx)(t.Z,{placeholder:"Instagram"})})}),(0,x.jsx)(d.Z,{xs:24,md:12,children:(0,x.jsx)(h.Z.Item,{name:"quora",rules:[{required:!0,message:"Please Enter your Quora url"}],children:(0,x.jsx)(t.Z,{placeholder:"Quora"})})})]}),(0,x.jsx)(K,{profileConnection:e}),(0,x.jsxs)(h.Z.Item,{shouldUpdate:!0,className:"user-profile-group-btn",children:[(0,x.jsx)(m.Z,{type:"primary",htmlType:"submit",children:"Save Changes"}),(0,x.jsx)(m.Z,{htmlType:"cancel",children:"Cancel"})]})]})},A=l(58617),B=l(78820),E=l(56355),L=l(84373),M={member:[{id:1,title:"Your Twitter",image:"/assets/images/avatar/A4.jpg",name:"@Johndeuo",email:""},{id:2,title:"Your Github",image:"/assets/images/avatar/A6.jpg",name:"@Johndeuo",email:""},{id:3,title:"Your Facebook",image:"/assets/images/avatar/A2.jpg",name:"King Rox",email:""},{id:4,title:"Your Google",image:"/assets/images/avatar/A14.jpg",name:"",email:"johndeuo@gmail.com"},{id:5,title:"Your Github",image:"/assets/images/avatar/A6.jpg",name:"@Johndeuo",email:""},{id:6,title:"Your Facebook",image:"/assets/images/avatar/A2.jpg",name:"King Rox",email:""}],notification:{activity:[{id:1,title:"Email me when someone comments on my article",defaultChecked:!0},{id:2,title:"Email me when someone answers on my form",defaultChecked:!0},{id:3,title:"Email me when someone answers on my form",defaultChecked:!1}],application:[{id:1,title:"News and announcements",defaultChecked:!1},{id:2,title:"Weekly product updates",defaultChecked:!0},{id:3,title:"Weekly blog digest",defaultChecked:!1}]}},G=function(){var a=n.Z.TabPane;return(0,x.jsx)("div",{className:"user-profile-container",children:(0,x.jsxs)(n.Z,{className:"user-profile-tabs",defaultActiveKey:"1",tabPosition:"left",children:[(0,x.jsx)(a,{tab:(0,x.jsxs)("span",{className:"user-profile-icon",children:[(0,x.jsx)(A._K$,{className:"icon"}),(0,x.jsx)("span",{children:(0,x.jsx)(g.Z,{id:"userProfile.personalInfo"})})]}),children:(0,x.jsx)(j,{})},"1"),(0,x.jsx)(a,{tab:(0,x.jsxs)("span",{className:"user-profile-icon",children:[(0,x.jsx)(B.oF6,{className:"icon"}),(0,x.jsx)("span",{children:(0,x.jsx)(g.Z,{id:"userProfile.changePassword"})})]}),children:(0,x.jsx)(f,{})},"2"),(0,x.jsx)(a,{tab:(0,x.jsxs)("span",{className:"user-profile-icon",children:[(0,x.jsx)(E.ExJ,{className:"icon"}),(0,x.jsx)("span",{children:(0,x.jsx)(g.Z,{id:"userProfile.information"})})]}),children:(0,x.jsx)(v,{})},"3"),(0,x.jsx)(a,{tab:(0,x.jsxs)("span",{className:"user-profile-icon",children:[(0,x.jsx)(E.AEx,{className:"icon"}),(0,x.jsx)("span",{children:(0,x.jsx)(g.Z,{id:"userProfile.social"})})]}),children:(0,x.jsx)(q,{socialLink:M.member})},"4"),(0,x.jsx)(a,{tab:(0,x.jsxs)("span",{className:"user-profile-icon",children:[(0,x.jsx)(L.rCk,{className:"icon"}),(0,x.jsx)("span",{children:(0,x.jsx)(g.Z,{id:"userProfile.notification"})})]}),children:(0,x.jsx)(N,{notification:M.notification})},"5")]})})}}}]);
//# sourceMappingURL=440.5173f2b8.chunk.js.map