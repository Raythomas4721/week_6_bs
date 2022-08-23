"use strict";

$(function () {
  console.log('Hello Bootstrap5');
});
"use strict";

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e19) { throw _e19; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e20) { didErr = true; err = _e20; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v5.2.0 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e(t.Popper);
}(void 0, function (t) {
  "use strict";

  function e(t) {
    if (t && t.__esModule) return t;
    var e = Object.create(null, _defineProperty({}, Symbol.toStringTag, {
      value: "Module"
    }));

    if (t) {
      var _loop = function _loop(_i) {
        if ("default" !== _i) {
          var _s = Object.getOwnPropertyDescriptor(t, _i);

          Object.defineProperty(e, _i, _s.get ? _s : {
            enumerable: !0,
            get: function get() {
              return t[_i];
            }
          });
        }
      };

      for (var _i in t) {
        _loop(_i);
      }
    }

    return e["default"] = t, Object.freeze(e);
  }

  var i = e(t),
      s = "transitionend",
      n = function n(t) {
    var e = t.getAttribute("data-bs-target");

    if (!e || "#" === e) {
      var _i2 = t.getAttribute("href");

      if (!_i2 || !_i2.includes("#") && !_i2.startsWith(".")) return null;
      _i2.includes("#") && !_i2.startsWith("#") && (_i2 = "#".concat(_i2.split("#")[1])), e = _i2 && "#" !== _i2 ? _i2.trim() : null;
    }

    return e;
  },
      o = function o(t) {
    var e = n(t);
    return e && document.querySelector(e) ? e : null;
  },
      r = function r(t) {
    var e = n(t);
    return e ? document.querySelector(e) : null;
  },
      a = function a(t) {
    t.dispatchEvent(new Event(s));
  },
      l = function l(t) {
    return !(!t || "object" != _typeof(t)) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType);
  },
      c = function c(t) {
    return l(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null;
  },
      h = function h(t) {
    if (!l(t) || 0 === t.getClientRects().length) return !1;
    var e = "visible" === getComputedStyle(t).getPropertyValue("visibility"),
        i = t.closest("details:not([open])");
    if (!i) return e;

    if (i !== t) {
      var _e2 = t.closest("summary");

      if (_e2 && _e2.parentNode !== i) return !1;
      if (null === _e2) return !1;
    }

    return e;
  },
      d = function d(t) {
    return !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"));
  },
      u = function u(t) {
    if (!document.documentElement.attachShadow) return null;

    if ("function" == typeof t.getRootNode) {
      var _e3 = t.getRootNode();

      return _e3 instanceof ShadowRoot ? _e3 : null;
    }

    return t instanceof ShadowRoot ? t : t.parentNode ? u(t.parentNode) : null;
  },
      _ = function _() {},
      g = function g(t) {
    t.offsetHeight;
  },
      f = function f() {
    return window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null;
  },
      p = [],
      m = function m() {
    return "rtl" === document.documentElement.dir;
  },
      b = function b(t) {
    var e;
    e = function e() {
      var e = f();

      if (e) {
        var _i3 = t.NAME,
            _s2 = e.fn[_i3];
        e.fn[_i3] = t.jQueryInterface, e.fn[_i3].Constructor = t, e.fn[_i3].noConflict = function () {
          return e.fn[_i3] = _s2, t.jQueryInterface;
        };
      }
    }, "loading" === document.readyState ? (p.length || document.addEventListener("DOMContentLoaded", function () {
      var _iterator = _createForOfIteratorHelper(p),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _t2 = _step.value;

          _t2();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }), p.push(e)) : e();
  },
      v = function v(t) {
    "function" == typeof t && t();
  },
      y = function y(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    if (!i) return void v(t);

    var n = function (t) {
      if (!t) return 0;

      var _window$getComputedSt = window.getComputedStyle(t),
          e = _window$getComputedSt.transitionDuration,
          i = _window$getComputedSt.transitionDelay;

      var s = Number.parseFloat(e),
          n = Number.parseFloat(i);
      return s || n ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
    }(e) + 5;

    var o = !1;

    var r = function r(_ref) {
      var i = _ref.target;
      i === e && (o = !0, e.removeEventListener(s, r), v(t));
    };

    e.addEventListener(s, r), setTimeout(function () {
      o || a(e);
    }, n);
  },
      w = function w(t, e, i, s) {
    var n = t.length;
    var o = t.indexOf(e);
    return -1 === o ? !i && s ? t[n - 1] : t[0] : (o += i ? 1 : -1, s && (o = (o + n) % n), t[Math.max(0, Math.min(o, n - 1))]);
  },
      A = /[^.]*(?=\..*)\.|.*/,
      T = /\..*/,
      E = /::\d+$/,
      C = {};

  var k = 1;
  var L = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  },
      O = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function I(t, e) {
    return e && "".concat(e, "::").concat(k++) || t.uidEvent || k++;
  }

  function S(t) {
    var e = I(t);
    return t.uidEvent = e, C[e] = C[e] || {}, C[e];
  }

  function D(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    return Object.values(t).find(function (t) {
      return t.callable === e && t.delegationSelector === i;
    });
  }

  function N(t, e, i) {
    var s = "string" == typeof e,
        n = s ? i : e || i;
    var o = j(t);
    return O.has(o) || (o = t), [s, n, o];
  }

  function P(t, e, i, s, n) {
    if ("string" != typeof e || !t) return;

    var _N = N(e, i, s),
        _N2 = _slicedToArray(_N, 3),
        o = _N2[0],
        r = _N2[1],
        a = _N2[2];

    if (e in L) {
      var _t3 = function _t3(t) {
        return function (e) {
          if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
        };
      };

      r = _t3(r);
    }

    var l = S(t),
        c = l[a] || (l[a] = {}),
        h = D(c, r, o ? i : null);
    if (h) return void (h.oneOff = h.oneOff && n);
    var d = I(r, e.replace(A, "")),
        u = o ? function (t, e, i) {
      return function s(n) {
        var o = t.querySelectorAll(e);

        for (var _r = n.target; _r && _r !== this; _r = _r.parentNode) {
          var _iterator2 = _createForOfIteratorHelper(o),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _a = _step2.value;
              if (_a === _r) return F(n, {
                delegateTarget: _r
              }), s.oneOff && $.off(t, n.type, e, i), i.apply(_r, [n]);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      };
    }(t, i, r) : function (t, e) {
      return function i(s) {
        return F(s, {
          delegateTarget: t
        }), i.oneOff && $.off(t, s.type, e), e.apply(t, [s]);
      };
    }(t, r);
    u.delegationSelector = o ? i : null, u.callable = r, u.oneOff = n, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o);
  }

  function x(t, e, i, s, n) {
    var o = D(e[i], s, n);
    o && (t.removeEventListener(i, o, Boolean(n)), delete e[i][o.uidEvent]);
  }

  function M(t, e, i, s) {
    var n = e[i] || {};

    for (var _i4 = 0, _Object$keys = Object.keys(n); _i4 < _Object$keys.length; _i4++) {
      var _o = _Object$keys[_i4];

      if (_o.includes(s)) {
        var _s3 = n[_o];
        x(t, e, i, _s3.callable, _s3.delegationSelector);
      }
    }
  }

  function j(t) {
    return t = t.replace(T, ""), L[t] || t;
  }

  var $ = {
    on: function on(t, e, i, s) {
      P(t, e, i, s, !1);
    },
    one: function one(t, e, i, s) {
      P(t, e, i, s, !0);
    },
    off: function off(t, e, i, s) {
      if ("string" != typeof e || !t) return;

      var _N3 = N(e, i, s),
          _N4 = _slicedToArray(_N3, 3),
          n = _N4[0],
          o = _N4[1],
          r = _N4[2],
          a = r !== e,
          l = S(t),
          c = l[r] || {},
          h = e.startsWith(".");

      if (void 0 === o) {
        if (h) for (var _i5 = 0, _Object$keys2 = Object.keys(l); _i5 < _Object$keys2.length; _i5++) {
          var _i6 = _Object$keys2[_i5];
          M(t, l, _i6, e.slice(1));
        }

        for (var _i7 = 0, _Object$keys3 = Object.keys(c); _i7 < _Object$keys3.length; _i7++) {
          var _i8 = _Object$keys3[_i7];

          var _s4 = _i8.replace(E, "");

          if (!a || e.includes(_s4)) {
            var _e4 = c[_i8];
            x(t, l, r, _e4.callable, _e4.delegationSelector);
          }
        }
      } else {
        if (!Object.keys(c).length) return;
        x(t, l, r, o, n ? i : null);
      }
    },
    trigger: function trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;
      var s = f();
      var n = null,
          o = !0,
          r = !0,
          a = !1;
      e !== j(e) && s && (n = s.Event(e, i), s(t).trigger(n), o = !n.isPropagationStopped(), r = !n.isImmediatePropagationStopped(), a = n.isDefaultPrevented());
      var l = new Event(e, {
        bubbles: o,
        cancelable: !0
      });
      return l = F(l, i), a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && n && n.preventDefault(), l;
    }
  };

  function F(t, e) {
    var _loop2 = function _loop2() {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i9], 2),
          i = _Object$entries$_i[0],
          s = _Object$entries$_i[1];

      try {
        t[i] = s;
      } catch (e) {
        Object.defineProperty(t, i, {
          configurable: !0,
          get: function get() {
            return s;
          }
        });
      }
    };

    for (var _i9 = 0, _Object$entries = Object.entries(e || {}); _i9 < _Object$entries.length; _i9++) {
      _loop2();
    }

    return t;
  }

  var z = new Map(),
      H = {
    set: function set(t, e, i) {
      z.has(t) || z.set(t, new Map());
      var s = z.get(t);
      s.has(e) || 0 === s.size ? s.set(e, i) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(s.keys())[0], "."));
    },
    get: function get(t, e) {
      return z.has(t) && z.get(t).get(e) || null;
    },
    remove: function remove(t, e) {
      if (!z.has(t)) return;
      var i = z.get(t);
      i["delete"](e), 0 === i.size && z["delete"](t);
    }
  };

  function q(t) {
    if ("true" === t) return !0;
    if ("false" === t) return !1;
    if (t === Number(t).toString()) return Number(t);
    if ("" === t || "null" === t) return null;
    if ("string" != typeof t) return t;

    try {
      return JSON.parse(decodeURIComponent(t));
    } catch (e) {
      return t;
    }
  }

  function B(t) {
    return t.replace(/[A-Z]/g, function (t) {
      return "-".concat(t.toLowerCase());
    });
  }

  var W = {
    setDataAttribute: function setDataAttribute(t, e, i) {
      t.setAttribute("data-bs-".concat(B(e)), i);
    },
    removeDataAttribute: function removeDataAttribute(t, e) {
      t.removeAttribute("data-bs-".concat(B(e)));
    },
    getDataAttributes: function getDataAttributes(t) {
      if (!t) return {};
      var e = {},
          i = Object.keys(t.dataset).filter(function (t) {
        return t.startsWith("bs") && !t.startsWith("bsConfig");
      });

      var _iterator3 = _createForOfIteratorHelper(i),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _s5 = _step3.value;

          var _i10 = _s5.replace(/^bs/, "");

          _i10 = _i10.charAt(0).toLowerCase() + _i10.slice(1, _i10.length), e[_i10] = q(t.dataset[_s5]);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return e;
    },
    getDataAttribute: function getDataAttribute(t, e) {
      return q(t.getAttribute("data-bs-".concat(B(e))));
    }
  };

  var R = /*#__PURE__*/function () {
    function R() {
      _classCallCheck(this, R);
    }

    _createClass(R, [{
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t;
      }
    }, {
      key: "_mergeConfigObj",
      value: function _mergeConfigObj(t, e) {
        var i = l(e) ? W.getDataAttribute(e, "config") : {};
        return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), "object" == _typeof(i) ? i : {}), l(e) ? W.getDataAttributes(e) : {}), "object" == _typeof(t) ? t : {});
      }
    }, {
      key: "_typeCheckConfig",
      value: function _typeCheckConfig(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.constructor.DefaultType;

        for (var _i11 = 0, _Object$keys4 = Object.keys(e); _i11 < _Object$keys4.length; _i11++) {
          var _s6 = _Object$keys4[_i11];

          var _n2 = e[_s6],
              _o2 = t[_s6],
              _r2 = l(_o2) ? "element" : null == (i = _o2) ? "".concat(i) : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();

          if (!new RegExp(_n2).test(_r2)) throw new TypeError("".concat(this.constructor.NAME.toUpperCase(), ": Option \"").concat(_s6, "\" provided type \"").concat(_r2, "\" but expected type \"").concat(_n2, "\"."));
        }

        var i;
      }
    }], [{
      key: "Default",
      get: function get() {
        return {};
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return {};
      }
    }, {
      key: "NAME",
      get: function get() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }
    }]);

    return R;
  }();

  var V = /*#__PURE__*/function (_R) {
    _inherits(V, _R);

    var _super = _createSuper(V);

    function V(t, e) {
      var _this;

      _classCallCheck(this, V);

      _this = _super.call(this), (t = c(t)) && (_this._element = t, _this._config = _this._getConfig(e), H.set(_this._element, _this.constructor.DATA_KEY, _assertThisInitialized(_this)));
      return _this;
    }

    _createClass(V, [{
      key: "dispose",
      value: function dispose() {
        H.remove(this._element, this.constructor.DATA_KEY), $.off(this._element, this.constructor.EVENT_KEY);

        var _iterator4 = _createForOfIteratorHelper(Object.getOwnPropertyNames(this)),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _t4 = _step4.value;
            this[_t4] = null;
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    }, {
      key: "_queueCallback",
      value: function _queueCallback(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        y(t, e, i);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
      }
    }], [{
      key: "getInstance",
      value: function getInstance(t) {
        return H.get(c(t), this.DATA_KEY);
      }
    }, {
      key: "getOrCreateInstance",
      value: function getOrCreateInstance(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.getInstance(t) || new this(t, "object" == _typeof(e) ? e : null);
      }
    }, {
      key: "VERSION",
      get: function get() {
        return "5.2.0";
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.".concat(this.NAME);
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".".concat(this.DATA_KEY);
      }
    }, {
      key: "eventName",
      value: function eventName(t) {
        return "".concat(t).concat(this.EVENT_KEY);
      }
    }]);

    return V;
  }(R);

  var K = function K(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "hide";
    var i = "click.dismiss".concat(t.EVENT_KEY),
        s = t.NAME;
    $.on(document, i, "[data-bs-dismiss=\"".concat(s, "\"]"), function (i) {
      if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), d(this)) return;
      var n = r(this) || this.closest(".".concat(s));
      t.getOrCreateInstance(n)[e]();
    });
  };

  var Q = /*#__PURE__*/function (_V) {
    _inherits(Q, _V);

    var _super2 = _createSuper(Q);

    function Q() {
      _classCallCheck(this, Q);

      return _super2.apply(this, arguments);
    }

    _createClass(Q, [{
      key: "close",
      value: function close() {
        var _this2 = this;

        if ($.trigger(this._element, "close.bs.alert").defaultPrevented) return;

        this._element.classList.remove("show");

        var t = this._element.classList.contains("fade");

        this._queueCallback(function () {
          return _this2._destroyElement();
        }, this._element, t);
      }
    }, {
      key: "_destroyElement",
      value: function _destroyElement() {
        this._element.remove(), $.trigger(this._element, "closed.bs.alert"), this.dispose();
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "alert";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Q.getOrCreateInstance(this);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);

    return Q;
  }(V);

  K(Q, "close"), b(Q);
  var X = '[data-bs-toggle="button"]';

  var Y = /*#__PURE__*/function (_V2) {
    _inherits(Y, _V2);

    var _super3 = _createSuper(Y);

    function Y() {
      _classCallCheck(this, Y);

      return _super3.apply(this, arguments);
    }

    _createClass(Y, [{
      key: "toggle",
      value: function toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "button";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Y.getOrCreateInstance(this);
          "toggle" === t && e[t]();
        });
      }
    }]);

    return Y;
  }(V);

  $.on(document, "click.bs.button.data-api", X, function (t) {
    t.preventDefault();
    var e = t.target.closest(X);
    Y.getOrCreateInstance(e).toggle();
  }), b(Y);
  var U = {
    find: function find(t) {
      var _ref2;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(Element.prototype.querySelectorAll.call(e, t)));
    },
    findOne: function findOne(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return Element.prototype.querySelector.call(e, t);
    },
    children: function children(t, e) {
      var _ref3;

      return (_ref3 = []).concat.apply(_ref3, _toConsumableArray(t.children)).filter(function (t) {
        return t.matches(e);
      });
    },
    parents: function parents(t, e) {
      var i = [];
      var s = t.parentNode.closest(e);

      for (; s;) {
        i.push(s), s = s.parentNode.closest(e);
      }

      return i;
    },
    prev: function prev(t, e) {
      var i = t.previousElementSibling;

      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.previousElementSibling;
      }

      return [];
    },
    next: function next(t, e) {
      var i = t.nextElementSibling;

      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.nextElementSibling;
      }

      return [];
    },
    focusableChildren: function focusableChildren(t) {
      var e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(function (t) {
        return "".concat(t, ":not([tabindex^=\"-\"])");
      }).join(",");
      return this.find(e, t).filter(function (t) {
        return !d(t) && h(t);
      });
    }
  },
      G = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  },
      J = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)"
  };

  var Z = /*#__PURE__*/function (_R2) {
    _inherits(Z, _R2);

    var _super4 = _createSuper(Z);

    function Z(t, e) {
      var _this3;

      _classCallCheck(this, Z);

      _this3 = _super4.call(this), _this3._element = t, t && Z.isSupported() && (_this3._config = _this3._getConfig(e), _this3._deltaX = 0, _this3._supportPointerEvents = Boolean(window.PointerEvent), _this3._initEvents());
      return _this3;
    }

    _createClass(Z, [{
      key: "dispose",
      value: function dispose() {
        $.off(this._element, ".bs.swipe");
      }
    }, {
      key: "_start",
      value: function _start(t) {
        this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX;
      }
    }, {
      key: "_end",
      value: function _end(t) {
        this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), v(this._config.endCallback);
      }
    }, {
      key: "_move",
      value: function _move(t) {
        this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
      }
    }, {
      key: "_handleSwipe",
      value: function _handleSwipe() {
        var t = Math.abs(this._deltaX);
        if (t <= 40) return;
        var e = t / this._deltaX;
        this._deltaX = 0, e && v(e > 0 ? this._config.rightCallback : this._config.leftCallback);
      }
    }, {
      key: "_initEvents",
      value: function _initEvents() {
        var _this4 = this;

        this._supportPointerEvents ? ($.on(this._element, "pointerdown.bs.swipe", function (t) {
          return _this4._start(t);
        }), $.on(this._element, "pointerup.bs.swipe", function (t) {
          return _this4._end(t);
        }), this._element.classList.add("pointer-event")) : ($.on(this._element, "touchstart.bs.swipe", function (t) {
          return _this4._start(t);
        }), $.on(this._element, "touchmove.bs.swipe", function (t) {
          return _this4._move(t);
        }), $.on(this._element, "touchend.bs.swipe", function (t) {
          return _this4._end(t);
        }));
      }
    }, {
      key: "_eventIsPointerPenTouch",
      value: function _eventIsPointerPenTouch(t) {
        return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType);
      }
    }], [{
      key: "Default",
      get: function get() {
        return G;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return J;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "swipe";
      }
    }, {
      key: "isSupported",
      value: function isSupported() {
        return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
      }
    }]);

    return Z;
  }(R);

  var tt = "next",
      et = "prev",
      it = "left",
      st = "right",
      nt = "slid.bs.carousel",
      ot = "carousel",
      rt = "active",
      at = {
    ArrowLeft: st,
    ArrowRight: it
  },
      lt = {
    interval: 5e3,
    keyboard: !0,
    pause: "hover",
    ride: !1,
    touch: !0,
    wrap: !0
  },
      ct = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean"
  };

  var ht = /*#__PURE__*/function (_V3) {
    _inherits(ht, _V3);

    var _super5 = _createSuper(ht);

    function ht(t, e) {
      var _this5;

      _classCallCheck(this, ht);

      _this5 = _super5.call(this, t, e), _this5._interval = null, _this5._activeElement = null, _this5._isSliding = !1, _this5.touchTimeout = null, _this5._swipeHelper = null, _this5._indicatorsElement = U.findOne(".carousel-indicators", _this5._element), _this5._addEventListeners(), _this5._config.ride === ot && _this5.cycle();
      return _this5;
    }

    _createClass(ht, [{
      key: "next",
      value: function next() {
        this._slide(tt);
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        !document.hidden && h(this._element) && this.next();
      }
    }, {
      key: "prev",
      value: function prev() {
        this._slide(et);
      }
    }, {
      key: "pause",
      value: function pause() {
        this._isSliding && a(this._element), this._clearInterval();
      }
    }, {
      key: "cycle",
      value: function cycle() {
        var _this6 = this;

        this._clearInterval(), this._updateInterval(), this._interval = setInterval(function () {
          return _this6.nextWhenVisible();
        }, this._config.interval);
      }
    }, {
      key: "_maybeEnableCycle",
      value: function _maybeEnableCycle() {
        var _this7 = this;

        this._config.ride && (this._isSliding ? $.one(this._element, nt, function () {
          return _this7.cycle();
        }) : this.cycle());
      }
    }, {
      key: "to",
      value: function to(t) {
        var _this8 = this;

        var e = this._getItems();

        if (t > e.length - 1 || t < 0) return;
        if (this._isSliding) return void $.one(this._element, nt, function () {
          return _this8.to(t);
        });

        var i = this._getItemIndex(this._getActive());

        if (i === t) return;
        var s = t > i ? tt : et;

        this._slide(s, e[t]);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), _get(_getPrototypeOf(ht.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.defaultInterval = t.interval, t;
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this9 = this;

        this._config.keyboard && $.on(this._element, "keydown.bs.carousel", function (t) {
          return _this9._keydown(t);
        }), "hover" === this._config.pause && ($.on(this._element, "mouseenter.bs.carousel", function () {
          return _this9.pause();
        }), $.on(this._element, "mouseleave.bs.carousel", function () {
          return _this9._maybeEnableCycle();
        })), this._config.touch && Z.isSupported() && this._addTouchEventListeners();
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this10 = this;

        var _iterator5 = _createForOfIteratorHelper(U.find(".carousel-item img", this._element)),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _t5 = _step5.value;
            $.on(_t5, "dragstart.bs.carousel", function (t) {
              return t.preventDefault();
            });
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }

        var t = {
          leftCallback: function leftCallback() {
            return _this10._slide(_this10._directionToOrder(it));
          },
          rightCallback: function rightCallback() {
            return _this10._slide(_this10._directionToOrder(st));
          },
          endCallback: function endCallback() {
            "hover" === _this10._config.pause && (_this10.pause(), _this10.touchTimeout && clearTimeout(_this10.touchTimeout), _this10.touchTimeout = setTimeout(function () {
              return _this10._maybeEnableCycle();
            }, 500 + _this10._config.interval));
          }
        };
        this._swipeHelper = new Z(this._element, t);
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        if (/input|textarea/i.test(t.target.tagName)) return;
        var e = at[t.key];
        e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
      }
    }, {
      key: "_getItemIndex",
      value: function _getItemIndex(t) {
        return this._getItems().indexOf(t);
      }
    }, {
      key: "_setActiveIndicatorElement",
      value: function _setActiveIndicatorElement(t) {
        if (!this._indicatorsElement) return;
        var e = U.findOne(".active", this._indicatorsElement);
        e.classList.remove(rt), e.removeAttribute("aria-current");
        var i = U.findOne("[data-bs-slide-to=\"".concat(t, "\"]"), this._indicatorsElement);
        i && (i.classList.add(rt), i.setAttribute("aria-current", "true"));
      }
    }, {
      key: "_updateInterval",
      value: function _updateInterval() {
        var t = this._activeElement || this._getActive();

        if (!t) return;
        var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
        this._config.interval = e || this._config.defaultInterval;
      }
    }, {
      key: "_slide",
      value: function _slide(t) {
        var _this11 = this;

        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        if (this._isSliding) return;

        var i = this._getActive(),
            s = t === tt,
            n = e || w(this._getItems(), i, s, this._config.wrap);

        if (n === i) return;

        var o = this._getItemIndex(n),
            r = function r(e) {
          return $.trigger(_this11._element, e, {
            relatedTarget: n,
            direction: _this11._orderToDirection(t),
            from: _this11._getItemIndex(i),
            to: o
          });
        };

        if (r("slide.bs.carousel").defaultPrevented) return;
        if (!i || !n) return;
        var a = Boolean(this._interval);
        this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = n;
        var l = s ? "carousel-item-start" : "carousel-item-end",
            c = s ? "carousel-item-next" : "carousel-item-prev";
        n.classList.add(c), g(n), i.classList.add(l), n.classList.add(l), this._queueCallback(function () {
          n.classList.remove(l, c), n.classList.add(rt), i.classList.remove(rt, c, l), _this11._isSliding = !1, r(nt);
        }, i, this._isAnimated()), a && this.cycle();
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains("slide");
      }
    }, {
      key: "_getActive",
      value: function _getActive() {
        return U.findOne(".active.carousel-item", this._element);
      }
    }, {
      key: "_getItems",
      value: function _getItems() {
        return U.find(".carousel-item", this._element);
      }
    }, {
      key: "_clearInterval",
      value: function _clearInterval() {
        this._interval && (clearInterval(this._interval), this._interval = null);
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(t) {
        return m() ? t === it ? et : tt : t === it ? tt : et;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(t) {
        return m() ? t === et ? it : st : t === et ? st : it;
      }
    }], [{
      key: "Default",
      get: function get() {
        return lt;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ct;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "carousel";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = ht.getOrCreateInstance(this, t);

          if ("number" != typeof t) {
            if ("string" == typeof t) {
              if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
              e[t]();
            }
          } else e.to(t);
        });
      }
    }]);

    return ht;
  }(V);

  $.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", function (t) {
    var e = r(this);
    if (!e || !e.classList.contains(ot)) return;
    t.preventDefault();
    var i = ht.getOrCreateInstance(e),
        s = this.getAttribute("data-bs-slide-to");
    return s ? (i.to(s), void i._maybeEnableCycle()) : "next" === W.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle());
  }), $.on(window, "load.bs.carousel.data-api", function () {
    var t = U.find('[data-bs-ride="carousel"]');

    var _iterator6 = _createForOfIteratorHelper(t),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var _e5 = _step6.value;
        ht.getOrCreateInstance(_e5);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  }), b(ht);
  var dt = "show",
      ut = "collapse",
      _t = "collapsing",
      gt = '[data-bs-toggle="collapse"]',
      ft = {
    parent: null,
    toggle: !0
  },
      pt = {
    parent: "(null|element)",
    toggle: "boolean"
  };

  var mt = /*#__PURE__*/function (_V4) {
    _inherits(mt, _V4);

    var _super6 = _createSuper(mt);

    function mt(t, e) {
      var _this12;

      _classCallCheck(this, mt);

      _this12 = _super6.call(this, t, e), _this12._isTransitioning = !1, _this12._triggerArray = [];
      var i = U.find(gt);

      var _iterator7 = _createForOfIteratorHelper(i),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var _t6 = _step7.value;

          var _e6 = o(_t6),
              _i12 = U.find(_e6).filter(function (t) {
            return t === _this12._element;
          });

          null !== _e6 && _i12.length && _this12._triggerArray.push(_t6);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      _this12._initializeChildren(), _this12._config.parent || _this12._addAriaAndCollapsedClass(_this12._triggerArray, _this12._isShown()), _this12._config.toggle && _this12.toggle();
      return _this12;
    }

    _createClass(mt, [{
      key: "toggle",
      value: function toggle() {
        this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        var _this13 = this;

        if (this._isTransitioning || this._isShown()) return;
        var t = [];
        if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(function (t) {
          return t !== _this13._element;
        }).map(function (t) {
          return mt.getOrCreateInstance(t, {
            toggle: !1
          });
        })), t.length && t[0]._isTransitioning) return;
        if ($.trigger(this._element, "show.bs.collapse").defaultPrevented) return;

        var _iterator8 = _createForOfIteratorHelper(t),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _e7 = _step8.value;

            _e7.hide();
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }

        var e = this._getDimension();

        this._element.classList.remove(ut), this._element.classList.add(_t), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
        var i = "scroll".concat(e[0].toUpperCase() + e.slice(1));
        this._queueCallback(function () {
          _this13._isTransitioning = !1, _this13._element.classList.remove(_t), _this13._element.classList.add(ut, dt), _this13._element.style[e] = "", $.trigger(_this13._element, "shown.bs.collapse");
        }, this._element, !0), this._element.style[e] = "".concat(this._element[i], "px");
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this14 = this;

        if (this._isTransitioning || !this._isShown()) return;
        if ($.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;

        var t = this._getDimension();

        this._element.style[t] = "".concat(this._element.getBoundingClientRect()[t], "px"), g(this._element), this._element.classList.add(_t), this._element.classList.remove(ut, dt);

        var _iterator9 = _createForOfIteratorHelper(this._triggerArray),
            _step9;

        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var _t7 = _step9.value;

            var _e8 = r(_t7);

            _e8 && !this._isShown(_e8) && this._addAriaAndCollapsedClass([_t7], !1);
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }

        this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback(function () {
          _this14._isTransitioning = !1, _this14._element.classList.remove(_t), _this14._element.classList.add(ut), $.trigger(_this14._element, "hidden.bs.collapse");
        }, this._element, !0);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
        return t.classList.contains(dt);
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.toggle = Boolean(t.toggle), t.parent = c(t.parent), t;
      }
    }, {
      key: "_getDimension",
      value: function _getDimension() {
        return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
      }
    }, {
      key: "_initializeChildren",
      value: function _initializeChildren() {
        if (!this._config.parent) return;

        var t = this._getFirstLevelChildren(gt);

        var _iterator10 = _createForOfIteratorHelper(t),
            _step10;

        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var _e9 = _step10.value;

            var _t8 = r(_e9);

            _t8 && this._addAriaAndCollapsedClass([_e9], this._isShown(_t8));
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
      }
    }, {
      key: "_getFirstLevelChildren",
      value: function _getFirstLevelChildren(t) {
        var e = U.find(":scope .collapse .collapse", this._config.parent);
        return U.find(t, this._config.parent).filter(function (t) {
          return !e.includes(t);
        });
      }
    }, {
      key: "_addAriaAndCollapsedClass",
      value: function _addAriaAndCollapsedClass(t, e) {
        if (t.length) {
          var _iterator11 = _createForOfIteratorHelper(t),
              _step11;

          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              var _i13 = _step11.value;
              _i13.classList.toggle("collapsed", !e), _i13.setAttribute("aria-expanded", e);
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }
        }
      }
    }], [{
      key: "Default",
      get: function get() {
        return ft;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return pt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "collapse";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        var e = {};
        return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each(function () {
          var i = mt.getOrCreateInstance(this, e);

          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t]();
          }
        });
      }
    }]);

    return mt;
  }(V);

  $.on(document, "click.bs.collapse.data-api", gt, function (t) {
    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
    var e = o(this),
        i = U.find(e);

    var _iterator12 = _createForOfIteratorHelper(i),
        _step12;

    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
        var _t9 = _step12.value;
        mt.getOrCreateInstance(_t9, {
          toggle: !1
        }).toggle();
      }
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }
  }), b(mt);
  var bt = "dropdown",
      vt = "ArrowUp",
      yt = "ArrowDown",
      wt = "click.bs.dropdown.data-api",
      At = "keydown.bs.dropdown.data-api",
      Tt = "show",
      Et = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
      Ct = "".concat(Et, ".show"),
      kt = ".dropdown-menu",
      Lt = m() ? "top-end" : "top-start",
      Ot = m() ? "top-start" : "top-end",
      It = m() ? "bottom-end" : "bottom-start",
      St = m() ? "bottom-start" : "bottom-end",
      Dt = m() ? "left-start" : "right-start",
      Nt = m() ? "right-start" : "left-start",
      Pt = {
    autoClose: !0,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle"
  },
      xt = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)"
  };

  var Mt = /*#__PURE__*/function (_V5) {
    _inherits(Mt, _V5);

    var _super7 = _createSuper(Mt);

    function Mt(t, e) {
      var _this15;

      _classCallCheck(this, Mt);

      _this15 = _super7.call(this, t, e), _this15._popper = null, _this15._parent = _this15._element.parentNode, _this15._menu = U.findOne(kt, _this15._parent), _this15._inNavbar = _this15._detectNavbar();
      return _this15;
    }

    _createClass(Mt, [{
      key: "toggle",
      value: function toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        if (d(this._element) || this._isShown()) return;
        var t = {
          relatedTarget: this._element
        };

        if (!$.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) {
          if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) {
            var _ref4;

            var _iterator13 = _createForOfIteratorHelper((_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children))),
                _step13;

            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var _t10 = _step13.value;
                $.on(_t10, "mouseover", _);
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }
          }

          this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Tt), this._element.classList.add(Tt), $.trigger(this._element, "shown.bs.dropdown", t);
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        if (d(this._element) || !this._isShown()) return;
        var t = {
          relatedTarget: this._element
        };

        this._completeHide(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._popper && this._popper.destroy(), _get(_getPrototypeOf(Mt.prototype), "dispose", this).call(this);
      }
    }, {
      key: "update",
      value: function update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
      }
    }, {
      key: "_completeHide",
      value: function _completeHide(t) {
        if (!$.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented) {
          if ("ontouchstart" in document.documentElement) {
            var _ref5;

            var _iterator14 = _createForOfIteratorHelper((_ref5 = []).concat.apply(_ref5, _toConsumableArray(document.body.children))),
                _step14;

            try {
              for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                var _t11 = _step14.value;
                $.off(_t11, "mouseover", _);
              }
            } catch (err) {
              _iterator14.e(err);
            } finally {
              _iterator14.f();
            }
          }

          this._popper && this._popper.destroy(), this._menu.classList.remove(Tt), this._element.classList.remove(Tt), this._element.setAttribute("aria-expanded", "false"), W.removeDataAttribute(this._menu, "popper"), $.trigger(this._element, "hidden.bs.dropdown", t);
        }
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if ("object" == _typeof((t = _get(_getPrototypeOf(Mt.prototype), "_getConfig", this).call(this, t)).reference) && !l(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("".concat(bt.toUpperCase(), ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method."));
        return t;
      }
    }, {
      key: "_createPopper",
      value: function _createPopper() {
        if (void 0 === i) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        var t = this._element;
        "parent" === this._config.reference ? t = this._parent : l(this._config.reference) ? t = c(this._config.reference) : "object" == _typeof(this._config.reference) && (t = this._config.reference);

        var e = this._getPopperConfig();

        this._popper = i.createPopper(t, this._menu, e);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        return this._menu.classList.contains(Tt);
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var t = this._parent;
        if (t.classList.contains("dropend")) return Dt;
        if (t.classList.contains("dropstart")) return Nt;
        if (t.classList.contains("dropup-center")) return "top";
        if (t.classList.contains("dropdown-center")) return "bottom";
        var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return t.classList.contains("dropup") ? e ? Ot : Lt : e ? St : It;
      }
    }, {
      key: "_detectNavbar",
      value: function _detectNavbar() {
        return null !== this._element.closest(".navbar");
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this16 = this;

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this16._element);
        } : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig() {
        var t = {
          placement: this._getPlacement(),
          modifiers: [{
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }]
        };
        return (this._inNavbar || "static" === this._config.display) && (W.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
          name: "applyStyles",
          enabled: !1
        }]), _objectSpread(_objectSpread({}, t), "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig);
      }
    }, {
      key: "_selectMenuItem",
      value: function _selectMenuItem(_ref6) {
        var t = _ref6.key,
            e = _ref6.target;
        var i = U.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(function (t) {
          return h(t);
        });
        i.length && w(i, e, t === yt, !i.includes(e)).focus();
      }
    }], [{
      key: "Default",
      get: function get() {
        return Pt;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return xt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return bt;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Mt.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "clearMenus",
      value: function clearMenus(t) {
        if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
        var e = U.find(Ct);

        var _iterator15 = _createForOfIteratorHelper(e),
            _step15;

        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            var _i14 = _step15.value;

            var _e10 = Mt.getInstance(_i14);

            if (!_e10 || !1 === _e10._config.autoClose) continue;

            var _s7 = t.composedPath(),
                _n3 = _s7.includes(_e10._menu);

            if (_s7.includes(_e10._element) || "inside" === _e10._config.autoClose && !_n3 || "outside" === _e10._config.autoClose && _n3) continue;
            if (_e10._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
            var _o3 = {
              relatedTarget: _e10._element
            };
            "click" === t.type && (_o3.clickEvent = t), _e10._completeHide(_o3);
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }
      }
    }, {
      key: "dataApiKeydownHandler",
      value: function dataApiKeydownHandler(t) {
        var e = /input|textarea/i.test(t.target.tagName),
            i = "Escape" === t.key,
            s = [vt, yt].includes(t.key);
        if (!s && !i) return;
        if (e && !i) return;
        t.preventDefault();
        var n = U.findOne(Et, t.delegateTarget.parentNode),
            o = Mt.getOrCreateInstance(n);
        if (s) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
        o._isShown() && (t.stopPropagation(), o.hide(), n.focus());
      }
    }]);

    return Mt;
  }(V);

  $.on(document, At, Et, Mt.dataApiKeydownHandler), $.on(document, At, kt, Mt.dataApiKeydownHandler), $.on(document, wt, Mt.clearMenus), $.on(document, "keyup.bs.dropdown.data-api", Mt.clearMenus), $.on(document, wt, Et, function (t) {
    t.preventDefault(), Mt.getOrCreateInstance(this).toggle();
  }), b(Mt);
  var jt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      $t = ".sticky-top",
      Ft = "padding-right",
      zt = "margin-right";

  var Ht = /*#__PURE__*/function () {
    function Ht() {
      _classCallCheck(this, Ht);

      this._element = document.body;
    }

    _createClass(Ht, [{
      key: "getWidth",
      value: function getWidth() {
        var t = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - t);
      }
    }, {
      key: "hide",
      value: function hide() {
        var t = this.getWidth();
        this._disableOverFlow(), this._setElementAttributes(this._element, Ft, function (e) {
          return e + t;
        }), this._setElementAttributes(jt, Ft, function (e) {
          return e + t;
        }), this._setElementAttributes($t, zt, function (e) {
          return e - t;
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, Ft), this._resetElementAttributes(jt, Ft), this._resetElementAttributes($t, zt);
      }
    }, {
      key: "isOverflowing",
      value: function isOverflowing() {
        return this.getWidth() > 0;
      }
    }, {
      key: "_disableOverFlow",
      value: function _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
      }
    }, {
      key: "_setElementAttributes",
      value: function _setElementAttributes(t, e, i) {
        var _this17 = this;

        var s = this.getWidth();

        this._applyManipulationCallback(t, function (t) {
          if (t !== _this17._element && window.innerWidth > t.clientWidth + s) return;

          _this17._saveInitialAttribute(t, e);

          var n = window.getComputedStyle(t).getPropertyValue(e);
          t.style.setProperty(e, "".concat(i(Number.parseFloat(n)), "px"));
        });
      }
    }, {
      key: "_saveInitialAttribute",
      value: function _saveInitialAttribute(t, e) {
        var i = t.style.getPropertyValue(e);
        i && W.setDataAttribute(t, e, i);
      }
    }, {
      key: "_resetElementAttributes",
      value: function _resetElementAttributes(t, e) {
        this._applyManipulationCallback(t, function (t) {
          var i = W.getDataAttribute(t, e);
          null !== i ? (W.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e);
        });
      }
    }, {
      key: "_applyManipulationCallback",
      value: function _applyManipulationCallback(t, e) {
        if (l(t)) e(t);else {
          var _iterator16 = _createForOfIteratorHelper(U.find(t, this._element)),
              _step16;

          try {
            for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
              var _i15 = _step16.value;
              e(_i15);
            }
          } catch (err) {
            _iterator16.e(err);
          } finally {
            _iterator16.f();
          }
        }
      }
    }]);

    return Ht;
  }();

  var qt = "show",
      Bt = "mousedown.bs.backdrop",
      Wt = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: !1,
    isVisible: !0,
    rootElement: "body"
  },
      Rt = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)"
  };

  var Vt = /*#__PURE__*/function (_R3) {
    _inherits(Vt, _R3);

    var _super8 = _createSuper(Vt);

    function Vt(t) {
      var _this18;

      _classCallCheck(this, Vt);

      _this18 = _super8.call(this), _this18._config = _this18._getConfig(t), _this18._isAppended = !1, _this18._element = null;
      return _this18;
    }

    _createClass(Vt, [{
      key: "show",
      value: function show(t) {
        if (!this._config.isVisible) return void v(t);

        this._append();

        var e = this._getElement();

        this._config.isAnimated && g(e), e.classList.add(qt), this._emulateAnimation(function () {
          v(t);
        });
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this19 = this;

        this._config.isVisible ? (this._getElement().classList.remove(qt), this._emulateAnimation(function () {
          _this19.dispose(), v(t);
        })) : v(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._isAppended && ($.off(this._element, Bt), this._element.remove(), this._isAppended = !1);
      }
    }, {
      key: "_getElement",
      value: function _getElement() {
        if (!this._element) {
          var _t12 = document.createElement("div");

          _t12.className = this._config.className, this._config.isAnimated && _t12.classList.add("fade"), this._element = _t12;
        }

        return this._element;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.rootElement = c(t.rootElement), t;
      }
    }, {
      key: "_append",
      value: function _append() {
        var _this20 = this;

        if (this._isAppended) return;

        var t = this._getElement();

        this._config.rootElement.append(t), $.on(t, Bt, function () {
          v(_this20._config.clickCallback);
        }), this._isAppended = !0;
      }
    }, {
      key: "_emulateAnimation",
      value: function _emulateAnimation(t) {
        y(t, this._getElement(), this._config.isAnimated);
      }
    }], [{
      key: "Default",
      get: function get() {
        return Wt;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Rt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "backdrop";
      }
    }]);

    return Vt;
  }(R);

  var Kt = ".bs.focustrap",
      Qt = "backward",
      Xt = {
    autofocus: !0,
    trapElement: null
  },
      Yt = {
    autofocus: "boolean",
    trapElement: "element"
  };

  var Ut = /*#__PURE__*/function (_R4) {
    _inherits(Ut, _R4);

    var _super9 = _createSuper(Ut);

    function Ut(t) {
      var _this21;

      _classCallCheck(this, Ut);

      _this21 = _super9.call(this), _this21._config = _this21._getConfig(t), _this21._isActive = !1, _this21._lastTabNavDirection = null;
      return _this21;
    }

    _createClass(Ut, [{
      key: "activate",
      value: function activate() {
        var _this22 = this;

        this._isActive || (this._config.autofocus && this._config.trapElement.focus(), $.off(document, Kt), $.on(document, "focusin.bs.focustrap", function (t) {
          return _this22._handleFocusin(t);
        }), $.on(document, "keydown.tab.bs.focustrap", function (t) {
          return _this22._handleKeydown(t);
        }), this._isActive = !0);
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        this._isActive && (this._isActive = !1, $.off(document, Kt));
      }
    }, {
      key: "_handleFocusin",
      value: function _handleFocusin(t) {
        var e = this._config.trapElement;
        if (t.target === document || t.target === e || e.contains(t.target)) return;
        var i = U.focusableChildren(e);
        0 === i.length ? e.focus() : this._lastTabNavDirection === Qt ? i[i.length - 1].focus() : i[0].focus();
      }
    }, {
      key: "_handleKeydown",
      value: function _handleKeydown(t) {
        "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? Qt : "forward");
      }
    }], [{
      key: "Default",
      get: function get() {
        return Xt;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Yt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "focustrap";
      }
    }]);

    return Ut;
  }(R);

  var Gt = "hidden.bs.modal",
      Jt = "show.bs.modal",
      Zt = "modal-open",
      te = "show",
      ee = "modal-static",
      ie = {
    backdrop: !0,
    focus: !0,
    keyboard: !0
  },
      se = {
    backdrop: "(boolean|string)",
    focus: "boolean",
    keyboard: "boolean"
  };

  var ne = /*#__PURE__*/function (_V6) {
    _inherits(ne, _V6);

    var _super10 = _createSuper(ne);

    function ne(t, e) {
      var _this23;

      _classCallCheck(this, ne);

      _this23 = _super10.call(this, t, e), _this23._dialog = U.findOne(".modal-dialog", _this23._element), _this23._backdrop = _this23._initializeBackDrop(), _this23._focustrap = _this23._initializeFocusTrap(), _this23._isShown = !1, _this23._isTransitioning = !1, _this23._scrollBar = new Ht(), _this23._addEventListeners();
      return _this23;
    }

    _createClass(ne, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this24 = this;

        this._isShown || this._isTransitioning || $.trigger(this._element, Jt, {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Zt), this._adjustDialog(), this._backdrop.show(function () {
          return _this24._showElement(t);
        }));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this25 = this;

        this._isShown && !this._isTransitioning && ($.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(te), this._queueCallback(function () {
          return _this25._hideModal();
        }, this._element, this._isAnimated())));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        for (var _i16 = 0, _arr2 = [window, this._dialog]; _i16 < _arr2.length; _i16++) {
          var _t13 = _arr2[_i16];
          $.off(_t13, ".bs.modal");
        }

        this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(ne.prototype), "dispose", this).call(this);
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this._adjustDialog();
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        return new Vt({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated()
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new Ut({
          trapElement: this._element
        });
      }
    }, {
      key: "_showElement",
      value: function _showElement(t) {
        var _this26 = this;

        document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
        var e = U.findOne(".modal-body", this._dialog);
        e && (e.scrollTop = 0), g(this._element), this._element.classList.add(te), this._queueCallback(function () {
          _this26._config.focus && _this26._focustrap.activate(), _this26._isTransitioning = !1, $.trigger(_this26._element, "shown.bs.modal", {
            relatedTarget: t
          });
        }, this._dialog, this._isAnimated());
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this27 = this;

        $.on(this._element, "keydown.dismiss.bs.modal", function (t) {
          if ("Escape" === t.key) return _this27._config.keyboard ? (t.preventDefault(), void _this27.hide()) : void _this27._triggerBackdropTransition();
        }), $.on(window, "resize.bs.modal", function () {
          _this27._isShown && !_this27._isTransitioning && _this27._adjustDialog();
        }), $.on(this._element, "mousedown.dismiss.bs.modal", function (t) {
          t.target === t.currentTarget && ("static" !== _this27._config.backdrop ? _this27._config.backdrop && _this27.hide() : _this27._triggerBackdropTransition());
        });
      }
    }, {
      key: "_hideModal",
      value: function _hideModal() {
        var _this28 = this;

        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(function () {
          document.body.classList.remove(Zt), _this28._resetAdjustments(), _this28._scrollBar.reset(), $.trigger(_this28._element, Gt);
        });
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains("fade");
      }
    }, {
      key: "_triggerBackdropTransition",
      value: function _triggerBackdropTransition() {
        var _this29 = this;

        if ($.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
        var t = this._element.scrollHeight > document.documentElement.clientHeight,
            e = this._element.style.overflowY;
        "hidden" === e || this._element.classList.contains(ee) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(ee), this._queueCallback(function () {
          _this29._element.classList.remove(ee), _this29._queueCallback(function () {
            _this29._element.style.overflowY = e;
          }, _this29._dialog);
        }, this._dialog), this._element.focus());
      }
    }, {
      key: "_adjustDialog",
      value: function _adjustDialog() {
        var t = this._element.scrollHeight > document.documentElement.clientHeight,
            e = this._scrollBar.getWidth(),
            i = e > 0;

        if (i && !t) {
          var _t14 = m() ? "paddingLeft" : "paddingRight";

          this._element.style[_t14] = "".concat(e, "px");
        }

        if (!i && t) {
          var _t15 = m() ? "paddingRight" : "paddingLeft";

          this._element.style[_t15] = "".concat(e, "px");
        }
      }
    }, {
      key: "_resetAdjustments",
      value: function _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
    }], [{
      key: "Default",
      get: function get() {
        return ie;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return se;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "modal";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t, e) {
        return this.each(function () {
          var i = ne.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t](e);
          }
        });
      }
    }]);

    return ne;
  }(V);

  $.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
    var _this30 = this;

    var e = r(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), $.one(e, Jt, function (t) {
      t.defaultPrevented || $.one(e, Gt, function () {
        h(_this30) && _this30.focus();
      });
    });
    var i = U.findOne(".modal.show");
    i && ne.getInstance(i).hide(), ne.getOrCreateInstance(e).toggle(this);
  }), K(ne), b(ne);
  var oe = "show",
      re = "showing",
      ae = "hiding",
      le = ".offcanvas.show",
      ce = "hidePrevented.bs.offcanvas",
      he = "hidden.bs.offcanvas",
      de = {
    backdrop: !0,
    keyboard: !0,
    scroll: !1
  },
      ue = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    scroll: "boolean"
  };

  var _e = /*#__PURE__*/function (_V7) {
    _inherits(_e, _V7);

    var _super11 = _createSuper(_e);

    function _e(t, e) {
      var _this31;

      _classCallCheck(this, _e);

      _this31 = _super11.call(this, t, e), _this31._isShown = !1, _this31._backdrop = _this31._initializeBackDrop(), _this31._focustrap = _this31._initializeFocusTrap(), _this31._addEventListeners();
      return _this31;
    }

    _createClass(_e, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this32 = this;

        this._isShown || $.trigger(this._element, "show.bs.offcanvas", {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || new Ht().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(re), this._queueCallback(function () {
          _this32._config.scroll && !_this32._config.backdrop || _this32._focustrap.activate(), _this32._element.classList.add(oe), _this32._element.classList.remove(re), $.trigger(_this32._element, "shown.bs.offcanvas", {
            relatedTarget: t
          });
        }, this._element, !0));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this33 = this;

        this._isShown && ($.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(ae), this._backdrop.hide(), this._queueCallback(function () {
          _this33._element.classList.remove(oe, ae), _this33._element.removeAttribute("aria-modal"), _this33._element.removeAttribute("role"), _this33._config.scroll || new Ht().reset(), $.trigger(_this33._element, he);
        }, this._element, !0)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(_e.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        var _this34 = this;

        var t = Boolean(this._config.backdrop);
        return new Vt({
          className: "offcanvas-backdrop",
          isVisible: t,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: t ? function () {
            "static" !== _this34._config.backdrop ? _this34.hide() : $.trigger(_this34._element, ce);
          } : null
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new Ut({
          trapElement: this._element
        });
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this35 = this;

        $.on(this._element, "keydown.dismiss.bs.offcanvas", function (t) {
          "Escape" === t.key && (_this35._config.keyboard ? _this35.hide() : $.trigger(_this35._element, ce));
        });
      }
    }], [{
      key: "Default",
      get: function get() {
        return de;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ue;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "offcanvas";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = _e.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);

    return _e;
  }(V);

  $.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (t) {
    var _this36 = this;

    var e = r(this);
    if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), d(this)) return;
    $.one(e, he, function () {
      h(_this36) && _this36.focus();
    });
    var i = U.findOne(le);
    i && i !== e && _e.getInstance(i).hide(), _e.getOrCreateInstance(e).toggle(this);
  }), $.on(window, "load.bs.offcanvas.data-api", function () {
    var _iterator17 = _createForOfIteratorHelper(U.find(le)),
        _step17;

    try {
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
        var _t16 = _step17.value;

        _e.getOrCreateInstance(_t16).show();
      }
    } catch (err) {
      _iterator17.e(err);
    } finally {
      _iterator17.f();
    }
  }), $.on(window, "resize.bs.offcanvas", function () {
    var _iterator18 = _createForOfIteratorHelper(U.find("[aria-modal][class*=show][class*=offcanvas-]")),
        _step18;

    try {
      for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
        var _t17 = _step18.value;
        "fixed" !== getComputedStyle(_t17).position && _e.getOrCreateInstance(_t17).hide();
      }
    } catch (err) {
      _iterator18.e(err);
    } finally {
      _iterator18.f();
    }
  }), K(_e), b(_e);

  var ge = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
      fe = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
      pe = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
      me = function me(t, e) {
    var i = t.nodeName.toLowerCase();
    return e.includes(i) ? !ge.has(i) || Boolean(fe.test(t.nodeValue) || pe.test(t.nodeValue)) : e.filter(function (t) {
      return t instanceof RegExp;
    }).some(function (t) {
      return t.test(i);
    });
  },
      be = {
    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  },
      ve = {
    allowList: be,
    content: {},
    extraClass: "",
    html: !1,
    sanitize: !0,
    sanitizeFn: null,
    template: "<div></div>"
  },
      ye = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string"
  },
      we = {
    entry: "(string|element|function|null)",
    selector: "(string|element)"
  };

  var Ae = /*#__PURE__*/function (_R5) {
    _inherits(Ae, _R5);

    var _super12 = _createSuper(Ae);

    function Ae(t) {
      var _this37;

      _classCallCheck(this, Ae);

      _this37 = _super12.call(this), _this37._config = _this37._getConfig(t);
      return _this37;
    }

    _createClass(Ae, [{
      key: "getContent",
      value: function getContent() {
        var _this38 = this;

        return Object.values(this._config.content).map(function (t) {
          return _this38._resolvePossibleFunction(t);
        }).filter(Boolean);
      }
    }, {
      key: "hasContent",
      value: function hasContent() {
        return this.getContent().length > 0;
      }
    }, {
      key: "changeContent",
      value: function changeContent(t) {
        return this._checkContent(t), this._config.content = _objectSpread(_objectSpread({}, this._config.content), t), this;
      }
    }, {
      key: "toHtml",
      value: function toHtml() {
        var _e$classList;

        var t = document.createElement("div");
        t.innerHTML = this._maybeSanitize(this._config.template);

        for (var _i17 = 0, _Object$entries2 = Object.entries(this._config.content); _i17 < _Object$entries2.length; _i17++) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i17], 2),
              _e11 = _Object$entries2$_i[0],
              _i18 = _Object$entries2$_i[1];

          this._setContent(t, _i18, _e11);
        }

        var e = t.children[0],
            i = this._resolvePossibleFunction(this._config.extraClass);

        return i && (_e$classList = e.classList).add.apply(_e$classList, _toConsumableArray(i.split(" "))), e;
      }
    }, {
      key: "_typeCheckConfig",
      value: function _typeCheckConfig(t) {
        _get(_getPrototypeOf(Ae.prototype), "_typeCheckConfig", this).call(this, t), this._checkContent(t.content);
      }
    }, {
      key: "_checkContent",
      value: function _checkContent(t) {
        for (var _i19 = 0, _Object$entries3 = Object.entries(t); _i19 < _Object$entries3.length; _i19++) {
          var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i19], 2),
              _e12 = _Object$entries3$_i[0],
              _i20 = _Object$entries3$_i[1];

          _get(_getPrototypeOf(Ae.prototype), "_typeCheckConfig", this).call(this, {
            selector: _e12,
            entry: _i20
          }, we);
        }
      }
    }, {
      key: "_setContent",
      value: function _setContent(t, e, i) {
        var s = U.findOne(i, t);
        s && ((e = this._resolvePossibleFunction(e)) ? l(e) ? this._putElementInTemplate(c(e), s) : this._config.html ? s.innerHTML = this._maybeSanitize(e) : s.textContent = e : s.remove());
      }
    }, {
      key: "_maybeSanitize",
      value: function _maybeSanitize(t) {
        return this._config.sanitize ? function (t, e, i) {
          var _ref7;

          if (!t.length) return t;
          if (i && "function" == typeof i) return i(t);

          var s = new window.DOMParser().parseFromString(t, "text/html"),
              n = (_ref7 = []).concat.apply(_ref7, _toConsumableArray(s.body.querySelectorAll("*")));

          var _iterator19 = _createForOfIteratorHelper(n),
              _step19;

          try {
            for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
              var _ref8;

              var _t18 = _step19.value;

              var _i21 = _t18.nodeName.toLowerCase();

              if (!Object.keys(e).includes(_i21)) {
                _t18.remove();

                continue;
              }

              var _s8 = (_ref8 = []).concat.apply(_ref8, _toConsumableArray(_t18.attributes)),
                  _n4 = [].concat(e["*"] || [], e[_i21] || []);

              var _iterator20 = _createForOfIteratorHelper(_s8),
                  _step20;

              try {
                for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                  var _e13 = _step20.value;
                  me(_e13, _n4) || _t18.removeAttribute(_e13.nodeName);
                }
              } catch (err) {
                _iterator20.e(err);
              } finally {
                _iterator20.f();
              }
            }
          } catch (err) {
            _iterator19.e(err);
          } finally {
            _iterator19.f();
          }

          return s.body.innerHTML;
        }(t, this._config.allowList, this._config.sanitizeFn) : t;
      }
    }, {
      key: "_resolvePossibleFunction",
      value: function _resolvePossibleFunction(t) {
        return "function" == typeof t ? t(this) : t;
      }
    }, {
      key: "_putElementInTemplate",
      value: function _putElementInTemplate(t, e) {
        if (this._config.html) return e.innerHTML = "", void e.append(t);
        e.textContent = t.textContent;
      }
    }], [{
      key: "Default",
      get: function get() {
        return ve;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ye;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "TemplateFactory";
      }
    }]);

    return Ae;
  }(R);

  var Te = new Set(["sanitize", "allowList", "sanitizeFn"]),
      Ee = "fade",
      Ce = "show",
      ke = ".modal",
      Le = "hide.bs.modal",
      Oe = "hover",
      Ie = "focus",
      Se = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: m() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: m() ? "right" : "left"
  },
      De = {
    allowList: be,
    animation: !0,
    boundary: "clippingParents",
    container: !1,
    customClass: "",
    delay: 0,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    html: !1,
    offset: [0, 0],
    placement: "top",
    popperConfig: null,
    sanitize: !0,
    sanitizeFn: null,
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "",
    trigger: "hover focus"
  },
      Ne = {
    allowList: "object",
    animation: "boolean",
    boundary: "(string|element)",
    container: "(string|element|boolean)",
    customClass: "(string|function)",
    delay: "(number|object)",
    fallbackPlacements: "array",
    html: "boolean",
    offset: "(array|string|function)",
    placement: "(string|function)",
    popperConfig: "(null|object|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    selector: "(string|boolean)",
    template: "string",
    title: "(string|element|function)",
    trigger: "string"
  };

  var Pe = /*#__PURE__*/function (_V8) {
    _inherits(Pe, _V8);

    var _super13 = _createSuper(Pe);

    function Pe(t, e) {
      var _this39;

      _classCallCheck(this, Pe);

      if (void 0 === i) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      _this39 = _super13.call(this, t, e), _this39._isEnabled = !0, _this39._timeout = 0, _this39._isHovered = !1, _this39._activeTrigger = {}, _this39._popper = null, _this39._templateFactory = null, _this39._newContent = null, _this39.tip = null, _this39._setListeners();
      return _this39;
    }

    _createClass(Pe, [{
      key: "enable",
      value: function enable() {
        this._isEnabled = !0;
      }
    }, {
      key: "disable",
      value: function disable() {
        this._isEnabled = !1;
      }
    }, {
      key: "toggleEnabled",
      value: function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
    }, {
      key: "toggle",
      value: function toggle(t) {
        if (this._isEnabled) {
          if (t) {
            var _e14 = this._initializeOnDelegatedTarget(t);

            return _e14._activeTrigger.click = !_e14._activeTrigger.click, void (_e14._isWithActiveTrigger() ? _e14._enter() : _e14._leave());
          }

          this._isShown() ? this._leave() : this._enter();
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        clearTimeout(this._timeout), $.off(this._element.closest(ke), Le, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), _get(_getPrototypeOf(Pe.prototype), "dispose", this).call(this);
      }
    }, {
      key: "show",
      value: function show() {
        var _this40 = this;

        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
        if (!this._isWithContent() || !this._isEnabled) return;

        var t = $.trigger(this._element, this.constructor.eventName("show")),
            e = (u(this._element) || this._element.ownerDocument.documentElement).contains(this._element);

        if (t.defaultPrevented || !e) return;
        this.tip && (this.tip.remove(), this.tip = null);

        var i = this._getTipElement();

        this._element.setAttribute("aria-describedby", i.getAttribute("id"));

        var s = this._config.container;

        if (this._element.ownerDocument.documentElement.contains(this.tip) || (s.append(i), $.trigger(this._element, this.constructor.eventName("inserted"))), this._popper ? this._popper.update() : this._popper = this._createPopper(i), i.classList.add(Ce), "ontouchstart" in document.documentElement) {
          var _ref9;

          var _iterator21 = _createForOfIteratorHelper((_ref9 = []).concat.apply(_ref9, _toConsumableArray(document.body.children))),
              _step21;

          try {
            for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
              var _t19 = _step21.value;
              $.on(_t19, "mouseover", _);
            }
          } catch (err) {
            _iterator21.e(err);
          } finally {
            _iterator21.f();
          }
        }

        this._queueCallback(function () {
          var t = _this40._isHovered;
          _this40._isHovered = !1, $.trigger(_this40._element, _this40.constructor.eventName("shown")), t && _this40._leave();
        }, this.tip, this._isAnimated());
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this41 = this;

        if (!this._isShown()) return;
        if ($.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) return;

        var t = this._getTipElement();

        if (t.classList.remove(Ce), "ontouchstart" in document.documentElement) {
          var _ref10;

          var _iterator22 = _createForOfIteratorHelper((_ref10 = []).concat.apply(_ref10, _toConsumableArray(document.body.children))),
              _step22;

          try {
            for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
              var _t20 = _step22.value;
              $.off(_t20, "mouseover", _);
            }
          } catch (err) {
            _iterator22.e(err);
          } finally {
            _iterator22.f();
          }
        }

        this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this._isHovered = !1, this._queueCallback(function () {
          _this41._isWithActiveTrigger() || (_this41._isHovered || t.remove(), _this41._element.removeAttribute("aria-describedby"), $.trigger(_this41._element, _this41.constructor.eventName("hidden")), _this41._disposePopper());
        }, this.tip, this._isAnimated());
      }
    }, {
      key: "update",
      value: function update() {
        this._popper && this._popper.update();
      }
    }, {
      key: "_isWithContent",
      value: function _isWithContent() {
        return Boolean(this._getTitle());
      }
    }, {
      key: "_getTipElement",
      value: function _getTipElement() {
        return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
      }
    }, {
      key: "_createTipElement",
      value: function _createTipElement(t) {
        var e = this._getTemplateFactory(t).toHtml();

        if (!e) return null;
        e.classList.remove(Ee, Ce), e.classList.add("bs-".concat(this.constructor.NAME, "-auto"));

        var i = function (t) {
          do {
            t += Math.floor(1e6 * Math.random());
          } while (document.getElementById(t));

          return t;
        }(this.constructor.NAME).toString();

        return e.setAttribute("id", i), this._isAnimated() && e.classList.add(Ee), e;
      }
    }, {
      key: "setContent",
      value: function setContent(t) {
        this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
      }
    }, {
      key: "_getTemplateFactory",
      value: function _getTemplateFactory(t) {
        return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Ae(_objectSpread(_objectSpread({}, this._config), {}, {
          content: t,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        })), this._templateFactory;
      }
    }, {
      key: "_getContentForTemplate",
      value: function _getContentForTemplate() {
        return {
          ".tooltip-inner": this._getTitle()
        };
      }
    }, {
      key: "_getTitle",
      value: function _getTitle() {
        return this._resolvePossibleFunction(this._config.title) || this._config.originalTitle;
      }
    }, {
      key: "_initializeOnDelegatedTarget",
      value: function _initializeOnDelegatedTarget(t) {
        return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._config.animation || this.tip && this.tip.classList.contains(Ee);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        return this.tip && this.tip.classList.contains(Ce);
      }
    }, {
      key: "_createPopper",
      value: function _createPopper(t) {
        var e = "function" == typeof this._config.placement ? this._config.placement.call(this, t, this._element) : this._config.placement,
            s = Se[e.toUpperCase()];
        return i.createPopper(this._element, t, this._getPopperConfig(s));
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this42 = this;

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this42._element);
        } : t;
      }
    }, {
      key: "_resolvePossibleFunction",
      value: function _resolvePossibleFunction(t) {
        return "function" == typeof t ? t.call(this._element) : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig(t) {
        var _this43 = this;

        var e = {
          placement: t,
          modifiers: [{
            name: "flip",
            options: {
              fallbackPlacements: this._config.fallbackPlacements
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }, {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "arrow",
            options: {
              element: ".".concat(this.constructor.NAME, "-arrow")
            }
          }, {
            name: "preSetPlacement",
            enabled: !0,
            phase: "beforeMain",
            fn: function fn(t) {
              _this43._getTipElement().setAttribute("data-popper-placement", t.state.placement);
            }
          }]
        };
        return _objectSpread(_objectSpread({}, e), "function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig);
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this44 = this;

        var t = this._config.trigger.split(" ");

        var _iterator23 = _createForOfIteratorHelper(t),
            _step23;

        try {
          for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
            var _e15 = _step23.value;
            if ("click" === _e15) $.on(this._element, this.constructor.eventName("click"), this._config.selector, function (t) {
              return _this44.toggle(t);
            });else if ("manual" !== _e15) {
              var _t21 = _e15 === Oe ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                  _i22 = _e15 === Oe ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");

              $.on(this._element, _t21, this._config.selector, function (t) {
                var e = _this44._initializeOnDelegatedTarget(t);

                e._activeTrigger["focusin" === t.type ? Ie : Oe] = !0, e._enter();
              }), $.on(this._element, _i22, this._config.selector, function (t) {
                var e = _this44._initializeOnDelegatedTarget(t);

                e._activeTrigger["focusout" === t.type ? Ie : Oe] = e._element.contains(t.relatedTarget), e._leave();
              });
            }
          }
        } catch (err) {
          _iterator23.e(err);
        } finally {
          _iterator23.f();
        }

        this._hideModalHandler = function () {
          _this44._element && _this44.hide();
        }, $.on(this._element.closest(ke), Le, this._hideModalHandler), this._config.selector ? this._config = _objectSpread(_objectSpread({}, this._config), {}, {
          trigger: "manual",
          selector: ""
        }) : this._fixTitle();
      }
    }, {
      key: "_fixTitle",
      value: function _fixTitle() {
        var t = this._config.originalTitle;
        t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.removeAttribute("title"));
      }
    }, {
      key: "_enter",
      value: function _enter() {
        var _this45 = this;

        this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout(function () {
          _this45._isHovered && _this45.show();
        }, this._config.delay.show));
      }
    }, {
      key: "_leave",
      value: function _leave() {
        var _this46 = this;

        this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(function () {
          _this46._isHovered || _this46.hide();
        }, this._config.delay.hide));
      }
    }, {
      key: "_setTimeout",
      value: function _setTimeout(t, e) {
        clearTimeout(this._timeout), this._timeout = setTimeout(t, e);
      }
    }, {
      key: "_isWithActiveTrigger",
      value: function _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(!0);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        var e = W.getDataAttributes(this._element);

        for (var _i23 = 0, _Object$keys5 = Object.keys(e); _i23 < _Object$keys5.length; _i23++) {
          var _t22 = _Object$keys5[_i23];
          Te.has(_t22) && delete e[_t22];
        }

        return t = _objectSpread(_objectSpread({}, e), "object" == _typeof(t) && t ? t : {}), t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.container = !1 === t.container ? document.body : c(t.container), "number" == typeof t.delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), t.originalTitle = this._element.getAttribute("title") || "", "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t;
      }
    }, {
      key: "_getDelegateConfig",
      value: function _getDelegateConfig() {
        var t = {};

        for (var _e16 in this._config) {
          this.constructor.Default[_e16] !== this._config[_e16] && (t[_e16] = this._config[_e16]);
        }

        return t;
      }
    }, {
      key: "_disposePopper",
      value: function _disposePopper() {
        this._popper && (this._popper.destroy(), this._popper = null);
      }
    }], [{
      key: "Default",
      get: function get() {
        return De;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ne;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "tooltip";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Pe.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return Pe;
  }(V);

  b(Pe);

  var xe = _objectSpread(_objectSpread({}, Pe.Default), {}, {
    content: "",
    offset: [0, 8],
    placement: "right",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click"
  }),
      Me = _objectSpread(_objectSpread({}, Pe.DefaultType), {}, {
    content: "(null|string|element|function)"
  });

  var je = /*#__PURE__*/function (_Pe) {
    _inherits(je, _Pe);

    var _super14 = _createSuper(je);

    function je() {
      _classCallCheck(this, je);

      return _super14.apply(this, arguments);
    }

    _createClass(je, [{
      key: "_isWithContent",
      value: function _isWithContent() {
        return this._getTitle() || this._getContent();
      }
    }, {
      key: "_getContentForTemplate",
      value: function _getContentForTemplate() {
        return {
          ".popover-header": this._getTitle(),
          ".popover-body": this._getContent()
        };
      }
    }, {
      key: "_getContent",
      value: function _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
    }], [{
      key: "Default",
      get: function get() {
        return xe;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Me;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "popover";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = je.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return je;
  }(Pe);

  b(je);
  var $e = "click.bs.scrollspy",
      Fe = "active",
      ze = "[href]",
      He = {
    offset: null,
    rootMargin: "0px 0px -25%",
    smoothScroll: !1,
    target: null
  },
      qe = {
    offset: "(number|null)",
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element"
  };

  var Be = /*#__PURE__*/function (_V9) {
    _inherits(Be, _V9);

    var _super15 = _createSuper(Be);

    function Be(t, e) {
      var _this47;

      _classCallCheck(this, Be);

      _this47 = _super15.call(this, t, e), _this47._targetLinks = new Map(), _this47._observableSections = new Map(), _this47._rootElement = "visible" === getComputedStyle(_this47._element).overflowY ? null : _this47._element, _this47._activeTarget = null, _this47._observer = null, _this47._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      }, _this47.refresh();
      return _this47;
    }

    _createClass(Be, [{
      key: "refresh",
      value: function refresh() {
        this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();

        var _iterator24 = _createForOfIteratorHelper(this._observableSections.values()),
            _step24;

        try {
          for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
            var _t23 = _step24.value;

            this._observer.observe(_t23);
          }
        } catch (err) {
          _iterator24.e(err);
        } finally {
          _iterator24.f();
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._observer.disconnect(), _get(_getPrototypeOf(Be.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.target = c(t.target) || document.body, t;
      }
    }, {
      key: "_maybeEnableSmoothScroll",
      value: function _maybeEnableSmoothScroll() {
        var _this48 = this;

        this._config.smoothScroll && ($.off(this._config.target, $e), $.on(this._config.target, $e, ze, function (t) {
          var e = _this48._observableSections.get(t.target.hash);

          if (e) {
            t.preventDefault();

            var _i24 = _this48._rootElement || window,
                _s9 = e.offsetTop - _this48._element.offsetTop;

            if (_i24.scrollTo) return void _i24.scrollTo({
              top: _s9,
              behavior: "smooth"
            });
            _i24.scrollTop = _s9;
          }
        }));
      }
    }, {
      key: "_getNewObserver",
      value: function _getNewObserver() {
        var _this49 = this;

        var t = {
          root: this._rootElement,
          threshold: [.1, .5, 1],
          rootMargin: this._getRootMargin()
        };
        return new IntersectionObserver(function (t) {
          return _this49._observerCallback(t);
        }, t);
      }
    }, {
      key: "_observerCallback",
      value: function _observerCallback(t) {
        var _this50 = this;

        var e = function e(t) {
          return _this50._targetLinks.get("#".concat(t.target.id));
        },
            i = function i(t) {
          _this50._previousScrollData.visibleEntryTop = t.target.offsetTop, _this50._process(e(t));
        },
            s = (this._rootElement || document.documentElement).scrollTop,
            n = s >= this._previousScrollData.parentScrollTop;

        this._previousScrollData.parentScrollTop = s;

        var _iterator25 = _createForOfIteratorHelper(t),
            _step25;

        try {
          for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
            var _o4 = _step25.value;

            if (!_o4.isIntersecting) {
              this._activeTarget = null, this._clearActiveClass(e(_o4));
              continue;
            }

            var _t24 = _o4.target.offsetTop >= this._previousScrollData.visibleEntryTop;

            if (n && _t24) {
              if (i(_o4), !s) return;
            } else n || _t24 || i(_o4);
          }
        } catch (err) {
          _iterator25.e(err);
        } finally {
          _iterator25.f();
        }
      }
    }, {
      key: "_getRootMargin",
      value: function _getRootMargin() {
        return this._config.offset ? "".concat(this._config.offset, "px 0px -30%") : this._config.rootMargin;
      }
    }, {
      key: "_initializeTargetsAndObservables",
      value: function _initializeTargetsAndObservables() {
        this._targetLinks = new Map(), this._observableSections = new Map();
        var t = U.find(ze, this._config.target);

        var _iterator26 = _createForOfIteratorHelper(t),
            _step26;

        try {
          for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
            var _e17 = _step26.value;
            if (!_e17.hash || d(_e17)) continue;

            var _t25 = U.findOne(_e17.hash, this._element);

            h(_t25) && (this._targetLinks.set(_e17.hash, _e17), this._observableSections.set(_e17.hash, _t25));
          }
        } catch (err) {
          _iterator26.e(err);
        } finally {
          _iterator26.f();
        }
      }
    }, {
      key: "_process",
      value: function _process(t) {
        this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(Fe), this._activateParents(t), $.trigger(this._element, "activate.bs.scrollspy", {
          relatedTarget: t
        }));
      }
    }, {
      key: "_activateParents",
      value: function _activateParents(t) {
        if (t.classList.contains("dropdown-item")) U.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(Fe);else {
          var _iterator27 = _createForOfIteratorHelper(U.parents(t, ".nav, .list-group")),
              _step27;

          try {
            for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
              var _e18 = _step27.value;

              var _iterator28 = _createForOfIteratorHelper(U.prev(_e18, ".nav-link, .nav-item > .nav-link, .list-group-item")),
                  _step28;

              try {
                for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                  var _t26 = _step28.value;

                  _t26.classList.add(Fe);
                }
              } catch (err) {
                _iterator28.e(err);
              } finally {
                _iterator28.f();
              }
            }
          } catch (err) {
            _iterator27.e(err);
          } finally {
            _iterator27.f();
          }
        }
      }
    }, {
      key: "_clearActiveClass",
      value: function _clearActiveClass(t) {
        t.classList.remove(Fe);
        var e = U.find("[href].active", t);

        var _iterator29 = _createForOfIteratorHelper(e),
            _step29;

        try {
          for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
            var _t27 = _step29.value;

            _t27.classList.remove(Fe);
          }
        } catch (err) {
          _iterator29.e(err);
        } finally {
          _iterator29.f();
        }
      }
    }], [{
      key: "Default",
      get: function get() {
        return He;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return qe;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "scrollspy";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Be.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return Be;
  }(V);

  $.on(window, "load.bs.scrollspy.data-api", function () {
    var _iterator30 = _createForOfIteratorHelper(U.find('[data-bs-spy="scroll"]')),
        _step30;

    try {
      for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
        var _t28 = _step30.value;
        Be.getOrCreateInstance(_t28);
      }
    } catch (err) {
      _iterator30.e(err);
    } finally {
      _iterator30.f();
    }
  }), b(Be);
  var We = "ArrowLeft",
      Re = "ArrowRight",
      Ve = "ArrowUp",
      Ke = "ArrowDown",
      Qe = "active",
      Xe = "fade",
      Ye = "show",
      Ue = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      Ge = ".nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role=\"tab\"]:not(.dropdown-toggle), ".concat(Ue);

  var Je = /*#__PURE__*/function (_V10) {
    _inherits(Je, _V10);

    var _super16 = _createSuper(Je);

    function Je(t) {
      var _this51;

      _classCallCheck(this, Je);

      _this51 = _super16.call(this, t), _this51._parent = _this51._element.closest('.list-group, .nav, [role="tablist"]'), _this51._parent && (_this51._setInitialAttributes(_this51._parent, _this51._getChildren()), $.on(_this51._element, "keydown.bs.tab", function (t) {
        return _this51._keydown(t);
      }));
      return _this51;
    }

    _createClass(Je, [{
      key: "show",
      value: function show() {
        var t = this._element;
        if (this._elemIsActive(t)) return;

        var e = this._getActiveElem(),
            i = e ? $.trigger(e, "hide.bs.tab", {
          relatedTarget: t
        }) : null;

        $.trigger(t, "show.bs.tab", {
          relatedTarget: e
        }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e));
      }
    }, {
      key: "_activate",
      value: function _activate(t, e) {
        var _this52 = this;

        t && (t.classList.add(Qe), this._activate(r(t)), this._queueCallback(function () {
          "tab" === t.getAttribute("role") ? (t.focus(), t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), _this52._toggleDropDown(t, !0), $.trigger(t, "shown.bs.tab", {
            relatedTarget: e
          })) : t.classList.add(Ye);
        }, t, t.classList.contains(Xe)));
      }
    }, {
      key: "_deactivate",
      value: function _deactivate(t, e) {
        var _this53 = this;

        t && (t.classList.remove(Qe), t.blur(), this._deactivate(r(t)), this._queueCallback(function () {
          "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), _this53._toggleDropDown(t, !1), $.trigger(t, "hidden.bs.tab", {
            relatedTarget: e
          })) : t.classList.remove(Ye);
        }, t, t.classList.contains(Xe)));
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        if (![We, Re, Ve, Ke].includes(t.key)) return;
        t.stopPropagation(), t.preventDefault();
        var e = [Re, Ke].includes(t.key),
            i = w(this._getChildren().filter(function (t) {
          return !d(t);
        }), t.target, e, !0);
        i && Je.getOrCreateInstance(i).show();
      }
    }, {
      key: "_getChildren",
      value: function _getChildren() {
        return U.find(Ge, this._parent);
      }
    }, {
      key: "_getActiveElem",
      value: function _getActiveElem() {
        var _this54 = this;

        return this._getChildren().find(function (t) {
          return _this54._elemIsActive(t);
        }) || null;
      }
    }, {
      key: "_setInitialAttributes",
      value: function _setInitialAttributes(t, e) {
        this._setAttributeIfNotExists(t, "role", "tablist");

        var _iterator31 = _createForOfIteratorHelper(e),
            _step31;

        try {
          for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
            var _t29 = _step31.value;

            this._setInitialAttributesOnChild(_t29);
          }
        } catch (err) {
          _iterator31.e(err);
        } finally {
          _iterator31.f();
        }
      }
    }, {
      key: "_setInitialAttributesOnChild",
      value: function _setInitialAttributesOnChild(t) {
        t = this._getInnerElement(t);

        var e = this._elemIsActive(t),
            i = this._getOuterElement(t);

        t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t);
      }
    }, {
      key: "_setInitialAttributesOnTargetPanel",
      value: function _setInitialAttributesOnTargetPanel(t) {
        var e = r(t);
        e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", "#".concat(t.id)));
      }
    }, {
      key: "_toggleDropDown",
      value: function _toggleDropDown(t, e) {
        var i = this._getOuterElement(t);

        if (!i.classList.contains("dropdown")) return;

        var s = function s(t, _s10) {
          var n = U.findOne(t, i);
          n && n.classList.toggle(_s10, e);
        };

        s(".dropdown-toggle", Qe), s(".dropdown-menu", Ye), s(".dropdown-item", Qe), i.setAttribute("aria-expanded", e);
      }
    }, {
      key: "_setAttributeIfNotExists",
      value: function _setAttributeIfNotExists(t, e, i) {
        t.hasAttribute(e) || t.setAttribute(e, i);
      }
    }, {
      key: "_elemIsActive",
      value: function _elemIsActive(t) {
        return t.classList.contains(Qe);
      }
    }, {
      key: "_getInnerElement",
      value: function _getInnerElement(t) {
        return t.matches(Ge) ? t : U.findOne(Ge, t);
      }
    }, {
      key: "_getOuterElement",
      value: function _getOuterElement(t) {
        return t.closest(".nav-item, .list-group-item") || t;
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "tab";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Je.getOrCreateInstance(this);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);

    return Je;
  }(V);

  $.on(document, "click.bs.tab", Ue, function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), d(this) || Je.getOrCreateInstance(this).show();
  }), $.on(window, "load.bs.tab", function () {
    var _iterator32 = _createForOfIteratorHelper(U.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]')),
        _step32;

    try {
      for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
        var _t30 = _step32.value;
        Je.getOrCreateInstance(_t30);
      }
    } catch (err) {
      _iterator32.e(err);
    } finally {
      _iterator32.f();
    }
  }), b(Je);
  var Ze = "hide",
      ti = "show",
      ei = "showing",
      ii = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      si = {
    animation: !0,
    autohide: !0,
    delay: 5e3
  };

  var ni = /*#__PURE__*/function (_V11) {
    _inherits(ni, _V11);

    var _super17 = _createSuper(ni);

    function ni(t, e) {
      var _this55;

      _classCallCheck(this, ni);

      _this55 = _super17.call(this, t, e), _this55._timeout = null, _this55._hasMouseInteraction = !1, _this55._hasKeyboardInteraction = !1, _this55._setListeners();
      return _this55;
    }

    _createClass(ni, [{
      key: "show",
      value: function show() {
        var _this56 = this;

        $.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(Ze), g(this._element), this._element.classList.add(ti, ei), this._queueCallback(function () {
          _this56._element.classList.remove(ei), $.trigger(_this56._element, "shown.bs.toast"), _this56._maybeScheduleHide();
        }, this._element, this._config.animation));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this57 = this;

        this.isShown() && ($.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(ei), this._queueCallback(function () {
          _this57._element.classList.add(Ze), _this57._element.classList.remove(ei, ti), $.trigger(_this57._element, "hidden.bs.toast");
        }, this._element, this._config.animation)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._clearTimeout(), this.isShown() && this._element.classList.remove(ti), _get(_getPrototypeOf(ni.prototype), "dispose", this).call(this);
      }
    }, {
      key: "isShown",
      value: function isShown() {
        return this._element.classList.contains(ti);
      }
    }, {
      key: "_maybeScheduleHide",
      value: function _maybeScheduleHide() {
        var _this58 = this;

        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(function () {
          _this58.hide();
        }, this._config.delay)));
      }
    }, {
      key: "_onInteraction",
      value: function _onInteraction(t, e) {
        switch (t.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = e;
            break;

          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = e;
        }

        if (e) return void this._clearTimeout();
        var i = t.relatedTarget;
        this._element === i || this._element.contains(i) || this._maybeScheduleHide();
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this59 = this;

        $.on(this._element, "mouseover.bs.toast", function (t) {
          return _this59._onInteraction(t, !0);
        }), $.on(this._element, "mouseout.bs.toast", function (t) {
          return _this59._onInteraction(t, !1);
        }), $.on(this._element, "focusin.bs.toast", function (t) {
          return _this59._onInteraction(t, !0);
        }), $.on(this._element, "focusout.bs.toast", function (t) {
          return _this59._onInteraction(t, !1);
        });
      }
    }, {
      key: "_clearTimeout",
      value: function _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }
    }], [{
      key: "Default",
      get: function get() {
        return si;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ii;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "toast";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = ni.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);

    return ni;
  }(V);

  return K(ni), b(ni), {
    Alert: Q,
    Button: Y,
    Carousel: ht,
    Collapse: mt,
    Dropdown: Mt,
    Modal: ne,
    Offcanvas: _e,
    Popover: je,
    ScrollSpy: Be,
    Tab: Je,
    Toast: ni,
    Tooltip: Pe
  };
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @popperjs/core v2.11.5 - MIT License
 */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).Popper = {});
}(void 0, function (e) {
  "use strict";

  function t(e) {
    if (null == e) return window;

    if ("[object Window]" !== e.toString()) {
      var t = e.ownerDocument;
      return t && t.defaultView || window;
    }

    return e;
  }

  function n(e) {
    return e instanceof t(e).Element || e instanceof Element;
  }

  function r(e) {
    return e instanceof t(e).HTMLElement || e instanceof HTMLElement;
  }

  function o(e) {
    return "undefined" != typeof ShadowRoot && (e instanceof t(e).ShadowRoot || e instanceof ShadowRoot);
  }

  var i = Math.max,
      a = Math.min,
      s = Math.round;

  function f(e, t) {
    void 0 === t && (t = !1);
    var n = e.getBoundingClientRect(),
        o = 1,
        i = 1;

    if (r(e) && t) {
      var a = e.offsetHeight,
          f = e.offsetWidth;
      f > 0 && (o = s(n.width) / f || 1), a > 0 && (i = s(n.height) / a || 1);
    }

    return {
      width: n.width / o,
      height: n.height / i,
      top: n.top / i,
      right: n.right / o,
      bottom: n.bottom / i,
      left: n.left / o,
      x: n.left / o,
      y: n.top / i
    };
  }

  function c(e) {
    var n = t(e);
    return {
      scrollLeft: n.pageXOffset,
      scrollTop: n.pageYOffset
    };
  }

  function p(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }

  function u(e) {
    return ((n(e) ? e.ownerDocument : e.document) || window.document).documentElement;
  }

  function l(e) {
    return f(u(e)).left + c(e).scrollLeft;
  }

  function d(e) {
    return t(e).getComputedStyle(e);
  }

  function h(e) {
    var t = d(e),
        n = t.overflow,
        r = t.overflowX,
        o = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + o + r);
  }

  function m(e, n, o) {
    void 0 === o && (o = !1);

    var i,
        a,
        d = r(n),
        m = r(n) && function (e) {
      var t = e.getBoundingClientRect(),
          n = s(t.width) / e.offsetWidth || 1,
          r = s(t.height) / e.offsetHeight || 1;
      return 1 !== n || 1 !== r;
    }(n),
        v = u(n),
        g = f(e, m),
        y = {
      scrollLeft: 0,
      scrollTop: 0
    },
        b = {
      x: 0,
      y: 0
    };

    return (d || !d && !o) && (("body" !== p(n) || h(v)) && (y = (i = n) !== t(i) && r(i) ? {
      scrollLeft: (a = i).scrollLeft,
      scrollTop: a.scrollTop
    } : c(i)), r(n) ? ((b = f(n, !0)).x += n.clientLeft, b.y += n.clientTop) : v && (b.x = l(v))), {
      x: g.left + y.scrollLeft - b.x,
      y: g.top + y.scrollTop - b.y,
      width: g.width,
      height: g.height
    };
  }

  function v(e) {
    var t = f(e),
        n = e.offsetWidth,
        r = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: n,
      height: r
    };
  }

  function g(e) {
    return "html" === p(e) ? e : e.assignedSlot || e.parentNode || (o(e) ? e.host : null) || u(e);
  }

  function y(e) {
    return ["html", "body", "#document"].indexOf(p(e)) >= 0 ? e.ownerDocument.body : r(e) && h(e) ? e : y(g(e));
  }

  function b(e, n) {
    var r;
    void 0 === n && (n = []);
    var o = y(e),
        i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
        a = t(o),
        s = i ? [a].concat(a.visualViewport || [], h(o) ? o : []) : o,
        f = n.concat(s);
    return i ? f : f.concat(b(g(s)));
  }

  function x(e) {
    return ["table", "td", "th"].indexOf(p(e)) >= 0;
  }

  function w(e) {
    return r(e) && "fixed" !== d(e).position ? e.offsetParent : null;
  }

  function O(e) {
    for (var n = t(e), i = w(e); i && x(i) && "static" === d(i).position;) {
      i = w(i);
    }

    return i && ("html" === p(i) || "body" === p(i) && "static" === d(i).position) ? n : i || function (e) {
      var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
      if (-1 !== navigator.userAgent.indexOf("Trident") && r(e) && "fixed" === d(e).position) return null;
      var n = g(e);

      for (o(n) && (n = n.host); r(n) && ["html", "body"].indexOf(p(n)) < 0;) {
        var i = d(n);
        if ("none" !== i.transform || "none" !== i.perspective || "paint" === i.contain || -1 !== ["transform", "perspective"].indexOf(i.willChange) || t && "filter" === i.willChange || t && i.filter && "none" !== i.filter) return n;
        n = n.parentNode;
      }

      return null;
    }(e) || n;
  }

  var j = "top",
      E = "bottom",
      D = "right",
      A = "left",
      L = "auto",
      P = [j, E, D, A],
      M = "start",
      k = "end",
      W = "viewport",
      B = "popper",
      H = P.reduce(function (e, t) {
    return e.concat([t + "-" + M, t + "-" + k]);
  }, []),
      T = [].concat(P, [L]).reduce(function (e, t) {
    return e.concat([t, t + "-" + M, t + "-" + k]);
  }, []),
      R = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

  function S(e) {
    var t = new Map(),
        n = new Set(),
        r = [];

    function o(e) {
      n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach(function (e) {
        if (!n.has(e)) {
          var r = t.get(e);
          r && o(r);
        }
      }), r.push(e);
    }

    return e.forEach(function (e) {
      t.set(e.name, e);
    }), e.forEach(function (e) {
      n.has(e.name) || o(e);
    }), r;
  }

  function C(e) {
    return e.split("-")[0];
  }

  function q(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;

    if (n && o(n)) {
      var r = t;

      do {
        if (r && e.isSameNode(r)) return !0;
        r = r.parentNode || r.host;
      } while (r);
    }

    return !1;
  }

  function V(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    });
  }

  function N(e, r) {
    return r === W ? V(function (e) {
      var n = t(e),
          r = u(e),
          o = n.visualViewport,
          i = r.clientWidth,
          a = r.clientHeight,
          s = 0,
          f = 0;
      return o && (i = o.width, a = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = o.offsetLeft, f = o.offsetTop)), {
        width: i,
        height: a,
        x: s + l(e),
        y: f
      };
    }(e)) : n(r) ? function (e) {
      var t = f(e);
      return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
    }(r) : V(function (e) {
      var t,
          n = u(e),
          r = c(e),
          o = null == (t = e.ownerDocument) ? void 0 : t.body,
          a = i(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
          s = i(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
          f = -r.scrollLeft + l(e),
          p = -r.scrollTop;
      return "rtl" === d(o || n).direction && (f += i(n.clientWidth, o ? o.clientWidth : 0) - a), {
        width: a,
        height: s,
        x: f,
        y: p
      };
    }(u(e)));
  }

  function I(e, t, o) {
    var s = "clippingParents" === t ? function (e) {
      var t = b(g(e)),
          o = ["absolute", "fixed"].indexOf(d(e).position) >= 0 && r(e) ? O(e) : e;
      return n(o) ? t.filter(function (e) {
        return n(e) && q(e, o) && "body" !== p(e);
      }) : [];
    }(e) : [].concat(t),
        f = [].concat(s, [o]),
        c = f[0],
        u = f.reduce(function (t, n) {
      var r = N(e, n);
      return t.top = i(r.top, t.top), t.right = a(r.right, t.right), t.bottom = a(r.bottom, t.bottom), t.left = i(r.left, t.left), t;
    }, N(e, c));
    return u.width = u.right - u.left, u.height = u.bottom - u.top, u.x = u.left, u.y = u.top, u;
  }

  function _(e) {
    return e.split("-")[1];
  }

  function F(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
  }

  function U(e) {
    var t,
        n = e.reference,
        r = e.element,
        o = e.placement,
        i = o ? C(o) : null,
        a = o ? _(o) : null,
        s = n.x + n.width / 2 - r.width / 2,
        f = n.y + n.height / 2 - r.height / 2;

    switch (i) {
      case j:
        t = {
          x: s,
          y: n.y - r.height
        };
        break;

      case E:
        t = {
          x: s,
          y: n.y + n.height
        };
        break;

      case D:
        t = {
          x: n.x + n.width,
          y: f
        };
        break;

      case A:
        t = {
          x: n.x - r.width,
          y: f
        };
        break;

      default:
        t = {
          x: n.x,
          y: n.y
        };
    }

    var c = i ? F(i) : null;

    if (null != c) {
      var p = "y" === c ? "height" : "width";

      switch (a) {
        case M:
          t[c] = t[c] - (n[p] / 2 - r[p] / 2);
          break;

        case k:
          t[c] = t[c] + (n[p] / 2 - r[p] / 2);
      }
    }

    return t;
  }

  function z(e) {
    return Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, e);
  }

  function X(e, t) {
    return t.reduce(function (t, n) {
      return t[n] = e, t;
    }, {});
  }

  function Y(e, t) {
    void 0 === t && (t = {});
    var r = t,
        o = r.placement,
        i = void 0 === o ? e.placement : o,
        a = r.boundary,
        s = void 0 === a ? "clippingParents" : a,
        c = r.rootBoundary,
        p = void 0 === c ? W : c,
        l = r.elementContext,
        d = void 0 === l ? B : l,
        h = r.altBoundary,
        m = void 0 !== h && h,
        v = r.padding,
        g = void 0 === v ? 0 : v,
        y = z("number" != typeof g ? g : X(g, P)),
        b = d === B ? "reference" : B,
        x = e.rects.popper,
        w = e.elements[m ? b : d],
        O = I(n(w) ? w : w.contextElement || u(e.elements.popper), s, p),
        A = f(e.elements.reference),
        L = U({
      reference: A,
      element: x,
      strategy: "absolute",
      placement: i
    }),
        M = V(Object.assign({}, x, L)),
        k = d === B ? M : A,
        H = {
      top: O.top - k.top + y.top,
      bottom: k.bottom - O.bottom + y.bottom,
      left: O.left - k.left + y.left,
      right: k.right - O.right + y.right
    },
        T = e.modifiersData.offset;

    if (d === B && T) {
      var R = T[i];
      Object.keys(H).forEach(function (e) {
        var t = [D, E].indexOf(e) >= 0 ? 1 : -1,
            n = [j, E].indexOf(e) >= 0 ? "y" : "x";
        H[e] += R[n] * t;
      });
    }

    return H;
  }

  var G = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };

  function J() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
      t[n] = arguments[n];
    }

    return !t.some(function (e) {
      return !(e && "function" == typeof e.getBoundingClientRect);
    });
  }

  function K(e) {
    void 0 === e && (e = {});
    var t = e,
        r = t.defaultModifiers,
        o = void 0 === r ? [] : r,
        i = t.defaultOptions,
        a = void 0 === i ? G : i;
    return function (e, t, r) {
      void 0 === r && (r = a);
      var i,
          s,
          f = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, G, a),
        modifiersData: {},
        elements: {
          reference: e,
          popper: t
        },
        attributes: {},
        styles: {}
      },
          c = [],
          p = !1,
          u = {
        state: f,
        setOptions: function setOptions(r) {
          var i = "function" == typeof r ? r(f.options) : r;
          l(), f.options = Object.assign({}, a, f.options, i), f.scrollParents = {
            reference: n(e) ? b(e) : e.contextElement ? b(e.contextElement) : [],
            popper: b(t)
          };

          var s,
              p,
              d = function (e) {
            var t = S(e);
            return R.reduce(function (e, n) {
              return e.concat(t.filter(function (e) {
                return e.phase === n;
              }));
            }, []);
          }((s = [].concat(o, f.options.modifiers), p = s.reduce(function (e, t) {
            var n = e[t.name];
            return e[t.name] = n ? Object.assign({}, n, t, {
              options: Object.assign({}, n.options, t.options),
              data: Object.assign({}, n.data, t.data)
            }) : t, e;
          }, {}), Object.keys(p).map(function (e) {
            return p[e];
          })));

          return f.orderedModifiers = d.filter(function (e) {
            return e.enabled;
          }), f.orderedModifiers.forEach(function (e) {
            var t = e.name,
                n = e.options,
                r = void 0 === n ? {} : n,
                o = e.effect;

            if ("function" == typeof o) {
              var i = o({
                state: f,
                name: t,
                instance: u,
                options: r
              }),
                  a = function a() {};

              c.push(i || a);
            }
          }), u.update();
        },
        forceUpdate: function forceUpdate() {
          if (!p) {
            var e = f.elements,
                t = e.reference,
                n = e.popper;

            if (J(t, n)) {
              f.rects = {
                reference: m(t, O(n), "fixed" === f.options.strategy),
                popper: v(n)
              }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach(function (e) {
                return f.modifiersData[e.name] = Object.assign({}, e.data);
              });

              for (var r = 0; r < f.orderedModifiers.length; r++) {
                if (!0 !== f.reset) {
                  var o = f.orderedModifiers[r],
                      i = o.fn,
                      a = o.options,
                      s = void 0 === a ? {} : a,
                      c = o.name;
                  "function" == typeof i && (f = i({
                    state: f,
                    options: s,
                    name: c,
                    instance: u
                  }) || f);
                } else f.reset = !1, r = -1;
              }
            }
          }
        },
        update: (i = function i() {
          return new Promise(function (e) {
            u.forceUpdate(), e(f);
          });
        }, function () {
          return s || (s = new Promise(function (e) {
            Promise.resolve().then(function () {
              s = void 0, e(i());
            });
          })), s;
        }),
        destroy: function destroy() {
          l(), p = !0;
        }
      };
      if (!J(e, t)) return u;

      function l() {
        c.forEach(function (e) {
          return e();
        }), c = [];
      }

      return u.setOptions(r).then(function (e) {
        !p && r.onFirstUpdate && r.onFirstUpdate(e);
      }), u;
    };
  }

  var Q = {
    passive: !0
  };
  var Z = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function fn() {},
    effect: function effect(e) {
      var n = e.state,
          r = e.instance,
          o = e.options,
          i = o.scroll,
          a = void 0 === i || i,
          s = o.resize,
          f = void 0 === s || s,
          c = t(n.elements.popper),
          p = [].concat(n.scrollParents.reference, n.scrollParents.popper);
      return a && p.forEach(function (e) {
        e.addEventListener("scroll", r.update, Q);
      }), f && c.addEventListener("resize", r.update, Q), function () {
        a && p.forEach(function (e) {
          e.removeEventListener("scroll", r.update, Q);
        }), f && c.removeEventListener("resize", r.update, Q);
      };
    },
    data: {}
  };
  var $ = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function fn(e) {
      var t = e.state,
          n = e.name;
      t.modifiersData[n] = U({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: "absolute",
        placement: t.placement
      });
    },
    data: {}
  },
      ee = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };

  function te(e) {
    var n,
        r = e.popper,
        o = e.popperRect,
        i = e.placement,
        a = e.variation,
        f = e.offsets,
        c = e.position,
        p = e.gpuAcceleration,
        l = e.adaptive,
        h = e.roundOffsets,
        m = e.isFixed,
        v = f.x,
        g = void 0 === v ? 0 : v,
        y = f.y,
        b = void 0 === y ? 0 : y,
        x = "function" == typeof h ? h({
      x: g,
      y: b
    }) : {
      x: g,
      y: b
    };
    g = x.x, b = x.y;
    var w = f.hasOwnProperty("x"),
        L = f.hasOwnProperty("y"),
        P = A,
        M = j,
        W = window;

    if (l) {
      var B = O(r),
          H = "clientHeight",
          T = "clientWidth";
      if (B === t(r) && "static" !== d(B = u(r)).position && "absolute" === c && (H = "scrollHeight", T = "scrollWidth"), B = B, i === j || (i === A || i === D) && a === k) M = E, b -= (m && B === W && W.visualViewport ? W.visualViewport.height : B[H]) - o.height, b *= p ? 1 : -1;
      if (i === A || (i === j || i === E) && a === k) P = D, g -= (m && B === W && W.visualViewport ? W.visualViewport.width : B[T]) - o.width, g *= p ? 1 : -1;
    }

    var R,
        S = Object.assign({
      position: c
    }, l && ee),
        C = !0 === h ? function (e) {
      var t = e.x,
          n = e.y,
          r = window.devicePixelRatio || 1;
      return {
        x: s(t * r) / r || 0,
        y: s(n * r) / r || 0
      };
    }({
      x: g,
      y: b
    }) : {
      x: g,
      y: b
    };
    return g = C.x, b = C.y, p ? Object.assign({}, S, ((R = {})[M] = L ? "0" : "", R[P] = w ? "0" : "", R.transform = (W.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + b + "px)" : "translate3d(" + g + "px, " + b + "px, 0)", R)) : Object.assign({}, S, ((n = {})[M] = L ? b + "px" : "", n[P] = w ? g + "px" : "", n.transform = "", n));
  }

  var ne = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function fn(e) {
      var t = e.state,
          n = e.options,
          r = n.gpuAcceleration,
          o = void 0 === r || r,
          i = n.adaptive,
          a = void 0 === i || i,
          s = n.roundOffsets,
          f = void 0 === s || s,
          c = {
        placement: C(t.placement),
        variation: _(t.placement),
        popper: t.elements.popper,
        popperRect: t.rects.popper,
        gpuAcceleration: o,
        isFixed: "fixed" === t.options.strategy
      };
      null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, te(Object.assign({}, c, {
        offsets: t.modifiersData.popperOffsets,
        position: t.options.strategy,
        adaptive: a,
        roundOffsets: f
      })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, te(Object.assign({}, c, {
        offsets: t.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: f
      })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement
      });
    },
    data: {}
  };
  var re = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function fn(e) {
      var t = e.state;
      Object.keys(t.elements).forEach(function (e) {
        var n = t.styles[e] || {},
            o = t.attributes[e] || {},
            i = t.elements[e];
        r(i) && p(i) && (Object.assign(i.style, n), Object.keys(o).forEach(function (e) {
          var t = o[e];
          !1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 === t ? "" : t);
        }));
      });
    },
    effect: function effect(e) {
      var t = e.state,
          n = {
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
      return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function () {
        Object.keys(t.elements).forEach(function (e) {
          var o = t.elements[e],
              i = t.attributes[e] || {},
              a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function (e, t) {
            return e[t] = "", e;
          }, {});
          r(o) && p(o) && (Object.assign(o.style, a), Object.keys(i).forEach(function (e) {
            o.removeAttribute(e);
          }));
        });
      };
    },
    requires: ["computeStyles"]
  };
  var oe = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function fn(e) {
      var t = e.state,
          n = e.options,
          r = e.name,
          o = n.offset,
          i = void 0 === o ? [0, 0] : o,
          a = T.reduce(function (e, n) {
        return e[n] = function (e, t, n) {
          var r = C(e),
              o = [A, j].indexOf(r) >= 0 ? -1 : 1,
              i = "function" == typeof n ? n(Object.assign({}, t, {
            placement: e
          })) : n,
              a = i[0],
              s = i[1];
          return a = a || 0, s = (s || 0) * o, [A, D].indexOf(r) >= 0 ? {
            x: s,
            y: a
          } : {
            x: a,
            y: s
          };
        }(n, t.rects, i), e;
      }, {}),
          s = a[t.placement],
          f = s.x,
          c = s.y;
      null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = a;
    }
  },
      ie = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };

  function ae(e) {
    return e.replace(/left|right|bottom|top/g, function (e) {
      return ie[e];
    });
  }

  var se = {
    start: "end",
    end: "start"
  };

  function fe(e) {
    return e.replace(/start|end/g, function (e) {
      return se[e];
    });
  }

  function ce(e, t) {
    void 0 === t && (t = {});

    var n = t,
        r = n.placement,
        o = n.boundary,
        i = n.rootBoundary,
        a = n.padding,
        s = n.flipVariations,
        f = n.allowedAutoPlacements,
        c = void 0 === f ? T : f,
        p = _(r),
        u = p ? s ? H : H.filter(function (e) {
      return _(e) === p;
    }) : P,
        l = u.filter(function (e) {
      return c.indexOf(e) >= 0;
    });

    0 === l.length && (l = u);
    var d = l.reduce(function (t, n) {
      return t[n] = Y(e, {
        placement: n,
        boundary: o,
        rootBoundary: i,
        padding: a
      })[C(n)], t;
    }, {});
    return Object.keys(d).sort(function (e, t) {
      return d[e] - d[t];
    });
  }

  var pe = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function fn(e) {
      var t = e.state,
          n = e.options,
          r = e.name;

      if (!t.modifiersData[r]._skip) {
        for (var o = n.mainAxis, i = void 0 === o || o, a = n.altAxis, s = void 0 === a || a, f = n.fallbackPlacements, c = n.padding, p = n.boundary, u = n.rootBoundary, l = n.altBoundary, d = n.flipVariations, h = void 0 === d || d, m = n.allowedAutoPlacements, v = t.options.placement, g = C(v), y = f || (g === v || !h ? [ae(v)] : function (e) {
          if (C(e) === L) return [];
          var t = ae(e);
          return [fe(e), t, fe(t)];
        }(v)), b = [v].concat(y).reduce(function (e, n) {
          return e.concat(C(n) === L ? ce(t, {
            placement: n,
            boundary: p,
            rootBoundary: u,
            padding: c,
            flipVariations: h,
            allowedAutoPlacements: m
          }) : n);
        }, []), x = t.rects.reference, w = t.rects.popper, O = new Map(), P = !0, k = b[0], W = 0; W < b.length; W++) {
          var B = b[W],
              H = C(B),
              T = _(B) === M,
              R = [j, E].indexOf(H) >= 0,
              S = R ? "width" : "height",
              q = Y(t, {
            placement: B,
            boundary: p,
            rootBoundary: u,
            altBoundary: l,
            padding: c
          }),
              V = R ? T ? D : A : T ? E : j;
          x[S] > w[S] && (V = ae(V));
          var N = ae(V),
              I = [];

          if (i && I.push(q[H] <= 0), s && I.push(q[V] <= 0, q[N] <= 0), I.every(function (e) {
            return e;
          })) {
            k = B, P = !1;
            break;
          }

          O.set(B, I);
        }

        if (P) for (var F = function F(e) {
          var t = b.find(function (t) {
            var n = O.get(t);
            if (n) return n.slice(0, e).every(function (e) {
              return e;
            });
          });
          if (t) return k = t, "break";
        }, U = h ? 3 : 1; U > 0; U--) {
          if ("break" === F(U)) break;
        }
        t.placement !== k && (t.modifiersData[r]._skip = !0, t.placement = k, t.reset = !0);
      }
    },
    requiresIfExists: ["offset"],
    data: {
      _skip: !1
    }
  };

  function ue(e, t, n) {
    return i(e, a(t, n));
  }

  var le = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function fn(e) {
      var t = e.state,
          n = e.options,
          r = e.name,
          o = n.mainAxis,
          s = void 0 === o || o,
          f = n.altAxis,
          c = void 0 !== f && f,
          p = n.boundary,
          u = n.rootBoundary,
          l = n.altBoundary,
          d = n.padding,
          h = n.tether,
          m = void 0 === h || h,
          g = n.tetherOffset,
          y = void 0 === g ? 0 : g,
          b = Y(t, {
        boundary: p,
        rootBoundary: u,
        padding: d,
        altBoundary: l
      }),
          x = C(t.placement),
          w = _(t.placement),
          L = !w,
          P = F(x),
          k = "x" === P ? "y" : "x",
          W = t.modifiersData.popperOffsets,
          B = t.rects.reference,
          H = t.rects.popper,
          T = "function" == typeof y ? y(Object.assign({}, t.rects, {
        placement: t.placement
      })) : y,
          R = "number" == typeof T ? {
        mainAxis: T,
        altAxis: T
      } : Object.assign({
        mainAxis: 0,
        altAxis: 0
      }, T),
          S = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
          q = {
        x: 0,
        y: 0
      };

      if (W) {
        if (s) {
          var V,
              N = "y" === P ? j : A,
              I = "y" === P ? E : D,
              U = "y" === P ? "height" : "width",
              z = W[P],
              X = z + b[N],
              G = z - b[I],
              J = m ? -H[U] / 2 : 0,
              K = w === M ? B[U] : H[U],
              Q = w === M ? -H[U] : -B[U],
              Z = t.elements.arrow,
              $ = m && Z ? v(Z) : {
            width: 0,
            height: 0
          },
              ee = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
              te = ee[N],
              ne = ee[I],
              re = ue(0, B[U], $[U]),
              oe = L ? B[U] / 2 - J - re - te - R.mainAxis : K - re - te - R.mainAxis,
              ie = L ? -B[U] / 2 + J + re + ne + R.mainAxis : Q + re + ne + R.mainAxis,
              ae = t.elements.arrow && O(t.elements.arrow),
              se = ae ? "y" === P ? ae.clientTop || 0 : ae.clientLeft || 0 : 0,
              fe = null != (V = null == S ? void 0 : S[P]) ? V : 0,
              ce = z + ie - fe,
              pe = ue(m ? a(X, z + oe - fe - se) : X, z, m ? i(G, ce) : G);
          W[P] = pe, q[P] = pe - z;
        }

        if (c) {
          var le,
              de = "x" === P ? j : A,
              he = "x" === P ? E : D,
              me = W[k],
              ve = "y" === k ? "height" : "width",
              ge = me + b[de],
              ye = me - b[he],
              be = -1 !== [j, A].indexOf(x),
              xe = null != (le = null == S ? void 0 : S[k]) ? le : 0,
              we = be ? ge : me - B[ve] - H[ve] - xe + R.altAxis,
              Oe = be ? me + B[ve] + H[ve] - xe - R.altAxis : ye,
              je = m && be ? function (e, t, n) {
            var r = ue(e, t, n);
            return r > n ? n : r;
          }(we, me, Oe) : ue(m ? we : ge, me, m ? Oe : ye);
          W[k] = je, q[k] = je - me;
        }

        t.modifiersData[r] = q;
      }
    },
    requiresIfExists: ["offset"]
  };
  var de = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function fn(e) {
      var t,
          n = e.state,
          r = e.name,
          o = e.options,
          i = n.elements.arrow,
          a = n.modifiersData.popperOffsets,
          s = C(n.placement),
          f = F(s),
          c = [A, D].indexOf(s) >= 0 ? "height" : "width";

      if (i && a) {
        var p = function (e, t) {
          return z("number" != typeof (e = "function" == typeof e ? e(Object.assign({}, t.rects, {
            placement: t.placement
          })) : e) ? e : X(e, P));
        }(o.padding, n),
            u = v(i),
            l = "y" === f ? j : A,
            d = "y" === f ? E : D,
            h = n.rects.reference[c] + n.rects.reference[f] - a[f] - n.rects.popper[c],
            m = a[f] - n.rects.reference[f],
            g = O(i),
            y = g ? "y" === f ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
            b = h / 2 - m / 2,
            x = p[l],
            w = y - u[c] - p[d],
            L = y / 2 - u[c] / 2 + b,
            M = ue(x, L, w),
            k = f;

        n.modifiersData[r] = ((t = {})[k] = M, t.centerOffset = M - L, t);
      }
    },
    effect: function effect(e) {
      var t = e.state,
          n = e.options.element,
          r = void 0 === n ? "[data-popper-arrow]" : n;
      null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && q(t.elements.popper, r) && (t.elements.arrow = r);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };

  function he(e, t, n) {
    return void 0 === n && (n = {
      x: 0,
      y: 0
    }), {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x
    };
  }

  function me(e) {
    return [j, D, E, A].some(function (t) {
      return e[t] >= 0;
    });
  }

  var ve = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: function fn(e) {
      var t = e.state,
          n = e.name,
          r = t.rects.reference,
          o = t.rects.popper,
          i = t.modifiersData.preventOverflow,
          a = Y(t, {
        elementContext: "reference"
      }),
          s = Y(t, {
        altBoundary: !0
      }),
          f = he(a, r),
          c = he(s, o, i),
          p = me(f),
          u = me(c);
      t.modifiersData[n] = {
        referenceClippingOffsets: f,
        popperEscapeOffsets: c,
        isReferenceHidden: p,
        hasPopperEscaped: u
      }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-reference-hidden": p,
        "data-popper-escaped": u
      });
    }
  },
      ge = K({
    defaultModifiers: [Z, $, ne, re]
  }),
      ye = [Z, $, ne, re, oe, pe, le, de, ve],
      be = K({
    defaultModifiers: ye
  });
  e.applyStyles = re, e.arrow = de, e.computeStyles = ne, e.createPopper = be, e.createPopperLite = ge, e.defaultModifiers = ye, e.detectOverflow = Y, e.eventListeners = Z, e.flip = pe, e.hide = ve, e.offset = oe, e.popperGenerator = K, e.popperOffsets = $, e.preventOverflow = le, Object.defineProperty(e, "__esModule", {
    value: !0
  });
});
//# sourceMappingURL=all.js.map
