var h=Object.defineProperty,z=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var b=(u,s,i)=>s in u?h(u,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):u[s]=i,U=(u,s)=>{for(var i in s||(s={}))E.call(s,i)&&b(u,i,s[i]);if(V)for(var i of V(s))P.call(s,i)&&b(u,i,s[i]);return u},S=(u,s)=>z(u,L(s));import{g as Q,i as B,k as I,m as v,n as y,a2 as T,p as H,aQ as J,j as K,q as O,r as m,o as C,c as W,b as r,w as d,y as e,a0 as X,s as Y,z as Z,A as x,v as ee,x as ae,B as se,t as te}from"./vendor.e9042f2c.js";import{d as ne,m as oe,c as re}from"./main.e180e539.js";const le=["onSubmit"],ie=te("span",null,null,-1),pe={setup(u){const s=ne(),i=oe(),q=re(),{t:g}=Q();let p=B(!1),w=B(null),f=B([]);s.currentUser.avatar&&f.value.push({image:s.currentUser.avatar});const F=I(()=>({name:{required:v.withMessage(g("validation.required"),y)},email:{required:v.withMessage(g("validation.required"),y),email:v.withMessage(g("validation.email_incorrect"),T)},password:{minLength:v.withMessage(g("validation.password_length",{count:8}),H(8))},confirm_password:{sameAsPassword:v.withMessage(g("validation.password_incorrect"),J(t.password))}})),t=K({name:s.currentUser.name,email:s.currentUser.email,language:s.currentUserSettings.language||q.selectedCompanySettings.language,password:"",confirm_password:""}),o=O(F,I(()=>t));function M(l,a){w.value=a}function k(){w.value=null}async function G(){if(o.value.$touch(),o.value.$invalid)return!0;p.value=!0;let l={name:t.name,email:t.email};try{if(t.password!=null&&t.password!==void 0&&t.password!==""&&(l=S(U({},l),{password:t.password})),s.currentUserSettings.language!==t.language&&await s.updateUserSettings({settings:{language:t.language}}),(await s.updateCurrentUser(l)).data.data){if(p.value=!1,w.value){let $=new FormData;$.append("admin_avatar",w.value),await s.uploadAvatar($)}t.password="",t.confirm_password=""}}catch{return p.value=!1,!0}}return(l,a)=>{const $=m("BaseFileUploader"),c=m("BaseInputGroup"),_=m("BaseInput"),N=m("BaseMultiselect"),A=m("BaseInputGrid"),D=m("BaseIcon"),j=m("BaseButton"),R=m("BaseSettingCard");return C(),W("form",{class:"relative",onSubmit:se(G,["prevent"])},[r(R,{title:l.$t("settings.account_settings.account_settings"),description:l.$t("settings.account_settings.section_description")},{default:d(()=>[r(A,null,{default:d(()=>[r(c,{label:l.$tc("settings.account_settings.profile_picture")},{default:d(()=>[r($,{modelValue:e(f),"onUpdate:modelValue":a[0]||(a[0]=n=>X(f)?f.value=n:f=n),avatar:!0,accept:"image/*",onChange:M,onRemove:k},null,8,["modelValue"])]),_:1},8,["label"]),ie,r(c,{label:l.$tc("settings.account_settings.name"),error:e(o).name.$error&&e(o).name.$errors[0].$message,required:""},{default:d(()=>[r(_,{modelValue:e(t).name,"onUpdate:modelValue":a[1]||(a[1]=n=>e(t).name=n),invalid:e(o).name.$error,onInput:a[2]||(a[2]=n=>e(o).name.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"]),r(c,{label:l.$tc("settings.account_settings.email"),error:e(o).email.$error&&e(o).email.$errors[0].$message,required:""},{default:d(()=>[r(_,{modelValue:e(t).email,"onUpdate:modelValue":a[3]||(a[3]=n=>e(t).email=n),invalid:e(o).email.$error,onInput:a[4]||(a[4]=n=>e(o).email.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"]),r(c,{error:e(o).password.$error&&e(o).password.$errors[0].$message,label:l.$tc("settings.account_settings.password")},{default:d(()=>[r(_,{modelValue:e(t).password,"onUpdate:modelValue":a[5]||(a[5]=n=>e(t).password=n),type:"password",onInput:a[6]||(a[6]=n=>e(o).password.$touch())},null,8,["modelValue"])]),_:1},8,["error","label"]),r(c,{label:l.$tc("settings.account_settings.confirm_password"),error:e(o).confirm_password.$error&&e(o).confirm_password.$errors[0].$message},{default:d(()=>[r(_,{modelValue:e(t).confirm_password,"onUpdate:modelValue":a[7]||(a[7]=n=>e(t).confirm_password=n),type:"password",onInput:a[8]||(a[8]=n=>e(o).confirm_password.$touch())},null,8,["modelValue"])]),_:1},8,["label","error"]),r(c,{label:l.$tc("settings.language")},{default:d(()=>[r(N,{modelValue:e(t).language,"onUpdate:modelValue":a[9]||(a[9]=n=>e(t).language=n),options:e(i).config.languages,label:"name","value-prop":"code","track-by":"code","open-direction":"top"},null,8,["modelValue","options"])]),_:1},8,["label"])]),_:1}),r(j,{loading:e(p),disabled:e(p),class:"mt-6"},{left:d(n=>[e(p)?x("",!0):(C(),Y(D,{key:0,name:"SaveIcon",class:Z(n.class)},null,8,["class"]))]),default:d(()=>[ee(" "+ae(l.$tc("settings.company_info.save")),1)]),_:1},8,["loading","disabled"])]),_:1},8,["title","description"])],40,le)}}};export{pe as default};