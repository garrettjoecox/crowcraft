(this.webpackJsonpcrowcraft=this.webpackJsonpcrowcraft||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var l={};t.r(l),t.d(l,"capitalize",(function(){return d}));var n=t(1),r=t.n(n),i=t(8),s=t.n(i),o=(t(14),t(15),t(9)),c=t(4),m=t(2),d=function(e){return e[0].toUpperCase()+e.slice(1)},h=t(0),w=function(e){var a=e.name,t=e.onChoiceCanceled;return Object(h.jsx)("div",{className:"bg-verdigris pa2 dib",children:Object(h.jsxs)("div",{className:"flex items-center space-between",children:[Object(h.jsx)("div",{children:l.capitalize(a)}),Object(h.jsx)("div",{className:"pl2 bittersweet fw8 pointer",onClick:t,children:"X"})]})})},p=function(e){var a=e.name,t=e.choice,n=e.onStepCanceled;return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"mb1",children:l.capitalize(a)}),Object(h.jsx)("div",{children:Object(h.jsx)(w,{name:t.name,onChoiceCanceled:n})})]})},u=function(e){var a=e.name;return Object(h.jsx)("div",{className:"bg-verdigris pa2 dib pointer",children:Object(h.jsx)("div",{className:"flex items-center space-between",children:Object(h.jsx)("div",{children:l.capitalize(a)})})})},b=["a","e","i","o","u"],g=function(e){var a=e.name,t=e.options,l=e.onStepCompleted;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"mb1",children:["Choose ",b.includes(a[0])?"an":"a"," ",a]}),Object(h.jsx)("div",{className:"flex",children:t.map((function(e){return Object(h.jsx)("div",{className:"mr2",onClick:function(){return l(e)},children:Object(h.jsx)(u,{name:e.name})},e.id)}))})]})},j=function e(a,t,l){Object(m.a)(this,e),this.id=a,this.name=t,this.nextFilterId=l},f=function e(a,t,l){Object(m.a)(this,e),this.id=a,this.name=t,this.optionIds=l},v={armor:new j("armor","armor","armorClass"),weapon:new j("weapon","weapon","weaponClass"),leather:new j("leather","leather","leatherArmor"),mail:new j("mail","mail","mailArmor"),plate:new j("plate","plate","plateArmor"),oneHanded:new j("oneHanded","one handed","oneHandedWeapon"),twoHanded:new j("twoHanded","two handed","twoHandedWeapon"),ranged:new j("ranged","ranged","rangedWeapon"),shield:new j("shield","shield","shieldWeapon"),magical:new j("magical","magical","magicalWeapon"),leatherBoots:new j("leatherBoots","leather boots",null),leatherCap:new j("leatherCap","leather cap",null),leatherGloves:new j("leatherGloves","leather gloves",null),leatherTunic:new j("leatherTunic","leather tunic",null),mailBoots:new j("mailBoots","mail boots",null),mailCoif:new j("mailCoif","mail coif",null),mailGloves:new j("mailGloves","mail gloves",null),mailHauberk:new j("mailHauberk","mail hauberk",null),plateBoots:new j("plateBoots","plate boots",null),plateBreastplate:new j("plateBreastplate","plate breastplate",null),plateGloves:new j("plateGloves","plate gloves",null),plateHelmet:new j("plateHelmet","plate helmet",null),axe:new j("axe","axe",null),dagger:new j("dagger","dagger",null),mace:new j("mace","mace",null),rapier:new j("rapier","rapier",null),shortSword:new j("shortSword","short sword",null),greatAxe:new j("greatAxe","great axe",null),greatMace:new j("greatMace","great mace",null),greatSword:new j("greatSword","great sword",null),longsword:new j("longsword","longsword",null),mysticalThrowingHammer:new j("mysticalThrowingHammer","mystical throwing hammer",null),pistol:new j("pistol","pistol",null),sickle:new j("sickle","sickle",null),smallBuckler:new j("smallBuckler","small buckler",null),mediumShield:new j("mediumShield","medium shield",null),towerShield:new j("towerShield","tower shield",null),frostcaster:new j("frostcaster","frostcaster",null)},x={craftingType:new f("craftingType","crafting type",["armor","weapon"]),armorClass:new f("armorClass","armor class",["leather","mail","plate"]),weaponClass:new f("weaponClass","weapon class",["oneHanded","twoHanded","ranged","shield","magical"]),leatherArmor:new f("leatherArmor","armor",["leatherBoots","leatherCap","leatherGloves","leatherTunic"]),mailArmor:new f("mailArmor","armor",["mailBoots","mailCoif","mailGloves","mailHauberk"]),plateArmor:new f("plateArmor","armor",["plateBoots","plateBreastplate","plateGloves","plateHelmet"]),oneHandedWeapon:new f("oneHandedWeapon","weapon",["axe","dagger","mace","rapier","shortSword"]),twoHandedWeapon:new f("twoHandedWeapon","weapon",["greatAxe","greatMace","greatSword","longsword"]),rangedWeapon:new f("rangedWeapon","weapon",["mysticalThrowingHammer","pistol","sickle"]),shieldWeapon:new f("shieldWeapon","weapon",["smallBuckler","mediumShield","towerShield"]),magicalWeapon:new f("magicalWeapon","weapon",["frostcaster"])},O=t(7),C=function e(a,t,l,n){Object(m.a)(this,e),this.id=a,this.name=t,this.rarities=l,this.craftingMaterials=n},S="white",B="green",H="blue",k="purple",N="orange",y={leatherBoots:new C("leatherBoots","leather boots",[S,B,H,k,N],[]),leatherCap:new C("leatherCap","leather cap",[S,B,H,k,N],[]),leatherGloves:new C("leatherGloves","leather gloves",[S,B,H,k,N],[]),leatherTunic:new C("leatherTunic","leather tunic",[S,B,H,k,N],[]),mailBoots:new C("mailBoots","mail boots",[S,B,H,k,N],[]),mailCoif:new C("mailCoif","mail coif",[S,B,H,k,N],[]),mailGloves:new C("mailGloves","mail gloves",[S,B,H,k,N],[]),mailHauberk:new C("mailHauberk","mail hauberk",[S,B,H,k,N],[]),plateBoots:new C("plateBoots","plate boots",[S,B,H,k,N],[]),plateBreastplate:new C("plateBreastplate","plate breastplate",["white","green","blue","purple","orange"],[]),plateGloves:new C("plateGloves","plate gloves",[S,B,H,k,N],[]),plateHelmet:new C("plateHelmet","plate helmet",[S,B,H,k,N],[])},T={axe:new C("axe","axe",[S,B,H,k,N],[]),dagger:new C("dagger","dagger",[S,B,H,k,N],[]),mace:new C("mace","mace",[S,B,H,k,N],[]),rapier:new C("rapier","rapier",[S,B,H,k,N],[]),shortSword:new C("shortSword","short sword",[S,B,H,k,N],[]),greatAxe:new C("greatAxe","great axe",[S,B,H,k,N],[]),greatMace:new C("greatMace","great mace",[S,B,H,k,N],[]),greatSword:new C("greatSword","great sword",[S,B,H,k,N],[]),longsword:new C("longsword","longsword",[S,B,H,k,N],[]),mysticalThrowingHammer:new C("mysticalThrowingHammer","mystical throwing hammer",[S,B,H,k,N],[]),pistol:new C("pistol","pistol",[S,B,H,k,N],[]),sickle:new C("sickle","sickle",[S,B,H,k,N],[]),smallBuckler:new C("smallBuckler","small buckler",[S,B,H,k,N],[]),mediumShield:new C("mediumShield","medium shield",[S,B,H,k,N],[]),towerShield:new C("towerShield","tower shield",[S,B,H,k,N],[]),frostcaster:new C("frostcaster","frostcaster",[S,B,H,k,N],[])},G=Object(O.a)(Object(O.a)({},y),T),W=function e(a,t){Object(m.a)(this,e),this.name=a.name,this.filter=a,this.choice=t},A=function(){var e=Object(n.useState)([]),a=Object(c.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(x.craftingType),i=Object(c.a)(r,2),s=i[0],m=i[1],d=Object(n.useState)(null),w=Object(c.a)(d,2),u=w[0],b=w[1],f=Object(n.useState)(null),O=Object(c.a)(f,2),C=O[0],S=O[1];return Object(h.jsxs)("div",{className:"mv3",children:[t.map((function(e,a){return Object(h.jsx)("div",{className:"mb3",children:Object(h.jsx)(p,{name:e.name,choice:e.choice,onStepCanceled:(n=a,function(){l(t.slice(0,n)),m(t[n].filter),b(null)})})},e.filter.id);var n})),s?Object(h.jsx)("div",{className:"mb3",children:Object(h.jsx)(g,{name:s.name,options:s.optionIds.map((function(e){return v[e]})),onStepCompleted:function(e){l([].concat(Object(o.a)(t),[new W(s,e)])),m(x[e.nextFilterId]),e.nextFilterId||b(G[e.id])}})}):null,u&&!C?Object(h.jsx)("div",{className:"mb3",children:Object(h.jsx)(g,{name:"rarity",options:u.rarities.map((function(e){return new j(e,e,null)})),onStepCompleted:function(e){S(e)}})}):null,u&&C?Object(h.jsx)("div",{className:"mb3",children:Object(h.jsx)(p,{name:"rarity",choice:C,onStepCanceled:function(){S(null)}})}):null]})},M=t.p+"static/media/logo.8e1908b1.png",F=function(e){var a=e.className;return Object(h.jsxs)("div",{className:a+" flex items-center bg-mauve-taupe",children:[Object(h.jsx)("img",{src:M,alt:"Crowcraft logo",className:"h-100"}),Object(h.jsx)("div",{className:"pl3",children:"Crowcraft"})]})},I=function(e){var a=e.className,t=e.children;return Object(h.jsx)("div",{className:a,children:t})},z=function(e){var a=e.className;return Object(h.jsxs)("div",{className:a+" flex flex-column items-center justify-center f5 bg-bittersweet light-yellow",children:[Object(h.jsx)("div",{children:"Crowcraft - Made by Guike for Valeria"}),Object(h.jsx)("div",{children:"With the contribution of Bluezinhaaa, Shilana, Upem and BeardslayTTV"})]})},J=function(e){var a=e.children;return Object(h.jsxs)("div",{className:"bg-charcoal peach-puff",children:[Object(h.jsx)(F,{className:"h3 nmb5 ph7"}),Object(h.jsx)(I,{className:"pv5 ph7 min-vh-100",children:a}),Object(h.jsx)(z,{className:"h3 nmt5 ph7"})]})},L=function(){return Object(h.jsx)(J,{children:Object(h.jsx)(A,{})})},P=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,r=a.getLCP,i=a.getTTFB;t(e),l(e),n(e),r(e),i(e)}))};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root")),P()}},[[17,1,2]]]);
//# sourceMappingURL=main.da8b9c47.chunk.js.map