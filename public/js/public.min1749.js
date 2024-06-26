/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
    i = Object.getPrototypeOf,
    r = n.slice,
    o = n.flat
      ? function (e) {
          return n.flat.call(e);
        }
      : function (e) {
          return n.concat.apply([], e);
        },
    a = n.push,
    s = n.indexOf,
    l = {},
    u = l.toString,
    c = l.hasOwnProperty,
    f = c.toString,
    d = f.call(Object),
    h = {},
    p = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    v = function (e) {
      return null != e && e === e.window;
    },
    m = e.document,
    g = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function y(e, t, n) {
    var i,
      r,
      o = (n = n || m).createElement("script");
    if (((o.text = e), t))
      for (i in g)
        (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
          o.setAttribute(i, r);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function b(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? l[u.call(e)] || "object"
      : typeof e;
  }
  var w = "3.5.1",
    _ = function (e, t) {
      return new _.fn.init(e, t);
    };
  function x(e) {
    var t = !!e && "length" in e && e.length,
      n = b(e);
    return (
      !p(e) &&
      !v(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (_.fn = _.prototype =
    {
      jquery: w,
      constructor: _,
      length: 0,
      toArray: function () {
        return r.call(this);
      },
      get: function (e) {
        return null == e
          ? r.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = _.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return _.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          _.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(r.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          _.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          _.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: a,
      sort: n.sort,
      splice: n.splice,
    }),
    (_.extend = _.fn.extend =
      function () {
        var e,
          t,
          n,
          i,
          r,
          o,
          a = arguments[0] || {},
          s = 1,
          l = arguments.length,
          u = !1;
        for (
          "boolean" == typeof a && ((u = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || p(a) || (a = {}),
            s === l && ((a = this), s--);
          s < l;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (i = e[t]),
                "__proto__" !== t &&
                  a !== i &&
                  (u && i && (_.isPlainObject(i) || (r = Array.isArray(i)))
                    ? ((n = a[t]),
                      (o =
                        r && !Array.isArray(n)
                          ? []
                          : r || _.isPlainObject(n)
                          ? n
                          : {}),
                      (r = !1),
                      (a[t] = _.extend(u, o, i)))
                    : void 0 !== i && (a[t] = i));
        return a;
      }),
    _.extend({
      expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== u.call(e)) &&
          (!(t = i(e)) ||
            ("function" ==
              typeof (n = c.call(t, "constructor") && t.constructor) &&
              f.call(n) === d))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        y(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          i = 0;
        if (x(e)) {
          for (n = e.length; i < n; i++)
            if (!1 === t.call(e[i], i, e[i])) break;
        } else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (x(Object(e))
              ? _.merge(n, "string" == typeof e ? [e] : e)
              : a.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : s.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
        return (e.length = r), e;
      },
      grep: function (e, t, n) {
        for (var i = [], r = 0, o = e.length, a = !n; r < o; r++)
          !t(e[r], r) !== a && i.push(e[r]);
        return i;
      },
      map: function (e, t, n) {
        var i,
          r,
          a = 0,
          s = [];
        if (x(e))
          for (i = e.length; a < i; a++)
            null != (r = t(e[a], a, n)) && s.push(r);
        else for (a in e) null != (r = t(e[a], a, n)) && s.push(r);
        return o(s);
      },
      guid: 1,
      support: h,
    }),
    "function" == typeof Symbol && (_.fn[Symbol.iterator] = n[Symbol.iterator]),
    _.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var C = (function (e) {
    var t,
      n,
      i,
      r,
      o,
      a,
      s,
      l,
      u,
      c,
      f,
      d,
      h,
      p,
      v,
      m,
      g,
      y,
      b,
      w = "sizzle" + 1 * new Date(),
      _ = e.document,
      x = 0,
      C = 0,
      k = le(),
      T = le(),
      E = le(),
      S = le(),
      $ = function (e, t) {
        return e === t && (f = !0), 0;
      },
      A = {}.hasOwnProperty,
      O = [],
      I = O.pop,
      j = O.push,
      L = O.push,
      D = O.slice,
      N = function (e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1;
      },
      P =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      q = "[\\x20\\t\\r\\n\\f]",
      R =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        q +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      M =
        "\\[" +
        q +
        "*(" +
        R +
        ")(?:" +
        q +
        "*([*^$|!~]?=)" +
        q +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        R +
        "))|)" +
        q +
        "*\\]",
      H =
        ":(" +
        R +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        M +
        ")*)|.*)\\)|)",
      F = new RegExp(q + "+", "g"),
      U = new RegExp("^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$", "g"),
      B = new RegExp("^" + q + "*," + q + "*"),
      W = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"),
      z = new RegExp(q + "|>"),
      V = new RegExp(H),
      Q = new RegExp("^" + R + "$"),
      X = {
        ID: new RegExp("^#(" + R + ")"),
        CLASS: new RegExp("^\\.(" + R + ")"),
        TAG: new RegExp("^(" + R + "|[*])"),
        ATTR: new RegExp("^" + M),
        PSEUDO: new RegExp("^" + H),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            q +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            q +
            "*(?:([+-]|)" +
            q +
            "*(\\d+)|))" +
            q +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + P + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            q +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            q +
            "*((?:-\\d)?\\d*)" +
            q +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      K = /HTML$/i,
      Y = /^(?:input|select|textarea|button)$/i,
      G = /^h\d$/i,
      J = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + q + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      re = function (e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        d();
      },
      ae = we(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      L.apply((O = D.call(_.childNodes)), _.childNodes),
        O[_.childNodes.length].nodeType;
    } catch (t) {
      L = {
        apply: O.length
          ? function (e, t) {
              j.apply(e, D.call(t));
            }
          : function (e, t) {
              var n = e.length,
                i = 0;
              while ((e[n++] = t[i++]));
              e.length = n - 1;
            },
      };
    }
    function se(e, t, i, r) {
      var o,
        s,
        u,
        c,
        f,
        p,
        g,
        y = t && t.ownerDocument,
        _ = t ? t.nodeType : 9;
      if (
        ((i = i || []),
        "string" != typeof e || !e || (1 !== _ && 9 !== _ && 11 !== _))
      )
        return i;
      if (!r && (d(t), (t = t || h), v)) {
        if (11 !== _ && (f = Z.exec(e)))
          if ((o = f[1])) {
            if (9 === _) {
              if (!(u = t.getElementById(o))) return i;
              if (u.id === o) return i.push(u), i;
            } else if (y && (u = y.getElementById(o)) && b(t, u) && u.id === o)
              return i.push(u), i;
          } else {
            if (f[2]) return L.apply(i, t.getElementsByTagName(e)), i;
            if (
              (o = f[3]) &&
              n.getElementsByClassName &&
              t.getElementsByClassName
            )
              return L.apply(i, t.getElementsByClassName(o)), i;
          }
        if (
          n.qsa &&
          !S[e + " "] &&
          (!m || !m.test(e)) &&
          (1 !== _ || "object" !== t.nodeName.toLowerCase())
        ) {
          if (((g = e), (y = t), 1 === _ && (z.test(e) || W.test(e)))) {
            ((y = (ee.test(e) && ge(t.parentNode)) || t) === t && n.scope) ||
              ((c = t.getAttribute("id"))
                ? (c = c.replace(ie, re))
                : t.setAttribute("id", (c = w))),
              (s = (p = a(e)).length);
            while (s--) p[s] = (c ? "#" + c : ":scope") + " " + be(p[s]);
            g = p.join(",");
          }
          try {
            return L.apply(i, y.querySelectorAll(g)), i;
          } catch (t) {
            S(e, !0);
          } finally {
            c === w && t.removeAttribute("id");
          }
        }
      }
      return l(e.replace(U, "$1"), t, i, r);
    }
    function le() {
      var e = [];
      return function t(n, r) {
        return (
          e.push(n + " ") > i.cacheLength && delete t[e.shift()],
          (t[n + " "] = r)
        );
      };
    }
    function ue(e) {
      return (e[w] = !0), e;
    }
    function ce(e) {
      var t = h.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) i.attrHandle[n[r]] = t;
    }
    function de(e, t) {
      var n = t && e,
        i =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function he(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function pe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function ve(e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function me(e) {
      return ue(function (t) {
        return (
          (t = +t),
          ue(function (n, i) {
            var r,
              o = e([], n.length, t),
              a = o.length;
            while (a--) n[(r = o[a])] && (n[r] = !(i[r] = n[r]));
          })
        );
      });
    }
    function ge(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (t in ((n = se.support = {}),
    (o = se.isXML =
      function (e) {
        var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
        return !K.test(t || (n && n.nodeName) || "HTML");
      }),
    (d = se.setDocument =
      function (e) {
        var t,
          r,
          a = e ? e.ownerDocument || e : _;
        return (
          a != h &&
            9 === a.nodeType &&
            a.documentElement &&
            ((p = (h = a).documentElement),
            (v = !o(h)),
            _ != h &&
              (r = h.defaultView) &&
              r.top !== r &&
              (r.addEventListener
                ? r.addEventListener("unload", oe, !1)
                : r.attachEvent && r.attachEvent("onunload", oe)),
            (n.scope = ce(function (e) {
              return (
                p.appendChild(e).appendChild(h.createElement("div")),
                "undefined" != typeof e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (n.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (n.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(h.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (n.getElementsByClassName = J.test(h.getElementsByClassName)),
            (n.getById = ce(function (e) {
              return (
                (p.appendChild(e).id = w),
                !h.getElementsByName || !h.getElementsByName(w).length
              );
            })),
            n.getById
              ? ((i.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (i.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && v) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((i.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    var n =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return n && n.value === t;
                  };
                }),
                (i.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && v) {
                    var n,
                      i,
                      r,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      (r = t.getElementsByName(e)), (i = 0);
                      while ((o = r[i++]))
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (i.find.TAG = n.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : n.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    while ((n = o[r++])) 1 === n.nodeType && i.push(n);
                    return i;
                  }
                  return o;
                }),
            (i.find.CLASS =
              n.getElementsByClassName &&
              function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && v)
                  return t.getElementsByClassName(e);
              }),
            (g = []),
            (m = []),
            (n.qsa = J.test(h.querySelectorAll)) &&
              (ce(function (e) {
                var t;
                (p.appendChild(e).innerHTML =
                  "<a id='" +
                  w +
                  "'></a><select id='" +
                  w +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    m.push("[*^$]=" + q + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    m.push("\\[" + q + "*(?:value|" + P + ")"),
                  e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="),
                  (t = h.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    m.push("\\[" + q + "*name" + q + "*=" + q + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || m.push(":checked"),
                  e.querySelectorAll("a#" + w + "+*").length ||
                    m.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  m.push("[\\r\\n\\f]");
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = h.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    m.push("name" + q + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    m.push(":enabled", ":disabled"),
                  (p.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    m.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  m.push(",.*:");
              })),
            (n.matchesSelector = J.test(
              (y =
                p.matches ||
                p.webkitMatchesSelector ||
                p.mozMatchesSelector ||
                p.oMatchesSelector ||
                p.msMatchesSelector)
            )) &&
              ce(function (e) {
                (n.disconnectedMatch = y.call(e, "*")),
                  y.call(e, "[s!='']:x"),
                  g.push("!=", H);
              }),
            (m = m.length && new RegExp(m.join("|"))),
            (g = g.length && new RegExp(g.join("|"))),
            (t = J.test(p.compareDocumentPosition)),
            (b =
              t || J.test(p.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      i = t && t.parentNode;
                    return (
                      e === i ||
                      !(
                        !i ||
                        1 !== i.nodeType ||
                        !(n.contains
                          ? n.contains(i)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(i))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            ($ = t
              ? function (e, t) {
                  if (e === t) return (f = !0), 0;
                  var i =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    i ||
                    (1 &
                      (i =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!n.sortDetached && t.compareDocumentPosition(e) === i)
                      ? e == h || (e.ownerDocument == _ && b(_, e))
                        ? -1
                        : t == h || (t.ownerDocument == _ && b(_, t))
                        ? 1
                        : c
                        ? N(c, e) - N(c, t)
                        : 0
                      : 4 & i
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (f = !0), 0;
                  var n,
                    i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!r || !o)
                    return e == h
                      ? -1
                      : t == h
                      ? 1
                      : r
                      ? -1
                      : o
                      ? 1
                      : c
                      ? N(c, e) - N(c, t)
                      : 0;
                  if (r === o) return de(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[i] === s[i]) i++;
                  return i
                    ? de(a[i], s[i])
                    : a[i] == _
                    ? -1
                    : s[i] == _
                    ? 1
                    : 0;
                })),
          h
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (d(e),
        n.matchesSelector &&
          v &&
          !S[t + " "] &&
          (!g || !g.test(t)) &&
          (!m || !m.test(t)))
      )
        try {
          var i = y.call(e, t);
          if (
            i ||
            n.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return i;
        } catch (e) {
          S(t, !0);
        }
      return 0 < se(t, h, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != h && d(e), b(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != h && d(e);
      var r = i.attrHandle[t.toLowerCase()],
        o = r && A.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !v) : void 0;
      return void 0 !== o
        ? o
        : n.attributes || !v
        ? e.getAttribute(t)
        : (o = e.getAttributeNode(t)) && o.specified
        ? o.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(ie, re);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        i = [],
        r = 0,
        o = 0;
      if (
        ((f = !n.detectDuplicates),
        (c = !n.sortStable && e.slice(0)),
        e.sort($),
        f)
      ) {
        while ((t = e[o++])) t === e[o] && (r = i.push(o));
        while (r--) e.splice(i[r], 1);
      }
      return (c = null), e;
    }),
    (r = se.getText =
      function (e) {
        var t,
          n = "",
          i = 0,
          o = e.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
          } else if (3 === o || 4 === o) return e.nodeValue;
        } else while ((t = e[i++])) n += r(t);
        return n;
      }),
    ((i = se.selectors =
      {
        cacheLength: 50,
        createPseudo: ue,
        match: X,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return X.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    V.test(n) &&
                    (t = a(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = k[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + q + ")" + e + "(" + q + "|$)")) &&
                k(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (e, t, n) {
            return function (i) {
              var r = se.attr(i, e);
              return null == r
                ? "!=" === t
                : !t ||
                    ((r += ""),
                    "=" === t
                      ? r === n
                      : "!=" === t
                      ? r !== n
                      : "^=" === t
                      ? n && 0 === r.indexOf(n)
                      : "*=" === t
                      ? n && -1 < r.indexOf(n)
                      : "$=" === t
                      ? n && r.slice(-n.length) === n
                      : "~=" === t
                      ? -1 < (" " + r.replace(F, " ") + " ").indexOf(n)
                      : "|=" === t &&
                        (r === n || r.slice(0, n.length + 1) === n + "-"));
            };
          },
          CHILD: function (e, t, n, i, r) {
            var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;
            return 1 === i && 0 === r
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (t, n, l) {
                  var u,
                    c,
                    f,
                    d,
                    h,
                    p,
                    v = o !== a ? "nextSibling" : "previousSibling",
                    m = t.parentNode,
                    g = s && t.nodeName.toLowerCase(),
                    y = !l && !s,
                    b = !1;
                  if (m) {
                    if (o) {
                      while (v) {
                        d = t;
                        while ((d = d[v]))
                          if (
                            s
                              ? d.nodeName.toLowerCase() === g
                              : 1 === d.nodeType
                          )
                            return !1;
                        p = v = "only" === e && !p && "nextSibling";
                      }
                      return !0;
                    }
                    if (((p = [a ? m.firstChild : m.lastChild]), a && y)) {
                      (b =
                        (h =
                          (u =
                            (c =
                              (f = (d = m)[w] || (d[w] = {}))[d.uniqueID] ||
                              (f[d.uniqueID] = {}))[e] || [])[0] === x &&
                          u[1]) && u[2]),
                        (d = h && m.childNodes[h]);
                      while ((d = (++h && d && d[v]) || (b = h = 0) || p.pop()))
                        if (1 === d.nodeType && ++b && d === t) {
                          c[e] = [x, h, b];
                          break;
                        }
                    } else if (
                      (y &&
                        (b = h =
                          (u =
                            (c =
                              (f = (d = t)[w] || (d[w] = {}))[d.uniqueID] ||
                              (f[d.uniqueID] = {}))[e] || [])[0] === x && u[1]),
                      !1 === b)
                    )
                      while ((d = (++h && d && d[v]) || (b = h = 0) || p.pop()))
                        if (
                          (s
                            ? d.nodeName.toLowerCase() === g
                            : 1 === d.nodeType) &&
                          ++b &&
                          (y &&
                            ((c =
                              (f = d[w] || (d[w] = {}))[d.uniqueID] ||
                              (f[d.uniqueID] = {}))[e] = [x, b]),
                          d === t)
                        )
                          break;
                    return (b -= r) === i || (b % i == 0 && 0 <= b / i);
                  }
                };
          },
          PSEUDO: function (e, t) {
            var n,
              r =
                i.pseudos[e] ||
                i.setFilters[e.toLowerCase()] ||
                se.error("unsupported pseudo: " + e);
            return r[w]
              ? r(t)
              : 1 < r.length
              ? ((n = [e, e, "", t]),
                i.setFilters.hasOwnProperty(e.toLowerCase())
                  ? ue(function (e, n) {
                      var i,
                        o = r(e, t),
                        a = o.length;
                      while (a--) e[(i = N(e, o[a]))] = !(n[i] = o[a]);
                    })
                  : function (e) {
                      return r(e, 0, n);
                    })
              : r;
          },
        },
        pseudos: {
          not: ue(function (e) {
            var t = [],
              n = [],
              i = s(e.replace(U, "$1"));
            return i[w]
              ? ue(function (e, t, n, r) {
                  var o,
                    a = i(e, null, r, []),
                    s = e.length;
                  while (s--) (o = a[s]) && (e[s] = !(t[s] = o));
                })
              : function (e, r, o) {
                  return (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop();
                };
          }),
          has: ue(function (e) {
            return function (t) {
              return 0 < se(e, t).length;
            };
          }),
          contains: ue(function (e) {
            return (
              (e = e.replace(te, ne)),
              function (t) {
                return -1 < (t.textContent || r(t)).indexOf(e);
              }
            );
          }),
          lang: ue(function (e) {
            return (
              Q.test(e || "") || se.error("unsupported lang: " + e),
              (e = e.replace(te, ne).toLowerCase()),
              function (t) {
                var n;
                do {
                  if (
                    (n = v
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                    );
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function (e) {
            return e === p;
          },
          focus: function (e) {
            return (
              e === h.activeElement &&
              (!h.hasFocus || h.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ve(!1),
          disabled: ve(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !i.pseudos.empty(e);
          },
          header: function (e) {
            return G.test(e.nodeName);
          },
          input: function (e) {
            return Y.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: me(function () {
            return [0];
          }),
          last: me(function (e, t) {
            return [t - 1];
          }),
          eq: me(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: me(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: me(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: me(function (e, t, n) {
            for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; ) e.push(i);
            return e;
          }),
          gt: me(function (e, t, n) {
            for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
            return e;
          }),
        },
      }).pseudos.nth = i.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      i.pseudos[t] = he(t);
    for (t in { submit: !0, reset: !0 }) i.pseudos[t] = pe(t);
    function ye() {}
    function be(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
      return i;
    }
    function we(e, t, n) {
      var i = t.dir,
        r = t.next,
        o = r || i,
        a = n && "parentNode" === o,
        s = C++;
      return t.first
        ? function (t, n, r) {
            while ((t = t[i])) if (1 === t.nodeType || a) return e(t, n, r);
            return !1;
          }
        : function (t, n, l) {
            var u,
              c,
              f,
              d = [x, s];
            if (l) {
              while ((t = t[i]))
                if ((1 === t.nodeType || a) && e(t, n, l)) return !0;
            } else
              while ((t = t[i]))
                if (1 === t.nodeType || a)
                  if (
                    ((c =
                      (f = t[w] || (t[w] = {}))[t.uniqueID] ||
                      (f[t.uniqueID] = {})),
                    r && r === t.nodeName.toLowerCase())
                  )
                    t = t[i] || t;
                  else {
                    if ((u = c[o]) && u[0] === x && u[1] === s)
                      return (d[2] = u[2]);
                    if (((c[o] = d)[2] = e(t, n, l))) return !0;
                  }
            return !1;
          };
    }
    function _e(e) {
      return 1 < e.length
        ? function (t, n, i) {
            var r = e.length;
            while (r--) if (!e[r](t, n, i)) return !1;
            return !0;
          }
        : e[0];
    }
    function xe(e, t, n, i, r) {
      for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)
        (o = e[s]) && ((n && !n(o, i, r)) || (a.push(o), u && t.push(s)));
      return a;
    }
    function Ce(e, t, n, i, r, o) {
      return (
        i && !i[w] && (i = Ce(i)),
        r && !r[w] && (r = Ce(r, o)),
        ue(function (o, a, s, l) {
          var u,
            c,
            f,
            d = [],
            h = [],
            p = a.length,
            v =
              o ||
              (function (e, t, n) {
                for (var i = 0, r = t.length; i < r; i++) se(e, t[i], n);
                return n;
              })(t || "*", s.nodeType ? [s] : s, []),
            m = !e || (!o && t) ? v : xe(v, d, e, s, l),
            g = n ? (r || (o ? e : p || i) ? [] : a) : m;
          if ((n && n(m, g, s, l), i)) {
            (u = xe(g, h)), i(u, [], s, l), (c = u.length);
            while (c--) (f = u[c]) && (g[h[c]] = !(m[h[c]] = f));
          }
          if (o) {
            if (r || e) {
              if (r) {
                (u = []), (c = g.length);
                while (c--) (f = g[c]) && u.push((m[c] = f));
                r(null, (g = []), u, l);
              }
              c = g.length;
              while (c--)
                (f = g[c]) &&
                  -1 < (u = r ? N(o, f) : d[c]) &&
                  (o[u] = !(a[u] = f));
            }
          } else (g = xe(g === a ? g.splice(p, g.length) : g)), r ? r(null, a, g, l) : L.apply(a, g);
        })
      );
    }
    function ke(e) {
      for (
        var t,
          n,
          r,
          o = e.length,
          a = i.relative[e[0].type],
          s = a || i.relative[" "],
          l = a ? 1 : 0,
          c = we(
            function (e) {
              return e === t;
            },
            s,
            !0
          ),
          f = we(
            function (e) {
              return -1 < N(t, e);
            },
            s,
            !0
          ),
          d = [
            function (e, n, i) {
              var r =
                (!a && (i || n !== u)) ||
                ((t = n).nodeType ? c(e, n, i) : f(e, n, i));
              return (t = null), r;
            },
          ];
        l < o;
        l++
      )
        if ((n = i.relative[e[l].type])) d = [we(_e(d), n)];
        else {
          if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
            for (r = ++l; r < o; r++) if (i.relative[e[r].type]) break;
            return Ce(
              1 < l && _e(d),
              1 < l &&
                be(
                  e
                    .slice(0, l - 1)
                    .concat({ value: " " === e[l - 2].type ? "*" : "" })
                ).replace(U, "$1"),
              n,
              l < r && ke(e.slice(l, r)),
              r < o && ke((e = e.slice(r))),
              r < o && be(e)
            );
          }
          d.push(n);
        }
      return _e(d);
    }
    return (
      (ye.prototype = i.filters = i.pseudos),
      (i.setFilters = new ye()),
      (a = se.tokenize =
        function (e, t) {
          var n,
            r,
            o,
            a,
            s,
            l,
            u,
            c = T[e + " "];
          if (c) return t ? 0 : c.slice(0);
          (s = e), (l = []), (u = i.preFilter);
          while (s) {
            for (a in ((n && !(r = B.exec(s))) ||
              (r && (s = s.slice(r[0].length) || s), l.push((o = []))),
            (n = !1),
            (r = W.exec(s)) &&
              ((n = r.shift()),
              o.push({ value: n, type: r[0].replace(U, " ") }),
              (s = s.slice(n.length))),
            i.filter))
              !(r = X[a].exec(s)) ||
                (u[a] && !(r = u[a](r))) ||
                ((n = r.shift()),
                o.push({ value: n, type: a, matches: r }),
                (s = s.slice(n.length)));
            if (!n) break;
          }
          return t ? s.length : s ? se.error(e) : T(e, l).slice(0);
        }),
      (s = se.compile =
        function (e, t) {
          var n,
            r,
            o,
            s,
            l,
            c,
            f = [],
            p = [],
            m = E[e + " "];
          if (!m) {
            t || (t = a(e)), (n = t.length);
            while (n--) (m = ke(t[n]))[w] ? f.push(m) : p.push(m);
            (m = E(
              e,
              ((r = p),
              (s = 0 < (o = f).length),
              (l = 0 < r.length),
              (c = function (e, t, n, a, c) {
                var f,
                  p,
                  m,
                  g = 0,
                  y = "0",
                  b = e && [],
                  w = [],
                  _ = u,
                  C = e || (l && i.find.TAG("*", c)),
                  k = (x += null == _ ? 1 : Math.random() || 0.1),
                  T = C.length;
                for (
                  c && (u = t == h || t || c);
                  y !== T && null != (f = C[y]);
                  y++
                ) {
                  if (l && f) {
                    (p = 0), t || f.ownerDocument == h || (d(f), (n = !v));
                    while ((m = r[p++]))
                      if (m(f, t || h, n)) {
                        a.push(f);
                        break;
                      }
                    c && (x = k);
                  }
                  s && ((f = !m && f) && g--, e && b.push(f));
                }
                if (((g += y), s && y !== g)) {
                  p = 0;
                  while ((m = o[p++])) m(b, w, t, n);
                  if (e) {
                    if (0 < g) while (y--) b[y] || w[y] || (w[y] = I.call(a));
                    w = xe(w);
                  }
                  L.apply(a, w),
                    c &&
                      !e &&
                      0 < w.length &&
                      1 < g + o.length &&
                      se.uniqueSort(a);
                }
                return c && ((x = k), (u = _)), b;
              }),
              s ? ue(c) : c)
            )).selector = e;
          }
          return m;
        }),
      (l = se.select =
        function (e, t, n, r) {
          var o,
            l,
            u,
            c,
            f,
            d = "function" == typeof e && e,
            h = !r && a((e = d.selector || e));
          if (((n = n || []), 1 === h.length)) {
            if (
              2 < (l = h[0] = h[0].slice(0)).length &&
              "ID" === (u = l[0]).type &&
              9 === t.nodeType &&
              v &&
              i.relative[l[1].type]
            ) {
              if (!(t = (i.find.ID(u.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              d && (t = t.parentNode), (e = e.slice(l.shift().value.length));
            }
            o = X.needsContext.test(e) ? 0 : l.length;
            while (o--) {
              if (((u = l[o]), i.relative[(c = u.type)])) break;
              if (
                (f = i.find[c]) &&
                (r = f(
                  u.matches[0].replace(te, ne),
                  (ee.test(l[0].type) && ge(t.parentNode)) || t
                ))
              ) {
                if ((l.splice(o, 1), !(e = r.length && be(l))))
                  return L.apply(n, r), n;
                break;
              }
            }
          }
          return (
            (d || s(e, h))(
              r,
              t,
              !v,
              n,
              !t || (ee.test(e) && ge(t.parentNode)) || t
            ),
            n
          );
        }),
      (n.sortStable = w.split("").sort($).join("") === w),
      (n.detectDuplicates = !!f),
      d(),
      (n.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(h.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(P, function (e, t, n) {
          var i;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
        }),
      se
    );
  })(e);
  (_.find = C),
    (_.expr = C.selectors),
    (_.expr[":"] = _.expr.pseudos),
    (_.uniqueSort = _.unique = C.uniqueSort),
    (_.text = C.getText),
    (_.isXMLDoc = C.isXML),
    (_.contains = C.contains),
    (_.escapeSelector = C.escape);
  var k = function (e, t, n) {
      var i = [],
        r = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (r && _(e).is(n)) break;
          i.push(e);
        }
      return i;
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    E = _.expr.match.needsContext;
  function S(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var $ = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function A(e, t, n) {
    return p(t)
      ? _.grep(e, function (e, i) {
          return !!t.call(e, i, e) !== n;
        })
      : t.nodeType
      ? _.grep(e, function (e) {
          return (e === t) !== n;
        })
      : "string" != typeof t
      ? _.grep(e, function (e) {
          return -1 < s.call(t, e) !== n;
        })
      : _.filter(t, e, n);
  }
  (_.filter = function (e, t, n) {
    var i = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === i.nodeType
        ? _.find.matchesSelector(i, e)
          ? [i]
          : []
        : _.find.matches(
            e,
            _.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    _.fn.extend({
      find: function (e) {
        var t,
          n,
          i = this.length,
          r = this;
        if ("string" != typeof e)
          return this.pushStack(
            _(e).filter(function () {
              for (t = 0; t < i; t++) if (_.contains(r[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < i; t++) _.find(e, r[t], n);
        return 1 < i ? _.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(A(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(A(this, e || [], !0));
      },
      is: function (e) {
        return !!A(this, "string" == typeof e && E.test(e) ? _(e) : e || [], !1)
          .length;
      },
    });
  var O,
    I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((_.fn.init = function (e, t, n) {
    var i, r;
    if (!e) return this;
    if (((n = n || O), "string" == typeof e)) {
      if (
        !(i =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : I.exec(e)) ||
        (!i[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (
          ((t = t instanceof _ ? t[0] : t),
          _.merge(
            this,
            _.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : m, !0)
          ),
          $.test(i[1]) && _.isPlainObject(t))
        )
          for (i in t) p(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (
        (r = m.getElementById(i[2])) && ((this[0] = r), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : p(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(_)
      : _.makeArray(e, this);
  }).prototype = _.fn),
    (O = _(m));
  var j = /^(?:parents|prev(?:Until|All))/,
    L = { children: !0, contents: !0, next: !0, prev: !0 };
  function D(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  _.fn.extend({
    has: function (e) {
      var t = _(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (_.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        i = 0,
        r = this.length,
        o = [],
        a = "string" != typeof e && _(e);
      if (!E.test(e))
        for (; i < r; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && _.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? _.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? s.call(_(e), this[0])
          : s.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    _.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return k(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return k(e, "parentNode", n);
        },
        next: function (e) {
          return D(e, "nextSibling");
        },
        prev: function (e) {
          return D(e, "previousSibling");
        },
        nextAll: function (e) {
          return k(e, "nextSibling");
        },
        prevAll: function (e) {
          return k(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return k(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return k(e, "previousSibling", n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && i(e.contentDocument)
            ? e.contentDocument
            : (S(e, "template") && (e = e.content || e),
              _.merge([], e.childNodes));
        },
      },
      function (e, t) {
        _.fn[e] = function (n, i) {
          var r = _.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (r = _.filter(i, r)),
            1 < this.length &&
              (L[e] || _.uniqueSort(r), j.test(e) && r.reverse()),
            this.pushStack(r)
          );
        };
      }
    );
  var N = /[^\x20\t\r\n\f]+/g;
  function P(e) {
    return e;
  }
  function q(e) {
    throw e;
  }
  function R(e, t, n, i) {
    var r;
    try {
      e && p((r = e.promise))
        ? r.call(e).done(t).fail(n)
        : e && p((r = e.then))
        ? r.call(e, t, n)
        : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (_.Callbacks = function (e) {
    var t, n;
    e =
      "string" == typeof e
        ? ((t = e),
          (n = {}),
          _.each(t.match(N) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : _.extend({}, e);
    var i,
      r,
      o,
      a,
      s = [],
      l = [],
      u = -1,
      c = function () {
        for (a = a || e.once, o = i = !0; l.length; u = -1) {
          r = l.shift();
          while (++u < s.length)
            !1 === s[u].apply(r[0], r[1]) &&
              e.stopOnFalse &&
              ((u = s.length), (r = !1));
        }
        e.memory || (r = !1), (i = !1), a && (s = r ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (r && !i && ((u = s.length - 1), l.push(r)),
              (function t(n) {
                _.each(n, function (n, i) {
                  p(i)
                    ? (e.unique && f.has(i)) || s.push(i)
                    : i && i.length && "string" !== b(i) && t(i);
                });
              })(arguments),
              r && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            _.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = _.inArray(t, s, n)))
                s.splice(n, 1), n <= u && u--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < _.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = l = []), (s = r = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = l = []), r || i || (s = r = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              l.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    _.extend({
      Deferred: function (t) {
        var n = [
            [
              "notify",
              "progress",
              _.Callbacks("memory"),
              _.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              _.Callbacks("once memory"),
              _.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              _.Callbacks("once memory"),
              _.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          r = {
            state: function () {
              return i;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return r.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return _.Deferred(function (t) {
                _.each(n, function (n, i) {
                  var r = p(e[i[4]]) && e[i[4]];
                  o[i[1]](function () {
                    var e = r && r.apply(this, arguments);
                    e && p(e.promise)
                      ? e
                          .promise()
                          .progress(t.notify)
                          .done(t.resolve)
                          .fail(t.reject)
                      : t[i[0] + "With"](this, r ? [e] : arguments);
                  });
                }),
                  (e = null);
              }).promise();
            },
            then: function (t, i, r) {
              var o = 0;
              function a(t, n, i, r) {
                return function () {
                  var s = this,
                    l = arguments,
                    u = function () {
                      var e, u;
                      if (!(t < o)) {
                        if ((e = i.apply(s, l)) === n.promise())
                          throw new TypeError("Thenable self-resolution");
                        (u =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          p(u)
                            ? r
                              ? u.call(e, a(o, n, P, r), a(o, n, q, r))
                              : (o++,
                                u.call(
                                  e,
                                  a(o, n, P, r),
                                  a(o, n, q, r),
                                  a(o, n, P, n.notifyWith)
                                ))
                            : (i !== P && ((s = void 0), (l = [e])),
                              (r || n.resolveWith)(s, l));
                      }
                    },
                    c = r
                      ? u
                      : function () {
                          try {
                            u();
                          } catch (e) {
                            _.Deferred.exceptionHook &&
                              _.Deferred.exceptionHook(e, c.stackTrace),
                              o <= t + 1 &&
                                (i !== q && ((s = void 0), (l = [e])),
                                n.rejectWith(s, l));
                          }
                        };
                  t
                    ? c()
                    : (_.Deferred.getStackHook &&
                        (c.stackTrace = _.Deferred.getStackHook()),
                      e.setTimeout(c));
                };
              }
              return _.Deferred(function (e) {
                n[0][3].add(a(0, e, p(r) ? r : P, e.notifyWith)),
                  n[1][3].add(a(0, e, p(t) ? t : P)),
                  n[2][3].add(a(0, e, p(i) ? i : q));
              }).promise();
            },
            promise: function (e) {
              return null != e ? _.extend(e, r) : r;
            },
          },
          o = {};
        return (
          _.each(n, function (e, t) {
            var a = t[2],
              s = t[5];
            (r[t[1]] = a.add),
              s &&
                a.add(
                  function () {
                    i = s;
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              a.add(t[3].fire),
              (o[t[0]] = function () {
                return (
                  o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                );
              }),
              (o[t[0] + "With"] = a.fireWith);
          }),
          r.promise(o),
          t && t.call(o, o),
          o
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          i = Array(n),
          o = r.call(arguments),
          a = _.Deferred(),
          s = function (e) {
            return function (n) {
              (i[e] = this),
                (o[e] = 1 < arguments.length ? r.call(arguments) : n),
                --t || a.resolveWith(i, o);
            };
          };
        if (
          t <= 1 &&
          (R(e, a.done(s(n)).resolve, a.reject, !t),
          "pending" === a.state() || p(o[n] && o[n].then))
        )
          return a.then();
        while (n--) R(o[n], s(n), a.reject);
        return a.promise();
      },
    });
  var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (_.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      M.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
    (_.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var H = _.Deferred();
  function F() {
    m.removeEventListener("DOMContentLoaded", F),
      e.removeEventListener("load", F),
      _.ready();
  }
  (_.fn.ready = function (e) {
    return (
      H.then(e)["catch"](function (e) {
        _.readyException(e);
      }),
      this
    );
  }),
    _.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --_.readyWait : _.isReady) ||
          ((_.isReady = !0) !== e && 0 < --_.readyWait) ||
          H.resolveWith(m, [_]);
      },
    }),
    (_.ready.then = H.then),
    "complete" === m.readyState ||
    ("loading" !== m.readyState && !m.documentElement.doScroll)
      ? e.setTimeout(_.ready)
      : (m.addEventListener("DOMContentLoaded", F),
        e.addEventListener("load", F));
  var U = function (e, t, n, i, r, o, a) {
      var s = 0,
        l = e.length,
        u = null == n;
      if ("object" === b(n))
        for (s in ((r = !0), n)) U(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== i &&
        ((r = !0),
        p(i) || (a = !0),
        u &&
          (a
            ? (t.call(e, i), (t = null))
            : ((u = t),
              (t = function (e, t, n) {
                return u.call(_(e), n);
              }))),
        t)
      )
        for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
      return r ? e : u ? t.call(e) : l ? t(e[0], n) : o;
    },
    B = /^-ms-/,
    W = /-([a-z])/g;
  function z(e, t) {
    return t.toUpperCase();
  }
  function V(e) {
    return e.replace(B, "ms-").replace(W, z);
  }
  var Q = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function X() {
    this.expando = _.expando + X.uid++;
  }
  (X.uid = 1),
    (X.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            Q(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var i,
          r = this.cache(e);
        if ("string" == typeof t) r[V(t)] = n;
        else for (i in t) r[V(i)] = t[i];
        return r;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][V(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(V)
              : (t = V(t)) in i
              ? [t]
              : t.match(N) || []).length;
            while (n--) delete i[t[n]];
          }
          (void 0 === t || _.isEmptyObject(i)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !_.isEmptyObject(t);
      },
    });
  var K = new X(),
    Y = new X(),
    G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    J = /[A-Z]/g;
  function Z(e, t, n) {
    var i, r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((i = "data-" + t.replace(J, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(i)))
      ) {
        try {
          n =
            "true" === (r = n) ||
            ("false" !== r &&
              ("null" === r
                ? null
                : r === +r + ""
                ? +r
                : G.test(r)
                ? JSON.parse(r)
                : r));
        } catch (e) {}
        Y.set(e, t, n);
      } else n = void 0;
    return n;
  }
  _.extend({
    hasData: function (e) {
      return Y.hasData(e) || K.hasData(e);
    },
    data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    removeData: function (e, t) {
      Y.remove(e, t);
    },
    _data: function (e, t, n) {
      return K.access(e, t, n);
    },
    _removeData: function (e, t) {
      K.remove(e, t);
    },
  }),
    _.fn.extend({
      data: function (e, t) {
        var n,
          i,
          r,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((r = Y.get(o)), 1 === o.nodeType && !K.get(o, "hasDataAttrs"))
          ) {
            n = a.length;
            while (n--)
              a[n] &&
                0 === (i = a[n].name).indexOf("data-") &&
                ((i = V(i.slice(5))), Z(o, i, r[i]));
            K.set(o, "hasDataAttrs", !0);
          }
          return r;
        }
        return "object" == typeof e
          ? this.each(function () {
              Y.set(this, e);
            })
          : U(
              this,
              function (t) {
                var n;
                if (o && void 0 === t)
                  return void 0 !== (n = Y.get(o, e))
                    ? n
                    : void 0 !== (n = Z(o, e))
                    ? n
                    : void 0;
                this.each(function () {
                  Y.set(this, e, t);
                });
              },
              null,
              t,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Y.remove(this, e);
        });
      },
    }),
    _.extend({
      queue: function (e, t, n) {
        var i;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (i = K.get(e, t)),
            n &&
              (!i || Array.isArray(n)
                ? (i = K.access(e, t, _.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = _.queue(e, t),
          i = n.length,
          r = n.shift(),
          o = _._queueHooks(e, t);
        "inprogress" === r && ((r = n.shift()), i--),
          r &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            r.call(
              e,
              function () {
                _.dequeue(e, t);
              },
              o
            )),
          !i && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          K.get(e, n) ||
          K.access(e, n, {
            empty: _.Callbacks("once memory").add(function () {
              K.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    _.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? _.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = _.queue(this, e, t);
                _._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && _.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          _.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          i = 1,
          r = _.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --i || r.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = K.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (i++, n.empty.add(s));
        return s(), r.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    ie = m.documentElement,
    re = function (e) {
      return _.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  ie.getRootNode &&
    (re = function (e) {
      return (
        _.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && re(e) && "none" === _.css(e, "display"))
    );
  };
  function se(e, t, n, i) {
    var r,
      o,
      a = 20,
      s = i
        ? function () {
            return i.cur();
          }
        : function () {
            return _.css(e, t, "");
          },
      l = s(),
      u = (n && n[3]) || (_.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (_.cssNumber[t] || ("px" !== u && +l)) &&
        te.exec(_.css(e, t));
    if (c && c[3] !== u) {
      (l /= 2), (u = u || c[3]), (c = +l || 1);
      while (a--)
        _.style(e, t, c + u),
          (1 - o) * (1 - (o = s() / l || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), _.style(e, t, c + u), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +l || 0),
        (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = u), (i.start = c), (i.end = r))),
      r
    );
  }
  var le = {};
  function ue(e, t) {
    for (var n, i, r, o, a, s, l, u = [], c = 0, f = e.length; c < f; c++)
      (i = e[c]).style &&
        ((n = i.style.display),
        t
          ? ("none" === n &&
              ((u[c] = K.get(i, "display") || null),
              u[c] || (i.style.display = "")),
            "" === i.style.display &&
              ae(i) &&
              (u[c] =
                ((l = a = o = void 0),
                (a = (r = i).ownerDocument),
                (s = r.nodeName),
                (l = le[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (l = _.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === l && (l = "block"),
                  (le[s] = l)))))
          : "none" !== n && ((u[c] = "none"), K.set(i, "display", n)));
    for (c = 0; c < f; c++) null != u[c] && (e[c].style.display = u[c]);
    return e;
  }
  _.fn.extend({
    show: function () {
      return ue(this, !0);
    },
    hide: function () {
      return ue(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? _(this).show() : _(this).hide();
          });
    },
  });
  var ce,
    fe,
    de = /^(?:checkbox|radio)$/i,
    he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    pe = /^$|^module$|\/(?:java|ecma)script/i;
  (ce = m.createDocumentFragment().appendChild(m.createElement("div"))),
    (fe = m.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    (h.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = "<textarea>x</textarea>"),
    (h.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
    (ce.innerHTML = "<option></option>"),
    (h.option = !!ce.lastChild);
  var ve = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function me(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && S(e, t)) ? _.merge([e], n) : n
    );
  }
  function ge(e, t) {
    for (var n = 0, i = e.length; n < i; n++)
      K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
  }
  (ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead),
    (ve.th = ve.td),
    h.option ||
      (ve.optgroup = ve.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var ye = /<|&#?\w+;/;
  function be(e, t, n, i, r) {
    for (
      var o,
        a,
        s,
        l,
        u,
        c,
        f = t.createDocumentFragment(),
        d = [],
        h = 0,
        p = e.length;
      h < p;
      h++
    )
      if ((o = e[h]) || 0 === o)
        if ("object" === b(o)) _.merge(d, o.nodeType ? [o] : o);
        else if (ye.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (he.exec(o) || ["", ""])[1].toLowerCase()),
            (l = ve[s] || ve._default),
            (a.innerHTML = l[1] + _.htmlPrefilter(o) + l[2]),
            (c = l[0]);
          while (c--) a = a.lastChild;
          _.merge(d, a.childNodes), ((a = f.firstChild).textContent = "");
        } else d.push(t.createTextNode(o));
    (f.textContent = ""), (h = 0);
    while ((o = d[h++]))
      if (i && -1 < _.inArray(o, i)) r && r.push(o);
      else if (
        ((u = re(o)), (a = me(f.appendChild(o), "script")), u && ge(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) pe.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var we = /^key/,
    _e = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    xe = /^([^.]*)(?:\.(.+)|)/;
  function Ce() {
    return !0;
  }
  function ke() {
    return !1;
  }
  function Te(e, t) {
    return (
      (e ===
        (function () {
          try {
            return m.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Ee(e, t, n, i, r, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
        Ee(e, s, n, i, t[s], o);
      return e;
    }
    if (
      (null == i && null == r
        ? ((r = n), (i = n = void 0))
        : null == r &&
          ("string" == typeof n
            ? ((r = i), (i = void 0))
            : ((r = i), (i = n), (n = void 0))),
      !1 === r)
    )
      r = ke;
    else if (!r) return e;
    return (
      1 === o &&
        ((a = r),
        ((r = function (e) {
          return _().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = _.guid++))),
      e.each(function () {
        _.event.add(this, t, r, i, n);
      })
    );
  }
  function Se(e, t, n) {
    n
      ? (K.set(e, t, !1),
        _.event.add(e, t, {
          namespace: !1,
          handler: function (e) {
            var i,
              o,
              a = K.get(this, t);
            if (1 & e.isTrigger && this[t]) {
              if (a.length)
                (_.event.special[t] || {}).delegateType && e.stopPropagation();
              else if (
                ((a = r.call(arguments)),
                K.set(this, t, a),
                (i = n(this, t)),
                this[t](),
                a !== (o = K.get(this, t)) || i ? K.set(this, t, !1) : (o = {}),
                a !== o)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), o.value
                );
            } else
              a.length &&
                (K.set(this, t, {
                  value: _.event.trigger(
                    _.extend(a[0], _.Event.prototype),
                    a.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === K.get(e, t) && _.event.add(e, t, Ce);
  }
  (_.event = {
    global: {},
    add: function (e, t, n, i, r) {
      var o,
        a,
        s,
        l,
        u,
        c,
        f,
        d,
        h,
        p,
        v,
        m = K.get(e);
      if (Q(e)) {
        n.handler && ((n = (o = n).handler), (r = o.selector)),
          r && _.find.matchesSelector(ie, r),
          n.guid || (n.guid = _.guid++),
          (l = m.events) || (l = m.events = Object.create(null)),
          (a = m.handle) ||
            (a = m.handle =
              function (t) {
                return "undefined" != typeof _ && _.event.triggered !== t.type
                  ? _.event.dispatch.apply(e, arguments)
                  : void 0;
              }),
          (u = (t = (t || "").match(N) || [""]).length);
        while (u--)
          (h = v = (s = xe.exec(t[u]) || [])[1]),
            (p = (s[2] || "").split(".").sort()),
            h &&
              ((f = _.event.special[h] || {}),
              (h = (r ? f.delegateType : f.bindType) || h),
              (f = _.event.special[h] || {}),
              (c = _.extend(
                {
                  type: h,
                  origType: v,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: r,
                  needsContext: r && _.expr.match.needsContext.test(r),
                  namespace: p.join("."),
                },
                o
              )),
              (d = l[h]) ||
                (((d = l[h] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(e, i, p, a)) ||
                  (e.addEventListener && e.addEventListener(h, a))),
              f.add &&
                (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
              r ? d.splice(d.delegateCount++, 0, c) : d.push(c),
              (_.event.global[h] = !0));
      }
    },
    remove: function (e, t, n, i, r) {
      var o,
        a,
        s,
        l,
        u,
        c,
        f,
        d,
        h,
        p,
        v,
        m = K.hasData(e) && K.get(e);
      if (m && (l = m.events)) {
        u = (t = (t || "").match(N) || [""]).length;
        while (u--)
          if (
            ((h = v = (s = xe.exec(t[u]) || [])[1]),
            (p = (s[2] || "").split(".").sort()),
            h)
          ) {
            (f = _.event.special[h] || {}),
              (d = l[(h = (i ? f.delegateType : f.bindType) || h)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = d.length);
            while (o--)
              (c = d[o]),
                (!r && v !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (i && i !== c.selector && ("**" !== i || !c.selector)) ||
                  (d.splice(o, 1),
                  c.selector && d.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !d.length &&
              ((f.teardown && !1 !== f.teardown.call(e, p, m.handle)) ||
                _.removeEvent(e, h, m.handle),
              delete l[h]);
          } else for (h in l) _.event.remove(e, h + t[u], n, i, !0);
        _.isEmptyObject(l) && K.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        i,
        r,
        o,
        a,
        s = new Array(arguments.length),
        l = _.event.fix(e),
        u = (K.get(this, "events") || Object.create(null))[l.type] || [],
        c = _.event.special[l.type] || {};
      for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((l.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, l))
      ) {
        (a = _.event.handlers.call(this, l, u)), (t = 0);
        while ((r = a[t++]) && !l.isPropagationStopped()) {
          (l.currentTarget = r.elem), (n = 0);
          while ((o = r.handlers[n++]) && !l.isImmediatePropagationStopped())
            (l.rnamespace &&
              !1 !== o.namespace &&
              !l.rnamespace.test(o.namespace)) ||
              ((l.handleObj = o),
              (l.data = o.data),
              void 0 !==
                (i = (
                  (_.event.special[o.origType] || {}).handle || o.handler
                ).apply(r.elem, s)) &&
                !1 === (l.result = i) &&
                (l.preventDefault(), l.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, l), l.result;
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        r,
        o,
        a,
        s = [],
        l = t.delegateCount,
        u = e.target;
      if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
        for (; u !== this; u = u.parentNode || this)
          if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
            for (o = [], a = {}, n = 0; n < l; n++)
              void 0 === a[(r = (i = t[n]).selector + " ")] &&
                (a[r] = i.needsContext
                  ? -1 < _(r, this).index(u)
                  : _.find(r, this, null, [u]).length),
                a[r] && o.push(i);
            o.length && s.push({ elem: u, handlers: o });
          }
      return (
        (u = this), l < t.length && s.push({ elem: u, handlers: t.slice(l) }), s
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(_.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: p(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[_.expando] ? e : new _.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            de.test(t.type) && t.click && S(t, "input") && Se(t, "click", Ce),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            de.test(t.type) && t.click && S(t, "input") && Se(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (de.test(t.type) &&
              t.click &&
              S(t, "input") &&
              K.get(t, "click")) ||
            S(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (_.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (_.Event = function (e, t) {
      if (!(this instanceof _.Event)) return new _.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ce
              : ke),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && _.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[_.expando] = !0);
    }),
    (_.Event.prototype = {
      constructor: _.Event,
      isDefaultPrevented: ke,
      isPropagationStopped: ke,
      isImmediatePropagationStopped: ke,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ce),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ce),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ce),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    _.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && we.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && _e.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      _.event.addProp
    ),
    _.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      _.event.special[e] = {
        setup: function () {
          return Se(this, e, Te), !1;
        },
        trigger: function () {
          return Se(this, e), !0;
        },
        delegateType: t,
      };
    }),
    _.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        _.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              i = e.relatedTarget,
              r = e.handleObj;
            return (
              (i && (i === this || _.contains(this, i))) ||
                ((e.type = r.origType),
                (n = r.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    _.fn.extend({
      on: function (e, t, n, i) {
        return Ee(this, e, t, n, i);
      },
      one: function (e, t, n, i) {
        return Ee(this, e, t, n, i, 1);
      },
      off: function (e, t, n) {
        var i, r;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            _(e.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (r in e) this.off(r, t, e[r]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = ke),
          this.each(function () {
            _.event.remove(this, e, n, t);
          })
        );
      },
    });
  var $e = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Ie(e, t) {
    return (
      (S(e, "table") &&
        S(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        _(e).children("tbody")[0]) ||
      e
    );
  }
  function je(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Le(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function De(e, t) {
    var n, i, r, o, a, s;
    if (1 === t.nodeType) {
      if (K.hasData(e) && (s = K.get(e).events))
        for (r in (K.remove(t, "handle events"), s))
          for (n = 0, i = s[r].length; n < i; n++) _.event.add(t, r, s[r][n]);
      Y.hasData(e) && ((o = Y.access(e)), (a = _.extend({}, o)), Y.set(t, a));
    }
  }
  function Ne(e, t, n, i) {
    t = o(t);
    var r,
      a,
      s,
      l,
      u,
      c,
      f = 0,
      d = e.length,
      v = d - 1,
      m = t[0],
      g = p(m);
    if (g || (1 < d && "string" == typeof m && !h.checkClone && Ae.test(m)))
      return e.each(function (r) {
        var o = e.eq(r);
        g && (t[0] = m.call(this, r, o.html())), Ne(o, t, n, i);
      });
    if (
      d &&
      ((a = (r = be(t, e[0].ownerDocument, !1, e, i)).firstChild),
      1 === r.childNodes.length && (r = a),
      a || i)
    ) {
      for (l = (s = _.map(me(r, "script"), je)).length; f < d; f++)
        (u = r),
          f !== v &&
            ((u = _.clone(u, !0, !0)), l && _.merge(s, me(u, "script"))),
          n.call(e[f], u, f);
      if (l)
        for (c = s[s.length - 1].ownerDocument, _.map(s, Le), f = 0; f < l; f++)
          (u = s[f]),
            pe.test(u.type || "") &&
              !K.access(u, "globalEval") &&
              _.contains(c, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? _._evalUrl &&
                  !u.noModule &&
                  _._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute("nonce") },
                    c
                  )
                : y(u.textContent.replace(Oe, ""), u, c));
    }
    return e;
  }
  function Pe(e, t, n) {
    for (var i, r = t ? _.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
      n || 1 !== i.nodeType || _.cleanData(me(i)),
        i.parentNode &&
          (n && re(i) && ge(me(i, "script")), i.parentNode.removeChild(i));
    return e;
  }
  _.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var i,
        r,
        o,
        a,
        s,
        l,
        u,
        c = e.cloneNode(!0),
        f = re(e);
      if (
        !(
          h.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          _.isXMLDoc(e)
        )
      )
        for (a = me(c), i = 0, r = (o = me(e)).length; i < r; i++)
          (s = o[i]),
            (l = a[i]),
            void 0,
            "input" === (u = l.nodeName.toLowerCase()) && de.test(s.type)
              ? (l.checked = s.checked)
              : ("input" !== u && "textarea" !== u) ||
                (l.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || me(e), a = a || me(c), i = 0, r = o.length; i < r; i++)
            De(o[i], a[i]);
        else De(e, c);
      return (
        0 < (a = me(c, "script")).length && ge(a, !f && me(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, i, r = _.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (Q(n)) {
          if ((t = n[K.expando])) {
            if (t.events)
              for (i in t.events)
                r[i] ? _.event.remove(n, i) : _.removeEvent(n, i, t.handle);
            n[K.expando] = void 0;
          }
          n[Y.expando] && (n[Y.expando] = void 0);
        }
    },
  }),
    _.fn.extend({
      detach: function (e) {
        return Pe(this, e, !0);
      },
      remove: function (e) {
        return Pe(this, e);
      },
      text: function (e) {
        return U(
          this,
          function (e) {
            return void 0 === e
              ? _.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Ne(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Ie(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Ne(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Ie(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Ne(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Ne(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (_.cleanData(me(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return _.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return U(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !$e.test(e) &&
              !ve[(he.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = _.htmlPrefilter(e);
              try {
                for (; n < i; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (_.cleanData(me(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return Ne(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            _.inArray(this, e) < 0 &&
              (_.cleanData(me(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    _.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        _.fn[e] = function (e) {
          for (var n, i = [], r = _(e), o = r.length - 1, s = 0; s <= o; s++)
            (n = s === o ? this : this.clone(!0)),
              _(r[s])[t](n),
              a.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var qe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Re = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    Me = function (e, t, n) {
      var i,
        r,
        o = {};
      for (r in t) (o[r] = e.style[r]), (e.style[r] = t[r]);
      for (r in ((i = n.call(e)), t)) e.style[r] = o[r];
      return i;
    },
    He = new RegExp(ne.join("|"), "i");
  function Fe(e, t, n) {
    var i,
      r,
      o,
      a,
      s = e.style;
    return (
      (n = n || Re(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          re(e) ||
          (a = _.style(e, t)),
        !h.pixelBoxStyles() &&
          qe.test(a) &&
          He.test(t) &&
          ((i = s.width),
          (r = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = i),
          (s.minWidth = r),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function Ue(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function t() {
      if (c) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (c.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          ie.appendChild(u).appendChild(c);
        var t = e.getComputedStyle(c);
        (i = "1%" !== t.top),
          (l = 12 === n(t.marginLeft)),
          (c.style.right = "60%"),
          (a = 36 === n(t.right)),
          (r = 36 === n(t.width)),
          (c.style.position = "absolute"),
          (o = 12 === n(c.offsetWidth / 3)),
          ie.removeChild(u),
          (c = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var i,
      r,
      o,
      a,
      s,
      l,
      u = m.createElement("div"),
      c = m.createElement("div");
    c.style &&
      ((c.style.backgroundClip = "content-box"),
      (c.cloneNode(!0).style.backgroundClip = ""),
      (h.clearCloneStyle = "content-box" === c.style.backgroundClip),
      _.extend(h, {
        boxSizingReliable: function () {
          return t(), r;
        },
        pixelBoxStyles: function () {
          return t(), a;
        },
        pixelPosition: function () {
          return t(), i;
        },
        reliableMarginLeft: function () {
          return t(), l;
        },
        scrollboxSize: function () {
          return t(), o;
        },
        reliableTrDimensions: function () {
          var t, n, i, r;
          return (
            null == s &&
              ((t = m.createElement("table")),
              (n = m.createElement("tr")),
              (i = m.createElement("div")),
              (t.style.cssText = "position:absolute;left:-11111px"),
              (n.style.height = "1px"),
              (i.style.height = "9px"),
              ie.appendChild(t).appendChild(n).appendChild(i),
              (r = e.getComputedStyle(n)),
              (s = 3 < parseInt(r.height)),
              ie.removeChild(t)),
            s
          );
        },
      }));
  })();
  var Be = ["Webkit", "Moz", "ms"],
    We = m.createElement("div").style,
    ze = {};
  function Ve(e) {
    var t = _.cssProps[e] || ze[e];
    return (
      t ||
      (e in We
        ? e
        : (ze[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Be.length;
              while (n--) if ((e = Be[n] + t) in We) return e;
            })(e) || e))
    );
  }
  var Qe = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Ke = { position: "absolute", visibility: "hidden", display: "block" },
    Ye = { letterSpacing: "0", fontWeight: "400" };
  function Ge(e, t, n) {
    var i = te.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }
  function Je(e, t, n, i, r, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      l = 0;
    if (n === (i ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (l += _.css(e, n + ne[a], !0, r)),
        i
          ? ("content" === n && (l -= _.css(e, "padding" + ne[a], !0, r)),
            "margin" !== n &&
              (l -= _.css(e, "border" + ne[a] + "Width", !0, r)))
          : ((l += _.css(e, "padding" + ne[a], !0, r)),
            "padding" !== n
              ? (l += _.css(e, "border" + ne[a] + "Width", !0, r))
              : (s += _.css(e, "border" + ne[a] + "Width", !0, r)));
    return (
      !i &&
        0 <= o &&
        (l +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - 0.5
            )
          ) || 0),
      l
    );
  }
  function Ze(e, t, n) {
    var i = Re(e),
      r =
        (!h.boxSizingReliable() || n) &&
        "border-box" === _.css(e, "boxSizing", !1, i),
      o = r,
      a = Fe(e, t, i),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (qe.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!h.boxSizingReliable() && r) ||
        (!h.reliableTrDimensions() && S(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === _.css(e, "display", !1, i))) &&
        e.getClientRects().length &&
        ((r = "border-box" === _.css(e, "boxSizing", !1, i)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Je(e, t, n || (r ? "border" : "content"), o, i, a) +
        "px"
    );
  }
  function et(e, t, n, i, r) {
    return new et.prototype.init(e, t, n, i, r);
  }
  _.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Fe(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r,
          o,
          a,
          s = V(t),
          l = Xe.test(t),
          u = e.style;
        if (
          (l || (t = Ve(s)), (a = _.cssHooks[t] || _.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : u[t];
        "string" === (o = typeof n) &&
          (r = te.exec(n)) &&
          r[1] &&
          ((n = se(e, t, r)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              l ||
              (n += (r && r[3]) || (_.cssNumber[s] ? "" : "px")),
            h.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (u[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, i))) ||
              (l ? u.setProperty(t, n) : (u[t] = n)));
      }
    },
    css: function (e, t, n, i) {
      var r,
        o,
        a,
        s = V(t);
      return (
        Xe.test(t) || (t = Ve(s)),
        (a = _.cssHooks[t] || _.cssHooks[s]) &&
          "get" in a &&
          (r = a.get(e, !0, n)),
        void 0 === r && (r = Fe(e, t, i)),
        "normal" === r && t in Ye && (r = Ye[t]),
        "" === n || n
          ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
          : r
      );
    },
  }),
    _.each(["height", "width"], function (e, t) {
      _.cssHooks[t] = {
        get: function (e, n, i) {
          if (n)
            return !Qe.test(_.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Ze(e, t, i)
              : Me(e, Ke, function () {
                  return Ze(e, t, i);
                });
        },
        set: function (e, n, i) {
          var r,
            o = Re(e),
            a = !h.scrollboxSize() && "absolute" === o.position,
            s = (a || i) && "border-box" === _.css(e, "boxSizing", !1, o),
            l = i ? Je(e, t, i, s, o) : 0;
          return (
            s &&
              a &&
              (l -= Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(o[t]) -
                  Je(e, t, "border", !1, o) -
                  0.5
              )),
            l &&
              (r = te.exec(n)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[t] = n), (n = _.css(e, t))),
            Ge(0, n, l)
          );
        },
      };
    }),
    (_.cssHooks.marginLeft = Ue(h.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Fe(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Me(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    _.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (_.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n];
            i < 4;
            i++
          )
            r[e + ne[i] + t] = o[i] || o[i - 2] || o[0];
          return r;
        },
      }),
        "margin" !== e && (_.cssHooks[e + t].set = Ge);
    }),
    _.fn.extend({
      css: function (e, t) {
        return U(
          this,
          function (e, t, n) {
            var i,
              r,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (i = Re(e), r = t.length; a < r; a++)
                o[t[a]] = _.css(e, t[a], !1, i);
              return o;
            }
            return void 0 !== n ? _.style(e, t, n) : _.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((_.Tween = et).prototype = {
      constructor: et,
      init: function (e, t, n, i, r, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = r || _.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = o || (_.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = et.propHooks[this.prop];
        return e && e.get ? e.get(this) : et.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = et.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                _.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : et.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = et.prototype),
    ((et.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = _.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          _.fx.step[e.prop]
            ? _.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!_.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : _.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = et.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (_.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (_.fx = et.prototype.init),
    (_.fx.step = {});
  var tt,
    nt,
    it,
    rt,
    ot = /^(?:toggle|show|hide)$/,
    at = /queueHooks$/;
  function st() {
    nt &&
      (!1 === m.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(st)
        : e.setTimeout(st, _.fx.interval),
      _.fx.tick());
  }
  function lt() {
    return (
      e.setTimeout(function () {
        tt = void 0;
      }),
      (tt = Date.now())
    );
  }
  function ut(e, t) {
    var n,
      i = 0,
      r = { height: e };
    for (t = t ? 1 : 0; i < 4; i += 2 - t)
      r["margin" + (n = ne[i])] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r;
  }
  function ct(e, t, n) {
    for (
      var i,
        r = (ft.tweeners[t] || []).concat(ft.tweeners["*"]),
        o = 0,
        a = r.length;
      o < a;
      o++
    )
      if ((i = r[o].call(n, t, e))) return i;
  }
  function ft(e, t, n) {
    var i,
      r,
      o = 0,
      a = ft.prefilters.length,
      s = _.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (r) return !1;
        for (
          var t = tt || lt(),
            n = Math.max(0, u.startTime + u.duration - t),
            i = 1 - (n / u.duration || 0),
            o = 0,
            a = u.tweens.length;
          o < a;
          o++
        )
          u.tweens[o].run(i);
        return (
          s.notifyWith(e, [u, i, n]),
          i < 1 && a
            ? n
            : (a || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1)
        );
      },
      u = s.promise({
        elem: e,
        props: _.extend({}, t),
        opts: _.extend(!0, { specialEasing: {}, easing: _.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: tt || lt(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var i = _.Tween(
            e,
            u.opts,
            t,
            n,
            u.opts.specialEasing[t] || u.opts.easing
          );
          return u.tweens.push(i), i;
        },
        stop: function (t) {
          var n = 0,
            i = t ? u.tweens.length : 0;
          if (r) return this;
          for (r = !0; n < i; n++) u.tweens[n].run(1);
          return (
            t
              ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t]))
              : s.rejectWith(e, [u, t]),
            this
          );
        },
      }),
      c = u.props;
    for (
      !(function (e, t) {
        var n, i, r, o, a;
        for (n in e)
          if (
            ((r = t[(i = V(n))]),
            (o = e[n]),
            Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
            n !== i && ((e[i] = o), delete e[n]),
            (a = _.cssHooks[i]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[i], o))
              (n in e) || ((e[n] = o[n]), (t[n] = r));
          else t[i] = r;
      })(c, u.opts.specialEasing);
      o < a;
      o++
    )
      if ((i = ft.prefilters[o].call(u, e, c, u.opts)))
        return (
          p(i.stop) &&
            (_._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)),
          i
        );
    return (
      _.map(c, ct, u),
      p(u.opts.start) && u.opts.start.call(e, u),
      u
        .progress(u.opts.progress)
        .done(u.opts.done, u.opts.complete)
        .fail(u.opts.fail)
        .always(u.opts.always),
      _.fx.timer(_.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
      u
    );
  }
  (_.Animation = _.extend(ft, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      p(e) ? ((t = e), (e = ["*"])) : (e = e.match(N));
      for (var n, i = 0, r = e.length; i < r; i++)
        (n = e[i]),
          (ft.tweeners[n] = ft.tweeners[n] || []),
          ft.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var i,
          r,
          o,
          a,
          s,
          l,
          u,
          c,
          f = "width" in t || "height" in t,
          d = this,
          h = {},
          p = e.style,
          v = e.nodeType && ae(e),
          m = K.get(e, "fxshow");
        for (i in (n.queue ||
          (null == (a = _._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          d.always(function () {
            d.always(function () {
              a.unqueued--, _.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((r = t[i]), ot.test(r))) {
            if (
              (delete t[i],
              (o = o || "toggle" === r),
              r === (v ? "hide" : "show"))
            ) {
              if ("show" !== r || !m || void 0 === m[i]) continue;
              v = !0;
            }
            h[i] = (m && m[i]) || _.style(e, i);
          }
        if ((l = !_.isEmptyObject(t)) || !_.isEmptyObject(h))
          for (i in (f &&
            1 === e.nodeType &&
            ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
            null == (u = m && m.display) && (u = K.get(e, "display")),
            "none" === (c = _.css(e, "display")) &&
              (u
                ? (c = u)
                : (ue([e], !0),
                  (u = e.style.display || u),
                  (c = _.css(e, "display")),
                  ue([e]))),
            ("inline" === c || ("inline-block" === c && null != u)) &&
              "none" === _.css(e, "float") &&
              (l ||
                (d.done(function () {
                  p.display = u;
                }),
                null == u && ((c = p.display), (u = "none" === c ? "" : c))),
              (p.display = "inline-block"))),
          n.overflow &&
            ((p.overflow = "hidden"),
            d.always(function () {
              (p.overflow = n.overflow[0]),
                (p.overflowX = n.overflow[1]),
                (p.overflowY = n.overflow[2]);
            })),
          (l = !1),
          h))
            l ||
              (m
                ? "hidden" in m && (v = m.hidden)
                : (m = K.access(e, "fxshow", { display: u })),
              o && (m.hidden = !v),
              v && ue([e], !0),
              d.done(function () {
                for (i in (v || ue([e]), K.remove(e, "fxshow"), h))
                  _.style(e, i, h[i]);
              })),
              (l = ct(v ? m[i] : 0, i, d)),
              i in m ||
                ((m[i] = l.start), v && ((l.end = l.start), (l.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    },
  })),
    (_.speed = function (e, t, n) {
      var i =
        e && "object" == typeof e
          ? _.extend({}, e)
          : {
              complete: n || (!n && t) || (p(e) && e),
              duration: e,
              easing: (n && t) || (t && !p(t) && t),
            };
      return (
        _.fx.off
          ? (i.duration = 0)
          : "number" != typeof i.duration &&
            (i.duration in _.fx.speeds
              ? (i.duration = _.fx.speeds[i.duration])
              : (i.duration = _.fx.speeds._default)),
        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function () {
          p(i.old) && i.old.call(this), i.queue && _.dequeue(this, i.queue);
        }),
        i
      );
    }),
    _.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(ae)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, i);
      },
      animate: function (e, t, n, i) {
        var r = _.isEmptyObject(e),
          o = _.speed(t, n, i),
          a = function () {
            var t = ft(this, _.extend({}, e), o);
            (r || K.get(this, "finish")) && t.stop(!0);
          };
        return (
          (a.finish = a),
          r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (e, t, n) {
        var i = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              r = null != e && e + "queueHooks",
              o = _.timers,
              a = K.get(this);
            if (r) a[r] && a[r].stop && i(a[r]);
            else for (r in a) a[r] && a[r].stop && at.test(r) && i(a[r]);
            for (r = o.length; r--; )
              o[r].elem !== this ||
                (null != e && o[r].queue !== e) ||
                (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
            (!t && n) || _.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = K.get(this),
              i = n[e + "queue"],
              r = n[e + "queueHooks"],
              o = _.timers,
              a = i ? i.length : 0;
            for (
              n.finish = !0,
                _.queue(this, e, []),
                r && r.stop && r.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < a; t++)
              i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    _.each(["toggle", "show", "hide"], function (e, t) {
      var n = _.fn[t];
      _.fn[t] = function (e, i, r) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(ut(t, !0), e, i, r);
      };
    }),
    _.each(
      {
        slideDown: ut("show"),
        slideUp: ut("hide"),
        slideToggle: ut("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        _.fn[e] = function (e, n, i) {
          return this.animate(t, e, n, i);
        };
      }
    ),
    (_.timers = []),
    (_.fx.tick = function () {
      var e,
        t = 0,
        n = _.timers;
      for (tt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || _.fx.stop(), (tt = void 0);
    }),
    (_.fx.timer = function (e) {
      _.timers.push(e), _.fx.start();
    }),
    (_.fx.interval = 13),
    (_.fx.start = function () {
      nt || ((nt = !0), st());
    }),
    (_.fx.stop = function () {
      nt = null;
    }),
    (_.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (_.fn.delay = function (t, n) {
      return (
        (t = (_.fx && _.fx.speeds[t]) || t),
        (n = n || "fx"),
        this.queue(n, function (n, i) {
          var r = e.setTimeout(n, t);
          i.stop = function () {
            e.clearTimeout(r);
          };
        })
      );
    }),
    (it = m.createElement("input")),
    (rt = m.createElement("select").appendChild(m.createElement("option"))),
    (it.type = "checkbox"),
    (h.checkOn = "" !== it.value),
    (h.optSelected = rt.selected),
    ((it = m.createElement("input")).value = "t"),
    (it.type = "radio"),
    (h.radioValue = "t" === it.value);
  var dt,
    ht = _.expr.attrHandle;
  _.fn.extend({
    attr: function (e, t) {
      return U(this, _.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        _.removeAttr(this, e);
      });
    },
  }),
    _.extend({
      attr: function (e, t, n) {
        var i,
          r,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? _.prop(e, t, n)
            : ((1 === o && _.isXMLDoc(e)) ||
                (r =
                  _.attrHooks[t.toLowerCase()] ||
                  (_.expr.match.bool.test(t) ? dt : void 0)),
              void 0 !== n
                ? null === n
                  ? void _.removeAttr(e, t)
                  : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                  ? i
                  : (e.setAttribute(t, n + ""), n)
                : r && "get" in r && null !== (i = r.get(e, t))
                ? i
                : null == (i = _.find.attr(e, t))
                ? void 0
                : i);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!h.radioValue && "radio" === t && S(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          i = 0,
          r = t && t.match(N);
        if (r && 1 === e.nodeType) while ((n = r[i++])) e.removeAttribute(n);
      },
    }),
    (dt = {
      set: function (e, t, n) {
        return !1 === t ? _.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    _.each(_.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = ht[t] || _.find.attr;
      ht[t] = function (e, t, i) {
        var r,
          o,
          a = t.toLowerCase();
        return (
          i ||
            ((o = ht[a]),
            (ht[a] = r),
            (r = null != n(e, t, i) ? a : null),
            (ht[a] = o)),
          r
        );
      };
    });
  var pt = /^(?:input|select|textarea|button)$/i,
    vt = /^(?:a|area)$/i;
  function mt(e) {
    return (e.match(N) || []).join(" ");
  }
  function gt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function yt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(N)) || [];
  }
  _.fn.extend({
    prop: function (e, t) {
      return U(this, _.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[_.propFix[e] || e];
      });
    },
  }),
    _.extend({
      prop: function (e, t, n) {
        var i,
          r,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && _.isXMLDoc(e)) ||
              ((t = _.propFix[t] || t), (r = _.propHooks[t])),
            void 0 !== n
              ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                ? i
                : (e[t] = n)
              : r && "get" in r && null !== (i = r.get(e, t))
              ? i
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = _.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : pt.test(e.nodeName) || (vt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    h.optSelected ||
      (_.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    _.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        _.propFix[this.toLowerCase()] = this;
      }
    ),
    _.fn.extend({
      addClass: function (e) {
        var t,
          n,
          i,
          r,
          o,
          a,
          s,
          l = 0;
        if (p(e))
          return this.each(function (t) {
            _(this).addClass(e.call(this, t, gt(this)));
          });
        if ((t = yt(e)).length)
          while ((n = this[l++]))
            if (((r = gt(n)), (i = 1 === n.nodeType && " " + mt(r) + " "))) {
              a = 0;
              while ((o = t[a++]))
                i.indexOf(" " + o + " ") < 0 && (i += o + " ");
              r !== (s = mt(i)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          i,
          r,
          o,
          a,
          s,
          l = 0;
        if (p(e))
          return this.each(function (t) {
            _(this).removeClass(e.call(this, t, gt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((t = yt(e)).length)
          while ((n = this[l++]))
            if (((r = gt(n)), (i = 1 === n.nodeType && " " + mt(r) + " "))) {
              a = 0;
              while ((o = t[a++]))
                while (-1 < i.indexOf(" " + o + " "))
                  i = i.replace(" " + o + " ", " ");
              r !== (s = mt(i)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e,
          i = "string" === n || Array.isArray(e);
        return "boolean" == typeof t && i
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : p(e)
          ? this.each(function (n) {
              _(this).toggleClass(e.call(this, n, gt(this), t), t);
            })
          : this.each(function () {
              var t, r, o, a;
              if (i) {
                (r = 0), (o = _(this)), (a = yt(e));
                while ((t = a[r++]))
                  o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
              } else (void 0 !== e && "boolean" !== n) || ((t = gt(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          i = 0;
        t = " " + e + " ";
        while ((n = this[i++]))
          if (1 === n.nodeType && -1 < (" " + mt(gt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var bt = /\r/g;
  _.fn.extend({
    val: function (e) {
      var t,
        n,
        i,
        r = this[0];
      return arguments.length
        ? ((i = p(e)),
          this.each(function (n) {
            var r;
            1 === this.nodeType &&
              (null == (r = i ? e.call(this, n, _(this).val()) : e)
                ? (r = "")
                : "number" == typeof r
                ? (r += "")
                : Array.isArray(r) &&
                  (r = _.map(r, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t =
                _.valHooks[this.type] ||
                _.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, r, "value")) ||
                (this.value = r));
          }))
        : r
        ? (t = _.valHooks[r.type] || _.valHooks[r.nodeName.toLowerCase()]) &&
          "get" in t &&
          void 0 !== (n = t.get(r, "value"))
          ? n
          : "string" == typeof (n = r.value)
          ? n.replace(bt, "")
          : null == n
          ? ""
          : n
        : void 0;
    },
  }),
    _.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = _.find.attr(e, "value");
            return null != t ? t : mt(_.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              i,
              r = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              l = a ? o + 1 : r.length;
            for (i = o < 0 ? l : a ? o : 0; i < l; i++)
              if (
                ((n = r[i]).selected || i === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))
              ) {
                if (((t = _(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              i,
              r = e.options,
              o = _.makeArray(t),
              a = r.length;
            while (a--)
              ((i = r[a]).selected =
                -1 < _.inArray(_.valHooks.option.get(i), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    _.each(["radio", "checkbox"], function () {
      (_.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < _.inArray(_(e).val(), t));
        },
      }),
        h.checkOn ||
          (_.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (h.focusin = "onfocusin" in e);
  var wt = /^(?:focusinfocus|focusoutblur)$/,
    _t = function (e) {
      e.stopPropagation();
    };
  _.extend(_.event, {
    trigger: function (t, n, i, r) {
      var o,
        a,
        s,
        l,
        u,
        f,
        d,
        h,
        g = [i || m],
        y = c.call(t, "type") ? t.type : t,
        b = c.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((a = h = s = i = i || m),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !wt.test(y + _.event.triggered) &&
          (-1 < y.indexOf(".") && ((y = (b = y.split(".")).shift()), b.sort()),
          (u = y.indexOf(":") < 0 && "on" + y),
          ((t = t[_.expando]
            ? t
            : new _.Event(y, "object" == typeof t && t)).isTrigger = r ? 2 : 3),
          (t.namespace = b.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = i),
          (n = null == n ? [t] : _.makeArray(n, [t])),
          (d = _.event.special[y] || {}),
          r || !d.trigger || !1 !== d.trigger.apply(i, n)))
      ) {
        if (!r && !d.noBubble && !v(i)) {
          for (
            l = d.delegateType || y, wt.test(l + y) || (a = a.parentNode);
            a;
            a = a.parentNode
          )
            g.push(a), (s = a);
          s === (i.ownerDocument || m) &&
            g.push(s.defaultView || s.parentWindow || e);
        }
        o = 0;
        while ((a = g[o++]) && !t.isPropagationStopped())
          (h = a),
            (t.type = 1 < o ? l : d.bindType || y),
            (f =
              (K.get(a, "events") || Object.create(null))[t.type] &&
              K.get(a, "handle")) && f.apply(a, n),
            (f = u && a[u]) &&
              f.apply &&
              Q(a) &&
              ((t.result = f.apply(a, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = y),
          r ||
            t.isDefaultPrevented() ||
            (d._default && !1 !== d._default.apply(g.pop(), n)) ||
            !Q(i) ||
            (u &&
              p(i[y]) &&
              !v(i) &&
              ((s = i[u]) && (i[u] = null),
              (_.event.triggered = y),
              t.isPropagationStopped() && h.addEventListener(y, _t),
              i[y](),
              t.isPropagationStopped() && h.removeEventListener(y, _t),
              (_.event.triggered = void 0),
              s && (i[u] = s))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var i = _.extend(new _.Event(), n, { type: e, isSimulated: !0 });
      _.event.trigger(i, null, t);
    },
  }),
    _.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          _.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return _.event.trigger(e, t, n, !0);
      },
    }),
    h.focusin ||
      _.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          _.event.simulate(t, e.target, _.event.fix(e));
        };
        _.event.special[t] = {
          setup: function () {
            var i = this.ownerDocument || this.document || this,
              r = K.access(i, t);
            r || i.addEventListener(e, n, !0), K.access(i, t, (r || 0) + 1);
          },
          teardown: function () {
            var i = this.ownerDocument || this.document || this,
              r = K.access(i, t) - 1;
            r
              ? K.access(i, t, r)
              : (i.removeEventListener(e, n, !0), K.remove(i, t));
          },
        };
      });
  var xt = e.location,
    Ct = { guid: Date.now() },
    kt = /\?/;
  _.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (t) {
      n = void 0;
    }
    return (
      (n && !n.getElementsByTagName("parsererror").length) ||
        _.error("Invalid XML: " + t),
      n
    );
  };
  var Tt = /\[\]$/,
    Et = /\r?\n/g,
    St = /^(?:submit|button|image|reset|file)$/i,
    $t = /^(?:input|select|textarea|keygen)/i;
  function At(e, t, n, i) {
    var r;
    if (Array.isArray(t))
      _.each(t, function (t, r) {
        n || Tt.test(e)
          ? i(e, r)
          : At(
              e + "[" + ("object" == typeof r && null != r ? t : "") + "]",
              r,
              n,
              i
            );
      });
    else if (n || "object" !== b(t)) i(e, t);
    else for (r in t) At(e + "[" + r + "]", t[r], n, i);
  }
  (_.param = function (e, t) {
    var n,
      i = [],
      r = function (e, t) {
        var n = p(t) ? t() : t;
        i[i.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !_.isPlainObject(e)))
      _.each(e, function () {
        r(this.name, this.value);
      });
    else for (n in e) At(n, e[n], t, r);
    return i.join("&");
  }),
    _.fn.extend({
      serialize: function () {
        return _.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = _.prop(this, "elements");
          return e ? _.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !_(this).is(":disabled") &&
              $t.test(this.nodeName) &&
              !St.test(e) &&
              (this.checked || !de.test(e))
            );
          })
          .map(function (e, t) {
            var n = _(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? _.map(n, function (e) {
                  return { name: t.name, value: e.replace(Et, "\r\n") };
                })
              : { name: t.name, value: n.replace(Et, "\r\n") };
          })
          .get();
      },
    });
  var Ot = /%20/g,
    It = /#.*$/,
    jt = /([?&])_=[^&]*/,
    Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Dt = /^(?:GET|HEAD)$/,
    Nt = /^\/\//,
    Pt = {},
    qt = {},
    Rt = "*/".concat("*"),
    Mt = m.createElement("a");
  function Ht(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var i,
        r = 0,
        o = t.toLowerCase().match(N) || [];
      if (p(n))
        while ((i = o[r++]))
          "+" === i[0]
            ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
            : (e[i] = e[i] || []).push(n);
    };
  }
  function Ft(e, t, n, i) {
    var r = {},
      o = e === qt;
    function a(s) {
      var l;
      return (
        (r[s] = !0),
        _.each(e[s] || [], function (e, s) {
          var u = s(t, n, i);
          return "string" != typeof u || o || r[u]
            ? o
              ? !(l = u)
              : void 0
            : (t.dataTypes.unshift(u), a(u), !1);
        }),
        l
      );
    }
    return a(t.dataTypes[0]) || (!r["*"] && a("*"));
  }
  function Ut(e, t) {
    var n,
      i,
      r = _.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
    return i && _.extend(!0, e, i), e;
  }
  (Mt.href = xt.href),
    _.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: xt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            xt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Rt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": _.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Ut(Ut(e, _.ajaxSettings), t) : Ut(_.ajaxSettings, e);
      },
      ajaxPrefilter: Ht(Pt),
      ajaxTransport: Ht(qt),
      ajax: function (t, n) {
        "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
        var i,
          r,
          o,
          a,
          s,
          l,
          u,
          c,
          f,
          d,
          h = _.ajaxSetup({}, n),
          p = h.context || h,
          v = h.context && (p.nodeType || p.jquery) ? _(p) : _.event,
          g = _.Deferred(),
          y = _.Callbacks("once memory"),
          b = h.statusCode || {},
          w = {},
          x = {},
          C = "canceled",
          k = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (u) {
                if (!a) {
                  a = {};
                  while ((t = Lt.exec(o)))
                    a[t[1].toLowerCase() + " "] = (
                      a[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = a[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return u ? o : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == u &&
                  ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                  (w[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == u && (h.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (u) k.always(e[k.status]);
                else for (t in e) b[t] = [b[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || C;
              return i && i.abort(t), T(0, t), this;
            },
          };
        if (
          (g.promise(k),
          (h.url = ((t || h.url || xt.href) + "").replace(
            Nt,
            xt.protocol + "//"
          )),
          (h.type = n.method || n.type || h.method || h.type),
          (h.dataTypes = (h.dataType || "*").toLowerCase().match(N) || [""]),
          null == h.crossDomain)
        ) {
          l = m.createElement("a");
          try {
            (l.href = h.url),
              (l.href = l.href),
              (h.crossDomain =
                Mt.protocol + "//" + Mt.host != l.protocol + "//" + l.host);
          } catch (t) {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data &&
            h.processData &&
            "string" != typeof h.data &&
            (h.data = _.param(h.data, h.traditional)),
          Ft(Pt, h, n, k),
          u)
        )
          return k;
        for (f in ((c = _.event && h.global) &&
          0 == _.active++ &&
          _.event.trigger("ajaxStart"),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !Dt.test(h.type)),
        (r = h.url.replace(It, "")),
        h.hasContent
          ? h.data &&
            h.processData &&
            0 ===
              (h.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (h.data = h.data.replace(Ot, "+"))
          : ((d = h.url.slice(r.length)),
            h.data &&
              (h.processData || "string" == typeof h.data) &&
              ((r += (kt.test(r) ? "&" : "?") + h.data), delete h.data),
            !1 === h.cache &&
              ((r = r.replace(jt, "$1")),
              (d = (kt.test(r) ? "&" : "?") + "_=" + Ct.guid++ + d)),
            (h.url = r + d)),
        h.ifModified &&
          (_.lastModified[r] &&
            k.setRequestHeader("If-Modified-Since", _.lastModified[r]),
          _.etag[r] && k.setRequestHeader("If-None-Match", _.etag[r])),
        ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
          k.setRequestHeader("Content-Type", h.contentType),
        k.setRequestHeader(
          "Accept",
          h.dataTypes[0] && h.accepts[h.dataTypes[0]]
            ? h.accepts[h.dataTypes[0]] +
                ("*" !== h.dataTypes[0] ? ", " + Rt + "; q=0.01" : "")
            : h.accepts["*"]
        ),
        h.headers))
          k.setRequestHeader(f, h.headers[f]);
        if (h.beforeSend && (!1 === h.beforeSend.call(p, k, h) || u))
          return k.abort();
        if (
          ((C = "abort"),
          y.add(h.complete),
          k.done(h.success),
          k.fail(h.error),
          (i = Ft(qt, h, n, k)))
        ) {
          if (((k.readyState = 1), c && v.trigger("ajaxSend", [k, h]), u))
            return k;
          h.async &&
            0 < h.timeout &&
            (s = e.setTimeout(function () {
              k.abort("timeout");
            }, h.timeout));
          try {
            (u = !1), i.send(w, T);
          } catch (t) {
            if (u) throw t;
            T(-1, t);
          }
        } else T(-1, "No Transport");
        function T(t, n, a, l) {
          var f,
            d,
            m,
            w,
            x,
            C = n;
          u ||
            ((u = !0),
            s && e.clearTimeout(s),
            (i = void 0),
            (o = l || ""),
            (k.readyState = 0 < t ? 4 : 0),
            (f = (200 <= t && t < 300) || 304 === t),
            a &&
              (w = (function (e, t, n) {
                var i,
                  r,
                  o,
                  a,
                  s = e.contents,
                  l = e.dataTypes;
                while ("*" === l[0])
                  l.shift(),
                    void 0 === i &&
                      (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i)
                  for (r in s)
                    if (s[r] && s[r].test(i)) {
                      l.unshift(r);
                      break;
                    }
                if (l[0] in n) o = l[0];
                else {
                  for (r in n) {
                    if (!l[0] || e.converters[r + " " + l[0]]) {
                      o = r;
                      break;
                    }
                    a || (a = r);
                  }
                  o = o || a;
                }
                if (o) return o !== l[0] && l.unshift(o), n[o];
              })(h, k, a)),
            !f &&
              -1 < _.inArray("script", h.dataTypes) &&
              (h.converters["text script"] = function () {}),
            (w = (function (e, t, n, i) {
              var r,
                o,
                a,
                s,
                l,
                u = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (l = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = l;
                  else if ("*" !== l && l !== o) {
                    if (!(a = u[l + " " + o] || u["* " + o]))
                      for (r in u)
                        if (
                          (s = r.split(" "))[1] === o &&
                          (a = u[l + " " + s[0]] || u["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = u[r])
                            : !0 !== u[r] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + l + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(h, w, k, f)),
            f
              ? (h.ifModified &&
                  ((x = k.getResponseHeader("Last-Modified")) &&
                    (_.lastModified[r] = x),
                  (x = k.getResponseHeader("etag")) && (_.etag[r] = x)),
                204 === t || "HEAD" === h.type
                  ? (C = "nocontent")
                  : 304 === t
                  ? (C = "notmodified")
                  : ((C = w.state), (d = w.data), (f = !(m = w.error))))
              : ((m = C), (!t && C) || ((C = "error"), t < 0 && (t = 0))),
            (k.status = t),
            (k.statusText = (n || C) + ""),
            f ? g.resolveWith(p, [d, C, k]) : g.rejectWith(p, [k, C, m]),
            k.statusCode(b),
            (b = void 0),
            c && v.trigger(f ? "ajaxSuccess" : "ajaxError", [k, h, f ? d : m]),
            y.fireWith(p, [k, C]),
            c &&
              (v.trigger("ajaxComplete", [k, h]),
              --_.active || _.event.trigger("ajaxStop")));
        }
        return k;
      },
      getJSON: function (e, t, n) {
        return _.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return _.get(e, void 0, t, "script");
      },
    }),
    _.each(["get", "post"], function (e, t) {
      _[t] = function (e, n, i, r) {
        return (
          p(n) && ((r = r || i), (i = n), (n = void 0)),
          _.ajax(
            _.extend(
              { url: e, type: t, dataType: r, data: n, success: i },
              _.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    _.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (_._evalUrl = function (e, t, n) {
      return _.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          _.globalEval(e, t, n);
        },
      });
    }),
    _.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (p(e) && (e = e.call(this[0])),
            (t = _(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return p(e)
          ? this.each(function (t) {
              _(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = _(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = p(e);
        return this.each(function (n) {
          _(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              _(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (_.expr.pseudos.hidden = function (e) {
      return !_.expr.pseudos.visible(e);
    }),
    (_.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (_.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var Bt = { 0: 200, 1223: 204 },
    Wt = _.ajaxSettings.xhr();
  (h.cors = !!Wt && "withCredentials" in Wt),
    (h.ajax = Wt = !!Wt),
    _.ajaxTransport(function (t) {
      var n, i;
      if (h.cors || (Wt && !t.crossDomain))
        return {
          send: function (r, o) {
            var a,
              s = t.xhr();
            if (
              (s.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (a in t.xhrFields) s[a] = t.xhrFields[a];
            for (a in (t.mimeType &&
              s.overrideMimeType &&
              s.overrideMimeType(t.mimeType),
            t.crossDomain ||
              r["X-Requested-With"] ||
              (r["X-Requested-With"] = "XMLHttpRequest"),
            r))
              s.setRequestHeader(a, r[a]);
            (n = function (e) {
              return function () {
                n &&
                  ((n =
                    i =
                    s.onload =
                    s.onerror =
                    s.onabort =
                    s.ontimeout =
                    s.onreadystatechange =
                      null),
                  "abort" === e
                    ? s.abort()
                    : "error" === e
                    ? "number" != typeof s.status
                      ? o(0, "error")
                      : o(s.status, s.statusText)
                    : o(
                        Bt[s.status] || s.status,
                        s.statusText,
                        "text" !== (s.responseType || "text") ||
                          "string" != typeof s.responseText
                          ? { binary: s.response }
                          : { text: s.responseText },
                        s.getAllResponseHeaders()
                      ));
              };
            }),
              (s.onload = n()),
              (i = s.onerror = s.ontimeout = n("error")),
              void 0 !== s.onabort
                ? (s.onabort = i)
                : (s.onreadystatechange = function () {
                    4 === s.readyState &&
                      e.setTimeout(function () {
                        n && i();
                      });
                  }),
              (n = n("abort"));
            try {
              s.send((t.hasContent && t.data) || null);
            } catch (r) {
              if (n) throw r;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    _.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    _.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return _.globalEval(e), e;
        },
      },
    }),
    _.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    _.ajaxTransport("script", function (e) {
      var t, n;
      if (e.crossDomain || e.scriptAttrs)
        return {
          send: function (i, r) {
            (t = _("<script>")
              .attr(e.scriptAttrs || {})
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && r("error" === e.type ? 404 : 200, e.type);
                })
              )),
              m.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
    });
  var zt,
    Vt = [],
    Qt = /(=)\?(?=&|$)|\?\?/;
  _.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Vt.pop() || _.expando + "_" + Ct.guid++;
      return (this[e] = !0), e;
    },
  }),
    _.ajaxPrefilter("json jsonp", function (t, n, i) {
      var r,
        o,
        a,
        s =
          !1 !== t.jsonp &&
          (Qt.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Qt.test(t.data) &&
              "data");
      if (s || "jsonp" === t.dataTypes[0])
        return (
          (r = t.jsonpCallback =
            p(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(Qt, "$1" + r))
            : !1 !== t.jsonp &&
              (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
          (t.converters["script json"] = function () {
            return a || _.error(r + " was not called"), a[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = e[r]),
          (e[r] = function () {
            a = arguments;
          }),
          i.always(function () {
            void 0 === o ? _(e).removeProp(r) : (e[r] = o),
              t[r] && ((t.jsonpCallback = n.jsonpCallback), Vt.push(r)),
              a && p(o) && o(a[0]),
              (a = o = void 0);
          }),
          "script"
        );
    }),
    (h.createHTMLDocument =
      (((zt = m.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === zt.childNodes.length)),
    (_.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (h.createHTMLDocument
              ? (((i = (t =
                  m.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = m.location.href),
                t.head.appendChild(i))
              : (t = m)),
          (o = !n && []),
          (r = $.exec(e))
            ? [t.createElement(r[1])]
            : ((r = be([e], t, o)),
              o && o.length && _(o).remove(),
              _.merge([], r.childNodes)));
      var i, r, o;
    }),
    (_.fn.load = function (e, t, n) {
      var i,
        r,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((i = mt(e.slice(s))), (e = e.slice(0, s))),
        p(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (r = "POST"),
        0 < a.length &&
          _.ajax({ url: e, type: r || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(i ? _("<div>").append(_.parseHTML(e)).find(i) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (_.expr.pseudos.animated = function (e) {
      return _.grep(_.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (_.offset = {
      setOffset: function (e, t, n) {
        var i,
          r,
          o,
          a,
          s,
          l,
          u = _.css(e, "position"),
          c = _(e),
          f = {};
        "static" === u && (e.style.position = "relative"),
          (s = c.offset()),
          (o = _.css(e, "top")),
          (l = _.css(e, "left")),
          ("absolute" === u || "fixed" === u) && -1 < (o + l).indexOf("auto")
            ? ((a = (i = c.position()).top), (r = i.left))
            : ((a = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
          p(t) && (t = t.call(e, n, _.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + r),
          "using" in t
            ? t.using.call(e, f)
            : ("number" == typeof f.top && (f.top += "px"),
              "number" == typeof f.left && (f.left += "px"),
              c.css(f));
      },
    }),
    _.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                _.offset.setOffset(this, e, t);
              });
        var t,
          n,
          i = this[0];
        return i
          ? i.getClientRects().length
            ? ((t = i.getBoundingClientRect()),
              (n = i.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            i = this[0],
            r = { top: 0, left: 0 };
          if ("fixed" === _.css(i, "position")) t = i.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = i.ownerDocument),
              (e = i.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === _.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== i &&
              1 === e.nodeType &&
              (((r = _(e).offset()).top += _.css(e, "borderTopWidth", !0)),
              (r.left += _.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - r.top - _.css(i, "marginTop", !0),
            left: t.left - r.left - _.css(i, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === _.css(e, "position")) e = e.offsetParent;
          return e || ie;
        });
      },
    }),
    _.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var n = "pageYOffset" === t;
        _.fn[e] = function (i) {
          return U(
            this,
            function (e, i, r) {
              var o;
              if (
                (v(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                void 0 === r)
              )
                return o ? o[t] : e[i];
              o
                ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset)
                : (e[i] = r);
            },
            e,
            i,
            arguments.length
          );
        };
      }
    ),
    _.each(["top", "left"], function (e, t) {
      _.cssHooks[t] = Ue(h.pixelPosition, function (e, n) {
        if (n)
          return (n = Fe(e, t)), qe.test(n) ? _(e).position()[t] + "px" : n;
      });
    }),
    _.each({ Height: "height", Width: "width" }, function (e, t) {
      _.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, i) {
          _.fn[i] = function (r, o) {
            var a = arguments.length && (n || "boolean" != typeof r),
              s = n || (!0 === r || !0 === o ? "margin" : "border");
            return U(
              this,
              function (t, n, r) {
                var o;
                return v(t)
                  ? 0 === i.indexOf("outer")
                    ? t["inner" + e]
                    : t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((o = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      o["scroll" + e],
                      t.body["offset" + e],
                      o["offset" + e],
                      o["client" + e]
                    ))
                  : void 0 === r
                  ? _.css(t, n, s)
                  : _.style(t, n, r, s);
              },
              t,
              a ? r : void 0,
              a
            );
          };
        }
      );
    }),
    _.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        _.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    _.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    _.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        _.fn[t] = function (e, n) {
          return 0 < arguments.length
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    );
  var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (_.proxy = function (e, t) {
    var n, i, o;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), p(e)))
      return (
        (i = r.call(arguments, 2)),
        ((o = function () {
          return e.apply(t || this, i.concat(r.call(arguments)));
        }).guid = e.guid =
          e.guid || _.guid++),
        o
      );
  }),
    (_.holdReady = function (e) {
      e ? _.readyWait++ : _.ready(!0);
    }),
    (_.isArray = Array.isArray),
    (_.parseJSON = JSON.parse),
    (_.nodeName = S),
    (_.isFunction = p),
    (_.isWindow = v),
    (_.camelCase = V),
    (_.type = b),
    (_.now = Date.now),
    (_.isNumeric = function (e) {
      var t = _.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (_.trim = function (e) {
      return null == e ? "" : (e + "").replace(Xt, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return _;
      });
  var Kt = e.jQuery,
    Yt = e.$;
  return (
    (_.noConflict = function (t) {
      return e.$ === _ && (e.$ = Yt), t && e.jQuery === _ && (e.jQuery = Kt), _;
    }),
    "undefined" == typeof t && (e.jQuery = e.$ = _),
    _
  );
});
(function () {
  var e,
    t,
    n,
    i,
    r,
    o,
    a,
    s,
    l,
    u,
    c,
    f,
    d,
    h,
    p,
    v,
    m,
    g,
    y,
    b,
    w,
    _,
    x,
    C,
    k = [].slice,
    T =
      [].indexOf ||
      function (e) {
        for (var t = 0, n = this.length; t < n; t++) {
          if (t in this && this[t] === e) return t;
        }
        return -1;
      };
  e = window.jQuery || window.Zepto || window.$;
  e.payment = {};
  e.payment.fn = {};
  e.fn.payment = function () {
    var t, n;
    (n = arguments[0]), (t = 2 <= arguments.length ? k.call(arguments, 1) : []);
    return e.payment.fn[n].apply(this, t);
  };
  r = /(\d{1,4})/g;
  e.payment.cards = i = [
    {
      type: "elo",
      patterns: [
        401178, 401179, 431274, 438935, 451416, 457393, 457631, 457632, 504175,
        506699, 5067, 509, 627780, 636297, 636368, 650, 6516, 6550,
      ],
      format: r,
      length: [16],
      cvcLength: [3],
      luhn: true,
    },
    {
      type: "visaelectron",
      patterns: [4026, 417500, 4405, 4508, 4844, 4913, 4917],
      format: r,
      length: [16],
      cvcLength: [3],
      luhn: true,
    },
    {
      type: "maestro",
      patterns: [5018, 502, 503, 506, 56, 58, 639, 6220, 67],
      format: r,
      length: [12, 13, 14, 15, 16, 17, 18, 19],
      cvcLength: [3],
      luhn: true,
    },
    {
      type: "forbrugsforeningen",
      patterns: [600],
      format: r,
      length: [16],
      cvcLength: [3],
      luhn: true,
    },
    {
      type: "dankort",
      patterns: [5019],
      format: r,
      length: [16],
      cvcLength: [3],
      luhn: true,
    },
    {
      type: "visa",
      patterns: [4],
      format: r,
      length: [13, 16],
      cvcLength: [3],
      luhn: true,
    },
    {
      type: "mastercard",
      patterns: [51, 52, 53, 54, 55, 22, 23, 24, 25, 26, 27],
      format: r,
      length: [16],
      cvcLength: [3],
      luhn: true,
    },
    {
      type: "amex",
      patterns: [34, 37],
      format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
      length: [15],
      cvcLength: [3, 4],
      luhn: true,
    },
    {
      type: "dinersclub",
      patterns: [30, 36, 38, 39],
      format: /(\d{1,4})(\d{1,6})?(\d{1,4})?/,
      length: [14],
      cvcLength: [3],
      luhn: true,
    },
    {
      type: "discover",
      patterns: [60, 64, 65, 622],
      format: r,
      length: [16],
      cvcLength: [3],
      luhn: true,
    },
    {
      type: "unionpay",
      patterns: [62, 88],
      format: r,
      length: [16, 17, 18, 19],
      cvcLength: [3],
      luhn: false,
    },
    {
      type: "jcb",
      patterns: [35],
      format: r,
      length: [16],
      cvcLength: [3],
      luhn: true,
    },
  ];
  t = function (e) {
    var t, n, r, o, a, s, l, u;
    e = (e + "").replace(/\D/g, "");
    for (o = 0, s = i.length; o < s; o++) {
      t = i[o];
      u = t.patterns;
      for (a = 0, l = u.length; a < l; a++) {
        r = u[a];
        n = r + "";
        if (e.substr(0, n.length) === n) {
          return t;
        }
      }
    }
  };
  n = function (e) {
    var t, n, r;
    for (n = 0, r = i.length; n < r; n++) {
      t = i[n];
      if (t.type === e) {
        return t;
      }
    }
  };
  d = function (e) {
    var t, n, i, r, o, a;
    i = true;
    r = 0;
    n = (e + "").split("").reverse();
    for (o = 0, a = n.length; o < a; o++) {
      t = n[o];
      t = parseInt(t, 10);
      if ((i = !i)) {
        t *= 2;
      }
      if (t > 9) {
        t -= 9;
      }
      r += t;
    }
    return r % 10 === 0;
  };
  f = function (e) {
    var t;
    if (
      e.prop("selectionStart") != null &&
      e.prop("selectionStart") !== e.prop("selectionEnd")
    ) {
      return true;
    }
    if (
      (typeof document !== "undefined" && document !== null
        ? (t = document.selection) != null
          ? t.createRange
          : void 0
        : void 0) != null
    ) {
      if (document.selection.createRange().text) {
        return true;
      }
    }
    return false;
  };
  x = function (e, t) {
    var n, i, r, o, a, s;
    try {
      i = t.prop("selectionStart");
    } catch (e) {
      o = e;
      i = null;
    }
    a = t.val();
    t.val(e);
    if (i !== null && t.is(":focus")) {
      if (i === a.length) {
        i = e.length;
      }
      if (a !== e) {
        s = a.slice(i - 1, +i + 1 || 9e9);
        n = e.slice(i - 1, +i + 1 || 9e9);
        r = e[i];
        if (/\d/.test(r) && s === "" + r + " " && n === " " + r) {
          i = i + 1;
        }
      }
      t.prop("selectionStart", i);
      return t.prop("selectionEnd", i);
    }
  };
  g = function (e) {
    var t, n, i, r, o, a, s, l;
    if (e == null) {
      e = "";
    }
    i = "０１２３４５６７８９";
    r = "0123456789";
    a = "";
    t = e.split("");
    for (s = 0, l = t.length; s < l; s++) {
      n = t[s];
      o = i.indexOf(n);
      if (o > -1) {
        n = r[o];
      }
      a += n;
    }
    return a;
  };
  m = function (t) {
    var n;
    n = e(t.currentTarget);
    return setTimeout(function () {
      var e;
      e = n.val();
      e = g(e);
      e = e.replace(/\D/g, "");
      return x(e, n);
    });
  };
  p = function (t) {
    var n;
    n = e(t.currentTarget);
    return setTimeout(function () {
      var t;
      t = n.val();
      t = g(t);
      t = e.payment.formatCardNumber(t);
      return x(t, n);
    });
  };
  s = function (n) {
    var i, r, o, a, s, l, u;
    o = String.fromCharCode(n.which);
    if (!/^\d+$/.test(o)) {
      return;
    }
    i = e(n.currentTarget);
    u = i.val();
    r = t(u + o);
    a = (u.replace(/\D/g, "") + o).length;
    l = 16;
    if (r) {
      l = r.length[r.length.length - 1];
    }
    if (a >= l) {
      return;
    }
    if (
      i.prop("selectionStart") != null &&
      i.prop("selectionStart") !== u.length
    ) {
      return;
    }
    if (r && r.type === "amex") {
      s = /^(\d{4}|\d{4}\s\d{6})$/;
    } else {
      s = /(?:^|\s)(\d{4})$/;
    }
    if (s.test(u)) {
      n.preventDefault();
      return setTimeout(function () {
        return i.val(u + " " + o);
      });
    } else if (s.test(u + o)) {
      n.preventDefault();
      return setTimeout(function () {
        return i.val(u + o + " ");
      });
    }
  };
  o = function (t) {
    var n, i;
    n = e(t.currentTarget);
    i = n.val();
    if (t.which !== 8) {
      return;
    }
    if (
      n.prop("selectionStart") != null &&
      n.prop("selectionStart") !== i.length
    ) {
      return;
    }
    if (/\d\s$/.test(i)) {
      t.preventDefault();
      return setTimeout(function () {
        return n.val(i.replace(/\d\s$/, ""));
      });
    } else if (/\s\d?$/.test(i)) {
      t.preventDefault();
      return setTimeout(function () {
        return n.val(i.replace(/\d$/, ""));
      });
    }
  };
  v = function (t) {
    var n;
    n = e(t.currentTarget);
    return setTimeout(function () {
      var t;
      t = n.val();
      t = g(t);
      t = e.payment.formatExpiry(t);
      return x(t, n);
    });
  };
  l = function (t) {
    var n, i, r;
    i = String.fromCharCode(t.which);
    if (!/^\d+$/.test(i)) {
      return;
    }
    n = e(t.currentTarget);
    r = n.val() + i;
    if (/^\d$/.test(r) && r !== "0" && r !== "1") {
      t.preventDefault();
      return setTimeout(function () {
        return n.val("0" + r + " / ");
      });
    } else if (/^\d\d$/.test(r)) {
      t.preventDefault();
      return setTimeout(function () {
        var e, t;
        e = parseInt(r[0], 10);
        t = parseInt(r[1], 10);
        if (t > 2 && e !== 0) {
          return n.val("0" + e + " / " + t);
        } else {
          return n.val("" + r + " / ");
        }
      });
    }
  };
  u = function (t) {
    var n, i, r;
    i = String.fromCharCode(t.which);
    if (!/^\d+$/.test(i)) {
      return;
    }
    n = e(t.currentTarget);
    r = n.val();
    if (/^\d\d$/.test(r)) {
      return n.val("" + r + " / ");
    }
  };
  c = function (t) {
    var n, i, r;
    r = String.fromCharCode(t.which);
    if (!(r === "/" || r === " ")) {
      return;
    }
    n = e(t.currentTarget);
    i = n.val();
    if (/^\d$/.test(i) && i !== "0") {
      return n.val("0" + i + " / ");
    }
  };
  a = function (t) {
    var n, i;
    n = e(t.currentTarget);
    i = n.val();
    if (t.which !== 8) {
      return;
    }
    if (
      n.prop("selectionStart") != null &&
      n.prop("selectionStart") !== i.length
    ) {
      return;
    }
    if (/\d\s\/\s$/.test(i)) {
      t.preventDefault();
      return setTimeout(function () {
        return n.val(i.replace(/\d\s\/\s$/, ""));
      });
    }
  };
  h = function (t) {
    var n;
    n = e(t.currentTarget);
    return setTimeout(function () {
      var e;
      e = n.val();
      e = g(e);
      e = e.replace(/\D/g, "").slice(0, 4);
      return x(e, n);
    });
  };
  _ = function (e) {
    var t;
    if (e.metaKey || e.ctrlKey) {
      return true;
    }
    if (e.which === 32) {
      return false;
    }
    if (e.which === 0) {
      return true;
    }
    if (e.which < 33) {
      return true;
    }
    t = String.fromCharCode(e.which);
    return !!/[\d\s]/.test(t);
  };
  b = function (n) {
    var i, r, o, a;
    i = e(n.currentTarget);
    o = String.fromCharCode(n.which);
    if (!/^\d+$/.test(o)) {
      return;
    }
    if (f(i)) {
      return;
    }
    a = (i.val() + o).replace(/\D/g, "");
    r = t(a);
    if (r) {
      return a.length <= r.length[r.length.length - 1];
    } else {
      return a.length <= 16;
    }
  };
  w = function (t) {
    var n, i, r;
    n = e(t.currentTarget);
    i = String.fromCharCode(t.which);
    if (!/^\d+$/.test(i)) {
      return;
    }
    if (f(n)) {
      return;
    }
    r = n.val() + i;
    r = r.replace(/\D/g, "");
    if (r.length > 6) {
      return false;
    }
  };
  y = function (t) {
    var n, i, r;
    n = e(t.currentTarget);
    i = String.fromCharCode(t.which);
    if (!/^\d+$/.test(i)) {
      return;
    }
    if (f(n)) {
      return;
    }
    r = n.val() + i;
    return r.length <= 4;
  };
  C = function (t) {
    var n, r, o, a, s;
    n = e(t.currentTarget);
    s = n.val();
    a = e.payment.cardType(s) || "unknown";
    if (!n.hasClass(a)) {
      r = (function () {
        var e, t, n;
        n = [];
        for (e = 0, t = i.length; e < t; e++) {
          o = i[e];
          n.push(o.type);
        }
        return n;
      })();
      n.removeClass("unknown");
      n.removeClass(r.join(" "));
      n.addClass(a);
      n.toggleClass("identified", a !== "unknown");
      return n.trigger("payment.cardType", a);
    }
  };
  e.payment.fn.formatCardCVC = function () {
    this.on("keypress", _);
    this.on("keypress", y);
    this.on("paste", h);
    this.on("change", h);
    this.on("input", h);
    return this;
  };
  e.payment.fn.formatCardExpiry = function () {
    this.on("keypress", _);
    this.on("keypress", w);
    this.on("keypress", l);
    this.on("keypress", c);
    this.on("keypress", u);
    this.on("keydown", a);
    this.on("change", v);
    this.on("input", v);
    return this;
  };
  e.payment.fn.formatCardNumber = function () {
    this.on("keypress", _);
    this.on("keypress", b);
    this.on("keypress", s);
    this.on("keydown", o);
    this.on("keyup", C);
    this.on("paste", p);
    this.on("change", p);
    this.on("input", p);
    this.on("input", C);
    return this;
  };
  e.payment.fn.restrictNumeric = function () {
    this.on("keypress", _);
    this.on("paste", m);
    this.on("change", m);
    this.on("input", m);
    return this;
  };
  e.payment.fn.cardExpiryVal = function () {
    return e.payment.cardExpiryVal(e(this).val());
  };
  e.payment.cardExpiryVal = function (e) {
    var t, n, i, r;
    (r = e.split(/[\s\/]+/, 2)), (t = r[0]), (i = r[1]);
    if ((i != null ? i.length : void 0) === 2 && /^\d+$/.test(i)) {
      n = new Date().getFullYear();
      n = n.toString().slice(0, 2);
      i = n + i;
    }
    t = parseInt(t, 10);
    i = parseInt(i, 10);
    return { month: t, year: i };
  };
  e.payment.validateCardNumber = function (e) {
    var n, i;
    e = (e + "").replace(/\s+|-/g, "");
    if (!/^\d+$/.test(e)) {
      return false;
    }
    n = t(e);
    if (!n) {
      return false;
    }
    return (
      ((i = e.length), T.call(n.length, i) >= 0) && (n.luhn === false || d(e))
    );
  };
  e.payment.validateCardExpiry = function (t, n) {
    var i, r, o;
    if (typeof t === "object" && "month" in t) {
      (o = t), (t = o.month), (n = o.year);
    }
    if (!(t && n)) {
      return false;
    }
    t = e.trim(t);
    n = e.trim(n);
    if (!/^\d+$/.test(t)) {
      return false;
    }
    if (!/^\d+$/.test(n)) {
      return false;
    }
    if (!(1 <= t && t <= 12)) {
      return false;
    }
    if (n.length === 2) {
      if (n < 70) {
        n = "20" + n;
      } else {
        n = "19" + n;
      }
    }
    if (n.length !== 4) {
      return false;
    }
    r = new Date(n, t);
    i = new Date();
    r.setMonth(r.getMonth() - 1);
    r.setMonth(r.getMonth() + 1, 1);
    return r > i;
  };
  e.payment.validateCardCVC = function (t, i) {
    var r, o;
    t = e.trim(t);
    if (!/^\d+$/.test(t)) {
      return false;
    }
    r = n(i);
    if (r != null) {
      return (o = t.length), T.call(r.cvcLength, o) >= 0;
    } else {
      return t.length >= 3 && t.length <= 4;
    }
  };
  e.payment.cardType = function (e) {
    var n;
    if (!e) {
      return null;
    }
    return ((n = t(e)) != null ? n.type : void 0) || null;
  };
  e.payment.formatCardNumber = function (n) {
    var i, r, o, a;
    n = n.replace(/\D/g, "");
    i = t(n);
    if (!i) {
      return n;
    }
    o = i.length[i.length.length - 1];
    n = n.slice(0, o);
    if (i.format.global) {
      return (a = n.match(i.format)) != null ? a.join(" ") : void 0;
    } else {
      r = i.format.exec(n);
      if (r == null) {
        return;
      }
      r.shift();
      r = e.grep(r, function (e) {
        return e;
      });
      return r.join(" ");
    }
  };
  e.payment.formatExpiry = function (e) {
    var t, n, i, r;
    n = e.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/);
    if (!n) {
      return "";
    }
    t = n[1] || "";
    i = n[2] || "";
    r = n[3] || "";
    if (r.length > 0) {
      i = " / ";
    } else if (i === " /") {
      t = t.substring(0, 1);
      i = "";
    } else if (t.length === 2 || i.length > 0) {
      i = " / ";
    } else if (t.length === 1 && t !== "0" && t !== "1") {
      t = "0" + t;
      i = " / ";
    }
    return t + i + r;
  };
}).call(this);
/*!
 * OverlayScrollbars
 * https://github.com/KingSora/OverlayScrollbars
 *
 * Version: 1.13.0
 *
 * Copyright KingSora | Rene Haas.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 * Date: 02.08.2020
 */
!(function (e, t) {
  "function" == typeof define && define.amd
    ? define(function () {
        return t(e, e.document, undefined);
      })
    : "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = t(e, e.document, undefined))
    : t(e, e.document, undefined);
})("undefined" != typeof window ? window : this, function (e, t, n) {
  "use strict";
  var i,
    r,
    o,
    a,
    s = "object",
    l = "function",
    u = "array",
    c = "string",
    f = "boolean",
    d = "number",
    h = "undefined",
    p = "null",
    v = {
      c: "class",
      s: "style",
      i: "id",
      l: "length",
      p: "prototype",
      ti: "tabindex",
      oH: "offsetHeight",
      cH: "clientHeight",
      sH: "scrollHeight",
      oW: "offsetWidth",
      cW: "clientWidth",
      sW: "scrollWidth",
      hOP: "hasOwnProperty",
      bCR: "getBoundingClientRect",
    },
    m =
      ((i = {}),
      (r = {}),
      {
        e: (o = ["-webkit-", "-moz-", "-o-", "-ms-"]),
        u: (a = ["WebKit", "Moz", "O", "MS"]),
        v: function (e) {
          var i = r[e];
          if (r[v.hOP](e)) return i;
          for (
            var a, s, l, u = g(e), c = t.createElement("div")[v.s], f = 0;
            f < o.length;
            f++
          )
            for (
              l = o[f].replace(/-/g, ""),
                a = [e, o[f] + e, l + u, g(l) + u],
                s = 0;
              s < a[v.l];
              s++
            )
              if (c[a[s]] !== n) {
                i = a[s];
                break;
              }
          return (r[e] = i);
        },
        d: function (e, n, i) {
          var o = e + " " + n,
            a = r[o];
          if (r[v.hOP](o)) return a;
          for (
            var s,
              l = t.createElement("div")[v.s],
              u = n.split(" "),
              c = i || "",
              f = 0,
              d = -1;
            f < u[v.l];
            f++
          )
            for (; d < m.e[v.l]; d++)
              if (
                ((s = d < 0 ? u[f] : m.e[d] + u[f]),
                (l.cssText = e + ":" + s + c),
                l[v.l])
              ) {
                a = s;
                break;
              }
          return (r[o] = a);
        },
        m: function (t, n, r) {
          var o = 0,
            s = i[t];
          if (!i[v.hOP](t)) {
            for (s = e[t]; o < a[v.l]; o++)
              s = s || e[(n ? a[o] : a[o].toLowerCase()) + g(t)];
            i[t] = s;
          }
          return s || r;
        },
      });
  function g(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  var y = {
    wW: w(b, 0, !0),
    wH: w(b, 0),
    mO: w(m.m, 0, "MutationObserver", !0),
    rO: w(m.m, 0, "ResizeObserver", !0),
    rAF: w(m.m, 0, "requestAnimationFrame", !1, function (t) {
      return e.setTimeout(t, 1e3 / 60);
    }),
    cAF: w(m.m, 0, "cancelAnimationFrame", !1, function (t) {
      return e.clearTimeout(t);
    }),
    now: function () {
      return (Date.now && Date.now()) || new Date().getTime();
    },
    stpP: function (e) {
      e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
    },
    prvD: function (e) {
      e.preventDefault && e.cancelable
        ? e.preventDefault()
        : (e.returnValue = !1);
    },
    page: function (e) {
      var i =
          ((e = e.originalEvent || e).target || e.srcElement || t)
            .ownerDocument || t,
        r = i.documentElement,
        o = i.body;
      if (e.touches === n)
        return !e.pageX && e.clientX && null != e.clientX
          ? {
              x:
                e.clientX +
                ((r && r.scrollLeft) || (o && o.scrollLeft) || 0) -
                ((r && r.clientLeft) || (o && o.clientLeft) || 0),
              y:
                e.clientY +
                ((r && r.scrollTop) || (o && o.scrollTop) || 0) -
                ((r && r.clientTop) || (o && o.clientTop) || 0),
            }
          : { x: e.pageX, y: e.pageY };
      var a = e.touches[0];
      return { x: a.pageX, y: a.pageY };
    },
    mBtn: function (e) {
      var t = e.button;
      return e.which || t === n
        ? e.which
        : 1 & t
        ? 1
        : 2 & t
        ? 3
        : 4 & t
        ? 2
        : 0;
    },
    inA: function (e, t) {
      for (var n = 0; n < t[v.l]; n++)
        try {
          if (t[n] === e) return n;
        } catch (e) {}
      return -1;
    },
    isA: function (e) {
      var t = Array.isArray;
      return t ? t(e) : this.type(e) == u;
    },
    type: function (e) {
      return e === n || null === e
        ? e + ""
        : Object[v.p].toString
            .call(e)
            .replace(/^\[object (.+)\]$/, "$1")
            .toLowerCase();
    },
    bind: w,
  };
  function b(n) {
    return n
      ? e.innerWidth || t.documentElement[v.cW] || t.body[v.cW]
      : e.innerHeight || t.documentElement[v.cH] || t.body[v.cH];
  }
  function w(e, t) {
    if (typeof e != l) throw "Can't bind function!";
    var n = v.p,
      i = Array[n].slice.call(arguments, 2),
      r = function () {},
      o = function () {
        return e.apply(
          this instanceof r ? this : t,
          i.concat(Array[n].slice.call(arguments))
        );
      };
    return e[n] && (r[n] = e[n]), (o[n] = new r()), o;
  }
  var _,
    x,
    C,
    k,
    T,
    E,
    S,
    $,
    A = Math,
    O = e.jQuery,
    I =
      ((_ = {
        p: A.PI,
        c: A.cos,
        s: A.sin,
        w: A.pow,
        t: A.sqrt,
        n: A.asin,
        a: A.abs,
        o: 1.70158,
      }),
      {
        swing: function (e, t, n, i, r) {
          return 0.5 - _.c(e * _.p) / 2;
        },
        linear: function (e, t, n, i, r) {
          return e;
        },
        easeInQuad: function (e, t, n, i, r) {
          return i * (t /= r) * t + n;
        },
        easeOutQuad: function (e, t, n, i, r) {
          return -i * (t /= r) * (t - 2) + n;
        },
        easeInOutQuad: function (e, t, n, i, r) {
          return (t /= r / 2) < 1
            ? (i / 2) * t * t + n
            : (-i / 2) * (--t * (t - 2) - 1) + n;
        },
        easeInCubic: function (e, t, n, i, r) {
          return i * (t /= r) * t * t + n;
        },
        easeOutCubic: function (e, t, n, i, r) {
          return i * ((t = t / r - 1) * t * t + 1) + n;
        },
        easeInOutCubic: function (e, t, n, i, r) {
          return (t /= r / 2) < 1
            ? (i / 2) * t * t * t + n
            : (i / 2) * ((t -= 2) * t * t + 2) + n;
        },
        easeInQuart: function (e, t, n, i, r) {
          return i * (t /= r) * t * t * t + n;
        },
        easeOutQuart: function (e, t, n, i, r) {
          return -i * ((t = t / r - 1) * t * t * t - 1) + n;
        },
        easeInOutQuart: function (e, t, n, i, r) {
          return (t /= r / 2) < 1
            ? (i / 2) * t * t * t * t + n
            : (-i / 2) * ((t -= 2) * t * t * t - 2) + n;
        },
        easeInQuint: function (e, t, n, i, r) {
          return i * (t /= r) * t * t * t * t + n;
        },
        easeOutQuint: function (e, t, n, i, r) {
          return i * ((t = t / r - 1) * t * t * t * t + 1) + n;
        },
        easeInOutQuint: function (e, t, n, i, r) {
          return (t /= r / 2) < 1
            ? (i / 2) * t * t * t * t * t + n
            : (i / 2) * ((t -= 2) * t * t * t * t + 2) + n;
        },
        easeInSine: function (e, t, n, i, r) {
          return -i * _.c((t / r) * (_.p / 2)) + i + n;
        },
        easeOutSine: function (e, t, n, i, r) {
          return i * _.s((t / r) * (_.p / 2)) + n;
        },
        easeInOutSine: function (e, t, n, i, r) {
          return (-i / 2) * (_.c((_.p * t) / r) - 1) + n;
        },
        easeInExpo: function (e, t, n, i, r) {
          return 0 == t ? n : i * _.w(2, 10 * (t / r - 1)) + n;
        },
        easeOutExpo: function (e, t, n, i, r) {
          return t == r ? n + i : i * (1 - _.w(2, (-10 * t) / r)) + n;
        },
        easeInOutExpo: function (e, t, n, i, r) {
          return 0 == t
            ? n
            : t == r
            ? n + i
            : (t /= r / 2) < 1
            ? (i / 2) * _.w(2, 10 * (t - 1)) + n
            : (i / 2) * (2 - _.w(2, -10 * --t)) + n;
        },
        easeInCirc: function (e, t, n, i, r) {
          return -i * (_.t(1 - (t /= r) * t) - 1) + n;
        },
        easeOutCirc: function (e, t, n, i, r) {
          return i * _.t(1 - (t = t / r - 1) * t) + n;
        },
        easeInOutCirc: function (e, t, n, i, r) {
          return (t /= r / 2) < 1
            ? (-i / 2) * (_.t(1 - t * t) - 1) + n
            : (i / 2) * (_.t(1 - (t -= 2) * t) + 1) + n;
        },
        easeInElastic: function (e, t, n, i, r) {
          var o = _.o,
            a = 0,
            s = i;
          return 0 == t
            ? n
            : 1 == (t /= r)
            ? n + i
            : ((a = a || 0.3 * r),
              (o =
                s < _.a(i) ? ((s = i), a / 4) : (a / (2 * _.p)) * _.n(i / s)),
              -(s * _.w(2, 10 * --t) * _.s(((t * r - o) * (2 * _.p)) / a)) + n);
        },
        easeOutElastic: function (e, t, n, i, r) {
          var o = _.o,
            a = 0,
            s = i;
          return 0 == t
            ? n
            : 1 == (t /= r)
            ? n + i
            : ((a = a || 0.3 * r),
              (o =
                s < _.a(i) ? ((s = i), a / 4) : (a / (2 * _.p)) * _.n(i / s)),
              s * _.w(2, -10 * t) * _.s(((t * r - o) * (2 * _.p)) / a) + i + n);
        },
        easeInOutElastic: function (e, t, n, i, r) {
          var o = _.o,
            a = 0,
            s = i;
          return 0 == t
            ? n
            : 2 == (t /= r / 2)
            ? n + i
            : ((a = a || r * (0.3 * 1.5)),
              (o =
                s < _.a(i) ? ((s = i), a / 4) : (a / (2 * _.p)) * _.n(i / s)),
              t < 1
                ? s *
                    _.w(2, 10 * --t) *
                    _.s(((t * r - o) * (2 * _.p)) / a) *
                    -0.5 +
                  n
                : s *
                    _.w(2, -10 * --t) *
                    _.s(((t * r - o) * (2 * _.p)) / a) *
                    0.5 +
                  i +
                  n);
        },
        easeInBack: function (e, t, n, i, r, o) {
          return i * (t /= r) * t * (((o = o || _.o) + 1) * t - o) + n;
        },
        easeOutBack: function (e, t, n, i, r, o) {
          return (
            i * ((t = t / r - 1) * t * (((o = o || _.o) + 1) * t + o) + 1) + n
          );
        },
        easeInOutBack: function (e, t, n, i, r, o) {
          return (
            (o = o || _.o),
            (t /= r / 2) < 1
              ? (i / 2) * (t * t * ((1 + (o *= 1.525)) * t - o)) + n
              : (i / 2) * ((t -= 2) * t * ((1 + (o *= 1.525)) * t + o) + 2) + n
          );
        },
        easeInBounce: function (e, t, n, i, r) {
          return i - this.easeOutBounce(e, r - t, 0, i, r) + n;
        },
        easeOutBounce: function (e, t, n, i, r) {
          var o = 7.5625;
          return (t /= r) < 1 / 2.75
            ? i * (o * t * t) + n
            : t < 2 / 2.75
            ? i * (o * (t -= 1.5 / 2.75) * t + 0.75) + n
            : t < 2.5 / 2.75
            ? i * (o * (t -= 2.25 / 2.75) * t + 0.9375) + n
            : i * (o * (t -= 2.625 / 2.75) * t + 0.984375) + n;
        },
        easeInOutBounce: function (e, t, n, i, r) {
          return t < r / 2
            ? 0.5 * this.easeInBounce(e, 2 * t, 0, i, r) + n
            : 0.5 * this.easeOutBounce(e, 2 * t - r, 0, i, r) + 0.5 * i + n;
        },
      }),
    j =
      ((x = /[^\x20\t\r\n\f]+/g),
      (C = " "),
      (k = "scrollLeft"),
      (T = "scrollTop"),
      (E = []),
      (S = y.type),
      ($ = {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      }),
      (X[v.p] = {
        on: function (e, t) {
          var n,
            i = (e = (e || "").match(x) || [""])[v.l],
            r = 0;
          return this.each(function () {
            n = this;
            try {
              if (n.addEventListener)
                for (; r < i; r++) n.addEventListener(e[r], t);
              else if (n.detachEvent)
                for (; r < i; r++) n.attachEvent("on" + e[r], t);
            } catch (e) {}
          });
        },
        off: function (e, t) {
          var n,
            i = (e = (e || "").match(x) || [""])[v.l],
            r = 0;
          return this.each(function () {
            n = this;
            try {
              if (n.removeEventListener)
                for (; r < i; r++) n.removeEventListener(e[r], t);
              else if (n.detachEvent)
                for (; r < i; r++) n.detachEvent("on" + e[r], t);
            } catch (e) {}
          });
        },
        one: function (e, t) {
          return (
            (e = (e || "").match(x) || [""]),
            this.each(function () {
              var n = X(this);
              X.each(e, function (e, i) {
                var r = function (e) {
                  t.call(this, e), n.off(i, r);
                };
                n.on(i, r);
              });
            })
          );
        },
        trigger: function (e) {
          var n, i;
          return this.each(function () {
            (n = this),
              t.createEvent
                ? ((i = t.createEvent("HTMLEvents")).initEvent(e, !0, !1),
                  n.dispatchEvent(i))
                : n.fireEvent("on" + e);
          });
        },
        append: function (e) {
          return this.each(function () {
            U(this, "beforeend", e);
          });
        },
        prepend: function (e) {
          return this.each(function () {
            U(this, "afterbegin", e);
          });
        },
        before: function (e) {
          return this.each(function () {
            U(this, "beforebegin", e);
          });
        },
        after: function (e) {
          return this.each(function () {
            U(this, "afterend", e);
          });
        },
        remove: function () {
          return this.each(function () {
            var e = this.parentNode;
            null != e && e.removeChild(this);
          });
        },
        unwrap: function () {
          var e,
            t,
            n,
            i = [];
          for (
            this.each(function () {
              -1 === D((n = this.parentNode), i) && i.push(n);
            }),
              e = 0;
            e < i[v.l];
            e++
          ) {
            for (t = i[e], n = t.parentNode; t.firstChild; )
              n.insertBefore(t.firstChild, t);
            n.removeChild(t);
          }
          return this;
        },
        wrapAll: function (e) {
          for (
            var t,
              n = this,
              i = X(e)[0],
              r = i,
              o = n[0].parentNode,
              a = n[0].previousSibling;
            0 < r.childNodes[v.l];

          )
            r = r.childNodes[0];
          for (t = 0; n[v.l] - t; r.firstChild === n[0] && t++)
            r.appendChild(n[t]);
          var s = a ? a.nextSibling : o.firstChild;
          return o.insertBefore(i, s), this;
        },
        wrapInner: function (e) {
          return this.each(function () {
            var t = X(this),
              n = t.contents();
            n[v.l] ? n.wrapAll(e) : t.append(e);
          });
        },
        wrap: function (e) {
          return this.each(function () {
            X(this).wrapAll(e);
          });
        },
        css: function (t, i) {
          var r,
            o,
            a,
            s = e.getComputedStyle;
          return S(t) == c
            ? i === n
              ? ((r = this[0]),
                (a = s ? s(r, null) : r.currentStyle[t]),
                s ? (null != a ? a.getPropertyValue(t) : r[v.s][t]) : a)
              : this.each(function () {
                  B(this, t, i);
                })
            : this.each(function () {
                for (o in t) B(this, o, t[o]);
              });
        },
        hasClass: function (e) {
          for (var t, n, i = 0, r = C + e + C; (t = this[i++]); ) {
            if ((n = t.classList) && n.contains(e)) return !0;
            if (
              1 === t.nodeType &&
              -1 < (C + H(t.className + "") + C).indexOf(r)
            )
              return !0;
          }
          return !1;
        },
        addClass: function (e) {
          var t,
            i,
            r,
            o,
            a,
            s,
            l,
            u,
            c = 0,
            f = 0;
          if (e)
            for (t = e.match(x) || []; (i = this[c++]); )
              if (((u = i.classList), l === n && (l = u !== n), l))
                for (; (a = t[f++]); ) u.add(a);
              else if (
                ((o = i.className + ""), (r = 1 === i.nodeType && C + H(o) + C))
              ) {
                for (; (a = t[f++]); ) r.indexOf(C + a + C) < 0 && (r += a + C);
                o !== (s = H(r)) && (i.className = s);
              }
          return this;
        },
        removeClass: function (e) {
          var t,
            i,
            r,
            o,
            a,
            s,
            l,
            u,
            c = 0,
            f = 0;
          if (e)
            for (t = e.match(x) || []; (i = this[c++]); )
              if (((u = i.classList), l === n && (l = u !== n), l))
                for (; (a = t[f++]); ) u.remove(a);
              else if (
                ((o = i.className + ""), (r = 1 === i.nodeType && C + H(o) + C))
              ) {
                for (; (a = t[f++]); )
                  for (; -1 < r.indexOf(C + a + C); )
                    r = r.replace(C + a + C, C);
                o !== (s = H(r)) && (i.className = s);
              }
          return this;
        },
        hide: function () {
          return this.each(function () {
            this[v.s].display = "none";
          });
        },
        show: function () {
          return this.each(function () {
            this[v.s].display = "block";
          });
        },
        attr: function (e, t) {
          for (var i, r = 0; (i = this[r++]); ) {
            if (t === n) return i.getAttribute(e);
            i.setAttribute(e, t);
          }
          return this;
        },
        removeAttr: function (e) {
          return this.each(function () {
            this.removeAttribute(e);
          });
        },
        offset: function () {
          var n = this[0][v.bCR](),
            i = e.pageXOffset || t.documentElement[k],
            r = e.pageYOffset || t.documentElement[T];
          return { top: n.top + r, left: n.left + i };
        },
        position: function () {
          var e = this[0];
          return { top: e.offsetTop, left: e.offsetLeft };
        },
        scrollLeft: function (e) {
          for (var t, i = 0; (t = this[i++]); ) {
            if (e === n) return t[k];
            t[k] = e;
          }
          return this;
        },
        scrollTop: function (e) {
          for (var t, i = 0; (t = this[i++]); ) {
            if (e === n) return t[T];
            t[T] = e;
          }
          return this;
        },
        val: function (e) {
          var t = this[0];
          return e ? ((t.value = e), this) : t.value;
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (e) {
          return X(this[0 <= e ? e : this[v.l] + e]);
        },
        find: function (e) {
          var t,
            n = [];
          return (
            this.each(function () {
              var i = this.querySelectorAll(e);
              for (t = 0; t < i[v.l]; t++) n.push(i[t]);
            }),
            X(n)
          );
        },
        children: function (e) {
          var t,
            n,
            i,
            r = [];
          return (
            this.each(function () {
              for (n = this.children, i = 0; i < n[v.l]; i++)
                (t = n[i]),
                  (!e || (t.matches && t.matches(e)) || F(t, e)) && r.push(t);
            }),
            X(r)
          );
        },
        parent: function (e) {
          var t,
            n = [];
          return (
            this.each(function () {
              (t = this.parentNode), (e && !X(t).is(e)) || n.push(t);
            }),
            X(n)
          );
        },
        is: function (e) {
          var t, n;
          for (n = 0; n < this[v.l]; n++) {
            if (((t = this[n]), ":visible" === e)) return Q(t);
            if (":hidden" === e) return !Q(t);
            if ((t.matches && t.matches(e)) || F(t, e)) return !0;
          }
          return !1;
        },
        contents: function () {
          var e,
            t,
            n = [];
          return (
            this.each(function () {
              for (e = this.childNodes, t = 0; t < e[v.l]; t++) n.push(e[t]);
            }),
            X(n)
          );
        },
        each: function (e) {
          return R(this, e);
        },
        animate: function (e, t, n, i) {
          return this.each(function () {
            V(this, e, t, n, i);
          });
        },
        stop: function (e, t) {
          return this.each(function () {
            !(function e(t, n, i) {
              for (var r, o, a, s = 0; s < E[v.l]; s++)
                if ((r = E[s]).el === t) {
                  if (0 < r.q[v.l]) {
                    if (
                      (((o = r.q[0]).stop = !0),
                      y.cAF()(o.frame),
                      r.q.splice(0, 1),
                      i)
                    )
                      for (a in o.props) z(t, a, o.props[a]);
                    n ? (r.q = []) : W(r, !1);
                  }
                  break;
                }
            })(this, e, t);
          });
        },
      }),
      L(X, {
        extend: L,
        inArray: D,
        isEmptyObject: P,
        isPlainObject: q,
        each: R,
      }),
      X);
  function L() {
    var e,
      t,
      i,
      r,
      o,
      a,
      u = arguments[0] || {},
      c = 1,
      d = arguments[v.l],
      h = !1;
    for (
      S(u) == f && ((h = u), (u = arguments[1] || {}), (c = 2)),
        S(u) != s && !S(u) == l && (u = {}),
        d === c && ((u = X), --c);
      c < d;
      c++
    )
      if (null != (o = arguments[c]))
        for (r in o)
          (e = u[r]),
            u !== (i = o[r]) &&
              (h && i && (q(i) || (t = y.isA(i)))
                ? ((a = t
                    ? ((t = !1), e && y.isA(e) ? e : [])
                    : e && q(e)
                    ? e
                    : {}),
                  (u[r] = L(h, a, i)))
                : i !== n && (u[r] = i));
    return u;
  }
  function D(e, t, n) {
    for (var i = n || 0; i < t[v.l]; i++) if (t[i] === e) return i;
    return -1;
  }
  function N(e) {
    return S(e) == l;
  }
  function P(e) {
    for (var t in e) return !1;
    return !0;
  }
  function q(e) {
    if (!e || S(e) != s) return !1;
    var t,
      n = v.p,
      i = Object[n].hasOwnProperty,
      r = i.call(e, "constructor"),
      o =
        e.constructor &&
        e.constructor[n] &&
        i.call(e.constructor[n], "isPrototypeOf");
    if (e.constructor && !r && !o) return !1;
    for (t in e);
    return S(t) == h || i.call(e, t);
  }
  function R(e, t) {
    var n = 0;
    if (M(e)) for (; n < e[v.l] && !1 !== t.call(e[n], n, e[n]); n++);
    else for (n in e) if (!1 === t.call(e[n], n, e[n])) break;
    return e;
  }
  function M(e) {
    var t = !!e && [v.l] in e && e[v.l],
      n = S(e);
    return !N(n) && (n == u || 0 === t || (S(t) == d && 0 < t && t - 1 in e));
  }
  function H(e) {
    return (e.match(x) || []).join(C);
  }
  function F(e, n) {
    for (
      var i = (e.parentNode || t).querySelectorAll(n) || [], r = i[v.l];
      r--;

    )
      if (i[r] == e) return 1;
  }
  function U(e, t, n) {
    if (y.isA(n)) for (var i = 0; i < n[v.l]; i++) U(e, t, n[i]);
    else
      S(n) == c
        ? e.insertAdjacentHTML(t, n)
        : e.insertAdjacentElement(t, n.nodeType ? n : n[0]);
  }
  function B(e, t, i) {
    try {
      e[v.s][t] !== n &&
        (e[v.s][t] = (function e(t, n) {
          $[t.toLowerCase()] || S(n) != d || (n += "px");
          return n;
        })(t, i));
    } catch (e) {}
  }
  function W(e, t) {
    var n, i;
    !1 !== t && e.q.splice(0, 1),
      0 < e.q[v.l]
        ? ((i = e.q[0]), V(e.el, i.props, i.duration, i.easing, i.complete, !0))
        : -1 < (n = D(e, E)) && E.splice(n, 1);
  }
  function z(e, t, n) {
    t === k || t === T ? (e[t] = n) : B(e, t, n);
  }
  function V(e, t, i, r, o, a) {
    var s,
      l,
      u,
      c,
      f,
      d,
      h = q(i),
      p = {},
      m = {},
      g = 0;
    for (
      d = h
        ? ((r = i.easing),
          i.start,
          (u = i.progress),
          (c = i.step),
          (f = i.specialEasing),
          (o = i.complete),
          i.duration)
        : i,
        f = f || {},
        d = d || 400,
        r = r || "swing",
        a = a || !1;
      g < E[v.l];
      g++
    )
      if (E[g].el === e) {
        l = E[g];
        break;
      }
    for (s in (l || ((l = { el: e, q: [] }), E.push(l)), t))
      p[s] = s === k || s === T ? e[s] : X(e).css(s);
    for (s in p) p[s] !== t[s] && t[s] !== n && (m[s] = t[s]);
    if (P(m)) a && W(l);
    else {
      var b,
        w,
        _,
        x,
        C,
        S,
        $,
        O,
        j,
        L = a ? 0 : D(R, l.q),
        R = { props: m, duration: h ? i : d, easing: r, complete: o };
      if ((-1 === L && ((L = l.q[v.l]), l.q.push(R)), 0 === L))
        if (0 < d)
          ($ = y.now()),
            (O = function () {
              for (s in ((b = y.now()),
              (j = b - $),
              (w = R.stop || d <= j),
              (_ = 1 - (A.max(0, $ + d - b) / d || 0)),
              m))
                (x = parseFloat(p[s])),
                  (C = parseFloat(m[s])),
                  (S = (C - x) * I[f[s] || r](_, _ * d, 0, 1, d) + x),
                  z(e, s, S),
                  N(c) &&
                    c(S, {
                      elem: e,
                      prop: s,
                      start: x,
                      now: S,
                      end: C,
                      pos: _,
                      options: {
                        easing: r,
                        speacialEasing: f,
                        duration: d,
                        complete: o,
                        step: c,
                      },
                      startTime: $,
                    });
              N(u) && u({}, _, A.max(0, d - j)),
                w ? (W(l), N(o) && o()) : (R.frame = y.rAF()(O));
            }),
            (R.frame = y.rAF()(O));
        else {
          for (s in m) z(e, s, m[s]);
          W(l);
        }
    }
  }
  function Q(e) {
    return !!(e[v.oW] || e[v.oH] || e.getClientRects()[v.l]);
  }
  function X(n) {
    if (0 === arguments[v.l]) return this;
    var i,
      r,
      o = new X(),
      a = n,
      s = 0;
    if (S(n) == c)
      for (
        a = [],
          i =
            "<" === n.charAt(0)
              ? (((r = t.createElement("div")).innerHTML = n), r.children)
              : t.querySelectorAll(n);
        s < i[v.l];
        s++
      )
        a.push(i[s]);
    if (a) {
      for (
        S(a) == c || (M(a) && a !== e && a !== a.self) || (a = [a]), s = 0;
        s < a[v.l];
        s++
      )
        o[s] = a[s];
      o[v.l] = a[v.l];
    }
    return o;
  }
  var K,
    Y,
    G,
    J,
    Z,
    ee,
    te,
    ne,
    ie,
    re,
    oe,
    ae,
    se,
    le,
    ue,
    ce =
      ((K = []),
      (Y = "__overlayScrollbars__"),
      function (e, t) {
        var n = arguments[v.l];
        if (n < 1) return K;
        if (t) (e[Y] = t), K.push(e);
        else {
          var i = y.inA(e, K);
          if (-1 < i) {
            if (!(1 < n)) return K[i][Y];
            delete e[Y], K.splice(i, 1);
          }
        }
      }),
    fe =
      ((le = []),
      (ee = y.type),
      (ae = {
        className: ["os-theme-dark", [p, c]],
        resize: ["none", "n:none b:both h:horizontal v:vertical"],
        sizeAutoCapable: (ne = [!0, f]),
        clipAlways: ne,
        normalizeRTL: ne,
        paddingAbsolute: (ie = [!(te = [f, d, c, u, s, l, p]), f]),
        autoUpdate: [null, [p, f]],
        autoUpdateInterval: [33, d],
        updateOnLoad: [["img"], [c, u, p]],
        nativeScrollbarsOverlaid: { showNativeScrollbars: ie, initialize: ne },
        overflowBehavior: {
          x: [
            "scroll",
            (oe = "v-h:visible-hidden v-s:visible-scroll s:scroll h:hidden"),
          ],
          y: ["scroll", oe],
        },
        scrollbars: {
          visibility: ["auto", "v:visible h:hidden a:auto"],
          autoHide: ["never", "n:never s:scroll l:leave m:move"],
          autoHideDelay: [800, d],
          dragScrolling: ne,
          clickScrolling: ie,
          touchSupport: ne,
          snapHandle: ie,
        },
        textarea: {
          dynWidth: ie,
          dynHeight: ie,
          inheritedAttrs: [
            ["style", "class"],
            [c, u, p],
          ],
        },
        callbacks: {
          onInitialized: (re = [null, [p, l]]),
          onInitializationWithdrawn: re,
          onDestroyed: re,
          onScrollStart: re,
          onScroll: re,
          onScrollStop: re,
          onOverflowChanged: re,
          onOverflowAmountChanged: re,
          onDirectionChanged: re,
          onContentSizeChanged: re,
          onHostSizeChanged: re,
          onUpdated: re,
        },
      }),
      (ue = {
        g: (se = function (e) {
          var t = function (n) {
            var i, r, o;
            for (i in n)
              n[v.hOP](i) &&
                ((r = n[i]),
                (o = ee(r)) == u
                  ? (n[i] = r[e ? 1 : 0])
                  : o == s && (n[i] = t(r)));
            return n;
          };
          return t(j.extend(!0, {}, ae));
        })(),
        _: se(!0),
        O: function (t, i, r, o) {
          var a = {},
            l = {},
            u = j.extend(!0, {}, t),
            f = j.inArray,
            d = j.isEmptyObject,
            h = function (e, t, i, o, a, l) {
              for (var u in t)
                if (t[v.hOP](u) && e[v.hOP](u)) {
                  var p,
                    m,
                    g,
                    b,
                    w,
                    _,
                    x,
                    C,
                    k = !1,
                    T = !1,
                    E = t[u],
                    S = ee(E),
                    $ = S == s,
                    A = y.isA(E) ? E : [E],
                    O = i[u],
                    I = e[u],
                    L = ee(I),
                    D = l ? l + "." : "",
                    N = 'The option "' + D + u + "\" wasn't set, because",
                    P = [],
                    q = [];
                  if (((O = O === n ? {} : O), $ && L == s))
                    (o[u] = {}),
                      (a[u] = {}),
                      h(I, E, O, o[u], a[u], D + u),
                      j.each([e, o, a], function (e, t) {
                        d(t[u]) && delete t[u];
                      });
                  else if (!$) {
                    for (_ = 0; _ < A[v.l]; _++)
                      if (
                        ((w = A[_]), (g = (S = ee(w)) == c && -1 === f(w, te)))
                      )
                        for (
                          P.push(c), p = w.split(" "), q = q.concat(p), x = 0;
                          x < p[v.l];
                          x++
                        ) {
                          for (
                            b = (m = p[x].split(":"))[0], C = 0;
                            C < m[v.l];
                            C++
                          )
                            if (I === m[C]) {
                              k = !0;
                              break;
                            }
                          if (k) break;
                        }
                      else if ((P.push(w), L === w)) {
                        k = !0;
                        break;
                      }
                    k
                      ? ((T = I !== O) && (o[u] = I),
                        (g ? f(O, m) < 0 : T) && (a[u] = g ? b : I))
                      : r &&
                        console.warn(
                          N +
                            " it doesn't accept the type [ " +
                            L.toUpperCase() +
                            ' ] with the value of "' +
                            I +
                            '".\r\nAccepted types are: [ ' +
                            P.join(", ").toUpperCase() +
                            " ]." +
                            (0 < q[length]
                              ? "\r\nValid strings are: [ " +
                                q.join(", ").split(":").join(", ") +
                                " ]."
                              : "")
                        ),
                      delete e[u];
                  }
                }
            };
          return (
            h(u, i, o || {}, a, l),
            !d(u) &&
              r &&
              console.warn(
                "The following options are discarded due to invalidity:\r\n" +
                  e.JSON.stringify(u, null, 2)
              ),
            { S: a, z: l }
          );
        },
      }),
      ((G = e.OverlayScrollbars =
        function (e, t, i) {
          if (0 === arguments[v.l]) return this;
          var r,
            o,
            a = [],
            s = j.isPlainObject(t);
          return e
            ? ((e = e[v.l] != n ? e : [e[0] || e]),
              de(),
              0 < e[v.l] &&
                (s
                  ? j.each(e, function (e, o) {
                      (r = o) !== n && a.push(ve(r, t, i, J, Z));
                    })
                  : j.each(e, function (e, i) {
                      (r = ce(i)),
                        (("!" === t && G.valid(r)) ||
                          (y.type(t) == l && t(i, r)) ||
                          t === n) &&
                          a.push(r);
                    }),
                (o = 1 === a[v.l] ? a[0] : a)),
              o)
            : s || !t
            ? o
            : a;
        }).globals = function () {
        de();
        var e = j.extend(!0, {}, J);
        return delete e.msie, e;
      }),
      (G.defaultOptions = function (e) {
        de();
        var t = J.defaultOptions;
        if (e === n) return j.extend(!0, {}, t);
        J.defaultOptions = j.extend(!0, {}, t, ue.O(e, ue._, !0, t).S);
      }),
      (G.valid = function (e) {
        return e instanceof G && !e.getState().destroyed;
      }),
      (G.extension = function (e, t, n) {
        var i = y.type(e) == c,
          r = arguments[v.l],
          o = 0;
        if (r < 1 || !i) return j.extend(!0, { length: le[v.l] }, le);
        if (i)
          if (y.type(t) == l)
            le.push({ name: e, extensionFactory: t, defaultOptions: n });
          else
            for (; o < le[v.l]; o++)
              if (le[o].name === e) {
                if (!(1 < r)) return j.extend(!0, {}, le[o]);
                le.splice(o, 1);
              }
      }),
      G);
  function de() {
    (J = J || new he(ue.g)), (Z = Z || new pe(J));
  }
  function he(t) {
    var n = this,
      i = "overflow",
      r = j("body"),
      o = j('<div id="os-dummy-scrollbar-size"><div></div></div>'),
      a = o[0],
      s = j(o.children("div").eq(0));
    r.append(o), o.hide().show();
    var l,
      u,
      c,
      f,
      d,
      h,
      p,
      g,
      b,
      w = C(a),
      _ = { x: 0 === w.x, y: 0 === w.y },
      x =
        ((u = e.navigator.userAgent),
        (f = "substring"),
        (d = u[(c = "indexOf")]("MSIE ")),
        (h = u[c]("Trident/")),
        (p = u[c]("Edge/")),
        (g = u[c]("rv:")),
        (b = parseInt),
        0 < d
          ? (l = b(u[f](d + 5, u[c](".", d)), 10))
          : 0 < h
          ? (l = b(u[f](g + 3, u[c](".", g)), 10))
          : 0 < p && (l = b(u[f](p + 5, u[c](".", p)), 10)),
        l);
    function C(e) {
      return { x: e[v.oH] - e[v.cH], y: e[v.oW] - e[v.cW] };
    }
    j.extend(n, {
      defaultOptions: t,
      msie: x,
      autoUpdateLoop: !1,
      autoUpdateRecommended: !y.mO(),
      nativeScrollbarSize: w,
      nativeScrollbarIsOverlaid: _,
      nativeScrollbarStyling: (function () {
        var t = !1;
        o.addClass("os-viewport-native-scrollbars-invisible");
        try {
          t =
            ("none" === o.css("scrollbar-width") && (9 < x || !x)) ||
            "none" ===
              e
                .getComputedStyle(a, "::-webkit-scrollbar")
                .getPropertyValue("display");
        } catch (e) {}
        return t;
      })(),
      overlayScrollbarDummySize: { x: 30, y: 30 },
      cssCalc: m.d("width", "calc", "(1px)") || null,
      restrictedMeasuring: (function () {
        o.css(i, "hidden");
        var e = a[v.sW],
          t = a[v.sH];
        o.css(i, "visible");
        var n = a[v.sW],
          r = a[v.sH];
        return e - n != 0 || t - r != 0;
      })(),
      rtlScrollBehavior: (function () {
        o.css({
          "overflow-y": "hidden",
          "overflow-x": "scroll",
          direction: "rtl",
        }).scrollLeft(0);
        var e = o.offset(),
          t = s.offset();
        o.scrollLeft(-999);
        var n = s.offset();
        return { i: e.left === t.left, n: t.left !== n.left };
      })(),
      supportTransform: !!m.v("transform"),
      supportTransition: !!m.v("transition"),
      supportPassiveEvents: (function () {
        var t = !1;
        try {
          e.addEventListener(
            "test",
            null,
            Object.defineProperty({}, "passive", {
              get: function () {
                t = !0;
              },
            })
          );
        } catch (e) {}
        return t;
      })(),
      supportResizeObserver: !!y.rO(),
      supportMutationObserver: !!y.mO(),
    }),
      o.removeAttr(v.s).remove(),
      (function () {
        if (!_.x || !_.y) {
          var t = A.abs,
            i = y.wW(),
            a = y.wH(),
            s = l();
          j(e).on("resize", function () {
            if (0 < ce().length) {
              var e = y.wW(),
                u = y.wH(),
                c = e - i,
                f = u - a;
              if (0 == c && 0 == f) return;
              var d,
                h = A.round(e / (i / 100)),
                p = A.round(u / (a / 100)),
                v = t(c),
                m = t(f),
                g = t(h),
                b = t(p),
                w = l(),
                _ = 2 < v && 2 < m,
                x = !(function e(n, i) {
                  var r = t(n),
                    o = t(i);
                  return r !== o && r + 1 !== o && r - 1 !== o;
                })(g, b),
                k = _ && x && w !== s && 0 < s,
                T = n.nativeScrollbarSize;
              k &&
                (r.append(o),
                (d = n.nativeScrollbarSize = C(o[0])),
                o.remove(),
                (T.x === d.x && T.y === d.y) ||
                  j.each(ce(), function () {
                    ce(this) && ce(this).update("zoom");
                  })),
                (i = e),
                (a = u),
                (s = w);
            }
          });
        }
        function l() {
          var t = e.screen.deviceXDPI || 0,
            n = e.screen.logicalXDPI || 1;
          return e.devicePixelRatio || t / n;
        }
      })();
  }
  function pe(e) {
    var t,
      i = j.inArray,
      r = y.now,
      o = "autoUpdate",
      a = v.l,
      s = [],
      l = [],
      u = !1,
      c = 33,
      f = r(),
      d = function () {
        if (0 < s[a] && u) {
          t = y.rAF()(function () {
            d();
          });
          var e,
            i,
            h,
            p,
            v,
            m,
            g = r(),
            b = g - f;
          if (c < b) {
            (f = g - (b % c)), (e = 33);
            for (var w = 0; w < s[a]; w++)
              (i = s[w]) !== n &&
                ((p = (h = i.options())[o]),
                (v = A.max(1, h.autoUpdateInterval)),
                (m = r()),
                (!0 === p || null === p) &&
                  m - l[w] > v &&
                  (i.update("auto"), (l[w] = new Date((m += v)))),
                (e = A.max(1, A.min(e, v))));
            c = e;
          }
        } else c = 33;
      };
    (this.add = function (t) {
      -1 === i(t, s) &&
        (s.push(t),
        l.push(r()),
        0 < s[a] && !u && ((u = !0), (e.autoUpdateLoop = u), d()));
    }),
      (this.remove = function (r) {
        var o = i(r, s);
        -1 < o &&
          (l.splice(o, 1),
          s.splice(o, 1),
          0 === s[a] &&
            u &&
            ((u = !1),
            (e.autoUpdateLoop = u),
            t !== n && (y.cAF()(t), (t = -1))));
      });
  }
  function ve(i, r, o, a, h) {
    var p = y.type,
      g = j.inArray,
      b = j.each,
      w = new G(),
      _ = j[v.p];
    if (pr(i)) {
      if (ce(i)) {
        var x = ce(i);
        return x.options(r), x;
      }
      var C,
        k,
        T,
        E,
        S,
        $,
        I,
        L,
        D,
        N,
        P,
        q,
        R,
        M,
        H,
        F,
        U,
        B,
        W,
        z,
        V,
        Q,
        X,
        K,
        Y,
        J,
        Z,
        ee,
        te,
        ne,
        ie,
        re,
        oe,
        ae,
        se,
        le,
        fe,
        de,
        he,
        pe,
        ve,
        me,
        ge,
        ye,
        be,
        we,
        _e,
        xe,
        Ce,
        ke,
        Te,
        Ee,
        Se,
        $e,
        Ae,
        Oe,
        Ie,
        je,
        Le,
        De,
        Ne,
        Pe,
        qe,
        Re,
        Me,
        He,
        Fe,
        Ue,
        Be,
        We,
        ze,
        Ve,
        Qe,
        Xe,
        Ke,
        Ye,
        Ge,
        Je,
        Ze,
        et,
        tt,
        nt,
        it,
        rt,
        ot,
        at,
        st,
        lt,
        ut,
        ct,
        ft,
        dt,
        ht,
        pt,
        vt,
        mt,
        gt,
        yt,
        bt,
        wt,
        _t,
        xt,
        Ct,
        kt,
        Tt,
        Et,
        St,
        $t,
        At,
        Ot,
        It,
        jt,
        Lt,
        Dt,
        Nt,
        Pt,
        qt,
        Rt,
        Mt,
        Ht,
        Ft = {},
        Ut = {},
        Bt = {},
        Wt = {},
        zt = {},
        Vt = "-hidden",
        Qt = "margin-",
        Xt = "padding-",
        Kt = "border-",
        Yt = "top",
        Gt = "right",
        Jt = "bottom",
        Zt = "left",
        en = "min-",
        tn = "max-",
        nn = "width",
        rn = "height",
        on = "float",
        an = "",
        sn = "auto",
        ln = "sync",
        un = "scroll",
        cn = "100%",
        fn = "x",
        dn = "y",
        hn = ".",
        pn = " ",
        vn = "scrollbar",
        mn = "-horizontal",
        gn = "-vertical",
        yn = un + "Left",
        bn = un + "Top",
        wn = "mousedown touchstart",
        _n = "mouseup touchend touchcancel",
        xn = "mousemove touchmove",
        Cn = "mouseenter",
        kn = "mouseleave",
        Tn = "keydown",
        En = "keyup",
        Sn = "selectstart",
        $n = "transitionend webkitTransitionEnd oTransitionEnd",
        An = "__overlayScrollbarsRO__",
        On = "os-",
        In = "os-html",
        jn = "os-host",
        Ln = jn + "-foreign",
        Dn = jn + "-textarea",
        Nn = jn + "-" + vn + mn + Vt,
        Pn = jn + "-" + vn + gn + Vt,
        qn = jn + "-transition",
        Rn = jn + "-rtl",
        Mn = jn + "-resize-disabled",
        Hn = jn + "-scrolling",
        Fn = jn + "-overflow",
        Un = (Fn = jn + "-overflow") + "-x",
        Bn = Fn + "-y",
        Wn = "os-textarea",
        zn = Wn + "-cover",
        Vn = "os-padding",
        Qn = "os-viewport",
        Xn = Qn + "-native-scrollbars-invisible",
        Kn = Qn + "-native-scrollbars-overlaid",
        Yn = "os-content",
        Gn = "os-content-arrange",
        Jn = "os-content-glue",
        Zn = "os-size-auto-observer",
        ei = "os-resize-observer",
        ti = "os-resize-observer-item",
        ni = ti + "-final",
        ii = "os-text-inherit",
        ri = On + vn,
        oi = ri + "-track",
        ai = oi + "-off",
        si = ri + "-handle",
        li = si + "-off",
        ui = ri + "-unusable",
        ci = ri + "-" + sn + Vt,
        fi = ri + "-corner",
        di = fi + "-resize",
        hi = di + "-both",
        pi = di + mn,
        vi = di + gn,
        mi = ri + mn,
        gi = ri + gn,
        yi = "os-dragging",
        bi = "os-theme-none",
        wi = [Xn, Kn, ai, li, ui, ci, di, hi, pi, vi, yi].join(pn),
        _i = [],
        xi = [v.ti],
        Ci = {},
        ki = {},
        Ti = 42,
        Ei = "load",
        Si = [],
        $i = {},
        Ai = ["wrap", "cols", "rows"],
        Oi = [v.i, v.c, v.s, "open"].concat(xi),
        Ii = [];
      return (
        (w.sleep = function () {
          te = !0;
        }),
        (w.update = function (e) {
          var t, i, r, o, a;
          if (!H)
            return (
              p(e) == c
                ? e === sn
                  ? ((t = (function e() {
                      if (!te && !Et) {
                        var t,
                          i,
                          r,
                          o = [],
                          a = [
                            { C: pe, k: Oi.concat(":visible") },
                            { C: F ? he : n, k: Ai },
                          ];
                        return (
                          b(a, function (e, n) {
                            (t = n.C) &&
                              b(n.k, function (e, n) {
                                (i = ":" === n.charAt(0) ? t.is(n) : t.attr(n)),
                                  (r = $i[n]),
                                  xr(i, r) && o.push(n),
                                  ($i[n] = i);
                              });
                          }),
                          Qi(o),
                          0 < o[v.l]
                        );
                      }
                    })()),
                    (i = (function e() {
                      if (te) return !1;
                      var t,
                        n,
                        i,
                        r,
                        o = gr(),
                        a = F && We && !mt ? he.val().length : 0,
                        s = !Et && We && !F,
                        l = {};
                      return (
                        s &&
                          ((t = be.css(on)),
                          (l[on] = ee ? Gt : Zt),
                          (l[nn] = sn),
                          be.css(l)),
                        (r = { w: o[v.sW] + a, h: o[v.sH] + a }),
                        s && ((l[on] = t), (l[nn] = cn), be.css(l)),
                        (n = zi()),
                        (i = xr(r, at)),
                        (at = r),
                        i || n
                      );
                    })()),
                    (r = t || i) && Ki({ I: i, T: M ? n : re }))
                  : e === ln
                  ? Et
                    ? ((o = kt(xt.takeRecords())), (a = Tt(Ct.takeRecords())))
                    : (o = w.update(sn))
                  : "zoom" === e && Ki({ A: !0, I: !0 })
                : ((e = te || e),
                  (te = !1),
                  (w.update(ln) && !e) || Ki({ H: e })),
              Yi(),
              r || o || a
            );
        }),
        (w.options = function (e, t) {
          var n,
            i = {};
          if (j.isEmptyObject(e) || !j.isPlainObject(e)) {
            if (p(e) != c) return ie;
            if (!(1 < arguments.length)) return wr(ie, e);
            !(function e(t, n, i) {
              for (
                var r = n.split(hn), o = r.length, a = 0, s = {}, l = s;
                a < o;
                a++
              )
                s = s[r[a]] = a + 1 < o ? {} : i;
              j.extend(t, l, !0);
            })(i, e, t),
              (n = Gi(i));
          } else n = Gi(e);
          j.isEmptyObject(n) || Ki({ T: n });
        }),
        (w.destroy = function () {
          if (!H) {
            for (var e in (h.remove(w), qi(), Di(me), Di(ve), Ci))
              w.removeExt(e);
            for (; 0 < Ii[v.l]; ) Ii.pop()();
            Wi(!0),
              _e && Sr(_e),
              we && Sr(we),
              V && Sr(ve),
              er(!0),
              lr(!0),
              Ji(!0);
            for (var t = 0; t < Si[v.l]; t++) j(Si[t]).off(Ei, Bi);
            (Si = n), (te = H = !0), ce(i, 0), ur("onDestroyed");
          }
        }),
        (w.scroll = function (e, t, i, r) {
          if (0 === arguments.length || e === n) {
            var o = ht && ee && T.i,
              a = ht && ee && T.n,
              h = Ut.L,
              m = Ut.R,
              b = Ut.N;
            return (
              (m = o ? 1 - m : m),
              (h = o ? b - h : h),
              (b *= a ? -1 : 1),
              {
                position: { x: (h *= a ? -1 : 1), y: Bt.L },
                ratio: { x: m, y: Bt.R },
                max: { x: b, y: Bt.N },
                handleOffset: { x: Ut.W, y: Bt.W },
                handleLength: { x: Ut.M, y: Bt.M },
                handleLengthRatio: { x: Ut.D, y: Bt.D },
                trackLength: { x: Ut.F, y: Bt.F },
                snappedHandleOffset: { x: Ut.P, y: Bt.P },
                isRTL: ee,
                isRTLNormalized: ht,
              }
            );
          }
          w.update(ln);
          var _,
            x,
            C,
            k,
            E,
            S,
            $,
            I,
            L,
            D = ht,
            P = [fn, Zt, "l"],
            q = [dn, Yt, "t"],
            R = ["+=", "-=", "*=", "/="],
            M = p(t) == s,
            H = M ? t.complete : r,
            F = {},
            U = {},
            B = "begin",
            W = "nearest",
            z = "never",
            V = "ifneeded",
            Q = v.l,
            X = [fn, dn, "xy", "yx"],
            K = [B, "end", "center", W],
            Y = ["always", z, V],
            G = e[v.hOP]("el"),
            J = G ? e.el : e,
            Z = !!(J instanceof j || O) && J instanceof O,
            te = !Z && pr(J),
            ne = function () {
              x && or(!0), C && or(!1);
            },
            ie =
              p(H) != l
                ? n
                : function () {
                    ne(), H();
                  };
          function re(e, t) {
            for (_ = 0; _ < t[Q]; _++) if (e === t[_]) return 1;
          }
          function oe(e, t) {
            var n = e ? P : q;
            if (((t = p(t) == c || p(t) == d ? [t, t] : t), y.isA(t)))
              return e ? t[0] : t[1];
            if (p(t) == s)
              for (_ = 0; _ < n[Q]; _++) if (n[_] in t) return t[n[_]];
          }
          function ae(e, t) {
            var i,
              r,
              o,
              a,
              s = p(t) == c,
              l = e ? Ut : Bt,
              u = l.L,
              f = l.N,
              h = ee && e,
              v = h && T.n && !D,
              m = "replace",
              y = eval;
            if (
              (r = s
                ? (2 < t[Q] && ((a = t.substr(0, 2)), -1 < g(a, R) && (i = a)),
                  (t = (t = i ? t.substr(2) : t)
                    [m](/min/g, 0)
                    [m](/</g, 0)
                    [m](/max/g, (v ? "-" : an) + cn)
                    [m](/>/g, (v ? "-" : an) + cn)
                    [m](/px/g, an)
                    [m](/%/g, " * " + (f * (h && T.n ? -1 : 1)) / 100)
                    [m](/vw/g, " * " + Wt.w)
                    [m](/vh/g, " * " + Wt.h)),
                  vr(isNaN(t) ? vr(y(t), !0).toFixed() : t))
                : t) !== n &&
              !isNaN(r) &&
              p(r) == d
            ) {
              var b = D && h,
                w = u * (b && T.n ? -1 : 1),
                _ = b && T.i,
                x = b && T.n;
              switch (((w = _ ? f - w : w), i)) {
                case "+=":
                  o = w + r;
                  break;
                case "-=":
                  o = w - r;
                  break;
                case "*=":
                  o = w * r;
                  break;
                case "/=":
                  o = w / r;
                  break;
                default:
                  o = r;
              }
              (o = _ ? f - o : o),
                (o *= x ? -1 : 1),
                (o = h && T.n ? A.min(0, A.max(f, o)) : A.max(0, A.min(f, o)));
            }
            return o === u ? n : o;
          }
          function se(e, t, n, i) {
            var r,
              o,
              a = [n, n],
              l = p(e);
            if (l == t) e = [e, e];
            else if (l == u) {
              if (2 < (r = e[Q]) || r < 1) e = a;
              else
                for (1 === r && (e[1] = n), _ = 0; _ < r; _++)
                  if (((o = e[_]), p(o) != t || !re(o, i))) {
                    e = a;
                    break;
                  }
            } else e = l == s ? [e[fn] || n, e[dn] || n] : a;
            return { x: e[0], y: e[1] };
          }
          function le(e) {
            var t,
              n,
              i = [],
              r = [Yt, Gt, Jt, Zt];
            for (_ = 0; _ < e[Q] && _ !== r[Q]; _++)
              (t = e[_]),
                (n = p(t)) == f
                  ? i.push(t ? vr(L.css(Qt + r[_])) : 0)
                  : i.push(n == d ? t : 0);
            return i;
          }
          if (Z || te) {
            var ue,
              ce = G ? e.margin : 0,
              fe = G ? e.axis : 0,
              de = G ? e.scroll : 0,
              he = G ? e.block : 0,
              pe = [0, 0, 0, 0],
              ve = p(ce);
            if (0 < (L = Z ? J : j(J))[Q]) {
              (ce =
                ve == d || ve == f
                  ? le([ce, ce, ce, ce])
                  : ve == u
                  ? 2 === (ue = ce[Q])
                    ? le([ce[0], ce[1], ce[0], ce[1]])
                    : 4 <= ue
                    ? le(ce)
                    : pe
                  : ve == s
                  ? le([ce[Yt], ce[Gt], ce[Jt], ce[Zt]])
                  : pe),
                (E = re(fe, X) ? fe : "xy"),
                (S = se(de, c, "always", Y)),
                ($ = se(he, c, B, K)),
                (I = ce);
              var me = Ut.L,
                be = Bt.L,
                we = ge.offset(),
                _e = L.offset(),
                xe = { x: S.x == z || E == dn, y: S.y == z || E == fn };
              (_e[Yt] -= I[0]), (_e[Zt] -= I[3]);
              var Ce = {
                x: A.round(_e[Zt] - we[Zt] + me),
                y: A.round(_e[Yt] - we[Yt] + be),
              };
              if (
                (ee &&
                  (T.n || T.i || (Ce.x = A.round(we[Zt] - _e[Zt] + me)),
                  T.n && D && (Ce.x *= -1),
                  T.i && D && (Ce.x = A.round(we[Zt] - _e[Zt] + (Ut.N - me)))),
                $.x != B || $.y != B || S.x == V || S.y == V || ee)
              ) {
                var ke = L[0],
                  Te = N ? ke[v.bCR]() : { width: ke[v.oW], height: ke[v.oH] },
                  Ee = { w: Te[nn] + I[3] + I[1], h: Te[rn] + I[0] + I[2] },
                  Se = function (e) {
                    var t = sr(e),
                      n = t.j,
                      i = t.B,
                      r = t.Q,
                      o = $[r] == (e && ee ? B : "end"),
                      a = "center" == $[r],
                      s = $[r] == W,
                      l = S[r] == z,
                      u = S[r] == V,
                      c = Wt[n],
                      f = we[i],
                      d = Ee[n],
                      h = _e[i],
                      p = a ? 2 : 1,
                      v = h + d / 2,
                      m = f + c / 2,
                      g = d <= c && f <= h && h + d <= f + c;
                    l
                      ? (xe[r] = !0)
                      : xe[r] ||
                        ((s || u) &&
                          ((xe[r] = u && g), (o = d < c ? m < v : v < m)),
                        (Ce[r] -=
                          o || a
                            ? (c / p - d / p) * (e && ee && D ? -1 : 1)
                            : 0));
                  };
                Se(!0), Se(!1);
              }
              xe.y && delete Ce.y, xe.x && delete Ce.x, (e = Ce);
            }
          }
          (F[yn] = ae(!0, oe(!0, e))),
            (F[bn] = ae(!1, oe(!1, e))),
            (x = F[yn] !== n),
            (C = F[bn] !== n),
            (x || C) && (0 < t || M)
              ? M
                ? ((t.complete = ie), ye.animate(F, t))
                : ((k = { duration: t, complete: ie }),
                  y.isA(i) || j.isPlainObject(i)
                    ? ((U[yn] = i[0] || i.x),
                      (U[bn] = i[1] || i.y),
                      (k.specialEasing = U))
                    : (k.easing = i),
                  ye.animate(F, k))
              : (x && ye[yn](F[yn]), C && ye[bn](F[bn]), ne());
        }),
        (w.scrollStop = function (e, t, n) {
          return ye.stop(e, t, n), w;
        }),
        (w.getElements = function (e) {
          var t = {
            target: je,
            host: Le,
            padding: Pe,
            viewport: qe,
            content: Re,
            scrollbarHorizontal: {
              scrollbar: ke[0],
              track: Te[0],
              handle: Ee[0],
            },
            scrollbarVertical: {
              scrollbar: Se[0],
              track: $e[0],
              handle: Ae[0],
            },
            scrollbarCorner: Ce[0],
          };
          return p(e) == c ? wr(t, e) : t;
        }),
        (w.getState = function (e) {
          function t(e) {
            if (!j.isPlainObject(e)) return e;
            var t = Cr({}, e),
              n = function (e, n) {
                t[v.hOP](e) && ((t[n] = t[e]), delete t[e]);
              };
            return n("w", nn), n("h", rn), delete t.c, t;
          }
          var n = {
            destroyed: !!t(H),
            sleeping: !!t(te),
            autoUpdate: t(!Et),
            widthAuto: t(We),
            heightAuto: t(ze),
            padding: t(Qe),
            overflowAmount: t(nt),
            hideOverflow: t(Be),
            hasOverflow: t(Ue),
            contentScrollSize: t(He),
            viewportSize: t(Wt),
            hostSize: t(Me),
            documentMixed: t(B),
          };
          return p(e) == c ? wr(n, e) : n;
        }),
        (w.ext = function (e) {
          var t,
            n = "added removed on contract".split(" "),
            i = 0;
          if (p(e) == c) {
            if (Ci[v.hOP](e))
              for (t = Cr({}, Ci[e]); i < n.length; i++) delete t[n[i]];
          } else for (i in ((t = {}), Ci)) t[i] = Cr({}, w.ext(i));
          return t;
        }),
        (w.addExt = function (t, n) {
          var i,
            r,
            o,
            a,
            s = G.extension(t),
            u = !0;
          if (s) {
            if (Ci[v.hOP](t)) return w.ext(t);
            if (
              (i = s.extensionFactory.call(
                w,
                Cr({}, s.defaultOptions),
                j,
                y
              )) &&
              ((o = i.contract),
              p(o) == l && ((a = o(e)), (u = p(a) == f ? a : u)),
              u)
            )
              return (r = (Ci[t] = i).added), p(r) == l && r(n), w.ext(t);
          } else
            console.warn(
              'A extension with the name "' + t + "\" isn't registered."
            );
        }),
        (w.removeExt = function (e) {
          var t,
            n = Ci[e];
          return !!n && (delete Ci[e], (t = n.removed), p(t) == l && t(), !0);
        }),
        G.valid(
          (function e(i, r, o) {
            var s, l;
            return (
              (ne = a.defaultOptions),
              ($ = a.nativeScrollbarStyling),
              (L = Cr({}, a.nativeScrollbarSize)),
              (C = Cr({}, a.nativeScrollbarIsOverlaid)),
              (k = Cr({}, a.overlayScrollbarDummySize)),
              (T = Cr({}, a.rtlScrollBehavior)),
              Gi(Cr({}, ne, r)),
              (I = a.cssCalc),
              (S = a.msie),
              (E = a.autoUpdateRecommended),
              (D = a.supportTransition),
              (N = a.supportTransform),
              (P = a.supportPassiveEvents),
              (q = a.supportResizeObserver),
              (R = a.supportMutationObserver),
              a.restrictedMeasuring,
              (le = j(i.ownerDocument)),
              (Ie = le[0]),
              (se = j(Ie.defaultView || Ie.parentWindow)),
              (Oe = se[0]),
              (fe = $r(le, "html")),
              (de = $r(fe, "body")),
              (he = j(i)),
              (je = he[0]),
              (F = he.is("textarea")),
              (U = he.is("body")),
              (B = Ie !== t),
              (W = F
                ? he.hasClass(Wn) && he.parent().hasClass(Yn)
                : he.hasClass(jn) && he.children(hn + Vn)[v.l]),
              C.x && C.y && !re.nativeScrollbarsOverlaid.initialize
                ? (ur("onInitializationWithdrawn"),
                  W && (Ji(!0), er(!0), lr(!0)),
                  (te = H = !0))
                : (U &&
                    (((s = {}).l = A.max(he[yn](), fe[yn](), se[yn]())),
                    (s.t = A.max(he[bn](), fe[bn](), se[bn]())),
                    (l = function () {
                      ye.removeAttr(v.ti), ji(ye, wn, l, !0, !0);
                    })),
                  Ji(),
                  er(),
                  lr(),
                  Zi(),
                  tr(!0),
                  tr(!1),
                  (function e() {
                    var t,
                      i = Oe.top !== Oe,
                      r = {},
                      o = {},
                      a = {};
                    function s(e) {
                      if (u(e)) {
                        var t = c(e),
                          n = {};
                        (Mt || Rt) && (n[nn] = o.w + (t.x - r.x) * a.x),
                          (Ht || Rt) && (n[rn] = o.h + (t.y - r.y) * a.y),
                          pe.css(n),
                          y.stpP(e);
                      } else l(e);
                    }
                    function l(e) {
                      var i = e !== n;
                      ji(le, [Sn, xn, _n], [Ui, s, l], !0),
                        Tr(de, yi),
                        Ce.releaseCapture && Ce.releaseCapture(),
                        i && (t && Pi(), w.update(sn)),
                        (t = !1);
                    }
                    function u(e) {
                      var t = (e.originalEvent || e).touches !== n;
                      return !te && !H && (1 === y.mBtn(e) || t);
                    }
                    function c(e) {
                      return S && i
                        ? { x: e.screenX, y: e.screenY }
                        : y.page(e);
                    }
                    Li(Ce, wn, function (e) {
                      u(e) &&
                        !qt &&
                        (Et && ((t = !0), qi()),
                        (r = c(e)),
                        (o.w = Le[v.oW] - (z ? 0 : Q)),
                        (o.h = Le[v.oH] - (z ? 0 : X)),
                        (a = hr()),
                        ji(le, [Sn, xn, _n], [Ui, s, l]),
                        kr(de, yi),
                        Ce.setCapture && Ce.setCapture(),
                        y.prvD(e),
                        y.stpP(e));
                    });
                  })(),
                  Ni(),
                  Di(me, Ri),
                  U &&
                    (ye[yn](s.l)[bn](s.t),
                    t.activeElement == i &&
                      qe.focus &&
                      (ye.attr(v.ti, "-1"), qe.focus(), ji(ye, wn, l, !1, !0))),
                  w.update(sn),
                  (M = !0),
                  ur("onInitialized"),
                  b(_i, function (e, t) {
                    ur(t.n, t.a);
                  }),
                  (_i = []),
                  p(o) == c && (o = [o]),
                  y.isA(o)
                    ? b(o, function (e, t) {
                        w.addExt(t);
                      })
                    : j.isPlainObject(o) &&
                      b(o, function (e, t) {
                        w.addExt(e, t);
                      }),
                  setTimeout(function () {
                    D && !H && kr(pe, qn);
                  }, 333)),
              w
            );
          })(i, r, o)
        ) && ce(i, w),
        w
      );
    }
    function ji(e, t, n, i, r) {
      var o = y.isA(t) && y.isA(n),
        a = i ? "removeEventListener" : "addEventListener",
        s = i ? "off" : "on",
        l = !o && t.split(pn),
        u = 0,
        c = j.isPlainObject(r),
        f = (P && (c ? r.U : r)) || !1,
        d = c && (r.V || !1),
        h = P ? { passive: f, capture: d } : d;
      if (o) for (; u < t[v.l]; u++) ji(e, t[u], n[u], i, r);
      else for (; u < l[v.l]; u++) P ? e[0][a](l[u], n, h) : e[s](l[u], n);
    }
    function Li(e, t, n, i) {
      ji(e, t, n, !1, i), Ii.push(y.bind(ji, 0, e, t, n, !0, i));
    }
    function Di(e, t) {
      if (e) {
        var i = y.rO(),
          r =
            "animationstart mozAnimationStart webkitAnimationStart MSAnimationStart",
          o = "childNodes",
          l = 3333333,
          u = function () {
            e[bn](l)[yn](ee ? (T.n ? -l : T.i ? 0 : l) : l), t();
          };
        if (t) {
          if (q)
            ((P = e.addClass("observed").append(yr(ei)).contents()[0])[An] =
              new i(u)).observe(P);
          else if (9 < S || !E) {
            e.prepend(
              yr(
                ei,
                yr(
                  { c: ti, dir: "ltr" },
                  yr(ti, yr(ni)) +
                    yr(ti, yr({ c: ni, style: "width: 200%; height: 200%" }))
                )
              )
            );
            var c,
              f,
              d,
              h,
              p = e[0][o][0][o][0],
              m = j(p[o][1]),
              g = j(p[o][0]),
              b = j(g[0][o][0]),
              w = p[v.oW],
              _ = p[v.oH],
              x = a.nativeScrollbarSize,
              C = function () {
                g[yn](l)[bn](l), m[yn](l)[bn](l);
              },
              k = function () {
                (f = 0), c && ((w = d), (_ = h), u());
              },
              $ = function (e) {
                return (
                  (d = p[v.oW]),
                  (h = p[v.oH]),
                  (c = d != w || h != _),
                  e && c && !f ? (y.cAF()(f), (f = y.rAF()(k))) : e || k(),
                  C(),
                  e && (y.prvD(e), y.stpP(e)),
                  !1
                );
              },
              A = {},
              O = {};
            cr(O, an, [-2 * (x.y + 1), -2 * x.x, -2 * x.y, -2 * (x.x + 1)]),
              j(p).css(O),
              g.on(un, $),
              m.on(un, $),
              e.on(r, function () {
                $(!1);
              }),
              (A[nn] = l),
              (A[rn] = l),
              b.css(A),
              C();
          } else {
            var I = Ie.attachEvent,
              L = S !== n;
            if (I)
              e.prepend(yr(ei)), $r(e, hn + ei)[0].attachEvent("onresize", u);
            else {
              var D = Ie.createElement(s);
              D.setAttribute(v.ti, "-1"),
                D.setAttribute(v.c, ei),
                (D.onload = function () {
                  var e = this.contentDocument.defaultView;
                  e.addEventListener("resize", u),
                    (e.document.documentElement.style.display = "none");
                }),
                (D.type = "text/html"),
                L && e.prepend(D),
                (D.data = "about:blank"),
                L || e.prepend(D),
                e.on(r, u);
            }
          }
          if (e[0] === Ne) {
            var N = function () {
              var e = pe.css("direction"),
                t = {},
                n = 0,
                i = !1;
              return (
                e !== Ge &&
                  ((n =
                    "ltr" === e
                      ? ((t[Zt] = 0), (t[Gt] = sn), l)
                      : ((t[Zt] = sn), (t[Gt] = 0), T.n ? -l : T.i ? 0 : l)),
                  me.children().eq(0).css(t),
                  me[yn](n)[bn](l),
                  (Ge = e),
                  (i = !0)),
                i
              );
            };
            N(),
              Li(e, un, function (e) {
                return N() && Ki(), y.prvD(e), y.stpP(e), !1;
              });
          }
        } else if (q) {
          var P,
            R = (P = e.contents()[0])[An];
          R && (R.disconnect(), delete P[An]);
        } else Sr(e.children(hn + ei).eq(0));
      }
    }
    function Ni() {
      if (R) {
        var e,
          t,
          n,
          i,
          r,
          o,
          a,
          s,
          u,
          c,
          f = y.mO(),
          d = y.now();
        (Tt = function (e) {
          var t = !1;
          return (
            M &&
              !te &&
              (b(e, function () {
                return !(t = (function e(t) {
                  var n = t.attributeName,
                    i = t.target,
                    r = t.type,
                    o = "closest";
                  if (i === Re) return null === n;
                  if ("attributes" === r && (n === v.c || n === v.s) && !F) {
                    if (n === v.c && j(i).hasClass(jn))
                      return Vi(t.oldValue, i.className);
                    if (typeof i[o] != l) return !0;
                    if (
                      null !== i[o](hn + ei) ||
                      null !== i[o](hn + ri) ||
                      null !== i[o](hn + fi)
                    )
                      return !1;
                  }
                  return !0;
                })(this));
              }),
              t &&
                ((s = y.now()),
                (u = ze || We),
                (c = function () {
                  H || ((d = s), F && Xi(), u ? Ki() : w.update(sn));
                }),
                clearTimeout(a),
                11 < s - d || !u ? c() : (a = setTimeout(c, 11)))),
            t
          );
        }),
          (xt = new f(
            (kt = function (a) {
              var s,
                l = !1,
                u = !1,
                c = [];
              return (
                M &&
                  !te &&
                  (b(a, function () {
                    (e = (s = this).target),
                      (t = s.attributeName),
                      (n = t === v.c),
                      (i = s.oldValue),
                      (r = e.className),
                      W &&
                        n &&
                        !u &&
                        -1 < i.indexOf(Ln) &&
                        r.indexOf(Ln) < 0 &&
                        ((o = dr(!0)),
                        (Le.className = r
                          .split(pn)
                          .concat(
                            i.split(pn).filter(function (e) {
                              return e.match(o);
                            })
                          )
                          .join(pn)),
                        (l = u = !0)),
                      (l =
                        l ||
                        (n ? Vi(i, r) : t !== v.s || i !== e[v.s].cssText)),
                      c.push(t);
                  }),
                  Qi(c),
                  l && w.update(u || sn)),
                l
              );
            })
          )),
          (Ct = new f(Tt));
      }
    }
    function Pi() {
      R &&
        !Et &&
        (xt.observe(Le, {
          attributes: !0,
          attributeOldValue: !0,
          attributeFilter: Oi,
        }),
        Ct.observe(F ? je : Re, {
          attributes: !0,
          attributeOldValue: !0,
          subtree: !F,
          childList: !F,
          characterData: !F,
          attributeFilter: F ? Ai : Oi,
        }),
        (Et = !0));
    }
    function qi() {
      R && Et && (xt.disconnect(), Ct.disconnect(), (Et = !1));
    }
    function Ri() {
      if (!te) {
        var e,
          t = { w: Ne[v.sW], h: Ne[v.sH] };
        (e = xr(t, st)), (st = t), e && Ki({ A: !0 });
      }
    }
    function Mi() {
      Dt && ir(!0);
    }
    function Hi() {
      Dt && !de.hasClass(yi) && ir(!1);
    }
    function Fi() {
      Lt &&
        (ir(!0),
        clearTimeout(At),
        (At = setTimeout(function () {
          Lt && !H && ir(!1);
        }, 100)));
    }
    function Ui(e) {
      return y.prvD(e), !1;
    }
    function Bi(e) {
      var t = j(e.target);
      _r(function (e, n) {
        t.is(n) && Ki({ I: !0 });
      });
    }
    function Wi(e) {
      e || Wi(!0),
        ji(pe, xn.split(pn)[0], Fi, !Lt || e, !0),
        ji(pe, [Cn, kn], [Mi, Hi], !Dt || e, !0),
        M || e || pe.one("mouseover", Mi);
    }
    function zi() {
      var e = {};
      return (
        U &&
          we &&
          ((e.w = vr(we.css(en + nn))),
          (e.h = vr(we.css(en + rn))),
          (e.c = xr(e, _t)),
          (e.f = !0)),
        !!(_t = e).c
      );
    }
    function Vi(e, t) {
      var n,
        i,
        r = typeof t == c ? t.split(pn) : [],
        o = (function e(t, n) {
          var i,
            r,
            o = [],
            a = [];
          for (i = 0; i < t.length; i++) o[t[i]] = !0;
          for (i = 0; i < n.length; i++)
            o[n[i]] ? delete o[n[i]] : (o[n[i]] = !0);
          for (r in o) a.push(r);
          return a;
        })(typeof e == c ? e.split(pn) : [], r),
        a = g(bi, o);
      if ((-1 < a && o.splice(a, 1), 0 < o[v.l]))
        for (i = dr(!0, !0), n = 0; n < o.length; n++)
          if (!o[n].match(i)) return !0;
      return !1;
    }
    function Qi(e) {
      b((e = e || xi), function (e, t) {
        if (-1 < y.inA(t, xi)) {
          var n = he.attr(t);
          p(n) == c ? ye.attr(t, n) : ye.removeAttr(t);
        }
      });
    }
    function Xi() {
      if (!te) {
        var e,
          t,
          n,
          i,
          r = !mt,
          o = Wt.w,
          a = Wt.h,
          s = {},
          l = We || r;
        return (
          (s[en + nn] = an),
          (s[en + rn] = an),
          (s[nn] = sn),
          he.css(s),
          (e = je[v.oW]),
          (t = l ? A.max(e, je[v.sW] - 1) : 1),
          (s[nn] = We ? sn : cn),
          (s[en + nn] = cn),
          (s[rn] = sn),
          he.css(s),
          (n = je[v.oH]),
          (i = A.max(n, je[v.sH] - 1)),
          (s[nn] = t),
          (s[rn] = i),
          xe.css(s),
          (s[en + nn] = o),
          (s[en + rn] = a),
          he.css(s),
          { $: e, X: n, Y: t, G: i }
        );
      }
    }
    function Ki(e) {
      clearTimeout(ae),
        (e = e || {}),
        (ki.A |= e.A),
        (ki.I |= e.I),
        (ki.H |= e.H);
      var t,
        i = y.now(),
        r = !!ki.A,
        o = !!ki.I,
        s = !!ki.H,
        l = e.T,
        u = 0 < Ti && M && !H && !s && !l && i - oe < Ti && !ze && !We;
      if (
        (u && (ae = setTimeout(Ki, Ti)),
        !(
          H ||
          u ||
          (te && !l) ||
          (M && !s && (t = pe.is(":hidden"))) ||
          "inline" === pe.css("display")
        ))
      ) {
        (oe = i),
          (ki = {}),
          !$ || (C.x && C.y)
            ? (L = Cr({}, a.nativeScrollbarSize))
            : ((L.x = 0), (L.y = 0)),
          (zt = { x: 3 * (L.x + (C.x ? 0 : 3)), y: 3 * (L.y + (C.y ? 0 : 3)) }),
          (l = l || {});
        var c = function () {
            return xr.apply(this, [].slice.call(arguments).concat([s]));
          },
          f = { x: ye[yn](), y: ye[bn]() },
          d = re.scrollbars,
          p = re.textarea,
          g = d.visibility,
          b = c(g, lt),
          _ = d.autoHide,
          x = c(_, ut),
          S = d.clickScrolling,
          O = c(S, ct),
          D = d.dragScrolling,
          N = c(D, ft),
          P = re.className,
          q = c(P, pt),
          R = re.resize,
          B = c(R, dt) && !U,
          W = re.paddingAbsolute,
          G = c(W, Je),
          ne = re.clipAlways,
          ie = c(ne, Ze),
          se = re.sizeAutoCapable && !U,
          le = c(se, ot),
          ue = re.nativeScrollbarsOverlaid.showNativeScrollbars,
          ce = c(ue, it),
          fe = re.autoUpdate,
          de = c(fe, rt),
          ke = re.overflowBehavior,
          Te = c(ke, tt, s),
          Ee = p.dynWidth,
          Se = c(wt, Ee),
          $e = p.dynHeight,
          Ae = c(bt, $e);
        if (
          ((It = "n" === _),
          (jt = "s" === _),
          (Lt = "m" === _),
          (Dt = "l" === _),
          (Ot = d.autoHideDelay),
          (vt = pt),
          (qt = "n" === R),
          (Rt = "b" === R),
          (Mt = "h" === R),
          (Ht = "v" === R),
          (ht = re.normalizeRTL),
          (ue = ue && C.x && C.y),
          (lt = g),
          (ut = _),
          (ct = S),
          (ft = D),
          (pt = P),
          (dt = R),
          (Je = W),
          (Ze = ne),
          (ot = se),
          (it = ue),
          (rt = fe),
          (tt = Cr({}, ke)),
          (wt = Ee),
          (bt = $e),
          (Ue = Ue || { x: !1, y: !1 }),
          q &&
            (Tr(pe, vt + pn + bi),
            kr(pe, P !== n && null !== P && 0 < P.length ? P : bi)),
          de &&
            (!0 === fe || (null === fe && E)
              ? (qi(), h.add(w))
              : (h.remove(w), Pi())),
          le)
        )
          if (se)
            if ((_e ? _e.show() : ((_e = j(yr(Jn))), ge.before(_e)), V))
              ve.show();
            else {
              (ve = j(yr(Zn))), (De = ve[0]), _e.before(ve);
              var Oe = { w: -1, h: -1 };
              Di(ve, function () {
                var e = { w: De[v.oW], h: De[v.oH] };
                xr(e, Oe) &&
                  ((M && ze && 0 < e.h) ||
                    (We && 0 < e.w) ||
                    (M && !ze && 0 === e.h) ||
                    (!We && 0 === e.w)) &&
                  Ki(),
                  (Oe = e);
              }),
                (V = !0),
                null !== I && ve.css(rn, I + "(100% + 1px)");
            }
          else V && ve.hide(), _e && _e.hide();
        s && (me.find("*").trigger(un), V && ve.find("*").trigger(un)),
          (t = t === n ? pe.is(":hidden") : t);
        var Ie,
          Ne = !!F && "off" !== he.attr("wrap"),
          Ge = c(Ne, mt),
          at = pe.css("direction"),
          st = c(at, Ye),
          xt = pe.css("box-sizing"),
          Ct = c(xt, Ve),
          kt = fr(Xt);
        try {
          Ie = V ? De[v.bCR]() : null;
        } catch (e) {
          return;
        }
        z = "border-box" === xt;
        var Tt = (ee = "rtl" === at) ? Zt : Gt,
          $t = ee ? Gt : Zt,
          At = !1,
          Nt =
            !(!V || "none" === pe.css(on)) &&
            0 === A.round(Ie.right - Ie.left) &&
            (!!W || 0 < Le[v.cW] - Q);
        if (se && !Nt) {
          var Pt = Le[v.oW],
            Ut = _e.css(nn);
          _e.css(nn, sn);
          var Bt = Le[v.oW];
          _e.css(nn, Ut),
            (At = Pt !== Bt) ||
              (_e.css(nn, Pt + 1),
              (Bt = Le[v.oW]),
              _e.css(nn, Ut),
              (At = Pt !== Bt));
        }
        var Vt = (Nt || At) && se && !t,
          ln = c(Vt, We),
          fn = !Vt && We,
          dn = !(!V || !se || t) && 0 === A.round(Ie.bottom - Ie.top),
          hn = c(dn, ze),
          vn = !dn && ze,
          mn = fr(Kt, "-" + nn, !((Vt && z) || !z), !((dn && z) || !z)),
          gn = fr(Qt),
          wn = {},
          _n = {},
          xn = function () {
            return { w: Le[v.cW], h: Le[v.cH] };
          },
          Cn = function () {
            return {
              w: Pe[v.oW] + A.max(0, Re[v.cW] - Re[v.sW]),
              h: Pe[v.oH] + A.max(0, Re[v.cH] - Re[v.sH]),
            };
          },
          kn = (Q = kt.l + kt.r),
          Tn = (X = kt.t + kt.b);
        if (
          ((kn *= W ? 1 : 0),
          (Tn *= W ? 1 : 0),
          (kt.c = c(kt, Qe)),
          (K = mn.l + mn.r),
          (Y = mn.t + mn.b),
          (mn.c = c(mn, Xe)),
          (J = gn.l + gn.r),
          (Z = gn.t + gn.b),
          (gn.c = c(gn, Ke)),
          (mt = Ne),
          (Ye = at),
          (Ve = xt),
          (We = Vt),
          (ze = dn),
          (Qe = kt),
          (Xe = mn),
          (Ke = gn),
          st && V && ve.css(on, $t),
          kt.c || st || G || ln || hn || Ct || le)
        ) {
          var En = {},
            Sn = {},
            $n = [kt.t, kt.r, kt.b, kt.l];
          cr(_n, Qt, [-kt.t, -kt.r, -kt.b, -kt.l]),
            W
              ? (cr(En, an, $n), cr(F ? Sn : wn, Xt))
              : (cr(En, an), cr(F ? Sn : wn, Xt, $n)),
            ge.css(En),
            he.css(Sn);
        }
        Wt = Cn();
        var An = !!F && Xi(),
          On = F && c(An, yt),
          In = F && An ? { w: Ee ? An.Y : An.$, h: $e ? An.G : An.X } : {};
        if (
          ((yt = An),
          dn && (hn || G || Ct || kt.c || mn.c)
            ? (wn[rn] = sn)
            : (hn || G) && (wn[rn] = cn),
          Vt && (ln || G || Ct || kt.c || mn.c || st)
            ? ((wn[nn] = sn), (_n[tn + nn] = cn))
            : (ln || G) && ((wn[nn] = cn), (wn[on] = an), (_n[tn + nn] = an)),
          Vt
            ? ((_n[nn] = sn),
              (wn[nn] = m.d(nn, "max-content intrinsic") || sn),
              (wn[on] = $t))
            : (_n[nn] = an),
          (_n[rn] = dn ? In.h || Re[v.cH] : an),
          se && _e.css(_n),
          be.css(wn),
          (wn = {}),
          (_n = {}),
          r ||
            o ||
            On ||
            st ||
            Ct ||
            G ||
            ln ||
            Vt ||
            hn ||
            dn ||
            ce ||
            Te ||
            ie ||
            B ||
            b ||
            x ||
            N ||
            O ||
            Se ||
            Ae ||
            Ge)
        ) {
          var jn = "overflow",
            Ln = jn + "-x",
            Dn = jn + "-y";
          if (!$) {
            var Nn = {},
              Pn = Ue.y && Be.ys && !ue ? (C.y ? ye.css(Tt) : -L.y) : 0,
              qn = Ue.x && Be.xs && !ue ? (C.x ? ye.css(Jt) : -L.x) : 0;
            cr(Nn, an), ye.css(Nn);
          }
          var Wn = gr(),
            zn = { w: In.w || Wn[v.cW], h: In.h || Wn[v.cH] },
            Vn = Wn[v.sW],
            Qn = Wn[v.sH];
          $ || ((Nn[Jt] = vn ? an : qn), (Nn[Tt] = fn ? an : Pn), ye.css(Nn)),
            (Wt = Cn());
          var Kn = xn(),
            Yn = {
              w: Kn.w - J - K - (z ? 0 : Q),
              h: Kn.h - Z - Y - (z ? 0 : X),
            },
            ei = {
              w: A.max((Vt ? zn.w : Vn) + kn, Yn.w),
              h: A.max((dn ? zn.h : Qn) + Tn, Yn.h),
            };
          if (((ei.c = c(ei, et)), (et = ei), se)) {
            (ei.c || dn || Vt) &&
              ((_n[nn] = ei.w),
              (_n[rn] = ei.h),
              F || (zn = { w: Wn[v.cW], h: Wn[v.cH] }));
            var ti = {},
              ni = function (e) {
                var t = sr(e),
                  n = t.j,
                  i = t.K,
                  r = e ? Vt : dn,
                  o = e ? K : Y,
                  a = e ? Q : X,
                  s = e ? J : Z,
                  l = Wt[n] - o - s - (z ? 0 : a);
                (r && (r || !mn.c)) || (_n[i] = Yn[n] - 1),
                  !(r && zn[n] < l) ||
                    (e && F && Ne) ||
                    (F && (ti[i] = vr(xe.css(i)) - 1), --_n[i]),
                  0 < zn[n] && (_n[i] = A.max(1, _n[i]));
              };
            ni(!0), ni(!1), F && xe.css(ti), _e.css(_n);
          }
          Vt && (wn[nn] = cn),
            !Vt || z || Et || (wn[on] = "none"),
            be.css(wn),
            (wn = {});
          var ii = { w: Wn[v.sW], h: Wn[v.sH] };
          (ii.c = o = c(ii, He)),
            (He = ii),
            (Wt = Cn()),
            (r = c((Kn = xn()), Me)),
            (Me = Kn);
          var ri = F && (0 === Wt.w || 0 === Wt.h),
            oi = nt,
            ai = {},
            si = {},
            li = {},
            ui = {},
            ci = {},
            fi = {},
            mi = {},
            gi = Pe[v.bCR](),
            yi = function (e) {
              var t = sr(e),
                n = sr(!e).Q,
                i = t.Q,
                r = t.j,
                o = t.K,
                a = un + t.J + "Max",
                s = gi[o] ? A.abs(gi[o] - Wt[r]) : 0,
                l = oi && 0 < oi[i] && 0 === qe[a];
              (ai[i] = "v-s" === ke[i]),
                (si[i] = "v-h" === ke[i]),
                (li[i] = "s" === ke[i]),
                (ui[i] = A.max(0, A.round(100 * (ii[r] - Wt[r])) / 100)),
                (ui[i] *= ri || (l && 0 < s && s < 1) ? 0 : 1),
                (ci[i] = 0 < ui[i]),
                (fi[i] = ai[i] || si[i] ? ci[n] && !ai[n] && !si[n] : ci[i]),
                (fi[i + "s"] = !!fi[i] && (li[i] || ai[i])),
                (mi[i] = ci[i] && fi[i + "s"]);
            };
          if (
            (yi(!0),
            yi(!1),
            (ui.c = c(ui, nt)),
            (nt = ui),
            (ci.c = c(ci, Ue)),
            (Ue = ci),
            (fi.c = c(fi, Be)),
            (Be = fi),
            C.x || C.y)
          ) {
            var wi,
              _i = {},
              xi = {},
              Ci = s;
            (ci.x || ci.y) &&
              ((xi.w = C.y && ci.y ? ii.w + k.y : an),
              (xi.h = C.x && ci.x ? ii.h + k.x : an),
              (Ci = c(xi, Fe)),
              (Fe = xi)),
              (ci.c || fi.c || ii.c || st || ln || hn || Vt || dn || ce) &&
                ((wn[Qt + $t] = wn[Kt + $t] = an),
                (wi = function (e) {
                  var t = sr(e),
                    n = sr(!e),
                    i = t.Q,
                    r = e ? Jt : Tt,
                    o = e ? dn : Vt;
                  C[i] && ci[i] && fi[i + "s"]
                    ? ((wn[Qt + r] = !o || ue ? an : k[i]),
                      (wn[Kt + r] =
                        (e && o) || ue ? an : k[i] + "px solid transparent"))
                    : ((xi[n.j] = wn[Qt + r] = wn[Kt + r] = an), (Ci = !0));
                }),
                $ ? Er(ye, Xn, !ue) : (wi(!0), wi(!1))),
              ue && ((xi.w = xi.h = an), (Ci = !0)),
              Ci &&
                !$ &&
                ((_i[nn] = fi.y ? xi.w : an),
                (_i[rn] = fi.x ? xi.h : an),
                we || ((we = j(yr(Gn))), ye.prepend(we)),
                we.css(_i)),
              be.css(wn);
          }
          var Ei,
            Si = {};
          En = {};
          if (
            (r || ci.c || fi.c || ii.c || Te || Ct || ce || st || ie || hn) &&
            ((Si[$t] = an),
            (Ei = function (e) {
              var t = sr(e),
                n = sr(!e),
                i = t.Q,
                r = t.Z,
                o = e ? Jt : Tt,
                a = function () {
                  (Si[o] = an), (Ft[n.j] = 0);
                };
              ci[i] && fi[i + "s"]
                ? ((Si[jn + r] = un),
                  ue || $
                    ? a()
                    : ((Si[o] = -(C[i] ? k[i] : L[i])),
                      (Ft[n.j] = C[i] ? k[n.Q] : 0)))
                : ((Si[jn + r] = an), a());
            })(!0),
            Ei(!1),
            !$ &&
            (Wt.h < zt.x || Wt.w < zt.y) &&
            ((ci.x && fi.x && !C.x) || (ci.y && fi.y && !C.y))
              ? ((Si[Xt + Yt] = zt.x),
                (Si[Qt + Yt] = -zt.x),
                (Si[Xt + $t] = zt.y),
                (Si[Qt + $t] = -zt.y))
              : (Si[Xt + Yt] = Si[Qt + Yt] = Si[Xt + $t] = Si[Qt + $t] = an),
            (Si[Xt + Tt] = Si[Qt + Tt] = an),
            (ci.x && fi.x) || (ci.y && fi.y) || ri
              ? F && ri && (En[Ln] = En[Dn] = "hidden")
              : (!ne || si.x || ai.x || si.y || ai.y) &&
                (F && (En[Ln] = En[Dn] = an), (Si[Ln] = Si[Dn] = "visible")),
            ge.css(En),
            ye.css(Si),
            (Si = {}),
            (ci.c || Ct || ln || hn) && (!C.x || !C.y))
          ) {
            var $i = Re[v.s];
            ($i.webkitTransform = "scale(1)"),
              ($i.display = "run-in"),
              Re[v.oH],
              ($i.display = an),
              ($i.webkitTransform = an);
          }
          if (((wn = {}), st || ln || hn))
            if (ee && Vt) {
              var Ai = be.css(on),
                Oi = A.round(be.css(on, an).css(Zt, an).position().left);
              be.css(on, Ai),
                Oi !== A.round(be.position().left) && (wn[Zt] = Oi);
            } else wn[Zt] = an;
          if ((be.css(wn), F && o)) {
            var Ii = (function e() {
              var t = je.selectionStart;
              if (t === n) return;
              var i,
                r,
                o = he.val(),
                a = o[v.l],
                s = o.split("\n"),
                l = s[v.l],
                u = o.substr(0, t).split("\n"),
                c = 0,
                f = 0,
                d = u[v.l],
                h = u[u[v.l] - 1][v.l];
              for (r = 0; r < s[v.l]; r++)
                (i = s[r][v.l]), f < i && ((c = r + 1), (f = i));
              return { nn: d, tn: h, rn: l, en: f, in: c, un: t, an: a };
            })();
            if (Ii) {
              var ji = gt === n || Ii.rn !== gt.rn,
                Li = Ii.nn,
                Ni = Ii.tn,
                Ri = Ii["in"],
                Mi = Ii.rn,
                Hi = Ii.en,
                Fi = Ii.un,
                Ui = Ii.an <= Fi && St,
                Bi = {
                  x: Ne || Ni !== Hi || Li !== Ri ? -1 : nt.x,
                  y: (
                    Ne
                      ? Ui || (ji && oi && f.y === oi.y)
                      : (Ui || ji) && Li === Mi
                  )
                    ? nt.y
                    : -1,
                };
              (f.x = -1 < Bi.x ? (ee && ht && T.i ? 0 : Bi.x) : f.x),
                (f.y = -1 < Bi.y ? Bi.y : f.y);
            }
            gt = Ii;
          }
          ee && T.i && C.y && ci.x && ht && (f.x += Ft.w || 0),
            Vt && pe[yn](0),
            dn && pe[bn](0),
            ye[yn](f.x)[bn](f.y);
          var Vi = "v" === g,
            Qi = "h" === g,
            Gi = "a" === g,
            Ji = function (e, t) {
              (t = t === n ? e : t), nr(!0, e, mi.x), nr(!1, t, mi.y);
            };
          Er(pe, Fn, fi.x || fi.y),
            Er(pe, Un, fi.x),
            Er(pe, Bn, fi.y),
            st && !U && Er(pe, Rn, ee),
            U && kr(pe, Mn),
            B &&
              (Er(pe, Mn, qt),
              Er(Ce, di, !qt),
              Er(Ce, hi, Rt),
              Er(Ce, pi, Mt),
              Er(Ce, vi, Ht)),
            (b || Te || fi.c || ci.c || ce) &&
              (ue
                ? ce && (Tr(pe, Hn), ue && Ji(!1))
                : Gi
                ? Ji(mi.x, mi.y)
                : Vi
                ? Ji(!0)
                : Qi && Ji(!1)),
            (x || ce) && (Wi(!Dt && !Lt), ir(It, !It)),
            (r || ui.c || hn || ln || B || Ct || G || ce || st) &&
              (rr(!0), or(!0), rr(!1), or(!1)),
            O && ar(!0, S),
            N && ar(!1, D),
            ur("onDirectionChanged", { isRTL: ee, dir: at }, st),
            ur("onHostSizeChanged", { width: Me.w, height: Me.h }, r),
            ur("onContentSizeChanged", { width: He.w, height: He.h }, o),
            ur(
              "onOverflowChanged",
              {
                x: ci.x,
                y: ci.y,
                xScrollable: fi.xs,
                yScrollable: fi.ys,
                clipped: fi.x || fi.y,
              },
              ci.c || fi.c
            ),
            ur("onOverflowAmountChanged", { x: ui.x, y: ui.y }, ui.c);
        }
        U &&
          _t &&
          (Ue.c || _t.c) &&
          (_t.f || zi(),
          C.y && Ue.x && be.css(en + nn, _t.w + k.y),
          C.x && Ue.y && be.css(en + rn, _t.h + k.x),
          (_t.c = !1)),
          M && l.updateOnLoad && Yi(),
          ur("onUpdated", { forced: s });
      }
    }
    function Yi() {
      F ||
        _r(function (e, t) {
          be.find(t).each(function (e, t) {
            y.inA(t, Si) < 0 && (Si.push(t), j(t).off(Ei, Bi).on(Ei, Bi));
          });
        });
    }
    function Gi(e) {
      var t = ue.O(e, ue._, !0, ie);
      return (ie = Cr({}, ie, t.S)), (re = Cr({}, re, t.z)), t.z;
    }
    function Ji(e) {
      var t = "parent",
        i = Wn + pn + ii,
        r = F ? pn + ii : an,
        o = re.textarea.inheritedAttrs,
        a = {},
        s = function () {
          var t = e ? he : pe;
          b(a, function (e, n) {
            p(n) == c && (e == v.c ? t.addClass(n) : t.attr(e, n));
          });
        },
        l = [
          jn,
          Ln,
          Dn,
          Mn,
          Rn,
          Nn,
          Pn,
          qn,
          Hn,
          Fn,
          Un,
          Bn,
          bi,
          Wn,
          ii,
          pt,
        ].join(pn),
        u = {};
      (pe = pe || (F ? (W ? he[t]()[t]()[t]()[t]() : j(yr(Dn))) : he)),
        (be = be || br(Yn + r)),
        (ye = ye || br(Qn + r)),
        (ge = ge || br(Vn + r)),
        (me = me || br("os-resize-observer-host")),
        (xe = xe || (F ? br(zn) : n)),
        W && kr(pe, Ln),
        e && Tr(pe, l),
        (o = p(o) == c ? o.split(pn) : o),
        y.isA(o) &&
          F &&
          b(o, function (t, n) {
            p(n) == c && (a[n] = e ? pe.attr(n) : he.attr(n));
          }),
        e
          ? (W && M
              ? (me.children().remove(),
                b([ge, ye, be, xe], function (e, t) {
                  t && Tr(t.removeAttr(v.s), wi);
                }),
                kr(pe, F ? Dn : jn))
              : (Sr(me),
                be.contents().unwrap().unwrap().unwrap(),
                F && (he.unwrap(), Sr(pe), Sr(xe), s())),
            F && he.removeAttr(v.s),
            U && Tr(fe, In))
          : (F &&
              (re.sizeAutoCapable ||
                ((u[nn] = he.css(nn)), (u[rn] = he.css(rn))),
              W || he.addClass(ii).wrap(pe),
              (pe = he[t]().css(u))),
            W ||
              (kr(he, F ? i : jn),
              pe.wrapInner(be).wrapInner(ye).wrapInner(ge).prepend(me),
              (be = $r(pe, hn + Yn)),
              (ye = $r(pe, hn + Qn)),
              (ge = $r(pe, hn + Vn)),
              F && (be.prepend(xe), s())),
            $ && kr(ye, Xn),
            C.x && C.y && kr(ye, Kn),
            U && kr(fe, In),
            (Ne = me[0]),
            (Le = pe[0]),
            (Pe = ge[0]),
            (qe = ye[0]),
            (Re = be[0]),
            Qi());
    }
    function Zi() {
      var e,
        t,
        i = [
          112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 123, 33, 34, 37, 38,
          39, 40, 16, 17, 18, 19, 20, 144,
        ],
        r = [],
        o = "focus";
      function a(t) {
        Xi(), w.update(sn), t && E && clearInterval(e);
      }
      F
        ? (9 < S || !E
            ? Li(he, "input", a)
            : Li(
                he,
                [Tn, En],
                [
                  function t(n) {
                    var o = n.keyCode;
                    g(o, i) < 0 &&
                      (r[v.l] || (a(), (e = setInterval(a, 1e3 / 60))),
                      g(o, r) < 0 && r.push(o));
                  },
                  function e(t) {
                    var n = t.keyCode,
                      o = g(n, r);
                    g(n, i) < 0 && (-1 < o && r.splice(o, 1), r[v.l] || a(!0));
                  },
                ]
              ),
          Li(
            he,
            [un, "drop", o, o + "out"],
            [
              function e(t) {
                return (
                  he[yn](T.i && ht ? 9999999 : 0),
                  he[bn](0),
                  y.prvD(t),
                  y.stpP(t),
                  !1
                );
              },
              function e(t) {
                setTimeout(function () {
                  H || a();
                }, 50);
              },
              function e() {
                (St = !0), kr(pe, o);
              },
              function e() {
                (St = !1), (r = []), Tr(pe, o), a(!0);
              },
            ]
          ))
        : Li(be, $n, function e(t) {
            !0 !== rt &&
              (function e(t) {
                if (!M) return 1;
                var n = "flex-grow",
                  i = "flex-shrink",
                  r = "flex-basis",
                  o = [
                    nn,
                    en + nn,
                    tn + nn,
                    Qt + Zt,
                    Qt + Gt,
                    Zt,
                    Gt,
                    "font-weight",
                    "word-spacing",
                    n,
                    i,
                    r,
                  ],
                  a = [Xt + Zt, Xt + Gt, Kt + Zt + nn, Kt + Gt + nn],
                  s = [
                    rn,
                    en + rn,
                    tn + rn,
                    Qt + Yt,
                    Qt + Jt,
                    Yt,
                    Jt,
                    "line-height",
                    n,
                    i,
                    r,
                  ],
                  l = [Xt + Yt, Xt + Jt, Kt + Yt + nn, Kt + Jt + nn],
                  u = "s" === tt.x || "v-s" === tt.x,
                  c = !1,
                  f = function (e, t) {
                    for (var n = 0; n < e[v.l]; n++) if (e[n] === t) return !0;
                    return !1;
                  };
                return (
                  ("s" === tt.y || "v-s" === tt.y) &&
                    ((c = f(s, t)) || z || (c = f(l, t))),
                  u && !c && ((c = f(o, t)) || z || (c = f(a, t))),
                  c
                );
              })((t = t.originalEvent || t).propertyName) &&
              w.update(sn);
          }),
        Li(
          ye,
          un,
          function e(i) {
            te ||
              (t !== n
                ? clearTimeout(t)
                : ((jt || Lt) && ir(!0),
                  mr() || kr(pe, Hn),
                  ur("onScrollStart", i)),
              Pt || (or(!0), or(!1)),
              ur("onScroll", i),
              (t = setTimeout(function () {
                H ||
                  (clearTimeout(t),
                  (t = n),
                  (jt || Lt) && ir(!1),
                  mr() || Tr(pe, Hn),
                  ur("onScrollStop", i));
              }, 175)));
          },
          !0
        );
    }
    function er(e) {
      var t,
        n,
        i = function (t) {
          var n = br(ri + pn + (t ? mi : gi), !0),
            i = br(oi, n),
            r = br(si, n);
          return W || e || (n.append(i), i.append(r)), { cn: n, sn: i, ln: r };
        };
      function r(e) {
        var t = sr(e),
          n = t.cn,
          r = t.sn,
          o = t.ln;
        W && M
          ? b([n, r, o], function (e, t) {
              Tr(t.removeAttr(v.s), wi);
            })
          : Sr(n || i(e).cn);
      }
      e
        ? (r(!0), r())
        : ((t = i(!0)),
          (n = i()),
          (ke = t.cn),
          (Te = t.sn),
          (Ee = t.ln),
          (Se = n.cn),
          ($e = n.sn),
          (Ae = n.ln),
          W || (ge.after(Se), ge.after(ke)));
    }
    function tr(e) {
      var t,
        i,
        r,
        o,
        a = sr(e),
        s = a.vn,
        l = Oe.top !== Oe,
        u = a.Q,
        c = a.Z,
        f = un + a.J,
        d = "active",
        h = "snapHandle",
        p = "click",
        m = 1,
        b = [16, 17];
      function _(e) {
        return S && l ? e["screen" + c] : y.page(e)[u];
      }
      function x(e) {
        return re.scrollbars[e];
      }
      function C() {
        m = 0.5;
      }
      function k() {
        m = 1;
      }
      function E(e) {
        y.stpP(e);
      }
      function $(e) {
        -1 < g(e.keyCode, b) && C();
      }
      function O(e) {
        -1 < g(e.keyCode, b) && k();
      }
      function I(e) {
        var t = (e.originalEvent || e).touches !== n;
        return (
          !(te || H || mr() || !ft || (t && !x("touchSupport"))) &&
          (1 === y.mBtn(e) || t)
        );
      }
      function j(t) {
        if (I(t)) {
          var n = s.F,
            a = s.M,
            l = s.N * (((_(t) - r) * o) / (n - a));
          (l = isFinite(l) ? l : 0),
            ee && e && !T.i && (l *= -1),
            ye[f](A.round(i + l)),
            Pt && or(e, i + l),
            P || y.prvD(t);
        } else L(t);
      }
      function L(s) {
        if (
          ((s = s || s.originalEvent),
          ji(le, [xn, _n, Tn, En, Sn], [j, L, $, O, Ui], !0),
          y.rAF()(function () {
            ji(le, p, E, !0, { V: !0 });
          }),
          Pt && or(e, !0),
          (Pt = !1),
          Tr(de, yi),
          Tr(a.ln, d),
          Tr(a.sn, d),
          Tr(a.cn, d),
          (o = 1),
          k(),
          t !== (r = i = n) && (w.scrollStop(), clearTimeout(t), (t = n)),
          s)
        ) {
          var l = Le[v.bCR]();
          (s.clientX >= l.left &&
            s.clientX <= l.right &&
            s.clientY >= l.top &&
            s.clientY <= l.bottom) ||
            Hi(),
            (jt || Lt) && ir(!1);
        }
      }
      function N(t) {
        (i = ye[f]()),
          (i = isNaN(i) ? 0 : i),
          ((ee && e && !T.n) || !ee) && (i = i < 0 ? 0 : i),
          (o = hr()[u]),
          (r = _(t)),
          (Pt = !x(h)),
          kr(de, yi),
          kr(a.ln, d),
          kr(a.cn, d),
          ji(le, [xn, _n, Sn], [j, L, Ui]),
          y.rAF()(function () {
            ji(le, p, E, !1, { V: !0 });
          }),
          (!S && B) || y.prvD(t),
          y.stpP(t);
      }
      Li(a.ln, wn, function e(t) {
        I(t) && N(t);
      }),
        Li(
          a.sn,
          [wn, Cn, kn],
          [
            function i(l) {
              if (I(l)) {
                var c,
                  p = a.vn.M / Math.round(A.min(1, Wt[a.j] / He[a.j]) * a.vn.F),
                  v = A.round(Wt[a.j] * p),
                  g = 270 * p,
                  b = 400 * p,
                  _ = a.sn.offset()[a.B],
                  k = l.ctrlKey,
                  E = l.shiftKey,
                  S = E && k,
                  j = !0,
                  D = function (t) {
                    Pt && or(e, t);
                  },
                  P = function () {
                    D(), N(l);
                  },
                  q = function () {
                    if (!H) {
                      var i = (r - _) * o,
                        a = s.W,
                        l = s.F,
                        d = s.M,
                        h = s.N,
                        p = s.L,
                        y = g * m,
                        x = j ? A.max(b, y) : y,
                        C = h * ((i - d / 2) / (l - d)),
                        k = ee && e && ((!T.i && !T.n) || ht),
                        $ = k ? a < i : i < a,
                        O = {},
                        I = {
                          easing: "linear",
                          step: function (t) {
                            Pt && (ye[f](t), or(e, t));
                          },
                        };
                      (C = isFinite(C) ? C : 0),
                        (C = ee && e && !T.i ? h - C : C),
                        E
                          ? (ye[f](C),
                            S
                              ? ((C = ye[f]()),
                                ye[f](p),
                                (C = k && T.i ? h - C : C),
                                (C = k && T.n ? -C : C),
                                (O[u] = C),
                                w.scroll(
                                  O,
                                  Cr(I, { duration: 130, complete: P })
                                ))
                              : P())
                          : ((c = j ? $ : c),
                            (
                              k
                                ? c
                                  ? i <= a + d
                                  : a <= i
                                : c
                                ? a <= i
                                : i <= a + d
                            )
                              ? (clearTimeout(t),
                                w.scrollStop(),
                                (t = n),
                                D(!0))
                              : ((t = setTimeout(q, x)),
                                (O[u] = (c ? "-=" : "+=") + v),
                                w.scroll(O, Cr(I, { duration: y }))),
                            (j = !1));
                    }
                  };
                k && C(),
                  (o = hr()[u]),
                  (r = y.page(l)[u]),
                  (Pt = !x(h)),
                  kr(de, yi),
                  kr(a.sn, d),
                  kr(a.cn, d),
                  ji(le, [_n, Tn, En, Sn], [L, $, O, Ui]),
                  q(),
                  y.prvD(l),
                  y.stpP(l);
              }
            },
            function e(t) {
              (Nt = !0), (jt || Lt) && ir(!0);
            },
            function e(t) {
              (Nt = !1), (jt || Lt) && ir(!1);
            },
          ]
        ),
        Li(a.cn, wn, function e(t) {
          y.stpP(t);
        }),
        D &&
          Li(a.cn, $n, function (t) {
            t.target === a.cn[0] && (rr(e), or(e));
          });
    }
    function nr(e, t, n) {
      var i = e ? ke : Se;
      Er(pe, e ? Nn : Pn, !t), Er(i, ui, !n);
    }
    function ir(e, t) {
      if ((clearTimeout($t), e)) Tr(ke, ci), Tr(Se, ci);
      else {
        var n,
          i = function () {
            Nt ||
              H ||
              (!(n = Ee.hasClass("active") || Ae.hasClass("active")) &&
                (jt || Lt || Dt) &&
                kr(ke, ci),
              !n && (jt || Lt || Dt) && kr(Se, ci));
          };
        0 < Ot && !0 !== t ? ($t = setTimeout(i, Ot)) : i();
      }
    }
    function rr(e) {
      var t = {},
        n = sr(e),
        i = n.vn,
        r = A.min(1, Wt[n.j] / He[n.j]);
      (t[n.K] = A.floor(100 * r * 1e6) / 1e6 + "%"),
        mr() || n.ln.css(t),
        (i.M = n.ln[0]["offset" + n.hn]),
        (i.D = r);
    }
    function or(e, t) {
      var i,
        r,
        o = p(t) == f,
        a = ee && e,
        s = sr(e),
        l = s.vn,
        u = "translate(",
        c = m.v("transform"),
        d = m.v("transition"),
        h = e ? ye[yn]() : ye[bn](),
        g = t === n || o ? h : t,
        y = l.M,
        b = s.sn[0]["offset" + s.hn],
        w = b - y,
        _ = {},
        x = (qe[un + s.hn] - qe["client" + s.hn]) * (T.n && a ? -1 : 1),
        C = function (e) {
          return isNaN(e / x) ? 0 : A.max(0, A.min(1, e / x));
        },
        k = function (e) {
          var t = w * e;
          return (
            (t = isNaN(t) ? 0 : t),
            (t = a && !T.i ? b - y - t : t),
            (t = A.max(0, t))
          );
        },
        E = C(h),
        S = k(C(g)),
        $ = k(E);
      (l.N = x),
        (l.L = h),
        (l.R = E),
        N
          ? ((i = a ? -(b - y - S) : S),
            (r = e ? u + i + "px, 0)" : u + "0, " + i + "px)"),
            (_[c] = r),
            D &&
              (_[d] =
                o && 1 < A.abs(S - l.W)
                  ? (function e(t) {
                      var n = m.v("transition"),
                        i = t.css(n);
                      if (i) return i;
                      for (
                        var r,
                          o,
                          a,
                          s = "\\s*(([^,(]+(\\(.+?\\))?)+)[\\s,]*",
                          l = new RegExp(s),
                          u = new RegExp("^(" + s + ")+$"),
                          c = "property duration timing-function delay".split(
                            " "
                          ),
                          f = [],
                          d = 0,
                          h = function (e) {
                            if (((r = []), !e.match(u))) return e;
                            for (; e.match(l); )
                              r.push(RegExp.$1), (e = e.replace(l, an));
                            return r;
                          };
                        d < c[v.l];
                        d++
                      )
                        for (
                          o = h(t.css(n + "-" + c[d])), a = 0;
                          a < o[v.l];
                          a++
                        )
                          f[a] = (f[a] ? f[a] + pn : an) + o[a];
                      return f.join(", ");
                    })(s.ln) +
                    ", " +
                    (c + pn + 250) +
                    "ms"
                  : an))
          : (_[s.B] = S),
        mr() ||
          (s.ln.css(_),
          N &&
            D &&
            o &&
            s.ln.one($n, function () {
              H || s.ln.css(d, an);
            })),
        (l.W = S),
        (l.P = $),
        (l.F = b);
    }
    function ar(e, t) {
      var n = t ? "removeClass" : "addClass",
        i = e ? $e : Ae,
        r = e ? ai : li;
      (e ? Te : Ee)[n](r), i[n](r);
    }
    function sr(e) {
      return {
        K: e ? nn : rn,
        hn: e ? "Width" : "Height",
        B: e ? Zt : Yt,
        J: e ? "Left" : "Top",
        Q: e ? fn : dn,
        Z: e ? "X" : "Y",
        j: e ? "w" : "h",
        dn: e ? "l" : "t",
        sn: e ? Te : $e,
        ln: e ? Ee : Ae,
        cn: e ? ke : Se,
        vn: e ? Ut : Bt,
      };
    }
    function lr(e) {
      (Ce = Ce || br(fi, !0)),
        e ? (W && M ? Tr(Ce.removeAttr(v.s), wi) : Sr(Ce)) : W || pe.append(Ce);
    }
    function ur(e, t, n) {
      if (!1 !== n)
        if (M) {
          var i,
            r = re.callbacks[e],
            o = e;
          "on" === o.substr(0, 2) &&
            (o = o.substr(2, 1).toLowerCase() + o.substr(3)),
            p(r) == l && r.call(w, t),
            b(Ci, function () {
              p((i = this).on) == l && i.on(o, t);
            });
        } else H || _i.push({ n: e, a: t });
    }
    function cr(e, t, n) {
      (n = n || [an, an, an, an]),
        (e[(t = t || an) + Yt] = n[0]),
        (e[t + Gt] = n[1]),
        (e[t + Jt] = n[2]),
        (e[t + Zt] = n[3]);
    }
    function fr(e, t, n, i) {
      return (
        (t = t || an),
        (e = e || an),
        {
          t: i ? 0 : vr(pe.css(e + Yt + t)),
          r: n ? 0 : vr(pe.css(e + Gt + t)),
          b: i ? 0 : vr(pe.css(e + Jt + t)),
          l: n ? 0 : vr(pe.css(e + Zt + t)),
        }
      );
    }
    function dr(e, t) {
      var n,
        i,
        r,
        o = function (e, t) {
          if (((r = ""), t && typeof e == c))
            for (i = e.split(pn), n = 0; n < i[v.l]; n++) r += "|" + i[n] + "$";
          return r;
        };
      return new RegExp("(^" + jn + "([-_].+|)$)" + o(pt, e) + o(vt, t), "g");
    }
    function hr() {
      var e = Pe[v.bCR]();
      return {
        x: (N && 1 / (A.round(e.width) / Pe[v.oW])) || 1,
        y: (N && 1 / (A.round(e.height) / Pe[v.oH])) || 1,
      };
    }
    function pr(t) {
      var n = "ownerDocument",
        i = "HTMLElement",
        r = (t && t[n] && t[n].parentWindow) || e;
      return typeof r[i] == s
        ? t instanceof r[i]
        : t &&
            typeof t == s &&
            null !== t &&
            1 === t.nodeType &&
            typeof t.nodeName == c;
    }
    function vr(e, t) {
      var n = t ? parseFloat(e) : parseInt(e, 10);
      return isNaN(n) ? 0 : n;
    }
    function mr() {
      return it && C.x && C.y;
    }
    function gr() {
      return F ? xe[0] : Re;
    }
    function yr(e, t) {
      return (
        "<div " +
        (e
          ? p(e) == c
            ? 'class="' + e + '"'
            : (function () {
                var t,
                  n = an;
                if (j.isPlainObject(e))
                  for (t in e)
                    n += ("c" === t ? "class" : t) + '="' + e[t] + '" ';
                return n;
              })()
          : an) +
        ">" +
        (t || an) +
        "</div>"
      );
    }
    function br(e, t) {
      var n = p(t) == f,
        i = (!n && t) || pe;
      return W && !i[v.l]
        ? null
        : W
        ? i[n ? "children" : "find"](hn + e.replace(/\s/g, hn)).eq(0)
        : j(yr(e));
    }
    function wr(e, t) {
      for (var n, i = t.split(hn), r = 0; r < i.length; r++) {
        if (!e[v.hOP](i[r])) return;
        (n = e[i[r]]), r < i.length && p(n) == s && (e = n);
      }
      return n;
    }
    function _r(e) {
      var t = re.updateOnLoad;
      (t = p(t) == c ? t.split(pn) : t), y.isA(t) && !H && b(t, e);
    }
    function xr(e, t, n) {
      if (n) return n;
      if (p(e) != s || p(t) != s) return e !== t;
      for (var i in e)
        if ("c" !== i) {
          if (!e[v.hOP](i) || !t[v.hOP](i)) return !0;
          if (xr(e[i], t[i])) return !0;
        }
      return !1;
    }
    function Cr() {
      return j.extend.apply(this, [!0].concat([].slice.call(arguments)));
    }
    function kr(e, t) {
      return _.addClass.call(e, t);
    }
    function Tr(e, t) {
      return _.removeClass.call(e, t);
    }
    function Er(e, t, n) {
      return (n ? kr : Tr)(e, t);
    }
    function Sr(e) {
      return _.remove.call(e);
    }
    function $r(e, t) {
      return _.find.call(e, t).eq(0);
    }
  }
  return (
    O &&
      O.fn &&
      (O.fn.overlayScrollbars = function (e, t) {
        return O.isPlainObject(e)
          ? (O.each(this, function () {
              fe(this, e, t);
            }),
            this)
          : fe(this, e);
      }),
    fe
  );
});
(function () {
  "use strict";
  /**
   * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
   *
   * @codingstandard ftlabs-jsv2
   * @copyright The Financial Times Limited [All Rights Reserved]
   * @license MIT License (see LICENSE.txt)
   */ function e(t, i) {
    var r;
    i = i || {};
    this.trackingClick = false;
    this.trackingClickStart = 0;
    this.targetElement = null;
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.lastTouchIdentifier = 0;
    this.touchBoundary = i.touchBoundary || 10;
    this.layer = t;
    this.tapDelay = i.tapDelay || 200;
    this.tapTimeout = i.tapTimeout || 700;
    if (e.notNeeded(t)) {
      return;
    }
    function o(e, t) {
      return function () {
        return e.apply(t, arguments);
      };
    }
    var a = [
      "onMouse",
      "onClick",
      "onTouchStart",
      "onTouchMove",
      "onTouchEnd",
      "onTouchCancel",
    ];
    var s = this;
    for (var l = 0, u = a.length; l < u; l++) {
      s[a[l]] = o(s[a[l]], s);
    }
    if (n) {
      t.addEventListener("mouseover", this.onMouse, true);
      t.addEventListener("mousedown", this.onMouse, true);
      t.addEventListener("mouseup", this.onMouse, true);
    }
    t.addEventListener("click", this.onClick, true);
    t.addEventListener("touchstart", this.onTouchStart, false);
    t.addEventListener("touchmove", this.onTouchMove, false);
    t.addEventListener("touchend", this.onTouchEnd, false);
    t.addEventListener("touchcancel", this.onTouchCancel, false);
    if (!Event.prototype.stopImmediatePropagation) {
      t.removeEventListener = function (e, n, i) {
        var r = Node.prototype.removeEventListener;
        if (e === "click") {
          r.call(t, e, n.hijacked || n, i);
        } else {
          r.call(t, e, n, i);
        }
      };
      t.addEventListener = function (e, n, i) {
        var r = Node.prototype.addEventListener;
        if (e === "click") {
          r.call(
            t,
            e,
            n.hijacked ||
              (n.hijacked = function (e) {
                if (!e.propagationStopped) {
                  n(e);
                }
              }),
            i
          );
        } else {
          r.call(t, e, n, i);
        }
      };
    }
    if (typeof t.onclick === "function") {
      r = t.onclick;
      t.addEventListener(
        "click",
        function (e) {
          r(e);
        },
        false
      );
      t.onclick = null;
    }
  }
  var t = navigator.userAgent.indexOf("Windows Phone") >= 0;
  var n = navigator.userAgent.indexOf("Android") > 0 && !t;
  var i = /iP(ad|hone|od)/.test(navigator.userAgent) && !t;
  var r = i && /OS 4_\d(_\d)?/.test(navigator.userAgent);
  var o = i && /OS [6-7]_\d/.test(navigator.userAgent);
  var a = navigator.userAgent.indexOf("BB10") > 0;
  e.prototype.needsClick = function (e) {
    switch (e.nodeName.toLowerCase()) {
      case "button":
      case "select":
      case "textarea":
        if (e.disabled) {
          return true;
        }
        break;
      case "input":
        if ((i && e.type === "file") || e.disabled) {
          return true;
        }
        break;
      case "label":
      case "iframe":
      case "video":
        return true;
    }
    return /\bneedsclick\b/.test(e.className);
  };
  e.prototype.needsFocus = function (e) {
    switch (e.nodeName.toLowerCase()) {
      case "textarea":
        return true;
      case "select":
        return !n;
      case "input":
        switch (e.type) {
          case "button":
          case "checkbox":
          case "file":
          case "image":
          case "radio":
          case "submit":
            return false;
        }
        return !e.disabled && !e.readOnly;
      default:
        return /\bneedsfocus\b/.test(e.className);
    }
  };
  e.prototype.sendClick = function (e, t) {
    var n, i;
    if (document.activeElement && document.activeElement !== e) {
      document.activeElement.blur();
    }
    i = t.changedTouches[0];
    n = document.createEvent("MouseEvents");
    n.initMouseEvent(
      this.determineEventType(e),
      true,
      true,
      window,
      1,
      i.screenX,
      i.screenY,
      i.clientX,
      i.clientY,
      false,
      false,
      false,
      false,
      0,
      null
    );
    n.forwardedTouchEvent = true;
    e.dispatchEvent(n);
  };
  e.prototype.determineEventType = function (e) {
    if (n && e.tagName.toLowerCase() === "select") {
      return "mousedown";
    }
    return "click";
  };
  e.prototype.focus = function (e) {
    var t;
    if (
      i &&
      e.setSelectionRange &&
      e.type.indexOf("date") !== 0 &&
      e.type !== "time" &&
      e.type !== "month"
    ) {
      t = e.value.length;
      e.setSelectionRange(t, t);
    } else {
      e.focus();
    }
  };
  e.prototype.updateScrollParent = function (e) {
    var t, n;
    t = e.fastClickScrollParent;
    if (!t || !t.contains(e)) {
      n = e;
      do {
        if (n.scrollHeight > n.offsetHeight) {
          t = n;
          e.fastClickScrollParent = n;
          break;
        }
        n = n.parentElement;
      } while (n);
    }
    if (t) {
      t.fastClickLastScrollTop = t.scrollTop;
    }
  };
  e.prototype.getTargetElementFromEventTarget = function (e) {
    if (e.nodeType === Node.TEXT_NODE) {
      return e.parentNode;
    }
    return e;
  };
  e.prototype.onTouchStart = function (e) {
    var t, n, o;
    if (e.targetTouches.length > 1) {
      return true;
    }
    t = this.getTargetElementFromEventTarget(e.target);
    n = e.targetTouches[0];
    if (i) {
      o = window.getSelection();
      if (o.rangeCount && !o.isCollapsed) {
        return true;
      }
      if (!r) {
        if (n.identifier && n.identifier === this.lastTouchIdentifier) {
          e.preventDefault();
          return false;
        }
        this.lastTouchIdentifier = n.identifier;
        this.updateScrollParent(t);
      }
    }
    this.trackingClick = true;
    this.trackingClickStart = e.timeStamp;
    this.targetElement = t;
    this.touchStartX = n.pageX;
    this.touchStartY = n.pageY;
    if (e.timeStamp - this.lastClickTime < this.tapDelay) {
      e.preventDefault();
    }
    return true;
  };
  e.prototype.touchHasMoved = function (e) {
    var t = e.changedTouches[0],
      n = this.touchBoundary;
    if (
      Math.abs(t.pageX - this.touchStartX) > n ||
      Math.abs(t.pageY - this.touchStartY) > n
    ) {
      return true;
    }
    return false;
  };
  e.prototype.onTouchMove = function (e) {
    if (!this.trackingClick) {
      return true;
    }
    if (
      this.targetElement !== this.getTargetElementFromEventTarget(e.target) ||
      this.touchHasMoved(e)
    ) {
      this.trackingClick = false;
      this.targetElement = null;
    }
    return true;
  };
  e.prototype.findControl = function (e) {
    if (e.control !== undefined) {
      return e.control;
    }
    if (e.htmlFor) {
      return document.getElementById(e.htmlFor);
    }
    return e.querySelector(
      "button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea"
    );
  };
  e.prototype.onTouchEnd = function (e) {
    var t,
      a,
      s,
      l,
      u,
      c = this.targetElement;
    if (!this.trackingClick) {
      return true;
    }
    if (e.timeStamp - this.lastClickTime < this.tapDelay) {
      this.cancelNextClick = true;
      return true;
    }
    if (e.timeStamp - this.trackingClickStart > this.tapTimeout) {
      return true;
    }
    this.cancelNextClick = false;
    this.lastClickTime = e.timeStamp;
    a = this.trackingClickStart;
    this.trackingClick = false;
    this.trackingClickStart = 0;
    if (o) {
      u = e.changedTouches[0];
      c =
        document.elementFromPoint(
          u.pageX - window.pageXOffset,
          u.pageY - window.pageYOffset
        ) || c;
      c.fastClickScrollParent = this.targetElement.fastClickScrollParent;
    }
    s = c.tagName.toLowerCase();
    if (s === "label") {
      t = this.findControl(c);
      if (t) {
        this.focus(c);
        if (n) {
          return false;
        }
        c = t;
      }
    } else if (this.needsFocus(c)) {
      if (
        e.timeStamp - a > 100 ||
        (i && window.top !== window && s === "input")
      ) {
        this.targetElement = null;
        return false;
      }
      this.focus(c);
      this.sendClick(c, e);
      if (!i || s !== "select") {
        this.targetElement = null;
        e.preventDefault();
      }
      return false;
    }
    if (i && !r) {
      l = c.fastClickScrollParent;
      if (l && l.fastClickLastScrollTop !== l.scrollTop) {
        return true;
      }
    }
    if (!this.needsClick(c)) {
      e.preventDefault();
      this.sendClick(c, e);
    }
    return false;
  };
  e.prototype.onTouchCancel = function () {
    this.trackingClick = false;
    this.targetElement = null;
  };
  e.prototype.onMouse = function (e) {
    if (!this.targetElement) {
      return true;
    }
    if (e.forwardedTouchEvent) {
      return true;
    }
    if (!e.cancelable) {
      return true;
    }
    if (!this.needsClick(this.targetElement) || this.cancelNextClick) {
      if (e.stopImmediatePropagation) {
        e.stopImmediatePropagation();
      } else {
        e.propagationStopped = true;
      }
      e.stopPropagation();
      e.preventDefault();
      return false;
    }
    return true;
  };
  e.prototype.onClick = function (e) {
    var t;
    if (this.trackingClick) {
      this.targetElement = null;
      this.trackingClick = false;
      return true;
    }
    if (e.target.type === "submit" && e.detail === 0) {
      return true;
    }
    t = this.onMouse(e);
    if (!t) {
      this.targetElement = null;
    }
    return t;
  };
  e.prototype.destroy = function () {
    var e = this.layer;
    if (n) {
      e.removeEventListener("mouseover", this.onMouse, true);
      e.removeEventListener("mousedown", this.onMouse, true);
      e.removeEventListener("mouseup", this.onMouse, true);
    }
    e.removeEventListener("click", this.onClick, true);
    e.removeEventListener("touchstart", this.onTouchStart, false);
    e.removeEventListener("touchmove", this.onTouchMove, false);
    e.removeEventListener("touchend", this.onTouchEnd, false);
    e.removeEventListener("touchcancel", this.onTouchCancel, false);
  };
  e.notNeeded = function (e) {
    var t;
    var i;
    var r;
    var o;
    if (typeof window.ontouchstart === "undefined") {
      return true;
    }
    i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];
    if (i) {
      if (n) {
        t = document.querySelector("meta[name=viewport]");
        if (t) {
          if (t.content.indexOf("user-scalable=no") !== -1) {
            return true;
          }
          if (
            i > 31 &&
            document.documentElement.scrollWidth <= window.outerWidth
          ) {
            return true;
          }
        }
      } else {
        return true;
      }
    }
    if (a) {
      r = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);
      if (r[1] >= 10 && r[2] >= 3) {
        t = document.querySelector("meta[name=viewport]");
        if (t) {
          if (t.content.indexOf("user-scalable=no") !== -1) {
            return true;
          }
          if (document.documentElement.scrollWidth <= window.outerWidth) {
            return true;
          }
        }
      }
    }
    if (
      e.style.msTouchAction === "none" ||
      e.style.touchAction === "manipulation"
    ) {
      return true;
    }
    o = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];
    if (o >= 27) {
      t = document.querySelector("meta[name=viewport]");
      if (
        t &&
        (t.content.indexOf("user-scalable=no") !== -1 ||
          document.documentElement.scrollWidth <= window.outerWidth)
      ) {
        return true;
      }
    }
    if (
      e.style.touchAction === "none" ||
      e.style.touchAction === "manipulation"
    ) {
      return true;
    }
    return false;
  };
  e.attach = function (t, n) {
    return new e(t, n);
  };
  if (
    typeof define === "function" &&
    typeof define.amd === "object" &&
    define.amd
  ) {
    define(function () {
      return e;
    });
  } else if (typeof module !== "undefined" && module.exports) {
    module.exports = e.attach;
    module.exports.FastClick = e;
  } else {
    window.FastClick = e;
  }
})();
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function (e, t) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = t())
    : typeof define === "function" && define.amd
    ? define(t)
    : (e.Popper = t());
})(this, function () {
  "use strict";
  var e =
    typeof window !== "undefined" &&
    typeof document !== "undefined" &&
    typeof navigator !== "undefined";
  var t = (function () {
    var t = ["Edge", "Trident", "Firefox"];
    for (var n = 0; n < t.length; n += 1) {
      if (e && navigator.userAgent.indexOf(t[n]) >= 0) {
        return 1;
      }
    }
    return 0;
  })();
  function n(e) {
    var t = false;
    return function () {
      if (t) {
        return;
      }
      t = true;
      window.Promise.resolve().then(function () {
        t = false;
        e();
      });
    };
  }
  function i(e) {
    var n = false;
    return function () {
      if (!n) {
        n = true;
        setTimeout(function () {
          n = false;
          e();
        }, t);
      }
    };
  }
  var r = e && window.Promise;
  var o = r ? n : i;
  function a(e) {
    var t = {};
    return e && t.toString.call(e) === "[object Function]";
  }
  function s(e, t) {
    if (e.nodeType !== 1) {
      return [];
    }
    var n = e.ownerDocument.defaultView;
    var i = n.getComputedStyle(e, null);
    return t ? i[t] : i;
  }
  function l(e) {
    if (e.nodeName === "HTML") {
      return e;
    }
    return e.parentNode || e.host;
  }
  function u(e) {
    if (!e) {
      return document.body;
    }
    switch (e.nodeName) {
      case "HTML":
      case "BODY":
        return e.ownerDocument.body;
      case "#document":
        return e.body;
    }
    var t = s(e),
      n = t.overflow,
      i = t.overflowX,
      r = t.overflowY;
    if (/(auto|scroll|overlay)/.test(n + r + i)) {
      return e;
    }
    return u(l(e));
  }
  function c(e) {
    return e && e.referenceNode ? e.referenceNode : e;
  }
  var f = e && !!(window.MSInputMethodContext && document.documentMode);
  var d = e && /MSIE 10/.test(navigator.userAgent);
  function h(e) {
    if (e === 11) {
      return f;
    }
    if (e === 10) {
      return d;
    }
    return f || d;
  }
  function p(e) {
    if (!e) {
      return document.documentElement;
    }
    var t = h(10) ? document.body : null;
    var n = e.offsetParent || null;
    while (n === t && e.nextElementSibling) {
      n = (e = e.nextElementSibling).offsetParent;
    }
    var i = n && n.nodeName;
    if (!i || i === "BODY" || i === "HTML") {
      return e ? e.ownerDocument.documentElement : document.documentElement;
    }
    if (
      ["TH", "TD", "TABLE"].indexOf(n.nodeName) !== -1 &&
      s(n, "position") === "static"
    ) {
      return p(n);
    }
    return n;
  }
  function v(e) {
    var t = e.nodeName;
    if (t === "BODY") {
      return false;
    }
    return t === "HTML" || p(e.firstElementChild) === e;
  }
  function m(e) {
    if (e.parentNode !== null) {
      return m(e.parentNode);
    }
    return e;
  }
  function g(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType) {
      return document.documentElement;
    }
    var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING;
    var i = n ? e : t;
    var r = n ? t : e;
    var o = document.createRange();
    o.setStart(i, 0);
    o.setEnd(r, 0);
    var a = o.commonAncestorContainer;
    if ((e !== a && t !== a) || i.contains(r)) {
      if (v(a)) {
        return a;
      }
      return p(a);
    }
    var s = m(e);
    if (s.host) {
      return g(s.host, t);
    } else {
      return g(e, m(t).host);
    }
  }
  function y(e) {
    var t =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "top";
    var n = t === "top" ? "scrollTop" : "scrollLeft";
    var i = e.nodeName;
    if (i === "BODY" || i === "HTML") {
      var r = e.ownerDocument.documentElement;
      var o = e.ownerDocument.scrollingElement || r;
      return o[n];
    }
    return e[n];
  }
  function b(e, t) {
    var n =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var i = y(t, "top");
    var r = y(t, "left");
    var o = n ? -1 : 1;
    e.top += i * o;
    e.bottom += i * o;
    e.left += r * o;
    e.right += r * o;
    return e;
  }
  function w(e, t) {
    var n = t === "x" ? "Left" : "Top";
    var i = n === "Left" ? "Right" : "Bottom";
    return (
      parseFloat(e["border" + n + "Width"]) +
      parseFloat(e["border" + i + "Width"])
    );
  }
  function _(e, t, n, i) {
    return Math.max(
      t["offset" + e],
      t["scroll" + e],
      n["client" + e],
      n["offset" + e],
      n["scroll" + e],
      h(10)
        ? parseInt(n["offset" + e]) +
            parseInt(i["margin" + (e === "Height" ? "Top" : "Left")]) +
            parseInt(i["margin" + (e === "Height" ? "Bottom" : "Right")])
        : 0
    );
  }
  function x(e) {
    var t = e.body;
    var n = e.documentElement;
    var i = h(10) && getComputedStyle(n);
    return { height: _("Height", t, n, i), width: _("Width", t, n, i) };
  }
  var C = function (e, t) {
    if (!(e instanceof t)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  var k = (function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || false;
        i.configurable = true;
        if ("value" in i) i.writable = true;
        Object.defineProperty(e, i.key, i);
      }
    }
    return function (t, n, i) {
      if (n) e(t.prototype, n);
      if (i) e(t, i);
      return t;
    };
  })();
  var T = function (e, t, n) {
    if (t in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true,
      });
    } else {
      e[t] = n;
    }
    return e;
  };
  var E =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) {
          if (Object.prototype.hasOwnProperty.call(n, i)) {
            e[i] = n[i];
          }
        }
      }
      return e;
    };
  function S(e) {
    return E({}, e, { right: e.left + e.width, bottom: e.top + e.height });
  }
  function $(e) {
    var t = {};
    try {
      if (h(10)) {
        t = e.getBoundingClientRect();
        var n = y(e, "top");
        var i = y(e, "left");
        t.top += n;
        t.left += i;
        t.bottom += n;
        t.right += i;
      } else {
        t = e.getBoundingClientRect();
      }
    } catch (e) {}
    var r = {
      left: t.left,
      top: t.top,
      width: t.right - t.left,
      height: t.bottom - t.top,
    };
    var o = e.nodeName === "HTML" ? x(e.ownerDocument) : {};
    var a = o.width || e.clientWidth || r.width;
    var l = o.height || e.clientHeight || r.height;
    var u = e.offsetWidth - a;
    var c = e.offsetHeight - l;
    if (u || c) {
      var f = s(e);
      u -= w(f, "x");
      c -= w(f, "y");
      r.width -= u;
      r.height -= c;
    }
    return S(r);
  }
  function A(e, t) {
    var n =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var i = h(10);
    var r = t.nodeName === "HTML";
    var o = $(e);
    var a = $(t);
    var l = u(e);
    var c = s(t);
    var f = parseFloat(c.borderTopWidth);
    var d = parseFloat(c.borderLeftWidth);
    if (n && r) {
      a.top = Math.max(a.top, 0);
      a.left = Math.max(a.left, 0);
    }
    var p = S({
      top: o.top - a.top - f,
      left: o.left - a.left - d,
      width: o.width,
      height: o.height,
    });
    p.marginTop = 0;
    p.marginLeft = 0;
    if (!i && r) {
      var v = parseFloat(c.marginTop);
      var m = parseFloat(c.marginLeft);
      p.top -= f - v;
      p.bottom -= f - v;
      p.left -= d - m;
      p.right -= d - m;
      p.marginTop = v;
      p.marginLeft = m;
    }
    if (i && !n ? t.contains(l) : t === l && l.nodeName !== "BODY") {
      p = b(p, t);
    }
    return p;
  }
  function O(e) {
    var t =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var n = e.ownerDocument.documentElement;
    var i = A(e, n);
    var r = Math.max(n.clientWidth, window.innerWidth || 0);
    var o = Math.max(n.clientHeight, window.innerHeight || 0);
    var a = !t ? y(n) : 0;
    var s = !t ? y(n, "left") : 0;
    var l = {
      top: a - i.top + i.marginTop,
      left: s - i.left + i.marginLeft,
      width: r,
      height: o,
    };
    return S(l);
  }
  function I(e) {
    var t = e.nodeName;
    if (t === "BODY" || t === "HTML") {
      return false;
    }
    if (s(e, "position") === "fixed") {
      return true;
    }
    var n = l(e);
    if (!n) {
      return false;
    }
    return I(n);
  }
  function j(e) {
    if (!e || !e.parentElement || h()) {
      return document.documentElement;
    }
    var t = e.parentElement;
    while (t && s(t, "transform") === "none") {
      t = t.parentElement;
    }
    return t || document.documentElement;
  }
  function L(e, t, n, i) {
    var r =
      arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var o = { top: 0, left: 0 };
    var a = r ? j(e) : g(e, c(t));
    if (i === "viewport") {
      o = O(a, r);
    } else {
      var s = void 0;
      if (i === "scrollParent") {
        s = u(l(t));
        if (s.nodeName === "BODY") {
          s = e.ownerDocument.documentElement;
        }
      } else if (i === "window") {
        s = e.ownerDocument.documentElement;
      } else {
        s = i;
      }
      var f = A(s, a, r);
      if (s.nodeName === "HTML" && !I(a)) {
        var d = x(e.ownerDocument),
          h = d.height,
          p = d.width;
        o.top += f.top - f.marginTop;
        o.bottom = h + f.top;
        o.left += f.left - f.marginLeft;
        o.right = p + f.left;
      } else {
        o = f;
      }
    }
    n = n || 0;
    var v = typeof n === "number";
    o.left += v ? n : n.left || 0;
    o.top += v ? n : n.top || 0;
    o.right -= v ? n : n.right || 0;
    o.bottom -= v ? n : n.bottom || 0;
    return o;
  }
  function D(e) {
    var t = e.width,
      n = e.height;
    return t * n;
  }
  function N(e, t, n, i, r) {
    var o =
      arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    if (e.indexOf("auto") === -1) {
      return e;
    }
    var a = L(n, i, o, r);
    var s = {
      top: { width: a.width, height: t.top - a.top },
      right: { width: a.right - t.right, height: a.height },
      bottom: { width: a.width, height: a.bottom - t.bottom },
      left: { width: t.left - a.left, height: a.height },
    };
    var l = Object.keys(s)
      .map(function (e) {
        return E({ key: e }, s[e], { area: D(s[e]) });
      })
      .sort(function (e, t) {
        return t.area - e.area;
      });
    var u = l.filter(function (e) {
      var t = e.width,
        i = e.height;
      return t >= n.clientWidth && i >= n.clientHeight;
    });
    var c = u.length > 0 ? u[0].key : l[0].key;
    var f = e.split("-")[1];
    return c + (f ? "-" + f : "");
  }
  function P(e, t, n) {
    var i =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var r = i ? j(t) : g(t, c(n));
    return A(n, r, i);
  }
  function q(e) {
    var t = e.ownerDocument.defaultView;
    var n = t.getComputedStyle(e);
    var i = parseFloat(n.marginTop || 0) + parseFloat(n.marginBottom || 0);
    var r = parseFloat(n.marginLeft || 0) + parseFloat(n.marginRight || 0);
    var o = { width: e.offsetWidth + r, height: e.offsetHeight + i };
    return o;
  }
  function R(e) {
    var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }
  function M(e, t, n) {
    n = n.split("-")[0];
    var i = q(e);
    var r = { width: i.width, height: i.height };
    var o = ["right", "left"].indexOf(n) !== -1;
    var a = o ? "top" : "left";
    var s = o ? "left" : "top";
    var l = o ? "height" : "width";
    var u = !o ? "height" : "width";
    r[a] = t[a] + t[l] / 2 - i[l] / 2;
    if (n === s) {
      r[s] = t[s] - i[u];
    } else {
      r[s] = t[R(s)];
    }
    return r;
  }
  function H(e, t) {
    if (Array.prototype.find) {
      return e.find(t);
    }
    return e.filter(t)[0];
  }
  function F(e, t, n) {
    if (Array.prototype.findIndex) {
      return e.findIndex(function (e) {
        return e[t] === n;
      });
    }
    var i = H(e, function (e) {
      return e[t] === n;
    });
    return e.indexOf(i);
  }
  function U(e, t, n) {
    var i = n === undefined ? e : e.slice(0, F(e, "name", n));
    i.forEach(function (e) {
      if (e["function"]) {
        console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
      }
      var n = e["function"] || e.fn;
      if (e.enabled && a(n)) {
        t.offsets.popper = S(t.offsets.popper);
        t.offsets.reference = S(t.offsets.reference);
        t = n(t, e);
      }
    });
    return t;
  }
  function B() {
    if (this.state.isDestroyed) {
      return;
    }
    var e = {
      instance: this,
      styles: {},
      arrowStyles: {},
      attributes: {},
      flipped: false,
      offsets: {},
    };
    e.offsets.reference = P(
      this.state,
      this.popper,
      this.reference,
      this.options.positionFixed
    );
    e.placement = N(
      this.options.placement,
      e.offsets.reference,
      this.popper,
      this.reference,
      this.options.modifiers.flip.boundariesElement,
      this.options.modifiers.flip.padding
    );
    e.originalPlacement = e.placement;
    e.positionFixed = this.options.positionFixed;
    e.offsets.popper = M(this.popper, e.offsets.reference, e.placement);
    e.offsets.popper.position = this.options.positionFixed
      ? "fixed"
      : "absolute";
    e = U(this.modifiers, e);
    if (!this.state.isCreated) {
      this.state.isCreated = true;
      this.options.onCreate(e);
    } else {
      this.options.onUpdate(e);
    }
  }
  function W(e, t) {
    return e.some(function (e) {
      var n = e.name,
        i = e.enabled;
      return i && n === t;
    });
  }
  function z(e) {
    var t = [false, "ms", "Webkit", "Moz", "O"];
    var n = e.charAt(0).toUpperCase() + e.slice(1);
    for (var i = 0; i < t.length; i++) {
      var r = t[i];
      var o = r ? "" + r + n : e;
      if (typeof document.body.style[o] !== "undefined") {
        return o;
      }
    }
    return null;
  }
  function V() {
    this.state.isDestroyed = true;
    if (W(this.modifiers, "applyStyle")) {
      this.popper.removeAttribute("x-placement");
      this.popper.style.position = "";
      this.popper.style.top = "";
      this.popper.style.left = "";
      this.popper.style.right = "";
      this.popper.style.bottom = "";
      this.popper.style.willChange = "";
      this.popper.style[z("transform")] = "";
    }
    this.disableEventListeners();
    if (this.options.removeOnDestroy) {
      this.popper.parentNode.removeChild(this.popper);
    }
    return this;
  }
  function Q(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window;
  }
  function X(e, t, n, i) {
    var r = e.nodeName === "BODY";
    var o = r ? e.ownerDocument.defaultView : e;
    o.addEventListener(t, n, { passive: true });
    if (!r) {
      X(u(o.parentNode), t, n, i);
    }
    i.push(o);
  }
  function K(e, t, n, i) {
    n.updateBound = i;
    Q(e).addEventListener("resize", n.updateBound, { passive: true });
    var r = u(e);
    X(r, "scroll", n.updateBound, n.scrollParents);
    n.scrollElement = r;
    n.eventsEnabled = true;
    return n;
  }
  function Y() {
    if (!this.state.eventsEnabled) {
      this.state = K(
        this.reference,
        this.options,
        this.state,
        this.scheduleUpdate
      );
    }
  }
  function G(e, t) {
    Q(e).removeEventListener("resize", t.updateBound);
    t.scrollParents.forEach(function (e) {
      e.removeEventListener("scroll", t.updateBound);
    });
    t.updateBound = null;
    t.scrollParents = [];
    t.scrollElement = null;
    t.eventsEnabled = false;
    return t;
  }
  function J() {
    if (this.state.eventsEnabled) {
      cancelAnimationFrame(this.scheduleUpdate);
      this.state = G(this.reference, this.state);
    }
  }
  function Z(e) {
    return e !== "" && !isNaN(parseFloat(e)) && isFinite(e);
  }
  function ee(e, t) {
    Object.keys(t).forEach(function (n) {
      var i = "";
      if (
        ["width", "height", "top", "right", "bottom", "left"].indexOf(n) !==
          -1 &&
        Z(t[n])
      ) {
        i = "px";
      }
      e.style[n] = t[n] + i;
    });
  }
  function te(e, t) {
    Object.keys(t).forEach(function (n) {
      var i = t[n];
      if (i !== false) {
        e.setAttribute(n, t[n]);
      } else {
        e.removeAttribute(n);
      }
    });
  }
  function ne(e) {
    ee(e.instance.popper, e.styles);
    te(e.instance.popper, e.attributes);
    if (e.arrowElement && Object.keys(e.arrowStyles).length) {
      ee(e.arrowElement, e.arrowStyles);
    }
    return e;
  }
  function ie(e, t, n, i, r) {
    var o = P(r, t, e, n.positionFixed);
    var a = N(
      n.placement,
      o,
      t,
      e,
      n.modifiers.flip.boundariesElement,
      n.modifiers.flip.padding
    );
    t.setAttribute("x-placement", a);
    ee(t, { position: n.positionFixed ? "fixed" : "absolute" });
    return n;
  }
  function re(e, t) {
    var n = e.offsets,
      i = n.popper,
      r = n.reference;
    var o = Math.round,
      a = Math.floor;
    var s = function e(t) {
      return t;
    };
    var l = o(r.width);
    var u = o(i.width);
    var c = ["left", "right"].indexOf(e.placement) !== -1;
    var f = e.placement.indexOf("-") !== -1;
    var d = l % 2 === u % 2;
    var h = l % 2 === 1 && u % 2 === 1;
    var p = !t ? s : c || f || d ? o : a;
    var v = !t ? s : o;
    return {
      left: p(h && !f && t ? i.left - 1 : i.left),
      top: v(i.top),
      bottom: v(i.bottom),
      right: p(i.right),
    };
  }
  var oe = e && /Firefox/i.test(navigator.userAgent);
  function ae(e, t) {
    var n = t.x,
      i = t.y;
    var r = e.offsets.popper;
    var o = H(e.instance.modifiers, function (e) {
      return e.name === "applyStyle";
    }).gpuAcceleration;
    if (o !== undefined) {
      console.warn(
        "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
      );
    }
    var a = o !== undefined ? o : t.gpuAcceleration;
    var s = p(e.instance.popper);
    var l = $(s);
    var u = { position: r.position };
    var c = re(e, window.devicePixelRatio < 2 || !oe);
    var f = n === "bottom" ? "top" : "bottom";
    var d = i === "right" ? "left" : "right";
    var h = z("transform");
    var v = void 0,
      m = void 0;
    if (f === "bottom") {
      if (s.nodeName === "HTML") {
        m = -s.clientHeight + c.bottom;
      } else {
        m = -l.height + c.bottom;
      }
    } else {
      m = c.top;
    }
    if (d === "right") {
      if (s.nodeName === "HTML") {
        v = -s.clientWidth + c.right;
      } else {
        v = -l.width + c.right;
      }
    } else {
      v = c.left;
    }
    if (a && h) {
      u[h] = "translate3d(" + v + "px, " + m + "px, 0)";
      u[f] = 0;
      u[d] = 0;
      u.willChange = "transform";
    } else {
      var g = f === "bottom" ? -1 : 1;
      var y = d === "right" ? -1 : 1;
      u[f] = m * g;
      u[d] = v * y;
      u.willChange = f + ", " + d;
    }
    var b = { "x-placement": e.placement };
    e.attributes = E({}, b, e.attributes);
    e.styles = E({}, u, e.styles);
    e.arrowStyles = E({}, e.offsets.arrow, e.arrowStyles);
    return e;
  }
  function se(e, t, n) {
    var i = H(e, function (e) {
      var n = e.name;
      return n === t;
    });
    var r =
      !!i &&
      e.some(function (e) {
        return e.name === n && e.enabled && e.order < i.order;
      });
    if (!r) {
      var o = "`" + t + "`";
      var a = "`" + n + "`";
      console.warn(
        a +
          " modifier is required by " +
          o +
          " modifier in order to work, be sure to include it before " +
          o +
          "!"
      );
    }
    return r;
  }
  function le(e, t) {
    var n;
    if (!se(e.instance.modifiers, "arrow", "keepTogether")) {
      return e;
    }
    var i = t.element;
    if (typeof i === "string") {
      i = e.instance.popper.querySelector(i);
      if (!i) {
        return e;
      }
    } else {
      if (!e.instance.popper.contains(i)) {
        console.warn(
          "WARNING: `arrow.element` must be child of its popper element!"
        );
        return e;
      }
    }
    var r = e.placement.split("-")[0];
    var o = e.offsets,
      a = o.popper,
      l = o.reference;
    var u = ["left", "right"].indexOf(r) !== -1;
    var c = u ? "height" : "width";
    var f = u ? "Top" : "Left";
    var d = f.toLowerCase();
    var h = u ? "left" : "top";
    var p = u ? "bottom" : "right";
    var v = q(i)[c];
    if (l[p] - v < a[d]) {
      e.offsets.popper[d] -= a[d] - (l[p] - v);
    }
    if (l[d] + v > a[p]) {
      e.offsets.popper[d] += l[d] + v - a[p];
    }
    e.offsets.popper = S(e.offsets.popper);
    var m = l[d] + l[c] / 2 - v / 2;
    var g = s(e.instance.popper);
    var y = parseFloat(g["margin" + f]);
    var b = parseFloat(g["border" + f + "Width"]);
    var w = m - e.offsets.popper[d] - y - b;
    w = Math.max(Math.min(a[c] - v, w), 0);
    e.arrowElement = i;
    e.offsets.arrow = ((n = {}), T(n, d, Math.round(w)), T(n, h, ""), n);
    return e;
  }
  function ue(e) {
    if (e === "end") {
      return "start";
    } else if (e === "start") {
      return "end";
    }
    return e;
  }
  var ce = [
    "auto-start",
    "auto",
    "auto-end",
    "top-start",
    "top",
    "top-end",
    "right-start",
    "right",
    "right-end",
    "bottom-end",
    "bottom",
    "bottom-start",
    "left-end",
    "left",
    "left-start",
  ];
  var fe = ce.slice(3);
  function de(e) {
    var t =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var n = fe.indexOf(e);
    var i = fe.slice(n + 1).concat(fe.slice(0, n));
    return t ? i.reverse() : i;
  }
  var he = {
    FLIP: "flip",
    CLOCKWISE: "clockwise",
    COUNTERCLOCKWISE: "counterclockwise",
  };
  function pe(e, t) {
    if (W(e.instance.modifiers, "inner")) {
      return e;
    }
    if (e.flipped && e.placement === e.originalPlacement) {
      return e;
    }
    var n = L(
      e.instance.popper,
      e.instance.reference,
      t.padding,
      t.boundariesElement,
      e.positionFixed
    );
    var i = e.placement.split("-")[0];
    var r = R(i);
    var o = e.placement.split("-")[1] || "";
    var a = [];
    switch (t.behavior) {
      case he.FLIP:
        a = [i, r];
        break;
      case he.CLOCKWISE:
        a = de(i);
        break;
      case he.COUNTERCLOCKWISE:
        a = de(i, true);
        break;
      default:
        a = t.behavior;
    }
    a.forEach(function (s, l) {
      if (i !== s || a.length === l + 1) {
        return e;
      }
      i = e.placement.split("-")[0];
      r = R(i);
      var u = e.offsets.popper;
      var c = e.offsets.reference;
      var f = Math.floor;
      var d =
        (i === "left" && f(u.right) > f(c.left)) ||
        (i === "right" && f(u.left) < f(c.right)) ||
        (i === "top" && f(u.bottom) > f(c.top)) ||
        (i === "bottom" && f(u.top) < f(c.bottom));
      var h = f(u.left) < f(n.left);
      var p = f(u.right) > f(n.right);
      var v = f(u.top) < f(n.top);
      var m = f(u.bottom) > f(n.bottom);
      var g =
        (i === "left" && h) ||
        (i === "right" && p) ||
        (i === "top" && v) ||
        (i === "bottom" && m);
      var y = ["top", "bottom"].indexOf(i) !== -1;
      var b =
        !!t.flipVariations &&
        ((y && o === "start" && h) ||
          (y && o === "end" && p) ||
          (!y && o === "start" && v) ||
          (!y && o === "end" && m));
      var w =
        !!t.flipVariationsByContent &&
        ((y && o === "start" && p) ||
          (y && o === "end" && h) ||
          (!y && o === "start" && m) ||
          (!y && o === "end" && v));
      var _ = b || w;
      if (d || g || _) {
        e.flipped = true;
        if (d || g) {
          i = a[l + 1];
        }
        if (_) {
          o = ue(o);
        }
        e.placement = i + (o ? "-" + o : "");
        e.offsets.popper = E(
          {},
          e.offsets.popper,
          M(e.instance.popper, e.offsets.reference, e.placement)
        );
        e = U(e.instance.modifiers, e, "flip");
      }
    });
    return e;
  }
  function ve(e) {
    var t = e.offsets,
      n = t.popper,
      i = t.reference;
    var r = e.placement.split("-")[0];
    var o = Math.floor;
    var a = ["top", "bottom"].indexOf(r) !== -1;
    var s = a ? "right" : "bottom";
    var l = a ? "left" : "top";
    var u = a ? "width" : "height";
    if (n[s] < o(i[l])) {
      e.offsets.popper[l] = o(i[l]) - n[u];
    }
    if (n[l] > o(i[s])) {
      e.offsets.popper[l] = o(i[s]);
    }
    return e;
  }
  function me(e, t, n, i) {
    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
    var o = +r[1];
    var a = r[2];
    if (!o) {
      return e;
    }
    if (a.indexOf("%") === 0) {
      var s = void 0;
      switch (a) {
        case "%p":
          s = n;
          break;
        case "%":
        case "%r":
        default:
          s = i;
      }
      var l = S(s);
      return (l[t] / 100) * o;
    } else if (a === "vh" || a === "vw") {
      var u = void 0;
      if (a === "vh") {
        u = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        );
      } else {
        u = Math.max(
          document.documentElement.clientWidth,
          window.innerWidth || 0
        );
      }
      return (u / 100) * o;
    } else {
      return o;
    }
  }
  function ge(e, t, n, i) {
    var r = [0, 0];
    var o = ["right", "left"].indexOf(i) !== -1;
    var a = e.split(/(\+|\-)/).map(function (e) {
      return e.trim();
    });
    var s = a.indexOf(
      H(a, function (e) {
        return e.search(/,|\s/) !== -1;
      })
    );
    if (a[s] && a[s].indexOf(",") === -1) {
      console.warn(
        "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
      );
    }
    var l = /\s*,\s*|\s+/;
    var u =
      s !== -1
        ? [
            a.slice(0, s).concat([a[s].split(l)[0]]),
            [a[s].split(l)[1]].concat(a.slice(s + 1)),
          ]
        : [a];
    u = u.map(function (e, i) {
      var r = (i === 1 ? !o : o) ? "height" : "width";
      var a = false;
      return e
        .reduce(function (e, t) {
          if (e[e.length - 1] === "" && ["+", "-"].indexOf(t) !== -1) {
            e[e.length - 1] = t;
            a = true;
            return e;
          } else if (a) {
            e[e.length - 1] += t;
            a = false;
            return e;
          } else {
            return e.concat(t);
          }
        }, [])
        .map(function (e) {
          return me(e, r, t, n);
        });
    });
    u.forEach(function (e, t) {
      e.forEach(function (n, i) {
        if (Z(n)) {
          r[t] += n * (e[i - 1] === "-" ? -1 : 1);
        }
      });
    });
    return r;
  }
  function ye(e, t) {
    var n = t.offset;
    var i = e.placement,
      r = e.offsets,
      o = r.popper,
      a = r.reference;
    var s = i.split("-")[0];
    var l = void 0;
    if (Z(+n)) {
      l = [+n, 0];
    } else {
      l = ge(n, o, a, s);
    }
    if (s === "left") {
      o.top += l[0];
      o.left -= l[1];
    } else if (s === "right") {
      o.top += l[0];
      o.left += l[1];
    } else if (s === "top") {
      o.left += l[0];
      o.top -= l[1];
    } else if (s === "bottom") {
      o.left += l[0];
      o.top += l[1];
    }
    e.popper = o;
    return e;
  }
  function be(e, t) {
    var n = t.boundariesElement || p(e.instance.popper);
    if (e.instance.reference === n) {
      n = p(n);
    }
    var i = z("transform");
    var r = e.instance.popper.style;
    var o = r.top,
      a = r.left,
      s = r[i];
    r.top = "";
    r.left = "";
    r[i] = "";
    var l = L(
      e.instance.popper,
      e.instance.reference,
      t.padding,
      n,
      e.positionFixed
    );
    r.top = o;
    r.left = a;
    r[i] = s;
    t.boundaries = l;
    var u = t.priority;
    var c = e.offsets.popper;
    var f = {
      primary: function e(n) {
        var i = c[n];
        if (c[n] < l[n] && !t.escapeWithReference) {
          i = Math.max(c[n], l[n]);
        }
        return T({}, n, i);
      },
      secondary: function e(n) {
        var i = n === "right" ? "left" : "top";
        var r = c[i];
        if (c[n] > l[n] && !t.escapeWithReference) {
          r = Math.min(c[i], l[n] - (n === "right" ? c.width : c.height));
        }
        return T({}, i, r);
      },
    };
    u.forEach(function (e) {
      var t = ["left", "top"].indexOf(e) !== -1 ? "primary" : "secondary";
      c = E({}, c, f[t](e));
    });
    e.offsets.popper = c;
    return e;
  }
  function we(e) {
    var t = e.placement;
    var n = t.split("-")[0];
    var i = t.split("-")[1];
    if (i) {
      var r = e.offsets,
        o = r.reference,
        a = r.popper;
      var s = ["bottom", "top"].indexOf(n) !== -1;
      var l = s ? "left" : "top";
      var u = s ? "width" : "height";
      var c = { start: T({}, l, o[l]), end: T({}, l, o[l] + o[u] - a[u]) };
      e.offsets.popper = E({}, a, c[i]);
    }
    return e;
  }
  function _e(e) {
    if (!se(e.instance.modifiers, "hide", "preventOverflow")) {
      return e;
    }
    var t = e.offsets.reference;
    var n = H(e.instance.modifiers, function (e) {
      return e.name === "preventOverflow";
    }).boundaries;
    if (
      t.bottom < n.top ||
      t.left > n.right ||
      t.top > n.bottom ||
      t.right < n.left
    ) {
      if (e.hide === true) {
        return e;
      }
      e.hide = true;
      e.attributes["x-out-of-boundaries"] = "";
    } else {
      if (e.hide === false) {
        return e;
      }
      e.hide = false;
      e.attributes["x-out-of-boundaries"] = false;
    }
    return e;
  }
  function xe(e) {
    var t = e.placement;
    var n = t.split("-")[0];
    var i = e.offsets,
      r = i.popper,
      o = i.reference;
    var a = ["left", "right"].indexOf(n) !== -1;
    var s = ["top", "left"].indexOf(n) === -1;
    r[a ? "left" : "top"] = o[n] - (s ? r[a ? "width" : "height"] : 0);
    e.placement = R(t);
    e.offsets.popper = S(r);
    return e;
  }
  var Ce = {
    shift: { order: 100, enabled: true, fn: we },
    offset: { order: 200, enabled: true, fn: ye, offset: 0 },
    preventOverflow: {
      order: 300,
      enabled: true,
      fn: be,
      priority: ["left", "right", "top", "bottom"],
      padding: 5,
      boundariesElement: "scrollParent",
    },
    keepTogether: { order: 400, enabled: true, fn: ve },
    arrow: { order: 500, enabled: true, fn: le, element: "[x-arrow]" },
    flip: {
      order: 600,
      enabled: true,
      fn: pe,
      behavior: "flip",
      padding: 5,
      boundariesElement: "viewport",
      flipVariations: false,
      flipVariationsByContent: false,
    },
    inner: { order: 700, enabled: false, fn: xe },
    hide: { order: 800, enabled: true, fn: _e },
    computeStyle: {
      order: 850,
      enabled: true,
      fn: ae,
      gpuAcceleration: true,
      x: "bottom",
      y: "right",
    },
    applyStyle: {
      order: 900,
      enabled: true,
      fn: ne,
      onLoad: ie,
      gpuAcceleration: undefined,
    },
  };
  var ke = {
    placement: "bottom",
    positionFixed: false,
    eventsEnabled: true,
    removeOnDestroy: false,
    onCreate: function e() {},
    onUpdate: function e() {},
    modifiers: Ce,
  };
  var Te = (function () {
    function e(t, n) {
      var i = this;
      var r =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      C(this, e);
      this.scheduleUpdate = function () {
        return requestAnimationFrame(i.update);
      };
      this.update = o(this.update.bind(this));
      this.options = E({}, e.Defaults, r);
      this.state = { isDestroyed: false, isCreated: false, scrollParents: [] };
      this.reference = t && t.jquery ? t[0] : t;
      this.popper = n && n.jquery ? n[0] : n;
      this.options.modifiers = {};
      Object.keys(E({}, e.Defaults.modifiers, r.modifiers)).forEach(function (
        t
      ) {
        i.options.modifiers[t] = E(
          {},
          e.Defaults.modifiers[t] || {},
          r.modifiers ? r.modifiers[t] : {}
        );
      });
      this.modifiers = Object.keys(this.options.modifiers)
        .map(function (e) {
          return E({ name: e }, i.options.modifiers[e]);
        })
        .sort(function (e, t) {
          return e.order - t.order;
        });
      this.modifiers.forEach(function (e) {
        if (e.enabled && a(e.onLoad)) {
          e.onLoad(i.reference, i.popper, i.options, e, i.state);
        }
      });
      this.update();
      var s = this.options.eventsEnabled;
      if (s) {
        this.enableEventListeners();
      }
      this.state.eventsEnabled = s;
    }
    k(e, [
      {
        key: "update",
        value: function e() {
          return B.call(this);
        },
      },
      {
        key: "destroy",
        value: function e() {
          return V.call(this);
        },
      },
      {
        key: "enableEventListeners",
        value: function e() {
          return Y.call(this);
        },
      },
      {
        key: "disableEventListeners",
        value: function e() {
          return J.call(this);
        },
      },
    ]);
    return e;
  })();
  Te.Utils = (typeof window !== "undefined" ? window : global).PopperUtils;
  Te.placements = ce;
  Te.Defaults = ke;
  return Te;
});
/*!
 * Bootstrap util.js v4.6.1 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
(function (e, t) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = t(require("jquery")))
    : typeof define === "function" && define.amd
    ? define(["jquery"], t)
    : ((e = typeof globalThis !== "undefined" ? globalThis : e || self),
      (e.Util = t(e.jQuery)));
})(this, function (e) {
  "use strict";
  function t(e) {
    return e && typeof e === "object" && "default" in e ? e : { default: e };
  }
  var n = t(e);
  var i = "transitionend";
  var r = 1e6;
  var o = 1e3;
  function a(e) {
    if (e === null || typeof e === "undefined") {
      return "" + e;
    }
    return {}.toString
      .call(e)
      .match(/\s([a-z]+)/i)[1]
      .toLowerCase();
  }
  function s() {
    return {
      bindType: i,
      delegateType: i,
      handle: function e(t) {
        if (n["default"](t.target).is(this)) {
          return t.handleObj.handler.apply(this, arguments);
        }
        return undefined;
      },
    };
  }
  function l(e) {
    var t = this;
    var i = false;
    n["default"](this).one(c.TRANSITION_END, function () {
      i = true;
    });
    setTimeout(function () {
      if (!i) {
        c.triggerTransitionEnd(t);
      }
    }, e);
    return this;
  }
  function u() {
    n["default"].fn.emulateTransitionEnd = l;
    n["default"].event.special[c.TRANSITION_END] = s();
  }
  var c = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function e(t) {
      do {
        t += ~~(Math.random() * r);
      } while (document.getElementById(t));
      return t;
    },
    getSelectorFromElement: function e(t) {
      var n = t.getAttribute("data-target");
      if (!n || n === "#") {
        var i = t.getAttribute("href");
        n = i && i !== "#" ? i.trim() : "";
      }
      try {
        return document.querySelector(n) ? n : null;
      } catch (e) {
        return null;
      }
    },
    getTransitionDurationFromElement: function e(t) {
      if (!t) {
        return 0;
      }
      var i = n["default"](t).css("transition-duration");
      var r = n["default"](t).css("transition-delay");
      var a = parseFloat(i);
      var s = parseFloat(r);
      if (!a && !s) {
        return 0;
      }
      i = i.split(",")[0];
      r = r.split(",")[0];
      return (parseFloat(i) + parseFloat(r)) * o;
    },
    reflow: function e(t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function e(t) {
      n["default"](t).trigger(i);
    },
    supportsTransitionEnd: function e() {
      return Boolean(i);
    },
    isElement: function e(t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function e(t, n, i) {
      for (var r in i) {
        if (Object.prototype.hasOwnProperty.call(i, r)) {
          var o = i[r];
          var s = n[r];
          var l = s && c.isElement(s) ? "element" : a(s);
          if (!new RegExp(o).test(l)) {
            throw new Error(
              t.toUpperCase() +
                ": " +
                ('Option "' + r + '" provided type "' + l + '" ') +
                ('but expected type "' + o + '".')
            );
          }
        }
      }
    },
    findShadowRoot: function e(t) {
      if (!document.documentElement.attachShadow) {
        return null;
      }
      if (typeof t.getRootNode === "function") {
        var n = t.getRootNode();
        return n instanceof ShadowRoot ? n : null;
      }
      if (t instanceof ShadowRoot) {
        return t;
      }
      if (!t.parentNode) {
        return null;
      }
      return c.findShadowRoot(t.parentNode);
    },
    jQueryDetection: function e() {
      if (typeof n["default"] === "undefined") {
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      }
      var t = n["default"].fn.jquery.split(" ")[0].split(".");
      var i = 1;
      var r = 2;
      var o = 9;
      var a = 1;
      var s = 4;
      if (
        (t[0] < r && t[1] < o) ||
        (t[0] === i && t[1] === o && t[2] < a) ||
        t[0] >= s
      ) {
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        );
      }
    },
  };
  c.jQueryDetection();
  u();
  return c;
});
/*!
 * Bootstrap tab.js v4.6.1 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
(function (e, t) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = t(require("jquery"), require("./util.js")))
    : typeof define === "function" && define.amd
    ? define(["jquery", "./util"], t)
    : ((e = typeof globalThis !== "undefined" ? globalThis : e || self),
      (e.Tab = t(e.jQuery, e.Util)));
})(this, function (e, t) {
  "use strict";
  function n(e) {
    return e && typeof e === "object" && "default" in e ? e : { default: e };
  }
  var i = n(e);
  var r = n(t);
  function o(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || false;
      i.configurable = true;
      if ("value" in i) i.writable = true;
      Object.defineProperty(e, i.key, i);
    }
  }
  function a(e, t, n) {
    if (t) o(e.prototype, t);
    if (n) o(e, n);
    return e;
  }
  var s = "tab";
  var l = "4.6.1";
  var u = "bs.tab";
  var c = "." + u;
  var f = ".data-api";
  var d = i["default"].fn[s];
  var h = "dropdown-menu";
  var p = "active";
  var v = "disabled";
  var m = "fade";
  var g = "show";
  var y = "hide" + c;
  var b = "hidden" + c;
  var w = "show" + c;
  var _ = "shown" + c;
  var x = "click" + c + f;
  var C = ".dropdown";
  var k = ".nav, .list-group";
  var T = ".active";
  var E = "> li > .active";
  var S = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';
  var $ = ".dropdown-toggle";
  var A = "> .dropdown-menu .active";
  var O = (function () {
    function e(e) {
      this._element = e;
    }
    var t = e.prototype;
    t.show = function e() {
      var t = this;
      if (
        (this._element.parentNode &&
          this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
          i["default"](this._element).hasClass(p)) ||
        i["default"](this._element).hasClass(v)
      ) {
        return;
      }
      var n;
      var o;
      var a = i["default"](this._element).closest(k)[0];
      var s = r["default"].getSelectorFromElement(this._element);
      if (a) {
        var l = a.nodeName === "UL" || a.nodeName === "OL" ? E : T;
        o = i["default"].makeArray(i["default"](a).find(l));
        o = o[o.length - 1];
      }
      var u = i["default"].Event(y, { relatedTarget: this._element });
      var c = i["default"].Event(w, { relatedTarget: o });
      if (o) {
        i["default"](o).trigger(u);
      }
      i["default"](this._element).trigger(c);
      if (c.isDefaultPrevented() || u.isDefaultPrevented()) {
        return;
      }
      if (s) {
        n = document.querySelector(s);
      }
      this._activate(this._element, a);
      var f = function e() {
        var n = i["default"].Event(b, { relatedTarget: t._element });
        var r = i["default"].Event(_, { relatedTarget: o });
        i["default"](o).trigger(n);
        i["default"](t._element).trigger(r);
      };
      if (n) {
        this._activate(n, n.parentNode, f);
      } else {
        f();
      }
    };
    t.dispose = function e() {
      i["default"].removeData(this._element, u);
      this._element = null;
    };
    t._activate = function e(t, n, o) {
      var a = this;
      var s =
        n && (n.nodeName === "UL" || n.nodeName === "OL")
          ? i["default"](n).find(E)
          : i["default"](n).children(T);
      var l = s[0];
      var u = o && l && i["default"](l).hasClass(m);
      var c = function e() {
        return a._transitionComplete(t, l, o);
      };
      if (l && u) {
        var f = r["default"].getTransitionDurationFromElement(l);
        i["default"](l)
          .removeClass(g)
          .one(r["default"].TRANSITION_END, c)
          .emulateTransitionEnd(f);
      } else {
        c();
      }
    };
    t._transitionComplete = function e(t, n, o) {
      if (n) {
        i["default"](n).removeClass(p);
        var a = i["default"](n.parentNode).find(A)[0];
        if (a) {
          i["default"](a).removeClass(p);
        }
        if (n.getAttribute("role") === "tab") {
          n.setAttribute("aria-selected", false);
        }
      }
      i["default"](t).addClass(p);
      if (t.getAttribute("role") === "tab") {
        t.setAttribute("aria-selected", true);
      }
      r["default"].reflow(t);
      if (t.classList.contains(m)) {
        t.classList.add(g);
      }
      var s = t.parentNode;
      if (s && s.nodeName === "LI") {
        s = s.parentNode;
      }
      if (s && i["default"](s).hasClass(h)) {
        var l = i["default"](t).closest(C)[0];
        if (l) {
          var u = [].slice.call(l.querySelectorAll($));
          i["default"](u).addClass(p);
        }
        t.setAttribute("aria-expanded", true);
      }
      if (o) {
        o();
      }
    };
    e._jQueryInterface = function t(n) {
      return this.each(function () {
        var t = i["default"](this);
        var r = t.data(u);
        if (!r) {
          r = new e(this);
          t.data(u, r);
        }
        if (typeof n === "string") {
          if (typeof r[n] === "undefined") {
            throw new TypeError('No method named "' + n + '"');
          }
          r[n]();
        }
      });
    };
    a(e, null, [
      {
        key: "VERSION",
        get: function e() {
          return l;
        },
      },
    ]);
    return e;
  })();
  i["default"](document).on(x, S, function (e) {
    e.preventDefault();
    O._jQueryInterface.call(i["default"](this), "show");
  });
  i["default"].fn[s] = O._jQueryInterface;
  i["default"].fn[s].Constructor = O;
  i["default"].fn[s].noConflict = function () {
    i["default"].fn[s] = d;
    return O._jQueryInterface;
  };
  return O;
});
/*!
 * Bootstrap collapse.js v4.6.1 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
(function (e, t) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = t(require("jquery"), require("./util.js")))
    : typeof define === "function" && define.amd
    ? define(["jquery", "./util"], t)
    : ((e = typeof globalThis !== "undefined" ? globalThis : e || self),
      (e.Collapse = t(e.jQuery, e.Util)));
})(this, function (e, t) {
  "use strict";
  function n(e) {
    return e && typeof e === "object" && "default" in e ? e : { default: e };
  }
  var i = n(e);
  var r = n(t);
  function o(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || false;
      i.configurable = true;
      if ("value" in i) i.writable = true;
      Object.defineProperty(e, i.key, i);
    }
  }
  function a(e, t, n) {
    if (t) o(e.prototype, t);
    if (n) o(e, n);
    return e;
  }
  function s() {
    s =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var i in n) {
            if (Object.prototype.hasOwnProperty.call(n, i)) {
              e[i] = n[i];
            }
          }
        }
        return e;
      };
    return s.apply(this, arguments);
  }
  var l = "collapse";
  var u = "4.6.1";
  var c = "bs.collapse";
  var f = "." + c;
  var d = ".data-api";
  var h = i["default"].fn[l];
  var p = "show";
  var v = "collapse";
  var m = "collapsing";
  var g = "collapsed";
  var y = "width";
  var b = "height";
  var w = "show" + f;
  var _ = "shown" + f;
  var x = "hide" + f;
  var C = "hidden" + f;
  var k = "click" + f + d;
  var T = ".show, .collapsing";
  var E = '[data-toggle="collapse"]';
  var S = { toggle: true, parent: "" };
  var $ = { toggle: "boolean", parent: "(string|element)" };
  var A = (function () {
    function e(e, t) {
      this._isTransitioning = false;
      this._element = e;
      this._config = this._getConfig(t);
      this._triggerArray = [].slice.call(
        document.querySelectorAll(
          '[data-toggle="collapse"][href="#' +
            e.id +
            '"],' +
            ('[data-toggle="collapse"][data-target="#' + e.id + '"]')
        )
      );
      var n = [].slice.call(document.querySelectorAll(E));
      for (var i = 0, o = n.length; i < o; i++) {
        var a = n[i];
        var s = r["default"].getSelectorFromElement(a);
        var l = [].slice
          .call(document.querySelectorAll(s))
          .filter(function (t) {
            return t === e;
          });
        if (s !== null && l.length > 0) {
          this._selector = s;
          this._triggerArray.push(a);
        }
      }
      this._parent = this._config.parent ? this._getParent() : null;
      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }
      if (this._config.toggle) {
        this.toggle();
      }
    }
    var t = e.prototype;
    t.toggle = function e() {
      if (i["default"](this._element).hasClass(p)) {
        this.hide();
      } else {
        this.show();
      }
    };
    t.show = function t() {
      var n = this;
      if (this._isTransitioning || i["default"](this._element).hasClass(p)) {
        return;
      }
      var o;
      var a;
      if (this._parent) {
        o = [].slice
          .call(this._parent.querySelectorAll(T))
          .filter(function (e) {
            if (typeof n._config.parent === "string") {
              return e.getAttribute("data-parent") === n._config.parent;
            }
            return e.classList.contains(v);
          });
        if (o.length === 0) {
          o = null;
        }
      }
      if (o) {
        a = i["default"](o).not(this._selector).data(c);
        if (a && a._isTransitioning) {
          return;
        }
      }
      var s = i["default"].Event(w);
      i["default"](this._element).trigger(s);
      if (s.isDefaultPrevented()) {
        return;
      }
      if (o) {
        e._jQueryInterface.call(i["default"](o).not(this._selector), "hide");
        if (!a) {
          i["default"](o).data(c, null);
        }
      }
      var l = this._getDimension();
      i["default"](this._element).removeClass(v).addClass(m);
      this._element.style[l] = 0;
      if (this._triggerArray.length) {
        i["default"](this._triggerArray)
          .removeClass(g)
          .attr("aria-expanded", true);
      }
      this.setTransitioning(true);
      var u = function e() {
        i["default"](n._element)
          .removeClass(m)
          .addClass(v + " " + p);
        n._element.style[l] = "";
        n.setTransitioning(false);
        i["default"](n._element).trigger(_);
      };
      var f = l[0].toUpperCase() + l.slice(1);
      var d = "scroll" + f;
      var h = r["default"].getTransitionDurationFromElement(this._element);
      i["default"](this._element)
        .one(r["default"].TRANSITION_END, u)
        .emulateTransitionEnd(h);
      this._element.style[l] = this._element[d] + "px";
    };
    t.hide = function e() {
      var t = this;
      if (this._isTransitioning || !i["default"](this._element).hasClass(p)) {
        return;
      }
      var n = i["default"].Event(x);
      i["default"](this._element).trigger(n);
      if (n.isDefaultPrevented()) {
        return;
      }
      var o = this._getDimension();
      this._element.style[o] = this._element.getBoundingClientRect()[o] + "px";
      r["default"].reflow(this._element);
      i["default"](this._element)
        .addClass(m)
        .removeClass(v + " " + p);
      var a = this._triggerArray.length;
      if (a > 0) {
        for (var s = 0; s < a; s++) {
          var l = this._triggerArray[s];
          var u = r["default"].getSelectorFromElement(l);
          if (u !== null) {
            var c = i["default"]([].slice.call(document.querySelectorAll(u)));
            if (!c.hasClass(p)) {
              i["default"](l).addClass(g).attr("aria-expanded", false);
            }
          }
        }
      }
      this.setTransitioning(true);
      var f = function e() {
        t.setTransitioning(false);
        i["default"](t._element).removeClass(m).addClass(v).trigger(C);
      };
      this._element.style[o] = "";
      var d = r["default"].getTransitionDurationFromElement(this._element);
      i["default"](this._element)
        .one(r["default"].TRANSITION_END, f)
        .emulateTransitionEnd(d);
    };
    t.setTransitioning = function e(t) {
      this._isTransitioning = t;
    };
    t.dispose = function e() {
      i["default"].removeData(this._element, c);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    };
    t._getConfig = function e(t) {
      t = s({}, S, t);
      t.toggle = Boolean(t.toggle);
      r["default"].typeCheckConfig(l, t, $);
      return t;
    };
    t._getDimension = function e() {
      var t = i["default"](this._element).hasClass(y);
      return t ? y : b;
    };
    t._getParent = function t() {
      var n = this;
      var o;
      if (r["default"].isElement(this._config.parent)) {
        o = this._config.parent;
        if (typeof this._config.parent.jquery !== "undefined") {
          o = this._config.parent[0];
        }
      } else {
        o = document.querySelector(this._config.parent);
      }
      var a =
        '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
      var s = [].slice.call(o.querySelectorAll(a));
      i["default"](s).each(function (t, i) {
        n._addAriaAndCollapsedClass(e._getTargetFromElement(i), [i]);
      });
      return o;
    };
    t._addAriaAndCollapsedClass = function e(t, n) {
      var r = i["default"](t).hasClass(p);
      if (n.length) {
        i["default"](n).toggleClass(g, !r).attr("aria-expanded", r);
      }
    };
    e._getTargetFromElement = function e(t) {
      var n = r["default"].getSelectorFromElement(t);
      return n ? document.querySelector(n) : null;
    };
    e._jQueryInterface = function t(n) {
      return this.each(function () {
        var t = i["default"](this);
        var r = t.data(c);
        var o = s({}, S, t.data(), typeof n === "object" && n ? n : {});
        if (!r && o.toggle && typeof n === "string" && /show|hide/.test(n)) {
          o.toggle = false;
        }
        if (!r) {
          r = new e(this, o);
          t.data(c, r);
        }
        if (typeof n === "string") {
          if (typeof r[n] === "undefined") {
            throw new TypeError('No method named "' + n + '"');
          }
          r[n]();
        }
      });
    };
    a(e, null, [
      {
        key: "VERSION",
        get: function e() {
          return u;
        },
      },
      {
        key: "Default",
        get: function e() {
          return S;
        },
      },
    ]);
    return e;
  })();
  i["default"](document).on(k, E, function (e) {
    if (e.currentTarget.tagName === "A") {
      e.preventDefault();
    }
    var t = i["default"](this);
    var n = r["default"].getSelectorFromElement(this);
    var o = [].slice.call(document.querySelectorAll(n));
    i["default"](o).each(function () {
      var e = i["default"](this);
      var n = e.data(c);
      var r = n ? "toggle" : t.data();
      A._jQueryInterface.call(e, r);
    });
  });
  i["default"].fn[l] = A._jQueryInterface;
  i["default"].fn[l].Constructor = A;
  i["default"].fn[l].noConflict = function () {
    i["default"].fn[l] = h;
    return A._jQueryInterface;
  };
  return A;
});
/*!
 * Bootstrap dropdown.js v4.6.1 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
(function (e, t) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = t(
        require("jquery"),
        require("popper.js"),
        require("./util.js")
      ))
    : typeof define === "function" && define.amd
    ? define(["jquery", "popper.js", "./util"], t)
    : ((e = typeof globalThis !== "undefined" ? globalThis : e || self),
      (e.Dropdown = t(e.jQuery, e.Popper, e.Util)));
})(this, function (e, t, n) {
  "use strict";
  function i(e) {
    return e && typeof e === "object" && "default" in e ? e : { default: e };
  }
  var r = i(e);
  var o = i(t);
  var a = i(n);
  function s(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || false;
      i.configurable = true;
      if ("value" in i) i.writable = true;
      Object.defineProperty(e, i.key, i);
    }
  }
  function l(e, t, n) {
    if (t) s(e.prototype, t);
    if (n) s(e, n);
    return e;
  }
  function u() {
    u =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var i in n) {
            if (Object.prototype.hasOwnProperty.call(n, i)) {
              e[i] = n[i];
            }
          }
        }
        return e;
      };
    return u.apply(this, arguments);
  }
  var c = "dropdown";
  var f = "4.6.1";
  var d = "bs.dropdown";
  var h = "." + d;
  var p = ".data-api";
  var v = r["default"].fn[c];
  var m = 27;
  var g = 32;
  var y = 9;
  var b = 38;
  var w = 40;
  var _ = 3;
  var x = new RegExp(b + "|" + w + "|" + m);
  var C = "disabled";
  var k = "show";
  var T = "dropup";
  var E = "dropright";
  var S = "dropleft";
  var $ = "dropdown-menu-right";
  var A = "position-static";
  var O = "hide" + h;
  var I = "hidden" + h;
  var j = "show" + h;
  var L = "shown" + h;
  var D = "click" + h;
  var N = "click" + h + p;
  var P = "keydown" + h + p;
  var q = "keyup" + h + p;
  var R = '[data-toggle="dropdown"]';
  var M = ".dropdown form";
  var H = ".dropdown-menu";
  var F = ".navbar-nav";
  var U = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
  var B = "top-start";
  var W = "top-end";
  var z = "bottom-start";
  var V = "bottom-end";
  var Q = "right-start";
  var X = "left-start";
  var K = {
    offset: 0,
    flip: true,
    boundary: "scrollParent",
    reference: "toggle",
    display: "dynamic",
    popperConfig: null,
  };
  var Y = {
    offset: "(number|string|function)",
    flip: "boolean",
    boundary: "(string|element)",
    reference: "(string|element)",
    display: "string",
    popperConfig: "(null|object)",
  };
  var G = (function () {
    function e(e, t) {
      this._element = e;
      this._popper = null;
      this._config = this._getConfig(t);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();
      this._addEventListeners();
    }
    var t = e.prototype;
    t.toggle = function t() {
      if (this._element.disabled || r["default"](this._element).hasClass(C)) {
        return;
      }
      var n = r["default"](this._menu).hasClass(k);
      e._clearMenus();
      if (n) {
        return;
      }
      this.show(true);
    };
    t.show = function t(n) {
      if (n === void 0) {
        n = false;
      }
      if (
        this._element.disabled ||
        r["default"](this._element).hasClass(C) ||
        r["default"](this._menu).hasClass(k)
      ) {
        return;
      }
      var i = { relatedTarget: this._element };
      var s = r["default"].Event(j, i);
      var l = e._getParentFromElement(this._element);
      r["default"](l).trigger(s);
      if (s.isDefaultPrevented()) {
        return;
      }
      if (!this._inNavbar && n) {
        if (typeof o["default"] === "undefined") {
          throw new TypeError(
            "Bootstrap's dropdowns require Popper (https://popper.js.org)"
          );
        }
        var u = this._element;
        if (this._config.reference === "parent") {
          u = l;
        } else if (a["default"].isElement(this._config.reference)) {
          u = this._config.reference;
          if (typeof this._config.reference.jquery !== "undefined") {
            u = this._config.reference[0];
          }
        }
        if (this._config.boundary !== "scrollParent") {
          r["default"](l).addClass(A);
        }
        this._popper = new o["default"](u, this._menu, this._getPopperConfig());
      }
      if (
        "ontouchstart" in document.documentElement &&
        r["default"](l).closest(F).length === 0
      ) {
        r["default"](document.body)
          .children()
          .on("mouseover", null, r["default"].noop);
      }
      this._element.focus();
      this._element.setAttribute("aria-expanded", true);
      r["default"](this._menu).toggleClass(k);
      r["default"](l).toggleClass(k).trigger(r["default"].Event(L, i));
    };
    t.hide = function t() {
      if (
        this._element.disabled ||
        r["default"](this._element).hasClass(C) ||
        !r["default"](this._menu).hasClass(k)
      ) {
        return;
      }
      var n = { relatedTarget: this._element };
      var i = r["default"].Event(O, n);
      var o = e._getParentFromElement(this._element);
      r["default"](o).trigger(i);
      if (i.isDefaultPrevented()) {
        return;
      }
      if (this._popper) {
        this._popper.destroy();
      }
      r["default"](this._menu).toggleClass(k);
      r["default"](o).toggleClass(k).trigger(r["default"].Event(I, n));
    };
    t.dispose = function e() {
      r["default"].removeData(this._element, d);
      r["default"](this._element).off(h);
      this._element = null;
      this._menu = null;
      if (this._popper !== null) {
        this._popper.destroy();
        this._popper = null;
      }
    };
    t.update = function e() {
      this._inNavbar = this._detectNavbar();
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    };
    t._addEventListeners = function e() {
      var t = this;
      r["default"](this._element).on(D, function (e) {
        e.preventDefault();
        e.stopPropagation();
        t.toggle();
      });
    };
    t._getConfig = function e(t) {
      t = u(
        {},
        this.constructor.Default,
        r["default"](this._element).data(),
        t
      );
      a["default"].typeCheckConfig(c, t, this.constructor.DefaultType);
      return t;
    };
    t._getMenuElement = function t() {
      if (!this._menu) {
        var n = e._getParentFromElement(this._element);
        if (n) {
          this._menu = n.querySelector(H);
        }
      }
      return this._menu;
    };
    t._getPlacement = function e() {
      var t = r["default"](this._element.parentNode);
      var n = z;
      if (t.hasClass(T)) {
        n = r["default"](this._menu).hasClass($) ? W : B;
      } else if (t.hasClass(E)) {
        n = Q;
      } else if (t.hasClass(S)) {
        n = X;
      } else if (r["default"](this._menu).hasClass($)) {
        n = V;
      }
      return n;
    };
    t._detectNavbar = function e() {
      return r["default"](this._element).closest(".navbar").length > 0;
    };
    t._getOffset = function e() {
      var t = this;
      var n = {};
      if (typeof this._config.offset === "function") {
        n.fn = function (e) {
          e.offsets = u({}, e.offsets, t._config.offset(e.offsets, t._element));
          return e;
        };
      } else {
        n.offset = this._config.offset;
      }
      return n;
    };
    t._getPopperConfig = function e() {
      var t = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: { enabled: this._config.flip },
          preventOverflow: { boundariesElement: this._config.boundary },
        },
      };
      if (this._config.display === "static") {
        t.modifiers.applyStyle = { enabled: false };
      }
      return u({}, t, this._config.popperConfig);
    };
    e._jQueryInterface = function t(n) {
      return this.each(function () {
        var t = r["default"](this).data(d);
        var i = typeof n === "object" ? n : null;
        if (!t) {
          t = new e(this, i);
          r["default"](this).data(d, t);
        }
        if (typeof n === "string") {
          if (typeof t[n] === "undefined") {
            throw new TypeError('No method named "' + n + '"');
          }
          t[n]();
        }
      });
    };
    e._clearMenus = function t(n) {
      if (n && (n.which === _ || (n.type === "keyup" && n.which !== y))) {
        return;
      }
      var i = [].slice.call(document.querySelectorAll(R));
      for (var o = 0, a = i.length; o < a; o++) {
        var s = e._getParentFromElement(i[o]);
        var l = r["default"](i[o]).data(d);
        var u = { relatedTarget: i[o] };
        if (n && n.type === "click") {
          u.clickEvent = n;
        }
        if (!l) {
          continue;
        }
        var c = l._menu;
        if (!r["default"](s).hasClass(k)) {
          continue;
        }
        if (
          n &&
          ((n.type === "click" && /input|textarea/i.test(n.target.tagName)) ||
            (n.type === "keyup" && n.which === y)) &&
          r["default"].contains(s, n.target)
        ) {
          continue;
        }
        var f = r["default"].Event(O, u);
        r["default"](s).trigger(f);
        if (f.isDefaultPrevented()) {
          continue;
        }
        if ("ontouchstart" in document.documentElement) {
          r["default"](document.body)
            .children()
            .off("mouseover", null, r["default"].noop);
        }
        i[o].setAttribute("aria-expanded", "false");
        if (l._popper) {
          l._popper.destroy();
        }
        r["default"](c).removeClass(k);
        r["default"](s).removeClass(k).trigger(r["default"].Event(I, u));
      }
    };
    e._getParentFromElement = function e(t) {
      var n;
      var i = a["default"].getSelectorFromElement(t);
      if (i) {
        n = document.querySelector(i);
      }
      return n || t.parentNode;
    };
    e._dataApiKeydownHandler = function t(n) {
      if (
        /input|textarea/i.test(n.target.tagName)
          ? n.which === g ||
            (n.which !== m &&
              ((n.which !== w && n.which !== b) ||
                r["default"](n.target).closest(H).length))
          : !x.test(n.which)
      ) {
        return;
      }
      if (this.disabled || r["default"](this).hasClass(C)) {
        return;
      }
      var i = e._getParentFromElement(this);
      var o = r["default"](i).hasClass(k);
      if (!o && n.which === m) {
        return;
      }
      n.preventDefault();
      n.stopPropagation();
      if (!o || n.which === m || n.which === g) {
        if (n.which === m) {
          r["default"](i.querySelector(R)).trigger("focus");
        }
        r["default"](this).trigger("click");
        return;
      }
      var a = [].slice.call(i.querySelectorAll(U)).filter(function (e) {
        return r["default"](e).is(":visible");
      });
      if (a.length === 0) {
        return;
      }
      var s = a.indexOf(n.target);
      if (n.which === b && s > 0) {
        s--;
      }
      if (n.which === w && s < a.length - 1) {
        s++;
      }
      if (s < 0) {
        s = 0;
      }
      a[s].focus();
    };
    l(e, null, [
      {
        key: "VERSION",
        get: function e() {
          return f;
        },
      },
      {
        key: "Default",
        get: function e() {
          return K;
        },
      },
      {
        key: "DefaultType",
        get: function e() {
          return Y;
        },
      },
    ]);
    return e;
  })();
  r["default"](document)
    .on(P, R, G._dataApiKeydownHandler)
    .on(P, H, G._dataApiKeydownHandler)
    .on(N + " " + q, G._clearMenus)
    .on(N, R, function (e) {
      e.preventDefault();
      e.stopPropagation();
      G._jQueryInterface.call(r["default"](this), "toggle");
    })
    .on(N, M, function (e) {
      e.stopPropagation();
    });
  r["default"].fn[c] = G._jQueryInterface;
  r["default"].fn[c].Constructor = G;
  r["default"].fn[c].noConflict = function () {
    r["default"].fn[c] = v;
    return G._jQueryInterface;
  };
  return G;
});
/*!
 * Bootstrap scrollspy.js v4.6.1 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
(function (e, t) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = t(require("jquery"), require("./util.js")))
    : typeof define === "function" && define.amd
    ? define(["jquery", "./util"], t)
    : ((e = typeof globalThis !== "undefined" ? globalThis : e || self),
      (e.ScrollSpy = t(e.jQuery, e.Util)));
})(this, function (e, t) {
  "use strict";
  function n(e) {
    return e && typeof e === "object" && "default" in e ? e : { default: e };
  }
  var i = n(e);
  var r = n(t);
  function o(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || false;
      i.configurable = true;
      if ("value" in i) i.writable = true;
      Object.defineProperty(e, i.key, i);
    }
  }
  function a(e, t, n) {
    if (t) o(e.prototype, t);
    if (n) o(e, n);
    return e;
  }
  function s() {
    s =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var i in n) {
            if (Object.prototype.hasOwnProperty.call(n, i)) {
              e[i] = n[i];
            }
          }
        }
        return e;
      };
    return s.apply(this, arguments);
  }
  var l = "scrollspy";
  var u = "4.6.1";
  var c = "bs.scrollspy";
  var f = "." + c;
  var d = ".data-api";
  var h = i["default"].fn[l];
  var p = "dropdown-item";
  var v = "active";
  var m = "activate" + f;
  var g = "scroll" + f;
  var y = "load" + f + d;
  var b = "offset";
  var w = "position";
  var _ = '[data-spy="scroll"]';
  var x = ".nav, .list-group";
  var C = ".nav-link";
  var k = ".nav-item";
  var T = ".list-group-item";
  var E = ".dropdown";
  var S = ".dropdown-item";
  var $ = ".dropdown-toggle";
  var A = { offset: 10, method: "auto", target: "" };
  var O = { offset: "number", method: "string", target: "(string|element)" };
  var I = (function () {
    function e(e, t) {
      var n = this;
      this._element = e;
      this._scrollElement = e.tagName === "BODY" ? window : e;
      this._config = this._getConfig(t);
      this._selector =
        this._config.target +
        " " +
        C +
        "," +
        (this._config.target + " " + T + ",") +
        (this._config.target + " " + S);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      i["default"](this._scrollElement).on(g, function (e) {
        return n._process(e);
      });
      this.refresh();
      this._process();
    }
    var t = e.prototype;
    t.refresh = function e() {
      var t = this;
      var n = this._scrollElement === this._scrollElement.window ? b : w;
      var o = this._config.method === "auto" ? n : this._config.method;
      var a = o === w ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var s = [].slice.call(document.querySelectorAll(this._selector));
      s.map(function (e) {
        var t;
        var n = r["default"].getSelectorFromElement(e);
        if (n) {
          t = document.querySelector(n);
        }
        if (t) {
          var s = t.getBoundingClientRect();
          if (s.width || s.height) {
            return [i["default"](t)[o]().top + a, n];
          }
        }
        return null;
      })
        .filter(function (e) {
          return e;
        })
        .sort(function (e, t) {
          return e[0] - t[0];
        })
        .forEach(function (e) {
          t._offsets.push(e[0]);
          t._targets.push(e[1]);
        });
    };
    t.dispose = function e() {
      i["default"].removeData(this._element, c);
      i["default"](this._scrollElement).off(f);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    };
    t._getConfig = function e(t) {
      t = s({}, A, typeof t === "object" && t ? t : {});
      if (typeof t.target !== "string" && r["default"].isElement(t.target)) {
        var n = i["default"](t.target).attr("id");
        if (!n) {
          n = r["default"].getUID(l);
          i["default"](t.target).attr("id", n);
        }
        t.target = "#" + n;
      }
      r["default"].typeCheckConfig(l, t, O);
      return t;
    };
    t._getScrollTop = function e() {
      return this._scrollElement === window
        ? this._scrollElement.pageYOffset
        : this._scrollElement.scrollTop;
    };
    t._getScrollHeight = function e() {
      return (
        this._scrollElement.scrollHeight ||
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        )
      );
    };
    t._getOffsetHeight = function e() {
      return this._scrollElement === window
        ? window.innerHeight
        : this._scrollElement.getBoundingClientRect().height;
    };
    t._process = function e() {
      var t = this._getScrollTop() + this._config.offset;
      var n = this._getScrollHeight();
      var i = this._config.offset + n - this._getOffsetHeight();
      if (this._scrollHeight !== n) {
        this.refresh();
      }
      if (t >= i) {
        var r = this._targets[this._targets.length - 1];
        if (this._activeTarget !== r) {
          this._activate(r);
        }
        return;
      }
      if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;
        this._clear();
        return;
      }
      for (var o = this._offsets.length; o--; ) {
        var a =
          this._activeTarget !== this._targets[o] &&
          t >= this._offsets[o] &&
          (typeof this._offsets[o + 1] === "undefined" ||
            t < this._offsets[o + 1]);
        if (a) {
          this._activate(this._targets[o]);
        }
      }
    };
    t._activate = function e(t) {
      this._activeTarget = t;
      this._clear();
      var n = this._selector.split(",").map(function (e) {
        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
      });
      var r = i["default"](
        [].slice.call(document.querySelectorAll(n.join(",")))
      );
      if (r.hasClass(p)) {
        r.closest(E).find($).addClass(v);
        r.addClass(v);
      } else {
        r.addClass(v);
        r.parents(x)
          .prev(C + ", " + T)
          .addClass(v);
        r.parents(x).prev(k).children(C).addClass(v);
      }
      i["default"](this._scrollElement).trigger(m, { relatedTarget: t });
    };
    t._clear = function e() {
      [].slice
        .call(document.querySelectorAll(this._selector))
        .filter(function (e) {
          return e.classList.contains(v);
        })
        .forEach(function (e) {
          return e.classList.remove(v);
        });
    };
    e._jQueryInterface = function t(n) {
      return this.each(function () {
        var t = i["default"](this).data(c);
        var r = typeof n === "object" && n;
        if (!t) {
          t = new e(this, r);
          i["default"](this).data(c, t);
        }
        if (typeof n === "string") {
          if (typeof t[n] === "undefined") {
            throw new TypeError('No method named "' + n + '"');
          }
          t[n]();
        }
      });
    };
    a(e, null, [
      {
        key: "VERSION",
        get: function e() {
          return u;
        },
      },
      {
        key: "Default",
        get: function e() {
          return A;
        },
      },
    ]);
    return e;
  })();
  i["default"](window).on(y, function () {
    var e = [].slice.call(document.querySelectorAll(_));
    var t = e.length;
    for (var n = t; n--; ) {
      var r = i["default"](e[n]);
      I._jQueryInterface.call(r, r.data());
    }
  });
  i["default"].fn[l] = I._jQueryInterface;
  i["default"].fn[l].Constructor = I;
  i["default"].fn[l].noConflict = function () {
    i["default"].fn[l] = h;
    return I._jQueryInterface;
  };
  return I;
});
/*!
 * Bootstrap tooltip.js v4.6.1 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
(function (e, t) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = t(
        require("jquery"),
        require("popper.js"),
        require("./util.js")
      ))
    : typeof define === "function" && define.amd
    ? define(["jquery", "popper.js", "./util"], t)
    : ((e = typeof globalThis !== "undefined" ? globalThis : e || self),
      (e.Tooltip = t(e.jQuery, e.Popper, e.Util)));
})(this, function (e, t, n) {
  "use strict";
  function i(e) {
    return e && typeof e === "object" && "default" in e ? e : { default: e };
  }
  var r = i(e);
  var o = i(t);
  var a = i(n);
  function s(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || false;
      i.configurable = true;
      if ("value" in i) i.writable = true;
      Object.defineProperty(e, i.key, i);
    }
  }
  function l(e, t, n) {
    if (t) s(e.prototype, t);
    if (n) s(e, n);
    return e;
  }
  function u() {
    u =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var i in n) {
            if (Object.prototype.hasOwnProperty.call(n, i)) {
              e[i] = n[i];
            }
          }
        }
        return e;
      };
    return u.apply(this, arguments);
  }
  var c = [
    "background",
    "cite",
    "href",
    "itemtype",
    "longdesc",
    "poster",
    "src",
    "xlink:href",
  ];
  var f = /^aria-[\w-]*$/i;
  var d = {
    "*": ["class", "dir", "id", "lang", "role", f],
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
    ul: [],
  };
  var h = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
  var p =
    /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
  function v(e, t) {
    var n = e.nodeName.toLowerCase();
    if (t.indexOf(n) !== -1) {
      if (c.indexOf(n) !== -1) {
        return Boolean(h.test(e.nodeValue) || p.test(e.nodeValue));
      }
      return true;
    }
    var i = t.filter(function (e) {
      return e instanceof RegExp;
    });
    for (var r = 0, o = i.length; r < o; r++) {
      if (i[r].test(n)) {
        return true;
      }
    }
    return false;
  }
  function m(e, t, n) {
    if (e.length === 0) {
      return e;
    }
    if (n && typeof n === "function") {
      return n(e);
    }
    var i = new window.DOMParser();
    var r = i.parseFromString(e, "text/html");
    var o = Object.keys(t);
    var a = [].slice.call(r.body.querySelectorAll("*"));
    var s = function e(n, i) {
      var r = a[n];
      var s = r.nodeName.toLowerCase();
      if (o.indexOf(r.nodeName.toLowerCase()) === -1) {
        r.parentNode.removeChild(r);
        return "continue";
      }
      var l = [].slice.call(r.attributes);
      var u = [].concat(t["*"] || [], t[s] || []);
      l.forEach(function (e) {
        if (!v(e, u)) {
          r.removeAttribute(e.nodeName);
        }
      });
    };
    for (var l = 0, u = a.length; l < u; l++) {
      var c = s(l);
      if (c === "continue") continue;
    }
    return r.body.innerHTML;
  }
  var g = "tooltip";
  var y = "4.6.1";
  var b = "bs.tooltip";
  var w = "." + b;
  var _ = r["default"].fn[g];
  var x = "bs-tooltip";
  var C = new RegExp("(^|\\s)" + x + "\\S+", "g");
  var k = ["sanitize", "whiteList", "sanitizeFn"];
  var T = "fade";
  var E = "show";
  var S = "show";
  var $ = "out";
  var A = ".tooltip-inner";
  var O = ".arrow";
  var I = "hover";
  var j = "focus";
  var L = "click";
  var D = "manual";
  var N = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: "right",
    BOTTOM: "bottom",
    LEFT: "left",
  };
  var P = {
    animation: true,
    template:
      '<div class="tooltip" role="tooltip">' +
      '<div class="arrow"></div>' +
      '<div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: false,
    selector: false,
    placement: "top",
    offset: 0,
    container: false,
    fallbackPlacement: "flip",
    boundary: "scrollParent",
    customClass: "",
    sanitize: true,
    sanitizeFn: null,
    whiteList: d,
    popperConfig: null,
  };
  var q = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(number|string|function)",
    container: "(string|element|boolean)",
    fallbackPlacement: "(string|array)",
    boundary: "(string|element)",
    customClass: "(string|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    whiteList: "object",
    popperConfig: "(null|object)",
  };
  var R = {
    HIDE: "hide" + w,
    HIDDEN: "hidden" + w,
    SHOW: "show" + w,
    SHOWN: "shown" + w,
    INSERTED: "inserted" + w,
    CLICK: "click" + w,
    FOCUSIN: "focusin" + w,
    FOCUSOUT: "focusout" + w,
    MOUSEENTER: "mouseenter" + w,
    MOUSELEAVE: "mouseleave" + w,
  };
  var M = (function () {
    function e(e, t) {
      if (typeof o["default"] === "undefined") {
        throw new TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)"
        );
      }
      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = "";
      this._activeTrigger = {};
      this._popper = null;
      this.element = e;
      this.config = this._getConfig(t);
      this.tip = null;
      this._setListeners();
    }
    var t = e.prototype;
    t.enable = function e() {
      this._isEnabled = true;
    };
    t.disable = function e() {
      this._isEnabled = false;
    };
    t.toggleEnabled = function e() {
      this._isEnabled = !this._isEnabled;
    };
    t.toggle = function e(t) {
      if (!this._isEnabled) {
        return;
      }
      if (t) {
        var n = this.constructor.DATA_KEY;
        var i = r["default"](t.currentTarget).data(n);
        if (!i) {
          i = new this.constructor(t.currentTarget, this._getDelegateConfig());
          r["default"](t.currentTarget).data(n, i);
        }
        i._activeTrigger.click = !i._activeTrigger.click;
        if (i._isWithActiveTrigger()) {
          i._enter(null, i);
        } else {
          i._leave(null, i);
        }
      } else {
        if (r["default"](this.getTipElement()).hasClass(E)) {
          this._leave(null, this);
          return;
        }
        this._enter(null, this);
      }
    };
    t.dispose = function e() {
      clearTimeout(this._timeout);
      r["default"].removeData(this.element, this.constructor.DATA_KEY);
      r["default"](this.element).off(this.constructor.EVENT_KEY);
      r["default"](this.element)
        .closest(".modal")
        .off("hide.bs.modal", this._hideModalHandler);
      if (this.tip) {
        r["default"](this.tip).remove();
      }
      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;
      if (this._popper) {
        this._popper.destroy();
      }
      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };
    t.show = function e() {
      var t = this;
      if (r["default"](this.element).css("display") === "none") {
        throw new Error("Please use show on visible elements");
      }
      var n = r["default"].Event(this.constructor.Event.SHOW);
      if (this.isWithContent() && this._isEnabled) {
        r["default"](this.element).trigger(n);
        var i = a["default"].findShadowRoot(this.element);
        var s = r["default"].contains(
          i !== null ? i : this.element.ownerDocument.documentElement,
          this.element
        );
        if (n.isDefaultPrevented() || !s) {
          return;
        }
        var l = this.getTipElement();
        var u = a["default"].getUID(this.constructor.NAME);
        l.setAttribute("id", u);
        this.element.setAttribute("aria-describedby", u);
        this.setContent();
        if (this.config.animation) {
          r["default"](l).addClass(T);
        }
        var c =
          typeof this.config.placement === "function"
            ? this.config.placement.call(this, l, this.element)
            : this.config.placement;
        var f = this._getAttachment(c);
        this.addAttachmentClass(f);
        var d = this._getContainer();
        r["default"](l).data(this.constructor.DATA_KEY, this);
        if (
          !r["default"].contains(
            this.element.ownerDocument.documentElement,
            this.tip
          )
        ) {
          r["default"](l).appendTo(d);
        }
        r["default"](this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new o["default"](
          this.element,
          l,
          this._getPopperConfig(f)
        );
        r["default"](l).addClass(E);
        r["default"](l).addClass(this.config.customClass);
        if ("ontouchstart" in document.documentElement) {
          r["default"](document.body)
            .children()
            .on("mouseover", null, r["default"].noop);
        }
        var h = function e() {
          if (t.config.animation) {
            t._fixTransition();
          }
          var n = t._hoverState;
          t._hoverState = null;
          r["default"](t.element).trigger(t.constructor.Event.SHOWN);
          if (n === $) {
            t._leave(null, t);
          }
        };
        if (r["default"](this.tip).hasClass(T)) {
          var p = a["default"].getTransitionDurationFromElement(this.tip);
          r["default"](this.tip)
            .one(a["default"].TRANSITION_END, h)
            .emulateTransitionEnd(p);
        } else {
          h();
        }
      }
    };
    t.hide = function e(t) {
      var n = this;
      var i = this.getTipElement();
      var o = r["default"].Event(this.constructor.Event.HIDE);
      var s = function e() {
        if (n._hoverState !== S && i.parentNode) {
          i.parentNode.removeChild(i);
        }
        n._cleanTipClass();
        n.element.removeAttribute("aria-describedby");
        r["default"](n.element).trigger(n.constructor.Event.HIDDEN);
        if (n._popper !== null) {
          n._popper.destroy();
        }
        if (t) {
          t();
        }
      };
      r["default"](this.element).trigger(o);
      if (o.isDefaultPrevented()) {
        return;
      }
      r["default"](i).removeClass(E);
      if ("ontouchstart" in document.documentElement) {
        r["default"](document.body)
          .children()
          .off("mouseover", null, r["default"].noop);
      }
      this._activeTrigger[L] = false;
      this._activeTrigger[j] = false;
      this._activeTrigger[I] = false;
      if (r["default"](this.tip).hasClass(T)) {
        var l = a["default"].getTransitionDurationFromElement(i);
        r["default"](i)
          .one(a["default"].TRANSITION_END, s)
          .emulateTransitionEnd(l);
      } else {
        s();
      }
      this._hoverState = "";
    };
    t.update = function e() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    };
    t.isWithContent = function e() {
      return Boolean(this.getTitle());
    };
    t.addAttachmentClass = function e(t) {
      r["default"](this.getTipElement()).addClass(x + "-" + t);
    };
    t.getTipElement = function e() {
      this.tip = this.tip || r["default"](this.config.template)[0];
      return this.tip;
    };
    t.setContent = function e() {
      var t = this.getTipElement();
      this.setElementContent(
        r["default"](t.querySelectorAll(A)),
        this.getTitle()
      );
      r["default"](t).removeClass(T + " " + E);
    };
    t.setElementContent = function e(t, n) {
      if (typeof n === "object" && (n.nodeType || n.jquery)) {
        if (this.config.html) {
          if (!r["default"](n).parent().is(t)) {
            t.empty().append(n);
          }
        } else {
          t.text(r["default"](n).text());
        }
        return;
      }
      if (this.config.html) {
        if (this.config.sanitize) {
          n = m(n, this.config.whiteList, this.config.sanitizeFn);
        }
        t.html(n);
      } else {
        t.text(n);
      }
    };
    t.getTitle = function e() {
      var t = this.element.getAttribute("data-original-title");
      if (!t) {
        t =
          typeof this.config.title === "function"
            ? this.config.title.call(this.element)
            : this.config.title;
      }
      return t;
    };
    t._getPopperConfig = function e(t) {
      var n = this;
      var i = {
        placement: t,
        modifiers: {
          offset: this._getOffset(),
          flip: { behavior: this.config.fallbackPlacement },
          arrow: { element: O },
          preventOverflow: { boundariesElement: this.config.boundary },
        },
        onCreate: function e(t) {
          if (t.originalPlacement !== t.placement) {
            n._handlePopperPlacementChange(t);
          }
        },
        onUpdate: function e(t) {
          return n._handlePopperPlacementChange(t);
        },
      };
      return u({}, i, this.config.popperConfig);
    };
    t._getOffset = function e() {
      var t = this;
      var n = {};
      if (typeof this.config.offset === "function") {
        n.fn = function (e) {
          e.offsets = u({}, e.offsets, t.config.offset(e.offsets, t.element));
          return e;
        };
      } else {
        n.offset = this.config.offset;
      }
      return n;
    };
    t._getContainer = function e() {
      if (this.config.container === false) {
        return document.body;
      }
      if (a["default"].isElement(this.config.container)) {
        return r["default"](this.config.container);
      }
      return r["default"](document).find(this.config.container);
    };
    t._getAttachment = function e(t) {
      return N[t.toUpperCase()];
    };
    t._setListeners = function e() {
      var t = this;
      var n = this.config.trigger.split(" ");
      n.forEach(function (e) {
        if (e === "click") {
          r["default"](t.element).on(
            t.constructor.Event.CLICK,
            t.config.selector,
            function (e) {
              return t.toggle(e);
            }
          );
        } else if (e !== D) {
          var n =
            e === I
              ? t.constructor.Event.MOUSEENTER
              : t.constructor.Event.FOCUSIN;
          var i =
            e === I
              ? t.constructor.Event.MOUSELEAVE
              : t.constructor.Event.FOCUSOUT;
          r["default"](t.element)
            .on(n, t.config.selector, function (e) {
              return t._enter(e);
            })
            .on(i, t.config.selector, function (e) {
              return t._leave(e);
            });
        }
      });
      this._hideModalHandler = function () {
        if (t.element) {
          t.hide();
        }
      };
      r["default"](this.element)
        .closest(".modal")
        .on("hide.bs.modal", this._hideModalHandler);
      if (this.config.selector) {
        this.config = u({}, this.config, { trigger: "manual", selector: "" });
      } else {
        this._fixTitle();
      }
    };
    t._fixTitle = function e() {
      var t = typeof this.element.getAttribute("data-original-title");
      if (this.element.getAttribute("title") || t !== "string") {
        this.element.setAttribute(
          "data-original-title",
          this.element.getAttribute("title") || ""
        );
        this.element.setAttribute("title", "");
      }
    };
    t._enter = function e(t, n) {
      var i = this.constructor.DATA_KEY;
      n = n || r["default"](t.currentTarget).data(i);
      if (!n) {
        n = new this.constructor(t.currentTarget, this._getDelegateConfig());
        r["default"](t.currentTarget).data(i, n);
      }
      if (t) {
        n._activeTrigger[t.type === "focusin" ? j : I] = true;
      }
      if (r["default"](n.getTipElement()).hasClass(E) || n._hoverState === S) {
        n._hoverState = S;
        return;
      }
      clearTimeout(n._timeout);
      n._hoverState = S;
      if (!n.config.delay || !n.config.delay.show) {
        n.show();
        return;
      }
      n._timeout = setTimeout(function () {
        if (n._hoverState === S) {
          n.show();
        }
      }, n.config.delay.show);
    };
    t._leave = function e(t, n) {
      var i = this.constructor.DATA_KEY;
      n = n || r["default"](t.currentTarget).data(i);
      if (!n) {
        n = new this.constructor(t.currentTarget, this._getDelegateConfig());
        r["default"](t.currentTarget).data(i, n);
      }
      if (t) {
        n._activeTrigger[t.type === "focusout" ? j : I] = false;
      }
      if (n._isWithActiveTrigger()) {
        return;
      }
      clearTimeout(n._timeout);
      n._hoverState = $;
      if (!n.config.delay || !n.config.delay.hide) {
        n.hide();
        return;
      }
      n._timeout = setTimeout(function () {
        if (n._hoverState === $) {
          n.hide();
        }
      }, n.config.delay.hide);
    };
    t._isWithActiveTrigger = function e() {
      for (var t in this._activeTrigger) {
        if (this._activeTrigger[t]) {
          return true;
        }
      }
      return false;
    };
    t._getConfig = function e(t) {
      var n = r["default"](this.element).data();
      Object.keys(n).forEach(function (e) {
        if (k.indexOf(e) !== -1) {
          delete n[e];
        }
      });
      t = u(
        {},
        this.constructor.Default,
        n,
        typeof t === "object" && t ? t : {}
      );
      if (typeof t.delay === "number") {
        t.delay = { show: t.delay, hide: t.delay };
      }
      if (typeof t.title === "number") {
        t.title = t.title.toString();
      }
      if (typeof t.content === "number") {
        t.content = t.content.toString();
      }
      a["default"].typeCheckConfig(g, t, this.constructor.DefaultType);
      if (t.sanitize) {
        t.template = m(t.template, t.whiteList, t.sanitizeFn);
      }
      return t;
    };
    t._getDelegateConfig = function e() {
      var t = {};
      if (this.config) {
        for (var n in this.config) {
          if (this.constructor.Default[n] !== this.config[n]) {
            t[n] = this.config[n];
          }
        }
      }
      return t;
    };
    t._cleanTipClass = function e() {
      var t = r["default"](this.getTipElement());
      var n = t.attr("class").match(C);
      if (n !== null && n.length) {
        t.removeClass(n.join(""));
      }
    };
    t._handlePopperPlacementChange = function e(t) {
      this.tip = t.instance.popper;
      this._cleanTipClass();
      this.addAttachmentClass(this._getAttachment(t.placement));
    };
    t._fixTransition = function e() {
      var t = this.getTipElement();
      var n = this.config.animation;
      if (t.getAttribute("x-placement") !== null) {
        return;
      }
      r["default"](t).removeClass(T);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = n;
    };
    e._jQueryInterface = function t(n) {
      return this.each(function () {
        var t = r["default"](this);
        var i = t.data(b);
        var o = typeof n === "object" && n;
        if (!i && /dispose|hide/.test(n)) {
          return;
        }
        if (!i) {
          i = new e(this, o);
          t.data(b, i);
        }
        if (typeof n === "string") {
          if (typeof i[n] === "undefined") {
            throw new TypeError('No method named "' + n + '"');
          }
          i[n]();
        }
      });
    };
    l(e, null, [
      {
        key: "VERSION",
        get: function e() {
          return y;
        },
      },
      {
        key: "Default",
        get: function e() {
          return P;
        },
      },
      {
        key: "NAME",
        get: function e() {
          return g;
        },
      },
      {
        key: "DATA_KEY",
        get: function e() {
          return b;
        },
      },
      {
        key: "Event",
        get: function e() {
          return R;
        },
      },
      {
        key: "EVENT_KEY",
        get: function e() {
          return w;
        },
      },
      {
        key: "DefaultType",
        get: function e() {
          return q;
        },
      },
    ]);
    return e;
  })();
  r["default"].fn[g] = M._jQueryInterface;
  r["default"].fn[g].Constructor = M;
  r["default"].fn[g].noConflict = function () {
    r["default"].fn[g] = _;
    return M._jQueryInterface;
  };
  return M;
});
/*!
 * Bootstrap modal.js v4.6.1 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
(function (e, t) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = t(require("jquery"), require("./util.js")))
    : typeof define === "function" && define.amd
    ? define(["jquery", "./util"], t)
    : ((e = typeof globalThis !== "undefined" ? globalThis : e || self),
      (e.Modal = t(e.jQuery, e.Util)));
})(this, function (e, t) {
  "use strict";
  function n(e) {
    return e && typeof e === "object" && "default" in e ? e : { default: e };
  }
  var i = n(e);
  var r = n(t);
  function o(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || false;
      i.configurable = true;
      if ("value" in i) i.writable = true;
      Object.defineProperty(e, i.key, i);
    }
  }
  function a(e, t, n) {
    if (t) o(e.prototype, t);
    if (n) o(e, n);
    return e;
  }
  function s() {
    s =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var i in n) {
            if (Object.prototype.hasOwnProperty.call(n, i)) {
              e[i] = n[i];
            }
          }
        }
        return e;
      };
    return s.apply(this, arguments);
  }
  var l = "modal";
  var u = "4.6.1";
  var c = "bs.modal";
  var f = "." + c;
  var d = ".data-api";
  var h = i["default"].fn[l];
  var p = 27;
  var v = "modal-dialog-scrollable";
  var m = "modal-scrollbar-measure";
  var g = "modal-backdrop";
  var y = "modal-open";
  var b = "fade";
  var w = "show";
  var _ = "modal-static";
  var x = "hide" + f;
  var C = "hidePrevented" + f;
  var k = "hidden" + f;
  var T = "show" + f;
  var E = "shown" + f;
  var S = "focusin" + f;
  var $ = "resize" + f;
  var A = "click.dismiss" + f;
  var O = "keydown.dismiss" + f;
  var I = "mouseup.dismiss" + f;
  var j = "mousedown.dismiss" + f;
  var L = "click" + f + d;
  var D = ".modal-dialog";
  var N = ".modal-body";
  var P = '[data-toggle="modal"]';
  var q = '[data-dismiss="modal"]';
  var R = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
  var M = ".sticky-top";
  var H = { backdrop: true, keyboard: true, focus: true, show: true };
  var F = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean",
    show: "boolean",
  };
  var U = (function () {
    function e(e, t) {
      this._config = this._getConfig(t);
      this._element = e;
      this._dialog = e.querySelector(D);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    }
    var t = e.prototype;
    t.toggle = function e(t) {
      return this._isShown ? this.hide() : this.show(t);
    };
    t.show = function e(t) {
      var n = this;
      if (this._isShown || this._isTransitioning) {
        return;
      }
      var r = i["default"].Event(T, { relatedTarget: t });
      i["default"](this._element).trigger(r);
      if (r.isDefaultPrevented()) {
        return;
      }
      this._isShown = true;
      if (i["default"](this._element).hasClass(b)) {
        this._isTransitioning = true;
      }
      this._checkScrollbar();
      this._setScrollbar();
      this._adjustDialog();
      this._setEscapeEvent();
      this._setResizeEvent();
      i["default"](this._element).on(A, q, function (e) {
        return n.hide(e);
      });
      i["default"](this._dialog).on(j, function () {
        i["default"](n._element).one(I, function (e) {
          if (i["default"](e.target).is(n._element)) {
            n._ignoreBackdropClick = true;
          }
        });
      });
      this._showBackdrop(function () {
        return n._showElement(t);
      });
    };
    t.hide = function e(t) {
      var n = this;
      if (t) {
        t.preventDefault();
      }
      if (!this._isShown || this._isTransitioning) {
        return;
      }
      var o = i["default"].Event(x);
      i["default"](this._element).trigger(o);
      if (!this._isShown || o.isDefaultPrevented()) {
        return;
      }
      this._isShown = false;
      var a = i["default"](this._element).hasClass(b);
      if (a) {
        this._isTransitioning = true;
      }
      this._setEscapeEvent();
      this._setResizeEvent();
      i["default"](document).off(S);
      i["default"](this._element).removeClass(w);
      i["default"](this._element).off(A);
      i["default"](this._dialog).off(j);
      if (a) {
        var s = r["default"].getTransitionDurationFromElement(this._element);
        i["default"](this._element)
          .one(r["default"].TRANSITION_END, function (e) {
            return n._hideModal(e);
          })
          .emulateTransitionEnd(s);
      } else {
        this._hideModal();
      }
    };
    t.dispose = function e() {
      [window, this._element, this._dialog].forEach(function (e) {
        return i["default"](e).off(f);
      });
      i["default"](document).off(S);
      i["default"].removeData(this._element, c);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };
    t.handleUpdate = function e() {
      this._adjustDialog();
    };
    t._getConfig = function e(t) {
      t = s({}, H, t);
      r["default"].typeCheckConfig(l, t, F);
      return t;
    };
    t._triggerBackdropTransition = function e() {
      var t = this;
      var n = i["default"].Event(C);
      i["default"](this._element).trigger(n);
      if (n.isDefaultPrevented()) {
        return;
      }
      var o =
        this._element.scrollHeight > document.documentElement.clientHeight;
      if (!o) {
        this._element.style.overflowY = "hidden";
      }
      this._element.classList.add(_);
      var a = r["default"].getTransitionDurationFromElement(this._dialog);
      i["default"](this._element).off(r["default"].TRANSITION_END);
      i["default"](this._element)
        .one(r["default"].TRANSITION_END, function () {
          t._element.classList.remove(_);
          if (!o) {
            i["default"](t._element)
              .one(r["default"].TRANSITION_END, function () {
                t._element.style.overflowY = "";
              })
              .emulateTransitionEnd(t._element, a);
          }
        })
        .emulateTransitionEnd(a);
      this._element.focus();
    };
    t._showElement = function e(t) {
      var n = this;
      var o = i["default"](this._element).hasClass(b);
      var a = this._dialog ? this._dialog.querySelector(N) : null;
      if (
        !this._element.parentNode ||
        this._element.parentNode.nodeType !== Node.ELEMENT_NODE
      ) {
        document.body.appendChild(this._element);
      }
      this._element.style.display = "block";
      this._element.removeAttribute("aria-hidden");
      this._element.setAttribute("aria-modal", true);
      this._element.setAttribute("role", "dialog");
      if (i["default"](this._dialog).hasClass(v) && a) {
        a.scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }
      if (o) {
        r["default"].reflow(this._element);
      }
      i["default"](this._element).addClass(w);
      if (this._config.focus) {
        this._enforceFocus();
      }
      var s = i["default"].Event(E, { relatedTarget: t });
      var l = function e() {
        if (n._config.focus) {
          n._element.focus();
        }
        n._isTransitioning = false;
        i["default"](n._element).trigger(s);
      };
      if (o) {
        var u = r["default"].getTransitionDurationFromElement(this._dialog);
        i["default"](this._dialog)
          .one(r["default"].TRANSITION_END, l)
          .emulateTransitionEnd(u);
      } else {
        l();
      }
    };
    t._enforceFocus = function e() {
      var t = this;
      i["default"](document)
        .off(S)
        .on(S, function (e) {
          if (
            document !== e.target &&
            t._element !== e.target &&
            i["default"](t._element).has(e.target).length === 0
          ) {
            t._element.focus();
          }
        });
    };
    t._setEscapeEvent = function e() {
      var t = this;
      if (this._isShown) {
        i["default"](this._element).on(O, function (e) {
          if (t._config.keyboard && e.which === p) {
            e.preventDefault();
            t.hide();
          } else if (!t._config.keyboard && e.which === p) {
            t._triggerBackdropTransition();
          }
        });
      } else if (!this._isShown) {
        i["default"](this._element).off(O);
      }
    };
    t._setResizeEvent = function e() {
      var t = this;
      if (this._isShown) {
        i["default"](window).on($, function (e) {
          return t.handleUpdate(e);
        });
      } else {
        i["default"](window).off($);
      }
    };
    t._hideModal = function e() {
      var t = this;
      this._element.style.display = "none";
      this._element.setAttribute("aria-hidden", true);
      this._element.removeAttribute("aria-modal");
      this._element.removeAttribute("role");
      this._isTransitioning = false;
      this._showBackdrop(function () {
        i["default"](document.body).removeClass(y);
        t._resetAdjustments();
        t._resetScrollbar();
        i["default"](t._element).trigger(k);
      });
    };
    t._removeBackdrop = function e() {
      if (this._backdrop) {
        i["default"](this._backdrop).remove();
        this._backdrop = null;
      }
    };
    t._showBackdrop = function e(t) {
      var n = this;
      var o = i["default"](this._element).hasClass(b) ? b : "";
      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement("div");
        this._backdrop.className = g;
        if (o) {
          this._backdrop.classList.add(o);
        }
        i["default"](this._backdrop).appendTo(document.body);
        i["default"](this._element).on(A, function (e) {
          if (n._ignoreBackdropClick) {
            n._ignoreBackdropClick = false;
            return;
          }
          if (e.target !== e.currentTarget) {
            return;
          }
          if (n._config.backdrop === "static") {
            n._triggerBackdropTransition();
          } else {
            n.hide();
          }
        });
        if (o) {
          r["default"].reflow(this._backdrop);
        }
        i["default"](this._backdrop).addClass(w);
        if (!t) {
          return;
        }
        if (!o) {
          t();
          return;
        }
        var a = r["default"].getTransitionDurationFromElement(this._backdrop);
        i["default"](this._backdrop)
          .one(r["default"].TRANSITION_END, t)
          .emulateTransitionEnd(a);
      } else if (!this._isShown && this._backdrop) {
        i["default"](this._backdrop).removeClass(w);
        var s = function e() {
          n._removeBackdrop();
          if (t) {
            t();
          }
        };
        if (i["default"](this._element).hasClass(b)) {
          var l = r["default"].getTransitionDurationFromElement(this._backdrop);
          i["default"](this._backdrop)
            .one(r["default"].TRANSITION_END, s)
            .emulateTransitionEnd(l);
        } else {
          s();
        }
      } else if (t) {
        t();
      }
    };
    t._adjustDialog = function e() {
      var t =
        this._element.scrollHeight > document.documentElement.clientHeight;
      if (!this._isBodyOverflowing && t) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }
      if (this._isBodyOverflowing && !t) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };
    t._resetAdjustments = function e() {
      this._element.style.paddingLeft = "";
      this._element.style.paddingRight = "";
    };
    t._checkScrollbar = function e() {
      var t = document.body.getBoundingClientRect();
      this._isBodyOverflowing =
        Math.round(t.left + t.right) < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };
    t._setScrollbar = function e() {
      var t = this;
      if (this._isBodyOverflowing) {
        var n = [].slice.call(document.querySelectorAll(R));
        var r = [].slice.call(document.querySelectorAll(M));
        i["default"](n).each(function (e, n) {
          var r = n.style.paddingRight;
          var o = i["default"](n).css("padding-right");
          i["default"](n)
            .data("padding-right", r)
            .css("padding-right", parseFloat(o) + t._scrollbarWidth + "px");
        });
        i["default"](r).each(function (e, n) {
          var r = n.style.marginRight;
          var o = i["default"](n).css("margin-right");
          i["default"](n)
            .data("margin-right", r)
            .css("margin-right", parseFloat(o) - t._scrollbarWidth + "px");
        });
        var o = document.body.style.paddingRight;
        var a = i["default"](document.body).css("padding-right");
        i["default"](document.body)
          .data("padding-right", o)
          .css("padding-right", parseFloat(a) + this._scrollbarWidth + "px");
      }
      i["default"](document.body).addClass(y);
    };
    t._resetScrollbar = function e() {
      var t = [].slice.call(document.querySelectorAll(R));
      i["default"](t).each(function (e, t) {
        var n = i["default"](t).data("padding-right");
        i["default"](t).removeData("padding-right");
        t.style.paddingRight = n ? n : "";
      });
      var n = [].slice.call(document.querySelectorAll("" + M));
      i["default"](n).each(function (e, t) {
        var n = i["default"](t).data("margin-right");
        if (typeof n !== "undefined") {
          i["default"](t).css("margin-right", n).removeData("margin-right");
        }
      });
      var r = i["default"](document.body).data("padding-right");
      i["default"](document.body).removeData("padding-right");
      document.body.style.paddingRight = r ? r : "";
    };
    t._getScrollbarWidth = function e() {
      var t = document.createElement("div");
      t.className = m;
      document.body.appendChild(t);
      var n = t.getBoundingClientRect().width - t.clientWidth;
      document.body.removeChild(t);
      return n;
    };
    e._jQueryInterface = function t(n, r) {
      return this.each(function () {
        var t = i["default"](this).data(c);
        var o = s(
          {},
          H,
          i["default"](this).data(),
          typeof n === "object" && n ? n : {}
        );
        if (!t) {
          t = new e(this, o);
          i["default"](this).data(c, t);
        }
        if (typeof n === "string") {
          if (typeof t[n] === "undefined") {
            throw new TypeError('No method named "' + n + '"');
          }
          t[n](r);
        } else if (o.show) {
          t.show(r);
        }
      });
    };
    a(e, null, [
      {
        key: "VERSION",
        get: function e() {
          return u;
        },
      },
      {
        key: "Default",
        get: function e() {
          return H;
        },
      },
    ]);
    return e;
  })();
  i["default"](document).on(L, P, function (e) {
    var t = this;
    var n;
    var o = r["default"].getSelectorFromElement(this);
    if (o) {
      n = document.querySelector(o);
    }
    var a = i["default"](n).data(c)
      ? "toggle"
      : s({}, i["default"](n).data(), i["default"](this).data());
    if (this.tagName === "A" || this.tagName === "AREA") {
      e.preventDefault();
    }
    var l = i["default"](n).one(T, function (e) {
      if (e.isDefaultPrevented()) {
        return;
      }
      l.one(k, function () {
        if (i["default"](t).is(":visible")) {
          t.focus();
        }
      });
    });
    U._jQueryInterface.call(i["default"](n), a, this);
  });
  i["default"].fn[l] = U._jQueryInterface;
  i["default"].fn[l].Constructor = U;
  i["default"].fn[l].noConflict = function () {
    i["default"].fn[l] = h;
    return U._jQueryInterface;
  };
  return U;
});
/*!
 * Bootstrap popover.js v4.6.1 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
(function (e, t) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = t(require("jquery"), require("./tooltip.js")))
    : typeof define === "function" && define.amd
    ? define(["jquery", "./tooltip"], t)
    : ((e = typeof globalThis !== "undefined" ? globalThis : e || self),
      (e.Popover = t(e.jQuery, e.Tooltip)));
})(this, function (e, t) {
  "use strict";
  function n(e) {
    return e && typeof e === "object" && "default" in e ? e : { default: e };
  }
  var i = n(e);
  var r = n(t);
  function o(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || false;
      i.configurable = true;
      if ("value" in i) i.writable = true;
      Object.defineProperty(e, i.key, i);
    }
  }
  function a(e, t, n) {
    if (t) o(e.prototype, t);
    if (n) o(e, n);
    return e;
  }
  function s() {
    s =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var i in n) {
            if (Object.prototype.hasOwnProperty.call(n, i)) {
              e[i] = n[i];
            }
          }
        }
        return e;
      };
    return s.apply(this, arguments);
  }
  function l(e, t) {
    e.prototype = Object.create(t.prototype);
    e.prototype.constructor = e;
    u(e, t);
  }
  function u(e, t) {
    u =
      Object.setPrototypeOf ||
      function e(t, n) {
        t.__proto__ = n;
        return t;
      };
    return u(e, t);
  }
  var c = "popover";
  var f = "4.6.1";
  var d = "bs.popover";
  var h = "." + d;
  var p = i["default"].fn[c];
  var v = "bs-popover";
  var m = new RegExp("(^|\\s)" + v + "\\S+", "g");
  var g = "fade";
  var y = "show";
  var b = ".popover-header";
  var w = ".popover-body";
  var _ = s({}, r["default"].Default, {
    placement: "right",
    trigger: "click",
    content: "",
    template:
      '<div class="popover" role="tooltip">' +
      '<div class="arrow"></div>' +
      '<h3 class="popover-header"></h3>' +
      '<div class="popover-body"></div></div>',
  });
  var x = s({}, r["default"].DefaultType, {
    content: "(string|element|function)",
  });
  var C = {
    HIDE: "hide" + h,
    HIDDEN: "hidden" + h,
    SHOW: "show" + h,
    SHOWN: "shown" + h,
    INSERTED: "inserted" + h,
    CLICK: "click" + h,
    FOCUSIN: "focusin" + h,
    FOCUSOUT: "focusout" + h,
    MOUSEENTER: "mouseenter" + h,
    MOUSELEAVE: "mouseleave" + h,
  };
  var k = (function (e) {
    l(t, e);
    function t() {
      return e.apply(this, arguments) || this;
    }
    var n = t.prototype;
    n.isWithContent = function e() {
      return this.getTitle() || this._getContent();
    };
    n.addAttachmentClass = function e(t) {
      i["default"](this.getTipElement()).addClass(v + "-" + t);
    };
    n.getTipElement = function e() {
      this.tip = this.tip || i["default"](this.config.template)[0];
      return this.tip;
    };
    n.setContent = function e() {
      var t = i["default"](this.getTipElement());
      this.setElementContent(t.find(b), this.getTitle());
      var n = this._getContent();
      if (typeof n === "function") {
        n = n.call(this.element);
      }
      this.setElementContent(t.find(w), n);
      t.removeClass(g + " " + y);
    };
    n._getContent = function e() {
      return this.element.getAttribute("data-content") || this.config.content;
    };
    n._cleanTipClass = function e() {
      var t = i["default"](this.getTipElement());
      var n = t.attr("class").match(m);
      if (n !== null && n.length > 0) {
        t.removeClass(n.join(""));
      }
    };
    t._jQueryInterface = function e(n) {
      return this.each(function () {
        var e = i["default"](this).data(d);
        var r = typeof n === "object" ? n : null;
        if (!e && /dispose|hide/.test(n)) {
          return;
        }
        if (!e) {
          e = new t(this, r);
          i["default"](this).data(d, e);
        }
        if (typeof n === "string") {
          if (typeof e[n] === "undefined") {
            throw new TypeError('No method named "' + n + '"');
          }
          e[n]();
        }
      });
    };
    a(t, null, [
      {
        key: "VERSION",
        get: function e() {
          return f;
        },
      },
      {
        key: "Default",
        get: function e() {
          return _;
        },
      },
      {
        key: "NAME",
        get: function e() {
          return c;
        },
      },
      {
        key: "DATA_KEY",
        get: function e() {
          return d;
        },
      },
      {
        key: "Event",
        get: function e() {
          return C;
        },
      },
      {
        key: "EVENT_KEY",
        get: function e() {
          return h;
        },
      },
      {
        key: "DefaultType",
        get: function e() {
          return x;
        },
      },
    ]);
    return t;
  })(r["default"]);
  i["default"].fn[c] = k._jQueryInterface;
  i["default"].fn[c].Constructor = k;
  i["default"].fn[c].noConflict = function () {
    i["default"].fn[c] = p;
    return k._jQueryInterface;
  };
  return k;
}); /*! Social Likes v3.1.3 by Artem Sapegin - http://sapegin.github.com/social-likes - Licensed MIT */
!(function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery);
})(function (e, t) {
  "use strict";
  function n(e, t) {
    (this.container = e), (this.options = t), this.init();
  }
  function i(t, n) {
    (this.widget = t),
      (this.options = e.extend({}, n)),
      this.detectService(),
      this.service && this.init();
  }
  function r(e) {
    var t = {},
      n = e.data();
    for (var i in n) {
      var r = n[i];
      "yes" === r ? (r = !0) : "no" === r && (r = !1),
        (t[
          i.replace(/-(\w)/g, function (e, t) {
            return t.toUpper();
          })
        ] = r);
    }
    return t;
  }
  function o(e, t) {
    return a(e, t, encodeURIComponent);
  }
  function a(e, t, n) {
    return e.replace(/\{([^}]+)\}/g, function (e, i) {
      return i in t ? (n ? n(t[i]) : t[i]) : e;
    });
  }
  function s(e, t) {
    var n = f + e;
    return n + " " + n + "_" + t;
  }
  function l(t, n) {
    function i(a) {
      ("keydown" === a.type && 27 !== a.which) ||
        e(a.target).closest(t).length ||
        (t.removeClass(d), r.off(o, i), e.isFunction(n) && n());
    }
    var r = e(document),
      o = "click touchstart keydown";
    r.on(o, i);
  }
  function u(e) {
    if (document.documentElement.getBoundingClientRect) {
      var t = parseInt(e.css("left"), 10),
        n = parseInt(e.css("top"), 10),
        i = e[0].getBoundingClientRect();
      i.left < 10
        ? e.css("left", 10 - i.left + t)
        : i.right > window.innerWidth - 10 &&
          e.css("left", window.innerWidth - i.right - 10 + t),
        i.top < 10
          ? e.css("top", 10 - i.top + n)
          : i.bottom > window.innerHeight - 10 &&
            e.css("top", window.innerHeight - i.bottom - 10 + n);
    }
    e.addClass(d);
  }
  var c = "social-likes",
    f = c + "__",
    d = c + "_opened",
    h = "https:" === location.protocol ? "https:" : "http:",
    p = {
      facebook: {
        counterUrl: "https://graph.facebook.com/?id={url}",
        convertNumber: function (e) {
          return e.share.share_count;
        },
        popupUrl: "https://www.facebook.com/sharer/sharer.php?u={url}",
        popupWidth: 600,
        popupHeight: 359,
      },
      twitter: {
        counters: !1,
        popupUrl: "https://twitter.com/intent/tweet?url={url}&text={title}",
        popupWidth: 600,
        popupHeight: 250,
        click: function () {
          return (
            /[.?:\-–—]\s*$/.test(this.options.title) ||
              (this.options.title += ":"),
            !0
          );
        },
      },
      mailru: {
        counterUrl:
          h + "//connect.mail.ru/share_count?url_list={url}&callback=1&func=?",
        convertNumber: function (e) {
          for (var t in e) if (e.hasOwnProperty(t)) return e[t].shares;
        },
        popupUrl: "https://connect.mail.ru/share?share_url={url}&title={title}",
        popupWidth: 492,
        popupHeight: 500,
      },
      vkontakte: {
        counterUrl:
          "https://vk.com/share.php?act=count&url={url}&index={index}",
        counter: function (t, n) {
          var i = p.vkontakte;
          i._ ||
            ((i._ = []),
            window.VK || (window.VK = {}),
            (window.VK.Share = {
              count: function (e, t) {
                i._[e].resolve(t);
              },
            }));
          var r = i._.length;
          i._.push(n), e.getScript(o(t, { index: r })).fail(n.reject);
        },
        popupUrl: "https://vk.com/share.php?url={url}&title={title}",
        popupWidth: 655,
        popupHeight: 450,
      },
      odnoklassniki: {
        counterUrl:
          h + "//connect.ok.ru/dk?st.cmd=extLike&ref={url}&uid={index}",
        counter: function (t, n) {
          var i = p.odnoklassniki;
          i._ ||
            ((i._ = []),
            window.ODKL || (window.ODKL = {}),
            (window.ODKL.updateCount = function (e, t) {
              i._[e].resolve(t);
            }));
          var r = i._.length;
          i._.push(n), e.getScript(o(t, { index: r })).fail(n.reject);
        },
        popupUrl:
          "https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&service=odnoklassniki&st.shareUrl={url}",
        popupWidth: 580,
        popupHeight: 336,
      },
      plusone: {
        counters: !1,
        popupUrl: "https://plus.google.com/share?url={url}",
        popupWidth: 500,
        popupHeight: 550,
      },
      pinterest: {
        counterUrl:
          h + "//api.pinterest.com/v1/urls/count.json?url={url}&callback=?",
        convertNumber: function (e) {
          return e.count;
        },
        popupUrl:
          "https://pinterest.com/pin/create/button/?url={url}&description={title}",
        popupWidth: 740,
        popupHeight: 550,
      },
    },
    v = {
      promises: {},
      fetch: function (t, n, i) {
        v.promises[t] || (v.promises[t] = {});
        var r = v.promises[t];
        if (!i.forceUpdate && r[n]) return r[n];
        var a = e.extend({}, p[t], i),
          s = e.Deferred(),
          l = a.counterUrl && o(a.counterUrl, { url: n });
        return (
          l && e.isFunction(a.counter)
            ? a.counter(l, s)
            : a.counterUrl
            ? e
                .getJSON(l)
                .done(function (t) {
                  try {
                    var n = t;
                    e.isFunction(a.convertNumber) && (n = a.convertNumber(t)),
                      s.resolve(n);
                  } catch (e) {
                    s.reject();
                  }
                })
                .fail(s.reject)
            : s.reject(),
          (r[n] = s.promise()),
          r[n]
        );
      },
    };
  (e.fn.socialLikes = function (t) {
    return this.each(function () {
      var i = e(this),
        o = i.data(c);
      o
        ? e.isPlainObject(t) && o.update(t)
        : ((o = new n(i, e.extend({}, e.fn.socialLikes.defaults, t, r(i)))),
          i.data(c, o));
    });
  }),
    (e.fn.socialLikes.defaults = {
      url: window.location.href.replace(window.location.hash, ""),
      title: document.title,
      counters: !0,
      zeroes: !1,
      wait: 500,
      timeout: 1e4,
      popupCheckInterval: 500,
      singleTitle: "Share",
    }),
    (n.prototype = {
      init: function () {
        this.container.addClass(c),
          (this.single = this.container.hasClass(c + "_single")),
          this.initUserButtons(),
          (this.countersLeft = 0),
          (this.number = 0),
          this.container.on("counter." + c, e.proxy(this.updateCounter, this));
        var t = this.container.children();
        this.makeSingleButton(),
          (this.buttons = []),
          t.each(
            e.proxy(function (t, n) {
              var r = new i(e(n), this.options);
              this.buttons.push(r), r.options.counterUrl && this.countersLeft++;
            }, this)
          ),
          this.options.counters
            ? ((this.timer = setTimeout(
                e.proxy(this.appear, this),
                this.options.wait
              )),
              (this.timeout = setTimeout(
                e.proxy(this.ready, this, !0),
                this.options.timeout
              )))
            : this.appear();
      },
      initUserButtons: function () {
        !this.userButtonInited &&
          window.socialLikesButtons &&
          e.extend(!0, p, socialLikesButtons),
          (this.userButtonInited = !0);
      },
      makeSingleButton: function () {
        if (this.single) {
          var t = this.container;
          t.addClass(c + "_vertical"),
            t.wrap(e("<div>", { class: c + "_single-w" })),
            t.wrapInner(e("<div>", { class: c + "__single-container" }));
          var n = t.parent(),
            i = e("<div>", { class: s("widget", "single") }),
            r = e(
              a(
                '<div class="{buttonCls}"><span class="{iconCls}"></span>{title}</div>',
                {
                  buttonCls: s("button", "single"),
                  iconCls: s("icon", "single"),
                  title: this.options.singleTitle,
                }
              )
            );
          i.append(r),
            n.append(i),
            i.on("click", function () {
              var e = c + "__widget_active";
              return (
                i.toggleClass(e),
                i.hasClass(e)
                  ? (t.css({
                      left: -(t.width() - i.width()) / 2,
                      top: -t.height(),
                    }),
                    u(t),
                    l(t, function () {
                      i.removeClass(e);
                    }))
                  : t.removeClass(d),
                !1
              );
            }),
            (this.widget = i);
        }
      },
      update: function (t) {
        if (t.forceUpdate || t.url !== this.options.url) {
          (this.number = 0),
            (this.countersLeft = this.buttons.length),
            this.widget && this.widget.find("." + c + "__counter").remove(),
            e.extend(this.options, t);
          for (var n = 0; n < this.buttons.length; n++)
            this.buttons[n].update(t);
        }
      },
      updateCounter: function (e, t, n) {
        ((n = n || 0) || this.options.zeroes) &&
          ((this.number += n),
          this.single && this.getCounterElem().text(this.number)),
          0 === --this.countersLeft && (this.appear(), this.ready());
      },
      appear: function () {
        this.container.addClass(c + "_visible");
      },
      ready: function (e) {
        this.timeout && clearTimeout(this.timeout),
          this.container.addClass(c + "_ready"),
          e || this.container.trigger("ready." + c, this.number);
      },
      getCounterElem: function () {
        var t = this.widget.find("." + f + "counter_single");
        return (
          t.length ||
            ((t = e("<span>", { class: s("counter", "single") })),
            this.widget.append(t)),
          t
        );
      },
    }),
    (i.prototype = {
      init: function () {
        this.detectParams(),
          this.initHtml(),
          setTimeout(e.proxy(this.initCounter, this), 0);
      },
      update: function (t) {
        e.extend(this.options, { forceUpdate: !1 }, t),
          this.widget.find("." + c + "__counter").remove(),
          this.initCounter();
      },
      detectService: function () {
        var t = this.widget.data("service");
        if (!t) {
          for (
            var n = this.widget[0],
              i = n.classList || n.className.split(" "),
              r = 0;
            r < i.length;
            r++
          ) {
            var o = i[r];
            if (p[o]) {
              t = o;
              break;
            }
          }
          if (!t) return;
        }
        (this.service = t), e.extend(this.options, p[t]);
      },
      detectParams: function () {
        var e = this.widget.data();
        if (e.counter) {
          var t = parseInt(e.counter, 10);
          isNaN(t)
            ? (this.options.counterUrl = e.counter)
            : (this.options.counterNumber = t);
        }
        e.title && (this.options.title = e.title),
          e.url && (this.options.url = e.url);
      },
      initHtml: function () {
        var t = this.options,
          n = this.widget,
          i = n.find("a");
        i.length && this.cloneDataAttrs(i, n);
        var r = e("<span>", {
          class: this.getElementClassNames("button"),
          html: n.html(),
        });
        if (t.clickUrl) {
          var a = o(t.clickUrl, { url: t.url, title: t.title }),
            s = e("<a>", { href: a });
          this.cloneDataAttrs(n, s),
            n.replaceWith(s),
            (this.widget = s),
            (n = s);
        } else n.on("click", e.proxy(this.click, this));
        n.removeClass(this.service),
          n.addClass(this.getElementClassNames("widget")),
          r.prepend(e("<span>", { class: this.getElementClassNames("icon") })),
          n.empty().append(r),
          (this.button = r);
      },
      initCounter: function () {
        if (this.options.counters)
          if (this.options.counterNumber)
            this.updateCounter(this.options.counterNumber);
          else {
            var t = {
              counterUrl: this.options.counterUrl,
              forceUpdate: this.options.forceUpdate,
            };
            v.fetch(this.service, this.options.url, t).always(
              e.proxy(this.updateCounter, this)
            );
          }
      },
      cloneDataAttrs: function (e, t) {
        var n = e.data();
        for (var i in n) n.hasOwnProperty(i) && t.data(i, n[i]);
      },
      getElementClassNames: function (e) {
        return s(e, this.service);
      },
      updateCounter: function (t) {
        t = parseInt(t, 10) || 0;
        var n = { class: this.getElementClassNames("counter"), text: t };
        t ||
          this.options.zeroes ||
          ((n.class += " " + c + "__counter_empty"), (n.text = ""));
        var i = this.widget.find("." + f + "counter_" + this.service);
        i.length || ((i = e("<span>", n)), this.widget.append(i)),
          this.widget.trigger("counter." + c, [this.service, t]);
      },
      click: function (t) {
        var n = this.options,
          i = !0;
        if ((e.isFunction(n.click) && (i = n.click.call(this, t)), i)) {
          var r = o(n.popupUrl, { url: n.url, title: n.title });
          (r = this.addAdditionalParamsToUrl(r)),
            this.openPopup(r, { width: n.popupWidth, height: n.popupHeight });
        }
        return !1;
      },
      addAdditionalParamsToUrl: function (t) {
        var n = e.param(e.extend(this.widget.data(), this.options.data));
        return e.isEmptyObject(n)
          ? t
          : t + (-1 === t.indexOf("?") ? "?" : "&") + n;
      },
      openPopup: function (n, i) {
        var r = window.screenLeft !== t ? window.screenLeft : screen.left,
          o = window.screenTop !== t ? window.screenTop : screen.top,
          a = window.innerWidth
            ? window.innerWidth
            : document.documentElement.clientWidth
            ? document.documentElement.clientWidth
            : screen.width,
          s = window.innerHeight
            ? window.innerHeight
            : document.documentElement.clientHeight
            ? document.documentElement.clientHeight
            : screen.height,
          l = Math.round(a / 2 - i.width / 2) + r,
          u = 0;
        s > i.height && (u = Math.round(s / 3 - i.height / 2) + o);
        var f = window.open(
          n,
          "sl_" + this.service,
          "left=" +
            l +
            ",top=" +
            u +
            ",width=" +
            i.width +
            ",height=" +
            i.height +
            ",personalbar=0,toolbar=0,scrollbars=1,resizable=1"
        );
        if (f) {
          f.focus(),
            this.widget.trigger("popup_opened." + c, [this.service, f]);
          var d = setInterval(
            e.proxy(function () {
              f.closed &&
                (clearInterval(d),
                this.widget.trigger("popup_closed." + c, this.service));
            }, this),
            this.options.popupCheckInterval
          );
        } else location.href = n;
      },
    }),
    e(function () {
      e("." + c).socialLikes();
    });
}); /*! SmoothScroll v16.1.4 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = e || self).SmoothScroll = t());
})(this, function () {
  "use strict";
  var e = {
      ignore: "[data-scroll-ignore]",
      header: null,
      topOnEmptyHash: !0,
      speed: 500,
      speedAsDuration: !1,
      durationMax: null,
      durationMin: null,
      clip: !0,
      offset: 0,
      easing: "easeInOutCubic",
      customEasing: null,
      updateURL: !0,
      popstate: !0,
      emitEvents: !0,
    },
    t = function () {
      var e = {};
      return (
        Array.prototype.forEach.call(arguments, function (t) {
          for (var n in t) {
            if (!t.hasOwnProperty(n)) return;
            e[n] = t[n];
          }
        }),
        e
      );
    },
    n = function (e) {
      "#" === e.charAt(0) && (e = e.substr(1));
      for (
        var t, n = String(e), i = n.length, r = -1, o = "", a = n.charCodeAt(0);
        ++r < i;

      ) {
        if (0 === (t = n.charCodeAt(r)))
          throw new InvalidCharacterError(
            "Invalid character: the input contains U+0000."
          );
        (t >= 1 && t <= 31) ||
        127 == t ||
        (0 === r && t >= 48 && t <= 57) ||
        (1 === r && t >= 48 && t <= 57 && 45 === a)
          ? (o += "\\" + t.toString(16) + " ")
          : (o +=
              t >= 128 ||
              45 === t ||
              95 === t ||
              (t >= 48 && t <= 57) ||
              (t >= 65 && t <= 90) ||
              (t >= 97 && t <= 122)
                ? n.charAt(r)
                : "\\" + n.charAt(r));
      }
      return "#" + o;
    },
    i = function () {
      return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
    },
    r = function (e) {
      return e
        ? ((t = e),
          parseInt(window.getComputedStyle(t).height, 10) + e.offsetTop)
        : 0;
      var t;
    },
    o = function (e, t, n) {
      0 === e && document.body.focus(),
        n ||
          (e.focus(),
          document.activeElement !== e &&
            (e.setAttribute("tabindex", "-1"),
            e.focus(),
            (e.style.outline = "none")),
          window.scrollTo(0, t));
    },
    a = function (e, t, n, i) {
      if (t.emitEvents && "function" == typeof window.CustomEvent) {
        var r = new CustomEvent(e, {
          bubbles: !0,
          detail: { anchor: n, toggle: i },
        });
        document.dispatchEvent(r);
      }
    };
  return function (s, l) {
    var u,
      c,
      f,
      d,
      h = {};
    (h.cancelScroll = function (e) {
      cancelAnimationFrame(d), (d = null), e || a("scrollCancel", u);
    }),
      (h.animateScroll = function (n, s, l) {
        h.cancelScroll();
        var c = t(u || e, l || {}),
          p = "[object Number]" === Object.prototype.toString.call(n),
          v = p || !n.tagName ? null : n;
        if (p || v) {
          var m = window.pageYOffset;
          c.header && !f && (f = document.querySelector(c.header));
          var g,
            y,
            b,
            w = r(f),
            _ = p
              ? n
              : (function (e, t, n, r) {
                  var o = 0;
                  if (e.offsetParent)
                    do {
                      (o += e.offsetTop), (e = e.offsetParent);
                    } while (e);
                  return (
                    (o = Math.max(o - t - n, 0)),
                    r && (o = Math.min(o, i() - window.innerHeight)),
                    o
                  );
                })(
                  v,
                  w,
                  parseInt(
                    "function" == typeof c.offset ? c.offset(n, s) : c.offset,
                    10
                  ),
                  c.clip
                ),
            x = _ - m,
            C = i(),
            k = 0,
            T = (function (e, t) {
              var n = t.speedAsDuration
                ? t.speed
                : Math.abs((e / 1e3) * t.speed);
              return t.durationMax && n > t.durationMax
                ? t.durationMax
                : t.durationMin && n < t.durationMin
                ? t.durationMin
                : parseInt(n, 10);
            })(x, c),
            E = function (e) {
              g || (g = e),
                (k += e - g),
                (b =
                  m +
                  x *
                    (function (e, t) {
                      var n;
                      return (
                        "easeInQuad" === e.easing && (n = t * t),
                        "easeOutQuad" === e.easing && (n = t * (2 - t)),
                        "easeInOutQuad" === e.easing &&
                          (n = t < 0.5 ? 2 * t * t : (4 - 2 * t) * t - 1),
                        "easeInCubic" === e.easing && (n = t * t * t),
                        "easeOutCubic" === e.easing && (n = --t * t * t + 1),
                        "easeInOutCubic" === e.easing &&
                          (n =
                            t < 0.5
                              ? 4 * t * t * t
                              : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),
                        "easeInQuart" === e.easing && (n = t * t * t * t),
                        "easeOutQuart" === e.easing &&
                          (n = 1 - --t * t * t * t),
                        "easeInOutQuart" === e.easing &&
                          (n =
                            t < 0.5
                              ? 8 * t * t * t * t
                              : 1 - 8 * --t * t * t * t),
                        "easeInQuint" === e.easing && (n = t * t * t * t * t),
                        "easeOutQuint" === e.easing &&
                          (n = 1 + --t * t * t * t * t),
                        "easeInOutQuint" === e.easing &&
                          (n =
                            t < 0.5
                              ? 16 * t * t * t * t * t
                              : 1 + 16 * --t * t * t * t * t),
                        e.customEasing && (n = e.customEasing(t)),
                        n || t
                      );
                    })(c, (y = (y = 0 === T ? 0 : k / T) > 1 ? 1 : y))),
                window.scrollTo(0, Math.floor(b)),
                (function (e, t) {
                  var i = window.pageYOffset;
                  if (
                    e == t ||
                    i == t ||
                    (m < t && window.innerHeight + i) >= C
                  )
                    return (
                      h.cancelScroll(!0),
                      o(n, t, p),
                      a("scrollStop", c, n, s),
                      (g = null),
                      (d = null),
                      !0
                    );
                })(b, _) || ((d = window.requestAnimationFrame(E)), (g = e));
            };
          0 === window.pageYOffset && window.scrollTo(0, 0),
            (function (e, t, n) {
              t ||
                (history.pushState &&
                  n.updateURL &&
                  history.pushState(
                    { smoothScroll: JSON.stringify(n), anchor: e.id },
                    document.title,
                    e === document.documentElement ? "#top" : "#" + e.id
                  ));
            })(n, p, c),
            "matchMedia" in window &&
            window.matchMedia("(prefers-reduced-motion)").matches
              ? o(n, Math.floor(_), !1)
              : (a("scrollStart", c, n, s),
                h.cancelScroll(!0),
                window.requestAnimationFrame(E));
        }
      });
    var p = function (e) {
        if (
          !e.defaultPrevented &&
          !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) &&
          "closest" in e.target &&
          (c = e.target.closest(s)) &&
          "a" === c.tagName.toLowerCase() &&
          !e.target.closest(u.ignore) &&
          c.hostname === window.location.hostname &&
          c.pathname === window.location.pathname &&
          /#/.test(c.href)
        ) {
          var t, i;
          try {
            t = n(decodeURIComponent(c.hash));
          } catch (e) {
            t = n(c.hash);
          }
          if ("#" === t) {
            if (!u.topOnEmptyHash) return;
            i = document.documentElement;
          } else i = document.querySelector(t);
          (i = i || "#top" !== t ? i : document.documentElement) &&
            (e.preventDefault(),
            (function (e) {
              if (history.replaceState && e.updateURL && !history.state) {
                var t = window.location.hash;
                (t = t || ""),
                  history.replaceState(
                    {
                      smoothScroll: JSON.stringify(e),
                      anchor: t || window.pageYOffset,
                    },
                    document.title,
                    t || window.location.href
                  );
              }
            })(u),
            h.animateScroll(i, c));
        }
      },
      v = function () {
        if (
          null !== history.state &&
          history.state.smoothScroll &&
          history.state.smoothScroll === JSON.stringify(u)
        ) {
          var e = history.state.anchor;
          ("string" == typeof e &&
            e &&
            !(e = document.querySelector(n(history.state.anchor)))) ||
            h.animateScroll(e, null, { updateURL: !1 });
        }
      };
    h.destroy = function () {
      u &&
        (document.removeEventListener("click", p, !1),
        window.removeEventListener("popstate", v, !1),
        h.cancelScroll(),
        (u = null),
        (c = null),
        (f = null),
        (d = null));
    };
    return (
      (function () {
        if (
          !(
            "querySelector" in document &&
            "addEventListener" in window &&
            "requestAnimationFrame" in window &&
            "closest" in window.Element.prototype
          )
        )
          throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
        h.destroy(),
          (u = t(e, l || {})),
          (f = u.header ? document.querySelector(u.header) : null),
          document.addEventListener("click", p, !1),
          u.updateURL &&
            u.popstate &&
            window.addEventListener("popstate", v, !1);
      })(),
      h
    );
  };
});
!(function (e) {
  if ("object" == typeof exports && "undefined" != typeof module)
    module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
    var t;
    "undefined" != typeof window
      ? (t = window)
      : "undefined" != typeof global
      ? (t = global)
      : "undefined" != typeof self && (t = self),
      (t.page = e());
  }
})(function () {
  var e, t, n;
  return (function e(t, n, i) {
    function r(a, s) {
      if (!n[a]) {
        if (!t[a]) {
          var l = typeof require == "function" && require;
          if (!s && l) return l(a, !0);
          if (o) return o(a, !0);
          var u = new Error("Cannot find module '" + a + "'");
          throw ((u.code = "MODULE_NOT_FOUND"), u);
        }
        var c = (n[a] = { exports: {} });
        t[a][0].call(
          c.exports,
          function (e) {
            var n = t[a][1][e];
            return r(n ? n : e);
          },
          c,
          c.exports,
          e,
          t,
          n,
          i
        );
      }
      return n[a].exports;
    }
    var o = typeof require == "function" && require;
    for (var a = 0; a < i.length; a++) r(i[a]);
    return r;
  })(
    {
      1: [
        function (e, t, n) {
          (function (n) {
            "use strict";
            var i = e("path-to-regexp");
            t.exports = d;
            var r =
              "undefined" !== typeof document && document.ontouchstart
                ? "touchstart"
                : "click";
            var o =
              "undefined" !== typeof window &&
              (window.history.location || window.location);
            var a = true;
            var s = true;
            var l = "";
            var u;
            var c = false;
            var f;
            function d(e, t) {
              if ("function" === typeof e) {
                return d("*", e);
              }
              if ("function" === typeof t) {
                var n = new m(e);
                for (var i = 1; i < arguments.length; ++i) {
                  d.callbacks.push(n.middleware(arguments[i]));
                }
              } else if ("string" === typeof e) {
                d["string" === typeof t ? "redirect" : "show"](e, t);
              } else {
                d.start(e);
              }
            }
            d.callbacks = [];
            d.exits = [];
            d.current = "";
            d.len = 0;
            d.base = function (e) {
              if (0 === arguments.length) return l;
              l = e;
            };
            d.start = function (e) {
              e = e || {};
              if (u) return;
              u = true;
              if (false === e.dispatch) a = false;
              if (false === e.decodeURLComponents) s = false;
              if (false !== e.popstate)
                window.addEventListener("popstate", g, false);
              if (false !== e.click) {
                document.addEventListener(r, y, false);
              }
              if (true === e.hashbang) c = true;
              if (!a) return;
              var t =
                c && ~o.hash.indexOf("#!")
                  ? o.hash.substr(2) + o.search
                  : o.pathname + o.search + o.hash;
              d.replace(t, null, true, a);
            };
            d.stop = function () {
              if (!u) return;
              d.current = "";
              d.len = 0;
              u = false;
              document.removeEventListener(r, y, false);
              window.removeEventListener("popstate", g, false);
            };
            d.show = function (e, t, n, i) {
              var r = new v(e, t);
              d.current = r.path;
              if (false !== n) d.dispatch(r);
              if (false !== r.handled && false !== i) r.pushState();
              return r;
            };
            d.back = function (e, t) {
              if (d.len > 0) {
                history.back();
                d.len--;
              } else if (e) {
                setTimeout(function () {
                  d.show(e, t);
                });
              } else {
                setTimeout(function () {
                  d.show(l, t);
                });
              }
            };
            d.redirect = function (e, t) {
              if ("string" === typeof e && "string" === typeof t) {
                d(e, function (e) {
                  setTimeout(function () {
                    d.replace(t);
                  }, 0);
                });
              }
              if ("string" === typeof e && "undefined" === typeof t) {
                setTimeout(function () {
                  d.replace(e);
                }, 0);
              }
            };
            d.replace = function (e, t, n, i) {
              var r = new v(e, t);
              d.current = r.path;
              r.init = n;
              r.save();
              if (false !== i) d.dispatch(r);
              return r;
            };
            d.dispatch = function (e) {
              var t = f,
                n = 0,
                i = 0;
              f = e;
              function r() {
                var e = d.exits[i++];
                if (!e) return o();
                e(t, r);
              }
              function o() {
                var t = d.callbacks[n++];
                if (e.path !== d.current) {
                  e.handled = false;
                  return;
                }
                if (!t) return h(e);
                t(e, o);
              }
              if (t) {
                r();
              } else {
                o();
              }
            };
            function h(e) {
              if (e.handled) return;
              var t;
              if (c) {
                t = l + o.hash.replace("#!", "");
              } else {
                t = o.pathname + o.search;
              }
              if (t === e.canonicalPath) return;
              d.stop();
              e.handled = false;
              o.href = e.canonicalPath;
            }
            d.exit = function (e, t) {
              if (typeof e === "function") {
                return d.exit("*", e);
              }
              var n = new m(e);
              for (var i = 1; i < arguments.length; ++i) {
                d.exits.push(n.middleware(arguments[i]));
              }
            };
            function p(e) {
              if (typeof e !== "string") {
                return e;
              }
              return s ? decodeURIComponent(e.replace(/\+/g, " ")) : e;
            }
            function v(e, t) {
              if ("/" === e[0] && 0 !== e.indexOf(l))
                e = l + (c ? "#!" : "") + e;
              var n = e.indexOf("?");
              this.canonicalPath = e;
              this.path = e.replace(l, "") || "/";
              if (c) this.path = this.path.replace("#!", "") || "/";
              this.title = document.title;
              this.state = t || {};
              this.state.path = e;
              this.querystring = ~n ? p(e.slice(n + 1)) : "";
              this.pathname = p(~n ? e.slice(0, n) : e);
              this.params = {};
              this.hash = "";
              if (!c) {
                if (!~this.path.indexOf("#")) return;
                var i = this.path.split("#");
                this.path = i[0];
                this.hash = p(i[1]) || "";
                this.querystring = this.querystring.split("#")[0];
              }
            }
            d.Context = v;
            v.prototype.pushState = function () {
              d.len++;
              history.pushState(
                this.state,
                this.title,
                c && this.path !== "/" ? "#!" + this.path : this.canonicalPath
              );
              document.title = this.title;
            };
            v.prototype.save = function () {
              history.replaceState(
                this.state,
                this.title,
                c && this.path !== "/" ? "#!" + this.path : this.canonicalPath
              );
              document.title = this.title;
            };
            function m(e, t) {
              t = t || {};
              this.path = e === "*" ? "(.*)" : e;
              this.method = "GET";
              this.regexp = i(this.path, (this.keys = []), t);
            }
            d.Route = m;
            m.prototype.middleware = function (e) {
              var t = this;
              return function (n, i) {
                if (t.match(n.path, n.params)) return e(n, i);
                i();
              };
            };
            m.prototype.match = function (e, t) {
              var n = this.keys,
                i = e.indexOf("?"),
                r = ~i ? e.slice(0, i) : e,
                o = this.regexp.exec(decodeURIComponent(r));
              if (!o) return false;
              for (var a = 1, s = o.length; a < s; ++a) {
                var l = n[a - 1];
                var u = p(o[a]);
                if (u !== undefined || !hasOwnProperty.call(t, l.name)) {
                  t[l.name] = u;
                }
              }
              return true;
            };
            var g = (function () {
              var e = false;
              if ("undefined" === typeof window) {
                return;
              }
              if (document.readyState === "complete") {
                e = true;
              } else {
                window.addEventListener("load", function () {
                  setTimeout(function () {
                    e = true;
                  }, 0);
                });
              }
              return function t(n) {
                if (!e) return;
                if (n.state) {
                  var i = n.state.path;
                  d.replace(i, n.state);
                } else {
                  d.show(o.pathname + o.hash, undefined, undefined, false);
                }
              };
            })();
            function y(e) {
              if (1 !== b(e)) return;
              if (e.metaKey || e.ctrlKey || e.shiftKey) return;
              if (e.defaultPrevented) return;
              var t = e.path ? e.path[0] : e.target;
              while (t && "A" !== t.nodeName) t = t.parentNode;
              if (!t || "A" !== t.nodeName) return;
              if (
                t.hasAttribute("download") ||
                t.getAttribute("rel") === "external"
              )
                return;
              var i = t.getAttribute("href");
              if (!c && t.pathname === o.pathname && (t.hash || "#" === i))
                return;
              if (i && i.indexOf("mailto:") > -1) return;
              if (t.target) return;
              if (!w(t.href)) return;
              if (t.pathname + t.search === o.pathname + o.search) {
                e.preventDefault();
                return;
              }
              var r = t.pathname + t.search + (t.hash || "");
              if (typeof n !== "undefined" && r.match(/^\/[a-zA-Z]:\//)) {
                r = r.replace(/^\/[a-zA-Z]:\//, "/");
              }
              var a = r;
              if (r.indexOf(l) === 0) {
                r = r.substr(l.length);
              }
              if (c) r = r.replace("#!", "");
              if (l && a === r) return;
              e.preventDefault();
              d.show(a);
            }
            function b(e) {
              e = e || window.event;
              return null === e.which ? e.button : e.which;
            }
            function w(e) {
              var t = o.protocol + "//" + o.hostname;
              if (o.port) t += ":" + o.port;
              return e && 0 === e.indexOf(t);
            }
            d.sameOrigin = w;
          }).call(this, e("_process"));
        },
        { _process: 2, "path-to-regexp": 3 },
      ],
      2: [
        function (e, t, n) {
          var i = (t.exports = {});
          i.nextTick = (function () {
            var e = typeof window !== "undefined" && window.setImmediate;
            var t = typeof window !== "undefined" && window.MutationObserver;
            var n =
              typeof window !== "undefined" &&
              window.postMessage &&
              window.addEventListener;
            if (e) {
              return function (e) {
                return window.setImmediate(e);
              };
            }
            var i = [];
            if (t) {
              var r = document.createElement("div");
              var o = new MutationObserver(function () {
                var e = i.slice();
                i.length = 0;
                e.forEach(function (e) {
                  e();
                });
              });
              o.observe(r, { attributes: true });
              return function e(t) {
                if (!i.length) {
                  r.setAttribute("yes", "no");
                }
                i.push(t);
              };
            }
            if (n) {
              window.addEventListener(
                "message",
                function (e) {
                  var t = e.source;
                  if (
                    (t === window || t === null) &&
                    e.data === "process-tick"
                  ) {
                    e.stopPropagation();
                    if (i.length > 0) {
                      var n = i.shift();
                      n();
                    }
                  }
                },
                true
              );
              return function e(t) {
                i.push(t);
                window.postMessage("process-tick", "*");
              };
            }
            return function e(t) {
              setTimeout(t, 0);
            };
          })();
          i.title = "browser";
          i.browser = true;
          i.env = {};
          i.argv = [];
          function r() {}
          i.on = r;
          i.addListener = r;
          i.once = r;
          i.off = r;
          i.removeListener = r;
          i.removeAllListeners = r;
          i.emit = r;
          i.binding = function (e) {
            throw new Error("process.binding is not supported");
          };
          i.cwd = function () {
            return "/";
          };
          i.chdir = function (e) {
            throw new Error("process.chdir is not supported");
          };
        },
        {},
      ],
      3: [
        function (e, t, n) {
          var i = e("isarray");
          t.exports = m;
          t.exports.parse = o;
          t.exports.compile = a;
          t.exports.tokensToFunction = s;
          t.exports.tokensToRegExp = v;
          var r = new RegExp(
            [
              "(\\\\.)",
              "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))",
            ].join("|"),
            "g"
          );
          function o(e) {
            var t = [];
            var n = 0;
            var i = 0;
            var o = "";
            var a;
            while ((a = r.exec(e)) != null) {
              var s = a[0];
              var l = a[1];
              var c = a.index;
              o += e.slice(i, c);
              i = c + s.length;
              if (l) {
                o += l[1];
                continue;
              }
              if (o) {
                t.push(o);
                o = "";
              }
              var f = a[2];
              var d = a[3];
              var h = a[4];
              var p = a[5];
              var v = a[6];
              var m = a[7];
              var g = v === "+" || v === "*";
              var y = v === "?" || v === "*";
              var b = f || "/";
              var w = h || p || (m ? ".*" : "[^" + b + "]+?");
              t.push({
                name: d || n++,
                prefix: f || "",
                delimiter: b,
                optional: y,
                repeat: g,
                pattern: u(w),
              });
            }
            if (i < e.length) {
              o += e.substr(i);
            }
            if (o) {
              t.push(o);
            }
            return t;
          }
          function a(e) {
            return s(o(e));
          }
          function s(e) {
            var t = new Array(e.length);
            for (var n = 0; n < e.length; n++) {
              if (typeof e[n] === "object") {
                t[n] = new RegExp("^" + e[n].pattern + "$");
              }
            }
            return function (n) {
              var r = "";
              var o = n || {};
              for (var a = 0; a < e.length; a++) {
                var s = e[a];
                if (typeof s === "string") {
                  r += s;
                  continue;
                }
                var l = o[s.name];
                var u;
                if (l == null) {
                  if (s.optional) {
                    continue;
                  } else {
                    throw new TypeError(
                      'Expected "' + s.name + '" to be defined'
                    );
                  }
                }
                if (i(l)) {
                  if (!s.repeat) {
                    throw new TypeError(
                      'Expected "' +
                        s.name +
                        '" to not repeat, but received "' +
                        l +
                        '"'
                    );
                  }
                  if (l.length === 0) {
                    if (s.optional) {
                      continue;
                    } else {
                      throw new TypeError(
                        'Expected "' + s.name + '" to not be empty'
                      );
                    }
                  }
                  for (var c = 0; c < l.length; c++) {
                    u = encodeURIComponent(l[c]);
                    if (!t[a].test(u)) {
                      throw new TypeError(
                        'Expected all "' +
                          s.name +
                          '" to match "' +
                          s.pattern +
                          '", but received "' +
                          u +
                          '"'
                      );
                    }
                    r += (c === 0 ? s.prefix : s.delimiter) + u;
                  }
                  continue;
                }
                u = encodeURIComponent(l);
                if (!t[a].test(u)) {
                  throw new TypeError(
                    'Expected "' +
                      s.name +
                      '" to match "' +
                      s.pattern +
                      '", but received "' +
                      u +
                      '"'
                  );
                }
                r += s.prefix + u;
              }
              return r;
            };
          }
          function l(e) {
            return e.replace(/([.+*?=^!:${}()[\]|\/])/g, "\\$1");
          }
          function u(e) {
            return e.replace(/([=!:$\/()])/g, "\\$1");
          }
          function c(e, t) {
            e.keys = t;
            return e;
          }
          function f(e) {
            return e.sensitive ? "" : "i";
          }
          function d(e, t) {
            var n = e.source.match(/\((?!\?)/g);
            if (n) {
              for (var i = 0; i < n.length; i++) {
                t.push({
                  name: i,
                  prefix: null,
                  delimiter: null,
                  optional: false,
                  repeat: false,
                  pattern: null,
                });
              }
            }
            return c(e, t);
          }
          function h(e, t, n) {
            var i = [];
            for (var r = 0; r < e.length; r++) {
              i.push(m(e[r], t, n).source);
            }
            var o = new RegExp("(?:" + i.join("|") + ")", f(n));
            return c(o, t);
          }
          function p(e, t, n) {
            var i = o(e);
            var r = v(i, n);
            for (var a = 0; a < i.length; a++) {
              if (typeof i[a] !== "string") {
                t.push(i[a]);
              }
            }
            return c(r, t);
          }
          function v(e, t) {
            t = t || {};
            var n = t.strict;
            var i = t.end !== false;
            var r = "";
            var o = e[e.length - 1];
            var a = typeof o === "string" && /\/$/.test(o);
            for (var s = 0; s < e.length; s++) {
              var u = e[s];
              if (typeof u === "string") {
                r += l(u);
              } else {
                var c = l(u.prefix);
                var d = u.pattern;
                if (u.repeat) {
                  d += "(?:" + c + d + ")*";
                }
                if (u.optional) {
                  if (c) {
                    d = "(?:" + c + "(" + d + "))?";
                  } else {
                    d = "(" + d + ")?";
                  }
                } else {
                  d = c + "(" + d + ")";
                }
                r += d;
              }
            }
            if (!n) {
              r = (a ? r.slice(0, -2) : r) + "(?:\\/(?=$))?";
            }
            if (i) {
              r += "$";
            } else {
              r += n && a ? "" : "(?=\\/|$)";
            }
            return new RegExp("^" + r, f(t));
          }
          function m(e, t, n) {
            t = t || [];
            if (!i(t)) {
              n = t;
              t = [];
            } else if (!n) {
              n = {};
            }
            if (e instanceof RegExp) {
              return d(e, t, n);
            }
            if (i(e)) {
              return h(e, t, n);
            }
            return p(e, t, n);
          }
        },
        { isarray: 4 },
      ],
      4: [
        function (e, t, n) {
          t.exports =
            Array.isArray ||
            function (e) {
              return Object.prototype.toString.call(e) == "[object Array]";
            };
        },
        {},
      ],
    },
    {},
    [1]
  )(1);
});
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define("underscore", t)
    : ((e = "undefined" != typeof globalThis ? globalThis : e || self),
      (function () {
        var n = e._,
          i = (e._ = t());
        i.noConflict = function () {
          return (e._ = n), i;
        };
      })());
})(this, function () {
  var e = "1.13.2",
    t =
      ("object" == typeof self && self.self === self && self) ||
      ("object" == typeof global && global.global === global && global) ||
      Function("return this")() ||
      {},
    n = Array.prototype,
    i = Object.prototype,
    r = "undefined" != typeof Symbol ? Symbol.prototype : null,
    o = n.push,
    a = n.slice,
    s = i.toString,
    l = i.hasOwnProperty,
    u = "undefined" != typeof ArrayBuffer,
    c = "undefined" != typeof DataView,
    f = Array.isArray,
    d = Object.keys,
    h = Object.create,
    p = u && ArrayBuffer.isView,
    v = isNaN,
    m = isFinite,
    g = !{ toString: null }.propertyIsEnumerable("toString"),
    y = [
      "valueOf",
      "isPrototypeOf",
      "toString",
      "propertyIsEnumerable",
      "hasOwnProperty",
      "toLocaleString",
    ],
    b = Math.pow(2, 53) - 1;
  function w(e, t) {
    return (
      (t = null == t ? e.length - 1 : +t),
      function () {
        for (
          var n = Math.max(arguments.length - t, 0), i = Array(n), r = 0;
          r < n;
          r++
        )
          i[r] = arguments[r + t];
        switch (t) {
          case 0:
            return e.call(this, i);
          case 1:
            return e.call(this, arguments[0], i);
          case 2:
            return e.call(this, arguments[0], arguments[1], i);
        }
        var o = Array(t + 1);
        for (r = 0; r < t; r++) o[r] = arguments[r];
        return (o[t] = i), e.apply(this, o);
      }
    );
  }
  function _(e) {
    var t = typeof e;
    return "function" === t || ("object" === t && !!e);
  }
  function x(e) {
    return void 0 === e;
  }
  function C(e) {
    return !0 === e || !1 === e || "[object Boolean]" === s.call(e);
  }
  function k(e) {
    var t = "[object " + e + "]";
    return function (e) {
      return s.call(e) === t;
    };
  }
  var T = k("String"),
    E = k("Number"),
    S = k("Date"),
    $ = k("RegExp"),
    A = k("Error"),
    O = k("Symbol"),
    I = k("ArrayBuffer"),
    j = k("Function"),
    L = t.document && t.document.childNodes;
  "function" != typeof /./ &&
    "object" != typeof Int8Array &&
    "function" != typeof L &&
    (j = function (e) {
      return "function" == typeof e || !1;
    });
  var D = j,
    N = k("Object"),
    P = c && N(new DataView(new ArrayBuffer(8))),
    q = "undefined" != typeof Map && N(new Map()),
    R = k("DataView");
  var M = P
      ? function (e) {
          return null != e && D(e.getInt8) && I(e.buffer);
        }
      : R,
    H = f || k("Array");
  function F(e, t) {
    return null != e && l.call(e, t);
  }
  var U = k("Arguments");
  !(function () {
    U(arguments) ||
      (U = function (e) {
        return F(e, "callee");
      });
  })();
  var B = U;
  function W(e) {
    return E(e) && v(e);
  }
  function z(e) {
    return function () {
      return e;
    };
  }
  function V(e) {
    return function (t) {
      var n = e(t);
      return "number" == typeof n && n >= 0 && n <= b;
    };
  }
  function Q(e) {
    return function (t) {
      return null == t ? void 0 : t[e];
    };
  }
  var X = Q("byteLength"),
    K = V(X),
    Y =
      /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
  var G = u
      ? function (e) {
          return p ? p(e) && !M(e) : K(e) && Y.test(s.call(e));
        }
      : z(!1),
    J = Q("length");
  function Z(e, t) {
    t = (function (e) {
      for (var t = {}, n = e.length, i = 0; i < n; ++i) t[e[i]] = !0;
      return {
        contains: function (e) {
          return !0 === t[e];
        },
        push: function (n) {
          return (t[n] = !0), e.push(n);
        },
      };
    })(t);
    var n = y.length,
      r = e.constructor,
      o = (D(r) && r.prototype) || i,
      a = "constructor";
    for (F(e, a) && !t.contains(a) && t.push(a); n--; )
      (a = y[n]) in e && e[a] !== o[a] && !t.contains(a) && t.push(a);
  }
  function ee(e) {
    if (!_(e)) return [];
    if (d) return d(e);
    var t = [];
    for (var n in e) F(e, n) && t.push(n);
    return g && Z(e, t), t;
  }
  function te(e, t) {
    var n = ee(t),
      i = n.length;
    if (null == e) return !i;
    for (var r = Object(e), o = 0; o < i; o++) {
      var a = n[o];
      if (t[a] !== r[a] || !(a in r)) return !1;
    }
    return !0;
  }
  function ne(e) {
    return e instanceof ne
      ? e
      : this instanceof ne
      ? void (this._wrapped = e)
      : new ne(e);
  }
  function ie(e) {
    return new Uint8Array(e.buffer || e, e.byteOffset || 0, X(e));
  }
  (ne.VERSION = e),
    (ne.prototype.value = function () {
      return this._wrapped;
    }),
    (ne.prototype.valueOf = ne.prototype.toJSON = ne.prototype.value),
    (ne.prototype.toString = function () {
      return String(this._wrapped);
    });
  var re = "[object DataView]";
  function oe(e, t, n, i) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    if (null == e || null == t) return !1;
    if (e != e) return t != t;
    var o = typeof e;
    return (
      ("function" === o || "object" === o || "object" == typeof t) &&
      (function e(t, n, i, o) {
        t instanceof ne && (t = t._wrapped);
        n instanceof ne && (n = n._wrapped);
        var a = s.call(t);
        if (a !== s.call(n)) return !1;
        if (P && "[object Object]" == a && M(t)) {
          if (!M(n)) return !1;
          a = re;
        }
        switch (a) {
          case "[object RegExp]":
          case "[object String]":
            return "" + t == "" + n;
          case "[object Number]":
            return +t != +t ? +n != +n : 0 == +t ? 1 / +t == 1 / n : +t == +n;
          case "[object Date]":
          case "[object Boolean]":
            return +t == +n;
          case "[object Symbol]":
            return r.valueOf.call(t) === r.valueOf.call(n);
          case "[object ArrayBuffer]":
          case re:
            return e(ie(t), ie(n), i, o);
        }
        var l = "[object Array]" === a;
        if (!l && G(t)) {
          if (X(t) !== X(n)) return !1;
          if (t.buffer === n.buffer && t.byteOffset === n.byteOffset) return !0;
          l = !0;
        }
        if (!l) {
          if ("object" != typeof t || "object" != typeof n) return !1;
          var u = t.constructor,
            c = n.constructor;
          if (
            u !== c &&
            !(D(u) && u instanceof u && D(c) && c instanceof c) &&
            "constructor" in t &&
            "constructor" in n
          )
            return !1;
        }
        o = o || [];
        var f = (i = i || []).length;
        for (; f--; ) if (i[f] === t) return o[f] === n;
        if ((i.push(t), o.push(n), l)) {
          if ((f = t.length) !== n.length) return !1;
          for (; f--; ) if (!oe(t[f], n[f], i, o)) return !1;
        } else {
          var d,
            h = ee(t);
          if (((f = h.length), ee(n).length !== f)) return !1;
          for (; f--; )
            if (((d = h[f]), !F(n, d) || !oe(t[d], n[d], i, o))) return !1;
        }
        return i.pop(), o.pop(), !0;
      })(e, t, n, i)
    );
  }
  function ae(e) {
    if (!_(e)) return [];
    var t = [];
    for (var n in e) t.push(n);
    return g && Z(e, t), t;
  }
  function se(e) {
    var t = J(e);
    return function (n) {
      if (null == n) return !1;
      var i = ae(n);
      if (J(i)) return !1;
      for (var r = 0; r < t; r++) if (!D(n[e[r]])) return !1;
      return e !== he || !D(n[le]);
    };
  }
  var le = "forEach",
    ue = "has",
    ce = ["clear", "delete"],
    fe = ["get", ue, "set"],
    de = ce.concat(le, fe),
    he = ce.concat(fe),
    pe = ["add"].concat(ce, le, ue),
    ve = q ? se(de) : k("Map"),
    me = q ? se(he) : k("WeakMap"),
    ge = q ? se(pe) : k("Set"),
    ye = k("WeakSet");
  function be(e) {
    for (var t = ee(e), n = t.length, i = Array(n), r = 0; r < n; r++)
      i[r] = e[t[r]];
    return i;
  }
  function we(e) {
    for (var t = {}, n = ee(e), i = 0, r = n.length; i < r; i++)
      t[e[n[i]]] = n[i];
    return t;
  }
  function _e(e) {
    var t = [];
    for (var n in e) D(e[n]) && t.push(n);
    return t.sort();
  }
  function xe(e, t) {
    return function (n) {
      var i = arguments.length;
      if ((t && (n = Object(n)), i < 2 || null == n)) return n;
      for (var r = 1; r < i; r++)
        for (var o = arguments[r], a = e(o), s = a.length, l = 0; l < s; l++) {
          var u = a[l];
          (t && void 0 !== n[u]) || (n[u] = o[u]);
        }
      return n;
    };
  }
  var Ce = xe(ae),
    ke = xe(ee),
    Te = xe(ae, !0);
  function Ee(e) {
    if (!_(e)) return {};
    if (h) return h(e);
    var t = function () {};
    t.prototype = e;
    var n = new t();
    return (t.prototype = null), n;
  }
  function Se(e) {
    return H(e) ? e : [e];
  }
  function $e(e) {
    return ne.toPath(e);
  }
  function Ae(e, t) {
    for (var n = t.length, i = 0; i < n; i++) {
      if (null == e) return;
      e = e[t[i]];
    }
    return n ? e : void 0;
  }
  function Oe(e, t, n) {
    var i = Ae(e, $e(t));
    return x(i) ? n : i;
  }
  function Ie(e) {
    return e;
  }
  function je(e) {
    return (
      (e = ke({}, e)),
      function (t) {
        return te(t, e);
      }
    );
  }
  function Le(e) {
    return (
      (e = $e(e)),
      function (t) {
        return Ae(t, e);
      }
    );
  }
  function De(e, t, n) {
    if (void 0 === t) return e;
    switch (null == n ? 3 : n) {
      case 1:
        return function (n) {
          return e.call(t, n);
        };
      case 3:
        return function (n, i, r) {
          return e.call(t, n, i, r);
        };
      case 4:
        return function (n, i, r, o) {
          return e.call(t, n, i, r, o);
        };
    }
    return function () {
      return e.apply(t, arguments);
    };
  }
  function Ne(e, t, n) {
    return null == e ? Ie : D(e) ? De(e, t, n) : _(e) && !H(e) ? je(e) : Le(e);
  }
  function Pe(e, t) {
    return Ne(e, t, 1 / 0);
  }
  function qe(e, t, n) {
    return ne.iteratee !== Pe ? ne.iteratee(e, t) : Ne(e, t, n);
  }
  function Re() {}
  function Me(e, t) {
    return (
      null == t && ((t = e), (e = 0)),
      e + Math.floor(Math.random() * (t - e + 1))
    );
  }
  (ne.toPath = Se), (ne.iteratee = Pe);
  var He =
    Date.now ||
    function () {
      return new Date().getTime();
    };
  function Fe(e) {
    var t = function (t) {
        return e[t];
      },
      n = "(?:" + ee(e).join("|") + ")",
      i = RegExp(n),
      r = RegExp(n, "g");
    return function (e) {
      return (e = null == e ? "" : "" + e), i.test(e) ? e.replace(r, t) : e;
    };
  }
  var Ue = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&#x60;",
    },
    Be = Fe(Ue),
    We = Fe(we(Ue)),
    ze = (ne.templateSettings = {
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: /<%=([\s\S]+?)%>/g,
      escape: /<%-([\s\S]+?)%>/g,
    }),
    Ve = /(.)^/,
    Qe = {
      "'": "'",
      "\\": "\\",
      "\r": "r",
      "\n": "n",
      "\u2028": "u2028",
      "\u2029": "u2029",
    },
    Xe = /\\|'|\r|\n|\u2028|\u2029/g;
  function Ke(e) {
    return "\\" + Qe[e];
  }
  var Ye = /^\s*(\w|\$)+\s*$/;
  var Ge = 0;
  function Je(e, t, n, i, r) {
    if (!(i instanceof t)) return e.apply(n, r);
    var o = Ee(e.prototype),
      a = e.apply(o, r);
    return _(a) ? a : o;
  }
  var Ze = w(function (e, t) {
    var n = Ze.placeholder,
      i = function () {
        for (var r = 0, o = t.length, a = Array(o), s = 0; s < o; s++)
          a[s] = t[s] === n ? arguments[r++] : t[s];
        for (; r < arguments.length; ) a.push(arguments[r++]);
        return Je(e, i, this, this, a);
      };
    return i;
  });
  Ze.placeholder = ne;
  var et = w(function (e, t, n) {
      if (!D(e)) throw new TypeError("Bind must be called on a function");
      var i = w(function (r) {
        return Je(e, i, t, this, n.concat(r));
      });
      return i;
    }),
    tt = V(J);
  function nt(e, t, n, i) {
    if (((i = i || []), t || 0 === t)) {
      if (t <= 0) return i.concat(e);
    } else t = 1 / 0;
    for (var r = i.length, o = 0, a = J(e); o < a; o++) {
      var s = e[o];
      if (tt(s) && (H(s) || B(s)))
        if (t > 1) nt(s, t - 1, n, i), (r = i.length);
        else for (var l = 0, u = s.length; l < u; ) i[r++] = s[l++];
      else n || (i[r++] = s);
    }
    return i;
  }
  var it = w(function (e, t) {
    var n = (t = nt(t, !1, !1)).length;
    if (n < 1) throw new Error("bindAll must be passed function names");
    for (; n--; ) {
      var i = t[n];
      e[i] = et(e[i], e);
    }
    return e;
  });
  var rt = w(function (e, t, n) {
      return setTimeout(function () {
        return e.apply(null, n);
      }, t);
    }),
    ot = Ze(rt, ne, 1);
  function at(e) {
    return function () {
      return !e.apply(this, arguments);
    };
  }
  function st(e, t) {
    var n;
    return function () {
      return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n;
    };
  }
  var lt = Ze(st, 2);
  function ut(e, t, n) {
    t = qe(t, n);
    for (var i, r = ee(e), o = 0, a = r.length; o < a; o++)
      if (t(e[(i = r[o])], i, e)) return i;
  }
  function ct(e) {
    return function (t, n, i) {
      n = qe(n, i);
      for (var r = J(t), o = e > 0 ? 0 : r - 1; o >= 0 && o < r; o += e)
        if (n(t[o], o, t)) return o;
      return -1;
    };
  }
  var ft = ct(1),
    dt = ct(-1);
  function ht(e, t, n, i) {
    for (var r = (n = qe(n, i, 1))(t), o = 0, a = J(e); o < a; ) {
      var s = Math.floor((o + a) / 2);
      n(e[s]) < r ? (o = s + 1) : (a = s);
    }
    return o;
  }
  function pt(e, t, n) {
    return function (i, r, o) {
      var s = 0,
        l = J(i);
      if ("number" == typeof o)
        e > 0
          ? (s = o >= 0 ? o : Math.max(o + l, s))
          : (l = o >= 0 ? Math.min(o + 1, l) : o + l + 1);
      else if (n && o && l) return i[(o = n(i, r))] === r ? o : -1;
      if (r != r) return (o = t(a.call(i, s, l), W)) >= 0 ? o + s : -1;
      for (o = e > 0 ? s : l - 1; o >= 0 && o < l; o += e)
        if (i[o] === r) return o;
      return -1;
    };
  }
  var vt = pt(1, ft, ht),
    mt = pt(-1, dt);
  function gt(e, t, n) {
    var i = (tt(e) ? ft : ut)(e, t, n);
    if (void 0 !== i && -1 !== i) return e[i];
  }
  function yt(e, t, n) {
    var i, r;
    if (((t = De(t, n)), tt(e)))
      for (i = 0, r = e.length; i < r; i++) t(e[i], i, e);
    else {
      var o = ee(e);
      for (i = 0, r = o.length; i < r; i++) t(e[o[i]], o[i], e);
    }
    return e;
  }
  function bt(e, t, n) {
    t = qe(t, n);
    for (
      var i = !tt(e) && ee(e), r = (i || e).length, o = Array(r), a = 0;
      a < r;
      a++
    ) {
      var s = i ? i[a] : a;
      o[a] = t(e[s], s, e);
    }
    return o;
  }
  function wt(e) {
    var t = function (t, n, i, r) {
      var o = !tt(t) && ee(t),
        a = (o || t).length,
        s = e > 0 ? 0 : a - 1;
      for (r || ((i = t[o ? o[s] : s]), (s += e)); s >= 0 && s < a; s += e) {
        var l = o ? o[s] : s;
        i = n(i, t[l], l, t);
      }
      return i;
    };
    return function (e, n, i, r) {
      var o = arguments.length >= 3;
      return t(e, De(n, r, 4), i, o);
    };
  }
  var _t = wt(1),
    xt = wt(-1);
  function Ct(e, t, n) {
    var i = [];
    return (
      (t = qe(t, n)),
      yt(e, function (e, n, r) {
        t(e, n, r) && i.push(e);
      }),
      i
    );
  }
  function kt(e, t, n) {
    t = qe(t, n);
    for (var i = !tt(e) && ee(e), r = (i || e).length, o = 0; o < r; o++) {
      var a = i ? i[o] : o;
      if (!t(e[a], a, e)) return !1;
    }
    return !0;
  }
  function Tt(e, t, n) {
    t = qe(t, n);
    for (var i = !tt(e) && ee(e), r = (i || e).length, o = 0; o < r; o++) {
      var a = i ? i[o] : o;
      if (t(e[a], a, e)) return !0;
    }
    return !1;
  }
  function Et(e, t, n, i) {
    return (
      tt(e) || (e = be(e)),
      ("number" != typeof n || i) && (n = 0),
      vt(e, t, n) >= 0
    );
  }
  var St = w(function (e, t, n) {
    var i, r;
    return (
      D(t)
        ? (r = t)
        : ((t = $e(t)), (i = t.slice(0, -1)), (t = t[t.length - 1])),
      bt(e, function (e) {
        var o = r;
        if (!o) {
          if ((i && i.length && (e = Ae(e, i)), null == e)) return;
          o = e[t];
        }
        return null == o ? o : o.apply(e, n);
      })
    );
  });
  function $t(e, t) {
    return bt(e, Le(t));
  }
  function At(e, t, n) {
    var i,
      r,
      o = -1 / 0,
      a = -1 / 0;
    if (
      null == t ||
      ("number" == typeof t && "object" != typeof e[0] && null != e)
    )
      for (var s = 0, l = (e = tt(e) ? e : be(e)).length; s < l; s++)
        null != (i = e[s]) && i > o && (o = i);
    else
      (t = qe(t, n)),
        yt(e, function (e, n, i) {
          ((r = t(e, n, i)) > a || (r === -1 / 0 && o === -1 / 0)) &&
            ((o = e), (a = r));
        });
    return o;
  }
  var Ot = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
  function It(e) {
    return e
      ? H(e)
        ? a.call(e)
        : T(e)
        ? e.match(Ot)
        : tt(e)
        ? bt(e, Ie)
        : be(e)
      : [];
  }
  function jt(e, t, n) {
    if (null == t || n) return tt(e) || (e = be(e)), e[Me(e.length - 1)];
    var i = It(e),
      r = J(i);
    t = Math.max(Math.min(t, r), 0);
    for (var o = r - 1, a = 0; a < t; a++) {
      var s = Me(a, o),
        l = i[a];
      (i[a] = i[s]), (i[s] = l);
    }
    return i.slice(0, t);
  }
  function Lt(e, t) {
    return function (n, i, r) {
      var o = t ? [[], []] : {};
      return (
        (i = qe(i, r)),
        yt(n, function (t, r) {
          var a = i(t, r, n);
          e(o, t, a);
        }),
        o
      );
    };
  }
  var Dt = Lt(function (e, t, n) {
      F(e, n) ? e[n].push(t) : (e[n] = [t]);
    }),
    Nt = Lt(function (e, t, n) {
      e[n] = t;
    }),
    Pt = Lt(function (e, t, n) {
      F(e, n) ? e[n]++ : (e[n] = 1);
    }),
    qt = Lt(function (e, t, n) {
      e[n ? 0 : 1].push(t);
    }, !0);
  function Rt(e, t, n) {
    return t in n;
  }
  var Mt = w(function (e, t) {
      var n = {},
        i = t[0];
      if (null == e) return n;
      D(i)
        ? (t.length > 1 && (i = De(i, t[1])), (t = ae(e)))
        : ((i = Rt), (t = nt(t, !1, !1)), (e = Object(e)));
      for (var r = 0, o = t.length; r < o; r++) {
        var a = t[r],
          s = e[a];
        i(s, a, e) && (n[a] = s);
      }
      return n;
    }),
    Ht = w(function (e, t) {
      var n,
        i = t[0];
      return (
        D(i)
          ? ((i = at(i)), t.length > 1 && (n = t[1]))
          : ((t = bt(nt(t, !1, !1), String)),
            (i = function (e, n) {
              return !Et(t, n);
            })),
        Mt(e, i, n)
      );
    });
  function Ft(e, t, n) {
    return a.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)));
  }
  function Ut(e, t, n) {
    return null == e || e.length < 1
      ? null == t || n
        ? void 0
        : []
      : null == t || n
      ? e[0]
      : Ft(e, e.length - t);
  }
  function Bt(e, t, n) {
    return a.call(e, null == t || n ? 1 : t);
  }
  var Wt = w(function (e, t) {
      return (
        (t = nt(t, !0, !0)),
        Ct(e, function (e) {
          return !Et(t, e);
        })
      );
    }),
    zt = w(function (e, t) {
      return Wt(e, t);
    });
  function Vt(e, t, n, i) {
    C(t) || ((i = n), (n = t), (t = !1)), null != n && (n = qe(n, i));
    for (var r = [], o = [], a = 0, s = J(e); a < s; a++) {
      var l = e[a],
        u = n ? n(l, a, e) : l;
      t && !n
        ? ((a && o === u) || r.push(l), (o = u))
        : n
        ? Et(o, u) || (o.push(u), r.push(l))
        : Et(r, l) || r.push(l);
    }
    return r;
  }
  var Qt = w(function (e) {
    return Vt(nt(e, !0, !0));
  });
  function Xt(e) {
    for (var t = (e && At(e, J).length) || 0, n = Array(t), i = 0; i < t; i++)
      n[i] = $t(e, i);
    return n;
  }
  var Kt = w(Xt);
  function Yt(e, t) {
    return e._chain ? ne(t).chain() : t;
  }
  function Gt(e) {
    return (
      yt(_e(e), function (t) {
        var n = (ne[t] = e[t]);
        ne.prototype[t] = function () {
          var e = [this._wrapped];
          return o.apply(e, arguments), Yt(this, n.apply(ne, e));
        };
      }),
      ne
    );
  }
  yt(
    ["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
    function (e) {
      var t = n[e];
      ne.prototype[e] = function () {
        var n = this._wrapped;
        return (
          null != n &&
            (t.apply(n, arguments),
            ("shift" !== e && "splice" !== e) || 0 !== n.length || delete n[0]),
          Yt(this, n)
        );
      };
    }
  ),
    yt(["concat", "join", "slice"], function (e) {
      var t = n[e];
      ne.prototype[e] = function () {
        var e = this._wrapped;
        return null != e && (e = t.apply(e, arguments)), Yt(this, e);
      };
    });
  var Jt = Gt({
    __proto__: null,
    VERSION: e,
    restArguments: w,
    isObject: _,
    isNull: function (e) {
      return null === e;
    },
    isUndefined: x,
    isBoolean: C,
    isElement: function (e) {
      return !(!e || 1 !== e.nodeType);
    },
    isString: T,
    isNumber: E,
    isDate: S,
    isRegExp: $,
    isError: A,
    isSymbol: O,
    isArrayBuffer: I,
    isDataView: M,
    isArray: H,
    isFunction: D,
    isArguments: B,
    isFinite: function (e) {
      return !O(e) && m(e) && !isNaN(parseFloat(e));
    },
    isNaN: W,
    isTypedArray: G,
    isEmpty: function (e) {
      if (null == e) return !0;
      var t = J(e);
      return "number" == typeof t && (H(e) || T(e) || B(e))
        ? 0 === t
        : 0 === J(ee(e));
    },
    isMatch: te,
    isEqual: function (e, t) {
      return oe(e, t);
    },
    isMap: ve,
    isWeakMap: me,
    isSet: ge,
    isWeakSet: ye,
    keys: ee,
    allKeys: ae,
    values: be,
    pairs: function (e) {
      for (var t = ee(e), n = t.length, i = Array(n), r = 0; r < n; r++)
        i[r] = [t[r], e[t[r]]];
      return i;
    },
    invert: we,
    functions: _e,
    methods: _e,
    extend: Ce,
    extendOwn: ke,
    assign: ke,
    defaults: Te,
    create: function (e, t) {
      var n = Ee(e);
      return t && ke(n, t), n;
    },
    clone: function (e) {
      return _(e) ? (H(e) ? e.slice() : Ce({}, e)) : e;
    },
    tap: function (e, t) {
      return t(e), e;
    },
    get: Oe,
    has: function (e, t) {
      for (var n = (t = $e(t)).length, i = 0; i < n; i++) {
        var r = t[i];
        if (!F(e, r)) return !1;
        e = e[r];
      }
      return !!n;
    },
    mapObject: function (e, t, n) {
      t = qe(t, n);
      for (var i = ee(e), r = i.length, o = {}, a = 0; a < r; a++) {
        var s = i[a];
        o[s] = t(e[s], s, e);
      }
      return o;
    },
    identity: Ie,
    constant: z,
    noop: Re,
    toPath: Se,
    property: Le,
    propertyOf: function (e) {
      return null == e
        ? Re
        : function (t) {
            return Oe(e, t);
          };
    },
    matcher: je,
    matches: je,
    times: function (e, t, n) {
      var i = Array(Math.max(0, e));
      t = De(t, n, 1);
      for (var r = 0; r < e; r++) i[r] = t(r);
      return i;
    },
    random: Me,
    now: He,
    escape: Be,
    unescape: We,
    templateSettings: ze,
    template: function (e, t, n) {
      !t && n && (t = n), (t = Te({}, t, ne.templateSettings));
      var i = RegExp(
          [
            (t.escape || Ve).source,
            (t.interpolate || Ve).source,
            (t.evaluate || Ve).source,
          ].join("|") + "|$",
          "g"
        ),
        r = 0,
        o = "__p+='";
      e.replace(i, function (t, n, i, a, s) {
        return (
          (o += e.slice(r, s).replace(Xe, Ke)),
          (r = s + t.length),
          n
            ? (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
            : i
            ? (o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'")
            : a && (o += "';\n" + a + "\n__p+='"),
          t
        );
      }),
        (o += "';\n");
      var a,
        s = t.variable;
      if (s) {
        if (!Ye.test(s))
          throw new Error("variable is not a bare identifier: " + s);
      } else (o = "with(obj||{}){\n" + o + "}\n"), (s = "obj");
      o =
        "var __t,__p='',__j=Array.prototype.join," +
        "print=function(){__p+=__j.call(arguments,'');};\n" +
        o +
        "return __p;\n";
      try {
        a = new Function(s, "_", o);
      } catch (e) {
        throw ((e.source = o), e);
      }
      var l = function (e) {
        return a.call(this, e, ne);
      };
      return (l.source = "function(" + s + "){\n" + o + "}"), l;
    },
    result: function (e, t, n) {
      var i = (t = $e(t)).length;
      if (!i) return D(n) ? n.call(e) : n;
      for (var r = 0; r < i; r++) {
        var o = null == e ? void 0 : e[t[r]];
        void 0 === o && ((o = n), (r = i)), (e = D(o) ? o.call(e) : o);
      }
      return e;
    },
    uniqueId: function (e) {
      var t = ++Ge + "";
      return e ? e + t : t;
    },
    chain: function (e) {
      var t = ne(e);
      return (t._chain = !0), t;
    },
    iteratee: Pe,
    partial: Ze,
    bind: et,
    bindAll: it,
    memoize: function (e, t) {
      var n = function (i) {
        var r = n.cache,
          o = "" + (t ? t.apply(this, arguments) : i);
        return F(r, o) || (r[o] = e.apply(this, arguments)), r[o];
      };
      return (n.cache = {}), n;
    },
    delay: rt,
    defer: ot,
    throttle: function (e, t, n) {
      var i,
        r,
        o,
        a,
        s = 0;
      n || (n = {});
      var l = function () {
          (s = !1 === n.leading ? 0 : He()),
            (i = null),
            (a = e.apply(r, o)),
            i || (r = o = null);
        },
        u = function () {
          var u = He();
          s || !1 !== n.leading || (s = u);
          var c = t - (u - s);
          return (
            (r = this),
            (o = arguments),
            c <= 0 || c > t
              ? (i && (clearTimeout(i), (i = null)),
                (s = u),
                (a = e.apply(r, o)),
                i || (r = o = null))
              : i || !1 === n.trailing || (i = setTimeout(l, c)),
            a
          );
        };
      return (
        (u.cancel = function () {
          clearTimeout(i), (s = 0), (i = r = o = null);
        }),
        u
      );
    },
    debounce: function (e, t, n) {
      var i,
        r,
        o,
        a,
        s,
        l = function () {
          var u = He() - r;
          t > u
            ? (i = setTimeout(l, t - u))
            : ((i = null), n || (a = e.apply(s, o)), i || (o = s = null));
        },
        u = w(function (u) {
          return (
            (s = this),
            (o = u),
            (r = He()),
            i || ((i = setTimeout(l, t)), n && (a = e.apply(s, o))),
            a
          );
        });
      return (
        (u.cancel = function () {
          clearTimeout(i), (i = o = s = null);
        }),
        u
      );
    },
    wrap: function (e, t) {
      return Ze(t, e);
    },
    negate: at,
    compose: function () {
      var e = arguments,
        t = e.length - 1;
      return function () {
        for (var n = t, i = e[t].apply(this, arguments); n--; )
          i = e[n].call(this, i);
        return i;
      };
    },
    after: function (e, t) {
      return function () {
        if (--e < 1) return t.apply(this, arguments);
      };
    },
    before: st,
    once: lt,
    findKey: ut,
    findIndex: ft,
    findLastIndex: dt,
    sortedIndex: ht,
    indexOf: vt,
    lastIndexOf: mt,
    find: gt,
    detect: gt,
    findWhere: function (e, t) {
      return gt(e, je(t));
    },
    each: yt,
    forEach: yt,
    map: bt,
    collect: bt,
    reduce: _t,
    foldl: _t,
    inject: _t,
    reduceRight: xt,
    foldr: xt,
    filter: Ct,
    select: Ct,
    reject: function (e, t, n) {
      return Ct(e, at(qe(t)), n);
    },
    every: kt,
    all: kt,
    some: Tt,
    any: Tt,
    contains: Et,
    includes: Et,
    include: Et,
    invoke: St,
    pluck: $t,
    where: function (e, t) {
      return Ct(e, je(t));
    },
    max: At,
    min: function (e, t, n) {
      var i,
        r,
        o = 1 / 0,
        a = 1 / 0;
      if (
        null == t ||
        ("number" == typeof t && "object" != typeof e[0] && null != e)
      )
        for (var s = 0, l = (e = tt(e) ? e : be(e)).length; s < l; s++)
          null != (i = e[s]) && i < o && (o = i);
      else
        (t = qe(t, n)),
          yt(e, function (e, n, i) {
            ((r = t(e, n, i)) < a || (r === 1 / 0 && o === 1 / 0)) &&
              ((o = e), (a = r));
          });
      return o;
    },
    shuffle: function (e) {
      return jt(e, 1 / 0);
    },
    sample: jt,
    sortBy: function (e, t, n) {
      var i = 0;
      return (
        (t = qe(t, n)),
        $t(
          bt(e, function (e, n, r) {
            return { value: e, index: i++, criteria: t(e, n, r) };
          }).sort(function (e, t) {
            var n = e.criteria,
              i = t.criteria;
            if (n !== i) {
              if (n > i || void 0 === n) return 1;
              if (n < i || void 0 === i) return -1;
            }
            return e.index - t.index;
          }),
          "value"
        )
      );
    },
    groupBy: Dt,
    indexBy: Nt,
    countBy: Pt,
    partition: qt,
    toArray: It,
    size: function (e) {
      return null == e ? 0 : tt(e) ? e.length : ee(e).length;
    },
    pick: Mt,
    omit: Ht,
    first: Ut,
    head: Ut,
    take: Ut,
    initial: Ft,
    last: function (e, t, n) {
      return null == e || e.length < 1
        ? null == t || n
          ? void 0
          : []
        : null == t || n
        ? e[e.length - 1]
        : Bt(e, Math.max(0, e.length - t));
    },
    rest: Bt,
    tail: Bt,
    drop: Bt,
    compact: function (e) {
      return Ct(e, Boolean);
    },
    flatten: function (e, t) {
      return nt(e, t, !1);
    },
    without: zt,
    uniq: Vt,
    unique: Vt,
    union: Qt,
    intersection: function (e) {
      for (var t = [], n = arguments.length, i = 0, r = J(e); i < r; i++) {
        var o = e[i];
        if (!Et(t, o)) {
          var a;
          for (a = 1; a < n && Et(arguments[a], o); a++);
          a === n && t.push(o);
        }
      }
      return t;
    },
    difference: Wt,
    unzip: Xt,
    transpose: Xt,
    zip: Kt,
    object: function (e, t) {
      for (var n = {}, i = 0, r = J(e); i < r; i++)
        t ? (n[e[i]] = t[i]) : (n[e[i][0]] = e[i][1]);
      return n;
    },
    range: function (e, t, n) {
      null == t && ((t = e || 0), (e = 0)), n || (n = t < e ? -1 : 1);
      for (
        var i = Math.max(Math.ceil((t - e) / n), 0), r = Array(i), o = 0;
        o < i;
        o++, e += n
      )
        r[o] = e;
      return r;
    },
    chunk: function (e, t) {
      if (null == t || t < 1) return [];
      for (var n = [], i = 0, r = e.length; i < r; )
        n.push(a.call(e, i, (i += t)));
      return n;
    },
    mixin: Gt,
    default: ne,
  });
  return (Jt._ = Jt), Jt;
});
+(function (e) {
  "use strict";
  var t = function (n, i) {
    this.options = e.extend({}, t.DEFAULTS, i);
    this.$target = e(this.options.target)
      .on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this))
      .on(
        "click.bs.affix.data-api",
        e.proxy(this.checkPositionWithEventLoop, this)
      );
    this.$element = e(n);
    this.affixed = null;
    this.unpin = null;
    this.pinnedOffset = null;
    this.checkPosition();
  };
  t.VERSION = "3.3.6";
  t.RESET = "affix affix-top affix-bottom";
  t.DEFAULTS = { offset: 0, target: window };
  t.prototype.getState = function (e, t, n, i) {
    var r = this.$target.scrollTop();
    var o = this.$element.offset();
    var a = this.$target.height();
    if (n != null && this.affixed == "top") return r < n ? "top" : false;
    if (this.affixed == "bottom") {
      if (n != null) return r + this.unpin <= o.top ? false : "bottom";
      return r + a <= e - i ? false : "bottom";
    }
    var s = this.affixed == null;
    var l = s ? r : o.top;
    var u = s ? a : t;
    if (n != null && r <= n) return "top";
    if (i != null && l + u >= e - i) return "bottom";
    return false;
  };
  t.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(t.RESET).addClass("affix");
    var e = this.$target.scrollTop();
    var n = this.$element.offset();
    return (this.pinnedOffset = n.top - e);
  };
  t.prototype.checkPositionWithEventLoop = function () {
    setTimeout(e.proxy(this.checkPosition, this), 1);
  };
  t.prototype.checkPosition = function () {
    if (!this.$element.is(":visible")) return;
    var n = this.$element.height();
    var i = this.options.offset;
    var r = i.top;
    var o = i.bottom;
    var a = Math.max(e(document).height(), e(document.body).height());
    if (typeof i != "object") o = r = i;
    if (typeof r == "function") r = i.top(this.$element);
    if (typeof o == "function") o = i.bottom(this.$element);
    var s = this.getState(a, n, r, o);
    if (this.affixed != s) {
      if (this.unpin != null) this.$element.css("top", "");
      var l = "affix" + (s ? "-" + s : "");
      var u = e.Event(l + ".bs.affix");
      this.$element.trigger(u);
      if (u.isDefaultPrevented()) return;
      this.affixed = s;
      this.unpin = s == "bottom" ? this.getPinnedOffset() : null;
      this.$element
        .removeClass(t.RESET)
        .addClass(l)
        .trigger(l.replace("affix", "affixed") + ".bs.affix");
    }
    if (s == "bottom") {
      this.$element.offset({ top: a - n - o });
    }
  };
  function n(n) {
    return this.each(function () {
      var i = e(this);
      var r = i.data("bs.affix");
      var o = typeof n == "object" && n;
      if (!r) i.data("bs.affix", (r = new t(this, o)));
      if (typeof n == "string") r[n]();
    });
  }
  var i = e.fn.affix;
  e.fn.affix = n;
  e.fn.affix.Constructor = t;
  e.fn.affix.noConflict = function () {
    e.fn.affix = i;
    return this;
  };
  e(window).on("load", function () {
    e('[data-spy="affix"]').each(function () {
      var t = e(this);
      var i = t.data();
      i.offset = i.offset || {};
      if (i.offsetBottom != null) i.offset.bottom = i.offsetBottom;
      if (i.offsetTop != null) i.offset.top = i.offsetTop;
      n.call(t, i);
    });
  });
})(jQuery);
window.onPageLoad = window.onPageLoad || [];
function saveLang(e) {
  if (e) {
    window.default_lang = e;
    if (typeof Storage !== "undefined") {
      localStorage.default_lang = e;
    }
  } else {
    if (typeof Storage !== "undefined") {
      window.default_lang = localStorage.default_lang
        ? localStorage.default_lang
        : "java";
    }
  }
}
saveLang();
var onResizeBA = function () {
  var e = $(".before-after");
  if (e.length == 0) return;
  $(".before-after").show();
  $(".before-after").each(function () {
    var e = $("pre.code", $(this));
    if (window.innerWidth >= 768) {
      e.css("height", "auto");
      var t = 0;
      e.each(function () {
        t = $(this).outerHeight() > t ? $(this).outerHeight() : t;
      });
      e.css("height", t + "px");
    } else {
      $("pre.code", $(this)).css("height", "auto");
    }
  });
  if (e.length > 1) {
    e.hide();
    attachLangSwitcher(
      e.first(),
      ["java", "csharp", "php", "python", "typescript"],
      function (t) {
        e.hide();
        $(".before-after." + t).show();
      }
    );
  }
};
$(window).resize(onResizeBA);
window.onPageLoad.push(function () {
  onResizeBA();
  $(".before-after").each(function () {
    var e = $("pre", this).first();
    var t = $("pre", this).eq(1);
    $(e).scroll(function () {
      $(t).scrollTop($(e).scrollTop());
      $(t).scrollLeft($(e).scrollLeft());
    });
    $(t).scroll(function () {
      $(e).scrollTop($(t).scrollTop());
      $(e).scrollLeft($(t).scrollLeft());
    });
  });
});
var onResizeRelationsHeaders = function () {
  if (!$(".relations").length) return;
  $(".relations h3").height("auto");
  if ($(window).width() >= 768) {
    var e = 0;
    $(".relations h3").each(function () {
      e = $(this).height() > e ? $(this).height() : e;
    });
    $(".relations h3").height(e);
  }
};
$(window).resize(onResizeRelationsHeaders);
window.onPageLoad.push(function () {
  onResizeRelationsHeaders();
});
function attachLangSwitcher(e, t, n) {
  e.siblings(".lang-switcher").remove();
  var i = $('<div class="lang-switcher"></div>');
  e.before(i);
  for (var r = 0; r < t.length; r++) {
    var o = t[r];
    var a = o;
    switch (o) {
      case "java":
        a = "Java";
        break;
      case "php":
        a = "PHP";
        break;
      case "python":
        a = "Python";
        break;
      case "csharp":
        a = "C#";
        break;
      case "typescript":
        a = "TypeScript";
        break;
    }
    var s = $('<a href="#' + o + '" data-lang="' + o + '">' + a + "</a>");
    s.click(function (e) {
      var t = $(this);
      if (!t.is(".active")) {
        var r = t.data("lang");
        if (e.hasOwnProperty("originalEvent")) {
          saveLang(r);
        }
        n(r);
        $("a.active", i).removeClass("active");
        t.addClass("active");
      }
      return false;
    });
    i.append(s);
  }
  if ($("a[data-lang=" + window.default_lang + "]", i).length) {
    $("a[data-lang=" + window.default_lang + "]", i).click();
  } else {
    $("a:first-child", i).click();
  }
  return i;
}
window.onPageLoad = window.onPageLoad || [];
window.onPageLoad.push(function () {
  $(".pattern-example .feature .sidebar-navigation").remove();
  if ($(".page.pattern-example .sidebar-navigation").length) {
    $(".feature").append(
      $(".page.pattern-example .sidebar-navigation").clone()
    );
  }
});
window.onPageLoad.push(function () {
  $(".page .anchor").each(function () {
    $(this).attr("href", "#" + $(this).attr("id"));
  });
});
window.onPageLoad.push(function () {
  setTimeout(function () {
    var e = 1200;
    if (window.innerWidth < e) {
      return;
    }
    $(".structure").each(function () {
      var e = 60;
      var t = parseInt($(this).css("margin-top").replace("px", ""));
      var n = parseInt($(this).css("margin-bottom").replace("px", ""));
      if (!t) return;
      var i = 0;
      $(".image", $(this)).each(function () {
        i += $(this).outerHeight(true);
      });
      $(this).height(i);
      $(this)
        .parent()
        .height($(this).outerHeight(true) - e / 2);
    });
  }, 1e3);
});
window.onPageLoad = window.onPageLoad || [];
document.addEventListener("DOMContentLoaded", (e) => {
  window.onPageLoad.forEach(function (e) {
    e();
  });
});
var CodeColorize = (function () {
  let e = /^(p|li|div|h\\d|pre|blockquote|td)$/;
  function t(n, i) {
    if (n.nodeType == 3) return i.push(n.nodeValue);
    for (let r = n.firstChild; r; r = r.nextSibling) {
      t(r, i);
      if (e.test(n.nodeType)) i.push("\n");
    }
  }
  return function (e, n) {
    if (!e) {
      e = $("pre");
    }
    if (e.length === 0) {
      return;
    }
    if (!window.CodeMirror) {
      if (!window.CodeMirrorScripts) {
        return;
      }
      var i = 0;
      window.CodeMirrorScripts.forEach(function (e) {
        let t = document.createElement("script");
        t.src = e;
        t.async = false;
        var n = function () {
          i++;
          if (i === window.CodeMirrorScripts.length) {
            CodeColorize();
          }
        };
        t.onload = n;
        document.body.append(t);
      });
      return;
    }
    for (let i = 0; i < e.length; ++i) {
      let r = e[i];
      let o = r.getAttribute("lang") || n;
      switch (o) {
        case "pseudocode":
          o = "text/x-pseudocode";
          break;
        case "java":
          o = "text/x-java";
          break;
        case "cpp":
          o = "text/x-c++hdr";
          break;
        case "csharp":
          o = "text/x-csharp";
          break;
        case "php":
          o = "text/x-php";
          break;
        case "delphi":
          o = "text/x-pascal";
          break;
        case "python":
          o = "text/x-python";
          break;
        case "ruby":
          o = "text/x-ruby";
          break;
        case "typescript":
          o = "text/typescript";
          break;
        case "swift":
          o = "text/x-swift";
          break;
        case "go":
          o = "text/x-go";
          break;
      }
      if (!o) continue;
      let a = [];
      t(r, a);
      r.innerHTML = "";
      CodeMirror.runMode(a.join(""), o, r);
      r.className += " cm-s-default CodeMirror";
    }
  };
})();
var wasInteractive = false;
window.onPageLoad.push(function () {
  var e = false;
  var t = function (n) {
    if (!e) {
      CodeColorize();
      e = true;
      wasInteractive = true;
      document.removeEventListener("scroll", t);
      document.removeEventListener("mousemove", t);
    }
  };
  if (wasInteractive) {
    t();
  } else {
    document.addEventListener("scroll", t);
    document.addEventListener("mousemove", t);
  }
});
$(".menu-brand, .navigation-brand").mouseup(function () {
  $(this).blur();
});
document.addEventListener("DOMContentLoaded", (e) => {
  FastClick.attach(document.body);
});
document.addEventListener("DOMContentLoaded", (e) => {
  $(document).on("cart-block.show", function () {
    $(".navigation .social-likes").css("visibility", "hidden");
  });
  $(document).on("cart-block.hide", function () {
    $(".navigation .social-likes").css("visibility", "visible");
  });
});
document.addEventListener("DOMContentLoaded", (e) => {
  let t = 16;
  if ($(".sidebar").length) {
    t = Math.max(t, $(".sidebar")[0].offsetTop);
  }
  window.smooth_scroll = new SmoothScroll("a.smooth-scroll,a[data-scroll]", {
    offset: t,
    speed: 500,
    speedAsDuration: true,
  });
});
window.onPageLoad.push(function () {
  if (typeof Popover === "undefined") {
    return;
  }
  $(".tooltip").remove();
  $("abbr:not(.pop-attached)").each(function () {
    $(this).popover({
      trigger: "click hover",
      content: $(this).attr("title"),
      html: true,
      placement: "bottom",
      template:
        '<div class="popover" role="tooltip"><div class="arrow"></div><div class="popover-body"></div></div>',
    });
    $(this).addClass("pop").addClass("pop-attached");
  });
  $(".pop:not(.pop-attached)").each(function () {
    $(this).popover({
      trigger: "click hover",
      content: $(this).children(".pop-content").html(),
      html: true,
      placement: "bottom",
      template:
        '<div class="popover" role="tooltip"><div class="arrow"></div><div class="popover-body"></div></div>',
    });
    $(this).addClass("pop-attached");
  });
});
$("body").on("click touchstart", ".pop", function (e) {
  if (typeof Popover === "undefined") {
    return;
  }
  $(this).popover("show");
  return false;
});
$("body").on("click touchstart", function (e) {
  if (typeof Popover === "undefined") {
    return;
  }
  if ($(e.target).is(".pop")) {
    return;
  }
  $(".pop").popover("hide");
});
window.onPageLoad.push(function () {
  if (!$(".nano").length) return;
  setTimeout(function () {
    OverlayScrollbars(document.querySelectorAll(".nano"), {
      className: "os-theme-red",
    });
  }, 1);
});
window.onPageLoad.push(function () {
  $(".nav-tabs a").on("click", function (e) {
    $(this).tab("show");
    var t = this.hash.substr(1);
    let n = document.getElementById(t);
    if (n) {
      $(n).removeAttr("id");
    }
    window.location.hash = t;
    if (n) {
      $(n).attr("id", t);
    }
    e.preventDefault();
  });
  let e = function (e) {
    let t = e.replace(/^#/, "");
    if (!t) {
      return false;
    }
    let n = t.replace(/(--.*)/, "");
    let i = $(".nav-link[id='" + n + "-tab']");
    if (i.length) {
      i.tab("show");
    }
    let r = document.getElementById(t);
    if (r) {
      smooth_scroll.animateScroll(r);
    }
  };
  setTimeout(function () {
    e(window.location.hash);
  }, 310);
  var t = function () {
    $(".sidebar-navigation a").removeClass("active");
    var e = window.location.toString();
    var t = window.location.href.replace(window.location.origin, "");
    $('.sidebar-navigation a[href="' + e + '"]').addClass("active");
    $('.sidebar-navigation a[href="' + t + '"]').addClass("active");
    var n = window.location.hash;
    if (n) {
      $('.sidebar-navigation a[href="' + n + '"]').addClass("active");
    }
  };
  setTimeout(t, 10);
  $(".sidebar-navigation.with-scroll a").on("click", function (n) {
    if (e($(this).attr("href")) === false) {
      smooth_scroll.animateScroll($("body")[0]);
    }
    t();
    n.preventDefault();
    return false;
  });
});
window.onPageLoad.push(function () {
  var e = $(".feature:not(.no-affix)");
  if (!e.affix) {
    return;
  }
  e.affix({
    offset: {
      top: function () {
        var t =
          e.siblings(".page").offset().top +
          parseInt(e.siblings(".page").css("paddingTop"));
        return t;
      },
      bottom: function () {
        return (
          $(".footer").outerHeight(true) +
          parseInt($(".page").css("paddingBottom"))
        );
      },
    },
  });
});
window.onPageLoad.push(function (e) {
  if (!e) {
    return;
  }
  let t = true;
  $(".navigation-chapters a").each(function () {
    if (e.canonicalPath.indexOf($(this).attr("href")) == 0) {
      $(".navigation-chapters li.active").removeClass("active");
      $(this).parent().addClass("active");
      t = true;
    }
  });
  if (!t) {
    $(".navigation-chapters li.active").removeClass("active");
  }
});
window.onPageLoad.push(function (e) {
  let t = function () {
    if (!window.hasOwnProperty("ip_country") || !window.ip_country) {
      return;
    }
    if (window.ip_country == "UKR") {
      $(".social-likes-block .vkontakte").remove();
    }
    if (window.ip_country == "CHN" || window.locale == "zh") {
      $(".social-likes-block .facebook").remove();
    }
    $(".social-likes-block").socialLikes();
    document.removeEventListener("checkoutFormLoaded", t);
  };
  if (window.hasOwnProperty("ip_country") && window.ip_country) {
    t();
  } else {
    document.addEventListener("cartLoaded", t);
  }
});
let stickyFooterRecalculate = function () {
  if ($("body").is(".modal-open")) {
    return;
  }
  if ($(".footer").length) {
    $("body").css("marginBottom", $(".footer").outerHeight(true) + "px");
  } else {
    $("body").css("marginBottom", 0);
  }
};
window.onPageLoad.push(stickyFooterRecalculate);
window.onresize = stickyFooterRecalculate;
stickyFooterRecalculate();
window.onPageLoad.push(function (e) {
  if ($("html").attr("lang") === "zh") {
    return;
  }
  var t = $(window).width();
  if (t < 712) {
    var n = $("h1");
    if (!n.length || n.children().length) return;
    var i = n.text();
    i = i.replace("&nbsp;", " ");
    i = i.replace(" ", " ");
    var r = i.split(" ");
    for (var o = 0; o < r.length; o++) {
      r[o] = '<span class="h1-wrd">' + r[o] + "</span>";
    }
    n.html(r.join(" "));
    $(".h1-wrd", n).each(function () {
      if ($(this).outerWidth() > (t * 2) / 3) {
        $(this).css("hyphens", "auto").css("word-wrap", "break-word");
      }
    });
  }
});
window.onPageLoad = window.onPageLoad || [];
(() => {
  let e = true;
  let t = function (e) {
    if (e.keyCode === 27) {
      $(".screenshot-full.active").trigger("click");
    }
  };
  window.onPageLoad.push((n) => {
    if ($("body").is(".landing-refactoring")) {
      e = true;
      document.addEventListener("keydown", t);
      $(".screenshot-thumb").click(function () {
        $(this)
          .siblings(".screenshot-full")
          .each(function () {
            let e = $(this);
            if (!$(this).data("parent")) {
              $(this).data("parent", $(this).parent());
            }
            $(this)
              .children(".screenshot-content")
              .each(function () {
                let t = $(this).offset();
                $(this).css({
                  position: "fixed",
                  left: t.left - $(document).scrollLeft() + "px",
                  top: t.top - $(document).scrollTop() + "px",
                  width: "256px",
                  height: "192px",
                });
                e.appendTo("body");
                let n = Math.min(640, $(window).width());
                let i = n * (480 / 640);
                if (i > $(window).height()) {
                  i = Math.min(480, $(window).height());
                  n = i * (640 / 480);
                }
                $(this).animate(
                  {
                    left: ($(window).width() - n) / 2 + "px",
                    top: ($(window).height() - i) / 2 + "px",
                    width: n + "px",
                    height: i + "px",
                  },
                  250,
                  function () {
                    let e = $("video", $(this)).prop("outerHTML");
                    $("video", $(this)).remove();
                    $(this).append(e);
                    $("video", $(this)).each(function () {
                      this.currentTime = 0;
                      this.play();
                    });
                  }
                );
              });
            $(this).addClass("active");
          });
      });
      $(".screenshot-full").click(function (e) {
        if (e.target !== this) return;
        $(this).fadeOut(250, function () {
          $(this).removeClass("active");
          $(this).removeAttr("style");
          $(".screenshot-content", $(this)).removeAttr("style");
          $("video", $(this)).each(function () {
            this.currentTime = 0;
            this.pause();
          });
          let e = $(this).data("parent");
          $(this).appendTo(e);
        });
      });
    } else {
      if (e) {
        $("body > .screenshot-full").remove();
        document.removeEventListener("keydown", t);
      }
    }
  });
})();
var Loader = function () {
  this.id = "loader";
  this.url_structure = "ajax/structure/all.json";
  this.url_dynamic = "ajax/structure/dynamic.json";
  this.url_data = "ajax/data.json";
  this.data = {};
  this.dataFetched = false;
  this.requests = [];
  this.content = null;
  this.content_bundles = null;
  this.content_bundles_status = {};
  this.menu = null;
  this.domains = null;
  this.templates = null;
  this.hash = null;
  this.version = 0;
  this.loaded = false;
  this.use_cache = true;
  this.cache_locale = null;
  this.init();
};
Loader.prototype.hasStorage = function (e) {
  try {
    var t = window[e],
      n = "__storage_test__";
    t.setItem(n, n);
    t.removeItem(n);
    return true;
  } catch (e) {
    return false;
  }
};
Loader.prototype.getCookie = function (e) {
  var t = e + "=";
  var n = document.cookie.split(";");
  for (var i = 0; i < n.length; i++) {
    var r = n[i];
    while (r.charAt(0) == " ") r = r.substring(1, r.length);
    if (r.indexOf(t) == 0) return r.substring(t.length, r.length);
  }
  return null;
};
Loader.prototype.setCookie = function (e, t, n) {
  var i = "";
  if (n) {
    var r = new Date();
    r.setTime(r.getTime() + n * 24 * 60 * 60 * 1e3);
    i = "; expires=" + r.toUTCString();
  }
  document.cookie = e + "=" + (t || "") + i + "; path=/";
};
Loader.prototype.eraseCookie = function (e, t, n) {
  document.cookie = e + "=; Max-Age=-99999999;";
};
Loader.prototype.get = function (e) {
  if (this.use_cache && !this.hasStorage("localStorage")) {
    console.log(
      "Loader: Can not access local storage, cache will not be used."
    );
    this.use_cache = false;
  }
  if (this.use_cache) {
    return localStorage.getItem(this.id + "_" + e);
  } else {
    return this.getCookie(this.id + "_" + e);
  }
};
Loader.prototype.set = function (e, t) {
  this.remove(e);
  if (this.use_cache) {
    localStorage.setItem(this.id + "_" + e, t);
  } else {
    this.setCookie(this.id + "_" + e, t, 265);
  }
};
Loader.prototype.remove = function (e) {
  if (this.use_cache) {
    localStorage.removeItem(this.id + "_" + e);
  } else {
    this.eraseCookie(this.id + "_" + e);
  }
};
Loader.prototype.clearCache = function () {
  [
    "content",
    "content_bundles",
    "navigation",
    "menu",
    "domains",
    "templates",
    "time",
    "timestamp",
    "hash",
    "version",
    "cache_locale",
    "previous_problem",
  ].forEach(
    function (e) {
      this.remove(e);
    }.bind(this)
  );
};
Loader.prototype.getDataUrl = function () {
  return (window.localized_url_prefix_m || "/") + this.url_data;
};
Loader.prototype.getStructureUrl = function (e) {
  e = e || this.url_structure;
  return (
    (window.localized_url_prefix || "/") +
    e +
    (this.version ? "?q=" + this.version : "")
  );
};
Loader.prototype.init = function () {
  if (!window.loadContent) {
    return;
  }
  this.loadData();
  this.loadStructure().then(
    function () {
      this.notify();
    }.bind(this)
  );
};
Loader.prototype.loadData = function () {
  if (window.guru_data) {
    this.data = window.guru_data;
    this.dataFetched = true;
    this.processAllRequests();
  } else {
    $.ajax({
      url: this.getDataUrl(),
      crossDomain: true,
      xhrFields: { withCredentials: true },
      dataType: "json",
      success: function (e) {
        this.data = e;
        this.dataFetched = true;
        this.processAllRequests();
      }.bind(this),
    });
  }
};
Loader.prototype.loadStructure = function () {
  return new Promise(
    function (e, t) {
      var n = false;
      if (window.location.hash === "#reset") {
        n = true;
      }
      return this.reloadStructure(n).then(
        function () {
          this.checkHash().then(e);
        }.bind(this)
      );
    }.bind(this)
  );
};
Loader.prototype.reloadStructure = function (e) {
  e = e || false;
  if (e === true) {
    this.version = Math.floor(new Date().getTime() / 1e3);
    this.set("version", this.version);
    console.log(
      "Loader: Reset, structure version set to current time (" +
        this.version +
        ")."
    );
  } else if (typeof e === "string" || e instanceof String) {
    this.version = e;
    this.set("version", this.version);
    console.log(
      "Loader: Structure version set to latest hash (" + this.version + ")."
    );
  } else {
    this.version = this.get("version");
    if (this.version) {
      console.log(
        "Loader: Structure version set from storage (" + this.version + ")."
      );
    } else {
      console.log("Loader: No structure version detected.");
    }
  }
  return new Promise(
    function (e, t) {
      var n = {};
      var i = {};
      var r = {};
      var o = {};
      var a = {};
      var s = {};
      var l = null;
      Promise.all([
        $.ajax({
          url: this.getStructureUrl(),
          crossDomain: true,
          dataType: "json",
          success: function (e) {
            n = $.extend(n, e.content);
            i = e.content_bundles;
            r = e.menu;
            o = e.domains;
            a = e.translations;
            s = e.templates;
            l = e.hash;
          }.bind(this),
        }),
        this.request(this.url_dynamic).then(
          function (e) {
            n = $.extend(n, e.content);
          }.bind(this)
        ),
      ])
        .catch(t)
        .then(
          function () {
            this.content = n;
            this.content_bundles = i;
            this.content_bundles_status = {};
            this.menu = r;
            this.domains = o;
            this.translations = a;
            window.translations = this.translations;
            this.templates = {};
            for (var t in s) {
              this.templates[t] = _.template(s[t]);
            }
            this.hash = l;
            this.set("hash", this.hash);
            console.log(
              "Loader: Content structure has been loaded (" + this.hash + ")."
            );
            this.preloadContentBundle(
              window.location.pathname.replace(/^\//, "")
            );
            e();
          }.bind(this)
        );
    }.bind(this)
  );
};
Loader.prototype.checkHash = function () {
  return new Promise(
    function (e, t) {
      this.request("ajax/structure/hash")
        .then(
          function (n) {
            if (!this.hash || n !== this.hash) {
              console.log(
                "Loader: Content structure is outdated, reloading (new hash: " +
                  n +
                  ")."
              );
              this.reloadStructure(n).then(e).catch(t);
            } else {
              console.log("Loader: Content structure is actual.");
              e();
            }
          }.bind(this)
        )
        .catch(t);
    }.bind(this)
  );
};
Loader.prototype.notify = function () {
  var e = new Event("content-loaded");
  e.loader = this;
  document.dispatchEvent(e);
  this.loaded = true;
};
Loader.prototype.getContent = function (e) {
  this.preloadContentBundle(e);
  return this.content[e];
};
Loader.prototype.preloadContentBundle = function (e) {
  var t = [];
  e: for (var n in this.content_bundles) {
    var i = this.content_bundles[n];
    for (var r = 0; r < i.length; r++) {
      if (new RegExp("^" + i[r] + "$").test(e)) {
        t.push(n);
        continue e;
      }
    }
  }
  if (!t.length) {
    return;
  }
  var o = [];
  t.forEach(
    function (e) {
      if (this.isBundleLoaded(e)) {
        return;
      }
      var t = this;
      o.push(
        $.ajax({
          url: this.getStructureUrl(e),
          crossDomain: true,
          dataType: "json",
          success: function (e) {
            t.content = $.extend(t.content, e.content);
            t.markBundleLoaded(this.bundle);
          },
          context: { bundle: e },
        })
      );
    }.bind(this)
  );
  Promise.all(o).then(
    function () {
      console.log("Loader: all bundles loaded (" + t.join(", ") + ").");
    }.bind(this)
  );
};
Loader.prototype.markBundleLoaded = function (e) {
  this.content_bundles_status[e] = true;
};
Loader.prototype.isBundleLoaded = function (e) {
  return this.content_bundles_status[e];
};
Loader.prototype.getMenu = function (e) {
  return this.menu;
};
Loader.prototype.getDomains = function () {
  return this.domains;
};
Loader.prototype.getTemplate = function (e) {
  return this.templates[e];
};
Loader.prototype.request = function (e) {
  return new Promise(
    function (t, n) {
      if (this.dataFetched) {
        this.processRequest(e, t, n);
      } else {
        this.requests.push({ endpoint: e, resolve: t, reject: n });
      }
    }.bind(this)
  );
};
Loader.prototype.processAllRequests = function () {
  this.requests.forEach(
    function (e) {
      this.processRequest(e.endpoint, e.resolve, e.reject);
    }.bind(this)
  );
};
Loader.prototype.processRequest = function (e, t, n) {
  if (this.data[e] !== undefined) {
    if (typeof t === "function") t(this.data[e]);
  } else {
    if (typeof n === "function") n();
  }
};
window.loader = new Loader();
let Content = function () {
  this.initialized = false;
  this.loader = null;
  this.lastUri = window.location.pathname.replace(/^\//, "");
  this.animationTimer = null;
  document.addEventListener(
    "content-loaded",
    function (e) {
      this.init(e.loader);
    }.bind(this)
  );
  if (window.loader && window.loader.loaded) {
    this.init(window.loader);
  }
};
Content.prototype.init = function (e) {
  if (this.initialized) {
    return;
  }
  this.loader = e;
  this.render();
  this.initialized = true;
};
Content.prototype.render = function () {
  if (!page) {
    console.error("Content: Page.js is not loaded.");
    return;
  }
  page("*", this.onChange.bind(this));
  page.start({ dispatch: false });
};
Content.prototype.onChange = function (e) {
  if (!window.loader) {
    return;
  }
  let t = e.canonicalPath.replace(/^\//, "") || "/";
  let n = t.split("#");
  t = n[0] || "/";
  let i = n.length > 1 ? n[1] : "";
  if (this.lastUri === t) {
    return false;
  }
  let r = this.loader.getContent(t);
  if (!r || !$(".main-content").length) {
    page.stop();
    e.handled = false;
    window.location.href = e.canonicalPath;
    return false;
  }
  clearTimeout(this.animationTimer);
  $(".main-content").addClass("dynamic");
  let o = $(".main-content .main-content-container").attr("class");
  $(".main-content .main-content-container").remove();
  window.scrollTo(document.scrollLeft, 0);
  let a = this.loader.getTemplate(r.view || "page");
  let s = a ? a(r) : r.content;
  $(".main-content").append('<div class="' + o + '">' + s + "</div>");
  this.animationTimer = setTimeout(function () {
    $(".main-content").removeClass("dynamic");
  }, 500);
  var l = function (e) {
    var t = e + "=";
    var n = document.cookie.split(";");
    for (var i = 0; i < n.length; i++) {
      var r = n[i];
      while (r.charAt(0) == " ") r = r.substring(1, r.length);
      if (r.indexOf(t) == 0) return r.substring(t.length, r.length);
    }
    return null;
  };
  let u = this.loader.getDomains();
  let c = {
    title: function () {
      e.title = r.meta_title || r.title || document.title;
    },
    description: function () {
      if (r.description) {
        $("meta[name=description]").attr("description", r.description);
      }
    },
    canonical: function () {
      $('link[rel="canonical"]').attr(
        "href",
        window.location.origin + "/" + (t == "/" ? "" : t)
      );
    },
    html_locale: function () {
      document
        .getElementsByTagName("html")[0]
        .setAttribute("lang", r.htmllang || r.locale);
    },
    fix_locale_links: function (e, t) {
      let n = this.loader;
      $(".locale-link").each(function () {
        let e = $(this).data("locale");
        let n;
        if (t.alternativeUrls[e]) {
          n = t.alternativeUrls[e];
        } else {
          let t = window.locale_prefix || "";
          t = t === "/" ? t : "/" + t;
          n = u[e] + t;
        }
        $(this).attr("href", n);
      });
    },
    ga: function () {
      if (window.ga) {
        ga("set", {
          page:
            (typeof window.analytics_path_prefix === "string"
              ? window.analytics_path_prefix
              : "") + e.canonicalPath,
          title: r.title || document.title,
        });
        var t = l("user_id");
        if (t) {
          ga("set", "userId", t);
        } else {
          ga("set", "userId", null);
        }
        setTimeout(function () {
          if (window.dataLayer && window.google_optimize) {
            window.dataLayer.push({ event: "optimize.activate" });
          }
        }, 0);
        ga("send", "pageview");
      }
    },
    body_class: function () {
      $("body").removeClass($("body").data("body_class"));
      $("body").removeData("body_class");
      if (r.body_class) {
        $("body").data("body_class", r.body_class);
        $("body").addClass(r.body_class);
      }
    },
    page_class: function () {
      $(".main-content").removeClass($(".main-content").data("page_class"));
      $(".main-content").removeData("page_class");
      if (r.page_class) {
        $(".main-content").data("page_class", r.page_class);
        $(".main-content").addClass(r.page_class);
      }
    },
    product: function () {
      if (r.product) {
        $(".do-checkout").each(function () {
          $(this).data("product", r.product);
        });
      }
    },
    js_refreshes: function (e, t) {
      window.onPageLoad.forEach(function (t) {
        t(e);
      });
      $(".prom").trigger("pageview");
      $(".menu-list").trigger("change", {
        target: e.canonicalPath || "/",
        data: t,
      });
    },
  };
  for (let t in c) {
    c[t](e, r);
  }
  this.lastUri = t;
};
window.content = new Content();
window.onPageLoad = window.onPageLoad || [];
window.translations = window.translations || {};
window.trans = function (e, t) {
  var n = e.replace(/.*?::/, "");
  try {
    var i = window.translations[e];
    if (!i) {
      return n;
    }
    for (var r in t) {
      if (t.hasOwnProperty(r)) {
        i = i.replace(":" + r, t[r]);
        i = i.replace("{" + r + "}", t[r]);
      }
    }
    return i;
  } catch (e) {
    return n;
  }
};
window.url = function (e) {
  if (!locale) {
    return e;
  }
  e = e.replace(/^\/+/, "");
  return "/" + (window.locale_prefix || "") + e;
};
var Menu = function () {
  this.initialized = false;
  this.loader = null;
  this.attachEventListeners();
  document.addEventListener(
    "content-loaded",
    function (e) {
      this.init(e.loader);
    }.bind(this)
  );
  if (window.loader && window.loader.loaded) {
    this.init(window.loader);
  }
  var e = function () {
    $.ajax({
      url: (window.localized_url_prefix_m || "/") + "ajax/user",
      crossDomain: true,
      dataType: "json",
      xhrFields: { withCredentials: true },
      timeout: 6e4,
    }).done(t);
  };
  var t = function (e) {
    if (e.user && e._token) {
      console.log("Logged-in user session detected.");
      $(".navigation-menu .nav-login a .caption").text(
        e.translations["my_account"]
      );
      if (!$(".navigation-menu .nav-logout").length) {
        $(".navigation-menu").append(
          '<li class="nav-logout"><form method="post" action="' +
            window.localized_url_prefix_m +
            'logout"><input name="_token" type="hidden" value="' +
            e._token +
            '" ><button title="' +
            e.translations["log_out"] +
            '"><i class="fa fa-sign-out"></i> <span class="caption d-none d-xl-inline-block">' +
            e.translations["log_out"] +
            "</span></button></form></li>"
        );
      }
    } else {
      console.log("No user session detected.");
    }
  };
  if (window.loader) {
    window.loader.request("ajax/user").then(t).catch(e);
  } else {
    e();
  }
};
Menu.prototype.init = function (e) {
  if (this.initialized) {
    return;
  }
  this.initialized = true;
  this.loader = e;
  this.render();
};
Menu.prototype.attachEventListeners = function () {
  console.log("Menu: Attaching event listeners.");
  if (!$(".navigation-toggle").length) {
    return;
  }
  $("body").on("click", function (e) {
    if (!$(this).is(".sidebar-nav")) return;
    if (
      !$(e.target).is(".main-menu") &&
      $(e.target).parents(".main-menu").length === 0 &&
      !$(e.target).is(".navigation-toggle") &&
      $(e.target).parents(".navigation-toggle").length === 0
    ) {
      $("body").toggleClass("sidebar-nav");
      e.preventDefault();
    }
  });
  $(document).on("swipeleft", function () {
    $("body").removeClass("sidebar-nav");
  });
  $(document).on("swiperight", function () {
    $("body").addClass("sidebar-nav");
  });
  $(".navigation-toggle")
    .off("click")
    .on("click", function (e) {
      $("body").toggleClass("sidebar-nav");
      e.preventDefault();
    });
};
Menu.prototype.render = function () {
  return new Promise(
    function (e, t) {
      console.log("Menu: Rendering menu DOM elements.");
      var n = this.loader.getMenu();
      var i = this.loader.getTemplate("partials/menu");
      var r = this.loader.getTemplate("partials/menu")({
        menu: n,
        menuTemplate: i,
      });
      var o = $(r);
      this.updateActiveTrail(
        o,
        window.location.pathname,
        $(".breadcrumb a:last-child").attr("href")
      );
      o.bind(
        "change",
        function (e, t) {
          t.data = t.data || {};
          t.data.breadcrumb = t.data.breadcrumb || [];
          var n = t.data.breadcrumb[t.data.breadcrumb.length - 1];
          var i = n ? n.href : null;
          this.updateActiveTrail(e.target, t.target, i);
        }.bind(this)
      );
      o.on(
        "click",
        "a",
        function (e) {
          this.clickMenuItem(e.target);
        }.bind(this)
      );
      o.addClass("ready");
      $(".menu-list").replaceWith(o);
      document.dispatchEvent(new Event("menu-ready"));
      e();
    }.bind(this)
  );
};
Menu.prototype.updateActiveTrail = function (e, t, n) {
  var i = this;
  var r = function (t) {
    $("a", e).each(function () {
      var e = $(this).data("clean_url");
      if (!e) {
        e =
          "/" +
          $(this)
            .attr("href")
            .replace(/^.*\/\/[^\/]+/, "")
            .replace(/^\/*/, "")
            .replace(/#.*?$/, "");
        $(this).data("clean_url", e);
      }
      if (e === t) {
        i.clickMenuItem(this);
        o = true;
        return false;
      }
    });
    return o;
  };
  var o = r(t);
  if (!o && n) {
    o = r(n);
  }
  if (!o) {
    $(".trail", e).removeClass("trail");
    $(".active", e).removeClass("active");
  }
};
Menu.prototype.clickMenuItem = function (e) {
  var t = function (e) {
    var n = e.parents("li");
    var i = n.first();
    if (i.hasClass("empty") && $("ul", i).length) {
      e = $("ul > li:first-child > a", i).first();
    } else {
      return e;
    }
    return t(e);
  };
  var n = t($(e));
  var i = n.parents(".menu-list");
  var r = n.parents("li");
  var o = $(".trail", i);
  var a = $(".active", i);
  var s = [];
  var l = null;
  var u = 0;
  while (u < r.length) {
    var c = r[u];
    if (u == 0) {
      l = $(c);
      s.push(c);
    } else {
      s.push(c);
    }
    u++;
  }
  for (var u = 0; u < o.length; u++) {
    var f = false;
    for (var d = 0; d < s.length; d++) {
      if (o[u] == s[d]) {
        f = true;
        break;
      }
    }
    if (!f) {
      $(o[u]).removeClass("trail");
    }
  }
  for (var u = 0; u < s.length; u++) {
    if (!$(s[u]).is(".trail")) {
      if (i.is(".ready")) {
        $(s[u]).addClass("trail animated");
      } else {
        $(s[u]).addClass("trail");
      }
    }
  }
  if (a != l) {
    if (a.length) {
      a.removeClass("active");
    }
    if (l.length) {
      l.addClass("active");
    }
  }
};
window.menu = new Menu();
document.addEventListener("DOMContentLoaded", (e) => {
  if (!window.loader) {
    return;
  }
  function t() {
    try {
      window.localStorage.setItem("test_ls", "test");
      window.localStorage.removeItem("test_ls");
      return true;
    } catch (e) {
      return false;
    }
  }
  if (!t()) {
    return;
  }
  window.loader.request("ajax/geo").then(function (e) {
    if (e.country) {
      $("body").addClass("country-" + e.country);
    }
    var t = e["language-suggest"];
    if (!t) {
      return;
    }
    t.languages.forEach(function (e) {
      var n = $(".main-menu-lang a[data-locale=" + e + "]").attr("href");
      t.message = t.message.replace(
        new RegExp(
          '<a href="([^"]*?)" class="locale-link" data-locale="' + e + '"'
        ),
        '<a href="' + n + '" class="locale-link" data-locale="' + e + '"'
      );
    });
    var n = true;
    t.languages.forEach(function (e) {
      var i = $(".main-menu-lang a[data-locale=" + e + "]");
      i.addClass("suggest");
      var r = false;
      var o = 0;
      if (i.is(".active")) {
        r = true;
        window.localStorage.setItem("suggest-no-anim-" + e, "1");
      } else {
        r = window.localStorage.getItem("suggest-no-anim-" + e, true);
        o = window.localStorage.getItem("suggest-counter-" + e) || "0";
        if (o >= 3) {
          r = true;
        }
      }
      if (r) {
        i.addClass("suggest-no-anim");
      } else {
        o++;
        window.localStorage.setItem("suggest-counter-" + e, o);
        i.hover(function () {
          if (l) {
            l.tooltip("hide");
          }
          $(".main-menu-lang .suggest").each(function () {
            $(this).addClass("suggest-no-anim");
            var e = $(this).data("locale");
            window.localStorage.setItem("suggest-no-anim-" + e, "1");
          });
        });
        setTimeout(function () {
          i.addClass("suggest-no-anim");
        }, 5e3);
      }
      if (
        !window.location.hash &&
        t.message &&
        n &&
        !i.is(".suggest-no-anim")
      ) {
        var a = i;
        if ($("#dropdownLanguage").is(":visible")) {
          a = $("#dropdownLanguage");
        }
        var s = "";
        if ($("#dropdownLanguage").is(":visible")) {
          s = "tooltip-lang-suggest-on-right";
        }
        if (window.innerWidth <= 575) {
          s = "tooltip-lang-suggest-mobile";
        }
        var l = a
          .attr("title", "")
          .tooltip({
            placement: "bottom",
            offset: "0,0",
            animation: true,
            trigger: "manual",
            html: true,
            template:
              '<div class="tooltip tooltip-lang-suggest ' +
              s +
              '" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            title: t.message,
          })
          .tooltip("show");
        n = false;
        setTimeout(function () {
          l.tooltip("hide");
        }, 5e3);
        a.click(function () {
          l.tooltip("hide");
        });
      }
    });
  });
});
+(function () {
  var e = {
    defaults: {
      forum: "1",
      lang: "en",
      tab_corner_radius: 5,
      tab_font_size: 20,
      tab_image_hash: "ZmVlZGJhY2s%3D",
      tab_chat_hash: "Y2hhdA%3D%3D",
      tab_alignment: "right",
      tab_text_color: "#FFFFFF",
      tab_text_shadow_color: "#00000055",
      tab_bg_color: "#57A957",
      tab_hover_color: "#F45C5C",
      chat: { channel: null },
      chat_tab_show: false,
    },
    options: {},
    extend: function (e, t) {
      var n = JSON.parse(JSON.stringify(e));
      if (t) {
        for (var i in t) {
          if (t.hasOwnProperty(i)) {
            n[i] = t[i];
          }
        }
      }
      return n;
    },
    init: function (e, t, n, i, r) {
      this.alias = e || window.user_echo_alias || "";
      this.host = t || window.user_echo_host || "";
      this.sso_token = n || window.user_echo_sso_token || "";
      this.public_forum_id = i || window.user_echo_public_forum || "";
      this.private_forum_id = r || window.user_echo_private_forum || "";
      this.public_forum_url = window.user_echo_public_forum_url || "";
      this.options = this.extend(window._ues || this.defaults);
      if (this.host) {
        this.options.host = this.host;
      } else if (this.alias) {
        this.options.host = this.alias + ".userecho.com";
      }
      if (this.public_forum_id) {
        this.options.forum = this.public_forum_id;
      }
      if (this.public_forum_url) {
        this.options.forum_url = this.public_forum_url;
      }
      this.options.locale = window.user_echo_locale || this.options.locale;
      if (this.options.locale) {
        if (this.options.locale === "zh") {
          this.options.locale = "zh-hans";
        } else if (this.options.locale === "pt-br") {
          this.options.locale = "en";
        } else if (this.options.locale === "es") {
          this.options.locale = "en";
        } else if (this.options.locale === "fr") {
          this.options.locale = "en";
        } else if (this.options.locale === "ja") {
          this.options.locale = "en";
        } else if (this.options.locale === "ko") {
          this.options.locale = "en";
        } else if (this.options.locale === "pl") {
          this.options.locale = "en";
        }
      }
      if (!this.options.host) {
        console.log("UserEcho widget options are not defined.");
        return;
      }
      this.getSSOToken(
        function (e) {
          this.fixUserEchoLinkHref(e);
          this.bindClick(".userecho-public", this.public_forum_id);
          this.bindClick(".userecho-private", this.private_forum_id);
        }.bind(this)
      );
    },
    getSSOToken: function (e) {
      this.sso_token = this.sso_token || "";
      var t = function () {
        var t = new XMLHttpRequest();
        t.onreadystatechange = function () {
          if (t.readyState === XMLHttpRequest.DONE) {
            if (t.status === 200) {
              var n = JSON.parse(t.responseText);
              this.sso_token = n.token || "";
              e.call(this, this.sso_token);
            }
          }
        }.bind(this);
        t.open(
          "GET",
          (window.localized_url_prefix_m || "/") + "ajax/user_echo_token",
          true
        );
        t.withCredentials = true;
        t.send();
      }.bind(this);
      if (window.loader) {
        window.loader
          .request("ajax/user_echo_token")
          .then(
            function (t) {
              this.sso_token = t.token || "";
              e.call(this, this.sso_token);
            }.bind(this)
          )
          .catch(t);
      } else {
        t();
      }
    },
    createUserEcho: function (e, t) {
      t = t || this.public_forum_id;
      this.forum_loaded = t;
      window._ues = this.extend(this.options, {
        forum: t,
        lang: this.options.locale,
      });
      var n;
      n = document.getElementById("ue-overlay");
      if (n) n.parentNode.removeChild(n);
      n = document.getElementById("ue-dlg");
      if (n) n.parentNode.removeChild(n);
      window.UE = null;
      if (e) {
        window._ues.params = { sso_token: e };
      }
      (function () {
        var e = document.createElement("script");
        e.type = "text/javascript";
        e.async = true;
        e.src =
          ("https:" == document.location.protocol ? "https://" : "http://") +
          "cdn.userecho.com/js/widget-1.4.gz.js";
        var t = document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(e, t);
      })();
    },
    bindClick: function (e, t) {
      var n = function (e) {
        return function () {
          if (this.forum_loaded == e && window.UE) {
            UE.Popin.show();
            return false;
          }
          this.createUserEcho(this.sso_token, e);
          setTimeout(
            function () {
              if (window.UE) {
                UE.Popin.show();
              }
              var e = setInterval(
                function () {
                  if (
                    !document.querySelectorAll("#ue-dlg-content iframe").length
                  ) {
                    if (window.UE) {
                      UE.Popin.show();
                    }
                  } else {
                    clearInterval(e);
                  }
                }.bind(this),
                3e3
              );
            }.bind(this),
            300
          );
          return false;
        }.bind(this);
      }.bind(this);
      var i = document.querySelectorAll(e);
      for (var r = 0; r < i.length; r++) {
        var o = i[r];
        o.onclick = n(t);
      }
    },
    fixUserEchoLinkHref: function () {
      var e = function (e, t) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          if (this.options.forum_url) {
            i.href = this.options.forum_url;
          }
          var r = [];
          if (this.options.locale) {
            r.push("lang=" + this.options.locale);
          }
          if (this.sso_token) {
            r.push("sso_token=" + this.sso_token);
          }
          if (t && r.indexOf("show_feedback_form_private=true") == -1) {
            r.push("show_feedback_form_private=true");
          }
          r = r.join("&");
          if (r) {
            if (!i.search) {
              i.search = "?" + r;
            } else {
              i.search += "&" + r;
            }
          }
        }
      }.bind(this);
      e(document.querySelectorAll("a.userecho, a.userecho-public"));
      e(document.querySelectorAll("a.userecho-private"), true);
    },
  };
  e.init();
})();
function transliterate(e) {
  var t = {
    Ё: "Yo",
    Й: "I",
    Ц: "Ts",
    У: "U",
    К: "K",
    Е: "E",
    Н: "N",
    Г: "G",
    Ш: "Sh",
    Щ: "Sch",
    З: "Z",
    Х: "H",
    ё: "yo",
    й: "i",
    ц: "ts",
    у: "u",
    к: "k",
    е: "e",
    н: "n",
    г: "g",
    ш: "sh",
    щ: "sch",
    з: "z",
    х: "h",
    Ф: "F",
    Ы: "I",
    В: "V",
    А: "a",
    П: "P",
    Р: "R",
    О: "O",
    Л: "L",
    Д: "D",
    Ж: "ZH",
    Э: "E",
    ф: "f",
    ы: "i",
    в: "v",
    а: "a",
    п: "p",
    р: "r",
    о: "o",
    л: "l",
    д: "d",
    ж: "zh",
    э: "e",
    Я: "Ya",
    Ч: "Ch",
    С: "S",
    М: "M",
    И: "I",
    Т: "T",
    Б: "B",
    Ю: "YU",
    я: "ya",
    ч: "ch",
    с: "s",
    м: "m",
    и: "i",
    т: "t",
    б: "b",
    ю: "yu",
    і: "i",
    І: "I",
    ї: "yi",
    Ї: "Yi",
    є: "ye",
    Є: "Ye",
    ґ: "g",
    Ґ: "G",
    Ъ: "",
    ъ: "",
    ь: "",
    Ь: "",
  };
  return e
    .split("")
    .map(function (e) {
      return typeof t[e] == "undefined" ? e : t[e];
    })
    .join("");
}
var C_EU = [
  "AUT",
  "BEL",
  "BGR",
  "HRV",
  "CYP",
  "CZE",
  "DNK",
  "EST",
  "FIN",
  "FRA",
  "DEU",
  "GRC",
  "HUN",
  "IRL",
  "ITA",
  "LVA",
  "LTU",
  "LUX",
  "MLT",
  "NLD",
  "POL",
  "PRT",
  "ROU",
  "SVK",
  "SVN",
  "ESP",
  "SWE",
  "GBR",
];
var C_USA = "USA";
var C_Brazil = "BRA";
var C_Ukraine = "UKR";
var C_India = "IND";
var C_Canada = "CAN";
var C_Turkey = "TUR";
var BT_Personal = "personal";
var BT_Company = "company";
var USA_States = USA_States || {};
var CAN_States = CAN_States || {};
var IND_Districts = IND_Districts || [];
var BRA_States = BRA_States || [];
var TR_FieldIsRequired = TR_FieldIsRequired || "This field is required";
var CHECKOUT_AJAX_TIMEOUT =
  typeof CHECKOUT_AJAX_TIMEOUT !== "undefined" ? CHECKOUT_AJAX_TIMEOUT : 6e4;
var storage = {
  data: {},
  doNotSave: [
    "_token",
    "checkout_token",
    "id",
    "user_id",
    "cart",
    "upsell",
    "product",
    "card_number",
    "card_expiry",
    "card_cvc",
    "cardholder",
  ],
  doSave: [],
  init: function () {
    var e = typeof window.defaults != "undefined" ? window.defaults : {};
    if ($("input#order_id").length) {
      e.order = { id: $("input#order_id").val() };
    } else {
      ["country", "city", "state", "postal_code"].forEach(function (t) {
        if (window.hasOwnProperty("ip_" + t)) {
          e[t] = window["ip_" + t];
        }
      });
    }
    if ($("input#set_inventory_to_order_country").length) {
      e.set_inventory_to_order_country = $(
        "input#set_inventory_to_order_country"
      ).val();
    }
    this.data = $.extend({}, this.filterEmpty(e));
    if (typeof window.product != "undefined") {
      this.data.product = window.product;
    }
    return this;
  },
  filterEmpty: function (e) {
    for (var t in e) {
      if (!e[t] || e[t] == "") {
        delete e[t];
      }
    }
    return e;
  },
  setItem: function (e, t) {
    t = typeof t === "string" ? t.trim() : t;
    this.data[e] = t;
  },
  getItem: function (e) {
    return this.data[e];
  },
  getAll: function () {
    return this.data;
  },
};
var checkout_pane = {
  inputTimers: [],
  previousId: null,
  nextId: null,
  skipped: false,
  init: function (e) {
    this.checkout = e;
    this.storage = e.storage;
    this.$el = $("#step_" + this.id, $("#checkout"));
    if (!this.$el.length) {
      this.skipped = true;
      return;
    }
    this.$ = function (e) {
      return this.$el.find(e);
    };
    this.initFields();
  },
  isSkipped: function () {
    return this.skipped;
  },
  isReady: function () {
    return false;
  },
  getPreviousStepId: function () {
    var e = this.previousId;
    if (checkout.steps[e].isSkipped()) {
      e = checkout.steps[e].getPreviousStepId();
    }
    return e;
  },
  getNextStepId: function () {
    var e = this.nextId;
    if (e === "pay") {
      return "pay";
    }
    if (checkout.steps[e].isSkipped()) {
      e = checkout.steps[e].getNextStepId();
    }
    return e;
  },
  initFields: function () {
    if (this.skipped) {
      return;
    }
    for (var e in this.storage.getAll()) {
      if (e === "password") {
        continue;
      }
      var t = this.$("#" + e);
      if (t.length) {
        var n = t.val();
        n = typeof n === "string" ? n.trim() : n;
        if (n === undefined || n === null || n === "") {
          t.val(this.storage.getItem(e));
        }
        t.trigger("blur", [null, true]);
      }
    }
  },
  focus: function () {
    if (this.skipped) {
      return;
    }
    if (this.checkout.isiOS) {
      return;
    }
    if (this.$(".first-focus").length) {
      this.$(".first-focus").focus();
    } else if (this.$(".btn-payment-method").length) {
      this.$(".btn-payment-method:first").focus();
    } else if (this.$(".form-control").length) {
      this.$(".form-control:first").focus();
    }
  },
  show: function (e, t, n) {
    if (this.skipped) {
      return;
    }
    this.refresh();
    var i = this.$el;
    var r = $("#checkout");
    if (t) {
      var o;
      for (o = 0; o < checkout.showAnimationTimers.length; o++) {
        clearTimeout(checkout.showAnimationTimers[o]);
      }
      checkout.showAnimationTimers = [];
      for (o = 0; o < checkout.hideAnimationTimers.length; o++) {
        clearTimeout(checkout.hideAnimationTimers[o]);
      }
      checkout.hideAnimationTimers = [];
      i.removeClass("enable-pane-flip-show-back-transitions")
        .removeClass("prepare-pane-flip-show-back-transitions")
        .removeClass("enable-pane-flip-show-next-transitions")
        .removeClass("prepare-pane-flip-show-next-transitions")
        .removeClass("enable-pane-flip-hide-back-transitions")
        .removeClass("prepare-pane-flip-hide-back-transitions")
        .removeClass("enable-pane-flip-hide-next-transitions")
        .removeClass("prepare-pane-flip-hide-next-transitions");
      r.removeClass("enable-pane-flip-show-back-transitions")
        .removeClass("prepare-pane-flip-show-back-transitions")
        .removeClass("enable-pane-flip-show-next-transitions")
        .removeClass("prepare-pane-flip-show-next-transitions")
        .removeClass("enable-pane-flip-hide-back-transitions")
        .removeClass("prepare-pane-flip-hide-back-transitions")
        .removeClass("enable-pane-flip-hide-next-transitions")
        .removeClass("prepare-pane-flip-hide-next-transitions");
      i.removeClass("flip-back").removeClass("flip-next");
      if (typeof n == "function") {
        n();
      }
      return;
    }
    r.addClass(
      e
        ? "prepare-pane-flip-show-next-transitions"
        : "prepare-pane-flip-show-back-transitions"
    );
    i.addClass(
      e
        ? "prepare-pane-flip-show-next-transitions"
        : "prepare-pane-flip-show-back-transitions"
    );
    var a = setTimeout(() => {
      r.addClass(
        e
          ? "enable-pane-flip-show-next-transitions"
          : "enable-pane-flip-show-back-transitions"
      );
      i.addClass(
        e
          ? "enable-pane-flip-show-next-transitions"
          : "enable-pane-flip-show-back-transitions"
      );
      var t = setTimeout(() => {
        i.removeClass("flip-back").removeClass("flip-next");
        this.focus();
        r.removeClass("enable-pane-flip-show-back-transitions")
          .removeClass("prepare-pane-flip-show-back-transitions")
          .removeClass("enable-pane-flip-show-next-transitions")
          .removeClass("prepare-pane-flip-show-next-transitions");
        i.removeClass("enable-pane-flip-show-back-transitions")
          .removeClass("prepare-pane-flip-show-back-transitions")
          .removeClass("enable-pane-flip-show-next-transitions")
          .removeClass("prepare-pane-flip-show-next-transitions");
        if (typeof n == "function") {
          n();
        }
      }, checkout.paneAnimationSpeed);
      checkout.showAnimationTimers.push(t);
    }, checkout.cssUpdateDelay);
    checkout.showAnimationTimers.push(a);
  },
  hide: function (e, t, n) {
    if (this.skipped) {
      return;
    }
    var i = this.$el;
    var r = $("#checkout");
    if (t) {
      var o;
      for (o = 0; o < checkout.showAnimationTimers.length; o++) {
        clearTimeout(checkout.showAnimationTimers[o]);
      }
      checkout.showAnimationTimers = [];
      for (o = 0; o < checkout.hideAnimationTimers.length; o++) {
        clearTimeout(checkout.hideAnimationTimers[o]);
      }
      checkout.hideAnimationTimers = [];
      i.removeClass("enable-pane-flip-show-back-transitions")
        .removeClass("prepare-pane-flip-show-back-transitions")
        .removeClass("enable-pane-flip-show-next-transitions")
        .removeClass("prepare-pane-flip-show-next-transitions")
        .removeClass("enable-pane-flip-hide-back-transitions")
        .removeClass("prepare-pane-flip-hide-back-transitions")
        .removeClass("enable-pane-flip-hide-next-transitions")
        .removeClass("prepare-pane-flip-hide-next-transitions");
      r.removeClass("enable-pane-flip-show-back-transitions")
        .removeClass("prepare-pane-flip-show-back-transitions")
        .removeClass("enable-pane-flip-show-next-transitions")
        .removeClass("prepare-pane-flip-show-next-transitions")
        .removeClass("enable-pane-flip-hide-back-transitions")
        .removeClass("prepare-pane-flip-hide-back-transitions")
        .removeClass("enable-pane-flip-hide-next-transitions")
        .removeClass("prepare-pane-flip-hide-next-transitions");
      i.addClass(e ? "flip-next" : "flip-back").removeClass(
        e ? "flip-back" : "flip-next"
      );
      if (typeof n == "function") {
        n();
      }
      return;
    }
    r.addClass(
      e
        ? "prepare-pane-flip-hide-next-transitions"
        : "prepare-pane-flip-hide-back-transitions"
    );
    i.addClass(
      e
        ? "prepare-pane-flip-hide-next-transitions"
        : "prepare-pane-flip-hide-back-transitions"
    );
    var a = setTimeout(() => {
      r.addClass(
        e
          ? "enable-pane-flip-hide-next-transitions"
          : "enable-pane-flip-hide-back-transitions"
      );
      i.addClass(
        e
          ? "enable-pane-flip-hide-back-transitions"
          : "enable-pane-flip-hide-next-transitions"
      );
      i.addClass(e ? "flip-next" : "flip-back").removeClass(
        e ? "flip-back" : "flip-next"
      );
      var t = setTimeout(() => {
        r[0].scrollTop = 0;
        if (typeof n == "function") {
          n();
        }
        r.removeClass("enable-pane-flip-hide-back-transitions")
          .removeClass("prepare-pane-flip-hide-back-transitions")
          .removeClass("enable-pane-flip-hide-next-transitions")
          .removeClass("prepare-pane-flip-hide-next-transitions");
        i.removeClass("enable-pane-flip-hide-back-transitions")
          .removeClass("prepare-pane-flip-hide-back-transitions")
          .removeClass("enable-pane-flip-hide-next-transitions")
          .removeClass("prepare-pane-flip-hide-next-transitions");
      }, checkout.paneAnimationSpeed);
      checkout.hideAnimationTimers.push(t);
    }, checkout.cssUpdateDelay);
    checkout.hideAnimationTimers.push(a);
  },
  render: function () {
    if (this.skipped) {
      return;
    }
    var e = this;
    this.$(".btn-back").click(this.back.bind(this));
    this.$(".btn-next").click(this.next.bind(this));
    this.$(".form-group-check").each(function () {
      $(this).append('<span class="field-check hidden"></span>');
    });
    this.$(".form-control").each(function () {
      var t = $(this);
      t.keydown(
        function (t) {
          if (t.which === 10 || t.which === 13) {
            e.next(t);
          }
        }.bind(this)
      );
      t.blur(function (n, i, r) {
        var o = t.val();
        o = typeof o === "string" ? o.trim() : o;
        if (t.data("changed") || o) {
          e.validate(t.closest(".form-group"), r);
        }
      });
      t.trigger("blur", [null, true]);
      t.change(function () {
        t = $(this);
        var n = t.closest(".form-group");
        t.data("changed", true);
        if (t.timer) {
          clearTimeout(t.timer);
          delete t.timer;
        }
        t.timer = setTimeout(function () {
          e.validate(n);
        }, 500);
        e.inputTimers.push(t.timer);
      });
    });
  },
  refresh: function () {},
  back: function (e) {
    e.preventDefault();
    if (checkout.disabled) return;
    checkout.back();
  },
  next: function (e) {
    e.preventDefault();
    if (checkout.disabled) return;
    this.resetValidationErrors();
    if (this.validate()) {
      this.save();
      if (typeof this.doNext == "function") {
        this.doNext();
      } else {
        checkout.next();
      }
    } else {
      this.shake();
    }
  },
  doNext: function () {
    checkout.disabled = true;
    this.$(".btn-next").addClass("btn-progress");
    checkout
      .createOrder()
      .always(
        function () {
          this.$(".btn-next").removeClass("btn-progress");
          checkout.disabled = false;
        }.bind(this)
      )
      .done(
        function () {
          if (typeof this.cleanup == "function") {
            this.cleanup();
          }
          checkout.next();
        }.bind(this)
      );
  },
  resetValidationErrors: function () {
    for (var e = 0; e < this.inputTimers.length; e++) {
      clearTimeout(this.inputTimers[e]);
    }
    this.inputTimers = [];
    this.$(".messages .text").empty();
    this.$(".messages").hide();
    this.$(".modal-content").removeClass("shake");
    this.$(".form-group").removeClass("is-invalid");
  },
  isRequired: function (e) {
    var t = e.attr("required");
    return typeof t !== "undefined" && t !== false;
  },
  validations: {
    text: function (e, t) {
      return !this.isRequired(e) || (this.isRequired(e) && t.length > 0);
    },
    email: function (e, t) {
      return (
        (!this.isRequired(e) && !t) ||
        /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(t)
      );
    },
    phone: function (e, t) {
      return (!this.isRequired(e) && !t) || /^[\+\(\)\-0-9]+$/.test(t);
    },
    password: function (e, t) {
      return (!this.isRequired(e) && !t) || t.length >= 6;
    },
    card_number: function (e, t) {
      return $.payment.validateCardNumber(t);
    },
    card_expiry: function (e, t) {
      return $.payment.validateCardExpiry($.payment.cardExpiryVal(t));
    },
    card_cvc: function (e, t) {
      var n;
      if (this.$(".card_type .form-control").is(".manually-set")) {
        n = this.$(".card_type .form-control").val();
      }
      n =
        n ||
        $.payment.cardType(this.$(".card_number .form-control").val().trim());
      return $.payment.validateCardCVC(t, n);
    },
  },
  validate: function (e, t) {
    var n = this;
    e = e || this.$(".form-group");
    t = t || false;
    var i = true;
    e.each(function () {
      var e = $(this);
      var r = $(this).find(".form-control:not(.hidden)");
      r.each(function () {
        var e = $(this);
        var r = e.val() || "";
        r = typeof r === "string" ? r.trim() : r;
        var o = e.data("validation") || e.attr("type") || "text";
        var a = n.validations[o].call(n, e, r);
        if (!t) {
          e.toggleClass("is-invalid", !a);
          e.toggleClass("is-valid", Boolean(r) && a);
        }
        i = a ? i : false;
        var s = e.closest(".form-group").children(".field-check");
        if (i) {
          s.removeClass("hidden");
        } else {
          s.addClass("hidden");
        }
      });
    });
    return i;
  },
  save: function () {
    var e = this;
    this.$(".form-group").each(function () {
      var t = $(this).find(".form-control:not(.hidden):not(.madeHidden)");
      t.each(function () {
        var t = $(this);
        var n = t.val() || "";
        n = typeof n === "string" ? n.trim() : n;
        e.storage.setItem(t.attr("real_id") || t.attr("id"), n);
      });
    });
    this.$('input[type="radio"]:checked').each(function () {
      var t = $(this);
      var n = t.attr("name");
      var i = t.val();
      e.storage.setItem(n, i);
    });
  },
  showErrorMessage: function (e, t, n) {
    var i = "";
    if ($.isPlainObject(e)) {
      $.each(
        e,
        function (e, t) {
          if (e === "email" && $("#email2").attr("required")) {
            e = "email2";
          }
          i += t instanceof Array ? t.join("\n") : t;
          if (this.$("#" + e).length) {
            this.$("#" + e).removeClass("is-valid");
            this.$("#" + e).addClass("is-invalid");
          }
        }.bind(this)
      );
    } else {
      i = e;
    }
    if (t) {
      this.$(".messages .text").append("<li>" + i + "</li>");
    } else {
      this.$(".messages .text").html("<li>" + i + "</li>");
    }
    this.$(".messages").show();
    if (n) {
      if (typeof n == "string") {
        n = this.$(n);
      }
      n.toggleClass("is-invalid", true);
      n.toggleClass("is-valid", false);
    }
    gaOnCreate("send", "event", "Ecommerce", "Error message", i);
  },
  shake: function () {
    this.$(".modal-content").addClass("shake");
    setTimeout(
      function () {
        this.$(".modal-content").removeClass("shake");
      }.bind(this),
      500
    );
    gaOnCreate("send", "event", "Ecommerce", "Shake (" + this.id + ")");
  },
};
var step_login = $.extend({}, checkout_pane, {
  id: "login",
  previousId: null,
  nextId: "purchase_type",
  isReady: function () {
    return this.storage.getItem("user_id") && this.storage.getItem("email");
  },
  render: function () {
    checkout_pane.render.call(this);
    this.$("a.register").click(
      function (e) {
        this.$("a.register").addClass("active");
        this.$("a.sign-in").removeClass("active");
        this.$(".sign-in-box").fadeOut(
          100,
          function () {
            this.$(".sign-in-box .form-group-sign-in").hide();
            this.$(".sign-in-box .form-group-register").show();
            this.$(".sign-in-box").fadeIn(100);
          }.bind(this)
        );
        e.preventDefault();
      }.bind(this)
    );
    this.$("a.sign-in").click(
      function (e) {
        this.$("a.sign-in").addClass("active");
        this.$("a.register").removeClass("active");
        this.$(".sign-in-box").fadeOut(
          100,
          function () {
            this.$(".sign-in-box .form-group-sign-in").show();
            this.$(".sign-in-box .form-group-register").hide();
            this.$(".sign-in-box").fadeIn(100);
          }.bind(this)
        );
        e.preventDefault();
      }.bind(this)
    );
    this.$(".link-next").click(
      function (e) {
        this.$(".form-login #email").removeAttr("required");
        this.$(".form-login #password").removeAttr("required");
        checkout.next();
        e.preventDefault();
      }.bind(this)
    );
    this.refreshFields();
    if (this.isReady() && checkout.preRenderHash !== "#checkout/" + this.id) {
      checkout.next();
    }
  },
  refresh: function () {
    this.refreshFields();
    $(".social-login a").each(function () {
      var e = $(this).attr("href");
      var t = window.location.href.replace(/#.*$/, "");
      e = e.replace(
        /destination=([^&=]*)/,
        "destination=" + encodeURIComponent(t)
      );
      $(this).attr("href", e);
    });
  },
  refreshFields: function () {
    var e = this.storage.getItem("type") || 0;
    this.$(".form-buyer-account").toggle(e != 0);
    if (!this.storage.getItem("user_id")) {
      this.$(".form-different-account").hide();
      this.$(".form-login").show();
      this.$(".form-email").hide();
      this.$(".form-login #email")
        .attr("required", "required")
        .removeClass("hidden");
      this.$(".form-login #password")
        .attr("required", "required")
        .removeClass("hidden");
      this.$(".form-email #email2").removeAttr("required").addClass("hidden");
    } else if (!this.storage.getItem("email")) {
      this.$(".form-different-account").hide();
      this.$(".form-login").hide();
      this.$(".form-email").show();
      this.$(".form-login #email").addClass("hidden");
      this.$(".form-login #password").addClass("hidden");
      this.$(".form-email #email2")
        .attr("required", "required")
        .removeClass("hidden");
    } else {
      this.$(".form-different-account").show();
      this.$(".form-login").show();
      this.$(".form-email").hide();
      $("a.sign-in").click();
      this.$(".form-login #email")
        .attr("required", "required")
        .removeClass("hidden");
      this.$(".form-login #password")
        .attr("required", "required")
        .removeClass("hidden");
      this.$(".form-email #email2").removeAttr("required").addClass("hidden");
    }
  },
  cleanup: function () {
    setTimeout(
      function () {
        this.$(".form-login #password").val("");
      }.bind(this),
      checkout.paneAnimationSpeed * 2
    );
  },
});
var step_purchase_type = $.extend({}, checkout_pane, {
  id: "purchase_type",
  previousId: "login",
  nextId: "customer_details",
  render: function () {
    if (this.skipped) {
      return;
    }
    checkout_pane.render.call(this);
    this.$(".form-check-radio-panel").each(function () {
      $(this).click(function () {
        $(this)
          .children("input[type=radio]")
          .prop("checked", true)
          .trigger("change");
      });
      $(this)
        .children("input[type=radio]")
        .change(function () {
          $(this)
            .parents(".form-check-radio-panel-group")
            .children(".form-check-radio-panel.checked")
            .removeClass("checked");
          $(this)
            .parents(".form-check-radio-panel-group")
            .children(".form-check-radio-panel.first-focus")
            .removeClass("first-focus");
          $(this)
            .parents(".form-check-radio-panel")
            .addClass("checked first-focus");
        });
      $(this)
        .children("input[type=radio]")
        .focus(function () {
          $(this).parents(".form-check-radio-panel").focus();
        });
    });
  },
  back: function (e) {
    this.save();
    checkout.allSteps[this.previousId].refresh();
    checkout_pane.back.call(this, e);
  },
  initFields: function () {
    if (this.skipped) {
      return;
    }
    checkout_pane.initFields.call(this);
    var e = this.storage.getItem("type");
    if (e !== undefined) {
      var t = this.$("input[name=type][value=" + e + "]");
      t.prop("checked", true);
      t.parent("button").click();
      this.$("button").removeClass("first-focus");
      t.parent("button").addClass("first-focus");
    }
  },
});
var step_customer_details = $.extend({}, checkout_pane, {
  id: "customer_details",
  previousId: "purchase_type",
  nextId: "paysystems",
  isReady: function () {
    return this.validate(null, true) && checkout.getCurrentStep() === this;
  },
  render: function () {
    checkout_pane.render.call(this);
  },
  validate: function (e, t) {
    this.$(".messages .text").html("");
    this.$(".messages").hide();
    var n = checkout_pane.validate.call(this, e, t);
    if (n) {
      ["first_name", "last_name"].forEach(
        function (e) {
          n &= this.nameValidateFunc(e, t);
        }.bind(this)
      );
    }
    if (t) {
      if (
        this.$("#first_name").data("needs-confirm") ||
        this.$("#last_name").data("needs-confirm")
      ) {
        n = false;
      }
    }
    return n;
  },
  nameValidateFunc: function (e, t) {
    var n = true;
    var i = this.$("." + e + " input");
    if (!i.length) {
      return;
    }
    var r = i
      .val()
      .trim()
      .replace(/^[ \,\.\-_:;](.*?)[ \,\.\-_:;]$/, "$1");
    if (!r) {
      return;
    }
    return n;
  },
});
var step_paysystems = $.extend({}, checkout_pane, {
  id: "paysystems",
  previousId: "customer_details",
  nextId: null,
  init: function (e) {
    checkout_pane.init.call(this, e);
    if (typeof addGooglePay === "function") {
      addGooglePay();
    }
  },
  isReady: function () {
    return true;
  },
  render: function () {
    checkout_pane.render.call(this);
    var e = storage.getItem("totals_display")[this.storage.getItem("currency")];
    var t =
      storage.getItem("totals_display")[
        this.storage.getItem("visible_currency")
      ];
    if (e !== t) {
      this.$(".total").html(
        '<div class="visible-total">' +
          t +
          '</div><div class="real-total">(' +
          e +
          ")</div>"
      );
    } else {
      this.$(".total").html(e);
    }
    var n = this;
    this.$(".paysystems-show-hidden-payment-methods").click(function (e) {
      n.$(".hidden-payment-methods").slideDown();
      $(this).slideUp();
      e.preventDefault();
    });
    this.$(".btn-payment-method").click(this.paymentMethodClick.bind(this));
  },
  paymentMethodClick(e) {
    var t = $(e.target).closest(".btn-payment-method");
    if (this.checkout.disabled) {
      e.preventDefault();
      return;
    }
    if (
      this.storage.getItem("totals")[this.storage.getItem("currency")] === 0
    ) {
      this.checkout.shakeCart();
      e.preventDefault();
      return;
    }
    var n = t.data("url");
    var i = t.attr("id");
    if (n === "#checkout/card_details") {
      e.preventDefault();
      checkout.changeStepTo("card_details");
      return;
    }
    if (n === "#checkout/konbini") {
      e.preventDefault();
      checkout.changeStepTo("konbini");
      return;
    }
    if (n === "#checkout/ideal") {
      e.preventDefault();
      checkout.changeStepTo("ideal");
      return;
    }
    if (n === "#checkout/uah_confirmation") {
      n = t.data("pay-url");
      if (this.storage.getItem("currency") !== "UAH") {
        e.preventDefault();
        step_uah_confirmation.setPaymentUrl(n);
        step_uah_confirmation.setMethodId(i);
        checkout.changeStepTo("uah_confirmation");
        return;
      }
    }
    this.$(".btn-payment-method").removeClass("btn-progress");
    t.addClass("btn-progress");
    this.requestPaymentMethodDetails(n, i);
    e.preventDefault();
  },
  requestPaymentMethodDetails: function (e, t) {
    $(document).trigger("checkout.step", {
      products: checkout.getGACartProductsPayload(),
      step: "submit_payment",
      option: t,
    });
    $.ajax({
      method: "GET",
      url: e,
      data: {
        set_inventory_to_order_country: this.storage.getItem(
          "set_inventory_to_order_country"
        ),
        currency: this.storage.getItem("currency"),
        line_items: checkout.getCartContents(),
      },
      contentType: "application/json",
      crossDomain: true,
      xhrFields: { withCredentials: true },
      timeout: CHECKOUT_AJAX_TIMEOUT,
    })
      .done(this.doPaymentMethod.bind(this))
      .fail(this.errorPaymentMethod.bind(this));
  },
  doPaymentMethod: function (e, t, n) {
    if (!e.action) {
      this.errorPaymentMethod(n);
      return;
    }
    var i = $(
      '<form method="' +
        (e.method || "get") +
        '" action="' +
        e.action +
        '"></form>'
    );
    var r = function (e, t, n) {
      for (var i in n) {
        var o;
        if (!t) {
          o = i;
        } else {
          o = t + "[" + i + "]";
        }
        var a = n[i];
        if (typeof a === "object" && a !== null) {
          r(e, o, a);
        } else {
          e.append('<input type="hidden" name="' + o + '" value="' + a + '">');
        }
      }
    };
    if (e.data) {
      r(i, "", e.data);
    }
    window.onpageshow = function (e) {
      this.$(".btn-payment-method").removeClass("btn-progress");
      window.onpageshow = null;
    }.bind(this);
    i.appendTo("body").submit();
  },
  errorPaymentMethod: function (e, t, n) {
    this.$(".btn-payment-method").removeClass("btn-progress");
    checkout.error(e);
  },
});
var step_card_details = $.extend({}, checkout_pane, {
  id: "card_details",
  previousId: "paysystems",
  nextId: "pay",
  allFields: [
    "country",
    "street",
    "city",
    "state_i",
    "state_s",
    "postal_code",
    "phone",
    "company",
    "fiscal_code",
  ],
  visibleFields: ["country"],
  populateStatesList: function (e) {
    var t = this.$("input.state");
    var n = this.$("select.state");
    n.empty();
    var i = '<option value="" selected></option>';
    if (Array.isArray(e)) {
      e.forEach(function (e) {
        i += '<option value="' + e + '">' + e + "</option>";
      });
    } else if (typeof e === "object" && e !== null) {
      for (var r in e) {
        i += '<option value="' + r + '">' + e[r] + "</option>";
      }
    }
    n.html(i);
    n.val("");
    var o = t.val().trim();
    if ($('option[val="' + o + '"]', n).length) {
      n.val(o);
      n.addClass("is-valid");
      n.parent().children(".field-check").removeClass("hidden");
    } else {
      n.val("");
      n.removeClass("is-valid");
      n.parent().children(".field-check").addClass("hidden");
    }
  },
  toggleRequired: function (e, t) {
    var n = e.attr("required");
    if (n && !t) {
      e.removeAttr("required");
    } else if (!n && t) {
      e.attr("required", true);
    }
    if (!e.val()) {
      e.closest(".form-group").children(".field-check").addClass("hidden");
    }
  },
  toggleVisibility: function (e, t, n) {
    var i = !e.is(".madeHidden");
    if (i && !t) {
      if (n) {
        e.hide().addClass("madeHidden");
      } else {
        e.slideUp(checkout.revealAnimationSpeed).addClass("madeHidden");
      }
    } else if (!i && t) {
      if (n) {
        e.show().removeClass("madeHidden");
      } else {
        e.slideDown(checkout.revealAnimationSpeed).removeClass("madeHidden");
      }
    }
  },
  makeRequired: function (e) {
    this.toggleRequired(this.$(".country .form-control"), true);
    this.toggleRequired(this.$("input.state"), e.indexOf("state_i") !== -1);
    this.toggleRequired(this.$("select.state"), e.indexOf("state_s") !== -1);
    [
      "street",
      "city",
      "postal_code",
      "phone",
      "company",
      "fiscal_code",
    ].forEach(
      function (t) {
        this.toggleRequired(
          this.$("." + t + " .form-control"),
          e.indexOf(t) !== -1
        );
      }.bind(this)
    );
  },
  makeVisible: function (e) {
    e = e || [];
    e.push("country");
    this.visibleFields = e;
    this.toggleVisibility(
      this.$("input.state"),
      e.indexOf("state_i") !== -1,
      true
    );
    this.toggleVisibility(
      this.$("select.state"),
      e.indexOf("state_s") !== -1,
      true
    );
    this.toggleVisibility(
      this.$("input.state").parent(),
      e.indexOf("state_i") !== -1 || e.indexOf("state_s") !== -1
    );
    [
      "street",
      "city",
      "postal_code",
      "phone",
      "company",
      "fiscal_code",
    ].forEach(
      function (t) {
        this.toggleVisibility(
          this.$("." + t + " .form-control").parent(),
          e.indexOf(t) !== -1
        );
      }.bind(this)
    );
  },
  render: function () {
    checkout_pane.render.call(this);
    var e = this;
    this.$(".card_number .form-control").payment("formatCardNumber");
    this.$(".card_expiry .form-control").payment("formatCardExpiry");
    this.$(".card_cvc .form-control").payment("formatCardCVC");
    var t = function (e) {
      if (this.$(".card_type .form-control").is(".manually-set")) {
        return;
      }
      var t = $.payment.cardType(
        this.$(".card_number .form-control").val().trim()
      );
      if (t) {
        this.$(".card-type").attr("class", "card-type " + t + " identified");
        this.$(".card_type .form-control").val(t);
        this.$(".card_type .form-control").trigger("change");
      } else {
        this.$(".card-type").attr("class", "card-type");
        this.$(".card_type .form-control").val("");
      }
      if (e) {
        this.$(".card_type .form-control").trigger("change");
      }
    }.bind(this);
    t(false);
    this.$(".card_number .form-control").on("input", t);
    var n = function (e) {
      if (e) {
        this.$(".card_type .form-control").addClass("manually-set");
      }
      var t = this.$(".card_type .form-control").val();
      this.$(".card-type").attr("class", "card-type " + t);
      if (t) {
        this.$(".card-type").attr("class", "card-type " + t + " identified");
      } else {
        this.$(".card-type").attr("class", "card-type");
        this.$(".card_type .form-control").removeClass("manually-set");
      }
      this.$(".visa-secure").hide();
      this.$(".mastercard-id-check").hide();
      if (t === "visa" || t === "visaelectron") {
        this.$(".visa-secure").show();
      } else if (t === "mastercard" || t === "maestro") {
        this.$(".mastercard-id-check").show();
      }
    }.bind(this);
    n(false);
    this.$(".card_type .form-control").on("change", n);
    var i = storage.getItem("totals_display")[this.storage.getItem("currency")];
    var r =
      storage.getItem("totals_display")[
        this.storage.getItem("visible_currency")
      ];
    if (i !== r) {
      this.$(".total").html(
        '<div class="visible-total">' +
          r +
          '</div><div class="real-total">(' +
          i +
          ")</div>"
      );
    } else {
      this.$(".total").html(i);
    }
    var o = this.$("#billing_type");
    var a = this.$("#billing_type_personal");
    var s = this.$("#billing_type_company");
    var l = this.$(".country .form-control");
    var u = this.$(".street .form-control");
    var c = this.$(".city .form-control");
    var f = this.$("input.state");
    var d = this.$("select.state");
    var h = this.$(".form-group.state label");
    var p = this.$(".postal_code .form-control");
    var v = this.$(".postal_code label");
    var m = this.$(".company .form-control");
    var g = this.$(".fiscal_code .form-control");
    var y = this.$(".fiscal_code label");
    var b = function (e) {
      if (e.keyCode === 37) {
        a.click();
        a.focus();
      }
      if (e.keyCode === 39) {
        s.click();
        s.focus();
      }
    };
    a.keydown(b);
    s.keydown(b);
    var w = function () {
      var e = l.val();
      var t = l.data("previous");
      var n = e !== t;
      var i = o.val();
      $(this).toggleClass("no-value", !e);
      if (e === C_USA) {
        if (n) {
          v.html(v.attr("text_zip_code"));
          h.html(h.attr("text_state"));
          f.removeAttr("id");
          d.attr("id", "state");
          this.populateStatesList(USA_States);
        }
        if (i === BT_Company) {
          this.makeRequired([
            "street",
            "city",
            "postal_code",
            "state_s",
            "company",
          ]);
          this.makeVisible([
            "street",
            "city",
            "postal_code",
            "state_s",
            "company",
            "phone",
          ]);
        } else {
          this.makeRequired(["city", "postal_code", "state_s"]);
          this.makeVisible(["city", "postal_code", "state_s"]);
        }
      } else if (e === C_Brazil) {
        if (n) {
          v.html(v.attr("text_postal_code"));
          h.html(h.attr("text_state"));
          f.removeAttr("id");
          d.attr("id", "state");
          this.populateStatesList(BRA_States);
        }
        if (i === BT_Company) {
          y.html(y.attr("text_cnpj"));
          this.makeRequired([
            "street",
            "city",
            "postal_code",
            "state_s",
            "fiscal_code",
            "company",
          ]);
          this.makeVisible([
            "street",
            "city",
            "postal_code",
            "state_s",
            "company",
            "fiscal_code",
            "phone",
          ]);
        } else {
          y.html(y.attr("text_cpf"));
          this.makeRequired([
            "city",
            "postal_code",
            "state_s",
            "fiscal_code",
            "phone",
          ]);
          this.makeVisible([
            "city",
            "postal_code",
            "state_s",
            "fiscal_code",
            "phone",
          ]);
        }
      } else if (e === C_India) {
        if (n) {
          v.html(v.attr("text_postal_code"));
          h.html(h.attr("text_district"));
          f.removeAttr("id");
          d.attr("id", "state");
          this.populateStatesList(IND_Districts);
        }
        if (i === BT_Company) {
          y.html(y.attr("text_gstin"));
          this.makeRequired(["street", "city", "postal_code", "company"]);
          this.makeVisible([
            "street",
            "city",
            "postal_code",
            "state_s",
            "company",
            "fiscal_code",
            "phone",
          ]);
        } else {
          this.makeRequired(["city", "postal_code"]);
          this.makeVisible(["city", "postal_code", "state_s"]);
        }
      } else if (e === C_Canada) {
        if (n) {
          v.html(v.attr("text_postal_code"));
          h.html(h.attr("text_state"));
          f.removeAttr("id");
          d.attr("id", "state");
          this.populateStatesList(CAN_States);
        }
        if (i === BT_Company) {
          y.html(y.attr("text_vat_id"));
          this.makeRequired([
            "street",
            "city",
            "postal_code",
            "state_s",
            "company",
          ]);
          this.makeVisible([
            "street",
            "city",
            "postal_code",
            "state_s",
            "company",
            "fiscal_code",
            "phone",
          ]);
        } else {
          this.makeRequired(["city", "postal_code", "state_s"]);
          this.makeVisible(["city", "postal_code", "state_s"]);
        }
      } else {
        if (n) {
          v.html(v.attr("text_postal_code"));
          h.html(h.attr("text_state_province"));
          d.removeAttr("id");
          f.attr("id", "state");
          var r = d.val();
          if (r) {
            f.val(r);
            d.val("");
          }
        }
        if (e === C_Turkey) {
          if (n) {
            h.html(h.attr("text_district"));
          }
          if (i === BT_Company) {
            y.html(y.attr("text_gstin"));
            this.makeRequired(["street", "city", "postal_code", "company"]);
            this.makeVisible([
              "street",
              "city",
              "postal_code",
              "state_i",
              "company",
              "fiscal_code",
              "phone",
            ]);
          } else {
            this.makeRequired(["city", "postal_code"]);
            this.makeVisible(["city", "postal_code", "state_i"]);
          }
        } else if (C_EU.indexOf(e) !== -1) {
          if (i === BT_Company) {
            y.html(y.attr("text_vat_id"));
            this.makeRequired(["street", "company"]);
            this.makeVisible([
              "street",
              "city",
              "postal_code",
              "company",
              "fiscal_code",
              "phone",
            ]);
          } else {
            this.makeRequired([]);
            this.makeVisible([]);
          }
        } else {
          if (i === BT_Company) {
            this.makeRequired(["street", "company"]);
            this.makeVisible([
              "street",
              "city",
              "postal_code",
              "company",
              "phone",
            ]);
          } else {
            this.makeRequired([]);
            this.makeVisible([]);
          }
        }
      }
      l.data("previous", e);
    }.bind(this);
    this.$(".country .form-control").change(w);
    w.call(this.$(".country .form-control"));
    a.click(
      function () {
        o.val(BT_Personal);
        a.addClass("btn-embossed active");
        s.removeClass("btn-embossed active");
        w();
      }.bind(this)
    );
    s.click(
      function () {
        o.val(BT_Company);
        s.addClass("btn-embossed active");
        a.removeClass("btn-embossed active");
        w();
      }.bind(this)
    );
  },
  validate: function (e, t) {
    this.$(".messages .text").html("");
    this.$(".messages").hide();
    var n = checkout_pane.validate.call(this, e, t);
    return n;
  },
  save: function () {
    checkout_pane.save.call(this);
    this.allFields.forEach(
      function (e) {
        if (this.visibleFields.indexOf(e) === -1) {
          var t = this.$("." + e + " .form-control");
          this.storage.setItem(t.attr("real_id") || t.attr("id"), "");
        }
      }.bind(this)
    );
  },
  doNext: null,
});
var step_konbini = $.extend({}, checkout_pane, {
  id: "konbini",
  previousId: "paysystems",
  nextId: "pay",
  doNext: function () {
    this.$(".btn-next").addClass("btn-progress");
    var e =
      $("#tco_konbini").data("pay-url") +
      "?phone=" +
      encodeURIComponent(this.storage.getItem("phone"));
    $.ajax({
      method: "GET",
      url: e,
      crossDomain: true,
      xhrFields: { withCredentials: true },
      timeout: CHECKOUT_AJAX_TIMEOUT,
    })
      .done(
        function (e) {
          this.$(".btn-next").removeClass("btn-progress");
          step_paysystems.doPaymentMethod(e);
        }.bind(this)
      )
      .fail(
        function (e) {
          this.$(".btn-next").removeClass("btn-progress");
          step_paysystems.errorPaymentMethod(e);
        }.bind(this)
      );
  },
  validate: function (e, t) {
    this.$(".messages .text").html("");
    this.$(".messages").hide();
    var n = checkout_pane.validate.call(this, e, t);
    if (n) {
      n &= this.phoneValidateFunc("phone", t);
    }
    return n;
  },
  phoneValidateFunc: function (e, t) {
    var n = true;
    var i = this.$("." + e + " input");
    if (!i.length) {
      return;
    }
    var r = i.val().trim().replace(/[^\d]/, "");
    if (r.length < 10 || r.length > 11) {
      if (!t) {
        i.toggleClass("is-invalid", true);
        i.toggleClass("is-valid", false);
      }
      return;
    }
    return n;
  },
});
var step_ideal = $.extend({}, checkout_pane, {
  id: "ideal",
  previousId: "paysystems",
  nextId: "pay",
  doNext: function () {
    this.$(".btn-next").addClass("btn-progress");
    var e =
      $("#tco_ideal").data("pay-url") +
      "?ideal_bank=" +
      encodeURIComponent(this.storage.getItem("ideal_bank"));
    $.ajax({
      method: "GET",
      url: e,
      crossDomain: true,
      xhrFields: { withCredentials: true },
      timeout: CHECKOUT_AJAX_TIMEOUT,
    })
      .done(
        function (e) {
          this.$(".btn-next").removeClass("btn-progress");
          step_paysystems.doPaymentMethod(e);
        }.bind(this)
      )
      .fail(
        function (e) {
          this.$(".btn-next").removeClass("btn-progress");
          step_paysystems.errorPaymentMethod(e);
        }.bind(this)
      );
  },
  validate: function (e, t) {
    this.$(".messages .text").html("");
    this.$(".messages").hide();
    var n = checkout_pane.validate.call(this, e, t);
    return n;
  },
});
var step_uah_confirmation = $.extend({}, checkout_pane, {
  id: "uah_confirmation",
  previousId: "paysystems",
  nextId: null,
  paymentUrl: null,
  methodId: null,
  setPaymentUrl: function (e) {
    this.paymentUrl = e;
  },
  setMethodId: function (e) {
    this.methodId = e;
    if (this.methodId === "wfp_card") {
      this.$(".uah-confirmation-other-methods").hide();
      this.$(".uah-confirmation-card").show();
    } else {
      this.$(".uah-confirmation-other-methods").show();
      this.$(".uah-confirmation-card").hide();
    }
  },
  doNext: function () {
    this.$(".btn-next").addClass("btn-progress");
    step_paysystems.requestPaymentMethodDetails(this.paymentUrl, this.methodId);
  },
});
var checkout = {
  disabled: false,
  open: false,
  currentStepId: null,
  previousStepId: null,
  cssUpdateDelay: 50,
  paneAnimationSpeed: 250,
  revealAnimationSpeed: 250,
  modalAnimationSpeed: 300,
  steps: {},
  allSteps: {
    login: step_login,
    purchase_type: step_purchase_type,
    customer_details: step_customer_details,
    paysystems: step_paysystems,
    card_details: step_card_details,
    konbini: step_konbini,
    ideal: step_ideal,
    uah_confirmation: step_uah_confirmation,
  },
  TCOAttached: false,
  TCOLoaded: false,
  TCOTokenLoaded: false,
  TCOLoadInterval: null,
  cartCaption: null,
  preRenderHash: null,
  showAnimationTimers: [],
  hideAnimationTimers: [],
  bodyHideAnimationTimer: null,
  oldScrollTop: 0,
  isiOS: false,
  init: function () {
    this.isiOS = isiOS();
    this.$el = $("#checkout");
    this.$ = function (e) {
      return this.$el.find(e);
    };
    this.storage = storage.init();
    $(document).trigger("checkout.init");
    this.forEachStep(
      function (e, t) {
        if (this.currentStepId === null) {
          this.currentStepId = e;
        }
        this.steps[e] = t;
        t.init(this);
      }.bind(this),
      this.allSteps
    );
    this.render();
  },
  start: function (e, t, n) {
    this.changeStepTo(this.currentStepId, n, true);
    this.renderCart();
    if (e) {
      this.addItemToCart(t, 1);
    }
    this.forEachStep(
      function (e, t) {
        t.refresh(this);
      }.bind(this)
    );
    this.oldScrollTop = $(window).scrollTop();
    this.$el.addClass("fade");
    this.$el.modal();
    this.$el.removeClass("fade");
    this.$el.addClass("prepare-reveal-transitions");
    $(".body-holder").fadeOut(checkout.revealAnimationSpeed);
    this.bodyHideAnimationTimer = setTimeout(() => {
      $("body").css("margin-bottom", "0");
      $(".body-holder").addClass("hiding");
      $(".body-holder").hide();
      this.$el.addClass("enable-reveal-transitions");
      setTimeout(() => {
        this.$el
          .addClass("ready")
          .removeClass("enable-reveal-transitions")
          .removeClass("prepare-reveal-transitions");
        this.open = true;
        this.getCurrentStep().focus();
      }, checkout.revealAnimationSpeed);
    }, checkout.revealAnimationSpeed);
    $(document).trigger("checkout.step", {
      products: this.getGACartProductsPayload(),
      step: this.steps[this.currentStepId].id,
      option: "start",
    });
  },
  forEachStep: function (e, t) {
    if (t === undefined) {
      t = this.steps;
    }
    for (const [n, i] of Object.entries(t)) {
      e(n, i);
    }
  },
  updateItemInCart: function (e, t) {
    e = e || this.storage.getItem("product");
    var n = this.storage.getItem("upsell") || {};
    if (n !== undefined && n[e.sku] !== undefined) {
      delete n[e.sku];
    }
    this.storage.setItem("upsell", n);
    var i = this.storage.getItem("cart") || {};
    i[e.sku] = $.extend({}, e);
    i[e.sku].quantity = t;
    $.ajax({
      method: "POST",
      url: (window.localized_url_prefix_m || "/") + "ajax/cart",
      data: { _token: this.storage.getItem("_token"), sku: e.sku, quantity: t },
      dataType: "json",
      crossDomain: true,
      xhrFields: { withCredentials: true },
      timeout: CHECKOUT_AJAX_TIMEOUT,
    });
    this.renderCart();
  },
  addItemToCart: function (e, t) {
    e = e || this.storage.getItem("product");
    var n = this.storage.getItem("upsell") || {};
    var i = this.storage.getItem("cart") || {};
    if (typeof e == "string") {
      e = i[e] || n[e];
    }
    if (e === undefined) return;
    if (n[e.sku] !== undefined) {
      delete n[e.sku];
    }
    this.storage.setItem("upsell", n);
    if (i[e.sku] !== undefined) {
      if (t !== undefined) {
        i[e.sku].quantity = Math.max(i[e.sku].quantity, t);
      } else if (
        e.limit_cart_quantity === undefined ||
        !e.limit_cart_quantity
      ) {
        i[e.sku].quantity++;
      } else {
        i[e.sku].quantity = 1;
      }
    } else {
      i[e.sku] = $.extend({}, e);
      i[e.sku].quantity = 1;
    }
    this.storage.setItem("cart", i);
    this.$(".cart .cart-empty").remove();
    this.$(".cart .cart-items").append(
      $('<div class="cart-progress"><i class="fa fa-cog fa-spin"></i></div>')
    );
    $.ajax({
      method: "POST",
      url: (window.localized_url_prefix_m || "/") + "ajax/cart",
      data: {
        _token: this.storage.getItem("_token"),
        sku: e.sku,
        quantity: i[e.sku].quantity,
      },
      dataType: "json",
      crossDomain: true,
      xhrFields: { withCredentials: true },
      timeout: CHECKOUT_AJAX_TIMEOUT,
    });
    this.renderCart();
  },
  removeItemFromCart: function (e) {
    e = e || this.storage.getItem("product");
    var t = this.storage.getItem("upsell") || {};
    var n = {};
    n[e.sku] = e;
    t = $.extend(n, t);
    this.storage.setItem("upsell", t);
    var i = this.storage.getItem("cart") || {};
    var r = 0;
    if (i[e.sku] != undefined) {
      r = i[e.sku].quantity;
      delete i[e.sku];
    }
    this.storage.setItem("cart", i);
    $.ajax({
      method: "POST",
      url: (window.localized_url_prefix_m || "/") + "ajax/cart",
      data: { _token: this.storage.getItem("_token"), sku: e.sku, quantity: 0 },
      dataType: "json",
      crossDomain: true,
      xhrFields: { withCredentials: true },
      timeout: CHECKOUT_AJAX_TIMEOUT,
    });
    this.renderCart();
  },
  setCartItems: function (e) {
    var t = checkout.storage.getItem("cart") || {};
    var n = checkout.storage.getItem("upsell") || {};
    for (var i in t) {
      var r = t[i];
      delete r.quantity;
      n[i] = r;
      delete t[i];
    }
    for (var o in e) {
      var a = e[o] || 1;
      if (typeof o == "string") {
        o = t[o] || n[o];
      }
      if (o === undefined) return;
      if (n[o.sku] !== undefined) {
        delete n[o.sku];
      }
      if (t[o.sku] === undefined) {
        t[o.sku] = $.extend({}, o);
      }
      t[o.sku].quantity = a;
    }
    this.storage.setItem("upsell", n);
    this.storage.setItem("cart", t);
    var s = {};
    for (var l in t) {
      s[l] = t[l].quantity;
    }
    $.ajax({
      method: "POST",
      url: (window.localized_url_prefix_m || "/") + "ajax/cart/set",
      data: { cart: s },
      dataType: "json",
      crossDomain: true,
      xhrFields: { withCredentials: true },
      timeout: CHECKOUT_AJAX_TIMEOUT,
    });
    this.renderCart();
  },
  renderCart: function () {
    var e = this;
    this.$(".cart .cart-items").empty();
    var t = this.storage.getItem("cart") || {};
    var n = {};
    for (var i in this.storage.getItem("currencies")) {
      n[i] = 0;
    }
    var r = 0;
    $.each(
      t,
      function (t, i) {
        r += i.quantity;
        var o = $('<div class="cart-item"></div>');
        o.append(
          '<a href="#" class="cart-item-action cart-item-action-remove btn btn-sm btn-danger" title="' +
            $(".cart .cart-items").data("remove-text") +
            '">×</a>'
        );
        var a = $('<div class="cart-item-info"></div>');
        o.append(a);
        a.append(
          '<div class="cart-item-image"><img src="' +
            (i.image || i.info[window.locale].image) +
            '"/></div>'
        );
        a.append(
          '<div class="cart-item-title">' +
            (i.title || i.info[window.locale].title) +
            "</div>"
        );
        if (typeof i.url != "undefined") {
          $(".cart-item-image", a).wrapInner(
            '<a href="' + i.url + '" target="_blank"></a>'
          );
          $(".cart-item-title", a).wrapInner(
            '<a href="' + i.url + '" target="_blank"></a>'
          );
        }
        var s = 0;
        var l = 0;
        var u = i.prices[storage.getItem("visible_currency")].price_display;
        if (allow_volume_discounts) {
          if (i.quantity >= 30) {
            s = 20;
          } else if (i.quantity >= 15) {
            s = 15;
          } else if (i.quantity >= 5) {
            s = 10;
          }
          if (s) {
            l =
              Math.round(
                ((i.prices[storage.getItem("visible_currency")].price * s) /
                  100) *
                  100
              ) / 100;
            u = this.format_price(
              i.prices[storage.getItem("visible_currency")].price - l,
              storage.getItem("visible_currency")
            );
          }
        }
        if (s) {
          if (
            typeof i.prices[storage.getItem("visible_currency")]
              .list_price_display != "undefined" &&
            i.prices[storage.getItem("visible_currency")].list_price_display !=
              i.prices[storage.getItem("visible_currency")].price_display
          ) {
            a.append(
              '<div class="cart-item-old_price font-money">' +
                i.prices[storage.getItem("visible_currency")]
                  .list_price_display +
                "</div>"
            );
            a.append(
              '<div class="cart-item-discount">' +
                i.prices[storage.getItem("visible_currency")].discount_display +
                "</div>"
            );
          }
          a.append(
            '<div class="cart-item-price font-money" style="color: red; text-decoration: line-through; position: absolute;\n' +
              "    left: 90px;\n" +
              "    bottom: 22px;\n" +
              "    color: #d12345;\n" +
              "    text-decoration: line-through;\n" +
              "    transform: rotate(-11deg) translateX(40px) translatey(5px);\n" +
              "    font-size: 12px;\n" +
              '">' +
              i.prices[storage.getItem("visible_currency")].price_display +
              "</div>"
          );
          a.append(
            '<div class="cart-item-price font-money" style="background: rgba(255,255,255,0.7); padding-right: 3px;">' +
              u +
              "</div>"
          );
          o.append(
            '<div class="cart-item-bulk_discount font-money" style="background: #d12345; color:white; padding: 5px; font-weight: bold; letter-spacing: -0.2px;">+ ' +
              VOLUME_DISCOUNT +
              " " +
              s +
              "%</div>"
          );
        } else {
          if (
            typeof i.prices[storage.getItem("visible_currency")]
              .list_price_display != "undefined" &&
            i.prices[storage.getItem("visible_currency")].list_price_display !=
              i.prices[storage.getItem("visible_currency")].price_display
          ) {
            a.append(
              '<div class="cart-item-old_price font-money">' +
                i.prices[storage.getItem("visible_currency")]
                  .list_price_display +
                "</div>"
            );
            a.append(
              '<div class="cart-item-discount">' +
                i.prices[storage.getItem("visible_currency")].discount_display +
                "</div>"
            );
          }
          a.append(
            '<div class="cart-item-price font-money">' +
              i.prices[storage.getItem("visible_currency")].price_display +
              "</div>"
          );
        }
        o.append(
          '<div class="cart-quantity-controls form-inline">\n' +
            '<a href="#" class="cart-quantity-action cart-quantity-action-remove btn btn-sm btn-danger" title="Less items">–</a>\n' +
            '<input type="number" min="1" max="3000" class="quantity-input form-control" value="' +
            i.quantity +
            '">\n' +
            '<a href="#" class="cart-quantity-action cart-quantity-action-add btn btn-sm btn-success" title="More items">+</a>\n' +
            "</div><style>" +
            "input.quantity-input[type='number'] {\n" +
            "    -moz-appearance:textfield;\n" +
            "}\n" +
            "\n" +
            "input.quantity-input::-webkit-outer-spin-button,\n" +
            "input.quantity-input::-webkit-inner-spin-button {\n" +
            "    -webkit-appearance: none;\n" +
            "}" +
            "</style>"
        );
        o.data("item", i);
        $(".cart-item-action", o).click(function (t) {
          var n = $(this).parents(".cart-item").data("item");
          e.removeItemFromCart(n);
          t.preventDefault();
        });
        $(".cart-quantity-action-add", o).click(function (t) {
          var n = $(this).parents(".cart-item").data("item");
          if (n.quantity < 3e3) {
            e.updateItemInCart(n, n.quantity + 1);
          }
          t.preventDefault();
        });
        $(".cart-quantity-action-remove", o).click(function (t) {
          var n = $(this).parents(".cart-item").data("item");
          if (n.quantity > 1) {
            e.updateItemInCart(n, n.quantity - 1);
          }
          t.preventDefault();
        });
        $(".quantity-input", o).change(function (t) {
          var n = $(this).val();
          if (!n || n === "0" || isNaN(n)) {
            n = 1;
            $(this).val(1);
          } else {
            n = parseInt(n);
          }
          var i = $(this).parents(".cart-item").data("item");
          n = Math.max(Math.min(n, 3e3), 1);
          e.updateItemInCart(i, n);
          t.preventDefault();
        });
        this.$(".cart .cart-items").append(o);
        var c;
        for (var f in i.prices) {
          n[f] = n[f] || 0;
          if (s) {
            c = (i.prices[f].price - l) * i.quantity;
          } else {
            c = i.prices[f].price * i.quantity;
          }
          n[f] += c;
        }
      }.bind(this)
    );
    if (this.$(".cart .cart-items").is(":empty")) {
      var o = this.$(".cart .cart-items").data("empty-text");
      this.$(".cart .cart-items").append(
        $('<div class="cart-empty"><i class="fa fa-frown"></i> ' + o + "</div>")
      );
    } else {
      if (allow_volume_discounts) {
        this.$(".cart .cart-items").append(
          $(
            '<div class="bulk-info" style="padding: 0 26px 0 50px;\n' +
              "    color: #eee;\n" +
              '    font-size: 14px;">' +
              VOLUME_DISCOUNT_TIP +
              "</div>"
          )
        );
      }
    }
    var a = {};
    for (var s in n) {
      a[s] = this.format_price(n[s], s);
    }
    this.storage.setItem("totals", n);
    this.storage.setItem("totals_display", a);
    this.$(".cart-total-value").text(
      a[this.storage.getItem("visible_currency")]
    );
    var l = a[this.storage.getItem("currency")];
    var u = a[this.storage.getItem("visible_currency")];
    if (l !== u) {
      this.$(".total").html(
        '<div class="visible-total">' +
          u +
          '</div><div class="real-total">(' +
          l +
          ")</div>"
      );
    } else {
      this.$(".total").html(l);
    }
    if (this.$(".cart-block-container").length) {
      var c = this.$(".cart .cart-item").length;
      if (c) {
        if (c === 1) {
          this.$(".cart-block-container .cart-text").text(
            $(".cart .cart-item-title").text()
          );
        } else {
          var f = checkout_trans_choice(this.cartCaption, c, { count: c });
          this.$(".cart-block-container .cart-text").text(f);
        }
        this.$(".cart-block-container .cart-total").text(
          "(" + a[storage.getItem("visible_currency")] + ")"
        );
        this.$(".cart-block-container").fadeIn();
        $(document).trigger("cart-block.show");
      } else {
        this.$(".cart-block-container").fadeOut();
        $(document).trigger("cart-block.hide");
      }
    }
    this.$(".upsell .cart-items").empty();
    var d = this.storage.getItem("upsell");
    if ($.isEmptyObject(d)) {
      this.$(".upsell").hide();
    } else {
      $.each(
        d,
        function (t, n) {
          var i = $('<div class="cart-item"></div>');
          var r = $('<div class="cart-item-info"></div>');
          i.append(r);
          r.append(
            '<div class="cart-item-image"><img src="' +
              (n.image || n.info[window.locale].image) +
              '"/></div>'
          );
          r.append(
            '<div class="cart-item-title">' +
              (n.title || n.info[window.locale].title) +
              "</div>"
          );
          if (typeof n.url != "undefined") {
            $(".cart-item-image", r).wrapInner(
              '<a href="' + n.url + '" target="_blank"></a>'
            );
            $(".cart-item-title", r).wrapInner(
              '<a href="' + n.url + '" target="_blank"></a>'
            );
          }
          if (
            typeof n.prices[storage.getItem("visible_currency")]
              .list_price_display != "undefined"
          ) {
            r.append(
              '<div class="cart-item-old_price font-money">' +
                n.prices[storage.getItem("visible_currency")]
                  .list_price_display +
                "</div>"
            );
            r.append(
              '<div class="cart-item-discount">' +
                n.prices[storage.getItem("visible_currency")].discount_display +
                "</div>"
            );
          }
          r.append(
            '<div class="cart-item-price font-money">' +
              n.prices[storage.getItem("visible_currency")].price_display +
              "</div>"
          );
          i.append(
            '<a href="#" class="cart-item-action cart-item-action-add btn btn-sm btn-success" title="' +
              $(".cart .cart-items").data("add-text") +
              '">+ <span class="cart-item-action-add-text">' +
              $(".cart .cart-items").data("add-text") +
              "</span></a>"
          );
          i.data("item", n);
          $(".cart-item-action", i).click(function (t) {
            var n = $(this).parents(".cart-item").data("item");
            e.addItemToCart(n);
            t.preventDefault();
          });
          this.$(".upsell .cart-items").append(i);
        }.bind(this)
      );
      this.$(".upsell").show();
    }
    this.$(".cart-upsell").addClass("cart-upsell-ready");
    this.$(".cart-count-indicator").text(r);
    this.$(".cart-count-indicator").toggleClass("danger", !r);
    this.$(".cart-button-show").click(
      function (e) {
        this.$el.addClass("cart-open");
        this.$(".modals input,select,button:not(.cart-button-hide)").prop(
          "disabled",
          true
        );
        e.preventDefault();
      }.bind(this)
    );
    this.$(".cart-button-hide").click(
      function (e) {
        this.$(".modals input,select,button:not(.cart-button-hide)").prop(
          "disabled",
          false
        );
        this.$el.removeClass("cart-open");
        e.preventDefault();
      }.bind(this)
    );
  },
  getCurrentStep: function () {
    return this.steps[this.currentStepId];
  },
  isStepAfterAnother: function (e, t) {
    if (e === t) {
      return false;
    }
    for (const [n, i] of Object.entries(this.steps)) {
      if (n === t) {
        return true;
      }
      if (n === e) {
        return false;
      }
    }
  },
  isStepAfterCurrent: function (e) {
    return this.isStepAfterAnother(e, this.currentStepId);
  },
  isStepBeforeAnother: function (e, t) {
    if (e === this.currentStepId) {
      return false;
    }
    return !this.isStepAfterAnother(e, t);
  },
  isStepBeforeCurrent: function (e) {
    return this.isStepBeforeAnother(e, this.currentStepId);
  },
  isStepEqualsAnother: function (e, t) {
    return e === t;
  },
  isStepEqualsCurrent: function (e) {
    return e === this.currentStepId;
  },
  render: function () {
    this.preRenderHash = window.location.hash;
    this.forEachStep(
      function (e, t) {
        t.hide(this.isStepAfterCurrent(e), true);
      }.bind(this)
    );
    this.forEachStep(
      function (e, t) {
        t.render();
      }.bind(this)
    );
    changeHash(
      "checkout/" + this.getCurrentStep().id,
      this.getCurrentStep().$("h2").text().trim()
    );
    this.rendered = true;
    this.renderCart();
  },
  disable: function () {
    this.disabled = true;
    this.$el.addClass("progress");
    $("body").append(
      '<div class="modal-backdrop modal-backdrop-progress"><div class="text-wrapper"><div class="text"></div></div></div>'
    );
    if (window.progress_texts !== undefined && window.progress_texts.length) {
      var e = 0;
      $("body > .modal-backdrop-progress .text").text(progress_texts[e]);
      this.progressInterval = setInterval(
        function () {
          if (e < progress_texts.length - 1) {
            e++;
            var t = progress_texts[e];
            $("body > .modal-backdrop-progress .text").text(t);
          } else {
            clearInterval(this.progressInterval);
          }
        }.bind(this),
        2e3
      );
    } else {
      $("body > .modal-backdrop-progress .text").text("One moment, please...");
    }
  },
  enable: function () {
    this.disabled = false;
    this.$el.removeClass("progress");
    clearInterval(this.progressInterval);
    $("body > .modal-backdrop-progress").remove();
  },
  back: function () {
    this.changeStepTo(this.getCurrentStep().getPreviousStepId());
  },
  next: function () {
    this.changeStepTo(this.getCurrentStep().getNextStepId());
  },
  getGACartProductsPayload: function () {
    var e = [];
    var t = this.storage.getItem("cart");
    if (typeof t == "object") {
      $.each(t, function (t, n) {
        e.push({
          id: n.sku,
          name: n.title,
          prices: n.prices,
          quantity: n.quantity,
        });
      });
    }
    return e;
  },
  getCartContents: function () {
    var e = {};
    var t = this.storage.getItem("cart");
    var n = 0;
    if (typeof t == "object") {
      $.each(t, function (t, i) {
        var r = storage.getItem("currency");
        e[t] = {
          sku: i.sku,
          currency: r,
          price: i.prices[r].price,
          quantity: i.quantity,
        };
        n++;
      });
    }
    if (n === 0) {
      return "";
    }
    return e;
  },
  getStepOption: function () {
    if (typeof this.getCurrentStep().getStepOption == "function") {
      return this.getCurrentStep().getStepOption();
    }
  },
  changeStepTo: function (e, t, n) {
    if (e === "pay") {
      this.pay();
      return;
    }
    if (e === null) {
      return;
    }
    this.previousStepId = this.currentStepId;
    this.currentStepId = e;
    this.renderStep(n);
    if (this.open) {
      $(document).trigger("checkout.step", {
        products: this.getGACartProductsPayload(),
        step: this.steps[this.currentStepId].id,
        option: this.steps[this.previousStepId].id,
      });
    }
    if (t) {
      return;
    }
    changeHash(
      "checkout/" + this.getCurrentStep().id,
      this.getCurrentStep().$("h2").text().trim(),
      this.rendered
    );
  },
  renderStep: function (e) {
    if (this.rendered) {
      this.forEachStep(
        function (e, t) {
          if (e === this.previousStepId || e === this.currentStepId) {
            return;
          }
          t.hide(this.isStepAfterCurrent(e), true);
        }.bind(this)
      );
      var t = this.steps[this.previousStepId];
      var n = this.steps[this.currentStepId];
      if (
        t.$el.is(".flip-back") ||
        t.$el.is(".flip-next") ||
        t.$el.is(".prepare-pane-flip-hide-back-transitions") ||
        t.$el.is(".prepare-pane-flip-hide-next-transitions") ||
        t.$el.is(".enable-pane-flip-hide-back-transitions") ||
        t.$el.is(".enable-pane-flip-hide-next-transitions")
      ) {
        t.hide(
          this.isStepAfterAnother(this.previousStepId, this.currentStepId),
          true
        );
        n.show(
          this.isStepBeforeAnother(this.previousStepId, this.currentStepId),
          e
        );
      } else {
        t.hide(
          this.isStepAfterAnother(this.previousStepId, this.currentStepId),
          e,
          function () {
            n.show(
              this.isStepBeforeAnother(this.previousStepId, this.currentStepId),
              e
            );
          }.bind(this)
        );
      }
    }
  },
  createOrder: function () {
    var e = [
      "_token",
      "set_inventory_to_order_country",
      "type",
      "email",
      "password",
      "id",
      "user_id",
      "currency",
      "first_name",
      "last_name",
      "company",
      "street",
      "country",
      "state",
      "city",
      "postal_code",
      "phone",
      "fiscal_code",
    ];
    var t = {};
    for (var n = 0; n < e.length; n++) {
      t[e[n]] = this.storage.getItem(e[n]);
    }
    t.line_items = this.getCartContents();
    return $.ajax({
      method: "POST",
      url: (window.localized_url_prefix_m || "/") + "ajax/order",
      data: t,
      dataType: "json",
      crossDomain: true,
      xhrFields: { withCredentials: true },
      timeout: CHECKOUT_AJAX_TIMEOUT,
    })
      .done(
        function (e) {
          if (typeof e === "string" || e instanceof String) {
            this.error.bind(this);
          }
          this.createOrder_success(e);
        }.bind(this)
      )
      .fail(this.error.bind(this));
  },
  createOrder_success: function (e) {
    console.log("ORDER CREATED: " + e.id);
    console.log("USER: " + e.user_id);
    this.storage.setItem("order", e);
    var t = [
      "id",
      "user_id",
      "currency",
      "first_name",
      "last_name",
      "company",
      "street",
      "country",
      "state",
      "city",
      "postal_code",
      "fiscal_code",
      "phone",
    ];
    t.forEach(
      function (t) {
        if (typeof e[t] !== undefined) {
          this.storage.setItem(t, e[t]);
        }
      }.bind(this)
    );
    this.forEachStep(
      function (e, t) {
        t.initFields();
      }.bind(this)
    );
    gaOnCreate("set", "&uid", this.storage.getItem("user_id"));
  },
  pay: function () {
    if (
      this.storage.getItem("totals")[this.storage.getItem("currency")] === 0
    ) {
      this.shakeCart();
      return;
    }
    if (this.disabled) return;
    this.disable();
    $(document).trigger("checkout.step", {
      products: this.getGACartProductsPayload(),
      step: "submit_payment",
      option: "tco_card",
    });
    var e = [
      "_token",
      "set_inventory_to_order_country",
      "type",
      "email",
      "password",
      "id",
      "user_id",
      "first_name",
      "last_name",
      "company",
      "street",
      "country",
      "state",
      "city",
      "postal_code",
      "phone",
      "fiscal_code",
      "card_number",
      "card_type",
      "card_expiry",
      "card_cvc",
      "cardholder",
    ];
    var t = {};
    for (var n = 0; n < e.length; n++) {
      t[e[n]] = this.storage.getItem(e[n]);
    }
    t.line_items = this.getCartContents();
    $.ajax({
      method: "POST",
      url:
        (window.localized_url_prefix_m || "/") +
        "ajax/order/2co/" +
        (this.storage.getItem("tco_api_version") || "5") +
        "/charge",
      data: t,
      crossDomain: true,
      xhrFields: { withCredentials: true },
      timeout: CHECKOUT_AJAX_TIMEOUT,
    })
      .done(this.pay_checkout_success.bind(this))
      .fail(this.error.bind(this));
  },
  pay_checkout_success: function (e) {
    console.log("ORDER COMPLETED");
    if (typeof e.redirect !== "undefined") {
      window.location = e.redirect;
    } else {
      this.enable();
    }
  },
  error: function (e) {
    this.enable();
    if (
      ((e.status !== undefined && e.status === 0) ||
        (e.readyState !== undefined && e.readyState === 0)) &&
      e.statusText !== undefined &&
      e.statusText !== "timeout"
    ) {
      return;
    }
    var t;
    if (e.status !== undefined && e.status === 419) {
      t = ERROR_RELOGIN;
    } else if (e.responseJSON) {
      t = e.responseJSON;
      if (t.errors !== undefined) {
        t = t.errors;
      } else if (t.message !== undefined) {
        t = t.message;
      }
    } else {
      t = e.errorMsg || e.message;
      if (!t && e.status === 503) {
        t = ERROR_MAINTENANCE;
      }
    }
    if (!t) {
      t = ERROR_DEFAULT;
    }
    this.getCurrentStep().showErrorMessage(t);
  },
  shakeCart: function () {
    this.$(".cart").addClass("shake");
    this.$(".cart-button-show").addClass("shake");
    setTimeout(
      function () {
        this.$(".cart").removeClass("shake");
        this.$(".cart-button-show").removeClass("shake");
      }.bind(this),
      500
    );
    setTimeout(
      function () {
        this.$(".cart-count-indicator").addClass("shake");
        setTimeout(
          function () {
            this.$(".cart-count-indicator").removeClass("shake");
          }.bind(this),
          500
        );
      }.bind(this),
      10
    );
    gaOnCreate("send", "event", "Ecommerce", "Shake cart");
  },
  format_price: function (e, t) {
    var n = this.storage.getItem("currencies")[t].display_format;
    var i = function (e, t, n, i) {
      var r = 3;
      var o = "\\d(?=(\\d{" + (r || 3) + "})+" + (t > 0 ? "\\D" : "$") + ")",
        a = e.toFixed(Math.max(0, ~~t));
      return (n ? a.replace(".", n) : a).replace(
        new RegExp(o, "g"),
        "$&" + (i || "")
      );
    };
    e = i(e, n.decimals, n.decimal_point, n.thousands_separator);
    return n.format.replace("%s", e);
  },
  close: function (e) {
    if (checkout.temporaryChangeHash !== false) {
      changeHash();
    }
    delete checkout.temporaryChangeHash;
    this.open = false;
    this.$el.removeClass("ready");
    setTimeout(function () {
      if (typeof stickyFooterRecalculate == "function") {
        stickyFooterRecalculate();
      }
    }, 50);
    clearTimeout(this.bodyHideAnimationTimer);
    $(".body-holder").removeClass("hiding");
    $(".body-holder").show();
    setTimeout(function () {
      $(".body-holder").removeClass("hiding");
      $(".body-holder").show();
    }, this.revealAnimationSpeed);
    $(window).scrollTop(this.oldScrollTop);
  },
};
var sendPageView = function () {
  var e = window.location;
  var t = e.hash ? e.hash.substring(1) : e.pathname + e.search;
  $(document).trigger("checkout.url_change", t);
};
window.addEventListener("popstate", sendPageView);
var loadedForm = null;
var doCheckout = function () {
  if (loadedForm || $("#checkout").length) {
    var e = false;
    var t = function () {
      if (!$("#checkout").length) {
        $("body").append(
          '<div class="bootstrap" style="display: contents">' +
            loadedForm +
            "</div>"
        );
      }
      bindGAEcommerceListeners();
      checkout.init();
      if (window.innerWidth < 1200) {
        $(".fa.fa-question-circle.billing-help").attr("data-placement", "left");
      }
      if (window.innerWidth < 544) {
        $("#card_cvc").attr("data-placement", "bottom");
      }
      $('[data-toggle="tooltip"]').tooltip();
      if ($(".modal-backdrop-checkout").length) {
        $(".modal-backdrop-checkout").remove();
        $("#checkout").modal();
      }
      $("#checkout").on("hidden.bs.modal", function () {
        checkout.close();
      });
      e = true;
    };
    var n = function (n) {
      if (!e) {
        t();
      }
      var i = n !== undefined && n !== false;
      if (!i) {
        sendPageView();
      }
      if ($(this).is("[data-purchase-type]")) {
        var r = $(this).data("purchase-type");
        checkout.storage.setItem("type", r);
        checkout.allSteps.purchase_type.initFields();
      }
      if ($(this).data("clear-cart")) {
        var o = checkout.storage.getItem("cart", {});
        for (var a in o) {
          checkout.removeItemFromCart(a);
        }
      }
      checkout.start(false);
      if (n) n.preventDefault();
    };
    var i = function (n) {
      if (!e) {
        t();
      }
      if ($(this).is("[data-purchase-type]")) {
        var i = $(this).data("purchase-type");
        checkout.storage.setItem("type", i);
        checkout.allSteps.purchase_type.initFields();
      }
      var r = $(this).data("products");
      if (r) {
        checkout.setCartItems(r);
        checkout.start();
      } else {
        var o = $(this).data("product");
        if (typeof o === "undefined") {
          o = checkout.storage.getItem("product");
        }
        checkout.start(typeof o !== "undefined", o);
      }
      if (n) n.preventDefault();
    };
    if (
      $("body").hasClass("open-checkout") ||
      window.location.hash.match(/#checkout/)
    ) {
      n();
    }
    if (
      $("body").hasClass("do-checkout") ||
      window.location.hash.match(/#buy-now/)
    ) {
      i();
    }
    $("body").on("click", ".open-checkout", n);
    $("body").on("click", ".do-checkout", i);
    $(".open-checkout,.do-checkout").addClass("checkout-listening");
  } else {
    var r = function (e) {
      if (loadedForm) return;
      if (!e) {
        console.error("Checkout form can not be loaded.");
        return;
      }
      loadedForm = e;
      doCheckout();
    };
    var o = function () {
      $.ajax({
        url: (window.localized_url_prefix_m || "/") + "ajax/checkout-form.js",
        crossDomain: true,
        dataType: "html",
        xhrFields: { withCredentials: true },
        timeout: CHECKOUT_AJAX_TIMEOUT,
      }).done(r);
    };
    if (window.loader) {
      window.loader.request("ajax/checkout-form.js").then(r).catch(o);
    } else {
      o();
    }
  }
  bindGAPromotionsListeners();
};
var makeGAProduct = function (e) {
  var t = $.extend({}, e);
  if (e.prices !== undefined) {
    t.price = e.prices[checkout.storage.getItem("currency")].price;
    delete t.prices;
  }
  return t;
};
var bindGAEcommerceListeners = function () {
  $(document)
    .off("checkout.init")
    .on("checkout.init", function () {
      gaOnCreate("set", "&cu", checkout.storage.getItem("currency"));
      var e = checkout.storage.getItem("product");
      if (e) {
        $(document).trigger("checkout.load", { id: e.sku, name: e.sku });
      }
    });
  $(document)
    .off("checkout.load")
    .on("checkout.load", function (e, t) {
      gaOnCreate("ec:addProduct", makeGAProduct(t));
      gaOnCreate("ec:setAction", "detail");
      gaOnCreate("send", "event", "Ecommerce", "view", t.id, {
        nonInteraction: 1,
      });
    });
  $(document)
    .off("checkout.step")
    .on("checkout.step", function (e, t) {
      if (typeof t.products != "undefined") {
        $.each(t.products, function (e, t) {
          gaOnCreate("ec:addProduct", makeGAProduct(t));
        });
      }
      var n = {
        login: 1,
        purchase_type: 2,
        customer_details: 3,
        paysystems: 4,
        card_details: 5,
        konbini: 5,
        ideal: 5,
        uah_confirmation: 5,
        submit_payment: 6,
      };
      var i = n[t.step];
      if (!i) {
        console.error("Checkout step is out of bounds (" + t.step + ")");
        return;
      }
      var r = { step: i };
      if (typeof t.option == "string") {
        r.option = t.option;
      }
      gaOnCreate("ec:setAction", "checkout", r);
      gaOnCreate("send", "event", "Ecommerce", "step", i);
    });
  $(document)
    .off("checkout.cart_add")
    .on("checkout.cart_add", function (e, t) {
      gaOnCreate("ec:addProduct", makeGAProduct(t));
      gaOnCreate("ec:setAction", "add");
      gaOnCreate("send", "event", "Ecommerce", "click", "add to cart");
    });
  $(document)
    .off("checkout.cart_remove")
    .on("checkout.cart_remove", function (e, t) {
      gaOnCreate("ec:addProduct", makeGAProduct(t));
      gaOnCreate("ec:setAction", "remove");
      gaOnCreate("send", "event", "Ecommerce", "click", "remove from cart");
    });
};
var bindGAPromotionsListeners = function () {
  $(document)
    .off("checkout.promo_view")
    .on("checkout.promo_view", function (e, t) {
      gaOnCreate("ec:addPromo", {
        id: t.id,
        name: t.id,
        creative: t.creative_id,
        position: t.position,
      });
      gaOnCreate("send", "event", "Internal Promotions", "view", t.id, {
        nonInteraction: 1,
      });
    });
  $(document)
    .off("checkout.promo_click")
    .on("checkout.promo_click", function (e, t) {
      gaOnCreate("ec:addPromo", {
        id: t.id,
        name: t.id,
        creative: t.creative_id,
        position: t.position,
      });
      gaOnCreate("ec:setAction", "promo_click");
      gaOnCreate("send", "event", "Internal Promotions", "click", t.id);
    });
  $("body")
    .off("pageview")
    .on("pageview", ".prom:not(.ga-triggered)", function () {
      $(this).each(function () {
        if (!$(this).is(":visible")) {
          return;
        }
        $(document).trigger("checkout.promo_view", {
          id: $(this).data("id"),
          creative_id: $(this).data("creative-id"),
          position: $(this).data("position"),
        });
        $(this)
          .find("a")
          .off("click")
          .on("click", function () {
            var e = $(this).parents(".prom").first();
            $(document).trigger("checkout.promo_click", {
              id: e.data("id"),
              creative_id: e.data("creative-id"),
              position: e.data("position"),
            });
          });
        $(this).addClass("ga-triggered");
      });
    });
  $(".prom").trigger("pageview");
};
var successFunc = function (e) {
  $(document).trigger("cart", e);
  console.log("Cart received.");
  if (e) {
    window.defaults = window.defaults || {};
    window.defaults.tco_api_version = e.tco_api_version || "5";
    console.log("TCOAPI" + e.tco_api_version);
    window.defaults = window.defaults || {};
    window.defaults.currency = e.currency;
    window.defaults.visible_currency = e.visible_currency;
    window.defaults.cart = e.items;
    window.defaults.totals = e.totals;
    window.defaults.totals_display = e.totals_display;
    window.ip_country = e.ip_country;
    window.ip_city = e.ip_city;
    window.ip_state = e.ip_state;
    window.ip_postal_code = e.ip_postal_code;
    if (Object.keys(e.items).length) {
      $(".cart-block-container .cart-text").html(e.caption);
      $(".cart-block-container .cart-total").html(
        "(" + e.totals_display[e.visible_currency] + ")"
      );
      $(".cart-block-container .btn-text-span").html(e.checkout_text);
      $(".cart-block-container").fadeIn(checkout.revealAnimationSpeed);
      for (var t in e.items) {
        if (e.items.hasOwnProperty(t)) {
          var n = e.items[t];
          if (
            window.defaults &&
            window.defaults.upsell &&
            window.defaults.upsell[n.sku]
          ) {
            delete window.defaults.upsell[n.sku];
          }
        }
      }
    }
    console.log("Cart defaults updated.");
  }
  document.dispatchEvent(new Event("cartLoaded"));
  doCheckout();
};
var normalRequest = function () {
  $.ajax({
    url:
      (window.localized_url_prefix_m || "/") +
      "ajax/cart?q=" +
      new Date().getTime(),
    crossDomain: true,
    dataType: "json",
    xhrFields: { withCredentials: true },
    timeout: CHECKOUT_AJAX_TIMEOUT,
  }).done(successFunc);
};
function checkout_trans_choice(e, t, n) {
  t = t === undefined ? 1 : t;
  n = n === undefined ? {} : n;
  let i = e.split("|");
  i = i.length > 1 && t > 1 ? i[1] : i[0];
  for (var r in n) {
    i = i.replace(":" + r, n[r]);
  }
  return i;
}
if (window.loadCart) {
  console.log("Cart loading request sent.");
  if (window.loader) {
    window.loader.request("ajax/cart").then(successFunc).catch(normalRequest);
  } else {
    normalRequest();
  }
} else if (window.checkoutFormLoaded) {
  $(doCheckout);
}
var originalTitle = "";
var changeHash = function (e, t) {
  if (!checkout.rendered) {
    return;
  }
  if (!originalTitle) {
    originalTitle = document.title;
  }
  var n = originalTitle + (t ? " / " + t : "");
  history.pushState(
    "",
    n,
    window.location.pathname + window.location.search + (e ? "#" + e : "")
  );
  document.title = n;
  sendPageView();
};
$(window).on("popstate", function (e) {
  var t = {
    "#checkout/login": "login",
    "#checkout/purchase_type": "purchase_type",
    "#checkout/customer_details": "customer_details",
    "#checkout/paysystems": "paysystems",
    "#checkout/card_details": "card_details",
    "#checkout/konbini": "konbini",
    "#checkout/ideal": "ideal",
    "#checkout/uah_confirmation": "uah_confirmation",
  };
  if (!window.location.hash.match(/#checkout/)) {
    return;
  }
  var n = window.location.hash;
  var i = t[n];
  if (n === "") {
    checkout.temporaryChangeHash = false;
    $("#checkout").modal("hide");
    return;
  }
  if (!checkout.open || !i) {
    checkout.start(false, null, true);
    return;
  }
  if (
    checkout.isStepBeforeCurrent(i) ||
    (checkout.isStepAfterCurrent(i) && checkout.getCurrentStep().isReady())
  ) {
    checkout.changeStepTo(i, true);
  }
});
function isiOS() {
  var e = [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod",
  ];
  if (!!navigator.platform) {
    while (e.length) {
      if (navigator.platform === e.pop()) {
        console.log("iOS detected.");
        return true;
      }
    }
  }
  return false;
}
window.onPageLoad.push(function () {
  if (!$(".feedback-controls").length) return;
  $(".feedback-controls .load-more").each(function () {
    var e = $(this);
    var t = e.parents(".feedback-container");
    if (!e.data("original-text")) {
      e.data("original-text", e.text());
    }
    var n = t.find(".feedback-item:not(.visible)").length;
    e.text(e.data("original-text") + " (" + n + ")");
    $(this).click(function () {
      e.text(e.data("original-text") + "(" + n + ")");
      t.find(".feedback-item.visible")
        .next()
        .slideDown(function () {
          $(this).addClass("visible");
          var n = t.find(".feedback-item:not(.visible)").length;
          if (!n) {
            e.slideUp();
          } else {
            e.text(e.data("original-text") + " (" + n + ")");
          }
        });
      return false;
    });
  });
});
window.onPageLoad.push(function () {
  if (!$(".btn-info-toggle").length) return;
  $(".btn-info-toggle").click(function (e) {
    $(this)
      .parent()
      .children(".btn-info-toggle")
      .not(this)
      .next(".alert")
      .slideUp(200);
    $(this).next(".alert").slideToggle(200);
    e.preventDefault();
  });
});
window.onPageLoad.push(function () {
  var e = $(".illustration-container");
  if (!e.length) {
    return;
  }
  $(window).resize(t);
  function t() {
    var t = $(window).width();
    var n = e.width();
    var i, r;
    if (n >= 599 && t >= 697) {
      i = Math.min(n / (e.data("width") || n), 1);
      r = e.data("height") * i;
    } else {
      i = 1;
      r = "auto";
    }
    e.css({ transform: "scale(" + i + ")", height: r });
  }
  t();
});
window.onPageLoad.push(function () {
  $(".banner-set").each(function () {
    var e = $(this).attr("id");
    var t = parseInt(localStorage.getItem("banner-counter-" + e));
    t = t || 0;
    var n = $(this).children().length;
    if (t >= n) {
      t = t % n;
    }
    $(this)
      .children()
      .each(function (e, n) {
        if (e == t) {
          $(n).show();
        } else {
          $(n).hide();
        }
      });
    t++;
    localStorage.setItem("banner-counter-" + e, t);
  });
});
