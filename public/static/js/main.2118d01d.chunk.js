(this['webpackJsonpmesto-react'] = this['webpackJsonpmesto-react'] || []).push([[0], {
  16(e, t, n) {},
  17(e, t, n) {
    n.r(t); const a = n(0); const o = n(1); const i = n.n(o); const s = n(7); const c = n.n(s); const r = (n(16), n(10)); const l = n(3); const u = `${n.p}static/media/logo.c2821b38.svg`; const d = function () { return Object(a.jsx)('header', { className: 'header', children: Object(a.jsx)('img', { className: 'header__logo', src: u, alt: '\u041b\u043e\u0433\u043e' }) }); }; const p = Object(o.createContext)(); const j = function (e) {
      const t = e.card; const n = e.onCardClick; const i = e.onLikeButtonClick; const s = e.onCardDeleteClick; const c = Object(o.useContext)(p); const r = t.owner._id === c._id; const l = 'element__trash-button '.concat(r ? 'element__trash-button_visible' : ''); const u = t.likes.some(((e) => e._id === c._id)); const d = 'like__button '.concat(u ? 'like__button_pressed' : ''); return Object(a.jsx)(a.Fragment, {
        children: Object(a.jsxs)('div', {
          className: 'element',
          id: t.id,
          children: [Object(a.jsx)('img', {
            className: 'element__image', src: t.link, alt: ''.concat(t.name, '.\u0424\u043e\u0442\u043e'), onClick() { n(t); },
          }), Object(a.jsx)('button', { type: 'button', className: l, onClick(e) { return s(t); } }), Object(a.jsx)('h3', { className: 'element__text', children: t.name }), Object(a.jsxs)('div', { className: 'like', children: [Object(a.jsx)('button', { type: 'button', className: d, onClick(e) { return i(t); } }), Object(a.jsx)('p', { className: 'like__count', children: t.likes.length })] })],
        }),
      });
    }; const b = function (e) {
      const t = e.onEditProfile; const n = e.onEditAvatar; const i = e.onAddPlace; const s = e.onCardClick; const c = e.onCardLike; const r = e.onDeleteCard; const l = e.cards; const u = Object(o.useContext)(p); return Object(a.jsxs)('main', {
        className: 'content',
        children: [Object(a.jsxs)('section', { className: 'profile', children: [Object(a.jsxs)('div', { className: 'avatar', onClick: n, children: [Object(a.jsx)('img', { className: 'avatar__img', src: u.avatar, alt: '\u0410\u0432\u0430\u0442\u0430\u0440' }), Object(a.jsx)('div', { className: 'avatar__edit-icon' })] }), Object(a.jsxs)('div', { className: 'profile-info', children: [Object(a.jsxs)('div', { children: [Object(a.jsx)('h1', { className: 'profile-info__name', children: u.name }), Object(a.jsx)('p', { className: 'profile-info__description', children: u.about })] }), Object(a.jsx)('button', { type: 'button', className: 'profile-info__edit-button', onClick: t })] }), Object(a.jsx)('button', { type: 'button', className: 'add-image-button', onClick: i })] }), Object(a.jsx)('section', {
          className: 'elements',
          children: l.map(((e) => Object(a.jsx)(j, {
            card: e, onCardClick: s, onLikeButtonClick: c, onCardDeleteClick: r,
          }, e._id))),
        })],
      });
    }; const m = function () { return Object(a.jsx)('footer', { className: 'footer', children: Object(a.jsx)('p', { className: 'footer__logo', children: '\xa9 2020 Mesto Russia' }) }); }; const f = n(2); const _ = n.n(f); const h = Object(o.createContext)(); const O = Object(o.createContext)(); const v = function (e) {
      const t = e.name; const n = e.title; const i = e.children; const s = e.isOpen; const c = e.onClose; const r = e.onSubmit; const l = e.noClose; const u = Object(o.useContext)(O); const d = Object(o.useContext)(h); return Object(a.jsx)(a.Fragment, {
        children: Object(a.jsx)('section', {
          className: _()('popup popup_type_'.concat(t), { popup_opened: s }),
          onClick: c,
          children: Object(a.jsxs)('form', {
            className: 'popup-form',
            name: t,
            onSubmit: r,
            onClick: l,
            children: [Object(a.jsx)('button', {
              type: 'button', name: '\u0417\u0430\u043a\u0440\u044b\u0442\u044c', className: 'popup-form__close-button', onClick: c,
            }), Object(a.jsx)('h3', { className: 'popup-form__title', children: n }), i, Object(a.jsx)('button', { className: _()('popup-form__submit-button', { 'popup-form__submit-button_disabled': !u.isValid }), children: d })],
          }),
        }),
      });
    }; const x = function (e) {
      const t = e.isOpen; const n = e.onClose; const i = e.onAddPlace; const s = e.noClose; const c = e.onInput; const r = Object(o.useContext)(O); const l = Object(o.useRef)(''); const u = Object(o.useRef)(''); return Object(o.useEffect)(((e) => { !t && l.current.parentElement.reset(); }), [t]), Object(a.jsx)(v, {
        name: 'place',
        title: '\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e',
        children: Object(a.jsxs)(a.Fragment, {
          children: [Object(a.jsx)('input', {
            onInput: c, ref: u, name: 'name', id: '0', type: 'text', minLength: '1', maxLength: '40', className: _()('popup-form__text-input', { 'popup-form__text-input_type_error': !r.validation[0] }), placeholder: '\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435', required: !0,
          }), Object(a.jsx)('span', { id: 'image-input-error', className: _()('popup-form__error-text', { 'popup-form__error-text_show': !r.validation[0] }), children: r.validationText[0] }), Object(a.jsx)('input', {
            onInput: c, ref: l, name: 'link', id: '1', type: 'url', className: _()('popup-form__text-input', { 'popup-form__text-input_type_error': !r.validation[1] }), placeholder: '\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443', required: !0,
          }), Object(a.jsx)('span', { id: 'link-input-error', className: _()('popup-form__error-text', { 'popup-form__error-text_show': !r.validation[1] }), children: r.validationText[1] })],
        }),
        isOpen: t,
        onClose: n,
        onSubmit(e) { e.preventDefault(), r.isValid && i({ link: l.current.value, name: u.current.value }); },
        noClose: s,
      });
    }; const C = function (e) {
      const t = e.isOpen; const n = e.onClose; const i = e.onUpdateAvatar; const s = e.noClose; const c = e.onInput; const r = Object(o.useContext)(O); const l = Object(o.useRef)(''); return Object(o.useEffect)(((e) => { !t && l.current.parentElement.reset(); }), [t]), Object(a.jsx)(v, {
        name: 'avatar',
        title: '\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440',
        children: Object(a.jsxs)(a.Fragment, {
          children: [Object(a.jsx)('input', {
            onInput: c, name: 'avatar', ref: l, id: '0', type: 'url', className: _()('popup-form__text-input', { 'popup-form__text-input_type_error': !r.validation[0] }), placeholder: '\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443', required: !0,
          }), Object(a.jsx)('span', { id: 'avatar-error', className: _()('popup-form__error-text', { 'popup-form__error-text_show': !r.validation[0] }), children: r.validationText[0] })],
        }),
        isOpen: t,
        onClose: n,
        onSubmit(e) { e.preventDefault(), r.isValid && i({ avatar: l.current.value }); },
        noClose: s,
      });
    }; const g = function (e) {
      const t = e.isOpen; const n = e.onClose; const i = e.onUpdateUser; const s = e.noClose; const c = e.onInput; const r = Object(o.useContext)(p); const u = Object(o.useContext)(O); const d = Object(o.useState)(r.name); const j = Object(l.a)(d, 2); const b = j[0]; const m = j[1]; const f = Object(o.useState)(r.about); const h = Object(l.a)(f, 2); const x = h[0]; const C = h[1]; return Object(o.useEffect)(((e) => { m(r.name), C(r.about); }), [r]), Object(a.jsx)(v, {
        name: 'profile',
        title: '\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c',
        children: Object(a.jsxs)(a.Fragment, {
          children: [Object(a.jsx)('input', {
            onInput: c, name: 'name', id: '0', type: 'text', minLength: '2', maxLength: '40', value: b, onChange(e) { return m(e.target.value); }, className: _()('popup-form__text-input', { 'popup-form__text-input_type_error': !u.validation[0] }), placeholder: '\u0418\u043c\u044f', required: !0,
          }), Object(a.jsx)('span', { id: 'name-input-error', className: _()('popup-form__error-text', { 'popup-form__error-text_show': !u.validation[0] }), children: u.validationText[0] }), Object(a.jsx)('input', {
            onInput: c, name: 'about', id: '1', type: 'text', minLength: '2', maxLength: '200', value: x, onChange(e) { return C(e.target.value); }, className: _()('popup-form__text-input', { 'popup-form__text-input_type_error': !u.validation[1] }), placeholder: '\u041e \u0441\u0435\u0431\u0435', required: !0,
          }), Object(a.jsx)('span', { id: 'about-input-error', className: _()('popup-form__error-text', { 'popup-form__error-text_show': !u.validation[1] }), children: u.validationText[1] })],
        }),
        isOpen: t,
        onClose: n,
        onSubmit(e) { e.preventDefault(), u.isValid && i({ name: b, about: x }); },
        noClose: s,
      });
    }; const k = function (e) {
      const t = e.isOpen; const n = e.onClose; const o = e.card; const i = e.noClose; return Object(a.jsx)('section', {
        id: 'view-image',
        className: _()('popup popup_type_dark', { popup_opened: t }),
        onClick: n,
        children: Object(a.jsxs)('div', {
          className: 'popup-image',
          onClick: i,
          children: [Object(a.jsx)('button', {
            type: 'button', name: '\u0417\u0430\u043a\u0440\u044b\u0442\u044c', className: 'popup-image__close-button', onClick: n,
          }), Object(a.jsx)('img', { className: 'popup-image__image', src: o.link, alt: ''.concat(o.name).\u0424\u043e\u0442\u043e }), Object(a.jsx)('h3', { className: 'popup-image__title', children: o.name })],
        }),
      });
    }; const N = function (e) {
      const t = e.isOpen; const n = e.onClose; const o = e.noClose; const i = e.onDeleteCard; const s = e.card; return Object(a.jsx)(v, {
        name: 'submit', title: '\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?', isOpen: t, onClose: n, onSubmit(e) { e.preventDefault(), i(s); }, noClose: o,
      });
    }; const y = n(8); const S = n(9); const E = new (function () { function e(t) { Object(y.a)(this, e), this._headers = t.headers, this._baseUrl = t.baseUrl; } return Object(S.a)(e, [{ key: '_sendRequest', value(e, t) { return fetch(e, t).then(((e) => (e.ok ? e.json() : Promise.reject('\u041e\u0448\u0438\u0431\u043a\u0430 '.concat(e.status, ' - ').concat(e.statusText))))); } }, { key: 'editProfileInfo', value(e) { return this._sendRequest(''.concat(this._baseUrl, '/users/me'), { method: 'PATCH', headers: this._headers, body: JSON.stringify({ name: e.name, about: e.about }) }); } }, { key: 'getProfileInfo', value() { return this._sendRequest(''.concat(this._baseUrl, '/users/me'), { headers: this._headers }); } }, { key: 'editAvatar', value(e) { return this._sendRequest(''.concat(this._baseUrl, '/users/me/avatar'), { method: 'PATCH', headers: this._headers, body: JSON.stringify({ avatar: e }) }); } }, { key: 'createNewCard', value(e) { return this._sendRequest(''.concat(this._baseUrl, '/cards'), { method: 'POST', headers: this._headers, body: JSON.stringify({ name: e.name, link: e.link }) }); } }, { key: 'deleteCard', value(e) { return this._sendRequest(''.concat(this._baseUrl, '/cards/').concat(e), { method: 'DELETE', headers: this._headers }); } }, { key: 'changeLikeStatus', value(e, t) { return this._sendRequest(''.concat(this._baseUrl, '/cards/likes/').concat(e), { method: t ? 'PUT' : 'DELETE', headers: this._headers }); } }, { key: 'getInitialCards', value() { return this._sendRequest(''.concat(this._baseUrl, '/cards'), { headers: this._headers }); } }]), e; }())({ baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-16', headers: { authorization: '83172f60-a4ab-4f2a-9396-1325bbd21612', 'Content-Type': 'application/json' } }); const T = function () {
      const e = Object(o.useState)(!1); const t = Object(l.a)(e, 2); const n = t[0]; const i = t[1]; const s = Object(o.useState)(!1); const c = Object(l.a)(s, 2); const u = c[0]; const j = c[1]; const f = Object(o.useState)(!1); const _ = Object(l.a)(f, 2); const v = _[0]; const y = _[1]; const S = Object(o.useState)(!1); const T = Object(l.a)(S, 2); const L = T[0]; const P = T[1]; const I = Object(o.useState)(!1); const w = Object(l.a)(I, 2); const U = w[0]; const q = w[1]; const D = Object(o.useState)(''); const A = Object(l.a)(D, 2); const R = A[0]; const V = A[1]; const F = Object(o.useState)({}); const J = Object(l.a)(F, 2); const B = J[0]; const M = J[1]; const H = Object(o.useState)([]); const z = Object(l.a)(H, 2); const G = z[0]; const K = z[1]; const Q = Object(o.useState)({}); const W = Object(l.a)(Q, 2); const X = W[0]; const Y = W[1]; const Z = Object(o.useState)({ validation: [], validationText: [], isValid: !1 }); const $ = Object(l.a)(Z, 2); const ee = $[0]; const te = $[1]; function ne(e) { const t = ee.validation; const n = ee.validationText; const a = Number(e.target.id); let o = 0; t[a] = e.target.validity.valid, n[a] = e.target.validationMessage; for (let i = 0; i < t.length; i++)o += Number(t[i]); te({ validation: t, validationText: n, isValid: o === t.length }); } function ae(e) { e.key === 'Escape' && ie(); } function oe(e) { e.stopPropagation(); } function ie() { i(!1), j(!1), y(!1), P(!1), q(!1), document.removeEventListener('keydown', ae), te({ validation: [], validationText: [], isValid: !1 }), M({}); } return Object(o.useEffect)((() => { Promise.all([E.getProfileInfo(), E.getInitialCards()]).then(((e) => { const t = Object(l.a)(e, 2); const n = t[0]; const a = t[1]; Y(n), K(a); })).catch(((e) => { console.log(e); })); }), []), Object(a.jsxs)(p.Provider, {
        value: X,
        children: [Object(a.jsx)(d, {}), Object(a.jsx)(b, {
          onEditProfile() { j(!0), V('\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c'), te({ validation: [!0, !0], validationText: ['', ''], isValid: !0 }), document.addEventListener('keydown', ae); }, onEditAvatar() { i(!0), V('\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c'), te({ validation: [!0], validationText: [''], isValid: !1 }), document.addEventListener('keydown', ae); }, onAddPlace() { y(!0), V('\u0421\u043e\u0437\u0434\u0430\u0442\u044c'), te({ validation: [!0, !0], validationText: ['', ''], isValid: !1 }), document.addEventListener('keydown', ae); }, onCardClick(e) { q(!0), M(e), document.addEventListener('keydown', ae); }, onCardLike(e) { const t = e.likes.some(((e) => e._id === X._id)); E.changeLikeStatus(e._id, !t).then(((t) => { const n = G.map(((n) => (n._id === e._id ? t : n))); K(n); })).catch(((e) => { console.log(e); })); }, onDeleteCard(e) { P(!0), V('\u0414\u0430'), te({ validation: [], validationText: [], isValid: !0 }), M(e), document.addEventListener('keydown', ae); }, cards: G,
        }), Object(a.jsx)(m, {}), Object(a.jsx)(O.Provider, {
          value: ee,
          children: Object(a.jsxs)(h.Provider, {
            value: R,
            children: [Object(a.jsx)(g, {
              isOpen: u, onClose: ie, onUpdateUser(e) { V('\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...'), E.editProfileInfo(e).then(((e) => { Y(e), ie(); })).catch(((e) => { console.log(e); })); }, noClose: oe, onInput: ne,
            }), Object(a.jsx)(C, {
              isOpen: n, onClose: ie, onUpdateAvatar(e) { V('\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...'), E.editAvatar(e.avatar).then(((e) => { Y(e), ie(); })).catch(((e) => { console.log(e); })); }, noClose: oe, onInput: ne,
            }), Object(a.jsx)(x, {
              isOpen: v, onClose: ie, onAddPlace(e) { V('\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...'), E.createNewCard(e).then(((e) => { K([e].concat(Object(r.a)(G))), ie(); })).catch(((e) => { console.log(e); })); }, noClose: oe, onInput: ne,
            }), Object(a.jsx)(N, {
              isOpen: L, onClose: ie, noClose: oe, onDeleteCard(e) { V('\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...'), E.deleteCard(e._id).then((() => { const t = G.filter(((t) => t._id !== e._id)); K(t), ie(); })).catch(((e) => { console.log(e); })); }, card: B,
            })],
          }),
        }), Object(a.jsx)(k, {
          isOpen: U, onClose: ie, card: B, noClose: oe,
        })],
      });
    }; const L = function (e) { e && e instanceof Function && n.e(3).then(n.bind(null, 18)).then(((t) => { const n = t.getCLS; const a = t.getFID; const o = t.getFCP; const i = t.getLCP; const s = t.getTTFB; n(e), a(e), o(e), i(e), s(e); })); }; c.a.render(Object(a.jsx)(i.a.StrictMode, { children: Object(a.jsx)(T, {}) }), document.getElementById('root')), L();
  },
}, [[17, 1, 2]]]);
// # sourceMappingURL=main.2118d01d.chunk.js.map
