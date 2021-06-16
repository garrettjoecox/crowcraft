(this.webpackJsonpcrowcraft=this.webpackJsonpcrowcraft||[]).push([[0],[function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return f})),n.d(t,"f",(function(){return d})),n.d(t,"b",(function(){return b})),n.d(t,"e",(function(){return j})),n.d(t,"d",(function(){return v}));var a=n(5),i=n(4),r=n(15),c=n(12),s=n(6),l=n(3),o=n(7),u=function CraftingMaterial(e,t){Object(l.a)(this,CraftingMaterial),this.quantity=e,this.item=t},m=function Craft(e,t){Object(l.a)(this,Craft),this.craftingMaterials=e,this.craftingResult=t},f=function(){function Item(e,t,n,a,i){Object(l.a)(this,Item),this.name=e,this.professions=t,this.rarities=n,this.craftingMaterials=a,this.craftingQuantity=i,this.id=o.b.decapitalize(this.constructor.name),this.craftingRank=this.getCraftingRank(),this.rarity=n[0],this.isCraftable=!0}return Object(s.a)(Item,[{key:"createNew",value:function createNew(){return new this.constructor}},{key:"setRarity",value:function setRarity(e){this.rarities.includes(e)?this.rarity=e:this.rarity=this.rarities[0];var t,n=Object(c.a)(this.craftingMaterials);try{for(n.s();!(t=n.n()).done;){t.value.item.setRarity(this.rarity)}}catch(a){n.e(a)}finally{n.f()}}},{key:"isCustomizable",value:function isCustomizable(){return this.getCustomizableComponents().length>0}},{key:"getCustomizableComponents",value:function getCustomizableComponents(){var e,t=[],n=Object(c.a)(this.craftingMaterials);try{for(n.s();!(e=n.n()).done;){var a=e.value;t=t.concat(a.item.getCustomizableComponents())}}catch(i){n.e(i)}finally{n.f()}return t}},{key:"getCraftingRank",value:function getCraftingRank(){return Math.max.apply(Math,Object(r.a)(this.craftingMaterials.map((function(e){return e.item.craftingRank}))))+1}},{key:"getCraftingRundown",value:function getCraftingRundown(){for(var e=[new m(this.craftingMaterials,new u(1,this))],t=Object(r.a)(this.craftingMaterials),n=this.craftingRank;n>1;){n-=1,t.sort(h);for(var a={},i=0;t[i].item.craftingRank===n;i++){var s=t[i];void 0===a[s.item.id]?a[s.item.id]=new u(s.quantity,s.item):a[s.item.id].quantity+=s.quantity}t=t.slice(i,t.length);for(var l=function _loop(){var n=f[o],a=Math.ceil(n.quantity/n.item.craftingQuantity),i=n.item.craftingMaterials.map((function(e){return new u(e.quantity*a,e.item)}));e.push(new m(i,new u(a*n.item.craftingQuantity,n.item))),t=t.concat(i)},o=0,f=Object.values(a);o<f.length;o++)l()}e.reverse();var d,b={},j=Object(c.a)(t);try{for(j.s();!(d=j.n()).done;){var v=d.value;void 0===b[v.item.id]?b[v.item.id]=new u(v.quantity,v.item):b[v.item.id].quantity+=v.quantity}}catch(O){j.e(O)}finally{j.f()}return{crafts:e,rawMaterials:Object.values(b)}}}]),Item}(),d=function(e){Object(a.a)(RawMaterial,e);var t=Object(i.a)(RawMaterial);function RawMaterial(e,n,a,i,r,c){var s;return Object(l.a)(this,RawMaterial),(s=t.call(this,e,n,a,i,r,c)).isCraftable=!1,s}return Object(s.a)(RawMaterial,[{key:"getCraftingRank",value:function getCraftingRank(){return 0}}]),RawMaterial}(f),b=function(e){Object(a.a)(CustomizableComponent,e);var t=Object(i.a)(CustomizableComponent);function CustomizableComponent(){return Object(l.a)(this,CustomizableComponent),t.apply(this,arguments)}return Object(s.a)(CustomizableComponent,[{key:"getCustomizableComponents",value:function getCustomizableComponents(){return[this]}},{key:"getCustomizationOptions",value:function getCustomizationOptions(){throw new Error("".concat(this.id," must implement getCustomizationOptions"))}},{key:"getCustomizationEffect",value:function getCustomizationEffect(){throw new Error("".concat(this.id," must implement getCustomizationEffect"))}},{key:"customize",value:function customize(e){this.id=e.id,this.name=e.name,this.craftingMaterials=e.craftingMaterials,this.setRarity(this.rarity)}}]),CustomizableComponent}(f),j={Poor:"grey",Common:"white",Uncommon:"green",Rare:"blue",Epic:"purple",Legendary:"orange"},v={Alchemist:"alchemist",Armorsmith:"armorsmith",Jewelcrafter:"jewelcrafter",Leatherworker:"leatherworker",Necromancer:"necromancer",Runemaker:"runemaker",Stonemason:"stonemason",Weaponsmith:"weaponsmith",Woodworker:"woodworker"},h=function compareCraftingRank(e,t){return e.item.craftingRank>t.item.craftingRank?-1:e.item.craftingRank<t.item.craftingRank?1:0}},,,,,,,function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var a={};n.r(a),n.d(a,"capitalize",(function(){return r})),n.d(a,"decapitalize",(function(){return c}));var i={};n.r(i),n.d(i,"ascending",(function(){return o})),n.d(i,"descending",(function(){return u}));var r=function capitalize(e){return e[0].toUpperCase()+e.slice(1)},c=function decapitalize(e){return e[0].toLowerCase()+e.slice(1)},s=1,l=-1,o=function ascending(e){return m(s,e)},u=function descending(e){return m(l,e)},m=function sort(e,t){return function(n,a){return t(n)<t(a)?-1*e:t(n)>t(a)?1*e:0}}},,function(e,t,n){"use strict";n.r(t),n.d(t,"Ore",(function(){return s}));var a=n(3),i=n(5),r=n(4),c=n(0),s=function(e){Object(i.a)(Ore,e);var t=Object(r.a)(Ore);function Ore(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ore",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[c.e.Poor,c.e.Common,c.e.Uncommon,c.e.Rare,c.e.Epic,c.e.Legendary],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;return Object(a.a)(this,Ore),t.call(this,e,n,i,r,s)}return Ore}(c.f)},function(e,t,n){"use strict";n.r(t),n.d(t,"Coal",(function(){return o}));var a=n(3),i=n(5),r=n(4),c=n(0),s=n(29),l=n(14),o=function(e){Object(i.a)(Coal,e);var t=Object(r.a)(Coal);function Coal(){return Object(a.a)(this,Coal),t.call(this,"coal",[c.d.Armorsmith,c.d.Weaponsmith],[c.e.Common],[new c.a(3,new s.Wood),new c.a(3,new l.EtherealDust)],5)}return Coal}(c.c)},,,,function(e,t,n){"use strict";n.r(t),n.d(t,"EtherealDust",(function(){return s}));var a=n(3),i=n(5),r=n(4),c=n(0),s=function(e){Object(i.a)(EtherealDust,e);var t=Object(r.a)(EtherealDust);function EtherealDust(){return Object(a.a)(this,EtherealDust),t.call(this,"ethereal dust",[],[c.e.Common],[],1)}return EtherealDust}(c.f)},,,,,function(e,t,n){"use strict";n.r(t),n.d(t,"Hide",(function(){return s}));var a=n(3),i=n(5),r=n(4),c=n(0),s=function(e){Object(i.a)(Hide,e);var t=Object(r.a)(Hide);function Hide(){return Object(a.a)(this,Hide),t.call(this,"hide",[],[c.e.Common,c.e.Uncommon,c.e.Rare,c.e.Epic,c.e.Legendary],[],1)}return Hide}(c.f)},function(e,t,n){"use strict";n.r(t),n.d(t,"MetalScales",(function(){return j}));var a=n(3),i=n(6),r=n(5),c=n(4),s=n(0),l=n(9),o=n(24),u=n(25),m=n(26),f=n(27),d=n(28),b=n(10),j=function(e){Object(r.a)(MetalScales,e);var t=Object(c.a)(MetalScales);function MetalScales(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"metal scales",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[new s.a(16,new m.Iron),new s.a(10,new l.Ore),new s.a(10,new l.Ore),new s.a(12,new b.Coal)];return Object(a.a)(this,MetalScales),t.call(this,e,[s.d.Armorsmith,s.d.Weaponsmith],[s.e.Common,s.e.Uncommon,s.e.Rare,s.e.Epic,s.e.Legendary],n,1)}return Object(i.a)(MetalScales,[{key:"getCustomizationOptions",value:function getCustomizationOptions(){return[new v,new h,new O,new g,new p,new w,new C,new S,new M,new x]}}]),MetalScales}(s.b),v=function(e){Object(r.a)(SteelMetalScales,e);var t=Object(c.a)(SteelMetalScales);function SteelMetalScales(){return Object(a.a)(this,SteelMetalScales),t.call(this,"metal scales (steel)",[new s.a(16,new m.Iron),new s.a(10,new u.Copper),new s.a(10,new m.Iron),new s.a(12,new b.Coal)])}return Object(i.a)(SteelMetalScales,[{key:"getCustomizationEffect",value:function getCustomizationEffect(){return"bleed resistance"}}]),SteelMetalScales}(j),h=function(e){Object(r.a)(DarkBronzeMetalScales,e);var t=Object(c.a)(DarkBronzeMetalScales);function DarkBronzeMetalScales(){return Object(a.a)(this,DarkBronzeMetalScales),t.call(this,"metal scales (dark bronze)",[new s.a(16,new m.Iron),new s.a(10,new u.Copper),new s.a(10,new d.Tin),new s.a(12,new b.Coal)])}return Object(i.a)(DarkBronzeMetalScales,[{key:"getCustomizationEffect",value:function getCustomizationEffect(){return"fire resistance"}}]),DarkBronzeMetalScales}(j),O=function(e){Object(r.a)(BrightSteelMetalScales,e);var t=Object(c.a)(BrightSteelMetalScales);function BrightSteelMetalScales(){return Object(a.a)(this,BrightSteelMetalScales),t.call(this,"metal scales (bright steel)",[new s.a(16,new m.Iron),new s.a(10,new u.Copper),new s.a(10,new f.Silver),new s.a(12,new b.Coal)])}return Object(i.a)(BrightSteelMetalScales,[{key:"getCustomizationEffect",value:function getCustomizationEffect(){return"ice resistance"}}]),BrightSteelMetalScales}(j),g=function(e){Object(r.a)(AureliumSteelMetalScales,e);var t=Object(c.a)(AureliumSteelMetalScales);function AureliumSteelMetalScales(){return Object(a.a)(this,AureliumSteelMetalScales),t.call(this,"metal scales (aurelium steel)",[new s.a(16,new m.Iron),new s.a(10,new u.Copper),new s.a(10,new o.Aurelium),new s.a(12,new b.Coal)])}return Object(i.a)(AureliumSteelMetalScales,[{key:"getCustomizationEffect",value:function getCustomizationEffect(){return"electricity resistance"}}]),AureliumSteelMetalScales}(j),p=function(e){Object(r.a)(InvarMetalScales,e);var t=Object(c.a)(InvarMetalScales);function InvarMetalScales(){return Object(a.a)(this,InvarMetalScales),t.call(this,"metal scales (invar)",[new s.a(16,new m.Iron),new s.a(10,new m.Iron),new s.a(10,new d.Tin),new s.a(12,new b.Coal)])}return Object(i.a)(InvarMetalScales,[{key:"getCustomizationEffect",value:function getCustomizationEffect(){return"nature resistance"}}]),InvarMetalScales}(j),w=function(e){Object(r.a)(SilveredIronMetalScales,e);var t=Object(c.a)(SilveredIronMetalScales);function SilveredIronMetalScales(){return Object(a.a)(this,SilveredIronMetalScales),t.call(this,"metal scales (silvered iron)",[new s.a(16,new m.Iron),new s.a(10,new m.Iron),new s.a(10,new f.Silver),new s.a(12,new b.Coal)])}return Object(i.a)(SilveredIronMetalScales,[{key:"getCustomizationEffect",value:function getCustomizationEffect(){return"poison resistance"}}]),SilveredIronMetalScales}(j),C=function(e){Object(r.a)(TigerIronMetalScales,e);var t=Object(c.a)(TigerIronMetalScales);function TigerIronMetalScales(){return Object(a.a)(this,TigerIronMetalScales),t.call(this,"metal scales (tiger iron)",[new s.a(16,new m.Iron),new s.a(10,new m.Iron),new s.a(10,new o.Aurelium),new s.a(12,new b.Coal)])}return Object(i.a)(TigerIronMetalScales,[{key:"getCustomizationEffect",value:function getCustomizationEffect(){return"disease resistance"}}]),TigerIronMetalScales}(j),S=function(e){Object(r.a)(BlueSteelMetalScales,e);var t=Object(c.a)(BlueSteelMetalScales);function BlueSteelMetalScales(){return Object(a.a)(this,BlueSteelMetalScales),t.call(this,"metal scales (blue steel)",[new s.a(16,new m.Iron),new s.a(10,new d.Tin),new s.a(10,new f.Silver),new s.a(12,new b.Coal)])}return Object(i.a)(BlueSteelMetalScales,[{key:"getCustomizationEffect",value:function getCustomizationEffect(){return"slashing resistance"}}]),BlueSteelMetalScales}(j),M=function(e){Object(r.a)(ForestAureliumMetalScales,e);var t=Object(c.a)(ForestAureliumMetalScales);function ForestAureliumMetalScales(){return Object(a.a)(this,ForestAureliumMetalScales),t.call(this,"metal scales (forest aurelium)",[new s.a(16,new m.Iron),new s.a(10,new d.Tin),new s.a(10,new o.Aurelium),new s.a(12,new b.Coal)])}return Object(i.a)(ForestAureliumMetalScales,[{key:"getCustomizationEffect",value:function getCustomizationEffect(){return"crushing resistance"}}]),ForestAureliumMetalScales}(j),x=function(e){Object(r.a)(DarkElectrumMetalScales,e);var t=Object(c.a)(DarkElectrumMetalScales);function DarkElectrumMetalScales(){return Object(a.a)(this,DarkElectrumMetalScales),t.call(this,"metal scales (dark electrum)",[new s.a(16,new m.Iron),new s.a(10,new f.Silver),new s.a(10,new o.Aurelium),new s.a(12,new b.Coal)])}return Object(i.a)(DarkElectrumMetalScales,[{key:"getCustomizationEffect",value:function getCustomizationEffect(){return"piercing resistance"}}]),DarkElectrumMetalScales}(j)},,,,function(e,t,n){"use strict";n.r(t),n.d(t,"Aurelium",(function(){return s}));var a=n(3),i=n(5),r=n(4),c=n(0),s=function(e){Object(i.a)(Aurelium,e);var t=Object(r.a)(Aurelium);function Aurelium(){return Object(a.a)(this,Aurelium),t.call(this,"aurelium",[],[c.e.Common,c.e.Uncommon,c.e.Rare,c.e.Epic,c.e.Legendary],[],1)}return Aurelium}(n(9).Ore)},function(e,t,n){"use strict";n.r(t),n.d(t,"Copper",(function(){return s}));var a=n(3),i=n(5),r=n(4),c=n(0),s=function(e){Object(i.a)(Copper,e);var t=Object(r.a)(Copper);function Copper(){return Object(a.a)(this,Copper),t.call(this,"copper",[],[c.e.Common,c.e.Uncommon,c.e.Rare,c.e.Epic,c.e.Legendary],[],1)}return Copper}(n(9).Ore)},function(e,t,n){"use strict";n.r(t),n.d(t,"Iron",(function(){return s}));var a=n(3),i=n(5),r=n(4),c=n(0),s=function(e){Object(i.a)(Iron,e);var t=Object(r.a)(Iron);function Iron(){return Object(a.a)(this,Iron),t.call(this,"iron",[],[c.e.Common,c.e.Uncommon,c.e.Rare,c.e.Epic,c.e.Legendary],[],1)}return Iron}(n(9).Ore)},function(e,t,n){"use strict";n.r(t),n.d(t,"Silver",(function(){return s}));var a=n(3),i=n(5),r=n(4),c=n(0),s=function(e){Object(i.a)(Silver,e);var t=Object(r.a)(Silver);function Silver(){return Object(a.a)(this,Silver),t.call(this,"silver",[],[c.e.Common,c.e.Uncommon,c.e.Rare,c.e.Epic,c.e.Legendary],[],1)}return Silver}(n(9).Ore)},function(e,t,n){"use strict";n.r(t),n.d(t,"Tin",(function(){return s}));var a=n(3),i=n(5),r=n(4),c=n(0),s=function(e){Object(i.a)(Tin,e);var t=Object(r.a)(Tin);function Tin(){return Object(a.a)(this,Tin),t.call(this,"tin",[],[c.e.Common,c.e.Uncommon,c.e.Rare,c.e.Epic,c.e.Legendary],[],1)}return Tin}(n(9).Ore)},function(e,t,n){"use strict";n.r(t),n.d(t,"Wood",(function(){return s}));var a=n(3),i=n(5),r=n(4),c=n(0),s=function(e){Object(i.a)(Wood,e);var t=Object(r.a)(Wood);function Wood(){return Object(a.a)(this,Wood),t.call(this,"wood",[],[c.e.Poor,c.e.Common,c.e.Uncommon,c.e.Rare,c.e.Epic,c.e.Legendary],[],1)}return Wood}(c.f)},function(e,t,n){"use strict";n.r(t),n.d(t,"LacingSinew",(function(){return o}));var a=n(3),i=n(5),r=n(4),c=n(0),s=n(31),l=n(14),o=function(e){Object(i.a)(LacingSinew,e);var t=Object(r.a)(LacingSinew);function LacingSinew(){return Object(a.a)(this,LacingSinew),t.call(this,"lacing sinew",[c.d.Leatherworker],[c.e.Common],[new c.a(3,new s.Meat),new c.a(3,new l.EtherealDust)],5)}return LacingSinew}(c.c)},function(e,t,n){"use strict";n.r(t),n.d(t,"Meat",(function(){return s}));var a=n(3),i=n(5),r=n(4),c=n(0),s=function(e){Object(i.a)(Meat,e);var t=Object(r.a)(Meat);function Meat(){return Object(a.a)(this,Meat),t.call(this,"meat",[],[c.e.Common],[],1)}return Meat}(c.f)},function(e,t,n){"use strict";n.r(t),n.d(t,"LeatherPadding",(function(){return o}));var a=n(3),i=n(5),r=n(4),c=n(0),s=n(19),l=n(30),o=function(e){Object(i.a)(LeatherPadding,e);var t=Object(r.a)(LeatherPadding);function LeatherPadding(){return Object(a.a)(this,LeatherPadding),t.call(this,"leather padding",[c.d.Leatherworker],[c.e.Common,c.e.Uncommon,c.e.Rare,c.e.Epic,c.e.Legendary],[new c.a(2,new s.Hide),new c.a(2,new s.Hide),new c.a(2,new s.Hide),new c.a(1,new l.LacingSinew)],1)}return LeatherPadding}(c.c)},,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){var a={"./aurelium.svg":47,"./aureliumSteelMetalScales.svg":48,"./blueSteelMetalScales.svg":49,"./brightSteelMetalScales.svg":50,"./coal.svg":51,"./copper.svg":52,"./darkBronzeMetalScales.svg":53,"./darkElectrumMetalScales.svg":54,"./etherealDust.svg":55,"./forestAureliumMetalScales.svg":56,"./hide.svg":57,"./invarMetalScales.svg":58,"./iron.svg":59,"./lacingSinew.svg":60,"./leatherPadding.svg":61,"./mailCoif.svg":62,"./meat.svg":63,"./metalScales.svg":64,"./ore.svg":65,"./silver.svg":66,"./silveredIronMetalScales.svg":67,"./slag.svg":68,"./steelMetalScales.svg":69,"./stone.svg":70,"./tigerIronMetalScales.svg":71,"./tin.svg":72,"./wood.svg":73};function webpackContext(e){var t=webpackContextResolve(e);return n(t)}function webpackContextResolve(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}webpackContext.keys=function webpackContextKeys(){return Object.keys(a)},webpackContext.resolve=webpackContextResolve,e.exports=webpackContext,webpackContext.id=46},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/aurelium.c6ecf8c4.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/aureliumSteelMetalScales.4a446dd5.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/blueSteelMetalScales.4a446dd5.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/brightSteelMetalScales.4a446dd5.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/coal.31f85fdb.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/copper.619de046.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/darkBronzeMetalScales.4a446dd5.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/darkElectrumMetalScales.4a446dd5.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/etherealDust.7ece8eae.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/forestAureliumMetalScales.4a446dd5.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/hide.b96386de.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/invarMetalScales.4a446dd5.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/iron.c3eb7c1b.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/lacingSinew.0fea946b.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/leatherPadding.f4f217e3.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/mailCoif.ba2079b6.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/meat.2d6900da.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/metalScales.4a446dd5.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/ore.8a9bb061.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/silver.fbb08ecc.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/silveredIronMetalScales.4a446dd5.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/slag.fce33c50.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/steelMetalScales.4a446dd5.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/stone.bcfa1ae4.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/tigerIronMetalScales.4a446dd5.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/tin.2ef0e58d.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/wood.c60d0b62.svg"},function(e,t,n){},function(e,t,n){var a={"./coal.js":10,"./ethereal-dust.js":14,"./hide.js":19,"./lacing-sinew.js":30,"./leather-padding.js":32,"./mail-coif.js":76,"./meat.js":31,"./metal-scales.js":20,"./ores/aurelium.js":24,"./ores/copper.js":25,"./ores/iron.js":26,"./ores/ore.js":9,"./ores/silver.js":27,"./ores/tin.js":28,"./wood.js":29};function webpackContext(e){var t=webpackContextResolve(e);return n(t)}function webpackContextResolve(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}webpackContext.keys=function webpackContextKeys(){return Object.keys(a)},webpackContext.resolve=webpackContextResolve,e.exports=webpackContext,webpackContext.id=75},function(e,t,n){"use strict";n.r(t),n.d(t,"MailCoif",(function(){return u}));var a=n(3),i=n(5),r=n(4),c=n(0),s=n(20),l=n(32),o=n(14),u=function(e){Object(i.a)(MailCoif,e);var t=Object(r.a)(MailCoif);function MailCoif(){return Object(a.a)(this,MailCoif),t.call(this,"mail coif",[c.d.Armorsmith,c.d.Weaponsmith],[c.e.Common,c.e.Uncommon,c.e.Rare,c.e.Epic,c.e.Legendary],[new c.a(1,new s.MetalScales),new c.a(1,new s.MetalScales),new c.a(1,new s.MetalScales),new c.a(1,new l.LeatherPadding),new c.a(6,new o.EtherealDust)],1)}return MailCoif}(c.c)},function(e,t,n){},,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a,i=n(2),r=n.n(i),c=n(22),s=n.n(c),l=(n(42),n(43),n(8)),o=n(3),u=n(7),m=n(1),f=function Choice(e){var t=e.name,n=e.onChoiceCanceled;return Object(m.jsx)("div",{className:"bg-verdigris pa2 dib",children:Object(m.jsxs)("div",{className:"flex items-center space-between",children:[Object(m.jsx)("div",{children:u.b.capitalize(t)}),Object(m.jsx)("div",{className:"pl2 bittersweet fw8 pointer",onClick:n,children:"X"})]})})},d=function CompletedStep(e){var t=e.name,n=e.choice,a=e.onStepCanceled;return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"mb1",children:u.b.capitalize(t)}),Object(m.jsx)("div",{children:Object(m.jsx)(f,{name:n.name,onChoiceCanceled:a})})]})},b=function Option(e){var t=e.name;return Object(m.jsx)("div",{className:"bg-verdigris pa2 dib pointer",children:Object(m.jsx)("div",{className:"flex items-center justify-center",children:Object(m.jsx)("div",{children:u.b.capitalize(t)})})})},j=["a","e","i","o","u"],v=function StepToComplete(e){var t=e.name,n=e.options,a=e.onStepCompleted;return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"mb1",children:["Choose ",j.includes(t[0])?"an":"a"," ",t]}),Object(m.jsx)("div",{className:"flex",children:n.map((function(e){return Object(m.jsx)("div",{className:"mr2",onClick:function onClick(){return a(e)},children:Object(m.jsx)(b,{name:e.name})},e.id)}))})]})},h=(n(45),n(12)),O={},g=n(46),p=Object(h.a)(g.keys());try{for(p.s();!(a=p.n()).done;){var w=a.value,C=w.match(/\.\/([a-zA-Z]*)\.svg$/)[1];O[C]=g(w).default}}catch(X){p.e(X)}finally{p.f()}var S,M=function getAsset(e){return O[e]||""},x=function RawMaterials(e){var t=e.rawMaterials;return Object(m.jsxs)("div",{className:"flex flex-column",children:[Object(m.jsx)("div",{className:"mb2",children:"Raw materials:"}),Object(m.jsx)("div",{className:"flex",children:t.map((function(e,t){return Object(m.jsx)("div",{className:"mr2",children:Object(m.jsx)(k,{rawMaterial:e})},"".concat(e.item.id,".").concat(t))}))})]})},k=function RawMaterial(e){var t=e.rawMaterial,n=t.quantity,a=t.item,i=u.b.capitalize(a.name);return Object(m.jsxs)("div",{className:"resource-container bg-rarity-".concat(a.rarity," | relative"),title:i,children:[Object(m.jsx)("img",{src:M(a.id),alt:i,className:"resource-image"}),Object(m.jsx)("div",{className:"resource-count | absolute cursor-default",children:n})]})},y=function CraftingSteps(e){var t=e.crafts;return Object(m.jsxs)("div",{className:"flex flex-column",children:[Object(m.jsx)("div",{className:"mb2",children:"Crafting steps:"}),Object(m.jsx)("div",{children:t.map((function(e){return Object(m.jsx)("div",{className:"mb2",children:Object(m.jsx)(z,{craft:e})},e.craftingResult.item.id)}))})]})},z=function CraftingStep(e){var t=e.craft;return Object(m.jsxs)("div",{className:"flex items-center",children:[t.craftingMaterials.map((function(e,t){return Object(m.jsxs)("div",{className:"flex items-center",children:[t>0?Object(m.jsx)("div",{className:"mh1",children:"+"}):null,Object(m.jsx)(k,{rawMaterial:e})]},"".concat(e.item.id,".").concat(t))})),Object(m.jsx)("div",{className:"mh1",children:"="}),Object(m.jsx)(k,{rawMaterial:t.craftingResult}),Object(m.jsxs)("div",{className:"ml1",children:["(",t.craftingResult.item.professions.map((function(e){return u.b.capitalize(e)})).join(" or "),")"]})]})},I=Object(i.memo)((function(e){var t=e.item,n=e.onItemCustomized,a=t.getCustomizableComponents(),r=Object(i.useState)(a.map((function(){return!1}))),c=Object(l.a)(r,2),s=c[0],o=c[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"mb2",children:"Choose your stats"}),a.map((function(e,t){return Object(m.jsx)(N,{component:e,onComponentCustomized:function onComponentCustomized(){return function onComponentCustomized(e){s[e]=!0,o(s),s.every((function(e){return e}))&&n()}(t)},componentIndex:t+1},"".concat(e.id,".").concat(t))}))]})})),N=Object(i.memo)((function(e){var t=e.component,n=e.onComponentCustomized,a=e.componentIndex,r=Object(i.useState)(t.getCustomizationOptions()),c=Object(l.a)(r,1)[0],s=Object(i.useState)(-1),o=Object(l.a)(s,2),u=o[0],f=o[1],d=Object(i.useCallback)((function(e,a){f(a),t.customize(e),n()}),[f,t,n]);return Object(m.jsxs)("div",{className:"mb3",children:[Object(m.jsxs)("div",{className:"mb1",children:[a,". ",t.name]}),Object(m.jsx)("div",{className:"flex ml3",children:c.map((function(e,t){return Object(m.jsx)("div",{className:"mr2",children:Object(m.jsx)(E,{option:e,index:t,onOptionSelected:d,isSelected:u===t})},e.id)}))})]})})),E=Object(i.memo)((function(e){var t=e.option,n=e.index,a=e.onOptionSelected,i=e.isSelected?"bg-mauve-taupe":"bg-verdigris";return Object(m.jsx)("div",{className:"".concat(i," pa2 dib pointer"),onClick:function selectOption(){a(t,n)},children:Object(m.jsx)("div",{className:"flex items-center justify-center",children:t.getCustomizationEffect()})})})),R=(n(74),n(0)),L=[],A=n(75),D=Object(h.a)(A.keys());try{for(D.s();!(S=D.n()).done;){var B=S.value,T=B.match(/\/([a-zA-Z-]*)\.js$/)[1].split("-").map(u.b.capitalize).join("");L.push(A(B)[T])}}catch(X){D.e(X)}finally{D.f()}n(77);var U=n(33),F=n.n(U),P=function TextInput(e){var t=e.id,n=e.name,a=e.placeholder,i=void 0===a?"":a,r=e.onInputChanged;return Object(m.jsxs)("div",{className:"flex items-center relative charcoal",children:[Object(m.jsx)(F.a,{className:"absolute pl1"}),Object(m.jsx)("input",{className:"text-input",type:"text",id:t,name:n,placeholder:i,onKeyUp:r})]})},W=n.p+"static/media/logo.a0751731.svg",q=function Header(e){var t=e.className;return Object(m.jsx)("div",{className:t+" flex items-center bg-marine bb bw1",children:Object(m.jsx)("img",{src:W,alt:"Crowcraft logo",className:"h-50"})})},H=function Content(e){var t=e.className,n=e.children;return Object(m.jsx)("div",{className:t,children:n})},_=function Footer(e){var t=e.className;return Object(m.jsxs)("div",{className:t+" flex flex-column items-center justify-center f7 bg-marine",children:[Object(m.jsx)("div",{children:"Crowcraft is sponsored by Valeria Gaming"}),Object(m.jsxs)("div",{children:["Made with \u2764 by ",Object(m.jsx)("a",{href:"https://github.com/Guillaume-Docquier/guillaume-docquier.github.io/projects/1",target:"_blank",rel:"noopener noreferrer",children:"Guike"})]}),Object(m.jsx)("div",{children:"Special thanks to Upem, Bluezinhaaa and Shilana"})]})},K=function Layout(e){var t=e.children;return Object(m.jsxs)("div",{className:"bg-charcoal peach-puff",children:[Object(m.jsx)(q,{className:"h3 nmb5 ph7"}),Object(m.jsx)(H,{className:"pv5 ph7 min-vh-100",children:t}),Object(m.jsx)(_,{className:"h3 nmt5 ph7"})]})},G=function ItemSearch(e){var t=e.onItemSelected,n=Object(i.useState)(L.map((function(e){return new e})).filter((function(e){return e.isCraftable})).sort(u.a.ascending((function(e){return e.name})))),a=Object(l.a)(n,1)[0],r=Object(i.useState)([]),c=Object(l.a)(r,2),s=c[0],o=c[1],f=Object(i.useState)(null),d=Object(l.a)(f,2),b=d[0],j=d[1],v=function selectItem(e){j(e.id),t(e.createNew())};return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"mb2",children:"Select an item you want to craft:"}),Object(m.jsx)("div",{className:"mb3",children:Object(m.jsx)(P,{id:"item-meta",name:"item-meta",placeholder:"Filter items",onInputChanged:function filterItems(e){var t=e.target.value;o(t.split(" ").filter((function(e){return e.length>0})))}})}),Object(m.jsx)("div",{className:"flex mb3",children:a.filter((function hasKeywordMatch(e){return 0===s.length||s.some((function(t){return e.name.includes(t)}))})).map((function(e){return Object(m.jsx)("div",{className:"mr2",children:Object(m.jsx)(J,{item:e,onItemSelected:v,isSelected:e.id===b})},e.id)}))})]})},J=function Item(e){var t=e.item,n=e.onItemSelected,a=e.isSelected?"selected":"";return Object(m.jsx)("div",{className:"item ".concat(a," | mr2 pointer"),onClick:function selectItem(){n(t)},children:Object(m.jsx)(k,{rawMaterial:new R.a(null,t)})})},Q=function Option(e,t,n){Object(o.a)(this,Option),this.id=e,this.name=t,this.nextFilterId=n},V=function Crafting(){var e=Object(i.useState)(null),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(null),c=Object(l.a)(r,2),s=c[0],o=c[1],u=Object(i.useState)(null),f=Object(l.a)(u,2),b=f[0],j=f[1],h=Object(i.useState)(null),O=Object(l.a)(h,2),g=O[0],p=O[1],w=Object(i.useState)(!1),C=Object(l.a)(w,2),S=C[0],M=C[1];Object(i.useEffect)((function(){n&&n.setRarity((s||{}).id)}),[n,s]),Object(i.useEffect)((function(){if(S){var e=n.getCraftingRundown(),t=e.rawMaterials,a=e.crafts;j(t),p(a),M(!1)}}),[S,n,j,p]);var k=function reset(){o(null),j(null),p(null),M(!1)},z=Object(i.useCallback)((function(){M(!0)}),[M]);return Object(m.jsxs)("div",{className:"mv3",children:[Object(m.jsx)(G,{onItemSelected:function selectItemToCraft(e){a(e),k()}}),n&&!s?Object(m.jsx)("div",{className:"mb3",children:Object(m.jsx)(v,{name:"rarity",options:n.rarities.map((function(e){return new Q(e,e,null)})),onStepCompleted:function completeRarityStep(e){o(e),M(!n.isCustomizable())}})}):null,s?Object(m.jsx)("div",{className:"mb3",children:Object(m.jsx)(d,{name:"rarity",choice:s,onStepCanceled:k})}):null,s&&n.isCustomizable()?Object(m.jsx)("div",{className:"mb3",children:Object(m.jsx)(I,{item:n,onItemCustomized:z})}):null,b?Object(m.jsx)("div",{className:"mb3",children:Object(m.jsx)(x,{rawMaterials:b})}):null,g?Object(m.jsx)("div",{className:"mb3",children:Object(m.jsx)(y,{crafts:g})}):null]})},Z=function App(){return Object(m.jsx)(K,{children:Object(m.jsx)(V,{})})},$=function reportWebVitals(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,99)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(Z,{})}),document.getElementById("root")),$()}],[[87,1,2]]]);
//# sourceMappingURL=main.4ac6ac76.chunk.js.map