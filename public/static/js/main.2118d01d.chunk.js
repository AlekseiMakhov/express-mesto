(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(1),i=n.n(o),s=n(7),c=n.n(s),r=(n(16),n(10)),l=n(3),u="static/media/logo.c2821b38.svg";var d=function(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("img",{className:"header__logo",src:u,alt:"\u041b\u043e\u0433\u043e"})})},p=Object(o.createContext)();var j=function(e){var t=e.card,n=e.onCardClick,i=e.onLikeButtonClick,s=e.onCardDeleteClick,c=Object(o.useContext)(p),r=t.owner._id===c._id,l="element__trash-button ".concat(r?"element__trash-button_visible":""),u=t.likes.some((function(e){return e._id===c._id})),d="like__button ".concat(u?"like__button_pressed":"");return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"element",id:t.id,children:[Object(a.jsx)("img",{className:"element__image",src:t.link,alt:"".concat(t.name,".\u0424\u043e\u0442\u043e"),onClick:function(){n(t)}}),Object(a.jsx)("button",{type:"button",className:l,onClick:function(e){return s(t)}}),Object(a.jsx)("h3",{className:"element__text",children:t.name}),Object(a.jsxs)("div",{className:"like",children:[Object(a.jsx)("button",{type:"button",className:d,onClick:function(e){return i(t)}}),Object(a.jsx)("p",{className:"like__count",children:t.likes.length})]})]})})};var b=function(e){var t=e.onEditProfile,n=e.onEditAvatar,i=e.onAddPlace,s=e.onCardClick,c=e.onCardLike,r=e.onDeleteCard,l=e.cards,u=Object(o.useContext)(p);return Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"avatar",onClick:n,children:[Object(a.jsx)("img",{className:"avatar__img",src:u.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440"}),Object(a.jsx)("div",{className:"avatar__edit-icon"})]}),Object(a.jsxs)("div",{className:"profile-info",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:"profile-info__name",children:u.name}),Object(a.jsx)("p",{className:"profile-info__description",children:u.about})]}),Object(a.jsx)("button",{type:"button",className:"profile-info__edit-button",onClick:t})]}),Object(a.jsx)("button",{type:"button",className:"add-image-button",onClick:i})]}),Object(a.jsx)("section",{className:"elements",children:l.map((function(e){return Object(a.jsx)(j,{card:e,onCardClick:s,onLikeButtonClick:c,onCardDeleteClick:r},e._id)}))})]})};var m=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__logo",children:"\xa9 2020 Mesto Russia"})})},f=n(2),_=n.n(f),h=Object(o.createContext)(),O=Object(o.createContext)();var v=function(e){var t=e.name,n=e.title,i=e.children,s=e.isOpen,c=e.onClose,r=e.onSubmit,l=e.noClose,u=Object(o.useContext)(O),d=Object(o.useContext)(h);return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("section",{className:_()("popup popup_type_".concat(t),{popup_opened:s}),onClick:c,children:Object(a.jsxs)("form",{className:"popup-form",name:t,onSubmit:r,onClick:l,children:[Object(a.jsx)("button",{type:"button",name:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"popup-form__close-button",onClick:c}),Object(a.jsx)("h3",{className:"popup-form__title",children:n}),i,Object(a.jsx)("button",{className:_()("popup-form__submit-button",{"popup-form__submit-button_disabled":!u.isValid}),children:d})]})})})};var x=function(e){var t=e.isOpen,n=e.onClose,i=e.onAddPlace,s=e.noClose,c=e.onInput,r=Object(o.useContext)(O),l=Object(o.useRef)(""),u=Object(o.useRef)("");return Object(o.useEffect)((function(e){!t&&l.current.parentElement.reset()}),[t]),Object(a.jsx)(v,{name:"place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{onInput:c,ref:u,name:"name",id:"0",type:"text",minLength:"1",maxLength:"40",className:_()("popup-form__text-input",{"popup-form__text-input_type_error":!r.validation[0]}),placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0}),Object(a.jsx)("span",{id:"image-input-error",className:_()("popup-form__error-text",{"popup-form__error-text_show":!r.validation[0]}),children:r.validationText[0]}),Object(a.jsx)("input",{onInput:c,ref:l,name:"link",id:"1",type:"url",className:_()("popup-form__text-input",{"popup-form__text-input_type_error":!r.validation[1]}),placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(a.jsx)("span",{id:"link-input-error",className:_()("popup-form__error-text",{"popup-form__error-text_show":!r.validation[1]}),children:r.validationText[1]})]}),isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),r.isValid&&i({link:l.current.value,name:u.current.value})},noClose:s})};var C=function(e){var t=e.isOpen,n=e.onClose,i=e.onUpdateAvatar,s=e.noClose,c=e.onInput,r=Object(o.useContext)(O),l=Object(o.useRef)("");return Object(o.useEffect)((function(e){!t&&l.current.parentElement.reset()}),[t]),Object(a.jsx)(v,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{onInput:c,name:"avatar",ref:l,id:"0",type:"url",className:_()("popup-form__text-input",{"popup-form__text-input_type_error":!r.validation[0]}),placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(a.jsx)("span",{id:"avatar-error",className:_()("popup-form__error-text",{"popup-form__error-text_show":!r.validation[0]}),children:r.validationText[0]})]}),isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),r.isValid&&i({avatar:l.current.value})},noClose:s})};var g=function(e){var t=e.isOpen,n=e.onClose,i=e.onUpdateUser,s=e.noClose,c=e.onInput,r=Object(o.useContext)(p),u=Object(o.useContext)(O),d=Object(o.useState)(r.name),j=Object(l.a)(d,2),b=j[0],m=j[1],f=Object(o.useState)(r.about),h=Object(l.a)(f,2),x=h[0],C=h[1];return Object(o.useEffect)((function(e){m(r.name),C(r.about)}),[r]),Object(a.jsx)(v,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{onInput:c,name:"name",id:"0",type:"text",minLength:"2",maxLength:"40",value:b,onChange:function(e){return m(e.target.value)},className:_()("popup-form__text-input",{"popup-form__text-input_type_error":!u.validation[0]}),placeholder:"\u0418\u043c\u044f",required:!0}),Object(a.jsx)("span",{id:"name-input-error",className:_()("popup-form__error-text",{"popup-form__error-text_show":!u.validation[0]}),children:u.validationText[0]}),Object(a.jsx)("input",{onInput:c,name:"about",id:"1",type:"text",minLength:"2",maxLength:"200",value:x,onChange:function(e){return C(e.target.value)},className:_()("popup-form__text-input",{"popup-form__text-input_type_error":!u.validation[1]}),placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0}),Object(a.jsx)("span",{id:"about-input-error",className:_()("popup-form__error-text",{"popup-form__error-text_show":!u.validation[1]}),children:u.validationText[1]})]}),isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),u.isValid&&i({name:b,about:x})},noClose:s})};var k=function(e){var t=e.isOpen,n=e.onClose,o=e.card,i=e.noClose;return Object(a.jsx)("section",{id:"view-image",className:_()("popup popup_type_dark",{popup_opened:t}),onClick:n,children:Object(a.jsxs)("div",{className:"popup-image",onClick:i,children:[Object(a.jsx)("button",{type:"button",name:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"popup-image__close-button",onClick:n}),Object(a.jsx)("img",{className:"popup-image__image",src:o.link,alt:"".concat(o.name).\u0424\u043e\u0442\u043e}),Object(a.jsx)("h3",{className:"popup-image__title",children:o.name})]})})};var N=function(e){var t=e.isOpen,n=e.onClose,o=e.noClose,i=e.onDeleteCard,s=e.card;return Object(a.jsx)(v,{name:"submit",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),i(s)},noClose:o})},y=n(8),S=n(9),E=new(function(){function e(t){Object(y.a)(this,e),this._headers=t.headers,this._baseUrl=t.baseUrl}return Object(S.a)(e,[{key:"_sendRequest",value:function(e,t){return fetch(e,t).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status," - ").concat(e.statusText))}))}},{key:"editProfileInfo",value:function(e){return this._sendRequest("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})})}},{key:"getProfileInfo",value:function(){return this._sendRequest("".concat(this._baseUrl,"/users/me"),{headers:this._headers})}},{key:"editAvatar",value:function(e){return this._sendRequest("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})})}},{key:"createNewCard",value:function(e){return this._sendRequest("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})})}},{key:"deleteCard",value:function(e){return this._sendRequest("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers})}},{key:"changeLikeStatus",value:function(e,t){return this._sendRequest("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:this._headers})}},{key:"getInitialCards",value:function(){return this._sendRequest("".concat(this._baseUrl,"/cards"),{headers:this._headers})}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-16",headers:{authorization:"83172f60-a4ab-4f2a-9396-1325bbd21612","Content-Type":"application/json"}});var T=function(){var e=Object(o.useState)(!1),t=Object(l.a)(e,2),n=t[0],i=t[1],s=Object(o.useState)(!1),c=Object(l.a)(s,2),u=c[0],j=c[1],f=Object(o.useState)(!1),_=Object(l.a)(f,2),v=_[0],y=_[1],S=Object(o.useState)(!1),T=Object(l.a)(S,2),L=T[0],P=T[1],I=Object(o.useState)(!1),w=Object(l.a)(I,2),U=w[0],q=w[1],D=Object(o.useState)(""),A=Object(l.a)(D,2),R=A[0],V=A[1],F=Object(o.useState)({}),J=Object(l.a)(F,2),B=J[0],M=J[1],H=Object(o.useState)([]),z=Object(l.a)(H,2),G=z[0],K=z[1],Q=Object(o.useState)({}),W=Object(l.a)(Q,2),X=W[0],Y=W[1],Z=Object(o.useState)({validation:[],validationText:[],isValid:!1}),$=Object(l.a)(Z,2),ee=$[0],te=$[1];function ne(e){var t=ee.validation,n=ee.validationText,a=Number(e.target.id),o=0;t[a]=e.target.validity.valid,n[a]=e.target.validationMessage;for(var i=0;i<t.length;i++)o+=Number(t[i]);te({validation:t,validationText:n,isValid:o===t.length})}function ae(e){"Escape"===e.key&&ie()}function oe(e){e.stopPropagation()}function ie(){i(!1),j(!1),y(!1),P(!1),q(!1),document.removeEventListener("keydown",ae),te({validation:[],validationText:[],isValid:!1}),M({})}return Object(o.useEffect)((function(){Promise.all([E.getProfileInfo(),E.getInitialCards()]).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];Y(n),K(a)})).catch((function(e){console.log(e)}))}),[]),Object(a.jsxs)(p.Provider,{value:X,children:[Object(a.jsx)(d,{}),Object(a.jsx)(b,{onEditProfile:function(){j(!0),V("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),te({validation:[!0,!0],validationText:["",""],isValid:!0}),document.addEventListener("keydown",ae)},onEditAvatar:function(){i(!0),V("\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"),te({validation:[!0],validationText:[""],isValid:!1}),document.addEventListener("keydown",ae)},onAddPlace:function(){y(!0),V("\u0421\u043e\u0437\u0434\u0430\u0442\u044c"),te({validation:[!0,!0],validationText:["",""],isValid:!1}),document.addEventListener("keydown",ae)},onCardClick:function(e){q(!0),M(e),document.addEventListener("keydown",ae)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===X._id}));E.changeLikeStatus(e._id,!t).then((function(t){var n=G.map((function(n){return n._id===e._id?t:n}));K(n)})).catch((function(e){console.log(e)}))},onDeleteCard:function(e){P(!0),V("\u0414\u0430"),te({validation:[],validationText:[],isValid:!0}),M(e),document.addEventListener("keydown",ae)},cards:G}),Object(a.jsx)(m,{}),Object(a.jsx)(O.Provider,{value:ee,children:Object(a.jsxs)(h.Provider,{value:R,children:[Object(a.jsx)(g,{isOpen:u,onClose:ie,onUpdateUser:function(e){V("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435..."),E.editProfileInfo(e).then((function(e){Y(e),ie()})).catch((function(e){console.log(e)}))},noClose:oe,onInput:ne}),Object(a.jsx)(C,{isOpen:n,onClose:ie,onUpdateAvatar:function(e){V("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435..."),E.editAvatar(e.avatar).then((function(e){Y(e),ie()})).catch((function(e){console.log(e)}))},noClose:oe,onInput:ne}),Object(a.jsx)(x,{isOpen:v,onClose:ie,onAddPlace:function(e){V("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),E.createNewCard(e).then((function(e){K([e].concat(Object(r.a)(G))),ie()})).catch((function(e){console.log(e)}))},noClose:oe,onInput:ne}),Object(a.jsx)(N,{isOpen:L,onClose:ie,noClose:oe,onDeleteCard:function(e){V("\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435..."),E.deleteCard(e._id).then((function(){var t=G.filter((function(t){return t._id!==e._id}));K(t),ie()})).catch((function(e){console.log(e)}))},card:B})]})}),Object(a.jsx)(k,{isOpen:U,onClose:ie,card:B,noClose:oe})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),o(e),i(e),s(e)}))};c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(T,{})}),document.getElementById("root")),L()}},[[17,1,2]]]);
//# sourceMappingURL=main.2118d01d.chunk.js.map