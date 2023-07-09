import{r as u,g as v,a as _,o as l,c,b as t,t as i,d as r,e as f,f as m,h as y,u as w,F as b,i as k,_ as U,w as p,v as g,j as V,p as q,k as C}from"./index-dead0782.js";import I from"./Flight-64bdd527.js";import F from"./Train-9c0af2ce.js";import A from"./Hotel-054ae01f.js";import{_ as $}from"./DatePicker-a06d0746.js";import{t as N}from"./mosha-vue-toastify.es-07c10dea.js";import{a as D}from"./axios-4a70c6fc.js";import"./NumberInput-98268e0b.js";import"./vue.runtime.esm-bundler-f1652755.js";const S={class:"flex flex-col justify-center opacity-90"},B={class:"flex group [perspective:1000px]"},j={class:"relative flex flex-col md:flex-row space-y-3 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"},L={class:"w-full md:w-1/3 bg-white grid place-items-center"},T=["src"],z={class:"w-full bg-white flex flex-col space-y-2 p-3"},E={class:"flex gap-2 item-center"},M={class:"bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block"},O={key:0,class:"bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block"},R={key:1,class:"bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block"},Y={key:0,class:"font-black text-gray-700 md:text-xl text-lg"},P={key:1,class:"font-black text-gray-700 md:text-xl text-lg"},W={key:2,class:"flex md:flex-row flex-col"},G={class:"font-black md:text-xl text-gray-800 md:pr-1"},H={class:"md:text-lg text-gray-600"},J={class:"md:flex text-gray-500 hidden"},K=t("p",null,"........................",-1),Q={class:"font-black md:text-xl text-gray-800 space-x-3 md:pr-1"},X={class:"md:text-lg text-gray-600"},Z={key:3,class:"flex flex-col"},ee={class:"flex"},te={class:"flex"},se={class:"flex md:flex-row flex-col md:gap-40"},ae={class:"flex text-blue-900"},oe={class:"text-xl font-black"},le={class:"flex text-blue-900"},ie={class:"text-xl font-black"},de={class:"absolute rounded-xl inset-0 h-full w-full bg-white text-center [transform:rotateY(180deg)] [backface-visibility:hidden]"},ne={class:"flex min-h-full flex-col items-center justify-center"},re={components:{},data:()=>({}),methods:{}},ce=Object.assign(re,{__name:"SearchItem",props:{id:{type:Number,required:!0},labels:{type:Array},data:{required:!0},selected:{type:Number,required:!0},type:{type:String,required:!0}},setup(e){u(-1);const a=v();return(s,d)=>{const n=_("font-awesome-icon");return l(),c("div",S,[t("div",B,[t("div",j,[t("div",L,[t("img",{src:"https://bookingmastermind.pythonanywhere.com"+e.data.image,alt:"airline logo",class:"rounded-xl",style:{width:"100px",height:"100"}},null,8,T)]),t("div",z,[t("div",E,[t("div",M,i(e.data.ticket_type)+" "+i(e.data.city),1),e.type=="flight"||e.type=="train"?(l(),c("div",O,i(e.data.flight_class),1)):r("",!0),e.type=="flight"||e.type=="train"?(l(),c("div",R,i(e.data.airplane),1)):r("",!0)]),e.type=="flight"||e.type=="train"?(l(),c("h3",Y,i(e.data.company),1)):r("",!0),e.type=="hotel"?(l(),c("h3",P,i(e.data.name),1)):r("",!0),e.type=="flight"||e.type=="train"?(l(),c("div",W,[t("p",G,i(e.data.departure_time.substring(0,5)),1),t("p",H,i(e.data.departure_city),1),t("div",J,[e.type=="flight"?(l(),f(n,{key:0,icon:"fa-solid fa-plane",class:"pt-2 pl-2 pr-0.5"})):r("",!0),e.type=="train"?(l(),f(n,{key:1,icon:"fa-solid fa-train-subway",class:"pt-2 pl-2 pr-0.5"})):r("",!0),K,m(n,{icon:"fa-solid fa-genderless",class:"pt-2 pr-1"})]),t("p",Q,i(e.data.arrival_time.substring(0,5)),1),t("p",X,i(e.data.arrival_city),1)])):r("",!0),e.type=="hotel"?(l(),c("div",Z,[t("div",ee,[m(n,{icon:"fa-solid fa-star",class:"pt-0.5 pl-2 pr-0.5"}),y(" "+i(e.data.star),1)]),t("div",te,[m(n,{icon:"fa-solid fa-location-dot",class:"pt-0.5 pl-2 pr-0.5"}),y(i(e.data.address),1)])])):r("",!0),t("div",se,[t("div",ae,[m(n,{icon:"fa-solid fa-chair",size:"lg",class:"pt-1.5 pl-2 pr-1"}),t("p",oe,i(e.data.capacity),1)]),t("div",le,[m(n,{icon:"fa-solid fa-money-bill-1",size:"lg",class:"pt-1.5 pl-2 pr-1"}),t("p",ie,i(e.data.price),1)])])]),t("div",de,[t("div",ne,[t("p",null,i(e.data.description),1),t("button",{class:"bg-green-500 text-white active:bg-green-700 hover:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",onClick:d[0]||(d[0]=o=>w(a).emit("update:selected",e.data.id))}," select ")])])])])])}}});const x=e=>(q("data-v-954b26c7"),e=e(),C(),e),ue={class:"flex flex-col gap-2 p-10 rounded-2xl shadow-2xl shadow-blue-600 bg-white bg-opacity-90 h-full"},he=x(()=>t("h1",{class:"text-2xl text-center pb-2"},"Travelers Info",-1)),me=["id"],fe=["id","onUpdate:modelValue"],pe=["id","onUpdate:modelValue"],ge=["id","onUpdate:modelValue"],ye=["id","onUpdate:modelValue"],be=x(()=>t("option",{name:"man"},"Man",-1)),xe=x(()=>t("option",{name:"woman"},"Woman",-1)),ve=[be,xe],_e=["onClick"],we={class:"flex w-full"},ke={components:{DatePicker:$},props:{selected:{type:Number,required:!0},count:{type:Number,required:!0}},data:()=>({id:u(new Array(100).fill("")),firstName:u(new Array(100).fill("")),lastName:u(new Array(100).fill("")),gender:u(new Array(100).fill("")),date:u(new Array(100).fill("")),count2:u(2)}),methods:{removeDiv(e){document.getElementById("form-"+e).remove(),delete this.date[e],delete this.id[e],delete this.lastName[e],delete this.firstName[e],delete this.gender[e]},error(e){N(e,{position:"bottom-right",type:"danger",showIcon:!0,timeout:1e4})},submit(){this.check()},check(){for(var e=1;e<=this.count2;e++){if(this.date[e]==""||this.firstName[e]===""||this.lastName[e]===""||this.id[e]==="")return this.error("please fill all fields"),!1;if((this.id[e]+"").length!=9)return this.error("national code must be 9 digits"),console.log(this.id[e]),!1}},add(){this.count2++}}},$e=Object.assign(ke,{__name:"TicketForm",setup(e){u(-2);const a=v();return(s,d)=>{const n=_("font-awesome-icon");return l(),c("div",ue,[t("button",{class:"absolute -top-3 -right-3 text-4xl text-red-700 hover:text-red-600 transition-all",onClick:d[0]||(d[0]=o=>w(a).emit("update:selected",-1))},[m(n,{icon:"fa-solid fa-circle-xmark",class:"bg-white rounded-full"})]),he,(l(!0),c(b,null,k(s.count2,o=>(l(),c("div",{id:"form-"+o,class:"flex flex-wrap md:gap-7"},[p(t("input",{id:"first-name-"+o,"onUpdate:modelValue":h=>s.firstName[o]=h,placeholder:"First Name",class:"px-2 w-28 h-8 bg-gray-200 rounded-lg shadow-md"},null,8,fe),[[g,s.firstName[o]]]),p(t("input",{id:"last-name-"+o,"onUpdate:modelValue":h=>s.lastName[o]=h,placeholder:"Last Name",class:"px-2 w-28 h-8 bg-gray-200 rounded-lg shadow-md"},null,8,pe),[[g,s.lastName[o]]]),p(t("input",{id:"national-code-"+o,"onUpdate:modelValue":h=>s.id[o]=h,type:"number",placeholder:"National Code",class:"px-2 no-spinner w-32 h-8 bg-gray-200 rounded-lg shadow-md"},null,8,ge),[[g,s.id[o]]]),p(t("select",{id:"gender-"+o,"onUpdate:modelValue":h=>s.gender[o]=h,class:"w-20 h-8 bg-gray-200 rounded-lg shadow-md"},ve,8,ye),[[V,s.gender[o]]]),m($,{id:"Birthday-"+o,value:s.date[o],"onUpdate:value":h=>s.date[o]=h,placeholder:"Birthday","custom-class":"bg-gray-200",shadow:"shadow-md"},null,8,["id","value","onUpdate:value"]),o!=1?(l(),c("button",{key:0,class:"bg-red-500 text-white active:bg-red-700 hover:bg-red-600 font-bold uppercase text-xs px-2 rounded shadow-md hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",onClick:h=>s.removeDiv(o)},[m(n,{icon:"fa-solid fa-user-minus"})],8,_e)):r("",!0)],8,me))),256)),t("div",we,[t("button",{onClick:d[1]||(d[1]=o=>s.add()),class:"bg-green-500 text-white active:bg-green-700 hover:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow-lg hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"},[m(n,{icon:"fa-solid fa-user-plus"}),y(" Add ")]),t("button",{onClick:d[2]||(d[2]=o=>s.submit()),class:"bg-blue-500 text-white active:bg-blue-700 hover:bg-blue-600 font-bold uppercase text-xs px-4 rounded shadow-lg hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"}," submit ")])])}}}),Ne=U($e,[["__scopeId","data-v-954b26c7"]]),De={class:"flex flex-col gap-5"};D.defaults.baseURL="https://bookingmastermind.pythonanywhere.com";const Ue={components:{},data:()=>({count:u(2),selected:u(-1),type:u(""),labels:["System","Economy","737"],data:u([])}),mounted(){this.type=this.$route.query.t,this.from=this.capitalizeFirstLetter(this.$route.query.from),this.to=this.capitalizeFirstLetter(this.$route.query.to),this.dDate=this.$route.query.dDate,this.passengers=this.$route.query.passengers,this.rDate=this.$route.query.rDate,console.log(this.rDate);let e,a;this.type==="hotel"?(e={city:this.from,capacity__gt:this.passengers},a="/hotels/"):(e={departure_city:this.from,arrival_city:this.to,departure_date:this.dDate,capacity__gt:this.passengers},this.type==="flight"?a="/plane-tickets/":a="/train-tickets/",this.rDate!=null&&this.rDate!==""&&(e.arrival_date=this.rDate)),D.get(a,{params:e}).then(s=>{console.log(s),this.data=s.data,console.log(this.data)}).catch(s=>{this.error("not found")})},methods:{error(e){N(e,{position:"bottom-right",type:"danger",showIcon:!0,timeout:1e4})},capitalizeFirstLetter(e){if(e!==void 0)return e.charAt(0).toUpperCase()+e.slice(1)}}},Le=Object.assign(Ue,{__name:"ResultView",setup(e){return(a,s)=>(l(),c(b,null,[t("div",De,[a.type=="flight"?(l(),f(I,{key:0})):r("",!0),a.type=="train"?(l(),f(F,{key:1})):r("",!0),a.type=="hotel"?(l(),f(A,{key:2})):r("",!0),(l(!0),c(b,null,k(a.data,d=>(l(),f(ce,{data:d,id:d.id,type:a.type,labels:a.labels,selected:a.selected,"onUpdate:selected":s[0]||(s[0]=n=>a.selected=n)},null,8,["data","id","type","labels","selected"]))),256))]),a.selected>-1?(l(),f(Ne,{key:0,count:a.count,class:"absolute top-0",selected:a.selected,"onUpdate:selected":s[1]||(s[1]=d=>a.selected=d)},null,8,["count","selected"])):r("",!0)],64))}});export{Le as default};
