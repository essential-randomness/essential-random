var Component = (() => {
  var Nn = Object.create;
  var Qe = Object.defineProperty;
  var Tn = Object.getOwnPropertyDescriptor;
  var Cn = Object.getOwnPropertyNames;
  var An = Object.getPrototypeOf,
    Mn = Object.prototype.hasOwnProperty;
  var _ = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    qn = (e, t) => {
      for (var r in t) Qe(e, r, { get: t[r], enumerable: !0 });
    },
    Or = (e, t, r, a) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let n of Cn(t))
          !Mn.call(e, n) &&
            n !== r &&
            Qe(e, n, {
              get: () => t[n],
              enumerable: !(a = Tn(t, n)) || a.enumerable,
            });
      return e;
    };
  var Lr = (e, t, r) => (
      (r = e != null ? Nn(An(e)) : {}),
      Or(
        t || !e || !e.__esModule
          ? Qe(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    jn = (e) => Or(Qe({}, "__esModule", { value: !0 }), e);
  var Tr = _((Ki, Nr) => {
    Nr.exports = _jsx_runtime;
  });
  var _e = _((Pt) => {
    "use strict";
    Object.defineProperty(Pt, "__esModule", { value: !0 });
    Pt.default = In;
    function In(e) {
      return e && e.__esModule ? e : { default: e };
    }
  });
  var Rt = _((wt) => {
    "use strict";
    Object.defineProperty(wt, "__esModule", { value: !0 });
    wt.default = $n;
    function $n(e, t) {
      if (e == null) return {};
      var r = {},
        a = Object.keys(e),
        n,
        o;
      for (o = 0; o < a.length; o++)
        (n = a[o]), !(t.indexOf(n) >= 0) && (r[n] = e[n]);
      return r;
    }
  });
  var ge = _((Yi, Cr) => {
    Cr.exports = React;
  });
  var St = _((Et) => {
    "use strict";
    Object.defineProperty(Et, "__esModule", { value: !0 });
    Et.default = Dn;
    function Dn(e) {
      return function () {
        var t = this,
          r = arguments;
        return new Promise(function (a, n) {
          var o = e.apply(t, r);
          function s(i) {
            Ar(o, a, n, s, c, "next", i);
          }
          function c(i) {
            Ar(o, a, n, s, c, "throw", i);
          }
          s(void 0);
        });
      };
    }
    function Ar(e, t, r, a, n, o, s) {
      try {
        var c = e[o](s),
          i = c.value;
      } catch (l) {
        r(l);
        return;
      }
      c.done ? t(i) : Promise.resolve(i).then(a, n);
    }
  });
  var we = _((bt) => {
    "use strict";
    Object.defineProperty(bt, "__esModule", { value: !0 });
    bt.default = Un;
    function Un() {
      return xt.apply(this, arguments);
    }
    function xt() {
      return (
        (xt =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var a in r)
                Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
            }
            return e;
          }),
        xt.apply(this, arguments)
      );
    }
  });
  var Je = _((Ot) => {
    "use strict";
    Object.defineProperty(Ot, "__esModule", { value: !0 });
    Ot.default = kn;
    function kn(e) {
      if (e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var t = Mr();
      if (t && t.has(e)) return t.get(e);
      var r = {},
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
          var o = a ? Object.getOwnPropertyDescriptor(e, n) : null;
          o && (o.get || o.set)
            ? Object.defineProperty(r, n, o)
            : (r[n] = e[n]);
        }
      return (r.default = e), t && t.set(e, r), r;
    }
    function Mr() {
      if (typeof WeakMap != "function") return null;
      var e = new WeakMap();
      return (
        (Mr = function () {
          return e;
        }),
        e
      );
    }
  });
  var Re = _((Lt) => {
    "use strict";
    Object.defineProperty(Lt, "__esModule", { value: !0 });
    Lt.removeTrailingSlash = Bn;
    function Bn(e) {
      return e.replace(/\/$/, "") || "/";
    }
  });
  var ve = _((Nt) => {
    "use strict";
    Object.defineProperty(Nt, "__esModule", { value: !0 });
    Nt.parsePath = Hn;
    function Hn(e) {
      let t = e.indexOf("#"),
        r = e.indexOf("?"),
        a = r > -1 && (t < 0 || r < t);
      return a || t > -1
        ? {
            pathname: e.substring(0, a ? r : t),
            query: a ? e.substring(r, t > -1 ? t : void 0) : "",
            hash: t > -1 ? e.slice(t) : "",
          }
        : { pathname: e, query: "", hash: "" };
    }
  });
  var Ye = _((H, qr) => {
    "use strict";
    Object.defineProperty(H, "__esModule", { value: !0 });
    H.normalizePathTrailingSlash = void 0;
    var Wn = Re(),
      zn = ve(),
      Vn = (e) => {
        if (!e.startsWith("/")) return e;
        let { pathname: t, query: r, hash: a } = zn.parsePath(e);
        return `${Wn.removeTrailingSlash(t)}${r}${a}`;
      };
    H.normalizePathTrailingSlash = Vn;
    (typeof H.default == "function" ||
      (typeof H.default == "object" && H.default !== null)) &&
      typeof H.default.__esModule > "u" &&
      (Object.defineProperty(H.default, "__esModule", { value: !0 }),
      Object.assign(H.default, H),
      (qr.exports = H.default));
  });
  var jr = _((Tt) => {
    "use strict";
    Object.defineProperty(Tt, "__esModule", { value: !0 });
    Tt.default = Fn;
    function Fn(e, t = "") {
      return (
        (e === "/"
          ? "/index"
          : /^\/index(\/|$)/.test(e)
          ? `/index${e}`
          : `${e}`) + t
      );
    }
  });
  var $r = _((K, Ir) => {
    "use strict";
    Object.defineProperty(K, "__esModule", { value: !0 });
    K.__unsafeCreateTrustedScriptURL = Gn;
    var Ct;
    function Xn() {
      if (typeof Ct > "u" && typeof window < "u") {
        var e;
        Ct =
          ((e = window.trustedTypes) == null
            ? void 0
            : e.createPolicy("nextjs", {
                createHTML: (t) => t,
                createScript: (t) => t,
                createScriptURL: (t) => t,
              })) || null;
      }
      return Ct;
    }
    function Gn(e) {
      var t;
      return ((t = Xn()) == null ? void 0 : t.createScriptURL(e)) || e;
    }
    (typeof K.default == "function" ||
      (typeof K.default == "object" && K.default !== null)) &&
      typeof K.default.__esModule > "u" &&
      (Object.defineProperty(K.default, "__esModule", { value: !0 }),
      Object.assign(K.default, K),
      (Ir.exports = K.default));
  });
  var Ze = _(($, Dr) => {
    "use strict";
    Object.defineProperty($, "__esModule", { value: !0 });
    $.cancelIdleCallback = $.requestIdleCallback = void 0;
    var Kn =
      (typeof self < "u" &&
        self.requestIdleCallback &&
        self.requestIdleCallback.bind(window)) ||
      function (e) {
        let t = Date.now();
        return setTimeout(function () {
          e({
            didTimeout: !1,
            timeRemaining: function () {
              return Math.max(0, 50 - (Date.now() - t));
            },
          });
        }, 1);
      };
    $.requestIdleCallback = Kn;
    var Qn =
      (typeof self < "u" &&
        self.cancelIdleCallback &&
        self.cancelIdleCallback.bind(window)) ||
      function (e) {
        return clearTimeout(e);
      };
    $.cancelIdleCallback = Qn;
    (typeof $.default == "function" ||
      (typeof $.default == "object" && $.default !== null)) &&
      typeof $.default.__esModule > "u" &&
      (Object.defineProperty($.default, "__esModule", { value: !0 }),
      Object.assign($.default, $),
      (Dr.exports = $.default));
  });
  var Xr = _((D, Fr) => {
    "use strict";
    Object.defineProperty(D, "__esModule", { value: !0 });
    D.markAssetError = Ee;
    D.isAssetError = ro;
    D.getClientBuildManifest = Vr;
    D.createRouteLoader = no;
    var Jn = _e().default,
      ol = Jn(jr()),
      Yn = $r(),
      Br = Ze(),
      Hr = 3800;
    function Ur(e, t, r) {
      let a = t.get(e);
      if (a) return "future" in a ? a.future : Promise.resolve(a);
      let n,
        o = new Promise((s) => {
          n = s;
        });
      return (
        t.set(e, (a = { resolve: n, future: o })),
        r
          ? r()
              .then((s) => (n(s), s))
              .catch((s) => {
                throw (t.delete(e), s);
              })
          : o
      );
    }
    function Zn(e) {
      try {
        return (
          (e = document.createElement("link")),
          (!!window.MSInputMethodContext && !!document.documentMode) ||
            e.relList.supports("prefetch")
        );
      } catch {
        return !1;
      }
    }
    var eo = Zn();
    function to(e, t, r) {
      return new Promise((a, n) => {
        let o = `
      link[rel="prefetch"][href^="${e}"],
      link[rel="preload"][href^="${e}"],
      script[src^="${e}"]`;
        if (document.querySelector(o)) return a();
        (r = document.createElement("link")),
          t && (r.as = t),
          (r.rel = "prefetch"),
          (r.crossOrigin = ""),
          (r.onload = a),
          (r.onerror = n),
          (r.href = e),
          document.head.appendChild(r);
      });
    }
    var Wr = Symbol("ASSET_LOAD_ERROR");
    function Ee(e) {
      return Object.defineProperty(e, Wr, {});
    }
    function ro(e) {
      return e && Wr in e;
    }
    function ao(e, t) {
      return new Promise((r, a) => {
        (t = document.createElement("script")),
          (t.onload = r),
          (t.onerror = () => a(Ee(new Error(`Failed to load script: ${e}`)))),
          (t.crossOrigin = ""),
          (t.src = e),
          document.body.appendChild(t);
      });
    }
    function zr(e, t, r) {
      return new Promise((a, n) => {
        let o = !1;
        e
          .then((s) => {
            (o = !0), a(s);
          })
          .catch(n),
          Br.requestIdleCallback(() =>
            setTimeout(() => {
              o || n(r);
            }, t)
          );
      });
    }
    function Vr() {
      if (self.__BUILD_MANIFEST) return Promise.resolve(self.__BUILD_MANIFEST);
      let e = new Promise((t) => {
        let r = self.__BUILD_MANIFEST_CB;
        self.__BUILD_MANIFEST_CB = () => {
          t(self.__BUILD_MANIFEST), r && r();
        };
      });
      return zr(e, Hr, Ee(new Error("Failed to load client build manifest")));
    }
    function kr(e, t) {
      return Vr().then((r) => {
        if (!(t in r)) throw Ee(new Error(`Failed to lookup route: ${t}`));
        let a = r[t].map((n) => e + "/_next/" + encodeURI(n));
        return {
          scripts: a
            .filter((n) => n.endsWith(".js"))
            .map((n) => Yn.__unsafeCreateTrustedScriptURL(n)),
          css: a.filter((n) => n.endsWith(".css")),
        };
      });
    }
    function no(e) {
      let t = new Map(),
        r = new Map(),
        a = new Map(),
        n = new Map();
      function o(c) {
        {
          let i = r.get(c.toString());
          return (
            i ||
            (document.querySelector(`script[src^="${c}"]`)
              ? Promise.resolve()
              : (r.set(c.toString(), (i = ao(c))), i))
          );
        }
      }
      function s(c) {
        let i = a.get(c);
        return (
          i ||
          (a.set(
            c,
            (i = fetch(c)
              .then((l) => {
                if (!l.ok) throw new Error(`Failed to load stylesheet: ${c}`);
                return l.text().then((u) => ({ href: c, content: u }));
              })
              .catch((l) => {
                throw Ee(l);
              }))
          ),
          i)
        );
      }
      return {
        whenEntrypoint(c) {
          return Ur(c, t);
        },
        onEntrypoint(c, i) {
          (i
            ? Promise.resolve()
                .then(() => i())
                .then(
                  (l) => ({ component: (l && l.default) || l, exports: l }),
                  (l) => ({ error: l })
                )
            : Promise.resolve(void 0)
          ).then((l) => {
            let u = t.get(c);
            u && "resolve" in u
              ? l && (t.set(c, l), u.resolve(l))
              : (l ? t.set(c, l) : t.delete(c), n.delete(c));
          });
        },
        loadRoute(c, i) {
          return Ur(c, n, () => {
            let l;
            return zr(
              kr(e, c)
                .then(({ scripts: u, css: d }) =>
                  Promise.all([
                    t.has(c) ? [] : Promise.all(u.map(o)),
                    Promise.all(d.map(s)),
                  ])
                )
                .then((u) =>
                  this.whenEntrypoint(c).then((d) => ({
                    entrypoint: d,
                    styles: u[1],
                  }))
                ),
              Hr,
              Ee(new Error(`Route did not complete loading: ${c}`))
            )
              .then(({ entrypoint: u, styles: d }) => {
                let f = Object.assign({ styles: d }, u);
                return "error" in u ? u : f;
              })
              .catch((u) => {
                if (i) throw u;
                return { error: u };
              })
              .finally(() => l?.());
          });
        },
        prefetch(c) {
          let i;
          return (i = navigator.connection) &&
            (i.saveData || /2g/.test(i.effectiveType))
            ? Promise.resolve()
            : kr(e, c)
                .then((l) =>
                  Promise.all(
                    eo ? l.scripts.map((u) => to(u.toString(), "script")) : []
                  )
                )
                .then(() => {
                  Br.requestIdleCallback(() =>
                    this.loadRoute(c, !0).catch(() => {})
                  );
                })
                .catch(() => {});
        },
      };
    }
    (typeof D.default == "function" ||
      (typeof D.default == "object" && D.default !== null)) &&
      typeof D.default.__esModule > "u" &&
      (Object.defineProperty(D.default, "__esModule", { value: !0 }),
      Object.assign(D.default, D),
      (Fr.exports = D.default));
  });
  var Gr = _((et) => {
    "use strict";
    Object.defineProperty(et, "__esModule", { value: !0 });
    et.HeadManagerContext = void 0;
    var oo = _e().default,
      so = oo(ge()),
      io = so.default.createContext({});
    et.HeadManagerContext = io;
  });
  var Yr = _((U, Jr) => {
    "use strict";
    Object.defineProperty(U, "__esModule", { value: !0 });
    U.default = lo;
    U.isEqualNode = Qr;
    U.DOMAttributeNames = void 0;
    function lo() {
      return {
        mountedInstances: new Set(),
        updateHead: (e) => {
          let t = {};
          e.forEach((n) => {
            if (n.type === "link" && n.props["data-optimized-fonts"]) {
              if (
                document.querySelector(
                  `style[data-href="${n.props["data-href"]}"]`
                )
              )
                return;
              (n.props.href = n.props["data-href"]),
                (n.props["data-href"] = void 0);
            }
            let o = t[n.type] || [];
            o.push(n), (t[n.type] = o);
          });
          let r = t.title ? t.title[0] : null,
            a = "";
          if (r) {
            let { children: n } = r.props;
            a = typeof n == "string" ? n : Array.isArray(n) ? n.join("") : "";
          }
          a !== document.title && (document.title = a),
            ["meta", "base", "link", "style", "script"].forEach((n) => {
              uo(n, t[n] || []);
            });
        },
      };
    }
    var Kr = {
      acceptCharset: "accept-charset",
      className: "class",
      htmlFor: "for",
      httpEquiv: "http-equiv",
      noModule: "noModule",
    };
    U.DOMAttributeNames = Kr;
    function co({ type: e, props: t }) {
      let r = document.createElement(e);
      for (let o in t) {
        if (
          !t.hasOwnProperty(o) ||
          o === "children" ||
          o === "dangerouslySetInnerHTML" ||
          t[o] === void 0
        )
          continue;
        let s = Kr[o] || o.toLowerCase();
        e === "script" && (s === "async" || s === "defer" || s === "noModule")
          ? (r[s] = !!t[o])
          : r.setAttribute(s, t[o]);
      }
      let { children: a, dangerouslySetInnerHTML: n } = t;
      return (
        n
          ? (r.innerHTML = n.__html || "")
          : a &&
            (r.textContent =
              typeof a == "string" ? a : Array.isArray(a) ? a.join("") : ""),
        r
      );
    }
    function Qr(e, t) {
      if (e instanceof HTMLElement && t instanceof HTMLElement) {
        let r = t.getAttribute("nonce");
        if (r && !e.getAttribute("nonce")) {
          let a = t.cloneNode(!0);
          return (
            a.setAttribute("nonce", ""),
            (a.nonce = r),
            r === e.nonce && e.isEqualNode(a)
          );
        }
      }
      return e.isEqualNode(t);
    }
    function uo(e, t) {
      let r = document.getElementsByTagName("head")[0],
        a = r.querySelector("meta[name=next-head-count]"),
        n = Number(a.content),
        o = [];
      for (
        let i = 0, l = a.previousElementSibling;
        i < n;
        i++, l = l?.previousElementSibling || null
      ) {
        var s;
        (l == null || (s = l.tagName) == null ? void 0 : s.toLowerCase()) ===
          e && o.push(l);
      }
      let c = t.map(co).filter((i) => {
        for (let l = 0, u = o.length; l < u; l++) {
          let d = o[l];
          if (Qr(d, i)) return o.splice(l, 1), !1;
        }
        return !0;
      });
      o.forEach((i) => {
        var l;
        return (l = i.parentNode) == null ? void 0 : l.removeChild(i);
      }),
        c.forEach((i) => r.insertBefore(i, a)),
        (a.content = (n - o.length + c.length).toString());
    }
    (typeof U.default == "function" ||
      (typeof U.default == "object" && U.default !== null)) &&
      typeof U.default.__esModule > "u" &&
      (Object.defineProperty(U.default, "__esModule", { value: !0 }),
      Object.assign(U.default, U),
      (Jr.exports = U.default));
  });
  var ta = _((k, ea) => {
    "use strict";
    Object.defineProperty(k, "__esModule", { value: !0 });
    k.handleClientScriptLoad = Zr;
    k.initScriptLoader = Po;
    k.default = void 0;
    var fo = we().default,
      ho = Je().default,
      po = Rt().default,
      At = ho(ge()),
      mo = Gr(),
      _o = Yr(),
      qt = Ze(),
      Mt = new Map(),
      Se = new Set(),
      go = [
        "onLoad",
        "onReady",
        "dangerouslySetInnerHTML",
        "children",
        "onError",
        "strategy",
      ],
      xe = (e) => {
        let {
            src: t,
            id: r,
            onLoad: a = () => {},
            onReady: n = null,
            dangerouslySetInnerHTML: o,
            children: s = "",
            strategy: c = "afterInteractive",
            onError: i,
          } = e,
          l = r || t;
        if (l && Se.has(l)) return;
        if (Mt.has(t)) {
          Se.add(l), Mt.get(t).then(a, i);
          return;
        }
        let u = document.createElement("script"),
          d = new Promise((f, h) => {
            u.addEventListener("load", function (m) {
              f(), a && a.call(this, m), n && n();
            }),
              u.addEventListener("error", function (m) {
                h(m);
              });
          }).catch(function (f) {
            i && i(f);
          });
        t && Mt.set(t, d),
          Se.add(l),
          o
            ? (u.innerHTML = o.__html || "")
            : s
            ? (u.textContent =
                typeof s == "string" ? s : Array.isArray(s) ? s.join("") : "")
            : t && (u.src = t);
        for (let [f, h] of Object.entries(e)) {
          if (h === void 0 || go.includes(f)) continue;
          let m = _o.DOMAttributeNames[f] || f.toLowerCase();
          u.setAttribute(m, h);
        }
        c === "worker" && u.setAttribute("type", "text/partytown"),
          u.setAttribute("data-nscript", c),
          document.body.appendChild(u);
      };
    function Zr(e) {
      let { strategy: t = "afterInteractive" } = e;
      t === "lazyOnload"
        ? window.addEventListener("load", () => {
            qt.requestIdleCallback(() => xe(e));
          })
        : xe(e);
    }
    function vo(e) {
      document.readyState === "complete"
        ? qt.requestIdleCallback(() => xe(e))
        : window.addEventListener("load", () => {
            qt.requestIdleCallback(() => xe(e));
          });
    }
    function yo() {
      [
        ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
        ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
      ].forEach((t) => {
        let r = t.id || t.getAttribute("src");
        Se.add(r);
      });
    }
    function Po(e) {
      e.forEach(Zr), yo();
    }
    function wo(e) {
      let {
          id: t,
          src: r = "",
          onLoad: a = () => {},
          onReady: n = null,
          strategy: o = "afterInteractive",
          onError: s,
        } = e,
        c = po(e, ["id", "src", "onLoad", "onReady", "strategy", "onError"]),
        {
          updateScripts: i,
          scripts: l,
          getIsSsr: u,
        } = At.useContext(mo.HeadManagerContext);
      return (
        At.useEffect(() => {
          let d = t || r;
          n && d && Se.has(d) && n();
        }, [n, t, r]),
        At.useEffect(() => {
          o === "afterInteractive" ? xe(e) : o === "lazyOnload" && vo(e);
        }, [e, o]),
        (o === "beforeInteractive" || o === "worker") &&
          (i
            ? ((l[o] = (l[o] || []).concat([
                fo({ id: t, src: r, onLoad: a, onReady: n, onError: s }, c),
              ])),
              i(l))
            : u && u()
            ? Se.add(t || r)
            : u && !u() && xe(e)),
        null
      );
    }
    var Ro = wo;
    k.default = Ro;
    (typeof k.default == "function" ||
      (typeof k.default == "object" && k.default !== null)) &&
      typeof k.default.__esModule > "u" &&
      (Object.defineProperty(k.default, "__esModule", { value: !0 }),
      Object.assign(k.default, k),
      (ea.exports = k.default));
  });
  var aa = _((tt) => {
    "use strict";
    Object.defineProperty(tt, "__esModule", { value: !0 });
    tt.getObjectClassLabel = ra;
    tt.isPlainObject = Eo;
    function ra(e) {
      return Object.prototype.toString.call(e);
    }
    function Eo(e) {
      if (ra(e) !== "[object Object]") return !1;
      let t = Object.getPrototypeOf(e);
      return t === null || t.hasOwnProperty("isPrototypeOf");
    }
  });
  var oa = _((rt) => {
    "use strict";
    Object.defineProperty(rt, "__esModule", { value: !0 });
    rt.default = na;
    rt.getProperError = xo;
    var So = aa();
    function na(e) {
      return (
        typeof e == "object" && e !== null && "name" in e && "message" in e
      );
    }
    function xo(e) {
      return na(e)
        ? e
        : new Error(So.isPlainObject(e) ? JSON.stringify(e) : e + "");
    }
  });
  var sa = _((jt) => {
    "use strict";
    Object.defineProperty(jt, "__esModule", { value: !0 });
    jt.getSortedRoutes = bo;
    var qe = class {
      insert(t) {
        this._insert(t.split("/").filter(Boolean), [], !1);
      }
      smoosh() {
        return this._smoosh();
      }
      _smoosh(t = "/") {
        let r = [...this.children.keys()].sort();
        this.slugName !== null && r.splice(r.indexOf("[]"), 1),
          this.restSlugName !== null && r.splice(r.indexOf("[...]"), 1),
          this.optionalRestSlugName !== null &&
            r.splice(r.indexOf("[[...]]"), 1);
        let a = r
          .map((n) => this.children.get(n)._smoosh(`${t}${n}/`))
          .reduce((n, o) => [...n, ...o], []);
        if (
          (this.slugName !== null &&
            a.push(
              ...this.children.get("[]")._smoosh(`${t}[${this.slugName}]/`)
            ),
          !this.placeholder)
        ) {
          let n = t === "/" ? "/" : t.slice(0, -1);
          if (this.optionalRestSlugName != null)
            throw new Error(
              `You cannot define a route with the same specificity as a optional catch-all route ("${n}" and "${n}[[...${this.optionalRestSlugName}]]").`
            );
          a.unshift(n);
        }
        return (
          this.restSlugName !== null &&
            a.push(
              ...this.children
                .get("[...]")
                ._smoosh(`${t}[...${this.restSlugName}]/`)
            ),
          this.optionalRestSlugName !== null &&
            a.push(
              ...this.children
                .get("[[...]]")
                ._smoosh(`${t}[[...${this.optionalRestSlugName}]]/`)
            ),
          a
        );
      }
      _insert(t, r, a) {
        if (t.length === 0) {
          this.placeholder = !1;
          return;
        }
        if (a) throw new Error("Catch-all must be the last part of the URL.");
        let n = t[0];
        if (n.startsWith("[") && n.endsWith("]")) {
          let c = function (i, l) {
              if (i !== null && i !== l)
                throw new Error(
                  `You cannot use different slug names for the same dynamic path ('${i}' !== '${l}').`
                );
              r.forEach((u) => {
                if (u === l)
                  throw new Error(
                    `You cannot have the same slug name "${l}" repeat within a single dynamic path`
                  );
                if (u.replace(/\W/g, "") === n.replace(/\W/g, ""))
                  throw new Error(
                    `You cannot have the slug names "${u}" and "${l}" differ only by non-word symbols within a single dynamic path`
                  );
              }),
                r.push(l);
            },
            o = n.slice(1, -1),
            s = !1;
          if (
            (o.startsWith("[") &&
              o.endsWith("]") &&
              ((o = o.slice(1, -1)), (s = !0)),
            o.startsWith("...") && ((o = o.substring(3)), (a = !0)),
            o.startsWith("[") || o.endsWith("]"))
          )
            throw new Error(
              `Segment names may not start or end with extra brackets ('${o}').`
            );
          if (o.startsWith("."))
            throw new Error(
              `Segment names may not start with erroneous periods ('${o}').`
            );
          if (a)
            if (s) {
              if (this.restSlugName != null)
                throw new Error(
                  `You cannot use both an required and optional catch-all route at the same level ("[...${this.restSlugName}]" and "${t[0]}" ).`
                );
              c(this.optionalRestSlugName, o),
                (this.optionalRestSlugName = o),
                (n = "[[...]]");
            } else {
              if (this.optionalRestSlugName != null)
                throw new Error(
                  `You cannot use both an optional and required catch-all route at the same level ("[[...${this.optionalRestSlugName}]]" and "${t[0]}").`
                );
              c(this.restSlugName, o), (this.restSlugName = o), (n = "[...]");
            }
          else {
            if (s)
              throw new Error(
                `Optional route parameters are not yet supported ("${t[0]}").`
              );
            c(this.slugName, o), (this.slugName = o), (n = "[]");
          }
        }
        this.children.has(n) || this.children.set(n, new qe()),
          this.children.get(n)._insert(t.slice(1), r, a);
      }
      constructor() {
        (this.placeholder = !0),
          (this.children = new Map()),
          (this.slugName = null),
          (this.restSlugName = null),
          (this.optionalRestSlugName = null);
      }
    };
    function bo(e) {
      let t = new qe();
      return e.forEach((r) => t.insert(r)), t.smoosh();
    }
  });
  var $t = _((It) => {
    "use strict";
    Object.defineProperty(It, "__esModule", { value: !0 });
    It.isDynamicRoute = Lo;
    var Oo = /\/\[[^/]+?\](?=\/|$)/;
    function Lo(e) {
      return Oo.test(e);
    }
  });
  var ia = _((at) => {
    "use strict";
    Object.defineProperty(at, "__esModule", { value: !0 });
    Object.defineProperty(at, "getSortedRoutes", {
      enumerable: !0,
      get: function () {
        return No.getSortedRoutes;
      },
    });
    Object.defineProperty(at, "isDynamicRoute", {
      enumerable: !0,
      get: function () {
        return To.isDynamicRoute;
      },
    });
    var No = sa(),
      To = $t();
  });
  var la = _((Dt) => {
    "use strict";
    Object.defineProperty(Dt, "__esModule", { value: !0 });
    Dt.normalizePathSep = Co;
    function Co(e) {
      return e.replace(/\\/g, "/");
    }
  });
  var ca = _((Ut) => {
    "use strict";
    Object.defineProperty(Ut, "__esModule", { value: !0 });
    Ut.denormalizePagePath = qo;
    var Ao = ia(),
      Mo = la();
    function qo(e) {
      let t = Mo.normalizePathSep(e);
      return t.startsWith("/index/") && !Ao.isDynamicRoute(t)
        ? t.slice(6)
        : t !== "/index"
        ? t
        : "/";
    }
  });
  var nt = _((kt) => {
    "use strict";
    Object.defineProperty(kt, "__esModule", { value: !0 });
    kt.normalizeLocalePath = jo;
    function jo(e, t) {
      let r,
        a = e.split("/");
      return (
        (t || []).some((n) =>
          a[1] && a[1].toLowerCase() === n.toLowerCase()
            ? ((r = n), a.splice(1, 1), (e = a.join("/") || "/"), !0)
            : !1
        ),
        { pathname: e, detectedLocale: r }
      );
    }
  });
  var ua = _((Bt) => {
    "use strict";
    Object.defineProperty(Bt, "__esModule", { value: !0 });
    Bt.default = Io;
    function Io() {
      let e = Object.create(null);
      return {
        on(t, r) {
          (e[t] || (e[t] = [])).push(r);
        },
        off(t, r) {
          e[t] && e[t].splice(e[t].indexOf(r) >>> 0, 1);
        },
        emit(t, ...r) {
          (e[t] || []).slice().map((a) => {
            a(...r);
          });
        },
      };
    }
  });
  var ot = _((N) => {
    "use strict";
    Object.defineProperty(N, "__esModule", { value: !0 });
    N.execOnce = Do;
    N.getLocationOrigin = da;
    N.getURL = Bo;
    N.getDisplayName = fa;
    N.isResSent = ha;
    N.normalizeRepeatedSlashes = Ho;
    N.loadGetInitialProps = pa;
    N.ST = N.SP = N.warnOnce = N.isAbsoluteUrl = void 0;
    var $o = St().default;
    function Do(e) {
      let t = !1,
        r;
      return (...a) => (t || ((t = !0), (r = e(...a))), r);
    }
    var Uo = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      ko = (e) => Uo.test(e);
    N.isAbsoluteUrl = ko;
    function da() {
      let { protocol: e, hostname: t, port: r } = window.location;
      return `${e}//${t}${r ? ":" + r : ""}`;
    }
    function Bo() {
      let { href: e } = window.location,
        t = da();
      return e.substring(t.length);
    }
    function fa(e) {
      return typeof e == "string" ? e : e.displayName || e.name || "Unknown";
    }
    function ha(e) {
      return e.finished || e.headersSent;
    }
    function Ho(e) {
      let t = e.split("?");
      return (
        t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
        (t[1] ? `?${t.slice(1).join("?")}` : "")
      );
    }
    function pa(e, t) {
      return Ht.apply(this, arguments);
    }
    function Ht() {
      return (
        (Ht = $o(function* (e, t) {
          if (!1) var r;
          let a = t.res || (t.ctx && t.ctx.res);
          if (!e.getInitialProps)
            return t.ctx && t.Component
              ? { pageProps: yield pa(t.Component, t.ctx) }
              : {};
          let n = yield e.getInitialProps(t);
          if (a && ha(a)) return n;
          if (!n) {
            let o = `"${fa(
              e
            )}.getInitialProps()" should resolve to an object. But found "${n}" instead.`;
            throw new Error(o);
          }
          return n;
        })),
        Ht.apply(this, arguments)
      );
    }
    var Wo = (e) => {},
      ma = typeof performance < "u";
    N.SP = ma;
    var zo =
      ma &&
      ["mark", "measure", "getEntriesByName"].every(
        (e) => typeof performance[e] == "function"
      );
    N.ST = zo;
    var Wt = class extends Error {};
    N.DecodeError = Wt;
    var zt = class extends Error {};
    N.NormalizeError = zt;
    var Vt = class extends Error {
      constructor(t) {
        super(),
          (this.code = "ENOENT"),
          (this.message = `Cannot find module for page: ${t}`);
      }
    };
    N.PageNotFoundError = Vt;
    var Ft = class extends Error {
      constructor(t, r) {
        super(),
          (this.message = `Failed to load static file for page: ${t} ${r}`);
      }
    };
    N.MissingStaticPage = Ft;
    var Xt = class extends Error {
      constructor() {
        super(),
          (this.code = "ENOENT"),
          (this.message = "Cannot find the middleware module");
      }
    };
    N.MiddlewareNotFoundError = Xt;
    N.warnOnce = Wo;
  });
  var Ie = _((je) => {
    "use strict";
    Object.defineProperty(je, "__esModule", { value: !0 });
    je.searchParamsToUrlQuery = Vo;
    je.urlQueryToSearchParams = Fo;
    je.assign = Xo;
    function Vo(e) {
      let t = {};
      return (
        e.forEach((r, a) => {
          typeof t[a] > "u"
            ? (t[a] = r)
            : Array.isArray(t[a])
            ? t[a].push(r)
            : (t[a] = [t[a], r]);
        }),
        t
      );
    }
    function _a(e) {
      return typeof e == "string" ||
        (typeof e == "number" && !isNaN(e)) ||
        typeof e == "boolean"
        ? String(e)
        : "";
    }
    function Fo(e) {
      let t = new URLSearchParams();
      return (
        Object.entries(e).forEach(([r, a]) => {
          Array.isArray(a)
            ? a.forEach((n) => t.append(r, _a(n)))
            : t.set(r, _a(a));
        }),
        t
      );
    }
    function Xo(e, ...t) {
      return (
        t.forEach((r) => {
          Array.from(r.keys()).forEach((a) => e.delete(a)),
            r.forEach((a, n) => e.append(n, a));
        }),
        e
      );
    }
  });
  var st = _((Gt) => {
    "use strict";
    Object.defineProperty(Gt, "__esModule", { value: !0 });
    Gt.parseRelativeUrl = Qo;
    var Go = ot(),
      Ko = Ie();
    function Qo(e, t) {
      let r = new URL(
          typeof window > "u" ? "http://n" : Go.getLocationOrigin()
        ),
        a = t
          ? new URL(t, r)
          : e.startsWith(".")
          ? new URL(typeof window > "u" ? "http://n" : window.location.href)
          : r,
        {
          pathname: n,
          searchParams: o,
          search: s,
          hash: c,
          href: i,
          origin: l,
        } = new URL(e, a);
      if (l !== r.origin)
        throw new Error(
          `invariant: invalid relative URL, router received ${e}`
        );
      return {
        pathname: n,
        query: Ko.searchParamsToUrlQuery(o),
        search: s,
        hash: c,
        href: i.slice(r.origin.length),
      };
    }
  });
  var Yt = _((se) => {
    "use strict";
    Object.defineProperty(se, "__esModule", { value: !0 });
    function Jo(e) {
      for (var t = [], r = 0; r < e.length; ) {
        var a = e[r];
        if (a === "*" || a === "+" || a === "?") {
          t.push({ type: "MODIFIER", index: r, value: e[r++] });
          continue;
        }
        if (a === "\\") {
          t.push({ type: "ESCAPED_CHAR", index: r++, value: e[r++] });
          continue;
        }
        if (a === "{") {
          t.push({ type: "OPEN", index: r, value: e[r++] });
          continue;
        }
        if (a === "}") {
          t.push({ type: "CLOSE", index: r, value: e[r++] });
          continue;
        }
        if (a === ":") {
          for (var n = "", o = r + 1; o < e.length; ) {
            var s = e.charCodeAt(o);
            if (
              (s >= 48 && s <= 57) ||
              (s >= 65 && s <= 90) ||
              (s >= 97 && s <= 122) ||
              s === 95
            ) {
              n += e[o++];
              continue;
            }
            break;
          }
          if (!n) throw new TypeError("Missing parameter name at " + r);
          t.push({ type: "NAME", index: r, value: n }), (r = o);
          continue;
        }
        if (a === "(") {
          var c = 1,
            i = "",
            o = r + 1;
          if (e[o] === "?")
            throw new TypeError('Pattern cannot start with "?" at ' + o);
          for (; o < e.length; ) {
            if (e[o] === "\\") {
              i += e[o++] + e[o++];
              continue;
            }
            if (e[o] === ")") {
              if ((c--, c === 0)) {
                o++;
                break;
              }
            } else if (e[o] === "(" && (c++, e[o + 1] !== "?"))
              throw new TypeError("Capturing groups are not allowed at " + o);
            i += e[o++];
          }
          if (c) throw new TypeError("Unbalanced pattern at " + r);
          if (!i) throw new TypeError("Missing pattern at " + r);
          t.push({ type: "PATTERN", index: r, value: i }), (r = o);
          continue;
        }
        t.push({ type: "CHAR", index: r, value: e[r++] });
      }
      return t.push({ type: "END", index: r, value: "" }), t;
    }
    function Kt(e, t) {
      t === void 0 && (t = {});
      for (
        var r = Jo(e),
          a = t.prefixes,
          n = a === void 0 ? "./" : a,
          o = "[^" + be(t.delimiter || "/#?") + "]+?",
          s = [],
          c = 0,
          i = 0,
          l = "",
          u = function (E) {
            if (i < r.length && r[i].type === E) return r[i++].value;
          },
          d = function (E) {
            var L = u(E);
            if (L !== void 0) return L;
            var x = r[i],
              M = x.type,
              S = x.index;
            throw new TypeError(
              "Unexpected " + M + " at " + S + ", expected " + E
            );
          },
          f = function () {
            for (var E = "", L; (L = u("CHAR") || u("ESCAPED_CHAR")); ) E += L;
            return E;
          };
        i < r.length;

      ) {
        var h = u("CHAR"),
          m = u("NAME"),
          P = u("PATTERN");
        if (m || P) {
          var p = h || "";
          n.indexOf(p) === -1 && ((l += p), (p = "")),
            l && (s.push(l), (l = "")),
            s.push({
              name: m || c++,
              prefix: p,
              suffix: "",
              pattern: P || o,
              modifier: u("MODIFIER") || "",
            });
          continue;
        }
        var v = h || u("ESCAPED_CHAR");
        if (v) {
          l += v;
          continue;
        }
        l && (s.push(l), (l = ""));
        var T = u("OPEN");
        if (T) {
          var p = f(),
            O = u("NAME") || "",
            y = u("PATTERN") || "",
            g = f();
          d("CLOSE"),
            s.push({
              name: O || (y ? c++ : ""),
              pattern: O && !y ? o : y,
              prefix: p,
              suffix: g,
              modifier: u("MODIFIER") || "",
            });
          continue;
        }
        d("END");
      }
      return s;
    }
    se.parse = Kt;
    function Yo(e, t) {
      return ga(Kt(e, t), t);
    }
    se.compile = Yo;
    function ga(e, t) {
      t === void 0 && (t = {});
      var r = Qt(t),
        a = t.encode,
        n =
          a === void 0
            ? function (i) {
                return i;
              }
            : a,
        o = t.validate,
        s = o === void 0 ? !0 : o,
        c = e.map(function (i) {
          if (typeof i == "object")
            return new RegExp("^(?:" + i.pattern + ")$", r);
        });
      return function (i) {
        for (var l = "", u = 0; u < e.length; u++) {
          var d = e[u];
          if (typeof d == "string") {
            l += d;
            continue;
          }
          var f = i ? i[d.name] : void 0,
            h = d.modifier === "?" || d.modifier === "*",
            m = d.modifier === "*" || d.modifier === "+";
          if (Array.isArray(f)) {
            if (!m)
              throw new TypeError(
                'Expected "' + d.name + '" to not repeat, but got an array'
              );
            if (f.length === 0) {
              if (h) continue;
              throw new TypeError('Expected "' + d.name + '" to not be empty');
            }
            for (var P = 0; P < f.length; P++) {
              var p = n(f[P], d);
              if (s && !c[u].test(p))
                throw new TypeError(
                  'Expected all "' +
                    d.name +
                    '" to match "' +
                    d.pattern +
                    '", but got "' +
                    p +
                    '"'
                );
              l += d.prefix + p + d.suffix;
            }
            continue;
          }
          if (typeof f == "string" || typeof f == "number") {
            var p = n(String(f), d);
            if (s && !c[u].test(p))
              throw new TypeError(
                'Expected "' +
                  d.name +
                  '" to match "' +
                  d.pattern +
                  '", but got "' +
                  p +
                  '"'
              );
            l += d.prefix + p + d.suffix;
            continue;
          }
          if (!h) {
            var v = m ? "an array" : "a string";
            throw new TypeError('Expected "' + d.name + '" to be ' + v);
          }
        }
        return l;
      };
    }
    se.tokensToFunction = ga;
    function Zo(e, t) {
      var r = [],
        a = Jt(e, r, t);
      return va(a, r, t);
    }
    se.match = Zo;
    function va(e, t, r) {
      r === void 0 && (r = {});
      var a = r.decode,
        n =
          a === void 0
            ? function (o) {
                return o;
              }
            : a;
      return function (o) {
        var s = e.exec(o);
        if (!s) return !1;
        for (
          var c = s[0],
            i = s.index,
            l = Object.create(null),
            u = function (f) {
              if (s[f] === void 0) return "continue";
              var h = t[f - 1];
              h.modifier === "*" || h.modifier === "+"
                ? (l[h.name] = s[f]
                    .split(h.prefix + h.suffix)
                    .map(function (m) {
                      return n(m, h);
                    }))
                : (l[h.name] = n(s[f], h));
            },
            d = 1;
          d < s.length;
          d++
        )
          u(d);
        return { path: c, index: i, params: l };
      };
    }
    se.regexpToFunction = va;
    function be(e) {
      return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    }
    function Qt(e) {
      return e && e.sensitive ? "" : "i";
    }
    function es(e, t) {
      if (!t) return e;
      var r = e.source.match(/\((?!\?)/g);
      if (r)
        for (var a = 0; a < r.length; a++)
          t.push({
            name: a,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: "",
          });
      return e;
    }
    function ts(e, t, r) {
      var a = e.map(function (n) {
        return Jt(n, t, r).source;
      });
      return new RegExp("(?:" + a.join("|") + ")", Qt(r));
    }
    function rs(e, t, r) {
      return ya(Kt(e, r), t, r);
    }
    function ya(e, t, r) {
      r === void 0 && (r = {});
      for (
        var a = r.strict,
          n = a === void 0 ? !1 : a,
          o = r.start,
          s = o === void 0 ? !0 : o,
          c = r.end,
          i = c === void 0 ? !0 : c,
          l = r.encode,
          u =
            l === void 0
              ? function (E) {
                  return E;
                }
              : l,
          d = "[" + be(r.endsWith || "") + "]|$",
          f = "[" + be(r.delimiter || "/#?") + "]",
          h = s ? "^" : "",
          m = 0,
          P = e;
        m < P.length;
        m++
      ) {
        var p = P[m];
        if (typeof p == "string") h += be(u(p));
        else {
          var v = be(u(p.prefix)),
            T = be(u(p.suffix));
          if (p.pattern)
            if ((t && t.push(p), v || T))
              if (p.modifier === "+" || p.modifier === "*") {
                var O = p.modifier === "*" ? "?" : "";
                h +=
                  "(?:" +
                  v +
                  "((?:" +
                  p.pattern +
                  ")(?:" +
                  T +
                  v +
                  "(?:" +
                  p.pattern +
                  "))*)" +
                  T +
                  ")" +
                  O;
              } else
                h += "(?:" + v + "(" + p.pattern + ")" + T + ")" + p.modifier;
            else h += "(" + p.pattern + ")" + p.modifier;
          else h += "(?:" + v + T + ")" + p.modifier;
        }
      }
      if (i) n || (h += f + "?"), (h += r.endsWith ? "(?=" + d + ")" : "$");
      else {
        var y = e[e.length - 1],
          g =
            typeof y == "string"
              ? f.indexOf(y[y.length - 1]) > -1
              : y === void 0;
        n || (h += "(?:" + f + "(?=" + d + "))?"),
          g || (h += "(?=" + f + "|" + d + ")");
      }
      return new RegExp(h, Qt(r));
    }
    se.tokensToRegexp = ya;
    function Jt(e, t, r) {
      return e instanceof RegExp
        ? es(e, t)
        : Array.isArray(e)
        ? ts(e, t, r)
        : rs(e, t, r);
    }
    se.pathToRegexp = Jt;
  });
  var wa = _((Zt) => {
    "use strict";
    Object.defineProperty(Zt, "__esModule", { value: !0 });
    Zt.getPathMatch = ns;
    var as = we().default,
      Pa = Yt();
    function ns(e, t) {
      let r = [],
        a = Pa.pathToRegexp(e, r, {
          delimiter: "/",
          sensitive: !1,
          strict: t?.strict,
        }),
        n = Pa.regexpToFunction(
          t?.regexModifier ? new RegExp(t.regexModifier(a.source), a.flags) : a,
          r
        );
      return (o, s) => {
        let c = o == null ? !1 : n(o);
        if (!c) return !1;
        if (t?.removeUnnamedParams)
          for (let i of r) typeof i.name == "number" && delete c.params[i.name];
        return as({}, s, c.params);
      };
    }
  });
  var tr = _((er) => {
    "use strict";
    Object.defineProperty(er, "__esModule", { value: !0 });
    er.escapeStringRegexp = is;
    var os = /[|\\{}()[\]^$+*?.-]/,
      ss = /[|\\{}()[\]^$+*?.-]/g;
    function is(e) {
      return os.test(e) ? e.replace(ss, "\\$&") : e;
    }
  });
  var Ra = _((rr) => {
    "use strict";
    Object.defineProperty(rr, "__esModule", { value: !0 });
    rr.parseUrl = us;
    var ls = Ie(),
      cs = st();
    function us(e) {
      if (e.startsWith("/")) return cs.parseRelativeUrl(e);
      let t = new URL(e);
      return {
        hash: t.hash,
        hostname: t.hostname,
        href: t.href,
        pathname: t.pathname,
        port: t.port,
        protocol: t.protocol,
        query: ls.searchParamsToUrlQuery(t.searchParams),
        search: t.search,
      };
    }
  });
  var Sa = _((De) => {
    "use strict";
    Object.defineProperty(De, "__esModule", { value: !0 });
    De.matchHas = hs;
    De.compileNonPath = ar;
    De.prepareDestination = ps;
    var Ea = we().default,
      $e = Yt(),
      ds = tr(),
      fs = Ra();
    function hs(e, t, r) {
      let a = {};
      return t.every((o) => {
        let s,
          c = o.key;
        switch (o.type) {
          case "header": {
            (c = c.toLowerCase()), (s = e.headers[c]);
            break;
          }
          case "cookie": {
            s = e.cookies[o.key];
            break;
          }
          case "query": {
            s = r[c];
            break;
          }
          case "host": {
            let { host: i } = e?.headers || {};
            s = i?.split(":")[0].toLowerCase();
            break;
          }
          default:
            break;
        }
        if (!o.value && s) return (a[ms(c)] = s), !0;
        if (s) {
          let i = new RegExp(`^${o.value}$`),
            l = Array.isArray(s) ? s.slice(-1)[0].match(i) : s.match(i);
          if (l)
            return (
              Array.isArray(l) &&
                (l.groups
                  ? Object.keys(l.groups).forEach((u) => {
                      a[u] = l.groups[u];
                    })
                  : o.type === "host" && l[0] && (a.host = l[0])),
              !0
            );
        }
        return !1;
      })
        ? a
        : !1;
    }
    function ar(e, t) {
      if (!e.includes(":")) return e;
      for (let r of Object.keys(t))
        e.includes(`:${r}`) &&
          (e = e
            .replace(
              new RegExp(`:${r}\\*`, "g"),
              `:${r}--ESCAPED_PARAM_ASTERISKS`
            )
            .replace(
              new RegExp(`:${r}\\?`, "g"),
              `:${r}--ESCAPED_PARAM_QUESTION`
            )
            .replace(new RegExp(`:${r}\\+`, "g"), `:${r}--ESCAPED_PARAM_PLUS`)
            .replace(
              new RegExp(`:${r}(?!\\w)`, "g"),
              `--ESCAPED_PARAM_COLON${r}`
            ));
      return (
        (e = e
          .replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, "\\$1")
          .replace(/--ESCAPED_PARAM_PLUS/g, "+")
          .replace(/--ESCAPED_PARAM_COLON/g, ":")
          .replace(/--ESCAPED_PARAM_QUESTION/g, "?")
          .replace(/--ESCAPED_PARAM_ASTERISKS/g, "*")),
        $e.compile(`/${e}`, { validate: !1 })(t).slice(1)
      );
    }
    function ps(e) {
      let t = Object.assign({}, e.query);
      delete t.__nextLocale,
        delete t.__nextDefaultLocale,
        delete t.__nextDataReq;
      let r = e.destination;
      for (let m of Object.keys(Ea({}, e.params, t))) r = _s(r, m);
      let a = fs.parseUrl(r),
        n = a.query,
        o = it(`${a.pathname}${a.hash || ""}`),
        s = it(a.hostname || ""),
        c = [],
        i = [];
      $e.pathToRegexp(o, c), $e.pathToRegexp(s, i);
      let l = [];
      c.forEach((m) => l.push(m.name)), i.forEach((m) => l.push(m.name));
      let u = $e.compile(o, { validate: !1 }),
        d = $e.compile(s, { validate: !1 });
      for (let [m, P] of Object.entries(n))
        Array.isArray(P)
          ? (n[m] = P.map((p) => ar(it(p), e.params)))
          : (n[m] = ar(it(P), e.params));
      let f = Object.keys(e.params).filter((m) => m !== "nextInternalLocale");
      if (e.appendParamsToQuery && !f.some((m) => l.includes(m)))
        for (let m of f) m in n || (n[m] = e.params[m]);
      let h;
      try {
        h = u(e.params);
        let [m, P] = h.split("#");
        (a.hostname = d(e.params)),
          (a.pathname = m),
          (a.hash = `${P ? "#" : ""}${P || ""}`),
          delete a.search;
      } catch (m) {
        throw m.message.match(/Expected .*? to not repeat, but got an array/)
          ? new Error(
              "To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match"
            )
          : m;
      }
      return (
        (a.query = Ea({}, t, a.query)),
        { newUrl: h, destQuery: n, parsedDestination: a }
      );
    }
    function ms(e) {
      let t = "";
      for (let r = 0; r < e.length; r++) {
        let a = e.charCodeAt(r);
        ((a > 64 && a < 91) || (a > 96 && a < 123)) && (t += e[r]);
      }
      return t;
    }
    function _s(e, t) {
      return e.replace(
        new RegExp(`:${ds.escapeStringRegexp(t)}`, "g"),
        `__ESC_COLON_${t}`
      );
    }
    function it(e) {
      return e.replace(/__ESC_COLON_/gi, ":");
    }
  });
  var Ue = _((nr) => {
    "use strict";
    Object.defineProperty(nr, "__esModule", { value: !0 });
    nr.pathHasPrefix = vs;
    var gs = ve();
    function vs(e, t) {
      if (typeof e != "string") return !1;
      let { pathname: r } = gs.parsePath(e);
      return r === t || r.startsWith(t + "/");
    }
  });
  var or = _((Q, xa) => {
    "use strict";
    Object.defineProperty(Q, "__esModule", { value: !0 });
    Q.hasBasePath = ws;
    var ys = Ue(),
      Ps = "";
    function ws(e) {
      return ys.pathHasPrefix(e, Ps);
    }
    (typeof Q.default == "function" ||
      (typeof Q.default == "object" && Q.default !== null)) &&
      typeof Q.default.__esModule > "u" &&
      (Object.defineProperty(Q.default, "__esModule", { value: !0 }),
      Object.assign(Q.default, Q),
      (xa.exports = Q.default));
  });
  var sr = _((J, ba) => {
    "use strict";
    Object.defineProperty(J, "__esModule", { value: !0 });
    J.removeBasePath = Ss;
    var Rs = or(),
      Es = "";
    function Ss(e) {
      return (
        (process.env.__NEXT_MANUAL_CLIENT_BASE_PATH && !Rs.hasBasePath(e)) ||
          ((e = e.slice(Es.length)), e.startsWith("/") || (e = `/${e}`)),
        e
      );
    }
    (typeof J.default == "function" ||
      (typeof J.default == "object" && J.default !== null)) &&
      typeof J.default.__esModule > "u" &&
      (Object.defineProperty(J.default, "__esModule", { value: !0 }),
      Object.assign(J.default, J),
      (ba.exports = J.default));
  });
  var Ca = _((ir) => {
    "use strict";
    Object.defineProperty(ir, "__esModule", { value: !0 });
    ir.default = Os;
    var xs = wa(),
      Oa = Sa(),
      La = Re(),
      Na = nt(),
      Ta = sr(),
      bs = st();
    function Os(e, t, r, a, n, o) {
      let s = !1,
        c = !1,
        i = bs.parseRelativeUrl(e),
        l = La.removeTrailingSlash(
          Na.normalizeLocalePath(Ta.removeBasePath(i.pathname), o).pathname
        ),
        u,
        d = (h) => {
          let P = xs.getPathMatch(h.source + "", {
            removeUnnamedParams: !0,
            strict: !0,
          })(i.pathname);
          if (h.has && P) {
            let p = Oa.matchHas(
              {
                headers: { host: document.location.hostname },
                cookies: document.cookie.split("; ").reduce((v, T) => {
                  let [O, ...y] = T.split("=");
                  return (v[O] = y.join("=")), v;
                }, {}),
              },
              h.has,
              i.query
            );
            p ? Object.assign(P, p) : (P = !1);
          }
          if (P) {
            if (!h.destination) return (c = !0), !0;
            let p = Oa.prepareDestination({
              appendParamsToQuery: !0,
              destination: h.destination,
              params: P,
              query: a,
            });
            if (
              ((i = p.parsedDestination),
              (e = p.newUrl),
              Object.assign(a, p.parsedDestination.query),
              (l = La.removeTrailingSlash(
                Na.normalizeLocalePath(Ta.removeBasePath(e), o).pathname
              )),
              t.includes(l))
            )
              return (s = !0), (u = l), !0;
            if (((u = n(l)), u !== e && t.includes(u))) return (s = !0), !0;
          }
        },
        f = !1;
      for (let h = 0; h < r.beforeFiles.length; h++) d(r.beforeFiles[h]);
      if (((s = t.includes(l)), !s)) {
        if (!f) {
          for (let h = 0; h < r.afterFiles.length; h++)
            if (d(r.afterFiles[h])) {
              f = !0;
              break;
            }
        }
        if ((f || ((u = n(l)), (s = t.includes(u)), (f = s)), !f)) {
          for (let h = 0; h < r.fallback.length; h++)
            if (d(r.fallback[h])) {
              f = !0;
              break;
            }
        }
      }
      return {
        asPath: e,
        parsedAs: i,
        matchedPage: s,
        resolvedHref: u,
        externalDest: c,
      };
    }
  });
  var Aa = _((lr) => {
    "use strict";
    Object.defineProperty(lr, "__esModule", { value: !0 });
    lr.getRouteMatcher = Ns;
    var Ls = ot();
    function Ns({ re: e, groups: t }) {
      return (r) => {
        let a = e.exec(r);
        if (!a) return !1;
        let n = (s) => {
            try {
              return decodeURIComponent(s);
            } catch {
              throw new Ls.DecodeError("failed to decode param");
            }
          },
          o = {};
        return (
          Object.keys(t).forEach((s) => {
            let c = t[s],
              i = a[c.pos];
            i !== void 0 &&
              (o[s] = ~i.indexOf("/")
                ? i.split("/").map((l) => n(l))
                : c.repeat
                ? [n(i)]
                : n(i));
          }),
          o
        );
      };
    }
  });
  var Da = _((Oe) => {
    "use strict";
    Object.defineProperty(Oe, "__esModule", { value: !0 });
    Oe.getRouteRegex = ja;
    Oe.getNamedRouteRegex = Cs;
    Oe.getMiddlewareRegex = Ms;
    Oe.getNamedMiddlewareRegex = qs;
    var Ts = we().default,
      Ma = tr(),
      qa = Re();
    function ja(e) {
      let { parameterizedRoute: t, groups: r } = cr(e);
      return { re: new RegExp(`^${t}(?:/)?$`), groups: r };
    }
    function Cs(e) {
      let t = Ia(e);
      return Ts({}, ja(e), {
        namedRegex: `^${t.namedParameterizedRoute}(?:/)?$`,
        routeKeys: t.routeKeys,
      });
    }
    function cr(e) {
      let t = qa.removeTrailingSlash(e).slice(1).split("/"),
        r = {},
        a = 1;
      return {
        parameterizedRoute: t
          .map((n) => {
            if (n.startsWith("[") && n.endsWith("]")) {
              let { key: o, optional: s, repeat: c } = $a(n.slice(1, -1));
              return (
                (r[o] = { pos: a++, repeat: c, optional: s }),
                c ? (s ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)"
              );
            } else return `/${Ma.escapeStringRegexp(n)}`;
          })
          .join(""),
        groups: r,
      };
    }
    function Ia(e) {
      let t = qa.removeTrailingSlash(e).slice(1).split("/"),
        r = As(),
        a = {};
      return {
        namedParameterizedRoute: t
          .map((n) => {
            if (n.startsWith("[") && n.endsWith("]")) {
              let { key: o, optional: s, repeat: c } = $a(n.slice(1, -1)),
                i = o.replace(/\W/g, ""),
                l = !1;
              return (
                (i.length === 0 || i.length > 30) && (l = !0),
                isNaN(parseInt(i.slice(0, 1))) || (l = !0),
                l && (i = r()),
                (a[i] = o),
                c
                  ? s
                    ? `(?:/(?<${i}>.+?))?`
                    : `/(?<${i}>.+?)`
                  : `/(?<${i}>[^/]+?)`
              );
            } else return `/${Ma.escapeStringRegexp(n)}`;
          })
          .join(""),
        routeKeys: a,
      };
    }
    function $a(e) {
      let t = e.startsWith("[") && e.endsWith("]");
      t && (e = e.slice(1, -1));
      let r = e.startsWith("...");
      return r && (e = e.slice(3)), { key: e, repeat: r, optional: t };
    }
    function As() {
      let e = 97,
        t = 1;
      return () => {
        let r = "";
        for (let a = 0; a < t; a++)
          (r += String.fromCharCode(e)), e++, e > 122 && (t++, (e = 97));
        return r;
      };
    }
    function Ms(e, t) {
      let { parameterizedRoute: r, groups: a } = cr(e),
        { catchAll: n = !0 } = t ?? {};
      if (r === "/") {
        let s = n ? ".*" : "";
        return { groups: {}, re: new RegExp(`^/${s}$`) };
      }
      let o = n ? "(?:(/.*)?)" : "";
      return { groups: a, re: new RegExp(`^${r}${o}$`) };
    }
    function qs(e, t) {
      let { parameterizedRoute: r } = cr(e),
        { catchAll: a = !0 } = t;
      if (r === "/") return { namedRegex: `^/${a ? ".*" : ""}$` };
      let { namedParameterizedRoute: n } = Ia(e);
      return { namedRegex: `^${n}${a ? "(?:(/.*)?)" : ""}$` };
    }
  });
  var ka = _((Le) => {
    "use strict";
    Object.defineProperty(Le, "__esModule", { value: !0 });
    Le.formatUrl = Ua;
    Le.formatWithValidation = Us;
    Le.urlObjectKeys = void 0;
    var js = Je().default,
      Is = js(Ie()),
      $s = /https?|ftp|gopher|file/;
    function Ua(e) {
      let { auth: t, hostname: r } = e,
        a = e.protocol || "",
        n = e.pathname || "",
        o = e.hash || "",
        s = e.query || "",
        c = !1;
      (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (c = t + e.host)
          : r &&
            ((c = t + (~r.indexOf(":") ? `[${r}]` : r)),
            e.port && (c += ":" + e.port)),
        s && typeof s == "object" && (s = String(Is.urlQueryToSearchParams(s)));
      let i = e.search || (s && `?${s}`) || "";
      return (
        a && !a.endsWith(":") && (a += ":"),
        e.slashes || ((!a || $s.test(a)) && c !== !1)
          ? ((c = "//" + (c || "")), n && n[0] !== "/" && (n = "/" + n))
          : c || (c = ""),
        o && o[0] !== "#" && (o = "#" + o),
        i && i[0] !== "?" && (i = "?" + i),
        (n = n.replace(/[?#]/g, encodeURIComponent)),
        (i = i.replace("#", "%23")),
        `${a}${c}${n}${i}${o}`
      );
    }
    var Ds = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes",
    ];
    Le.urlObjectKeys = Ds;
    function Us(e) {
      return Ua(e);
    }
  });
  var Ha = _((W, Ba) => {
    "use strict";
    Object.defineProperty(W, "__esModule", { value: !0 });
    W.detectDomainLocale = void 0;
    var ks = (...e) => {};
    W.detectDomainLocale = ks;
    (typeof W.default == "function" ||
      (typeof W.default == "object" && W.default !== null)) &&
      typeof W.default.__esModule > "u" &&
      (Object.defineProperty(W.default, "__esModule", { value: !0 }),
      Object.assign(W.default, W),
      (Ba.exports = W.default));
  });
  var ur = _((z, Wa) => {
    "use strict";
    Object.defineProperty(z, "__esModule", { value: !0 });
    z.addLocale = void 0;
    var Nl = Ye(),
      Bs = (e, ...t) => e;
    z.addLocale = Bs;
    (typeof z.default == "function" ||
      (typeof z.default == "object" && z.default !== null)) &&
      typeof z.default.__esModule > "u" &&
      (Object.defineProperty(z.default, "__esModule", { value: !0 }),
      Object.assign(z.default, z),
      (Wa.exports = z.default));
  });
  var Va = _((Y, za) => {
    "use strict";
    Object.defineProperty(Y, "__esModule", { value: !0 });
    Y.removeLocale = Hs;
    var Tl = ve();
    function Hs(e, t) {
      return e;
    }
    (typeof Y.default == "function" ||
      (typeof Y.default == "object" && Y.default !== null)) &&
      typeof Y.default.__esModule > "u" &&
      (Object.defineProperty(Y.default, "__esModule", { value: !0 }),
      Object.assign(Y.default, Y),
      (za.exports = Y.default));
  });
  var lt = _((dr) => {
    "use strict";
    Object.defineProperty(dr, "__esModule", { value: !0 });
    dr.addPathPrefix = zs;
    var Ws = ve();
    function zs(e, t) {
      if (!e.startsWith("/") || !t) return e;
      let { pathname: r, query: a, hash: n } = Ws.parsePath(e);
      return `${t}${r}${a}${n}`;
    }
  });
  var fr = _((Z, Fa) => {
    "use strict";
    Object.defineProperty(Z, "__esModule", { value: !0 });
    Z.addBasePath = Gs;
    var Vs = lt(),
      Fs = Ye(),
      Xs = "";
    function Gs(e, t) {
      return process.env.__NEXT_MANUAL_CLIENT_BASE_PATH && !t
        ? e
        : Fs.normalizePathTrailingSlash(Vs.addPathPrefix(e, Xs));
    }
    (typeof Z.default == "function" ||
      (typeof Z.default == "object" && Z.default !== null)) &&
      typeof Z.default.__esModule > "u" &&
      (Object.defineProperty(Z.default, "__esModule", { value: !0 }),
      Object.assign(Z.default, Z),
      (Fa.exports = Z.default));
  });
  var Xa = _((hr) => {
    "use strict";
    Object.defineProperty(hr, "__esModule", { value: !0 });
    hr.removePathPrefix = Qs;
    var Ks = Ue();
    function Qs(e, t) {
      if (Ks.pathHasPrefix(e, t)) {
        let r = e.slice(t.length);
        return r.startsWith("/") ? r : `/${r}`;
      }
      return e;
    }
  });
  var Ga = _((pr) => {
    "use strict";
    Object.defineProperty(pr, "__esModule", { value: !0 });
    pr.getNextPathnameInfo = ei;
    var Js = nt(),
      Ys = Xa(),
      Zs = Ue();
    function ei(e, t) {
      var r;
      let {
          basePath: a,
          i18n: n,
          trailingSlash: o,
        } = (r = t.nextConfig) != null ? r : {},
        s = { pathname: e, trailingSlash: e !== "/" ? e.endsWith("/") : o };
      if (
        (a &&
          Zs.pathHasPrefix(s.pathname, a) &&
          ((s.pathname = Ys.removePathPrefix(s.pathname, a)), (s.basePath = a)),
        t.parseData === !0 &&
          s.pathname.startsWith("/_next/data/") &&
          s.pathname.endsWith(".json"))
      ) {
        let c = s.pathname
            .replace(/^\/_next\/data\//, "")
            .replace(/\.json$/, "")
            .split("/"),
          i = c[0];
        (s.pathname = c[1] !== "index" ? `/${c.slice(1).join("/")}` : "/"),
          (s.buildId = i);
      }
      if (n) {
        let c = Js.normalizeLocalePath(s.pathname, n.locales);
        (s.locale = c?.detectedLocale),
          (s.pathname = c?.pathname || s.pathname);
      }
      return s;
    }
  });
  var Ka = _((mr) => {
    "use strict";
    Object.defineProperty(mr, "__esModule", { value: !0 });
    mr.addPathSuffix = ri;
    var ti = ve();
    function ri(e, t) {
      if (!e.startsWith("/") || !t) return e;
      let { pathname: r, query: a, hash: n } = ti.parsePath(e);
      return `${r}${t}${a}${n}`;
    }
  });
  var Ja = _((_r) => {
    "use strict";
    Object.defineProperty(_r, "__esModule", { value: !0 });
    _r.addLocale = ni;
    var ai = lt(),
      Qa = Ue();
    function ni(e, t, r, a) {
      return t &&
        t !== r &&
        (a ||
          (!Qa.pathHasPrefix(e.toLowerCase(), `/${t.toLowerCase()}`) &&
            !Qa.pathHasPrefix(e.toLowerCase(), "/api")))
        ? ai.addPathPrefix(e, `/${t}`)
        : e;
    }
  });
  var en = _((gr) => {
    "use strict";
    Object.defineProperty(gr, "__esModule", { value: !0 });
    gr.formatNextPathnameInfo = ii;
    var oi = Re(),
      Ya = lt(),
      Za = Ka(),
      si = Ja();
    function ii(e) {
      let t = si.addLocale(
        e.pathname,
        e.locale,
        e.buildId ? void 0 : e.defaultLocale,
        e.ignorePrefix
      );
      return (
        e.buildId &&
          (t = Za.addPathSuffix(
            Ya.addPathPrefix(t, `/_next/data/${e.buildId}`),
            e.pathname === "/" ? "index.json" : ".json"
          )),
        (t = Ya.addPathPrefix(t, e.basePath)),
        e.trailingSlash
          ? !e.buildId && !t.endsWith("/")
            ? Za.addPathSuffix(t, "/")
            : t
          : oi.removeTrailingSlash(t)
      );
    }
  });
  var tn = _((vr) => {
    "use strict";
    Object.defineProperty(vr, "__esModule", { value: !0 });
    vr.compareRouterStates = li;
    function li(e, t) {
      let r = Object.keys(e);
      if (r.length !== Object.keys(t).length) return !1;
      for (let a = r.length; a--; ) {
        let n = r[a];
        if (n === "query") {
          let o = Object.keys(e.query);
          if (o.length !== Object.keys(t.query).length) return !1;
          for (let s = o.length; s--; ) {
            let c = o[s];
            if (!t.query.hasOwnProperty(c) || e.query[c] !== t.query[c])
              return !1;
          }
        } else if (!t.hasOwnProperty(n) || e[n] !== t[n]) return !1;
      }
      return !0;
    }
  });
  var hn = _((fe) => {
    "use strict";
    Object.defineProperty(fe, "__esModule", { value: !0 });
    fe.isLocalURL = ht;
    fe.interpolateAs = pt;
    fe.resolveHref = Rr;
    fe.createKey = Er;
    fe.default = void 0;
    var Ne = St().default,
      ie = we().default,
      cn = _e().default,
      ci = Je().default,
      ui = Ye(),
      de = Re(),
      ft = Xr(),
      di = ta(),
      ct = ci(oa()),
      fi = ca(),
      wr = nt(),
      hi = cn(ua()),
      ne = ot(),
      ce = $t(),
      ue = st(),
      pi = Ie(),
      Dl = cn(Ca()),
      ke = Aa(),
      Ce = Da(),
      V = ka(),
      Ul = Ha(),
      Ae = ve(),
      We = ur(),
      rn = Va(),
      le = sr(),
      ee = fr(),
      Be = or(),
      ut = Ga(),
      an = en(),
      mi = tn();
    function nn() {
      return Object.assign(new Error("Route Cancelled"), { cancelled: !0 });
    }
    function ht(e) {
      if (!ne.isAbsoluteUrl(e)) return !0;
      try {
        let t = ne.getLocationOrigin(),
          r = new URL(e, t);
        return r.origin === t && Be.hasBasePath(r.pathname);
      } catch {
        return !1;
      }
    }
    function pt(e, t, r) {
      let a = "",
        n = Ce.getRouteRegex(e),
        o = n.groups,
        s = (t !== e ? ke.getRouteMatcher(n)(t) : "") || r;
      a = e;
      let c = Object.keys(o);
      return (
        c.every((i) => {
          let l = s[i] || "",
            { repeat: u, optional: d } = o[i],
            f = `[${u ? "..." : ""}${i}]`;
          return (
            d && (f = `${l ? "" : "/"}[${f}]`),
            u && !Array.isArray(l) && (l = [l]),
            (d || i in s) &&
              (a =
                a.replace(
                  f,
                  u
                    ? l.map((h) => encodeURIComponent(h)).join("/")
                    : encodeURIComponent(l)
                ) || "/")
          );
        }) || (a = ""),
        { params: c, result: a }
      );
    }
    function un(e, t) {
      let r = {};
      return (
        Object.keys(e).forEach((a) => {
          t.includes(a) || (r[a] = e[a]);
        }),
        r
      );
    }
    function Rr(e, t, r) {
      let a,
        n = typeof t == "string" ? t : V.formatWithValidation(t),
        o = n.match(/^[a-zA-Z]{1,}:\/\//),
        s = o ? n.slice(o[0].length) : n;
      if ((s.split("?")[0] || "").match(/(\/\/|\\)/)) {
        console.error(
          `Invalid href passed to next/router: ${n}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`
        );
        let i = ne.normalizeRepeatedSlashes(s);
        n = (o ? o[0] : "") + i;
      }
      if (!ht(n)) return r ? [n] : n;
      try {
        a = new URL(n.startsWith("#") ? e.asPath : e.pathname, "http://n");
      } catch {
        a = new URL("/", "http://n");
      }
      try {
        let i = new URL(n, a);
        i.pathname = ui.normalizePathTrailingSlash(i.pathname);
        let l = "";
        if (ce.isDynamicRoute(i.pathname) && i.searchParams && r) {
          let d = pi.searchParamsToUrlQuery(i.searchParams),
            { result: f, params: h } = pt(i.pathname, i.pathname, d);
          f &&
            (l = V.formatWithValidation({
              pathname: f,
              hash: i.hash,
              query: un(d, h),
            }));
        }
        let u = i.origin === a.origin ? i.href.slice(i.origin.length) : i.href;
        return r ? [u, l || u] : u;
      } catch {
        return r ? [n] : n;
      }
    }
    function yr(e) {
      let t = ne.getLocationOrigin();
      return e.startsWith(t) ? e.substring(t.length) : e;
    }
    function Pr(e, t, r) {
      let [a, n] = Rr(e, t, !0),
        o = ne.getLocationOrigin(),
        s = a.startsWith(o),
        c = n && n.startsWith(o);
      (a = yr(a)), (n = n && yr(n));
      let i = s ? a : ee.addBasePath(a),
        l = r ? yr(Rr(e, r)) : n || a;
      return { url: i, as: c ? l : ee.addBasePath(l) };
    }
    function He(e, t) {
      let r = de.removeTrailingSlash(fi.denormalizePagePath(e));
      return r === "/404" || r === "/_error"
        ? e
        : (t.includes(r) ||
            t.some((a) => {
              if (ce.isDynamicRoute(a) && Ce.getRouteRegex(a).re.test(r))
                return (e = a), !0;
            }),
          de.removeTrailingSlash(e));
    }
    var dn = Symbol("SSG_DATA_NOT_FOUND");
    function fn(e, t, r) {
      return fetch(e, {
        credentials: "same-origin",
        method: r.method || "GET",
        headers: Object.assign({}, r.headers, { "x-nextjs-data": "1" }),
      }).then((a) => (!a.ok && t > 1 && a.status >= 500 ? fn(e, t - 1, r) : a));
    }
    var _i = {};
    function Te({
      dataHref: e,
      inflightCache: t,
      isPrefetch: r,
      hasMiddleware: a,
      isServerRender: n,
      parseJSON: o,
      persistCache: s,
      isBackground: c,
      unstable_skipClientCache: i,
    }) {
      let { href: l } = new URL(e, window.location.href);
      var u;
      let d = (f) =>
        fn(e, n ? 3 : 1, {
          headers: r ? { purpose: "prefetch" } : {},
          method: (u = f?.method) != null ? u : "GET",
        })
          .then((h) =>
            h.ok && f?.method === "HEAD"
              ? { dataHref: e, response: h, text: "", json: {} }
              : h.text().then((m) => {
                  if (!h.ok) {
                    if (a && [301, 302, 307, 308].includes(h.status))
                      return { dataHref: e, response: h, text: m, json: {} };
                    if (!a && h.status === 404) {
                      var P;
                      if ((P = on(m)) != null && P.notFound)
                        return {
                          dataHref: e,
                          json: { notFound: dn },
                          response: h,
                          text: m,
                        };
                    }
                    let p = new Error("Failed to load static props");
                    throw (n || ft.markAssetError(p), p);
                  }
                  return {
                    dataHref: e,
                    json: o ? on(m) : null,
                    response: h,
                    text: m,
                  };
                })
          )
          .then(
            (h) => (
              (!s ||
                !1 ||
                h.response.headers.get("x-middleware-cache") === "no-cache") &&
                delete t[l],
              h
            )
          )
          .catch((h) => {
            throw (delete t[l], h);
          });
      return i && s
        ? d({}).then((f) => ((t[l] = Promise.resolve(f)), f))
        : t[l] !== void 0
        ? t[l]
        : (t[l] = d(c ? { method: "HEAD" } : {}));
    }
    function on(e) {
      try {
        return JSON.parse(e);
      } catch {
        return null;
      }
    }
    function Er() {
      return Math.random().toString(36).slice(2, 10);
    }
    function ye({ url: e, router: t }) {
      if (e === ee.addBasePath(We.addLocale(t.asPath, t.locale)))
        throw new Error(
          `Invariant: attempted to hard navigate to the same URL ${e} ${location.href}`
        );
      window.location.href = e;
    }
    var sn = ({ route: e, router: t }) => {
        let r = !1,
          a = (t.clc = () => {
            r = !0;
          });
        return () => {
          if (r) {
            let o = new Error(`Abort fetching component for route: "${e}"`);
            throw ((o.cancelled = !0), o);
          }
          a === t.clc && (t.clc = null);
        };
      },
      j = class {
        reload() {
          window.location.reload();
        }
        back() {
          window.history.back();
        }
        push(t, r, a = {}) {
          if ("" && manualScrollRestoration)
            try {
            } catch (n) {}
          return (
            ({ url: t, as: r } = Pr(this, t, r)),
            this.change("pushState", t, r, a)
          );
        }
        replace(t, r, a = {}) {
          return (
            ({ url: t, as: r } = Pr(this, t, r)),
            this.change("replaceState", t, r, a)
          );
        }
        change(t, r, a, n, o) {
          var s = this;
          return Ne(function* () {
            if (!ht(r)) return ye({ url: r, router: s }), !1;
            let c = n._h,
              i =
                c ||
                n._shouldResolveHref ||
                Ae.parsePath(r).pathname === Ae.parsePath(a).pathname,
              l = ie({}, s.state),
              u = s.isReady !== !0;
            s.isReady = !0;
            let d = s.isSsr;
            if ((c || (s.isSsr = !1), c && s.clc)) return !1;
            let f = l.locale;
            if ("" && "") var h;
            ne.ST && performance.mark("routeChange");
            let { shallow: m = !1, scroll: P = !0 } = n,
              p = { shallow: m };
            s._inFlightRoute &&
              s.clc &&
              (d ||
                j.events.emit("routeChangeError", nn(), s._inFlightRoute, p),
              s.clc(),
              (s.clc = null)),
              (a = ee.addBasePath(
                We.addLocale(
                  Be.hasBasePath(a) ? le.removeBasePath(a) : a,
                  n.locale,
                  s.defaultLocale
                )
              ));
            let v = rn.removeLocale(
              Be.hasBasePath(a) ? le.removeBasePath(a) : a,
              l.locale
            );
            s._inFlightRoute = a;
            let T = f !== l.locale;
            if (!c && s.onlyAHashChange(v) && !T) {
              (l.asPath = v),
                j.events.emit("hashChangeStart", a, p),
                s.changeState(t, r, a, ie({}, n, { scroll: !1 })),
                P && s.scrollToHash(v);
              try {
                yield s.set(l, s.components[l.route], null);
              } catch (R) {
                throw (
                  (ct.default(R) &&
                    R.cancelled &&
                    j.events.emit("routeChangeError", R, v, p),
                  R)
                );
              }
              return j.events.emit("hashChangeComplete", a, p), !0;
            }
            let O = ue.parseRelativeUrl(r),
              { pathname: y, query: g } = O,
              E,
              L;
            try {
              [E, { __rewrites: L }] = yield Promise.all([
                s.pageLoader.getPageList(),
                ft.getClientBuildManifest(),
                s.pageLoader.getMiddleware(),
              ]);
            } catch {
              return ye({ url: a, router: s }), !1;
            }
            !s.urlIsNew(v) && !T && (t = "replaceState");
            let x = a;
            y = y && de.removeTrailingSlash(le.removeBasePath(y));
            let M = yield dt({ asPath: a, locale: l.locale, router: s });
            if (
              (n.shallow && M && (y = s.pathname),
              i &&
                y !== "/_error" &&
                ((n._shouldResolveHref = !0),
                (O.pathname = He(y, E)),
                O.pathname !== y &&
                  ((y = O.pathname),
                  (O.pathname = ee.addBasePath(y)),
                  M || (r = V.formatWithValidation(O)))),
              !ht(a))
            )
              return ye({ url: a, router: s }), !1;
            x = rn.removeLocale(le.removeBasePath(x), l.locale);
            let S = de.removeTrailingSlash(y),
              b = !1;
            if (ce.isDynamicRoute(S)) {
              let R = ue.parseRelativeUrl(x),
                q = R.pathname,
                w = Ce.getRouteRegex(S);
              b = ke.getRouteMatcher(w)(q);
              let C = S === q,
                oe = C ? pt(S, q, g) : {};
              if (!b || (C && !oe.result)) {
                let me = Object.keys(w.groups).filter((Fe) => !g[Fe]);
                if (me.length > 0 && !M)
                  throw new Error(
                    (C
                      ? `The provided \`href\` (${r}) value is missing query values (${me.join(
                          ", "
                        )}) to be interpolated properly. `
                      : `The provided \`as\` value (${q}) is incompatible with the \`href\` value (${S}). `) +
                      `Read more: https://nextjs.org/docs/messages/${
                        C ? "href-interpolation-failed" : "incompatible-href-as"
                      }`
                  );
              } else
                C
                  ? (a = V.formatWithValidation(
                      Object.assign({}, R, {
                        pathname: oe.result,
                        query: un(g, oe.params),
                      })
                    ))
                  : Object.assign(g, b);
            }
            c || j.events.emit("routeChangeStart", a, p);
            try {
              var G, ae;
              let R = yield s.getRouteInfo({
                route: S,
                pathname: y,
                query: g,
                as: a,
                resolvedAs: x,
                routeProps: p,
                locale: l.locale,
                isPreview: l.isPreview,
                hasMiddleware: M,
              });
              if (
                "route" in R &&
                M &&
                ((y = R.route || S),
                (S = y),
                p.shallow || (g = Object.assign({}, R.query || {}, g)),
                b &&
                  y !== O.pathname &&
                  Object.keys(b).forEach((A) => {
                    b && g[A] === b[A] && delete g[A];
                  }),
                ce.isDynamicRoute(y))
              ) {
                let I =
                  !p.shallow && R.resolvedAs
                    ? R.resolvedAs
                    : ee.addBasePath(
                        We.addLocale(
                          new URL(a, location.href).pathname,
                          l.locale
                        ),
                        !0
                      );
                Be.hasBasePath(I) && (I = le.removeBasePath(I));
                let yt = Ce.getRouteRegex(y),
                  Ke = ke.getRouteMatcher(yt)(I);
                Ke && Object.assign(g, Ke);
              }
              if ("type" in R)
                return R.type === "redirect-internal"
                  ? s.change(t, R.newUrl, R.newAs, n)
                  : (ye({ url: R.destination, router: s }),
                    new Promise(() => {}));
              let { error: q, props: w, __N_SSG: C, __N_SSP: oe } = R,
                me = R.Component;
              if (
                (me &&
                  me.unstable_scriptLoader &&
                  [].concat(me.unstable_scriptLoader()).forEach((I) => {
                    di.handleClientScriptLoad(I.props);
                  }),
                (C || oe) && w)
              ) {
                if (w.pageProps && w.pageProps.__N_REDIRECT) {
                  n.locale = !1;
                  let A = w.pageProps.__N_REDIRECT;
                  if (
                    A.startsWith("/") &&
                    w.pageProps.__N_REDIRECT_BASE_PATH !== !1
                  ) {
                    let I = ue.parseRelativeUrl(A);
                    I.pathname = He(I.pathname, E);
                    let { url: yt, as: Ke } = Pr(s, A, A);
                    return s.change(t, yt, Ke, n);
                  }
                  return ye({ url: A, router: s }), new Promise(() => {});
                }
                if (((l.isPreview = !!w.__N_PREVIEW), w.notFound === dn)) {
                  let A;
                  try {
                    yield s.fetchComponent("/404"), (A = "/404");
                  } catch {
                    A = "/_error";
                  }
                  if (
                    ((R = yield s.getRouteInfo({
                      route: A,
                      pathname: A,
                      query: g,
                      as: a,
                      resolvedAs: x,
                      routeProps: { shallow: !1 },
                      locale: l.locale,
                      isPreview: l.isPreview,
                    })),
                    "type" in R)
                  )
                    throw new Error("Unexpected middleware effect on /404");
                }
              }
              j.events.emit("beforeHistoryChange", a, p),
                s.changeState(t, r, a, n),
                c &&
                  y === "/_error" &&
                  ((G = self.__NEXT_DATA__.props) == null ||
                  (ae = G.pageProps) == null
                    ? void 0
                    : ae.statusCode) === 500 &&
                  w?.pageProps &&
                  (w.pageProps.statusCode = 500);
              var pe;
              let Fe =
                n.shallow && l.route === ((pe = R.route) != null ? pe : S);
              var Me;
              let gt = (Me = n.scroll) != null ? Me : !n._h && !Fe,
                Xe = gt ? { x: 0, y: 0 } : null,
                Ge = ie({}, l, {
                  route: S,
                  pathname: y,
                  query: g,
                  asPath: v,
                  isFallback: !1,
                }),
                vt = o ?? Xe;
              if (
                !(
                  n._h &&
                  !vt &&
                  !u &&
                  !T &&
                  mi.compareRouterStates(Ge, s.state)
                )
              ) {
                if (
                  (yield s.set(Ge, R, vt).catch((I) => {
                    if (I.cancelled) q = q || I;
                    else throw I;
                  }),
                  q)
                )
                  throw (c || j.events.emit("routeChangeError", q, v, p), q);
                c || j.events.emit("routeChangeComplete", a, p),
                  gt && /#.+$/.test(a) && s.scrollToHash(a);
              }
              return !0;
            } catch (R) {
              if (ct.default(R) && R.cancelled) return !1;
              throw R;
            }
          })();
        }
        changeState(t, r, a, n = {}) {
          (t !== "pushState" || ne.getURL() !== a) &&
            ((this._shallow = n.shallow),
            window.history[t](
              {
                url: r,
                as: a,
                options: n,
                __N: !0,
                key: (this._key = t !== "pushState" ? this._key : Er()),
              },
              "",
              a
            ));
        }
        handleRouteInfoError(t, r, a, n, o, s) {
          var c = this;
          return Ne(function* () {
            if ((console.error(t), t.cancelled)) throw t;
            if (ft.isAssetError(t) || s)
              throw (
                (j.events.emit("routeChangeError", t, n, o),
                ye({ url: n, router: c }),
                nn())
              );
            try {
              let i,
                { page: l, styleSheets: u } = yield c.fetchComponent("/_error"),
                d = {
                  props: i,
                  Component: l,
                  styleSheets: u,
                  err: t,
                  error: t,
                };
              if (!d.props)
                try {
                  d.props = yield c.getInitialProps(l, {
                    err: t,
                    pathname: r,
                    query: a,
                  });
                } catch (f) {
                  console.error("Error in error page `getInitialProps`: ", f),
                    (d.props = {});
                }
              return d;
            } catch (i) {
              return c.handleRouteInfoError(
                ct.default(i) ? i : new Error(i + ""),
                r,
                a,
                n,
                o,
                !0
              );
            }
          })();
        }
        getRouteInfo({
          route: t,
          pathname: r,
          query: a,
          as: n,
          resolvedAs: o,
          routeProps: s,
          locale: c,
          hasMiddleware: i,
          isPreview: l,
          unstable_skipClientCache: u,
        }) {
          var d = this;
          return Ne(function* () {
            let f = t;
            try {
              var h, m, P;
              let p = sn({ route: f, router: d }),
                v = d.components[f];
              if (s.shallow && v && d.route === f) return v;
              i && (v = void 0);
              let T = v && !("initial" in v) ? v : void 0,
                O = {
                  dataHref: d.pageLoader.getDataHref({
                    href: V.formatWithValidation({ pathname: r, query: a }),
                    skipInterpolation: !0,
                    asPath: o,
                    locale: c,
                  }),
                  hasMiddleware: !0,
                  isServerRender: d.isSsr,
                  parseJSON: !0,
                  inflightCache: d.sdc,
                  persistCache: !l,
                  isPrefetch: !1,
                  unstable_skipClientCache: u,
                },
                y = yield ln({
                  fetchData: () => Te(O),
                  asPath: o,
                  locale: c,
                  router: d,
                });
              if (
                (p(),
                (y == null || (h = y.effect) == null ? void 0 : h.type) ===
                  "redirect-internal" ||
                  (y == null || (m = y.effect) == null ? void 0 : m.type) ===
                    "redirect-external")
              )
                return y.effect;
              if (
                (y == null || (P = y.effect) == null ? void 0 : P.type) ===
                  "rewrite" &&
                ((f = de.removeTrailingSlash(y.effect.resolvedHref)),
                (r = y.effect.resolvedHref),
                (a = ie({}, a, y.effect.parsedAs.query)),
                (o = le.removeBasePath(
                  wr.normalizeLocalePath(y.effect.parsedAs.pathname, d.locales)
                    .pathname
                )),
                (v = d.components[f]),
                s.shallow && v && d.route === f && !i)
              )
                return ie({}, v, { route: f });
              if (f === "/api" || f.startsWith("/api/"))
                return ye({ url: n, router: d }), new Promise(() => {});
              let g =
                  T ||
                  (yield d
                    .fetchComponent(f)
                    .then((S) => ({
                      Component: S.page,
                      styleSheets: S.styleSheets,
                      __N_SSG: S.mod.__N_SSG,
                      __N_SSP: S.mod.__N_SSP,
                      __N_RSC: !!S.mod.__next_rsc__,
                    }))),
                E = g.__N_RSC && g.__N_SSP,
                L = g.__N_SSG || g.__N_SSP || g.__N_RSC,
                { props: x } = yield d._getData(
                  Ne(function* () {
                    if (L && !E) {
                      let { json: S } = y?.json
                        ? y
                        : yield Te({
                            dataHref: d.pageLoader.getDataHref({
                              href: V.formatWithValidation({
                                pathname: r,
                                query: a,
                              }),
                              asPath: o,
                              locale: c,
                            }),
                            isServerRender: d.isSsr,
                            parseJSON: !0,
                            inflightCache: d.sdc,
                            persistCache: !l,
                            isPrefetch: !1,
                            unstable_skipClientCache: u,
                          });
                      return { props: S || {} };
                    }
                    return {
                      headers: {},
                      props: yield d.getInitialProps(g.Component, {
                        pathname: r,
                        query: a,
                        asPath: n,
                        locale: c,
                        locales: d.locales,
                        defaultLocale: d.defaultLocale,
                      }),
                    };
                  })
                );
              if (g.__N_SSP && O.dataHref) {
                let S = new URL(O.dataHref, window.location.href).href;
                delete d.sdc[S];
              }
              !d.isPreview &&
                g.__N_SSG &&
                Te(
                  Object.assign({}, O, {
                    isBackground: !0,
                    persistCache: !1,
                    inflightCache: _i,
                  })
                ).catch(() => {});
              let M;
              return (
                g.__N_RSC &&
                  (M = {
                    __flight__: E
                      ? (yield d._getData(() =>
                          d._getFlightData(
                            V.formatWithValidation({
                              query: ie({}, a, { __flight__: "1" }),
                              pathname: ce.isDynamicRoute(f)
                                ? pt(r, ue.parseRelativeUrl(o).pathname, a)
                                    .result
                                : r,
                            })
                          )
                        )).data
                      : x.__flight__,
                  }),
                (x.pageProps = Object.assign({}, x.pageProps, M)),
                (g.props = x),
                (g.route = f),
                (g.query = a),
                (g.resolvedAs = o),
                (d.components[f] = g),
                g
              );
            } catch (p) {
              return d.handleRouteInfoError(ct.getProperError(p), r, a, n, s);
            }
          })();
        }
        set(t, r, a) {
          return (
            (this.state = t), this.sub(r, this.components["/_app"].Component, a)
          );
        }
        beforePopState(t) {
          this._bps = t;
        }
        onlyAHashChange(t) {
          if (!this.asPath) return !1;
          let [r, a] = this.asPath.split("#"),
            [n, o] = t.split("#");
          return o && r === n && a === o ? !0 : r !== n ? !1 : a !== o;
        }
        scrollToHash(t) {
          let [, r = ""] = t.split("#");
          if (r === "" || r === "top") {
            window.scrollTo(0, 0);
            return;
          }
          let a = decodeURIComponent(r),
            n = document.getElementById(a);
          if (n) {
            n.scrollIntoView();
            return;
          }
          let o = document.getElementsByName(a)[0];
          o && o.scrollIntoView();
        }
        urlIsNew(t) {
          return this.asPath !== t;
        }
        prefetch(t, r = t, a = {}) {
          var n = this;
          return Ne(function* () {
            let o = ue.parseRelativeUrl(t),
              { pathname: s, query: c } = o,
              i = yield n.pageLoader.getPageList(),
              l = r,
              u = typeof a.locale < "u" ? a.locale || void 0 : n.locale,
              d = yield dt({ asPath: r, locale: u, router: n });
            (o.pathname = He(o.pathname, i)),
              ce.isDynamicRoute(o.pathname) &&
                ((s = o.pathname),
                (o.pathname = s),
                Object.assign(
                  c,
                  ke.getRouteMatcher(Ce.getRouteRegex(o.pathname))(
                    Ae.parsePath(r).pathname
                  ) || {}
                ),
                d || (t = V.formatWithValidation(o)));
            let f = yield ln({
              fetchData: () =>
                Te({
                  dataHref: n.pageLoader.getDataHref({
                    href: V.formatWithValidation({ pathname: s, query: c }),
                    skipInterpolation: !0,
                    asPath: l,
                    locale: u,
                  }),
                  hasMiddleware: !0,
                  isServerRender: n.isSsr,
                  parseJSON: !0,
                  inflightCache: n.sdc,
                  persistCache: !n.isPreview,
                  isPrefetch: !0,
                }),
              asPath: r,
              locale: u,
              router: n,
            });
            if (
              (f?.effect.type === "rewrite" &&
                ((o.pathname = f.effect.resolvedHref),
                (s = f.effect.resolvedHref),
                (c = ie({}, c, f.effect.parsedAs.query)),
                (l = f.effect.parsedAs.pathname),
                (t = V.formatWithValidation(o))),
              f?.effect.type === "redirect-external")
            )
              return;
            let h = de.removeTrailingSlash(s);
            yield Promise.all([
              n.pageLoader
                ._isSsg(h)
                .then((m) =>
                  m
                    ? Te({
                        dataHref:
                          f?.dataHref ||
                          n.pageLoader.getDataHref({
                            href: t,
                            asPath: l,
                            locale: u,
                          }),
                        isServerRender: !1,
                        parseJSON: !0,
                        inflightCache: n.sdc,
                        persistCache: !n.isPreview,
                        isPrefetch: !0,
                        unstable_skipClientCache:
                          a.unstable_skipClientCache ||
                          (a.priority &&
                            !!process.env.__NEXT_OPTIMISTIC_CLIENT_CACHE),
                      }).then(() => !1)
                    : !1
                ),
              n.pageLoader[a.priority ? "loadPage" : "prefetch"](h),
            ]);
          })();
        }
        fetchComponent(t) {
          var r = this;
          return Ne(function* () {
            let a = sn({ route: t, router: r });
            try {
              let n = yield r.pageLoader.loadPage(t);
              return a(), n;
            } catch (n) {
              throw (a(), n);
            }
          })();
        }
        _getData(t) {
          let r = !1,
            a = () => {
              r = !0;
            };
          return (
            (this.clc = a),
            t().then((n) => {
              if ((a === this.clc && (this.clc = null), r)) {
                let o = new Error("Loading initial props cancelled");
                throw ((o.cancelled = !0), o);
              }
              return n;
            })
          );
        }
        _getFlightData(t) {
          return Te({
            dataHref: t,
            isServerRender: !0,
            parseJSON: !1,
            inflightCache: this.sdc,
            persistCache: !1,
            isPrefetch: !1,
          }).then(({ text: r }) => ({ data: r }));
        }
        getInitialProps(t, r) {
          let { Component: a } = this.components["/_app"],
            n = this._wrapApp(a);
          return (
            (r.AppTree = n),
            ne.loadGetInitialProps(a, {
              AppTree: n,
              Component: t,
              router: this,
              ctx: r,
            })
          );
        }
        get route() {
          return this.state.route;
        }
        get pathname() {
          return this.state.pathname;
        }
        get query() {
          return this.state.query;
        }
        get asPath() {
          return this.state.asPath;
        }
        get locale() {
          return this.state.locale;
        }
        get isFallback() {
          return this.state.isFallback;
        }
        get isPreview() {
          return this.state.isPreview;
        }
        constructor(
          t,
          r,
          a,
          {
            initialProps: n,
            pageLoader: o,
            App: s,
            wrapApp: c,
            Component: i,
            err: l,
            subscription: u,
            isFallback: d,
            locale: f,
            locales: h,
            defaultLocale: m,
            domainLocales: P,
            isPreview: p,
            isRsc: v,
          }
        ) {
          (this.sdc = {}),
            (this.isFirstPopStateEvent = !0),
            (this._key = Er()),
            (this.onPopState = (y) => {
              let { isFirstPopStateEvent: g } = this;
              this.isFirstPopStateEvent = !1;
              let E = y.state;
              if (!E) {
                let { pathname: ae, query: pe } = this;
                this.changeState(
                  "replaceState",
                  V.formatWithValidation({
                    pathname: ee.addBasePath(ae),
                    query: pe,
                  }),
                  ne.getURL()
                );
                return;
              }
              if (E.__NA) {
                window.location.reload();
                return;
              }
              if (
                !E.__N ||
                (g && this.locale === E.options.locale && E.as === this.asPath)
              )
                return;
              let L,
                { url: x, as: M, options: S, key: b } = E;
              if ("" && manualScrollRestoration && this._key !== b) {
                try {
                } catch (ae) {}
                try {
                } catch (ae) {}
              }
              this._key = b;
              let { pathname: G } = ue.parseRelativeUrl(x);
              (this.isSsr &&
                M === ee.addBasePath(this.asPath) &&
                G === ee.addBasePath(this.pathname)) ||
                (this._bps && !this._bps(E)) ||
                this.change(
                  "replaceState",
                  x,
                  M,
                  Object.assign({}, S, {
                    shallow: S.shallow && this._shallow,
                    locale: S.locale || this.defaultLocale,
                    _h: 0,
                  }),
                  L
                );
            });
          let T = de.removeTrailingSlash(t);
          (this.components = {}),
            t !== "/_error" &&
              (this.components[T] = {
                Component: i,
                initial: !0,
                props: n,
                err: l,
                __N_SSG: n && n.__N_SSG,
                __N_SSP: n && n.__N_SSP,
                __N_RSC: !!v,
              }),
            (this.components["/_app"] = { Component: s, styleSheets: [] }),
            (this.events = j.events),
            (this.pageLoader = o);
          let O = ce.isDynamicRoute(t) && self.__NEXT_DATA__.autoExport;
          if (
            ((this.basePath = ""),
            (this.sub = u),
            (this.clc = null),
            (this._wrapApp = c),
            (this.isSsr = !0),
            (this.isLocaleDomain = !1),
            (this.isReady = !!(
              self.__NEXT_DATA__.gssp ||
              self.__NEXT_DATA__.gip ||
              (self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp) ||
              (!O && !self.location.search && !0)
            )),
            (this.state = {
              route: T,
              pathname: t,
              query: r,
              asPath: O ? t : a,
              isPreview: !!p,
              locale: void 0,
              isFallback: d,
            }),
            (this._initialMatchesMiddlewarePromise = Promise.resolve(!1)),
            typeof window < "u")
          ) {
            if (!a.startsWith("//")) {
              let y = { locale: f },
                g = ne.getURL();
              this._initialMatchesMiddlewarePromise = dt({
                router: this,
                locale: f,
                asPath: g,
              }).then(
                (E) => (
                  (y._shouldResolveHref = a !== t),
                  this.changeState(
                    "replaceState",
                    E
                      ? g
                      : V.formatWithValidation({
                          pathname: ee.addBasePath(t),
                          query: r,
                        }),
                    g,
                    y
                  ),
                  E
                )
              );
            }
            window.addEventListener("popstate", this.onPopState);
          }
        }
      };
    j.events = hi.default();
    function dt(e) {
      return Promise.resolve(e.router.pageLoader.getMiddleware()).then((t) => {
        let { pathname: r } = Ae.parsePath(e.asPath),
          a = Be.hasBasePath(r) ? le.removeBasePath(r) : r,
          n = t?.location;
        return !!n && new RegExp(n).test(We.addLocale(a, e.locale));
      });
    }
    function ln(e) {
      return dt(e).then((t) =>
        t && e.fetchData
          ? e
              .fetchData()
              .then((r) =>
                gi(r.dataHref, r.response, e).then((a) => ({
                  dataHref: r.dataHref,
                  json: r.json,
                  response: r.response,
                  text: r.text,
                  effect: a,
                }))
              )
              .catch((r) => null)
          : null
      );
    }
    function gi(e, t, r) {
      let a = {
          basePath: r.router.basePath,
          i18n: { locales: r.router.locales },
          trailingSlash: Boolean(""),
        },
        n = t.headers.get("x-nextjs-rewrite"),
        o = n || t.headers.get("x-nextjs-matched-path"),
        s = t.headers.get("x-matched-path");
      if (
        (s &&
          !o &&
          !s.includes("__next_data_catchall") &&
          !s.includes("/_error") &&
          !s.includes("/404") &&
          (o = s),
        o)
      ) {
        if (o.startsWith("/")) {
          let u = ue.parseRelativeUrl(o),
            d = ut.getNextPathnameInfo(u.pathname, {
              nextConfig: a,
              parseData: !0,
            }),
            f = de.removeTrailingSlash(d.pathname);
          return Promise.all([
            r.router.pageLoader.getPageList(),
            ft.getClientBuildManifest(),
          ]).then(([h, { __rewrites: m }]) => {
            let P = We.addLocale(d.pathname, d.locale);
            if (
              ce.isDynamicRoute(P) ||
              (!n &&
                h.includes(
                  wr.normalizeLocalePath(le.removeBasePath(P), r.router.locales)
                    .pathname
                ))
            ) {
              let v = ut.getNextPathnameInfo(ue.parseRelativeUrl(e).pathname, {
                parseData: !0,
              });
              (P = ee.addBasePath(v.pathname)), (u.pathname = P);
            }
            if (!h.includes(f)) {
              let v = He(f, h);
              v !== f && (f = v);
            }
            let p = h.includes(f)
              ? f
              : He(
                  wr.normalizeLocalePath(
                    le.removeBasePath(u.pathname),
                    r.router.locales
                  ).pathname,
                  h
                );
            if (ce.isDynamicRoute(p)) {
              let v = ke.getRouteMatcher(Ce.getRouteRegex(p))(P);
              Object.assign(u.query, v || {});
            }
            return { type: "rewrite", parsedAs: u, resolvedHref: p };
          });
        }
        let i = Ae.parsePath(e),
          l = an.formatNextPathnameInfo(
            ie(
              {},
              ut.getNextPathnameInfo(i.pathname, {
                nextConfig: a,
                parseData: !0,
              }),
              { defaultLocale: r.router.defaultLocale, buildId: "" }
            )
          );
        return Promise.resolve({
          type: "redirect-external",
          destination: `${l}${i.query}${i.hash}`,
        });
      }
      let c = t.headers.get("x-nextjs-redirect");
      if (c) {
        if (c.startsWith("/")) {
          let i = Ae.parsePath(c),
            l = an.formatNextPathnameInfo(
              ie(
                {},
                ut.getNextPathnameInfo(i.pathname, {
                  nextConfig: a,
                  parseData: !0,
                }),
                { defaultLocale: r.router.defaultLocale, buildId: "" }
              )
            );
          return Promise.resolve({
            type: "redirect-internal",
            newAs: `${l}${i.query}${i.hash}`,
            newUrl: `${l}${i.query}${i.hash}`,
          });
        }
        return Promise.resolve({ type: "redirect-external", destination: c });
      }
      return Promise.resolve({ type: "next" });
    }
    fe.default = j;
  });
  var pn = _((mt) => {
    "use strict";
    Object.defineProperty(mt, "__esModule", { value: !0 });
    mt.RouterContext = void 0;
    var vi = _e().default,
      yi = vi(ge()),
      Pi = yi.default.createContext(null);
    mt.RouterContext = Pi;
  });
  var mn = _((he) => {
    "use strict";
    Object.defineProperty(he, "__esModule", { value: !0 });
    he.GlobalLayoutRouterContext =
      he.LayoutRouterContext =
      he.AppRouterContext =
        void 0;
    var wi = _e().default,
      Sr = wi(ge()),
      Ri = Sr.default.createContext(null);
    he.AppRouterContext = Ri;
    var Ei = Sr.default.createContext(null);
    he.LayoutRouterContext = Ei;
    var Si = Sr.default.createContext(null);
    he.GlobalLayoutRouterContext = Si;
  });
  var yn = _((te, vn) => {
    "use strict";
    Object.defineProperty(te, "__esModule", { value: !0 });
    te.useIntersection = xi;
    var ze = ge(),
      _n = Ze(),
      gn = typeof IntersectionObserver == "function";
    function xi({ rootRef: e, rootMargin: t, disabled: r }) {
      let a = r || !gn,
        n = ze.useRef(),
        [o, s] = ze.useState(!1),
        [c, i] = ze.useState(null);
      ze.useEffect(() => {
        if (gn)
          return (
            n.current && (n.current(), (n.current = void 0)),
            a || o
              ? void 0
              : (c &&
                  c.tagName &&
                  (n.current = bi(c, (u) => u && s(u), {
                    root: e?.current,
                    rootMargin: t,
                  })),
                () => {
                  n.current == null || n.current(), (n.current = void 0);
                })
          );
        if (!o) {
          let u = _n.requestIdleCallback(() => s(!0));
          return () => _n.cancelIdleCallback(u);
        }
      }, [c, a, t, e, o]);
      let l = ze.useCallback(() => {
        s(!1);
      }, []);
      return [i, o, l];
    }
    function bi(e, t, r) {
      let { id: a, observer: n, elements: o } = Oi(r);
      return (
        o.set(e, t),
        n.observe(e),
        function () {
          if ((o.delete(e), n.unobserve(e), o.size === 0)) {
            n.disconnect(), xr.delete(a);
            let c = _t.findIndex(
              (i) => i.root === a.root && i.margin === a.margin
            );
            c > -1 && _t.splice(c, 1);
          }
        }
      );
    }
    var xr = new Map(),
      _t = [];
    function Oi(e) {
      let t = { root: e.root || null, margin: e.rootMargin || "" },
        r = _t.find((s) => s.root === t.root && s.margin === t.margin),
        a;
      if (r && ((a = xr.get(r)), a)) return a;
      let n = new Map(),
        o = new IntersectionObserver((s) => {
          s.forEach((c) => {
            let i = n.get(c.target),
              l = c.isIntersecting || c.intersectionRatio > 0;
            i && l && i(l);
          });
        }, e);
      return (
        (a = { id: t, observer: o, elements: n }), _t.push(t), xr.set(t, a), a
      );
    }
    (typeof te.default == "function" ||
      (typeof te.default == "object" && te.default !== null)) &&
      typeof te.default.__esModule > "u" &&
      (Object.defineProperty(te.default, "__esModule", { value: !0 }),
      Object.assign(te.default, te),
      (vn.exports = te.default));
  });
  var wn = _((re, Pn) => {
    "use strict";
    Object.defineProperty(re, "__esModule", { value: !0 });
    re.getDomainLocale = Li;
    function Li(e, t, r, a) {
      return !1;
    }
    (typeof re.default == "function" ||
      (typeof re.default == "object" && re.default !== null)) &&
      typeof re.default.__esModule > "u" &&
      (Object.defineProperty(re.default, "__esModule", { value: !0 }),
      Object.assign(re.default, re),
      (Pn.exports = re.default));
  });
  var Sn = _((F, En) => {
    "use strict";
    Object.defineProperty(F, "__esModule", { value: !0 });
    F.default = void 0;
    var Ni = _e().default,
      Ti = Rt().default,
      B = Ni(ge()),
      Pe = hn(),
      Ci = ur(),
      Ai = pn(),
      Mi = mn(),
      qi = yn(),
      ji = wn(),
      Ii = fr(),
      $i = typeof B.default.useTransition < "u",
      Rn = {};
    function br(e, t, r, a) {
      if (typeof window > "u" || !e || !Pe.isLocalURL(t)) return;
      e.prefetch(t, r, a).catch((o) => {});
      let n = a && typeof a.locale < "u" ? a.locale : e && e.locale;
      Rn[t + "%" + r + (n ? "%" + n : "")] = !0;
    }
    function Di(e) {
      let { target: t } = e.currentTarget;
      return (
        (t && t !== "_self") ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey ||
        (e.nativeEvent && e.nativeEvent.which === 2)
      );
    }
    function Ui(e, t, r, a, n, o, s, c, i, l) {
      let { nodeName: u } = e.currentTarget;
      if (u.toUpperCase() === "A" && (Di(e) || !Pe.isLocalURL(r))) return;
      e.preventDefault();
      let f = () => {
        "softPush" in t && "softReplace" in t
          ? t[o ? (n ? "softReplace" : "softPush") : n ? "replace" : "push"](r)
          : t[n ? "replace" : "push"](r, a, {
              shallow: s,
              locale: i,
              scroll: c,
            });
      };
      l ? l(f) : f();
    }
    var ki = B.default.forwardRef(function (t, r) {
        let a,
          {
            href: n,
            as: o,
            children: s,
            prefetch: c,
            passHref: i,
            replace: l,
            soft: u,
            shallow: d,
            scroll: f,
            locale: h,
            onClick: m,
            onMouseEnter: P,
            onTouchStart: p,
            legacyBehavior: v = Boolean(
              process.env.__NEXT_NEW_LINK_BEHAVIOR
            ) !== !0,
          } = t,
          T = Ti(t, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "soft",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (a = s),
          v &&
            (typeof a == "string" || typeof a == "number") &&
            (a = B.default.createElement("a", null, a));
        let O = c !== !1,
          [, y] = $i ? B.default.useTransition() : [],
          g = B.default.useContext(Ai.RouterContext),
          E = B.default.useContext(Mi.AppRouterContext);
        E && (g = E);
        let { href: L, as: x } = B.default.useMemo(() => {
            let [w, C] = Pe.resolveHref(g, n, !0);
            return { href: w, as: o ? Pe.resolveHref(g, o) : C || w };
          }, [g, n, o]),
          M = B.default.useRef(L),
          S = B.default.useRef(x),
          b;
        if (v)
          if (!1)
            try {
            } catch (w) {}
          else b = B.default.Children.only(a);
        let G = v ? b && typeof b == "object" && b.ref : r,
          [ae, pe, Me] = qi.useIntersection({ rootMargin: "200px" }),
          R = B.default.useCallback(
            (w) => {
              (S.current !== x || M.current !== L) &&
                (Me(), (S.current = x), (M.current = L)),
                ae(w),
                G &&
                  (typeof G == "function"
                    ? G(w)
                    : typeof G == "object" && (G.current = w));
            },
            [x, G, L, Me, ae]
          );
        B.default.useEffect(() => {
          let w = pe && O && Pe.isLocalURL(L),
            C = typeof h < "u" ? h : g && g.locale,
            oe = Rn[L + "%" + x + (C ? "%" + C : "")];
          w && !oe && br(g, L, x, { locale: C });
        }, [x, L, pe, h, O, g]);
        let q = {
          ref: R,
          onClick: (w) => {
            !v && typeof m == "function" && m(w),
              v &&
                b.props &&
                typeof b.props.onClick == "function" &&
                b.props.onClick(w),
              w.defaultPrevented ||
                Ui(w, g, L, x, l, u, d, f, h, E ? y : void 0);
          },
          onMouseEnter: (w) => {
            !v && typeof P == "function" && P(w),
              v &&
                b.props &&
                typeof b.props.onMouseEnter == "function" &&
                b.props.onMouseEnter(w),
              Pe.isLocalURL(L) && br(g, L, x, { priority: !0 });
          },
          onTouchStart: (w) => {
            !v && typeof p == "function" && p(w),
              v &&
                b.props &&
                typeof b.props.onTouchStart == "function" &&
                b.props.onTouchStart(w),
              Pe.isLocalURL(L) && br(g, L, x, { priority: !0 });
          },
        };
        if (!v || i || (b.type === "a" && !("href" in b.props))) {
          let w = typeof h < "u" ? h : g && g.locale,
            C =
              g &&
              g.isLocaleDomain &&
              ji.getDomainLocale(x, w, g.locales, g.domainLocales);
          q.href =
            C || Ii.addBasePath(Ci.addLocale(x, w, g && g.defaultLocale));
        }
        return v
          ? B.default.cloneElement(b, q)
          : B.default.createElement("a", Object.assign({}, T, q), a);
      }),
      Bi = ki;
    F.default = Bi;
    (typeof F.default == "function" ||
      (typeof F.default == "object" && F.default !== null)) &&
      typeof F.default.__esModule > "u" &&
      (Object.defineProperty(F.default, "__esModule", { value: !0 }),
      Object.assign(F.default, F),
      (En.exports = F.default));
  });
  var bn = _((Wl, xn) => {
    xn.exports = Sn();
  });
  var Vi = {};
  qn(Vi, { default: () => zi, frontmatter: () => Hi });
  var X = Lr(Tr());
  var Ve = Lr(bn()),
    On = () =>
      React.createElement(
        "header",
        null,
        React.createElement(
          "nav",
          null,
          React.createElement(
            "ul",
            { "data-current": !0 },
            React.createElement(
              "li",
              null,
              React.createElement(
                Ve.default,
                { href: "/" },
                React.createElement("a", null, "Home")
              )
            )
          ),
          React.createElement(
            "ul",
            null,
            React.createElement(
              "li",
              null,
              React.createElement(
                Ve.default,
                { href: "/blog" },
                React.createElement("a", null, "Blog")
              )
            )
          ),
          React.createElement(
            "ul",
            null,
            React.createElement(
              "li",
              null,
              React.createElement(
                Ve.default,
                { href: "/projects" },
                React.createElement("a", null, "Projects")
              )
            )
          ),
          React.createElement(
            "ul",
            null,
            React.createElement(
              "li",
              null,
              React.createElement(
                Ve.default,
                { href: "/support-me" },
                React.createElement("a", null, "Support me")
              )
            )
          )
        )
      );
  var Hi = { created_at: new Date(1657937229e3) };
  function Ln(e) {
    let t = Object.assign({ h1: "h1", p: "p" }, e.components);
    return (0, X.jsxs)(X.Fragment, {
      children: [
        (0, X.jsx)(t.h1, { children: "Another test" }),
        `
`,
        (0, X.jsx)(t.p, { children: "Hello and welcome!" }),
        `
`,
        (0, X.jsx)(On, {}),
        `
`,
        (0, X.jsx)(t.p, { children: "This was published on" }),
        `
`,
        (0, X.jsx)(t.p, {
          children: `BTW, the difference between this article and the other one is that this is created as part
of a portable "content" folder, while the other is created as a
standalone MDX page within the NextJS pages tree.`,
        }),
      ],
    });
  }
  function Wi(e = {}) {
    let { wrapper: t } = e.components || {};
    return t
      ? (0, X.jsx)(t, Object.assign({}, e, { children: (0, X.jsx)(Ln, e) }))
      : Ln(e);
  }
  var zi = Wi;
  return jn(Vi);
})();
return Component;
