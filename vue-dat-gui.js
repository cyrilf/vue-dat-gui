import { defineComponent as U, mergeModels as nt, computed as B, useModel as at, openBlock as k, createElementBlock as P, normalizeClass as K, createElementVNode as _, toDisplayString as ce, onMounted as fi, nextTick as Fn, watch as Pe, getCurrentInstance as di, getCurrentScope as Hs, onScopeDispose as Ls, unref as mt, ref as N, readonly as Bs, shallowRef as Ns, reactive as Oe, createVNode as Ae, inject as pi, provide as Vs, normalizeStyle as Z, Fragment as Ve, renderList as wt, createCommentVNode as W, resolveComponent as X, createBlock as ee, withDirectives as Fe, vShow as St, createTextVNode as hi, renderSlot as zn, withCtx as Ia, resolveDynamicComponent as Da, mergeProps as Ha, Teleport as Fs, pushScopeId as It, popScopeId as Dt, withKeys as La, withModifiers as Ba, vModelSelect as zs, vModelText as Ws } from "vue";
const Gs = { ref: "label" }, Ks = { class: "label-text" }, Us = { class: "control" }, qs = ["checked", "disabled"], Ys = /* @__PURE__ */ U({
  __name: "DatBoolean",
  props: /* @__PURE__ */ nt({
    label: { default: "" },
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, r = B(() => t.disabled), n = at(e, "modelValue"), a = () => {
      n.value = !n.value;
    };
    return (o, l) => (k(), P("li", {
      class: K(["control-item boolean", { disabled: r.value }])
    }, [
      _("label", Gs, [
        _("span", Ks, ce(o.label), 1),
        _("div", Us, [
          _("input", {
            type: "checkbox",
            checked: n.value,
            onChange: a,
            disabled: r.value
          }, null, 40, qs)
        ])
      ], 512)
    ], 2));
  }
}), Xs = /* @__PURE__ */ U({
  __name: "DatButton",
  props: {
    label: { default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const r = e, n = B(() => r.disabled), a = t, o = (l) => {
      n.value || a("click", l);
    };
    return (l, i) => (k(), P("li", {
      class: K(["control-item button", { disabled: n.value }])
    }, [
      _("label", {
        class: "w-100",
        ref: "label",
        onClick: o
      }, ce(l.label), 513)
    ], 2));
  }
});
function Js(e) {
  return Hs() ? (Ls(e), !0) : !1;
}
function or(e) {
  return typeof e == "function" ? e() : mt(e);
}
const vi = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Zs = Object.prototype.toString, Qs = (e) => Zs.call(e) === "[object Object]", _t = () => {
}, el = /* @__PURE__ */ tl();
function tl() {
  var e, t;
  return vi && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function gi(e, t) {
  function r(...n) {
    return new Promise((a, o) => {
      Promise.resolve(e(() => t.apply(this, n), { fn: t, thisArg: this, args: n })).then(a).catch(o);
    });
  }
  return r;
}
const yi = (e) => e();
function rl(e, t = {}) {
  let r, n, a = _t;
  const o = (i) => {
    clearTimeout(i), a(), a = _t;
  };
  return (i) => {
    const s = or(e), c = or(t.maxWait);
    return r && o(r), s <= 0 || c !== void 0 && c <= 0 ? (n && (o(n), n = null), Promise.resolve(i())) : new Promise((u, f) => {
      a = t.rejectOnCancel ? f : u, c && !n && (n = setTimeout(() => {
        r && o(r), n = null, u(i());
      }, c)), r = setTimeout(() => {
        n && o(n), n = null, u(i());
      }, s);
    });
  };
}
function nl(e = yi) {
  const t = N(!0);
  function r() {
    t.value = !1;
  }
  function n() {
    t.value = !0;
  }
  const a = (...o) => {
    t.value && e(...o);
  };
  return { isActive: Bs(t), pause: r, resume: n, eventFilter: a };
}
function al(e) {
  return di();
}
function Ze(e, t = 200, r = {}) {
  return gi(
    rl(t, r),
    e
  );
}
function ol(e, t, r = {}) {
  const {
    eventFilter: n = yi,
    ...a
  } = r;
  return Pe(
    e,
    gi(
      n,
      t
    ),
    a
  );
}
function il(e, t, r = {}) {
  const {
    eventFilter: n,
    ...a
  } = r, { eventFilter: o, pause: l, resume: i, isActive: s } = nl(n);
  return { stop: ol(
    e,
    t,
    {
      ...a,
      eventFilter: o
    }
  ), pause: l, resume: i, isActive: s };
}
function ot(e, t = !0, r) {
  al() ? fi(e, r) : t ? e() : Fn(e);
}
function oe(e, t, r) {
  return Pe(
    e,
    (n, a, o) => {
      n && t(n, a, o);
    },
    r
  );
}
function Yt(e) {
  var t;
  const r = or(e);
  return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
const ir = vi ? window : void 0;
function Zt(...e) {
  let t, r, n, a;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([r, n, a] = e, t = ir) : [t, r, n, a] = e, !t)
    return _t;
  Array.isArray(r) || (r = [r]), Array.isArray(n) || (n = [n]);
  const o = [], l = () => {
    o.forEach((u) => u()), o.length = 0;
  }, i = (u, f, p, d) => (u.addEventListener(f, p, d), () => u.removeEventListener(f, p, d)), s = Pe(
    () => [Yt(t), or(a)],
    ([u, f]) => {
      if (l(), !u)
        return;
      const p = Qs(f) ? { ...f } : f;
      o.push(
        ...r.flatMap((d) => n.map((h) => i(u, d, h, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    s(), l();
  };
  return Js(c), c;
}
let Na = !1;
function sl(e, t, r = {}) {
  const { window: n = ir, ignore: a = [], capture: o = !0, detectIframe: l = !1 } = r;
  if (!n)
    return _t;
  el && !Na && (Na = !0, Array.from(n.document.body.children).forEach((p) => p.addEventListener("click", _t)), n.document.documentElement.addEventListener("click", _t));
  let i = !0;
  const s = (p) => a.some((d) => {
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
    }, { passive: !0, capture: o }),
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
const br = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, mr = "__vueuse_ssr_handlers__", ll = /* @__PURE__ */ ul();
function ul() {
  return mr in br || (br[mr] = br[mr] || {}), br[mr];
}
function cl(e, t) {
  return ll[e] || t;
}
function fl(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const dl = {
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
}, Va = "vueuse-storage";
function pl(e, t, r, n = {}) {
  var a;
  const {
    flush: o = "pre",
    deep: l = !0,
    listenToStorageChanges: i = !0,
    writeDefaults: s = !0,
    mergeDefaults: c = !1,
    shallow: u,
    window: f = ir,
    eventFilter: p,
    onError: d = (b) => {
      console.error(b);
    },
    initOnMounted: h
  } = n, g = (u ? Ns : N)(typeof t == "function" ? t() : t);
  if (!r)
    try {
      r = cl("getDefaultStorage", () => {
        var b;
        return (b = ir) == null ? void 0 : b.localStorage;
      })();
    } catch (b) {
      d(b);
    }
  if (!r)
    return g;
  const v = or(t), y = fl(v), C = (a = n.serializer) != null ? a : dl[y], { pause: x, resume: S } = il(
    g,
    () => T(g.value),
    { flush: o, deep: l, eventFilter: p }
  );
  return f && i && ot(() => {
    Zt(f, "storage", H), Zt(f, Va, R), h && H();
  }), h || H(), g;
  function T(b) {
    try {
      if (b == null)
        r.removeItem(e);
      else {
        const O = C.write(b), m = r.getItem(e);
        m !== O && (r.setItem(e, O), f && f.dispatchEvent(new CustomEvent(Va, {
          detail: {
            key: e,
            oldValue: m,
            newValue: O,
            storageArea: r
          }
        })));
      }
    } catch (O) {
      d(O);
    }
  }
  function $(b) {
    const O = b ? b.newValue : r.getItem(e);
    if (O == null)
      return s && v != null && r.setItem(e, C.write(v)), v;
    if (!b && c) {
      const m = C.read(O);
      return typeof c == "function" ? c(m, v) : y === "object" && !Array.isArray(m) ? { ...v, ...m } : m;
    } else return typeof O != "string" ? O : C.read(O);
  }
  function R(b) {
    H(b.detail);
  }
  function H(b) {
    if (!(b && b.storageArea !== r)) {
      if (b && b.key == null) {
        g.value = v;
        return;
      }
      if (!(b && b.key !== e)) {
        x();
        try {
          (b == null ? void 0 : b.newValue) !== C.write(g.value) && (g.value = $(b));
        } catch (O) {
          d(O);
        } finally {
          b ? Fn(S) : S();
        }
      }
    }
  }
}
function Wn(e, t, r = {}) {
  const { window: n = ir } = r;
  return pl(e, t, n == null ? void 0 : n.localStorage, r);
}
function Ar(e) {
  "@babel/helpers - typeof";
  return Ar = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ar(e);
}
var hl = /^\s+/, vl = /\s+$/;
function w(e, t) {
  if (e = e || "", t = t || {}, e instanceof w)
    return e;
  if (!(this instanceof w))
    return new w(e, t);
  var r = gl(e);
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
    var t = this.toRgb(), r, n, a, o, l, i;
    return r = t.r / 255, n = t.g / 255, a = t.b / 255, r <= 0.03928 ? o = r / 12.92 : o = Math.pow((r + 0.055) / 1.055, 2.4), n <= 0.03928 ? l = n / 12.92 : l = Math.pow((n + 0.055) / 1.055, 2.4), a <= 0.03928 ? i = a / 12.92 : i = Math.pow((a + 0.055) / 1.055, 2.4), 0.2126 * o + 0.7152 * l + 0.0722 * i;
  },
  setAlpha: function(t) {
    return this._a = bi(t), this._roundA = Math.round(100 * this._a) / 100, this;
  },
  toHsv: function() {
    var t = za(this._r, this._g, this._b);
    return {
      h: t.h * 360,
      s: t.s,
      v: t.v,
      a: this._a
    };
  },
  toHsvString: function() {
    var t = za(this._r, this._g, this._b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), a = Math.round(t.v * 100);
    return this._a == 1 ? "hsv(" + r + ", " + n + "%, " + a + "%)" : "hsva(" + r + ", " + n + "%, " + a + "%, " + this._roundA + ")";
  },
  toHsl: function() {
    var t = Fa(this._r, this._g, this._b);
    return {
      h: t.h * 360,
      s: t.s,
      l: t.l,
      a: this._a
    };
  },
  toHslString: function() {
    var t = Fa(this._r, this._g, this._b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), a = Math.round(t.l * 100);
    return this._a == 1 ? "hsl(" + r + ", " + n + "%, " + a + "%)" : "hsla(" + r + ", " + n + "%, " + a + "%, " + this._roundA + ")";
  },
  toHex: function(t) {
    return Wa(this._r, this._g, this._b, t);
  },
  toHexString: function(t) {
    return "#" + this.toHex(t);
  },
  toHex8: function(t) {
    return _l(this._r, this._g, this._b, this._a, t);
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
      r: Math.round(z(this._r, 255) * 100) + "%",
      g: Math.round(z(this._g, 255) * 100) + "%",
      b: Math.round(z(this._b, 255) * 100) + "%",
      a: this._a
    };
  },
  toPercentageRgbString: function() {
    return this._a == 1 ? "rgb(" + Math.round(z(this._r, 255) * 100) + "%, " + Math.round(z(this._g, 255) * 100) + "%, " + Math.round(z(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(z(this._r, 255) * 100) + "%, " + Math.round(z(this._g, 255) * 100) + "%, " + Math.round(z(this._b, 255) * 100) + "%, " + this._roundA + ")";
  },
  toName: function() {
    return this._a === 0 ? "transparent" : this._a < 1 ? !1 : Rl[Wa(this._r, this._g, this._b, !0)] || !1;
  },
  toFilter: function(t) {
    var r = "#" + Ga(this._r, this._g, this._b, this._a), n = r, a = this._gradientType ? "GradientType = 1, " : "";
    if (t) {
      var o = w(t);
      n = "#" + Ga(o._r, o._g, o._b, o._a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + a + "startColorstr=" + r + ",endColorstr=" + n + ")";
  },
  toString: function(t) {
    var r = !!t;
    t = t || this._format;
    var n = !1, a = this._a < 1 && this._a >= 0, o = !r && a && (t === "hex" || t === "hex6" || t === "hex3" || t === "hex4" || t === "hex8" || t === "name");
    return o ? t === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (n = this.toRgbString()), t === "prgb" && (n = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (n = this.toHexString()), t === "hex3" && (n = this.toHexString(!0)), t === "hex4" && (n = this.toHex8String(!0)), t === "hex8" && (n = this.toHex8String()), t === "name" && (n = this.toName()), t === "hsl" && (n = this.toHslString()), t === "hsv" && (n = this.toHsvString()), n || this.toHexString());
  },
  clone: function() {
    return w(this.toString());
  },
  _applyModification: function(t, r) {
    var n = t.apply(null, [this].concat([].slice.call(r)));
    return this._r = n._r, this._g = n._g, this._b = n._b, this.setAlpha(n._a), this;
  },
  lighten: function() {
    return this._applyModification(xl, arguments);
  },
  brighten: function() {
    return this._applyModification(Ol, arguments);
  },
  darken: function() {
    return this._applyModification(Al, arguments);
  },
  desaturate: function() {
    return this._applyModification(Cl, arguments);
  },
  saturate: function() {
    return this._applyModification(wl, arguments);
  },
  greyscale: function() {
    return this._applyModification(Sl, arguments);
  },
  spin: function() {
    return this._applyModification(kl, arguments);
  },
  _applyCombination: function(t, r) {
    return t.apply(null, [this].concat([].slice.call(r)));
  },
  analogous: function() {
    return this._applyCombination(Tl, arguments);
  },
  complement: function() {
    return this._applyCombination($l, arguments);
  },
  monochromatic: function() {
    return this._applyCombination(Ml, arguments);
  },
  splitcomplement: function() {
    return this._applyCombination(El, arguments);
  },
  // Disabled until https://github.com/bgrins/TinyColor/issues/254
  // polyad: function (number) {
  //   return this._applyCombination(polyad, [number]);
  // },
  triad: function() {
    return this._applyCombination(Ka, [3]);
  },
  tetrad: function() {
    return this._applyCombination(Ka, [4]);
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
function gl(e) {
  var t = {
    r: 0,
    g: 0,
    b: 0
  }, r = 1, n = null, a = null, o = null, l = !1, i = !1;
  return typeof e == "string" && (e = Dl(e)), Ar(e) == "object" && (Te(e.r) && Te(e.g) && Te(e.b) ? (t = yl(e.r, e.g, e.b), l = !0, i = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Te(e.h) && Te(e.s) && Te(e.v) ? (n = Xt(e.s), a = Xt(e.v), t = ml(e.h, n, a), l = !0, i = "hsv") : Te(e.h) && Te(e.s) && Te(e.l) && (n = Xt(e.s), o = Xt(e.l), t = bl(e.h, n, o), l = !0, i = "hsl"), e.hasOwnProperty("a") && (r = e.a)), r = bi(r), {
    ok: l,
    format: e.format || i,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
function yl(e, t, r) {
  return {
    r: z(e, 255) * 255,
    g: z(t, 255) * 255,
    b: z(r, 255) * 255
  };
}
function Fa(e, t, r) {
  e = z(e, 255), t = z(t, 255), r = z(r, 255);
  var n = Math.max(e, t, r), a = Math.min(e, t, r), o, l, i = (n + a) / 2;
  if (n == a)
    o = l = 0;
  else {
    var s = n - a;
    switch (l = i > 0.5 ? s / (2 - n - a) : s / (n + a), n) {
      case e:
        o = (t - r) / s + (t < r ? 6 : 0);
        break;
      case t:
        o = (r - e) / s + 2;
        break;
      case r:
        o = (e - t) / s + 4;
        break;
    }
    o /= 6;
  }
  return {
    h: o,
    s: l,
    l: i
  };
}
function bl(e, t, r) {
  var n, a, o;
  e = z(e, 360), t = z(t, 100), r = z(r, 100);
  function l(c, u, f) {
    return f < 0 && (f += 1), f > 1 && (f -= 1), f < 1 / 6 ? c + (u - c) * 6 * f : f < 1 / 2 ? u : f < 2 / 3 ? c + (u - c) * (2 / 3 - f) * 6 : c;
  }
  if (t === 0)
    n = a = o = r;
  else {
    var i = r < 0.5 ? r * (1 + t) : r + t - r * t, s = 2 * r - i;
    n = l(s, i, e + 1 / 3), a = l(s, i, e), o = l(s, i, e - 1 / 3);
  }
  return {
    r: n * 255,
    g: a * 255,
    b: o * 255
  };
}
function za(e, t, r) {
  e = z(e, 255), t = z(t, 255), r = z(r, 255);
  var n = Math.max(e, t, r), a = Math.min(e, t, r), o, l, i = n, s = n - a;
  if (l = n === 0 ? 0 : s / n, n == a)
    o = 0;
  else {
    switch (n) {
      case e:
        o = (t - r) / s + (t < r ? 6 : 0);
        break;
      case t:
        o = (r - e) / s + 2;
        break;
      case r:
        o = (e - t) / s + 4;
        break;
    }
    o /= 6;
  }
  return {
    h: o,
    s: l,
    v: i
  };
}
function ml(e, t, r) {
  e = z(e, 360) * 6, t = z(t, 100), r = z(r, 100);
  var n = Math.floor(e), a = e - n, o = r * (1 - t), l = r * (1 - a * t), i = r * (1 - (1 - a) * t), s = n % 6, c = [r, l, o, o, i, r][s], u = [i, r, r, l, o, o][s], f = [o, o, i, r, r, l][s];
  return {
    r: c * 255,
    g: u * 255,
    b: f * 255
  };
}
function Wa(e, t, r, n) {
  var a = [xe(Math.round(e).toString(16)), xe(Math.round(t).toString(16)), xe(Math.round(r).toString(16))];
  return n && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function _l(e, t, r, n, a) {
  var o = [xe(Math.round(e).toString(16)), xe(Math.round(t).toString(16)), xe(Math.round(r).toString(16)), xe(mi(n))];
  return a && o[0].charAt(0) == o[0].charAt(1) && o[1].charAt(0) == o[1].charAt(1) && o[2].charAt(0) == o[2].charAt(1) && o[3].charAt(0) == o[3].charAt(1) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function Ga(e, t, r, n) {
  var a = [xe(mi(n)), xe(Math.round(e).toString(16)), xe(Math.round(t).toString(16)), xe(Math.round(r).toString(16))];
  return a.join("");
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
function Cl(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = w(e).toHsl();
  return r.s -= t / 100, r.s = Vr(r.s), w(r);
}
function wl(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = w(e).toHsl();
  return r.s += t / 100, r.s = Vr(r.s), w(r);
}
function Sl(e) {
  return w(e).desaturate(100);
}
function xl(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = w(e).toHsl();
  return r.l += t / 100, r.l = Vr(r.l), w(r);
}
function Ol(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = w(e).toRgb();
  return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), w(r);
}
function Al(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = w(e).toHsl();
  return r.l -= t / 100, r.l = Vr(r.l), w(r);
}
function kl(e, t) {
  var r = w(e).toHsl(), n = (r.h + t) % 360;
  return r.h = n < 0 ? 360 + n : n, w(r);
}
function $l(e) {
  var t = w(e).toHsl();
  return t.h = (t.h + 180) % 360, w(t);
}
function Ka(e, t) {
  if (isNaN(t) || t <= 0)
    throw new Error("Argument to polyad must be a positive number");
  for (var r = w(e).toHsl(), n = [w(e)], a = 360 / t, o = 1; o < t; o++)
    n.push(w({
      h: (r.h + o * a) % 360,
      s: r.s,
      l: r.l
    }));
  return n;
}
function El(e) {
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
function Tl(e, t, r) {
  t = t || 6, r = r || 30;
  var n = w(e).toHsl(), a = 360 / r, o = [w(e)];
  for (n.h = (n.h - (a * t >> 1) + 720) % 360; --t; )
    n.h = (n.h + a) % 360, o.push(w(n));
  return o;
}
function Ml(e, t) {
  t = t || 6;
  for (var r = w(e).toHsv(), n = r.h, a = r.s, o = r.v, l = [], i = 1 / t; t--; )
    l.push(w({
      h: n,
      s: a,
      v: o
    })), o = (o + i) % 1;
  return l;
}
w.mix = function(e, t, r) {
  r = r === 0 ? 0 : r || 50;
  var n = w(e).toRgb(), a = w(t).toRgb(), o = r / 100, l = {
    r: (a.r - n.r) * o + n.r,
    g: (a.g - n.g) * o + n.g,
    b: (a.b - n.b) * o + n.b,
    a: (a.a - n.a) * o + n.a
  };
  return w(l);
};
w.readability = function(e, t) {
  var r = w(e), n = w(t);
  return (Math.max(r.getLuminance(), n.getLuminance()) + 0.05) / (Math.min(r.getLuminance(), n.getLuminance()) + 0.05);
};
w.isReadable = function(e, t, r) {
  var n = w.readability(e, t), a, o;
  switch (o = !1, a = Hl(r), a.level + a.size) {
    case "AAsmall":
    case "AAAlarge":
      o = n >= 4.5;
      break;
    case "AAlarge":
      o = n >= 3;
      break;
    case "AAAsmall":
      o = n >= 7;
      break;
  }
  return o;
};
w.mostReadable = function(e, t, r) {
  var n = null, a = 0, o, l, i, s;
  r = r || {}, l = r.includeFallbackColors, i = r.level, s = r.size;
  for (var c = 0; c < t.length; c++)
    o = w.readability(e, t[c]), o > a && (a = o, n = w(t[c]));
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
}, Rl = w.hexNames = Pl(An);
function Pl(e) {
  var t = {};
  for (var r in e)
    e.hasOwnProperty(r) && (t[e[r]] = r);
  return t;
}
function bi(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function z(e, t) {
  jl(e) && (e = "100%");
  var r = Il(e);
  return e = Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(e * t, 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : e % t / parseFloat(t);
}
function Vr(e) {
  return Math.min(1, Math.max(0, e));
}
function pe(e) {
  return parseInt(e, 16);
}
function jl(e) {
  return typeof e == "string" && e.indexOf(".") != -1 && parseFloat(e) === 1;
}
function Il(e) {
  return typeof e == "string" && e.indexOf("%") != -1;
}
function xe(e) {
  return e.length == 1 ? "0" + e : "" + e;
}
function Xt(e) {
  return e <= 1 && (e = e * 100 + "%"), e;
}
function mi(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Ua(e) {
  return pe(e) / 255;
}
var Se = function() {
  var e = "[-\\+]?\\d+%?", t = "[-\\+]?\\d*\\.\\d+%?", r = "(?:" + t + ")|(?:" + e + ")", n = "[\\s|\\(]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?", a = "[\\s|\\(]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?";
  return {
    CSS_UNIT: new RegExp(r),
    rgb: new RegExp("rgb" + n),
    rgba: new RegExp("rgba" + a),
    hsl: new RegExp("hsl" + n),
    hsla: new RegExp("hsla" + a),
    hsv: new RegExp("hsv" + n),
    hsva: new RegExp("hsva" + a),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
}();
function Te(e) {
  return !!Se.CSS_UNIT.exec(e);
}
function Dl(e) {
  e = e.replace(hl, "").replace(vl, "").toLowerCase();
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
    a: Ua(r[4]),
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
    a: Ua(r[4] + "" + r[4]),
    format: t ? "name" : "hex8"
  } : (r = Se.hex3.exec(e)) ? {
    r: pe(r[1] + "" + r[1]),
    g: pe(r[2] + "" + r[2]),
    b: pe(r[3] + "" + r[3]),
    format: t ? "name" : "hex"
  } : !1;
}
function Hl(e) {
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
      var r = t.value, n = e.visit(t.at), a = e.visit(t.style);
      return a && (r += " " + a), n && (r += " at " + n), r;
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
      var n = t, a = e.visit(r.length);
      return a && (n += " " + a), n;
    },
    visit_angular: function(t) {
      return t.value + "deg";
    },
    visit_directional: function(t) {
      return "to " + t.value;
    },
    visit_array: function(t) {
      var r = "", n = t.length;
      return t.forEach(function(a, o) {
        r += e.visit(a), o < n - 1 && (r += ", ");
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
    var D = new Error(t + ": " + A);
    throw D.source = t, D;
  }
  function n() {
    var A = a();
    return t.length > 0 && r("Invalid input not EOF"), A;
  }
  function a() {
    return x(o);
  }
  function o() {
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
  function l(A, D, L) {
    return i(D, function(le) {
      var Le = L();
      return Le && (Q(e.comma) || r("Missing comma before color stops")), {
        type: A,
        orientation: Le,
        colorStops: x(S)
      };
    });
  }
  function i(A, D) {
    var L = Q(A);
    if (L) {
      Q(e.startCall) || r("Missing (");
      var le = D(L);
      return Q(e.endCall) || r("Missing )"), le;
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
    var A, D = p(), L;
    return D && (A = [], A.push(D), L = t, Q(e.comma) && (D = p(), D ? A.push(D) : t = L)), A;
  }
  function p() {
    var A = d() || h();
    if (A)
      A.at = v();
    else {
      var D = g();
      if (D) {
        A = D;
        var L = v();
        L && (A.at = L);
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
    return A && (A.style = m() || g()), A;
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
      x: m(),
      y: m()
    };
  }
  function x(A) {
    var D = A(), L = [];
    if (D)
      for (L.push(D); Q(e.comma); )
        D = A(), D ? L.push(D) : r("One extra comma");
    return L;
  }
  function S() {
    var A = T();
    return A || r("Expected color definition"), A.length = m(), A;
  }
  function T() {
    return R() || b() || H() || $();
  }
  function $() {
    return I("literal", e.literalColor, 0);
  }
  function R() {
    return I("hex", e.hexColor, 1);
  }
  function H() {
    return i(e.rgbColor, function() {
      return {
        type: "rgb",
        value: x(O)
      };
    });
  }
  function b() {
    return i(e.rgbaColor, function() {
      return {
        type: "rgba",
        value: x(O)
      };
    });
  }
  function O() {
    return Q(e.number)[1];
  }
  function m() {
    return I("%", e.percentageValue, 1) || j() || E();
  }
  function j() {
    return I("position-keyword", e.positionKeywords, 1);
  }
  function E() {
    return I("px", e.pixelValue, 1) || I("em", e.emValue, 1);
  }
  function I(A, D, L) {
    var le = Q(D);
    if (le)
      return {
        type: A,
        value: le[L]
      };
  }
  function Q(A) {
    var D, L;
    return L = /^[\n\r\t\s]+/.exec(t), L && re(L[0].length), D = A.exec(t), D && re(D[0].length), D;
  }
  function re(A) {
    t = t.substr(A);
  }
  return function(A) {
    return t = A.toString(), n();
  };
}();
var Ll = it.parse, Bl = it.stringify, fe = "top", _e = "bottom", Ce = "right", de = "left", Gn = "auto", fr = [fe, _e, Ce, de], xt = "start", sr = "end", Nl = "clippingParents", _i = "viewport", Wt = "popper", Vl = "reference", qa = /* @__PURE__ */ fr.reduce(function(e, t) {
  return e.concat([t + "-" + xt, t + "-" + sr]);
}, []), Ci = /* @__PURE__ */ [].concat(fr, [Gn]).reduce(function(e, t) {
  return e.concat([t, t + "-" + xt, t + "-" + sr]);
}, []), Fl = "beforeRead", zl = "read", Wl = "afterRead", Gl = "beforeMain", Kl = "main", Ul = "afterMain", ql = "beforeWrite", Yl = "write", Xl = "afterWrite", Jl = [Fl, zl, Wl, Gl, Kl, Ul, ql, Yl, Xl];
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
function be(e) {
  var t = ve(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Kn(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = ve(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Zl(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, a = t.attributes[r] || {}, o = t.elements[r];
    !be(o) || !Ee(o) || (Object.assign(o.style, n), Object.keys(a).forEach(function(l) {
      var i = a[l];
      i === !1 ? o.removeAttribute(l) : o.setAttribute(l, i === !0 ? "" : i);
    }));
  });
}
function Ql(e) {
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
      var a = t.elements[n], o = t.attributes[n] || {}, l = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), i = l.reduce(function(s, c) {
        return s[c] = "", s;
      }, {});
      !be(a) || !Ee(a) || (Object.assign(a.style, i), Object.keys(o).forEach(function(s) {
        a.removeAttribute(s);
      }));
    });
  };
}
const eu = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Zl,
  effect: Ql,
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
function wi() {
  return !/^((?!chrome|android).)*safari/i.test(kn());
}
function At(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), a = 1, o = 1;
  t && be(e) && (a = e.offsetWidth > 0 && Ot(n.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Ot(n.height) / e.offsetHeight || 1);
  var l = Qe(e) ? ve(e) : window, i = l.visualViewport, s = !wi() && r, c = (n.left + (s && i ? i.offsetLeft : 0)) / a, u = (n.top + (s && i ? i.offsetTop : 0)) / o, f = n.width / a, p = n.height / o;
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
function Un(e) {
  var t = At(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Si(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Kn(r)) {
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
function tu(e) {
  return ["table", "td", "th"].indexOf(Ee(e)) >= 0;
}
function Ke(e) {
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
    (Kn(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Ke(e)
  );
}
function Ya(e) {
  return !be(e) || // https://github.com/popperjs/popper-core/issues/837
  je(e).position === "fixed" ? null : e.offsetParent;
}
function ru(e) {
  var t = /firefox/i.test(kn()), r = /Trident/i.test(kn());
  if (r && be(e)) {
    var n = je(e);
    if (n.position === "fixed")
      return null;
  }
  var a = Fr(e);
  for (Kn(a) && (a = a.host); be(a) && ["html", "body"].indexOf(Ee(a)) < 0; ) {
    var o = je(a);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function dr(e) {
  for (var t = ve(e), r = Ya(e); r && tu(r) && je(r).position === "static"; )
    r = Ya(r);
  return r && (Ee(r) === "html" || Ee(r) === "body" && je(r).position === "static") ? t : r || ru(e) || t;
}
function qn(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Qt(e, t, r) {
  return Je(e, kr(t, r));
}
function nu(e, t, r) {
  var n = Qt(e, t, r);
  return n > r ? r : n;
}
function xi() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Oi(e) {
  return Object.assign({}, xi(), e);
}
function Ai(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var au = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Oi(typeof t != "number" ? t : Ai(t, fr));
};
function ou(e) {
  var t, r = e.state, n = e.name, a = e.options, o = r.elements.arrow, l = r.modifiersData.popperOffsets, i = ke(r.placement), s = qn(i), c = [de, Ce].indexOf(i) >= 0, u = c ? "height" : "width";
  if (!(!o || !l)) {
    var f = au(a.padding, r), p = Un(o), d = s === "y" ? fe : de, h = s === "y" ? _e : Ce, g = r.rects.reference[u] + r.rects.reference[s] - l[s] - r.rects.popper[u], v = l[s] - r.rects.reference[s], y = dr(o), C = y ? s === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, x = g / 2 - v / 2, S = f[d], T = C - p[u] - f[h], $ = C / 2 - p[u] / 2 + x, R = Qt(S, $, T), H = s;
    r.modifiersData[n] = (t = {}, t[H] = R, t.centerOffset = R - $, t);
  }
}
function iu(e) {
  var t = e.state, r = e.options, n = r.element, a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || Si(t.elements.popper, a) && (t.elements.arrow = a));
}
const su = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: ou,
  effect: iu,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function kt(e) {
  return e.split("-")[1];
}
var lu = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function uu(e, t) {
  var r = e.x, n = e.y, a = t.devicePixelRatio || 1;
  return {
    x: Ot(r * a) / a || 0,
    y: Ot(n * a) / a || 0
  };
}
function Xa(e) {
  var t, r = e.popper, n = e.popperRect, a = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, f = e.isFixed, p = l.x, d = p === void 0 ? 0 : p, h = l.y, g = h === void 0 ? 0 : h, v = typeof u == "function" ? u({
    x: d,
    y: g
  }) : {
    x: d,
    y: g
  };
  d = v.x, g = v.y;
  var y = l.hasOwnProperty("x"), C = l.hasOwnProperty("y"), x = de, S = fe, T = window;
  if (c) {
    var $ = dr(r), R = "clientHeight", H = "clientWidth";
    if ($ === ve(r) && ($ = Ke(r), je($).position !== "static" && i === "absolute" && (R = "scrollHeight", H = "scrollWidth")), $ = $, a === fe || (a === de || a === Ce) && o === sr) {
      S = _e;
      var b = f && $ === T && T.visualViewport ? T.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        $[R]
      );
      g -= b - n.height, g *= s ? 1 : -1;
    }
    if (a === de || (a === fe || a === _e) && o === sr) {
      x = Ce;
      var O = f && $ === T && T.visualViewport ? T.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        $[H]
      );
      d -= O - n.width, d *= s ? 1 : -1;
    }
  }
  var m = Object.assign({
    position: i
  }, c && lu), j = u === !0 ? uu({
    x: d,
    y: g
  }, ve(r)) : {
    x: d,
    y: g
  };
  if (d = j.x, g = j.y, s) {
    var E;
    return Object.assign({}, m, (E = {}, E[S] = C ? "0" : "", E[x] = y ? "0" : "", E.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + g + "px)" : "translate3d(" + d + "px, " + g + "px, 0)", E));
  }
  return Object.assign({}, m, (t = {}, t[S] = C ? g + "px" : "", t[x] = y ? d + "px" : "", t.transform = "", t));
}
function cu(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, a = n === void 0 ? !0 : n, o = r.adaptive, l = o === void 0 ? !0 : o, i = r.roundOffsets, s = i === void 0 ? !0 : i, c = {
    placement: ke(t.placement),
    variation: kt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Xa(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: s
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Xa(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const fu = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: cu,
  data: {}
};
var _r = {
  passive: !0
};
function du(e) {
  var t = e.state, r = e.instance, n = e.options, a = n.scroll, o = a === void 0 ? !0 : a, l = n.resize, i = l === void 0 ? !0 : l, s = ve(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && c.forEach(function(u) {
    u.addEventListener("scroll", r.update, _r);
  }), i && s.addEventListener("resize", r.update, _r), function() {
    o && c.forEach(function(u) {
      u.removeEventListener("scroll", r.update, _r);
    }), i && s.removeEventListener("resize", r.update, _r);
  };
}
const pu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: du,
  data: {}
};
var hu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function xr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return hu[t];
  });
}
var vu = {
  start: "end",
  end: "start"
};
function Ja(e) {
  return e.replace(/start|end/g, function(t) {
    return vu[t];
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
  return At(Ke(e)).left + Yn(e).scrollLeft;
}
function gu(e, t) {
  var r = ve(e), n = Ke(e), a = r.visualViewport, o = n.clientWidth, l = n.clientHeight, i = 0, s = 0;
  if (a) {
    o = a.width, l = a.height;
    var c = wi();
    (c || !c && t === "fixed") && (i = a.offsetLeft, s = a.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: i + Xn(e),
    y: s
  };
}
function yu(e) {
  var t, r = Ke(e), n = Yn(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, o = Je(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), l = Je(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), i = -n.scrollLeft + Xn(e), s = -n.scrollTop;
  return je(a || r).direction === "rtl" && (i += Je(r.clientWidth, a ? a.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: i,
    y: s
  };
}
function Jn(e) {
  var t = je(e), r = t.overflow, n = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function ki(e) {
  return ["html", "body", "#document"].indexOf(Ee(e)) >= 0 ? e.ownerDocument.body : be(e) && Jn(e) ? e : ki(Fr(e));
}
function er(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = ki(e), a = n === ((r = e.ownerDocument) == null ? void 0 : r.body), o = ve(n), l = a ? [o].concat(o.visualViewport || [], Jn(n) ? n : []) : n, i = t.concat(l);
  return a ? i : (
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
function bu(e, t) {
  var r = At(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Za(e, t, r) {
  return t === _i ? $n(gu(e, r)) : Qe(t) ? bu(t, r) : $n(yu(Ke(e)));
}
function mu(e) {
  var t = er(Fr(e)), r = ["absolute", "fixed"].indexOf(je(e).position) >= 0, n = r && be(e) ? dr(e) : e;
  return Qe(n) ? t.filter(function(a) {
    return Qe(a) && Si(a, n) && Ee(a) !== "body";
  }) : [];
}
function _u(e, t, r, n) {
  var a = t === "clippingParents" ? mu(e) : [].concat(t), o = [].concat(a, [r]), l = o[0], i = o.reduce(function(s, c) {
    var u = Za(e, c, n);
    return s.top = Je(u.top, s.top), s.right = kr(u.right, s.right), s.bottom = kr(u.bottom, s.bottom), s.left = Je(u.left, s.left), s;
  }, Za(e, l, n));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function $i(e) {
  var t = e.reference, r = e.element, n = e.placement, a = n ? ke(n) : null, o = n ? kt(n) : null, l = t.x + t.width / 2 - r.width / 2, i = t.y + t.height / 2 - r.height / 2, s;
  switch (a) {
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
  var c = a ? qn(a) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (o) {
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
  var r = t, n = r.placement, a = n === void 0 ? e.placement : n, o = r.strategy, l = o === void 0 ? e.strategy : o, i = r.boundary, s = i === void 0 ? Nl : i, c = r.rootBoundary, u = c === void 0 ? _i : c, f = r.elementContext, p = f === void 0 ? Wt : f, d = r.altBoundary, h = d === void 0 ? !1 : d, g = r.padding, v = g === void 0 ? 0 : g, y = Oi(typeof v != "number" ? v : Ai(v, fr)), C = p === Wt ? Vl : Wt, x = e.rects.popper, S = e.elements[h ? C : p], T = _u(Qe(S) ? S : S.contextElement || Ke(e.elements.popper), s, u, l), $ = At(e.elements.reference), R = $i({
    reference: $,
    element: x,
    strategy: "absolute",
    placement: a
  }), H = $n(Object.assign({}, x, R)), b = p === Wt ? H : $, O = {
    top: T.top - b.top + y.top,
    bottom: b.bottom - T.bottom + y.bottom,
    left: T.left - b.left + y.left,
    right: b.right - T.right + y.right
  }, m = e.modifiersData.offset;
  if (p === Wt && m) {
    var j = m[a];
    Object.keys(O).forEach(function(E) {
      var I = [Ce, _e].indexOf(E) >= 0 ? 1 : -1, Q = [fe, _e].indexOf(E) >= 0 ? "y" : "x";
      O[E] += j[Q] * I;
    });
  }
  return O;
}
function Cu(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, a = r.boundary, o = r.rootBoundary, l = r.padding, i = r.flipVariations, s = r.allowedAutoPlacements, c = s === void 0 ? Ci : s, u = kt(n), f = u ? i ? qa : qa.filter(function(h) {
    return kt(h) === u;
  }) : fr, p = f.filter(function(h) {
    return c.indexOf(h) >= 0;
  });
  p.length === 0 && (p = f);
  var d = p.reduce(function(h, g) {
    return h[g] = lr(e, {
      placement: g,
      boundary: a,
      rootBoundary: o,
      padding: l
    })[ke(g)], h;
  }, {});
  return Object.keys(d).sort(function(h, g) {
    return d[h] - d[g];
  });
}
function wu(e) {
  if (ke(e) === Gn)
    return [];
  var t = xr(e);
  return [Ja(e), t, Ja(t)];
}
function Su(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var a = r.mainAxis, o = a === void 0 ? !0 : a, l = r.altAxis, i = l === void 0 ? !0 : l, s = r.fallbackPlacements, c = r.padding, u = r.boundary, f = r.rootBoundary, p = r.altBoundary, d = r.flipVariations, h = d === void 0 ? !0 : d, g = r.allowedAutoPlacements, v = t.options.placement, y = ke(v), C = y === v, x = s || (C || !h ? [xr(v)] : wu(v)), S = [v].concat(x).reduce(function(dt, Be) {
      return dt.concat(ke(Be) === Gn ? Cu(t, {
        placement: Be,
        boundary: u,
        rootBoundary: f,
        padding: c,
        flipVariations: h,
        allowedAutoPlacements: g
      }) : Be);
    }, []), T = t.rects.reference, $ = t.rects.popper, R = /* @__PURE__ */ new Map(), H = !0, b = S[0], O = 0; O < S.length; O++) {
      var m = S[O], j = ke(m), E = kt(m) === xt, I = [fe, _e].indexOf(j) >= 0, Q = I ? "width" : "height", re = lr(t, {
        placement: m,
        boundary: u,
        rootBoundary: f,
        altBoundary: p,
        padding: c
      }), A = I ? E ? Ce : de : E ? _e : fe;
      T[Q] > $[Q] && (A = xr(A));
      var D = xr(A), L = [];
      if (o && L.push(re[j] <= 0), i && L.push(re[A] <= 0, re[D] <= 0), L.every(function(dt) {
        return dt;
      })) {
        b = m, H = !1;
        break;
      }
      R.set(m, L);
    }
    if (H)
      for (var le = h ? 3 : 1, Le = function(Be) {
        var zt = S.find(function(gr) {
          var qe = R.get(gr);
          if (qe)
            return qe.slice(0, Be).every(function(tn) {
              return tn;
            });
        });
        if (zt)
          return b = zt, "break";
      }, Ue = le; Ue > 0; Ue--) {
        var ft = Le(Ue);
        if (ft === "break") break;
      }
    t.placement !== b && (t.modifiersData[n]._skip = !0, t.placement = b, t.reset = !0);
  }
}
const xu = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Su,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Qa(e, t, r) {
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
function eo(e) {
  return [fe, Ce, _e, de].some(function(t) {
    return e[t] >= 0;
  });
}
function Ou(e) {
  var t = e.state, r = e.name, n = t.rects.reference, a = t.rects.popper, o = t.modifiersData.preventOverflow, l = lr(t, {
    elementContext: "reference"
  }), i = lr(t, {
    altBoundary: !0
  }), s = Qa(l, n), c = Qa(i, a, o), u = eo(s), f = eo(c);
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
const Au = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Ou
};
function ku(e, t, r) {
  var n = ke(e), a = [de, fe].indexOf(n) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, l = o[0], i = o[1];
  return l = l || 0, i = (i || 0) * a, [de, Ce].indexOf(n) >= 0 ? {
    x: i,
    y: l
  } : {
    x: l,
    y: i
  };
}
function $u(e) {
  var t = e.state, r = e.options, n = e.name, a = r.offset, o = a === void 0 ? [0, 0] : a, l = Ci.reduce(function(u, f) {
    return u[f] = ku(f, t.rects, o), u;
  }, {}), i = l[t.placement], s = i.x, c = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += s, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = l;
}
const Eu = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: $u
};
function Tu(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = $i({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Mu = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Tu,
  data: {}
};
function Ru(e) {
  return e === "x" ? "y" : "x";
}
function Pu(e) {
  var t = e.state, r = e.options, n = e.name, a = r.mainAxis, o = a === void 0 ? !0 : a, l = r.altAxis, i = l === void 0 ? !1 : l, s = r.boundary, c = r.rootBoundary, u = r.altBoundary, f = r.padding, p = r.tether, d = p === void 0 ? !0 : p, h = r.tetherOffset, g = h === void 0 ? 0 : h, v = lr(t, {
    boundary: s,
    rootBoundary: c,
    padding: f,
    altBoundary: u
  }), y = ke(t.placement), C = kt(t.placement), x = !C, S = qn(y), T = Ru(S), $ = t.modifiersData.popperOffsets, R = t.rects.reference, H = t.rects.popper, b = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, O = typeof b == "number" ? {
    mainAxis: b,
    altAxis: b
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, b), m = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, j = {
    x: 0,
    y: 0
  };
  if ($) {
    if (o) {
      var E, I = S === "y" ? fe : de, Q = S === "y" ? _e : Ce, re = S === "y" ? "height" : "width", A = $[S], D = A + v[I], L = A - v[Q], le = d ? -H[re] / 2 : 0, Le = C === xt ? R[re] : H[re], Ue = C === xt ? -H[re] : -R[re], ft = t.elements.arrow, dt = d && ft ? Un(ft) : {
        width: 0,
        height: 0
      }, Be = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : xi(), zt = Be[I], gr = Be[Q], qe = Qt(0, R[re], dt[re]), tn = x ? R[re] / 2 - le - qe - zt - O.mainAxis : Le - qe - zt - O.mainAxis, Ms = x ? -R[re] / 2 + le + qe + gr + O.mainAxis : Ue + qe + gr + O.mainAxis, rn = t.elements.arrow && dr(t.elements.arrow), Rs = rn ? S === "y" ? rn.clientTop || 0 : rn.clientLeft || 0 : 0, Aa = (E = m == null ? void 0 : m[S]) != null ? E : 0, Ps = A + tn - Aa - Rs, js = A + Ms - Aa, ka = Qt(d ? kr(D, Ps) : D, A, d ? Je(L, js) : L);
      $[S] = ka, j[S] = ka - A;
    }
    if (i) {
      var $a, Is = S === "x" ? fe : de, Ds = S === "x" ? _e : Ce, Ye = $[T], yr = T === "y" ? "height" : "width", Ea = Ye + v[Is], Ta = Ye - v[Ds], nn = [fe, de].indexOf(y) !== -1, Ma = ($a = m == null ? void 0 : m[T]) != null ? $a : 0, Ra = nn ? Ea : Ye - R[yr] - H[yr] - Ma + O.altAxis, Pa = nn ? Ye + R[yr] + H[yr] - Ma - O.altAxis : Ta, ja = d && nn ? nu(Ra, Ye, Pa) : Qt(d ? Ra : Ea, Ye, d ? Pa : Ta);
      $[T] = ja, j[T] = ja - Ye;
    }
    t.modifiersData[n] = j;
  }
}
const ju = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Pu,
  requiresIfExists: ["offset"]
};
function Iu(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Du(e) {
  return e === ve(e) || !be(e) ? Yn(e) : Iu(e);
}
function Hu(e) {
  var t = e.getBoundingClientRect(), r = Ot(t.width) / e.offsetWidth || 1, n = Ot(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Lu(e, t, r) {
  r === void 0 && (r = !1);
  var n = be(t), a = be(t) && Hu(t), o = Ke(t), l = At(e, a, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((Ee(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Jn(o)) && (i = Du(t)), be(t) ? (s = At(t, !0), s.x += t.clientLeft, s.y += t.clientTop) : o && (s.x = Xn(o))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function Bu(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function a(o) {
    r.add(o.name);
    var l = [].concat(o.requires || [], o.requiresIfExists || []);
    l.forEach(function(i) {
      if (!r.has(i)) {
        var s = t.get(i);
        s && a(s);
      }
    }), n.push(o);
  }
  return e.forEach(function(o) {
    r.has(o.name) || a(o);
  }), n;
}
function Nu(e) {
  var t = Bu(e);
  return Jl.reduce(function(r, n) {
    return r.concat(t.filter(function(a) {
      return a.phase === n;
    }));
  }, []);
}
function Vu(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Fu(e) {
  var t = e.reduce(function(r, n) {
    var a = r[n.name];
    return r[n.name] = a ? Object.assign({}, a, n, {
      options: Object.assign({}, a.options, n.options),
      data: Object.assign({}, a.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var to = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ro() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function zu(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, a = t.defaultOptions, o = a === void 0 ? to : a;
  return function(i, s, c) {
    c === void 0 && (c = o);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, to, o),
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
        g(), u.options = Object.assign({}, o, u.options, C), u.scrollParents = {
          reference: Qe(i) ? er(i) : i.contextElement ? er(i.contextElement) : [],
          popper: er(s)
        };
        var x = Nu(Fu([].concat(n, u.options.modifiers)));
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
          if (ro(C, x)) {
            u.rects = {
              reference: Lu(C, dr(x), u.options.strategy === "fixed"),
              popper: Un(x)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(O) {
              return u.modifiersData[O.name] = Object.assign({}, O.data);
            });
            for (var S = 0; S < u.orderedModifiers.length; S++) {
              if (u.reset === !0) {
                u.reset = !1, S = -1;
                continue;
              }
              var T = u.orderedModifiers[S], $ = T.fn, R = T.options, H = R === void 0 ? {} : R, b = T.name;
              typeof $ == "function" && (u = $({
                state: u,
                options: H,
                name: b,
                instance: d
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Vu(function() {
        return new Promise(function(v) {
          d.forceUpdate(), v(u);
        });
      }),
      destroy: function() {
        g(), p = !0;
      }
    };
    if (!ro(i, s))
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
var Wu = [pu, Mu, fu, eu, Eu, xu, ju, su, Au], Gu = /* @__PURE__ */ zu({
  defaultModifiers: Wu
});
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function no(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ku(e) {
  var t, r;
  return no(e) === !1 ? !1 : (t = e.constructor, t === void 0 ? !0 : (r = t.prototype, !(no(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
function tr() {
  return tr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, tr.apply(this, arguments);
}
function Ei(e, t) {
  if (e == null) return {};
  var r, n, a = {}, o = Object.keys(e);
  for (n = 0; n < o.length; n++) t.indexOf(r = o[n]) >= 0 || (a[r] = e[r]);
  return a;
}
const Uu = { silent: !1, logLevel: "warn" }, qu = ["validator"], Ti = Object.prototype, Mi = Ti.toString, Yu = Ti.hasOwnProperty, Ri = /^\s*function (\w+)/;
function ao(e) {
  var t;
  const r = (t = e == null ? void 0 : e.type) !== null && t !== void 0 ? t : e;
  if (r) {
    const n = r.toString().match(Ri);
    return n ? n[1] : "";
  }
  return "";
}
const et = Ku, Xu = (e) => e;
let ie = Xu;
const $t = (e, t) => Yu.call(e, t), Ju = Number.isInteger || function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}, Et = Array.isArray || function(e) {
  return Mi.call(e) === "[object Array]";
}, Tt = (e) => Mi.call(e) === "[object Function]", $r = (e) => et(e) && $t(e, "_vueTypes_name"), Pi = (e) => et(e) && ($t(e, "type") || ["_vueTypes_name", "validator", "default", "required"].some((t) => $t(e, t)));
function Zn(e, t) {
  return Object.defineProperty(e.bind(t), "__original", { value: e });
}
function st(e, t, r = !1) {
  let n, a = !0, o = "";
  n = et(e) ? e : { type: e };
  const l = $r(n) ? n._vueTypes_name + " - " : "";
  if (Pi(n) && n.type !== null) {
    if (n.type === void 0 || n.type === !0 || !n.required && t === void 0) return a;
    Et(n.type) ? (a = n.type.some((i) => st(i, t, !0) === !0), o = n.type.map((i) => ao(i)).join(" or ")) : (o = ao(n), a = o === "Array" ? Et(t) : o === "Object" ? et(t) : o === "String" || o === "Number" || o === "Boolean" || o === "Function" ? function(i) {
      if (i == null) return "";
      const s = i.constructor.toString().match(Ri);
      return s ? s[1] : "";
    }(t) === o : t instanceof n.type);
  }
  if (!a) {
    const i = `${l}value "${t}" should be of type "${o}"`;
    return r === !1 ? (ie(i), !1) : i;
  }
  if ($t(n, "validator") && Tt(n.validator)) {
    const i = ie, s = [];
    if (ie = (c) => {
      s.push(c);
    }, a = n.validator(t), ie = i, !a) {
      const c = (s.length > 1 ? "* " : "") + s.join(`
* `);
      return s.length = 0, r === !1 ? (ie(c), a) : c;
    }
  }
  return a;
}
function he(e, t) {
  const r = Object.defineProperties(t, { _vueTypes_name: { value: e, writable: !0 }, isRequired: { get() {
    return this.required = !0, this;
  } }, def: { value(a) {
    return a === void 0 ? ($t(this, "default") && delete this.default, this) : Tt(a) || st(this, a, !0) === !0 ? (this.default = Et(a) ? () => [...a] : et(a) ? () => Object.assign({}, a) : a, this) : (ie(`${this._vueTypes_name} - invalid default value: "${a}"`), this);
  } } }), { validator: n } = r;
  return Tt(n) && (r.validator = Zn(n, r)), r;
}
function $e(e, t) {
  const r = he(e, t);
  return Object.defineProperty(r, "validate", { value(n) {
    return Tt(this.validator) && ie(`${this._vueTypes_name} - calling .validate() will overwrite the current custom validator function. Validator info:
${JSON.stringify(this)}`), this.validator = Zn(n, this), this;
  } });
}
function oo(e, t, r) {
  const n = function(s) {
    const c = {};
    return Object.getOwnPropertyNames(s).forEach((u) => {
      c[u] = Object.getOwnPropertyDescriptor(s, u);
    }), Object.defineProperties({}, c);
  }(t);
  if (n._vueTypes_name = e, !et(r)) return n;
  const { validator: a } = r, o = Ei(r, qu);
  if (Tt(a)) {
    let { validator: s } = n;
    s && (s = (i = (l = s).__original) !== null && i !== void 0 ? i : l), n.validator = Zn(s ? function(c) {
      return s.call(this, c) && a.call(this, c);
    } : a, n);
  }
  var l, i;
  return Object.assign(n, o);
}
function zr(e) {
  return e.replace(/^(?!\s*$)/gm, "  ");
}
const Zu = () => $e("any", {}), Qu = () => $e("function", { type: Function }), ec = () => $e("boolean", { type: Boolean }), tc = () => $e("string", { type: String }), rc = () => $e("number", { type: Number }), nc = () => $e("array", { type: Array }), ac = () => $e("object", { type: Object }), oc = () => he("integer", { type: Number, validator: (e) => Ju(e) }), ic = () => he("symbol", { validator: (e) => typeof e == "symbol" });
function sc(e, t = "custom validation failed") {
  if (typeof e != "function") throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return he(e.name || "<<anonymous function>>", { type: null, validator(r) {
    const n = e(r);
    return n || ie(`${this._vueTypes_name} - ${t}`), n;
  } });
}
function lc(e) {
  if (!Et(e)) throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  const t = `oneOf - value should be one of "${e.join('", "')}".`, r = e.reduce((n, a) => {
    if (a != null) {
      const o = a.constructor;
      n.indexOf(o) === -1 && n.push(o);
    }
    return n;
  }, []);
  return he("oneOf", { type: r.length > 0 ? r : void 0, validator(n) {
    const a = e.indexOf(n) !== -1;
    return a || ie(t), a;
  } });
}
function uc(e) {
  if (!Et(e)) throw new TypeError("[VueTypes error]: You must provide an array as argument");
  let t = !1, r = [];
  for (let a = 0; a < e.length; a += 1) {
    const o = e[a];
    if (Pi(o)) {
      if ($r(o) && o._vueTypes_name === "oneOf" && o.type) {
        r = r.concat(o.type);
        continue;
      }
      if (Tt(o.validator) && (t = !0), o.type === !0 || !o.type) {
        ie('oneOfType - invalid usage of "true" or "null" as types.');
        continue;
      }
      r = r.concat(o.type);
    } else r.push(o);
  }
  r = r.filter((a, o) => r.indexOf(a) === o);
  const n = r.length > 0 ? r : null;
  return he("oneOfType", t ? { type: n, validator(a) {
    const o = [], l = e.some((i) => {
      const s = st($r(i) && i._vueTypes_name === "oneOf" ? i.type || null : i, a, !0);
      return typeof s == "string" && o.push(s), s === !0;
    });
    return l || ie(`oneOfType - provided value does not match any of the ${o.length} passed-in validators:
${zr(o.join(`
`))}`), l;
  } } : { type: n });
}
function cc(e) {
  return he("arrayOf", { type: Array, validator(t) {
    let r = "";
    const n = t.every((a) => (r = st(e, a, !0), r === !0));
    return n || ie(`arrayOf - value validation error:
${zr(r)}`), n;
  } });
}
function fc(e) {
  return he("instanceOf", { type: e });
}
function dc(e) {
  return he("objectOf", { type: Object, validator(t) {
    let r = "";
    const n = Object.keys(t).every((a) => (r = st(e, t[a], !0), r === !0));
    return n || ie(`objectOf - value validation error:
${zr(r)}`), n;
  } });
}
function pc(e) {
  const t = Object.keys(e), r = t.filter((a) => {
    var o;
    return !((o = e[a]) === null || o === void 0 || !o.required);
  }), n = he("shape", { type: Object, validator(a) {
    if (!et(a)) return !1;
    const o = Object.keys(a);
    if (r.length > 0 && r.some((l) => o.indexOf(l) === -1)) {
      const l = r.filter((i) => o.indexOf(i) === -1);
      return ie(l.length === 1 ? `shape - required property "${l[0]}" is not defined.` : `shape - required properties "${l.join('", "')}" are not defined.`), !1;
    }
    return o.every((l) => {
      if (t.indexOf(l) === -1) return this._vueTypes_isLoose === !0 || (ie(`shape - shape definition does not include a "${l}" property. Allowed keys: "${t.join('", "')}".`), !1);
      const i = st(e[l], a[l], !0);
      return typeof i == "string" && ie(`shape - "${l}" property validation error:
 ${zr(i)}`), i === !0;
    });
  } });
  return Object.defineProperty(n, "_vueTypes_isLoose", { writable: !0, value: !1 }), Object.defineProperty(n, "loose", { get() {
    return this._vueTypes_isLoose = !0, this;
  } }), n;
}
const hc = ["name", "validate", "getter"], vc = /* @__PURE__ */ (() => {
  var e;
  return (e = class {
    static get any() {
      return Zu();
    }
    static get func() {
      return Qu().def(this.defaults.func);
    }
    static get bool() {
      return ec().def(this.defaults.bool);
    }
    static get string() {
      return tc().def(this.defaults.string);
    }
    static get number() {
      return rc().def(this.defaults.number);
    }
    static get array() {
      return nc().def(this.defaults.array);
    }
    static get object() {
      return ac().def(this.defaults.object);
    }
    static get integer() {
      return oc().def(this.defaults.integer);
    }
    static get symbol() {
      return ic();
    }
    static get nullable() {
      return { type: null };
    }
    static extend(t) {
      if (Et(t)) return t.forEach((s) => this.extend(s)), this;
      const { name: r, validate: n = !1, getter: a = !1 } = t, o = Ei(t, hc);
      if ($t(this, r)) throw new TypeError(`[VueTypes error]: Type "${r}" already defined`);
      const { type: l } = o;
      if ($r(l)) return delete o.type, Object.defineProperty(this, r, a ? { get: () => oo(r, l, o) } : { value(...s) {
        const c = oo(r, l, o);
        return c.validator && (c.validator = c.validator.bind(c, ...s)), c;
      } });
      let i;
      return i = a ? { get() {
        const s = Object.assign({}, o);
        return n ? $e(r, s) : he(r, s);
      }, enumerable: !0 } : { value(...s) {
        const c = Object.assign({}, o);
        let u;
        return u = n ? $e(r, c) : he(r, c), c.validator && (u.validator = c.validator.bind(u, ...s)), u;
      }, enumerable: !0 }, Object.defineProperty(this, r, i);
    }
  }).defaults = {}, e.sensibleDefaults = void 0, e.config = Uu, e.custom = sc, e.oneOf = lc, e.instanceOf = fc, e.oneOfType = uc, e.arrayOf = cc, e.objectOf = dc, e.shape = pc, e.utils = { validate: (t, r) => st(r, t, !0) === !0, toType: (t, r, n = !1) => n ? $e(t, r) : he(t, r) }, e;
})();
function gc(e = { func: () => {
}, bool: !0, string: "", number: 0, array: () => [], object: () => ({}), integer: 0 }) {
  var t;
  return (t = class extends vc {
    static get sensibleDefaults() {
      return tr({}, this.defaults);
    }
    static set sensibleDefaults(r) {
      this.defaults = r !== !1 ? tr({}, r !== !0 ? r : e) : {};
    }
  }).defaults = tr({}, e), t;
}
let M = class extends gc() {
};
var io = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Qn(e) {
  var t = { exports: {} };
  return e(t, t.exports), t.exports;
}
var Cr = function(e) {
  return e && e.Math == Math && e;
}, te = Cr(typeof globalThis == "object" && globalThis) || Cr(typeof window == "object" && window) || Cr(typeof self == "object" && self) || Cr(typeof io == "object" && io) || /* @__PURE__ */ function() {
  return this;
}() || Function("return this")(), F = function(e) {
  try {
    return !!e();
  } catch {
    return !0;
  }
}, ye = !F(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] != 7;
}), so = {}.propertyIsEnumerable, lo = Object.getOwnPropertyDescriptor, yc = { f: lo && !so.call({ 1: 2 }, 1) ? function(e) {
  var t = lo(this, e);
  return !!t && t.enumerable;
} : so }, Wr = function(e, t) {
  return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
}, bc = {}.toString, Re = function(e) {
  return bc.call(e).slice(8, -1);
}, mc = "".split, Gr = F(function() {
  return !Object("z").propertyIsEnumerable(0);
}) ? function(e) {
  return Re(e) == "String" ? mc.call(e, "") : Object(e);
} : Object, ze = function(e) {
  if (e == null) throw TypeError("Can't call method on " + e);
  return e;
}, Ht = function(e) {
  return Gr(ze(e));
}, ne = function(e) {
  return typeof e == "object" ? e !== null : typeof e == "function";
}, ea = function(e, t) {
  if (!ne(e)) return e;
  var r, n;
  if (t && typeof (r = e.toString) == "function" && !ne(n = r.call(e)) || typeof (r = e.valueOf) == "function" && !ne(n = r.call(e)) || !t && typeof (r = e.toString) == "function" && !ne(n = r.call(e))) return n;
  throw TypeError("Can't convert object to primitive value");
}, _c = {}.hasOwnProperty, J = function(e, t) {
  return _c.call(e, t);
}, En = te.document, Cc = ne(En) && ne(En.createElement), ji = function(e) {
  return Cc ? En.createElement(e) : {};
}, Ii = !ye && !F(function() {
  return Object.defineProperty(ji("div"), "a", { get: function() {
    return 7;
  } }).a != 7;
}), uo = Object.getOwnPropertyDescriptor, ta = { f: ye ? uo : function(e, t) {
  if (e = Ht(e), t = ea(t, !0), Ii) try {
    return uo(e, t);
  } catch {
  }
  if (J(e, t)) return Wr(!yc.f.call(e, t), e[t]);
} }, ue = function(e) {
  if (!ne(e)) throw TypeError(String(e) + " is not an object");
  return e;
}, co = Object.defineProperty, Ie = { f: ye ? co : function(e, t, r) {
  if (ue(e), t = ea(t, !0), ue(r), Ii) try {
    return co(e, t, r);
  } catch {
  }
  if ("get" in r || "set" in r) throw TypeError("Accessors not supported");
  return "value" in r && (e[t] = r.value), e;
} }, me = ye ? function(e, t, r) {
  return Ie.f(e, t, Wr(1, r));
} : function(e, t, r) {
  return e[t] = r, e;
}, ra = function(e, t) {
  try {
    me(te, e, t);
  } catch {
    te[e] = t;
  }
  return t;
}, tt = te["__core-js_shared__"] || ra("__core-js_shared__", {}), wc = Function.toString;
typeof tt.inspectSource != "function" && (tt.inspectSource = function(e) {
  return wc.call(e);
});
var Er, rr, Tr, Di = tt.inspectSource, fo = te.WeakMap, Sc = typeof fo == "function" && /native code/.test(Di(fo)), Hi = Qn(function(e) {
  (e.exports = function(t, r) {
    return tt[t] || (tt[t] = r !== void 0 ? r : {});
  })("versions", []).push({ version: "3.8.3", mode: "global", copyright: "© 2021 Denis Pushkarev (zloirock.ru)" });
}), xc = 0, Oc = Math.random(), na = function(e) {
  return "Symbol(" + String(e === void 0 ? "" : e) + ")_" + (++xc + Oc).toString(36);
}, po = Hi("keys"), aa = function(e) {
  return po[e] || (po[e] = na(e));
}, Kr = {}, Ac = te.WeakMap;
if (Sc) {
  var pt = tt.state || (tt.state = new Ac()), kc = pt.get, $c = pt.has, Ec = pt.set;
  Er = function(e, t) {
    return t.facade = e, Ec.call(pt, e, t), t;
  }, rr = function(e) {
    return kc.call(pt, e) || {};
  }, Tr = function(e) {
    return $c.call(pt, e);
  };
} else {
  var Gt = aa("state");
  Kr[Gt] = !0, Er = function(e, t) {
    return t.facade = e, me(e, Gt, t), t;
  }, rr = function(e) {
    return J(e, Gt) ? e[Gt] : {};
  }, Tr = function(e) {
    return J(e, Gt);
  };
}
var We = { set: Er, get: rr, has: Tr, enforce: function(e) {
  return Tr(e) ? rr(e) : Er(e, {});
}, getterFor: function(e) {
  return function(t) {
    var r;
    if (!ne(t) || (r = rr(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
    return r;
  };
} }, Ge = Qn(function(e) {
  var t = We.get, r = We.enforce, n = String(String).split("String");
  (e.exports = function(a, o, l, i) {
    var s, c = !!i && !!i.unsafe, u = !!i && !!i.enumerable, f = !!i && !!i.noTargetGet;
    typeof l == "function" && (typeof o != "string" || J(l, "name") || me(l, "name", o), (s = r(l)).source || (s.source = n.join(typeof o == "string" ? o : ""))), a !== te ? (c ? !f && a[o] && (u = !0) : delete a[o], u ? a[o] = l : me(a, o, l)) : u ? a[o] = l : ra(o, l);
  })(Function.prototype, "toString", function() {
    return typeof this == "function" && t(this).source || Di(this);
  });
}), an = te, ho = function(e) {
  return typeof e == "function" ? e : void 0;
}, Ur = function(e, t) {
  return arguments.length < 2 ? ho(an[e]) || ho(te[e]) : an[e] && an[e][t] || te[e] && te[e][t];
}, Tc = Math.ceil, Mc = Math.floor, Lt = function(e) {
  return isNaN(e = +e) ? 0 : (e > 0 ? Mc : Tc)(e);
}, Rc = Math.min, ge = function(e) {
  return e > 0 ? Rc(Lt(e), 9007199254740991) : 0;
}, Pc = Math.max, jc = Math.min, Mr = function(e, t) {
  var r = Lt(e);
  return r < 0 ? Pc(r + t, 0) : jc(r, t);
}, vo = function(e) {
  return function(t, r, n) {
    var a, o = Ht(t), l = ge(o.length), i = Mr(n, l);
    if (e && r != r) {
      for (; l > i; ) if ((a = o[i++]) != a) return !0;
    } else for (; l > i; i++) if ((e || i in o) && o[i] === r) return e || i || 0;
    return !e && -1;
  };
}, Li = { includes: vo(!0), indexOf: vo(!1) }, Ic = Li.indexOf, Bi = function(e, t) {
  var r, n = Ht(e), a = 0, o = [];
  for (r in n) !J(Kr, r) && J(n, r) && o.push(r);
  for (; t.length > a; ) J(n, r = t[a++]) && (~Ic(o, r) || o.push(r));
  return o;
}, Rr = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], Dc = Rr.concat("length", "prototype"), Hc = { f: Object.getOwnPropertyNames || function(e) {
  return Bi(e, Dc);
} }, Lc = { f: Object.getOwnPropertySymbols }, Bc = Ur("Reflect", "ownKeys") || function(e) {
  var t = Hc.f(ue(e)), r = Lc.f;
  return r ? t.concat(r(e)) : t;
}, Nc = function(e, t) {
  for (var r = Bc(t), n = Ie.f, a = ta.f, o = 0; o < r.length; o++) {
    var l = r[o];
    J(e, l) || n(e, l, a(t, l));
  }
}, Vc = /#|\.prototype\./, pr = function(e, t) {
  var r = zc[Fc(e)];
  return r == Gc || r != Wc && (typeof t == "function" ? F(t) : !!t);
}, Fc = pr.normalize = function(e) {
  return String(e).replace(Vc, ".").toLowerCase();
}, zc = pr.data = {}, Wc = pr.NATIVE = "N", Gc = pr.POLYFILL = "P", Tn = pr, Kc = ta.f, se = function(e, t) {
  var r, n, a, o, l, i = e.target, s = e.global, c = e.stat;
  if (r = s ? te : c ? te[i] || ra(i, {}) : (te[i] || {}).prototype) for (n in t) {
    if (o = t[n], a = e.noTargetGet ? (l = Kc(r, n)) && l.value : r[n], !Tn(s ? n : i + (c ? "." : "#") + n, e.forced) && a !== void 0) {
      if (typeof o == typeof a) continue;
      Nc(o, a);
    }
    (e.sham || a && a.sham) && me(o, "sham", !0), Ge(r, n, o, e);
  }
}, oa = function(e, t) {
  var r = [][e];
  return !!r && F(function() {
    r.call(null, t || function() {
      throw 1;
    }, 1);
  });
}, Uc = Object.defineProperty, on = {}, go = function(e) {
  throw e;
}, Bt = function(e, t) {
  if (J(on, e)) return on[e];
  t || (t = {});
  var r = [][e], n = !!J(t, "ACCESSORS") && t.ACCESSORS, a = J(t, 0) ? t[0] : go, o = J(t, 1) ? t[1] : void 0;
  return on[e] = !!r && !F(function() {
    if (n && !ye) return !0;
    var l = { length: -1 };
    n ? Uc(l, 1, { enumerable: !0, get: go }) : l[1] = 1, r.call(l, a, o);
  });
}, qc = Li.indexOf, Ni = [].indexOf, yo = !!Ni && 1 / [1].indexOf(1, -0) < 0, Yc = oa("indexOf"), Xc = Bt("indexOf", { ACCESSORS: !0, 1: 0 });
function lt(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Jc(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ut(e, t, r) {
  return r && Jc(e, r), e;
}
se({ target: "Array", proto: !0, forced: yo || !Yc || !Xc }, { indexOf: function(e) {
  return yo ? Ni.apply(this, arguments) || 0 : qc(this, e, arguments.length > 1 ? arguments[1] : void 0);
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
var Zc = [].join, Qc = Gr != Object, ef = oa("join", ",");
se({ target: "Array", proto: !0, forced: Qc || !ef }, { join: function(e) {
  return Zc.call(Ht(this), e === void 0 ? "," : e);
} });
var ht, Pr, De = function(e) {
  return Object(ze(e));
}, Mt = Array.isArray || function(e) {
  return Re(e) == "Array";
}, Vi = !!Object.getOwnPropertySymbols && !F(function() {
  return !String(Symbol());
}), tf = Vi && !Symbol.sham && typeof Symbol.iterator == "symbol", wr = Hi("wks"), nr = te.Symbol, rf = tf ? nr : nr && nr.withoutSetter || na, q = function(e) {
  return J(wr, e) || (Vi && J(nr, e) ? wr[e] = nr[e] : wr[e] = rf("Symbol." + e)), wr[e];
}, nf = q("species"), qr = function(e, t) {
  var r;
  return Mt(e) && (typeof (r = e.constructor) != "function" || r !== Array && !Mt(r.prototype) ? ne(r) && (r = r[nf]) === null && (r = void 0) : r = void 0), new (r === void 0 ? Array : r)(t === 0 ? 0 : t);
}, Rt = function(e, t, r) {
  var n = ea(t);
  n in e ? Ie.f(e, n, Wr(0, r)) : e[n] = r;
}, sn = Ur("navigator", "userAgent") || "", bo = te.process, mo = bo && bo.versions, _o = mo && mo.v8;
_o ? Pr = (ht = _o.split("."))[0] + ht[1] : sn && (!(ht = sn.match(/Edge\/(\d+)/)) || ht[1] >= 74) && (ht = sn.match(/Chrome\/(\d+)/)) && (Pr = ht[1]);
var jr = Pr && +Pr, af = q("species"), ia = function(e) {
  return jr >= 51 || !F(function() {
    var t = [];
    return (t.constructor = {})[af] = function() {
      return { foo: 1 };
    }, t[e](Boolean).foo !== 1;
  });
}, of = ia("splice"), sf = Bt("splice", { ACCESSORS: !0, 0: 0, 1: 2 }), lf = Math.max, uf = Math.min;
se({ target: "Array", proto: !0, forced: !of || !sf }, { splice: function(e, t) {
  var r, n, a, o, l, i, s = De(this), c = ge(s.length), u = Mr(e, c), f = arguments.length;
  if (f === 0 ? r = n = 0 : f === 1 ? (r = 0, n = c - u) : (r = f - 2, n = uf(lf(Lt(t), 0), c - u)), c + r - n > 9007199254740991) throw TypeError("Maximum allowed length exceeded");
  for (a = qr(s, n), o = 0; o < n; o++) (l = u + o) in s && Rt(a, o, s[l]);
  if (a.length = n, r < n) {
    for (o = u; o < c - n; o++) i = o + r, (l = o + n) in s ? s[i] = s[l] : delete s[i];
    for (o = c; o > c - n + r; o--) delete s[o - 1];
  } else if (r > n) for (o = c - n; o > u; o--) i = o + r - 1, (l = o + n - 1) in s ? s[i] = s[l] : delete s[i];
  for (o = 0; o < r; o++) s[o + u] = arguments[o + 2];
  return s.length = c - n + r, a;
} });
var Fi = {};
Fi[q("toStringTag")] = "z";
var sa = String(Fi) === "[object z]", cf = q("toStringTag"), ff = Re(/* @__PURE__ */ function() {
  return arguments;
}()) == "Arguments", zi = sa ? Re : function(e) {
  var t, r, n;
  return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (r = function(a, o) {
    try {
      return a[o];
    } catch {
    }
  }(t = Object(e), cf)) == "string" ? r : ff ? Re(t) : (n = Re(t)) == "Object" && typeof t.callee == "function" ? "Arguments" : n;
}, df = sa ? {}.toString : function() {
  return "[object " + zi(this) + "]";
};
sa || Ge(Object.prototype, "toString", df, { unsafe: !0 });
var Wi = function() {
  var e = ue(this), t = "";
  return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t;
};
function Co(e, t) {
  return RegExp(e, t);
}
var ln, un, wo = { UNSUPPORTED_Y: F(function() {
  var e = Co("a", "y");
  return e.lastIndex = 2, e.exec("abcd") != null;
}), BROKEN_CARET: F(function() {
  var e = Co("^r", "gy");
  return e.lastIndex = 2, e.exec("str") != null;
}) }, Ir = RegExp.prototype.exec, pf = String.prototype.replace, Gi = Ir, cn = (ln = /a/, un = /b*/g, Ir.call(ln, "a"), Ir.call(un, "a"), ln.lastIndex !== 0 || un.lastIndex !== 0), So = wo.UNSUPPORTED_Y || wo.BROKEN_CARET, fn = /()??/.exec("")[1] !== void 0;
(cn || fn || So) && (Gi = function(e) {
  var t, r, n, a, o = this, l = So && o.sticky, i = Wi.call(o), s = o.source, c = 0, u = e;
  return l && ((i = i.replace("y", "")).indexOf("g") === -1 && (i += "g"), u = String(e).slice(o.lastIndex), o.lastIndex > 0 && (!o.multiline || o.multiline && e[o.lastIndex - 1] !== `
`) && (s = "(?: " + s + ")", u = " " + u, c++), r = new RegExp("^(?:" + s + ")", i)), fn && (r = new RegExp("^" + s + "$(?!\\s)", i)), cn && (t = o.lastIndex), n = Ir.call(l ? r : o, u), l ? n ? (n.input = n.input.slice(c), n[0] = n[0].slice(c), n.index = o.lastIndex, o.lastIndex += n[0].length) : o.lastIndex = 0 : cn && n && (o.lastIndex = o.global ? n.index + n[0].length : t), fn && n && n.length > 1 && pf.call(n[0], r, function() {
    for (a = 1; a < arguments.length - 2; a++) arguments[a] === void 0 && (n[a] = void 0);
  }), n;
});
var ur = Gi;
se({ target: "RegExp", proto: !0, forced: /./.exec !== ur }, { exec: ur });
var Ki = RegExp.prototype, Ui = Ki.toString, hf = F(function() {
  return Ui.call({ source: "a", flags: "b" }) != "/a/b";
}), vf = Ui.name != "toString";
(hf || vf) && Ge(RegExp.prototype, "toString", function() {
  var e = ue(this), t = String(e.source), r = e.flags;
  return "/" + t + "/" + String(r === void 0 && e instanceof RegExp && !("flags" in Ki) ? Wi.call(e) : r);
}, { unsafe: !0 });
var gf = q("species"), yf = !F(function() {
  var e = /./;
  return e.exec = function() {
    var t = [];
    return t.groups = { a: "7" }, t;
  }, "".replace(e, "$<a>") !== "7";
}), xo = "a".replace(/./, "$0") === "$0", Oo = q("replace"), Ao = !!/./[Oo] && /./[Oo]("a", "$0") === "", bf = !F(function() {
  var e = /(?:)/, t = e.exec;
  e.exec = function() {
    return t.apply(this, arguments);
  };
  var r = "ab".split(e);
  return r.length !== 2 || r[0] !== "a" || r[1] !== "b";
}), qi = function(e, t, r, n) {
  var a = q(e), o = !F(function() {
    var f = {};
    return f[a] = function() {
      return 7;
    }, ""[e](f) != 7;
  }), l = o && !F(function() {
    var f = !1, p = /a/;
    return e === "split" && ((p = {}).constructor = {}, p.constructor[gf] = function() {
      return p;
    }, p.flags = "", p[a] = /./[a]), p.exec = function() {
      return f = !0, null;
    }, p[a](""), !f;
  });
  if (!o || !l || e === "replace" && (!yf || !xo || Ao) || e === "split" && !bf) {
    var i = /./[a], s = r(a, ""[e], function(f, p, d, h, g) {
      return p.exec === ur ? o && !g ? { done: !0, value: i.call(p, d, h) } : { done: !0, value: f.call(d, p, h) } : { done: !1 };
    }, { REPLACE_KEEPS_$0: xo, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Ao }), c = s[0], u = s[1];
    Ge(String.prototype, e, c), Ge(RegExp.prototype, a, function(f, p) {
      return u.call(f, this, p);
    });
  }
  n && me(RegExp.prototype[a], "sham", !0);
}, mf = q("match"), Yi = function(e) {
  var t;
  return ne(e) && ((t = e[mf]) !== void 0 ? !!t : Re(e) == "RegExp");
}, la = function(e) {
  if (typeof e != "function") throw TypeError(String(e) + " is not a function");
  return e;
}, _f = q("species"), ko = function(e) {
  return function(t, r) {
    var n, a, o = String(ze(t)), l = Lt(r), i = o.length;
    return l < 0 || l >= i ? e ? "" : void 0 : (n = o.charCodeAt(l)) < 55296 || n > 56319 || l + 1 === i || (a = o.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? o.charAt(l) : n : e ? o.slice(l, l + 2) : a - 56320 + (n - 55296 << 10) + 65536;
  };
}, Xi = { codeAt: ko(!1), charAt: ko(!0) }, Cf = Xi.charAt, Ji = function(e, t, r) {
  return t + (r ? Cf(e, t).length : 1);
}, Mn = function(e, t) {
  var r = e.exec;
  if (typeof r == "function") {
    var n = r.call(e, t);
    if (typeof n != "object") throw TypeError("RegExp exec method returned something other than an Object or null");
    return n;
  }
  if (Re(e) !== "RegExp") throw TypeError("RegExp#exec called on incompatible receiver");
  return ur.call(e, t);
}, wf = [].push, Sf = Math.min, vt = !F(function() {
  return !RegExp(4294967295, "y");
});
qi("split", 2, function(e, t, r) {
  var n;
  return n = "abbc".split(/(b)*/)[1] == "c" || "test".split(/(?:)/, -1).length != 4 || "ab".split(/(?:ab)*/).length != 2 || ".".split(/(.?)(.?)/).length != 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(a, o) {
    var l = String(ze(this)), i = o === void 0 ? 4294967295 : o >>> 0;
    if (i === 0) return [];
    if (a === void 0) return [l];
    if (!Yi(a)) return t.call(l, a, i);
    for (var s, c, u, f = [], p = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (a.sticky ? "y" : ""), d = 0, h = new RegExp(a.source, p + "g"); (s = ur.call(h, l)) && !((c = h.lastIndex) > d && (f.push(l.slice(d, s.index)), s.length > 1 && s.index < l.length && wf.apply(f, s.slice(1)), u = s[0].length, d = c, f.length >= i)); ) h.lastIndex === s.index && h.lastIndex++;
    return d === l.length ? !u && h.test("") || f.push("") : f.push(l.slice(d)), f.length > i ? f.slice(0, i) : f;
  } : "0".split(void 0, 0).length ? function(a, o) {
    return a === void 0 && o === 0 ? [] : t.call(this, a, o);
  } : t, [function(a, o) {
    var l = ze(this), i = a == null ? void 0 : a[e];
    return i !== void 0 ? i.call(a, l, o) : n.call(String(l), a, o);
  }, function(a, o) {
    var l = r(n, a, this, o, n !== t);
    if (l.done) return l.value;
    var i = ue(a), s = String(this), c = function(S, T) {
      var $, R = ue(S).constructor;
      return R === void 0 || ($ = ue(R)[_f]) == null ? T : la($);
    }(i, RegExp), u = i.unicode, f = (i.ignoreCase ? "i" : "") + (i.multiline ? "m" : "") + (i.unicode ? "u" : "") + (vt ? "y" : "g"), p = new c(vt ? i : "^(?:" + i.source + ")", f), d = o === void 0 ? 4294967295 : o >>> 0;
    if (d === 0) return [];
    if (s.length === 0) return Mn(p, s) === null ? [s] : [];
    for (var h = 0, g = 0, v = []; g < s.length; ) {
      p.lastIndex = vt ? g : 0;
      var y, C = Mn(p, vt ? s : s.slice(g));
      if (C === null || (y = Sf(ge(p.lastIndex + (vt ? 0 : g)), s.length)) === h) g = Ji(s, g, u);
      else {
        if (v.push(s.slice(h, g)), v.length === d) return v;
        for (var x = 1; x <= C.length - 1; x++) if (v.push(C[x]), v.length === d) return v;
        g = h = y;
      }
    }
    return v.push(s.slice(h)), v;
  }];
}, !vt);
var Rn = `	
\v\f\r                　\u2028\u2029\uFEFF`, Dr = "[" + Rn + "]", xf = RegExp("^" + Dr + Dr + "*"), Of = RegExp(Dr + Dr + "*$"), dn = function(e) {
  return function(t) {
    var r = String(ze(t));
    return 1 & e && (r = r.replace(xf, "")), 2 & e && (r = r.replace(Of, "")), r;
  };
}, Af = { start: dn(1), end: dn(2), trim: dn(3) }, kf = Af.trim;
se({ target: "String", proto: !0, forced: function(e) {
  return F(function() {
    return !!Rn[e]() || "​᠎"[e]() != "​᠎" || Rn[e].name !== e;
  });
}("trim") }, { trim: function() {
  return kf(this);
} });
var $f = ia("slice"), Ef = Bt("slice", { ACCESSORS: !0, 0: 0, 1: 2 }), Tf = q("species"), Mf = [].slice, Rf = Math.max;
se({ target: "Array", proto: !0, forced: !$f || !Ef }, { slice: function(e, t) {
  var r, n, a, o = Ht(this), l = ge(o.length), i = Mr(e, l), s = Mr(t === void 0 ? l : t, l);
  if (Mt(o) && (typeof (r = o.constructor) != "function" || r !== Array && !Mt(r.prototype) ? ne(r) && (r = r[Tf]) === null && (r = void 0) : r = void 0, r === Array || r === void 0)) return Mf.call(o, i, s);
  for (n = new (r === void 0 ? Array : r)(Rf(s - i, 0)), a = 0; i < s; i++, a++) i in o && Rt(n, a, o[i]);
  return n.length = a, n;
} });
var ua = Object.keys || function(e) {
  return Bi(e, Rr);
}, Pf = F(function() {
  ua(1);
});
se({ target: "Object", stat: !0, forced: Pf }, { keys: function(e) {
  return ua(De(e));
} });
var pn, jf = function(e) {
  if (Yi(e)) throw TypeError("The method doesn't accept regular expressions");
  return e;
}, If = q("match"), Df = ta.f, $o = "".startsWith, Hf = Math.min, Zi = function(e) {
  var t = /./;
  try {
    "/./"[e](t);
  } catch {
    try {
      return t[If] = !1, "/./"[e](t);
    } catch {
    }
  }
  return !1;
}("startsWith"), Lf = !(Zi || (pn = Df(String.prototype, "startsWith"), !pn || pn.writable));
function Qi(e) {
  return (Qi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  })(e);
}
se({ target: "String", proto: !0, forced: !Lf && !Zi }, { startsWith: function(e) {
  var t = String(ze(this));
  jf(e);
  var r = ge(Hf(arguments.length > 1 ? arguments[1] : void 0, t.length)), n = String(e);
  return $o ? $o.call(t, n, r) : t.slice(r, r + n.length) === n;
} });
var gt = function(e) {
  return typeof e == "string";
}, yt = function(e) {
  return e !== null && Qi(e) === "object";
}, Pt = function() {
  function e() {
    lt(this, e);
  }
  return ut(e, null, [{ key: "isWindow", value: function(t) {
    return t === window;
  } }, { key: "addEventListener", value: function(t, r, n) {
    var a = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
    t && r && n && t.addEventListener(r, n, a);
  } }, { key: "removeEventListener", value: function(t, r, n) {
    var a = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
    t && r && n && t.removeEventListener(r, n, a);
  } }, { key: "triggerDragEvent", value: function(t, r) {
    var n = !1, a = function(l) {
      var i;
      (i = r.drag) === null || i === void 0 || i.call(r, l);
    }, o = function l(i) {
      var s;
      e.removeEventListener(document, "mousemove", a), e.removeEventListener(document, "mouseup", l), document.onselectstart = null, document.ondragstart = null, n = !1, (s = r.end) === null || s === void 0 || s.call(r, i);
    };
    e.addEventListener(t, "mousedown", function(l) {
      var i;
      n || (document.onselectstart = function() {
        return !1;
      }, document.ondragstart = function() {
        return !1;
      }, e.addEventListener(document, "mousemove", a), e.addEventListener(document, "mouseup", o), n = !0, (i = r.start) === null || i === void 0 || i.call(r, l));
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
      for (var n = t.className.trim().split(" "), a = n.length - 1; a >= 0; a--) n[a] = n[a].trim(), n[a] && n[a] !== r || n.splice(a, 1);
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
    if (e.isWindow(t)) return 0;
    var n = r ? e.getScrollTop(r) : e.getRootScrollTop();
    return t.getBoundingClientRect().top + n;
  } }, { key: "getVisibleHeight", value: function(t) {
    return e.isWindow(t) ? t.innerHeight : t.getBoundingClientRect().height;
  } }, { key: "isHidden", value: function(t) {
    if (!t) return !1;
    var r = window.getComputedStyle(t), n = r.display === "none", a = t.offsetParent === null && r.position !== "fixed";
    return n || a;
  } }, { key: "triggerEvent", value: function(t, r) {
    if ("createEvent" in document) {
      var n = document.createEvent("HTMLEvents");
      n.initEvent(r, !1, !0), t.dispatchEvent(n);
    }
  } }, { key: "calcAngle", value: function(t, r) {
    var n = t.getBoundingClientRect(), a = n.left + n.width / 2, o = n.top + n.height / 2, l = Math.abs(a - r.clientX), i = Math.abs(o - r.clientY), s = i / Math.sqrt(Math.pow(l, 2) + Math.pow(i, 2)), c = Math.acos(s), u = Math.floor(180 / (Math.PI / c));
    return r.clientX > a && r.clientY > o && (u = 180 - u), r.clientX == a && r.clientY > o && (u = 180), r.clientX > a && r.clientY == o && (u = 90), r.clientX < a && r.clientY > o && (u = 180 + u), r.clientX < a && r.clientY == o && (u = 270), r.clientX < a && r.clientY < o && (u = 360 - u), u;
  } }, { key: "querySelector", value: function(t, r) {
    return r ? r.querySelector(t) : document.querySelector(t);
  } }, { key: "createElement", value: function(t) {
    for (var r = document.createElement(t), n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) a[o - 1] = arguments[o];
    for (var l = 0; l < a.length; l++) a[l] && r.classList.add(a[l]);
    return r;
  } }, { key: "appendChild", value: function(t) {
    for (var r = 0; r < (arguments.length <= 1 ? 0 : arguments.length - 1); r++) t.appendChild(r + 1 < 1 || arguments.length <= r + 1 ? void 0 : arguments[r + 1]);
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
}(), Bf = Math.floor, Nf = "".replace, Vf = /\$([$&'`]|\d\d?|<[^>]*>)/g, Ff = /\$([$&'`]|\d\d?)/g, zf = function(e, t, r, n, a, o) {
  var l = r + e.length, i = n.length, s = Ff;
  return a !== void 0 && (a = De(a), s = Vf), Nf.call(o, s, function(c, u) {
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
        f = a[u.slice(1, -1)];
        break;
      default:
        var p = +u;
        if (p === 0) return c;
        if (p > i) {
          var d = Bf(p / 10);
          return d === 0 ? c : d <= i ? n[d - 1] === void 0 ? u.charAt(1) : n[d - 1] + u.charAt(1) : c;
        }
        f = n[p - 1];
    }
    return f === void 0 ? "" : f;
  });
}, Wf = Math.max, Gf = Math.min;
qi("replace", 2, function(e, t, r, n) {
  var a = n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, o = n.REPLACE_KEEPS_$0, l = a ? "$" : "$0";
  return [function(i, s) {
    var c = ze(this), u = i == null ? void 0 : i[e];
    return u !== void 0 ? u.call(i, c, s) : t.call(String(c), i, s);
  }, function(i, s) {
    if (!a && o || typeof s == "string" && s.indexOf(l) === -1) {
      var c = r(t, i, this, s);
      if (c.done) return c.value;
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
      if (v === null || (g.push(v), !d)) break;
      String(v[0]) === "" && (u.lastIndex = Ji(f, ge(u.lastIndex), h));
    }
    for (var y, C = "", x = 0, S = 0; S < g.length; S++) {
      v = g[S];
      for (var T = String(v[0]), $ = Wf(Gf(Lt(v.index), f.length), 0), R = [], H = 1; H < v.length; H++) R.push((y = v[H]) === void 0 ? y : String(y));
      var b = v.groups;
      if (p) {
        var O = [T].concat(R, $, f);
        b !== void 0 && O.push(b);
        var m = String(s.apply(void 0, O));
      } else m = zf(T, f, $, R, b, s);
      $ >= x && (C += f.slice(x, $) + m, x = $ + T.length);
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
var es = q("isConcatSpreadable"), Kf = jr >= 51 || !F(function() {
  var e = [];
  return e[es] = !1, e.concat()[0] !== e;
}), Uf = ia("concat"), qf = function(e) {
  if (!ne(e)) return !1;
  var t = e[es];
  return t !== void 0 ? !!t : Mt(e);
};
se({ target: "Array", proto: !0, forced: !Kf || !Uf }, { concat: function(e) {
  var t, r, n, a, o, l = De(this), i = qr(l, 0), s = 0;
  for (t = -1, n = arguments.length; t < n; t++) if (qf(o = t === -1 ? l : arguments[t])) {
    if (s + (a = ge(o.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
    for (r = 0; r < a; r++, s++) r in o && Rt(i, s, o[r]);
  } else {
    if (s >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
    Rt(i, s++, o);
  }
  return i.length = s, i;
} });
var hn, hr = function(e, t, r) {
  if (la(e), t === void 0) return e;
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
      return function(n, a) {
        return e.call(t, n, a);
      };
    case 3:
      return function(n, a, o) {
        return e.call(t, n, a, o);
      };
  }
  return function() {
    return e.apply(t, arguments);
  };
}, Eo = [].push, Ne = function(e) {
  var t = e == 1, r = e == 2, n = e == 3, a = e == 4, o = e == 6, l = e == 7, i = e == 5 || o;
  return function(s, c, u, f) {
    for (var p, d, h = De(s), g = Gr(h), v = hr(c, u, 3), y = ge(g.length), C = 0, x = f || qr, S = t ? x(s, y) : r || l ? x(s, 0) : void 0; y > C; C++) if ((i || C in g) && (d = v(p = g[C], C, h), e)) if (t) S[C] = d;
    else if (d) switch (e) {
      case 3:
        return !0;
      case 5:
        return p;
      case 6:
        return C;
      case 2:
        Eo.call(S, p);
    }
    else switch (e) {
      case 4:
        return !1;
      case 7:
        Eo.call(S, p);
    }
    return o ? -1 : n || a ? a : S;
  };
}, ts = { forEach: Ne(0), map: Ne(1), filter: Ne(2), some: Ne(3), every: Ne(4), find: Ne(5), findIndex: Ne(6), filterOut: Ne(7) }, Yf = ye ? Object.defineProperties : function(e, t) {
  ue(e);
  for (var r, n = ua(t), a = n.length, o = 0; a > o; ) Ie.f(e, r = n[o++], t[r]);
  return e;
}, Xf = Ur("document", "documentElement"), rs = aa("IE_PROTO"), vn = function() {
}, To = function(e) {
  return "<script>" + e + "<\/script>";
}, Or = function() {
  try {
    hn = document.domain && new ActiveXObject("htmlfile");
  } catch {
  }
  var e, t;
  Or = hn ? function(n) {
    n.write(To("")), n.close();
    var a = n.parentWindow.Object;
    return n = null, a;
  }(hn) : ((t = ji("iframe")).style.display = "none", Xf.appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write(To("document.F=Object")), e.close(), e.F);
  for (var r = Rr.length; r--; ) delete Or.prototype[Rr[r]];
  return Or();
};
Kr[rs] = !0;
var ca = Object.create || function(e, t) {
  var r;
  return e !== null ? (vn.prototype = ue(e), r = new vn(), vn.prototype = null, r[rs] = e) : r = Or(), t === void 0 ? r : Yf(r, t);
}, Pn = q("unscopables"), jn = Array.prototype;
jn[Pn] == null && Ie.f(jn, Pn, { configurable: !0, value: ca(null) });
var Ct = function(e) {
  jn[Pn][e] = !0;
}, Jf = ts.find, Mo = !0, Zf = Bt("find");
"find" in [] && Array(1).find(function() {
  Mo = !1;
}), se({ target: "Array", proto: !0, forced: Mo || !Zf }, { find: function(e) {
  return Jf(this, e, arguments.length > 1 ? arguments[1] : void 0);
} }), Ct("find");
var Qf = ts.findIndex, Ro = !0, ed = Bt("findIndex");
"findIndex" in [] && Array(1).findIndex(function() {
  Ro = !1;
}), se({ target: "Array", proto: !0, forced: Ro || !ed }, { findIndex: function(e) {
  return Qf(this, e, arguments.length > 1 ? arguments[1] : void 0);
} }), Ct("findIndex");
var ns = function(e, t, r, n, a, o, l, i) {
  for (var s, c = a, u = 0, f = !!l && hr(l, i, 3); u < n; ) {
    if (u in r) {
      if (s = f ? f(r[u], u, t) : r[u], o > 0 && Mt(s)) c = ns(e, t, s, ge(s.length), c, o - 1) - 1;
      else {
        if (c >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
        e[c] = s;
      }
      c++;
    }
    u++;
  }
  return c;
}, td = ns;
se({ target: "Array", proto: !0 }, { flat: function() {
  var e = arguments.length ? arguments[0] : void 0, t = De(this), r = ge(t.length), n = qr(t, 0);
  return n.length = td(n, t, t, r, 0, e === void 0 ? 1 : Lt(e)), n;
} });
var In = function(e) {
  var t = e.return;
  if (t !== void 0) return ue(t.call(e)).value;
}, rd = function(e, t, r, n) {
  try {
    return n ? t(ue(r)[0], r[1]) : t(r);
  } catch (a) {
    throw In(e), a;
  }
}, jt = {}, nd = q("iterator"), ad = Array.prototype, as = function(e) {
  return e !== void 0 && (jt.Array === e || ad[nd] === e);
}, od = q("iterator"), os = function(e) {
  if (e != null) return e[od] || e["@@iterator"] || jt[zi(e)];
}, is = q("iterator"), ss = !1;
try {
  var id = 0, Po = { next: function() {
    return { done: !!id++ };
  }, return: function() {
    ss = !0;
  } };
  Po[is] = function() {
    return this;
  }, Array.from(Po, function() {
    throw 2;
  });
} catch {
}
var ls = function(e, t) {
  if (!ss) return !1;
  var r = !1;
  try {
    var n = {};
    n[is] = function() {
      return { next: function() {
        return { done: r = !0 };
      } };
    }, e(n);
  } catch {
  }
  return r;
}, sd = !ls(function(e) {
  Array.from(e);
});
se({ target: "Array", stat: !0, forced: sd }, { from: function(e) {
  var t, r, n, a, o, l, i = De(e), s = typeof this == "function" ? this : Array, c = arguments.length, u = c > 1 ? arguments[1] : void 0, f = u !== void 0, p = os(i), d = 0;
  if (f && (u = hr(u, c > 2 ? arguments[2] : void 0, 2)), p == null || s == Array && as(p)) for (r = new s(t = ge(i.length)); t > d; d++) l = f ? u(i[d], d) : i[d], Rt(r, d, l);
  else for (o = (a = p.call(i)).next, r = new s(); !(n = o.call(a)).done; d++) l = f ? rd(a, u, [n.value, d], !0) : n.value, Rt(r, d, l);
  return r.length = d, r;
} });
var jo = function(e) {
  return function(t, r, n, a) {
    la(r);
    var o = De(t), l = Gr(o), i = ge(o.length), s = e ? i - 1 : 0, c = e ? -1 : 1;
    if (n < 2) for (; ; ) {
      if (s in l) {
        a = l[s], s += c;
        break;
      }
      if (s += c, e ? s < 0 : i <= s) throw TypeError("Reduce of empty array with no initial value");
    }
    for (; e ? s >= 0 : i > s; s += c) s in l && (a = r(a, l[s], s, o));
    return a;
  };
}, ld = { left: jo(!1), right: jo(!0) }, ud = Re(te.process) == "process", cd = ld.left, fd = oa("reduce"), dd = Bt("reduce", { 1: 0 });
se({ target: "Array", proto: !0, forced: !fd || !dd || !ud && jr > 79 && jr < 83 }, { reduce: function(e) {
  return cd(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
} }), Ct("flat");
var Xe, Io, Do, pd = !F(function() {
  return Object.isExtensible(Object.preventExtensions({}));
}), us = Qn(function(e) {
  var t = Ie.f, r = na("meta"), n = 0, a = Object.isExtensible || function() {
    return !0;
  }, o = function(i) {
    t(i, r, { value: { objectID: "O" + ++n, weakData: {} } });
  }, l = e.exports = { REQUIRED: !1, fastKey: function(i, s) {
    if (!ne(i)) return typeof i == "symbol" ? i : (typeof i == "string" ? "S" : "P") + i;
    if (!J(i, r)) {
      if (!a(i)) return "F";
      if (!s) return "E";
      o(i);
    }
    return i[r].objectID;
  }, getWeakData: function(i, s) {
    if (!J(i, r)) {
      if (!a(i)) return !0;
      if (!s) return !1;
      o(i);
    }
    return i[r].weakData;
  }, onFreeze: function(i) {
    return pd && l.REQUIRED && a(i) && !J(i, r) && o(i), i;
  } };
  Kr[r] = !0;
}), Kt = function(e, t) {
  this.stopped = e, this.result = t;
}, Ho = function(e, t, r) {
  var n, a, o, l, i, s, c, u = r && r.that, f = !(!r || !r.AS_ENTRIES), p = !(!r || !r.IS_ITERATOR), d = !(!r || !r.INTERRUPTED), h = hr(t, u, 1 + f + d), g = function(y) {
    return n && In(n), new Kt(!0, y);
  }, v = function(y) {
    return f ? (ue(y), d ? h(y[0], y[1], g) : h(y[0], y[1])) : d ? h(y, g) : h(y);
  };
  if (p) n = e;
  else {
    if (typeof (a = os(e)) != "function") throw TypeError("Target is not iterable");
    if (as(a)) {
      for (o = 0, l = ge(e.length); l > o; o++) if ((i = v(e[o])) && i instanceof Kt) return i;
      return new Kt(!1);
    }
    n = a.call(e);
  }
  for (s = n.next; !(c = s.call(n)).done; ) {
    try {
      i = v(c.value);
    } catch (y) {
      throw In(n), y;
    }
    if (typeof i == "object" && i && i instanceof Kt) return i;
  }
  return new Kt(!1);
}, Lo = function(e, t, r) {
  if (!(e instanceof t)) throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
  return e;
}, hd = Ie.f, Bo = q("toStringTag"), Dn = function(e, t, r) {
  e && !J(e = r ? e : e.prototype, Bo) && hd(e, Bo, { configurable: !0, value: t });
}, Hr = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var e, t = !1, r = {};
  try {
    (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r, []), t = r instanceof Array;
  } catch {
  }
  return function(n, a) {
    return ue(n), function(o) {
      if (!ne(o) && o !== null) throw TypeError("Can't set " + String(o) + " as a prototype");
    }(a), t ? e.call(n, a) : n.__proto__ = a, n;
  };
}() : void 0), No = function(e, t, r) {
  for (var n in t) Ge(e, n, t[n], r);
  return e;
}, vd = !F(function() {
  function e() {
  }
  return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
}), Vo = aa("IE_PROTO"), gd = Object.prototype, Lr = vd ? Object.getPrototypeOf : function(e) {
  return e = De(e), J(e, Vo) ? e[Vo] : typeof e.constructor == "function" && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? gd : null;
}, gn = q("iterator"), cs = !1;
[].keys && ("next" in (Do = [].keys()) ? (Io = Lr(Lr(Do))) !== Object.prototype && (Xe = Io) : cs = !0), (Xe == null || F(function() {
  var e = {};
  return Xe[gn].call(e) !== e;
})) && (Xe = {}), J(Xe, gn) || me(Xe, gn, function() {
  return this;
});
var fa = { IteratorPrototype: Xe, BUGGY_SAFARI_ITERATORS: cs }, yd = fa.IteratorPrototype, bd = function() {
  return this;
}, yn = fa.IteratorPrototype, Sr = fa.BUGGY_SAFARI_ITERATORS, Ut = q("iterator"), md = function() {
  return this;
}, da = function(e, t, r, n, a, o, l) {
  (function(y, C, x) {
    var S = C + " Iterator";
    y.prototype = ca(yd, { next: Wr(1, x) }), Dn(y, S, !1), jt[S] = bd;
  })(r, t, n);
  var i, s, c, u = function(y) {
    if (y === a && g) return g;
    if (!Sr && y in d) return d[y];
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
  }, f = t + " Iterator", p = !1, d = e.prototype, h = d[Ut] || d["@@iterator"] || a && d[a], g = !Sr && h || u(a), v = t == "Array" && d.entries || h;
  if (v && (i = Lr(v.call(new e())), yn !== Object.prototype && i.next && (Lr(i) !== yn && (Hr ? Hr(i, yn) : typeof i[Ut] != "function" && me(i, Ut, md)), Dn(i, f, !0))), a == "values" && h && h.name !== "values" && (p = !0, g = function() {
    return h.call(this);
  }), d[Ut] !== g && me(d, Ut, g), jt[t] = g, a) if (s = { values: u("values"), keys: o ? g : u("keys"), entries: u("entries") }, l) for (c in s) (Sr || p || !(c in d)) && Ge(d, c, s[c]);
  else se({ target: t, proto: !0, forced: Sr || p }, s);
  return s;
}, Fo = q("species"), _d = Ie.f, zo = us.fastKey, Wo = We.set, bn = We.getterFor;
(function(e, t, r) {
  var n = e.indexOf("Map") !== -1, a = e.indexOf("Weak") !== -1, o = n ? "set" : "add", l = te[e], i = l && l.prototype, s = l, c = {}, u = function(v) {
    var y = i[v];
    Ge(i, v, v == "add" ? function(C) {
      return y.call(this, C === 0 ? 0 : C), this;
    } : v == "delete" ? function(C) {
      return !(a && !ne(C)) && y.call(this, C === 0 ? 0 : C);
    } : v == "get" ? function(C) {
      return a && !ne(C) ? void 0 : y.call(this, C === 0 ? 0 : C);
    } : v == "has" ? function(C) {
      return !(a && !ne(C)) && y.call(this, C === 0 ? 0 : C);
    } : function(C, x) {
      return y.call(this, C === 0 ? 0 : C, x), this;
    });
  };
  if (Tn(e, typeof l != "function" || !(a || i.forEach && !F(function() {
    new l().entries().next();
  })))) s = r.getConstructor(t, e, n, o), us.REQUIRED = !0;
  else if (Tn(e, !0)) {
    var f = new s(), p = f[o](a ? {} : -0, 1) != f, d = F(function() {
      f.has(1);
    }), h = ls(function(v) {
      new l(v);
    }), g = !a && F(function() {
      for (var v = new l(), y = 5; y--; ) v[o](y, y);
      return !v.has(-0);
    });
    h || ((s = t(function(v, y) {
      Lo(v, s, e);
      var C = function(x, S, T) {
        var $, R;
        return Hr && typeof ($ = S.constructor) == "function" && $ !== T && ne(R = $.prototype) && R !== T.prototype && Hr(x, R), x;
      }(new l(), v, s);
      return y != null && Ho(y, C[o], { that: C, AS_ENTRIES: n }), C;
    })).prototype = i, i.constructor = s), (d || g) && (u("delete"), u("has"), n && u("get")), (g || p) && u(o), a && i.clear && delete i.clear;
  }
  c[e] = s, se({ global: !0, forced: s != l }, c), Dn(s, e), a || r.setStrong(s, e, n);
})("Set", function(e) {
  return function() {
    return e(this, arguments.length ? arguments[0] : void 0);
  };
}, { getConstructor: function(e, t, r, n) {
  var a = e(function(s, c) {
    Lo(s, a, t), Wo(s, { type: t, index: ca(null), first: void 0, last: void 0, size: 0 }), ye || (s.size = 0), c != null && Ho(c, s[n], { that: s, AS_ENTRIES: r });
  }), o = bn(t), l = function(s, c, u) {
    var f, p, d = o(s), h = i(s, c);
    return h ? h.value = u : (d.last = h = { index: p = zo(c, !0), key: c, value: u, previous: f = d.last, next: void 0, removed: !1 }, d.first || (d.first = h), f && (f.next = h), ye ? d.size++ : s.size++, p !== "F" && (d.index[p] = h)), s;
  }, i = function(s, c) {
    var u, f = o(s), p = zo(c);
    if (p !== "F") return f.index[p];
    for (u = f.first; u; u = u.next) if (u.key == c) return u;
  };
  return No(a.prototype, { clear: function() {
    for (var s = o(this), c = s.index, u = s.first; u; ) u.removed = !0, u.previous && (u.previous = u.previous.next = void 0), delete c[u.index], u = u.next;
    s.first = s.last = void 0, ye ? s.size = 0 : this.size = 0;
  }, delete: function(s) {
    var c = this, u = o(c), f = i(c, s);
    if (f) {
      var p = f.next, d = f.previous;
      delete u.index[f.index], f.removed = !0, d && (d.next = p), p && (p.previous = d), u.first == f && (u.first = p), u.last == f && (u.last = d), ye ? u.size-- : c.size--;
    }
    return !!f;
  }, forEach: function(s) {
    for (var c, u = o(this), f = hr(s, arguments.length > 1 ? arguments[1] : void 0, 3); c = c ? c.next : u.first; ) for (f(c.value, c.key, this); c && c.removed; ) c = c.previous;
  }, has: function(s) {
    return !!i(this, s);
  } }), No(a.prototype, r ? { get: function(s) {
    var c = i(this, s);
    return c && c.value;
  }, set: function(s, c) {
    return l(this, s === 0 ? 0 : s, c);
  } } : { add: function(s) {
    return l(this, s = s === 0 ? 0 : s, s);
  } }), ye && _d(a.prototype, "size", { get: function() {
    return o(this).size;
  } }), a;
}, setStrong: function(e, t, r) {
  var n = t + " Iterator", a = bn(t), o = bn(n);
  da(e, t, function(l, i) {
    Wo(this, { type: n, target: l, state: a(l), kind: i, last: void 0 });
  }, function() {
    for (var l = o(this), i = l.kind, s = l.last; s && s.removed; ) s = s.previous;
    return l.target && (l.last = s = s ? s.next : l.state.first) ? i == "keys" ? { value: s.key, done: !1 } : i == "values" ? { value: s.value, done: !1 } : { value: [s.key, s.value], done: !1 } : (l.target = void 0, { value: void 0, done: !0 });
  }, r ? "entries" : "values", !r, !0), function(l) {
    var i = Ur(l), s = Ie.f;
    ye && i && !i[Fo] && s(i, Fo, { configurable: !0, get: function() {
      return this;
    } });
  }(t);
} });
var Cd = Xi.charAt, wd = We.set, Sd = We.getterFor("String Iterator");
da(String, "String", function(e) {
  wd(this, { type: "String Iterator", string: String(e), index: 0 });
}, function() {
  var e, t = Sd(this), r = t.string, n = t.index;
  return n >= r.length ? { value: void 0, done: !0 } : (e = Cd(r, n), t.index += e.length, { value: e, done: !1 });
});
var Go = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 }, xd = We.set, Od = We.getterFor("Array Iterator"), Jt = da(Array, "Array", function(e, t) {
  xd(this, { type: "Array Iterator", target: Ht(e), index: 0, kind: t });
}, function() {
  var e = Od(this), t = e.target, r = e.kind, n = e.index++;
  return !t || n >= t.length ? (e.target = void 0, { value: void 0, done: !0 }) : r == "keys" ? { value: n, done: !1 } : r == "values" ? { value: t[n], done: !1 } : { value: [n, t[n]], done: !1 };
}, "values");
jt.Arguments = jt.Array, Ct("keys"), Ct("values"), Ct("entries");
var mn = q("iterator"), Ko = q("toStringTag"), _n = Jt.values;
for (var Cn in Go) {
  var Uo = te[Cn], Me = Uo && Uo.prototype;
  if (Me) {
    if (Me[mn] !== _n) try {
      me(Me, mn, _n);
    } catch {
      Me[mn] = _n;
    }
    if (Me[Ko] || me(Me, Ko, Cn), Go[Cn]) {
      for (var bt in Jt) if (Me[bt] !== Jt[bt]) try {
        me(Me, bt, Jt[bt]);
      } catch {
        Me[bt] = Jt[bt];
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
      var a = Array.isArray(n) ? e.flat(n) : n;
      return r.concat(a);
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
var fs = typeof global == "object" && global && global.Object === Object && global, Ad = typeof self == "object" && self && self.Object === Object && self, Nt = fs || Ad || Function("return this")(), Br = Nt.Symbol, ds = Object.prototype, kd = ds.hasOwnProperty, $d = ds.toString, qt = Br ? Br.toStringTag : void 0;
function Ed(e) {
  var t = kd.call(e, qt), r = e[qt];
  try {
    e[qt] = void 0;
    var n = !0;
  } catch {
  }
  var a = $d.call(e);
  return n && (t ? e[qt] = r : delete e[qt]), a;
}
var Td = Object.prototype, Md = Td.toString;
function Rd(e) {
  return Md.call(e);
}
var Pd = "[object Null]", jd = "[object Undefined]", qo = Br ? Br.toStringTag : void 0;
function Yr(e) {
  return e == null ? e === void 0 ? jd : Pd : qo && qo in Object(e) ? Ed(e) : Rd(e);
}
function vr(e) {
  return e != null && typeof e == "object";
}
var Hn = Array.isArray;
function ct(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function ps(e) {
  return e;
}
var Id = "[object AsyncFunction]", Dd = "[object Function]", Hd = "[object GeneratorFunction]", Ld = "[object Proxy]";
function pa(e) {
  if (!ct(e))
    return !1;
  var t = Yr(e);
  return t == Dd || t == Hd || t == Id || t == Ld;
}
var wn = Nt["__core-js_shared__"], Yo = function() {
  var e = /[^.]+$/.exec(wn && wn.keys && wn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Bd(e) {
  return !!Yo && Yo in e;
}
var Nd = Function.prototype, Vd = Nd.toString;
function Fd(e) {
  if (e != null) {
    try {
      return Vd.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var zd = /[\\^$.*+?()[\]{}|]/g, Wd = /^\[object .+?Constructor\]$/, Gd = Function.prototype, Kd = Object.prototype, Ud = Gd.toString, qd = Kd.hasOwnProperty, Yd = RegExp(
  "^" + Ud.call(qd).replace(zd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Xd(e) {
  if (!ct(e) || Bd(e))
    return !1;
  var t = pa(e) ? Yd : Wd;
  return t.test(Fd(e));
}
function Jd(e, t) {
  return e == null ? void 0 : e[t];
}
function ha(e, t) {
  var r = Jd(e, t);
  return Xd(r) ? r : void 0;
}
var Xo = Object.create, Zd = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!ct(t))
      return {};
    if (Xo)
      return Xo(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function Qd(e, t, r) {
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
function ep(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var tp = 800, rp = 16, np = Date.now;
function ap(e) {
  var t = 0, r = 0;
  return function() {
    var n = np(), a = rp - (n - r);
    if (r = n, a > 0) {
      if (++t >= tp)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function op(e) {
  return function() {
    return e;
  };
}
var Nr = function() {
  try {
    var e = ha(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), ip = Nr ? function(e, t) {
  return Nr(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: op(t),
    writable: !0
  });
} : ps, sp = ap(ip), lp = 9007199254740991, up = /^(?:0|[1-9]\d*)$/;
function hs(e, t) {
  var r = typeof e;
  return t = t ?? lp, !!t && (r == "number" || r != "symbol" && up.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function va(e, t, r) {
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
var cp = Object.prototype, fp = cp.hasOwnProperty;
function dp(e, t, r) {
  var n = e[t];
  (!(fp.call(e, t) && Xr(n, r)) || r === void 0 && !(t in e)) && va(e, t, r);
}
function pp(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var o = -1, l = t.length; ++o < l; ) {
    var i = t[o], s = void 0;
    s === void 0 && (s = e[i]), a ? va(r, i, s) : dp(r, i, s);
  }
  return r;
}
var Jo = Math.max;
function hp(e, t, r) {
  return t = Jo(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, o = Jo(n.length - t, 0), l = Array(o); ++a < o; )
      l[a] = n[t + a];
    a = -1;
    for (var i = Array(t + 1); ++a < t; )
      i[a] = n[a];
    return i[t] = r(l), Qd(e, this, i);
  };
}
function vp(e, t) {
  return sp(hp(e, t, ps), e + "");
}
var gp = 9007199254740991;
function vs(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= gp;
}
function ga(e) {
  return e != null && vs(e.length) && !pa(e);
}
function yp(e, t, r) {
  if (!ct(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? ga(r) && hs(t, r.length) : n == "string" && t in r) ? Xr(r[t], e) : !1;
}
function bp(e) {
  return vp(function(t, r) {
    var n = -1, a = r.length, o = a > 1 ? r[a - 1] : void 0, l = a > 2 ? r[2] : void 0;
    for (o = e.length > 3 && typeof o == "function" ? (a--, o) : void 0, l && yp(r[0], r[1], l) && (o = a < 3 ? void 0 : o, a = 1), t = Object(t); ++n < a; ) {
      var i = r[n];
      i && e(t, i, n, o);
    }
    return t;
  });
}
var mp = Object.prototype;
function gs(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || mp;
  return e === r;
}
function _p(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Cp = "[object Arguments]";
function Zo(e) {
  return vr(e) && Yr(e) == Cp;
}
var ys = Object.prototype, wp = ys.hasOwnProperty, Sp = ys.propertyIsEnumerable, Ln = Zo(/* @__PURE__ */ function() {
  return arguments;
}()) ? Zo : function(e) {
  return vr(e) && wp.call(e, "callee") && !Sp.call(e, "callee");
};
function xp() {
  return !1;
}
var bs = typeof exports == "object" && exports && !exports.nodeType && exports, Qo = bs && typeof module == "object" && module && !module.nodeType && module, Op = Qo && Qo.exports === bs, ei = Op ? Nt.Buffer : void 0, Ap = ei ? ei.isBuffer : void 0, ms = Ap || xp, kp = "[object Arguments]", $p = "[object Array]", Ep = "[object Boolean]", Tp = "[object Date]", Mp = "[object Error]", Rp = "[object Function]", Pp = "[object Map]", jp = "[object Number]", Ip = "[object Object]", Dp = "[object RegExp]", Hp = "[object Set]", Lp = "[object String]", Bp = "[object WeakMap]", Np = "[object ArrayBuffer]", Vp = "[object DataView]", Fp = "[object Float32Array]", zp = "[object Float64Array]", Wp = "[object Int8Array]", Gp = "[object Int16Array]", Kp = "[object Int32Array]", Up = "[object Uint8Array]", qp = "[object Uint8ClampedArray]", Yp = "[object Uint16Array]", Xp = "[object Uint32Array]", V = {};
V[Fp] = V[zp] = V[Wp] = V[Gp] = V[Kp] = V[Up] = V[qp] = V[Yp] = V[Xp] = !0;
V[kp] = V[$p] = V[Np] = V[Ep] = V[Vp] = V[Tp] = V[Mp] = V[Rp] = V[Pp] = V[jp] = V[Ip] = V[Dp] = V[Hp] = V[Lp] = V[Bp] = !1;
function Jp(e) {
  return vr(e) && vs(e.length) && !!V[Yr(e)];
}
function Zp(e) {
  return function(t) {
    return e(t);
  };
}
var _s = typeof exports == "object" && exports && !exports.nodeType && exports, ar = _s && typeof module == "object" && module && !module.nodeType && module, Qp = ar && ar.exports === _s, Sn = Qp && fs.process, ti = function() {
  try {
    var e = ar && ar.require && ar.require("util").types;
    return e || Sn && Sn.binding && Sn.binding("util");
  } catch {
  }
}(), ri = ti && ti.isTypedArray, Cs = ri ? Zp(ri) : Jp;
function eh(e, t) {
  var r = Hn(e), n = !r && Ln(e), a = !r && !n && ms(e), o = !r && !n && !a && Cs(e), l = r || n || a || o, i = l ? _p(e.length, String) : [], s = i.length;
  for (var c in e)
    l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    hs(c, s)) || i.push(c);
  return i;
}
function th(e, t) {
  return function(r) {
    return e(t(r));
  };
}
function rh(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var nh = Object.prototype, ah = nh.hasOwnProperty;
function oh(e) {
  if (!ct(e))
    return rh(e);
  var t = gs(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !ah.call(e, n)) || r.push(n);
  return r;
}
function ws(e) {
  return ga(e) ? eh(e) : oh(e);
}
var cr = ha(Object, "create");
function ih() {
  this.__data__ = cr ? cr(null) : {}, this.size = 0;
}
function sh(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var lh = "__lodash_hash_undefined__", uh = Object.prototype, ch = uh.hasOwnProperty;
function fh(e) {
  var t = this.__data__;
  if (cr) {
    var r = t[e];
    return r === lh ? void 0 : r;
  }
  return ch.call(t, e) ? t[e] : void 0;
}
var dh = Object.prototype, ph = dh.hasOwnProperty;
function hh(e) {
  var t = this.__data__;
  return cr ? t[e] !== void 0 : ph.call(t, e);
}
var vh = "__lodash_hash_undefined__";
function gh(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = cr && t === void 0 ? vh : t, this;
}
function rt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
rt.prototype.clear = ih;
rt.prototype.delete = sh;
rt.prototype.get = fh;
rt.prototype.has = hh;
rt.prototype.set = gh;
function yh() {
  this.__data__ = [], this.size = 0;
}
function Jr(e, t) {
  for (var r = e.length; r--; )
    if (Xr(e[r][0], t))
      return r;
  return -1;
}
var bh = Array.prototype, mh = bh.splice;
function _h(e) {
  var t = this.__data__, r = Jr(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : mh.call(t, r, 1), --this.size, !0;
}
function Ch(e) {
  var t = this.__data__, r = Jr(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function wh(e) {
  return Jr(this.__data__, e) > -1;
}
function Sh(e, t) {
  var r = this.__data__, n = Jr(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function He(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
He.prototype.clear = yh;
He.prototype.delete = _h;
He.prototype.get = Ch;
He.prototype.has = wh;
He.prototype.set = Sh;
var Ss = ha(Nt, "Map");
function xh() {
  this.size = 0, this.__data__ = {
    hash: new rt(),
    map: new (Ss || He)(),
    string: new rt()
  };
}
function Oh(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Zr(e, t) {
  var r = e.__data__;
  return Oh(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Ah(e) {
  var t = Zr(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function kh(e) {
  return Zr(this, e).get(e);
}
function $h(e) {
  return Zr(this, e).has(e);
}
function Eh(e, t) {
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
Vt.prototype.clear = xh;
Vt.prototype.delete = Ah;
Vt.prototype.get = kh;
Vt.prototype.has = $h;
Vt.prototype.set = Eh;
var xs = th(Object.getPrototypeOf, Object), Th = "[object Object]", Mh = Function.prototype, Rh = Object.prototype, Os = Mh.toString, Ph = Rh.hasOwnProperty, jh = Os.call(Object);
function Ih(e) {
  if (!vr(e) || Yr(e) != Th)
    return !1;
  var t = xs(e);
  if (t === null)
    return !0;
  var r = Ph.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Os.call(r) == jh;
}
function Dh() {
  this.__data__ = new He(), this.size = 0;
}
function Hh(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Lh(e) {
  return this.__data__.get(e);
}
function Bh(e) {
  return this.__data__.has(e);
}
var Nh = 200;
function Vh(e, t) {
  var r = this.__data__;
  if (r instanceof He) {
    var n = r.__data__;
    if (!Ss || n.length < Nh - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Vt(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Ft(e) {
  var t = this.__data__ = new He(e);
  this.size = t.size;
}
Ft.prototype.clear = Dh;
Ft.prototype.delete = Hh;
Ft.prototype.get = Lh;
Ft.prototype.has = Bh;
Ft.prototype.set = Vh;
var As = typeof exports == "object" && exports && !exports.nodeType && exports, ni = As && typeof module == "object" && module && !module.nodeType && module, Fh = ni && ni.exports === As, ai = Fh ? Nt.Buffer : void 0;
ai && ai.allocUnsafe;
function zh(e, t) {
  return e.slice();
}
var oi = Nt.Uint8Array;
function Wh(e) {
  var t = new e.constructor(e.byteLength);
  return new oi(t).set(new oi(e)), t;
}
function Gh(e, t) {
  var r = Wh(e.buffer);
  return new e.constructor(r, e.byteOffset, e.length);
}
function Kh(e) {
  return typeof e.constructor == "function" && !gs(e) ? Zd(xs(e)) : {};
}
function Uh(e) {
  return function(t, r, n) {
    for (var a = -1, o = Object(t), l = n(t), i = l.length; i--; ) {
      var s = l[++a];
      if (r(o[s], s, o) === !1)
        break;
    }
    return t;
  };
}
var qh = Uh();
function Bn(e, t, r) {
  (r !== void 0 && !Xr(e[t], r) || r === void 0 && !(t in e)) && va(e, t, r);
}
function Yh(e) {
  return vr(e) && ga(e);
}
function Nn(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function Xh(e) {
  return pp(e, ws(e));
}
function Jh(e, t, r, n, a, o, l) {
  var i = Nn(e, r), s = Nn(t, r), c = l.get(s);
  if (c) {
    Bn(e, r, c);
    return;
  }
  var u = o ? o(i, s, r + "", e, t, l) : void 0, f = u === void 0;
  if (f) {
    var p = Hn(s), d = !p && ms(s), h = !p && !d && Cs(s);
    u = s, p || d || h ? Hn(i) ? u = i : Yh(i) ? u = ep(i) : d ? (f = !1, u = zh(s)) : h ? (f = !1, u = Gh(s)) : u = [] : Ih(s) || Ln(s) ? (u = i, Ln(i) ? u = Xh(i) : (!ct(i) || pa(i)) && (u = Kh(s))) : f = !1;
  }
  f && (l.set(s, u), a(u, s, n, o, l), l.delete(s)), Bn(e, r, u);
}
function ks(e, t, r, n, a) {
  e !== t && qh(t, function(o, l) {
    if (a || (a = new Ft()), ct(o))
      Jh(e, t, l, r, ks, n, a);
    else {
      var i = n ? n(Nn(e, l), o, l + "", e, t, a) : void 0;
      i === void 0 && (i = o), Bn(e, l, i);
    }
  }, ws);
}
var Qr = bp(function(e, t, r) {
  ks(e, t, r);
}), Zh = Object.defineProperty, Qh = (e, t, r) => t in e ? Zh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, ae = (e, t, r) => (Qh(e, typeof t != "symbol" ? t + "" : t, r), r);
const Y = (e) => Math.round(e * 100) / 100;
class G {
  constructor(t) {
    ae(this, "instance"), ae(this, "alphaValue", 0), ae(this, "redValue", 0), ae(this, "greenValue", 0), ae(this, "blueValue", 0), ae(this, "hueValue", 0), ae(this, "saturationValue", 0), ae(this, "brightnessValue", 0), ae(this, "hslSaturationValue", 0), ae(this, "lightnessValue", 0), ae(this, "initAlpha", () => {
      const r = this.instance.getAlpha();
      this.alphaValue = Math.min(1, r) * 100;
    }), ae(this, "initLightness", () => {
      const { s: r, l: n } = this.instance.toHsl();
      this.hslSaturationValue = Y(r), this.lightnessValue = Y(n);
    }), ae(this, "initRgb", () => {
      const { r, g: n, b: a } = this.instance.toRgb();
      this.redValue = Y(r), this.greenValue = Y(n), this.blueValue = Y(a);
    }), ae(this, "initHsb", () => {
      const { h: r, s: n, v: a } = this.instance.toHsv();
      this.hueValue = Math.min(360, Math.ceil(r)), this.saturationValue = Y(n), this.brightnessValue = Y(a);
    }), ae(this, "toHexString", () => this.instance.toHexString()), ae(this, "toRgbString", () => this.instance.toRgbString()), this.instance = w(t), this.initRgb(), this.initHsb(), this.initLightness(), this.initAlpha();
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
      h: Y(t),
      s: this.saturation,
      v: this.brightness,
      a: this.alphaValue / 100
    }), this.initRgb(), this.initLightness(), this.hueValue = Y(t);
  }
  get hue() {
    return this.hueValue;
  }
  // 饱和度
  set saturation(t) {
    this.instance = w({
      h: this.hue,
      s: Y(t),
      v: this.brightness,
      a: this.alphaValue / 100
    }), this.initRgb(), this.initLightness(), this.saturationValue = Y(t);
  }
  get saturation() {
    return this.saturationValue;
  }
  // 明度
  set brightness(t) {
    this.instance = w({
      h: this.hue,
      s: this.saturation,
      v: Y(t),
      a: this.alphaValue / 100
    }), this.initRgb(), this.initLightness(), this.brightnessValue = Y(t);
  }
  get brightness() {
    return this.brightnessValue;
  }
  // 亮度
  set lightness(t) {
    this.instance = w({
      h: this.hue,
      s: this.hslSaturationValue,
      l: Y(t),
      a: this.alphaValue / 100
    }), this.initRgb(), this.initHsb(), this.lightnessValue = Y(t);
  }
  get lightness() {
    return this.lightnessValue;
  }
  // red
  set red(t) {
    const r = this.instance.toRgb();
    this.instance = w({
      ...r,
      r: Y(t),
      a: this.alphaValue / 100
    }), this.initHsb(), this.initLightness(), this.redValue = Y(t);
  }
  get red() {
    return this.redValue;
  }
  // green
  set green(t) {
    const r = this.instance.toRgb();
    this.instance = w({
      ...r,
      g: Y(t),
      a: this.alphaValue / 100
    }), this.initHsb(), this.initLightness(), this.greenValue = Y(t);
  }
  get green() {
    return this.greenValue;
  }
  // blue
  set blue(t) {
    const r = this.instance.toRgb();
    this.instance = w({
      ...r,
      b: Y(t),
      a: this.alphaValue / 100
    }), this.initHsb(), this.initLightness(), this.blueValue = Y(t);
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
const xn = (e, t, r) => t < r ? e < t ? t : e > r ? r : e : e < r ? r : e > t ? t : e, ya = "color-history", ba = 8, we = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, a] of t)
    r[n] = a;
  return r;
}, ev = U({
  name: "Alpha",
  props: {
    color: M.instanceOf(G),
    size: M.oneOf(["small", "default"]).def("default")
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const r = N(null), n = N(null);
    let a = e.color || new G();
    const o = Oe({
      red: a.red,
      green: a.green,
      blue: a.blue,
      alpha: a.alpha
    });
    Pe(
      () => e.color,
      (f) => {
        f && (a = f, Qr(o, {
          red: f.red,
          green: f.green,
          blue: f.blue,
          alpha: f.alpha
        }));
      },
      { deep: !0 }
    );
    const l = B(() => {
      const f = ii(o.red, o.green, o.blue, 0), p = ii(o.red, o.green, o.blue, 100);
      return {
        background: `linear-gradient(to right, ${f} , ${p})`
      };
    }), i = () => {
      if (r.value && n.value) {
        const f = o.alpha / 100, p = r.value.getBoundingClientRect(), d = n.value.offsetWidth;
        return Math.round(f * (p.width - d) + d / 2);
      }
      return 0;
    }, s = B(() => ({
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
        a.alpha = g, o.alpha = g, t("change", g);
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
      r.value && n.value && Pt.triggerDragEvent(r.value, f);
    }), { barElement: r, cursorElement: n, getCursorStyle: s, getBackgroundStyle: l, onClickSider: c };
  }
}), tv = (e) => (It("data-v-18925ba6"), e = e(), Dt(), e), rv = /* @__PURE__ */ tv(() => /* @__PURE__ */ _("div", { class: "vc-alpha-slider__bar-handle" }, null, -1)), nv = [
  rv
];
function av(e, t, r, n, a, o) {
  return k(), P("div", {
    class: K(["vc-alpha-slider", "transparent", { "small-slider": e.size === "small" }])
  }, [
    _("div", {
      ref: "barElement",
      class: "vc-alpha-slider__bar",
      style: Z(e.getBackgroundStyle),
      onClick: t[0] || (t[0] = (...l) => e.onClickSider && e.onClickSider(...l))
    }, [
      _("div", {
        class: K(["vc-alpha-slider__bar-pointer", { "small-bar": e.size === "small" }]),
        ref: "cursorElement",
        style: Z(e.getCursorStyle)
      }, nv, 6)
    ], 4)
  ], 2);
}
const ma = /* @__PURE__ */ we(ev, [["render", av], ["__scopeId", "data-v-18925ba6"]]), ov = [
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
], iv = U({
  name: "Palette",
  emits: ["change"],
  setup(e, { emit: t }) {
    return { palettes: ov, computedBgStyle: (r) => r === "transparent" ? r : r === "advance" ? {} : { background: w(r).toRgbString() }, onColorChange: (r) => {
      t("change", r);
    } };
  }
}), sv = { class: "vc-compact" }, lv = ["onClick"];
function uv(e, t, r, n, a, o) {
  return k(), P("div", sv, [
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
          class: K([
            "vc-compact__color_cube",
            {
              advance: s === "advance",
              transparent: s === "transparent"
            }
          ]),
          style: Z(e.computedBgStyle(s))
        }, null, 6)
      ], 8, lv))), 128))
    ]))), 128))
  ]);
}
const $s = /* @__PURE__ */ we(iv, [["render", uv], ["__scopeId", "data-v-b969fd48"]]), cv = U({
  name: "Board",
  props: {
    color: M.instanceOf(G),
    round: M.bool.def(!1),
    hide: M.bool.def(!0)
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    var r, n, a;
    const o = di(), l = {
      h: ((r = e.color) == null ? void 0 : r.hue) || 0,
      s: 1,
      v: 1
    }, i = new G(l).toHexString(), s = Oe({
      hueColor: i,
      saturation: ((n = e.color) == null ? void 0 : n.saturation) || 0,
      brightness: ((a = e.color) == null ? void 0 : a.brightness) || 0
    }), c = N(0), u = N(0), f = N(), p = N(), d = B(() => ({
      top: c.value + "px",
      left: u.value + "px"
    })), h = () => {
      if (o) {
        const y = o.vnode.el;
        u.value = s.saturation * (y == null ? void 0 : y.clientWidth), c.value = (1 - s.brightness) * (y == null ? void 0 : y.clientHeight);
      }
    }, g = (y) => {
      y.target !== p.value && v(y);
    }, v = (y) => {
      if (o) {
        const C = o.vnode.el, x = C == null ? void 0 : C.getBoundingClientRect();
        let S = y.clientX - x.left, T = y.clientY - x.top;
        S = xn(S, 0, x.width), T = xn(T, 0, x.height);
        const $ = S / x.width, R = xn(-(T / x.height) + 1, 0, 1);
        u.value = S, c.value = T, s.saturation = $, s.brightness = R, t("change", $, R);
      }
    };
    return ot(() => {
      o && o.vnode.el && f.value && (Pt.triggerDragEvent(f.value, {
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
}), _a = (e) => (It("data-v-058e5db2"), e = e(), Dt(), e), fv = /* @__PURE__ */ _a(() => /* @__PURE__ */ _("div", { class: "vc-saturation__white" }, null, -1)), dv = /* @__PURE__ */ _a(() => /* @__PURE__ */ _("div", { class: "vc-saturation__black" }, null, -1)), pv = /* @__PURE__ */ _a(() => /* @__PURE__ */ _("div", null, null, -1)), hv = [
  pv
];
function vv(e, t, r, n, a, o) {
  return k(), P("div", {
    ref: "boardElement",
    class: K(["vc-saturation", { "vc-saturation__chrome": e.round, "vc-saturation__hidden": e.hide }]),
    style: Z({ backgroundColor: e.state.hueColor }),
    onClick: t[0] || (t[0] = (...l) => e.onClickBoard && e.onClickBoard(...l))
  }, [
    fv,
    dv,
    _("div", {
      class: "vc-saturation__cursor",
      ref: "cursorElement",
      style: Z(e.getCursorStyle)
    }, hv, 4)
  ], 6);
}
const Ca = /* @__PURE__ */ we(cv, [["render", vv], ["__scopeId", "data-v-058e5db2"]]), gv = U({
  name: "Hue",
  props: {
    color: M.instanceOf(G),
    size: M.oneOf(["small", "default"]).def("default")
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const r = N(null), n = N(null);
    let a = e.color || new G();
    const o = Oe({
      hue: a.hue || 0
    });
    Pe(
      () => e.color,
      (u) => {
        u && (a = u, Qr(o, { hue: a.hue }));
      },
      { deep: !0 }
    );
    const l = () => {
      if (r.value && n.value) {
        const u = r.value.getBoundingClientRect(), f = n.value.offsetWidth;
        return o.hue === 360 ? u.width - f / 2 : o.hue % 360 * (u.width - f) / 360 + f / 2;
      }
      return 0;
    }, i = B(() => ({
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
        a.hue = h, o.hue = h, t("change", h);
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
      r.value && n.value && Pt.triggerDragEvent(r.value, u);
    }), { barElement: r, cursorElement: n, getCursorStyle: i, onClickSider: s };
  }
}), yv = (e) => (It("data-v-e1a08576"), e = e(), Dt(), e), bv = /* @__PURE__ */ yv(() => /* @__PURE__ */ _("div", { class: "vc-hue-slider__bar-handle" }, null, -1)), mv = [
  bv
];
function _v(e, t, r, n, a, o) {
  return k(), P("div", {
    class: K(["vc-hue-slider", { "small-slider": e.size === "small" }])
  }, [
    _("div", {
      ref: "barElement",
      class: "vc-hue-slider__bar",
      onClick: t[0] || (t[0] = (...l) => e.onClickSider && e.onClickSider(...l))
    }, [
      _("div", {
        class: K(["vc-hue-slider__bar-pointer", { "small-bar": e.size === "small" }]),
        ref: "cursorElement",
        style: Z(e.getCursorStyle)
      }, mv, 6)
    ], 512)
  ], 2);
}
const wa = /* @__PURE__ */ we(gv, [["render", _v], ["__scopeId", "data-v-e1a08576"]]), Cv = U({
  name: "Lightness",
  props: {
    color: M.instanceOf(G),
    size: M.oneOf(["small", "default"]).def("default")
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const r = N(null), n = N(null);
    let a = e.color || new G();
    const [o, l, i] = a.HSL, s = Oe({
      hue: o,
      saturation: l,
      lightness: i
    });
    Pe(
      () => e.color,
      (h) => {
        if (h) {
          a = h;
          const [g, v, y] = a.HSL;
          Qr(s, {
            hue: g,
            saturation: v,
            lightness: y
          });
        }
      },
      { deep: !0 }
    );
    const c = B(() => {
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
    }, f = B(() => ({
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
        a.lightness = C, t("change", C);
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
      r.value && n.value && Pt.triggerDragEvent(r.value, h);
    }), { barElement: r, cursorElement: n, getCursorStyle: f, getBackgroundStyle: c, onClickSider: p };
  }
}), wv = (e) => (It("data-v-94a50a9e"), e = e(), Dt(), e), Sv = /* @__PURE__ */ wv(() => /* @__PURE__ */ _("div", { class: "vc-lightness-slider__bar-handle" }, null, -1)), xv = [
  Sv
];
function Ov(e, t, r, n, a, o) {
  return k(), P("div", {
    class: K(["vc-lightness-slider", { "small-slider": e.size === "small" }])
  }, [
    _("div", {
      ref: "barElement",
      class: "vc-lightness-slider__bar",
      style: Z(e.getBackgroundStyle),
      onClick: t[0] || (t[0] = (...l) => e.onClickSider && e.onClickSider(...l))
    }, [
      _("div", {
        class: K(["vc-lightness-slider__bar-pointer", { "small-bar": e.size === "small" }]),
        ref: "cursorElement",
        style: Z(e.getCursorStyle)
      }, xv, 6)
    ], 4)
  ], 2);
}
const Es = /* @__PURE__ */ we(Cv, [["render", Ov], ["__scopeId", "data-v-94a50a9e"]]), Av = U({
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
}), kv = {
  key: 0,
  class: "vc-colorPicker__record"
}, $v = { class: "color-list" }, Ev = ["onClick"];
function Tv(e, t, r, n, a, o) {
  return e.colors && e.colors.length > 0 ? (k(), P("div", kv, [
    _("div", $v, [
      (k(!0), P(Ve, null, wt(e.colors, (l, i) => (k(), P("div", {
        key: i,
        class: K(["color-item", "transparent", { "color-item__round": e.round }]),
        onClick: (s) => e.onColorSelect(l)
      }, [
        _("div", {
          class: "color-item__display",
          style: Z({ backgroundColor: l })
        }, null, 4)
      ], 10, Ev))), 128))
    ])
  ])) : W("", !0);
}
const Sa = /* @__PURE__ */ we(Av, [["render", Tv], ["__scopeId", "data-v-0f657238"]]), Mv = U({
  name: "Display",
  props: {
    color: M.instanceOf(G),
    disableAlpha: M.bool.def(!1)
  },
  emits: ["update:color", "change"],
  setup(e, { emit: t }) {
    var r, n, a, o;
    const l = N("hex"), i = Oe({
      color: e.color,
      hex: (r = e.color) == null ? void 0 : r.hex,
      alpha: Math.floor(((n = e.color) == null ? void 0 : n.alpha) || 100) + "%",
      rgba: (a = e.color) == null ? void 0 : a.RGB,
      previewBgColor: (o = e.color) == null ? void 0 : o.toRgbString()
    }), s = B(() => ({
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
}), Rv = { class: "vc-display" }, Pv = { class: "vc-current-color vc-transparent" }, jv = {
  key: 0,
  style: { display: "flex", flex: "1", gap: "4px", height: "100%" }
}, Iv = { class: "vc-color-input" }, Dv = ["value"], Hv = {
  key: 0,
  class: "vc-alpha-input"
}, Lv = ["value"], Bv = {
  key: 1,
  style: { display: "flex", flex: "1", gap: "4px", height: "100%" }
}, Nv = ["value", "onInput"];
function Vv(e, t, r, n, a, o) {
  return k(), P("div", Rv, [
    _("div", Pv, [
      _("div", {
        class: "color-cube",
        style: Z(e.getBgColorStyle)
      }, null, 4)
    ]),
    e.inputType === "hex" ? (k(), P("div", jv, [
      _("div", Iv, [
        _("input", {
          value: e.state.hex,
          onInput: t[0] || (t[0] = (...l) => e.onInputChange && e.onInputChange(...l))
        }, null, 40, Dv)
      ]),
      e.disableAlpha ? W("", !0) : (k(), P("div", Hv, [
        _("input", {
          class: "vc-alpha-input__inner",
          value: e.state.alpha,
          onInput: t[1] || (t[1] = (...l) => e.onAlphaBlur && e.onAlphaBlur(...l))
        }, null, 40, Lv)
      ]))
    ])) : e.state.rgba ? (k(), P("div", Bv, [
      (k(!0), P(Ve, null, wt(e.state.rgba, (l, i) => (k(), P("div", {
        class: "vc-color-input",
        key: i
      }, [
        _("input", {
          value: l,
          onInput: (s) => e.onInputChange(s, i)
        }, null, 40, Nv)
      ]))), 128))
    ])) : W("", !0),
    _("div", {
      class: "vc-input-toggle",
      onClick: t[2] || (t[2] = (...l) => e.onInputTypeChange && e.onInputTypeChange(...l))
    }, ce(e.inputType), 1)
  ]);
}
const xa = /* @__PURE__ */ we(Mv, [["render", Vv], ["__scopeId", "data-v-80d589ba"]]), Fv = U({
  name: "FkColorPicker",
  components: { Display: xa, Alpha: ma, Palette: $s, Board: Ca, Hue: wa, Lightness: Es, History: Sa },
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
    }), a = N(!1), o = B(() => ({ background: n.rgb })), l = () => {
      a.value = !1, t("advanceChange", !1);
    }, i = Wn(ya, [], {}), s = Ze(() => {
      if (e.disableHistory)
        return;
      const g = n.color.toRgbString();
      if (i.value = i.value.filter((v) => !w.equals(v, g)), !i.value.includes(g)) {
        for (; i.value.length > ba; )
          i.value.pop();
        i.value.unshift(g);
      }
    }, 500), c = (g) => {
      g === "advance" ? (a.value = !0, t("advanceChange", !0)) : (n.color.hex = g, t("advanceChange", !1));
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
      advancePanelShow: a,
      onBack: l,
      onCompactChange: c,
      onAlphaChange: u,
      onHueChange: f,
      onBoardChange: p,
      onLightChange: d,
      onInputChange: h,
      previewStyle: o,
      historyColors: i
    };
  }
}), zv = (e) => (It("data-v-0d5bef46"), e = e(), Dt(), e), Wv = { class: "vc-fk-colorPicker" }, Gv = { class: "vc-fk-colorPicker__inner" }, Kv = { class: "vc-fk-colorPicker__header" }, Uv = /* @__PURE__ */ zv(() => /* @__PURE__ */ _("div", { class: "back" }, null, -1)), qv = [
  Uv
];
function Yv(e, t, r, n, a, o) {
  const l = X("Palette"), i = X("Board"), s = X("Hue"), c = X("Lightness"), u = X("Alpha"), f = X("Display"), p = X("History");
  return k(), P("div", Wv, [
    _("div", Gv, [
      _("div", Kv, [
        e.advancePanelShow ? (k(), P("span", {
          key: 0,
          style: { cursor: "pointer" },
          onClick: t[0] || (t[0] = (...d) => e.onBack && e.onBack(...d))
        }, qv)) : W("", !0)
      ]),
      e.advancePanelShow ? W("", !0) : (k(), ee(l, {
        key: 0,
        onChange: e.onCompactChange
      }, null, 8, ["onChange"])),
      e.advancePanelShow ? (k(), ee(i, {
        key: 1,
        color: e.state.color,
        onChange: e.onBoardChange
      }, null, 8, ["color", "onChange"])) : W("", !0),
      e.advancePanelShow ? (k(), ee(s, {
        key: 2,
        color: e.state.color,
        onChange: e.onHueChange
      }, null, 8, ["color", "onChange"])) : W("", !0),
      e.advancePanelShow ? W("", !0) : (k(), ee(c, {
        key: 3,
        color: e.state.color,
        onChange: e.onLightChange
      }, null, 8, ["color", "onChange"])),
      e.disableAlpha ? W("", !0) : (k(), ee(u, {
        key: 4,
        color: e.state.color,
        onChange: e.onAlphaChange
      }, null, 8, ["color", "onChange"])),
      Ae(f, {
        color: e.state.color,
        "disable-alpha": e.disableAlpha
      }, null, 8, ["color", "disable-alpha"]),
      e.disableHistory ? W("", !0) : (k(), ee(p, {
        key: 5,
        round: e.roundHistory,
        colors: e.historyColors,
        onChange: e.onCompactChange
      }, null, 8, ["round", "colors", "onChange"]))
    ])
  ]);
}
const si = /* @__PURE__ */ we(Fv, [["render", Yv], ["__scopeId", "data-v-0d5bef46"]]), Xv = U({
  name: "ChromeColorPicker",
  components: { Display: xa, Alpha: ma, Board: Ca, Hue: wa, History: Sa },
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
    }), a = B(() => ({ background: n.rgb })), o = Wn(ya, [], {}), l = Ze(() => {
      if (e.disableHistory)
        return;
      const f = n.color.toRgbString();
      if (o.value = o.value.filter((p) => !w.equals(p, f)), !o.value.includes(f)) {
        for (; o.value.length > ba; )
          o.value.pop();
        o.value.unshift(f);
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
      previewStyle: a,
      historyColors: o,
      onAlphaChange: i,
      onHueChange: s,
      onBoardChange: c,
      onCompactChange: u
    };
  }
}), Jv = { class: "vc-chrome-colorPicker" }, Zv = { class: "vc-chrome-colorPicker-body" }, Qv = { class: "chrome-controls" }, eg = { class: "chrome-sliders" };
function tg(e, t, r, n, a, o) {
  const l = X("Board"), i = X("Hue"), s = X("Alpha"), c = X("Display"), u = X("History");
  return k(), P("div", Jv, [
    Ae(l, {
      round: !0,
      hide: !1,
      color: e.state.color,
      onChange: e.onBoardChange
    }, null, 8, ["color", "onChange"]),
    _("div", Zv, [
      _("div", Qv, [
        _("div", eg, [
          Ae(i, {
            size: "small",
            color: e.state.color,
            onChange: e.onHueChange
          }, null, 8, ["color", "onChange"]),
          e.disableAlpha ? W("", !0) : (k(), ee(s, {
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
      e.disableHistory ? W("", !0) : (k(), ee(u, {
        key: 0,
        round: e.roundHistory,
        colors: e.historyColors,
        onChange: e.onCompactChange
      }, null, 8, ["round", "colors", "onChange"]))
    ])
  ]);
}
const li = /* @__PURE__ */ we(Xv, [["render", tg], ["__scopeId", "data-v-33636434"]]), Oa = "Vue3ColorPickerProvider", rg = (e, t) => {
  const r = e.getBoundingClientRect(), n = r.left + r.width / 2, a = r.top + r.height / 2, o = Math.abs(n - t.clientX), l = Math.abs(a - t.clientY), i = Math.sqrt(Math.pow(o, 2) + Math.pow(l, 2)), s = l / i, c = Math.acos(s);
  let u = Math.floor(180 / (Math.PI / c));
  return t.clientX > n && t.clientY > a && (u = 180 - u), t.clientX == n && t.clientY > a && (u = 180), t.clientX > n && t.clientY == a && (u = 90), t.clientX < n && t.clientY > a && (u = 180 + u), t.clientX < n && t.clientY == a && (u = 270), t.clientX < n && t.clientY < a && (u = 360 - u), u;
};
let On = !1;
const ng = (e, t) => {
  const r = function(a) {
    var o;
    (o = t.drag) == null || o.call(t, a);
  }, n = function(a) {
    var o;
    document.removeEventListener("mousemove", r, !1), document.removeEventListener("mouseup", n, !1), document.onselectstart = null, document.ondragstart = null, On = !1, (o = t.end) == null || o.call(t, a);
  };
  e && e.addEventListener("mousedown", (a) => {
    var o;
    On || (document.onselectstart = () => !1, document.ondragstart = () => !1, document.addEventListener("mousemove", r, !1), document.addEventListener("mouseup", n, !1), On = !0, (o = t.start) == null || o.call(t, a));
  });
}, ag = {
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
}, og = U({
  name: "Angle",
  props: ag,
  emits: ["update:angle", "change"],
  setup(e, {
    emit: t
  }) {
    const r = N(null), n = N(0);
    Pe(() => e.angle, (i) => {
      n.value = i;
    });
    const a = () => {
      let i = Number(n.value);
      isNaN(i) || (i = i > 360 || i < 0 ? e.angle : i, n.value = i === 360 ? 0 : i, t("update:angle", n.value), t("change", n.value));
    }, o = B(() => ({
      width: e.size + "px",
      height: e.size + "px",
      borderWidth: e.borderWidth + "px",
      borderColor: e.borderColor,
      transform: `rotate(${n.value}deg)`
    })), l = (i) => {
      r.value && (n.value = rg(r.value, i) % 360, a());
    };
    return fi(() => {
      const i = {
        drag: (s) => {
          l(s);
        },
        end: (s) => {
          l(s);
        }
      };
      r.value && ng(r.value, i);
    }), () => Ae("div", {
      class: "bee-angle"
    }, [Ae("div", {
      class: "bee-angle__round",
      ref: r,
      style: o.value
    }, null)]);
  }
}), ig = U({
  name: "GradientColorPicker",
  components: { Angle: og, Display: xa, Alpha: ma, Palette: $s, Board: Ca, Hue: wa, Lightness: Es, History: Sa },
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
    }), n = pi(Oa), a = N(e.pickerType === "chrome"), o = N(), l = N(), i = N();
    Pe(
      () => [e.startColor, e.endColor, e.angle],
      (m) => {
        r.startColor = m[0], r.endColor = m[1], r.angle = m[2];
      }
    ), Pe(
      () => e.type,
      (m) => {
        r.type = m;
      }
    );
    const s = B({
      get: () => r.startActive ? r.startColor : r.endColor,
      set: (m) => {
        if (r.startActive) {
          r.startColor = m;
          return;
        }
        r.endColor = m;
      }
    }), c = B(() => {
      if (i.value && o.value) {
        const m = r.startColorStop / 100, j = i.value.getBoundingClientRect(), E = o.value.offsetWidth;
        return Math.round(m * (j.width - E) + E / 2);
      }
      return 0;
    }), u = B(() => {
      if (i.value && l.value) {
        const m = r.endColorStop / 100, j = i.value.getBoundingClientRect(), E = l.value.offsetWidth;
        return Math.round(m * (j.width - E) + E / 2);
      }
      return 0;
    }), f = B(() => {
      let m = `background: linear-gradient(${r.angle}deg, ${r.startColorRgba} ${r.startColorStop}%, ${r.endColorRgba} ${r.endColorStop}%)`;
      return r.type === "radial" && (m = `background: radial-gradient(circle, ${r.startColorRgba} ${r.startColorStop}%, ${r.endColorRgba} ${r.endColorStop}%)`), m;
    }), p = (m) => {
      var j;
      if (r.startActive = !0, i.value && o.value) {
        const E = (j = i.value) == null ? void 0 : j.getBoundingClientRect();
        let I = m.clientX - E.left;
        I = Math.max(o.value.offsetWidth / 2, I), I = Math.min(I, E.width - o.value.offsetWidth / 2), r.startColorStop = Math.round(
          (I - o.value.offsetWidth / 2) / (E.width - o.value.offsetWidth) * 100
        ), t("update:startColorStop", r.startColorStop), t("startColorStopChange", r.startColorStop);
      }
    }, d = (m) => {
      var j;
      if (r.startActive = !1, i.value && l.value) {
        const E = (j = i.value) == null ? void 0 : j.getBoundingClientRect();
        let I = m.clientX - E.left;
        I = Math.max(l.value.offsetWidth / 2, I), I = Math.min(I, E.width - l.value.offsetWidth / 2), r.endColorStop = Math.round(
          (I - l.value.offsetWidth / 2) / (E.width - l.value.offsetWidth) * 100
        ), t("update:endColorStop", r.endColorStop), t("endColorStopChange", r.endColorStop);
      }
    }, h = (m) => {
      const j = m.target, E = parseInt(j.value.replace("°", ""));
      isNaN(E) || (r.angle = E % 360), t("update:angle", r.angle), t("angleChange", r.angle);
    }, g = (m) => {
      r.angle = m, t("update:angle", r.angle), t("angleChange", r.angle);
    }, v = (m) => {
      m === "advance" ? (a.value = !0, t("advanceChange", !0)) : (s.value.hex = m, t("advanceChange", !1)), $();
    }, y = (m) => {
      s.value.alpha = m, $();
    }, C = (m) => {
      s.value.hue = m, $();
    }, x = (m, j) => {
      s.value.saturation = m, s.value.brightness = j, $();
    }, S = (m) => {
      s.value.lightness = m, $();
    }, T = () => {
      $();
    }, $ = () => {
      r.startActive ? (t("update:startColor", r.startColor), t("startColorChange", r.startColor)) : (t("update:endColor", r.endColor), t("endColorChange", r.endColor));
    }, R = () => {
      a.value = !1, t("advanceChange", !1);
    }, H = () => {
      r.type = r.type === "linear" ? "radial" : "linear", t("typeChange", r.type);
    }, b = Wn(ya, [], {}), O = Ze(() => {
      if (e.disableHistory)
        return;
      const m = s.value.toRgbString();
      if (b.value = b.value.filter((j) => !w.equals(j, m)), !b.value.includes(m)) {
        for (; b.value.length > ba; )
          b.value.pop();
        b.value.unshift(m);
      }
    }, 500);
    return ot(() => {
      l.value && o.value && (Pt.triggerDragEvent(l.value, {
        drag: (m) => {
          d(m);
        },
        end: (m) => {
          d(m);
        }
      }), Pt.triggerDragEvent(o.value, {
        drag: (m) => {
          p(m);
        },
        end: (m) => {
          p(m);
        }
      }));
    }), oe(
      () => r.startColor,
      (m) => {
        r.startColorRgba = m.toRgbString();
      },
      { deep: !0 }
    ), oe(
      () => r.endColor,
      (m) => {
        r.endColorRgba = m.toRgbString();
      },
      { deep: !0 }
    ), oe(
      () => s.value,
      () => {
        O();
      },
      { deep: !0 }
    ), {
      startGradientRef: o,
      stopGradientRef: l,
      colorRangeRef: i,
      state: r,
      currentColor: s,
      getStartColorLeft: c,
      getEndColorLeft: u,
      gradientBg: f,
      advancePanelShow: a,
      onDegreeBlur: h,
      onCompactChange: v,
      onAlphaChange: y,
      onHueChange: C,
      onBoardChange: x,
      onLightChange: S,
      historyColors: b,
      onBack: R,
      onDegreeChange: g,
      onDisplayChange: T,
      onTypeChange: H,
      lang: n == null ? void 0 : n.lang
    };
  }
}), Ts = (e) => (It("data-v-431cadee"), e = e(), Dt(), e), sg = { class: "vc-gradient-picker" }, lg = { class: "vc-gradient-picker__header" }, ug = { class: "vc-gradient__types" }, cg = { class: "vc-gradient-wrap__types" }, fg = { class: "vc-picker-degree-input vc-degree-input" }, dg = { class: "vc-degree-input__control" }, pg = ["value"], hg = { class: "vc-degree-input__panel" }, vg = { class: "vc-degree-input__disk" }, gg = { class: "vc-gradient-picker__body" }, yg = {
  class: "vc-color-range",
  ref: "colorRangeRef"
}, bg = { class: "vc-color-range__container" }, mg = { class: "vc-gradient__stop__container" }, _g = ["title"], Cg = /* @__PURE__ */ Ts(() => /* @__PURE__ */ _("span", { class: "vc-gradient__stop--inner" }, null, -1)), wg = [
  Cg
], Sg = ["title"], xg = /* @__PURE__ */ Ts(() => /* @__PURE__ */ _("span", { class: "vc-gradient__stop--inner" }, null, -1)), Og = [
  xg
];
function Ag(e, t, r, n, a, o) {
  var l, i;
  const s = X("Angle"), c = X("Board"), u = X("Hue"), f = X("Palette"), p = X("Lightness"), d = X("Alpha"), h = X("Display"), g = X("History");
  return k(), P("div", sg, [
    _("div", lg, [
      _("div", null, [
        Fe(_("div", {
          class: "back",
          style: { cursor: "pointer" },
          onClick: t[0] || (t[0] = (...v) => e.onBack && e.onBack(...v))
        }, null, 512), [
          [St, e.pickerType === "fk" && e.advancePanelShow]
        ])
      ]),
      _("div", ug, [
        _("div", cg, [
          (k(), P(Ve, null, wt(["linear", "radial"], (v) => _("div", {
            class: K(["vc-gradient__type", { active: e.state.type === v }]),
            key: v,
            onClick: t[1] || (t[1] = (...y) => e.onTypeChange && e.onTypeChange(...y))
          }, ce(e.lang ? e.lang[v] : v), 3)), 64))
        ]),
        Fe(_("div", fg, [
          _("div", dg, [
            _("input", {
              value: e.state.angle,
              onBlur: t[2] || (t[2] = (...v) => e.onDegreeBlur && e.onDegreeBlur(...v))
            }, null, 40, pg),
            hi("deg ")
          ]),
          _("div", hg, [
            _("div", vg, [
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
    _("div", gg, [
      _("div", yg, [
        _("div", bg, [
          _("div", {
            class: "vc-background",
            style: Z(e.gradientBg)
          }, null, 4),
          _("div", mg, [
            _("div", {
              class: K(["vc-gradient__stop", {
                "vc-gradient__stop--current": e.state.startActive
              }]),
              ref: "startGradientRef",
              title: (l = e.lang) == null ? void 0 : l.start,
              style: Z({ left: e.getStartColorLeft + "px", backgroundColor: e.state.startColorRgba })
            }, wg, 14, _g),
            _("div", {
              class: K(["vc-gradient__stop", {
                "vc-gradient__stop--current": !e.state.startActive
              }]),
              ref: "stopGradientRef",
              title: (i = e.lang) == null ? void 0 : i.end,
              style: Z({ left: e.getEndColorLeft + "px", backgroundColor: e.state.endColorRgba })
            }, Og, 14, Sg)
          ])
        ])
      ], 512)
    ]),
    e.advancePanelShow ? (k(), ee(c, {
      key: 0,
      color: e.currentColor,
      onChange: e.onBoardChange
    }, null, 8, ["color", "onChange"])) : W("", !0),
    e.advancePanelShow ? (k(), ee(u, {
      key: 1,
      color: e.currentColor,
      onChange: e.onHueChange
    }, null, 8, ["color", "onChange"])) : W("", !0),
    e.advancePanelShow ? W("", !0) : (k(), ee(f, {
      key: 2,
      onChange: e.onCompactChange
    }, null, 8, ["onChange"])),
    e.advancePanelShow ? W("", !0) : (k(), ee(p, {
      key: 3,
      color: e.currentColor,
      onChange: e.onLightChange
    }, null, 8, ["color", "onChange"])),
    e.disableAlpha ? W("", !0) : (k(), ee(d, {
      key: 4,
      color: e.currentColor,
      onChange: e.onAlphaChange
    }, null, 8, ["color", "onChange"])),
    Ae(h, {
      color: e.currentColor,
      "disable-alpha": e.disableAlpha,
      onChange: e.onDisplayChange
    }, null, 8, ["color", "disable-alpha", "onChange"]),
    e.disableHistory ? W("", !0) : (k(), ee(g, {
      key: 5,
      round: e.roundHistory,
      colors: e.historyColors,
      onChange: e.onCompactChange
    }, null, 8, ["round", "colors", "onChange"]))
  ]);
}
const ui = /* @__PURE__ */ we(ig, [["render", Ag], ["__scopeId", "data-v-431cadee"]]), kg = U({
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
    }), n = pi(Oa), a = (o) => {
      r.activeKey = o, t("update:activeKey", o), t("change", o);
    };
    return oe(
      () => e.activeKey,
      (o) => {
        r.activeKey = o;
      }
    ), { state: r, onActiveKeyChange: a, lang: n == null ? void 0 : n.lang };
  }
}), $g = { class: "vc-colorpicker--container" }, Eg = {
  key: 0,
  class: "vc-colorpicker--tabs"
}, Tg = { class: "vc-colorpicker--tabs__inner" }, Mg = { class: "vc-btn__content" }, Rg = { class: "vc-btn__content" };
function Pg(e, t, r, n, a, o) {
  var l, i;
  return k(), P("div", {
    class: K(["vc-colorpicker", e.theme])
  }, [
    _("div", $g, [
      e.showTab ? (k(), P("div", Eg, [
        _("div", Tg, [
          _("div", {
            class: K([
              "vc-colorpicker--tabs__btn",
              {
                "vc-btn-active": e.state.activeKey === "pure"
              }
            ]),
            onClick: t[0] || (t[0] = (s) => e.onActiveKeyChange("pure"))
          }, [
            _("button", null, [
              _("div", Mg, ce((l = e.lang) == null ? void 0 : l.pure), 1)
            ])
          ], 2),
          _("div", {
            class: K([
              "vc-colorpicker--tabs__btn",
              {
                "vc-btn-active": e.state.activeKey === "gradient"
              }
            ]),
            onClick: t[1] || (t[1] = (s) => e.onActiveKeyChange("gradient"))
          }, [
            _("button", null, [
              _("div", Rg, ce((i = e.lang) == null ? void 0 : i.gradient), 1)
            ])
          ], 2),
          _("div", {
            class: "vc-colorpicker--tabs__bg",
            style: Z({
              width: "50%",
              left: `calc(${e.state.activeKey === "gradient" ? 50 : 0}%)`
            })
          }, null, 4)
        ])
      ])) : W("", !0),
      zn(e.$slots, "default", {}, void 0, !0)
    ])
  ], 2);
}
const jg = /* @__PURE__ */ we(kg, [["render", Pg], ["__scopeId", "data-v-0492277d"]]), Ig = {
  start: "Start",
  end: "End",
  pure: "Pure",
  gradient: "Gradient",
  linear: "linear",
  radial: "radial"
}, Dg = {
  start: "开始",
  end: "结束",
  pure: "纯色",
  gradient: "渐变",
  linear: "线性",
  radial: "径向"
}, Hg = {
  En: Ig,
  "ZH-cn": Dg
}, Lg = {
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
}, Bg = U({
  name: "ColorPicker",
  components: { FkColorPicker: si, ChromeColorPicker: li, GradientColorPicker: ui, WrapContainer: jg },
  inheritAttrs: !1,
  props: Lg,
  emits: [
    "update:pureColor",
    "pureColorChange",
    "update:gradientColor",
    "gradientColorChange",
    "update:activeKey",
    "activeKeyChange"
  ],
  setup(e, { emit: t }) {
    Vs(Oa, {
      lang: B(() => Hg[e.lang || "ZH-cn"])
    });
    const r = Oe({
      pureColor: e.pureColor || "",
      activeKey: e.useType === "gradient" ? "gradient" : e.activeKey,
      //  "pure" | "gradient"
      isAdvanceMode: !1
    }), n = new G("#000"), a = new G("#000"), o = new G(r.pureColor), l = Oe({
      startColor: n,
      endColor: a,
      startColorStop: 0,
      endColorStop: 100,
      angle: 0,
      type: "linear",
      gradientColor: e.gradientColor
    }), i = N(o), s = N(!1), c = N(null), u = N(null);
    let f = null;
    const p = B(() => ({
      background: r.activeKey !== "gradient" ? w(r.pureColor).toRgbString() : l.gradientColor
    })), d = B(() => r.activeKey === "gradient" ? ui.name : e.pickerType === "fk" ? si.name : li.name), h = (b) => {
      r.isAdvanceMode = b;
    }, g = B(() => {
      const b = {
        disableAlpha: e.disableAlpha,
        disableHistory: e.disableHistory,
        roundHistory: e.roundHistory,
        pickerType: e.pickerType
      };
      return r.activeKey === "gradient" ? {
        ...b,
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
        ...b,
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
      var b, O, m, j;
      try {
        const [E] = Ll(l.gradientColor);
        if (E && E.type.includes("gradient") && E.colorStops.length >= 2) {
          const I = E.colorStops[0], Q = E.colorStops[1];
          l.startColorStop = Number((b = I.length) == null ? void 0 : b.value) || 0, l.endColorStop = Number((O = Q.length) == null ? void 0 : O.value) || 0, E.type === "linear-gradient" && ((m = E.orientation) == null ? void 0 : m.type) === "angular" && (l.angle = Number((j = E.orientation) == null ? void 0 : j.value) || 0), l.type = E.type.split("-")[0];
          const [re, A, D, L] = I.value, [le, Le, Ue, ft] = Q.value;
          l.startColor = new G({
            r: Number(re),
            g: Number(A),
            b: Number(D),
            a: Number(L)
          }), l.endColor = new G({
            r: Number(le),
            g: Number(Le),
            b: Number(Ue),
            a: Number(ft)
          });
        }
      } catch (E) {
        console.log(`[Parse Color]: ${E}`);
      }
    }, x = Ze(() => {
      const b = S();
      try {
        l.gradientColor = Bl(b), t("update:gradientColor", l.gradientColor), t("gradientColorChange", l.gradientColor);
      } catch (O) {
        console.log(O);
      }
    }, e.debounce), S = () => {
      const b = [], O = l.startColor.RGB.map((E) => E.toString()), m = l.endColor.RGB.map((E) => E.toString()), j = [
        {
          type: "rgba",
          value: [O[0], O[1], O[2], O[3]],
          length: { value: l.startColorStop + "", type: "%" }
        },
        {
          type: "rgba",
          value: [m[0], m[1], m[2], m[3]],
          length: { value: l.endColorStop + "", type: "%" }
        }
      ];
      return l.type === "linear" ? b.push({
        type: "linear-gradient",
        orientation: { type: "angular", value: l.angle + "" },
        colorStops: j
      }) : l.type === "radial" && b.push({
        type: "radial-gradient",
        orientation: [{ type: "shape", value: "circle" }],
        colorStops: j
      }), b;
    }, T = () => {
      c.value && u.value && (f = Gu(c.value, u.value, {
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
    }, $ = (b) => {
      i.value = b, r.pureColor = b.toString(e.format), R();
    }, R = Ze(() => {
      t("update:pureColor", r.pureColor), t("pureColorChange", r.pureColor);
    }, e.debounce);
    sl(u, () => {
      y();
    });
    const H = (b) => {
      r.activeKey = b, t("update:activeKey", b), t("activeKeyChange", b);
    };
    return ot(() => {
      C();
    }), oe(
      () => e.gradientColor,
      (b) => {
        b != l.gradientColor && (l.gradientColor = b);
      }
    ), oe(
      () => l.gradientColor,
      () => {
        C();
      }
    ), oe(
      () => e.activeKey,
      (b) => {
        r.activeKey = b;
      }
    ), oe(
      () => e.useType,
      (b) => {
        r.activeKey !== "gradient" && b === "gradient" ? r.activeKey = "gradient" : r.activeKey = "pure";
      }
    ), oe(
      () => e.pureColor,
      (b) => {
        w.equals(b, r.pureColor) || (r.pureColor = b, i.value = new G(b));
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
      onActiveKeyChange: H,
      getComponentName: d,
      getBindArgs: g,
      state: r
    };
  }
});
function Ng(e, t, r, n, a, o) {
  const l = X("WrapContainer");
  return k(), P(Ve, null, [
    e.isWidget ? (k(), ee(l, {
      key: 0,
      "active-key": e.state.activeKey,
      "onUpdate:activeKey": t[0] || (t[0] = (i) => e.state.activeKey = i),
      "show-tab": e.useType === "both",
      onChange: e.onActiveKeyChange,
      style: Z({ zIndex: e.zIndex }),
      theme: e.theme
    }, {
      default: Ia(() => [
        (k(), ee(Da(e.getComponentName), Ha({ key: e.getComponentName }, e.getBindArgs), null, 16))
      ]),
      _: 1
    }, 8, ["active-key", "show-tab", "onChange", "style", "theme"])) : W("", !0),
    e.isWidget ? W("", !0) : (k(), P(Ve, { key: 1 }, [
      _("div", {
        class: K(["vc-color-wrap transparent", { round: e.shape === "circle" }]),
        ref: "colorCubeRef"
      }, [
        _("div", {
          class: "current-color",
          style: Z(e.getBgColorStyle),
          onClick: t[1] || (t[1] = (...i) => e.onShowPicker && e.onShowPicker(...i))
        }, null, 4)
      ], 2),
      (k(), ee(Fs, { to: e.pickerContainer }, [
        Fe(_("div", {
          ref: "pickerRef",
          style: Z({ zIndex: e.zIndex })
        }, [
          e.showPicker ? (k(), ee(l, {
            key: 0,
            "show-tab": e.useType === "both" && !e.state.isAdvanceMode,
            "active-key": e.state.activeKey,
            "onUpdate:activeKey": t[2] || (t[2] = (i) => e.state.activeKey = i),
            onChange: e.onActiveKeyChange,
            theme: e.theme
          }, {
            default: Ia(() => [
              (k(), ee(Da(e.getComponentName), Ha({ key: e.getComponentName }, e.getBindArgs), null, 16))
            ]),
            _: 1
          }, 8, ["show-tab", "active-key", "onChange", "theme"])) : W("", !0)
        ], 4), [
          [St, e.showPicker]
        ])
      ], 8, ["to"]))
    ], 64))
  ], 64);
}
const Vg = /* @__PURE__ */ we(Bg, [["render", Ng], ["__scopeId", "data-v-3ba84123"]]), Fg = { class: "label-text" }, zg = ["value", "disabled"], Wg = { class: "color-picker-container" }, Gg = /* @__PURE__ */ U({
  __name: "DatColor",
  props: /* @__PURE__ */ nt({
    label: { default: "" },
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { type: String, required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, r = B(() => t.disabled), n = at(e, "modelValue");
    let a = N(!1);
    const o = B(() => {
      if (n.value.length !== 7 || n.value[0] !== "#")
        return "black";
      const c = parseInt(n.value.substring(1, 3), 16), u = parseInt(n.value.substring(3, 5), 16), f = parseInt(n.value.substring(5, 7), 16);
      return (c * 299 + u * 587 + f * 114) / 1e3 >= 128 ? "black" : "white";
    }), l = (c) => {
      c.key === "Enter" && (a.value = !1);
    }, i = () => {
      a.value = !0, window.addEventListener("keydown", l);
    }, s = () => {
      a.value = !1, window.removeEventListener("keydown", l);
    };
    return (c, u) => (k(), P("li", {
      class: K(["control-item color", { disabled: r.value }]),
      style: Z({ "border-left-color": n.value }),
      onMouseleave: s
    }, [
      _("label", null, [
        _("span", Fg, ce(c.label), 1),
        _("div", {
          class: "control",
          onMouseover: i
        }, [
          _("input", {
            type: "text",
            value: n.value,
            style: Z({ "background-color": n.value, color: o.value }),
            disabled: r.value,
            readonly: ""
          }, null, 12, zg),
          _("div", Wg, [
            Ae(mt(Vg), {
              pureColor: n.value,
              "onUpdate:pureColor": u[0] || (u[0] = (f) => n.value = f),
              pickerType: "chrome",
              "is-widget": "",
              "disable-history": ""
            }, null, 8, ["pureColor"])
          ])
        ], 32)
      ])
    ], 38));
  }
}), en = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, a] of t)
    r[n] = a;
  return r;
}, Kg = /* @__PURE__ */ en(Gg, [["__scopeId", "data-v-fbd36b34"]]), Ug = { class: "folder" }, qg = {
  ref: "label",
  class: "group"
}, Yg = { class: "text--inner w-100" }, Xg = { class: "symbol" }, Jg = /* @__PURE__ */ U({
  __name: "DatFolder",
  props: /* @__PURE__ */ nt({
    label: { default: "" }
  }, {
    open: { type: Boolean, default: !0 },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(e) {
    const t = at(e, "open"), r = () => {
      t.value = !t.value;
    };
    return (n, a) => (k(), P("li", Ug, [
      _("div", qg, [
        _("div", {
          class: "text",
          onClick: r
        }, [
          _("div", Yg, [
            _("span", Xg, ce(t.value ? "▼" : "►"), 1),
            hi(" " + ce(n.label), 1)
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
}), Zg = /* @__PURE__ */ en(Jg, [["__scopeId", "data-v-bd32d018"]]), Qg = { class: "vue-dat-gui" }, e0 = { class: "group group--main" }, t0 = ["onKeydown"], r0 = ["onKeydown"], n0 = /* @__PURE__ */ U({
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
    const t = e, r = at(e, "open"), n = B(
      () => r.value ? t.closeText : t.openText
    ), a = () => {
      r.value = r.value !== !0;
    };
    return (o, l) => (k(), P("div", Qg, [
      _("div", e0, [
        o.closePosition === "top" ? (k(), P("div", {
          key: 0,
          class: "toggle-button",
          role: "button",
          tabindex: "0",
          onClick: a,
          onKeydown: La(Ba(a, ["prevent"]), ["space", "enter"])
        }, ce(n.value), 41, t0)) : W("", !0),
        Fe(_("ul", null, [
          zn(o.$slots, "default")
        ], 512), [
          [St, r.value]
        ]),
        o.closePosition === "bottom" ? (k(), P("div", {
          key: 1,
          class: "toggle-button",
          role: "button",
          tabindex: "0",
          onClick: a,
          onKeydown: La(Ba(a, ["prevent"]), ["space", "enter"])
        }, ce(n.value), 41, r0)) : W("", !0)
      ])
    ]));
  }
}), Vn = (e, t, r) => Math.min(Math.max(e, t), r), a0 = /* @__PURE__ */ U({
  __name: "NumberSlider",
  props: {
    value: {},
    min: {},
    max: {}
  },
  emits: ["updateState"],
  setup(e, { emit: t }) {
    const r = e, n = t, a = N(null), o = B(
      () => Vn((r.value - r.min) * 100 / (r.max - r.min), 0, 100)
    ), l = (u) => {
      if (a.value) {
        const f = a.value.getBoundingClientRect(), p = u - f.left, d = f.right - f.left, h = r.min + Vn(p / d, 0, 1) * (r.max - r.min);
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
      ref: a,
      class: "slider",
      style: Z({ "background-size": `${o.value}% 100%` }),
      onMousedown: c
    }, null, 36));
  }
}), o0 = /* @__PURE__ */ en(a0, [["__scopeId", "data-v-af9bdb8d"]]), i0 = { ref: "label" }, s0 = { class: "label-text" }, l0 = { class: "control" }, u0 = ["min", "max", "step", "value", "disabled"], c0 = /* @__PURE__ */ U({
  __name: "DatNumber",
  props: /* @__PURE__ */ nt({
    label: { default: "" },
    showSlider: { type: Boolean, default: !0 },
    min: {},
    max: {},
    step: {},
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, r = B(() => t.disabled), n = at(e, "modelValue");
    let a = typeof t.min == "number" ? t.min : Number.NEGATIVE_INFINITY, o = typeof t.max == "number" ? t.max : Number.POSITIVE_INFINITY;
    a > o && ([a, o] = [o, a]);
    const l = B(
      () => t.showSlider && Number.isFinite(a) && Number.isFinite(o)
    ), i = B(() => {
      if (t.step)
        return t.step;
      const u = o - a;
      return 10 ** Math.floor(Math.log(Math.abs(u)) / Math.LN10) / 10;
    }), s = (u) => {
      let f = Vn(u, a, o);
      i.value !== 0 && Number.isFinite(i.value) && (f = Math.round(f / i.value) * i.value), n.value = f;
    }, c = (u) => {
      s(Number(u.target.value));
    };
    return (u, f) => (k(), P("li", {
      class: K(["control-item number", { disabled: r.value }])
    }, [
      _("label", i0, [
        _("span", s0, ce(u.label), 1),
        _("div", l0, [
          Fe(Ae(o0, {
            min: mt(a),
            max: mt(o),
            value: n.value,
            onUpdateState: s
          }, null, 8, ["min", "max", "value"]), [
            [St, l.value]
          ]),
          _("input", {
            type: "number",
            ref: "input",
            class: "input",
            min: mt(a),
            max: mt(o),
            step: i.value,
            value: n.value,
            onInput: c,
            disabled: r.value
          }, null, 40, u0)
        ])
      ], 512)
    ], 2));
  }
}), f0 = /* @__PURE__ */ en(c0, [["__scopeId", "data-v-148da278"]]), d0 = { ref: "label" }, p0 = { class: "label-text" }, h0 = { class: "control" }, v0 = ["disabled"], g0 = ["value"], y0 = /* @__PURE__ */ U({
  __name: "DatSelect",
  props: /* @__PURE__ */ nt({
    label: { default: "" },
    items: { default: () => [] },
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { type: String, default: "" },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, r = B(() => t.disabled), n = at(e, "modelValue"), a = B(
      () => t.items.map(
        (o) => typeof o == "object" ? o : { name: (o || "").toString(), value: o }
      )
    );
    return (o, l) => (k(), P("li", {
      class: K(["control-item select", { disabled: r.value }])
    }, [
      _("label", d0, [
        _("span", p0, ce(o.label), 1),
        _("div", h0, [
          Fe(_("select", {
            "onUpdate:modelValue": l[0] || (l[0] = (i) => n.value = i),
            class: "w-100",
            disabled: r.value
          }, [
            (k(!0), P(Ve, null, wt(a.value, (i) => (k(), P("option", {
              key: i.value,
              value: i.value
            }, ce(i.name), 9, g0))), 128))
          ], 8, v0), [
            [zs, n.value]
          ])
        ])
      ], 512)
    ], 2));
  }
}), b0 = { ref: "label" }, m0 = { class: "label-text" }, _0 = { class: "control" }, C0 = ["disabled"], w0 = /* @__PURE__ */ U({
  __name: "DatString",
  props: /* @__PURE__ */ nt({
    label: { default: "" },
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { type: String, default: "" },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, r = B(() => t.disabled), n = at(e, "modelValue");
    return (a, o) => (k(), P("li", {
      class: K(["control-item string", { disabled: r.value }])
    }, [
      _("label", b0, [
        _("span", m0, ce(a.label), 1),
        _("div", _0, [
          Fe(_("input", {
            type: "text",
            "onUpdate:modelValue": o[0] || (o[0] = (l) => n.value = l),
            disabled: r.value
          }, null, 8, C0), [
            [Ws, n.value]
          ])
        ])
      ], 512)
    ], 2));
  }
}), ci = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DatBoolean: Ys,
  DatButton: Xs,
  DatColor: Kg,
  DatFolder: Zg,
  DatGui: n0,
  DatNumber: f0,
  DatSelect: y0,
  DatString: w0
}, Symbol.toStringTag, { value: "Module" })), S0 = (e) => {
  for (const t in ci)
    e.component(t, ci[t]);
}, A0 = { install: S0 };
export {
  Ys as DatBoolean,
  Xs as DatButton,
  Kg as DatColor,
  Zg as DatFolder,
  n0 as DatGui,
  f0 as DatNumber,
  y0 as DatSelect,
  w0 as DatString,
  A0 as default
};
