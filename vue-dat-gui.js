import { defineComponent as U, mergeModels as rt, useModel as nt, openBlock as k, createElementBlock as P, createElementVNode as _, toDisplayString as ce, onMounted as fi, nextTick as Fn, watch as Pe, getCurrentInstance as di, getCurrentScope as Hl, onScopeDispose as Ll, unref as mt, ref as B, readonly as Dl, shallowRef as Bl, reactive as Oe, computed as W, createVNode as Ae, inject as pi, provide as Nl, normalizeClass as ne, normalizeStyle as J, Fragment as Ve, renderList as Ct, createCommentVNode as z, resolveComponent as Y, createBlock as Q, withDirectives as wt, vShow as Or, createTextVNode as Vl, renderSlot as zn, withCtx as Ho, resolveDynamicComponent as Lo, mergeProps as Do, Teleport as Fl, pushScopeId as jt, popScopeId as It, vModelSelect as zl, vModelText as Wl } from "vue";
const Gl = { class: "control-item boolean" }, Ul = { ref: "label" }, Kl = { class: "label-text" }, ql = { class: "control" }, Yl = ["checked"], Xl = /* @__PURE__ */ U({
  __name: "DatBoolean",
  props: /* @__PURE__ */ rt({
    label: { default: "" }
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = nt(e, "modelValue"), r = () => {
      t.value = !t.value;
    };
    return (n, o) => (k(), P("li", Gl, [
      _("label", Ul, [
        _("span", Kl, ce(n.label), 1),
        _("div", ql, [
          _("input", {
            type: "checkbox",
            checked: t.value,
            onChange: r
          }, null, 40, Yl)
        ])
      ], 512)
    ]));
  }
}), Jl = { class: "control-item button" }, Zl = /* @__PURE__ */ U({
  __name: "DatButton",
  props: {
    label: { default: "" }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const r = t, n = (o) => r("click", o);
    return (o, a) => (k(), P("li", Jl, [
      _("label", {
        class: "w-100",
        ref: "label",
        onClick: n
      }, ce(o.label), 513)
    ]));
  }
});
function Ql(e) {
  return Hl() ? (Ll(e), !0) : !1;
}
function or(e) {
  return typeof e == "function" ? e() : mt(e);
}
const hi = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const es = Object.prototype.toString, ts = (e) => es.call(e) === "[object Object]", bt = () => {
}, rs = /* @__PURE__ */ ns();
function ns() {
  var e, t;
  return hi && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function vi(e, t) {
  function r(...n) {
    return new Promise((o, a) => {
      Promise.resolve(e(() => t.apply(this, n), { fn: t, thisArg: this, args: n })).then(o).catch(a);
    });
  }
  return r;
}
const gi = (e) => e();
function os(e, t = {}) {
  let r, n, o = bt;
  const a = (i) => {
    clearTimeout(i), o(), o = bt;
  };
  return (i) => {
    const l = or(e), c = or(t.maxWait);
    return r && a(r), l <= 0 || c !== void 0 && c <= 0 ? (n && (a(n), n = null), Promise.resolve(i())) : new Promise((u, f) => {
      o = t.rejectOnCancel ? f : u, c && !n && (n = setTimeout(() => {
        r && a(r), n = null, u(i());
      }, c)), r = setTimeout(() => {
        n && a(n), n = null, u(i());
      }, l);
    });
  };
}
function as(e = gi) {
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
  return { isActive: Dl(t), pause: r, resume: n, eventFilter: o };
}
function is(e) {
  return e || di();
}
function Je(e, t = 200, r = {}) {
  return vi(
    os(t, r),
    e
  );
}
function ls(e, t, r = {}) {
  const {
    eventFilter: n = gi,
    ...o
  } = r;
  return Pe(
    e,
    vi(
      n,
      t
    ),
    o
  );
}
function ss(e, t, r = {}) {
  const {
    eventFilter: n,
    ...o
  } = r, { eventFilter: a, pause: s, resume: i, isActive: l } = as(n);
  return { stop: ls(
    e,
    t,
    {
      ...o,
      eventFilter: a
    }
  ), pause: s, resume: i, isActive: l };
}
function ot(e, t = !0, r) {
  is() ? fi(e, r) : t ? e() : Fn(e);
}
function ae(e, t, r) {
  return Pe(
    e,
    (n, o, a) => {
      n && t(n, o, a);
    },
    r
  );
}
function qt(e) {
  var t;
  const r = or(e);
  return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
const ar = hi ? window : void 0;
function Jt(...e) {
  let t, r, n, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([r, n, o] = e, t = ar) : [t, r, n, o] = e, !t)
    return bt;
  Array.isArray(r) || (r = [r]), Array.isArray(n) || (n = [n]);
  const a = [], s = () => {
    a.forEach((u) => u()), a.length = 0;
  }, i = (u, f, p, d) => (u.addEventListener(f, p, d), () => u.removeEventListener(f, p, d)), l = Pe(
    () => [qt(t), or(o)],
    ([u, f]) => {
      if (s(), !u)
        return;
      const p = ts(f) ? { ...f } : f;
      a.push(
        ...r.flatMap((d) => n.map((h) => i(u, d, h, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    l(), s();
  };
  return Ql(c), c;
}
let Bo = !1;
function us(e, t, r = {}) {
  const { window: n = ar, ignore: o = [], capture: a = !0, detectIframe: s = !1 } = r;
  if (!n)
    return bt;
  rs && !Bo && (Bo = !0, Array.from(n.document.body.children).forEach((p) => p.addEventListener("click", bt)), n.document.documentElement.addEventListener("click", bt));
  let i = !0;
  const l = (p) => o.some((d) => {
    if (typeof d == "string")
      return Array.from(n.document.querySelectorAll(d)).some((h) => h === p.target || p.composedPath().includes(h));
    {
      const h = qt(d);
      return h && (p.target === h || p.composedPath().includes(h));
    }
  }), u = [
    Jt(n, "click", (p) => {
      const d = qt(e);
      if (!(!d || d === p.target || p.composedPath().includes(d))) {
        if (p.detail === 0 && (i = !l(p)), !i) {
          i = !0;
          return;
        }
        t(p);
      }
    }, { passive: !0, capture: a }),
    Jt(n, "pointerdown", (p) => {
      const d = qt(e);
      i = !l(p) && !!(d && !p.composedPath().includes(d));
    }, { passive: !0 }),
    s && Jt(n, "blur", (p) => {
      setTimeout(() => {
        var d;
        const h = qt(e);
        ((d = n.document.activeElement) == null ? void 0 : d.tagName) === "IFRAME" && !(h != null && h.contains(n.document.activeElement)) && t(p);
      }, 0);
    })
  ].filter(Boolean);
  return () => u.forEach((p) => p());
}
const yr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, mr = "__vueuse_ssr_handlers__", cs = /* @__PURE__ */ fs();
function fs() {
  return mr in yr || (yr[mr] = yr[mr] || {}), yr[mr];
}
function ds(e, t) {
  return cs[e] || t;
}
function ps(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const hs = {
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
}, No = "vueuse-storage";
function vs(e, t, r, n = {}) {
  var o;
  const {
    flush: a = "pre",
    deep: s = !0,
    listenToStorageChanges: i = !0,
    writeDefaults: l = !0,
    mergeDefaults: c = !1,
    shallow: u,
    window: f = ar,
    eventFilter: p,
    onError: d = (m) => {
      console.error(m);
    },
    initOnMounted: h
  } = n, g = (u ? Bl : B)(typeof t == "function" ? t() : t);
  if (!r)
    try {
      r = ds("getDefaultStorage", () => {
        var m;
        return (m = ar) == null ? void 0 : m.localStorage;
      })();
    } catch (m) {
      d(m);
    }
  if (!r)
    return g;
  const v = or(t), y = ps(v), C = (o = n.serializer) != null ? o : hs[y], { pause: x, resume: S } = ss(
    g,
    () => T(g.value),
    { flush: a, deep: s, eventFilter: p }
  );
  return f && i && ot(() => {
    Jt(f, "storage", L), Jt(f, No, R), h && L();
  }), h || L(), g;
  function T(m) {
    try {
      if (m == null)
        r.removeItem(e);
      else {
        const O = C.write(m), b = r.getItem(e);
        b !== O && (r.setItem(e, O), f && f.dispatchEvent(new CustomEvent(No, {
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
      return l && v != null && r.setItem(e, C.write(v)), v;
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
  const { window: n = ar } = r;
  return vs(e, t, n == null ? void 0 : n.localStorage, r);
}
function Ar(e) {
  "@babel/helpers - typeof";
  return Ar = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ar(e);
}
var gs = /^\s+/, ys = /\s+$/;
function w(e, t) {
  if (e = e || "", t = t || {}, e instanceof w)
    return e;
  if (!(this instanceof w))
    return new w(e, t);
  var r = ms(e);
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
    var t = this.toRgb(), r, n, o, a, s, i;
    return r = t.r / 255, n = t.g / 255, o = t.b / 255, r <= 0.03928 ? a = r / 12.92 : a = Math.pow((r + 0.055) / 1.055, 2.4), n <= 0.03928 ? s = n / 12.92 : s = Math.pow((n + 0.055) / 1.055, 2.4), o <= 0.03928 ? i = o / 12.92 : i = Math.pow((o + 0.055) / 1.055, 2.4), 0.2126 * a + 0.7152 * s + 0.0722 * i;
  },
  setAlpha: function(t) {
    return this._a = yi(t), this._roundA = Math.round(100 * this._a) / 100, this;
  },
  toHsv: function() {
    var t = Fo(this._r, this._g, this._b);
    return {
      h: t.h * 360,
      s: t.s,
      v: t.v,
      a: this._a
    };
  },
  toHsvString: function() {
    var t = Fo(this._r, this._g, this._b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.v * 100);
    return this._a == 1 ? "hsv(" + r + ", " + n + "%, " + o + "%)" : "hsva(" + r + ", " + n + "%, " + o + "%, " + this._roundA + ")";
  },
  toHsl: function() {
    var t = Vo(this._r, this._g, this._b);
    return {
      h: t.h * 360,
      s: t.s,
      l: t.l,
      a: this._a
    };
  },
  toHslString: function() {
    var t = Vo(this._r, this._g, this._b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.l * 100);
    return this._a == 1 ? "hsl(" + r + ", " + n + "%, " + o + "%)" : "hsla(" + r + ", " + n + "%, " + o + "%, " + this._roundA + ")";
  },
  toHex: function(t) {
    return zo(this._r, this._g, this._b, t);
  },
  toHexString: function(t) {
    return "#" + this.toHex(t);
  },
  toHex8: function(t) {
    return ws(this._r, this._g, this._b, this._a, t);
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
    return this._a === 0 ? "transparent" : this._a < 1 ? !1 : js[zo(this._r, this._g, this._b, !0)] || !1;
  },
  toFilter: function(t) {
    var r = "#" + Wo(this._r, this._g, this._b, this._a), n = r, o = this._gradientType ? "GradientType = 1, " : "";
    if (t) {
      var a = w(t);
      n = "#" + Wo(a._r, a._g, a._b, a._a);
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
    return this._applyModification(As, arguments);
  },
  brighten: function() {
    return this._applyModification(ks, arguments);
  },
  darken: function() {
    return this._applyModification($s, arguments);
  },
  desaturate: function() {
    return this._applyModification(Ss, arguments);
  },
  saturate: function() {
    return this._applyModification(xs, arguments);
  },
  greyscale: function() {
    return this._applyModification(Os, arguments);
  },
  spin: function() {
    return this._applyModification(Es, arguments);
  },
  _applyCombination: function(t, r) {
    return t.apply(null, [this].concat([].slice.call(r)));
  },
  analogous: function() {
    return this._applyCombination(Rs, arguments);
  },
  complement: function() {
    return this._applyCombination(Ts, arguments);
  },
  monochromatic: function() {
    return this._applyCombination(Ps, arguments);
  },
  splitcomplement: function() {
    return this._applyCombination(Ms, arguments);
  },
  // Disabled until https://github.com/bgrins/TinyColor/issues/254
  // polyad: function (number) {
  //   return this._applyCombination(polyad, [number]);
  // },
  triad: function() {
    return this._applyCombination(Go, [3]);
  },
  tetrad: function() {
    return this._applyCombination(Go, [4]);
  }
};
w.fromRatio = function(e, t) {
  if (Ar(e) == "object") {
    var r = {};
    for (var n in e)
      e.hasOwnProperty(n) && (n === "a" ? r[n] = e[n] : r[n] = Yt(e[n]));
    e = r;
  }
  return w(e, t);
};
function ms(e) {
  var t = {
    r: 0,
    g: 0,
    b: 0
  }, r = 1, n = null, o = null, a = null, s = !1, i = !1;
  return typeof e == "string" && (e = Ds(e)), Ar(e) == "object" && (Te(e.r) && Te(e.g) && Te(e.b) ? (t = bs(e.r, e.g, e.b), s = !0, i = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Te(e.h) && Te(e.s) && Te(e.v) ? (n = Yt(e.s), o = Yt(e.v), t = Cs(e.h, n, o), s = !0, i = "hsv") : Te(e.h) && Te(e.s) && Te(e.l) && (n = Yt(e.s), a = Yt(e.l), t = _s(e.h, n, a), s = !0, i = "hsl"), e.hasOwnProperty("a") && (r = e.a)), r = yi(r), {
    ok: s,
    format: e.format || i,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
function bs(e, t, r) {
  return {
    r: F(e, 255) * 255,
    g: F(t, 255) * 255,
    b: F(r, 255) * 255
  };
}
function Vo(e, t, r) {
  e = F(e, 255), t = F(t, 255), r = F(r, 255);
  var n = Math.max(e, t, r), o = Math.min(e, t, r), a, s, i = (n + o) / 2;
  if (n == o)
    a = s = 0;
  else {
    var l = n - o;
    switch (s = i > 0.5 ? l / (2 - n - o) : l / (n + o), n) {
      case e:
        a = (t - r) / l + (t < r ? 6 : 0);
        break;
      case t:
        a = (r - e) / l + 2;
        break;
      case r:
        a = (e - t) / l + 4;
        break;
    }
    a /= 6;
  }
  return {
    h: a,
    s,
    l: i
  };
}
function _s(e, t, r) {
  var n, o, a;
  e = F(e, 360), t = F(t, 100), r = F(r, 100);
  function s(c, u, f) {
    return f < 0 && (f += 1), f > 1 && (f -= 1), f < 1 / 6 ? c + (u - c) * 6 * f : f < 1 / 2 ? u : f < 2 / 3 ? c + (u - c) * (2 / 3 - f) * 6 : c;
  }
  if (t === 0)
    n = o = a = r;
  else {
    var i = r < 0.5 ? r * (1 + t) : r + t - r * t, l = 2 * r - i;
    n = s(l, i, e + 1 / 3), o = s(l, i, e), a = s(l, i, e - 1 / 3);
  }
  return {
    r: n * 255,
    g: o * 255,
    b: a * 255
  };
}
function Fo(e, t, r) {
  e = F(e, 255), t = F(t, 255), r = F(r, 255);
  var n = Math.max(e, t, r), o = Math.min(e, t, r), a, s, i = n, l = n - o;
  if (s = n === 0 ? 0 : l / n, n == o)
    a = 0;
  else {
    switch (n) {
      case e:
        a = (t - r) / l + (t < r ? 6 : 0);
        break;
      case t:
        a = (r - e) / l + 2;
        break;
      case r:
        a = (e - t) / l + 4;
        break;
    }
    a /= 6;
  }
  return {
    h: a,
    s,
    v: i
  };
}
function Cs(e, t, r) {
  e = F(e, 360) * 6, t = F(t, 100), r = F(r, 100);
  var n = Math.floor(e), o = e - n, a = r * (1 - t), s = r * (1 - o * t), i = r * (1 - (1 - o) * t), l = n % 6, c = [r, s, a, a, i, r][l], u = [i, r, r, s, a, a][l], f = [a, a, i, r, r, s][l];
  return {
    r: c * 255,
    g: u * 255,
    b: f * 255
  };
}
function zo(e, t, r, n) {
  var o = [xe(Math.round(e).toString(16)), xe(Math.round(t).toString(16)), xe(Math.round(r).toString(16))];
  return n && o[0].charAt(0) == o[0].charAt(1) && o[1].charAt(0) == o[1].charAt(1) && o[2].charAt(0) == o[2].charAt(1) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function ws(e, t, r, n, o) {
  var a = [xe(Math.round(e).toString(16)), xe(Math.round(t).toString(16)), xe(Math.round(r).toString(16)), xe(mi(n))];
  return o && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) && a[3].charAt(0) == a[3].charAt(1) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function Wo(e, t, r, n) {
  var o = [xe(mi(n)), xe(Math.round(e).toString(16)), xe(Math.round(t).toString(16)), xe(Math.round(r).toString(16))];
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
function Ss(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = w(e).toHsl();
  return r.s -= t / 100, r.s = Vr(r.s), w(r);
}
function xs(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = w(e).toHsl();
  return r.s += t / 100, r.s = Vr(r.s), w(r);
}
function Os(e) {
  return w(e).desaturate(100);
}
function As(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = w(e).toHsl();
  return r.l += t / 100, r.l = Vr(r.l), w(r);
}
function ks(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = w(e).toRgb();
  return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), w(r);
}
function $s(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = w(e).toHsl();
  return r.l -= t / 100, r.l = Vr(r.l), w(r);
}
function Es(e, t) {
  var r = w(e).toHsl(), n = (r.h + t) % 360;
  return r.h = n < 0 ? 360 + n : n, w(r);
}
function Ts(e) {
  var t = w(e).toHsl();
  return t.h = (t.h + 180) % 360, w(t);
}
function Go(e, t) {
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
function Ms(e) {
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
function Rs(e, t, r) {
  t = t || 6, r = r || 30;
  var n = w(e).toHsl(), o = 360 / r, a = [w(e)];
  for (n.h = (n.h - (o * t >> 1) + 720) % 360; --t; )
    n.h = (n.h + o) % 360, a.push(w(n));
  return a;
}
function Ps(e, t) {
  t = t || 6;
  for (var r = w(e).toHsv(), n = r.h, o = r.s, a = r.v, s = [], i = 1 / t; t--; )
    s.push(w({
      h: n,
      s: o,
      v: a
    })), a = (a + i) % 1;
  return s;
}
w.mix = function(e, t, r) {
  r = r === 0 ? 0 : r || 50;
  var n = w(e).toRgb(), o = w(t).toRgb(), a = r / 100, s = {
    r: (o.r - n.r) * a + n.r,
    g: (o.g - n.g) * a + n.g,
    b: (o.b - n.b) * a + n.b,
    a: (o.a - n.a) * a + n.a
  };
  return w(s);
};
w.readability = function(e, t) {
  var r = w(e), n = w(t);
  return (Math.max(r.getLuminance(), n.getLuminance()) + 0.05) / (Math.min(r.getLuminance(), n.getLuminance()) + 0.05);
};
w.isReadable = function(e, t, r) {
  var n = w.readability(e, t), o, a;
  switch (a = !1, o = Bs(r), o.level + o.size) {
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
  var n = null, o = 0, a, s, i, l;
  r = r || {}, s = r.includeFallbackColors, i = r.level, l = r.size;
  for (var c = 0; c < t.length; c++)
    a = w.readability(e, t[c]), a > o && (o = a, n = w(t[c]));
  return w.isReadable(e, n, {
    level: i,
    size: l
  }) || !s ? n : (r.includeFallbackColors = !1, w.mostReadable(e, ["#fff", "#000"], r));
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
}, js = w.hexNames = Is(An);
function Is(e) {
  var t = {};
  for (var r in e)
    e.hasOwnProperty(r) && (t[e[r]] = r);
  return t;
}
function yi(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function F(e, t) {
  Hs(e) && (e = "100%");
  var r = Ls(e);
  return e = Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(e * t, 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : e % t / parseFloat(t);
}
function Vr(e) {
  return Math.min(1, Math.max(0, e));
}
function pe(e) {
  return parseInt(e, 16);
}
function Hs(e) {
  return typeof e == "string" && e.indexOf(".") != -1 && parseFloat(e) === 1;
}
function Ls(e) {
  return typeof e == "string" && e.indexOf("%") != -1;
}
function xe(e) {
  return e.length == 1 ? "0" + e : "" + e;
}
function Yt(e) {
  return e <= 1 && (e = e * 100 + "%"), e;
}
function mi(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Uo(e) {
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
function Ds(e) {
  e = e.replace(gs, "").replace(ys, "").toLowerCase();
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
    a: Uo(r[4]),
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
    a: Uo(r[4] + "" + r[4]),
    format: t ? "name" : "hex8"
  } : (r = Se.hex3.exec(e)) ? {
    r: pe(r[1] + "" + r[1]),
    g: pe(r[2] + "" + r[2]),
    b: pe(r[3] + "" + r[3]),
    format: t ? "name" : "hex"
  } : !1;
}
function Bs(e) {
  var t, r;
  return e = e || {
    level: "AA",
    size: "small"
  }, t = (e.level || "AA").toUpperCase(), r = (e.size || "small").toLowerCase(), t !== "AA" && t !== "AAA" && (t = "AA"), r !== "small" && r !== "large" && (r = "small"), {
    level: t,
    size: r
  };
}
var at = at || {};
at.stringify = /* @__PURE__ */ function() {
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
var at = at || {};
at.parse = /* @__PURE__ */ function() {
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
    return s(
      "linear-gradient",
      e.linearGradient,
      l
    ) || s(
      "repeating-linear-gradient",
      e.repeatingLinearGradient,
      l
    ) || s(
      "radial-gradient",
      e.radialGradient,
      f
    ) || s(
      "repeating-radial-gradient",
      e.repeatingRadialGradient,
      f
    );
  }
  function s(A, H, D) {
    return i(H, function(se) {
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
      var se = H(D);
      return Z(e.endCall) || r("Missing )"), se;
    }
  }
  function l() {
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
        var se = y();
        se && (A = {
          type: "default-radial",
          at: se
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
    var se = Z(H);
    if (se)
      return {
        type: A,
        value: se[D]
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
var Ns = at.parse, Vs = at.stringify, fe = "top", _e = "bottom", Ce = "right", de = "left", Gn = "auto", cr = [fe, _e, Ce, de], St = "start", ir = "end", Fs = "clippingParents", bi = "viewport", zt = "popper", zs = "reference", Ko = /* @__PURE__ */ cr.reduce(function(e, t) {
  return e.concat([t + "-" + St, t + "-" + ir]);
}, []), _i = /* @__PURE__ */ [].concat(cr, [Gn]).reduce(function(e, t) {
  return e.concat([t, t + "-" + St, t + "-" + ir]);
}, []), Ws = "beforeRead", Gs = "read", Us = "afterRead", Ks = "beforeMain", qs = "main", Ys = "afterMain", Xs = "beforeWrite", Js = "write", Zs = "afterWrite", Qs = [Ws, Gs, Us, Ks, qs, Ys, Xs, Js, Zs];
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
function Ze(e) {
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
function eu(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, a = t.elements[r];
    !me(a) || !Ee(a) || (Object.assign(a.style, n), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function tu(e) {
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
      var o = t.elements[n], a = t.attributes[n] || {}, s = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), i = s.reduce(function(l, c) {
        return l[c] = "", l;
      }, {});
      !me(o) || !Ee(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const ru = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: eu,
  effect: tu,
  requires: ["computeStyles"]
};
function ke(e) {
  return e.split("-")[0];
}
var Xe = Math.max, kr = Math.min, xt = Math.round;
function kn() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Ci() {
  return !/^((?!chrome|android).)*safari/i.test(kn());
}
function Ot(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, a = 1;
  t && me(e) && (o = e.offsetWidth > 0 && xt(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && xt(n.height) / e.offsetHeight || 1);
  var s = Ze(e) ? ve(e) : window, i = s.visualViewport, l = !Ci() && r, c = (n.left + (l && i ? i.offsetLeft : 0)) / o, u = (n.top + (l && i ? i.offsetTop : 0)) / a, f = n.width / o, p = n.height / a;
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
  var t = Ot(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function wi(e, t) {
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
function nu(e) {
  return ["table", "td", "th"].indexOf(Ee(e)) >= 0;
}
function Ge(e) {
  return ((Ze(e) ? e.ownerDocument : (
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
    Ge(e)
  );
}
function qo(e) {
  return !me(e) || // https://github.com/popperjs/popper-core/issues/837
  je(e).position === "fixed" ? null : e.offsetParent;
}
function ou(e) {
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
function fr(e) {
  for (var t = ve(e), r = qo(e); r && nu(r) && je(r).position === "static"; )
    r = qo(r);
  return r && (Ee(r) === "html" || Ee(r) === "body" && je(r).position === "static") ? t : r || ou(e) || t;
}
function qn(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Zt(e, t, r) {
  return Xe(e, kr(t, r));
}
function au(e, t, r) {
  var n = Zt(e, t, r);
  return n > r ? r : n;
}
function Si() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function xi(e) {
  return Object.assign({}, Si(), e);
}
function Oi(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var iu = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, xi(typeof t != "number" ? t : Oi(t, cr));
};
function lu(e) {
  var t, r = e.state, n = e.name, o = e.options, a = r.elements.arrow, s = r.modifiersData.popperOffsets, i = ke(r.placement), l = qn(i), c = [de, Ce].indexOf(i) >= 0, u = c ? "height" : "width";
  if (!(!a || !s)) {
    var f = iu(o.padding, r), p = Kn(a), d = l === "y" ? fe : de, h = l === "y" ? _e : Ce, g = r.rects.reference[u] + r.rects.reference[l] - s[l] - r.rects.popper[u], v = s[l] - r.rects.reference[l], y = fr(a), C = y ? l === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, x = g / 2 - v / 2, S = f[d], T = C - p[u] - f[h], $ = C / 2 - p[u] / 2 + x, R = Zt(S, $, T), L = l;
    r.modifiersData[n] = (t = {}, t[L] = R, t.centerOffset = R - $, t);
  }
}
function su(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || wi(t.elements.popper, o) && (t.elements.arrow = o));
}
const uu = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: lu,
  effect: su,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function At(e) {
  return e.split("-")[1];
}
var cu = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function fu(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: xt(r * o) / o || 0,
    y: xt(n * o) / o || 0
  };
}
function Yo(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, f = e.isFixed, p = s.x, d = p === void 0 ? 0 : p, h = s.y, g = h === void 0 ? 0 : h, v = typeof u == "function" ? u({
    x: d,
    y: g
  }) : {
    x: d,
    y: g
  };
  d = v.x, g = v.y;
  var y = s.hasOwnProperty("x"), C = s.hasOwnProperty("y"), x = de, S = fe, T = window;
  if (c) {
    var $ = fr(r), R = "clientHeight", L = "clientWidth";
    if ($ === ve(r) && ($ = Ge(r), je($).position !== "static" && i === "absolute" && (R = "scrollHeight", L = "scrollWidth")), $ = $, o === fe || (o === de || o === Ce) && a === ir) {
      S = _e;
      var m = f && $ === T && T.visualViewport ? T.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        $[R]
      );
      g -= m - n.height, g *= l ? 1 : -1;
    }
    if (o === de || (o === fe || o === _e) && a === ir) {
      x = Ce;
      var O = f && $ === T && T.visualViewport ? T.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        $[L]
      );
      d -= O - n.width, d *= l ? 1 : -1;
    }
  }
  var b = Object.assign({
    position: i
  }, c && cu), j = u === !0 ? fu({
    x: d,
    y: g
  }, ve(r)) : {
    x: d,
    y: g
  };
  if (d = j.x, g = j.y, l) {
    var E;
    return Object.assign({}, b, (E = {}, E[S] = C ? "0" : "", E[x] = y ? "0" : "", E.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + g + "px)" : "translate3d(" + d + "px, " + g + "px, 0)", E));
  }
  return Object.assign({}, b, (t = {}, t[S] = C ? g + "px" : "", t[x] = y ? d + "px" : "", t.transform = "", t));
}
function du(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, a = r.adaptive, s = a === void 0 ? !0 : a, i = r.roundOffsets, l = i === void 0 ? !0 : i, c = {
    placement: ke(t.placement),
    variation: At(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Yo(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Yo(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const pu = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: du,
  data: {}
};
var br = {
  passive: !0
};
function hu(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, a = o === void 0 ? !0 : o, s = n.resize, i = s === void 0 ? !0 : s, l = ve(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && c.forEach(function(u) {
    u.addEventListener("scroll", r.update, br);
  }), i && l.addEventListener("resize", r.update, br), function() {
    a && c.forEach(function(u) {
      u.removeEventListener("scroll", r.update, br);
    }), i && l.removeEventListener("resize", r.update, br);
  };
}
const vu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: hu,
  data: {}
};
var gu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Sr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return gu[t];
  });
}
var yu = {
  start: "end",
  end: "start"
};
function Xo(e) {
  return e.replace(/start|end/g, function(t) {
    return yu[t];
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
  return Ot(Ge(e)).left + Yn(e).scrollLeft;
}
function mu(e, t) {
  var r = ve(e), n = Ge(e), o = r.visualViewport, a = n.clientWidth, s = n.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    var c = Ci();
    (c || !c && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i + Xn(e),
    y: l
  };
}
function bu(e) {
  var t, r = Ge(e), n = Yn(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = Xe(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Xe(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -n.scrollLeft + Xn(e), l = -n.scrollTop;
  return je(o || r).direction === "rtl" && (i += Xe(r.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: s,
    x: i,
    y: l
  };
}
function Jn(e) {
  var t = je(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function Ai(e) {
  return ["html", "body", "#document"].indexOf(Ee(e)) >= 0 ? e.ownerDocument.body : me(e) && Jn(e) ? e : Ai(Fr(e));
}
function Qt(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Ai(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = ve(n), s = o ? [a].concat(a.visualViewport || [], Jn(n) ? n : []) : n, i = t.concat(s);
  return o ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(Qt(Fr(s)))
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
function _u(e, t) {
  var r = Ot(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Jo(e, t, r) {
  return t === bi ? $n(mu(e, r)) : Ze(t) ? _u(t, r) : $n(bu(Ge(e)));
}
function Cu(e) {
  var t = Qt(Fr(e)), r = ["absolute", "fixed"].indexOf(je(e).position) >= 0, n = r && me(e) ? fr(e) : e;
  return Ze(n) ? t.filter(function(o) {
    return Ze(o) && wi(o, n) && Ee(o) !== "body";
  }) : [];
}
function wu(e, t, r, n) {
  var o = t === "clippingParents" ? Cu(e) : [].concat(t), a = [].concat(o, [r]), s = a[0], i = a.reduce(function(l, c) {
    var u = Jo(e, c, n);
    return l.top = Xe(u.top, l.top), l.right = kr(u.right, l.right), l.bottom = kr(u.bottom, l.bottom), l.left = Xe(u.left, l.left), l;
  }, Jo(e, s, n));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function ki(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? ke(n) : null, a = n ? At(n) : null, s = t.x + t.width / 2 - r.width / 2, i = t.y + t.height / 2 - r.height / 2, l;
  switch (o) {
    case fe:
      l = {
        x: s,
        y: t.y - r.height
      };
      break;
    case _e:
      l = {
        x: s,
        y: t.y + t.height
      };
      break;
    case Ce:
      l = {
        x: t.x + t.width,
        y: i
      };
      break;
    case de:
      l = {
        x: t.x - r.width,
        y: i
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var c = o ? qn(o) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (a) {
      case St:
        l[c] = l[c] - (t[u] / 2 - r[u] / 2);
        break;
      case ir:
        l[c] = l[c] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return l;
}
function lr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, a = r.strategy, s = a === void 0 ? e.strategy : a, i = r.boundary, l = i === void 0 ? Fs : i, c = r.rootBoundary, u = c === void 0 ? bi : c, f = r.elementContext, p = f === void 0 ? zt : f, d = r.altBoundary, h = d === void 0 ? !1 : d, g = r.padding, v = g === void 0 ? 0 : g, y = xi(typeof v != "number" ? v : Oi(v, cr)), C = p === zt ? zs : zt, x = e.rects.popper, S = e.elements[h ? C : p], T = wu(Ze(S) ? S : S.contextElement || Ge(e.elements.popper), l, u, s), $ = Ot(e.elements.reference), R = ki({
    reference: $,
    element: x,
    strategy: "absolute",
    placement: o
  }), L = $n(Object.assign({}, x, R)), m = p === zt ? L : $, O = {
    top: T.top - m.top + y.top,
    bottom: m.bottom - T.bottom + y.bottom,
    left: T.left - m.left + y.left,
    right: m.right - T.right + y.right
  }, b = e.modifiersData.offset;
  if (p === zt && b) {
    var j = b[o];
    Object.keys(O).forEach(function(E) {
      var I = [Ce, _e].indexOf(E) >= 0 ? 1 : -1, Z = [fe, _e].indexOf(E) >= 0 ? "y" : "x";
      O[E] += j[Z] * I;
    });
  }
  return O;
}
function Su(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, a = r.rootBoundary, s = r.padding, i = r.flipVariations, l = r.allowedAutoPlacements, c = l === void 0 ? _i : l, u = At(n), f = u ? i ? Ko : Ko.filter(function(h) {
    return At(h) === u;
  }) : cr, p = f.filter(function(h) {
    return c.indexOf(h) >= 0;
  });
  p.length === 0 && (p = f);
  var d = p.reduce(function(h, g) {
    return h[g] = lr(e, {
      placement: g,
      boundary: o,
      rootBoundary: a,
      padding: s
    })[ke(g)], h;
  }, {});
  return Object.keys(d).sort(function(h, g) {
    return d[h] - d[g];
  });
}
function xu(e) {
  if (ke(e) === Gn)
    return [];
  var t = Sr(e);
  return [Xo(e), t, Xo(t)];
}
function Ou(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, a = o === void 0 ? !0 : o, s = r.altAxis, i = s === void 0 ? !0 : s, l = r.fallbackPlacements, c = r.padding, u = r.boundary, f = r.rootBoundary, p = r.altBoundary, d = r.flipVariations, h = d === void 0 ? !0 : d, g = r.allowedAutoPlacements, v = t.options.placement, y = ke(v), C = y === v, x = l || (C || !h ? [Sr(v)] : xu(v)), S = [v].concat(x).reduce(function(ft, Be) {
      return ft.concat(ke(Be) === Gn ? Su(t, {
        placement: Be,
        boundary: u,
        rootBoundary: f,
        padding: c,
        flipVariations: h,
        allowedAutoPlacements: g
      }) : Be);
    }, []), T = t.rects.reference, $ = t.rects.popper, R = /* @__PURE__ */ new Map(), L = !0, m = S[0], O = 0; O < S.length; O++) {
      var b = S[O], j = ke(b), E = At(b) === St, I = [fe, _e].indexOf(j) >= 0, Z = I ? "width" : "height", te = lr(t, {
        placement: b,
        boundary: u,
        rootBoundary: f,
        altBoundary: p,
        padding: c
      }), A = I ? E ? Ce : de : E ? _e : fe;
      T[Z] > $[Z] && (A = Sr(A));
      var H = Sr(A), D = [];
      if (a && D.push(te[j] <= 0), i && D.push(te[A] <= 0, te[H] <= 0), D.every(function(ft) {
        return ft;
      })) {
        m = b, L = !1;
        break;
      }
      R.set(b, D);
    }
    if (L)
      for (var se = h ? 3 : 1, De = function(Be) {
        var Ft = S.find(function(vr) {
          var Ke = R.get(vr);
          if (Ke)
            return Ke.slice(0, Be).every(function(tn) {
              return tn;
            });
        });
        if (Ft)
          return m = Ft, "break";
      }, Ue = se; Ue > 0; Ue--) {
        var ct = De(Ue);
        if (ct === "break")
          break;
      }
    t.placement !== m && (t.modifiersData[n]._skip = !0, t.placement = m, t.reset = !0);
  }
}
const Au = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Ou,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Zo(e, t, r) {
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
function Qo(e) {
  return [fe, Ce, _e, de].some(function(t) {
    return e[t] >= 0;
  });
}
function ku(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = lr(t, {
    elementContext: "reference"
  }), i = lr(t, {
    altBoundary: !0
  }), l = Zo(s, n), c = Zo(i, o, a), u = Qo(l), f = Qo(c);
  t.modifiersData[r] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: f
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": f
  });
}
const $u = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: ku
};
function Eu(e, t, r) {
  var n = ke(e), o = [de, fe].indexOf(n) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [de, Ce].indexOf(n) >= 0 ? {
    x: i,
    y: s
  } : {
    x: s,
    y: i
  };
}
function Tu(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, a = o === void 0 ? [0, 0] : o, s = _i.reduce(function(u, f) {
    return u[f] = Eu(f, t.rects, a), u;
  }, {}), i = s[t.placement], l = i.x, c = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = s;
}
const Mu = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Tu
};
function Ru(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = ki({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Pu = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Ru,
  data: {}
};
function ju(e) {
  return e === "x" ? "y" : "x";
}
function Iu(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, a = o === void 0 ? !0 : o, s = r.altAxis, i = s === void 0 ? !1 : s, l = r.boundary, c = r.rootBoundary, u = r.altBoundary, f = r.padding, p = r.tether, d = p === void 0 ? !0 : p, h = r.tetherOffset, g = h === void 0 ? 0 : h, v = lr(t, {
    boundary: l,
    rootBoundary: c,
    padding: f,
    altBoundary: u
  }), y = ke(t.placement), C = At(t.placement), x = !C, S = qn(y), T = ju(S), $ = t.modifiersData.popperOffsets, R = t.rects.reference, L = t.rects.popper, m = typeof g == "function" ? g(Object.assign({}, t.rects, {
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
      var E, I = S === "y" ? fe : de, Z = S === "y" ? _e : Ce, te = S === "y" ? "height" : "width", A = $[S], H = A + v[I], D = A - v[Z], se = d ? -L[te] / 2 : 0, De = C === St ? R[te] : L[te], Ue = C === St ? -L[te] : -R[te], ct = t.elements.arrow, ft = d && ct ? Kn(ct) : {
        width: 0,
        height: 0
      }, Be = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Si(), Ft = Be[I], vr = Be[Z], Ke = Zt(0, R[te], ft[te]), tn = x ? R[te] / 2 - se - Ke - Ft - O.mainAxis : De - Ke - Ft - O.mainAxis, Tl = x ? -R[te] / 2 + se + Ke + vr + O.mainAxis : Ue + Ke + vr + O.mainAxis, rn = t.elements.arrow && fr(t.elements.arrow), Ml = rn ? S === "y" ? rn.clientTop || 0 : rn.clientLeft || 0 : 0, ko = (E = b == null ? void 0 : b[S]) != null ? E : 0, Rl = A + tn - ko - Ml, Pl = A + Tl - ko, $o = Zt(d ? kr(H, Rl) : H, A, d ? Xe(D, Pl) : D);
      $[S] = $o, j[S] = $o - A;
    }
    if (i) {
      var Eo, jl = S === "x" ? fe : de, Il = S === "x" ? _e : Ce, qe = $[T], gr = T === "y" ? "height" : "width", To = qe + v[jl], Mo = qe - v[Il], nn = [fe, de].indexOf(y) !== -1, Ro = (Eo = b == null ? void 0 : b[T]) != null ? Eo : 0, Po = nn ? To : qe - R[gr] - L[gr] - Ro + O.altAxis, jo = nn ? qe + R[gr] + L[gr] - Ro - O.altAxis : Mo, Io = d && nn ? au(Po, qe, jo) : Zt(d ? Po : To, qe, d ? jo : Mo);
      $[T] = Io, j[T] = Io - qe;
    }
    t.modifiersData[n] = j;
  }
}
const Hu = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Iu,
  requiresIfExists: ["offset"]
};
function Lu(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Du(e) {
  return e === ve(e) || !me(e) ? Yn(e) : Lu(e);
}
function Bu(e) {
  var t = e.getBoundingClientRect(), r = xt(t.width) / e.offsetWidth || 1, n = xt(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Nu(e, t, r) {
  r === void 0 && (r = !1);
  var n = me(t), o = me(t) && Bu(t), a = Ge(t), s = Ot(e, o, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((Ee(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Jn(a)) && (i = Du(t)), me(t) ? (l = Ot(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Xn(a))), {
    x: s.left + i.scrollLeft - l.x,
    y: s.top + i.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function Vu(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function o(a) {
    r.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(i) {
      if (!r.has(i)) {
        var l = t.get(i);
        l && o(l);
      }
    }), n.push(a);
  }
  return e.forEach(function(a) {
    r.has(a.name) || o(a);
  }), n;
}
function Fu(e) {
  var t = Vu(e);
  return Qs.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function zu(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Wu(e) {
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
var ea = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ta() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Gu(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, a = o === void 0 ? ea : o;
  return function(i, l, c) {
    c === void 0 && (c = a);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ea, a),
      modifiersData: {},
      elements: {
        reference: i,
        popper: l
      },
      attributes: {},
      styles: {}
    }, f = [], p = !1, d = {
      state: u,
      setOptions: function(y) {
        var C = typeof y == "function" ? y(u.options) : y;
        g(), u.options = Object.assign({}, a, u.options, C), u.scrollParents = {
          reference: Ze(i) ? Qt(i) : i.contextElement ? Qt(i.contextElement) : [],
          popper: Qt(l)
        };
        var x = Fu(Wu([].concat(n, u.options.modifiers)));
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
          if (ta(C, x)) {
            u.rects = {
              reference: Nu(C, fr(x), u.options.strategy === "fixed"),
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
      update: zu(function() {
        return new Promise(function(v) {
          d.forceUpdate(), v(u);
        });
      }),
      destroy: function() {
        g(), p = !0;
      }
    };
    if (!ta(i, l))
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
var Uu = [vu, Pu, pu, ru, Mu, Au, Hu, uu, $u], Ku = /* @__PURE__ */ Gu({
  defaultModifiers: Uu
});
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function ra(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function qu(e) {
  var t, r;
  return ra(e) === !1 ? !1 : (t = e.constructor, t === void 0 ? !0 : (r = t.prototype, !(ra(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
function er() {
  return er = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, er.apply(this, arguments);
}
function $i(e, t) {
  if (e == null)
    return {};
  var r, n, o = {}, a = Object.keys(e);
  for (n = 0; n < a.length; n++)
    t.indexOf(r = a[n]) >= 0 || (o[r] = e[r]);
  return o;
}
const Yu = { silent: !1, logLevel: "warn" }, Xu = ["validator"], Ei = Object.prototype, Ti = Ei.toString, Ju = Ei.hasOwnProperty, Mi = /^\s*function (\w+)/;
function na(e) {
  var t;
  const r = (t = e == null ? void 0 : e.type) !== null && t !== void 0 ? t : e;
  if (r) {
    const n = r.toString().match(Mi);
    return n ? n[1] : "";
  }
  return "";
}
const Qe = qu, Zu = (e) => e;
let ie = Zu;
const kt = (e, t) => Ju.call(e, t), Qu = Number.isInteger || function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}, $t = Array.isArray || function(e) {
  return Ti.call(e) === "[object Array]";
}, Et = (e) => Ti.call(e) === "[object Function]", $r = (e) => Qe(e) && kt(e, "_vueTypes_name"), Ri = (e) => Qe(e) && (kt(e, "type") || ["_vueTypes_name", "validator", "default", "required"].some((t) => kt(e, t)));
function Zn(e, t) {
  return Object.defineProperty(e.bind(t), "__original", { value: e });
}
function it(e, t, r = !1) {
  let n, o = !0, a = "";
  n = Qe(e) ? e : { type: e };
  const s = $r(n) ? n._vueTypes_name + " - " : "";
  if (Ri(n) && n.type !== null) {
    if (n.type === void 0 || n.type === !0 || !n.required && t === void 0)
      return o;
    $t(n.type) ? (o = n.type.some((i) => it(i, t, !0) === !0), a = n.type.map((i) => na(i)).join(" or ")) : (a = na(n), o = a === "Array" ? $t(t) : a === "Object" ? Qe(t) : a === "String" || a === "Number" || a === "Boolean" || a === "Function" ? function(i) {
      if (i == null)
        return "";
      const l = i.constructor.toString().match(Mi);
      return l ? l[1] : "";
    }(t) === a : t instanceof n.type);
  }
  if (!o) {
    const i = `${s}value "${t}" should be of type "${a}"`;
    return r === !1 ? (ie(i), !1) : i;
  }
  if (kt(n, "validator") && Et(n.validator)) {
    const i = ie, l = [];
    if (ie = (c) => {
      l.push(c);
    }, o = n.validator(t), ie = i, !o) {
      const c = (l.length > 1 ? "* " : "") + l.join(`
* `);
      return l.length = 0, r === !1 ? (ie(c), o) : c;
    }
  }
  return o;
}
function he(e, t) {
  const r = Object.defineProperties(t, { _vueTypes_name: { value: e, writable: !0 }, isRequired: { get() {
    return this.required = !0, this;
  } }, def: { value(o) {
    return o === void 0 ? (kt(this, "default") && delete this.default, this) : Et(o) || it(this, o, !0) === !0 ? (this.default = $t(o) ? () => [...o] : Qe(o) ? () => Object.assign({}, o) : o, this) : (ie(`${this._vueTypes_name} - invalid default value: "${o}"`), this);
  } } }), { validator: n } = r;
  return Et(n) && (r.validator = Zn(n, r)), r;
}
function $e(e, t) {
  const r = he(e, t);
  return Object.defineProperty(r, "validate", { value(n) {
    return Et(this.validator) && ie(`${this._vueTypes_name} - calling .validate() will overwrite the current custom validator function. Validator info:
${JSON.stringify(this)}`), this.validator = Zn(n, this), this;
  } });
}
function oa(e, t, r) {
  const n = function(l) {
    const c = {};
    return Object.getOwnPropertyNames(l).forEach((u) => {
      c[u] = Object.getOwnPropertyDescriptor(l, u);
    }), Object.defineProperties({}, c);
  }(t);
  if (n._vueTypes_name = e, !Qe(r))
    return n;
  const { validator: o } = r, a = $i(r, Xu);
  if (Et(o)) {
    let { validator: l } = n;
    l && (l = (i = (s = l).__original) !== null && i !== void 0 ? i : s), n.validator = Zn(l ? function(c) {
      return l.call(this, c) && o.call(this, c);
    } : o, n);
  }
  var s, i;
  return Object.assign(n, a);
}
function zr(e) {
  return e.replace(/^(?!\s*$)/gm, "  ");
}
const ec = () => $e("any", {}), tc = () => $e("function", { type: Function }), rc = () => $e("boolean", { type: Boolean }), nc = () => $e("string", { type: String }), oc = () => $e("number", { type: Number }), ac = () => $e("array", { type: Array }), ic = () => $e("object", { type: Object }), lc = () => he("integer", { type: Number, validator: (e) => Qu(e) }), sc = () => he("symbol", { validator: (e) => typeof e == "symbol" });
function uc(e, t = "custom validation failed") {
  if (typeof e != "function")
    throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return he(e.name || "<<anonymous function>>", { type: null, validator(r) {
    const n = e(r);
    return n || ie(`${this._vueTypes_name} - ${t}`), n;
  } });
}
function cc(e) {
  if (!$t(e))
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
    return o || ie(t), o;
  } });
}
function fc(e) {
  if (!$t(e))
    throw new TypeError("[VueTypes error]: You must provide an array as argument");
  let t = !1, r = [];
  for (let o = 0; o < e.length; o += 1) {
    const a = e[o];
    if (Ri(a)) {
      if ($r(a) && a._vueTypes_name === "oneOf" && a.type) {
        r = r.concat(a.type);
        continue;
      }
      if (Et(a.validator) && (t = !0), a.type === !0 || !a.type) {
        ie('oneOfType - invalid usage of "true" or "null" as types.');
        continue;
      }
      r = r.concat(a.type);
    } else
      r.push(a);
  }
  r = r.filter((o, a) => r.indexOf(o) === a);
  const n = r.length > 0 ? r : null;
  return he("oneOfType", t ? { type: n, validator(o) {
    const a = [], s = e.some((i) => {
      const l = it($r(i) && i._vueTypes_name === "oneOf" ? i.type || null : i, o, !0);
      return typeof l == "string" && a.push(l), l === !0;
    });
    return s || ie(`oneOfType - provided value does not match any of the ${a.length} passed-in validators:
${zr(a.join(`
`))}`), s;
  } } : { type: n });
}
function dc(e) {
  return he("arrayOf", { type: Array, validator(t) {
    let r = "";
    const n = t.every((o) => (r = it(e, o, !0), r === !0));
    return n || ie(`arrayOf - value validation error:
${zr(r)}`), n;
  } });
}
function pc(e) {
  return he("instanceOf", { type: e });
}
function hc(e) {
  return he("objectOf", { type: Object, validator(t) {
    let r = "";
    const n = Object.keys(t).every((o) => (r = it(e, t[o], !0), r === !0));
    return n || ie(`objectOf - value validation error:
${zr(r)}`), n;
  } });
}
function vc(e) {
  const t = Object.keys(e), r = t.filter((o) => {
    var a;
    return !((a = e[o]) === null || a === void 0 || !a.required);
  }), n = he("shape", { type: Object, validator(o) {
    if (!Qe(o))
      return !1;
    const a = Object.keys(o);
    if (r.length > 0 && r.some((s) => a.indexOf(s) === -1)) {
      const s = r.filter((i) => a.indexOf(i) === -1);
      return ie(s.length === 1 ? `shape - required property "${s[0]}" is not defined.` : `shape - required properties "${s.join('", "')}" are not defined.`), !1;
    }
    return a.every((s) => {
      if (t.indexOf(s) === -1)
        return this._vueTypes_isLoose === !0 || (ie(`shape - shape definition does not include a "${s}" property. Allowed keys: "${t.join('", "')}".`), !1);
      const i = it(e[s], o[s], !0);
      return typeof i == "string" && ie(`shape - "${s}" property validation error:
 ${zr(i)}`), i === !0;
    });
  } });
  return Object.defineProperty(n, "_vueTypes_isLoose", { writable: !0, value: !1 }), Object.defineProperty(n, "loose", { get() {
    return this._vueTypes_isLoose = !0, this;
  } }), n;
}
const gc = ["name", "validate", "getter"], yc = /* @__PURE__ */ (() => {
  var e;
  return (e = class {
    static get any() {
      return ec();
    }
    static get func() {
      return tc().def(this.defaults.func);
    }
    static get bool() {
      return rc().def(this.defaults.bool);
    }
    static get string() {
      return nc().def(this.defaults.string);
    }
    static get number() {
      return oc().def(this.defaults.number);
    }
    static get array() {
      return ac().def(this.defaults.array);
    }
    static get object() {
      return ic().def(this.defaults.object);
    }
    static get integer() {
      return lc().def(this.defaults.integer);
    }
    static get symbol() {
      return sc();
    }
    static get nullable() {
      return { type: null };
    }
    static extend(t) {
      if ($t(t))
        return t.forEach((l) => this.extend(l)), this;
      const { name: r, validate: n = !1, getter: o = !1 } = t, a = $i(t, gc);
      if (kt(this, r))
        throw new TypeError(`[VueTypes error]: Type "${r}" already defined`);
      const { type: s } = a;
      if ($r(s))
        return delete a.type, Object.defineProperty(this, r, o ? { get: () => oa(r, s, a) } : { value(...l) {
          const c = oa(r, s, a);
          return c.validator && (c.validator = c.validator.bind(c, ...l)), c;
        } });
      let i;
      return i = o ? { get() {
        const l = Object.assign({}, a);
        return n ? $e(r, l) : he(r, l);
      }, enumerable: !0 } : { value(...l) {
        const c = Object.assign({}, a);
        let u;
        return u = n ? $e(r, c) : he(r, c), c.validator && (u.validator = c.validator.bind(u, ...l)), u;
      }, enumerable: !0 }, Object.defineProperty(this, r, i);
    }
  }).defaults = {}, e.sensibleDefaults = void 0, e.config = Yu, e.custom = uc, e.oneOf = cc, e.instanceOf = pc, e.oneOfType = fc, e.arrayOf = dc, e.objectOf = hc, e.shape = vc, e.utils = { validate: (t, r) => it(r, t, !0) === !0, toType: (t, r, n = !1) => n ? $e(t, r) : he(t, r) }, e;
})();
function mc(e = { func: () => {
}, bool: !0, string: "", number: 0, array: () => [], object: () => ({}), integer: 0 }) {
  var t;
  return (t = class extends yc {
    static get sensibleDefaults() {
      return er({}, this.defaults);
    }
    static set sensibleDefaults(r) {
      this.defaults = r !== !1 ? er({}, r !== !0 ? r : e) : {};
    }
  }).defaults = er({}, e), t;
}
let M = class extends mc() {
};
var aa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Qn(e) {
  var t = { exports: {} };
  return e(t, t.exports), t.exports;
}
var _r = function(e) {
  return e && e.Math == Math && e;
}, ee = _r(typeof globalThis == "object" && globalThis) || _r(typeof window == "object" && window) || _r(typeof self == "object" && self) || _r(typeof aa == "object" && aa) || /* @__PURE__ */ function() {
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
}), ia = {}.propertyIsEnumerable, la = Object.getOwnPropertyDescriptor, bc = { f: la && !ia.call({ 1: 2 }, 1) ? function(e) {
  var t = la(this, e);
  return !!t && t.enumerable;
} : ia }, Wr = function(e, t) {
  return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
}, _c = {}.toString, Re = function(e) {
  return _c.call(e).slice(8, -1);
}, Cc = "".split, Gr = V(function() {
  return !Object("z").propertyIsEnumerable(0);
}) ? function(e) {
  return Re(e) == "String" ? Cc.call(e, "") : Object(e);
} : Object, Fe = function(e) {
  if (e == null)
    throw TypeError("Can't call method on " + e);
  return e;
}, Ht = function(e) {
  return Gr(Fe(e));
}, re = function(e) {
  return typeof e == "object" ? e !== null : typeof e == "function";
}, eo = function(e, t) {
  if (!re(e))
    return e;
  var r, n;
  if (t && typeof (r = e.toString) == "function" && !re(n = r.call(e)) || typeof (r = e.valueOf) == "function" && !re(n = r.call(e)) || !t && typeof (r = e.toString) == "function" && !re(n = r.call(e)))
    return n;
  throw TypeError("Can't convert object to primitive value");
}, wc = {}.hasOwnProperty, X = function(e, t) {
  return wc.call(e, t);
}, En = ee.document, Sc = re(En) && re(En.createElement), Pi = function(e) {
  return Sc ? En.createElement(e) : {};
}, ji = !ye && !V(function() {
  return Object.defineProperty(Pi("div"), "a", { get: function() {
    return 7;
  } }).a != 7;
}), sa = Object.getOwnPropertyDescriptor, to = { f: ye ? sa : function(e, t) {
  if (e = Ht(e), t = eo(t, !0), ji)
    try {
      return sa(e, t);
    } catch {
    }
  if (X(e, t))
    return Wr(!bc.f.call(e, t), e[t]);
} }, ue = function(e) {
  if (!re(e))
    throw TypeError(String(e) + " is not an object");
  return e;
}, ua = Object.defineProperty, Ie = { f: ye ? ua : function(e, t, r) {
  if (ue(e), t = eo(t, !0), ue(r), ji)
    try {
      return ua(e, t, r);
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
}, et = ee["__core-js_shared__"] || ro("__core-js_shared__", {}), xc = Function.toString;
typeof et.inspectSource != "function" && (et.inspectSource = function(e) {
  return xc.call(e);
});
var Er, tr, Tr, Ii = et.inspectSource, ca = ee.WeakMap, Oc = typeof ca == "function" && /native code/.test(Ii(ca)), Hi = Qn(function(e) {
  (e.exports = function(t, r) {
    return et[t] || (et[t] = r !== void 0 ? r : {});
  })("versions", []).push({ version: "3.8.3", mode: "global", copyright: "© 2021 Denis Pushkarev (zloirock.ru)" });
}), Ac = 0, kc = Math.random(), no = function(e) {
  return "Symbol(" + String(e === void 0 ? "" : e) + ")_" + (++Ac + kc).toString(36);
}, fa = Hi("keys"), oo = function(e) {
  return fa[e] || (fa[e] = no(e));
}, Ur = {}, $c = ee.WeakMap;
if (Oc) {
  var dt = et.state || (et.state = new $c()), Ec = dt.get, Tc = dt.has, Mc = dt.set;
  Er = function(e, t) {
    return t.facade = e, Mc.call(dt, e, t), t;
  }, tr = function(e) {
    return Ec.call(dt, e) || {};
  }, Tr = function(e) {
    return Tc.call(dt, e);
  };
} else {
  var Wt = oo("state");
  Ur[Wt] = !0, Er = function(e, t) {
    return t.facade = e, be(e, Wt, t), t;
  }, tr = function(e) {
    return X(e, Wt) ? e[Wt] : {};
  }, Tr = function(e) {
    return X(e, Wt);
  };
}
var ze = { set: Er, get: tr, has: Tr, enforce: function(e) {
  return Tr(e) ? tr(e) : Er(e, {});
}, getterFor: function(e) {
  return function(t) {
    var r;
    if (!re(t) || (r = tr(t)).type !== e)
      throw TypeError("Incompatible receiver, " + e + " required");
    return r;
  };
} }, We = Qn(function(e) {
  var t = ze.get, r = ze.enforce, n = String(String).split("String");
  (e.exports = function(o, a, s, i) {
    var l, c = !!i && !!i.unsafe, u = !!i && !!i.enumerable, f = !!i && !!i.noTargetGet;
    typeof s == "function" && (typeof a != "string" || X(s, "name") || be(s, "name", a), (l = r(s)).source || (l.source = n.join(typeof a == "string" ? a : ""))), o !== ee ? (c ? !f && o[a] && (u = !0) : delete o[a], u ? o[a] = s : be(o, a, s)) : u ? o[a] = s : ro(a, s);
  })(Function.prototype, "toString", function() {
    return typeof this == "function" && t(this).source || Ii(this);
  });
}), on = ee, da = function(e) {
  return typeof e == "function" ? e : void 0;
}, Kr = function(e, t) {
  return arguments.length < 2 ? da(on[e]) || da(ee[e]) : on[e] && on[e][t] || ee[e] && ee[e][t];
}, Rc = Math.ceil, Pc = Math.floor, Lt = function(e) {
  return isNaN(e = +e) ? 0 : (e > 0 ? Pc : Rc)(e);
}, jc = Math.min, ge = function(e) {
  return e > 0 ? jc(Lt(e), 9007199254740991) : 0;
}, Ic = Math.max, Hc = Math.min, Mr = function(e, t) {
  var r = Lt(e);
  return r < 0 ? Ic(r + t, 0) : Hc(r, t);
}, pa = function(e) {
  return function(t, r, n) {
    var o, a = Ht(t), s = ge(a.length), i = Mr(n, s);
    if (e && r != r) {
      for (; s > i; )
        if ((o = a[i++]) != o)
          return !0;
    } else
      for (; s > i; i++)
        if ((e || i in a) && a[i] === r)
          return e || i || 0;
    return !e && -1;
  };
}, Li = { includes: pa(!0), indexOf: pa(!1) }, Lc = Li.indexOf, Di = function(e, t) {
  var r, n = Ht(e), o = 0, a = [];
  for (r in n)
    !X(Ur, r) && X(n, r) && a.push(r);
  for (; t.length > o; )
    X(n, r = t[o++]) && (~Lc(a, r) || a.push(r));
  return a;
}, Rr = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], Dc = Rr.concat("length", "prototype"), Bc = { f: Object.getOwnPropertyNames || function(e) {
  return Di(e, Dc);
} }, Nc = { f: Object.getOwnPropertySymbols }, Vc = Kr("Reflect", "ownKeys") || function(e) {
  var t = Bc.f(ue(e)), r = Nc.f;
  return r ? t.concat(r(e)) : t;
}, Fc = function(e, t) {
  for (var r = Vc(t), n = Ie.f, o = to.f, a = 0; a < r.length; a++) {
    var s = r[a];
    X(e, s) || n(e, s, o(t, s));
  }
}, zc = /#|\.prototype\./, dr = function(e, t) {
  var r = Gc[Wc(e)];
  return r == Kc || r != Uc && (typeof t == "function" ? V(t) : !!t);
}, Wc = dr.normalize = function(e) {
  return String(e).replace(zc, ".").toLowerCase();
}, Gc = dr.data = {}, Uc = dr.NATIVE = "N", Kc = dr.POLYFILL = "P", Tn = dr, qc = to.f, le = function(e, t) {
  var r, n, o, a, s, i = e.target, l = e.global, c = e.stat;
  if (r = l ? ee : c ? ee[i] || ro(i, {}) : (ee[i] || {}).prototype)
    for (n in t) {
      if (a = t[n], o = e.noTargetGet ? (s = qc(r, n)) && s.value : r[n], !Tn(l ? n : i + (c ? "." : "#") + n, e.forced) && o !== void 0) {
        if (typeof a == typeof o)
          continue;
        Fc(a, o);
      }
      (e.sham || o && o.sham) && be(a, "sham", !0), We(r, n, a, e);
    }
}, ao = function(e, t) {
  var r = [][e];
  return !!r && V(function() {
    r.call(null, t || function() {
      throw 1;
    }, 1);
  });
}, Yc = Object.defineProperty, an = {}, ha = function(e) {
  throw e;
}, Dt = function(e, t) {
  if (X(an, e))
    return an[e];
  t || (t = {});
  var r = [][e], n = !!X(t, "ACCESSORS") && t.ACCESSORS, o = X(t, 0) ? t[0] : ha, a = X(t, 1) ? t[1] : void 0;
  return an[e] = !!r && !V(function() {
    if (n && !ye)
      return !0;
    var s = { length: -1 };
    n ? Yc(s, 1, { enumerable: !0, get: ha }) : s[1] = 1, r.call(s, o, a);
  });
}, Xc = Li.indexOf, Bi = [].indexOf, va = !!Bi && 1 / [1].indexOf(1, -0) < 0, Jc = ao("indexOf"), Zc = Dt("indexOf", { ACCESSORS: !0, 1: 0 });
function lt(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ga(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function st(e, t, r) {
  return t && ga(e.prototype, t), r && ga(e, r), e;
}
le({ target: "Array", proto: !0, forced: va || !Jc || !Zc }, { indexOf: function(e) {
  return va ? Bi.apply(this, arguments) || 0 : Xc(this, e, arguments.length > 1 ? arguments[1] : void 0);
} });
(function() {
  function e() {
    lt(this, e);
  }
  return st(e, null, [{ key: "isInBrowser", value: function() {
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
var Qc = [].join, ef = Gr != Object, tf = ao("join", ",");
le({ target: "Array", proto: !0, forced: ef || !tf }, { join: function(e) {
  return Qc.call(Ht(this), e === void 0 ? "," : e);
} });
var pt, Pr, He = function(e) {
  return Object(Fe(e));
}, Tt = Array.isArray || function(e) {
  return Re(e) == "Array";
}, Ni = !!Object.getOwnPropertySymbols && !V(function() {
  return !String(Symbol());
}), rf = Ni && !Symbol.sham && typeof Symbol.iterator == "symbol", Cr = Hi("wks"), rr = ee.Symbol, nf = rf ? rr : rr && rr.withoutSetter || no, K = function(e) {
  return X(Cr, e) || (Ni && X(rr, e) ? Cr[e] = rr[e] : Cr[e] = nf("Symbol." + e)), Cr[e];
}, of = K("species"), qr = function(e, t) {
  var r;
  return Tt(e) && (typeof (r = e.constructor) != "function" || r !== Array && !Tt(r.prototype) ? re(r) && (r = r[of]) === null && (r = void 0) : r = void 0), new (r === void 0 ? Array : r)(t === 0 ? 0 : t);
}, Mt = function(e, t, r) {
  var n = eo(t);
  n in e ? Ie.f(e, n, Wr(0, r)) : e[n] = r;
}, ln = Kr("navigator", "userAgent") || "", ya = ee.process, ma = ya && ya.versions, ba = ma && ma.v8;
ba ? Pr = (pt = ba.split("."))[0] + pt[1] : ln && (!(pt = ln.match(/Edge\/(\d+)/)) || pt[1] >= 74) && (pt = ln.match(/Chrome\/(\d+)/)) && (Pr = pt[1]);
var jr = Pr && +Pr, af = K("species"), io = function(e) {
  return jr >= 51 || !V(function() {
    var t = [];
    return (t.constructor = {})[af] = function() {
      return { foo: 1 };
    }, t[e](Boolean).foo !== 1;
  });
}, lf = io("splice"), sf = Dt("splice", { ACCESSORS: !0, 0: 0, 1: 2 }), uf = Math.max, cf = Math.min;
le({ target: "Array", proto: !0, forced: !lf || !sf }, { splice: function(e, t) {
  var r, n, o, a, s, i, l = He(this), c = ge(l.length), u = Mr(e, c), f = arguments.length;
  if (f === 0 ? r = n = 0 : f === 1 ? (r = 0, n = c - u) : (r = f - 2, n = cf(uf(Lt(t), 0), c - u)), c + r - n > 9007199254740991)
    throw TypeError("Maximum allowed length exceeded");
  for (o = qr(l, n), a = 0; a < n; a++)
    (s = u + a) in l && Mt(o, a, l[s]);
  if (o.length = n, r < n) {
    for (a = u; a < c - n; a++)
      i = a + r, (s = a + n) in l ? l[i] = l[s] : delete l[i];
    for (a = c; a > c - n + r; a--)
      delete l[a - 1];
  } else if (r > n)
    for (a = c - n; a > u; a--)
      i = a + r - 1, (s = a + n - 1) in l ? l[i] = l[s] : delete l[i];
  for (a = 0; a < r; a++)
    l[a + u] = arguments[a + 2];
  return l.length = c - n + r, o;
} });
var Vi = {};
Vi[K("toStringTag")] = "z";
var lo = String(Vi) === "[object z]", ff = K("toStringTag"), df = Re(/* @__PURE__ */ function() {
  return arguments;
}()) == "Arguments", Fi = lo ? Re : function(e) {
  var t, r, n;
  return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (r = function(o, a) {
    try {
      return o[a];
    } catch {
    }
  }(t = Object(e), ff)) == "string" ? r : df ? Re(t) : (n = Re(t)) == "Object" && typeof t.callee == "function" ? "Arguments" : n;
}, pf = lo ? {}.toString : function() {
  return "[object " + Fi(this) + "]";
};
lo || We(Object.prototype, "toString", pf, { unsafe: !0 });
var zi = function() {
  var e = ue(this), t = "";
  return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t;
};
function _a(e, t) {
  return RegExp(e, t);
}
var sn, un, Ca = { UNSUPPORTED_Y: V(function() {
  var e = _a("a", "y");
  return e.lastIndex = 2, e.exec("abcd") != null;
}), BROKEN_CARET: V(function() {
  var e = _a("^r", "gy");
  return e.lastIndex = 2, e.exec("str") != null;
}) }, Ir = RegExp.prototype.exec, hf = String.prototype.replace, Wi = Ir, cn = (sn = /a/, un = /b*/g, Ir.call(sn, "a"), Ir.call(un, "a"), sn.lastIndex !== 0 || un.lastIndex !== 0), wa = Ca.UNSUPPORTED_Y || Ca.BROKEN_CARET, fn = /()??/.exec("")[1] !== void 0;
(cn || fn || wa) && (Wi = function(e) {
  var t, r, n, o, a = this, s = wa && a.sticky, i = zi.call(a), l = a.source, c = 0, u = e;
  return s && ((i = i.replace("y", "")).indexOf("g") === -1 && (i += "g"), u = String(e).slice(a.lastIndex), a.lastIndex > 0 && (!a.multiline || a.multiline && e[a.lastIndex - 1] !== `
`) && (l = "(?: " + l + ")", u = " " + u, c++), r = new RegExp("^(?:" + l + ")", i)), fn && (r = new RegExp("^" + l + "$(?!\\s)", i)), cn && (t = a.lastIndex), n = Ir.call(s ? r : a, u), s ? n ? (n.input = n.input.slice(c), n[0] = n[0].slice(c), n.index = a.lastIndex, a.lastIndex += n[0].length) : a.lastIndex = 0 : cn && n && (a.lastIndex = a.global ? n.index + n[0].length : t), fn && n && n.length > 1 && hf.call(n[0], r, function() {
    for (o = 1; o < arguments.length - 2; o++)
      arguments[o] === void 0 && (n[o] = void 0);
  }), n;
});
var sr = Wi;
le({ target: "RegExp", proto: !0, forced: /./.exec !== sr }, { exec: sr });
var Gi = RegExp.prototype, Ui = Gi.toString, vf = V(function() {
  return Ui.call({ source: "a", flags: "b" }) != "/a/b";
}), gf = Ui.name != "toString";
(vf || gf) && We(RegExp.prototype, "toString", function() {
  var e = ue(this), t = String(e.source), r = e.flags;
  return "/" + t + "/" + String(r === void 0 && e instanceof RegExp && !("flags" in Gi) ? zi.call(e) : r);
}, { unsafe: !0 });
var yf = K("species"), mf = !V(function() {
  var e = /./;
  return e.exec = function() {
    var t = [];
    return t.groups = { a: "7" }, t;
  }, "".replace(e, "$<a>") !== "7";
}), Sa = "a".replace(/./, "$0") === "$0", xa = K("replace"), Oa = !!/./[xa] && /./[xa]("a", "$0") === "", bf = !V(function() {
  var e = /(?:)/, t = e.exec;
  e.exec = function() {
    return t.apply(this, arguments);
  };
  var r = "ab".split(e);
  return r.length !== 2 || r[0] !== "a" || r[1] !== "b";
}), Ki = function(e, t, r, n) {
  var o = K(e), a = !V(function() {
    var f = {};
    return f[o] = function() {
      return 7;
    }, ""[e](f) != 7;
  }), s = a && !V(function() {
    var f = !1, p = /a/;
    return e === "split" && ((p = {}).constructor = {}, p.constructor[yf] = function() {
      return p;
    }, p.flags = "", p[o] = /./[o]), p.exec = function() {
      return f = !0, null;
    }, p[o](""), !f;
  });
  if (!a || !s || e === "replace" && (!mf || !Sa || Oa) || e === "split" && !bf) {
    var i = /./[o], l = r(o, ""[e], function(f, p, d, h, g) {
      return p.exec === sr ? a && !g ? { done: !0, value: i.call(p, d, h) } : { done: !0, value: f.call(d, p, h) } : { done: !1 };
    }, { REPLACE_KEEPS_$0: Sa, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Oa }), c = l[0], u = l[1];
    We(String.prototype, e, c), We(RegExp.prototype, o, t == 2 ? function(f, p) {
      return u.call(f, this, p);
    } : function(f) {
      return u.call(f, this);
    });
  }
  n && be(RegExp.prototype[o], "sham", !0);
}, _f = K("match"), qi = function(e) {
  var t;
  return re(e) && ((t = e[_f]) !== void 0 ? !!t : Re(e) == "RegExp");
}, so = function(e) {
  if (typeof e != "function")
    throw TypeError(String(e) + " is not a function");
  return e;
}, Cf = K("species"), Aa = function(e) {
  return function(t, r) {
    var n, o, a = String(Fe(t)), s = Lt(r), i = a.length;
    return s < 0 || s >= i ? e ? "" : void 0 : (n = a.charCodeAt(s)) < 55296 || n > 56319 || s + 1 === i || (o = a.charCodeAt(s + 1)) < 56320 || o > 57343 ? e ? a.charAt(s) : n : e ? a.slice(s, s + 2) : o - 56320 + (n - 55296 << 10) + 65536;
  };
}, Yi = { codeAt: Aa(!1), charAt: Aa(!0) }, wf = Yi.charAt, Xi = function(e, t, r) {
  return t + (r ? wf(e, t).length : 1);
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
  return sr.call(e, t);
}, Sf = [].push, xf = Math.min, ht = !V(function() {
  return !RegExp(4294967295, "y");
});
Ki("split", 2, function(e, t, r) {
  var n;
  return n = "abbc".split(/(b)*/)[1] == "c" || "test".split(/(?:)/, -1).length != 4 || "ab".split(/(?:ab)*/).length != 2 || ".".split(/(.?)(.?)/).length != 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(o, a) {
    var s = String(Fe(this)), i = a === void 0 ? 4294967295 : a >>> 0;
    if (i === 0)
      return [];
    if (o === void 0)
      return [s];
    if (!qi(o))
      return t.call(s, o, i);
    for (var l, c, u, f = [], p = (o.ignoreCase ? "i" : "") + (o.multiline ? "m" : "") + (o.unicode ? "u" : "") + (o.sticky ? "y" : ""), d = 0, h = new RegExp(o.source, p + "g"); (l = sr.call(h, s)) && !((c = h.lastIndex) > d && (f.push(s.slice(d, l.index)), l.length > 1 && l.index < s.length && Sf.apply(f, l.slice(1)), u = l[0].length, d = c, f.length >= i)); )
      h.lastIndex === l.index && h.lastIndex++;
    return d === s.length ? !u && h.test("") || f.push("") : f.push(s.slice(d)), f.length > i ? f.slice(0, i) : f;
  } : "0".split(void 0, 0).length ? function(o, a) {
    return o === void 0 && a === 0 ? [] : t.call(this, o, a);
  } : t, [function(o, a) {
    var s = Fe(this), i = o == null ? void 0 : o[e];
    return i !== void 0 ? i.call(o, s, a) : n.call(String(s), o, a);
  }, function(o, a) {
    var s = r(n, o, this, a, n !== t);
    if (s.done)
      return s.value;
    var i = ue(o), l = String(this), c = function(S, T) {
      var $, R = ue(S).constructor;
      return R === void 0 || ($ = ue(R)[Cf]) == null ? T : so($);
    }(i, RegExp), u = i.unicode, f = (i.ignoreCase ? "i" : "") + (i.multiline ? "m" : "") + (i.unicode ? "u" : "") + (ht ? "y" : "g"), p = new c(ht ? i : "^(?:" + i.source + ")", f), d = a === void 0 ? 4294967295 : a >>> 0;
    if (d === 0)
      return [];
    if (l.length === 0)
      return Mn(p, l) === null ? [l] : [];
    for (var h = 0, g = 0, v = []; g < l.length; ) {
      p.lastIndex = ht ? g : 0;
      var y, C = Mn(p, ht ? l : l.slice(g));
      if (C === null || (y = xf(ge(p.lastIndex + (ht ? 0 : g)), l.length)) === h)
        g = Xi(l, g, u);
      else {
        if (v.push(l.slice(h, g)), v.length === d)
          return v;
        for (var x = 1; x <= C.length - 1; x++)
          if (v.push(C[x]), v.length === d)
            return v;
        g = h = y;
      }
    }
    return v.push(l.slice(h)), v;
  }];
}, !ht);
var Rn = `	
\v\f\r                　\u2028\u2029\uFEFF`, Hr = "[" + Rn + "]", Of = RegExp("^" + Hr + Hr + "*"), Af = RegExp(Hr + Hr + "*$"), dn = function(e) {
  return function(t) {
    var r = String(Fe(t));
    return 1 & e && (r = r.replace(Of, "")), 2 & e && (r = r.replace(Af, "")), r;
  };
}, kf = { start: dn(1), end: dn(2), trim: dn(3) }, $f = kf.trim;
le({ target: "String", proto: !0, forced: function(e) {
  return V(function() {
    return !!Rn[e]() || "​᠎"[e]() != "​᠎" || Rn[e].name !== e;
  });
}("trim") }, { trim: function() {
  return $f(this);
} });
var Ef = io("slice"), Tf = Dt("slice", { ACCESSORS: !0, 0: 0, 1: 2 }), Mf = K("species"), Rf = [].slice, Pf = Math.max;
le({ target: "Array", proto: !0, forced: !Ef || !Tf }, { slice: function(e, t) {
  var r, n, o, a = Ht(this), s = ge(a.length), i = Mr(e, s), l = Mr(t === void 0 ? s : t, s);
  if (Tt(a) && (typeof (r = a.constructor) != "function" || r !== Array && !Tt(r.prototype) ? re(r) && (r = r[Mf]) === null && (r = void 0) : r = void 0, r === Array || r === void 0))
    return Rf.call(a, i, l);
  for (n = new (r === void 0 ? Array : r)(Pf(l - i, 0)), o = 0; i < l; i++, o++)
    i in a && Mt(n, o, a[i]);
  return n.length = o, n;
} });
var uo = Object.keys || function(e) {
  return Di(e, Rr);
}, jf = V(function() {
  uo(1);
});
le({ target: "Object", stat: !0, forced: jf }, { keys: function(e) {
  return uo(He(e));
} });
var pn, If = function(e) {
  if (qi(e))
    throw TypeError("The method doesn't accept regular expressions");
  return e;
}, Hf = K("match"), Lf = to.f, ka = "".startsWith, Df = Math.min, Ji = function(e) {
  var t = /./;
  try {
    "/./"[e](t);
  } catch {
    try {
      return t[Hf] = !1, "/./"[e](t);
    } catch {
    }
  }
  return !1;
}("startsWith"), Bf = !(Ji || (pn = Lf(String.prototype, "startsWith"), !pn || pn.writable));
function Zi(e) {
  return (Zi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  })(e);
}
le({ target: "String", proto: !0, forced: !Bf && !Ji }, { startsWith: function(e) {
  var t = String(Fe(this));
  If(e);
  var r = ge(Df(arguments.length > 1 ? arguments[1] : void 0, t.length)), n = String(e);
  return ka ? ka.call(t, n, r) : t.slice(r, r + n.length) === n;
} });
var vt = function(e) {
  return typeof e == "string";
}, gt = function(e) {
  return e !== null && Zi(e) === "object";
}, Rt = function() {
  function e() {
    lt(this, e);
  }
  return st(e, null, [{ key: "isWindow", value: function(t) {
    return t === window;
  } }, { key: "addEventListener", value: function(t, r, n) {
    var o = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
    t && r && n && t.addEventListener(r, n, o);
  } }, { key: "removeEventListener", value: function(t, r, n) {
    var o = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
    t && r && n && t.removeEventListener(r, n, o);
  } }, { key: "triggerDragEvent", value: function(t, r) {
    var n = !1, o = function(s) {
      var i;
      (i = r.drag) === null || i === void 0 || i.call(r, s);
    }, a = function s(i) {
      var l;
      e.removeEventListener(document, "mousemove", o), e.removeEventListener(document, "mouseup", s), document.onselectstart = null, document.ondragstart = null, n = !1, (l = r.end) === null || l === void 0 || l.call(r, i);
    };
    e.addEventListener(t, "mousedown", function(s) {
      var i;
      n || (document.onselectstart = function() {
        return !1;
      }, document.ondragstart = function() {
        return !1;
      }, e.addEventListener(document, "mousemove", o), e.addEventListener(document, "mouseup", a), n = !0, (i = r.start) === null || i === void 0 || i.call(r, s));
    });
  } }, { key: "getBoundingClientRect", value: function(t) {
    return t && gt(t) && t.nodeType === 1 ? t.getBoundingClientRect() : null;
  } }, { key: "hasClass", value: function(t, r) {
    return !!(t && gt(t) && vt(r) && t.nodeType === 1) && t.classList.contains(r.trim());
  } }, { key: "addClass", value: function(t, r) {
    if (t && gt(t) && vt(r) && t.nodeType === 1 && (r = r.trim(), !e.hasClass(t, r))) {
      var n = t.className;
      t.className = n ? n + " " + r : r;
    }
  } }, { key: "removeClass", value: function(t, r) {
    if (t && gt(t) && vt(r) && t.nodeType === 1 && typeof t.className == "string") {
      r = r.trim();
      for (var n = t.className.trim().split(" "), o = n.length - 1; o >= 0; o--)
        n[o] = n[o].trim(), n[o] && n[o] !== r || n.splice(o, 1);
      t.className = n.join(" ");
    }
  } }, { key: "toggleClass", value: function(t, r, n) {
    t && gt(t) && vt(r) && t.nodeType === 1 && t.classList.toggle(r, n);
  } }, { key: "replaceClass", value: function(t, r, n) {
    t && gt(t) && vt(r) && vt(n) && t.nodeType === 1 && (r = r.trim(), n = n.trim(), e.removeClass(t, r), e.addClass(t, n));
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
    var n = t.getBoundingClientRect(), o = n.left + n.width / 2, a = n.top + n.height / 2, s = Math.abs(o - r.clientX), i = Math.abs(a - r.clientY), l = i / Math.sqrt(Math.pow(s, 2) + Math.pow(i, 2)), c = Math.acos(l), u = Math.floor(180 / (Math.PI / c));
    return r.clientX > o && r.clientY > a && (u = 180 - u), r.clientX == o && r.clientY > a && (u = 180), r.clientX > o && r.clientY == a && (u = 90), r.clientX < o && r.clientY > a && (u = 180 + u), r.clientX < o && r.clientY == a && (u = 270), r.clientX < o && r.clientY < a && (u = 360 - u), u;
  } }, { key: "querySelector", value: function(t, r) {
    return r ? r.querySelector(t) : document.querySelector(t);
  } }, { key: "createElement", value: function(t) {
    for (var r = document.createElement(t), n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      o[a - 1] = arguments[a];
    for (var s = 0; s < o.length; s++)
      o[s] && r.classList.add(o[s]);
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
}(), Nf = Math.floor, Vf = "".replace, Ff = /\$([$&'`]|\d\d?|<[^>]*>)/g, zf = /\$([$&'`]|\d\d?)/g, Wf = function(e, t, r, n, o, a) {
  var s = r + e.length, i = n.length, l = zf;
  return o !== void 0 && (o = He(o), l = Ff), Vf.call(a, l, function(c, u) {
    var f;
    switch (u.charAt(0)) {
      case "$":
        return "$";
      case "&":
        return e;
      case "`":
        return t.slice(0, r);
      case "'":
        return t.slice(s);
      case "<":
        f = o[u.slice(1, -1)];
        break;
      default:
        var p = +u;
        if (p === 0)
          return c;
        if (p > i) {
          var d = Nf(p / 10);
          return d === 0 ? c : d <= i ? n[d - 1] === void 0 ? u.charAt(1) : n[d - 1] + u.charAt(1) : c;
        }
        f = n[p - 1];
    }
    return f === void 0 ? "" : f;
  });
}, Gf = Math.max, Uf = Math.min;
Ki("replace", 2, function(e, t, r, n) {
  var o = n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, a = n.REPLACE_KEEPS_$0, s = o ? "$" : "$0";
  return [function(i, l) {
    var c = Fe(this), u = i == null ? void 0 : i[e];
    return u !== void 0 ? u.call(i, c, l) : t.call(String(c), i, l);
  }, function(i, l) {
    if (!o && a || typeof l == "string" && l.indexOf(s) === -1) {
      var c = r(t, i, this, l);
      if (c.done)
        return c.value;
    }
    var u = ue(i), f = String(this), p = typeof l == "function";
    p || (l = String(l));
    var d = u.global;
    if (d) {
      var h = u.unicode;
      u.lastIndex = 0;
    }
    for (var g = []; ; ) {
      var v = Mn(u, f);
      if (v === null || (g.push(v), !d))
        break;
      String(v[0]) === "" && (u.lastIndex = Xi(f, ge(u.lastIndex), h));
    }
    for (var y, C = "", x = 0, S = 0; S < g.length; S++) {
      v = g[S];
      for (var T = String(v[0]), $ = Gf(Uf(Lt(v.index), f.length), 0), R = [], L = 1; L < v.length; L++)
        R.push((y = v[L]) === void 0 ? y : String(y));
      var m = v.groups;
      if (p) {
        var O = [T].concat(R, $, f);
        m !== void 0 && O.push(m);
        var b = String(l.apply(void 0, O));
      } else
        b = Wf(T, f, $, R, m, l);
      $ >= x && (C += f.slice(x, $) + b, x = $ + T.length);
    }
    return C + f.slice(x);
  }];
});
(function() {
  function e() {
    lt(this, e);
  }
  return st(e, null, [{ key: "camelize", value: function(t) {
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
  return st(e, null, [{ key: "_clone", value: function() {
  } }]), e;
})();
var Qi = K("isConcatSpreadable"), Kf = jr >= 51 || !V(function() {
  var e = [];
  return e[Qi] = !1, e.concat()[0] !== e;
}), qf = io("concat"), Yf = function(e) {
  if (!re(e))
    return !1;
  var t = e[Qi];
  return t !== void 0 ? !!t : Tt(e);
};
le({ target: "Array", proto: !0, forced: !Kf || !qf }, { concat: function(e) {
  var t, r, n, o, a, s = He(this), i = qr(s, 0), l = 0;
  for (t = -1, n = arguments.length; t < n; t++)
    if (Yf(a = t === -1 ? s : arguments[t])) {
      if (l + (o = ge(a.length)) > 9007199254740991)
        throw TypeError("Maximum allowed index exceeded");
      for (r = 0; r < o; r++, l++)
        r in a && Mt(i, l, a[r]);
    } else {
      if (l >= 9007199254740991)
        throw TypeError("Maximum allowed index exceeded");
      Mt(i, l++, a);
    }
  return i.length = l, i;
} });
var hn, pr = function(e, t, r) {
  if (so(e), t === void 0)
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
}, $a = [].push, Ne = function(e) {
  var t = e == 1, r = e == 2, n = e == 3, o = e == 4, a = e == 6, s = e == 7, i = e == 5 || a;
  return function(l, c, u, f) {
    for (var p, d, h = He(l), g = Gr(h), v = pr(c, u, 3), y = ge(g.length), C = 0, x = f || qr, S = t ? x(l, y) : r || s ? x(l, 0) : void 0; y > C; C++)
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
              $a.call(S, p);
          }
        else
          switch (e) {
            case 4:
              return !1;
            case 7:
              $a.call(S, p);
          }
    return a ? -1 : n || o ? o : S;
  };
}, el = { forEach: Ne(0), map: Ne(1), filter: Ne(2), some: Ne(3), every: Ne(4), find: Ne(5), findIndex: Ne(6), filterOut: Ne(7) }, Xf = ye ? Object.defineProperties : function(e, t) {
  ue(e);
  for (var r, n = uo(t), o = n.length, a = 0; o > a; )
    Ie.f(e, r = n[a++], t[r]);
  return e;
}, Jf = Kr("document", "documentElement"), tl = oo("IE_PROTO"), vn = function() {
}, Ea = function(e) {
  return "<script>" + e + "<\/script>";
}, xr = function() {
  try {
    hn = document.domain && new ActiveXObject("htmlfile");
  } catch {
  }
  var e, t;
  xr = hn ? function(n) {
    n.write(Ea("")), n.close();
    var o = n.parentWindow.Object;
    return n = null, o;
  }(hn) : ((t = Pi("iframe")).style.display = "none", Jf.appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write(Ea("document.F=Object")), e.close(), e.F);
  for (var r = Rr.length; r--; )
    delete xr.prototype[Rr[r]];
  return xr();
};
Ur[tl] = !0;
var co = Object.create || function(e, t) {
  var r;
  return e !== null ? (vn.prototype = ue(e), r = new vn(), vn.prototype = null, r[tl] = e) : r = xr(), t === void 0 ? r : Xf(r, t);
}, Pn = K("unscopables"), jn = Array.prototype;
jn[Pn] == null && Ie.f(jn, Pn, { configurable: !0, value: co(null) });
var _t = function(e) {
  jn[Pn][e] = !0;
}, Zf = el.find, Ta = !0, Qf = Dt("find");
"find" in [] && Array(1).find(function() {
  Ta = !1;
}), le({ target: "Array", proto: !0, forced: Ta || !Qf }, { find: function(e) {
  return Zf(this, e, arguments.length > 1 ? arguments[1] : void 0);
} }), _t("find");
var ed = el.findIndex, Ma = !0, td = Dt("findIndex");
"findIndex" in [] && Array(1).findIndex(function() {
  Ma = !1;
}), le({ target: "Array", proto: !0, forced: Ma || !td }, { findIndex: function(e) {
  return ed(this, e, arguments.length > 1 ? arguments[1] : void 0);
} }), _t("findIndex");
var rl = function(e, t, r, n, o, a, s, i) {
  for (var l, c = o, u = 0, f = !!s && pr(s, i, 3); u < n; ) {
    if (u in r) {
      if (l = f ? f(r[u], u, t) : r[u], a > 0 && Tt(l))
        c = rl(e, t, l, ge(l.length), c, a - 1) - 1;
      else {
        if (c >= 9007199254740991)
          throw TypeError("Exceed the acceptable array length");
        e[c] = l;
      }
      c++;
    }
    u++;
  }
  return c;
}, rd = rl;
le({ target: "Array", proto: !0 }, { flat: function() {
  var e = arguments.length ? arguments[0] : void 0, t = He(this), r = ge(t.length), n = qr(t, 0);
  return n.length = rd(n, t, t, r, 0, e === void 0 ? 1 : Lt(e)), n;
} });
var In = function(e) {
  var t = e.return;
  if (t !== void 0)
    return ue(t.call(e)).value;
}, nd = function(e, t, r, n) {
  try {
    return n ? t(ue(r)[0], r[1]) : t(r);
  } catch (o) {
    throw In(e), o;
  }
}, Pt = {}, od = K("iterator"), ad = Array.prototype, nl = function(e) {
  return e !== void 0 && (Pt.Array === e || ad[od] === e);
}, id = K("iterator"), ol = function(e) {
  if (e != null)
    return e[id] || e["@@iterator"] || Pt[Fi(e)];
}, al = K("iterator"), il = !1;
try {
  var ld = 0, Ra = { next: function() {
    return { done: !!ld++ };
  }, return: function() {
    il = !0;
  } };
  Ra[al] = function() {
    return this;
  }, Array.from(Ra, function() {
    throw 2;
  });
} catch {
}
var ll = function(e, t) {
  if (!t && !il)
    return !1;
  var r = !1;
  try {
    var n = {};
    n[al] = function() {
      return { next: function() {
        return { done: r = !0 };
      } };
    }, e(n);
  } catch {
  }
  return r;
}, sd = !ll(function(e) {
  Array.from(e);
});
le({ target: "Array", stat: !0, forced: sd }, { from: function(e) {
  var t, r, n, o, a, s, i = He(e), l = typeof this == "function" ? this : Array, c = arguments.length, u = c > 1 ? arguments[1] : void 0, f = u !== void 0, p = ol(i), d = 0;
  if (f && (u = pr(u, c > 2 ? arguments[2] : void 0, 2)), p == null || l == Array && nl(p))
    for (r = new l(t = ge(i.length)); t > d; d++)
      s = f ? u(i[d], d) : i[d], Mt(r, d, s);
  else
    for (a = (o = p.call(i)).next, r = new l(); !(n = a.call(o)).done; d++)
      s = f ? nd(o, u, [n.value, d], !0) : n.value, Mt(r, d, s);
  return r.length = d, r;
} });
var Pa = function(e) {
  return function(t, r, n, o) {
    so(r);
    var a = He(t), s = Gr(a), i = ge(a.length), l = e ? i - 1 : 0, c = e ? -1 : 1;
    if (n < 2)
      for (; ; ) {
        if (l in s) {
          o = s[l], l += c;
          break;
        }
        if (l += c, e ? l < 0 : i <= l)
          throw TypeError("Reduce of empty array with no initial value");
      }
    for (; e ? l >= 0 : i > l; l += c)
      l in s && (o = r(o, s[l], l, a));
    return o;
  };
}, ud = { left: Pa(!1), right: Pa(!0) }, cd = Re(ee.process) == "process", fd = ud.left, dd = ao("reduce"), pd = Dt("reduce", { 1: 0 });
le({ target: "Array", proto: !0, forced: !dd || !pd || !cd && jr > 79 && jr < 83 }, { reduce: function(e) {
  return fd(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
} }), _t("flat");
var Ye, ja, Ia, hd = !V(function() {
  return Object.isExtensible(Object.preventExtensions({}));
}), sl = Qn(function(e) {
  var t = Ie.f, r = no("meta"), n = 0, o = Object.isExtensible || function() {
    return !0;
  }, a = function(i) {
    t(i, r, { value: { objectID: "O" + ++n, weakData: {} } });
  }, s = e.exports = { REQUIRED: !1, fastKey: function(i, l) {
    if (!re(i))
      return typeof i == "symbol" ? i : (typeof i == "string" ? "S" : "P") + i;
    if (!X(i, r)) {
      if (!o(i))
        return "F";
      if (!l)
        return "E";
      a(i);
    }
    return i[r].objectID;
  }, getWeakData: function(i, l) {
    if (!X(i, r)) {
      if (!o(i))
        return !0;
      if (!l)
        return !1;
      a(i);
    }
    return i[r].weakData;
  }, onFreeze: function(i) {
    return hd && s.REQUIRED && o(i) && !X(i, r) && a(i), i;
  } };
  Ur[r] = !0;
}), Gt = function(e, t) {
  this.stopped = e, this.result = t;
}, Ha = function(e, t, r) {
  var n, o, a, s, i, l, c, u = r && r.that, f = !(!r || !r.AS_ENTRIES), p = !(!r || !r.IS_ITERATOR), d = !(!r || !r.INTERRUPTED), h = pr(t, u, 1 + f + d), g = function(y) {
    return n && In(n), new Gt(!0, y);
  }, v = function(y) {
    return f ? (ue(y), d ? h(y[0], y[1], g) : h(y[0], y[1])) : d ? h(y, g) : h(y);
  };
  if (p)
    n = e;
  else {
    if (typeof (o = ol(e)) != "function")
      throw TypeError("Target is not iterable");
    if (nl(o)) {
      for (a = 0, s = ge(e.length); s > a; a++)
        if ((i = v(e[a])) && i instanceof Gt)
          return i;
      return new Gt(!1);
    }
    n = o.call(e);
  }
  for (l = n.next; !(c = l.call(n)).done; ) {
    try {
      i = v(c.value);
    } catch (y) {
      throw In(n), y;
    }
    if (typeof i == "object" && i && i instanceof Gt)
      return i;
  }
  return new Gt(!1);
}, La = function(e, t, r) {
  if (!(e instanceof t))
    throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
  return e;
}, vd = Ie.f, Da = K("toStringTag"), Hn = function(e, t, r) {
  e && !X(e = r ? e : e.prototype, Da) && vd(e, Da, { configurable: !0, value: t });
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
}() : void 0), Ba = function(e, t, r) {
  for (var n in t)
    We(e, n, t[n], r);
  return e;
}, gd = !V(function() {
  function e() {
  }
  return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
}), Na = oo("IE_PROTO"), yd = Object.prototype, Dr = gd ? Object.getPrototypeOf : function(e) {
  return e = He(e), X(e, Na) ? e[Na] : typeof e.constructor == "function" && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? yd : null;
}, gn = K("iterator"), ul = !1;
[].keys && ("next" in (Ia = [].keys()) ? (ja = Dr(Dr(Ia))) !== Object.prototype && (Ye = ja) : ul = !0), (Ye == null || V(function() {
  var e = {};
  return Ye[gn].call(e) !== e;
})) && (Ye = {}), X(Ye, gn) || be(Ye, gn, function() {
  return this;
});
var fo = { IteratorPrototype: Ye, BUGGY_SAFARI_ITERATORS: ul }, md = fo.IteratorPrototype, bd = function() {
  return this;
}, yn = fo.IteratorPrototype, wr = fo.BUGGY_SAFARI_ITERATORS, Ut = K("iterator"), _d = function() {
  return this;
}, po = function(e, t, r, n, o, a, s) {
  (function(y, C, x) {
    var S = C + " Iterator";
    y.prototype = co(md, { next: Wr(1, x) }), Hn(y, S, !1), Pt[S] = bd;
  })(r, t, n);
  var i, l, c, u = function(y) {
    if (y === o && g)
      return g;
    if (!wr && y in d)
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
  }, f = t + " Iterator", p = !1, d = e.prototype, h = d[Ut] || d["@@iterator"] || o && d[o], g = !wr && h || u(o), v = t == "Array" && d.entries || h;
  if (v && (i = Dr(v.call(new e())), yn !== Object.prototype && i.next && (Dr(i) !== yn && (Lr ? Lr(i, yn) : typeof i[Ut] != "function" && be(i, Ut, _d)), Hn(i, f, !0))), o == "values" && h && h.name !== "values" && (p = !0, g = function() {
    return h.call(this);
  }), d[Ut] !== g && be(d, Ut, g), Pt[t] = g, o)
    if (l = { values: u("values"), keys: a ? g : u("keys"), entries: u("entries") }, s)
      for (c in l)
        (wr || p || !(c in d)) && We(d, c, l[c]);
    else
      le({ target: t, proto: !0, forced: wr || p }, l);
  return l;
}, Va = K("species"), Cd = Ie.f, Fa = sl.fastKey, za = ze.set, mn = ze.getterFor;
(function(e, t, r) {
  var n = e.indexOf("Map") !== -1, o = e.indexOf("Weak") !== -1, a = n ? "set" : "add", s = ee[e], i = s && s.prototype, l = s, c = {}, u = function(v) {
    var y = i[v];
    We(i, v, v == "add" ? function(C) {
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
  if (Tn(e, typeof s != "function" || !(o || i.forEach && !V(function() {
    new s().entries().next();
  }))))
    l = r.getConstructor(t, e, n, a), sl.REQUIRED = !0;
  else if (Tn(e, !0)) {
    var f = new l(), p = f[a](o ? {} : -0, 1) != f, d = V(function() {
      f.has(1);
    }), h = ll(function(v) {
      new s(v);
    }), g = !o && V(function() {
      for (var v = new s(), y = 5; y--; )
        v[a](y, y);
      return !v.has(-0);
    });
    h || ((l = t(function(v, y) {
      La(v, l, e);
      var C = function(x, S, T) {
        var $, R;
        return Lr && typeof ($ = S.constructor) == "function" && $ !== T && re(R = $.prototype) && R !== T.prototype && Lr(x, R), x;
      }(new s(), v, l);
      return y != null && Ha(y, C[a], { that: C, AS_ENTRIES: n }), C;
    })).prototype = i, i.constructor = l), (d || g) && (u("delete"), u("has"), n && u("get")), (g || p) && u(a), o && i.clear && delete i.clear;
  }
  c[e] = l, le({ global: !0, forced: l != s }, c), Hn(l, e), o || r.setStrong(l, e, n);
})("Set", function(e) {
  return function() {
    return e(this, arguments.length ? arguments[0] : void 0);
  };
}, { getConstructor: function(e, t, r, n) {
  var o = e(function(l, c) {
    La(l, o, t), za(l, { type: t, index: co(null), first: void 0, last: void 0, size: 0 }), ye || (l.size = 0), c != null && Ha(c, l[n], { that: l, AS_ENTRIES: r });
  }), a = mn(t), s = function(l, c, u) {
    var f, p, d = a(l), h = i(l, c);
    return h ? h.value = u : (d.last = h = { index: p = Fa(c, !0), key: c, value: u, previous: f = d.last, next: void 0, removed: !1 }, d.first || (d.first = h), f && (f.next = h), ye ? d.size++ : l.size++, p !== "F" && (d.index[p] = h)), l;
  }, i = function(l, c) {
    var u, f = a(l), p = Fa(c);
    if (p !== "F")
      return f.index[p];
    for (u = f.first; u; u = u.next)
      if (u.key == c)
        return u;
  };
  return Ba(o.prototype, { clear: function() {
    for (var l = a(this), c = l.index, u = l.first; u; )
      u.removed = !0, u.previous && (u.previous = u.previous.next = void 0), delete c[u.index], u = u.next;
    l.first = l.last = void 0, ye ? l.size = 0 : this.size = 0;
  }, delete: function(l) {
    var c = this, u = a(c), f = i(c, l);
    if (f) {
      var p = f.next, d = f.previous;
      delete u.index[f.index], f.removed = !0, d && (d.next = p), p && (p.previous = d), u.first == f && (u.first = p), u.last == f && (u.last = d), ye ? u.size-- : c.size--;
    }
    return !!f;
  }, forEach: function(l) {
    for (var c, u = a(this), f = pr(l, arguments.length > 1 ? arguments[1] : void 0, 3); c = c ? c.next : u.first; )
      for (f(c.value, c.key, this); c && c.removed; )
        c = c.previous;
  }, has: function(l) {
    return !!i(this, l);
  } }), Ba(o.prototype, r ? { get: function(l) {
    var c = i(this, l);
    return c && c.value;
  }, set: function(l, c) {
    return s(this, l === 0 ? 0 : l, c);
  } } : { add: function(l) {
    return s(this, l = l === 0 ? 0 : l, l);
  } }), ye && Cd(o.prototype, "size", { get: function() {
    return a(this).size;
  } }), o;
}, setStrong: function(e, t, r) {
  var n = t + " Iterator", o = mn(t), a = mn(n);
  po(e, t, function(s, i) {
    za(this, { type: n, target: s, state: o(s), kind: i, last: void 0 });
  }, function() {
    for (var s = a(this), i = s.kind, l = s.last; l && l.removed; )
      l = l.previous;
    return s.target && (s.last = l = l ? l.next : s.state.first) ? i == "keys" ? { value: l.key, done: !1 } : i == "values" ? { value: l.value, done: !1 } : { value: [l.key, l.value], done: !1 } : (s.target = void 0, { value: void 0, done: !0 });
  }, r ? "entries" : "values", !r, !0), function(s) {
    var i = Kr(s), l = Ie.f;
    ye && i && !i[Va] && l(i, Va, { configurable: !0, get: function() {
      return this;
    } });
  }(t);
} });
var wd = Yi.charAt, Sd = ze.set, xd = ze.getterFor("String Iterator");
po(String, "String", function(e) {
  Sd(this, { type: "String Iterator", string: String(e), index: 0 });
}, function() {
  var e, t = xd(this), r = t.string, n = t.index;
  return n >= r.length ? { value: void 0, done: !0 } : (e = wd(r, n), t.index += e.length, { value: e, done: !1 });
});
var Wa = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 }, Od = ze.set, Ad = ze.getterFor("Array Iterator"), Xt = po(Array, "Array", function(e, t) {
  Od(this, { type: "Array Iterator", target: Ht(e), index: 0, kind: t });
}, function() {
  var e = Ad(this), t = e.target, r = e.kind, n = e.index++;
  return !t || n >= t.length ? (e.target = void 0, { value: void 0, done: !0 }) : r == "keys" ? { value: n, done: !1 } : r == "values" ? { value: t[n], done: !1 } : { value: [n, t[n]], done: !1 };
}, "values");
Pt.Arguments = Pt.Array, _t("keys"), _t("values"), _t("entries");
var bn = K("iterator"), Ga = K("toStringTag"), _n = Xt.values;
for (var Cn in Wa) {
  var Ua = ee[Cn], Me = Ua && Ua.prototype;
  if (Me) {
    if (Me[bn] !== _n)
      try {
        be(Me, bn, _n);
      } catch {
        Me[bn] = _n;
      }
    if (Me[Ga] || be(Me, Ga, Cn), Wa[Cn]) {
      for (var yt in Xt)
        if (Me[yt] !== Xt[yt])
          try {
            be(Me, yt, Xt[yt]);
          } catch {
            Me[yt] = Xt[yt];
          }
    }
  }
}
(function() {
  function e() {
    lt(this, e);
  }
  return st(e, null, [{ key: "deduplicate", value: function(t) {
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
  return st(e, null, [{ key: "today", value: function() {
    return /* @__PURE__ */ new Date();
  } }]), e;
})();
(function() {
  function e() {
    lt(this, e);
  }
  return st(e, null, [{ key: "range", value: function(t, r, n) {
    return Math.min(Math.max(t, r), n);
  } }, { key: "clamp", value: function(t, r, n) {
    return r < n ? t < r ? r : t > n ? n : t : t < n ? n : t > r ? r : t;
  } }]), e;
})();
var cl = typeof global == "object" && global && global.Object === Object && global, kd = typeof self == "object" && self && self.Object === Object && self, Bt = cl || kd || Function("return this")(), Br = Bt.Symbol, fl = Object.prototype, $d = fl.hasOwnProperty, Ed = fl.toString, Kt = Br ? Br.toStringTag : void 0;
function Td(e) {
  var t = $d.call(e, Kt), r = e[Kt];
  try {
    e[Kt] = void 0;
    var n = !0;
  } catch {
  }
  var o = Ed.call(e);
  return n && (t ? e[Kt] = r : delete e[Kt]), o;
}
var Md = Object.prototype, Rd = Md.toString;
function Pd(e) {
  return Rd.call(e);
}
var jd = "[object Null]", Id = "[object Undefined]", Ka = Br ? Br.toStringTag : void 0;
function Yr(e) {
  return e == null ? e === void 0 ? Id : jd : Ka && Ka in Object(e) ? Td(e) : Pd(e);
}
function hr(e) {
  return e != null && typeof e == "object";
}
var Ln = Array.isArray;
function ut(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function dl(e) {
  return e;
}
var Hd = "[object AsyncFunction]", Ld = "[object Function]", Dd = "[object GeneratorFunction]", Bd = "[object Proxy]";
function ho(e) {
  if (!ut(e))
    return !1;
  var t = Yr(e);
  return t == Ld || t == Dd || t == Hd || t == Bd;
}
var wn = Bt["__core-js_shared__"], qa = function() {
  var e = /[^.]+$/.exec(wn && wn.keys && wn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Nd(e) {
  return !!qa && qa in e;
}
var Vd = Function.prototype, Fd = Vd.toString;
function zd(e) {
  if (e != null) {
    try {
      return Fd.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Wd = /[\\^$.*+?()[\]{}|]/g, Gd = /^\[object .+?Constructor\]$/, Ud = Function.prototype, Kd = Object.prototype, qd = Ud.toString, Yd = Kd.hasOwnProperty, Xd = RegExp(
  "^" + qd.call(Yd).replace(Wd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Jd(e) {
  if (!ut(e) || Nd(e))
    return !1;
  var t = ho(e) ? Xd : Gd;
  return t.test(zd(e));
}
function Zd(e, t) {
  return e == null ? void 0 : e[t];
}
function vo(e, t) {
  var r = Zd(e, t);
  return Jd(r) ? r : void 0;
}
var Ya = Object.create, Qd = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!ut(t))
      return {};
    if (Ya)
      return Ya(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function ep(e, t, r) {
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
function tp(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var rp = 800, np = 16, op = Date.now;
function ap(e) {
  var t = 0, r = 0;
  return function() {
    var n = op(), o = np - (n - r);
    if (r = n, o > 0) {
      if (++t >= rp)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function ip(e) {
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
    value: ip(t),
    writable: !0
  });
} : dl;
const sp = lp;
var up = ap(sp), cp = 9007199254740991, fp = /^(?:0|[1-9]\d*)$/;
function pl(e, t) {
  var r = typeof e;
  return t = t ?? cp, !!t && (r == "number" || r != "symbol" && fp.test(e)) && e > -1 && e % 1 == 0 && e < t;
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
var dp = Object.prototype, pp = dp.hasOwnProperty;
function hp(e, t, r) {
  var n = e[t];
  (!(pp.call(e, t) && Xr(n, r)) || r === void 0 && !(t in e)) && go(e, t, r);
}
function vp(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var a = -1, s = t.length; ++a < s; ) {
    var i = t[a], l = n ? n(r[i], e[i], i, r, e) : void 0;
    l === void 0 && (l = e[i]), o ? go(r, i, l) : hp(r, i, l);
  }
  return r;
}
var Xa = Math.max;
function gp(e, t, r) {
  return t = Xa(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, o = -1, a = Xa(n.length - t, 0), s = Array(a); ++o < a; )
      s[o] = n[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = n[o];
    return i[t] = r(s), ep(e, this, i);
  };
}
function yp(e, t) {
  return up(gp(e, t, dl), e + "");
}
var mp = 9007199254740991;
function hl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= mp;
}
function yo(e) {
  return e != null && hl(e.length) && !ho(e);
}
function bp(e, t, r) {
  if (!ut(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? yo(r) && pl(t, r.length) : n == "string" && t in r) ? Xr(r[t], e) : !1;
}
function _p(e) {
  return yp(function(t, r) {
    var n = -1, o = r.length, a = o > 1 ? r[o - 1] : void 0, s = o > 2 ? r[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, s && bp(r[0], r[1], s) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++n < o; ) {
      var i = r[n];
      i && e(t, i, n, a);
    }
    return t;
  });
}
var Cp = Object.prototype;
function vl(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Cp;
  return e === r;
}
function wp(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Sp = "[object Arguments]";
function Ja(e) {
  return hr(e) && Yr(e) == Sp;
}
var gl = Object.prototype, xp = gl.hasOwnProperty, Op = gl.propertyIsEnumerable, Ap = Ja(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ja : function(e) {
  return hr(e) && xp.call(e, "callee") && !Op.call(e, "callee");
};
const Dn = Ap;
function kp() {
  return !1;
}
var yl = typeof exports == "object" && exports && !exports.nodeType && exports, Za = yl && typeof module == "object" && module && !module.nodeType && module, $p = Za && Za.exports === yl, Qa = $p ? Bt.Buffer : void 0, Ep = Qa ? Qa.isBuffer : void 0, ml = Ep || kp, Tp = "[object Arguments]", Mp = "[object Array]", Rp = "[object Boolean]", Pp = "[object Date]", jp = "[object Error]", Ip = "[object Function]", Hp = "[object Map]", Lp = "[object Number]", Dp = "[object Object]", Bp = "[object RegExp]", Np = "[object Set]", Vp = "[object String]", Fp = "[object WeakMap]", zp = "[object ArrayBuffer]", Wp = "[object DataView]", Gp = "[object Float32Array]", Up = "[object Float64Array]", Kp = "[object Int8Array]", qp = "[object Int16Array]", Yp = "[object Int32Array]", Xp = "[object Uint8Array]", Jp = "[object Uint8ClampedArray]", Zp = "[object Uint16Array]", Qp = "[object Uint32Array]", N = {};
N[Gp] = N[Up] = N[Kp] = N[qp] = N[Yp] = N[Xp] = N[Jp] = N[Zp] = N[Qp] = !0;
N[Tp] = N[Mp] = N[zp] = N[Rp] = N[Wp] = N[Pp] = N[jp] = N[Ip] = N[Hp] = N[Lp] = N[Dp] = N[Bp] = N[Np] = N[Vp] = N[Fp] = !1;
function eh(e) {
  return hr(e) && hl(e.length) && !!N[Yr(e)];
}
function th(e) {
  return function(t) {
    return e(t);
  };
}
var bl = typeof exports == "object" && exports && !exports.nodeType && exports, nr = bl && typeof module == "object" && module && !module.nodeType && module, rh = nr && nr.exports === bl, Sn = rh && cl.process, ei = function() {
  try {
    var e = nr && nr.require && nr.require("util").types;
    return e || Sn && Sn.binding && Sn.binding("util");
  } catch {
  }
}(), ti = ei && ei.isTypedArray, _l = ti ? th(ti) : eh, nh = Object.prototype, oh = nh.hasOwnProperty;
function ah(e, t) {
  var r = Ln(e), n = !r && Dn(e), o = !r && !n && ml(e), a = !r && !n && !o && _l(e), s = r || n || o || a, i = s ? wp(e.length, String) : [], l = i.length;
  for (var c in e)
    (t || oh.call(e, c)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    pl(c, l))) && i.push(c);
  return i;
}
function ih(e, t) {
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
var sh = Object.prototype, uh = sh.hasOwnProperty;
function ch(e) {
  if (!ut(e))
    return lh(e);
  var t = vl(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !uh.call(e, n)) || r.push(n);
  return r;
}
function Cl(e) {
  return yo(e) ? ah(e, !0) : ch(e);
}
var ur = vo(Object, "create");
function fh() {
  this.__data__ = ur ? ur(null) : {}, this.size = 0;
}
function dh(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ph = "__lodash_hash_undefined__", hh = Object.prototype, vh = hh.hasOwnProperty;
function gh(e) {
  var t = this.__data__;
  if (ur) {
    var r = t[e];
    return r === ph ? void 0 : r;
  }
  return vh.call(t, e) ? t[e] : void 0;
}
var yh = Object.prototype, mh = yh.hasOwnProperty;
function bh(e) {
  var t = this.__data__;
  return ur ? t[e] !== void 0 : mh.call(t, e);
}
var _h = "__lodash_hash_undefined__";
function Ch(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ur && t === void 0 ? _h : t, this;
}
function tt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
tt.prototype.clear = fh;
tt.prototype.delete = dh;
tt.prototype.get = gh;
tt.prototype.has = bh;
tt.prototype.set = Ch;
function wh() {
  this.__data__ = [], this.size = 0;
}
function Jr(e, t) {
  for (var r = e.length; r--; )
    if (Xr(e[r][0], t))
      return r;
  return -1;
}
var Sh = Array.prototype, xh = Sh.splice;
function Oh(e) {
  var t = this.__data__, r = Jr(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : xh.call(t, r, 1), --this.size, !0;
}
function Ah(e) {
  var t = this.__data__, r = Jr(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function kh(e) {
  return Jr(this.__data__, e) > -1;
}
function $h(e, t) {
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
Le.prototype.clear = wh;
Le.prototype.delete = Oh;
Le.prototype.get = Ah;
Le.prototype.has = kh;
Le.prototype.set = $h;
var wl = vo(Bt, "Map");
function Eh() {
  this.size = 0, this.__data__ = {
    hash: new tt(),
    map: new (wl || Le)(),
    string: new tt()
  };
}
function Th(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Zr(e, t) {
  var r = e.__data__;
  return Th(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Mh(e) {
  var t = Zr(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Rh(e) {
  return Zr(this, e).get(e);
}
function Ph(e) {
  return Zr(this, e).has(e);
}
function jh(e, t) {
  var r = Zr(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function Nt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Nt.prototype.clear = Eh;
Nt.prototype.delete = Mh;
Nt.prototype.get = Rh;
Nt.prototype.has = Ph;
Nt.prototype.set = jh;
var Sl = ih(Object.getPrototypeOf, Object), Ih = "[object Object]", Hh = Function.prototype, Lh = Object.prototype, xl = Hh.toString, Dh = Lh.hasOwnProperty, Bh = xl.call(Object);
function Nh(e) {
  if (!hr(e) || Yr(e) != Ih)
    return !1;
  var t = Sl(e);
  if (t === null)
    return !0;
  var r = Dh.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && xl.call(r) == Bh;
}
function Vh() {
  this.__data__ = new Le(), this.size = 0;
}
function Fh(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function zh(e) {
  return this.__data__.get(e);
}
function Wh(e) {
  return this.__data__.has(e);
}
var Gh = 200;
function Uh(e, t) {
  var r = this.__data__;
  if (r instanceof Le) {
    var n = r.__data__;
    if (!wl || n.length < Gh - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Nt(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Vt(e) {
  var t = this.__data__ = new Le(e);
  this.size = t.size;
}
Vt.prototype.clear = Vh;
Vt.prototype.delete = Fh;
Vt.prototype.get = zh;
Vt.prototype.has = Wh;
Vt.prototype.set = Uh;
var Ol = typeof exports == "object" && exports && !exports.nodeType && exports, ri = Ol && typeof module == "object" && module && !module.nodeType && module, Kh = ri && ri.exports === Ol, ni = Kh ? Bt.Buffer : void 0, oi = ni ? ni.allocUnsafe : void 0;
function qh(e, t) {
  if (t)
    return e.slice();
  var r = e.length, n = oi ? oi(r) : new e.constructor(r);
  return e.copy(n), n;
}
var ai = Bt.Uint8Array;
function Yh(e) {
  var t = new e.constructor(e.byteLength);
  return new ai(t).set(new ai(e)), t;
}
function Xh(e, t) {
  var r = t ? Yh(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
function Jh(e) {
  return typeof e.constructor == "function" && !vl(e) ? Qd(Sl(e)) : {};
}
function Zh(e) {
  return function(t, r, n) {
    for (var o = -1, a = Object(t), s = n(t), i = s.length; i--; ) {
      var l = s[e ? i : ++o];
      if (r(a[l], l, a) === !1)
        break;
    }
    return t;
  };
}
var Qh = Zh();
function Bn(e, t, r) {
  (r !== void 0 && !Xr(e[t], r) || r === void 0 && !(t in e)) && go(e, t, r);
}
function ev(e) {
  return hr(e) && yo(e);
}
function Nn(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function tv(e) {
  return vp(e, Cl(e));
}
function rv(e, t, r, n, o, a, s) {
  var i = Nn(e, r), l = Nn(t, r), c = s.get(l);
  if (c) {
    Bn(e, r, c);
    return;
  }
  var u = a ? a(i, l, r + "", e, t, s) : void 0, f = u === void 0;
  if (f) {
    var p = Ln(l), d = !p && ml(l), h = !p && !d && _l(l);
    u = l, p || d || h ? Ln(i) ? u = i : ev(i) ? u = tp(i) : d ? (f = !1, u = qh(l, !0)) : h ? (f = !1, u = Xh(l, !0)) : u = [] : Nh(l) || Dn(l) ? (u = i, Dn(i) ? u = tv(i) : (!ut(i) || ho(i)) && (u = Jh(l))) : f = !1;
  }
  f && (s.set(l, u), o(u, l, n, a, s), s.delete(l)), Bn(e, r, u);
}
function Al(e, t, r, n, o) {
  e !== t && Qh(t, function(a, s) {
    if (o || (o = new Vt()), ut(a))
      rv(e, t, s, r, Al, n, o);
    else {
      var i = n ? n(Nn(e, s), a, s + "", e, t, o) : void 0;
      i === void 0 && (i = a), Bn(e, s, i);
    }
  }, Cl);
}
var nv = _p(function(e, t, r) {
  Al(e, t, r);
});
const Qr = nv;
var ov = Object.defineProperty, av = (e, t, r) => t in e ? ov(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, oe = (e, t, r) => (av(e, typeof t != "symbol" ? t + "" : t, r), r);
const q = (e) => Math.round(e * 100) / 100;
class G {
  constructor(t) {
    oe(this, "instance"), oe(this, "alphaValue", 0), oe(this, "redValue", 0), oe(this, "greenValue", 0), oe(this, "blueValue", 0), oe(this, "hueValue", 0), oe(this, "saturationValue", 0), oe(this, "brightnessValue", 0), oe(this, "hslSaturationValue", 0), oe(this, "lightnessValue", 0), oe(this, "initAlpha", () => {
      const r = this.instance.getAlpha();
      this.alphaValue = Math.min(1, r) * 100;
    }), oe(this, "initLightness", () => {
      const { s: r, l: n } = this.instance.toHsl();
      this.hslSaturationValue = q(r), this.lightnessValue = q(n);
    }), oe(this, "initRgb", () => {
      const { r, g: n, b: o } = this.instance.toRgb();
      this.redValue = q(r), this.greenValue = q(n), this.blueValue = q(o);
    }), oe(this, "initHsb", () => {
      const { h: r, s: n, v: o } = this.instance.toHsv();
      this.hueValue = Math.min(360, Math.ceil(r)), this.saturationValue = q(n), this.brightnessValue = q(o);
    }), oe(this, "toHexString", () => this.instance.toHexString()), oe(this, "toRgbString", () => this.instance.toRgbString()), this.instance = w(t), this.initRgb(), this.initHsb(), this.initLightness(), this.initAlpha();
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
function ii(e, t, r, n) {
  return `rgba(${[e, t, r, n / 100].join(",")})`;
}
const xn = (e, t, r) => t < r ? e < t ? t : e > r ? r : e : e < r ? r : e > t ? t : e, mo = "color-history", bo = 8, we = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, o] of t)
    r[n] = o;
  return r;
}, iv = U({
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
    const s = W(() => {
      const f = ii(a.red, a.green, a.blue, 0), p = ii(a.red, a.green, a.blue, 100);
      return {
        background: `linear-gradient(to right, ${f} , ${p})`
      };
    }), i = () => {
      if (r.value && n.value) {
        const f = a.alpha / 100, p = r.value.getBoundingClientRect(), d = n.value.offsetWidth;
        return Math.round(f * (p.width - d) + d / 2);
      }
      return 0;
    }, l = W(() => ({
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
    return ot(() => {
      const f = {
        drag: (p) => {
          u(p);
        },
        end: (p) => {
          u(p);
        }
      };
      r.value && n.value && Rt.triggerDragEvent(r.value, f);
    }), { barElement: r, cursorElement: n, getCursorStyle: l, getBackgroundStyle: s, onClickSider: c };
  }
}), lv = (e) => (jt("data-v-18925ba6"), e = e(), It(), e), sv = /* @__PURE__ */ lv(() => /* @__PURE__ */ _("div", { class: "vc-alpha-slider__bar-handle" }, null, -1)), uv = [
  sv
];
function cv(e, t, r, n, o, a) {
  return k(), P("div", {
    class: ne(["vc-alpha-slider", "transparent", { "small-slider": e.size === "small" }])
  }, [
    _("div", {
      ref: "barElement",
      class: "vc-alpha-slider__bar",
      style: J(e.getBackgroundStyle),
      onClick: t[0] || (t[0] = (...s) => e.onClickSider && e.onClickSider(...s))
    }, [
      _("div", {
        class: ne(["vc-alpha-slider__bar-pointer", { "small-bar": e.size === "small" }]),
        ref: "cursorElement",
        style: J(e.getCursorStyle)
      }, uv, 6)
    ], 4)
  ], 2);
}
const _o = /* @__PURE__ */ we(iv, [["render", cv], ["__scopeId", "data-v-18925ba6"]]), fv = [
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
], dv = U({
  name: "Palette",
  emits: ["change"],
  setup(e, { emit: t }) {
    return { palettes: fv, computedBgStyle: (r) => r === "transparent" ? r : r === "advance" ? {} : { background: w(r).toRgbString() }, onColorChange: (r) => {
      t("change", r);
    } };
  }
}), pv = { class: "vc-compact" }, hv = ["onClick"];
function vv(e, t, r, n, o, a) {
  return k(), P("div", pv, [
    (k(!0), P(Ve, null, Ct(e.palettes, (s, i) => (k(), P("div", {
      key: i,
      class: "vc-compact__row"
    }, [
      (k(!0), P(Ve, null, Ct(s, (l, c) => (k(), P("div", {
        key: c,
        class: "vc-compact__color-cube--wrap",
        onClick: (u) => e.onColorChange(l)
      }, [
        _("div", {
          class: ne([
            "vc-compact__color_cube",
            {
              advance: l === "advance",
              transparent: l === "transparent"
            }
          ]),
          style: J(e.computedBgStyle(l))
        }, null, 6)
      ], 8, hv))), 128))
    ]))), 128))
  ]);
}
const kl = /* @__PURE__ */ we(dv, [["render", vv], ["__scopeId", "data-v-b969fd48"]]), gv = U({
  name: "Board",
  props: {
    color: M.instanceOf(G),
    round: M.bool.def(!1),
    hide: M.bool.def(!0)
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    var r, n, o;
    const a = di(), s = {
      h: ((r = e.color) == null ? void 0 : r.hue) || 0,
      s: 1,
      v: 1
    }, i = new G(s).toHexString(), l = Oe({
      hueColor: i,
      saturation: ((n = e.color) == null ? void 0 : n.saturation) || 0,
      brightness: ((o = e.color) == null ? void 0 : o.brightness) || 0
    }), c = B(0), u = B(0), f = B(), p = B(), d = W(() => ({
      top: c.value + "px",
      left: u.value + "px"
    })), h = () => {
      if (a) {
        const y = a.vnode.el;
        u.value = l.saturation * (y == null ? void 0 : y.clientWidth), c.value = (1 - l.brightness) * (y == null ? void 0 : y.clientHeight);
      }
    }, g = (y) => {
      y.target !== p.value && v(y);
    }, v = (y) => {
      if (a) {
        const C = a.vnode.el, x = C == null ? void 0 : C.getBoundingClientRect();
        let S = y.clientX - x.left, T = y.clientY - x.top;
        S = xn(S, 0, x.width), T = xn(T, 0, x.height);
        const $ = S / x.width, R = xn(-(T / x.height) + 1, 0, 1);
        u.value = S, c.value = T, l.saturation = $, l.brightness = R, t("change", $, R);
      }
    };
    return ot(() => {
      a && a.vnode.el && f.value && (Rt.triggerDragEvent(f.value, {
        drag: (y) => {
          v(y);
        },
        end: (y) => {
          v(y);
        }
      }), Fn(() => {
        h();
      }));
    }), ae(
      () => e.color,
      (y) => {
        Qr(l, {
          hueColor: new G({ h: y.hue, s: 1, v: 1 }).toHexString(),
          saturation: y.saturation,
          brightness: y.brightness
        }), h();
      },
      { deep: !0 }
    ), { state: l, cursorElement: f, getCursorStyle: d, onClickBoard: g };
  }
}), Co = (e) => (jt("data-v-058e5db2"), e = e(), It(), e), yv = /* @__PURE__ */ Co(() => /* @__PURE__ */ _("div", { class: "vc-saturation__white" }, null, -1)), mv = /* @__PURE__ */ Co(() => /* @__PURE__ */ _("div", { class: "vc-saturation__black" }, null, -1)), bv = /* @__PURE__ */ Co(() => /* @__PURE__ */ _("div", null, null, -1)), _v = [
  bv
];
function Cv(e, t, r, n, o, a) {
  return k(), P("div", {
    ref: "boardElement",
    class: ne(["vc-saturation", { "vc-saturation__chrome": e.round, "vc-saturation__hidden": e.hide }]),
    style: J({ backgroundColor: e.state.hueColor }),
    onClick: t[0] || (t[0] = (...s) => e.onClickBoard && e.onClickBoard(...s))
  }, [
    yv,
    mv,
    _("div", {
      class: "vc-saturation__cursor",
      ref: "cursorElement",
      style: J(e.getCursorStyle)
    }, _v, 4)
  ], 6);
}
const wo = /* @__PURE__ */ we(gv, [["render", Cv], ["__scopeId", "data-v-058e5db2"]]), wv = U({
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
    const s = () => {
      if (r.value && n.value) {
        const u = r.value.getBoundingClientRect(), f = n.value.offsetWidth;
        return a.hue === 360 ? u.width - f / 2 : a.hue % 360 * (u.width - f) / 360 + f / 2;
      }
      return 0;
    }, i = W(() => ({
      left: s() + "px",
      top: 0
    })), l = (u) => {
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
    return ot(() => {
      const u = {
        drag: (f) => {
          c(f);
        },
        end: (f) => {
          c(f);
        }
      };
      r.value && n.value && Rt.triggerDragEvent(r.value, u);
    }), { barElement: r, cursorElement: n, getCursorStyle: i, onClickSider: l };
  }
}), Sv = (e) => (jt("data-v-e1a08576"), e = e(), It(), e), xv = /* @__PURE__ */ Sv(() => /* @__PURE__ */ _("div", { class: "vc-hue-slider__bar-handle" }, null, -1)), Ov = [
  xv
];
function Av(e, t, r, n, o, a) {
  return k(), P("div", {
    class: ne(["vc-hue-slider", { "small-slider": e.size === "small" }])
  }, [
    _("div", {
      ref: "barElement",
      class: "vc-hue-slider__bar",
      onClick: t[0] || (t[0] = (...s) => e.onClickSider && e.onClickSider(...s))
    }, [
      _("div", {
        class: ne(["vc-hue-slider__bar-pointer", { "small-bar": e.size === "small" }]),
        ref: "cursorElement",
        style: J(e.getCursorStyle)
      }, Ov, 6)
    ], 512)
  ], 2);
}
const So = /* @__PURE__ */ we(wv, [["render", Av], ["__scopeId", "data-v-e1a08576"]]), kv = U({
  name: "Lightness",
  props: {
    color: M.instanceOf(G),
    size: M.oneOf(["small", "default"]).def("default")
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const r = B(null), n = B(null);
    let o = e.color || new G();
    const [a, s, i] = o.HSL, l = Oe({
      hue: a,
      saturation: s,
      lightness: i
    });
    Pe(
      () => e.color,
      (h) => {
        if (h) {
          o = h;
          const [g, v, y] = o.HSL;
          Qr(l, {
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
        h: l.hue,
        s: l.saturation,
        l: 0.8
      }).toPercentageRgbString(), g = w({
        h: l.hue,
        s: l.saturation,
        l: 0.6
      }).toPercentageRgbString(), v = w({
        h: l.hue,
        s: l.saturation,
        l: 0.4
      }).toPercentageRgbString(), y = w({
        h: l.hue,
        s: l.saturation,
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
        const h = l.lightness, g = r.value.getBoundingClientRect(), v = n.value.offsetWidth;
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
    return ot(() => {
      const h = {
        drag: (g) => {
          d(g);
        },
        end: (g) => {
          d(g);
        }
      };
      r.value && n.value && Rt.triggerDragEvent(r.value, h);
    }), { barElement: r, cursorElement: n, getCursorStyle: f, getBackgroundStyle: c, onClickSider: p };
  }
}), $v = (e) => (jt("data-v-94a50a9e"), e = e(), It(), e), Ev = /* @__PURE__ */ $v(() => /* @__PURE__ */ _("div", { class: "vc-lightness-slider__bar-handle" }, null, -1)), Tv = [
  Ev
];
function Mv(e, t, r, n, o, a) {
  return k(), P("div", {
    class: ne(["vc-lightness-slider", { "small-slider": e.size === "small" }])
  }, [
    _("div", {
      ref: "barElement",
      class: "vc-lightness-slider__bar",
      style: J(e.getBackgroundStyle),
      onClick: t[0] || (t[0] = (...s) => e.onClickSider && e.onClickSider(...s))
    }, [
      _("div", {
        class: ne(["vc-lightness-slider__bar-pointer", { "small-bar": e.size === "small" }]),
        ref: "cursorElement",
        style: J(e.getCursorStyle)
      }, Tv, 6)
    ], 4)
  ], 2);
}
const $l = /* @__PURE__ */ we(kv, [["render", Mv], ["__scopeId", "data-v-94a50a9e"]]), Rv = U({
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
}), Pv = {
  key: 0,
  class: "vc-colorPicker__record"
}, jv = { class: "color-list" }, Iv = ["onClick"];
function Hv(e, t, r, n, o, a) {
  return e.colors && e.colors.length > 0 ? (k(), P("div", Pv, [
    _("div", jv, [
      (k(!0), P(Ve, null, Ct(e.colors, (s, i) => (k(), P("div", {
        key: i,
        class: ne(["color-item", "transparent", { "color-item__round": e.round }]),
        onClick: (l) => e.onColorSelect(s)
      }, [
        _("div", {
          class: "color-item__display",
          style: J({ backgroundColor: s })
        }, null, 4)
      ], 10, Iv))), 128))
    ])
  ])) : z("", !0);
}
const xo = /* @__PURE__ */ we(Rv, [["render", Hv], ["__scopeId", "data-v-0f657238"]]), Lv = U({
  name: "Display",
  props: {
    color: M.instanceOf(G),
    disableAlpha: M.bool.def(!1)
  },
  emits: ["update:color", "change"],
  setup(e, { emit: t }) {
    var r, n, o, a;
    const s = B("hex"), i = Oe({
      color: e.color,
      hex: (r = e.color) == null ? void 0 : r.hex,
      alpha: Math.floor(((n = e.color) == null ? void 0 : n.alpha) || 100) + "%",
      rgba: (o = e.color) == null ? void 0 : o.RGB,
      previewBgColor: (a = e.color) == null ? void 0 : a.toRgbString()
    }), l = W(() => ({
      background: i.previewBgColor
    })), c = () => {
      s.value = s.value === "rgba" ? "hex" : "rgba";
    }, u = Je((p) => {
      if (!p.target.value)
        return;
      let d = parseInt(p.target.value.replace("%", ""));
      d > 100 && (p.target.value = "100%", d = 100), d < 0 && (p.target.value = "0%", d = 0), isNaN(d) && (p.target.value = "100%", d = 100), !isNaN(d) && i.color && (i.color.alpha = d), t("update:color", i.color), t("change", i.color);
    }, 300), f = Je((p, d) => {
      if (p.target.value) {
        if (s.value === "hex") {
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
    return ae(
      () => e.color,
      (p) => {
        p && (i.color = p, i.alpha = Math.floor(i.color.alpha) + "%", i.hex = i.color.hex, i.rgba = i.color.RGB);
      },
      { deep: !0 }
    ), ae(
      () => i.color,
      () => {
        i.color && (i.previewBgColor = i.color.toRgbString());
      },
      { deep: !0 }
    ), { state: i, getBgColorStyle: l, inputType: s, onInputTypeChange: c, onAlphaBlur: u, onInputChange: f };
  }
}), Dv = { class: "vc-display" }, Bv = { class: "vc-current-color vc-transparent" }, Nv = {
  key: 0,
  style: { display: "flex", flex: "1", gap: "4px", height: "100%" }
}, Vv = { class: "vc-color-input" }, Fv = ["value"], zv = {
  key: 0,
  class: "vc-alpha-input"
}, Wv = ["value"], Gv = {
  key: 1,
  style: { display: "flex", flex: "1", gap: "4px", height: "100%" }
}, Uv = ["value", "onInput"];
function Kv(e, t, r, n, o, a) {
  return k(), P("div", Dv, [
    _("div", Bv, [
      _("div", {
        class: "color-cube",
        style: J(e.getBgColorStyle)
      }, null, 4)
    ]),
    e.inputType === "hex" ? (k(), P("div", Nv, [
      _("div", Vv, [
        _("input", {
          value: e.state.hex,
          onInput: t[0] || (t[0] = (...s) => e.onInputChange && e.onInputChange(...s))
        }, null, 40, Fv)
      ]),
      e.disableAlpha ? z("", !0) : (k(), P("div", zv, [
        _("input", {
          class: "vc-alpha-input__inner",
          value: e.state.alpha,
          onInput: t[1] || (t[1] = (...s) => e.onAlphaBlur && e.onAlphaBlur(...s))
        }, null, 40, Wv)
      ]))
    ])) : e.state.rgba ? (k(), P("div", Gv, [
      (k(!0), P(Ve, null, Ct(e.state.rgba, (s, i) => (k(), P("div", {
        class: "vc-color-input",
        key: i
      }, [
        _("input", {
          value: s,
          onInput: (l) => e.onInputChange(l, i)
        }, null, 40, Uv)
      ]))), 128))
    ])) : z("", !0),
    _("div", {
      class: "vc-input-toggle",
      onClick: t[2] || (t[2] = (...s) => e.onInputTypeChange && e.onInputTypeChange(...s))
    }, ce(e.inputType), 1)
  ]);
}
const Oo = /* @__PURE__ */ we(Lv, [["render", Kv], ["__scopeId", "data-v-80d589ba"]]), qv = U({
  name: "FkColorPicker",
  components: { Display: Oo, Alpha: _o, Palette: kl, Board: wo, Hue: So, Lightness: $l, History: xo },
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
    }), o = B(!1), a = W(() => ({ background: n.rgb })), s = () => {
      o.value = !1, t("advanceChange", !1);
    }, i = Wn(mo, [], {}), l = Je(() => {
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
    return ae(
      () => e.color,
      (g) => {
        g && (n.color = g);
      },
      { deep: !0 }
    ), ae(
      () => n.color,
      () => {
        n.hex = n.color.hex, n.rgb = n.color.toRgbString(), l(), t("update:color", n.color), t("change", n.color);
      },
      { deep: !0 }
    ), {
      state: n,
      advancePanelShow: o,
      onBack: s,
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
}), Yv = (e) => (jt("data-v-0d5bef46"), e = e(), It(), e), Xv = { class: "vc-fk-colorPicker" }, Jv = { class: "vc-fk-colorPicker__inner" }, Zv = { class: "vc-fk-colorPicker__header" }, Qv = /* @__PURE__ */ Yv(() => /* @__PURE__ */ _("div", { class: "back" }, null, -1)), eg = [
  Qv
];
function tg(e, t, r, n, o, a) {
  const s = Y("Palette"), i = Y("Board"), l = Y("Hue"), c = Y("Lightness"), u = Y("Alpha"), f = Y("Display"), p = Y("History");
  return k(), P("div", Xv, [
    _("div", Jv, [
      _("div", Zv, [
        e.advancePanelShow ? (k(), P("span", {
          key: 0,
          style: { cursor: "pointer" },
          onClick: t[0] || (t[0] = (...d) => e.onBack && e.onBack(...d))
        }, eg)) : z("", !0)
      ]),
      e.advancePanelShow ? z("", !0) : (k(), Q(s, {
        key: 0,
        onChange: e.onCompactChange
      }, null, 8, ["onChange"])),
      e.advancePanelShow ? (k(), Q(i, {
        key: 1,
        color: e.state.color,
        onChange: e.onBoardChange
      }, null, 8, ["color", "onChange"])) : z("", !0),
      e.advancePanelShow ? (k(), Q(l, {
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
const li = /* @__PURE__ */ we(qv, [["render", tg], ["__scopeId", "data-v-0d5bef46"]]), rg = U({
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
    }), o = W(() => ({ background: n.rgb })), a = Wn(mo, [], {}), s = Je(() => {
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
    }, l = (f) => {
      n.color.hue = f;
    }, c = (f, p) => {
      n.color.saturation = f, n.color.brightness = p;
    }, u = (f) => {
      f !== "advance" && (n.color.hex = f);
    };
    return ae(
      () => e.color,
      (f) => {
        f && (n.color = f);
      },
      { deep: !0 }
    ), ae(
      () => n.color,
      () => {
        n.hex = n.color.hex, n.rgb = n.color.toRgbString(), s(), t("update:color", n.color), t("change", n.color);
      },
      { deep: !0 }
    ), {
      state: n,
      previewStyle: o,
      historyColors: a,
      onAlphaChange: i,
      onHueChange: l,
      onBoardChange: c,
      onCompactChange: u
    };
  }
}), ng = { class: "vc-chrome-colorPicker" }, og = { class: "vc-chrome-colorPicker-body" }, ag = { class: "chrome-controls" }, ig = { class: "chrome-sliders" };
function lg(e, t, r, n, o, a) {
  const s = Y("Board"), i = Y("Hue"), l = Y("Alpha"), c = Y("Display"), u = Y("History");
  return k(), P("div", ng, [
    Ae(s, {
      round: !0,
      hide: !1,
      color: e.state.color,
      onChange: e.onBoardChange
    }, null, 8, ["color", "onChange"]),
    _("div", og, [
      _("div", ag, [
        _("div", ig, [
          Ae(i, {
            size: "small",
            color: e.state.color,
            onChange: e.onHueChange
          }, null, 8, ["color", "onChange"]),
          e.disableAlpha ? z("", !0) : (k(), Q(l, {
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
const si = /* @__PURE__ */ we(rg, [["render", lg], ["__scopeId", "data-v-33636434"]]), Ao = "Vue3ColorPickerProvider", sg = (e, t) => {
  const r = e.getBoundingClientRect(), n = r.left + r.width / 2, o = r.top + r.height / 2, a = Math.abs(n - t.clientX), s = Math.abs(o - t.clientY), i = Math.sqrt(Math.pow(a, 2) + Math.pow(s, 2)), l = s / i, c = Math.acos(l);
  let u = Math.floor(180 / (Math.PI / c));
  return t.clientX > n && t.clientY > o && (u = 180 - u), t.clientX == n && t.clientY > o && (u = 180), t.clientX > n && t.clientY == o && (u = 90), t.clientX < n && t.clientY > o && (u = 180 + u), t.clientX < n && t.clientY == o && (u = 270), t.clientX < n && t.clientY < o && (u = 360 - u), u;
};
let On = !1;
const ug = (e, t) => {
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
}, cg = {
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
}, fg = U({
  name: "Angle",
  props: cg,
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
    })), s = (i) => {
      r.value && (n.value = sg(r.value, i) % 360, o());
    };
    return fi(() => {
      const i = {
        drag: (l) => {
          s(l);
        },
        end: (l) => {
          s(l);
        }
      };
      r.value && ug(r.value, i);
    }), () => Ae("div", {
      class: "bee-angle"
    }, [Ae("div", {
      class: "bee-angle__round",
      ref: r,
      style: a.value
    }, null)]);
  }
}), dg = U({
  name: "GradientColorPicker",
  components: { Angle: fg, Display: Oo, Alpha: _o, Palette: kl, Board: wo, Hue: So, Lightness: $l, History: xo },
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
    }), n = pi(Ao), o = B(e.pickerType === "chrome"), a = B(), s = B(), i = B();
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
    const l = W({
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
      if (i.value && s.value) {
        const b = r.endColorStop / 100, j = i.value.getBoundingClientRect(), E = s.value.offsetWidth;
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
      if (r.startActive = !1, i.value && s.value) {
        const E = (j = i.value) == null ? void 0 : j.getBoundingClientRect();
        let I = b.clientX - E.left;
        I = Math.max(s.value.offsetWidth / 2, I), I = Math.min(I, E.width - s.value.offsetWidth / 2), r.endColorStop = Math.round(
          (I - s.value.offsetWidth / 2) / (E.width - s.value.offsetWidth) * 100
        ), t("update:endColorStop", r.endColorStop), t("endColorStopChange", r.endColorStop);
      }
    }, h = (b) => {
      const j = b.target, E = parseInt(j.value.replace("°", ""));
      isNaN(E) || (r.angle = E % 360), t("update:angle", r.angle), t("angleChange", r.angle);
    }, g = (b) => {
      r.angle = b, t("update:angle", r.angle), t("angleChange", r.angle);
    }, v = (b) => {
      b === "advance" ? (o.value = !0, t("advanceChange", !0)) : (l.value.hex = b, t("advanceChange", !1)), $();
    }, y = (b) => {
      l.value.alpha = b, $();
    }, C = (b) => {
      l.value.hue = b, $();
    }, x = (b, j) => {
      l.value.saturation = b, l.value.brightness = j, $();
    }, S = (b) => {
      l.value.lightness = b, $();
    }, T = () => {
      $();
    }, $ = () => {
      r.startActive ? (t("update:startColor", r.startColor), t("startColorChange", r.startColor)) : (t("update:endColor", r.endColor), t("endColorChange", r.endColor));
    }, R = () => {
      o.value = !1, t("advanceChange", !1);
    }, L = () => {
      r.type = r.type === "linear" ? "radial" : "linear", t("typeChange", r.type);
    }, m = Wn(mo, [], {}), O = Je(() => {
      if (e.disableHistory)
        return;
      const b = l.value.toRgbString();
      if (m.value = m.value.filter((j) => !w.equals(j, b)), !m.value.includes(b)) {
        for (; m.value.length > bo; )
          m.value.pop();
        m.value.unshift(b);
      }
    }, 500);
    return ot(() => {
      s.value && a.value && (Rt.triggerDragEvent(s.value, {
        drag: (b) => {
          d(b);
        },
        end: (b) => {
          d(b);
        }
      }), Rt.triggerDragEvent(a.value, {
        drag: (b) => {
          p(b);
        },
        end: (b) => {
          p(b);
        }
      }));
    }), ae(
      () => r.startColor,
      (b) => {
        r.startColorRgba = b.toRgbString();
      },
      { deep: !0 }
    ), ae(
      () => r.endColor,
      (b) => {
        r.endColorRgba = b.toRgbString();
      },
      { deep: !0 }
    ), ae(
      () => l.value,
      () => {
        O();
      },
      { deep: !0 }
    ), {
      startGradientRef: a,
      stopGradientRef: s,
      colorRangeRef: i,
      state: r,
      currentColor: l,
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
}), El = (e) => (jt("data-v-431cadee"), e = e(), It(), e), pg = { class: "vc-gradient-picker" }, hg = { class: "vc-gradient-picker__header" }, vg = { class: "vc-gradient__types" }, gg = { class: "vc-gradient-wrap__types" }, yg = { class: "vc-picker-degree-input vc-degree-input" }, mg = { class: "vc-degree-input__control" }, bg = ["value"], _g = { class: "vc-degree-input__panel" }, Cg = { class: "vc-degree-input__disk" }, wg = { class: "vc-gradient-picker__body" }, Sg = {
  class: "vc-color-range",
  ref: "colorRangeRef"
}, xg = { class: "vc-color-range__container" }, Og = { class: "vc-gradient__stop__container" }, Ag = ["title"], kg = /* @__PURE__ */ El(() => /* @__PURE__ */ _("span", { class: "vc-gradient__stop--inner" }, null, -1)), $g = [
  kg
], Eg = ["title"], Tg = /* @__PURE__ */ El(() => /* @__PURE__ */ _("span", { class: "vc-gradient__stop--inner" }, null, -1)), Mg = [
  Tg
];
function Rg(e, t, r, n, o, a) {
  var s, i;
  const l = Y("Angle"), c = Y("Board"), u = Y("Hue"), f = Y("Palette"), p = Y("Lightness"), d = Y("Alpha"), h = Y("Display"), g = Y("History");
  return k(), P("div", pg, [
    _("div", hg, [
      _("div", null, [
        wt(_("div", {
          class: "back",
          style: { cursor: "pointer" },
          onClick: t[0] || (t[0] = (...v) => e.onBack && e.onBack(...v))
        }, null, 512), [
          [Or, e.pickerType === "fk" && e.advancePanelShow]
        ])
      ]),
      _("div", vg, [
        _("div", gg, [
          (k(), P(Ve, null, Ct(["linear", "radial"], (v) => _("div", {
            class: ne(["vc-gradient__type", { active: e.state.type === v }]),
            key: v,
            onClick: t[1] || (t[1] = (...y) => e.onTypeChange && e.onTypeChange(...y))
          }, ce(e.lang ? e.lang[v] : v), 3)), 64))
        ]),
        wt(_("div", yg, [
          _("div", mg, [
            _("input", {
              value: e.state.angle,
              onBlur: t[2] || (t[2] = (...v) => e.onDegreeBlur && e.onDegreeBlur(...v))
            }, null, 40, bg),
            Vl("deg ")
          ]),
          _("div", _g, [
            _("div", Cg, [
              Ae(l, {
                angle: e.state.angle,
                "onUpdate:angle": t[3] || (t[3] = (v) => e.state.angle = v),
                size: 40,
                onChange: e.onDegreeChange
              }, null, 8, ["angle", "onChange"])
            ])
          ])
        ], 512), [
          [Or, e.state.type === "linear"]
        ])
      ])
    ]),
    _("div", wg, [
      _("div", Sg, [
        _("div", xg, [
          _("div", {
            class: "vc-background",
            style: J(e.gradientBg)
          }, null, 4),
          _("div", Og, [
            _("div", {
              class: ne(["vc-gradient__stop", {
                "vc-gradient__stop--current": e.state.startActive
              }]),
              ref: "startGradientRef",
              title: (s = e.lang) == null ? void 0 : s.start,
              style: J({ left: e.getStartColorLeft + "px", backgroundColor: e.state.startColorRgba })
            }, $g, 14, Ag),
            _("div", {
              class: ne(["vc-gradient__stop", {
                "vc-gradient__stop--current": !e.state.startActive
              }]),
              ref: "stopGradientRef",
              title: (i = e.lang) == null ? void 0 : i.end,
              style: J({ left: e.getEndColorLeft + "px", backgroundColor: e.state.endColorRgba })
            }, Mg, 14, Eg)
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
const ui = /* @__PURE__ */ we(dg, [["render", Rg], ["__scopeId", "data-v-431cadee"]]), Pg = U({
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
    }), n = pi(Ao), o = (a) => {
      r.activeKey = a, t("update:activeKey", a), t("change", a);
    };
    return ae(
      () => e.activeKey,
      (a) => {
        r.activeKey = a;
      }
    ), { state: r, onActiveKeyChange: o, lang: n == null ? void 0 : n.lang };
  }
}), jg = { class: "vc-colorpicker--container" }, Ig = {
  key: 0,
  class: "vc-colorpicker--tabs"
}, Hg = { class: "vc-colorpicker--tabs__inner" }, Lg = { class: "vc-btn__content" }, Dg = { class: "vc-btn__content" };
function Bg(e, t, r, n, o, a) {
  var s, i;
  return k(), P("div", {
    class: ne(["vc-colorpicker", e.theme])
  }, [
    _("div", jg, [
      e.showTab ? (k(), P("div", Ig, [
        _("div", Hg, [
          _("div", {
            class: ne([
              "vc-colorpicker--tabs__btn",
              {
                "vc-btn-active": e.state.activeKey === "pure"
              }
            ]),
            onClick: t[0] || (t[0] = (l) => e.onActiveKeyChange("pure"))
          }, [
            _("button", null, [
              _("div", Lg, ce((s = e.lang) == null ? void 0 : s.pure), 1)
            ])
          ], 2),
          _("div", {
            class: ne([
              "vc-colorpicker--tabs__btn",
              {
                "vc-btn-active": e.state.activeKey === "gradient"
              }
            ]),
            onClick: t[1] || (t[1] = (l) => e.onActiveKeyChange("gradient"))
          }, [
            _("button", null, [
              _("div", Dg, ce((i = e.lang) == null ? void 0 : i.gradient), 1)
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
const Ng = /* @__PURE__ */ we(Pg, [["render", Bg], ["__scopeId", "data-v-0492277d"]]), Vg = {
  start: "Start",
  end: "End",
  pure: "Pure",
  gradient: "Gradient",
  linear: "linear",
  radial: "radial"
}, Fg = {
  start: "开始",
  end: "结束",
  pure: "纯色",
  gradient: "渐变",
  linear: "线性",
  radial: "径向"
}, zg = {
  En: Vg,
  "ZH-cn": Fg
}, Wg = {
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
}, Gg = U({
  name: "ColorPicker",
  components: { FkColorPicker: li, ChromeColorPicker: si, GradientColorPicker: ui, WrapContainer: Ng },
  inheritAttrs: !1,
  props: Wg,
  emits: [
    "update:pureColor",
    "pureColorChange",
    "update:gradientColor",
    "gradientColorChange",
    "update:activeKey",
    "activeKeyChange"
  ],
  setup(e, { emit: t }) {
    Nl(Ao, {
      lang: W(() => zg[e.lang || "ZH-cn"])
    });
    const r = Oe({
      pureColor: e.pureColor || "",
      activeKey: e.useType === "gradient" ? "gradient" : e.activeKey,
      //  "pure" | "gradient"
      isAdvanceMode: !1
    }), n = new G("#000"), o = new G("#000"), a = new G(r.pureColor), s = Oe({
      startColor: n,
      endColor: o,
      startColorStop: 0,
      endColorStop: 100,
      angle: 0,
      type: "linear",
      gradientColor: e.gradientColor
    }), i = B(a), l = B(!1), c = B(null), u = B(null);
    let f = null;
    const p = W(() => ({
      background: r.activeKey !== "gradient" ? w(r.pureColor).toRgbString() : s.gradientColor
    })), d = W(() => r.activeKey === "gradient" ? ui.name : e.pickerType === "fk" ? li.name : si.name), h = (m) => {
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
        startColor: s.startColor,
        endColor: s.endColor,
        angle: s.angle,
        type: s.type,
        startColorStop: s.startColorStop,
        endColorStop: s.endColorStop,
        onStartColorChange: (O) => {
          s.startColor = O, x();
        },
        onEndColorChange: (O) => {
          s.endColor = O, x();
        },
        onStartColorStopChange: (O) => {
          s.startColorStop = O, x();
        },
        onEndColorStopChange: (O) => {
          s.endColorStop = O, x();
        },
        onAngleChange: (O) => {
          s.angle = O, x();
        },
        onTypeChange: (O) => {
          s.type = O, x();
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
      l.value = !0, f ? f.update() : T();
    }, y = () => {
      l.value = !1;
    }, C = () => {
      var m, O, b, j;
      try {
        const [E] = Ns(s.gradientColor);
        if (E && E.type.includes("gradient") && E.colorStops.length >= 2) {
          const I = E.colorStops[0], Z = E.colorStops[1];
          s.startColorStop = Number((m = I.length) == null ? void 0 : m.value) || 0, s.endColorStop = Number((O = Z.length) == null ? void 0 : O.value) || 0, E.type === "linear-gradient" && ((b = E.orientation) == null ? void 0 : b.type) === "angular" && (s.angle = Number((j = E.orientation) == null ? void 0 : j.value) || 0), s.type = E.type.split("-")[0];
          const [te, A, H, D] = I.value, [se, De, Ue, ct] = Z.value;
          s.startColor = new G({
            r: Number(te),
            g: Number(A),
            b: Number(H),
            a: Number(D)
          }), s.endColor = new G({
            r: Number(se),
            g: Number(De),
            b: Number(Ue),
            a: Number(ct)
          });
        }
      } catch (E) {
        console.log(`[Parse Color]: ${E}`);
      }
    }, x = Je(() => {
      const m = S();
      try {
        s.gradientColor = Vs(m), t("update:gradientColor", s.gradientColor), t("gradientColorChange", s.gradientColor);
      } catch (O) {
        console.log(O);
      }
    }, e.debounce), S = () => {
      const m = [], O = s.startColor.RGB.map((E) => E.toString()), b = s.endColor.RGB.map((E) => E.toString()), j = [
        {
          type: "rgba",
          value: [O[0], O[1], O[2], O[3]],
          length: { value: s.startColorStop + "", type: "%" }
        },
        {
          type: "rgba",
          value: [b[0], b[1], b[2], b[3]],
          length: { value: s.endColorStop + "", type: "%" }
        }
      ];
      return s.type === "linear" ? m.push({
        type: "linear-gradient",
        orientation: { type: "angular", value: s.angle + "" },
        colorStops: j
      }) : s.type === "radial" && m.push({
        type: "radial-gradient",
        orientation: [{ type: "shape", value: "circle" }],
        colorStops: j
      }), m;
    }, T = () => {
      c.value && u.value && (f = Ku(c.value, u.value, {
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
    }, R = Je(() => {
      t("update:pureColor", r.pureColor), t("pureColorChange", r.pureColor);
    }, e.debounce);
    us(u, () => {
      y();
    });
    const L = (m) => {
      r.activeKey = m, t("update:activeKey", m), t("activeKeyChange", m);
    };
    return ot(() => {
      C();
    }), ae(
      () => e.gradientColor,
      (m) => {
        m != s.gradientColor && (s.gradientColor = m);
      }
    ), ae(
      () => s.gradientColor,
      () => {
        C();
      }
    ), ae(
      () => e.activeKey,
      (m) => {
        r.activeKey = m;
      }
    ), ae(
      () => e.useType,
      (m) => {
        r.activeKey !== "gradient" && m === "gradient" ? r.activeKey = "gradient" : r.activeKey = "pure";
      }
    ), ae(
      () => e.pureColor,
      (m) => {
        w.equals(m, r.pureColor) || (r.pureColor = m, i.value = new G(m));
      },
      { deep: !0 }
    ), {
      colorCubeRef: c,
      pickerRef: u,
      showPicker: l,
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
function Ug(e, t, r, n, o, a) {
  const s = Y("WrapContainer");
  return k(), P(Ve, null, [
    e.isWidget ? (k(), Q(s, {
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
        class: ne(["vc-color-wrap transparent", { round: e.shape === "circle" }]),
        ref: "colorCubeRef"
      }, [
        _("div", {
          class: "current-color",
          style: J(e.getBgColorStyle),
          onClick: t[1] || (t[1] = (...i) => e.onShowPicker && e.onShowPicker(...i))
        }, null, 4)
      ], 2),
      (k(), Q(Fl, { to: e.pickerContainer }, [
        wt(_("div", {
          ref: "pickerRef",
          style: J({ zIndex: e.zIndex })
        }, [
          e.showPicker ? (k(), Q(s, {
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
          [Or, e.showPicker]
        ])
      ], 8, ["to"]))
    ], 64))
  ], 64);
}
const Kg = /* @__PURE__ */ we(Gg, [["render", Ug], ["__scopeId", "data-v-3ba84123"]]), qg = { class: "label-text" }, Yg = ["value"], Xg = { class: "color-picker-container" }, Jg = /* @__PURE__ */ U({
  __name: "DatColor",
  props: /* @__PURE__ */ rt({
    label: { default: "" }
  }, {
    modelValue: { type: String, required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = nt(e, "modelValue");
    let r = B(!1);
    const n = W(() => {
      if (t.value.length !== 7 || t.value[0] !== "#")
        return "black";
      const i = parseInt(t.value.substring(1, 3), 16), l = parseInt(t.value.substring(3, 5), 16), c = parseInt(t.value.substring(5, 7), 16);
      return (i * 299 + l * 587 + c * 114) / 1e3 >= 128 ? "black" : "white";
    }), o = (i) => {
      i.key === "Enter" && (r.value = !1);
    }, a = () => {
      r.value = !0, window.addEventListener("keydown", o);
    }, s = () => {
      r.value = !1, window.removeEventListener("keydown", o);
    };
    return (i, l) => (k(), P("li", {
      class: "control-item color",
      style: J({ "border-left-color": t.value }),
      onMouseleave: s
    }, [
      _("label", null, [
        _("span", qg, ce(i.label), 1),
        _("div", {
          class: "control",
          onMouseover: a
        }, [
          _("input", {
            type: "text",
            value: t.value,
            style: J({ "background-color": t.value, color: n.value }),
            readonly: ""
          }, null, 12, Yg),
          _("div", Xg, [
            Ae(mt(Kg), {
              pureColor: t.value,
              "onUpdate:pureColor": l[0] || (l[0] = (c) => t.value = c),
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
}, Zg = /* @__PURE__ */ en(Jg, [["__scopeId", "data-v-ae646d6e"]]), Qg = {
  ref: "label",
  class: "group"
}, e0 = { class: "symbol" }, t0 = /* @__PURE__ */ U({
  __name: "DatFolder",
  props: /* @__PURE__ */ rt({
    label: { default: "" },
    closed: { type: Boolean, default: !1 }
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = nt(e, "modelValue"), r = () => {
      t.value = !t.value;
    };
    return (n, o) => (k(), P("li", {
      class: ne(["folder", { closed: t.value }])
    }, [
      _("div", Qg, [
        _("div", {
          class: "text",
          onClick: r
        }, [
          _("div", e0, ce(t.value ? "▼" : "▲") + " " + ce(n.label), 1)
        ]),
        _("ul", null, [
          zn(n.$slots, "default", {}, void 0, !0)
        ])
      ], 512)
    ], 2));
  }
}), r0 = /* @__PURE__ */ en(t0, [["__scopeId", "data-v-4740e5f2"]]), n0 = { class: "group group--main" }, o0 = /* @__PURE__ */ U({
  __name: "DatGui",
  props: /* @__PURE__ */ rt({
    openText: { default: "Open Controls" },
    closeText: { default: "Close Controls" },
    closePosition: { default: "bottom" },
    closed: { type: Boolean, default: !1 }
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, r = nt(e, "modelValue"), n = W(
      () => r.value ? t.openText : t.closeText
    ), o = () => {
      r.value = !r.value;
    };
    return (a, s) => (k(), P("div", {
      class: ne(["vue-dat-gui", { closed: r.value }])
    }, [
      _("div", n0, [
        a.closePosition === "top" ? (k(), P("div", {
          key: 0,
          class: "toggle-button",
          role: "button",
          onClick: o
        }, ce(n.value), 1)) : z("", !0),
        _("ul", null, [
          zn(a.$slots, "default")
        ]),
        a.closePosition === "bottom" ? (k(), P("div", {
          key: 1,
          class: "toggle-button",
          role: "button",
          onClick: o
        }, ce(n.value), 1)) : z("", !0)
      ])
    ], 2));
  }
}), Vn = (e, t, r) => Math.min(Math.max(e, t), r), a0 = /* @__PURE__ */ U({
  __name: "DatSlider",
  props: {
    value: {},
    min: {},
    max: {}
  },
  emits: ["updateState"],
  setup(e, { emit: t }) {
    const r = e, n = t, o = B(null), a = W(
      () => Vn((r.value - r.min) * 100 / (r.max - r.min), 0, 100)
    ), s = (u) => {
      if (o.value) {
        const f = o.value.getBoundingClientRect(), p = u - f.left, d = f.right - f.left, h = r.min + Vn(p / d, 0, 1) * (r.max - r.min);
        n("updateState", h);
      }
    }, i = (u) => {
      s(u.pageX);
    }, l = (u) => {
      s(u.pageX), window.removeEventListener("mousemove", i), window.removeEventListener("mouseup", l);
    }, c = (u) => {
      s(u.pageX), window.addEventListener("mousemove", i), window.addEventListener("mouseup", l);
    };
    return (u, f) => (k(), P("span", {
      ref_key: "slider",
      ref: o,
      class: "slider",
      style: J({ "background-size": `${a.value}% 100%` }),
      onMousedown: c
    }, null, 36));
  }
}), i0 = /* @__PURE__ */ en(a0, [["__scopeId", "data-v-947d6af4"]]), l0 = { class: "control-item number" }, s0 = { ref: "label" }, u0 = { class: "label-text" }, c0 = { class: "control" }, f0 = ["min", "max", "step", "value"], d0 = /* @__PURE__ */ U({
  __name: "DatNumber",
  props: /* @__PURE__ */ rt({
    label: { default: "" },
    showSlider: { type: Boolean, default: !0 },
    min: {},
    max: {},
    step: {}
  }, {
    modelValue: { type: Number, required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, r = nt(e, "modelValue");
    let n = typeof t.min == "number" ? t.min : Number.NEGATIVE_INFINITY, o = typeof t.max == "number" ? t.max : Number.POSITIVE_INFINITY;
    n > o && ([n, o] = [o, n]);
    const a = W(
      () => t.showSlider && Number.isFinite(n) && Number.isFinite(o)
    ), s = W(() => {
      if (t.step)
        return t.step;
      const c = o - n;
      return 10 ** Math.floor(Math.log(Math.abs(c)) / Math.LN10) / 10;
    }), i = (c) => {
      let u = Vn(c, n, o);
      s.value !== 0 && Number.isFinite(s.value) && (u = Math.round(u / s.value) * s.value), r.value = u;
    }, l = (c) => {
      i(Number(c.target.value));
    };
    return (c, u) => (k(), P("li", l0, [
      _("label", s0, [
        _("span", u0, ce(c.label), 1),
        _("div", c0, [
          wt(Ae(i0, {
            min: mt(n),
            max: mt(o),
            value: r.value,
            onUpdateState: i
          }, null, 8, ["min", "max", "value"]), [
            [Or, a.value]
          ]),
          _("input", {
            type: "number",
            ref: "input",
            class: "input",
            min: mt(n),
            max: mt(o),
            step: s.value,
            value: r.value,
            onChange: l
          }, null, 40, f0)
        ])
      ], 512)
    ]));
  }
}), p0 = /* @__PURE__ */ en(d0, [["__scopeId", "data-v-8aa5ee75"]]), h0 = { class: "control-item select" }, v0 = { ref: "label" }, g0 = { class: "label-text" }, y0 = { class: "control" }, m0 = ["value"], b0 = /* @__PURE__ */ U({
  __name: "DatSelect",
  props: /* @__PURE__ */ rt({
    label: { default: "" },
    items: { default: () => [] }
  }, {
    modelValue: { type: String, default: "" },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = nt(e, "modelValue");
    return (r, n) => (k(), P("li", h0, [
      _("label", v0, [
        _("span", g0, ce(r.label), 1),
        _("div", y0, [
          wt(_("select", {
            "onUpdate:modelValue": n[0] || (n[0] = (o) => t.value = o),
            class: "w-100"
          }, [
            (k(!0), P(Ve, null, Ct(r.items, (o) => (k(), P("option", {
              key: o.value,
              value: o.value
            }, ce(o.name), 9, m0))), 128))
          ], 512), [
            [zl, t.value]
          ])
        ])
      ], 512)
    ]));
  }
}), _0 = { class: "control-item string" }, C0 = { ref: "label" }, w0 = { class: "label-text" }, S0 = { class: "control" }, x0 = /* @__PURE__ */ U({
  __name: "DatString",
  props: /* @__PURE__ */ rt({
    label: { default: "" }
  }, {
    modelValue: { type: String, default: "" },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = nt(e, "modelValue");
    return (r, n) => (k(), P("li", _0, [
      _("label", C0, [
        _("span", w0, ce(r.label), 1),
        _("div", S0, [
          wt(_("input", {
            type: "text",
            "onUpdate:modelValue": n[0] || (n[0] = (o) => t.value = o)
          }, null, 512), [
            [Wl, t.value]
          ])
        ])
      ], 512)
    ]));
  }
}), ci = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DatBoolean: Xl,
  DatButton: Zl,
  DatColor: Zg,
  DatFolder: r0,
  DatGui: o0,
  DatNumber: p0,
  DatSelect: b0,
  DatString: x0
}, Symbol.toStringTag, { value: "Module" })), O0 = (e) => {
  for (const t in ci)
    e.component(t, ci[t]);
}, $0 = { install: O0 };
export {
  Xl as DatBoolean,
  Zl as DatButton,
  Zg as DatColor,
  r0 as DatFolder,
  o0 as DatGui,
  p0 as DatNumber,
  b0 as DatSelect,
  x0 as DatString,
  $0 as default
};
