"use strict";(self.webpackChunkpei=self.webpackChunkpei||[]).push([[6856],{46856:(W,s,_)=>{_.r(s),_.d(s,{UserListPageEE:()=>m});var a=_(92132),o=_(27001),n=_(67879),T=_(21272),C=_(80403),R=_(5409),i=_(86132),U=_(15126),v=_(63299),B=_(67014),t=_(59080),l=_(79275),L=_(14718),I=_(82437),d=_(61535),M=_(5790),A=_(12083),O=_(35223),E=_(74930),D=_(2600),K=_(48940),P=_(41286),h=_(51187),r=_(56336),f=_(39404),g=_(58692),S=_(54257),y=_(501),N=_(57646),j=_(23120),x=_(44414),V=_(25962),z=_(14664),F=_(42588),G=_(90325),H=_(62785),$=_(87443),X=_(41032),Y=_(22957),c=_(93179),e=_(73055),J=_(15747),Q=_(85306),Z=_(77965),u=_(26509),p=_(84624),k=_(71210),w=_(32058),b=_(81185),q=_(82261),__=_(62482),E_=_(78263),t_=_(37519),s_=_(59157),M_=_(72810),O_=_(18022),D_=_(67031);const m=()=>((0,n.u)(),(0,a.jsx)(o.e,{}))},67879:(W,s,_)=>{_.d(s,{u:()=>B});var a=_(21272),o=_(80403),n=_(67031),T=_(54894),C=_(17703),R=_(86132);const i="strapi-notification-seat-limit",U="https://cloud.strapi.io/profile/billing",v="https://strapi.io/billing/request-seats",B=()=>{const{formatMessage:t}=(0,T.A)(),{license:l,isError:L,isLoading:I}=(0,R.m)(),d=(0,o.hN)(),{pathname:M}=(0,C.zy)(),{enforcementUserCount:A,permittedSeats:O,licenseLimitStatus:E,isHostedOnStrapiCloud:D}=l??{};a.useEffect(()=>{if(L||I)return;const K=!n(O)&&!window.sessionStorage.getItem(`${i}-${M}`)&&(E==="AT_LIMIT"||E==="OVER_LIMIT");let P;E==="OVER_LIMIT"?P="warning":E==="AT_LIMIT"&&(P="softWarning"),K&&d({type:P,message:t({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:E}),title:t({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:E,enforcementUserCount:A,permittedSeats:O}),link:{url:D?U:v,label:t({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:D})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${i}-${M}`,"true")}})},[d,l,M,t,I,O,E,A,D,L])}}}]);
