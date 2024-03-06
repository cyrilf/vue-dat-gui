import { defineComponent as U, mergeModels as nt, useModel as ot, openBlock as k, createElementBlock as P, createElementVNode as _, toDisplayString as ce, onMounted as di, nextTick as Fn, watch as Pe, getCurrentInstance as pi, getCurrentScope as Ds, onScopeDispose as Bs, unref as bt, ref as B, readonly as Ns, shallowRef as Vs, reactive as Oe, computed as W, createVNode as Ae, inject as hi, provide as Fs, normalizeClass as ie, normalizeStyle as J, Fragment as Ve, renderList as wt, createCommentVNode as z, resolveComponent as Y, createBlock as Q, withDirectives as Fe, vShow as St, createTextVNode as vi, renderSlot as zn, withCtx as Ho, resolveDynamicComponent as Lo, mergeProps as Do, Teleport as zs, pushScopeId as It, popScopeId as Ht, withKeys as Bo, vModelSelect as Ws, vModelText as Gs } from "vue";
const Us = { class: "control-item boolean" }, Ks = { ref: "label" }, qs = { class: "label-text" }, Ys = { class: "control" }, Xs = ["checked"], Js = /* @__PURE__ */ U({
  __name: "DatBoolean",
  props: /* @__PURE__ */ nt({
    label: { default: "" }
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = ot(e, "modelValue"), r = () => {
      t.value = !t.value;
    };
    return (n, o) => (k(), P("li", Us, [
      _("label", Ks, [
        _("span", qs, ce(n.label), 1),
        _("div", Ys, [
          _("input", {
            type: "checkbox",
            checked: t.value,
            onChange: r
          }, null, 40, Xs)
        ])
      ], 512)
    ]));
  }
}), Zs = { class: "control-item button" }, Qs = /* @__PURE__ */ U({
  __name: "DatButton",
  props: {
    label: { default: "" }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const r = t, n = (o) => r("click", o);
    return (o, a) => (k(), P("li", Zs, [
      _("label", {
        class: "w-100",
        ref: "label",
        onClick: n
      }, ce(o.label), 513)
    ]));
  }
});
function el(e) {
  return Ds() ? (Bs(e), !0) : !1;
}
function ar(e) {
  return typeof e == "function" ? e() : bt(e);
}
const gi = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const tl = Object.prototype.toString, rl = (e) => tl.call(e) === "[object Object]", _t = () => {
}, nl = /* @__PURE__ */ ol();
function ol() {
  var e, t;
  return gi && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function yi(e, t) {
  function r(...n) {
    return new Promise((o, a) => {
      Promise.resolve(e(() => t.apply(this, n), { fn: t, thisArg: this, args: n })).then(o).catch(a);
    });
  }
  return r;
}
const mi = (e) => e();
function al(e, t = {}) {
  let r, n, o = _t;
  const a = (i) => {
    clearTimeout(i), o(), o = _t;
  };
  return (i) => {
    const s = ar(e), c = ar(t.maxWait);
    return r && a(r), s <= 0 || c !== void 0 && c <= 0 ? (n && (a(n), n = null), Promise.resolve(i())) : new Promise((u, f) => {
      o = t.rejectOnCancel ? f : u, c && !n && (n = setTimeout(() => {
        r && a(r), n = null, u(i());
      }, c)), r = setTimeout(() => {
        n && a(n), n = null, u(i());
      }, s);
    });
  };
}
function il(e = mi) {
  const t = B(!0);
  function r() {
    t.value = !1;
  }
  function n() {
    t.value = !0;
  }
  const o = (...a) => {
    t.value && e(...a);
  };
  return { isActive: Ns(t), pause: r, resume: n, eventFilter: o };
}
function sl(e) {
  return e || pi();
}
function Ze(e, t = 200, r = {}) {
  return yi(
    al(t, r),
    e
  );
}
function ll(e, t, r = {}) {
  const {
    eventFilter: n = mi,
    ...o
  } = r;
  return Pe(
    e,
    yi(
      n,
      t
    ),
    o
  );
}
function ul(e, t, r = {}) {
  const {
    eventFilter: n,
    ...o
  } = r, { eventFilter: a, pause: l, resume: i, isActive: s } = il(n);
  return { stop: ll(
    e,
    t,
    {
      ...o,
      eventFilter: a
    }
  ), pause: l, resume: i, isActive: s };
}
function at(e, t = !0, r) {
  sl() ? di(e, r) : t ? e() : Fn(e);
}
function oe(e, t, r) {
  return Pe(
    e,
    (n, o, a) => {
      n && t(n, o, a);
    },
    r
  );
}
function Yt(e) {
  var t;
  const r = ar(e);
  return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
const ir = gi ? window : void 0;
function Zt(...e) {
  let t, r, n, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([r, n, o] = e, t = ir) : [t, r, n, o] = e, !t)
    return _t;
  Array.isArray(r) || (r = [r]), Array.isArray(n) || (n = [n]);
  const a = [], l = () => {
    a.forEach((u) => u()), a.length = 0;
  }, i = (u, f, p, d) => (u.addEventListener(f, p, d), () => u.removeEventListener(f, p, d)), s = Pe(
    () => [Yt(t), ar(o)],
    ([u, f]) => {
      if (l(), !u)
        return;
      const p = rl(f) ? { ...f } : f;
      a.push(
        ...r.flatMap((d) => n.map((h) => i(u, d, h, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    s(), l();
  };
  return el(c), c;
}
let No = !1;
function cl(e, t, r = {}) {
  const { window: n = ir, ignore: o = [], capture: a = !0, detectIframe: l = !1 } = r;
  if (!n)
    return _t;
  nl && !No && (No = !0, Array.from(n.document.body.children).forEach((p) => p.addEventListener("click", _t)), n.document.documentElement.addEventListener("click", _t));
  let i = !0;
  const s = (p) => o.some((d) => {
    if (typeof d == "string")
      return Array.from(n.document.querySelectorAll(d)).some((h) => h === p.target || p.composedPath().includes(h));
    {
      const h = Yt(d);
      return h && (p.target === h || p.composedPath().includes(h));
    }
  }), u = [
    Zt(n, "click", (p) => {
      const d = Yt(e);
      if (!(!d || d === p.target || p.composedPath().includes(d))) {
        if (p.detail === 0 && (i = !s(p)), !i) {
          i = !0;
          return;
        }
        t(p);
      }
    }, { passive: !0, capture: a }),
    Zt(n, "pointerdown", (p) => {
      const d = Yt(e);
      i = !s(p) && !!(d && !p.composedPath().includes(d));
    }, { passive: !0 }),
    l && Zt(n, "blur", (p) => {
      setTimeout(() => {
        var d;
        const h = Yt(e);
        ((d = n.document.activeElement) == null ? void 0 : d.tagName) === "IFRAME" && !(h != null && h.contains(n.document.activeElement)) && t(p);
      }, 0);
    })
  ].filter(Boolean);
  return () => u.forEach((p) => p());
}
const mr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, br = "__vueuse_ssr_handlers__", fl = /* @__PURE__ */ dl();
function dl() {
  return br in mr || (mr[br] = mr[br] || {}), mr[br];
}
function pl(e, t) {
  return fl[e] || t;
}
function hl(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const vl = {
  boolean: {
    read: (e) => e === "true",
    write: (e) => String(e)
  },
  object: {
    read: (e) => JSON.parse(e),
    write: (e) => JSON.stringify(e)
  },
  number: {
    read: (e) => Number.parseFloat(e),
    write: (e) => String(e)
  },
  any: {
    read: (e) => e,
    write: (e) => String(e)
  },
  string: {
    read: (e) => e,
    write: (e) => String(e)
  },
  map: {
    read: (e) => new Map(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e.entries()))
  },
  set: {
    read: (e) => new Set(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e))
  },
  date: {
    read: (e) => new Date(e),
    write: (e) => e.toISOString()
  }
}, Vo = "vueuse-storage";
function gl(e, t, r, n = {}) {
  var o;
  const {
    flush: a = "pre",
    deep: l = !0,
    listenToStorageChanges: i = !0,
    writeDefaults: s = !0,
    mergeDefaults: c = !1,
    shallow: u,
    window: f = ir,
    eventFilter: p,
    onError: d = (m) => {
      console.error(m);
    },
    initOnMounted: h
  } = n, g = (u ? Vs : B)(typeof t == "function" ? t() : t);
  if (!r)
    try {
      r = pl("getDefaultStorage", () => {
        var m;
        return (m = ir) == null ? void 0 : m.localStorage;
      })();
    } catch (m) {
      d(m);
    }
  if (!r)
    return g;
  const v = ar(t), y = hl(v), C = (o = n.serializer) != null ? o : vl[y], { pause: x, resume: S } = ul(
    g,
    () => T(g.value),
    { flush: a, deep: l, eventFilter: p }
  );
  return f && i && at(() => {
    Zt(f, "storage", L), Zt(f, Vo, R), h && L();
  }), h || L(), g;
  function T(m) {
    try {
      if (m == null)
        r.removeItem(e);
      else {
        const O = C.write(m), b = r.getItem(e);
        b !== O && (r.setItem(e, O), f && f.dispatchEvent(new CustomEvent(Vo, {
          detail: {
            key: e,
            oldValue: b,
            newValue: O,
            storageArea: r
          }
        })));
      }
    } catch (O) {
      d(O);
    }
  }
  function $(m) {
    const O = m ? m.newValue : r.getItem(e);
    if (O == null)
      return s && v != null && r.setItem(e, C.write(v)), v;
    if (!m && c) {
      const b = C.read(O);
      return typeof c == "function" ? c(b, v) : y === "object" && !Array.isArray(b) ? { ...v, ...b } : b;
    } else
      return typeof O != "string" ? O : C.read(O);
  }
  function R(m) {
    L(m.detail);
  }
  function L(m) {
    if (!(m && m.storageArea !== r)) {
      if (m && m.key == null) {
        g.value = v;
        return;
      }
      if (!(m && m.key !== e)) {
        x();
        try {
          (m == null ? void 0 : m.newValue) !== C.write(g.value) && (g.value = $(m));
        } catch (O) {
          d(O);
        } finally {
          m ? Fn(S) : S();
        }
      }
    }
  }
}
function Wn(e, t, r = {}) {
  const { window: n = ir } = r;
  return gl(e, t, n == null ? void 0 : n.localStorage, r);
}
function Ar(e) {
  "@babel/helpers - typeof";
  return Ar = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ar(e);
}
var yl = /^\s+/, ml = /\s+$/;
function w(e, t) {
  if (e = e || "", t = t || {}, e instanceof w)
    return e;
  if (!(this instanceof w))
    return new w(e, t);
  var r = bl(e);
  this._originalInput = e, this._r = r.r, this._g = r.g, this._b = r.b, this._a = r.a, this._roundA = Math.round(100 * this._a) / 100, this._format = t.format || r.format, this._gradientType = t.gradientType, this._r < 1 && (this._r = Math.round(this._r)), this._g < 1 && (this._g = Math.round(this._g)), this._b < 1 && (this._b = Math.round(this._b)), this._ok = r.ok;
}
w.prototype = {
  isDark: function() {
    return this.getBrightness() < 128;
  },
  isLight: function() {
    return !this.isDark();
  },
  isValid: function() {
    return this._ok;
  },
  getOriginalInput: function() {
    return this._originalInput;
  },
  getFormat: function() {
    return this._format;
  },
  getAlpha: function() {
    return this._a;
  },
  getBrightness: function() {
    var t = this.toRgb();
    return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
  },
  getLuminance: function() {
    var t = this.toRgb(), r, n, o, a, l, i;
    return r = t.r / 255, n = t.g / 255, o = t.b / 255, r <= 0.03928 ? a = r / 12.92 : a = Math.pow((r + 0.055) / 1.055, 2.4), n <= 0.03928 ? l = n / 12.92 : l = Math.pow((n + 0.055) / 1.055, 2.4), o <= 0.03928 ? i = o / 12.92 : i = Math.pow((o + 0.055) / 1.055, 2.4), 0.2126 * a + 0.7152 * l + 0.0722 * i;
  },
  setAlpha: function(t) {
    return this._a = bi(t), this._roundA = Math.round(100 * this._a) / 100, this;
  },
  toHsv: function() {
    var t = zo(this._r, this._g, this._b);
    return {
      h: t.h * 360,
      s: t.s,
      v: t.v,
      a: this._a
    };
  },
  toHsvString: function() {
    var t = zo(this._r, this._g, this._b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.v * 100);
    return this._a == 1 ? "hsv(" + r + ", " + n + "%, " + o + "%)" : "hsva(" + r + ", " + n + "%, " + o + "%, " + this._roundA + ")";
  },
  toHsl: function() {
    var t = Fo(this._r, this._g, this._b);
    return {
      h: t.h * 360,
      s: t.s,
      l: t.l,
      a: this._a
    };
  },
  toHslString: function() {
    var t = Fo(this._r, this._g, this._b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.l * 100);
    return this._a == 1 ? "hsl(" + r + ", " + n + "%, " + o + "%)" : "hsla(" + r + ", " + n + "%, " + o + "%, " + this._roundA + ")";
  },
  toHex: function(t) {
    return Wo(this._r, this._g, this._b, t);
  },
  toHexString: function(t) {
    return "#" + this.toHex(t);
  },
  toHex8: function(t) {
    return Sl(this._r, this._g, this._b, this._a, t);
  },
  toHex8String: function(t) {
    return "#" + this.toHex8(t);
  },
  toRgb: function() {
    return {
      r: Math.round(this._r),
      g: Math.round(this._g),
      b: Math.round(this._b),
      a: this._a
    };
  },
  toRgbString: function() {
    return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
  },
  toPercentageRgb: function() {
    return {
      r: Math.round(F(this._r, 255) * 100) + "%",
      g: Math.round(F(this._g, 255) * 100) + "%",
      b: Math.round(F(this._b, 255) * 100) + "%",
      a: this._a
    };
  },
  toPercentageRgbString: function() {
    return this._a == 1 ? "rgb(" + Math.round(F(this._r, 255) * 100) + "%, " + Math.round(F(this._g, 255) * 100) + "%, " + Math.round(F(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(F(this._r, 255) * 100) + "%, " + Math.round(F(this._g, 255) * 100) + "%, " + Math.round(F(this._b, 255) * 100) + "%, " + this._roundA + ")";
  },
  toName: function() {
    return this._a === 0 ? "transparent" : this._a < 1 ? !1 : Il[Wo(this._r, this._g, this._b, !0)] || !1;
  },
  toFilter: function(t) {
    var r = "#" + Go(this._r, this._g, this._b, this._a), n = r, o = this._gradientType ? "GradientType = 1, " : "";
    if (t) {
      var a = w(t);
      n = "#" + Go(a._r, a._g, a._b, a._a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + o + "startColorstr=" + r + ",endColorstr=" + n + ")";
  },
  toString: function(t) {
    var r = !!t;
    t = t || this._format;
    var n = !1, o = this._a < 1 && this._a >= 0, a = !r && o && (t === "hex" || t === "hex6" || t === "hex3" || t === "hex4" || t === "hex8" || t === "name");
    return a ? t === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (n = this.toRgbString()), t === "prgb" && (n = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (n = this.toHexString()), t === "hex3" && (n = this.toHexString(!0)), t === "hex4" && (n = this.toHex8String(!0)), t === "hex8" && (n = this.toHex8String()), t === "name" && (n = this.toName()), t === "hsl" && (n = this.toHslString()), t === "hsv" && (n = this.toHsvString()), n || this.toHexString());
  },
  clone: function() {
    return w(this.toString());
  },
  _applyModification: function(t, r) {
    var n = t.apply(null, [this].concat([].slice.call(r)));
    return this._r = n._r, this._g = n._g, this._b = n._b, this.setAlpha(n._a), this;
  },
  lighten: function() {
    return this._applyModification(kl, arguments);
  },
  brighten: function() {
    return this._applyModification($l, arguments);
  },
  darken: function() {
    return this._applyModification(El, arguments);
  },
  desaturate: function() {
    return this._applyModification(xl, arguments);
  },
  saturate: function() {
    return this._applyModification(Ol, arguments);
  },
  greyscale: function() {
    return this._applyModification(Al, arguments);
  },
  spin: function() {
    return this._applyModification(Tl, arguments);
  },
  _applyCombination: function(t, r) {
    return t.apply(null, [this].concat([].slice.call(r)));
  },
  analogous: function() {
    return this._applyCombination(Pl, arguments);
  },
  complement: function() {
    return this._applyCombination(Ml, arguments);
  },
  monochromatic: function() {
    return this._applyCombination(jl, arguments);
  },
  splitcomplement: function() {
    return this._applyCombination(Rl, arguments);
  },
  // Disabled until https://github.com/bgrins/TinyColor/issues/254
  // polyad: function (number) {
  //   return this._applyCombination(polyad, [number]);
  // },
  triad: function() {
    return this._applyCombination(Uo, [3]);
  },
  tetrad: function() {
    return this._applyCombination(Uo, [4]);
  }
};
w.fromRatio = function(e, t) {
  if (Ar(e) == "object") {
    var r = {};
    for (var n in e)
      e.hasOwnProperty(n) && (n === "a" ? r[n] = e[n] : r[n] = Xt(e[n]));
    e = r;
  }
  return w(e, t);
};
function bl(e) {
  var t = {
    r: 0,
    g: 0,
    b: 0
  }, r = 1, n = null, o = null, a = null, l = !1, i = !1;
  return typeof e == "string" && (e = Bl(e)), Ar(e) == "object" && (Te(e.r) && Te(e.g) && Te(e.b) ? (t = _l(e.r, e.g, e.b), l = !0, i = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Te(e.h) && Te(e.s) && Te(e.v) ? (n = Xt(e.s), o = Xt(e.v), t = wl(e.h, n, o), l = !0, i = "hsv") : Te(e.h) && Te(e.s) && Te(e.l) && (n = Xt(e.s), a = Xt(e.l), t = Cl(e.h, n, a), l = !0, i = "hsl"), e.hasOwnProperty("a") && (r = e.a)), r = bi(r), {
    ok: l,
    format: e.format || i,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
function _l(e, t, r) {
  return {
    r: F(e, 255) * 255,
    g: F(t, 255) * 255,
    b: F(r, 255) * 255
  };
}
function Fo(e, t, r) {
  e = F(e, 255), t = F(t, 255), r = F(r, 255);
  var n = Math.max(e, t, r), o = Math.min(e, t, r), a, l, i = (n + o) / 2;
  if (n == o)
    a = l = 0;
  else {
    var s = n - o;
    switch (l = i > 0.5 ? s / (2 - n - o) : s / (n + o), n) {
      case e:
        a = (t - r) / s + (t < r ? 6 : 0);
        break;
      case t:
        a = (r - e) / s + 2;
        break;
      case r:
        a = (e - t) / s + 4;
        break;
    }
    a /= 6;
  }
  return {
    h: a,
    s: l,
    l: i
  };
}
function Cl(e, t, r) {
  var n, o, a;
  e = F(e, 360), t = F(t, 100), r = F(r, 100);
  function l(c, u, f) {
    return f < 0 && (f += 1), f > 1 && (f -= 1), f < 1 / 6 ? c + (u - c) * 6 * f : f < 1 / 2 ? u : f < 2 / 3 ? c + (u - c) * (2 / 3 - f) * 6 : c;
  }
  if (t === 0)
    n = o = a = r;
  else {
    var i = r < 0.5 ? r * (1 + t) : r + t - r * t, s = 2 * r - i;
    n = l(s, i, e + 1 / 3), o = l(s, i, e), a = l(s, i, e - 1 / 3);
  }
  return {
    r: n * 255,
    g: o * 255,
    b: a * 255
  };
}
function zo(e, t, r) {
  e = F(e, 255), t = F(t, 255), r = F(r, 255);
  var n = Math.max(e, t, r), o = Math.min(e, t, r), a, l, i = n, s = n - o;
  if (l = n === 0 ? 0 : s / n, n == o)
    a = 0;
  else {
    switch (n) {
      case e:
        a = (t - r) / s + (t < r ? 6 : 0);
        break;
      case t:
        a = (r - e) / s + 2;
        break;
      case r:
        a = (e - t) / s + 4;
        break;
    }
    a /= 6;
  }
  return {
    h: a,
    s: l,
    v: i
  };
}
function wl(e, t, r) {
  e = F(e, 360) * 6, t = F(t, 100), r = F(r, 100);
  var n = Math.floor(e), o = e - n, a = r * (1 - t), l = r * (1 - o * t), i = r * (1 - (1 - o) * t), s = n % 6, c = [r, l, a, a, i, r][s], u = [i, r, r, l, a, a][s], f = [a, a, i, r, r, l][s];
  return {
    r: c * 255,
    g: u * 255,
    b: f * 255
  };
}
function Wo(e, t, r, n) {
  var o = [xe(Math.round(e).toString(16)), xe(Math.round(t).toString(16)), xe(Math.round(r).toString(16))];
  return n && o[0].charAt(0) == o[0].charAt(1) && o[1].charAt(0) == o[1].charAt(1) && o[2].charAt(0) == o[2].charAt(1) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function Sl(e, t, r, n, o) {
  var a = [xe(Math.round(e).toString(16)), xe(Math.round(t).toString(16)), xe(Math.round(r).toString(16)), xe(_i(n))];
  return o && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) && a[3].charAt(0) == a[3].charAt(1) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function Go(e, t, r, n) {
  var o = [xe(_i(n)), xe(Math.round(e).toString(16)), xe(Math.round(t).toString(16)), xe(Math.round(r).toString(16))];
  return o.join("");
}
w.equals = function(e, t) {
  return !e || !t ? !1 : w(e).toRgbString() == w(t).toRgbString();
};
w.random = function() {
  return w.fromRatio({
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  });
};
function xl(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = w(e).toHsl();
  return r.s -= t / 100, r.s = Vr(r.s), w(r);
}
function Ol(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = w(e).toHsl();
  return r.s += t / 100, r.s = Vr(r.s), w(r);
}
function Al(e) {
  return w(e).desaturate(100);
}
function kl(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = w(e).toHsl();
  return r.l += t / 100, r.l = Vr(r.l), w(r);
}
function $l(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = w(e).toRgb();
  return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), w(r);
}
function El(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = w(e).toHsl();
  return r.l -= t / 100, r.l = Vr(r.l), w(r);
}
function Tl(e, t) {
  var r = w(e).toHsl(), n = (r.h + t) % 360;
  return r.h = n < 0 ? 360 + n : n, w(r);
}
function Ml(e) {
  var t = w(e).toHsl();
  return t.h = (t.h + 180) % 360, w(t);
}
function Uo(e, t) {
  if (isNaN(t) || t <= 0)
    throw new Error("Argument to polyad must be a positive number");
  for (var r = w(e).toHsl(), n = [w(e)], o = 360 / t, a = 1; a < t; a++)
    n.push(w({
      h: (r.h + a * o) % 360,
      s: r.s,
      l: r.l
    }));
  return n;
}
function Rl(e) {
  var t = w(e).toHsl(), r = t.h;
  return [w(e), w({
    h: (r + 72) % 360,
    s: t.s,
    l: t.l
  }), w({
    h: (r + 216) % 360,
    s: t.s,
    l: t.l
  })];
}
function Pl(e, t, r) {
  t = t || 6, r = r || 30;
  var n = w(e).toHsl(), o = 360 / r, a = [w(e)];
  for (n.h = (n.h - (o * t >> 1) + 720) % 360; --t; )
    n.h = (n.h + o) % 360, a.push(w(n));
  return a;
}
function jl(e, t) {
  t = t || 6;
  for (var r = w(e).toHsv(), n = r.h, o = r.s, a = r.v, l = [], i = 1 / t; t--; )
    l.push(w({
      h: n,
      s: o,
      v: a
    })), a = (a + i) % 1;
  return l;
}
w.mix = function(e, t, r) {
  r = r === 0 ? 0 : r || 50;
  var n = w(e).toRgb(), o = w(t).toRgb(), a = r / 100, l = {
    r: (o.r - n.r) * a + n.r,
    g: (o.g - n.g) * a + n.g,
    b: (o.b - n.b) * a + n.b,
    a: (o.a - n.a) * a + n.a
  };
  return w(l);
};
w.readability = function(e, t) {
  var r = w(e), n = w(t);
  return (Math.max(r.getLuminance(), n.getLuminance()) + 0.05) / (Math.min(r.getLuminance(), n.getLuminance()) + 0.05);
};
w.isReadable = function(e, t, r) {
  var n = w.readability(e, t), o, a;
  switch (a = !1, o = Nl(r), o.level + o.size) {
    case "AAsmall":
    case "AAAlarge":
      a = n >= 4.5;
      break;
    case "AAlarge":
      a = n >= 3;
      break;
    case "AAAsmall":
      a = n >= 7;
      break;
  }
  return a;
};
w.mostReadable = function(e, t, r) {
  var n = null, o = 0, a, l, i, s;
  r = r || {}, l = r.includeFallbackColors, i = r.level, s = r.size;
  for (var c = 0; c < t.length; c++)
    a = w.readability(e, t[c]), a > o && (o = a, n = w(t[c]));
  return w.isReadable(e, n, {
    level: i,
    size: s
  }) || !l ? n : (r.includeFallbackColors = !1, w.mostReadable(e, ["#fff", "#000"], r));
};
var An = w.names = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
}, Il = w.hexNames = Hl(An);
function Hl(e) {
  var t = {};
  for (var r in e)
    e.hasOwnProperty(r) && (t[e[r]] = r);
  return t;
}
function bi(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function F(e, t) {
  Ll(e) && (e = "100%");
  var r = Dl(e);
  return e = Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(e * t, 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : e % t / parseFloat(t);
}
function Vr(e) {
  return Math.min(1, Math.max(0, e));
}
function pe(e) {
  return parseInt(e, 16);
}
function Ll(e) {
  return typeof e == "string" && e.indexOf(".") != -1 && parseFloat(e) === 1;
}
function Dl(e) {
  return typeof e == "string" && e.indexOf("%") != -1;
}
function xe(e) {
  return e.length == 1 ? "0" + e : "" + e;
}
function Xt(e) {
  return e <= 1 && (e = e * 100 + "%"), e;
}
function _i(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Ko(e) {
  return pe(e) / 255;
}
var Se = function() {
  var e = "[-\\+]?\\d+%?", t = "[-\\+]?\\d*\\.\\d+%?", r = "(?:" + t + ")|(?:" + e + ")", n = "[\\s|\\(]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?", o = "[\\s|\\(]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?";
  return {
    CSS_UNIT: new RegExp(r),
    rgb: new RegExp("rgb" + n),
    rgba: new RegExp("rgba" + o),
    hsl: new RegExp("hsl" + n),
    hsla: new RegExp("hsla" + o),
    hsv: new RegExp("hsv" + n),
    hsva: new RegExp("hsva" + o),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
}();
function Te(e) {
  return !!Se.CSS_UNIT.exec(e);
}
function Bl(e) {
  e = e.replace(yl, "").replace(ml, "").toLowerCase();
  var t = !1;
  if (An[e])
    e = An[e], t = !0;
  else if (e == "transparent")
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: "name"
    };
  var r;
  return (r = Se.rgb.exec(e)) ? {
    r: r[1],
    g: r[2],
    b: r[3]
  } : (r = Se.rgba.exec(e)) ? {
    r: r[1],
    g: r[2],
    b: r[3],
    a: r[4]
  } : (r = Se.hsl.exec(e)) ? {
    h: r[1],
    s: r[2],
    l: r[3]
  } : (r = Se.hsla.exec(e)) ? {
    h: r[1],
    s: r[2],
    l: r[3],
    a: r[4]
  } : (r = Se.hsv.exec(e)) ? {
    h: r[1],
    s: r[2],
    v: r[3]
  } : (r = Se.hsva.exec(e)) ? {
    h: r[1],
    s: r[2],
    v: r[3],
    a: r[4]
  } : (r = Se.hex8.exec(e)) ? {
    r: pe(r[1]),
    g: pe(r[2]),
    b: pe(r[3]),
    a: Ko(r[4]),
    format: t ? "name" : "hex8"
  } : (r = Se.hex6.exec(e)) ? {
    r: pe(r[1]),
    g: pe(r[2]),
    b: pe(r[3]),
    format: t ? "name" : "hex"
  } : (r = Se.hex4.exec(e)) ? {
    r: pe(r[1] + "" + r[1]),
    g: pe(r[2] + "" + r[2]),
    b: pe(r[3] + "" + r[3]),
    a: Ko(r[4] + "" + r[4]),
    format: t ? "name" : "hex8"
  } : (r = Se.hex3.exec(e)) ? {
    r: pe(r[1] + "" + r[1]),
    g: pe(r[2] + "" + r[2]),
    b: pe(r[3] + "" + r[3]),
    format: t ? "name" : "hex"
  } : !1;
}
function Nl(e) {
  var t, r;
  return e = e || {
    level: "AA",
    size: "small"
  }, t = (e.level || "AA").toUpperCase(), r = (e.size || "small").toLowerCase(), t !== "AA" && t !== "AAA" && (t = "AA"), r !== "small" && r !== "large" && (r = "small"), {
    level: t,
    size: r
  };
}
var it = it || {};
it.stringify = /* @__PURE__ */ function() {
  var e = {
    "visit_linear-gradient": function(t) {
      return e.visit_gradient(t);
    },
    "visit_repeating-linear-gradient": function(t) {
      return e.visit_gradient(t);
    },
    "visit_radial-gradient": function(t) {
      return e.visit_gradient(t);
    },
    "visit_repeating-radial-gradient": function(t) {
      return e.visit_gradient(t);
    },
    visit_gradient: function(t) {
      var r = e.visit(t.orientation);
      return r && (r += ", "), t.type + "(" + r + e.visit(t.colorStops) + ")";
    },
    visit_shape: function(t) {
      var r = t.value, n = e.visit(t.at), o = e.visit(t.style);
      return o && (r += " " + o), n && (r += " at " + n), r;
    },
    "visit_default-radial": function(t) {
      var r = "", n = e.visit(t.at);
      return n && (r += n), r;
    },
    "visit_extent-keyword": function(t) {
      var r = t.value, n = e.visit(t.at);
      return n && (r += " at " + n), r;
    },
    "visit_position-keyword": function(t) {
      return t.value;
    },
    visit_position: function(t) {
      return e.visit(t.value.x) + " " + e.visit(t.value.y);
    },
    "visit_%": function(t) {
      return t.value + "%";
    },
    visit_em: function(t) {
      return t.value + "em";
    },
    visit_px: function(t) {
      return t.value + "px";
    },
    visit_literal: function(t) {
      return e.visit_color(t.value, t);
    },
    visit_hex: function(t) {
      return e.visit_color("#" + t.value, t);
    },
    visit_rgb: function(t) {
      return e.visit_color("rgb(" + t.value.join(", ") + ")", t);
    },
    visit_rgba: function(t) {
      return e.visit_color("rgba(" + t.value.join(", ") + ")", t);
    },
    visit_color: function(t, r) {
      var n = t, o = e.visit(r.length);
      return o && (n += " " + o), n;
    },
    visit_angular: function(t) {
      return t.value + "deg";
    },
    visit_directional: function(t) {
      return "to " + t.value;
    },
    visit_array: function(t) {
      var r = "", n = t.length;
      return t.forEach(function(o, a) {
        r += e.visit(o), a < n - 1 && (r += ", ");
      }), r;
    },
    visit: function(t) {
      if (!t)
        return "";
      var r = "";
      if (t instanceof Array)
        return e.visit_array(t, r);
      if (t.type) {
        var n = e["visit_" + t.type];
        if (n)
          return n(t);
        throw Error("Missing visitor visit_" + t.type);
      } else
        throw Error("Invalid node.");
    }
  };
  return function(t) {
    return e.visit(t);
  };
}();
var it = it || {};
it.parse = /* @__PURE__ */ function() {
  var e = {
    linearGradient: /^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,
    repeatingLinearGradient: /^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,
    radialGradient: /^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,
    repeatingRadialGradient: /^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,
    sideOrCorner: /^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,
    extentKeywords: /^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,
    positionKeywords: /^(left|center|right|top|bottom)/i,
    pixelValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,
    percentageValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,
    emValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,
    angleValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,
    startCall: /^\(/,
    endCall: /^\)/,
    comma: /^,/,
    hexColor: /^\#([0-9a-fA-F]+)/,
    literalColor: /^([a-zA-Z]+)/,
    rgbColor: /^rgb/i,
    rgbaColor: /^rgba/i,
    number: /^(([0-9]*\.[0-9]+)|([0-9]+\.?))/
  }, t = "";
  function r(A) {
    var H = new Error(t + ": " + A);
    throw H.source = t, H;
  }
  function n() {
    var A = o();
    return t.length > 0 && r("Invalid input not EOF"), A;
  }
  function o() {
    return x(a);
  }
  function a() {
    return l(
      "linear-gradient",
      e.linearGradient,
      s
    ) || l(
      "repeating-linear-gradient",
      e.repeatingLinearGradient,
      s
    ) || l(
      "radial-gradient",
      e.radialGradient,
      f
    ) || l(
      "repeating-radial-gradient",
      e.repeatingRadialGradient,
      f
    );
  }
  function l(A, H, D) {
    return i(H, function(le) {
      var De = D();
      return De && (Z(e.comma) || r("Missing comma before color stops")), {
        type: A,
        orientation: De,
        colorStops: x(S)
      };
    });
  }
  function i(A, H) {
    var D = Z(A);
    if (D) {
      Z(e.startCall) || r("Missing (");
      var le = H(D);
      return Z(e.endCall) || r("Missing )"), le;
    }
  }
  function s() {
    return c() || u();
  }
  function c() {
    return I("directional", e.sideOrCorner, 1);
  }
  function u() {
    return I("angular", e.angleValue, 1);
  }
  function f() {
    var A, H = p(), D;
    return H && (A = [], A.push(H), D = t, Z(e.comma) && (H = p(), H ? A.push(H) : t = D)), A;
  }
  function p() {
    var A = d() || h();
    if (A)
      A.at = v();
    else {
      var H = g();
      if (H) {
        A = H;
        var D = v();
        D && (A.at = D);
      } else {
        var le = y();
        le && (A = {
          type: "default-radial",
          at: le
        });
      }
    }
    return A;
  }
  function d() {
    var A = I("shape", /^(circle)/i, 0);
    return A && (A.style = E() || g()), A;
  }
  function h() {
    var A = I("shape", /^(ellipse)/i, 0);
    return A && (A.style = b() || g()), A;
  }
  function g() {
    return I("extent-keyword", e.extentKeywords, 1);
  }
  function v() {
    if (I("position", /^at/, 0)) {
      var A = y();
      return A || r("Missing positioning value"), A;
    }
  }
  function y() {
    var A = C();
    if (A.x || A.y)
      return {
        type: "position",
        value: A
      };
  }
  function C() {
    return {
      x: b(),
      y: b()
    };
  }
  function x(A) {
    var H = A(), D = [];
    if (H)
      for (D.push(H); Z(e.comma); )
        H = A(), H ? D.push(H) : r("One extra comma");
    return D;
  }
  function S() {
    var A = T();
    return A || r("Expected color definition"), A.length = b(), A;
  }
  function T() {
    return R() || m() || L() || $();
  }
  function $() {
    return I("literal", e.literalColor, 0);
  }
  function R() {
    return I("hex", e.hexColor, 1);
  }
  function L() {
    return i(e.rgbColor, function() {
      return {
        type: "rgb",
        value: x(O)
      };
    });
  }
  function m() {
    return i(e.rgbaColor, function() {
      return {
        type: "rgba",
        value: x(O)
      };
    });
  }
  function O() {
    return Z(e.number)[1];
  }
  function b() {
    return I("%", e.percentageValue, 1) || j() || E();
  }
  function j() {
    return I("position-keyword", e.positionKeywords, 1);
  }
  function E() {
    return I("px", e.pixelValue, 1) || I("em", e.emValue, 1);
  }
  function I(A, H, D) {
    var le = Z(H);
    if (le)
      return {
        type: A,
        value: le[D]
      };
  }
  function Z(A) {
    var H, D;
    return D = /^[\n\r\t\s]+/.exec(t), D && te(D[0].length), H = A.exec(t), H && te(H[0].length), H;
  }
  function te(A) {
    t = t.substr(A);
  }
  return function(A) {
    return t = A.toString(), n();
  };
}();
var Vl = it.parse, Fl = it.stringify, fe = "top", _e = "bottom", Ce = "right", de = "left", Gn = "auto", fr = [fe, _e, Ce, de], xt = "start", sr = "end", zl = "clippingParents", Ci = "viewport", Wt = "popper", Wl = "reference", qo = /* @__PURE__ */ fr.reduce(function(e, t) {
  return e.concat([t + "-" + xt, t + "-" + sr]);
}, []), wi = /* @__PURE__ */ [].concat(fr, [Gn]).reduce(function(e, t) {
  return e.concat([t, t + "-" + xt, t + "-" + sr]);
}, []), Gl = "beforeRead", Ul = "read", Kl = "afterRead", ql = "beforeMain", Yl = "main", Xl = "afterMain", Jl = "beforeWrite", Zl = "write", Ql = "afterWrite", eu = [Gl, Ul, Kl, ql, Yl, Xl, Jl, Zl, Ql];
function Ee(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ve(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Qe(e) {
  var t = ve(e).Element;
  return e instanceof t || e instanceof Element;
}
function me(e) {
  var t = ve(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Un(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = ve(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function tu(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, a = t.elements[r];
    !me(a) || !Ee(a) || (Object.assign(a.style, n), Object.keys(o).forEach(function(l) {
      var i = o[l];
      i === !1 ? a.removeAttribute(l) : a.setAttribute(l, i === !0 ? "" : i);
    }));
  });
}
function ru(e) {
  var t = e.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var o = t.elements[n], a = t.attributes[n] || {}, l = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), i = l.reduce(function(s, c) {
        return s[c] = "", s;
      }, {});
      !me(o) || !Ee(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(s) {
        o.removeAttribute(s);
      }));
    });
  };
}
const nu = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: tu,
  effect: ru,
  requires: ["computeStyles"]
};
function ke(e) {
  return e.split("-")[0];
}
var Je = Math.max, kr = Math.min, Ot = Math.round;
function kn() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Si() {
  return !/^((?!chrome|android).)*safari/i.test(kn());
}
function At(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, a = 1;
  t && me(e) && (o = e.offsetWidth > 0 && Ot(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Ot(n.height) / e.offsetHeight || 1);
  var l = Qe(e) ? ve(e) : window, i = l.visualViewport, s = !Si() && r, c = (n.left + (s && i ? i.offsetLeft : 0)) / o, u = (n.top + (s && i ? i.offsetTop : 0)) / a, f = n.width / o, p = n.height / a;
  return {
    width: f,
    height: p,
    top: u,
    right: c + f,
    bottom: u + p,
    left: c,
    x: c,
    y: u
  };
}
function Kn(e) {
  var t = At(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function xi(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Un(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function je(e) {
  return ve(e).getComputedStyle(e);
}
function ou(e) {
  return ["table", "td", "th"].indexOf(Ee(e)) >= 0;
}
function Ue(e) {
  return ((Qe(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Fr(e) {
  return Ee(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Un(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Ue(e)
  );
}
function Yo(e) {
  return !me(e) || // https://github.com/popperjs/popper-core/issues/837
  je(e).position === "fixed" ? null : e.offsetParent;
}
function au(e) {
  var t = /firefox/i.test(kn()), r = /Trident/i.test(kn());
  if (r && me(e)) {
    var n = je(e);
    if (n.position === "fixed")
      return null;
  }
  var o = Fr(e);
  for (Un(o) && (o = o.host); me(o) && ["html", "body"].indexOf(Ee(o)) < 0; ) {
    var a = je(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function dr(e) {
  for (var t = ve(e), r = Yo(e); r && ou(r) && je(r).position === "static"; )
    r = Yo(r);
  return r && (Ee(r) === "html" || Ee(r) === "body" && je(r).position === "static") ? t : r || au(e) || t;
}
function qn(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Qt(e, t, r) {
  return Je(e, kr(t, r));
}
function iu(e, t, r) {
  var n = Qt(e, t, r);
  return n > r ? r : n;
}
function Oi() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ai(e) {
  return Object.assign({}, Oi(), e);
}
function ki(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var su = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Ai(typeof t != "number" ? t : ki(t, fr));
};
function lu(e) {
  var t, r = e.state, n = e.name, o = e.options, a = r.elements.arrow, l = r.modifiersData.popperOffsets, i = ke(r.placement), s = qn(i), c = [de, Ce].indexOf(i) >= 0, u = c ? "height" : "width";
  if (!(!a || !l)) {
    var f = su(o.padding, r), p = Kn(a), d = s === "y" ? fe : de, h = s === "y" ? _e : Ce, g = r.rects.reference[u] + r.rects.reference[s] - l[s] - r.rects.popper[u], v = l[s] - r.rects.reference[s], y = dr(a), C = y ? s === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, x = g / 2 - v / 2, S = f[d], T = C - p[u] - f[h], $ = C / 2 - p[u] / 2 + x, R = Qt(S, $, T), L = s;
    r.modifiersData[n] = (t = {}, t[L] = R, t.centerOffset = R - $, t);
  }
}
function uu(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || xi(t.elements.popper, o) && (t.elements.arrow = o));
}
const cu = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: lu,
  effect: uu,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function kt(e) {
  return e.split("-")[1];
}
var fu = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function du(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Ot(r * o) / o || 0,
    y: Ot(n * o) / o || 0
  };
}
function Xo(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, a = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, f = e.isFixed, p = l.x, d = p === void 0 ? 0 : p, h = l.y, g = h === void 0 ? 0 : h, v = typeof u == "function" ? u({
    x: d,
    y: g
  }) : {
    x: d,
    y: g
  };
  d = v.x, g = v.y;
  var y = l.hasOwnProperty("x"), C = l.hasOwnProperty("y"), x = de, S = fe, T = window;
  if (c) {
    var $ = dr(r), R = "clientHeight", L = "clientWidth";
    if ($ === ve(r) && ($ = Ue(r), je($).position !== "static" && i === "absolute" && (R = "scrollHeight", L = "scrollWidth")), $ = $, o === fe || (o === de || o === Ce) && a === sr) {
      S = _e;
      var m = f && $ === T && T.visualViewport ? T.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        $[R]
      );
      g -= m - n.height, g *= s ? 1 : -1;
    }
    if (o === de || (o === fe || o === _e) && a === sr) {
      x = Ce;
      var O = f && $ === T && T.visualViewport ? T.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        $[L]
      );
      d -= O - n.width, d *= s ? 1 : -1;
    }
  }
  var b = Object.assign({
    position: i
  }, c && fu), j = u === !0 ? du({
    x: d,
    y: g
  }, ve(r)) : {
    x: d,
    y: g
  };
  if (d = j.x, g = j.y, s) {
    var E;
    return Object.assign({}, b, (E = {}, E[S] = C ? "0" : "", E[x] = y ? "0" : "", E.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + g + "px)" : "translate3d(" + d + "px, " + g + "px, 0)", E));
  }
  return Object.assign({}, b, (t = {}, t[S] = C ? g + "px" : "", t[x] = y ? d + "px" : "", t.transform = "", t));
}
function pu(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, a = r.adaptive, l = a === void 0 ? !0 : a, i = r.roundOffsets, s = i === void 0 ? !0 : i, c = {
    placement: ke(t.placement),
    variation: kt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Xo(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: s
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Xo(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const hu = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: pu,
  data: {}
};
var _r = {
  passive: !0
};
function vu(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, a = o === void 0 ? !0 : o, l = n.resize, i = l === void 0 ? !0 : l, s = ve(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && c.forEach(function(u) {
    u.addEventListener("scroll", r.update, _r);
  }), i && s.addEventListener("resize", r.update, _r), function() {
    a && c.forEach(function(u) {
      u.removeEventListener("scroll", r.update, _r);
    }), i && s.removeEventListener("resize", r.update, _r);
  };
}
const gu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: vu,
  data: {}
};
var yu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function xr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return yu[t];
  });
}
var mu = {
  start: "end",
  end: "start"
};
function Jo(e) {
  return e.replace(/start|end/g, function(t) {
    return mu[t];
  });
}
function Yn(e) {
  var t = ve(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Xn(e) {
  return At(Ue(e)).left + Yn(e).scrollLeft;
}
function bu(e, t) {
  var r = ve(e), n = Ue(e), o = r.visualViewport, a = n.clientWidth, l = n.clientHeight, i = 0, s = 0;
  if (o) {
    a = o.width, l = o.height;
    var c = Si();
    (c || !c && t === "fixed") && (i = o.offsetLeft, s = o.offsetTop);
  }
  return {
    width: a,
    height: l,
    x: i + Xn(e),
    y: s
  };
}
function _u(e) {
  var t, r = Ue(e), n = Yn(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = Je(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), l = Je(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -n.scrollLeft + Xn(e), s = -n.scrollTop;
  return je(o || r).direction === "rtl" && (i += Je(r.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: l,
    x: i,
    y: s
  };
}
function Jn(e) {
  var t = je(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function $i(e) {
  return ["html", "body", "#document"].indexOf(Ee(e)) >= 0 ? e.ownerDocument.body : me(e) && Jn(e) ? e : $i(Fr(e));
}
function er(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = $i(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = ve(n), l = o ? [a].concat(a.visualViewport || [], Jn(n) ? n : []) : n, i = t.concat(l);
  return o ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(er(Fr(l)))
  );
}
function $n(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Cu(e, t) {
  var r = At(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Zo(e, t, r) {
  return t === Ci ? $n(bu(e, r)) : Qe(t) ? Cu(t, r) : $n(_u(Ue(e)));
}
function wu(e) {
  var t = er(Fr(e)), r = ["absolute", "fixed"].indexOf(je(e).position) >= 0, n = r && me(e) ? dr(e) : e;
  return Qe(n) ? t.filter(function(o) {
    return Qe(o) && xi(o, n) && Ee(o) !== "body";
  }) : [];
}
function Su(e, t, r, n) {
  var o = t === "clippingParents" ? wu(e) : [].concat(t), a = [].concat(o, [r]), l = a[0], i = a.reduce(function(s, c) {
    var u = Zo(e, c, n);
    return s.top = Je(u.top, s.top), s.right = kr(u.right, s.right), s.bottom = kr(u.bottom, s.bottom), s.left = Je(u.left, s.left), s;
  }, Zo(e, l, n));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Ei(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? ke(n) : null, a = n ? kt(n) : null, l = t.x + t.width / 2 - r.width / 2, i = t.y + t.height / 2 - r.height / 2, s;
  switch (o) {
    case fe:
      s = {
        x: l,
        y: t.y - r.height
      };
      break;
    case _e:
      s = {
        x: l,
        y: t.y + t.height
      };
      break;
    case Ce:
      s = {
        x: t.x + t.width,
        y: i
      };
      break;
    case de:
      s = {
        x: t.x - r.width,
        y: i
      };
      break;
    default:
      s = {
        x: t.x,
        y: t.y
      };
  }
  var c = o ? qn(o) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (a) {
      case xt:
        s[c] = s[c] - (t[u] / 2 - r[u] / 2);
        break;
      case sr:
        s[c] = s[c] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return s;
}
function lr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, a = r.strategy, l = a === void 0 ? e.strategy : a, i = r.boundary, s = i === void 0 ? zl : i, c = r.rootBoundary, u = c === void 0 ? Ci : c, f = r.elementContext, p = f === void 0 ? Wt : f, d = r.altBoundary, h = d === void 0 ? !1 : d, g = r.padding, v = g === void 0 ? 0 : g, y = Ai(typeof v != "number" ? v : ki(v, fr)), C = p === Wt ? Wl : Wt, x = e.rects.popper, S = e.elements[h ? C : p], T = Su(Qe(S) ? S : S.contextElement || Ue(e.elements.popper), s, u, l), $ = At(e.elements.reference), R = Ei({
    reference: $,
    element: x,
    strategy: "absolute",
    placement: o
  }), L = $n(Object.assign({}, x, R)), m = p === Wt ? L : $, O = {
    top: T.top - m.top + y.top,
    bottom: m.bottom - T.bottom + y.bottom,
    left: T.left - m.left + y.left,
    right: m.right - T.right + y.right
  }, b = e.modifiersData.offset;
  if (p === Wt && b) {
    var j = b[o];
    Object.keys(O).forEach(function(E) {
      var I = [Ce, _e].indexOf(E) >= 0 ? 1 : -1, Z = [fe, _e].indexOf(E) >= 0 ? "y" : "x";
      O[E] += j[Z] * I;
    });
  }
  return O;
}
function xu(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, a = r.rootBoundary, l = r.padding, i = r.flipVariations, s = r.allowedAutoPlacements, c = s === void 0 ? wi : s, u = kt(n), f = u ? i ? qo : qo.filter(function(h) {
    return kt(h) === u;
  }) : fr, p = f.filter(function(h) {
    return c.indexOf(h) >= 0;
  });
  p.length === 0 && (p = f);
  var d = p.reduce(function(h, g) {
    return h[g] = lr(e, {
      placement: g,
      boundary: o,
      rootBoundary: a,
      padding: l
    })[ke(g)], h;
  }, {});
  return Object.keys(d).sort(function(h, g) {
    return d[h] - d[g];
  });
}
function Ou(e) {
  if (ke(e) === Gn)
    return [];
  var t = xr(e);
  return [Jo(e), t, Jo(t)];
}
function Au(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, a = o === void 0 ? !0 : o, l = r.altAxis, i = l === void 0 ? !0 : l, s = r.fallbackPlacements, c = r.padding, u = r.boundary, f = r.rootBoundary, p = r.altBoundary, d = r.flipVariations, h = d === void 0 ? !0 : d, g = r.allowedAutoPlacements, v = t.options.placement, y = ke(v), C = y === v, x = s || (C || !h ? [xr(v)] : Ou(v)), S = [v].concat(x).reduce(function(dt, Be) {
      return dt.concat(ke(Be) === Gn ? xu(t, {
        placement: Be,
        boundary: u,
        rootBoundary: f,
        padding: c,
        flipVariations: h,
        allowedAutoPlacements: g
      }) : Be);
    }, []), T = t.rects.reference, $ = t.rects.popper, R = /* @__PURE__ */ new Map(), L = !0, m = S[0], O = 0; O < S.length; O++) {
      var b = S[O], j = ke(b), E = kt(b) === xt, I = [fe, _e].indexOf(j) >= 0, Z = I ? "width" : "height", te = lr(t, {
        placement: b,
        boundary: u,
        rootBoundary: f,
        altBoundary: p,
        padding: c
      }), A = I ? E ? Ce : de : E ? _e : fe;
      T[Z] > $[Z] && (A = xr(A));
      var H = xr(A), D = [];
      if (a && D.push(te[j] <= 0), i && D.push(te[A] <= 0, te[H] <= 0), D.every(function(dt) {
        return dt;
      })) {
        m = b, L = !1;
        break;
      }
      R.set(b, D);
    }
    if (L)
      for (var le = h ? 3 : 1, De = function(Be) {
        var zt = S.find(function(gr) {
          var qe = R.get(gr);
          if (qe)
            return qe.slice(0, Be).every(function(tn) {
              return tn;
            });
        });
        if (zt)
          return m = zt, "break";
      }, Ke = le; Ke > 0; Ke--) {
        var ft = De(Ke);
        if (ft === "break")
          break;
      }
    t.placement !== m && (t.modifiersData[n]._skip = !0, t.placement = m, t.reset = !0);
  }
}
const ku = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Au,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Qo(e, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - r.y,
    right: e.right - t.width + r.x,
    bottom: e.bottom - t.height + r.y,
    left: e.left - t.width - r.x
  };
}
function ea(e) {
  return [fe, Ce, _e, de].some(function(t) {
    return e[t] >= 0;
  });
}
function $u(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, l = lr(t, {
    elementContext: "reference"
  }), i = lr(t, {
    altBoundary: !0
  }), s = Qo(l, n), c = Qo(i, o, a), u = ea(s), f = ea(c);
  t.modifiersData[r] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: f
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": f
  });
}
const Eu = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: $u
};
function Tu(e, t, r) {
  var n = ke(e), o = [de, fe].indexOf(n) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, l = a[0], i = a[1];
  return l = l || 0, i = (i || 0) * o, [de, Ce].indexOf(n) >= 0 ? {
    x: i,
    y: l
  } : {
    x: l,
    y: i
  };
}
function Mu(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, a = o === void 0 ? [0, 0] : o, l = wi.reduce(function(u, f) {
    return u[f] = Tu(f, t.rects, a), u;
  }, {}), i = l[t.placement], s = i.x, c = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += s, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = l;
}
const Ru = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Mu
};
function Pu(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Ei({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const ju = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Pu,
  data: {}
};
function Iu(e) {
  return e === "x" ? "y" : "x";
}
function Hu(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, a = o === void 0 ? !0 : o, l = r.altAxis, i = l === void 0 ? !1 : l, s = r.boundary, c = r.rootBoundary, u = r.altBoundary, f = r.padding, p = r.tether, d = p === void 0 ? !0 : p, h = r.tetherOffset, g = h === void 0 ? 0 : h, v = lr(t, {
    boundary: s,
    rootBoundary: c,
    padding: f,
    altBoundary: u
  }), y = ke(t.placement), C = kt(t.placement), x = !C, S = qn(y), T = Iu(S), $ = t.modifiersData.popperOffsets, R = t.rects.reference, L = t.rects.popper, m = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, O = typeof m == "number" ? {
    mainAxis: m,
    altAxis: m
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, m), b = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, j = {
    x: 0,
    y: 0
  };
  if ($) {
    if (a) {
      var E, I = S === "y" ? fe : de, Z = S === "y" ? _e : Ce, te = S === "y" ? "height" : "width", A = $[S], H = A + v[I], D = A - v[Z], le = d ? -L[te] / 2 : 0, De = C === xt ? R[te] : L[te], Ke = C === xt ? -L[te] : -R[te], ft = t.elements.arrow, dt = d && ft ? Kn(ft) : {
        width: 0,
        height: 0
      }, Be = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Oi(), zt = Be[I], gr = Be[Z], qe = Qt(0, R[te], dt[te]), tn = x ? R[te] / 2 - le - qe - zt - O.mainAxis : De - qe - zt - O.mainAxis, Rs = x ? -R[te] / 2 + le + qe + gr + O.mainAxis : Ke + qe + gr + O.mainAxis, rn = t.elements.arrow && dr(t.elements.arrow), Ps = rn ? S === "y" ? rn.clientTop || 0 : rn.clientLeft || 0 : 0, ko = (E = b == null ? void 0 : b[S]) != null ? E : 0, js = A + tn - ko - Ps, Is = A + Rs - ko, $o = Qt(d ? kr(H, js) : H, A, d ? Je(D, Is) : D);
      $[S] = $o, j[S] = $o - A;
    }
    if (i) {
      var Eo, Hs = S === "x" ? fe : de, Ls = S === "x" ? _e : Ce, Ye = $[T], yr = T === "y" ? "height" : "width", To = Ye + v[Hs], Mo = Ye - v[Ls], nn = [fe, de].indexOf(y) !== -1, Ro = (Eo = b == null ? void 0 : b[T]) != null ? Eo : 0, Po = nn ? To : Ye - R[yr] - L[yr] - Ro + O.altAxis, jo = nn ? Ye + R[yr] + L[yr] - Ro - O.altAxis : Mo, Io = d && nn ? iu(Po, Ye, jo) : Qt(d ? Po : To, Ye, d ? jo : Mo);
      $[T] = Io, j[T] = Io - Ye;
    }
    t.modifiersData[n] = j;
  }
}
const Lu = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Hu,
  requiresIfExists: ["offset"]
};
function Du(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Bu(e) {
  return e === ve(e) || !me(e) ? Yn(e) : Du(e);
}
function Nu(e) {
  var t = e.getBoundingClientRect(), r = Ot(t.width) / e.offsetWidth || 1, n = Ot(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Vu(e, t, r) {
  r === void 0 && (r = !1);
  var n = me(t), o = me(t) && Nu(t), a = Ue(t), l = At(e, o, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((Ee(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Jn(a)) && (i = Bu(t)), me(t) ? (s = At(t, !0), s.x += t.clientLeft, s.y += t.clientTop) : a && (s.x = Xn(a))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function Fu(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function o(a) {
    r.add(a.name);
    var l = [].concat(a.requires || [], a.requiresIfExists || []);
    l.forEach(function(i) {
      if (!r.has(i)) {
        var s = t.get(i);
        s && o(s);
      }
    }), n.push(a);
  }
  return e.forEach(function(a) {
    r.has(a.name) || o(a);
  }), n;
}
function zu(e) {
  var t = Fu(e);
  return eu.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function Wu(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Gu(e) {
  var t = e.reduce(function(r, n) {
    var o = r[n.name];
    return r[n.name] = o ? Object.assign({}, o, n, {
      options: Object.assign({}, o.options, n.options),
      data: Object.assign({}, o.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var ta = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ra() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Uu(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, a = o === void 0 ? ta : o;
  return function(i, s, c) {
    c === void 0 && (c = a);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ta, a),
      modifiersData: {},
      elements: {
        reference: i,
        popper: s
      },
      attributes: {},
      styles: {}
    }, f = [], p = !1, d = {
      state: u,
      setOptions: function(y) {
        var C = typeof y == "function" ? y(u.options) : y;
        g(), u.options = Object.assign({}, a, u.options, C), u.scrollParents = {
          reference: Qe(i) ? er(i) : i.contextElement ? er(i.contextElement) : [],
          popper: er(s)
        };
        var x = zu(Gu([].concat(n, u.options.modifiers)));
        return u.orderedModifiers = x.filter(function(S) {
          return S.enabled;
        }), h(), d.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!p) {
          var y = u.elements, C = y.reference, x = y.popper;
          if (ra(C, x)) {
            u.rects = {
              reference: Vu(C, dr(x), u.options.strategy === "fixed"),
              popper: Kn(x)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(O) {
              return u.modifiersData[O.name] = Object.assign({}, O.data);
            });
            for (var S = 0; S < u.orderedModifiers.length; S++) {
              if (u.reset === !0) {
                u.reset = !1, S = -1;
                continue;
              }
              var T = u.orderedModifiers[S], $ = T.fn, R = T.options, L = R === void 0 ? {} : R, m = T.name;
              typeof $ == "function" && (u = $({
                state: u,
                options: L,
                name: m,
                instance: d
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Wu(function() {
        return new Promise(function(v) {
          d.forceUpdate(), v(u);
        });
      }),
      destroy: function() {
        g(), p = !0;
      }
    };
    if (!ra(i, s))
      return d;
    d.setOptions(c).then(function(v) {
      !p && c.onFirstUpdate && c.onFirstUpdate(v);
    });
    function h() {
      u.orderedModifiers.forEach(function(v) {
        var y = v.name, C = v.options, x = C === void 0 ? {} : C, S = v.effect;
        if (typeof S == "function") {
          var T = S({
            state: u,
            name: y,
            instance: d,
            options: x
          }), $ = function() {
          };
          f.push(T || $);
        }
      });
    }
    function g() {
      f.forEach(function(v) {
        return v();
      }), f = [];
    }
    return d;
  };
}
var Ku = [gu, ju, hu, nu, Ru, ku, Lu, cu, Eu], qu = /* @__PURE__ */ Uu({
  defaultModifiers: Ku
});
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function na(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Yu(e) {
  var t, r;
  return na(e) === !1 ? !1 : (t = e.constructor, t === void 0 ? !0 : (r = t.prototype, !(na(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
function tr() {
  return tr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, tr.apply(this, arguments);
}
function Ti(e, t) {
  if (e == null)
    return {};
  var r, n, o = {}, a = Object.keys(e);
  for (n = 0; n < a.length; n++)
    t.indexOf(r = a[n]) >= 0 || (o[r] = e[r]);
  return o;
}
const Xu = { silent: !1, logLevel: "warn" }, Ju = ["validator"], Mi = Object.prototype, Ri = Mi.toString, Zu = Mi.hasOwnProperty, Pi = /^\s*function (\w+)/;
function oa(e) {
  var t;
  const r = (t = e == null ? void 0 : e.type) !== null && t !== void 0 ? t : e;
  if (r) {
    const n = r.toString().match(Pi);
    return n ? n[1] : "";
  }
  return "";
}
const et = Yu, Qu = (e) => e;
let ae = Qu;
const $t = (e, t) => Zu.call(e, t), ec = Number.isInteger || function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}, Et = Array.isArray || function(e) {
  return Ri.call(e) === "[object Array]";
}, Tt = (e) => Ri.call(e) === "[object Function]", $r = (e) => et(e) && $t(e, "_vueTypes_name"), ji = (e) => et(e) && ($t(e, "type") || ["_vueTypes_name", "validator", "default", "required"].some((t) => $t(e, t)));
function Zn(e, t) {
  return Object.defineProperty(e.bind(t), "__original", { value: e });
}
function st(e, t, r = !1) {
  let n, o = !0, a = "";
  n = et(e) ? e : { type: e };
  const l = $r(n) ? n._vueTypes_name + " - " : "";
  if (ji(n) && n.type !== null) {
    if (n.type === void 0 || n.type === !0 || !n.required && t === void 0)
      return o;
    Et(n.type) ? (o = n.type.some((i) => st(i, t, !0) === !0), a = n.type.map((i) => oa(i)).join(" or ")) : (a = oa(n), o = a === "Array" ? Et(t) : a === "Object" ? et(t) : a === "String" || a === "Number" || a === "Boolean" || a === "Function" ? function(i) {
      if (i == null)
        return "";
      const s = i.constructor.toString().match(Pi);
      return s ? s[1] : "";
    }(t) === a : t instanceof n.type);
  }
  if (!o) {
    const i = `${l}value "${t}" should be of type "${a}"`;
    return r === !1 ? (ae(i), !1) : i;
  }
  if ($t(n, "validator") && Tt(n.validator)) {
    const i = ae, s = [];
    if (ae = (c) => {
      s.push(c);
    }, o = n.validator(t), ae = i, !o) {
      const c = (s.length > 1 ? "* " : "") + s.join(`
* `);
      return s.length = 0, r === !1 ? (ae(c), o) : c;
    }
  }
  return o;
}
function he(e, t) {
  const r = Object.defineProperties(t, { _vueTypes_name: { value: e, writable: !0 }, isRequired: { get() {
    return this.required = !0, this;
  } }, def: { value(o) {
    return o === void 0 ? ($t(this, "default") && delete this.default, this) : Tt(o) || st(this, o, !0) === !0 ? (this.default = Et(o) ? () => [...o] : et(o) ? () => Object.assign({}, o) : o, this) : (ae(`${this._vueTypes_name} - invalid default value: "${o}"`), this);
  } } }), { validator: n } = r;
  return Tt(n) && (r.validator = Zn(n, r)), r;
}
function $e(e, t) {
  const r = he(e, t);
  return Object.defineProperty(r, "validate", { value(n) {
    return Tt(this.validator) && ae(`${this._vueTypes_name} - calling .validate() will overwrite the current custom validator function. Validator info:
${JSON.stringify(this)}`), this.validator = Zn(n, this), this;
  } });
}
function aa(e, t, r) {
  const n = function(s) {
    const c = {};
    return Object.getOwnPropertyNames(s).forEach((u) => {
      c[u] = Object.getOwnPropertyDescriptor(s, u);
    }), Object.defineProperties({}, c);
  }(t);
  if (n._vueTypes_name = e, !et(r))
    return n;
  const { validator: o } = r, a = Ti(r, Ju);
  if (Tt(o)) {
    let { validator: s } = n;
    s && (s = (i = (l = s).__original) !== null && i !== void 0 ? i : l), n.validator = Zn(s ? function(c) {
      return s.call(this, c) && o.call(this, c);
    } : o, n);
  }
  var l, i;
  return Object.assign(n, a);
}
function zr(e) {
  return e.replace(/^(?!\s*$)/gm, "  ");
}
const tc = () => $e("any", {}), rc = () => $e("function", { type: Function }), nc = () => $e("boolean", { type: Boolean }), oc = () => $e("string", { type: String }), ac = () => $e("number", { type: Number }), ic = () => $e("array", { type: Array }), sc = () => $e("object", { type: Object }), lc = () => he("integer", { type: Number, validator: (e) => ec(e) }), uc = () => he("symbol", { validator: (e) => typeof e == "symbol" });
function cc(e, t = "custom validation failed") {
  if (typeof e != "function")
    throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return he(e.name || "<<anonymous function>>", { type: null, validator(r) {
    const n = e(r);
    return n || ae(`${this._vueTypes_name} - ${t}`), n;
  } });
}
function fc(e) {
  if (!Et(e))
    throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  const t = `oneOf - value should be one of "${e.join('", "')}".`, r = e.reduce((n, o) => {
    if (o != null) {
      const a = o.constructor;
      n.indexOf(a) === -1 && n.push(a);
    }
    return n;
  }, []);
  return he("oneOf", { type: r.length > 0 ? r : void 0, validator(n) {
    const o = e.indexOf(n) !== -1;
    return o || ae(t), o;
  } });
}
function dc(e) {
  if (!Et(e))
    throw new TypeError("[VueTypes error]: You must provide an array as argument");
  let t = !1, r = [];
  for (let o = 0; o < e.length; o += 1) {
    const a = e[o];
    if (ji(a)) {
      if ($r(a) && a._vueTypes_name === "oneOf" && a.type) {
        r = r.concat(a.type);
        continue;
      }
      if (Tt(a.validator) && (t = !0), a.type === !0 || !a.type) {
        ae('oneOfType - invalid usage of "true" or "null" as types.');
        continue;
      }
      r = r.concat(a.type);
    } else
      r.push(a);
  }
  r = r.filter((o, a) => r.indexOf(o) === a);
  const n = r.length > 0 ? r : null;
  return he("oneOfType", t ? { type: n, validator(o) {
    const a = [], l = e.some((i) => {
      const s = st($r(i) && i._vueTypes_name === "oneOf" ? i.type || null : i, o, !0);
      return typeof s == "string" && a.push(s), s === !0;
    });
    return l || ae(`oneOfType - provided value does not match any of the ${a.length} passed-in validators:
${zr(a.join(`
`))}`), l;
  } } : { type: n });
}
function pc(e) {
  return he("arrayOf", { type: Array, validator(t) {
    let r = "";
    const n = t.every((o) => (r = st(e, o, !0), r === !0));
    return n || ae(`arrayOf - value validation error:
${zr(r)}`), n;
  } });
}
function hc(e) {
  return he("instanceOf", { type: e });
}
function vc(e) {
  return he("objectOf", { type: Object, validator(t) {
    let r = "";
    const n = Object.keys(t).every((o) => (r = st(e, t[o], !0), r === !0));
    return n || ae(`objectOf - value validation error:
${zr(r)}`), n;
  } });
}
function gc(e) {
  const t = Object.keys(e), r = t.filter((o) => {
    var a;
    return !((a = e[o]) === null || a === void 0 || !a.required);
  }), n = he("shape", { type: Object, validator(o) {
    if (!et(o))
      return !1;
    const a = Object.keys(o);
    if (r.length > 0 && r.some((l) => a.indexOf(l) === -1)) {
      const l = r.filter((i) => a.indexOf(i) === -1);
      return ae(l.length === 1 ? `shape - required property "${l[0]}" is not defined.` : `shape - required properties "${l.join('", "')}" are not defined.`), !1;
    }
    return a.every((l) => {
      if (t.indexOf(l) === -1)
        return this._vueTypes_isLoose === !0 || (ae(`shape - shape definition does not include a "${l}" property. Allowed keys: "${t.join('", "')}".`), !1);
      const i = st(e[l], o[l], !0);
      return typeof i == "string" && ae(`shape - "${l}" property validation error:
 ${zr(i)}`), i === !0;
    });
  } });
  return Object.defineProperty(n, "_vueTypes_isLoose", { writable: !0, value: !1 }), Object.defineProperty(n, "loose", { get() {
    return this._vueTypes_isLoose = !0, this;
  } }), n;
}
const yc = ["name", "validate", "getter"], mc = /* @__PURE__ */ (() => {
  var e;
  return (e = class {
    static get any() {
      return tc();
    }
    static get func() {
      return rc().def(this.defaults.func);
    }
    static get bool() {
      return nc().def(this.defaults.bool);
    }
    static get string() {
      return oc().def(this.defaults.string);
    }
    static get number() {
      return ac().def(this.defaults.number);
    }
    static get array() {
      return ic().def(this.defaults.array);
    }
    static get object() {
      return sc().def(this.defaults.object);
    }
    static get integer() {
      return lc().def(this.defaults.integer);
    }
    static get symbol() {
      return uc();
    }
    static get nullable() {
      return { type: null };
    }
    static extend(t) {
      if (Et(t))
        return t.forEach((s) => this.extend(s)), this;
      const { name: r, validate: n = !1, getter: o = !1 } = t, a = Ti(t, yc);
      if ($t(this, r))
        throw new TypeError(`[VueTypes error]: Type "${r}" already defined`);
      const { type: l } = a;
      if ($r(l))
        return delete a.type, Object.defineProperty(this, r, o ? { get: () => aa(r, l, a) } : { value(...s) {
          const c = aa(r, l, a);
          return c.validator && (c.validator = c.validator.bind(c, ...s)), c;
        } });
      let i;
      return i = o ? { get() {
        const s = Object.assign({}, a);
        return n ? $e(r, s) : he(r, s);
      }, enumerable: !0 } : { value(...s) {
        const c = Object.assign({}, a);
        let u;
        return u = n ? $e(r, c) : he(r, c), c.validator && (u.validator = c.validator.bind(u, ...s)), u;
      }, enumerable: !0 }, Object.defineProperty(this, r, i);
    }
  }).defaults = {}, e.sensibleDefaults = void 0, e.config = Xu, e.custom = cc, e.oneOf = fc, e.instanceOf = hc, e.oneOfType = dc, e.arrayOf = pc, e.objectOf = vc, e.shape = gc, e.utils = { validate: (t, r) => st(r, t, !0) === !0, toType: (t, r, n = !1) => n ? $e(t, r) : he(t, r) }, e;
})();
function bc(e = { func: () => {
}, bool: !0, string: "", number: 0, array: () => [], object: () => ({}), integer: 0 }) {
  var t;
  return (t = class extends mc {
    static get sensibleDefaults() {
      return tr({}, this.defaults);
    }
    static set sensibleDefaults(r) {
      this.defaults = r !== !1 ? tr({}, r !== !0 ? r : e) : {};
    }
  }).defaults = tr({}, e), t;
}
let M = class extends bc() {
};
var ia = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Qn(e) {
  var t = { exports: {} };
  return e(t, t.exports), t.exports;
}
var Cr = function(e) {
  return e && e.Math == Math && e;
}, ee = Cr(typeof globalThis == "object" && globalThis) || Cr(typeof window == "object" && window) || Cr(typeof self == "object" && self) || Cr(typeof ia == "object" && ia) || /* @__PURE__ */ function() {
  return this;
}() || Function("return this")(), V = function(e) {
  try {
    return !!e();
  } catch {
    return !0;
  }
}, ye = !V(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] != 7;
}), sa = {}.propertyIsEnumerable, la = Object.getOwnPropertyDescriptor, _c = { f: la && !sa.call({ 1: 2 }, 1) ? function(e) {
  var t = la(this, e);
  return !!t && t.enumerable;
} : sa }, Wr = function(e, t) {
  return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
}, Cc = {}.toString, Re = function(e) {
  return Cc.call(e).slice(8, -1);
}, wc = "".split, Gr = V(function() {
  return !Object("z").propertyIsEnumerable(0);
}) ? function(e) {
  return Re(e) == "String" ? wc.call(e, "") : Object(e);
} : Object, ze = function(e) {
  if (e == null)
    throw TypeError("Can't call method on " + e);
  return e;
}, Lt = function(e) {
  return Gr(ze(e));
}, re = function(e) {
  return typeof e == "object" ? e !== null : typeof e == "function";
}, eo = function(e, t) {
  if (!re(e))
    return e;
  var r, n;
  if (t && typeof (r = e.toString) == "function" && !re(n = r.call(e)) || typeof (r = e.valueOf) == "function" && !re(n = r.call(e)) || !t && typeof (r = e.toString) == "function" && !re(n = r.call(e)))
    return n;
  throw TypeError("Can't convert object to primitive value");
}, Sc = {}.hasOwnProperty, X = function(e, t) {
  return Sc.call(e, t);
}, En = ee.document, xc = re(En) && re(En.createElement), Ii = function(e) {
  return xc ? En.createElement(e) : {};
}, Hi = !ye && !V(function() {
  return Object.defineProperty(Ii("div"), "a", { get: function() {
    return 7;
  } }).a != 7;
}), ua = Object.getOwnPropertyDescriptor, to = { f: ye ? ua : function(e, t) {
  if (e = Lt(e), t = eo(t, !0), Hi)
    try {
      return ua(e, t);
    } catch {
    }
  if (X(e, t))
    return Wr(!_c.f.call(e, t), e[t]);
} }, ue = function(e) {
  if (!re(e))
    throw TypeError(String(e) + " is not an object");
  return e;
}, ca = Object.defineProperty, Ie = { f: ye ? ca : function(e, t, r) {
  if (ue(e), t = eo(t, !0), ue(r), Hi)
    try {
      return ca(e, t, r);
    } catch {
    }
  if ("get" in r || "set" in r)
    throw TypeError("Accessors not supported");
  return "value" in r && (e[t] = r.value), e;
} }, be = ye ? function(e, t, r) {
  return Ie.f(e, t, Wr(1, r));
} : function(e, t, r) {
  return e[t] = r, e;
}, ro = function(e, t) {
  try {
    be(ee, e, t);
  } catch {
    ee[e] = t;
  }
  return t;
}, tt = ee["__core-js_shared__"] || ro("__core-js_shared__", {}), Oc = Function.toString;
typeof tt.inspectSource != "function" && (tt.inspectSource = function(e) {
  return Oc.call(e);
});
var Er, rr, Tr, Li = tt.inspectSource, fa = ee.WeakMap, Ac = typeof fa == "function" && /native code/.test(Li(fa)), Di = Qn(function(e) {
  (e.exports = function(t, r) {
    return tt[t] || (tt[t] = r !== void 0 ? r : {});
  })("versions", []).push({ version: "3.8.3", mode: "global", copyright: "© 2021 Denis Pushkarev (zloirock.ru)" });
}), kc = 0, $c = Math.random(), no = function(e) {
  return "Symbol(" + String(e === void 0 ? "" : e) + ")_" + (++kc + $c).toString(36);
}, da = Di("keys"), oo = function(e) {
  return da[e] || (da[e] = no(e));
}, Ur = {}, Ec = ee.WeakMap;
if (Ac) {
  var pt = tt.state || (tt.state = new Ec()), Tc = pt.get, Mc = pt.has, Rc = pt.set;
  Er = function(e, t) {
    return t.facade = e, Rc.call(pt, e, t), t;
  }, rr = function(e) {
    return Tc.call(pt, e) || {};
  }, Tr = function(e) {
    return Mc.call(pt, e);
  };
} else {
  var Gt = oo("state");
  Ur[Gt] = !0, Er = function(e, t) {
    return t.facade = e, be(e, Gt, t), t;
  }, rr = function(e) {
    return X(e, Gt) ? e[Gt] : {};
  }, Tr = function(e) {
    return X(e, Gt);
  };
}
var We = { set: Er, get: rr, has: Tr, enforce: function(e) {
  return Tr(e) ? rr(e) : Er(e, {});
}, getterFor: function(e) {
  return function(t) {
    var r;
    if (!re(t) || (r = rr(t)).type !== e)
      throw TypeError("Incompatible receiver, " + e + " required");
    return r;
  };
} }, Ge = Qn(function(e) {
  var t = We.get, r = We.enforce, n = String(String).split("String");
  (e.exports = function(o, a, l, i) {
    var s, c = !!i && !!i.unsafe, u = !!i && !!i.enumerable, f = !!i && !!i.noTargetGet;
    typeof l == "function" && (typeof a != "string" || X(l, "name") || be(l, "name", a), (s = r(l)).source || (s.source = n.join(typeof a == "string" ? a : ""))), o !== ee ? (c ? !f && o[a] && (u = !0) : delete o[a], u ? o[a] = l : be(o, a, l)) : u ? o[a] = l : ro(a, l);
  })(Function.prototype, "toString", function() {
    return typeof this == "function" && t(this).source || Li(this);
  });
}), on = ee, pa = function(e) {
  return typeof e == "function" ? e : void 0;
}, Kr = function(e, t) {
  return arguments.length < 2 ? pa(on[e]) || pa(ee[e]) : on[e] && on[e][t] || ee[e] && ee[e][t];
}, Pc = Math.ceil, jc = Math.floor, Dt = function(e) {
  return isNaN(e = +e) ? 0 : (e > 0 ? jc : Pc)(e);
}, Ic = Math.min, ge = function(e) {
  return e > 0 ? Ic(Dt(e), 9007199254740991) : 0;
}, Hc = Math.max, Lc = Math.min, Mr = function(e, t) {
  var r = Dt(e);
  return r < 0 ? Hc(r + t, 0) : Lc(r, t);
}, ha = function(e) {
  return function(t, r, n) {
    var o, a = Lt(t), l = ge(a.length), i = Mr(n, l);
    if (e && r != r) {
      for (; l > i; )
        if ((o = a[i++]) != o)
          return !0;
    } else
      for (; l > i; i++)
        if ((e || i in a) && a[i] === r)
          return e || i || 0;
    return !e && -1;
  };
}, Bi = { includes: ha(!0), indexOf: ha(!1) }, Dc = Bi.indexOf, Ni = function(e, t) {
  var r, n = Lt(e), o = 0, a = [];
  for (r in n)
    !X(Ur, r) && X(n, r) && a.push(r);
  for (; t.length > o; )
    X(n, r = t[o++]) && (~Dc(a, r) || a.push(r));
  return a;
}, Rr = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], Bc = Rr.concat("length", "prototype"), Nc = { f: Object.getOwnPropertyNames || function(e) {
  return Ni(e, Bc);
} }, Vc = { f: Object.getOwnPropertySymbols }, Fc = Kr("Reflect", "ownKeys") || function(e) {
  var t = Nc.f(ue(e)), r = Vc.f;
  return r ? t.concat(r(e)) : t;
}, zc = function(e, t) {
  for (var r = Fc(t), n = Ie.f, o = to.f, a = 0; a < r.length; a++) {
    var l = r[a];
    X(e, l) || n(e, l, o(t, l));
  }
}, Wc = /#|\.prototype\./, pr = function(e, t) {
  var r = Uc[Gc(e)];
  return r == qc || r != Kc && (typeof t == "function" ? V(t) : !!t);
}, Gc = pr.normalize = function(e) {
  return String(e).replace(Wc, ".").toLowerCase();
}, Uc = pr.data = {}, Kc = pr.NATIVE = "N", qc = pr.POLYFILL = "P", Tn = pr, Yc = to.f, se = function(e, t) {
  var r, n, o, a, l, i = e.target, s = e.global, c = e.stat;
  if (r = s ? ee : c ? ee[i] || ro(i, {}) : (ee[i] || {}).prototype)
    for (n in t) {
      if (a = t[n], o = e.noTargetGet ? (l = Yc(r, n)) && l.value : r[n], !Tn(s ? n : i + (c ? "." : "#") + n, e.forced) && o !== void 0) {
        if (typeof a == typeof o)
          continue;
        zc(a, o);
      }
      (e.sham || o && o.sham) && be(a, "sham", !0), Ge(r, n, a, e);
    }
}, ao = function(e, t) {
  var r = [][e];
  return !!r && V(function() {
    r.call(null, t || function() {
      throw 1;
    }, 1);
  });
}, Xc = Object.defineProperty, an = {}, va = function(e) {
  throw e;
}, Bt = function(e, t) {
  if (X(an, e))
    return an[e];
  t || (t = {});
  var r = [][e], n = !!X(t, "ACCESSORS") && t.ACCESSORS, o = X(t, 0) ? t[0] : va, a = X(t, 1) ? t[1] : void 0;
  return an[e] = !!r && !V(function() {
    if (n && !ye)
      return !0;
    var l = { length: -1 };
    n ? Xc(l, 1, { enumerable: !0, get: va }) : l[1] = 1, r.call(l, o, a);
  });
}, Jc = Bi.indexOf, Vi = [].indexOf, ga = !!Vi && 1 / [1].indexOf(1, -0) < 0, Zc = ao("indexOf"), Qc = Bt("indexOf", { ACCESSORS: !0, 1: 0 });
function lt(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ya(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ut(e, t, r) {
  return t && ya(e.prototype, t), r && ya(e, r), e;
}
se({ target: "Array", proto: !0, forced: ga || !Zc || !Qc }, { indexOf: function(e) {
  return ga ? Vi.apply(this, arguments) || 0 : Jc(this, e, arguments.length > 1 ? arguments[1] : void 0);
} });
(function() {
  function e() {
    lt(this, e);
  }
  return ut(e, null, [{ key: "isInBrowser", value: function() {
    return typeof window < "u";
  } }, { key: "isServer", value: function() {
    return typeof window > "u";
  } }, { key: "getUA", value: function() {
    return e.isInBrowser() ? window.navigator.userAgent.toLowerCase() : "";
  } }, { key: "isMobile", value: function() {
    return /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.appVersion);
  } }, { key: "isOpera", value: function() {
    return navigator.userAgent.indexOf("Opera") !== -1;
  } }, { key: "isIE", value: function() {
    var t = e.getUA();
    return t !== "" && t.indexOf("msie") > 0;
  } }, { key: "isIE9", value: function() {
    var t = e.getUA();
    return t !== "" && t.indexOf("msie 9.0") > 0;
  } }, { key: "isEdge", value: function() {
    var t = e.getUA();
    return t !== "" && t.indexOf("edge/") > 0;
  } }, { key: "isChrome", value: function() {
    var t = e.getUA();
    return t !== "" && /chrome\/\d+/.test(t) && !e.isEdge();
  } }, { key: "isPhantomJS", value: function() {
    var t = e.getUA();
    return t !== "" && /phantomjs/.test(t);
  } }, { key: "isFirefox", value: function() {
    var t = e.getUA();
    return t !== "" && /firefox/.test(t);
  } }]), e;
})();
var ef = [].join, tf = Gr != Object, rf = ao("join", ",");
se({ target: "Array", proto: !0, forced: tf || !rf }, { join: function(e) {
  return ef.call(Lt(this), e === void 0 ? "," : e);
} });
var ht, Pr, He = function(e) {
  return Object(ze(e));
}, Mt = Array.isArray || function(e) {
  return Re(e) == "Array";
}, Fi = !!Object.getOwnPropertySymbols && !V(function() {
  return !String(Symbol());
}), nf = Fi && !Symbol.sham && typeof Symbol.iterator == "symbol", wr = Di("wks"), nr = ee.Symbol, of = nf ? nr : nr && nr.withoutSetter || no, K = function(e) {
  return X(wr, e) || (Fi && X(nr, e) ? wr[e] = nr[e] : wr[e] = of("Symbol." + e)), wr[e];
}, af = K("species"), qr = function(e, t) {
  var r;
  return Mt(e) && (typeof (r = e.constructor) != "function" || r !== Array && !Mt(r.prototype) ? re(r) && (r = r[af]) === null && (r = void 0) : r = void 0), new (r === void 0 ? Array : r)(t === 0 ? 0 : t);
}, Rt = function(e, t, r) {
  var n = eo(t);
  n in e ? Ie.f(e, n, Wr(0, r)) : e[n] = r;
}, sn = Kr("navigator", "userAgent") || "", ma = ee.process, ba = ma && ma.versions, _a = ba && ba.v8;
_a ? Pr = (ht = _a.split("."))[0] + ht[1] : sn && (!(ht = sn.match(/Edge\/(\d+)/)) || ht[1] >= 74) && (ht = sn.match(/Chrome\/(\d+)/)) && (Pr = ht[1]);
var jr = Pr && +Pr, sf = K("species"), io = function(e) {
  return jr >= 51 || !V(function() {
    var t = [];
    return (t.constructor = {})[sf] = function() {
      return { foo: 1 };
    }, t[e](Boolean).foo !== 1;
  });
}, lf = io("splice"), uf = Bt("splice", { ACCESSORS: !0, 0: 0, 1: 2 }), cf = Math.max, ff = Math.min;
se({ target: "Array", proto: !0, forced: !lf || !uf }, { splice: function(e, t) {
  var r, n, o, a, l, i, s = He(this), c = ge(s.length), u = Mr(e, c), f = arguments.length;
  if (f === 0 ? r = n = 0 : f === 1 ? (r = 0, n = c - u) : (r = f - 2, n = ff(cf(Dt(t), 0), c - u)), c + r - n > 9007199254740991)
    throw TypeError("Maximum allowed length exceeded");
  for (o = qr(s, n), a = 0; a < n; a++)
    (l = u + a) in s && Rt(o, a, s[l]);
  if (o.length = n, r < n) {
    for (a = u; a < c - n; a++)
      i = a + r, (l = a + n) in s ? s[i] = s[l] : delete s[i];
    for (a = c; a > c - n + r; a--)
      delete s[a - 1];
  } else if (r > n)
    for (a = c - n; a > u; a--)
      i = a + r - 1, (l = a + n - 1) in s ? s[i] = s[l] : delete s[i];
  for (a = 0; a < r; a++)
    s[a + u] = arguments[a + 2];
  return s.length = c - n + r, o;
} });
var zi = {};
zi[K("toStringTag")] = "z";
var so = String(zi) === "[object z]", df = K("toStringTag"), pf = Re(/* @__PURE__ */ function() {
  return arguments;
}()) == "Arguments", Wi = so ? Re : function(e) {
  var t, r, n;
  return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (r = function(o, a) {
    try {
      return o[a];
    } catch {
    }
  }(t = Object(e), df)) == "string" ? r : pf ? Re(t) : (n = Re(t)) == "Object" && typeof t.callee == "function" ? "Arguments" : n;
}, hf = so ? {}.toString : function() {
  return "[object " + Wi(this) + "]";
};
so || Ge(Object.prototype, "toString", hf, { unsafe: !0 });
var Gi = function() {
  var e = ue(this), t = "";
  return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t;
};
function Ca(e, t) {
  return RegExp(e, t);
}
var ln, un, wa = { UNSUPPORTED_Y: V(function() {
  var e = Ca("a", "y");
  return e.lastIndex = 2, e.exec("abcd") != null;
}), BROKEN_CARET: V(function() {
  var e = Ca("^r", "gy");
  return e.lastIndex = 2, e.exec("str") != null;
}) }, Ir = RegExp.prototype.exec, vf = String.prototype.replace, Ui = Ir, cn = (ln = /a/, un = /b*/g, Ir.call(ln, "a"), Ir.call(un, "a"), ln.lastIndex !== 0 || un.lastIndex !== 0), Sa = wa.UNSUPPORTED_Y || wa.BROKEN_CARET, fn = /()??/.exec("")[1] !== void 0;
(cn || fn || Sa) && (Ui = function(e) {
  var t, r, n, o, a = this, l = Sa && a.sticky, i = Gi.call(a), s = a.source, c = 0, u = e;
  return l && ((i = i.replace("y", "")).indexOf("g") === -1 && (i += "g"), u = String(e).slice(a.lastIndex), a.lastIndex > 0 && (!a.multiline || a.multiline && e[a.lastIndex - 1] !== `
`) && (s = "(?: " + s + ")", u = " " + u, c++), r = new RegExp("^(?:" + s + ")", i)), fn && (r = new RegExp("^" + s + "$(?!\\s)", i)), cn && (t = a.lastIndex), n = Ir.call(l ? r : a, u), l ? n ? (n.input = n.input.slice(c), n[0] = n[0].slice(c), n.index = a.lastIndex, a.lastIndex += n[0].length) : a.lastIndex = 0 : cn && n && (a.lastIndex = a.global ? n.index + n[0].length : t), fn && n && n.length > 1 && vf.call(n[0], r, function() {
    for (o = 1; o < arguments.length - 2; o++)
      arguments[o] === void 0 && (n[o] = void 0);
  }), n;
});
var ur = Ui;
se({ target: "RegExp", proto: !0, forced: /./.exec !== ur }, { exec: ur });
var Ki = RegExp.prototype, qi = Ki.toString, gf = V(function() {
  return qi.call({ source: "a", flags: "b" }) != "/a/b";
}), yf = qi.name != "toString";
(gf || yf) && Ge(RegExp.prototype, "toString", function() {
  var e = ue(this), t = String(e.source), r = e.flags;
  return "/" + t + "/" + String(r === void 0 && e instanceof RegExp && !("flags" in Ki) ? Gi.call(e) : r);
}, { unsafe: !0 });
var mf = K("species"), bf = !V(function() {
  var e = /./;
  return e.exec = function() {
    var t = [];
    return t.groups = { a: "7" }, t;
  }, "".replace(e, "$<a>") !== "7";
}), xa = "a".replace(/./, "$0") === "$0", Oa = K("replace"), Aa = !!/./[Oa] && /./[Oa]("a", "$0") === "", _f = !V(function() {
  var e = /(?:)/, t = e.exec;
  e.exec = function() {
    return t.apply(this, arguments);
  };
  var r = "ab".split(e);
  return r.length !== 2 || r[0] !== "a" || r[1] !== "b";
}), Yi = function(e, t, r, n) {
  var o = K(e), a = !V(function() {
    var f = {};
    return f[o] = function() {
      return 7;
    }, ""[e](f) != 7;
  }), l = a && !V(function() {
    var f = !1, p = /a/;
    return e === "split" && ((p = {}).constructor = {}, p.constructor[mf] = function() {
      return p;
    }, p.flags = "", p[o] = /./[o]), p.exec = function() {
      return f = !0, null;
    }, p[o](""), !f;
  });
  if (!a || !l || e === "replace" && (!bf || !xa || Aa) || e === "split" && !_f) {
    var i = /./[o], s = r(o, ""[e], function(f, p, d, h, g) {
      return p.exec === ur ? a && !g ? { done: !0, value: i.call(p, d, h) } : { done: !0, value: f.call(d, p, h) } : { done: !1 };
    }, { REPLACE_KEEPS_$0: xa, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Aa }), c = s[0], u = s[1];
    Ge(String.prototype, e, c), Ge(RegExp.prototype, o, t == 2 ? function(f, p) {
      return u.call(f, this, p);
    } : function(f) {
      return u.call(f, this);
    });
  }
  n && be(RegExp.prototype[o], "sham", !0);
}, Cf = K("match"), Xi = function(e) {
  var t;
  return re(e) && ((t = e[Cf]) !== void 0 ? !!t : Re(e) == "RegExp");
}, lo = function(e) {
  if (typeof e != "function")
    throw TypeError(String(e) + " is not a function");
  return e;
}, wf = K("species"), ka = function(e) {
  return function(t, r) {
    var n, o, a = String(ze(t)), l = Dt(r), i = a.length;
    return l < 0 || l >= i ? e ? "" : void 0 : (n = a.charCodeAt(l)) < 55296 || n > 56319 || l + 1 === i || (o = a.charCodeAt(l + 1)) < 56320 || o > 57343 ? e ? a.charAt(l) : n : e ? a.slice(l, l + 2) : o - 56320 + (n - 55296 << 10) + 65536;
  };
}, Ji = { codeAt: ka(!1), charAt: ka(!0) }, Sf = Ji.charAt, Zi = function(e, t, r) {
  return t + (r ? Sf(e, t).length : 1);
}, Mn = function(e, t) {
  var r = e.exec;
  if (typeof r == "function") {
    var n = r.call(e, t);
    if (typeof n != "object")
      throw TypeError("RegExp exec method returned something other than an Object or null");
    return n;
  }
  if (Re(e) !== "RegExp")
    throw TypeError("RegExp#exec called on incompatible receiver");
  return ur.call(e, t);
}, xf = [].push, Of = Math.min, vt = !V(function() {
  return !RegExp(4294967295, "y");
});
Yi("split", 2, function(e, t, r) {
  var n;
  return n = "abbc".split(/(b)*/)[1] == "c" || "test".split(/(?:)/, -1).length != 4 || "ab".split(/(?:ab)*/).length != 2 || ".".split(/(.?)(.?)/).length != 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(o, a) {
    var l = String(ze(this)), i = a === void 0 ? 4294967295 : a >>> 0;
    if (i === 0)
      return [];
    if (o === void 0)
      return [l];
    if (!Xi(o))
      return t.call(l, o, i);
    for (var s, c, u, f = [], p = (o.ignoreCase ? "i" : "") + (o.multiline ? "m" : "") + (o.unicode ? "u" : "") + (o.sticky ? "y" : ""), d = 0, h = new RegExp(o.source, p + "g"); (s = ur.call(h, l)) && !((c = h.lastIndex) > d && (f.push(l.slice(d, s.index)), s.length > 1 && s.index < l.length && xf.apply(f, s.slice(1)), u = s[0].length, d = c, f.length >= i)); )
      h.lastIndex === s.index && h.lastIndex++;
    return d === l.length ? !u && h.test("") || f.push("") : f.push(l.slice(d)), f.length > i ? f.slice(0, i) : f;
  } : "0".split(void 0, 0).length ? function(o, a) {
    return o === void 0 && a === 0 ? [] : t.call(this, o, a);
  } : t, [function(o, a) {
    var l = ze(this), i = o == null ? void 0 : o[e];
    return i !== void 0 ? i.call(o, l, a) : n.call(String(l), o, a);
  }, function(o, a) {
    var l = r(n, o, this, a, n !== t);
    if (l.done)
      return l.value;
    var i = ue(o), s = String(this), c = function(S, T) {
      var $, R = ue(S).constructor;
      return R === void 0 || ($ = ue(R)[wf]) == null ? T : lo($);
    }(i, RegExp), u = i.unicode, f = (i.ignoreCase ? "i" : "") + (i.multiline ? "m" : "") + (i.unicode ? "u" : "") + (vt ? "y" : "g"), p = new c(vt ? i : "^(?:" + i.source + ")", f), d = a === void 0 ? 4294967295 : a >>> 0;
    if (d === 0)
      return [];
    if (s.length === 0)
      return Mn(p, s) === null ? [s] : [];
    for (var h = 0, g = 0, v = []; g < s.length; ) {
      p.lastIndex = vt ? g : 0;
      var y, C = Mn(p, vt ? s : s.slice(g));
      if (C === null || (y = Of(ge(p.lastIndex + (vt ? 0 : g)), s.length)) === h)
        g = Zi(s, g, u);
      else {
        if (v.push(s.slice(h, g)), v.length === d)
          return v;
        for (var x = 1; x <= C.length - 1; x++)
          if (v.push(C[x]), v.length === d)
            return v;
        g = h = y;
      }
    }
    return v.push(s.slice(h)), v;
  }];
}, !vt);
var Rn = `	
\v\f\r                　\u2028\u2029\uFEFF`, Hr = "[" + Rn + "]", Af = RegExp("^" + Hr + Hr + "*"), kf = RegExp(Hr + Hr + "*$"), dn = function(e) {
  return function(t) {
    var r = String(ze(t));
    return 1 & e && (r = r.replace(Af, "")), 2 & e && (r = r.replace(kf, "")), r;
  };
}, $f = { start: dn(1), end: dn(2), trim: dn(3) }, Ef = $f.trim;
se({ target: "String", proto: !0, forced: function(e) {
  return V(function() {
    return !!Rn[e]() || "​᠎"[e]() != "​᠎" || Rn[e].name !== e;
  });
}("trim") }, { trim: function() {
  return Ef(this);
} });
var Tf = io("slice"), Mf = Bt("slice", { ACCESSORS: !0, 0: 0, 1: 2 }), Rf = K("species"), Pf = [].slice, jf = Math.max;
se({ target: "Array", proto: !0, forced: !Tf || !Mf }, { slice: function(e, t) {
  var r, n, o, a = Lt(this), l = ge(a.length), i = Mr(e, l), s = Mr(t === void 0 ? l : t, l);
  if (Mt(a) && (typeof (r = a.constructor) != "function" || r !== Array && !Mt(r.prototype) ? re(r) && (r = r[Rf]) === null && (r = void 0) : r = void 0, r === Array || r === void 0))
    return Pf.call(a, i, s);
  for (n = new (r === void 0 ? Array : r)(jf(s - i, 0)), o = 0; i < s; i++, o++)
    i in a && Rt(n, o, a[i]);
  return n.length = o, n;
} });
var uo = Object.keys || function(e) {
  return Ni(e, Rr);
}, If = V(function() {
  uo(1);
});
se({ target: "Object", stat: !0, forced: If }, { keys: function(e) {
  return uo(He(e));
} });
var pn, Hf = function(e) {
  if (Xi(e))
    throw TypeError("The method doesn't accept regular expressions");
  return e;
}, Lf = K("match"), Df = to.f, $a = "".startsWith, Bf = Math.min, Qi = function(e) {
  var t = /./;
  try {
    "/./"[e](t);
  } catch {
    try {
      return t[Lf] = !1, "/./"[e](t);
    } catch {
    }
  }
  return !1;
}("startsWith"), Nf = !(Qi || (pn = Df(String.prototype, "startsWith"), !pn || pn.writable));
function es(e) {
  return (es = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  })(e);
}
se({ target: "String", proto: !0, forced: !Nf && !Qi }, { startsWith: function(e) {
  var t = String(ze(this));
  Hf(e);
  var r = ge(Bf(arguments.length > 1 ? arguments[1] : void 0, t.length)), n = String(e);
  return $a ? $a.call(t, n, r) : t.slice(r, r + n.length) === n;
} });
var gt = function(e) {
  return typeof e == "string";
}, yt = function(e) {
  return e !== null && es(e) === "object";
}, Pt = function() {
  function e() {
    lt(this, e);
  }
  return ut(e, null, [{ key: "isWindow", value: function(t) {
    return t === window;
  } }, { key: "addEventListener", value: function(t, r, n) {
    var o = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
    t && r && n && t.addEventListener(r, n, o);
  } }, { key: "removeEventListener", value: function(t, r, n) {
    var o = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
    t && r && n && t.removeEventListener(r, n, o);
  } }, { key: "triggerDragEvent", value: function(t, r) {
    var n = !1, o = function(l) {
      var i;
      (i = r.drag) === null || i === void 0 || i.call(r, l);
    }, a = function l(i) {
      var s;
      e.removeEventListener(document, "mousemove", o), e.removeEventListener(document, "mouseup", l), document.onselectstart = null, document.ondragstart = null, n = !1, (s = r.end) === null || s === void 0 || s.call(r, i);
    };
    e.addEventListener(t, "mousedown", function(l) {
      var i;
      n || (document.onselectstart = function() {
        return !1;
      }, document.ondragstart = function() {
        return !1;
      }, e.addEventListener(document, "mousemove", o), e.addEventListener(document, "mouseup", a), n = !0, (i = r.start) === null || i === void 0 || i.call(r, l));
    });
  } }, { key: "getBoundingClientRect", value: function(t) {
    return t && yt(t) && t.nodeType === 1 ? t.getBoundingClientRect() : null;
  } }, { key: "hasClass", value: function(t, r) {
    return !!(t && yt(t) && gt(r) && t.nodeType === 1) && t.classList.contains(r.trim());
  } }, { key: "addClass", value: function(t, r) {
    if (t && yt(t) && gt(r) && t.nodeType === 1 && (r = r.trim(), !e.hasClass(t, r))) {
      var n = t.className;
      t.className = n ? n + " " + r : r;
    }
  } }, { key: "removeClass", value: function(t, r) {
    if (t && yt(t) && gt(r) && t.nodeType === 1 && typeof t.className == "string") {
      r = r.trim();
      for (var n = t.className.trim().split(" "), o = n.length - 1; o >= 0; o--)
        n[o] = n[o].trim(), n[o] && n[o] !== r || n.splice(o, 1);
      t.className = n.join(" ");
    }
  } }, { key: "toggleClass", value: function(t, r, n) {
    t && yt(t) && gt(r) && t.nodeType === 1 && t.classList.toggle(r, n);
  } }, { key: "replaceClass", value: function(t, r, n) {
    t && yt(t) && gt(r) && gt(n) && t.nodeType === 1 && (r = r.trim(), n = n.trim(), e.removeClass(t, r), e.addClass(t, n));
  } }, { key: "getScrollTop", value: function(t) {
    var r = "scrollTop" in t ? t.scrollTop : t.pageYOffset;
    return Math.max(r, 0);
  } }, { key: "setScrollTop", value: function(t, r) {
    "scrollTop" in t ? t.scrollTop = r : t.scrollTo(t.scrollX, r);
  } }, { key: "getRootScrollTop", value: function() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  } }, { key: "setRootScrollTop", value: function(t) {
    e.setScrollTop(window, t), e.setScrollTop(document.body, t);
  } }, { key: "getElementTop", value: function(t, r) {
    if (e.isWindow(t))
      return 0;
    var n = r ? e.getScrollTop(r) : e.getRootScrollTop();
    return t.getBoundingClientRect().top + n;
  } }, { key: "getVisibleHeight", value: function(t) {
    return e.isWindow(t) ? t.innerHeight : t.getBoundingClientRect().height;
  } }, { key: "isHidden", value: function(t) {
    if (!t)
      return !1;
    var r = window.getComputedStyle(t), n = r.display === "none", o = t.offsetParent === null && r.position !== "fixed";
    return n || o;
  } }, { key: "triggerEvent", value: function(t, r) {
    if ("createEvent" in document) {
      var n = document.createEvent("HTMLEvents");
      n.initEvent(r, !1, !0), t.dispatchEvent(n);
    }
  } }, { key: "calcAngle", value: function(t, r) {
    var n = t.getBoundingClientRect(), o = n.left + n.width / 2, a = n.top + n.height / 2, l = Math.abs(o - r.clientX), i = Math.abs(a - r.clientY), s = i / Math.sqrt(Math.pow(l, 2) + Math.pow(i, 2)), c = Math.acos(s), u = Math.floor(180 / (Math.PI / c));
    return r.clientX > o && r.clientY > a && (u = 180 - u), r.clientX == o && r.clientY > a && (u = 180), r.clientX > o && r.clientY == a && (u = 90), r.clientX < o && r.clientY > a && (u = 180 + u), r.clientX < o && r.clientY == a && (u = 270), r.clientX < o && r.clientY < a && (u = 360 - u), u;
  } }, { key: "querySelector", value: function(t, r) {
    return r ? r.querySelector(t) : document.querySelector(t);
  } }, { key: "createElement", value: function(t) {
    for (var r = document.createElement(t), n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      o[a - 1] = arguments[a];
    for (var l = 0; l < o.length; l++)
      o[l] && r.classList.add(o[l]);
    return r;
  } }, { key: "appendChild", value: function(t) {
    for (var r = 0; r < (arguments.length <= 1 ? 0 : arguments.length - 1); r++)
      t.appendChild(r + 1 < 1 || arguments.length <= r + 1 ? void 0 : arguments[r + 1]);
  } }, { key: "getWindow", value: function(t) {
    if (t.toString() !== "[object Window]") {
      var r = t.ownerDocument;
      return r && r.defaultView || window;
    }
    return t;
  } }, { key: "isElement", value: function(t) {
    return t instanceof this.getWindow(t).Element || t instanceof Element;
  } }, { key: "isHTMLElement", value: function(t) {
    return t instanceof this.getWindow(t).HTMLElement || t instanceof HTMLElement;
  } }, { key: "isShadowRoot", value: function(t) {
    return typeof ShadowRoot < "u" && (t instanceof this.getWindow(t).ShadowRoot || t instanceof ShadowRoot);
  } }, { key: "getWindowScroll", value: function(t) {
    var r = this.getWindow(t);
    return { scrollLeft: r.pageXOffset || 0, scrollTop: r.pageYOffset || 0 };
  } }]), e;
}(), Vf = Math.floor, Ff = "".replace, zf = /\$([$&'`]|\d\d?|<[^>]*>)/g, Wf = /\$([$&'`]|\d\d?)/g, Gf = function(e, t, r, n, o, a) {
  var l = r + e.length, i = n.length, s = Wf;
  return o !== void 0 && (o = He(o), s = zf), Ff.call(a, s, function(c, u) {
    var f;
    switch (u.charAt(0)) {
      case "$":
        return "$";
      case "&":
        return e;
      case "`":
        return t.slice(0, r);
      case "'":
        return t.slice(l);
      case "<":
        f = o[u.slice(1, -1)];
        break;
      default:
        var p = +u;
        if (p === 0)
          return c;
        if (p > i) {
          var d = Vf(p / 10);
          return d === 0 ? c : d <= i ? n[d - 1] === void 0 ? u.charAt(1) : n[d - 1] + u.charAt(1) : c;
        }
        f = n[p - 1];
    }
    return f === void 0 ? "" : f;
  });
}, Uf = Math.max, Kf = Math.min;
Yi("replace", 2, function(e, t, r, n) {
  var o = n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, a = n.REPLACE_KEEPS_$0, l = o ? "$" : "$0";
  return [function(i, s) {
    var c = ze(this), u = i == null ? void 0 : i[e];
    return u !== void 0 ? u.call(i, c, s) : t.call(String(c), i, s);
  }, function(i, s) {
    if (!o && a || typeof s == "string" && s.indexOf(l) === -1) {
      var c = r(t, i, this, s);
      if (c.done)
        return c.value;
    }
    var u = ue(i), f = String(this), p = typeof s == "function";
    p || (s = String(s));
    var d = u.global;
    if (d) {
      var h = u.unicode;
      u.lastIndex = 0;
    }
    for (var g = []; ; ) {
      var v = Mn(u, f);
      if (v === null || (g.push(v), !d))
        break;
      String(v[0]) === "" && (u.lastIndex = Zi(f, ge(u.lastIndex), h));
    }
    for (var y, C = "", x = 0, S = 0; S < g.length; S++) {
      v = g[S];
      for (var T = String(v[0]), $ = Uf(Kf(Dt(v.index), f.length), 0), R = [], L = 1; L < v.length; L++)
        R.push((y = v[L]) === void 0 ? y : String(y));
      var m = v.groups;
      if (p) {
        var O = [T].concat(R, $, f);
        m !== void 0 && O.push(m);
        var b = String(s.apply(void 0, O));
      } else
        b = Gf(T, f, $, R, m, s);
      $ >= x && (C += f.slice(x, $) + b, x = $ + T.length);
    }
    return C + f.slice(x);
  }];
});
(function() {
  function e() {
    lt(this, e);
  }
  return ut(e, null, [{ key: "camelize", value: function(t) {
    return t.replace(/-(\w)/g, function(r, n) {
      return n ? n.toUpperCase() : "";
    });
  } }, { key: "capitalize", value: function(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  } }]), e;
})();
(function() {
  function e() {
    lt(this, e);
  }
  return ut(e, null, [{ key: "_clone", value: function() {
  } }]), e;
})();
var ts = K("isConcatSpreadable"), qf = jr >= 51 || !V(function() {
  var e = [];
  return e[ts] = !1, e.concat()[0] !== e;
}), Yf = io("concat"), Xf = function(e) {
  if (!re(e))
    return !1;
  var t = e[ts];
  return t !== void 0 ? !!t : Mt(e);
};
se({ target: "Array", proto: !0, forced: !qf || !Yf }, { concat: function(e) {
  var t, r, n, o, a, l = He(this), i = qr(l, 0), s = 0;
  for (t = -1, n = arguments.length; t < n; t++)
    if (Xf(a = t === -1 ? l : arguments[t])) {
      if (s + (o = ge(a.length)) > 9007199254740991)
        throw TypeError("Maximum allowed index exceeded");
      for (r = 0; r < o; r++, s++)
        r in a && Rt(i, s, a[r]);
    } else {
      if (s >= 9007199254740991)
        throw TypeError("Maximum allowed index exceeded");
      Rt(i, s++, a);
    }
  return i.length = s, i;
} });
var hn, hr = function(e, t, r) {
  if (lo(e), t === void 0)
    return e;
  switch (r) {
    case 0:
      return function() {
        return e.call(t);
      };
    case 1:
      return function(n) {
        return e.call(t, n);
      };
    case 2:
      return function(n, o) {
        return e.call(t, n, o);
      };
    case 3:
      return function(n, o, a) {
        return e.call(t, n, o, a);
      };
  }
  return function() {
    return e.apply(t, arguments);
  };
}, Ea = [].push, Ne = function(e) {
  var t = e == 1, r = e == 2, n = e == 3, o = e == 4, a = e == 6, l = e == 7, i = e == 5 || a;
  return function(s, c, u, f) {
    for (var p, d, h = He(s), g = Gr(h), v = hr(c, u, 3), y = ge(g.length), C = 0, x = f || qr, S = t ? x(s, y) : r || l ? x(s, 0) : void 0; y > C; C++)
      if ((i || C in g) && (d = v(p = g[C], C, h), e))
        if (t)
          S[C] = d;
        else if (d)
          switch (e) {
            case 3:
              return !0;
            case 5:
              return p;
            case 6:
              return C;
            case 2:
              Ea.call(S, p);
          }
        else
          switch (e) {
            case 4:
              return !1;
            case 7:
              Ea.call(S, p);
          }
    return a ? -1 : n || o ? o : S;
  };
}, rs = { forEach: Ne(0), map: Ne(1), filter: Ne(2), some: Ne(3), every: Ne(4), find: Ne(5), findIndex: Ne(6), filterOut: Ne(7) }, Jf = ye ? Object.defineProperties : function(e, t) {
  ue(e);
  for (var r, n = uo(t), o = n.length, a = 0; o > a; )
    Ie.f(e, r = n[a++], t[r]);
  return e;
}, Zf = Kr("document", "documentElement"), ns = oo("IE_PROTO"), vn = function() {
}, Ta = function(e) {
  return "<script>" + e + "<\/script>";
}, Or = function() {
  try {
    hn = document.domain && new ActiveXObject("htmlfile");
  } catch {
  }
  var e, t;
  Or = hn ? function(n) {
    n.write(Ta("")), n.close();
    var o = n.parentWindow.Object;
    return n = null, o;
  }(hn) : ((t = Ii("iframe")).style.display = "none", Zf.appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write(Ta("document.F=Object")), e.close(), e.F);
  for (var r = Rr.length; r--; )
    delete Or.prototype[Rr[r]];
  return Or();
};
Ur[ns] = !0;
var co = Object.create || function(e, t) {
  var r;
  return e !== null ? (vn.prototype = ue(e), r = new vn(), vn.prototype = null, r[ns] = e) : r = Or(), t === void 0 ? r : Jf(r, t);
}, Pn = K("unscopables"), jn = Array.prototype;
jn[Pn] == null && Ie.f(jn, Pn, { configurable: !0, value: co(null) });
var Ct = function(e) {
  jn[Pn][e] = !0;
}, Qf = rs.find, Ma = !0, ed = Bt("find");
"find" in [] && Array(1).find(function() {
  Ma = !1;
}), se({ target: "Array", proto: !0, forced: Ma || !ed }, { find: function(e) {
  return Qf(this, e, arguments.length > 1 ? arguments[1] : void 0);
} }), Ct("find");
var td = rs.findIndex, Ra = !0, rd = Bt("findIndex");
"findIndex" in [] && Array(1).findIndex(function() {
  Ra = !1;
}), se({ target: "Array", proto: !0, forced: Ra || !rd }, { findIndex: function(e) {
  return td(this, e, arguments.length > 1 ? arguments[1] : void 0);
} }), Ct("findIndex");
var os = function(e, t, r, n, o, a, l, i) {
  for (var s, c = o, u = 0, f = !!l && hr(l, i, 3); u < n; ) {
    if (u in r) {
      if (s = f ? f(r[u], u, t) : r[u], a > 0 && Mt(s))
        c = os(e, t, s, ge(s.length), c, a - 1) - 1;
      else {
        if (c >= 9007199254740991)
          throw TypeError("Exceed the acceptable array length");
        e[c] = s;
      }
      c++;
    }
    u++;
  }
  return c;
}, nd = os;
se({ target: "Array", proto: !0 }, { flat: function() {
  var e = arguments.length ? arguments[0] : void 0, t = He(this), r = ge(t.length), n = qr(t, 0);
  return n.length = nd(n, t, t, r, 0, e === void 0 ? 1 : Dt(e)), n;
} });
var In = function(e) {
  var t = e.return;
  if (t !== void 0)
    return ue(t.call(e)).value;
}, od = function(e, t, r, n) {
  try {
    return n ? t(ue(r)[0], r[1]) : t(r);
  } catch (o) {
    throw In(e), o;
  }
}, jt = {}, ad = K("iterator"), id = Array.prototype, as = function(e) {
  return e !== void 0 && (jt.Array === e || id[ad] === e);
}, sd = K("iterator"), is = function(e) {
  if (e != null)
    return e[sd] || e["@@iterator"] || jt[Wi(e)];
}, ss = K("iterator"), ls = !1;
try {
  var ld = 0, Pa = { next: function() {
    return { done: !!ld++ };
  }, return: function() {
    ls = !0;
  } };
  Pa[ss] = function() {
    return this;
  }, Array.from(Pa, function() {
    throw 2;
  });
} catch {
}
var us = function(e, t) {
  if (!t && !ls)
    return !1;
  var r = !1;
  try {
    var n = {};
    n[ss] = function() {
      return { next: function() {
        return { done: r = !0 };
      } };
    }, e(n);
  } catch {
  }
  return r;
}, ud = !us(function(e) {
  Array.from(e);
});
se({ target: "Array", stat: !0, forced: ud }, { from: function(e) {
  var t, r, n, o, a, l, i = He(e), s = typeof this == "function" ? this : Array, c = arguments.length, u = c > 1 ? arguments[1] : void 0, f = u !== void 0, p = is(i), d = 0;
  if (f && (u = hr(u, c > 2 ? arguments[2] : void 0, 2)), p == null || s == Array && as(p))
    for (r = new s(t = ge(i.length)); t > d; d++)
      l = f ? u(i[d], d) : i[d], Rt(r, d, l);
  else
    for (a = (o = p.call(i)).next, r = new s(); !(n = a.call(o)).done; d++)
      l = f ? od(o, u, [n.value, d], !0) : n.value, Rt(r, d, l);
  return r.length = d, r;
} });
var ja = function(e) {
  return function(t, r, n, o) {
    lo(r);
    var a = He(t), l = Gr(a), i = ge(a.length), s = e ? i - 1 : 0, c = e ? -1 : 1;
    if (n < 2)
      for (; ; ) {
        if (s in l) {
          o = l[s], s += c;
          break;
        }
        if (s += c, e ? s < 0 : i <= s)
          throw TypeError("Reduce of empty array with no initial value");
      }
    for (; e ? s >= 0 : i > s; s += c)
      s in l && (o = r(o, l[s], s, a));
    return o;
  };
}, cd = { left: ja(!1), right: ja(!0) }, fd = Re(ee.process) == "process", dd = cd.left, pd = ao("reduce"), hd = Bt("reduce", { 1: 0 });
se({ target: "Array", proto: !0, forced: !pd || !hd || !fd && jr > 79 && jr < 83 }, { reduce: function(e) {
  return dd(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
} }), Ct("flat");
var Xe, Ia, Ha, vd = !V(function() {
  return Object.isExtensible(Object.preventExtensions({}));
}), cs = Qn(function(e) {
  var t = Ie.f, r = no("meta"), n = 0, o = Object.isExtensible || function() {
    return !0;
  }, a = function(i) {
    t(i, r, { value: { objectID: "O" + ++n, weakData: {} } });
  }, l = e.exports = { REQUIRED: !1, fastKey: function(i, s) {
    if (!re(i))
      return typeof i == "symbol" ? i : (typeof i == "string" ? "S" : "P") + i;
    if (!X(i, r)) {
      if (!o(i))
        return "F";
      if (!s)
        return "E";
      a(i);
    }
    return i[r].objectID;
  }, getWeakData: function(i, s) {
    if (!X(i, r)) {
      if (!o(i))
        return !0;
      if (!s)
        return !1;
      a(i);
    }
    return i[r].weakData;
  }, onFreeze: function(i) {
    return vd && l.REQUIRED && o(i) && !X(i, r) && a(i), i;
  } };
  Ur[r] = !0;
}), Ut = function(e, t) {
  this.stopped = e, this.result = t;
}, La = function(e, t, r) {
  var n, o, a, l, i, s, c, u = r && r.that, f = !(!r || !r.AS_ENTRIES), p = !(!r || !r.IS_ITERATOR), d = !(!r || !r.INTERRUPTED), h = hr(t, u, 1 + f + d), g = function(y) {
    return n && In(n), new Ut(!0, y);
  }, v = function(y) {
    return f ? (ue(y), d ? h(y[0], y[1], g) : h(y[0], y[1])) : d ? h(y, g) : h(y);
  };
  if (p)
    n = e;
  else {
    if (typeof (o = is(e)) != "function")
      throw TypeError("Target is not iterable");
    if (as(o)) {
      for (a = 0, l = ge(e.length); l > a; a++)
        if ((i = v(e[a])) && i instanceof Ut)
          return i;
      return new Ut(!1);
    }
    n = o.call(e);
  }
  for (s = n.next; !(c = s.call(n)).done; ) {
    try {
      i = v(c.value);
    } catch (y) {
      throw In(n), y;
    }
    if (typeof i == "object" && i && i instanceof Ut)
      return i;
  }
  return new Ut(!1);
}, Da = function(e, t, r) {
  if (!(e instanceof t))
    throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
  return e;
}, gd = Ie.f, Ba = K("toStringTag"), Hn = function(e, t, r) {
  e && !X(e = r ? e : e.prototype, Ba) && gd(e, Ba, { configurable: !0, value: t });
}, Lr = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var e, t = !1, r = {};
  try {
    (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r, []), t = r instanceof Array;
  } catch {
  }
  return function(n, o) {
    return ue(n), function(a) {
      if (!re(a) && a !== null)
        throw TypeError("Can't set " + String(a) + " as a prototype");
    }(o), t ? e.call(n, o) : n.__proto__ = o, n;
  };
}() : void 0), Na = function(e, t, r) {
  for (var n in t)
    Ge(e, n, t[n], r);
  return e;
}, yd = !V(function() {
  function e() {
  }
  return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
}), Va = oo("IE_PROTO"), md = Object.prototype, Dr = yd ? Object.getPrototypeOf : function(e) {
  return e = He(e), X(e, Va) ? e[Va] : typeof e.constructor == "function" && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? md : null;
}, gn = K("iterator"), fs = !1;
[].keys && ("next" in (Ha = [].keys()) ? (Ia = Dr(Dr(Ha))) !== Object.prototype && (Xe = Ia) : fs = !0), (Xe == null || V(function() {
  var e = {};
  return Xe[gn].call(e) !== e;
})) && (Xe = {}), X(Xe, gn) || be(Xe, gn, function() {
  return this;
});
var fo = { IteratorPrototype: Xe, BUGGY_SAFARI_ITERATORS: fs }, bd = fo.IteratorPrototype, _d = function() {
  return this;
}, yn = fo.IteratorPrototype, Sr = fo.BUGGY_SAFARI_ITERATORS, Kt = K("iterator"), Cd = function() {
  return this;
}, po = function(e, t, r, n, o, a, l) {
  (function(y, C, x) {
    var S = C + " Iterator";
    y.prototype = co(bd, { next: Wr(1, x) }), Hn(y, S, !1), jt[S] = _d;
  })(r, t, n);
  var i, s, c, u = function(y) {
    if (y === o && g)
      return g;
    if (!Sr && y in d)
      return d[y];
    switch (y) {
      case "keys":
      case "values":
      case "entries":
        return function() {
          return new r(this, y);
        };
    }
    return function() {
      return new r(this);
    };
  }, f = t + " Iterator", p = !1, d = e.prototype, h = d[Kt] || d["@@iterator"] || o && d[o], g = !Sr && h || u(o), v = t == "Array" && d.entries || h;
  if (v && (i = Dr(v.call(new e())), yn !== Object.prototype && i.next && (Dr(i) !== yn && (Lr ? Lr(i, yn) : typeof i[Kt] != "function" && be(i, Kt, Cd)), Hn(i, f, !0))), o == "values" && h && h.name !== "values" && (p = !0, g = function() {
    return h.call(this);
  }), d[Kt] !== g && be(d, Kt, g), jt[t] = g, o)
    if (s = { values: u("values"), keys: a ? g : u("keys"), entries: u("entries") }, l)
      for (c in s)
        (Sr || p || !(c in d)) && Ge(d, c, s[c]);
    else
      se({ target: t, proto: !0, forced: Sr || p }, s);
  return s;
}, Fa = K("species"), wd = Ie.f, za = cs.fastKey, Wa = We.set, mn = We.getterFor;
(function(e, t, r) {
  var n = e.indexOf("Map") !== -1, o = e.indexOf("Weak") !== -1, a = n ? "set" : "add", l = ee[e], i = l && l.prototype, s = l, c = {}, u = function(v) {
    var y = i[v];
    Ge(i, v, v == "add" ? function(C) {
      return y.call(this, C === 0 ? 0 : C), this;
    } : v == "delete" ? function(C) {
      return !(o && !re(C)) && y.call(this, C === 0 ? 0 : C);
    } : v == "get" ? function(C) {
      return o && !re(C) ? void 0 : y.call(this, C === 0 ? 0 : C);
    } : v == "has" ? function(C) {
      return !(o && !re(C)) && y.call(this, C === 0 ? 0 : C);
    } : function(C, x) {
      return y.call(this, C === 0 ? 0 : C, x), this;
    });
  };
  if (Tn(e, typeof l != "function" || !(o || i.forEach && !V(function() {
    new l().entries().next();
  }))))
    s = r.getConstructor(t, e, n, a), cs.REQUIRED = !0;
  else if (Tn(e, !0)) {
    var f = new s(), p = f[a](o ? {} : -0, 1) != f, d = V(function() {
      f.has(1);
    }), h = us(function(v) {
      new l(v);
    }), g = !o && V(function() {
      for (var v = new l(), y = 5; y--; )
        v[a](y, y);
      return !v.has(-0);
    });
    h || ((s = t(function(v, y) {
      Da(v, s, e);
      var C = function(x, S, T) {
        var $, R;
        return Lr && typeof ($ = S.constructor) == "function" && $ !== T && re(R = $.prototype) && R !== T.prototype && Lr(x, R), x;
      }(new l(), v, s);
      return y != null && La(y, C[a], { that: C, AS_ENTRIES: n }), C;
    })).prototype = i, i.constructor = s), (d || g) && (u("delete"), u("has"), n && u("get")), (g || p) && u(a), o && i.clear && delete i.clear;
  }
  c[e] = s, se({ global: !0, forced: s != l }, c), Hn(s, e), o || r.setStrong(s, e, n);
})("Set", function(e) {
  return function() {
    return e(this, arguments.length ? arguments[0] : void 0);
  };
}, { getConstructor: function(e, t, r, n) {
  var o = e(function(s, c) {
    Da(s, o, t), Wa(s, { type: t, index: co(null), first: void 0, last: void 0, size: 0 }), ye || (s.size = 0), c != null && La(c, s[n], { that: s, AS_ENTRIES: r });
  }), a = mn(t), l = function(s, c, u) {
    var f, p, d = a(s), h = i(s, c);
    return h ? h.value = u : (d.last = h = { index: p = za(c, !0), key: c, value: u, previous: f = d.last, next: void 0, removed: !1 }, d.first || (d.first = h), f && (f.next = h), ye ? d.size++ : s.size++, p !== "F" && (d.index[p] = h)), s;
  }, i = function(s, c) {
    var u, f = a(s), p = za(c);
    if (p !== "F")
      return f.index[p];
    for (u = f.first; u; u = u.next)
      if (u.key == c)
        return u;
  };
  return Na(o.prototype, { clear: function() {
    for (var s = a(this), c = s.index, u = s.first; u; )
      u.removed = !0, u.previous && (u.previous = u.previous.next = void 0), delete c[u.index], u = u.next;
    s.first = s.last = void 0, ye ? s.size = 0 : this.size = 0;
  }, delete: function(s) {
    var c = this, u = a(c), f = i(c, s);
    if (f) {
      var p = f.next, d = f.previous;
      delete u.index[f.index], f.removed = !0, d && (d.next = p), p && (p.previous = d), u.first == f && (u.first = p), u.last == f && (u.last = d), ye ? u.size-- : c.size--;
    }
    return !!f;
  }, forEach: function(s) {
    for (var c, u = a(this), f = hr(s, arguments.length > 1 ? arguments[1] : void 0, 3); c = c ? c.next : u.first; )
      for (f(c.value, c.key, this); c && c.removed; )
        c = c.previous;
  }, has: function(s) {
    return !!i(this, s);
  } }), Na(o.prototype, r ? { get: function(s) {
    var c = i(this, s);
    return c && c.value;
  }, set: function(s, c) {
    return l(this, s === 0 ? 0 : s, c);
  } } : { add: function(s) {
    return l(this, s = s === 0 ? 0 : s, s);
  } }), ye && wd(o.prototype, "size", { get: function() {
    return a(this).size;
  } }), o;
}, setStrong: function(e, t, r) {
  var n = t + " Iterator", o = mn(t), a = mn(n);
  po(e, t, function(l, i) {
    Wa(this, { type: n, target: l, state: o(l), kind: i, last: void 0 });
  }, function() {
    for (var l = a(this), i = l.kind, s = l.last; s && s.removed; )
      s = s.previous;
    return l.target && (l.last = s = s ? s.next : l.state.first) ? i == "keys" ? { value: s.key, done: !1 } : i == "values" ? { value: s.value, done: !1 } : { value: [s.key, s.value], done: !1 } : (l.target = void 0, { value: void 0, done: !0 });
  }, r ? "entries" : "values", !r, !0), function(l) {
    var i = Kr(l), s = Ie.f;
    ye && i && !i[Fa] && s(i, Fa, { configurable: !0, get: function() {
      return this;
    } });
  }(t);
} });
var Sd = Ji.charAt, xd = We.set, Od = We.getterFor("String Iterator");
po(String, "String", function(e) {
  xd(this, { type: "String Iterator", string: String(e), index: 0 });
}, function() {
  var e, t = Od(this), r = t.string, n = t.index;
  return n >= r.length ? { value: void 0, done: !0 } : (e = Sd(r, n), t.index += e.length, { value: e, done: !1 });
});
var Ga = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 }, Ad = We.set, kd = We.getterFor("Array Iterator"), Jt = po(Array, "Array", function(e, t) {
  Ad(this, { type: "Array Iterator", target: Lt(e), index: 0, kind: t });
}, function() {
  var e = kd(this), t = e.target, r = e.kind, n = e.index++;
  return !t || n >= t.length ? (e.target = void 0, { value: void 0, done: !0 }) : r == "keys" ? { value: n, done: !1 } : r == "values" ? { value: t[n], done: !1 } : { value: [n, t[n]], done: !1 };
}, "values");
jt.Arguments = jt.Array, Ct("keys"), Ct("values"), Ct("entries");
var bn = K("iterator"), Ua = K("toStringTag"), _n = Jt.values;
for (var Cn in Ga) {
  var Ka = ee[Cn], Me = Ka && Ka.prototype;
  if (Me) {
    if (Me[bn] !== _n)
      try {
        be(Me, bn, _n);
      } catch {
        Me[bn] = _n;
      }
    if (Me[Ua] || be(Me, Ua, Cn), Ga[Cn]) {
      for (var mt in Jt)
        if (Me[mt] !== Jt[mt])
          try {
            be(Me, mt, Jt[mt]);
          } catch {
            Me[mt] = Jt[mt];
          }
    }
  }
}
(function() {
  function e() {
    lt(this, e);
  }
  return ut(e, null, [{ key: "deduplicate", value: function(t) {
    return Array.from(new Set(t));
  } }, { key: "flat", value: function(t) {
    return t.reduce(function(r, n) {
      var o = Array.isArray(n) ? e.flat(n) : n;
      return r.concat(o);
    }, []);
  } }, { key: "find", value: function(t, r) {
    return t.find(r);
  } }, { key: "findIndex", value: function(t, r) {
    return t.findIndex(r);
  } }]), e;
})();
(function() {
  function e() {
    lt(this, e);
  }
  return ut(e, null, [{ key: "today", value: function() {
    return /* @__PURE__ */ new Date();
  } }]), e;
})();
(function() {
  function e() {
    lt(this, e);
  }
  return ut(e, null, [{ key: "range", value: function(t, r, n) {
    return Math.min(Math.max(t, r), n);
  } }, { key: "clamp", value: function(t, r, n) {
    return r < n ? t < r ? r : t > n ? n : t : t < n ? n : t > r ? r : t;
  } }]), e;
})();
var ds = typeof global == "object" && global && global.Object === Object && global, $d = typeof self == "object" && self && self.Object === Object && self, Nt = ds || $d || Function("return this")(), Br = Nt.Symbol, ps = Object.prototype, Ed = ps.hasOwnProperty, Td = ps.toString, qt = Br ? Br.toStringTag : void 0;
function Md(e) {
  var t = Ed.call(e, qt), r = e[qt];
  try {
    e[qt] = void 0;
    var n = !0;
  } catch {
  }
  var o = Td.call(e);
  return n && (t ? e[qt] = r : delete e[qt]), o;
}
var Rd = Object.prototype, Pd = Rd.toString;
function jd(e) {
  return Pd.call(e);
}
var Id = "[object Null]", Hd = "[object Undefined]", qa = Br ? Br.toStringTag : void 0;
function Yr(e) {
  return e == null ? e === void 0 ? Hd : Id : qa && qa in Object(e) ? Md(e) : jd(e);
}
function vr(e) {
  return e != null && typeof e == "object";
}
var Ln = Array.isArray;
function ct(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function hs(e) {
  return e;
}
var Ld = "[object AsyncFunction]", Dd = "[object Function]", Bd = "[object GeneratorFunction]", Nd = "[object Proxy]";
function ho(e) {
  if (!ct(e))
    return !1;
  var t = Yr(e);
  return t == Dd || t == Bd || t == Ld || t == Nd;
}
var wn = Nt["__core-js_shared__"], Ya = function() {
  var e = /[^.]+$/.exec(wn && wn.keys && wn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Vd(e) {
  return !!Ya && Ya in e;
}
var Fd = Function.prototype, zd = Fd.toString;
function Wd(e) {
  if (e != null) {
    try {
      return zd.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Gd = /[\\^$.*+?()[\]{}|]/g, Ud = /^\[object .+?Constructor\]$/, Kd = Function.prototype, qd = Object.prototype, Yd = Kd.toString, Xd = qd.hasOwnProperty, Jd = RegExp(
  "^" + Yd.call(Xd).replace(Gd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Zd(e) {
  if (!ct(e) || Vd(e))
    return !1;
  var t = ho(e) ? Jd : Ud;
  return t.test(Wd(e));
}
function Qd(e, t) {
  return e == null ? void 0 : e[t];
}
function vo(e, t) {
  var r = Qd(e, t);
  return Zd(r) ? r : void 0;
}
var Xa = Object.create, ep = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!ct(t))
      return {};
    if (Xa)
      return Xa(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function tp(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
function rp(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var np = 800, op = 16, ap = Date.now;
function ip(e) {
  var t = 0, r = 0;
  return function() {
    var n = ap(), o = op - (n - r);
    if (r = n, o > 0) {
      if (++t >= np)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function sp(e) {
  return function() {
    return e;
  };
}
var Nr = function() {
  try {
    var e = vo(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), lp = Nr ? function(e, t) {
  return Nr(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: sp(t),
    writable: !0
  });
} : hs;
const up = lp;
var cp = ip(up), fp = 9007199254740991, dp = /^(?:0|[1-9]\d*)$/;
function vs(e, t) {
  var r = typeof e;
  return t = t ?? fp, !!t && (r == "number" || r != "symbol" && dp.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function go(e, t, r) {
  t == "__proto__" && Nr ? Nr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function Xr(e, t) {
  return e === t || e !== e && t !== t;
}
var pp = Object.prototype, hp = pp.hasOwnProperty;
function vp(e, t, r) {
  var n = e[t];
  (!(hp.call(e, t) && Xr(n, r)) || r === void 0 && !(t in e)) && go(e, t, r);
}
function gp(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var a = -1, l = t.length; ++a < l; ) {
    var i = t[a], s = n ? n(r[i], e[i], i, r, e) : void 0;
    s === void 0 && (s = e[i]), o ? go(r, i, s) : vp(r, i, s);
  }
  return r;
}
var Ja = Math.max;
function yp(e, t, r) {
  return t = Ja(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, o = -1, a = Ja(n.length - t, 0), l = Array(a); ++o < a; )
      l[o] = n[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = n[o];
    return i[t] = r(l), tp(e, this, i);
  };
}
function mp(e, t) {
  return cp(yp(e, t, hs), e + "");
}
var bp = 9007199254740991;
function gs(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= bp;
}
function yo(e) {
  return e != null && gs(e.length) && !ho(e);
}
function _p(e, t, r) {
  if (!ct(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? yo(r) && vs(t, r.length) : n == "string" && t in r) ? Xr(r[t], e) : !1;
}
function Cp(e) {
  return mp(function(t, r) {
    var n = -1, o = r.length, a = o > 1 ? r[o - 1] : void 0, l = o > 2 ? r[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, l && _p(r[0], r[1], l) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++n < o; ) {
      var i = r[n];
      i && e(t, i, n, a);
    }
    return t;
  });
}
var wp = Object.prototype;
function ys(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || wp;
  return e === r;
}
function Sp(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var xp = "[object Arguments]";
function Za(e) {
  return vr(e) && Yr(e) == xp;
}
var ms = Object.prototype, Op = ms.hasOwnProperty, Ap = ms.propertyIsEnumerable, kp = Za(/* @__PURE__ */ function() {
  return arguments;
}()) ? Za : function(e) {
  return vr(e) && Op.call(e, "callee") && !Ap.call(e, "callee");
};
const Dn = kp;
function $p() {
  return !1;
}
var bs = typeof exports == "object" && exports && !exports.nodeType && exports, Qa = bs && typeof module == "object" && module && !module.nodeType && module, Ep = Qa && Qa.exports === bs, ei = Ep ? Nt.Buffer : void 0, Tp = ei ? ei.isBuffer : void 0, _s = Tp || $p, Mp = "[object Arguments]", Rp = "[object Array]", Pp = "[object Boolean]", jp = "[object Date]", Ip = "[object Error]", Hp = "[object Function]", Lp = "[object Map]", Dp = "[object Number]", Bp = "[object Object]", Np = "[object RegExp]", Vp = "[object Set]", Fp = "[object String]", zp = "[object WeakMap]", Wp = "[object ArrayBuffer]", Gp = "[object DataView]", Up = "[object Float32Array]", Kp = "[object Float64Array]", qp = "[object Int8Array]", Yp = "[object Int16Array]", Xp = "[object Int32Array]", Jp = "[object Uint8Array]", Zp = "[object Uint8ClampedArray]", Qp = "[object Uint16Array]", eh = "[object Uint32Array]", N = {};
N[Up] = N[Kp] = N[qp] = N[Yp] = N[Xp] = N[Jp] = N[Zp] = N[Qp] = N[eh] = !0;
N[Mp] = N[Rp] = N[Wp] = N[Pp] = N[Gp] = N[jp] = N[Ip] = N[Hp] = N[Lp] = N[Dp] = N[Bp] = N[Np] = N[Vp] = N[Fp] = N[zp] = !1;
function th(e) {
  return vr(e) && gs(e.length) && !!N[Yr(e)];
}
function rh(e) {
  return function(t) {
    return e(t);
  };
}
var Cs = typeof exports == "object" && exports && !exports.nodeType && exports, or = Cs && typeof module == "object" && module && !module.nodeType && module, nh = or && or.exports === Cs, Sn = nh && ds.process, ti = function() {
  try {
    var e = or && or.require && or.require("util").types;
    return e || Sn && Sn.binding && Sn.binding("util");
  } catch {
  }
}(), ri = ti && ti.isTypedArray, ws = ri ? rh(ri) : th, oh = Object.prototype, ah = oh.hasOwnProperty;
function ih(e, t) {
  var r = Ln(e), n = !r && Dn(e), o = !r && !n && _s(e), a = !r && !n && !o && ws(e), l = r || n || o || a, i = l ? Sp(e.length, String) : [], s = i.length;
  for (var c in e)
    (t || ah.call(e, c)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    vs(c, s))) && i.push(c);
  return i;
}
function sh(e, t) {
  return function(r) {
    return e(t(r));
  };
}
function lh(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var uh = Object.prototype, ch = uh.hasOwnProperty;
function fh(e) {
  if (!ct(e))
    return lh(e);
  var t = ys(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !ch.call(e, n)) || r.push(n);
  return r;
}
function Ss(e) {
  return yo(e) ? ih(e, !0) : fh(e);
}
var cr = vo(Object, "create");
function dh() {
  this.__data__ = cr ? cr(null) : {}, this.size = 0;
}
function ph(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var hh = "__lodash_hash_undefined__", vh = Object.prototype, gh = vh.hasOwnProperty;
function yh(e) {
  var t = this.__data__;
  if (cr) {
    var r = t[e];
    return r === hh ? void 0 : r;
  }
  return gh.call(t, e) ? t[e] : void 0;
}
var mh = Object.prototype, bh = mh.hasOwnProperty;
function _h(e) {
  var t = this.__data__;
  return cr ? t[e] !== void 0 : bh.call(t, e);
}
var Ch = "__lodash_hash_undefined__";
function wh(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = cr && t === void 0 ? Ch : t, this;
}
function rt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
rt.prototype.clear = dh;
rt.prototype.delete = ph;
rt.prototype.get = yh;
rt.prototype.has = _h;
rt.prototype.set = wh;
function Sh() {
  this.__data__ = [], this.size = 0;
}
function Jr(e, t) {
  for (var r = e.length; r--; )
    if (Xr(e[r][0], t))
      return r;
  return -1;
}
var xh = Array.prototype, Oh = xh.splice;
function Ah(e) {
  var t = this.__data__, r = Jr(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Oh.call(t, r, 1), --this.size, !0;
}
function kh(e) {
  var t = this.__data__, r = Jr(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function $h(e) {
  return Jr(this.__data__, e) > -1;
}
function Eh(e, t) {
  var r = this.__data__, n = Jr(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function Le(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Le.prototype.clear = Sh;
Le.prototype.delete = Ah;
Le.prototype.get = kh;
Le.prototype.has = $h;
Le.prototype.set = Eh;
var xs = vo(Nt, "Map");
function Th() {
  this.size = 0, this.__data__ = {
    hash: new rt(),
    map: new (xs || Le)(),
    string: new rt()
  };
}
function Mh(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Zr(e, t) {
  var r = e.__data__;
  return Mh(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Rh(e) {
  var t = Zr(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ph(e) {
  return Zr(this, e).get(e);
}
function jh(e) {
  return Zr(this, e).has(e);
}
function Ih(e, t) {
  var r = Zr(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function Vt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Vt.prototype.clear = Th;
Vt.prototype.delete = Rh;
Vt.prototype.get = Ph;
Vt.prototype.has = jh;
Vt.prototype.set = Ih;
var Os = sh(Object.getPrototypeOf, Object), Hh = "[object Object]", Lh = Function.prototype, Dh = Object.prototype, As = Lh.toString, Bh = Dh.hasOwnProperty, Nh = As.call(Object);
function Vh(e) {
  if (!vr(e) || Yr(e) != Hh)
    return !1;
  var t = Os(e);
  if (t === null)
    return !0;
  var r = Bh.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && As.call(r) == Nh;
}
function Fh() {
  this.__data__ = new Le(), this.size = 0;
}
function zh(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Wh(e) {
  return this.__data__.get(e);
}
function Gh(e) {
  return this.__data__.has(e);
}
var Uh = 200;
function Kh(e, t) {
  var r = this.__data__;
  if (r instanceof Le) {
    var n = r.__data__;
    if (!xs || n.length < Uh - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Vt(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Ft(e) {
  var t = this.__data__ = new Le(e);
  this.size = t.size;
}
Ft.prototype.clear = Fh;
Ft.prototype.delete = zh;
Ft.prototype.get = Wh;
Ft.prototype.has = Gh;
Ft.prototype.set = Kh;
var ks = typeof exports == "object" && exports && !exports.nodeType && exports, ni = ks && typeof module == "object" && module && !module.nodeType && module, qh = ni && ni.exports === ks, oi = qh ? Nt.Buffer : void 0, ai = oi ? oi.allocUnsafe : void 0;
function Yh(e, t) {
  if (t)
    return e.slice();
  var r = e.length, n = ai ? ai(r) : new e.constructor(r);
  return e.copy(n), n;
}
var ii = Nt.Uint8Array;
function Xh(e) {
  var t = new e.constructor(e.byteLength);
  return new ii(t).set(new ii(e)), t;
}
function Jh(e, t) {
  var r = t ? Xh(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
function Zh(e) {
  return typeof e.constructor == "function" && !ys(e) ? ep(Os(e)) : {};
}
function Qh(e) {
  return function(t, r, n) {
    for (var o = -1, a = Object(t), l = n(t), i = l.length; i--; ) {
      var s = l[e ? i : ++o];
      if (r(a[s], s, a) === !1)
        break;
    }
    return t;
  };
}
var ev = Qh();
function Bn(e, t, r) {
  (r !== void 0 && !Xr(e[t], r) || r === void 0 && !(t in e)) && go(e, t, r);
}
function tv(e) {
  return vr(e) && yo(e);
}
function Nn(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function rv(e) {
  return gp(e, Ss(e));
}
function nv(e, t, r, n, o, a, l) {
  var i = Nn(e, r), s = Nn(t, r), c = l.get(s);
  if (c) {
    Bn(e, r, c);
    return;
  }
  var u = a ? a(i, s, r + "", e, t, l) : void 0, f = u === void 0;
  if (f) {
    var p = Ln(s), d = !p && _s(s), h = !p && !d && ws(s);
    u = s, p || d || h ? Ln(i) ? u = i : tv(i) ? u = rp(i) : d ? (f = !1, u = Yh(s, !0)) : h ? (f = !1, u = Jh(s, !0)) : u = [] : Vh(s) || Dn(s) ? (u = i, Dn(i) ? u = rv(i) : (!ct(i) || ho(i)) && (u = Zh(s))) : f = !1;
  }
  f && (l.set(s, u), o(u, s, n, a, l), l.delete(s)), Bn(e, r, u);
}
function $s(e, t, r, n, o) {
  e !== t && ev(t, function(a, l) {
    if (o || (o = new Ft()), ct(a))
      nv(e, t, l, r, $s, n, o);
    else {
      var i = n ? n(Nn(e, l), a, l + "", e, t, o) : void 0;
      i === void 0 && (i = a), Bn(e, l, i);
    }
  }, Ss);
}
var ov = Cp(function(e, t, r) {
  $s(e, t, r);
});
const Qr = ov;
var av = Object.defineProperty, iv = (e, t, r) => t in e ? av(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, ne = (e, t, r) => (iv(e, typeof t != "symbol" ? t + "" : t, r), r);
const q = (e) => Math.round(e * 100) / 100;
class G {
  constructor(t) {
    ne(this, "instance"), ne(this, "alphaValue", 0), ne(this, "redValue", 0), ne(this, "greenValue", 0), ne(this, "blueValue", 0), ne(this, "hueValue", 0), ne(this, "saturationValue", 0), ne(this, "brightnessValue", 0), ne(this, "hslSaturationValue", 0), ne(this, "lightnessValue", 0), ne(this, "initAlpha", () => {
      const r = this.instance.getAlpha();
      this.alphaValue = Math.min(1, r) * 100;
    }), ne(this, "initLightness", () => {
      const { s: r, l: n } = this.instance.toHsl();
      this.hslSaturationValue = q(r), this.lightnessValue = q(n);
    }), ne(this, "initRgb", () => {
      const { r, g: n, b: o } = this.instance.toRgb();
      this.redValue = q(r), this.greenValue = q(n), this.blueValue = q(o);
    }), ne(this, "initHsb", () => {
      const { h: r, s: n, v: o } = this.instance.toHsv();
      this.hueValue = Math.min(360, Math.ceil(r)), this.saturationValue = q(n), this.brightnessValue = q(o);
    }), ne(this, "toHexString", () => this.instance.toHexString()), ne(this, "toRgbString", () => this.instance.toRgbString()), this.instance = w(t), this.initRgb(), this.initHsb(), this.initLightness(), this.initAlpha();
  }
  toString(t) {
    return this.instance.toString(t);
  }
  get hex() {
    return this.instance.toHex();
  }
  set hex(t) {
    this.instance = w(t), this.initHsb(), this.initRgb(), this.initAlpha(), this.initLightness();
  }
  // 色调
  set hue(t) {
    this.saturation === 0 && this.brightness === 0 && (this.saturationValue = 1, this.brightnessValue = 1), this.instance = w({
      h: q(t),
      s: this.saturation,
      v: this.brightness,
      a: this.alphaValue / 100
    }), this.initRgb(), this.initLightness(), this.hueValue = q(t);
  }
  get hue() {
    return this.hueValue;
  }
  // 饱和度
  set saturation(t) {
    this.instance = w({
      h: this.hue,
      s: q(t),
      v: this.brightness,
      a: this.alphaValue / 100
    }), this.initRgb(), this.initLightness(), this.saturationValue = q(t);
  }
  get saturation() {
    return this.saturationValue;
  }
  // 明度
  set brightness(t) {
    this.instance = w({
      h: this.hue,
      s: this.saturation,
      v: q(t),
      a: this.alphaValue / 100
    }), this.initRgb(), this.initLightness(), this.brightnessValue = q(t);
  }
  get brightness() {
    return this.brightnessValue;
  }
  // 亮度
  set lightness(t) {
    this.instance = w({
      h: this.hue,
      s: this.hslSaturationValue,
      l: q(t),
      a: this.alphaValue / 100
    }), this.initRgb(), this.initHsb(), this.lightnessValue = q(t);
  }
  get lightness() {
    return this.lightnessValue;
  }
  // red
  set red(t) {
    const r = this.instance.toRgb();
    this.instance = w({
      ...r,
      r: q(t),
      a: this.alphaValue / 100
    }), this.initHsb(), this.initLightness(), this.redValue = q(t);
  }
  get red() {
    return this.redValue;
  }
  // green
  set green(t) {
    const r = this.instance.toRgb();
    this.instance = w({
      ...r,
      g: q(t),
      a: this.alphaValue / 100
    }), this.initHsb(), this.initLightness(), this.greenValue = q(t);
  }
  get green() {
    return this.greenValue;
  }
  // blue
  set blue(t) {
    const r = this.instance.toRgb();
    this.instance = w({
      ...r,
      b: q(t),
      a: this.alphaValue / 100
    }), this.initHsb(), this.initLightness(), this.blueValue = q(t);
  }
  get blue() {
    return this.blueValue;
  }
  // alpha
  set alpha(t) {
    this.instance.setAlpha(t / 100), this.alphaValue = t;
  }
  get alpha() {
    return this.alphaValue;
  }
  get RGB() {
    return [this.red, this.green, this.blue, this.alpha / 100];
  }
  get HSB() {
    return [this.hue, this.saturation, this.brightness, this.alpha / 100];
  }
  get HSL() {
    return [this.hue, this.hslSaturationValue, this.lightness, this.alpha / 100];
  }
}
function si(e, t, r, n) {
  return `rgba(${[e, t, r, n / 100].join(",")})`;
}
const xn = (e, t, r) => t < r ? e < t ? t : e > r ? r : e : e < r ? r : e > t ? t : e, mo = "color-history", bo = 8, we = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, o] of t)
    r[n] = o;
  return r;
}, sv = U({
  name: "Alpha",
  props: {
    color: M.instanceOf(G),
    size: M.oneOf(["small", "default"]).def("default")
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const r = B(null), n = B(null);
    let o = e.color || new G();
    const a = Oe({
      red: o.red,
      green: o.green,
      blue: o.blue,
      alpha: o.alpha
    });
    Pe(
      () => e.color,
      (f) => {
        f && (o = f, Qr(a, {
          red: f.red,
          green: f.green,
          blue: f.blue,
          alpha: f.alpha
        }));
      },
      { deep: !0 }
    );
    const l = W(() => {
      const f = si(a.red, a.green, a.blue, 0), p = si(a.red, a.green, a.blue, 100);
      return {
        background: `linear-gradient(to right, ${f} , ${p})`
      };
    }), i = () => {
      if (r.value && n.value) {
        const f = a.alpha / 100, p = r.value.getBoundingClientRect(), d = n.value.offsetWidth;
        return Math.round(f * (p.width - d) + d / 2);
      }
      return 0;
    }, s = W(() => ({
      left: i() + "px",
      top: 0
    })), c = (f) => {
      f.target !== r.value && u(f);
    }, u = (f) => {
      if (f.stopPropagation(), r.value && n.value) {
        const p = r.value.getBoundingClientRect(), d = n.value.offsetWidth;
        let h = f.clientX - p.left;
        h = Math.max(d / 2, h), h = Math.min(h, p.width - d / 2);
        const g = Math.round((h - d / 2) / (p.width - d) * 100);
        o.alpha = g, a.alpha = g, t("change", g);
      }
    };
    return at(() => {
      const f = {
        drag: (p) => {
          u(p);
        },
        end: (p) => {
          u(p);
        }
      };
      r.value && n.value && Pt.triggerDragEvent(r.value, f);
    }), { barElement: r, cursorElement: n, getCursorStyle: s, getBackgroundStyle: l, onClickSider: c };
  }
}), lv = (e) => (It("data-v-18925ba6"), e = e(), Ht(), e), uv = /* @__PURE__ */ lv(() => /* @__PURE__ */ _("div", { class: "vc-alpha-slider__bar-handle" }, null, -1)), cv = [
  uv
];
function fv(e, t, r, n, o, a) {
  return k(), P("div", {
    class: ie(["vc-alpha-slider", "transparent", { "small-slider": e.size === "small" }])
  }, [
    _("div", {
      ref: "barElement",
      class: "vc-alpha-slider__bar",
      style: J(e.getBackgroundStyle),
      onClick: t[0] || (t[0] = (...l) => e.onClickSider && e.onClickSider(...l))
    }, [
      _("div", {
        class: ie(["vc-alpha-slider__bar-pointer", { "small-bar": e.size === "small" }]),
        ref: "cursorElement",
        style: J(e.getCursorStyle)
      }, cv, 6)
    ], 4)
  ], 2);
}
const _o = /* @__PURE__ */ we(sv, [["render", fv], ["__scopeId", "data-v-18925ba6"]]), dv = [
  // 第一行
  [
    "#fcc02e",
    "#f67c01",
    "#e64a19",
    "#d81b43",
    "#8e24aa",
    "#512da7",
    "#1f87e8",
    "#008781",
    "#05a045"
  ],
  // 第二行
  [
    "#fed835",
    "#fb8c00",
    "#f5511e",
    "#eb1d4e",
    "#9c28b1",
    "#5d35b0",
    "#2097f3",
    "#029688",
    "#4cb050"
  ],
  // 第三行
  [
    "#ffeb3c",
    "#ffa727",
    "#fe5722",
    "#eb4165",
    "#aa47bc",
    "#673bb7",
    "#42a5f6",
    "#26a59a",
    "#83c683"
  ],
  // 第四行
  [
    "#fff176",
    "#ffb74e",
    "#ff8a66",
    "#f1627e",
    "#b968c7",
    "#7986cc",
    "#64b5f6",
    "#80cbc4",
    "#a5d6a7"
  ],
  // 第五行
  [
    "#fff59c",
    "#ffcc80",
    "#ffab91",
    "#fb879e",
    "#cf93d9",
    "#9ea8db",
    "#90caf8",
    "#b2dfdc",
    "#c8e6ca"
  ],
  // 最后一行
  [
    "transparent",
    "#ffffff",
    "#dedede",
    "#a9a9a9",
    "#4b4b4b",
    "#353535",
    "#212121",
    "#000000",
    "advance"
  ]
], pv = U({
  name: "Palette",
  emits: ["change"],
  setup(e, { emit: t }) {
    return { palettes: dv, computedBgStyle: (r) => r === "transparent" ? r : r === "advance" ? {} : { background: w(r).toRgbString() }, onColorChange: (r) => {
      t("change", r);
    } };
  }
}), hv = { class: "vc-compact" }, vv = ["onClick"];
function gv(e, t, r, n, o, a) {
  return k(), P("div", hv, [
    (k(!0), P(Ve, null, wt(e.palettes, (l, i) => (k(), P("div", {
      key: i,
      class: "vc-compact__row"
    }, [
      (k(!0), P(Ve, null, wt(l, (s, c) => (k(), P("div", {
        key: c,
        class: "vc-compact__color-cube--wrap",
        onClick: (u) => e.onColorChange(s)
      }, [
        _("div", {
          class: ie([
            "vc-compact__color_cube",
            {
              advance: s === "advance",
              transparent: s === "transparent"
            }
          ]),
          style: J(e.computedBgStyle(s))
        }, null, 6)
      ], 8, vv))), 128))
    ]))), 128))
  ]);
}
const Es = /* @__PURE__ */ we(pv, [["render", gv], ["__scopeId", "data-v-b969fd48"]]), yv = U({
  name: "Board",
  props: {
    color: M.instanceOf(G),
    round: M.bool.def(!1),
    hide: M.bool.def(!0)
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    var r, n, o;
    const a = pi(), l = {
      h: ((r = e.color) == null ? void 0 : r.hue) || 0,
      s: 1,
      v: 1
    }, i = new G(l).toHexString(), s = Oe({
      hueColor: i,
      saturation: ((n = e.color) == null ? void 0 : n.saturation) || 0,
      brightness: ((o = e.color) == null ? void 0 : o.brightness) || 0
    }), c = B(0), u = B(0), f = B(), p = B(), d = W(() => ({
      top: c.value + "px",
      left: u.value + "px"
    })), h = () => {
      if (a) {
        const y = a.vnode.el;
        u.value = s.saturation * (y == null ? void 0 : y.clientWidth), c.value = (1 - s.brightness) * (y == null ? void 0 : y.clientHeight);
      }
    }, g = (y) => {
      y.target !== p.value && v(y);
    }, v = (y) => {
      if (a) {
        const C = a.vnode.el, x = C == null ? void 0 : C.getBoundingClientRect();
        let S = y.clientX - x.left, T = y.clientY - x.top;
        S = xn(S, 0, x.width), T = xn(T, 0, x.height);
        const $ = S / x.width, R = xn(-(T / x.height) + 1, 0, 1);
        u.value = S, c.value = T, s.saturation = $, s.brightness = R, t("change", $, R);
      }
    };
    return at(() => {
      a && a.vnode.el && f.value && (Pt.triggerDragEvent(f.value, {
        drag: (y) => {
          v(y);
        },
        end: (y) => {
          v(y);
        }
      }), Fn(() => {
        h();
      }));
    }), oe(
      () => e.color,
      (y) => {
        Qr(s, {
          hueColor: new G({ h: y.hue, s: 1, v: 1 }).toHexString(),
          saturation: y.saturation,
          brightness: y.brightness
        }), h();
      },
      { deep: !0 }
    ), { state: s, cursorElement: f, getCursorStyle: d, onClickBoard: g };
  }
}), Co = (e) => (It("data-v-058e5db2"), e = e(), Ht(), e), mv = /* @__PURE__ */ Co(() => /* @__PURE__ */ _("div", { class: "vc-saturation__white" }, null, -1)), bv = /* @__PURE__ */ Co(() => /* @__PURE__ */ _("div", { class: "vc-saturation__black" }, null, -1)), _v = /* @__PURE__ */ Co(() => /* @__PURE__ */ _("div", null, null, -1)), Cv = [
  _v
];
function wv(e, t, r, n, o, a) {
  return k(), P("div", {
    ref: "boardElement",
    class: ie(["vc-saturation", { "vc-saturation__chrome": e.round, "vc-saturation__hidden": e.hide }]),
    style: J({ backgroundColor: e.state.hueColor }),
    onClick: t[0] || (t[0] = (...l) => e.onClickBoard && e.onClickBoard(...l))
  }, [
    mv,
    bv,
    _("div", {
      class: "vc-saturation__cursor",
      ref: "cursorElement",
      style: J(e.getCursorStyle)
    }, Cv, 4)
  ], 6);
}
const wo = /* @__PURE__ */ we(yv, [["render", wv], ["__scopeId", "data-v-058e5db2"]]), Sv = U({
  name: "Hue",
  props: {
    color: M.instanceOf(G),
    size: M.oneOf(["small", "default"]).def("default")
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const r = B(null), n = B(null);
    let o = e.color || new G();
    const a = Oe({
      hue: o.hue || 0
    });
    Pe(
      () => e.color,
      (u) => {
        u && (o = u, Qr(a, { hue: o.hue }));
      },
      { deep: !0 }
    );
    const l = () => {
      if (r.value && n.value) {
        const u = r.value.getBoundingClientRect(), f = n.value.offsetWidth;
        return a.hue === 360 ? u.width - f / 2 : a.hue % 360 * (u.width - f) / 360 + f / 2;
      }
      return 0;
    }, i = W(() => ({
      left: l() + "px",
      top: 0
    })), s = (u) => {
      u.target !== r.value && c(u);
    }, c = (u) => {
      if (u.stopPropagation(), r.value && n.value) {
        const f = r.value.getBoundingClientRect(), p = n.value.offsetWidth;
        let d = u.clientX - f.left;
        d = Math.min(d, f.width - p / 2), d = Math.max(p / 2, d);
        const h = Math.round((d - p / 2) / (f.width - p) * 360);
        o.hue = h, a.hue = h, t("change", h);
      }
    };
    return at(() => {
      const u = {
        drag: (f) => {
          c(f);
        },
        end: (f) => {
          c(f);
        }
      };
      r.value && n.value && Pt.triggerDragEvent(r.value, u);
    }), { barElement: r, cursorElement: n, getCursorStyle: i, onClickSider: s };
  }
}), xv = (e) => (It("data-v-e1a08576"), e = e(), Ht(), e), Ov = /* @__PURE__ */ xv(() => /* @__PURE__ */ _("div", { class: "vc-hue-slider__bar-handle" }, null, -1)), Av = [
  Ov
];
function kv(e, t, r, n, o, a) {
  return k(), P("div", {
    class: ie(["vc-hue-slider", { "small-slider": e.size === "small" }])
  }, [
    _("div", {
      ref: "barElement",
      class: "vc-hue-slider__bar",
      onClick: t[0] || (t[0] = (...l) => e.onClickSider && e.onClickSider(...l))
    }, [
      _("div", {
        class: ie(["vc-hue-slider__bar-pointer", { "small-bar": e.size === "small" }]),
        ref: "cursorElement",
        style: J(e.getCursorStyle)
      }, Av, 6)
    ], 512)
  ], 2);
}
const So = /* @__PURE__ */ we(Sv, [["render", kv], ["__scopeId", "data-v-e1a08576"]]), $v = U({
  name: "Lightness",
  props: {
    color: M.instanceOf(G),
    size: M.oneOf(["small", "default"]).def("default")
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const r = B(null), n = B(null);
    let o = e.color || new G();
    const [a, l, i] = o.HSL, s = Oe({
      hue: a,
      saturation: l,
      lightness: i
    });
    Pe(
      () => e.color,
      (h) => {
        if (h) {
          o = h;
          const [g, v, y] = o.HSL;
          Qr(s, {
            hue: g,
            saturation: v,
            lightness: y
          });
        }
      },
      { deep: !0 }
    );
    const c = W(() => {
      const h = w({
        h: s.hue,
        s: s.saturation,
        l: 0.8
      }).toPercentageRgbString(), g = w({
        h: s.hue,
        s: s.saturation,
        l: 0.6
      }).toPercentageRgbString(), v = w({
        h: s.hue,
        s: s.saturation,
        l: 0.4
      }).toPercentageRgbString(), y = w({
        h: s.hue,
        s: s.saturation,
        l: 0.2
      }).toPercentageRgbString();
      return {
        background: [
          `linear-gradient(to right, rgb(255, 255, 255), ${h}, ${g}, ${v}, ${y}, rgb(0, 0, 0))`,
          `-webkit-linear-gradient(left, rgb(255, 255, 255), ${h}, ${g}, ${v}, ${y}, rgb(0, 0, 0))`,
          `-moz-linear-gradient(left, rgb(255, 255, 255), ${h}, ${g}, ${v}, ${y}, rgb(0, 0, 0))`,
          `-ms-linear-gradient(left, rgb(255, 255, 255), ${h}, ${g}, ${v}, ${y}, rgb(0, 0, 0))`
        ]
      };
    }), u = () => {
      if (r.value && n.value) {
        const h = s.lightness, g = r.value.getBoundingClientRect(), v = n.value.offsetWidth;
        return (1 - h) * (g.width - v) + v / 2;
      }
      return 0;
    }, f = W(() => ({
      left: u() + "px",
      top: 0
    })), p = (h) => {
      h.target !== r.value && d(h);
    }, d = (h) => {
      if (h.stopPropagation(), r.value && n.value) {
        const g = r.value.getBoundingClientRect(), v = n.value.offsetWidth;
        let y = h.clientX - g.left;
        y = Math.max(v / 2, y), y = Math.min(y, g.width - v / 2);
        const C = 1 - (y - v / 2) / (g.width - v);
        o.lightness = C, t("change", C);
      }
    };
    return at(() => {
      const h = {
        drag: (g) => {
          d(g);
        },
        end: (g) => {
          d(g);
        }
      };
      r.value && n.value && Pt.triggerDragEvent(r.value, h);
    }), { barElement: r, cursorElement: n, getCursorStyle: f, getBackgroundStyle: c, onClickSider: p };
  }
}), Ev = (e) => (It("data-v-94a50a9e"), e = e(), Ht(), e), Tv = /* @__PURE__ */ Ev(() => /* @__PURE__ */ _("div", { class: "vc-lightness-slider__bar-handle" }, null, -1)), Mv = [
  Tv
];
function Rv(e, t, r, n, o, a) {
  return k(), P("div", {
    class: ie(["vc-lightness-slider", { "small-slider": e.size === "small" }])
  }, [
    _("div", {
      ref: "barElement",
      class: "vc-lightness-slider__bar",
      style: J(e.getBackgroundStyle),
      onClick: t[0] || (t[0] = (...l) => e.onClickSider && e.onClickSider(...l))
    }, [
      _("div", {
        class: ie(["vc-lightness-slider__bar-pointer", { "small-bar": e.size === "small" }]),
        ref: "cursorElement",
        style: J(e.getCursorStyle)
      }, Mv, 6)
    ], 4)
  ], 2);
}
const Ts = /* @__PURE__ */ we($v, [["render", Rv], ["__scopeId", "data-v-94a50a9e"]]), Pv = U({
  name: "History",
  props: {
    colors: M.arrayOf(String).def(() => []),
    round: M.bool.def(!1)
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    return { onColorSelect: (r) => {
      t("change", r);
    } };
  }
}), jv = {
  key: 0,
  class: "vc-colorPicker__record"
}, Iv = { class: "color-list" }, Hv = ["onClick"];
function Lv(e, t, r, n, o, a) {
  return e.colors && e.colors.length > 0 ? (k(), P("div", jv, [
    _("div", Iv, [
      (k(!0), P(Ve, null, wt(e.colors, (l, i) => (k(), P("div", {
        key: i,
        class: ie(["color-item", "transparent", { "color-item__round": e.round }]),
        onClick: (s) => e.onColorSelect(l)
      }, [
        _("div", {
          class: "color-item__display",
          style: J({ backgroundColor: l })
        }, null, 4)
      ], 10, Hv))), 128))
    ])
  ])) : z("", !0);
}
const xo = /* @__PURE__ */ we(Pv, [["render", Lv], ["__scopeId", "data-v-0f657238"]]), Dv = U({
  name: "Display",
  props: {
    color: M.instanceOf(G),
    disableAlpha: M.bool.def(!1)
  },
  emits: ["update:color", "change"],
  setup(e, { emit: t }) {
    var r, n, o, a;
    const l = B("hex"), i = Oe({
      color: e.color,
      hex: (r = e.color) == null ? void 0 : r.hex,
      alpha: Math.floor(((n = e.color) == null ? void 0 : n.alpha) || 100) + "%",
      rgba: (o = e.color) == null ? void 0 : o.RGB,
      previewBgColor: (a = e.color) == null ? void 0 : a.toRgbString()
    }), s = W(() => ({
      background: i.previewBgColor
    })), c = () => {
      l.value = l.value === "rgba" ? "hex" : "rgba";
    }, u = Ze((p) => {
      if (!p.target.value)
        return;
      let d = parseInt(p.target.value.replace("%", ""));
      d > 100 && (p.target.value = "100%", d = 100), d < 0 && (p.target.value = "0%", d = 0), isNaN(d) && (p.target.value = "100%", d = 100), !isNaN(d) && i.color && (i.color.alpha = d), t("update:color", i.color), t("change", i.color);
    }, 300), f = Ze((p, d) => {
      if (p.target.value) {
        if (l.value === "hex") {
          const h = p.target.value.replace("#", "");
          w(h).isValid() && i.color && (i.color.hex = h);
        } else if (d !== void 0 && i.rgba && i.color) {
          p.target.value < 0 && (p.target.value = 0), d === 3 && p.target.value > 1 && (p.target.value = 1), d < 3 && p.target.value > 255 && (p.target.value = 255), i.rgba[d] = Number(p.target.value);
          const [h, g, v, y] = i.rgba;
          i.color.hex = w({ r: h, g, b: v }).toHex(), i.color.alpha = Math.floor(y * 100);
        }
        t("update:color", i.color), t("change", i.color);
      }
    }, 300);
    return oe(
      () => e.color,
      (p) => {
        p && (i.color = p, i.alpha = Math.floor(i.color.alpha) + "%", i.hex = i.color.hex, i.rgba = i.color.RGB);
      },
      { deep: !0 }
    ), oe(
      () => i.color,
      () => {
        i.color && (i.previewBgColor = i.color.toRgbString());
      },
      { deep: !0 }
    ), { state: i, getBgColorStyle: s, inputType: l, onInputTypeChange: c, onAlphaBlur: u, onInputChange: f };
  }
}), Bv = { class: "vc-display" }, Nv = { class: "vc-current-color vc-transparent" }, Vv = {
  key: 0,
  style: { display: "flex", flex: "1", gap: "4px", height: "100%" }
}, Fv = { class: "vc-color-input" }, zv = ["value"], Wv = {
  key: 0,
  class: "vc-alpha-input"
}, Gv = ["value"], Uv = {
  key: 1,
  style: { display: "flex", flex: "1", gap: "4px", height: "100%" }
}, Kv = ["value", "onInput"];
function qv(e, t, r, n, o, a) {
  return k(), P("div", Bv, [
    _("div", Nv, [
      _("div", {
        class: "color-cube",
        style: J(e.getBgColorStyle)
      }, null, 4)
    ]),
    e.inputType === "hex" ? (k(), P("div", Vv, [
      _("div", Fv, [
        _("input", {
          value: e.state.hex,
          onInput: t[0] || (t[0] = (...l) => e.onInputChange && e.onInputChange(...l))
        }, null, 40, zv)
      ]),
      e.disableAlpha ? z("", !0) : (k(), P("div", Wv, [
        _("input", {
          class: "vc-alpha-input__inner",
          value: e.state.alpha,
          onInput: t[1] || (t[1] = (...l) => e.onAlphaBlur && e.onAlphaBlur(...l))
        }, null, 40, Gv)
      ]))
    ])) : e.state.rgba ? (k(), P("div", Uv, [
      (k(!0), P(Ve, null, wt(e.state.rgba, (l, i) => (k(), P("div", {
        class: "vc-color-input",
        key: i
      }, [
        _("input", {
          value: l,
          onInput: (s) => e.onInputChange(s, i)
        }, null, 40, Kv)
      ]))), 128))
    ])) : z("", !0),
    _("div", {
      class: "vc-input-toggle",
      onClick: t[2] || (t[2] = (...l) => e.onInputTypeChange && e.onInputTypeChange(...l))
    }, ce(e.inputType), 1)
  ]);
}
const Oo = /* @__PURE__ */ we(Dv, [["render", qv], ["__scopeId", "data-v-80d589ba"]]), Yv = U({
  name: "FkColorPicker",
  components: { Display: Oo, Alpha: _o, Palette: Es, Board: wo, Hue: So, Lightness: Ts, History: xo },
  props: {
    color: M.instanceOf(G),
    disableHistory: M.bool.def(!1),
    roundHistory: M.bool.def(!1),
    disableAlpha: M.bool.def(!1)
  },
  emits: ["update:color", "change", "advanceChange"],
  setup(e, { emit: t }) {
    const r = e.color || new G(), n = Oe({
      color: r,
      hex: r.toHexString(),
      rgb: r.toRgbString()
    }), o = B(!1), a = W(() => ({ background: n.rgb })), l = () => {
      o.value = !1, t("advanceChange", !1);
    }, i = Wn(mo, [], {}), s = Ze(() => {
      if (e.disableHistory)
        return;
      const g = n.color.toRgbString();
      if (i.value = i.value.filter((v) => !w.equals(v, g)), !i.value.includes(g)) {
        for (; i.value.length > bo; )
          i.value.pop();
        i.value.unshift(g);
      }
    }, 500), c = (g) => {
      g === "advance" ? (o.value = !0, t("advanceChange", !0)) : (n.color.hex = g, t("advanceChange", !1));
    }, u = (g) => {
      n.color.alpha = g;
    }, f = (g) => {
      n.color.hue = g;
    }, p = (g, v) => {
      n.color.saturation = g, n.color.brightness = v;
    }, d = (g) => {
      n.color.lightness = g;
    }, h = (g) => {
      const v = g.target.value.replace("#", "");
      w(v).isValid() && (n.color.hex = v);
    };
    return oe(
      () => e.color,
      (g) => {
        g && (n.color = g);
      },
      { deep: !0 }
    ), oe(
      () => n.color,
      () => {
        n.hex = n.color.hex, n.rgb = n.color.toRgbString(), s(), t("update:color", n.color), t("change", n.color);
      },
      { deep: !0 }
    ), {
      state: n,
      advancePanelShow: o,
      onBack: l,
      onCompactChange: c,
      onAlphaChange: u,
      onHueChange: f,
      onBoardChange: p,
      onLightChange: d,
      onInputChange: h,
      previewStyle: a,
      historyColors: i
    };
  }
}), Xv = (e) => (It("data-v-0d5bef46"), e = e(), Ht(), e), Jv = { class: "vc-fk-colorPicker" }, Zv = { class: "vc-fk-colorPicker__inner" }, Qv = { class: "vc-fk-colorPicker__header" }, eg = /* @__PURE__ */ Xv(() => /* @__PURE__ */ _("div", { class: "back" }, null, -1)), tg = [
  eg
];
function rg(e, t, r, n, o, a) {
  const l = Y("Palette"), i = Y("Board"), s = Y("Hue"), c = Y("Lightness"), u = Y("Alpha"), f = Y("Display"), p = Y("History");
  return k(), P("div", Jv, [
    _("div", Zv, [
      _("div", Qv, [
        e.advancePanelShow ? (k(), P("span", {
          key: 0,
          style: { cursor: "pointer" },
          onClick: t[0] || (t[0] = (...d) => e.onBack && e.onBack(...d))
        }, tg)) : z("", !0)
      ]),
      e.advancePanelShow ? z("", !0) : (k(), Q(l, {
        key: 0,
        onChange: e.onCompactChange
      }, null, 8, ["onChange"])),
      e.advancePanelShow ? (k(), Q(i, {
        key: 1,
        color: e.state.color,
        onChange: e.onBoardChange
      }, null, 8, ["color", "onChange"])) : z("", !0),
      e.advancePanelShow ? (k(), Q(s, {
        key: 2,
        color: e.state.color,
        onChange: e.onHueChange
      }, null, 8, ["color", "onChange"])) : z("", !0),
      e.advancePanelShow ? z("", !0) : (k(), Q(c, {
        key: 3,
        color: e.state.color,
        onChange: e.onLightChange
      }, null, 8, ["color", "onChange"])),
      e.disableAlpha ? z("", !0) : (k(), Q(u, {
        key: 4,
        color: e.state.color,
        onChange: e.onAlphaChange
      }, null, 8, ["color", "onChange"])),
      Ae(f, {
        color: e.state.color,
        "disable-alpha": e.disableAlpha
      }, null, 8, ["color", "disable-alpha"]),
      e.disableHistory ? z("", !0) : (k(), Q(p, {
        key: 5,
        round: e.roundHistory,
        colors: e.historyColors,
        onChange: e.onCompactChange
      }, null, 8, ["round", "colors", "onChange"]))
    ])
  ]);
}
const li = /* @__PURE__ */ we(Yv, [["render", rg], ["__scopeId", "data-v-0d5bef46"]]), ng = U({
  name: "ChromeColorPicker",
  components: { Display: Oo, Alpha: _o, Board: wo, Hue: So, History: xo },
  props: {
    color: M.instanceOf(G),
    disableHistory: M.bool.def(!1),
    roundHistory: M.bool.def(!1),
    disableAlpha: M.bool.def(!1)
  },
  emits: ["update:color", "change"],
  setup(e, { emit: t }) {
    const r = e.color || new G(), n = Oe({
      color: r,
      hex: r.toHexString(),
      rgb: r.toRgbString()
    }), o = W(() => ({ background: n.rgb })), a = Wn(mo, [], {}), l = Ze(() => {
      if (e.disableHistory)
        return;
      const f = n.color.toRgbString();
      if (a.value = a.value.filter((p) => !w.equals(p, f)), !a.value.includes(f)) {
        for (; a.value.length > bo; )
          a.value.pop();
        a.value.unshift(f);
      }
    }, 500), i = (f) => {
      n.color.alpha = f;
    }, s = (f) => {
      n.color.hue = f;
    }, c = (f, p) => {
      n.color.saturation = f, n.color.brightness = p;
    }, u = (f) => {
      f !== "advance" && (n.color.hex = f);
    };
    return oe(
      () => e.color,
      (f) => {
        f && (n.color = f);
      },
      { deep: !0 }
    ), oe(
      () => n.color,
      () => {
        n.hex = n.color.hex, n.rgb = n.color.toRgbString(), l(), t("update:color", n.color), t("change", n.color);
      },
      { deep: !0 }
    ), {
      state: n,
      previewStyle: o,
      historyColors: a,
      onAlphaChange: i,
      onHueChange: s,
      onBoardChange: c,
      onCompactChange: u
    };
  }
}), og = { class: "vc-chrome-colorPicker" }, ag = { class: "vc-chrome-colorPicker-body" }, ig = { class: "chrome-controls" }, sg = { class: "chrome-sliders" };
function lg(e, t, r, n, o, a) {
  const l = Y("Board"), i = Y("Hue"), s = Y("Alpha"), c = Y("Display"), u = Y("History");
  return k(), P("div", og, [
    Ae(l, {
      round: !0,
      hide: !1,
      color: e.state.color,
      onChange: e.onBoardChange
    }, null, 8, ["color", "onChange"]),
    _("div", ag, [
      _("div", ig, [
        _("div", sg, [
          Ae(i, {
            size: "small",
            color: e.state.color,
            onChange: e.onHueChange
          }, null, 8, ["color", "onChange"]),
          e.disableAlpha ? z("", !0) : (k(), Q(s, {
            key: 0,
            size: "small",
            color: e.state.color,
            onChange: e.onAlphaChange
          }, null, 8, ["color", "onChange"]))
        ])
      ]),
      Ae(c, {
        color: e.state.color,
        "disable-alpha": e.disableAlpha
      }, null, 8, ["color", "disable-alpha"]),
      e.disableHistory ? z("", !0) : (k(), Q(u, {
        key: 0,
        round: e.roundHistory,
        colors: e.historyColors,
        onChange: e.onCompactChange
      }, null, 8, ["round", "colors", "onChange"]))
    ])
  ]);
}
const ui = /* @__PURE__ */ we(ng, [["render", lg], ["__scopeId", "data-v-33636434"]]), Ao = "Vue3ColorPickerProvider", ug = (e, t) => {
  const r = e.getBoundingClientRect(), n = r.left + r.width / 2, o = r.top + r.height / 2, a = Math.abs(n - t.clientX), l = Math.abs(o - t.clientY), i = Math.sqrt(Math.pow(a, 2) + Math.pow(l, 2)), s = l / i, c = Math.acos(s);
  let u = Math.floor(180 / (Math.PI / c));
  return t.clientX > n && t.clientY > o && (u = 180 - u), t.clientX == n && t.clientY > o && (u = 180), t.clientX > n && t.clientY == o && (u = 90), t.clientX < n && t.clientY > o && (u = 180 + u), t.clientX < n && t.clientY == o && (u = 270), t.clientX < n && t.clientY < o && (u = 360 - u), u;
};
let On = !1;
const cg = (e, t) => {
  const r = function(o) {
    var a;
    (a = t.drag) == null || a.call(t, o);
  }, n = function(o) {
    var a;
    document.removeEventListener("mousemove", r, !1), document.removeEventListener("mouseup", n, !1), document.onselectstart = null, document.ondragstart = null, On = !1, (a = t.end) == null || a.call(t, o);
  };
  e && e.addEventListener("mousedown", (o) => {
    var a;
    On || (document.onselectstart = () => !1, document.ondragstart = () => !1, document.addEventListener("mousemove", r, !1), document.addEventListener("mouseup", n, !1), On = !0, (a = t.start) == null || a.call(t, o));
  });
}, fg = {
  angle: {
    type: Number,
    default: 0
  },
  size: {
    type: Number,
    default: 16,
    validator: (e) => e >= 16
  },
  borderWidth: {
    type: Number,
    default: 1,
    validator: (e) => e >= 1
  },
  borderColor: {
    type: String,
    default: "#666"
  }
}, dg = U({
  name: "Angle",
  props: fg,
  emits: ["update:angle", "change"],
  setup(e, {
    emit: t
  }) {
    const r = B(null), n = B(0);
    Pe(() => e.angle, (i) => {
      n.value = i;
    });
    const o = () => {
      let i = Number(n.value);
      isNaN(i) || (i = i > 360 || i < 0 ? e.angle : i, n.value = i === 360 ? 0 : i, t("update:angle", n.value), t("change", n.value));
    }, a = W(() => ({
      width: e.size + "px",
      height: e.size + "px",
      borderWidth: e.borderWidth + "px",
      borderColor: e.borderColor,
      transform: `rotate(${n.value}deg)`
    })), l = (i) => {
      r.value && (n.value = ug(r.value, i) % 360, o());
    };
    return di(() => {
      const i = {
        drag: (s) => {
          l(s);
        },
        end: (s) => {
          l(s);
        }
      };
      r.value && cg(r.value, i);
    }), () => Ae("div", {
      class: "bee-angle"
    }, [Ae("div", {
      class: "bee-angle__round",
      ref: r,
      style: a.value
    }, null)]);
  }
}), pg = U({
  name: "GradientColorPicker",
  components: { Angle: dg, Display: Oo, Alpha: _o, Palette: Es, Board: wo, Hue: So, Lightness: Ts, History: xo },
  props: {
    startColor: M.instanceOf(G).isRequired,
    endColor: M.instanceOf(G).isRequired,
    startColorStop: M.number.def(0),
    endColorStop: M.number.def(100),
    angle: M.number.def(0),
    type: M.oneOf(["linear", "radial"]).def("linear"),
    disableHistory: M.bool.def(!1),
    roundHistory: M.bool.def(!1),
    disableAlpha: M.bool.def(!1),
    pickerType: M.oneOf(["fk", "chrome"]).def("fk")
  },
  emits: [
    "update:startColor",
    "update:endColor",
    "update:angle",
    "update:startColorStop",
    "update:endColorStop",
    "startColorChange",
    "endColorChange",
    "advanceChange",
    "angleChange",
    "startColorStopChange",
    "endColorStopChange",
    "typeChange"
  ],
  setup(e, { emit: t }) {
    const r = Oe({
      startActive: !0,
      startColor: e.startColor,
      endColor: e.endColor,
      startColorStop: e.startColorStop,
      endColorStop: e.endColorStop,
      angle: e.angle,
      type: e.type,
      // rgba
      startColorRgba: e.startColor.toRgbString(),
      endColorRgba: e.endColor.toRgbString()
    }), n = hi(Ao), o = B(e.pickerType === "chrome"), a = B(), l = B(), i = B();
    Pe(
      () => [e.startColor, e.endColor, e.angle],
      (b) => {
        r.startColor = b[0], r.endColor = b[1], r.angle = b[2];
      }
    ), Pe(
      () => e.type,
      (b) => {
        r.type = b;
      }
    );
    const s = W({
      get: () => r.startActive ? r.startColor : r.endColor,
      set: (b) => {
        if (r.startActive) {
          r.startColor = b;
          return;
        }
        r.endColor = b;
      }
    }), c = W(() => {
      if (i.value && a.value) {
        const b = r.startColorStop / 100, j = i.value.getBoundingClientRect(), E = a.value.offsetWidth;
        return Math.round(b * (j.width - E) + E / 2);
      }
      return 0;
    }), u = W(() => {
      if (i.value && l.value) {
        const b = r.endColorStop / 100, j = i.value.getBoundingClientRect(), E = l.value.offsetWidth;
        return Math.round(b * (j.width - E) + E / 2);
      }
      return 0;
    }), f = W(() => {
      let b = `background: linear-gradient(${r.angle}deg, ${r.startColorRgba} ${r.startColorStop}%, ${r.endColorRgba} ${r.endColorStop}%)`;
      return r.type === "radial" && (b = `background: radial-gradient(circle, ${r.startColorRgba} ${r.startColorStop}%, ${r.endColorRgba} ${r.endColorStop}%)`), b;
    }), p = (b) => {
      var j;
      if (r.startActive = !0, i.value && a.value) {
        const E = (j = i.value) == null ? void 0 : j.getBoundingClientRect();
        let I = b.clientX - E.left;
        I = Math.max(a.value.offsetWidth / 2, I), I = Math.min(I, E.width - a.value.offsetWidth / 2), r.startColorStop = Math.round(
          (I - a.value.offsetWidth / 2) / (E.width - a.value.offsetWidth) * 100
        ), t("update:startColorStop", r.startColorStop), t("startColorStopChange", r.startColorStop);
      }
    }, d = (b) => {
      var j;
      if (r.startActive = !1, i.value && l.value) {
        const E = (j = i.value) == null ? void 0 : j.getBoundingClientRect();
        let I = b.clientX - E.left;
        I = Math.max(l.value.offsetWidth / 2, I), I = Math.min(I, E.width - l.value.offsetWidth / 2), r.endColorStop = Math.round(
          (I - l.value.offsetWidth / 2) / (E.width - l.value.offsetWidth) * 100
        ), t("update:endColorStop", r.endColorStop), t("endColorStopChange", r.endColorStop);
      }
    }, h = (b) => {
      const j = b.target, E = parseInt(j.value.replace("°", ""));
      isNaN(E) || (r.angle = E % 360), t("update:angle", r.angle), t("angleChange", r.angle);
    }, g = (b) => {
      r.angle = b, t("update:angle", r.angle), t("angleChange", r.angle);
    }, v = (b) => {
      b === "advance" ? (o.value = !0, t("advanceChange", !0)) : (s.value.hex = b, t("advanceChange", !1)), $();
    }, y = (b) => {
      s.value.alpha = b, $();
    }, C = (b) => {
      s.value.hue = b, $();
    }, x = (b, j) => {
      s.value.saturation = b, s.value.brightness = j, $();
    }, S = (b) => {
      s.value.lightness = b, $();
    }, T = () => {
      $();
    }, $ = () => {
      r.startActive ? (t("update:startColor", r.startColor), t("startColorChange", r.startColor)) : (t("update:endColor", r.endColor), t("endColorChange", r.endColor));
    }, R = () => {
      o.value = !1, t("advanceChange", !1);
    }, L = () => {
      r.type = r.type === "linear" ? "radial" : "linear", t("typeChange", r.type);
    }, m = Wn(mo, [], {}), O = Ze(() => {
      if (e.disableHistory)
        return;
      const b = s.value.toRgbString();
      if (m.value = m.value.filter((j) => !w.equals(j, b)), !m.value.includes(b)) {
        for (; m.value.length > bo; )
          m.value.pop();
        m.value.unshift(b);
      }
    }, 500);
    return at(() => {
      l.value && a.value && (Pt.triggerDragEvent(l.value, {
        drag: (b) => {
          d(b);
        },
        end: (b) => {
          d(b);
        }
      }), Pt.triggerDragEvent(a.value, {
        drag: (b) => {
          p(b);
        },
        end: (b) => {
          p(b);
        }
      }));
    }), oe(
      () => r.startColor,
      (b) => {
        r.startColorRgba = b.toRgbString();
      },
      { deep: !0 }
    ), oe(
      () => r.endColor,
      (b) => {
        r.endColorRgba = b.toRgbString();
      },
      { deep: !0 }
    ), oe(
      () => s.value,
      () => {
        O();
      },
      { deep: !0 }
    ), {
      startGradientRef: a,
      stopGradientRef: l,
      colorRangeRef: i,
      state: r,
      currentColor: s,
      getStartColorLeft: c,
      getEndColorLeft: u,
      gradientBg: f,
      advancePanelShow: o,
      onDegreeBlur: h,
      onCompactChange: v,
      onAlphaChange: y,
      onHueChange: C,
      onBoardChange: x,
      onLightChange: S,
      historyColors: m,
      onBack: R,
      onDegreeChange: g,
      onDisplayChange: T,
      onTypeChange: L,
      lang: n == null ? void 0 : n.lang
    };
  }
}), Ms = (e) => (It("data-v-431cadee"), e = e(), Ht(), e), hg = { class: "vc-gradient-picker" }, vg = { class: "vc-gradient-picker__header" }, gg = { class: "vc-gradient__types" }, yg = { class: "vc-gradient-wrap__types" }, mg = { class: "vc-picker-degree-input vc-degree-input" }, bg = { class: "vc-degree-input__control" }, _g = ["value"], Cg = { class: "vc-degree-input__panel" }, wg = { class: "vc-degree-input__disk" }, Sg = { class: "vc-gradient-picker__body" }, xg = {
  class: "vc-color-range",
  ref: "colorRangeRef"
}, Og = { class: "vc-color-range__container" }, Ag = { class: "vc-gradient__stop__container" }, kg = ["title"], $g = /* @__PURE__ */ Ms(() => /* @__PURE__ */ _("span", { class: "vc-gradient__stop--inner" }, null, -1)), Eg = [
  $g
], Tg = ["title"], Mg = /* @__PURE__ */ Ms(() => /* @__PURE__ */ _("span", { class: "vc-gradient__stop--inner" }, null, -1)), Rg = [
  Mg
];
function Pg(e, t, r, n, o, a) {
  var l, i;
  const s = Y("Angle"), c = Y("Board"), u = Y("Hue"), f = Y("Palette"), p = Y("Lightness"), d = Y("Alpha"), h = Y("Display"), g = Y("History");
  return k(), P("div", hg, [
    _("div", vg, [
      _("div", null, [
        Fe(_("div", {
          class: "back",
          style: { cursor: "pointer" },
          onClick: t[0] || (t[0] = (...v) => e.onBack && e.onBack(...v))
        }, null, 512), [
          [St, e.pickerType === "fk" && e.advancePanelShow]
        ])
      ]),
      _("div", gg, [
        _("div", yg, [
          (k(), P(Ve, null, wt(["linear", "radial"], (v) => _("div", {
            class: ie(["vc-gradient__type", { active: e.state.type === v }]),
            key: v,
            onClick: t[1] || (t[1] = (...y) => e.onTypeChange && e.onTypeChange(...y))
          }, ce(e.lang ? e.lang[v] : v), 3)), 64))
        ]),
        Fe(_("div", mg, [
          _("div", bg, [
            _("input", {
              value: e.state.angle,
              onBlur: t[2] || (t[2] = (...v) => e.onDegreeBlur && e.onDegreeBlur(...v))
            }, null, 40, _g),
            vi("deg ")
          ]),
          _("div", Cg, [
            _("div", wg, [
              Ae(s, {
                angle: e.state.angle,
                "onUpdate:angle": t[3] || (t[3] = (v) => e.state.angle = v),
                size: 40,
                onChange: e.onDegreeChange
              }, null, 8, ["angle", "onChange"])
            ])
          ])
        ], 512), [
          [St, e.state.type === "linear"]
        ])
      ])
    ]),
    _("div", Sg, [
      _("div", xg, [
        _("div", Og, [
          _("div", {
            class: "vc-background",
            style: J(e.gradientBg)
          }, null, 4),
          _("div", Ag, [
            _("div", {
              class: ie(["vc-gradient__stop", {
                "vc-gradient__stop--current": e.state.startActive
              }]),
              ref: "startGradientRef",
              title: (l = e.lang) == null ? void 0 : l.start,
              style: J({ left: e.getStartColorLeft + "px", backgroundColor: e.state.startColorRgba })
            }, Eg, 14, kg),
            _("div", {
              class: ie(["vc-gradient__stop", {
                "vc-gradient__stop--current": !e.state.startActive
              }]),
              ref: "stopGradientRef",
              title: (i = e.lang) == null ? void 0 : i.end,
              style: J({ left: e.getEndColorLeft + "px", backgroundColor: e.state.endColorRgba })
            }, Rg, 14, Tg)
          ])
        ])
      ], 512)
    ]),
    e.advancePanelShow ? (k(), Q(c, {
      key: 0,
      color: e.currentColor,
      onChange: e.onBoardChange
    }, null, 8, ["color", "onChange"])) : z("", !0),
    e.advancePanelShow ? (k(), Q(u, {
      key: 1,
      color: e.currentColor,
      onChange: e.onHueChange
    }, null, 8, ["color", "onChange"])) : z("", !0),
    e.advancePanelShow ? z("", !0) : (k(), Q(f, {
      key: 2,
      onChange: e.onCompactChange
    }, null, 8, ["onChange"])),
    e.advancePanelShow ? z("", !0) : (k(), Q(p, {
      key: 3,
      color: e.currentColor,
      onChange: e.onLightChange
    }, null, 8, ["color", "onChange"])),
    e.disableAlpha ? z("", !0) : (k(), Q(d, {
      key: 4,
      color: e.currentColor,
      onChange: e.onAlphaChange
    }, null, 8, ["color", "onChange"])),
    Ae(h, {
      color: e.currentColor,
      "disable-alpha": e.disableAlpha,
      onChange: e.onDisplayChange
    }, null, 8, ["color", "disable-alpha", "onChange"]),
    e.disableHistory ? z("", !0) : (k(), Q(g, {
      key: 5,
      round: e.roundHistory,
      colors: e.historyColors,
      onChange: e.onCompactChange
    }, null, 8, ["round", "colors", "onChange"]))
  ]);
}
const ci = /* @__PURE__ */ we(pg, [["render", Pg], ["__scopeId", "data-v-431cadee"]]), jg = U({
  name: "WrapContainer",
  props: {
    theme: M.oneOf(["white", "black"]).def("white"),
    showTab: M.bool.def(!1),
    activeKey: M.oneOf(["pure", "gradient"]).def("pure")
  },
  emits: ["update:activeKey", "change"],
  setup(e, { emit: t }) {
    const r = Oe({
      activeKey: e.activeKey
    }), n = hi(Ao), o = (a) => {
      r.activeKey = a, t("update:activeKey", a), t("change", a);
    };
    return oe(
      () => e.activeKey,
      (a) => {
        r.activeKey = a;
      }
    ), { state: r, onActiveKeyChange: o, lang: n == null ? void 0 : n.lang };
  }
}), Ig = { class: "vc-colorpicker--container" }, Hg = {
  key: 0,
  class: "vc-colorpicker--tabs"
}, Lg = { class: "vc-colorpicker--tabs__inner" }, Dg = { class: "vc-btn__content" }, Bg = { class: "vc-btn__content" };
function Ng(e, t, r, n, o, a) {
  var l, i;
  return k(), P("div", {
    class: ie(["vc-colorpicker", e.theme])
  }, [
    _("div", Ig, [
      e.showTab ? (k(), P("div", Hg, [
        _("div", Lg, [
          _("div", {
            class: ie([
              "vc-colorpicker--tabs__btn",
              {
                "vc-btn-active": e.state.activeKey === "pure"
              }
            ]),
            onClick: t[0] || (t[0] = (s) => e.onActiveKeyChange("pure"))
          }, [
            _("button", null, [
              _("div", Dg, ce((l = e.lang) == null ? void 0 : l.pure), 1)
            ])
          ], 2),
          _("div", {
            class: ie([
              "vc-colorpicker--tabs__btn",
              {
                "vc-btn-active": e.state.activeKey === "gradient"
              }
            ]),
            onClick: t[1] || (t[1] = (s) => e.onActiveKeyChange("gradient"))
          }, [
            _("button", null, [
              _("div", Bg, ce((i = e.lang) == null ? void 0 : i.gradient), 1)
            ])
          ], 2),
          _("div", {
            class: "vc-colorpicker--tabs__bg",
            style: J({
              width: "50%",
              left: `calc(${e.state.activeKey === "gradient" ? 50 : 0}%)`
            })
          }, null, 4)
        ])
      ])) : z("", !0),
      zn(e.$slots, "default", {}, void 0, !0)
    ])
  ], 2);
}
const Vg = /* @__PURE__ */ we(jg, [["render", Ng], ["__scopeId", "data-v-0492277d"]]), Fg = {
  start: "Start",
  end: "End",
  pure: "Pure",
  gradient: "Gradient",
  linear: "linear",
  radial: "radial"
}, zg = {
  start: "开始",
  end: "结束",
  pure: "纯色",
  gradient: "渐变",
  linear: "线性",
  radial: "径向"
}, Wg = {
  En: Fg,
  "ZH-cn": zg
}, Gg = {
  isWidget: M.bool.def(!1),
  pickerType: M.oneOf(["fk", "chrome"]).def("fk"),
  shape: M.oneOf(["circle", "square"]).def("square"),
  pureColor: {
    type: [String, Object],
    default: "#000000"
  },
  gradientColor: M.string.def(
    "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)"
  ),
  format: {
    type: String,
    default: "rgb"
  },
  disableAlpha: M.bool.def(!1),
  disableHistory: M.bool.def(!1),
  roundHistory: M.bool.def(!1),
  useType: M.oneOf(["pure", "gradient", "both"]).def("pure"),
  activeKey: M.oneOf(["pure", "gradient"]).def("pure"),
  lang: {
    type: String,
    default: "ZH-cn"
  },
  zIndex: M.number.def(9999),
  pickerContainer: {
    type: [String, HTMLElement],
    default: "body"
  },
  debounce: M.number.def(100),
  theme: M.oneOf(["white", "black"]).def("white")
}, Ug = U({
  name: "ColorPicker",
  components: { FkColorPicker: li, ChromeColorPicker: ui, GradientColorPicker: ci, WrapContainer: Vg },
  inheritAttrs: !1,
  props: Gg,
  emits: [
    "update:pureColor",
    "pureColorChange",
    "update:gradientColor",
    "gradientColorChange",
    "update:activeKey",
    "activeKeyChange"
  ],
  setup(e, { emit: t }) {
    Fs(Ao, {
      lang: W(() => Wg[e.lang || "ZH-cn"])
    });
    const r = Oe({
      pureColor: e.pureColor || "",
      activeKey: e.useType === "gradient" ? "gradient" : e.activeKey,
      //  "pure" | "gradient"
      isAdvanceMode: !1
    }), n = new G("#000"), o = new G("#000"), a = new G(r.pureColor), l = Oe({
      startColor: n,
      endColor: o,
      startColorStop: 0,
      endColorStop: 100,
      angle: 0,
      type: "linear",
      gradientColor: e.gradientColor
    }), i = B(a), s = B(!1), c = B(null), u = B(null);
    let f = null;
    const p = W(() => ({
      background: r.activeKey !== "gradient" ? w(r.pureColor).toRgbString() : l.gradientColor
    })), d = W(() => r.activeKey === "gradient" ? ci.name : e.pickerType === "fk" ? li.name : ui.name), h = (m) => {
      r.isAdvanceMode = m;
    }, g = W(() => {
      const m = {
        disableAlpha: e.disableAlpha,
        disableHistory: e.disableHistory,
        roundHistory: e.roundHistory,
        pickerType: e.pickerType
      };
      return r.activeKey === "gradient" ? {
        ...m,
        startColor: l.startColor,
        endColor: l.endColor,
        angle: l.angle,
        type: l.type,
        startColorStop: l.startColorStop,
        endColorStop: l.endColorStop,
        onStartColorChange: (O) => {
          l.startColor = O, x();
        },
        onEndColorChange: (O) => {
          l.endColor = O, x();
        },
        onStartColorStopChange: (O) => {
          l.startColorStop = O, x();
        },
        onEndColorStopChange: (O) => {
          l.endColorStop = O, x();
        },
        onAngleChange: (O) => {
          l.angle = O, x();
        },
        onTypeChange: (O) => {
          l.type = O, x();
        },
        onAdvanceChange: h
      } : {
        ...m,
        disableAlpha: e.disableAlpha,
        disableHistory: e.disableHistory,
        roundHistory: e.roundHistory,
        color: i.value,
        onChange: $,
        onAdvanceChange: h
      };
    }), v = () => {
      s.value = !0, f ? f.update() : T();
    }, y = () => {
      s.value = !1;
    }, C = () => {
      var m, O, b, j;
      try {
        const [E] = Vl(l.gradientColor);
        if (E && E.type.includes("gradient") && E.colorStops.length >= 2) {
          const I = E.colorStops[0], Z = E.colorStops[1];
          l.startColorStop = Number((m = I.length) == null ? void 0 : m.value) || 0, l.endColorStop = Number((O = Z.length) == null ? void 0 : O.value) || 0, E.type === "linear-gradient" && ((b = E.orientation) == null ? void 0 : b.type) === "angular" && (l.angle = Number((j = E.orientation) == null ? void 0 : j.value) || 0), l.type = E.type.split("-")[0];
          const [te, A, H, D] = I.value, [le, De, Ke, ft] = Z.value;
          l.startColor = new G({
            r: Number(te),
            g: Number(A),
            b: Number(H),
            a: Number(D)
          }), l.endColor = new G({
            r: Number(le),
            g: Number(De),
            b: Number(Ke),
            a: Number(ft)
          });
        }
      } catch (E) {
        console.log(`[Parse Color]: ${E}`);
      }
    }, x = Ze(() => {
      const m = S();
      try {
        l.gradientColor = Fl(m), t("update:gradientColor", l.gradientColor), t("gradientColorChange", l.gradientColor);
      } catch (O) {
        console.log(O);
      }
    }, e.debounce), S = () => {
      const m = [], O = l.startColor.RGB.map((E) => E.toString()), b = l.endColor.RGB.map((E) => E.toString()), j = [
        {
          type: "rgba",
          value: [O[0], O[1], O[2], O[3]],
          length: { value: l.startColorStop + "", type: "%" }
        },
        {
          type: "rgba",
          value: [b[0], b[1], b[2], b[3]],
          length: { value: l.endColorStop + "", type: "%" }
        }
      ];
      return l.type === "linear" ? m.push({
        type: "linear-gradient",
        orientation: { type: "angular", value: l.angle + "" },
        colorStops: j
      }) : l.type === "radial" && m.push({
        type: "radial-gradient",
        orientation: [{ type: "shape", value: "circle" }],
        colorStops: j
      }), m;
    }, T = () => {
      c.value && u.value && (f = qu(c.value, u.value, {
        placement: "auto",
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 8]
            }
          },
          {
            name: "flip",
            options: {
              allowedAutoPlacements: ["top", "bottom", "left", "right"],
              rootBoundary: "viewport"
            }
          }
        ]
      }));
    }, $ = (m) => {
      i.value = m, r.pureColor = m.toString(e.format), R();
    }, R = Ze(() => {
      t("update:pureColor", r.pureColor), t("pureColorChange", r.pureColor);
    }, e.debounce);
    cl(u, () => {
      y();
    });
    const L = (m) => {
      r.activeKey = m, t("update:activeKey", m), t("activeKeyChange", m);
    };
    return at(() => {
      C();
    }), oe(
      () => e.gradientColor,
      (m) => {
        m != l.gradientColor && (l.gradientColor = m);
      }
    ), oe(
      () => l.gradientColor,
      () => {
        C();
      }
    ), oe(
      () => e.activeKey,
      (m) => {
        r.activeKey = m;
      }
    ), oe(
      () => e.useType,
      (m) => {
        r.activeKey !== "gradient" && m === "gradient" ? r.activeKey = "gradient" : r.activeKey = "pure";
      }
    ), oe(
      () => e.pureColor,
      (m) => {
        w.equals(m, r.pureColor) || (r.pureColor = m, i.value = new G(m));
      },
      { deep: !0 }
    ), {
      colorCubeRef: c,
      pickerRef: u,
      showPicker: s,
      colorInstance: i,
      getBgColorStyle: p,
      onColorChange: $,
      onShowPicker: v,
      onActiveKeyChange: L,
      getComponentName: d,
      getBindArgs: g,
      state: r
    };
  }
});
function Kg(e, t, r, n, o, a) {
  const l = Y("WrapContainer");
  return k(), P(Ve, null, [
    e.isWidget ? (k(), Q(l, {
      key: 0,
      "active-key": e.state.activeKey,
      "onUpdate:activeKey": t[0] || (t[0] = (i) => e.state.activeKey = i),
      "show-tab": e.useType === "both",
      onChange: e.onActiveKeyChange,
      style: J({ zIndex: e.zIndex }),
      theme: e.theme
    }, {
      default: Ho(() => [
        (k(), Q(Lo(e.getComponentName), Do({ key: e.getComponentName }, e.getBindArgs), null, 16))
      ]),
      _: 1
    }, 8, ["active-key", "show-tab", "onChange", "style", "theme"])) : z("", !0),
    e.isWidget ? z("", !0) : (k(), P(Ve, { key: 1 }, [
      _("div", {
        class: ie(["vc-color-wrap transparent", { round: e.shape === "circle" }]),
        ref: "colorCubeRef"
      }, [
        _("div", {
          class: "current-color",
          style: J(e.getBgColorStyle),
          onClick: t[1] || (t[1] = (...i) => e.onShowPicker && e.onShowPicker(...i))
        }, null, 4)
      ], 2),
      (k(), Q(zs, { to: e.pickerContainer }, [
        Fe(_("div", {
          ref: "pickerRef",
          style: J({ zIndex: e.zIndex })
        }, [
          e.showPicker ? (k(), Q(l, {
            key: 0,
            "show-tab": e.useType === "both" && !e.state.isAdvanceMode,
            "active-key": e.state.activeKey,
            "onUpdate:activeKey": t[2] || (t[2] = (i) => e.state.activeKey = i),
            onChange: e.onActiveKeyChange,
            theme: e.theme
          }, {
            default: Ho(() => [
              (k(), Q(Lo(e.getComponentName), Do({ key: e.getComponentName }, e.getBindArgs), null, 16))
            ]),
            _: 1
          }, 8, ["show-tab", "active-key", "onChange", "theme"])) : z("", !0)
        ], 4), [
          [St, e.showPicker]
        ])
      ], 8, ["to"]))
    ], 64))
  ], 64);
}
const qg = /* @__PURE__ */ we(Ug, [["render", Kg], ["__scopeId", "data-v-3ba84123"]]), Yg = { class: "label-text" }, Xg = ["value"], Jg = { class: "color-picker-container" }, Zg = /* @__PURE__ */ U({
  __name: "DatColor",
  props: /* @__PURE__ */ nt({
    label: { default: "" }
  }, {
    modelValue: { type: String, required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = ot(e, "modelValue");
    let r = B(!1);
    const n = W(() => {
      if (t.value.length !== 7 || t.value[0] !== "#")
        return "black";
      const i = parseInt(t.value.substring(1, 3), 16), s = parseInt(t.value.substring(3, 5), 16), c = parseInt(t.value.substring(5, 7), 16);
      return (i * 299 + s * 587 + c * 114) / 1e3 >= 128 ? "black" : "white";
    }), o = (i) => {
      i.key === "Enter" && (r.value = !1);
    }, a = () => {
      r.value = !0, window.addEventListener("keydown", o);
    }, l = () => {
      r.value = !1, window.removeEventListener("keydown", o);
    };
    return (i, s) => (k(), P("li", {
      class: "control-item color",
      style: J({ "border-left-color": t.value }),
      onMouseleave: l
    }, [
      _("label", null, [
        _("span", Yg, ce(i.label), 1),
        _("div", {
          class: "control",
          onMouseover: a
        }, [
          _("input", {
            type: "text",
            value: t.value,
            style: J({ "background-color": t.value, color: n.value }),
            readonly: ""
          }, null, 12, Xg),
          _("div", Jg, [
            Ae(bt(qg), {
              pureColor: t.value,
              "onUpdate:pureColor": s[0] || (s[0] = (c) => t.value = c),
              pickerType: "chrome",
              "is-widget": "",
              "disable-history": ""
            }, null, 8, ["pureColor"])
          ])
        ], 32)
      ])
    ], 36));
  }
}), en = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, o] of t)
    r[n] = o;
  return r;
}, Qg = /* @__PURE__ */ en(Zg, [["__scopeId", "data-v-ae646d6e"]]), e0 = { class: "folder" }, t0 = {
  ref: "label",
  class: "group"
}, r0 = { class: "text--inner w-100" }, n0 = { class: "symbol" }, o0 = /* @__PURE__ */ U({
  __name: "DatFolder",
  props: /* @__PURE__ */ nt({
    label: { default: "" }
  }, {
    open: { type: Boolean, default: !0 },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(e) {
    const t = ot(e, "open"), r = () => {
      t.value = !t.value;
    };
    return (n, o) => (k(), P("li", e0, [
      _("div", t0, [
        _("div", {
          class: "text",
          onClick: r
        }, [
          _("div", r0, [
            _("span", n0, ce(t.value ? "▼" : "►"), 1),
            vi(" " + ce(n.label), 1)
          ])
        ]),
        Fe(_("ul", null, [
          zn(n.$slots, "default", {}, void 0, !0)
        ], 512), [
          [St, t.value]
        ])
      ], 512)
    ]));
  }
}), a0 = /* @__PURE__ */ en(o0, [["__scopeId", "data-v-bd32d018"]]), i0 = { class: "vue-dat-gui" }, s0 = { class: "group group--main" }, l0 = /* @__PURE__ */ U({
  __name: "DatGui",
  props: /* @__PURE__ */ nt({
    openText: { default: "Open Controls" },
    closeText: { default: "Close Controls" },
    closePosition: { default: "bottom" }
  }, {
    open: { type: Boolean, default: !0 },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(e) {
    const t = e, r = ot(e, "open"), n = W(
      () => r.value ? t.closeText : t.openText
    ), o = () => {
      r.value = r.value !== !0;
    };
    return (a, l) => (k(), P("div", i0, [
      _("div", s0, [
        a.closePosition === "top" ? (k(), P("div", {
          key: 0,
          class: "toggle-button",
          role: "button",
          tabindex: "0",
          onClick: o,
          onKeydown: Bo(o, ["space", "enter"])
        }, ce(n.value), 33)) : z("", !0),
        Fe(_("ul", null, [
          zn(a.$slots, "default")
        ], 512), [
          [St, r.value]
        ]),
        a.closePosition === "bottom" ? (k(), P("div", {
          key: 1,
          class: "toggle-button",
          role: "button",
          tabindex: "0",
          onClick: o,
          onKeydown: Bo(o, ["space", "enter"])
        }, ce(n.value), 33)) : z("", !0)
      ])
    ]));
  }
}), Vn = (e, t, r) => Math.min(Math.max(e, t), r), u0 = /* @__PURE__ */ U({
  __name: "NumberSlider",
  props: {
    value: {},
    min: {},
    max: {}
  },
  emits: ["updateState"],
  setup(e, { emit: t }) {
    const r = e, n = t, o = B(null), a = W(
      () => Vn((r.value - r.min) * 100 / (r.max - r.min), 0, 100)
    ), l = (u) => {
      if (o.value) {
        const f = o.value.getBoundingClientRect(), p = u - f.left, d = f.right - f.left, h = r.min + Vn(p / d, 0, 1) * (r.max - r.min);
        n("updateState", h);
      }
    }, i = (u) => {
      l(u.pageX);
    }, s = (u) => {
      l(u.pageX), window.removeEventListener("mousemove", i), window.removeEventListener("mouseup", s);
    }, c = (u) => {
      l(u.pageX), window.addEventListener("mousemove", i), window.addEventListener("mouseup", s);
    };
    return (u, f) => (k(), P("span", {
      ref_key: "slider",
      ref: o,
      class: "slider",
      style: J({ "background-size": `${a.value}% 100%` }),
      onMousedown: c
    }, null, 36));
  }
}), c0 = /* @__PURE__ */ en(u0, [["__scopeId", "data-v-af9bdb8d"]]), f0 = { class: "control-item number" }, d0 = { ref: "label" }, p0 = { class: "label-text" }, h0 = { class: "control" }, v0 = ["min", "max", "step", "value"], g0 = /* @__PURE__ */ U({
  __name: "DatNumber",
  props: /* @__PURE__ */ nt({
    label: { default: "" },
    showSlider: { type: Boolean, default: !0 },
    min: {},
    max: {},
    step: {}
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, r = ot(e, "modelValue");
    let n = typeof t.min == "number" ? t.min : Number.NEGATIVE_INFINITY, o = typeof t.max == "number" ? t.max : Number.POSITIVE_INFINITY;
    n > o && ([n, o] = [o, n]);
    const a = W(
      () => t.showSlider && Number.isFinite(n) && Number.isFinite(o)
    ), l = W(() => {
      if (t.step)
        return t.step;
      const c = o - n;
      return 10 ** Math.floor(Math.log(Math.abs(c)) / Math.LN10) / 10;
    }), i = (c) => {
      let u = Vn(c, n, o);
      l.value !== 0 && Number.isFinite(l.value) && (u = Math.round(u / l.value) * l.value), r.value = u;
    }, s = (c) => {
      i(Number(c.target.value));
    };
    return (c, u) => (k(), P("li", f0, [
      _("label", d0, [
        _("span", p0, ce(c.label), 1),
        _("div", h0, [
          Fe(Ae(c0, {
            min: bt(n),
            max: bt(o),
            value: r.value,
            onUpdateState: i
          }, null, 8, ["min", "max", "value"]), [
            [St, a.value]
          ]),
          _("input", {
            type: "number",
            ref: "input",
            class: "input",
            min: bt(n),
            max: bt(o),
            step: l.value,
            value: r.value,
            onInput: s
          }, null, 40, v0)
        ])
      ], 512)
    ]));
  }
}), y0 = /* @__PURE__ */ en(g0, [["__scopeId", "data-v-cc833ff8"]]), m0 = { class: "control-item select" }, b0 = { ref: "label" }, _0 = { class: "label-text" }, C0 = { class: "control" }, w0 = ["value"], S0 = /* @__PURE__ */ U({
  __name: "DatSelect",
  props: /* @__PURE__ */ nt({
    label: { default: "" },
    items: { default: () => [] }
  }, {
    modelValue: { type: String, default: "" },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, r = ot(e, "modelValue"), n = W(
      () => t.items.map(
        (o) => typeof o == "object" ? o : { name: (o || "").toString(), value: o }
      )
    );
    return (o, a) => (k(), P("li", m0, [
      _("label", b0, [
        _("span", _0, ce(o.label), 1),
        _("div", C0, [
          Fe(_("select", {
            "onUpdate:modelValue": a[0] || (a[0] = (l) => r.value = l),
            class: "w-100"
          }, [
            (k(!0), P(Ve, null, wt(n.value, (l) => (k(), P("option", {
              key: l.value,
              value: l.value
            }, ce(l.name), 9, w0))), 128))
          ], 512), [
            [Ws, r.value]
          ])
        ])
      ], 512)
    ]));
  }
}), x0 = { class: "control-item string" }, O0 = { ref: "label" }, A0 = { class: "label-text" }, k0 = { class: "control" }, $0 = /* @__PURE__ */ U({
  __name: "DatString",
  props: /* @__PURE__ */ nt({
    label: { default: "" }
  }, {
    modelValue: { type: String, default: "" },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = ot(e, "modelValue");
    return (r, n) => (k(), P("li", x0, [
      _("label", O0, [
        _("span", A0, ce(r.label), 1),
        _("div", k0, [
          Fe(_("input", {
            type: "text",
            "onUpdate:modelValue": n[0] || (n[0] = (o) => t.value = o)
          }, null, 512), [
            [Gs, t.value]
          ])
        ])
      ], 512)
    ]));
  }
}), fi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DatBoolean: Js,
  DatButton: Qs,
  DatColor: Qg,
  DatFolder: a0,
  DatGui: l0,
  DatNumber: y0,
  DatSelect: S0,
  DatString: $0
}, Symbol.toStringTag, { value: "Module" })), E0 = (e) => {
  for (const t in fi)
    e.component(t, fi[t]);
}, R0 = { install: E0 };
export {
  Js as DatBoolean,
  Qs as DatButton,
  Qg as DatColor,
  a0 as DatFolder,
  l0 as DatGui,
  y0 as DatNumber,
  S0 as DatSelect,
  $0 as DatString,
  R0 as default
};
