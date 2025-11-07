// This is just a sample script. Paste your real code (javascript or HTML) here.

/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!(function(d, c) {
  "object" == typeof module && "object" == typeof module.exports ?
      (module.exports = d.document ?
          c(d, !0) :
          function(b) {
              if (!b.document) {
                  throw new Error("jQuery requires a window with a document");
              }
              return c(b);
          }) :
      c(d);
})("undefined" != typeof window ? window : this, function(a, b) {
  var c = [],
      d = c.slice,
      e = c.concat,
      f = c.push,
      g = c.indexOf,
      h = {},
      i = h.toString,
      j = h.hasOwnProperty,
      k = {},
      l = a.document,
      m = "2.1.4",
      n = function(a, b) {
          return new n.fn.init(a, b);
      },
      o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      p = /^-ms-/,
      q = /-([\da-z])/gi,
      r = function(a, b) {
          return b.toUpperCase();
      };
  (n.fn = n.prototype = {
      jquery: m,
      constructor: n,
      selector: "",
      length: 0,
      toArray: function() {
          return d.call(this);
      },
      get: function(a) {
          return null != a ?
              0 > a ?
              this[a + this.length] :
              this[a] :
              d.call(this);
      },
      pushStack: function(a) {
          var b = n.merge(this.constructor(), a);
          return (b.prevObject = this), (b.context = this.context), b;
      },
      each: function(a, b) {
          return n.each(this, a, b);
      },
      map: function(a) {
          return this.pushStack(
              n.map(this, function(b, c) {
                  return a.call(b, c, b);
              })
          );
      },
      slice: function() {
          return this.pushStack(d.apply(this, arguments));
      },
      first: function() {
          return this.eq(0);
      },
      last: function() {
          return this.eq(-1);
      },
      eq: function(a) {
          var b = this.length,
              c = +a + (0 > a ? b : 0);
          return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
      },
      end: function() {
          return this.prevObject || this.constructor(null);
      },
      push: f,
      sort: c.sort,
      splice: c.splice,
  }),
  (n.extend = n.fn.extend =
      function() {
          var a,
              b,
              c,
              d,
              e,
              f,
              g = arguments[0] || {},
              h = 1,
              i = arguments.length,
              j = !1;
          for (
              "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
              "object" == typeof g || n.isFunction(g) || (g = {}),
              h === i && ((g = this), h--); i > h; h++
          ) {
              if (null != (a = arguments[h])) {
                  for (b in a) {
                      (c = g[b]),
                      (d = a[b]),
                      g !== d &&
                          (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ?
                              (e ?
                                  ((e = !1), (f = c && n.isArray(c) ? c : [])) :
                                  (f = c && n.isPlainObject(c) ? c : {}),
                                  (g[b] = n.extend(j, f, d))) :
                              void 0 !== d && (g[b] = d));
                  }
              }
          }
          return g;
      }),
  n.extend({
          expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function(a) {
              throw new Error(a);
          },
          noop: function() {},
          isFunction: function(a) {
              return "function" === n.type(a);
          },
          isArray: Array.isArray,
          isWindow: function(a) {
              return null != a && a === a.window;
          },
          isNumeric: function(a) {
              return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
          },
          isPlainObject: function(a) {
              return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ?
                  !1 :
                  a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ?
                  !1 :
                  !0;
          },
          isEmptyObject: function(a) {
              var b;
              for (b in a) {
                  return !1;
              }
              return !0;
          },
          type: function(a) {
              return null == a ?
                  a + "" :
                  "object" == typeof a || "function" == typeof a ?
                  h[i.call(a)] || "object" :
                  typeof a;
          },
          globalEval: function(a) {
              var b,
                  c = eval;
              (a = n.trim(a)),
              a &&
                  (1 === a.indexOf("use strict") ?
                      ((b = l.createElement("script")),
                          (b.text = a),
                          l.head.appendChild(b).parentNode.removeChild(b)) :
                      c(a));
          },
          camelCase: function(a) {
              return a.replace(p, "ms-").replace(q, r);
          },
          nodeName: function(a, b) {
              return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
          },
          each: function(a, b, c) {
              var d,
                  e = 0,
                  f = a.length,
                  g = s(a);
              if (c) {
                  if (g) {
                      for (; f > e; e++) {
                          if (((d = b.apply(a[e], c)), d === !1)) {
                              break;
                          }
                      }
                  } else {
                      for (e in a) {
                          if (((d = b.apply(a[e], c)), d === !1)) {
                              break;
                          }
                      }
                  }
              } else {
                  if (g) {
                      for (; f > e; e++) {
                          if (((d = b.call(a[e], e, a[e])), d === !1)) {
                              break;
                          }
                      }
                  } else {
                      for (e in a) {
                          if (((d = b.call(a[e], e, a[e])), d === !1)) {
                              break;
                          }
                      }
                  }
              }
              return a;
          },
          trim: function(a) {
              return null == a ? "" : (a + "").replace(o, "");
          },
          makeArray: function(a, b) {
              var c = b || [];
              return (
                  null != a &&
                  (s(Object(a)) ?
                      n.merge(c, "string" == typeof a ? [a] : a) :
                      f.call(c, a)),
                  c
              );
          },
          inArray: function(a, b, c) {
              return null == b ? -1 : g.call(b, a, c);
          },
          merge: function(a, b) {
              for (var c = +b.length, d = 0, e = a.length; c > d; d++) {
                  a[e++] = b[d];
              }
              return (a.length = e), a;
          },
          grep: function(a, b, c) {
              for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
                  (d = !b(a[f], f)), d !== h && e.push(a[f]);
              }
              return e;
          },
          map: function(a, b, c) {
              var d,
                  f = 0,
                  g = a.length,
                  h = s(a),
                  i = [];
              if (h) {
                  for (; g > f; f++) {
                      (d = b(a[f], f, c)), null != d && i.push(d);
                  }
              } else {
                  for (f in a) {
                      (d = b(a[f], f, c)), null != d && i.push(d);
                  }
              }
              return e.apply([], i);
          },
          guid: 1,
          proxy: function(a, b) {
              var c, e, f;
              return (
                  "string" == typeof b && ((c = a[b]), (b = a), (a = c)),
                  n.isFunction(a) ?
                  ((e = d.call(arguments, 2)),
                      (f = function() {
                          return a.apply(b || this, e.concat(d.call(arguments)));
                      }),
                      (f.guid = a.guid = a.guid || n.guid++),
                      f) :
                  void 0
              );
          },
          now: Date.now,
          support: k,
      }),
      n.each(
          "Boolean Number String Function Array Date RegExp Object Error".split(
              " "
          ),
          function(a, b) {
              h["[object " + b + "]"] = b.toLowerCase();
          }
      );

  function s(a) {
      var b = "length" in a && a.length,
          c = n.type(a);
      return "function" === c || n.isWindow(a) ?
          !1 :
          1 === a.nodeType && b ?
          !0 :
          "array" === c ||
          0 === b ||
          ("number" == typeof b && b > 0 && b - 1 in a);
  }
  var t = (function(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          t,
          u = "sizzle" + 1 * new Date(),
          v = a.document,
          w = 0,
          x = 0,
          y = ha(),
          z = ha(),
          A = ha(),
          B = function(a, b) {
              return a === b && (l = !0), 0;
          },
          C = 1 << 31,
          D = {}.hasOwnProperty,
          E = [],
          F = E.pop,
          G = E.push,
          H = E.push,
          I = E.slice,
          J = function(a, b) {
              for (var c = 0, d = a.length; d > c; c++) {
                  if (a[c] === b) {
                      return c;
                  }
              }
              return -1;
          },
          K =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          L = "[\\x20\\t\\r\\n\\f]",
          M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
          N = M.replace("w", "w#"),
          O =
          "\\[" +
          L +
          "*(" +
          M +
          ")(?:" +
          L +
          "*([*^$|!~]?=)" +
          L +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          N +
          "))|)" +
          L +
          "*\\]",
          P =
          ":(" +
          M +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          O +
          ")*)|.*)\\)|)",
          Q = new RegExp(L + "+", "g"),
          R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
          S = new RegExp("^" + L + "*," + L + "*"),
          T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
          U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
          V = new RegExp(P),
          W = new RegExp("^" + N + "$"),
          X = {
              ID: new RegExp("^#(" + M + ")"),
              CLASS: new RegExp("^\\.(" + M + ")"),
              TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
              ATTR: new RegExp("^" + O),
              PSEUDO: new RegExp("^" + P),
              CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  L +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  L +
                  "*(?:([+-]|)" +
                  L +
                  "*(\\d+)|))" +
                  L +
                  "*\\)|)",
                  "i"
              ),
              bool: new RegExp("^(?:" + K + ")$", "i"),
              needsContext: new RegExp(
                  "^" +
                  L +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  L +
                  "*((?:-\\d)?\\d*)" +
                  L +
                  "*\\)|)(?=[^-]|$)",
                  "i"
              ),
          },
          Y = /^(?:input|select|textarea|button)$/i,
          Z = /^h\d$/i,
          $ = /^[^{]+\{\s*\[native \w/,
          _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          aa = /[+~]/,
          ba = /'|\\/g,
          ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
          da = function(a, b, c) {
              var d = "0x" + b - 65536;
              return d !== d || c ?
                  b :
                  0 > d ?
                  String.fromCharCode(d + 65536) :
                  String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
          },
          ea = function() {
              m();
          };
      try {
          H.apply((E = I.call(v.childNodes)), v.childNodes),
              E[v.childNodes.length].nodeType;
      } catch (fa) {
          H = {
              apply: E.length ?
                  function(a, b) {
                      G.apply(a, I.call(b));
                  } : function(a, b) {
                      var c = a.length,
                          d = 0;
                      while ((a[c++] = b[d++])) {}
                      a.length = c - 1;
                  },
          };
      }

      function ga(a, b, d, e) {
          var f, h, j, k, l, o, r, s, w, x;
          if (
              ((b ? b.ownerDocument || b : v) !== n && m(b),
                  (b = b || n),
                  (d = d || []),
                  (k = b.nodeType),
                  "string" != typeof a || !a || (1 !== k && 9 !== k && 11 !== k))
          ) {
              return d;
          }
          if (!e && p) {
              if (11 !== k && (f = _.exec(a))) {
                  if ((j = f[1])) {
                      if (9 === k) {
                          if (((h = b.getElementById(j)), !h || !h.parentNode)) {
                              return d;
                          }
                          if (h.id === j) {
                              return d.push(h), d;
                          }
                      } else {
                          if (
                              b.ownerDocument &&
                              (h = b.ownerDocument.getElementById(j)) &&
                              t(b, h) &&
                              h.id === j
                          ) {
                              return d.push(h), d;
                          }
                      }
                  } else {
                      if (f[2]) {
                          return H.apply(d, b.getElementsByTagName(a)), d;
                      }
                      if ((j = f[3]) && c.getElementsByClassName) {
                          return H.apply(d, b.getElementsByClassName(j)), d;
                      }
                  }
              }
              if (c.qsa && (!q || !q.test(a))) {
                  if (
                      ((s = r = u),
                          (w = b),
                          (x = 1 !== k && a),
                          1 === k && "object" !== b.nodeName.toLowerCase())
                  ) {
                      (o = g(a)),
                      (r = b.getAttribute("id")) ?
                      (s = r.replace(ba, "\\$&")) :
                      b.setAttribute("id", s),
                          (s = "[id='" + s + "'] "),
                          (l = o.length);
                      while (l--) {
                          o[l] = s + ra(o[l]);
                      }
                      (w = (aa.test(a) && pa(b.parentNode)) || b), (x = o.join(","));
                  }
                  if (x) {
                      try {
                          return H.apply(d, w.querySelectorAll(x)), d;
                      } catch (y) {} finally {
                          r || b.removeAttribute("id");
                      }
                  }
              }
          }
          return i(a.replace(R, "$1"), b, d, e);
      }

      function ha() {
          var a = [];

          function b(c, e) {
              return (
                  a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                  (b[c + " "] = e)
              );
          }
          return b;
      }

      function ia(a) {
          return (a[u] = !0), a;
      }

      function ja(a) {
          var b = n.createElement("div");
          try {
              return !!a(b);
          } catch (c) {
              return !1;
          } finally {
              b.parentNode && b.parentNode.removeChild(b), (b = null);
          }
      }

      function ka(a, b) {
          var c = a.split("|"),
              e = a.length;
          while (e--) {
              d.attrHandle[c[e]] = b;
          }
      }

      function la(a, b) {
          var c = b && a,
              d =
              c &&
              1 === a.nodeType &&
              1 === b.nodeType &&
              (~b.sourceIndex || C) - (~a.sourceIndex || C);
          if (d) {
              return d;
          }
          if (c) {
              while ((c = c.nextSibling)) {
                  if (c === b) {
                      return -1;
                  }
              }
          }
          return a ? 1 : -1;
      }

      function ma(a) {
          return function(b) {
              var c = b.nodeName.toLowerCase();
              return "input" === c && b.type === a;
          };
      }

      function na(a) {
          return function(b) {
              var c = b.nodeName.toLowerCase();
              return ("input" === c || "button" === c) && b.type === a;
          };
      }

      function oa(a) {
          return ia(function(b) {
              return (
                  (b = +b),
                  ia(function(c, d) {
                      var e,
                          f = a([], c.length, b),
                          g = f.length;
                      while (g--) {
                          c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
                      }
                  })
              );
          });
      }

      function pa(a) {
          return a && "undefined" != typeof a.getElementsByTagName && a;
      }
      (c = ga.support = {}),
      (f = ga.isXML =
          function(a) {
              var b = a && (a.ownerDocument || a).documentElement;
              return b ? "HTML" !== b.nodeName : !1;
          }),
      (m = ga.setDocument =
          function(a) {
              var b,
                  e,
                  g = a ? a.ownerDocument || a : v;
              return g !== n && 9 === g.nodeType && g.documentElement ?
                  ((n = g),
                      (o = g.documentElement),
                      (e = g.defaultView),
                      e &&
                      e !== e.top &&
                      (e.addEventListener ?
                          e.addEventListener("unload", ea, !1) :
                          e.attachEvent && e.attachEvent("onunload", ea)),
                      (p = !f(g)),
                      (c.attributes = ja(function(a) {
                          return (a.className = "i"), !a.getAttribute("className");
                      })),
                      (c.getElementsByTagName = ja(function(a) {
                          return (
                              a.appendChild(g.createComment("")),
                              !a.getElementsByTagName("*").length
                          );
                      })),
                      (c.getElementsByClassName = $.test(g.getElementsByClassName)),
                      (c.getById = ja(function(a) {
                          return (
                              (o.appendChild(a).id = u),
                              !g.getElementsByName || !g.getElementsByName(u).length
                          );
                      })),
                      c.getById ?
                      ((d.find.ID = function(a, b) {
                              if ("undefined" != typeof b.getElementById && p) {
                                  var c = b.getElementById(a);
                                  return c && c.parentNode ? [c] : [];
                              }
                          }),
                          (d.filter.ID = function(a) {
                              var b = a.replace(ca, da);
                              return function(a) {
                                  return a.getAttribute("id") === b;
                              };
                          })) :
                      (delete d.find.ID,
                          (d.filter.ID = function(a) {
                              var b = a.replace(ca, da);
                              return function(a) {
                                  var c =
                                      "undefined" != typeof a.getAttributeNode &&
                                      a.getAttributeNode("id");
                                  return c && c.value === b;
                              };
                          })),
                      (d.find.TAG = c.getElementsByTagName ?
                          function(a, b) {
                              return "undefined" != typeof b.getElementsByTagName ?
                                  b.getElementsByTagName(a) :
                                  c.qsa ?
                                  b.querySelectorAll(a) :
                                  void 0;
                          } :
                          function(a, b) {
                              var c,
                                  d = [],
                                  e = 0,
                                  f = b.getElementsByTagName(a);
                              if ("*" === a) {
                                  while ((c = f[e++])) {
                                      1 === c.nodeType && d.push(c);
                                  }
                                  return d;
                              }
                              return f;
                          }),
                      (d.find.CLASS =
                          c.getElementsByClassName &&
                          function(a, b) {
                              return p ? b.getElementsByClassName(a) : void 0;
                          }),
                      (r = []),
                      (q = []),
                      (c.qsa = $.test(g.querySelectorAll)) &&
                      (ja(function(a) {
                              (o.appendChild(a).innerHTML =
                                  "<a id='" +
                                  u +
                                  "'></a><select id='" +
                                  u +
                                  "-\f]' msallowcapture=''><option selected=''></option></select>"),
                              a.querySelectorAll("[msallowcapture^='']").length &&
                                  q.push("[*^$]=" + L + "*(?:''|\"\")"),
                                  a.querySelectorAll("[selected]").length ||
                                  q.push("\\[" + L + "*(?:value|" + K + ")"),
                                  a.querySelectorAll("[id~=" + u + "-]").length ||
                                  q.push("~="),
                                  a.querySelectorAll(":checked").length || q.push(":checked"),
                                  a.querySelectorAll("a#" + u + "+*").length ||
                                  q.push(".#.+[+~]");
                          }),
                          ja(function(a) {
                              var b = g.createElement("input");
                              b.setAttribute("type", "hidden"),
                                  a.appendChild(b).setAttribute("name", "D"),
                                  a.querySelectorAll("[name=d]").length &&
                                  q.push("name" + L + "*[*^$|!~]?="),
                                  a.querySelectorAll(":enabled").length ||
                                  q.push(":enabled", ":disabled"),
                                  a.querySelectorAll("*,:x"),
                                  q.push(",.*:");
                          })),
                      (c.matchesSelector = $.test(
                          (s =
                              o.matches ||
                              o.webkitMatchesSelector ||
                              o.mozMatchesSelector ||
                              o.oMatchesSelector ||
                              o.msMatchesSelector)
                      )) &&
                      ja(function(a) {
                          (c.disconnectedMatch = s.call(a, "div")),
                          s.call(a, "[s!='']:x"),
                              r.push("!=", P);
                      }),
                      (q = q.length && new RegExp(q.join("|"))),
                      (r = r.length && new RegExp(r.join("|"))),
                      (b = $.test(o.compareDocumentPosition)),
                      (t =
                          b || $.test(o.contains) ?
                          function(a, b) {
                              var c = 9 === a.nodeType ? a.documentElement : a,
                                  d = b && b.parentNode;
                              return (
                                  a === d ||
                                  !(
                                      !d ||
                                      1 !== d.nodeType ||
                                      !(c.contains ?
                                          c.contains(d) :
                                          a.compareDocumentPosition &&
                                          16 & a.compareDocumentPosition(d))
                                  )
                              );
                          } :
                          function(a, b) {
                              if (b) {
                                  while ((b = b.parentNode)) {
                                      if (b === a) {
                                          return !0;
                                      }
                                  }
                              }
                              return !1;
                          }),
                      (B = b ?
                          function(a, b) {
                              if (a === b) {
                                  return (l = !0), 0;
                              }
                              var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                              return d ?
                                  d :
                                  ((d =
                                          (a.ownerDocument || a) === (b.ownerDocument || b) ?
                                          a.compareDocumentPosition(b) :
                                          1),
                                      1 & d ||
                                      (!c.sortDetached && b.compareDocumentPosition(a) === d) ?
                                      a === g || (a.ownerDocument === v && t(v, a)) ?
                                      -1 :
                                      b === g || (b.ownerDocument === v && t(v, b)) ?
                                      1 :
                                      k ?
                                      J(k, a) - J(k, b) :
                                      0 :
                                      4 & d ?
                                      -1 :
                                      1);
                          } :
                          function(a, b) {
                              if (a === b) {
                                  return (l = !0), 0;
                              }
                              var c,
                                  d = 0,
                                  e = a.parentNode,
                                  f = b.parentNode,
                                  h = [a],
                                  i = [b];
                              if (!e || !f) {
                                  return a === g ?
                                      -1 :
                                      b === g ?
                                      1 :
                                      e ?
                                      -1 :
                                      f ?
                                      1 :
                                      k ?
                                      J(k, a) - J(k, b) :
                                      0;
                              }
                              if (e === f) {
                                  return la(a, b);
                              }
                              c = a;
                              while ((c = c.parentNode)) {
                                  h.unshift(c);
                              }
                              c = b;
                              while ((c = c.parentNode)) {
                                  i.unshift(c);
                              }
                              while (h[d] === i[d]) {
                                  d++;
                              }
                              return d ?
                                  la(h[d], i[d]) :
                                  h[d] === v ?
                                  -1 :
                                  i[d] === v ?
                                  1 :
                                  0;
                          }),
                      g) :
                  n;
          }),
      (ga.matches = function(a, b) {
          return ga(a, null, null, b);
      }),
      (ga.matchesSelector = function(a, b) {
          if (
              ((a.ownerDocument || a) !== n && m(a),
                  (b = b.replace(U, "='$1']")),
                  !(!c.matchesSelector || !p || (r && r.test(b)) || (q && q.test(b))))
          ) {
              try {
                  var d = s.call(a, b);
                  if (
                      d ||
                      c.disconnectedMatch ||
                      (a.document && 11 !== a.document.nodeType)
                  ) {
                      return d;
                  }
              } catch (e) {}
          }
          return ga(b, n, null, [a]).length > 0;
      }),
      (ga.contains = function(a, b) {
          return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }),
      (ga.attr = function(a, b) {
          (a.ownerDocument || a) !== n && m(a);
          var e = d.attrHandle[b.toLowerCase()],
              f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
          return void 0 !== f ?
              f :
              c.attributes || !p ?
              a.getAttribute(b) :
              (f = a.getAttributeNode(b)) && f.specified ?
              f.value :
              null;
      }),
      (ga.error = function(a) {
          throw new Error("Syntax error, unrecognized expression: " + a);
      }),
      (ga.uniqueSort = function(a) {
          var b,
              d = [],
              e = 0,
              f = 0;
          if (
              ((l = !c.detectDuplicates),
                  (k = !c.sortStable && a.slice(0)),
                  a.sort(B),
                  l)
          ) {
              while ((b = a[f++])) {
                  b === a[f] && (e = d.push(f));
              }
              while (e--) {
                  a.splice(d[e], 1);
              }
          }
          return (k = null), a;
      }),
      (e = ga.getText =
          function(a) {
              var b,
                  c = "",
                  d = 0,
                  f = a.nodeType;
              if (f) {
                  if (1 === f || 9 === f || 11 === f) {
                      if ("string" == typeof a.textContent) {
                          return a.textContent;
                      }
                      for (a = a.firstChild; a; a = a.nextSibling) {
                          c += e(a);
                      }
                  } else {
                      if (3 === f || 4 === f) {
                          return a.nodeValue;
                      }
                  }
              } else {
                  while ((b = a[d++])) {
                      c += e(b);
                  }
              }
              return c;
          }),
      (d = ga.selectors = {
          cacheLength: 50,
          createPseudo: ia,
          match: X,
          attrHandle: {},
          find: {},
          relative: {
              ">": {
                  dir: "parentNode",
                  first: !0
              },
              " ": {
                  dir: "parentNode"
              },
              "+": {
                  dir: "previousSibling",
                  first: !0
              },
              "~": {
                  dir: "previousSibling"
              },
          },
          preFilter: {
              ATTR: function(a) {
                  return (
                      (a[1] = a[1].replace(ca, da)),
                      (a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da)),
                      "~=" === a[2] && (a[3] = " " + a[3] + " "),
                      a.slice(0, 4)
                  );
              },
              CHILD: function(a) {
                  return (
                      (a[1] = a[1].toLowerCase()),
                      "nth" === a[1].slice(0, 3) ?
                      (a[3] || ga.error(a[0]),
                          (a[4] = +(a[4] ?
                              a[5] + (a[6] || 1) :
                              2 * ("even" === a[3] || "odd" === a[3]))),
                          (a[5] = +(a[7] + a[8] || "odd" === a[3]))) :
                      a[3] && ga.error(a[0]),
                      a
                  );
              },
              PSEUDO: function(a) {
                  var b,
                      c = !a[6] && a[2];
                  return X.CHILD.test(a[0]) ?
                      null :
                      (a[3] ?
                          (a[2] = a[4] || a[5] || "") :
                          c &&
                          V.test(c) &&
                          (b = g(c, !0)) &&
                          (b = c.indexOf(")", c.length - b) - c.length) &&
                          ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                          a.slice(0, 3));
              },
          },
          filter: {
              TAG: function(a) {
                  var b = a.replace(ca, da).toLowerCase();
                  return "*" === a ?
                      function() {
                          return !0;
                      } :
                      function(a) {
                          return a.nodeName && a.nodeName.toLowerCase() === b;
                      };
              },
              CLASS: function(a) {
                  var b = y[a + " "];
                  return (
                      b ||
                      ((b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) &&
                          y(a, function(a) {
                              return b.test(
                                  ("string" == typeof a.className && a.className) ||
                                  ("undefined" != typeof a.getAttribute &&
                                      a.getAttribute("class")) ||
                                  ""
                              );
                          }))
                  );
              },
              ATTR: function(a, b, c) {
                  return function(d) {
                      var e = ga.attr(d, a);
                      return null == e ?
                          "!=" === b :
                          b ?
                          ((e += ""),
                              "=" === b ?
                              e === c :
                              "!=" === b ?
                              e !== c :
                              "^=" === b ?
                              c && 0 === e.indexOf(c) :
                              "*=" === b ?
                              c && e.indexOf(c) > -1 :
                              "$=" === b ?
                              c && e.slice(-c.length) === c :
                              "~=" === b ?
                              (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 :
                              "|=" === b ?
                              e === c || e.slice(0, c.length + 1) === c + "-" :
                              !1) :
                          !0;
                  };
              },
              CHILD: function(a, b, c, d, e) {
                  var f = "nth" !== a.slice(0, 3),
                      g = "last" !== a.slice(-4),
                      h = "of-type" === b;
                  return 1 === d && 0 === e ?
                      function(a) {
                          return !!a.parentNode;
                      } :
                      function(b, c, i) {
                          var j,
                              k,
                              l,
                              m,
                              n,
                              o,
                              p = f !== g ? "nextSibling" : "previousSibling",
                              q = b.parentNode,
                              r = h && b.nodeName.toLowerCase(),
                              s = !i && !h;
                          if (q) {
                              if (f) {
                                  while (p) {
                                      l = b;
                                      while ((l = l[p])) {
                                          if (
                                              h ?
                                              l.nodeName.toLowerCase() === r :
                                              1 === l.nodeType
                                          ) {
                                              return !1;
                                          }
                                      }
                                      o = p = "only" === a && !o && "nextSibling";
                                  }
                                  return !0;
                              }
                              if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                                  (k = q[u] || (q[u] = {})),
                                  (j = k[a] || []),
                                  (n = j[0] === w && j[1]),
                                  (m = j[0] === w && j[2]),
                                  (l = n && q.childNodes[n]);
                                  while (
                                      (l = (++n && l && l[p]) || (m = n = 0) || o.pop())
                                  ) {
                                      if (1 === l.nodeType && ++m && l === b) {
                                          k[a] = [w, n, m];
                                          break;
                                      }
                                  }
                              } else {
                                  if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) {
                                      m = j[1];
                                  } else {
                                      while (
                                          (l = (++n && l && l[p]) || (m = n = 0) || o.pop())
                                      ) {
                                          if (
                                              (h ?
                                                  l.nodeName.toLowerCase() === r :
                                                  1 === l.nodeType) &&
                                              ++m &&
                                              (s && ((l[u] || (l[u] = {}))[a] = [w, m]),
                                                  l === b)
                                          ) {
                                              break;
                                          }
                                      }
                                  }
                              }
                              return (m -= e), m === d || (m % d === 0 && m / d >= 0);
                          }
                      };
              },
              PSEUDO: function(a, b) {
                  var c,
                      e =
                      d.pseudos[a] ||
                      d.setFilters[a.toLowerCase()] ||
                      ga.error("unsupported pseudo: " + a);
                  return e[u] ?
                      e(b) :
                      e.length > 1 ?
                      ((c = [a, a, "", b]),
                          d.setFilters.hasOwnProperty(a.toLowerCase()) ?
                          ia(function(a, c) {
                              var d,
                                  f = e(a, b),
                                  g = f.length;
                              while (g--) {
                                  (d = J(a, f[g])), (a[d] = !(c[d] = f[g]));
                              }
                          }) :
                          function(a) {
                              return e(a, 0, c);
                          }) :
                      e;
              },
          },
          pseudos: {
              not: ia(function(a) {
                  var b = [],
                      c = [],
                      d = h(a.replace(R, "$1"));
                  return d[u] ?
                      ia(function(a, b, c, e) {
                          var f,
                              g = d(a, null, e, []),
                              h = a.length;
                          while (h--) {
                              (f = g[h]) && (a[h] = !(b[h] = f));
                          }
                      }) :
                      function(a, e, f) {
                          return (
                              (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop()
                          );
                      };
              }),
              has: ia(function(a) {
                  return function(b) {
                      return ga(a, b).length > 0;
                  };
              }),
              contains: ia(function(a) {
                  return (
                      (a = a.replace(ca, da)),
                      function(b) {
                          return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                      }
                  );
              }),
              lang: ia(function(a) {
                  return (
                      W.test(a || "") || ga.error("unsupported lang: " + a),
                      (a = a.replace(ca, da).toLowerCase()),
                      function(b) {
                          var c;
                          do {
                              if (
                                  (c = p ?
                                      b.lang :
                                      b.getAttribute("xml:lang") || b.getAttribute("lang"))
                              ) {
                                  return (
                                      (c = c.toLowerCase()),
                                      c === a || 0 === c.indexOf(a + "-")
                                  );
                              }
                          } while ((b = b.parentNode) && 1 === b.nodeType);
                          return !1;
                      }
                  );
              }),
              target: function(b) {
                  var c = a.location && a.location.hash;
                  return c && c.slice(1) === b.id;
              },
              root: function(a) {
                  return a === o;
              },
              focus: function(a) {
                  return (
                      a === n.activeElement &&
                      (!n.hasFocus || n.hasFocus()) &&
                      !!(a.type || a.href || ~a.tabIndex)
                  );
              },
              enabled: function(a) {
                  return a.disabled === !1;
              },
              disabled: function(a) {
                  return a.disabled === !0;
              },
              checked: function(a) {
                  var b = a.nodeName.toLowerCase();
                  return (
                      ("input" === b && !!a.checked) ||
                      ("option" === b && !!a.selected)
                  );
              },
              selected: function(a) {
                  return (
                      a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                  );
              },
              empty: function(a) {
                  for (a = a.firstChild; a; a = a.nextSibling) {
                      if (a.nodeType < 6) {
                          return !1;
                      }
                  }
                  return !0;
              },
              parent: function(a) {
                  return !d.pseudos.empty(a);
              },
              header: function(a) {
                  return Z.test(a.nodeName);
              },
              input: function(a) {
                  return Y.test(a.nodeName);
              },
              button: function(a) {
                  var b = a.nodeName.toLowerCase();
                  return ("input" === b && "button" === a.type) || "button" === b;
              },
              text: function(a) {
                  var b;
                  return (
                      "input" === a.nodeName.toLowerCase() &&
                      "text" === a.type &&
                      (null == (b = a.getAttribute("type")) ||
                          "text" === b.toLowerCase())
                  );
              },
              first: oa(function() {
                  return [0];
              }),
              last: oa(function(a, b) {
                  return [b - 1];
              }),
              eq: oa(function(a, b, c) {
                  return [0 > c ? c + b : c];
              }),
              even: oa(function(a, b) {
                  for (var c = 0; b > c; c += 2) {
                      a.push(c);
                  }
                  return a;
              }),
              odd: oa(function(a, b) {
                  for (var c = 1; b > c; c += 2) {
                      a.push(c);
                  }
                  return a;
              }),
              lt: oa(function(a, b, c) {
                  for (var d = 0 > c ? c + b : c; --d >= 0;) {
                      a.push(d);
                  }
                  return a;
              }),
              gt: oa(function(a, b, c) {
                  for (var d = 0 > c ? c + b : c; ++d < b;) {
                      a.push(d);
                  }
                  return a;
              }),
          },
      }),
      (d.pseudos.nth = d.pseudos.eq);
      for (b in {
              radio: !0,
              checkbox: !0,
              file: !0,
              password: !0,
              image: !0
          }) {
          d.pseudos[b] = ma(b);
      }
      for (b in {
              submit: !0,
              reset: !0
          }) {
          d.pseudos[b] = na(b);
      }

      function qa() {}
      (qa.prototype = d.filters = d.pseudos),
      (d.setFilters = new qa()),
      (g = ga.tokenize =
          function(a, b) {
              var c,
                  e,
                  f,
                  g,
                  h,
                  i,
                  j,
                  k = z[a + " "];
              if (k) {
                  return b ? 0 : k.slice(0);
              }
              (h = a), (i = []), (j = d.preFilter);
              while (h) {
                  (!c || (e = S.exec(h))) &&
                  (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
                  (c = !1),
                  (e = T.exec(h)) &&
                  ((c = e.shift()),
                      f.push({
                          value: c,
                          type: e[0].replace(R, " ")
                      }),
                      (h = h.slice(c.length)));
                  for (g in d.filter) {
                      !(e = X[g].exec(h)) ||
                      (j[g] && !(e = j[g](e))) ||
                      ((c = e.shift()),
                          f.push({
                              value: c,
                              type: g,
                              matches: e
                          }),
                          (h = h.slice(c.length)));
                  }
                  if (!c) {
                      break;
                  }
              }
              return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
          });

      function ra(a) {
          for (var b = 0, c = a.length, d = ""; c > b; b++) {
              d += a[b].value;
          }
          return d;
      }

      function sa(a, b, c) {
          var d = b.dir,
              e = c && "parentNode" === d,
              f = x++;
          return b.first ?
              function(b, c, f) {
                  while ((b = b[d])) {
                      if (1 === b.nodeType || e) {
                          return a(b, c, f);
                      }
                  }
              } :
              function(b, c, g) {
                  var h,
                      i,
                      j = [w, f];
                  if (g) {
                      while ((b = b[d])) {
                          if ((1 === b.nodeType || e) && a(b, c, g)) {
                              return !0;
                          }
                      }
                  } else {
                      while ((b = b[d])) {
                          if (1 === b.nodeType || e) {
                              if (
                                  ((i = b[u] || (b[u] = {})),
                                      (h = i[d]) && h[0] === w && h[1] === f)
                              ) {
                                  return (j[2] = h[2]);
                              }
                              if (((i[d] = j), (j[2] = a(b, c, g)))) {
                                  return !0;
                              }
                          }
                      }
                  }
              };
      }

      function ta(a) {
          return a.length > 1 ?
              function(b, c, d) {
                  var e = a.length;
                  while (e--) {
                      if (!a[e](b, c, d)) {
                          return !1;
                      }
                  }
                  return !0;
              } :
              a[0];
      }

      function ua(a, b, c) {
          for (var d = 0, e = b.length; e > d; d++) {
              ga(a, b[d], c);
          }
          return c;
      }

      function va(a, b, c, d, e) {
          for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
              (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
          }
          return g;
      }

      function wa(a, b, c, d, e, f) {
          return (
              d && !d[u] && (d = wa(d)),
              e && !e[u] && (e = wa(e, f)),
              ia(function(f, g, h, i) {
                  var j,
                      k,
                      l,
                      m = [],
                      n = [],
                      o = g.length,
                      p = f || ua(b || "*", h.nodeType ? [h] : h, []),
                      q = !a || (!f && b) ? p : va(p, m, a, h, i),
                      r = c ? (e || (f ? a : o || d) ? [] : g) : q;
                  if ((c && c(q, r, h, i), d)) {
                      (j = va(r, n)), d(j, [], h, i), (k = j.length);
                      while (k--) {
                          (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                      }
                  }
                  if (f) {
                      if (e || a) {
                          if (e) {
                              (j = []), (k = r.length);
                              while (k--) {
                                  (l = r[k]) && j.push((q[k] = l));
                              }
                              e(null, (r = []), j, i);
                          }
                          k = r.length;
                          while (k--) {
                              (l = r[k]) &&
                              (j = e ? J(f, l) : m[k]) > -1 &&
                                  (f[j] = !(g[j] = l));
                          }
                      }
                  } else {
                      (r = va(r === g ? r.splice(o, r.length) : r)),
                      e ? e(null, g, r, i) : H.apply(g, r);
                  }
              })
          );
      }

      function xa(a) {
          for (
              var b,
                  c,
                  e,
                  f = a.length,
                  g = d.relative[a[0].type],
                  h = g || d.relative[" "],
                  i = g ? 1 : 0,
                  k = sa(
                      function(a) {
                          return a === b;
                      },
                      h,
                      !0
                  ),
                  l = sa(
                      function(a) {
                          return J(b, a) > -1;
                      },
                      h,
                      !0
                  ),
                  m = [
                      function(a, c, d) {
                          var e =
                              (!g && (d || c !== j)) ||
                              ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                          return (b = null), e;
                      },
                  ]; f > i; i++
          ) {
              if ((c = d.relative[a[i].type])) {
                  m = [sa(ta(m), c)];
              } else {
                  if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
                      for (e = ++i; f > e; e++) {
                          if (d.relative[a[e].type]) {
                              break;
                          }
                      }
                      return wa(
                          i > 1 && ta(m),
                          i > 1 &&
                          ra(
                              a
                              .slice(0, i - 1)
                              .concat({
                                  value: " " === a[i - 2].type ? "*" : ""
                              })
                          ).replace(R, "$1"),
                          c,
                          e > i && xa(a.slice(i, e)),
                          f > e && xa((a = a.slice(e))),
                          f > e && ra(a)
                      );
                  }
                  m.push(c);
              }
          }
          return ta(m);
      }

      function ya(a, b) {
          var c = b.length > 0,
              e = a.length > 0,
              f = function(f, g, h, i, k) {
                  var l,
                      m,
                      o,
                      p = 0,
                      q = "0",
                      r = f && [],
                      s = [],
                      t = j,
                      u = f || (e && d.find.TAG("*", k)),
                      v = (w += null == t ? 1 : Math.random() || 0.1),
                      x = u.length;
                  for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                      if (e && l) {
                          m = 0;
                          while ((o = a[m++])) {
                              if (o(l, g, h)) {
                                  i.push(l);
                                  break;
                              }
                          }
                          k && (w = v);
                      }
                      c && ((l = !o && l) && p--, f && r.push(l));
                  }
                  if (((p += q), c && q !== p)) {
                      m = 0;
                      while ((o = b[m++])) {
                          o(r, s, g, h);
                      }
                      if (f) {
                          if (p > 0) {
                              while (q--) {
                                  r[q] || s[q] || (s[q] = F.call(i));
                              }
                          }
                          s = va(s);
                      }
                      H.apply(i, s),
                          k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
                  }
                  return k && ((w = v), (j = t)), r;
              };
          return c ? ia(f) : f;
      }
      return (
          (h = ga.compile =
              function(a, b) {
                  var c,
                      d = [],
                      e = [],
                      f = A[a + " "];
                  if (!f) {
                      b || (b = g(a)), (c = b.length);
                      while (c--) {
                          (f = xa(b[c])), f[u] ? d.push(f) : e.push(f);
                      }
                      (f = A(a, ya(e, d))), (f.selector = a);
                  }
                  return f;
              }),
          (i = ga.select =
              function(a, b, e, f) {
                  var i,
                      j,
                      k,
                      l,
                      m,
                      n = "function" == typeof a && a,
                      o = !f && g((a = n.selector || a));
                  if (((e = e || []), 1 === o.length)) {
                      if (
                          ((j = o[0] = o[0].slice(0)),
                              j.length > 2 &&
                              "ID" === (k = j[0]).type &&
                              c.getById &&
                              9 === b.nodeType &&
                              p &&
                              d.relative[j[1].type])
                      ) {
                          if (
                              ((b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0]),
                                  !b)
                          ) {
                              return e;
                          }
                          n && (b = b.parentNode), (a = a.slice(j.shift().value.length));
                      }
                      i = X.needsContext.test(a) ? 0 : j.length;
                      while (i--) {
                          if (((k = j[i]), d.relative[(l = k.type)])) {
                              break;
                          }
                          if (
                              (m = d.find[l]) &&
                              (f = m(
                                  k.matches[0].replace(ca, da),
                                  (aa.test(j[0].type) && pa(b.parentNode)) || b
                              ))
                          ) {
                              if ((j.splice(i, 1), (a = f.length && ra(j)), !a)) {
                                  return H.apply(e, f), e;
                              }
                              break;
                          }
                      }
                  }
                  return (
                      (n || h(a, o))(f, b, !p, e, (aa.test(a) && pa(b.parentNode)) || b),
                      e
                  );
              }),
          (c.sortStable = u.split("").sort(B).join("") === u),
          (c.detectDuplicates = !!l),
          m(),
          (c.sortDetached = ja(function(a) {
              return 1 & a.compareDocumentPosition(n.createElement("div"));
          })),
          ja(function(a) {
              return (
                  (a.innerHTML = "<a href='#'></a>"),
                  "#" === a.firstChild.getAttribute("href")
              );
          }) ||
          ka("type|href|height|width", function(a, b, c) {
              return c ?
                  void 0 :
                  a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
          }),
          (c.attributes &&
              ja(function(a) {
                  return (
                      (a.innerHTML = "<input/>"),
                      a.firstChild.setAttribute("value", ""),
                      "" === a.firstChild.getAttribute("value")
                  );
              })) ||
          ka("value", function(a, b, c) {
              return c || "input" !== a.nodeName.toLowerCase() ?
                  void 0 :
                  a.defaultValue;
          }),
          ja(function(a) {
              return null == a.getAttribute("disabled");
          }) ||
          ka(K, function(a, b, c) {
              var d;
              return c ?
                  void 0 :
                  a[b] === !0 ?
                  b.toLowerCase() :
                  (d = a.getAttributeNode(b)) && d.specified ?
                  d.value :
                  null;
          }),
          ga
      );
  })(a);
  (n.find = t),
  (n.expr = t.selectors),
  (n.expr[":"] = n.expr.pseudos),
  (n.unique = t.uniqueSort),
  (n.text = t.getText),
  (n.isXMLDoc = t.isXML),
  (n.contains = t.contains);
  var u = n.expr.match.needsContext,
      v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      w = /^.[^:#\[\.,]*$/;

  function x(a, b, c) {
      if (n.isFunction(b)) {
          return n.grep(a, function(a, d) {
              return !!b.call(a, d, a) !== c;
          });
      }
      if (b.nodeType) {
          return n.grep(a, function(a) {
              return (a === b) !== c;
          });
      }
      if ("string" == typeof b) {
          if (w.test(b)) {
              return n.filter(b, a, c);
          }
          b = n.filter(b, a);
      }
      return n.grep(a, function(a) {
          return g.call(b, a) >= 0 !== c;
      });
  }
  (n.filter = function(a, b, c) {
      var d = b[0];
      return (
          c && (a = ":not(" + a + ")"),
          1 === b.length && 1 === d.nodeType ?
          n.find.matchesSelector(d, a) ? [d] : [] :
          n.find.matches(
              a,
              n.grep(b, function(a) {
                  return 1 === a.nodeType;
              })
          )
      );
  }),
  n.fn.extend({
      find: function(a) {
          var b,
              c = this.length,
              d = [],
              e = this;
          if ("string" != typeof a) {
              return this.pushStack(
                  n(a).filter(function() {
                      for (b = 0; c > b; b++) {
                          if (n.contains(e[b], this)) {
                              return !0;
                          }
                      }
                  })
              );
          }
          for (b = 0; c > b; b++) {
              n.find(a, e[b], d);
          }
          return (
              (d = this.pushStack(c > 1 ? n.unique(d) : d)),
              (d.selector = this.selector ? this.selector + " " + a : a),
              d
          );
      },
      filter: function(a) {
          return this.pushStack(x(this, a || [], !1));
      },
      not: function(a) {
          return this.pushStack(x(this, a || [], !0));
      },
      is: function(a) {
          return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1)
              .length;
      },
  });
  var y,
      z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      A = (n.fn.init = function(a, b) {
          var c, d;
          if (!a) {
              return this;
          }
          if ("string" == typeof a) {
              if (
                  ((c =
                          "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] :
                          z.exec(a)),
                      !c || (!c[1] && b))
              ) {
                  return !b || b.jquery ?
                      (b || y).find(a) :
                      this.constructor(b).find(a);
              }
              if (c[1]) {
                  if (
                      ((b = b instanceof n ? b[0] : b),
                          n.merge(
                              this,
                              n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)
                          ),
                          v.test(c[1]) && n.isPlainObject(b))
                  ) {
                      for (c in b) {
                          n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                      }
                  }
                  return this;
              }
              return (
                  (d = l.getElementById(c[2])),
                  d && d.parentNode && ((this.length = 1), (this[0] = d)),
                  (this.context = l),
                  (this.selector = a),
                  this
              );
          }
          return a.nodeType ?
              ((this.context = this[0] = a), (this.length = 1), this) :
              n.isFunction(a) ?
              "undefined" != typeof y.ready ?
              y.ready(a) :
              a(n) :
              (void 0 !== a.selector &&
                  ((this.selector = a.selector), (this.context = a.context)),
                  n.makeArray(a, this));
      });
  (A.prototype = n.fn), (y = n(l));
  var B = /^(?:parents|prev(?:Until|All))/,
      C = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0
      };
  n.extend({
          dir: function(a, b, c) {
              var d = [],
                  e = void 0 !== c;
              while ((a = a[b]) && 9 !== a.nodeType) {
                  if (1 === a.nodeType) {
                      if (e && n(a).is(c)) {
                          break;
                      }
                      d.push(a);
                  }
              }
              return d;
          },
          sibling: function(a, b) {
              for (var c = []; a; a = a.nextSibling) {
                  1 === a.nodeType && a !== b && c.push(a);
              }
              return c;
          },
      }),
      n.fn.extend({
          has: function(a) {
              var b = n(a, this),
                  c = b.length;
              return this.filter(function() {
                  for (var a = 0; c > a; a++) {
                      if (n.contains(this, b[a])) {
                          return !0;
                      }
                  }
              });
          },
          closest: function(a, b) {
              for (
                  var c,
                      d = 0,
                      e = this.length,
                      f = [],
                      g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++
              ) {
                  for (c = this[d]; c && c !== b; c = c.parentNode) {
                      if (
                          c.nodeType < 11 &&
                          (g ?
                              g.index(c) > -1 :
                              1 === c.nodeType && n.find.matchesSelector(c, a))
                      ) {
                          f.push(c);
                          break;
                      }
                  }
              }
              return this.pushStack(f.length > 1 ? n.unique(f) : f);
          },
          index: function(a) {
              return a ?
                  "string" == typeof a ?
                  g.call(n(a), this[0]) :
                  g.call(this, a.jquery ? a[0] : a) :
                  this[0] && this[0].parentNode ?
                  this.first().prevAll().length :
                  -1;
          },
          add: function(a, b) {
              return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
          },
          addBack: function(a) {
              return this.add(
                  null == a ? this.prevObject : this.prevObject.filter(a)
              );
          },
      });

  function D(a, b) {
      while ((a = a[b]) && 1 !== a.nodeType) {}
      return a;
  }
  n.each({
          parent: function(a) {
              var b = a.parentNode;
              return b && 11 !== b.nodeType ? b : null;
          },
          parents: function(a) {
              return n.dir(a, "parentNode");
          },
          parentsUntil: function(a, b, c) {
              return n.dir(a, "parentNode", c);
          },
          next: function(a) {
              return D(a, "nextSibling");
          },
          prev: function(a) {
              return D(a, "previousSibling");
          },
          nextAll: function(a) {
              return n.dir(a, "nextSibling");
          },
          prevAll: function(a) {
              return n.dir(a, "previousSibling");
          },
          nextUntil: function(a, b, c) {
              return n.dir(a, "nextSibling", c);
          },
          prevUntil: function(a, b, c) {
              return n.dir(a, "previousSibling", c);
          },
          siblings: function(a) {
              return n.sibling((a.parentNode || {}).firstChild, a);
          },
          children: function(a) {
              return n.sibling(a.firstChild);
          },
          contents: function(a) {
              return a.contentDocument || n.merge([], a.childNodes);
          },
      },
      function(a, b) {
          n.fn[a] = function(c, d) {
              var e = n.map(this, b, c);
              return (
                  "Until" !== a.slice(-5) && (d = c),
                  d && "string" == typeof d && (e = n.filter(d, e)),
                  this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()),
                  this.pushStack(e)
              );
          };
      }
  );
  var E = /\S+/g,
      F = {};

  function G(a) {
      var b = (F[a] = {});
      return (
          n.each(a.match(E) || [], function(a, c) {
              b[c] = !0;
          }),
          b
      );
  }
  (n.Callbacks = function(a) {
      a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
      var b,
          c,
          d,
          e,
          f,
          g,
          h = [],
          i = !a.once && [],
          j = function(l) {
              for (
                  b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++
              ) {
                  if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                      b = !1;
                      break;
                  }
              }
              (d = !1),
              h && (i ? i.length && j(i.shift()) : b ? (h = []) : k.disable());
          },
          k = {
              add: function() {
                  if (h) {
                      var c = h.length;
                      !(function g(b) {
                          n.each(b, function(b, c) {
                              var d = n.type(c);
                              "function" === d
                                  ?
                                  (a.unique && k.has(c)) || h.push(c) :
                                  c && c.length && "string" !== d && g(c);
                          });
                      })(arguments),
                      d ? (f = h.length) : b && ((e = c), j(b));
                  }
                  return this;
              },
              remove: function() {
                  return (
                      h &&
                      n.each(arguments, function(a, b) {
                          var c;
                          while ((c = n.inArray(b, h, c)) > -1) {
                              h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
                          }
                      }),
                      this
                  );
              },
              has: function(a) {
                  return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
              },
              empty: function() {
                  return (h = []), (f = 0), this;
              },
              disable: function() {
                  return (h = i = b = void 0), this;
              },
              disabled: function() {
                  return !h;
              },
              lock: function() {
                  return (i = void 0), b || k.disable(), this;
              },
              locked: function() {
                  return !i;
              },
              fireWith: function(a, b) {
                  return (
                      !h ||
                      (c && !i) ||
                      ((b = b || []),
                          (b = [a, b.slice ? b.slice() : b]),
                          d ? i.push(b) : j(b)),
                      this
                  );
              },
              fire: function() {
                  return k.fireWith(this, arguments), this;
              },
              fired: function() {
                  return !!c;
              },
          };
      return k;
  }),
  n.extend({
      Deferred: function(a) {
          var b = [
                  ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                  ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                  ["notify", "progress", n.Callbacks("memory")],
              ],
              c = "pending",
              d = {
                  state: function() {
                      return c;
                  },
                  always: function() {
                      return e.done(arguments).fail(arguments), this;
                  },
                  then: function() {
                      var a = arguments;
                      return n
                          .Deferred(function(c) {
                              n.each(b, function(b, f) {
                                      var g = n.isFunction(a[b]) && a[b];
                                      e[f[1]](function() {
                                          var a = g && g.apply(this, arguments);
                                          a && n.isFunction(a.promise) ?
                                              a
                                              .promise()
                                              .done(c.resolve)
                                              .fail(c.reject)
                                              .progress(c.notify) :
                                              c[f[0] + "With"](
                                                  this === d ? c.promise() : this,
                                                  g ? [a] : arguments
                                              );
                                      });
                                  }),
                                  (a = null);
                          })
                          .promise();
                  },
                  promise: function(a) {
                      return null != a ? n.extend(a, d) : d;
                  },
              },
              e = {};
          return (
              (d.pipe = d.then),
              n.each(b, function(a, f) {
                  var g = f[2],
                      h = f[3];
                  (d[f[1]] = g.add),
                  h &&
                      g.add(
                          function() {
                              c = h;
                          },
                          b[1 ^ a][2].disable,
                          b[2][2].lock
                      ),
                      (e[f[0]] = function() {
                          return e[f[0] + "With"](this === e ? d : this, arguments), this;
                      }),
                      (e[f[0] + "With"] = g.fireWith);
              }),
              d.promise(e),
              a && a.call(e, e),
              e
          );
      },
      when: function(a) {
          var b = 0,
              c = d.call(arguments),
              e = c.length,
              f = 1 !== e || (a && n.isFunction(a.promise)) ? e : 0,
              g = 1 === f ? a : n.Deferred(),
              h = function(a, b, c) {
                  return function(e) {
                      (b[a] = this),
                      (c[a] = arguments.length > 1 ? d.call(arguments) : e),
                      c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
                  };
              },
              i,
              j,
              k;
          if (e > 1) {
              for (
                  i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++
              ) {
                  c[b] && n.isFunction(c[b].promise) ?
                      c[b]
                      .promise()
                      .done(h(b, k, c))
                      .fail(g.reject)
                      .progress(h(b, j, i)) :
                      --f;
              }
          }
          return f || g.resolveWith(k, c), g.promise();
      },
  });
  var H;
  (n.fn.ready = function(a) {
      return n.ready.promise().done(a), this;
  }),
  n.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(a) {
          a ? n.readyWait++ : n.ready(!0);
      },
      ready: function(a) {
          (a === !0 ? --n.readyWait : n.isReady) ||
          ((n.isReady = !0),
              (a !== !0 && --n.readyWait > 0) ||
              (H.resolveWith(l, [n]),
                  n.fn.triggerHandler &&
                  (n(l).triggerHandler("ready"), n(l).off("ready"))));
      },
  });

  function I() {
      l.removeEventListener("DOMContentLoaded", I, !1),
          a.removeEventListener("load", I, !1),
          n.ready();
  }
  (n.ready.promise = function(b) {
      return (
          H ||
          ((H = n.Deferred()),
              "complete" === l.readyState ?
              setTimeout(n.ready) :
              (l.addEventListener("DOMContentLoaded", I, !1),
                  a.addEventListener("load", I, !1))),
          H.promise(b)
      );
  }),
  n.ready.promise();
  var J = (n.access = function(a, b, c, d, e, f, g) {
      var h = 0,
          i = a.length,
          j = null == c;
      if ("object" === n.type(c)) {
          e = !0;
          for (h in c) {
              n.access(a, b, h, c[h], !0, f, g);
          }
      } else {
          if (
              void 0 !== d &&
              ((e = !0),
                  n.isFunction(d) || (g = !0),
                  j &&
                  (g ?
                      (b.call(a, d), (b = null)) :
                      ((j = b),
                          (b = function(a, b, c) {
                              return j.call(n(a), c);
                          }))),
                  b)
          ) {
              for (; i > h; h++) {
                  b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
              }
          }
      }
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  });
  n.acceptData = function(a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };

  function K() {
      Object.defineProperty((this.cache = {}), 0, {
              get: function() {
                  return {};
              },
          }),
          (this.expando = n.expando + K.uid++);
  }
  (K.uid = 1),
  (K.accepts = n.acceptData),
  (K.prototype = {
      key: function(a) {
          if (!K.accepts(a)) {
              return 0;
          }
          var b = {},
              c = a[this.expando];
          if (!c) {
              c = K.uid++;
              try {
                  (b[this.expando] = {
                      value: c
                  }), Object.defineProperties(a, b);
              } catch (d) {
                  (b[this.expando] = c), n.extend(a, b);
              }
          }
          return this.cache[c] || (this.cache[c] = {}), c;
      },
      set: function(a, b, c) {
          var d,
              e = this.key(a),
              f = this.cache[e];
          if ("string" == typeof b) {
              f[b] = c;
          } else {
              if (n.isEmptyObject(f)) {
                  n.extend(this.cache[e], b);
              } else {
                  for (d in b) {
                      f[d] = b[d];
                  }
              }
          }
          return f;
      },
      get: function(a, b) {
          var c = this.cache[this.key(a)];
          return void 0 === b ? c : c[b];
      },
      access: function(a, b, c) {
          var d;
          return void 0 === b || (b && "string" == typeof b && void 0 === c) ?
              ((d = this.get(a, b)),
                  void 0 !== d ? d : this.get(a, n.camelCase(b))) :
              (this.set(a, b, c), void 0 !== c ? c : b);
      },
      remove: function(a, b) {
          var c,
              d,
              e,
              f = this.key(a),
              g = this.cache[f];
          if (void 0 === b) {
              this.cache[f] = {};
          } else {
              n.isArray(b) ?
                  (d = b.concat(b.map(n.camelCase))) :
                  ((e = n.camelCase(b)),
                      b in g ?
                      (d = [b, e]) :
                      ((d = e), (d = d in g ? [d] : d.match(E) || []))),
                  (c = d.length);
              while (c--) {
                  delete g[d[c]];
              }
          }
      },
      hasData: function(a) {
          return !n.isEmptyObject(this.cache[a[this.expando]] || {});
      },
      discard: function(a) {
          a[this.expando] && delete this.cache[a[this.expando]];
      },
  });
  var L = new K(),
      M = new K(),
      N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      O = /([A-Z])/g;

  function P(a, b, c) {
      var d;
      if (void 0 === c && 1 === a.nodeType) {
          if (
              ((d = "data-" + b.replace(O, "-$1").toLowerCase()),
                  (c = a.getAttribute(d)),
                  "string" == typeof c)
          ) {
              try {
                  c =
                      "true" === c ?
                      !0 :
                      "false" === c ?
                      !1 :
                      "null" === c ?
                      null :
                      +c + "" === c ?
                      +c :
                      N.test(c) ?
                      n.parseJSON(c) :
                      c;
              } catch (e) {}
              M.set(a, b, c);
          } else {
              c = void 0;
          }
      }
      return c;
  }
  n.extend({
          hasData: function(a) {
              return M.hasData(a) || L.hasData(a);
          },
          data: function(a, b, c) {
              return M.access(a, b, c);
          },
          removeData: function(a, b) {
              M.remove(a, b);
          },
          _data: function(a, b, c) {
              return L.access(a, b, c);
          },
          _removeData: function(a, b) {
              L.remove(a, b);
          },
      }),
      n.fn.extend({
          data: function(a, b) {
              var c,
                  d,
                  e,
                  f = this[0],
                  g = f && f.attributes;
              if (void 0 === a) {
                  if (
                      this.length &&
                      ((e = M.get(f)), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))
                  ) {
                      c = g.length;
                      while (c--) {
                          g[c] &&
                              ((d = g[c].name),
                                  0 === d.indexOf("data-") &&
                                  ((d = n.camelCase(d.slice(5))), P(f, d, e[d])));
                      }
                      L.set(f, "hasDataAttrs", !0);
                  }
                  return e;
              }
              return "object" == typeof a ?
                  this.each(function() {
                      M.set(this, a);
                  }) :
                  J(
                      this,
                      function(b) {
                          var c,
                              d = n.camelCase(a);
                          if (f && void 0 === b) {
                              if (((c = M.get(f, a)), void 0 !== c)) {
                                  return c;
                              }
                              if (((c = M.get(f, d)), void 0 !== c)) {
                                  return c;
                              }
                              if (((c = P(f, d, void 0)), void 0 !== c)) {
                                  return c;
                              }
                          } else {
                              this.each(function() {
                                  var c = M.get(this, d);
                                  M.set(this, d, b),
                                      -1 !== a.indexOf("-") &&
                                      void 0 !== c &&
                                      M.set(this, a, b);
                              });
                          }
                      },
                      null,
                      b,
                      arguments.length > 1,
                      null,
                      !0
                  );
          },
          removeData: function(a) {
              return this.each(function() {
                  M.remove(this, a);
              });
          },
      }),
      n.extend({
          queue: function(a, b, c) {
              var d;
              return a ?
                  ((b = (b || "fx") + "queue"),
                      (d = L.get(a, b)),
                      c &&
                      (!d || n.isArray(c) ?
                          (d = L.access(a, b, n.makeArray(c))) :
                          d.push(c)),
                      d || []) :
                  void 0;
          },
          dequeue: function(a, b) {
              b = b || "fx";
              var c = n.queue(a, b),
                  d = c.length,
                  e = c.shift(),
                  f = n._queueHooks(a, b),
                  g = function() {
                      n.dequeue(a, b);
                  };
              "inprogress" === e && ((e = c.shift()), d--),
                  e &&
                  ("fx" === b && c.unshift("inprogress"),
                      delete f.stop,
                      e.call(a, g, f)),
                  !d && f && f.empty.fire();
          },
          _queueHooks: function(a, b) {
              var c = b + "queueHooks";
              return (
                  L.get(a, c) ||
                  L.access(a, c, {
                      empty: n.Callbacks("once memory").add(function() {
                          L.remove(a, [b + "queue", c]);
                      }),
                  })
              );
          },
      }),
      n.fn.extend({
          queue: function(a, b) {
              var c = 2;
              return (
                  "string" != typeof a && ((b = a), (a = "fx"), c--),
                  arguments.length < c ?
                  n.queue(this[0], a) :
                  void 0 === b ?
                  this :
                  this.each(function() {
                      var c = n.queue(this, a, b);
                      n._queueHooks(this, a),
                          "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
                  })
              );
          },
          dequeue: function(a) {
              return this.each(function() {
                  n.dequeue(this, a);
              });
          },
          clearQueue: function(a) {
              return this.queue(a || "fx", []);
          },
          promise: function(a, b) {
              var c,
                  d = 1,
                  e = n.Deferred(),
                  f = this,
                  g = this.length,
                  h = function() {
                      --d || e.resolveWith(f, [f]);
                  };
              "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
              while (g--) {
                  (c = L.get(f[g], a + "queueHooks")),
                  c && c.empty && (d++, c.empty.add(h));
              }
              return h(), e.promise(b);
          },
      });
  var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      R = ["Top", "Right", "Bottom", "Left"],
      S = function(a, b) {
          return (
              (a = b || a),
              "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
          );
      },
      T = /^(?:checkbox|radio)$/i;
  !(function() {
      var a = l.createDocumentFragment(),
          b = a.appendChild(l.createElement("div")),
          c = l.createElement("input");
      c.setAttribute("type", "radio"),
          c.setAttribute("checked", "checked"),
          c.setAttribute("name", "t"),
          b.appendChild(c),
          (k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (b.innerHTML = "<textarea>x</textarea>"),
          (k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
  })();
  var U = "undefined";
  k.focusinBubbles = "onfocusin" in a;
  var V = /^key/,
      W = /^(?:mouse|pointer|contextmenu)|click/,
      X = /^(?:focusinfocus|focusoutblur)$/,
      Y = /^([^.]*)(?:\.(.+)|)$/;

  function Z() {
      return !0;
  }

  function $() {
      return !1;
  }

  function _() {
      try {
          return l.activeElement;
      } catch (a) {}
  }
  (n.event = {
      global: {},
      add: function(a, b, c, d, e) {
          var f,
              g,
              h,
              i,
              j,
              k,
              l,
              m,
              o,
              p,
              q,
              r = L.get(a);
          if (r) {
              c.handler && ((f = c), (c = f.handler), (e = f.selector)),
                  c.guid || (c.guid = n.guid++),
                  (i = r.events) || (i = r.events = {}),
                  (g = r.handle) ||
                  (g = r.handle =
                      function(b) {
                          return typeof n !== U && n.event.triggered !== b.type ?
                              n.event.dispatch.apply(a, arguments) :
                              void 0;
                      }),
                  (b = (b || "").match(E) || [""]),
                  (j = b.length);
              while (j--) {
                  (h = Y.exec(b[j]) || []),
                  (o = q = h[1]),
                  (p = (h[2] || "").split(".").sort()),
                  o &&
                      ((l = n.event.special[o] || {}),
                          (o = (e ? l.delegateType : l.bindType) || o),
                          (l = n.event.special[o] || {}),
                          (k = n.extend({
                                  type: o,
                                  origType: q,
                                  data: d,
                                  handler: c,
                                  guid: c.guid,
                                  selector: e,
                                  needsContext: e && n.expr.match.needsContext.test(e),
                                  namespace: p.join("."),
                              },
                              f
                          )),
                          (m = i[o]) ||
                          ((m = i[o] = []),
                              (m.delegateCount = 0),
                              (l.setup && l.setup.call(a, d, p, g) !== !1) ||
                              (a.addEventListener && a.addEventListener(o, g, !1))),
                          l.add &&
                          (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
                          e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                          (n.event.global[o] = !0));
              }
          }
      },
      remove: function(a, b, c, d, e) {
          var f,
              g,
              h,
              i,
              j,
              k,
              l,
              m,
              o,
              p,
              q,
              r = L.hasData(a) && L.get(a);
          if (r && (i = r.events)) {
              (b = (b || "").match(E) || [""]), (j = b.length);
              while (j--) {
                  if (
                      ((h = Y.exec(b[j]) || []),
                          (o = q = h[1]),
                          (p = (h[2] || "").split(".").sort()),
                          o)
                  ) {
                      (l = n.event.special[o] || {}),
                      (o = (d ? l.delegateType : l.bindType) || o),
                      (m = i[o] || []),
                      (h =
                          h[2] &&
                          new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")),
                      (g = f = m.length);
                      while (f--) {
                          (k = m[f]),
                          (!e && q !== k.origType) ||
                          (c && c.guid !== k.guid) ||
                          (h && !h.test(k.namespace)) ||
                          (d && d !== k.selector && ("**" !== d || !k.selector)) ||
                          (m.splice(f, 1),
                              k.selector && m.delegateCount--,
                              l.remove && l.remove.call(a, k));
                      }
                      g &&
                          !m.length &&
                          ((l.teardown && l.teardown.call(a, p, r.handle) !== !1) ||
                              n.removeEvent(a, o, r.handle),
                              delete i[o]);
                  } else {
                      for (o in i) {
                          n.event.remove(a, o + b[j], c, d, !0);
                      }
                  }
              }
              n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
          }
      },
      trigger: function(b, c, d, e) {
          var f,
              g,
              h,
              i,
              k,
              m,
              o,
              p = [d || l],
              q = j.call(b, "type") ? b.type : b,
              r = j.call(b, "namespace") ? b.namespace.split(".") : [];
          if (
              ((g = h = d = d || l),
                  3 !== d.nodeType &&
                  8 !== d.nodeType &&
                  !X.test(q + n.event.triggered) &&
                  (q.indexOf(".") >= 0 &&
                      ((r = q.split(".")), (q = r.shift()), r.sort()),
                      (k = q.indexOf(":") < 0 && "on" + q),
                      (b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b)),
                      (b.isTrigger = e ? 2 : 3),
                      (b.namespace = r.join(".")),
                      (b.namespace_re = b.namespace ?
                          new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") :
                          null),
                      (b.result = void 0),
                      b.target || (b.target = d),
                      (c = null == c ? [b] : n.makeArray(c, [b])),
                      (o = n.event.special[q] || {}),
                      e || !o.trigger || o.trigger.apply(d, c) !== !1))
          ) {
              if (!e && !o.noBubble && !n.isWindow(d)) {
                  for (
                      i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode
                  ) {
                      p.push(g), (h = g);
                  }
                  h === (d.ownerDocument || l) &&
                      p.push(h.defaultView || h.parentWindow || a);
              }
              f = 0;
              while ((g = p[f++]) && !b.isPropagationStopped()) {
                  (b.type = f > 1 ? i : o.bindType || q),
                  (m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle")),
                  m && m.apply(g, c),
                      (m = k && g[k]),
                      m &&
                      m.apply &&
                      n.acceptData(g) &&
                      ((b.result = m.apply(g, c)),
                          b.result === !1 && b.preventDefault());
              }
              return (
                  (b.type = q),
                  e ||
                  b.isDefaultPrevented() ||
                  (o._default && o._default.apply(p.pop(), c) !== !1) ||
                  !n.acceptData(d) ||
                  (k &&
                      n.isFunction(d[q]) &&
                      !n.isWindow(d) &&
                      ((h = d[k]),
                          h && (d[k] = null),
                          (n.event.triggered = q),
                          d[q](),
                          (n.event.triggered = void 0),
                          h && (d[k] = h))),
                  b.result
              );
          }
      },
      dispatch: function(a) {
          a = n.event.fix(a);
          var b,
              c,
              e,
              f,
              g,
              h = [],
              i = d.call(arguments),
              j = (L.get(this, "events") || {})[a.type] || [],
              k = n.event.special[a.type] || {};
          if (
              ((i[0] = a),
                  (a.delegateTarget = this),
                  !k.preDispatch || k.preDispatch.call(this, a) !== !1)
          ) {
              (h = n.event.handlers.call(this, a, j)), (b = 0);
              while ((f = h[b++]) && !a.isPropagationStopped()) {
                  (a.currentTarget = f.elem), (c = 0);
                  while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
                      (!a.namespace_re || a.namespace_re.test(g.namespace)) &&
                      ((a.handleObj = g),
                          (a.data = g.data),
                          (e = (
                              (n.event.special[g.origType] || {}).handle || g.handler
                          ).apply(f.elem, i)),
                          void 0 !== e &&
                          (a.result = e) === !1 &&
                          (a.preventDefault(), a.stopPropagation()));
                  }
              }
              return k.postDispatch && k.postDispatch.call(this, a), a.result;
          }
      },
      handlers: function(a, b) {
          var c,
              d,
              e,
              f,
              g = [],
              h = b.delegateCount,
              i = a.target;
          if (h && i.nodeType && (!a.button || "click" !== a.type)) {
              for (; i !== this; i = i.parentNode || this) {
                  if (i.disabled !== !0 || "click" !== a.type) {
                      for (d = [], c = 0; h > c; c++) {
                          (f = b[c]),
                          (e = f.selector + " "),
                          void 0 === d[e] &&
                              (d[e] = f.needsContext ?
                                  n(e, this).index(i) >= 0 :
                                  n.find(e, this, null, [i]).length),
                              d[e] && d.push(f);
                      }
                      d.length && g.push({
                          elem: i,
                          handlers: d
                      });
                  }
              }
          }
          return h < b.length && g.push({
              elem: this,
              handlers: b.slice(h)
          }), g;
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
          " "
      ),
      fixHooks: {},
      keyHooks: {
          props: "char charCode key keyCode".split(" "),
          filter: function(a, b) {
              return (
                  null == a.which &&
                  (a.which = null != b.charCode ? b.charCode : b.keyCode),
                  a
              );
          },
      },
      mouseHooks: {
          props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
              " "
          ),
          filter: function(a, b) {
              var c,
                  d,
                  e,
                  f = b.button;
              return (
                  null == a.pageX &&
                  null != b.clientX &&
                  ((c = a.target.ownerDocument || l),
                      (d = c.documentElement),
                      (e = c.body),
                      (a.pageX =
                          b.clientX +
                          ((d && d.scrollLeft) || (e && e.scrollLeft) || 0) -
                          ((d && d.clientLeft) || (e && e.clientLeft) || 0)),
                      (a.pageY =
                          b.clientY +
                          ((d && d.scrollTop) || (e && e.scrollTop) || 0) -
                          ((d && d.clientTop) || (e && e.clientTop) || 0))),
                  a.which ||
                  void 0 === f ||
                  (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                  a
              );
          },
      },
      fix: function(a) {
          if (a[n.expando]) {
              return a;
          }
          var b,
              c,
              d,
              e = a.type,
              f = a,
              g = this.fixHooks[e];
          g ||
              (this.fixHooks[e] = g =
                  W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}),
              (d = g.props ? this.props.concat(g.props) : this.props),
              (a = new n.Event(f)),
              (b = d.length);
          while (b--) {
              (c = d[b]), (a[c] = f[c]);
          }
          return (
              a.target || (a.target = l),
              3 === a.target.nodeType && (a.target = a.target.parentNode),
              g.filter ? g.filter(a, f) : a
          );
      },
      special: {
          load: {
              noBubble: !0
          },
          focus: {
              trigger: function() {
                  return this !== _() && this.focus ? (this.focus(), !1) : void 0;
              },
              delegateType: "focusin",
          },
          blur: {
              trigger: function() {
                  return this === _() && this.blur ? (this.blur(), !1) : void 0;
              },
              delegateType: "focusout",
          },
          click: {
              trigger: function() {
                  return "checkbox" === this.type &&
                      this.click &&
                      n.nodeName(this, "input") ?
                      (this.click(), !1) :
                      void 0;
              },
              _default: function(a) {
                  return n.nodeName(a.target, "a");
              },
          },
          beforeunload: {
              postDispatch: function(a) {
                  void 0 !== a.result &&
                      a.originalEvent &&
                      (a.originalEvent.returnValue = a.result);
              },
          },
      },
      simulate: function(a, b, c, d) {
          var e = n.extend(new n.Event(), c, {
              type: a,
              isSimulated: !0,
              originalEvent: {},
          });
          d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e),
              e.isDefaultPrevented() && c.preventDefault();
      },
  }),
  (n.removeEvent = function(a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1);
  }),
  (n.Event = function(a, b) {
      return this instanceof n.Event ?
          (a && a.type ?
              ((this.originalEvent = a),
                  (this.type = a.type),
                  (this.isDefaultPrevented =
                      a.defaultPrevented ||
                      (void 0 === a.defaultPrevented && a.returnValue === !1) ?
                      Z :
                      $)) :
              (this.type = a),
              b && n.extend(this, b),
              (this.timeStamp = (a && a.timeStamp) || n.now()),
              void(this[n.expando] = !0)) :
          new n.Event(a, b);
  }),
  (n.Event.prototype = {
      isDefaultPrevented: $,
      isPropagationStopped: $,
      isImmediatePropagationStopped: $,
      preventDefault: function() {
          var a = this.originalEvent;
          (this.isDefaultPrevented = Z),
          a && a.preventDefault && a.preventDefault();
      },
      stopPropagation: function() {
          var a = this.originalEvent;
          (this.isPropagationStopped = Z),
          a && a.stopPropagation && a.stopPropagation();
      },
      stopImmediatePropagation: function() {
          var a = this.originalEvent;
          (this.isImmediatePropagationStopped = Z),
          a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
              this.stopPropagation();
      },
  }),
  n.each({
              mouseenter: "mouseover",
              mouseleave: "mouseout",
              pointerenter: "pointerover",
              pointerleave: "pointerout",
          },
          function(a, b) {
              n.event.special[a] = {
                  delegateType: b,
                  bindType: b,
                  handle: function(a) {
                      var c,
                          d = this,
                          e = a.relatedTarget,
                          f = a.handleObj;
                      return (
                          (!e || (e !== d && !n.contains(d, e))) &&
                          ((a.type = f.origType),
                              (c = f.handler.apply(this, arguments)),
                              (a.type = b)),
                          c
                      );
                  },
              };
          }
      ),
      k.focusinBubbles ||
      n.each({
          focus: "focusin",
          blur: "focusout"
      }, function(a, b) {
          var c = function(a) {
              n.event.simulate(b, a.target, n.event.fix(a), !0);
          };
          n.event.special[b] = {
              setup: function() {
                  var d = this.ownerDocument || this,
                      e = L.access(d, b);
                  e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
              },
              teardown: function() {
                  var d = this.ownerDocument || this,
                      e = L.access(d, b) - 1;
                  e
                      ?
                      L.access(d, b, e) :
                      (d.removeEventListener(a, c, !0), L.remove(d, b));
              },
          };
      }),
      n.fn.extend({
          on: function(a, b, c, d, e) {
              var f, g;
              if ("object" == typeof a) {
                  "string" != typeof b && ((c = c || b), (b = void 0));
                  for (g in a) {
                      this.on(g, b, c, a[g], e);
                  }
                  return this;
              }
              if (
                  (null == c && null == d ?
                      ((d = b), (c = b = void 0)) :
                      null == d &&
                      ("string" == typeof b ?
                          ((d = c), (c = void 0)) :
                          ((d = c), (c = b), (b = void 0))),
                      d === !1)
              ) {
                  d = $;
              } else {
                  if (!d) {
                      return this;
                  }
              }
              return (
                  1 === e &&
                  ((f = d),
                      (d = function(a) {
                          return n().off(a), f.apply(this, arguments);
                      }),
                      (d.guid = f.guid || (f.guid = n.guid++))),
                  this.each(function() {
                      n.event.add(this, a, d, c, b);
                  })
              );
          },
          one: function(a, b, c, d) {
              return this.on(a, b, c, d, 1);
          },
          off: function(a, b, c) {
              var d, e;
              if (a && a.preventDefault && a.handleObj) {
                  return (
                      (d = a.handleObj),
                      n(a.delegateTarget).off(
                          d.namespace ? d.origType + "." + d.namespace : d.origType,
                          d.selector,
                          d.handler
                      ),
                      this
                  );
              }
              if ("object" == typeof a) {
                  for (e in a) {
                      this.off(e, b, a[e]);
                  }
                  return this;
              }
              return (
                  (b === !1 || "function" == typeof b) && ((c = b), (b = void 0)),
                  c === !1 && (c = $),
                  this.each(function() {
                      n.event.remove(this, a, c, b);
                  })
              );
          },
          trigger: function(a, b) {
              return this.each(function() {
                  n.event.trigger(a, b, this);
              });
          },
          triggerHandler: function(a, b) {
              var c = this[0];
              return c ? n.event.trigger(a, b, c, !0) : void 0;
          },
      });
  var aa =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      ba = /<([\w:]+)/,
      ca = /<|&#?\w+;/,
      da = /<(?:script|style|link)/i,
      ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
      fa = /^$|\/(?:java|ecma)script/i,
      ga = /^true\/(.*)/,
      ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      ia = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""],
      };
  (ia.optgroup = ia.option),
  (ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead),
  (ia.th = ia.td);

  function ja(a, b) {
      return n.nodeName(a, "table") &&
          n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ?
          a.getElementsByTagName("tbody")[0] ||
          a.appendChild(a.ownerDocument.createElement("tbody")) :
          a;
  }

  function ka(a) {
      return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
  }

  function la(a) {
      var b = ga.exec(a.type);
      return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }

  function ma(a, b) {
      for (var c = 0, d = a.length; d > c; c++) {
          L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
      }
  }

  function na(a, b) {
      var c, d, e, f, g, h, i, j;
      if (1 === b.nodeType) {
          if (
              L.hasData(a) &&
              ((f = L.access(a)), (g = L.set(b, f)), (j = f.events))
          ) {
              delete g.handle, (g.events = {});
              for (e in j) {
                  for (c = 0, d = j[e].length; d > c; c++) {
                      n.event.add(b, e, j[e][c]);
                  }
              }
          }
          M.hasData(a) && ((h = M.access(a)), (i = n.extend({}, h)), M.set(b, i));
      }
  }

  function oa(a, b) {
      var c = a.getElementsByTagName ?
          a.getElementsByTagName(b || "*") :
          a.querySelectorAll ?
          a.querySelectorAll(b || "*") : [];
      return void 0 === b || (b && n.nodeName(a, b)) ? n.merge([a], c) : c;
  }

  function pa(a, b) {
      var c = b.nodeName.toLowerCase();
      "input" === c && T.test(a.type) ?
          (b.checked = a.checked) :
          ("input" === c || "textarea" === c) &&
          (b.defaultValue = a.defaultValue);
  }
  n.extend({
          clone: function(a, b, c) {
              var d,
                  e,
                  f,
                  g,
                  h = a.cloneNode(!0),
                  i = n.contains(a.ownerDocument, a);
              if (
                  !(
                      k.noCloneChecked ||
                      (1 !== a.nodeType && 11 !== a.nodeType) ||
                      n.isXMLDoc(a)
                  )
              ) {
                  for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) {
                      pa(f[d], g[d]);
                  }
              }
              if (b) {
                  if (c) {
                      for (
                          f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++
                      ) {
                          na(f[d], g[d]);
                      }
                  } else {
                      na(a, h);
                  }
              }
              return (
                  (g = oa(h, "script")), g.length > 0 && ma(g, !i && oa(a, "script")), h
              );
          },
          buildFragment: function(a, b, c, d) {
              for (
                  var e,
                      f,
                      g,
                      h,
                      i,
                      j,
                      k = b.createDocumentFragment(),
                      l = [],
                      m = 0,
                      o = a.length; o > m; m++
              ) {
                  if (((e = a[m]), e || 0 === e)) {
                      if ("object" === n.type(e)) {
                          n.merge(l, e.nodeType ? [e] : e);
                      } else {
                          if (ca.test(e)) {
                              (f = f || k.appendChild(b.createElement("div"))),
                              (g = (ba.exec(e) || ["", ""])[1].toLowerCase()),
                              (h = ia[g] || ia._default),
                              (f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2]),
                              (j = h[0]);
                              while (j--) {
                                  f = f.lastChild;
                              }
                              n.merge(l, f.childNodes),
                                  (f = k.firstChild),
                                  (f.textContent = "");
                          } else {
                              l.push(b.createTextNode(e));
                          }
                      }
                  }
              }
              (k.textContent = ""), (m = 0);
              while ((e = l[m++])) {
                  if (
                      (!d || -1 === n.inArray(e, d)) &&
                      ((i = n.contains(e.ownerDocument, e)),
                          (f = oa(k.appendChild(e), "script")),
                          i && ma(f),
                          c)
                  ) {
                      j = 0;
                      while ((e = f[j++])) {
                          fa.test(e.type || "") && c.push(e);
                      }
                  }
              }
              return k;
          },
          cleanData: function(a) {
              for (
                  var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++
              ) {
                  if (n.acceptData(c) && ((e = c[L.expando]), e && (b = L.cache[e]))) {
                      if (b.events) {
                          for (d in b.events) {
                              f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                          }
                      }
                      L.cache[e] && delete L.cache[e];
                  }
                  delete M.cache[c[M.expando]];
              }
          },
      }),
      n.fn.extend({
          text: function(a) {
              return J(
                  this,
                  function(a) {
                      return void 0 === a ?
                          n.text(this) :
                          this.empty().each(function() {
                              (1 === this.nodeType ||
                                  11 === this.nodeType ||
                                  9 === this.nodeType) &&
                              (this.textContent = a);
                          });
                  },
                  null,
                  a,
                  arguments.length
              );
          },
          append: function() {
              return this.domManip(arguments, function(a) {
                  if (
                      1 === this.nodeType ||
                      11 === this.nodeType ||
                      9 === this.nodeType
                  ) {
                      var b = ja(this, a);
                      b.appendChild(a);
                  }
              });
          },
          prepend: function() {
              return this.domManip(arguments, function(a) {
                  if (
                      1 === this.nodeType ||
                      11 === this.nodeType ||
                      9 === this.nodeType
                  ) {
                      var b = ja(this, a);
                      b.insertBefore(a, b.firstChild);
                  }
              });
          },
          before: function() {
              return this.domManip(arguments, function(a) {
                  this.parentNode && this.parentNode.insertBefore(a, this);
              });
          },
          after: function() {
              return this.domManip(arguments, function(a) {
                  this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
              });
          },
          remove: function(a, b) {
              for (
                  var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++
              ) {
                  b || 1 !== c.nodeType || n.cleanData(oa(c)),
                      c.parentNode &&
                      (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")),
                          c.parentNode.removeChild(c));
              }
              return this;
          },
          empty: function() {
              for (var a, b = 0; null != (a = this[b]); b++) {
                  1 === a.nodeType && (n.cleanData(oa(a, !1)), (a.textContent = ""));
              }
              return this;
          },
          clone: function(a, b) {
              return (
                  (a = null == a ? !1 : a),
                  (b = null == b ? a : b),
                  this.map(function() {
                      return n.clone(this, a, b);
                  })
              );
          },
          html: function(a) {
              return J(
                  this,
                  function(a) {
                      var b = this[0] || {},
                          c = 0,
                          d = this.length;
                      if (void 0 === a && 1 === b.nodeType) {
                          return b.innerHTML;
                      }
                      if (
                          "string" == typeof a &&
                          !da.test(a) &&
                          !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]
                      ) {
                          a = a.replace(aa, "<$1></$2>");
                          try {
                              for (; d > c; c++) {
                                  (b = this[c] || {}),
                                  1 === b.nodeType &&
                                      (n.cleanData(oa(b, !1)), (b.innerHTML = a));
                              }
                              b = 0;
                          } catch (e) {}
                      }
                      b && this.empty().append(a);
                  },
                  null,
                  a,
                  arguments.length
              );
          },
          replaceWith: function() {
              var a = arguments[0];
              return (
                  this.domManip(arguments, function(b) {
                      (a = this.parentNode),
                      n.cleanData(oa(this)),
                          a && a.replaceChild(b, this);
                  }),
                  a && (a.length || a.nodeType) ? this : this.remove()
              );
          },
          detach: function(a) {
              return this.remove(a, !0);
          },
          domManip: function(a, b) {
              a = e.apply([], a);
              var c,
                  d,
                  f,
                  g,
                  h,
                  i,
                  j = 0,
                  l = this.length,
                  m = this,
                  o = l - 1,
                  p = a[0],
                  q = n.isFunction(p);
              if (
                  q ||
                  (l > 1 && "string" == typeof p && !k.checkClone && ea.test(p))
              ) {
                  return this.each(function(c) {
                      var d = m.eq(c);
                      q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
                  });
              }
              if (
                  l &&
                  ((c = n.buildFragment(a, this[0].ownerDocument, !1, this)),
                      (d = c.firstChild),
                      1 === c.childNodes.length && (c = d),
                      d)
              ) {
                  for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) {
                      (h = c),
                      j !== o &&
                          ((h = n.clone(h, !0, !0)), g && n.merge(f, oa(h, "script"))),
                          b.call(this[j], h, j);
                  }
                  if (g) {
                      for (
                          i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++
                      ) {
                          (h = f[j]),
                          fa.test(h.type || "") &&
                              !L.access(h, "globalEval") &&
                              n.contains(i, h) &&
                              (h.src ?
                                  n._evalUrl && n._evalUrl(h.src) :
                                  n.globalEval(h.textContent.replace(ha, "")));
                      }
                  }
              }
              return this;
          },
      }),
      n.each({
              appendTo: "append",
              prependTo: "prepend",
              insertBefore: "before",
              insertAfter: "after",
              replaceAll: "replaceWith",
          },
          function(a, b) {
              n.fn[a] = function(a) {
                  for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) {
                      (c = h === g ? this : this.clone(!0)),
                      n(e[h])[b](c),
                          f.apply(d, c.get());
                  }
                  return this.pushStack(d);
              };
          }
      );
  var qa,
      ra = {};

  function sa(b, c) {
      var d,
          e = n(c.createElement(b)).appendTo(c.body),
          f =
          a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ?
          d.display :
          n.css(e[0], "display");
      return e.detach(), f;
  }

  function ta(a) {
      var b = l,
          c = ra[a];
      return (
          c ||
          ((c = sa(a, b)),
              ("none" !== c && c) ||
              ((qa = (
                      qa || n("<iframe frameborder='0' width='0' height='0'/>")
                  ).appendTo(b.documentElement)),
                  (b = qa[0].contentDocument),
                  b.write(),
                  b.close(),
                  (c = sa(a, b)),
                  qa.detach()),
              (ra[a] = c)),
          c
      );
  }
  var ua = /^margin/,
      va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
      wa = function(b) {
          return b.ownerDocument.defaultView.opener ?
              b.ownerDocument.defaultView.getComputedStyle(b, null) :
              a.getComputedStyle(b, null);
      };

  function xa(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.style;
      return (
          (c = c || wa(a)),
          c && (g = c.getPropertyValue(b) || c[b]),
          c &&
          ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)),
              va.test(g) &&
              ua.test(b) &&
              ((d = h.width),
                  (e = h.minWidth),
                  (f = h.maxWidth),
                  (h.minWidth = h.maxWidth = h.width = g),
                  (g = c.width),
                  (h.width = d),
                  (h.minWidth = e),
                  (h.maxWidth = f))),
          void 0 !== g ? g + "" : g
      );
  }

  function ya(a, b) {
      return {
          get: function() {
              return a() ?
                  void delete this.get :
                  (this.get = b).apply(this, arguments);
          },
      };
  }!(function() {
      var b,
          c,
          d = l.documentElement,
          e = l.createElement("div"),
          f = l.createElement("div");
      if (f.style) {
          (f.style.backgroundClip = "content-box"),
          (f.cloneNode(!0).style.backgroundClip = ""),
          (k.clearCloneStyle = "content-box" === f.style.backgroundClip),
          (e.style.cssText =
              "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute"),
          e.appendChild(f);

          function g() {
              (f.style.cssText =
                  "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
              (f.innerHTML = ""),
              d.appendChild(e);
              var g = a.getComputedStyle(f, null);
              (b = "1%" !== g.top), (c = "4px" === g.width), d.removeChild(e);
          }
          a.getComputedStyle &&
              n.extend(k, {
                  pixelPosition: function() {
                      return g(), b;
                  },
                  boxSizingReliable: function() {
                      return null == c && g(), c;
                  },
                  reliableMarginRight: function() {
                      var b,
                          c = f.appendChild(l.createElement("div"));
                      return (
                          (c.style.cssText = f.style.cssText =
                              "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                          (c.style.marginRight = c.style.width = "0"),
                          (f.style.width = "1px"),
                          d.appendChild(e),
                          (b = !parseFloat(a.getComputedStyle(c, null).marginRight)),
                          d.removeChild(e),
                          f.removeChild(c),
                          b
                      );
                  },
              });
      }
  })(),
  (n.swap = function(a, b, c, d) {
      var e,
          f,
          g = {};
      for (f in b) {
          (g[f] = a.style[f]), (a.style[f] = b[f]);
      }
      e = c.apply(a, d || []);
      for (f in b) {
          a.style[f] = g[f];
      }
      return e;
  });
  var za = /^(none|table(?!-c[ea]).+)/,
      Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
      Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
      Ca = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
      },
      Da = {
          letterSpacing: "0",
          fontWeight: "400"
      },
      Ea = ["Webkit", "O", "Moz", "ms"];

  function Fa(a, b) {
      if (b in a) {
          return b;
      }
      var c = b[0].toUpperCase() + b.slice(1),
          d = b,
          e = Ea.length;
      while (e--) {
          if (((b = Ea[e] + c), b in a)) {
              return b;
          }
      }
      return d;
  }

  function Ga(a, b, c) {
      var d = Aa.exec(b);
      return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }

  function Ha(a, b, c, d, e) {
      for (
          var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
              g = 0; 4 > f; f += 2
      ) {
          "margin" === c && (g += n.css(a, c + R[f], !0, e)),
              d ?
              ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)),
                  "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) :
              ((g += n.css(a, "padding" + R[f], !0, e)),
                  "padding" !== c &&
                  (g += n.css(a, "border" + R[f] + "Width", !0, e)));
      }
      return g;
  }

  function Ia(a, b, c) {
      var d = !0,
          e = "width" === b ? a.offsetWidth : a.offsetHeight,
          f = wa(a),
          g = "border-box" === n.css(a, "boxSizing", !1, f);
      if (0 >= e || null == e) {
          if (
              ((e = xa(a, b, f)),
                  (0 > e || null == e) && (e = a.style[b]),
                  va.test(e))
          ) {
              return e;
          }
          (d = g && (k.boxSizingReliable() || e === a.style[b])),
          (e = parseFloat(e) || 0);
      }
      return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }

  function Ja(a, b) {
      for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
          (d = a[g]),
          d.style &&
              ((f[g] = L.get(d, "olddisplay")),
                  (c = d.style.display),
                  b ?
                  (f[g] || "none" !== c || (d.style.display = ""),
                      "" === d.style.display &&
                      S(d) &&
                      (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) :
                  ((e = S(d)),
                      ("none" === c && e) ||
                      L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
      }
      for (g = 0; h > g; g++) {
          (d = a[g]),
          d.style &&
              ((b && "none" !== d.style.display && "" !== d.style.display) ||
                  (d.style.display = b ? f[g] || "" : "none"));
      }
      return a;
  }
  n.extend({
          cssHooks: {
              opacity: {
                  get: function(a, b) {
                      if (b) {
                          var c = xa(a, "opacity");
                          return "" === c ? "1" : c;
                      }
                  },
              },
          },
          cssNumber: {
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
          },
          cssProps: {
              float: "cssFloat"
          },
          style: function(a, b, c, d) {
              if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                  var e,
                      f,
                      g,
                      h = n.camelCase(b),
                      i = a.style;
                  return (
                      (b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h))),
                      (g = n.cssHooks[b] || n.cssHooks[h]),
                      void 0 === c ?
                      g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ?
                      e :
                      i[b] :
                      ((f = typeof c),
                          "string" === f &&
                          (e = Ba.exec(c)) &&
                          ((c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b))),
                              (f = "number")),
                          null != c &&
                          c === c &&
                          ("number" !== f || n.cssNumber[h] || (c += "px"),
                              k.clearCloneStyle ||
                              "" !== c ||
                              0 !== b.indexOf("background") ||
                              (i[b] = "inherit"),
                              (g && "set" in g && void 0 === (c = g.set(a, c, d))) ||
                              (i[b] = c)),
                          void 0)
                  );
              }
          },
          css: function(a, b, c, d) {
              var e,
                  f,
                  g,
                  h = n.camelCase(b);
              return (
                  (b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h))),
                  (g = n.cssHooks[b] || n.cssHooks[h]),
                  g && "get" in g && (e = g.get(a, !0, c)),
                  void 0 === e && (e = xa(a, b, d)),
                  "normal" === e && b in Da && (e = Da[b]),
                  "" === c || c ?
                  ((f = parseFloat(e)), c === !0 || n.isNumeric(f) ? f || 0 : e) :
                  e
              );
          },
      }),
      n.each(["height", "width"], function(a, b) {
          n.cssHooks[b] = {
              get: function(a, c, d) {
                  return c ?
                      za.test(n.css(a, "display")) && 0 === a.offsetWidth ?
                      n.swap(a, Ca, function() {
                          return Ia(a, b, d);
                      }) :
                      Ia(a, b, d) :
                      void 0;
              },
              set: function(a, c, d) {
                  var e = d && wa(a);
                  return Ga(
                      a,
                      c,
                      d ?
                      Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) :
                      0
                  );
              },
          };
      }),
      (n.cssHooks.marginRight = ya(k.reliableMarginRight, function(a, b) {
          return b ?
              n.swap(a, {
                  display: "inline-block"
              }, xa, [a, "marginRight"]) :
              void 0;
      })),
      n.each({
          margin: "",
          padding: "",
          border: "Width"
      }, function(a, b) {
          (n.cssHooks[a + b] = {
              expand: function(c) {
                  for (
                      var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++
                  ) {
                      e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                  }
                  return e;
              },
          }),
          ua.test(a) || (n.cssHooks[a + b].set = Ga);
      }),
      n.fn.extend({
          css: function(a, b) {
              return J(
                  this,
                  function(a, b, c) {
                      var d,
                          e,
                          f = {},
                          g = 0;
                      if (n.isArray(b)) {
                          for (d = wa(a), e = b.length; e > g; g++) {
                              f[b[g]] = n.css(a, b[g], !1, d);
                          }
                          return f;
                      }
                      return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
                  },
                  a,
                  b,
                  arguments.length > 1
              );
          },
          show: function() {
              return Ja(this, !0);
          },
          hide: function() {
              return Ja(this);
          },
          toggle: function(a) {
              return "boolean" == typeof a ?
                  a ?
                  this.show() :
                  this.hide() :
                  this.each(function() {
                      S(this) ? n(this).show() : n(this).hide();
                  });
          },
      });

  function Ka(a, b, c, d, e) {
      return new Ka.prototype.init(a, b, c, d, e);
  }
  (n.Tween = Ka),
  (Ka.prototype = {
      constructor: Ka,
      init: function(a, b, c, d, e, f) {
          (this.elem = a),
          (this.prop = c),
          (this.easing = e || "swing"),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (n.cssNumber[c] ? "" : "px"));
      },
      cur: function() {
          var a = Ka.propHooks[this.prop];
          return a && a.get ? a.get(this) : Ka.propHooks._default.get(this);
      },
      run: function(a) {
          var b,
              c = Ka.propHooks[this.prop];
          return (
              this.options.duration ?
              (this.pos = b =
                  n.easing[this.easing](
                      a,
                      this.options.duration * a,
                      0,
                      1,
                      this.options.duration
                  )) :
              (this.pos = b = a),
              (this.now = (this.end - this.start) * b + this.start),
              this.options.step &&
              this.options.step.call(this.elem, this.now, this),
              c && c.set ? c.set(this) : Ka.propHooks._default.set(this),
              this
          );
      },
  }),
  (Ka.prototype.init.prototype = Ka.prototype),
  (Ka.propHooks = {
      _default: {
          get: function(a) {
              var b;
              return null == a.elem[a.prop] ||
                  (a.elem.style && null != a.elem.style[a.prop]) ?
                  ((b = n.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0) :
                  a.elem[a.prop];
          },
          set: function(a) {
              n.fx.step[a.prop] ?
                  n.fx.step[a.prop](a) :
                  a.elem.style &&
                  (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ?
                  n.style(a.elem, a.prop, a.now + a.unit) :
                  (a.elem[a.prop] = a.now);
          },
      },
  }),
  (Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
      set: function(a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
      },
  }),
  (n.easing = {
      linear: function(a) {
          return a;
      },
      swing: function(a) {
          return 0.5 - Math.cos(a * Math.PI) / 2;
      },
  }),
  (n.fx = Ka.prototype.init),
  (n.fx.step = {});
  var La,
      Ma,
      Na = /^(?:toggle|show|hide)$/,
      Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
      Pa = /queueHooks$/,
      Qa = [Va],
      Ra = {
          "*": [
              function(a, b) {
                  var c = this.createTween(a, b),
                      d = c.cur(),
                      e = Oa.exec(b),
                      f = (e && e[3]) || (n.cssNumber[a] ? "" : "px"),
                      g =
                      (n.cssNumber[a] || ("px" !== f && +d)) &&
                      Oa.exec(n.css(c.elem, a)),
                      h = 1,
                      i = 20;
                  if (g && g[3] !== f) {
                      (f = f || g[3]), (e = e || []), (g = +d || 1);
                      do {
                          (h = h || ".5"), (g /= h), n.style(c.elem, a, g + f);
                      } while (h !== (h = c.cur() / d) && 1 !== h && --i);
                  }
                  return (
                      e &&
                      ((g = c.start = +g || +d || 0),
                          (c.unit = f),
                          (c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2])),
                      c
                  );
              },
          ],
      };

  function Sa() {
      return (
          setTimeout(function() {
              La = void 0;
          }),
          (La = n.now())
      );
  }

  function Ta(a, b) {
      var c,
          d = 0,
          e = {
              height: a
          };
      for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
          (c = R[d]), (e["margin" + c] = e["padding" + c] = a);
      }
      return b && (e.opacity = e.width = a), e;
  }

  function Ua(a, b, c) {
      for (
          var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++
      ) {
          if ((d = e[f].call(c, b, a))) {
              return d;
          }
      }
  }

  function Va(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = this,
          m = {},
          o = a.style,
          p = a.nodeType && S(a),
          q = L.get(a, "fxshow");
      c.queue ||
          ((h = n._queueHooks(a, "fx")),
              null == h.unqueued &&
              ((h.unqueued = 0),
                  (i = h.empty.fire),
                  (h.empty.fire = function() {
                      h.unqueued || i();
                  })),
              h.unqueued++,
              l.always(function() {
                  l.always(function() {
                      h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
                  });
              })),
          1 === a.nodeType &&
          ("height" in b || "width" in b) &&
          ((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
              (j = n.css(a, "display")),
              (k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j),
              "inline" === k &&
              "none" === n.css(a, "float") &&
              (o.display = "inline-block")),
          c.overflow &&
          ((o.overflow = "hidden"),
              l.always(function() {
                  (o.overflow = c.overflow[0]),
                  (o.overflowX = c.overflow[1]),
                  (o.overflowY = c.overflow[2]);
              }));
      for (d in b) {
          if (((e = b[d]), Na.exec(e))) {
              if (
                  (delete b[d], (f = f || "toggle" === e), e === (p ? "hide" : "show"))
              ) {
                  if ("show" !== e || !q || void 0 === q[d]) {
                      continue;
                  }
                  p = !0;
              }
              m[d] = (q && q[d]) || n.style(a, d);
          } else {
              j = void 0;
          }
      }
      if (n.isEmptyObject(m)) {
          "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);
      } else {
          q ? "hidden" in q && (p = q.hidden) : (q = L.access(a, "fxshow", {})),
              f && (q.hidden = !p),
              p ?
              n(a).show() :
              l.done(function() {
                  n(a).hide();
              }),
              l.done(function() {
                  var b;
                  L.remove(a, "fxshow");
                  for (b in m) {
                      n.style(a, b, m[b]);
                  }
              });
          for (d in m) {
              (g = Ua(p ? q[d] : 0, d, l)),
              d in q ||
                  ((q[d] = g.start),
                      p &&
                      ((g.end = g.start),
                          (g.start = "width" === d || "height" === d ? 1 : 0)));
          }
      }
  }

  function Wa(a, b) {
      var c, d, e, f, g;
      for (c in a) {
          if (
              ((d = n.camelCase(c)),
                  (e = b[d]),
                  (f = a[c]),
                  n.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
                  c !== d && ((a[d] = f), delete a[c]),
                  (g = n.cssHooks[d]),
                  g && "expand" in g)
          ) {
              (f = g.expand(f)), delete a[d];
              for (c in f) {
                  c in a || ((a[c] = f[c]), (b[c] = e));
              }
          } else {
              b[d] = e;
          }
      }
  }

  function Xa(a, b, c) {
      var d,
          e,
          f = 0,
          g = Qa.length,
          h = n.Deferred().always(function() {
              delete i.elem;
          }),
          i = function() {
              if (e) {
                  return !1;
              }
              for (
                  var b = La || Sa(),
                      c = Math.max(0, j.startTime + j.duration - b),
                      d = c / j.duration || 0,
                      f = 1 - d,
                      g = 0,
                      i = j.tweens.length; i > g; g++
              ) {
                  j.tweens[g].run(f);
              }
              return (
                  h.notifyWith(a, [j, f, c]),
                  1 > f && i ? c : (h.resolveWith(a, [j]), !1)
              );
          },
          j = h.promise({
              elem: a,
              props: n.extend({}, b),
              opts: n.extend(!0, {
                  specialEasing: {}
              }, c),
              originalProperties: b,
              originalOptions: c,
              startTime: La || Sa(),
              duration: c.duration,
              tweens: [],
              createTween: function(b, c) {
                  var d = n.Tween(
                      a,
                      j.opts,
                      b,
                      c,
                      j.opts.specialEasing[b] || j.opts.easing
                  );
                  return j.tweens.push(d), d;
              },
              stop: function(b) {
                  var c = 0,
                      d = b ? j.tweens.length : 0;
                  if (e) {
                      return this;
                  }
                  for (e = !0; d > c; c++) {
                      j.tweens[c].run(1);
                  }
                  return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
              },
          }),
          k = j.props;
      for (Wa(k, j.opts.specialEasing); g > f; f++) {
          if ((d = Qa[f].call(j, a, k, j.opts))) {
              return d;
          }
      }
      return (
          n.map(k, Ua, j),
          n.isFunction(j.opts.start) && j.opts.start.call(a, j),
          n.fx.timer(n.extend(i, {
              elem: a,
              anim: j,
              queue: j.opts.queue
          })),
          j
          .progress(j.opts.progress)
          .done(j.opts.done, j.opts.complete)
          .fail(j.opts.fail)
          .always(j.opts.always)
      );
  }
  (n.Animation = n.extend(Xa, {
      tweener: function(a, b) {
          n.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.split(" "));
          for (var c, d = 0, e = a.length; e > d; d++) {
              (c = a[d]), (Ra[c] = Ra[c] || []), Ra[c].unshift(b);
          }
      },
      prefilter: function(a, b) {
          b ? Qa.unshift(a) : Qa.push(a);
      },
  })),
  (n.speed = function(a, b, c) {
      var d =
          a && "object" == typeof a ?
          n.extend({}, a) : {
              complete: c || (!c && b) || (n.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !n.isFunction(b) && b),
          };
      return (
          (d.duration = n.fx.off ?
              0 :
              "number" == typeof d.duration ?
              d.duration :
              d.duration in n.fx.speeds ?
              n.fx.speeds[d.duration] :
              n.fx.speeds._default),
          (null == d.queue || d.queue === !0) && (d.queue = "fx"),
          (d.old = d.complete),
          (d.complete = function() {
              n.isFunction(d.old) && d.old.call(this),
                  d.queue && n.dequeue(this, d.queue);
          }),
          d
      );
  }),
  n.fn.extend({
          fadeTo: function(a, b, c, d) {
              return this.filter(S)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({
                      opacity: b
                  }, a, c, d);
          },
          animate: function(a, b, c, d) {
              var e = n.isEmptyObject(a),
                  f = n.speed(b, c, d),
                  g = function() {
                      var b = Xa(this, n.extend({}, a), f);
                      (e || L.get(this, "finish")) && b.stop(!0);
                  };
              return (
                  (g.finish = g),
                  e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
              );
          },
          stop: function(a, b, c) {
              var d = function(a) {
                  var b = a.stop;
                  delete a.stop, b(c);
              };
              return (
                  "string" != typeof a && ((c = b), (b = a), (a = void 0)),
                  b && a !== !1 && this.queue(a || "fx", []),
                  this.each(function() {
                      var b = !0,
                          e = null != a && a + "queueHooks",
                          f = n.timers,
                          g = L.get(this);
                      if (e) {
                          g[e] && g[e].stop && d(g[e]);
                      } else {
                          for (e in g) {
                              g[e] && g[e].stop && Pa.test(e) && d(g[e]);
                          }
                      }
                      for (e = f.length; e--;) {
                          f[e].elem !== this ||
                              (null != a && f[e].queue !== a) ||
                              (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
                      }
                      (b || !c) && n.dequeue(this, a);
                  })
              );
          },
          finish: function(a) {
              return (
                  a !== !1 && (a = a || "fx"),
                  this.each(function() {
                      var b,
                          c = L.get(this),
                          d = c[a + "queue"],
                          e = c[a + "queueHooks"],
                          f = n.timers,
                          g = d ? d.length : 0;
                      for (
                          c.finish = !0,
                          n.queue(this, a, []),
                          e && e.stop && e.stop.call(this, !0),
                          b = f.length; b--;

                      ) {
                          f[b].elem === this &&
                              f[b].queue === a &&
                              (f[b].anim.stop(!0), f.splice(b, 1));
                      }
                      for (b = 0; g > b; b++) {
                          d[b] && d[b].finish && d[b].finish.call(this);
                      }
                      delete c.finish;
                  })
              );
          },
      }),
      n.each(["toggle", "show", "hide"], function(a, b) {
          var c = n.fn[b];
          n.fn[b] = function(a, d, e) {
              return null == a || "boolean" == typeof a ?
                  c.apply(this, arguments) :
                  this.animate(Ta(b, !0), a, d, e);
          };
      }),
      n.each({
              slideDown: Ta("show"),
              slideUp: Ta("hide"),
              slideToggle: Ta("toggle"),
              fadeIn: {
                  opacity: "show"
              },
              fadeOut: {
                  opacity: "hide"
              },
              fadeToggle: {
                  opacity: "toggle"
              },
          },
          function(a, b) {
              n.fn[a] = function(a, c, d) {
                  return this.animate(b, a, c, d);
              };
          }
      ),
      (n.timers = []),
      (n.fx.tick = function() {
          var a,
              b = 0,
              c = n.timers;
          for (La = n.now(); b < c.length; b++) {
              (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
          }
          c.length || n.fx.stop(), (La = void 0);
      }),
      (n.fx.timer = function(a) {
          n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
      }),
      (n.fx.interval = 13),
      (n.fx.start = function() {
          Ma || (Ma = setInterval(n.fx.tick, n.fx.interval));
      }),
      (n.fx.stop = function() {
          clearInterval(Ma), (Ma = null);
      }),
      (n.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400
      }),
      (n.fn.delay = function(a, b) {
          return (
              (a = n.fx ? n.fx.speeds[a] || a : a),
              (b = b || "fx"),
              this.queue(b, function(b, c) {
                  var d = setTimeout(b, a);
                  c.stop = function() {
                      clearTimeout(d);
                  };
              })
          );
      }),
      (function() {
          var a = l.createElement("input"),
              b = l.createElement("select"),
              c = b.appendChild(l.createElement("option"));
          (a.type = "checkbox"),
          (k.checkOn = "" !== a.value),
          (k.optSelected = c.selected),
          (b.disabled = !0),
          (k.optDisabled = !c.disabled),
          (a = l.createElement("input")),
          (a.value = "t"),
          (a.type = "radio"),
          (k.radioValue = "t" === a.value);
      })();
  var Ya,
      Za,
      $a = n.expr.attrHandle;
  n.fn.extend({
          attr: function(a, b) {
              return J(this, n.attr, a, b, arguments.length > 1);
          },
          removeAttr: function(a) {
              return this.each(function() {
                  n.removeAttr(this, a);
              });
          },
      }),
      n.extend({
          attr: function(a, b, c) {
              var d,
                  e,
                  f = a.nodeType;
              if (a && 3 !== f && 8 !== f && 2 !== f) {
                  return typeof a.getAttribute === U ?
                      n.prop(a, b, c) :
                      ((1 === f && n.isXMLDoc(a)) ||
                          ((b = b.toLowerCase()),
                              (d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya))),
                          void 0 === c ?
                          d && "get" in d && null !== (e = d.get(a, b)) ?
                          e :
                          ((e = n.find.attr(a, b)), null == e ? void 0 : e) :
                          null !== c ?
                          d && "set" in d && void 0 !== (e = d.set(a, c, b)) ?
                          e :
                          (a.setAttribute(b, c + ""), c) :
                          void n.removeAttr(a, b));
              }
          },
          removeAttr: function(a, b) {
              var c,
                  d,
                  e = 0,
                  f = b && b.match(E);
              if (f && 1 === a.nodeType) {
                  while ((c = f[e++])) {
                      (d = n.propFix[c] || c),
                      n.expr.match.bool.test(c) && (a[d] = !1),
                          a.removeAttribute(c);
                  }
              }
          },
          attrHooks: {
              type: {
                  set: function(a, b) {
                      if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                          var c = a.value;
                          return a.setAttribute("type", b), c && (a.value = c), b;
                      }
                  },
              },
          },
      }),
      (Za = {
          set: function(a, b, c) {
              return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
          },
      }),
      n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
          var c = $a[b] || n.find.attr;
          $a[b] = function(a, b, d) {
              var e, f;
              return (
                  d ||
                  ((f = $a[b]),
                      ($a[b] = e),
                      (e = null != c(a, b, d) ? b.toLowerCase() : null),
                      ($a[b] = f)),
                  e
              );
          };
      });
  var _a = /^(?:input|select|textarea|button)$/i;
  n.fn.extend({
          prop: function(a, b) {
              return J(this, n.prop, a, b, arguments.length > 1);
          },
          removeProp: function(a) {
              return this.each(function() {
                  delete this[n.propFix[a] || a];
              });
          },
      }),
      n.extend({
          propFix: {
              for: "htmlFor",
              class: "className"
          },
          prop: function(a, b, c) {
              var d,
                  e,
                  f,
                  g = a.nodeType;
              if (a && 3 !== g && 8 !== g && 2 !== g) {
                  return (
                      (f = 1 !== g || !n.isXMLDoc(a)),
                      f && ((b = n.propFix[b] || b), (e = n.propHooks[b])),
                      void 0 !== c ?
                      e && "set" in e && void 0 !== (d = e.set(a, c, b)) ?
                      d :
                      (a[b] = c) :
                      e && "get" in e && null !== (d = e.get(a, b)) ?
                      d :
                      a[b]
                  );
              }
          },
          propHooks: {
              tabIndex: {
                  get: function(a) {
                      return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ?
                          a.tabIndex :
                          -1;
                  },
              },
          },
      }),
      k.optSelected ||
      (n.propHooks.selected = {
          get: function(a) {
              var b = a.parentNode;
              return b && b.parentNode && b.parentNode.selectedIndex, null;
          },
      }),
      n.each(
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
          function() {
              n.propFix[this.toLowerCase()] = this;
          }
      );
  var ab = /[\t\r\n\f]/g;
  n.fn.extend({
      addClass: function(a) {
          var b,
              c,
              d,
              e,
              f,
              g,
              h = "string" == typeof a && a,
              i = 0,
              j = this.length;
          if (n.isFunction(a)) {
              return this.each(function(b) {
                  n(this).addClass(a.call(this, b, this.className));
              });
          }
          if (h) {
              for (b = (a || "").match(E) || []; j > i; i++) {
                  if (
                      ((c = this[i]),
                          (d =
                              1 === c.nodeType &&
                              (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")))
                  ) {
                      f = 0;
                      while ((e = b[f++])) {
                          d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                      }
                      (g = n.trim(d)), c.className !== g && (c.className = g);
                  }
              }
          }
          return this;
      },
      removeClass: function(a) {
          var b,
              c,
              d,
              e,
              f,
              g,
              h = 0 === arguments.length || ("string" == typeof a && a),
              i = 0,
              j = this.length;
          if (n.isFunction(a)) {
              return this.each(function(b) {
                  n(this).removeClass(a.call(this, b, this.className));
              });
          }
          if (h) {
              for (b = (a || "").match(E) || []; j > i; i++) {
                  if (
                      ((c = this[i]),
                          (d =
                              1 === c.nodeType &&
                              (c.className ? (" " + c.className + " ").replace(ab, " ") : "")))
                  ) {
                      f = 0;
                      while ((e = b[f++])) {
                          while (d.indexOf(" " + e + " ") >= 0) {
                              d = d.replace(" " + e + " ", " ");
                          }
                      }
                      (g = a ? n.trim(d) : ""), c.className !== g && (c.className = g);
                  }
              }
          }
          return this;
      },
      toggleClass: function(a, b) {
          var c = typeof a;
          return "boolean" == typeof b && "string" === c ?
              b ?
              this.addClass(a) :
              this.removeClass(a) :
              this.each(
                  n.isFunction(a) ?
                  function(c) {
                      n(this).toggleClass(a.call(this, c, this.className, b), b);
                  } :
                  function() {
                      if ("string" === c) {
                          var b,
                              d = 0,
                              e = n(this),
                              f = a.match(E) || [];
                          while ((b = f[d++])) {
                              e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                          }
                      } else {
                          (c === U || "boolean" === c) &&
                          (this.className &&
                              L.set(this, "__className__", this.className),
                              (this.className =
                                  this.className || a === !1 ?
                                  "" :
                                  L.get(this, "__className__") || ""));
                      }
                  }
              );
      },
      hasClass: function(a) {
          for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) {
              if (
                  1 === this[c].nodeType &&
                  (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0
              ) {
                  return !0;
              }
          }
          return !1;
      },
  });
  var bb = /\r/g;
  n.fn.extend({
          val: function(a) {
              var b,
                  c,
                  d,
                  e = this[0];
              if (arguments.length) {
                  return (
                      (d = n.isFunction(a)),
                      this.each(function(c) {
                          var e;
                          1 === this.nodeType &&
                              ((e = d ? a.call(this, c, n(this).val()) : a),
                                  null == e ?
                                  (e = "") :
                                  "number" == typeof e ?
                                  (e += "") :
                                  n.isArray(e) &&
                                  (e = n.map(e, function(a) {
                                      return null == a ? "" : a + "";
                                  })),
                                  (b =
                                      n.valHooks[this.type] ||
                                      n.valHooks[this.nodeName.toLowerCase()]),
                                  (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                                  (this.value = e));
                      })
                  );
              }
              if (e) {
                  return (
                      (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]),
                      b && "get" in b && void 0 !== (c = b.get(e, "value")) ?
                      c :
                      ((c = e.value),
                          "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c)
                  );
              }
          },
      }),
      n.extend({
          valHooks: {
              option: {
                  get: function(a) {
                      var b = n.find.attr(a, "value");
                      return null != b ? b : n.trim(n.text(a));
                  },
              },
              select: {
                  get: function(a) {
                      for (
                          var b,
                              c,
                              d = a.options,
                              e = a.selectedIndex,
                              f = "select-one" === a.type || 0 > e,
                              g = f ? null : [],
                              h = f ? e + 1 : d.length,
                              i = 0 > e ? h : f ? e : 0; h > i; i++
                      ) {
                          if (
                              ((c = d[i]),
                                  !(
                                      (!c.selected && i !== e) ||
                                      (k.optDisabled ?
                                          c.disabled :
                                          null !== c.getAttribute("disabled")) ||
                                      (c.parentNode.disabled &&
                                          n.nodeName(c.parentNode, "optgroup"))
                                  ))
                          ) {
                              if (((b = n(c).val()), f)) {
                                  return b;
                              }
                              g.push(b);
                          }
                      }
                      return g;
                  },
                  set: function(a, b) {
                      var c,
                          d,
                          e = a.options,
                          f = n.makeArray(b),
                          g = e.length;
                      while (g--) {
                          (d = e[g]), (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                      }
                      return c || (a.selectedIndex = -1), f;
                  },
              },
          },
      }),
      n.each(["radio", "checkbox"], function() {
          (n.valHooks[this] = {
              set: function(a, b) {
                  return n.isArray(b) ?
                      (a.checked = n.inArray(n(a).val(), b) >= 0) :
                      void 0;
              },
          }),
          k.checkOn ||
              (n.valHooks[this].get = function(a) {
                  return null === a.getAttribute("value") ? "on" : a.value;
              });
      }),
      n.each(
          "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
              " "
          ),
          function(a, b) {
              n.fn[b] = function(a, c) {
                  return arguments.length > 0 ?
                      this.on(b, null, a, c) :
                      this.trigger(b);
              };
          }
      ),
      n.fn.extend({
          hover: function(a, b) {
              return this.mouseenter(a).mouseleave(b || a);
          },
          bind: function(a, b, c) {
              return this.on(a, null, b, c);
          },
          unbind: function(a, b) {
              return this.off(a, null, b);
          },
          delegate: function(a, b, c, d) {
              return this.on(b, a, c, d);
          },
          undelegate: function(a, b, c) {
              return 1 === arguments.length ?
                  this.off(a, "**") :
                  this.off(b, a || "**", c);
          },
      });
  var cb = n.now(),
      db = /\?/;
  (n.parseJSON = function(a) {
      return JSON.parse(a + "");
  }),
  (n.parseXML = function(a) {
      var b, c;
      if (!a || "string" != typeof a) {
          return null;
      }
      try {
          (c = new DOMParser()), (b = c.parseFromString(a, "text/xml"));
      } catch (d) {
          b = void 0;
      }
      return (
          (!b || b.getElementsByTagName("parsererror").length) &&
          n.error("Invalid XML: " + a),
          b
      );
  });
  var eb = /#.*$/,
      fb = /([?&])_=[^&]*/,
      gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      ib = /^(?:GET|HEAD)$/,
      jb = /^\/\//,
      kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      lb = {},
      mb = {},
      nb = "*/".concat("*"),
      ob = a.location.href,
      pb = kb.exec(ob.toLowerCase()) || [];

  function qb(a) {
      return function(b, c) {
          "string" != typeof b && ((c = b), (b = "*"));
          var d,
              e = 0,
              f = b.toLowerCase().match(E) || [];
          if (n.isFunction(c)) {
              while ((d = f[e++])) {
                  "+" === d[0] ?
                      ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c)) :
                      (a[d] = a[d] || []).push(c);
              }
          }
      };
  }

  function rb(a, b, c, d) {
      var e = {},
          f = a === mb;

      function g(h) {
          var i;
          return (
              (e[h] = !0),
              n.each(a[h] || [], function(a, h) {
                  var j = h(b, c, d);
                  return "string" != typeof j || f || e[j] ?
                      f ?
                      !(i = j) :
                      void 0 :
                      (b.dataTypes.unshift(j), g(j), !1);
              }),
              i
          );
      }
      return g(b.dataTypes[0]) || (!e["*"] && g("*"));
  }

  function sb(a, b) {
      var c,
          d,
          e = n.ajaxSettings.flatOptions || {};
      for (c in b) {
          void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
      }
      return d && n.extend(!0, a, d), a;
  }

  function tb(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.contents,
          i = a.dataTypes;
      while ("*" === i[0]) {
          i.shift(),
              void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
      }
      if (d) {
          for (e in h) {
              if (h[e] && h[e].test(d)) {
                  i.unshift(e);
                  break;
              }
          }
      }
      if (i[0] in c) {
          f = i[0];
      } else {
          for (e in c) {
              if (!i[0] || a.converters[e + " " + i[0]]) {
                  f = e;
                  break;
              }
              g || (g = e);
          }
          f = f || g;
      }
      return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }

  function ub(a, b, c, d) {
      var e,
          f,
          g,
          h,
          i,
          j = {},
          k = a.dataTypes.slice();
      if (k[1]) {
          for (g in a.converters) {
              j[g.toLowerCase()] = a.converters[g];
          }
      }
      f = k.shift();
      while (f) {
          if (
              (a.responseFields[f] && (c[a.responseFields[f]] = b),
                  !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
                  (i = f),
                  (f = k.shift()))
          ) {
              if ("*" === f) {
                  f = i;
              } else {
                  if ("*" !== i && i !== f) {
                      if (((g = j[i + " " + f] || j["* " + f]), !g)) {
                          for (e in j) {
                              if (
                                  ((h = e.split(" ")),
                                      h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
                              ) {
                                  g === !0 ?
                                      (g = j[e]) :
                                      j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                                  break;
                              }
                          }
                      }
                      if (g !== !0) {
                          if (g && a["throws"]) {
                              b = g(b);
                          } else {
                              try {
                                  b = g(b);
                              } catch (l) {
                                  return {
                                      state: "parsererror",
                                      error: g ? l : "No conversion from " + i + " to " + f,
                                  };
                              }
                          }
                      }
                  }
              }
          }
      }
      return {
          state: "success",
          data: b
      };
  }
  n.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
              url: ob,
              type: "GET",
              isLocal: hb.test(pb[1]),
              global: !0,
              processData: !0,
              async: !0,
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              accepts: {
                  "*": nb,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
              },
              contents: {
                  xml: /xml/,
                  html: /html/,
                  json: /json/
              },
              responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
              },
              converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": n.parseJSON,
                  "text xml": n.parseXML,
              },
              flatOptions: {
                  url: !0,
                  context: !0
              },
          },
          ajaxSetup: function(a, b) {
              return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a);
          },
          ajaxPrefilter: qb(lb),
          ajaxTransport: qb(mb),
          ajax: function(a, b) {
              "object" == typeof a && ((b = a), (a = void 0)), (b = b || {});
              var c,
                  d,
                  e,
                  f,
                  g,
                  h,
                  i,
                  j,
                  k = n.ajaxSetup({}, b),
                  l = k.context || k,
                  m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
                  o = n.Deferred(),
                  p = n.Callbacks("once memory"),
                  q = k.statusCode || {},
                  r = {},
                  s = {},
                  t = 0,
                  u = "canceled",
                  v = {
                      readyState: 0,
                      getResponseHeader: function(a) {
                          var b;
                          if (2 === t) {
                              if (!f) {
                                  f = {};
                                  while ((b = gb.exec(e))) {
                                      f[b[1].toLowerCase()] = b[2];
                                  }
                              }
                              b = f[a.toLowerCase()];
                          }
                          return null == b ? null : b;
                      },
                      getAllResponseHeaders: function() {
                          return 2 === t ? e : null;
                      },
                      setRequestHeader: function(a, b) {
                          var c = a.toLowerCase();
                          return t || ((a = s[c] = s[c] || a), (r[a] = b)), this;
                      },
                      overrideMimeType: function(a) {
                          return t || (k.mimeType = a), this;
                      },
                      statusCode: function(a) {
                          var b;
                          if (a) {
                              if (2 > t) {
                                  for (b in a) {
                                      q[b] = [q[b], a[b]];
                                  }
                              } else {
                                  v.always(a[v.status]);
                              }
                          }
                          return this;
                      },
                      abort: function(a) {
                          var b = a || u;
                          return c && c.abort(b), x(0, b), this;
                      },
                  };
              if (
                  ((o.promise(v).complete = p.add),
                      (v.success = v.done),
                      (v.error = v.fail),
                      (k.url = ((a || k.url || ob) + "")
                          .replace(eb, "")
                          .replace(jb, pb[1] + "//")),
                      (k.type = b.method || b.type || k.method || k.type),
                      (k.dataTypes = n
                          .trim(k.dataType || "*")
                          .toLowerCase()
                          .match(E) || [""]),
                      null == k.crossDomain &&
                      ((h = kb.exec(k.url.toLowerCase())),
                          (k.crossDomain = !(
                              !h ||
                              (h[1] === pb[1] &&
                                  h[2] === pb[2] &&
                                  (h[3] || ("http:" === h[1] ? "80" : "443")) ===
                                  (pb[3] || ("http:" === pb[1] ? "80" : "443")))
                          ))),
                      k.data &&
                      k.processData &&
                      "string" != typeof k.data &&
                      (k.data = n.param(k.data, k.traditional)),
                      rb(lb, k, b, v),
                      2 === t)
              ) {
                  return v;
              }
              (i = n.event && k.global),
              i && 0 === n.active++ && n.event.trigger("ajaxStart"),
                  (k.type = k.type.toUpperCase()),
                  (k.hasContent = !ib.test(k.type)),
                  (d = k.url),
                  k.hasContent ||
                  (k.data &&
                      ((d = k.url += (db.test(d) ? "&" : "?") + k.data), delete k.data),
                      k.cache === !1 &&
                      (k.url = fb.test(d) ?
                          d.replace(fb, "$1_=" + cb++) :
                          d + (db.test(d) ? "&" : "?") + "_=" + cb++)),
                  k.ifModified &&
                  (n.lastModified[d] &&
                      v.setRequestHeader("If-Modified-Since", n.lastModified[d]),
                      n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])),
                  ((k.data && k.hasContent && k.contentType !== !1) || b.contentType) &&
                  v.setRequestHeader("Content-Type", k.contentType),
                  v.setRequestHeader(
                      "Accept",
                      k.dataTypes[0] && k.accepts[k.dataTypes[0]] ?
                      k.accepts[k.dataTypes[0]] +
                      ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") :
                      k.accepts["*"]
                  );
              for (j in k.headers) {
                  v.setRequestHeader(j, k.headers[j]);
              }
              if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) {
                  return v.abort();
              }
              u = "abort";
              for (j in {
                      success: 1,
                      error: 1,
                      complete: 1
                  }) {
                  v[j](k[j]);
              }
              if ((c = rb(mb, k, b, v))) {
                  (v.readyState = 1),
                  i && m.trigger("ajaxSend", [v, k]),
                      k.async &&
                      k.timeout > 0 &&
                      (g = setTimeout(function() {
                          v.abort("timeout");
                      }, k.timeout));
                  try {
                      (t = 1), c.send(r, x);
                  } catch (w) {
                      if (!(2 > t)) {
                          throw w;
                      }
                      x(-1, w);
                  }
              } else {
                  x(-1, "No Transport");
              }

              function x(a, b, f, h) {
                  var j,
                      r,
                      s,
                      u,
                      w,
                      x = b;
                  2 !== t &&
                      ((t = 2),
                          g && clearTimeout(g),
                          (c = void 0),
                          (e = h || ""),
                          (v.readyState = a > 0 ? 4 : 0),
                          (j = (a >= 200 && 300 > a) || 304 === a),
                          f && (u = tb(k, v, f)),
                          (u = ub(k, u, v, j)),
                          j ?
                          (k.ifModified &&
                              ((w = v.getResponseHeader("Last-Modified")),
                                  w && (n.lastModified[d] = w),
                                  (w = v.getResponseHeader("etag")),
                                  w && (n.etag[d] = w)),
                              204 === a || "HEAD" === k.type ?
                              (x = "nocontent") :
                              304 === a ?
                              (x = "notmodified") :
                              ((x = u.state), (r = u.data), (s = u.error), (j = !s))) :
                          ((s = x), (a || !x) && ((x = "error"), 0 > a && (a = 0))),
                          (v.status = a),
                          (v.statusText = (b || x) + ""),
                          j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]),
                          v.statusCode(q),
                          (q = void 0),
                          i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]),
                          p.fireWith(l, [v, x]),
                          i &&
                          (m.trigger("ajaxComplete", [v, k]),
                              --n.active || n.event.trigger("ajaxStop")));
              }
              return v;
          },
          getJSON: function(a, b, c) {
              return n.get(a, b, c, "json");
          },
          getScript: function(a, b) {
              return n.get(a, void 0, b, "script");
          },
      }),
      n.each(["get", "post"], function(a, b) {
          n[b] = function(a, c, d, e) {
              return (
                  n.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
                  n.ajax({
                      url: a,
                      type: b,
                      dataType: e,
                      data: c,
                      success: d
                  })
              );
          };
      }),
      (n._evalUrl = function(a) {
          return n.ajax({
              url: a,
              type: "GET",
              dataType: "script",
              async: !1,
              global: !1,
              throws: !0,
          });
      }),
      n.fn.extend({
          wrapAll: function(a) {
              var b;
              return n.isFunction(a) ?
                  this.each(function(b) {
                      n(this).wrapAll(a.call(this, b));
                  }) :
                  (this[0] &&
                      ((b = n(a, this[0].ownerDocument).eq(0).clone(!0)),
                          this[0].parentNode && b.insertBefore(this[0]),
                          b
                          .map(function() {
                              var a = this;
                              while (a.firstElementChild) {
                                  a = a.firstElementChild;
                              }
                              return a;
                          })
                          .append(this)),
                      this);
          },
          wrapInner: function(a) {
              return this.each(
                  n.isFunction(a) ?
                  function(b) {
                      n(this).wrapInner(a.call(this, b));
                  } :
                  function() {
                      var b = n(this),
                          c = b.contents();
                      c.length ? c.wrapAll(a) : b.append(a);
                  }
              );
          },
          wrap: function(a) {
              var b = n.isFunction(a);
              return this.each(function(c) {
                  n(this).wrapAll(b ? a.call(this, c) : a);
              });
          },
          unwrap: function() {
              return this.parent()
                  .each(function() {
                      n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
                  })
                  .end();
          },
      }),
      (n.expr.filters.hidden = function(a) {
          return a.offsetWidth <= 0 && a.offsetHeight <= 0;
      }),
      (n.expr.filters.visible = function(a) {
          return !n.expr.filters.hidden(a);
      });
  var vb = /%20/g,
      wb = /\[\]$/,
      xb = /\r?\n/g,
      yb = /^(?:submit|button|image|reset|file)$/i,
      zb = /^(?:input|select|textarea|keygen)/i;

  function Ab(a, b, c, d) {
      var e;
      if (n.isArray(b)) {
          n.each(b, function(b, e) {
              c || wb.test(a) ?
                  d(a, e) :
                  Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
          });
      } else {
          if (c || "object" !== n.type(b)) {
              d(a, b);
          } else {
              for (e in b) {
                  Ab(a + "[" + e + "]", b[e], c, d);
              }
          }
      }
  }
  (n.param = function(a, b) {
      var c,
          d = [],
          e = function(a, b) {
              (b = n.isFunction(b) ? b() : null == b ? "" : b),
              (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
          };
      if (
          (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
              n.isArray(a) || (a.jquery && !n.isPlainObject(a)))
      ) {
          n.each(a, function() {
              e(this.name, this.value);
          });
      } else {
          for (c in a) {
              Ab(c, a[c], b, e);
          }
      }
      return d.join("&").replace(vb, "+");
  }),
//   n.fn.extend({
//           serialize: function() {
//               return n.param(this.serializeArray());
//           },
//           serializeArray: function() {
//               return this.map(function() {
//                       var a = n.prop(this, "elements");
//                       return a ? n.makeArray(a) : this;
//                   })
//                   .filter(function() {
//                       var a = this.type;
//                       return (
//                           this.name &&
//                           !n(this).is(":disabled") &&
//                           zb.test(this.nodeName) &&
//                           !yb.test(a) &&
//                           (this.checked || !T.test(a))
//                       );
//                   })
//                   .map(function(a, b) {
//                       var c = n(this).val();
//                       return null == c ?
//                           null :
//                           n.isArray(c) ?
//                           n.map(c, function(a) {
//                               return {
//                                   name: b.name,
//                                   value: a.replace(xb, "\r\n")
//                               };
//                           }) : {
//                               name: b.name,
//                               value: c.replace(xb, "\r\n")
//                           };
//                   })
//                   .get();
//           },
//       }),
//       (n.ajaxSettings.xhr = function() {
//           try {
//               return new XMLHttpRequest();
//           } catch (a) {}
//       });
//   var Bb = 0,
//       Cb = {},
//       Db = {
//           0: 200,
//           1223: 204
//       },
//       Eb = n.ajaxSettings.xhr();
//   a.attachEvent &&
//       a.attachEvent("onunload", function() {
//           for (var a in Cb) {
//               Cb[a]();
//           }
//       }),
//       (k.cors = !!Eb && "withCredentials" in Eb),
//       (k.ajax = Eb = !!Eb),
//       n.ajaxTransport(function(a) {
//           var b;
//           return k.cors || (Eb && !a.crossDomain) ? {
//                   send: function(c, d) {
//                       var e,
//                           f = a.xhr(),
//                           g = ++Bb;
//                       if (
//                           (f.open(a.type, a.url, a.async, a.username, a.password),
//                               a.xhrFields)
//                       ) {
//                           for (e in a.xhrFields) {
//                               f[e] = a.xhrFields[e];
//                           }
//                       }
//                       a.mimeType &&
//                           f.overrideMimeType &&
//                           f.overrideMimeType(a.mimeType),
//                           a.crossDomain ||
//                           c["X-Requested-With"] ||
//                           (c["X-Requested-With"] = "XMLHttpRequest");
//                       for (e in c) {
//                           f.setRequestHeader(e, c[e]);
//                       }
//                       (b = function(a) {
//                           return function() {
//                               b &&
//                                   (delete Cb[g],
//                                       (b = f.onload = f.onerror = null),
//                                       "abort" === a ?
//                                       f.abort() :
//                                       "error" === a ?
//                                       d(f.status, f.statusText) :
//                                       d(
//                                           Db[f.status] || f.status,
//                                           f.statusText,
//                                           "string" == typeof f.responseText ? {
//                                               text: f.responseText
//                                           } :
//                                           void 0,
//                                           f.getAllResponseHeaders()
//                                       ));
//                           };
//                       }),
//                       (f.onload = b()),
//                       (f.onerror = b("error")),
//                       (b = Cb[g] = b("abort"));
//                       try {
//                           f.send((a.hasContent && a.data) || null);
//                       } catch (h) {
//                           if (b) {
//                               throw h;
//                           }
//                       }
//                   },
//                   abort: function() {
//                       b && b();
//                   },
//               } :
//               void 0;
//       }),
//       n.ajaxSetup({
//           accepts: {
//               script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
//           },
//           contents: {
//               script: /(?:java|ecma)script/
//           },
//           converters: {
//               "text script": function(a) {
//                   return n.globalEval(a), a;
//               },
//           },
//       }),
      n.ajaxPrefilter("script", function(a) {
          void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
      }),
      n.ajaxTransport("script", function(a) {
          if (a.crossDomain) {
              var b, c;
              return {
                  send: function(d, e) {
                      (b = n("<script>")
                          .prop({
                              async: !0,
                              charset: a.scriptCharset,
                              src: a.url
                          })
                          .on(
                              "load error",
                              (c = function(a) {
                                  b.remove(),
                                      (c = null),
                                      a && e("error" === a.type ? 404 : 200, a.type);
                              })
                          )),
                      l.head.appendChild(b[0]);
                  },
                  abort: function() {
                      c && c();
                  },
              };
          }
      });
  var Fb = [],
      Gb = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function() {
              var a = Fb.pop() || n.expando + "_" + cb++;
              return (this[a] = !0), a;
          },
      }),
      n.ajaxPrefilter("json jsonp", function(b, c, d) {
          var e,
              f,
              g,
              h =
              b.jsonp !== !1 &&
              (Gb.test(b.url) ?
                  "url" :
                  "string" == typeof b.data &&
                  !(b.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                  ) &&
                  Gb.test(b.data) &&
                  "data");
          return h || "jsonp" === b.dataTypes[0] ?
              ((e = b.jsonpCallback =
                      n.isFunction(b.jsonpCallback) ?
                      b.jsonpCallback() :
                      b.jsonpCallback),
                  h ?
                  (b[h] = b[h].replace(Gb, "$1" + e)) :
                  b.jsonp !== !1 &&
                  (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
                  (b.converters["script json"] = function() {
                      return g || n.error(e + " was not called"), g[0];
                  }),
                  (b.dataTypes[0] = "json"),
                  (f = a[e]),
                  (a[e] = function() {
                      g = arguments;
                  }),
                  d.always(function() {
                      (a[e] = f),
                      b[e] && ((b.jsonpCallback = c.jsonpCallback), Fb.push(e)),
                          g && n.isFunction(f) && f(g[0]),
                          (g = f = void 0);
                  }),
                  "script") :
              void 0;
      }),
      (n.parseHTML = function(a, b, c) {
          if (!a || "string" != typeof a) {
              return null;
          }
          "boolean" == typeof b && ((c = b), (b = !1)), (b = b || l);
          var d = v.exec(a),
              e = !c && [];
          return d ? [b.createElement(d[1])] :
              ((d = n.buildFragment([a], b, e)),
                  e && e.length && n(e).remove(),
                  n.merge([], d.childNodes));
      });
  var Hb = n.fn.load;
  (n.fn.load = function(a, b, c) {
      if ("string" != typeof a && Hb) {
          return Hb.apply(this, arguments);
      }
      var d,
          e,
          f,
          g = this,
          h = a.indexOf(" ");
      return (
          h >= 0 && ((d = n.trim(a.slice(h))), (a = a.slice(0, h))),
          n.isFunction(b) ?
          ((c = b), (b = void 0)) :
          b && "object" == typeof b && (e = "POST"),
          g.length > 0 &&
          n
          .ajax({
              url: a,
              type: e,
              dataType: "html",
              data: b
          })
          .done(function(a) {
              (f = arguments),
              g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
          })
          .complete(
              c &&
              function(a, b) {
                  g.each(c, f || [a.responseText, b, a]);
              }
          ),
          this
      );
  }),
  n.each(
          [
              "ajaxStart",
              "ajaxStop",
              "ajaxComplete",
              "ajaxError",
              "ajaxSuccess",
              "ajaxSend",
          ],
          function(a, b) {
              n.fn[b] = function(a) {
                  return this.on(b, a);
              };
          }
      ),
      (n.expr.filters.animated = function(a) {
          return n.grep(n.timers, function(b) {
              return a === b.elem;
          }).length;
      });
  var Ib = a.document.documentElement;

  function Jb(a) {
      return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }
  (n.offset = {
      setOffset: function(a, b, c) {
          var d,
              e,
              f,
              g,
              h,
              i,
              j,
              k = n.css(a, "position"),
              l = n(a),
              m = {};
          "static" === k && (a.style.position = "relative"),
              (h = l.offset()),
              (f = n.css(a, "top")),
              (i = n.css(a, "left")),
              (j =
                  ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1),
              j ?
              ((d = l.position()), (g = d.top), (e = d.left)) :
              ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
              n.isFunction(b) && (b = b.call(a, c, h)),
              null != b.top && (m.top = b.top - h.top + g),
              null != b.left && (m.left = b.left - h.left + e),
              "using" in b ? b.using.call(a, m) : l.css(m);
      },
  }),
  n.fn.extend({
          offset: function(a) {
              if (arguments.length) {
                  return void 0 === a ?
                      this :
                      this.each(function(b) {
                          n.offset.setOffset(this, a, b);
                      });
              }
              var b,
                  c,
                  d = this[0],
                  e = {
                      top: 0,
                      left: 0
                  },
                  f = d && d.ownerDocument;
              if (f) {
                  return (
                      (b = f.documentElement),
                      n.contains(b, d) ?
                      (typeof d.getBoundingClientRect !== U &&
                          (e = d.getBoundingClientRect()),
                          (c = Jb(f)), {
                              top: e.top + c.pageYOffset - b.clientTop,
                              left: e.left + c.pageXOffset - b.clientLeft,
                          }) :
                      e
                  );
              }
          },
          position: function() {
              if (this[0]) {
                  var a,
                      b,
                      c = this[0],
                      d = {
                          top: 0,
                          left: 0
                      };
                  return (
                      "fixed" === n.css(c, "position") ?
                      (b = c.getBoundingClientRect()) :
                      ((a = this.offsetParent()),
                          (b = this.offset()),
                          n.nodeName(a[0], "html") || (d = a.offset()),
                          (d.top += n.css(a[0], "borderTopWidth", !0)),
                          (d.left += n.css(a[0], "borderLeftWidth", !0))), {
                          top: b.top - d.top - n.css(c, "marginTop", !0),
                          left: b.left - d.left - n.css(c, "marginLeft", !0),
                      }
                  );
              }
          },
          offsetParent: function() {
              return this.map(function() {
                  var a = this.offsetParent || Ib;
                  while (
                      a &&
                      !n.nodeName(a, "html") &&
                      "static" === n.css(a, "position")
                  ) {
                      a = a.offsetParent;
                  }
                  return a || Ib;
              });
          },
      }),
      n.each({
              scrollLeft: "pageXOffset",
              scrollTop: "pageYOffset"
          },
          function(b, c) {
              var d = "pageYOffset" === c;
              n.fn[b] = function(e) {
                  return J(
                      this,
                      function(b, e, f) {
                          var g = Jb(b);
                          return void 0 === f ?
                              g ?
                              g[c] :
                              b[e] :
                              void(g ?
                                  g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) :
                                  (b[e] = f));
                      },
                      b,
                      e,
                      arguments.length,
                      null
                  );
              };
          }
      ),
      n.each(["top", "left"], function(a, b) {
          n.cssHooks[b] = ya(k.pixelPosition, function(a, c) {
              return c ?
                  ((c = xa(a, b)), va.test(c) ? n(a).position()[b] + "px" : c) :
                  void 0;
          });
      }),
      n.each({
          Height: "height",
          Width: "width"
      }, function(a, b) {
          n.each({
                  padding: "inner" + a,
                  content: b,
                  "": "outer" + a
              },
              function(c, d) {
                  n.fn[d] = function(d, e) {
                      var f = arguments.length && (c || "boolean" != typeof d),
                          g = c || (d === !0 || e === !0 ? "margin" : "border");
                      return J(
                          this,
                          function(b, c, d) {
                              var e;
                              return n.isWindow(b) ?
                                  b.document.documentElement["client" + a] :
                                  9 === b.nodeType ?
                                  ((e = b.documentElement),
                                      Math.max(
                                          b.body["scroll" + a],
                                          e["scroll" + a],
                                          b.body["offset" + a],
                                          e["offset" + a],
                                          e["client" + a]
                                      )) :
                                  void 0 === d ?
                                  n.css(b, c, g) :
                                  n.style(b, c, d, g);
                          },
                          b,
                          f ? d : void 0,
                          f,
                          null
                      );
                  };
              }
          );
      }),
      (n.fn.size = function() {
          return this.length;
      }),
      (n.fn.andSelf = n.fn.addBack),
      "function" == typeof define &&
      define.amd &&
      define("jquery", [], function() {
          return n;
      });
  var Kb = a.jQuery,
      Lb = a.$;
  return (
      (n.noConflict = function(b) {
          return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n;
      }),
      typeof b === U && (a.jQuery = a.$ = n),
      n
  );
});
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
  def: "easeOutQuad",
  swing: function(g, f, j, i, h) {
      return jQuery.easing[jQuery.easing.def](g, f, j, i, h);
  },
  easeInQuad: function(g, f, j, i, h) {
      return i * (f /= h) * f + j;
  },
  easeOutQuad: function(g, f, j, i, h) {
      return -i * (f /= h) * (f - 2) + j;
  },
  easeInOutQuad: function(g, f, j, i, h) {
      if ((f /= h / 2) < 1) {
          return (i / 2) * f * f + j;
      }
      return (-i / 2) * (--f * (f - 2) - 1) + j;
  },
  easeInCubic: function(g, f, j, i, h) {
      return i * (f /= h) * f * f + j;
  },
  easeOutCubic: function(g, f, j, i, h) {
      return i * ((f = f / h - 1) * f * f + 1) + j;
  },
  easeInOutCubic: function(g, f, j, i, h) {
      if ((f /= h / 2) < 1) {
          return (i / 2) * f * f * f + j;
      }
      return (i / 2) * ((f -= 2) * f * f + 2) + j;
  },
  easeInQuart: function(g, f, j, i, h) {
      return i * (f /= h) * f * f * f + j;
  },
  easeOutQuart: function(g, f, j, i, h) {
      return -i * ((f = f / h - 1) * f * f * f - 1) + j;
  },
  easeInOutQuart: function(g, f, j, i, h) {
      if ((f /= h / 2) < 1) {
          return (i / 2) * f * f * f * f + j;
      }
      return (-i / 2) * ((f -= 2) * f * f * f - 2) + j;
  },
  easeInQuint: function(g, f, j, i, h) {
      return i * (f /= h) * f * f * f * f + j;
  },
  easeOutQuint: function(g, f, j, i, h) {
      return i * ((f = f / h - 1) * f * f * f * f + 1) + j;
  },
  easeInOutQuint: function(g, f, j, i, h) {
      if ((f /= h / 2) < 1) {
          return (i / 2) * f * f * f * f * f + j;
      }
      return (i / 2) * ((f -= 2) * f * f * f * f + 2) + j;
  },
  easeInSine: function(g, f, j, i, h) {
      return -i * Math.cos((f / h) * (Math.PI / 2)) + i + j;
  },
  easeOutSine: function(g, f, j, i, h) {
      return i * Math.sin((f / h) * (Math.PI / 2)) + j;
  },
  easeInOutSine: function(g, f, j, i, h) {
      return (-i / 2) * (Math.cos((Math.PI * f) / h) - 1) + j;
  },
  easeInExpo: function(g, f, j, i, h) {
      return f == 0 ? j : i * Math.pow(2, 10 * (f / h - 1)) + j;
  },
  easeOutExpo: function(g, f, j, i, h) {
      return f == h ? j + i : i * (-Math.pow(2, (-10 * f) / h) + 1) + j;
  },
  easeInOutExpo: function(g, f, j, i, h) {
      if (f == 0) {
          return j;
      }
      if (f == h) {
          return j + i;
      }
      if ((f /= h / 2) < 1) {
          return (i / 2) * Math.pow(2, 10 * (f - 1)) + j;
      }
      return (i / 2) * (-Math.pow(2, -10 * --f) + 2) + j;
  },
  easeInCirc: function(g, f, j, i, h) {
      return -i * (Math.sqrt(1 - (f /= h) * f) - 1) + j;
  },
  easeOutCirc: function(g, f, j, i, h) {
      return i * Math.sqrt(1 - (f = f / h - 1) * f) + j;
  },
  easeInOutCirc: function(g, f, j, i, h) {
      if ((f /= h / 2) < 1) {
          return (-i / 2) * (Math.sqrt(1 - f * f) - 1) + j;
      }
      return (i / 2) * (Math.sqrt(1 - (f -= 2) * f) + 1) + j;
  },
  easeInElastic: function(j, i, p, o, n) {
      var m = 1.70158;
      var l = 0;
      var k = o;
      if (i == 0) {
          return p;
      }
      if ((i /= n) == 1) {
          return p + o;
      }
      if (!l) {
          l = n * 0.3;
      }
      if (k < Math.abs(o)) {
          k = o;
          var m = l / 4;
      } else {
          var m = (l / (2 * Math.PI)) * Math.asin(o / k);
      }
      return (
          -(
              k *
              Math.pow(2, 10 * (i -= 1)) *
              Math.sin(((i * n - m) * 2 * Math.PI) / l)
          ) + p
      );
  },
  easeOutElastic: function(j, i, p, o, n) {
      var m = 1.70158;
      var l = 0;
      var k = o;
      if (i == 0) {
          return p;
      }
      if ((i /= n) == 1) {
          return p + o;
      }
      if (!l) {
          l = n * 0.3;
      }
      if (k < Math.abs(o)) {
          k = o;
          var m = l / 4;
      } else {
          var m = (l / (2 * Math.PI)) * Math.asin(o / k);
      }
      return (
          k * Math.pow(2, -10 * i) * Math.sin(((i * n - m) * 2 * Math.PI) / l) +
          o +
          p
      );
  },
  easeInOutElastic: function(j, i, p, o, n) {
      var m = 1.70158;
      var l = 0;
      var k = o;
      if (i == 0) {
          return p;
      }
      if ((i /= n / 2) == 2) {
          return p + o;
      }
      if (!l) {
          l = n * 0.3 * 1.5;
      }
      if (k < Math.abs(o)) {
          k = o;
          var m = l / 4;
      } else {
          var m = (l / (2 * Math.PI)) * Math.asin(o / k);
      }
      if (i < 1) {
          return (
              -0.5 *
              k *
              Math.pow(2, 10 * (i -= 1)) *
              Math.sin(((i * n - m) * 2 * Math.PI) / l) +
              p
          );
      }
      return (
          k *
          Math.pow(2, -10 * (i -= 1)) *
          Math.sin(((i * n - m) * 2 * Math.PI) / l) *
          0.5 +
          o +
          p
      );
  },
  easeInBack: function(h, g, l, k, j, i) {
      if (i == undefined) {
          i = 1.70158;
      }
      return k * (g /= j) * g * ((i + 1) * g - i) + l;
  },
  easeOutBack: function(h, g, l, k, j, i) {
      if (i == undefined) {
          i = 1.70158;
      }
      return k * ((g = g / j - 1) * g * ((i + 1) * g + i) + 1) + l;
  },
  easeInOutBack: function(h, g, l, k, j, i) {
      if (i == undefined) {
          i = 1.70158;
      }
      if ((g /= j / 2) < 1) {
          return (k / 2) * g * g * (((i *= 1.525) + 1) * g - i) + l;
      }
      return (k / 2) * ((g -= 2) * g * (((i *= 1.525) + 1) * g + i) + 2) + l;
  },
  easeInBounce: function(g, f, j, i, h) {
      return i - jQuery.easing.easeOutBounce(g, h - f, 0, i, h) + j;
  },
  easeOutBounce: function(g, f, j, i, h) {
      if ((f /= h) < 1 / 2.75) {
          return i * 7.5625 * f * f + j;
      } else {
          if (f < 2 / 2.75) {
              return i * (7.5625 * (f -= 1.5 / 2.75) * f + 0.75) + j;
          } else {
              if (f < 2.5 / 2.75) {
                  return i * (7.5625 * (f -= 2.25 / 2.75) * f + 0.9375) + j;
              } else {
                  return i * (7.5625 * (f -= 2.625 / 2.75) * f + 0.984375) + j;
              }
          }
      }
  },
  easeInOutBounce: function(g, f, j, i, h) {
      if (f < h / 2) {
          return jQuery.easing.easeInBounce(g, f * 2, 0, i, h) * 0.5 + j;
      }
      return (
          jQuery.easing.easeOutBounce(g, f * 2 - h, 0, i, h) * 0.5 + i * 0.5 + j
      );
  },
});
/*!
* Bootstrap v3.3.7 (http://getbootstrap.com)
* Copyright 2011-2016 Twitter, Inc.
* Licensed under the MIT license
*/
if ("undefined" == typeof jQuery) {
  throw new Error("Bootstrap's JavaScript requires jQuery");
} +
(function(d) {
  var c = d.fn.jquery.split(" ")[0].split(".");
  if (
      (c[0] < 2 && c[1] < 9) ||
      (1 == c[0] && 9 == c[1] && c[2] < 1) ||
      c[0] > 3
  ) {
      throw new Error(
          "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4"
      );
  }
})(jQuery),
+(function(d) {
  function c() {
      var f = document.createElement("bootstrap"),
          e = {
              WebkitTransition: "webkitTransitionEnd",
              MozTransition: "transitionend",
              OTransition: "oTransitionEnd otransitionend",
              transition: "transitionend",
          };
      for (var g in e) {
          if (void 0 !== f.style[g]) {
              return {
                  end: e[g]
              };
          }
      }
      return !1;
  }
  (d.fn.emulateTransitionEnd = function(a) {
      var h = !1,
          g = this;
      d(this).one("bsTransitionEnd", function() {
          h = !0;
      });
      var f = function() {
          h || d(g).trigger(d.support.transition.end);
      };
      return setTimeout(f, a), this;
  }),
  d(function() {
      (d.support.transition = c()),
      d.support.transition &&
          (d.event.special.bsTransitionEnd = {
              bindType: d.support.transition.end,
              delegateType: d.support.transition.end,
              handle: function(a) {
                  if (d(a.target).is(this)) {
                      return a.handleObj.handler.apply(this, arguments);
                  }
              },
          });
  });
})(jQuery),
+(function(g) {
  function f(a) {
      return this.each(function() {
          var d = g(this),
              b = d.data("bs.alert");
          b || d.data("bs.alert", (b = new i(this))),
              "string" == typeof a && b[a].call(d);
      });
  }
  var j = '[data-dismiss="alert"]',
      i = function(a) {
          g(a).on("click", j, this.close);
      };
  (i.VERSION = "3.3.7"),
  (i.TRANSITION_DURATION = 150),
  (i.prototype.close = function(a) {
      function m() {
          d.detach().trigger("closed.bs.alert").remove();
      }
      var l = g(this),
          k = l.attr("data-target");
      k || ((k = l.attr("href")), (k = k && k.replace(/.*(?=#[^\s]*$)/, "")));
      var d = g("#" === k ? [] : k);
      a && a.preventDefault(),
          d.length || (d = l.closest(".alert")),
          d.trigger((a = g.Event("close.bs.alert"))),
          a.isDefaultPrevented() ||
          (d.removeClass("in"),
              g.support.transition && d.hasClass("fade") ?
              d
              .one("bsTransitionEnd", m)
              .emulateTransitionEnd(i.TRANSITION_DURATION) :
              m());
  });
  var h = g.fn.alert;
  (g.fn.alert = f),
  (g.fn.alert.Constructor = i),
  (g.fn.alert.noConflict = function() {
      return (g.fn.alert = h), this;
  }),
  g(document).on("click.bs.alert.data-api", j, i.prototype.close);
})(jQuery),
+(function(f) {
  function e(a) {
      return this.each(function() {
          var i = f(this),
              c = i.data("bs.button"),
              b = "object" == typeof a && a;
          c || i.data("bs.button", (c = new h(this, b))),
              "toggle" == a ? c.toggle() : a && c.setState(a);
      });
  }
  var h = function(a, c) {
      (this.$element = f(a)),
      (this.options = f.extend({}, h.DEFAULTS, c)),
      (this.isLoading = !1);
  };
  (h.VERSION = "3.3.7"),
  (h.DEFAULTS = {
      loadingText: "loading..."
  }),
  (h.prototype.setState = function(a) {
      var l = "disabled",
          k = this.$element,
          j = k.is("input") ? "val" : "html",
          i = k.data();
      (a += "Text"),
      null == i.resetText && k.data("resetText", k[j]()),
          setTimeout(
              f.proxy(function() {
                  k[j](null == i[a] ? this.options[a] : i[a]),
                      "loadingText" == a ?
                      ((this.isLoading = !0),
                          k.addClass(l).attr(l, l).prop(l, !0)) :
                      this.isLoading &&
                      ((this.isLoading = !1),
                          k.removeClass(l).removeAttr(l).prop(l, !1));
              }, this),
              0
          );
  }),
  (h.prototype.toggle = function() {
      var i = !0,
          d = this.$element.closest('[data-toggle="buttons"]');
      if (d.length) {
          var j = this.$element.find("input");
          "radio" == j.prop("type") ?
              (j.prop("checked") && (i = !1),
                  d.find(".active").removeClass("active"),
                  this.$element.addClass("active")) :
              "checkbox" == j.prop("type") &&
              (j.prop("checked") !== this.$element.hasClass("active") &&
                  (i = !1),
                  this.$element.toggleClass("active")),
              j.prop("checked", this.$element.hasClass("active")),
              i && j.trigger("change");
      } else {
          this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
              this.$element.toggleClass("active");
      }
  });
  var g = f.fn.button;
  (f.fn.button = e),
  (f.fn.button.Constructor = h),
  (f.fn.button.noConflict = function() {
      return (f.fn.button = g), this;
  }),
  f(document)
      .on(
          "click.bs.button.data-api",
          '[data-toggle^="button"]',
          function(b) {
              var a = f(b.target).closest(".btn");
              e.call(a, "toggle"),
                  f(b.target).is('input[type="radio"], input[type="checkbox"]') ||
                  (b.preventDefault(),
                      a.is("input,button") ?
                      a.trigger("focus") :
                      a
                      .find("input:visible,button:visible")
                      .first()
                      .trigger("focus"));
          }
      )
      .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function(a) {
              f(a.target)
                  .closest(".btn")
                  .toggleClass("focus", /^focus(in)?$/.test(a.type));
          }
      );
})(jQuery),
+(function(g) {
  function f(a) {
      return this.each(function() {
          var l = g(this),
              k = l.data("bs.carousel"),
              c = g.extend({}, j.DEFAULTS, l.data(), "object" == typeof a && a),
              b = "string" == typeof a ? a : c.slide;
          k || l.data("bs.carousel", (k = new j(this, c))),
              "number" == typeof a ?
              k.to(a) :
              b ?
              k[b]() :
              c.interval && k.pause().cycle();
      });
  }
  var j = function(a, d) {
      (this.$element = g(a)),
      (this.$indicators = this.$element.find(".carousel-indicators")),
      (this.options = d),
      (this.paused = null),
      (this.sliding = null),
      (this.interval = null),
      (this.$active = null),
      (this.$items = null),
      this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", g.proxy(this.keydown, this)),
          "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
          .on("mouseenter.bs.carousel", g.proxy(this.pause, this))
          .on("mouseleave.bs.carousel", g.proxy(this.cycle, this));
  };
  (j.VERSION = "3.3.7"),
  (j.TRANSITION_DURATION = 600),
  (j.DEFAULTS = {
      interval: 5000,
      pause: "hover",
      wrap: !0,
      keyboard: !0
  }),
  (j.prototype.keydown = function(b) {
      if (!/input|textarea/i.test(b.target.tagName)) {
          switch (b.which) {
              case 37:
                  this.prev();
                  break;
              case 39:
                  this.next();
                  break;
              default:
                  return;
          }
          b.preventDefault();
      }
  }),
  (j.prototype.cycle = function(a) {
      return (
          a || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
          !this.paused &&
          (this.interval = setInterval(
              g.proxy(this.next, this),
              this.options.interval
          )),
          this
      );
  }),
  (j.prototype.getItemIndex = function(b) {
      return (
          (this.$items = b.parent().children(".item")),
          this.$items.index(b || this.$active)
      );
  }),
  (j.prototype.getItemForDirection = function(l, k) {
      var p = this.getItemIndex(k),
          o =
          ("prev" == l && 0 === p) ||
          ("next" == l && p == this.$items.length - 1);
      if (o && !this.options.wrap) {
          return k;
      }
      var n = "prev" == l ? -1 : 1,
          m = (p + n) % this.$items.length;
      return this.$items.eq(m);
  }),
  (j.prototype.to = function(e) {
      var d = this,
          k = this.getItemIndex(
              (this.$active = this.$element.find(".item.active"))
          );
      if (!(e > this.$items.length - 1 || e < 0)) {
          return this.sliding ?
              this.$element.one("slid.bs.carousel", function() {
                  d.to(e);
              }) :
              k == e ?
              this.pause().cycle() :
              this.slide(e > k ? "next" : "prev", this.$items.eq(e));
      }
  }),
  (j.prototype.pause = function(a) {
      return (
          a || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
          g.support.transition &&
          (this.$element.trigger(g.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
      );
  }),
  (j.prototype.next = function() {
      if (!this.sliding) {
          return this.slide("next");
      }
  }),
  (j.prototype.prev = function() {
      if (!this.sliding) {
          return this.slide("prev");
      }
  }),
  (j.prototype.slide = function(v, u) {
      var t = this.$element.find(".item.active"),
          s = u || this.getItemForDirection(v, t),
          r = this.interval,
          q = "next" == v ? "left" : "right",
          p = this;
      if (s.hasClass("active")) {
          return (this.sliding = !1);
      }
      var o = s[0],
          n = g.Event("slide.bs.carousel", {
              relatedTarget: o,
              direction: q
          });
      if ((this.$element.trigger(n), !n.isDefaultPrevented())) {
          if (
              ((this.sliding = !0), r && this.pause(), this.$indicators.length)
          ) {
              this.$indicators.find(".active").removeClass("active");
              var c = g(this.$indicators.children()[this.getItemIndex(s)]);
              c && c.addClass("active");
          }
          var a = g.Event("slid.bs.carousel", {
              relatedTarget: o,
              direction: q,
          });
          return (
              g.support.transition && this.$element.hasClass("slide") ?
              (s.addClass(v),
                  s[0].offsetWidth,
                  t.addClass(q),
                  s.addClass(q),
                  t
                  .one("bsTransitionEnd", function() {
                      s.removeClass([v, q].join(" ")).addClass("active"),
                          t.removeClass(["active", q].join(" ")),
                          (p.sliding = !1),
                          setTimeout(function() {
                              p.$element.trigger(a);
                          }, 0);
                  })
                  .emulateTransitionEnd(j.TRANSITION_DURATION)) :
              (t.removeClass("active"),
                  s.addClass("active"),
                  (this.sliding = !1),
                  this.$element.trigger(a)),
              r && this.cycle(),
              this
          );
      }
  });
  var i = g.fn.carousel;
  (g.fn.carousel = f),
  (g.fn.carousel.Constructor = j),
  (g.fn.carousel.noConflict = function() {
      return (g.fn.carousel = i), this;
  });
  var h = function(n) {
      var m,
          l = g(this),
          k = g(
              l.attr("data-target") ||
              ((m = l.attr("href")) && m.replace(/.*(?=#[^\s]+$)/, ""))
          );
      if (k.hasClass("carousel")) {
          var b = g.extend({}, k.data(), l.data()),
              a = l.attr("data-slide-to");
          a && (b.interval = !1),
              f.call(k, b),
              a && k.data("bs.carousel").to(a),
              n.preventDefault();
      }
  };
  g(document)
      .on("click.bs.carousel.data-api", "[data-slide]", h)
      .on("click.bs.carousel.data-api", "[data-slide-to]", h),
      g(window).on("load", function() {
          g('[data-ride="carousel"]').each(function() {
              var a = g(this);
              f.call(a, a.data());
          });
      });
})(jQuery),
+(function(g) {
  function f(a) {
      var k,
          e =
          a.attr("data-target") ||
          ((k = a.attr("href")) && k.replace(/.*(?=#[^\s]+$)/, ""));
      return g(e);
  }

  function j(a) {
      return this.each(function() {
          var k = g(this),
              d = k.data("bs.collapse"),
              b = g.extend({}, i.DEFAULTS, k.data(), "object" == typeof a && a);
          !d && b.toggle && /show|hide/.test(a) && (b.toggle = !1),
              d || k.data("bs.collapse", (d = new i(this, b))),
              "string" == typeof a && d[a]();
      });
  }
  var i = function(a, d) {
      (this.$element = g(a)),
      (this.options = g.extend({}, i.DEFAULTS, d)),
      (this.$trigger = g(
          '[data-toggle="collapse"][href="#' +
          a.id +
          '"],[data-toggle="collapse"][data-target="#' +
          a.id +
          '"]'
      )),
      (this.transitioning = null),
      this.options.parent ?
          (this.$parent = this.getParent()) :
          this.addAriaAndCollapsedClass(this.$element, this.$trigger),
          this.options.toggle && this.toggle();
  };
  (i.VERSION = "3.3.7"),
  (i.TRANSITION_DURATION = 350),
  (i.DEFAULTS = {
      toggle: !0
  }),
  (i.prototype.dimension = function() {
      var b = this.$element.hasClass("width");
      return b ? "width" : "height";
  }),
  (i.prototype.show = function() {
      if (!this.transitioning && !this.$element.hasClass("in")) {
          var a,
              m =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
              !(
                  m &&
                  m.length &&
                  ((a = m.data("bs.collapse")), a && a.transitioning)
              )
          ) {
              var l = g.Event("show.bs.collapse");
              if ((this.$element.trigger(l), !l.isDefaultPrevented())) {
                  m &&
                      m.length &&
                      (j.call(m, "hide"), a || m.data("bs.collapse", null));
                  var k = this.dimension();
                  this.$element
                      .removeClass("collapse")
                      .addClass("collapsing")[k](0)
                      .attr("aria-expanded", !0),
                      this.$trigger
                      .removeClass("collapsed")
                      .attr("aria-expanded", !0),
                      (this.transitioning = 1);
                  var d = function() {
                      this.$element
                          .removeClass("collapsing")
                          .addClass("collapse in")[k](""),
                          (this.transitioning = 0),
                          this.$element.trigger("shown.bs.collapse");
                  };
                  if (!g.support.transition) {
                      return d.call(this);
                  }
                  var c = g.camelCase(["scroll", k].join("-"));
                  this.$element
                      .one("bsTransitionEnd", g.proxy(d, this))
                      .emulateTransitionEnd(i.TRANSITION_DURATION)[k](this.$element[0][c]);
              }
          }
      }
  }),
  (i.prototype.hide = function() {
      if (!this.transitioning && this.$element.hasClass("in")) {
          var a = g.Event("hide.bs.collapse");
          if ((this.$element.trigger(a), !a.isDefaultPrevented())) {
              var k = this.dimension();
              this.$element[k](this.$element[k]())[0].offsetHeight,
                  this.$element
                  .addClass("collapsing")
                  .removeClass("collapse in")
                  .attr("aria-expanded", !1),
                  this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                  (this.transitioning = 1);
              var d = function() {
                  (this.transitioning = 0),
                  this.$element
                      .removeClass("collapsing")
                      .addClass("collapse")
                      .trigger("hidden.bs.collapse");
              };
              return g.support.transition ?
                  void this.$element[k](0)
                  .one("bsTransitionEnd", g.proxy(d, this))
                  .emulateTransitionEnd(i.TRANSITION_DURATION) :
                  d.call(this);
          }
      }
  }),
  (i.prototype.toggle = function() {
      this[this.$element.hasClass("in") ? "hide" : "show"]();
  }),
  (i.prototype.getParent = function() {
      return g(this.options.parent)
          .find(
              '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
              g.proxy(function(k, b) {
                  var a = g(b);
                  this.addAriaAndCollapsedClass(f(a), a);
              }, this)
          )
          .end();
  }),
  (i.prototype.addAriaAndCollapsedClass = function(e, d) {
      var k = e.hasClass("in");
      e.attr("aria-expanded", k),
          d.toggleClass("collapsed", !k).attr("aria-expanded", k);
  });
  var h = g.fn.collapse;
  (g.fn.collapse = j),
  (g.fn.collapse.Constructor = i),
  (g.fn.collapse.noConflict = function() {
      return (g.fn.collapse = h), this;
  }),
  g(document).on(
      "click.bs.collapse.data-api",
      '[data-toggle="collapse"]',
      function(l) {
          var k = g(this);
          k.attr("data-target") || l.preventDefault();
          var c = f(k),
              b = c.data("bs.collapse"),
              a = b ? "toggle" : k.data();
          j.call(c, a);
      }
  );
})(jQuery),
+(function(j) {
  function i(a) {
      var f = a.attr("data-target");
      f ||
          ((f = a.attr("href")),
              (f = f && /#[A-Za-z]/.test(f) && f.replace(/.*(?=#[^\s]*$)/, "")));
      var e = f && j(f);
      return e && e.length ? e : a.parent();
  }

  function p(a) {
      (a && 3 === a.which) ||
      (j(n).remove(),
          j(m).each(function() {
              var g = j(this),
                  c = i(g),
                  b = {
                      relatedTarget: this
                  };
              c.hasClass("open") &&
                  ((a &&
                          "click" == a.type &&
                          /input|textarea/i.test(a.target.tagName) &&
                          j.contains(c[0], a.target)) ||
                      (c.trigger((a = j.Event("hide.bs.dropdown", b))),
                          a.isDefaultPrevented() ||
                          (g.attr("aria-expanded", "false"),
                              c
                              .removeClass("open")
                              .trigger(j.Event("hidden.bs.dropdown", b)))));
          }));
  }

  function o(a) {
      return this.each(function() {
          var e = j(this),
              b = e.data("bs.dropdown");
          b || e.data("bs.dropdown", (b = new l(this))),
              "string" == typeof a && b[a].call(e);
      });
  }
  var n = ".dropdown-backdrop",
      m = '[data-toggle="dropdown"]',
      l = function(a) {
          j(a).on("click.bs.dropdown", this.toggle);
      };
  (l.VERSION = "3.3.7"),
  (l.prototype.toggle = function(r) {
      var q = j(this);
      if (!q.is(".disabled, :disabled")) {
          var c = i(q),
              b = c.hasClass("open");
          if ((p(), !b)) {
              "ontouchstart" in document.documentElement &&
                  !c.closest(".navbar-nav").length &&
                  j(document.createElement("div"))
                  .addClass("dropdown-backdrop")
                  .insertAfter(j(this))
                  .on("click", p);
              var a = {
                  relatedTarget: this
              };
              if (
                  (c.trigger((r = j.Event("show.bs.dropdown", a))),
                      r.isDefaultPrevented())
              ) {
                  return;
              }
              q.trigger("focus").attr("aria-expanded", "true"),
                  c.toggleClass("open").trigger(j.Event("shown.bs.dropdown", a));
          }
          return !1;
      }
  }),
  (l.prototype.keydown = function(t) {
      if (
          /(38|40|27|32)/.test(t.which) &&
          !/input|textarea/i.test(t.target.tagName)
      ) {
          var s = j(this);
          if (
              (t.preventDefault(),
                  t.stopPropagation(),
                  !s.is(".disabled, :disabled"))
          ) {
              var r = i(s),
                  q = r.hasClass("open");
              if ((!q && 27 != t.which) || (q && 27 == t.which)) {
                  return (
                      27 == t.which && r.find(m).trigger("focus"), s.trigger("click")
                  );
              }
              var f = " li:not(.disabled):visible a",
                  b = r.find(".dropdown-menu" + f);
              if (b.length) {
                  var a = b.index(t.target);
                  38 == t.which && a > 0 && a--,
                      40 == t.which && a < b.length - 1 && a++,
                      ~a || (a = 0),
                      b.eq(a).trigger("focus");
              }
          }
      }
  });
  var k = j.fn.dropdown;
  (j.fn.dropdown = o),
  (j.fn.dropdown.Constructor = l),
  (j.fn.dropdown.noConflict = function() {
      return (j.fn.dropdown = k), this;
  }),
  j(document)
      .on("click.bs.dropdown.data-api", p)
      .on("click.bs.dropdown.data-api", ".dropdown form", function(b) {
          b.stopPropagation();
      })
      .on("click.bs.dropdown.data-api", m, l.prototype.toggle)
      .on("keydown.bs.dropdown.data-api", m, l.prototype.keydown)
      .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          l.prototype.keydown
      );
})(jQuery),
+(function(f) {
  function e(a, c) {
      return this.each(function() {
          var i = f(this),
              d = i.data("bs.modal"),
              b = f.extend({}, h.DEFAULTS, i.data(), "object" == typeof a && a);
          d || i.data("bs.modal", (d = new h(this, b))),
              "string" == typeof a ? d[a](c) : b.show && d.show(c);
      });
  }
  var h = function(a, d) {
      (this.options = d),
      (this.$body = f(document.body)),
      (this.$element = f(a)),
      (this.$dialog = this.$element.find(".modal-dialog")),
      (this.$backdrop = null),
      (this.isShown = null),
      (this.originalBodyPad = null),
      (this.scrollbarWidth = 0),
      (this.ignoreBackdropClick = !1),
      this.options.remote &&
          this.$element.find(".modal-content").load(
              this.options.remote,
              f.proxy(function() {
                  this.$element.trigger("loaded.bs.modal");
              }, this)
          );
  };
  (h.VERSION = "3.3.7"),
  (h.TRANSITION_DURATION = 300),
  (h.BACKDROP_TRANSITION_DURATION = 150),
  (h.DEFAULTS = {
      backdrop: !0,
      keyboard: !0,
      show: !0
  }),
  (h.prototype.toggle = function(b) {
      return this.isShown ? this.hide() : this.show(b);
  }),
  (h.prototype.show = function(a) {
      var i = this,
          c = f.Event("show.bs.modal", {
              relatedTarget: a
          });
      this.$element.trigger(c),
          this.isShown ||
          c.isDefaultPrevented() ||
          ((this.isShown = !0),
              this.checkScrollbar(),
              this.setScrollbar(),
              this.$body.addClass("modal-open"),
              this.escape(),
              this.resize(),
              this.$element.on(
                  "click.dismiss.bs.modal",
                  '[data-dismiss="modal"]',
                  f.proxy(this.hide, this)
              ),
              this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                  i.$element.one("mouseup.dismiss.bs.modal", function(d) {
                      f(d.target).is(i.$element) && (i.ignoreBackdropClick = !0);
                  });
              }),
              this.backdrop(function() {
                  var d = f.support.transition && i.$element.hasClass("fade");
                  i.$element.parent().length || i.$element.appendTo(i.$body),
                      i.$element.show().scrollTop(0),
                      i.adjustDialog(),
                      d && i.$element[0].offsetWidth,
                      i.$element.addClass("in"),
                      i.enforceFocus();
                  var b = f.Event("shown.bs.modal", {
                      relatedTarget: a
                  });
                  d
                      ?
                      i.$dialog
                      .one("bsTransitionEnd", function() {
                          i.$element.trigger("focus").trigger(b);
                      })
                      .emulateTransitionEnd(h.TRANSITION_DURATION) :
                      i.$element.trigger("focus").trigger(b);
              }));
  }),
  (h.prototype.hide = function(a) {
      a && a.preventDefault(),
          (a = f.Event("hide.bs.modal")),
          this.$element.trigger(a),
          this.isShown &&
          !a.isDefaultPrevented() &&
          ((this.isShown = !1),
              this.escape(),
              this.resize(),
              f(document).off("focusin.bs.modal"),
              this.$element
              .removeClass("in")
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
              this.$dialog.off("mousedown.dismiss.bs.modal"),
              f.support.transition && this.$element.hasClass("fade") ?
              this.$element
              .one("bsTransitionEnd", f.proxy(this.hideModal, this))
              .emulateTransitionEnd(h.TRANSITION_DURATION) :
              this.hideModal());
  }),
  (h.prototype.enforceFocus = function() {
      f(document)
          .off("focusin.bs.modal")
          .on(
              "focusin.bs.modal",
              f.proxy(function(b) {
                  document === b.target ||
                      this.$element[0] === b.target ||
                      this.$element.has(b.target).length ||
                      this.$element.trigger("focus");
              }, this)
          );
  }),
  (h.prototype.escape = function() {
      this.isShown && this.options.keyboard ?
          this.$element.on(
              "keydown.dismiss.bs.modal",
              f.proxy(function(b) {
                  27 == b.which && this.hide();
              }, this)
          ) :
          this.isShown || this.$element.off("keydown.dismiss.bs.modal");
  }),
  (h.prototype.resize = function() {
      this.isShown ?
          f(window).on("resize.bs.modal", f.proxy(this.handleUpdate, this)) :
          f(window).off("resize.bs.modal");
  }),
  (h.prototype.hideModal = function() {
      var b = this;
      this.$element.hide(),
          this.backdrop(function() {
              b.$body.removeClass("modal-open"),
                  b.resetAdjustments(),
                  b.resetScrollbar(),
                  b.$element.trigger("hidden.bs.modal");
          });
  }),
  (h.prototype.removeBackdrop = function() {
      this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
  }),
  (h.prototype.backdrop = function(a) {
      var k = this,
          j = this.$element.hasClass("fade") ? "fade" : "";
      if (this.isShown && this.options.backdrop) {
          var i = f.support.transition && j;
          if (
              ((this.$backdrop = f(document.createElement("div"))
                      .addClass("modal-backdrop " + j)
                      .appendTo(this.$body)),
                  this.$element.on(
                      "click.dismiss.bs.modal",
                      f.proxy(function(b) {
                          return this.ignoreBackdropClick ?
                              void(this.ignoreBackdropClick = !1) :
                              void(
                                  b.target === b.currentTarget &&
                                  ("static" == this.options.backdrop ?
                                      this.$element[0].focus() :
                                      this.hide())
                              );
                      }, this)
                  ),
                  i && this.$backdrop[0].offsetWidth,
                  this.$backdrop.addClass("in"),
                  !a)
          ) {
              return;
          }
          i
              ?
              this.$backdrop
              .one("bsTransitionEnd", a)
              .emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION) :
              a();
      } else {
          if (!this.isShown && this.$backdrop) {
              this.$backdrop.removeClass("in");
              var c = function() {
                  k.removeBackdrop(), a && a();
              };
              f.support.transition && this.$element.hasClass("fade") ?
                  this.$backdrop
                  .one("bsTransitionEnd", c)
                  .emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION) :
                  c();
          } else {
              a && a();
          }
      }
  }),
  (h.prototype.handleUpdate = function() {
      this.adjustDialog();
  }),
  (h.prototype.adjustDialog = function() {
      var b =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
      this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && b ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !b ? this.scrollbarWidth : "",
      });
  }),
  (h.prototype.resetAdjustments = function() {
      this.$element.css({
          paddingLeft: "",
          paddingRight: ""
      });
  }),
  (h.prototype.checkScrollbar = function() {
      var d = window.innerWidth;
      if (!d) {
          var c = document.documentElement.getBoundingClientRect();
          d = c.right - Math.abs(c.left);
      }
      (this.bodyIsOverflowing = document.body.clientWidth < d),
      (this.scrollbarWidth = this.measureScrollbar());
  }),
  (h.prototype.setScrollbar = function() {
      var b = parseInt(this.$body.css("padding-right") || 0, 10);
      (this.originalBodyPad = document.body.style.paddingRight || ""),
      this.bodyIsOverflowing &&
          this.$body.css("padding-right", b + this.scrollbarWidth);
  }),
  (h.prototype.resetScrollbar = function() {
      this.$body.css("padding-right", this.originalBodyPad);
  }),
  (h.prototype.measureScrollbar = function() {
      var d = document.createElement("div");
      (d.className = "modal-scrollbar-measure"), this.$body.append(d);
      var c = d.offsetWidth - d.clientWidth;
      return this.$body[0].removeChild(d), c;
  });
  var g = f.fn.modal;
  (f.fn.modal = e),
  (f.fn.modal.Constructor = h),
  (f.fn.modal.noConflict = function() {
      return (f.fn.modal = g), this;
  }),
  f(document).on(
      "click.bs.modal.data-api",
      '[data-toggle="modal"]',
      function(k) {
          var j = f(this),
              i = j.attr("href"),
              b = f(
                  j.attr("data-target") || (i && i.replace(/.*(?=#[^\s]+$)/, ""))
              ),
              a = b.data("bs.modal") ?
              "toggle" :
              f.extend({
                  remote: !/#/.test(i) && i
              }, b.data(), j.data());
          j.is("a") && k.preventDefault(),
              b.one("show.bs.modal", function(c) {
                  c.isDefaultPrevented() ||
                      b.one("hidden.bs.modal", function() {
                          j.is(":visible") && j.trigger("focus");
                      });
              }),
              e.call(b, a, this);
      }
  );
})(jQuery),
+(function(f) {
  function e(a) {
      return this.each(function() {
          var i = f(this),
              c = i.data("bs.tooltip"),
              b = "object" == typeof a && a;
          (!c && /destroy|hide/.test(a)) ||
          (c || i.data("bs.tooltip", (c = new h(this, b))),
              "string" == typeof a && c[a]());
      });
  }
  var h = function(d, c) {
      (this.type = null),
      (this.options = null),
      (this.enabled = null),
      (this.timeout = null),
      (this.hoverState = null),
      (this.$element = null),
      (this.inState = null),
      this.init("tooltip", d, c);
  };
  (h.VERSION = "3.3.7"),
  (h.TRANSITION_DURATION = 150),
  (h.DEFAULTS = {
      animation: !0,
      placement: "top",
      selector: !1,
      template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      container: !1,
      viewport: {
          selector: "body",
          padding: 0
      },
  }),
  (h.prototype.init = function(a, p, o) {
      if (
          ((this.enabled = !0),
              (this.type = a),
              (this.$element = f(p)),
              (this.options = this.getOptions(o)),
              (this.$viewport =
                  this.options.viewport &&
                  f(
                      f.isFunction(this.options.viewport) ?
                      this.options.viewport.call(this, this.$element) :
                      this.options.viewport.selector || this.options.viewport
                  )),
              (this.inState = {
                  click: !1,
                  hover: !1,
                  focus: !1
              }),
              this.$element[0] instanceof document.constructor &&
              !this.options.selector)
      ) {
          throw new Error(
              "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          );
      }
      for (var n = this.options.trigger.split(" "), m = n.length; m--;) {
          var l = n[m];
          if ("click" == l) {
              this.$element.on(
                  "click." + this.type,
                  this.options.selector,
                  f.proxy(this.toggle, this)
              );
          } else {
              if ("manual" != l) {
                  var k = "hover" == l ? "mouseenter" : "focusin",
                      j = "hover" == l ? "mouseleave" : "focusout";
                  this.$element.on(
                          k + "." + this.type,
                          this.options.selector,
                          f.proxy(this.enter, this)
                      ),
                      this.$element.on(
                          j + "." + this.type,
                          this.options.selector,
                          f.proxy(this.leave, this)
                      );
              }
          }
      }
      this.options.selector ?
          (this._options = f.extend({}, this.options, {
              trigger: "manual",
              selector: "",
          })) :
          this.fixTitle();
  }),
  (h.prototype.getDefaults = function() {
      return h.DEFAULTS;
  }),
  (h.prototype.getOptions = function(a) {
      return (
          (a = f.extend({}, this.getDefaults(), this.$element.data(), a)),
          a.delay &&
          "number" == typeof a.delay &&
          (a.delay = {
              show: a.delay,
              hide: a.delay
          }),
          a
      );
  }),
  (h.prototype.getDelegateOptions = function() {
      var a = {},
          d = this.getDefaults();
      return (
          this._options &&
          f.each(this._options, function(b, c) {
              d[b] != c && (a[b] = c);
          }),
          a
      );
  }),
  (h.prototype.enter = function(a) {
      var d =
          a instanceof this.constructor ?
          a :
          f(a.currentTarget).data("bs." + this.type);
      return (
          d ||
          ((d = new this.constructor(
                  a.currentTarget,
                  this.getDelegateOptions()
              )),
              f(a.currentTarget).data("bs." + this.type, d)),
          a instanceof f.Event &&
          (d.inState["focusin" == a.type ? "focus" : "hover"] = !0),
          d.tip().hasClass("in") || "in" == d.hoverState ?
          void(d.hoverState = "in") :
          (clearTimeout(d.timeout),
              (d.hoverState = "in"),
              d.options.delay && d.options.delay.show ?
              void(d.timeout = setTimeout(function() {
                  "in" == d.hoverState && d.show();
              }, d.options.delay.show)) :
              d.show())
      );
  }),
  (h.prototype.isInStateTrue = function() {
      for (var b in this.inState) {
          if (this.inState[b]) {
              return !0;
          }
      }
      return !1;
  }),
  (h.prototype.leave = function(a) {
      var d =
          a instanceof this.constructor ?
          a :
          f(a.currentTarget).data("bs." + this.type);
      if (
          (d ||
              ((d = new this.constructor(
                      a.currentTarget,
                      this.getDelegateOptions()
                  )),
                  f(a.currentTarget).data("bs." + this.type, d)),
              a instanceof f.Event &&
              (d.inState["focusout" == a.type ? "focus" : "hover"] = !1),
              !d.isInStateTrue())
      ) {
          return (
              clearTimeout(d.timeout),
              (d.hoverState = "out"),
              d.options.delay && d.options.delay.hide ?
              void(d.timeout = setTimeout(function() {
                  "out" == d.hoverState && d.hide();
              }, d.options.delay.hide)) :
              d.hide()
          );
      }
  }),
  (h.prototype.show = function() {
      var D = f.Event("show.bs." + this.type);
      if (this.hasContent() && this.enabled) {
          this.$element.trigger(D);
          var C = f.contains(
              this.$element[0].ownerDocument.documentElement,
              this.$element[0]
          );
          if (D.isDefaultPrevented() || !C) {
              return;
          }
          var B = this,
              A = this.tip(),
              z = this.getUID(this.type);
          this.setContent(),
              A.attr("id", z),
              this.$element.attr("aria-describedby", z),
              this.options.animation && A.addClass("fade");
          var y =
              "function" == typeof this.options.placement ?
              this.options.placement.call(this, A[0], this.$element[0]) :
              this.options.placement,
              x = /\s?auto?\s?/i,
              w = x.test(y);
          w && (y = y.replace(x, "") || "top"),
              A.detach()
              .css({
                  top: 0,
                  left: 0,
                  display: "block"
              })
              .addClass(y)
              .data("bs." + this.type, this),
              this.options.container ?
              A.appendTo(this.options.container) :
              A.insertAfter(this.$element),
              this.$element.trigger("inserted.bs." + this.type);
          var v = this.getPosition(),
              u = A[0].offsetWidth,
              t = A[0].offsetHeight;
          if (w) {
              var s = y,
                  r = this.getPosition(this.$viewport);
              (y =
                  "bottom" == y && v.bottom + t > r.bottom ?
                  "top" :
                  "top" == y && v.top - t < r.top ?
                  "bottom" :
                  "right" == y && v.right + u > r.width ?
                  "left" :
                  "left" == y && v.left - u < r.left ?
                  "right" :
                  y),
              A.removeClass(s).addClass(y);
          }
          var c = this.getCalculatedOffset(y, v, u, t);
          this.applyPlacement(c, y);
          var a = function() {
              var b = B.hoverState;
              B.$element.trigger("shown.bs." + B.type),
                  (B.hoverState = null),
                  "out" == b && B.leave(B);
          };
          f.support.transition && this.$tip.hasClass("fade") ?
              A.one("bsTransitionEnd", a).emulateTransitionEnd(
                  h.TRANSITION_DURATION
              ) :
              a();
      }
  }),
  (h.prototype.applyPlacement = function(z, y) {
      var x = this.tip(),
          w = x[0].offsetWidth,
          v = x[0].offsetHeight,
          u = parseInt(x.css("margin-top"), 10),
          t = parseInt(x.css("margin-left"), 10);
      isNaN(u) && (u = 0),
          isNaN(t) && (t = 0),
          (z.top += u),
          (z.left += t),
          f.offset.setOffset(
              x[0],
              f.extend({
                      using: function(b) {
                          x.css({
                              top: Math.round(b.top),
                              left: Math.round(b.left)
                          });
                      },
                  },
                  z
              ),
              0
          ),
          x.addClass("in");
      var s = x[0].offsetWidth,
          r = x[0].offsetHeight;
      "top" == y && r != v && (z.top = z.top + v - r);
      var q = this.getViewportAdjustedDelta(y, z, s, r);
      q.left ? (z.left += q.left) : (z.top += q.top);
      var p = /top|bottom/.test(y),
          o = p ? 2 * q.left - w + s : 2 * q.top - v + r,
          a = p ? "offsetWidth" : "offsetHeight";
      x.offset(z), this.replaceArrow(o, x[0][a], p);
  }),
  (h.prototype.replaceArrow = function(i, d, j) {
      this.arrow()
          .css(j ? "left" : "top", 50 * (1 - i / d) + "%")
          .css(j ? "top" : "left", "");
  }),
  (h.prototype.setContent = function() {
      var d = this.tip(),
          c = this.getTitle();
      d.find(".tooltip-inner")[this.options.html ? "html" : "text"](c),
          d.removeClass("fade in top bottom left right");
  }),
  (h.prototype.hide = function(a) {
      function k() {
          "in" != j.hoverState && i.detach(),
              j.$element &&
              j.$element
              .removeAttr("aria-describedby")
              .trigger("hidden.bs." + j.type),
              a && a();
      }
      var j = this,
          i = f(this.$tip),
          c = f.Event("hide.bs." + this.type);
      if ((this.$element.trigger(c), !c.isDefaultPrevented())) {
          return (
              i.removeClass("in"),
              f.support.transition && i.hasClass("fade") ?
              i
              .one("bsTransitionEnd", k)
              .emulateTransitionEnd(h.TRANSITION_DURATION) :
              k(),
              (this.hoverState = null),
              this
          );
      }
  }),
  (h.prototype.fixTitle = function() {
      var b = this.$element;
      (b.attr("title") || "string" != typeof b.attr("data-original-title")) &&
      b
          .attr("data-original-title", b.attr("title") || "")
          .attr("title", "");
  }),
  (h.prototype.hasContent = function() {
      return this.getTitle();
  }),
  (h.prototype.getPosition = function(a) {
      a = a || this.$element;
      var p = a[0],
          o = "BODY" == p.tagName,
          n = p.getBoundingClientRect();
      null == n.width &&
          (n = f.extend({}, n, {
              width: n.right - n.left,
              height: n.bottom - n.top,
          }));
      var m = window.SVGElement && p instanceof window.SVGElement,
          l = o ? {
              top: 0,
              left: 0
          } : m ? null : a.offset(),
          k = {
              scroll: o ?
                  document.documentElement.scrollTop || document.body.scrollTop : a.scrollTop(),
          },
          j = o ? {
              width: f(window).width(),
              height: f(window).height()
          } :
          null;
      return f.extend({}, n, k, j, l);
  }),
  (h.prototype.getCalculatedOffset = function(j, i, l, k) {
      return "bottom" == j ? {
              top: i.top + i.height,
              left: i.left + i.width / 2 - l / 2
          } :
          "top" == j ? {
              top: i.top - k,
              left: i.left + i.width / 2 - l / 2
          } :
          "left" == j ? {
              top: i.top + i.height / 2 - k / 2,
              left: i.left - l
          } : {
              top: i.top + i.height / 2 - k / 2,
              left: i.left + i.width
          };
  }),
  (h.prototype.getViewportAdjustedDelta = function(v, u, t, s) {
      var r = {
          top: 0,
          left: 0
      };
      if (!this.$viewport) {
          return r;
      }
      var q = (this.options.viewport && this.options.viewport.padding) || 0,
          p = this.getPosition(this.$viewport);
      if (/right|left/.test(v)) {
          var o = u.top - q - p.scroll,
              n = u.top + q - p.scroll + s;
          o < p.top ?
              (r.top = p.top - o) :
              n > p.top + p.height && (r.top = p.top + p.height - n);
      } else {
          var m = u.left - q,
              l = u.left + q + t;
          m < p.left ?
              (r.left = p.left - m) :
              l > p.right && (r.left = p.left + p.width - l);
      }
      return r;
  }),
  (h.prototype.getTitle = function() {
      var i,
          d = this.$element,
          j = this.options;
      return (i =
          d.attr("data-original-title") ||
          ("function" == typeof j.title ? j.title.call(d[0]) : j.title));
  }),
  (h.prototype.getUID = function(b) {
      do {
          b += ~~(1000000 * Math.random());
      } while (document.getElementById(b));
      return b;
  }),
  (h.prototype.tip = function() {
      if (
          !this.$tip &&
          ((this.$tip = f(this.options.template)), 1 != this.$tip.length)
      ) {
          throw new Error(
              this.type +
              " `template` option must consist of exactly 1 top-level element!"
          );
      }
      return this.$tip;
  }),
  (h.prototype.arrow = function() {
      return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
  }),
  (h.prototype.enable = function() {
      this.enabled = !0;
  }),
  (h.prototype.disable = function() {
      this.enabled = !1;
  }),
  (h.prototype.toggleEnabled = function() {
      this.enabled = !this.enabled;
  }),
  (h.prototype.toggle = function(a) {
      var d = this;
      a &&
          ((d = f(a.currentTarget).data("bs." + this.type)),
              d ||
              ((d = new this.constructor(
                      a.currentTarget,
                      this.getDelegateOptions()
                  )),
                  f(a.currentTarget).data("bs." + this.type, d))),
          a ?
          ((d.inState.click = !d.inState.click),
              d.isInStateTrue() ? d.enter(d) : d.leave(d)) :
          d.tip().hasClass("in") ?
          d.leave(d) :
          d.enter(d);
  }),
  (h.prototype.destroy = function() {
      var b = this;
      clearTimeout(this.timeout),
          this.hide(function() {
              b.$element.off("." + b.type).removeData("bs." + b.type),
                  b.$tip && b.$tip.detach(),
                  (b.$tip = null),
                  (b.$arrow = null),
                  (b.$viewport = null),
                  (b.$element = null);
          });
  });
  var g = f.fn.tooltip;
  (f.fn.tooltip = e),
  (f.fn.tooltip.Constructor = h),
  (f.fn.tooltip.noConflict = function() {
      return (f.fn.tooltip = g), this;
  });
})(jQuery),
+(function(f) {
  function e(a) {
      return this.each(function() {
          var i = f(this),
              c = i.data("bs.popover"),
              b = "object" == typeof a && a;
          (!c && /destroy|hide/.test(a)) ||
          (c || i.data("bs.popover", (c = new h(this, b))),
              "string" == typeof a && c[a]());
      });
  }
  var h = function(d, c) {
      this.init("popover", d, c);
  };
  if (!f.fn.tooltip) {
      throw new Error("Popover requires tooltip.js");
  }
  (h.VERSION = "3.3.7"),
  (h.DEFAULTS = f.extend({}, f.fn.tooltip.Constructor.DEFAULTS, {
      placement: "right",
      trigger: "click",
      content: "",
      template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
  })),
  (h.prototype = f.extend({}, f.fn.tooltip.Constructor.prototype)),
  (h.prototype.constructor = h),
  (h.prototype.getDefaults = function() {
      return h.DEFAULTS;
  }),
  (h.prototype.setContent = function() {
      var i = this.tip(),
          d = this.getTitle(),
          j = this.getContent();
      i.find(".popover-title")[this.options.html ? "html" : "text"](d),
          i
          .find(".popover-content")
          .children()
          .detach()
          .end()[
              this.options.html ?
              "string" == typeof j ?
              "html" :
              "append" :
              "text"
          ](j),
          i.removeClass("fade top bottom left right in"),
          i.find(".popover-title").html() || i.find(".popover-title").hide();
  }),
  (h.prototype.hasContent = function() {
      return this.getTitle() || this.getContent();
  }),
  (h.prototype.getContent = function() {
      var d = this.$element,
          c = this.options;
      return (
          d.attr("data-content") ||
          ("function" == typeof c.content ? c.content.call(d[0]) : c.content)
      );
  }),
  (h.prototype.arrow = function() {
      return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
  });
  var g = f.fn.popover;
  (f.fn.popover = e),
  (f.fn.popover.Constructor = h),
  (f.fn.popover.noConflict = function() {
      return (f.fn.popover = g), this;
  });
})(jQuery),
+(function(f) {
  function e(b, a) {
      (this.$body = f(document.body)),
      (this.$scrollElement = f(f(b).is(document.body) ? window : b)),
      (this.options = f.extend({}, e.DEFAULTS, a)),
      (this.selector = (this.options.target || "") + " .nav li > a"),
      (this.offsets = []),
      (this.targets = []),
      (this.activeTarget = null),
      (this.scrollHeight = 0),
      this.$scrollElement.on(
              "scroll.bs.scrollspy",
              f.proxy(this.process, this)
          ),
          this.refresh(),
          this.process();
  }

  function h(a) {
      return this.each(function() {
          var i = f(this),
              c = i.data("bs.scrollspy"),
              b = "object" == typeof a && a;
          c || i.data("bs.scrollspy", (c = new e(this, b))),
              "string" == typeof a && c[a]();
      });
  }
  (e.VERSION = "3.3.7"),
  (e.DEFAULTS = {
      offset: 10
  }),
  (e.prototype.getScrollHeight = function() {
      return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
              this.$body[0].scrollHeight,
              document.documentElement.scrollHeight
          )
      );
  }),
  (e.prototype.refresh = function() {
      var a = this,
          j = "offset",
          i = 0;
      (this.offsets = []),
      (this.targets = []),
      (this.scrollHeight = this.getScrollHeight()),
      f.isWindow(this.$scrollElement[0]) ||
          ((j = "position"), (i = this.$scrollElement.scrollTop())),
          this.$body
          .find(this.selector)
          .map(function() {
              var c = f(this),
                  k = c.data("target") || c.attr("href"),
                  d = /^#./.test(k) && f(k);
              return (
                  (d && d.length && d.is(":visible") && [
                      [d[j]().top + i, k]
                  ]) ||
                  null
              );
          })
          .sort(function(d, c) {
              return d[0] - c[0];
          })
          .each(function() {
              a.offsets.push(this[0]), a.targets.push(this[1]);
          });
  }),
  (e.prototype.process = function() {
      var j,
          i = this.$scrollElement.scrollTop() + this.options.offset,
          o = this.getScrollHeight(),
          n = this.options.offset + o - this.$scrollElement.height(),
          m = this.offsets,
          l = this.targets,
          k = this.activeTarget;
      if ((this.scrollHeight != o && this.refresh(), i >= n)) {
          return k != (j = l[l.length - 1]) && this.activate(j);
      }
      if (k && i < m[0]) {
          return (this.activeTarget = null), this.clear();
      }
      for (j = m.length; j--;) {
          k != l[j] &&
              i >= m[j] &&
              (void 0 === m[j + 1] || i < m[j + 1]) &&
              this.activate(l[j]);
      }
  }),
  (e.prototype.activate = function(a) {
      (this.activeTarget = a), this.clear();
      var j =
          this.selector +
          '[data-target="' +
          a +
          '"],' +
          this.selector +
          '[href="' +
          a +
          '"]',
          i = f(j).parents("li").addClass("active");
      i.parent(".dropdown-menu").length &&
          (i = i.closest("li.dropdown").addClass("active")),
          i.trigger("activate.bs.scrollspy");
  }),
  (e.prototype.clear = function() {
      f(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
  });
  var g = f.fn.scrollspy;
  (f.fn.scrollspy = h),
  (f.fn.scrollspy.Constructor = e),
  (f.fn.scrollspy.noConflict = function() {
      return (f.fn.scrollspy = g), this;
  }),
  f(window).on("load.bs.scrollspy.data-api", function() {
      f('[data-spy="scroll"]').each(function() {
          var a = f(this);
          h.call(a, a.data());
      });
  });
})(jQuery),
+(function(g) {
  function f(a) {
      return this.each(function() {
          var c = g(this),
              b = c.data("bs.tab");
          b || c.data("bs.tab", (b = new j(this))),
              "string" == typeof a && b[a]();
      });
  }
  var j = function(a) {
      this.element = g(a);
  };
  (j.VERSION = "3.3.7"),
  (j.TRANSITION_DURATION = 150),
  (j.prototype.show = function() {
      var a = this.element,
          p = a.closest("ul:not(.dropdown-menu)"),
          o = a.data("target");
      if (
          (o ||
              ((o = a.attr("href")), (o = o && o.replace(/.*(?=#[^\s]*$)/, ""))),
              !a.parent("li").hasClass("active"))
      ) {
          var n = p.find(".active:last a"),
              m = g.Event("hide.bs.tab", {
                  relatedTarget: a[0]
              }),
              l = g.Event("show.bs.tab", {
                  relatedTarget: n[0]
              });
          if (
              (n.trigger(m),
                  a.trigger(l),
                  !l.isDefaultPrevented() && !m.isDefaultPrevented())
          ) {
              var k = g(o);
              this.activate(a.closest("li"), p),
                  this.activate(k, k.parent(), function() {
                      n.trigger({
                              type: "hidden.bs.tab",
                              relatedTarget: a[0]
                          }),
                          a.trigger({
                              type: "shown.bs.tab",
                              relatedTarget: n[0]
                          });
                  });
          }
      }
  }),
  (j.prototype.activate = function(a, n, m) {
      function l() {
          k
              .removeClass("active")
              .find("> .dropdown-menu > .active")
              .removeClass("active")
              .end()
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !1),
              a
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
              c ? (a[0].offsetWidth, a.addClass("in")) : a.removeClass("fade"),
              a.parent(".dropdown-menu").length &&
              a
              .closest("li.dropdown")
              .addClass("active")
              .end()
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
              m && m();
      }
      var k = n.find("> .active"),
          c =
          m &&
          g.support.transition &&
          ((k.length && k.hasClass("fade")) || !!n.find("> .fade").length);
      k.length && c ?
          k
          .one("bsTransitionEnd", l)
          .emulateTransitionEnd(j.TRANSITION_DURATION) :
          l(),
          k.removeClass("in");
  });
  var i = g.fn.tab;
  (g.fn.tab = f),
  (g.fn.tab.Constructor = j),
  (g.fn.tab.noConflict = function() {
      return (g.fn.tab = i), this;
  });
  var h = function(a) {
      a.preventDefault(), f.call(g(this), "show");
  };
  g(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', h)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', h);
})(jQuery),
+(function(f) {
  function e(a) {
      return this.each(function() {
          var i = f(this),
              c = i.data("bs.affix"),
              b = "object" == typeof a && a;
          c || i.data("bs.affix", (c = new h(this, b))),
              "string" == typeof a && c[a]();
      });
  }
  var h = function(a, c) {
      (this.options = f.extend({}, h.DEFAULTS, c)),
      (this.$target = f(this.options.target)
          .on("scroll.bs.affix.data-api", f.proxy(this.checkPosition, this))
          .on(
              "click.bs.affix.data-api",
              f.proxy(this.checkPositionWithEventLoop, this)
          )),
      (this.$element = f(a)),
      (this.affixed = null),
      (this.unpin = null),
      (this.pinnedOffset = null),
      this.checkPosition();
  };
  (h.VERSION = "3.3.7"),
  (h.RESET = "affix affix-top affix-bottom"),
  (h.DEFAULTS = {
      offset: 0,
      target: window
  }),
  (h.prototype.getState = function(t, s, r, q) {
      var p = this.$target.scrollTop(),
          o = this.$element.offset(),
          n = this.$target.height();
      if (null != r && "top" == this.affixed) {
          return p < r && "top";
      }
      if ("bottom" == this.affixed) {
          return null != r ?
              !(p + this.unpin <= o.top) && "bottom" :
              !(p + n <= t - q) && "bottom";
      }
      var m = null == this.affixed,
          l = m ? p : o.top,
          k = m ? n : s;
      return null != r && p <= r ?
          "top" :
          null != q && l + k >= t - q && "bottom";
  }),
  (h.prototype.getPinnedOffset = function() {
      if (this.pinnedOffset) {
          return this.pinnedOffset;
      }
      this.$element.removeClass(h.RESET).addClass("affix");
      var d = this.$target.scrollTop(),
          c = this.$element.offset();
      return (this.pinnedOffset = c.top - d);
  }),
  (h.prototype.checkPositionWithEventLoop = function() {
      setTimeout(f.proxy(this.checkPosition, this), 1);
  }),
  (h.prototype.checkPosition = function() {
      if (this.$element.is(":visible")) {
          var a = this.$element.height(),
              p = this.options.offset,
              o = p.top,
              n = p.bottom,
              m = Math.max(f(document).height(), f(document.body).height());
          "object" != typeof p && (n = o = p),
              "function" == typeof o && (o = p.top(this.$element)),
              "function" == typeof n && (n = p.bottom(this.$element));
          var l = this.getState(m, a, o, n);
          if (this.affixed != l) {
              null != this.unpin && this.$element.css("top", "");
              var k = "affix" + (l ? "-" + l : ""),
                  c = f.Event(k + ".bs.affix");
              if ((this.$element.trigger(c), c.isDefaultPrevented())) {
                  return;
              }
              (this.affixed = l),
              (this.unpin = "bottom" == l ? this.getPinnedOffset() : null),
              this.$element
                  .removeClass(h.RESET)
                  .addClass(k)
                  .trigger(k.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == l && this.$element.offset({
              top: m - a - n
          });
      }
  });
  var g = f.fn.affix;
  (f.fn.affix = e),
  (f.fn.affix.Constructor = h),
  (f.fn.affix.noConflict = function() {
      return (f.fn.affix = g), this;
  }),
  f(window).on("load", function() {
      f('[data-spy="affix"]').each(function() {
          var b = f(this),
              a = b.data();
          (a.offset = a.offset || {}),
          null != a.offsetBottom && (a.offset.bottom = a.offsetBottom),
              null != a.offsetTop && (a.offset.top = a.offsetTop),
              e.call(b, a);
      });
  });
})(jQuery);
!(function() {
  function a1() {
      aD.keyboardSupport && aR("keydown", a5);
  }

  function aJ() {
      if (!ab && document.body) {
          ab = !0;
          var f = document.body,
              h = document.documentElement,
              k = window.innerHeight,
              g = f.scrollHeight;
          if (
              ((aA = document.compatMode.indexOf("CSS") >= 0 ? h : f),
                  (ax = f),
                  a1(),
                  top != self)
          ) {
              al = !0;
          } else {
              if (aB && g > k && (f.offsetHeight <= k || h.offsetHeight <= k)) {
                  var d = document.createElement("div");
                  (d.style.cssText =
                      "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" +
                      aA.scrollHeight +
                      "px"),
                  document.body.appendChild(d);
                  var e;
                  (ag = function() {
                      e ||
                          (e = setTimeout(function() {
                              ao ||
                                  ((d.style.height = "0"),
                                      (d.style.height = aA.scrollHeight + "px"),
                                      (e = null));
                          }, 500));
                  }),
                  setTimeout(ag, 10),
                      aR("resize", ag);
                  var b = {
                      attributes: !0,
                      childList: !0,
                      characterData: !1
                  };
                  if (((an = new aC(ag)), an.observe(f, b), aA.offsetHeight <= k)) {
                      var j = document.createElement("div");
                      (j.style.clear = "both"), f.appendChild(j);
                  }
              }
          }
          aD.fixedBackground ||
              ao ||
              ((f.style.backgroundAttachment = "scroll"),
                  (h.style.backgroundAttachment = "scroll"));
      }
  }

  function aP() {
      an && an.disconnect(),
          aG(a6, aL),
          aG("mousedown", aW),
          aG("keydown", a5),
          aG("resize", ag),
          aG("load", aJ);
  }

  function aQ(h, f, j) {
      if ((aO(f, j), 1 != aD.accelerationMax)) {
          var k = Date.now(),
              g = k - aM;
          if (g < aD.accelerationDelta) {
              var c = (1 + 50 / g) / 2;
              c > 1 && ((c = Math.min(c, aD.accelerationMax)), (f *= c), (j *= c));
          }
          aM = Date.now();
      }
      if (
          (ai.push({
                  x: f,
                  y: j,
                  lastX: 0 > f ? 0.99 : -0.99,
                  lastY: 0 > j ? 0.99 : -0.99,
                  start: Date.now(),
              }),
              !aV)
      ) {
          var d = h === document.body,
              b = function() {
                  for (var i = Date.now(), e = 0, t = 0, q = 0; q < ai.length; q++) {
                      var x = ai[q],
                          p = i - x.start,
                          y = p >= aD.animationTime,
                          o = y ? 1 : p / aD.animationTime;
                      aD.pulseAlgorithm && (o = aF(o));
                      var l = (x.x * o - x.lastX) >> 0,
                          v = (x.y * o - x.lastY) >> 0;
                      (e += l),
                      (t += v),
                      (x.lastX += l),
                      (x.lastY += v),
                      y && (ai.splice(q, 1), q--);
                  }
                  d
                      ?
                      window.scrollBy(e, t) :
                      (e && (h.scrollLeft += e), t && (h.scrollTop += t)),
                      f || j || (ai = []),
                      ai.length ? ad(b, h, 1000 / aD.frameRate + 1) : (aV = !1);
              };
          ad(b, h, 0), (aV = !0);
      }
  }

  function aL(f) {
      ab || aJ();
      var g = f.target;
      if (f.defaultPrevented || f.ctrlKey) {
          return !0;
      }
      if (
          aX(ax, "embed") ||
          (aX(g, "embed") && /\.pdf/i.test(g.src)) ||
          aX(ax, "object") ||
          g.shadowRoot
      ) {
          return !0;
      }
      var d = -f.wheelDeltaX || f.deltaX || 0,
          b = -f.wheelDeltaY || f.deltaY || 0;
      am &&
          (f.wheelDeltaX &&
              aE(f.wheelDeltaX, 120) &&
              (d = -120 * (f.wheelDeltaX / Math.abs(f.wheelDeltaX))),
              f.wheelDeltaY &&
              aE(f.wheelDeltaY, 120) &&
              (b = -120 * (f.wheelDeltaY / Math.abs(f.wheelDeltaY)))),
          d || b || (b = -f.wheelDelta || 0),
          1 === f.deltaMode && ((d *= 40), (b *= 40));
      var c = aI(g);
      return c ?
          aH(b) ?
          !0 :
          (Math.abs(d) > 1.2 && (d *= aD.stepSize / 120),
              Math.abs(b) > 1.2 && (b *= aD.stepSize / 120),
              aQ(c, d, b),
              f.preventDefault(),
              void aS()) :
          al && aj ?
          (Object.defineProperty(f, "target", {
                  value: window.frameElement
              }),
              parent.wheel(f)) :
          !0;
  }

  function a5(l) {
      var v = l.target,
          g =
          l.ctrlKey ||
          l.altKey ||
          l.metaKey ||
          (l.shiftKey && l.keyCode !== ap.spacebar);
      document.body.contains(ax) || (ax = document.activeElement);
      var b = /^(textarea|select|embed|object)$/i,
          q = /^(button|submit|radio|checkbox|file|color|image)$/i;
      if (
          l.defaultPrevented ||
          b.test(v.nodeName) ||
          (aX(v, "input") && !q.test(v.type)) ||
          aX(ax, "video") ||
          aY(l) ||
          v.isContentEditable ||
          g
      ) {
          return !0;
      }
      if (
          (aX(v, "button") || (aX(v, "input") && q.test(v.type))) &&
          l.keyCode === ap.spacebar
      ) {
          return !0;
      }
      if (aX(v, "input") && "radio" == v.type && ak[l.keyCode]) {
          return !0;
      }
      var j,
          p = 0,
          n = 0,
          x = aI(ax);
      if (!x) {
          return al && aj ? parent.keydown(l) : !0;
      }
      var k = x.clientHeight;
      switch ((x == document.body && (k = window.innerHeight), l.keyCode)) {
          case ap.up:
              n = -aD.arrowScroll;
              break;
          case ap.down:
              n = aD.arrowScroll;
              break;
          case ap.spacebar:
              (j = l.shiftKey ? 1 : -1), (n = -j * k * 0.9);
              break;
          case ap.pageup:
              n = 0.9 * -k;
              break;
          case ap.pagedown:
              n = 0.9 * k;
              break;
          case ap.home:
              n = -x.scrollTop;
              break;
          case ap.end:
              var h = x.scrollHeight - x.scrollTop,
                  u = h - k;
              n = u > 0 ? u + 10 : 0;
              break;
          case ap.left:
              p = -aD.arrowScroll;
              break;
          case ap.right:
              p = aD.arrowScroll;
              break;
          default:
              return !0;
      }
      aQ(x, p, n), l.preventDefault(), aS();
  }

  function aW(a) {
      ax = a.target;
  }

  function aS() {
      clearTimeout(aw),
          (aw = setInterval(function() {
              av = {};
          }, 1000));
  }

  function a3(b, a) {
      for (var c = b.length; c--;) {
          av[ae(b[c])] = a;
      }
      return a;
  }

  function aI(g) {
      var d = [],
          h = document.body,
          j = aA.scrollHeight;
      do {
          var f = av[ae(g)];
          if (f) {
              return a3(d, f);
          }
          if ((d.push(g), j === g.scrollHeight)) {
              var b = aK(aA) && aK(h),
                  c = b || a0(aA);
              if ((al && a2(aA)) || (!al && c)) {
                  return a3(d, af());
              }
          } else {
              if (a2(g) && a0(g)) {
                  return a3(d, g);
              }
          }
      } while ((g = g.parentElement));
  }

  function a2(a) {
      return a.clientHeight + 10 < a.scrollHeight;
  }

  function aK(b) {
      var a = getComputedStyle(b, "").getPropertyValue("overflow-y");
      return "hidden" !== a;
  }

  function a0(b) {
      var a = getComputedStyle(b, "").getPropertyValue("overflow-y");
      return "scroll" === a || "auto" === a;
  }

  function aR(b, a) {
      window.addEventListener(b, a, !1);
  }

  function aG(b, a) {
      window.removeEventListener(b, a, !1);
  }

  function aX(b, a) {
      return (b.nodeName || "").toLowerCase() === a.toLowerCase();
  }

  function aO(b, a) {
      (b = b > 0 ? 1 : -1),
      (a = a > 0 ? 1 : -1),
      (ac.x !== b || ac.y !== a) &&
      ((ac.x = b), (ac.y = a), (ai = []), (aM = 0));
  }

  function aH(a) {
      return a ?
          (az.length || (az = [a, a, a]),
              (a = Math.abs(a)),
              az.push(a),
              az.shift(),
              clearTimeout(ay),
              (ay = setTimeout(function() {
                  try {
                      localStorage.SS_deltaBuffer = az.join(",");
                  } catch (b) {}
              }, 1000)),
              !a4(120) && !a4(100)) :
          void 0;
  }

  function aE(b, a) {
      return Math.floor(b / a) == b / a;
  }

  function a4(a) {
      return aE(az[0], a) && aE(az[1], a) && aE(az[2], a);
  }

  function aY(b) {
      var a = b.target,
          c = !1;
      if (-1 != document.URL.indexOf("www.youtube.com/watch")) {
          do {
              if ((c = a.classList && a.classList.contains("html5-video-controls"))) {
                  break;
              }
          } while ((a = a.parentNode));
      }
      return c;
  }

  function ah(b) {
      var a, c, d;
      return (
          (b *= aD.pulseScale),
          1 > b ?
          (a = b - (1 - Math.exp(-b))) :
          ((c = Math.exp(-1)),
              (b -= 1),
              (d = 1 - Math.exp(-b)),
              (a = c + d * (1 - c))),
          a * aD.pulseNormalize
      );
  }

  function aF(a) {
      return a >= 1 ?
          1 :
          0 >= a ?
          0 :
          (1 == aD.pulseNormalize && (aD.pulseNormalize /= ah(1)), ah(a));
  }

  function aT(b) {
      for (var a in b) {
          at.hasOwnProperty(a) && (aD[a] = b[a]);
      }
  }
  var ax,
      an,
      ag,
      aw,
      ay,
      at = {
          frameRate: 150,
          animationTime: 400,
          stepSize: 100,
          pulseAlgorithm: !0,
          pulseScale: 4,
          pulseNormalize: 1,
          accelerationDelta: 50,
          accelerationMax: 3,
          keyboardSupport: !0,
          arrowScroll: 50,
          fixedBackground: !0,
          excluded: "",
      },
      aD = at,
      ao = !1,
      al = !1,
      ac = {
          x: 0,
          y: 0
      },
      ab = !1,
      aA = document.documentElement,
      az = [],
      am = /^Mac/.test(navigator.platform),
      ap = {
          left: 37,
          up: 38,
          right: 39,
          down: 40,
          spacebar: 32,
          pageup: 33,
          pagedown: 34,
          end: 35,
          home: 36,
      },
      ak = {
          37: 1,
          38: 1,
          39: 1,
          40: 1
      },
      ai = [],
      aV = !1,
      aM = Date.now(),
      ae = (function() {
          var a = 0;
          return function(b) {
              return b.uniqueID || (b.uniqueID = a++);
          };
      })(),
      av = {};
  if (window.localStorage && localStorage.SS_deltaBuffer) {
      try {
          az = localStorage.SS_deltaBuffer.split(",");
      } catch (ar) {}
  }
  var a6,
      ad = (function() {
          return (
              window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              function(b, a, c) {
                  window.setTimeout(b, c || 1000 / 60);
              }
          );
      })(),
      aC =
      window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver,
      af = (function() {
          var a;
          return function() {
              if (!a) {
                  var b = document.createElement("div");
                  (b.style.cssText = "height:10000px;width:1px;"),
                  document.body.appendChild(b);
                  var c = document.body.scrollTop;
                  document.documentElement.scrollTop;
                  window.scrollBy(0, 3),
                      (a =
                          document.body.scrollTop != c ?
                          document.body :
                          document.documentElement),
                      window.scrollBy(0, -3),
                      document.body.removeChild(b);
              }
              return a;
          };
      })(),
      au = window.navigator.userAgent,
      aq = /Edge/.test(au),
      aj = /chrome/i.test(au) && !aq,
      aa = /safari/i.test(au) && !aq,
      aN = /mobile/i.test(au),
      aZ = /windows NT 6.1/i.test(au) && /rv:11/i.test(au),
      aB = aa && (/Version\/8/i.test(au) || /Version\/9/i.test(au)),
      aU = (aj || aa || aZ) && !aN;
  "onwheel" in document.createElement("div") ?
      (a6 = "wheel") :
      "onmousewheel" in document.createElement("div") && (a6 = "mousewheel"),
      a6 && aU && (aR(a6, aL), aR("mousedown", aW), aR("load", aJ)),
      (aT.destroy = aP),
      window.SmoothScrollOptions && aT(window.SmoothScrollOptions),
      "function" == typeof define && define.amd ?
      define(function() {
          return aT;
      }) :
      "object" == typeof exports ?
      (module.exports = aT) :
      (window.SmoothScroll = aT);
})();
!(function(a) {
  "function" == typeof define && define.amd ?
      define(["jquery"], a) :
      "undefined" != typeof module && module.exports ?
      (module.exports = a(require("jquery"))) :
      a(jQuery);
})(function(d) {
  var h = -1,
      j = -1,
      b = function(a) {
          return parseFloat(a) || 0;
      },
      c = function(m) {
          var p = 1,
              a = d(m),
              q = null,
              l = [];
          return (
              a.each(function() {
                  var r = d(this),
                      n = r.offset().top - b(r.css("margin-top")),
                      o = l.length > 0 ? l[l.length - 1] : null;
                  null === o ?
                      l.push(r) :
                      Math.floor(Math.abs(q - n)) <= p ?
                      (l[l.length - 1] = o.add(r)) :
                      l.push(r),
                      (q = n);
              }),
              l
          );
      },
      k = function(a) {
          var i = {
              byRow: !0,
              property: "height",
              target: null,
              remove: !1
          };
          return "object" == typeof a ?
              d.extend(i, a) :
              ("boolean" == typeof a ?
                  (i.byRow = a) :
                  "remove" === a && (i.remove = !0),
                  i);
      },
      g = (d.fn.matchHeight = function(l) {
          var m = k(l);
          if (m.remove) {
              var i = this;
              return (
                  this.css(m.property, ""),
                  d.each(g._groups, function(a, n) {
                      n.elements = n.elements.not(i);
                  }),
                  this
              );
          }
          return this.length <= 1 && !m.target ?
              this :
              (g._groups.push({
                      elements: this,
                      options: m
                  }),
                  g._apply(this, m),
                  this);
      });
  (g.version = "master"),
  (g._groups = []),
  (g._throttle = 80),
  (g._maintainScroll = !1),
  (g._beforeUpdate = null),
  (g._afterUpdate = null),
  (g._rows = c),
  (g._parse = b),
  (g._parseOptions = k),
  (g._apply = function(q, t) {
      var m = k(t),
          i = d(q),
          a = [i],
          u = d(window).scrollTop(),
          n = d("html").outerHeight(!0),
          r = i.parents().filter(":hidden");
      return (
          r.each(function() {
              var l = d(this);
              l.data("style-cache", l.attr("style"));
          }),
          r.css("display", "block"),
          m.byRow &&
          !m.target &&
          (i.each(function() {
                  var l = d(this),
                      p = l.css("display");
                  "inline-block" !== p &&
                      "flex" !== p &&
                      "inline-flex" !== p &&
                      (p = "block"),
                      l.data("style-cache", l.attr("style")),
                      l.css({
                          display: p,
                          "padding-top": "0",
                          "padding-bottom": "0",
                          "margin-top": "0",
                          "margin-bottom": "0",
                          "border-top-width": "0",
                          "border-bottom-width": "0",
                          height: "100px",
                          overflow: "hidden",
                      });
              }),
              (a = c(i)),
              i.each(function() {
                  var l = d(this);
                  l.attr("style", l.data("style-cache") || "");
              })),
          d.each(a, function(p, s) {
              var l = d(s),
                  v = 0;
              if (m.target) {
                  v = m.target.outerHeight(!1);
              } else {
                  if (m.byRow && l.length <= 1) {
                      return void l.css(m.property, "");
                  }
                  l.each(function() {
                      var y = d(this),
                          z = y.attr("style"),
                          w = y.css("display");
                      "inline-block" !== w &&
                          "flex" !== w &&
                          "inline-flex" !== w &&
                          (w = "block");
                      var x = {
                          display: w
                      };
                      (x[m.property] = ""),
                      y.css(x),
                          y.outerHeight(!1) > v && (v = y.outerHeight(!1)),
                          z ? y.attr("style", z) : y.css("display", "");
                  });
              }
              l.each(function() {
                  var w = d(this),
                      x = 0;
                  (m.target && w.is(m.target)) ||
                  ("border-box" !== w.css("box-sizing") &&
                      ((x +=
                              b(w.css("border-top-width")) +
                              b(w.css("border-bottom-width"))),
                          (x += b(w.css("padding-top")) + b(w.css("padding-bottom")))),
                      w.css(m.property, v - x + "px"));
              });
          }),
          r.each(function() {
              var l = d(this);
              l.attr("style", l.data("style-cache") || null);
          }),
          g._maintainScroll &&
          d(window).scrollTop((u / n) * d("html").outerHeight(!0)),
          this
      );
  }),
  (g._applyDataApi = function() {
      var a = {};
      d("[data-match-height], [data-mh]").each(function() {
              var i = d(this),
                  e = i.attr("data-mh") || i.attr("data-match-height");
              a[e] = e in a ? a[e].add(i) : i;
          }),
          d.each(a, function() {
              this.matchHeight(!0);
          });
  });
  var f = function(a) {
      g._beforeUpdate && g._beforeUpdate(a, g._groups),
          d.each(g._groups, function() {
              g._apply(this.elements, this.options);
          }),
          g._afterUpdate && g._afterUpdate(a, g._groups);
  };
  (g._update = function(e, l) {
      if (l && "resize" === l.type) {
          var m = d(window).width();
          if (m === h) {
              return;
          }
          h = m;
      }
      e
          ?
          -1 === j &&
          (j = setTimeout(function() {
              f(l), (j = -1);
          }, g._throttle)) :
          f(l);
  }),
  d(g._applyDataApi),
      d(window).bind("load", function(a) {
          g._update(!1, a);
      }),
      d(window).bind("resize orientationchange", function(a) {
          g._update(!0, a);
      });
});
!(function(a) {
  var b = !0;
  (a.flexslider = function(D, A) {
      var j = a(D);
      j.vars = a.extend({}, a.flexslider.defaults, A);
      var w = j.vars.namespace,
          E =
          window.navigator &&
          window.navigator.msPointerEnabled &&
          window.MSGesture,
          e =
          ("ontouchstart" in window ||
              E ||
              (window.DocumentTouch && document instanceof DocumentTouch)) &&
          j.vars.touch,
          h = "click touchend MSPointerUp keyup",
          q = "",
          z,
          y = "vertical" === j.vars.direction,
          C = j.vars.reverse,
          B = j.vars.itemWidth > 0,
          g = "fade" === j.vars.animation,
          k = "" !== j.vars.asNavFor,
          x = {};
      a.data(D, "flexslider", j),
          (x = {
              init: function() {
                  (j.animating = !1),
                  (j.currentSlide = parseInt(
                      j.vars.startAt ? j.vars.startAt : 0,
                      10
                  )),
                  isNaN(j.currentSlide) && (j.currentSlide = 0),
                      (j.animatingTo = j.currentSlide),
                      (j.atEnd = 0 === j.currentSlide || j.currentSlide === j.last),
                      (j.containerSelector = j.vars.selector.substr(
                          0,
                          j.vars.selector.search(" ")
                      )),
                      (j.slides = a(j.vars.selector, j)),
                      (j.container = a(j.containerSelector, j)),
                      (j.count = j.slides.length),
                      (j.syncExists = a(j.vars.sync).length > 0),
                      "slide" === j.vars.animation && (j.vars.animation = "swing"),
                      (j.prop = y ? "top" : "marginLeft"),
                      (j.args = {}),
                      (j.manualPause = !1),
                      (j.stopped = !1),
                      (j.started = !1),
                      (j.startTimeout = null),
                      (j.transitions = !j.vars.video &&
                          !g &&
                          j.vars.useCSS &&
                          (function() {
                              var f = document.createElement("div"),
                                  d = [
                                      "perspectiveProperty",
                                      "WebkitPerspective",
                                      "MozPerspective",
                                      "OPerspective",
                                      "msPerspective",
                                  ];
                              for (var c in d) {
                                  if (void 0 !== f.style[d[c]]) {
                                      return (
                                          (j.pfx = d[c].replace("Perspective", "").toLowerCase()),
                                          (j.prop = "-" + j.pfx + "-transform"),
                                          !0
                                      );
                                  }
                              }
                              return !1;
                          })()),
                      (j.ensureAnimationEnd = ""),
                      "" !== j.vars.controlsContainer &&
                      (j.controlsContainer =
                          a(j.vars.controlsContainer).length > 0 &&
                          a(j.vars.controlsContainer)),
                      "" !== j.vars.manualControls &&
                      (j.manualControls =
                          a(j.vars.manualControls).length > 0 &&
                          a(j.vars.manualControls)),
                      "" !== j.vars.customDirectionNav &&
                      (j.customDirectionNav =
                          2 === a(j.vars.customDirectionNav).length &&
                          a(j.vars.customDirectionNav)),
                      j.vars.randomize &&
                      (j.slides.sort(function() {
                              return Math.round(Math.random()) - 0.5;
                          }),
                          j.container.empty().append(j.slides)),
                      j.doMath(),
                      j.setup("init"),
                      j.vars.controlNav && x.controlNav.setup(),
                      j.vars.directionNav && x.directionNav.setup(),
                      j.vars.keyboard &&
                      (1 === a(j.containerSelector).length ||
                          j.vars.multipleKeyboard) &&
                      a(document).bind("keyup", function(f) {
                          var d = f.keyCode;
                          if (!j.animating && (39 === d || 37 === d)) {
                              var c =
                                  39 === d ?
                                  j.getTarget("next") :
                                  37 === d ?
                                  j.getTarget("prev") :
                                  !1;
                              j.flexAnimate(c, j.vars.pauseOnAction);
                          }
                      }),
                      j.vars.mousewheel &&
                      j.bind("mousewheel", function(m, f, c, d) {
                          m.preventDefault();
                          var l = 0 > f ? j.getTarget("next") : j.getTarget("prev");
                          j.flexAnimate(l, j.vars.pauseOnAction);
                      }),
                      j.vars.pausePlay && x.pausePlay.setup(),
                      j.vars.slideshow &&
                      j.vars.pauseInvisible &&
                      x.pauseInvisible.init(),
                      j.vars.slideshow &&
                      (j.vars.pauseOnHover &&
                          j.hover(
                              function() {
                                  j.manualPlay || j.manualPause || j.pause();
                              },
                              function() {
                                  j.manualPause || j.manualPlay || j.stopped || j.play();
                              }
                          ),
                          (j.vars.pauseInvisible && x.pauseInvisible.isHidden()) ||
                          (j.vars.initDelay > 0 ?
                              (j.startTimeout = setTimeout(j.play, j.vars.initDelay)) :
                              j.play())),
                      k && x.asNav.setup(),
                      e && j.vars.touch && x.touch(),
                      (!g || (g && j.vars.smoothHeight)) &&
                      a(window).bind("resize orientationchange focus", x.resize),
                      j.find("img").attr("draggable", "false"),
                      setTimeout(function() {
                          j.vars.start(j);
                      }, 200);
              },
              asNav: {
                  setup: function() {
                      (j.asNav = !0),
                      (j.animatingTo = Math.floor(j.currentSlide / j.move)),
                      (j.currentItem = j.currentSlide),
                      j.slides
                          .removeClass(w + "active-slide")
                          .eq(j.currentItem)
                          .addClass(w + "active-slide"),
                          E ?
                          ((D._slider = j),
                              j.slides.each(function() {
                                  var c = this;
                                  (c._gesture = new MSGesture()),
                                  (c._gesture.target = c),
                                  c.addEventListener(
                                          "MSPointerDown",
                                          function(d) {
                                              d.preventDefault(),
                                                  d.currentTarget._gesture &&
                                                  d.currentTarget._gesture.addPointer(d.pointerId);
                                          },
                                          !1
                                      ),
                                      c.addEventListener("MSGestureTap", function(i) {
                                          i.preventDefault();
                                          var f = a(this),
                                              d = f.index();
                                          a(j.vars.asNavFor).data("flexslider").animating ||
                                              f.hasClass("active") ||
                                              ((j.direction = j.currentItem < d ? "next" : "prev"),
                                                  j.flexAnimate(d, j.vars.pauseOnAction, !1, !0, !0));
                                      });
                              })) :
                          j.slides.on(h, function(i) {
                              i.preventDefault();
                              var d = a(this),
                                  c = d.index(),
                                  f = d.offset().left - a(j).scrollLeft();
                              0 >= f && d.hasClass(w + "active-slide") ?
                                  j.flexAnimate(j.getTarget("prev"), !0) :
                                  a(j.vars.asNavFor).data("flexslider").animating ||
                                  d.hasClass(w + "active-slide") ||
                                  ((j.direction = j.currentItem < c ? "next" : "prev"),
                                      j.flexAnimate(c, j.vars.pauseOnAction, !1, !0, !0));
                          });
                  },
              },
              controlNav: {
                  setup: function() {
                      j.manualControls ?
                          x.controlNav.setupManual() :
                          x.controlNav.setupPaging();
                  },
                  setupPaging: function() {
                      var m =
                          "thumbnails" === j.vars.controlNav ?
                          "control-thumbs" :
                          "control-paging",
                          f = 1,
                          d,
                          i;
                      if (
                          ((j.controlNavScaffold = a(
                                  '<ol class="' + w + "control-nav " + w + m + '"></ol>'
                              )),
                              j.pagingCount > 1)
                      ) {
                          for (var l = 0; l < j.pagingCount; l++) {
                              if (
                                  ((i = j.slides.eq(l)),
                                      void 0 === i.attr("data-thumb-alt") &&
                                      i.attr("data-thumb-alt", ""),
                                      (altText =
                                          "" !== i.attr("data-thumb-alt") ?
                                          (altText = ' alt="' + i.attr("data-thumb-alt") + '"') :
                                          ""),
                                      (d =
                                          "thumbnails" === j.vars.controlNav ?
                                          '<img src="' +
                                          i.attr("data-thumb") +
                                          '"' +
                                          altText +
                                          "/>" :
                                          '<a href="#">' + f + "</a>"),
                                      "thumbnails" === j.vars.controlNav &&
                                      !0 === j.vars.thumbCaptions)
                              ) {
                                  var n = i.attr("data-thumbcaption");
                                  "" !== n &&
                                      void 0 !== n &&
                                      (d += '<span class="' + w + 'caption">' + n + "</span>");
                              }
                              j.controlNavScaffold.append("<li>" + d + "</li>"), f++;
                          }
                      }
                      j.controlsContainer ?
                          a(j.controlsContainer).append(j.controlNavScaffold) :
                          j.append(j.controlNavScaffold),
                          x.controlNav.set(),
                          x.controlNav.active(),
                          j.controlNavScaffold.delegate("a, img", h, function(p) {
                              if ((p.preventDefault(), "" === q || q === p.type)) {
                                  var o = a(this),
                                      c = j.controlNav.index(o);
                                  o.hasClass(w + "active") ||
                                      ((j.direction = c > j.currentSlide ? "next" : "prev"),
                                          j.flexAnimate(c, j.vars.pauseOnAction));
                              }
                              "" === q && (q = p.type), x.setToClearWatchedEvent();
                          });
                  },
                  setupManual: function() {
                      (j.controlNav = j.manualControls),
                      x.controlNav.active(),
                          j.controlNav.bind(h, function(f) {
                              if ((f.preventDefault(), "" === q || q === f.type)) {
                                  var d = a(this),
                                      c = j.controlNav.index(d);
                                  d.hasClass(w + "active") ||
                                      (c > j.currentSlide ?
                                          (j.direction = "next") :
                                          (j.direction = "prev"),
                                          j.flexAnimate(c, j.vars.pauseOnAction));
                              }
                              "" === q && (q = f.type), x.setToClearWatchedEvent();
                          });
                  },
                  set: function() {
                      var c = "thumbnails" === j.vars.controlNav ? "img" : "a";
                      j.controlNav = a(
                          "." + w + "control-nav li " + c,
                          j.controlsContainer ? j.controlsContainer : j
                      );
                  },
                  active: function() {
                      j.controlNav
                          .removeClass(w + "active")
                          .eq(j.animatingTo)
                          .addClass(w + "active");
                  },
                  update: function(d, c) {
                      j.pagingCount > 1 && "add" === d ?
                          j.controlNavScaffold.append(
                              a('<li><a href="#">' + j.count + "</a></li>")
                          ) :
                          1 === j.pagingCount ?
                          j.controlNavScaffold.find("li").remove() :
                          j.controlNav.eq(c).closest("li").remove(),
                          x.controlNav.set(),
                          j.pagingCount > 1 && j.pagingCount !== j.controlNav.length ?
                          j.update(c, d) :
                          x.controlNav.active();
                  },
              },
              directionNav: {
                  setup: function() {
                      var c = a(
                          '<ul class="' +
                          w +
                          'direction-nav"><li class="' +
                          w +
                          'nav-prev"><a class="' +
                          w +
                          'prev" href="#">' +
                          j.vars.prevText +
                          '</a></li><li class="' +
                          w +
                          'nav-next"><a class="' +
                          w +
                          'next" href="#">' +
                          j.vars.nextText +
                          "</a></li></ul>"
                      );
                      j.customDirectionNav ?
                          (j.directionNav = j.customDirectionNav) :
                          j.controlsContainer ?
                          (a(j.controlsContainer).append(c),
                              (j.directionNav = a(
                                  "." + w + "direction-nav li a",
                                  j.controlsContainer
                              ))) :
                          (j.append(c),
                              (j.directionNav = a("." + w + "direction-nav li a", j))),
                          x.directionNav.update(),
                          j.directionNav.bind(h, function(f) {
                              f.preventDefault();
                              var d;
                              ("" === q || q === f.type) &&
                              ((d = a(this).hasClass(w + "next") ?
                                      j.getTarget("next") :
                                      j.getTarget("prev")),
                                  j.flexAnimate(d, j.vars.pauseOnAction)),
                              "" === q && (q = f.type),
                                  x.setToClearWatchedEvent();
                          });
                  },
                  update: function() {
                      var c = w + "disabled";
                      1 === j.pagingCount ?
                          j.directionNav.addClass(c).attr("tabindex", "-1") :
                          j.vars.animationLoop ?
                          j.directionNav.removeClass(c).removeAttr("tabindex") :
                          0 === j.animatingTo ?
                          j.directionNav
                          .removeClass(c)
                          .filter("." + w + "prev")
                          .addClass(c)
                          .attr("tabindex", "-1") :
                          j.animatingTo === j.last ?
                          j.directionNav
                          .removeClass(c)
                          .filter("." + w + "next")
                          .addClass(c)
                          .attr("tabindex", "-1") :
                          j.directionNav.removeClass(c).removeAttr("tabindex");
                  },
              },
              pausePlay: {
                  setup: function() {
                      var c = a('<div class="' + w + 'pauseplay"><a href="#"></a></div>');
                      j.controlsContainer ?
                          (j.controlsContainer.append(c),
                              (j.pausePlay = a("." + w + "pauseplay a", j.controlsContainer))) :
                          (j.append(c), (j.pausePlay = a("." + w + "pauseplay a", j))),
                          x.pausePlay.update(j.vars.slideshow ? w + "pause" : w + "play"),
                          j.pausePlay.bind(h, function(d) {
                              d.preventDefault(),
                                  ("" === q || q === d.type) &&
                                  (a(this).hasClass(w + "pause") ?
                                      ((j.manualPause = !0), (j.manualPlay = !1), j.pause()) :
                                      ((j.manualPause = !1), (j.manualPlay = !0), j.play())),
                                  "" === q && (q = d.type),
                                  x.setToClearWatchedEvent();
                          });
                  },
                  update: function(c) {
                      "play" === c
                          ?
                          j.pausePlay
                          .removeClass(w + "pause")
                          .addClass(w + "play")
                          .html(j.vars.playText) :
                          j.pausePlay
                          .removeClass(w + "play")
                          .addClass(w + "pause")
                          .html(j.vars.pauseText);
                  },
              },
              touch: function() {
                  function I(c) {
                      c.stopPropagation(),
                          j.animating ?
                          c.preventDefault() :
                          (j.pause(),
                              D._gesture.addPointer(c.pointerId),
                              (t = 0),
                              (J = y ? j.h : j.w),
                              (H = Number(new Date())),
                              (s =
                                  B && C && j.animatingTo === j.last ?
                                  0 :
                                  B && C ?
                                  j.limit -
                                  (j.itemW + j.vars.itemMargin) * j.move * j.animatingTo :
                                  B && j.currentSlide === j.last ?
                                  j.limit :
                                  B ?
                                  (j.itemW + j.vars.itemMargin) * j.move * j.currentSlide :
                                  C ?
                                  (j.last - j.currentSlide + j.cloneOffset) * J :
                                  (j.currentSlide + j.cloneOffset) * J));
                  }

                  function N(l) {
                      l.stopPropagation();
                      var c = l.target._slider;
                      if (c) {
                          var m = -l.translationX,
                              f = -l.translationY;
                          return (
                              (t += y ? f : m),
                              (p = t),
                              (M = y ?
                                  Math.abs(t) < Math.abs(-m) :
                                  Math.abs(t) < Math.abs(-f)),
                              l.detail === l.MSGESTURE_FLAG_INERTIA ?
                              void setImmediate(function() {
                                  D._gesture.stop();
                              }) :
                              void(
                                  (!M || Number(new Date()) - H > 500) &&
                                  (l.preventDefault(),
                                      !g &&
                                      c.transitions &&
                                      (c.vars.animationLoop ||
                                          (p =
                                              t /
                                              ((0 === c.currentSlide && 0 > t) ||
                                                  (c.currentSlide === c.last && t > 0) ?
                                                  Math.abs(t) / J + 2 :
                                                  1)),
                                          c.setProps(s + p, "setTouch")))
                              )
                          );
                      }
                  }

                  function v(i) {
                      i.stopPropagation();
                      var f = i.target._slider;
                      if (f) {
                          if (f.animatingTo === f.currentSlide && !M && null !== p) {
                              var c = C ? -p : p,
                                  l = c > 0 ? f.getTarget("next") : f.getTarget("prev");
                              f.canAdvance(l) &&
                                  ((Number(new Date()) - H < 550 && Math.abs(c) > 50) ||
                                      Math.abs(c) > J / 2) ?
                                  f.flexAnimate(l, f.vars.pauseOnAction) :
                                  g ||
                                  f.flexAnimate(f.currentSlide, f.vars.pauseOnAction, !0);
                          }
                          (d = null), (n = null), (p = null), (s = null), (t = 0);
                      }
                  }
                  var d,
                      n,
                      s,
                      J,
                      p,
                      H,
                      G,
                      F,
                      u,
                      M = !1,
                      L = 0,
                      K = 0,
                      t = 0;
                  E
                      ?
                      ((D.style.msTouchAction = "none"),
                          (D._gesture = new MSGesture()),
                          (D._gesture.target = D),
                          D.addEventListener("MSPointerDown", I, !1),
                          (D._slider = j),
                          D.addEventListener("MSGestureChange", N, !1),
                          D.addEventListener("MSGestureEnd", v, !1)) :
                      ((G = function(c) {
                              j.animating ?
                                  c.preventDefault() :
                                  (window.navigator.msPointerEnabled ||
                                      1 === c.touches.length) &&
                                  (j.pause(),
                                      (J = y ? j.h : j.w),
                                      (H = Number(new Date())),
                                      (L = c.touches[0].pageX),
                                      (K = c.touches[0].pageY),
                                      (s =
                                          B && C && j.animatingTo === j.last ?
                                          0 :
                                          B && C ?
                                          j.limit -
                                          (j.itemW + j.vars.itemMargin) * j.move * j.animatingTo :
                                          B && j.currentSlide === j.last ?
                                          j.limit :
                                          B ?
                                          (j.itemW + j.vars.itemMargin) *
                                          j.move *
                                          j.currentSlide :
                                          C ?
                                          (j.last - j.currentSlide + j.cloneOffset) * J :
                                          (j.currentSlide + j.cloneOffset) * J),
                                      (d = y ? K : L),
                                      (n = y ? L : K),
                                      D.addEventListener("touchmove", F, !1),
                                      D.addEventListener("touchend", u, !1));
                          }),
                          (F = function(f) {
                              (L = f.touches[0].pageX),
                              (K = f.touches[0].pageY),
                              (p = y ? d - K : d - L),
                              (M = y ?
                                  Math.abs(p) < Math.abs(L - n) :
                                  Math.abs(p) < Math.abs(K - n));
                              var c = 500;
                              (!M || Number(new Date()) - H > c) &&
                              (f.preventDefault(),
                                  !g &&
                                  j.transitions &&
                                  (j.vars.animationLoop ||
                                      (p /=
                                          (0 === j.currentSlide && 0 > p) ||
                                          (j.currentSlide === j.last && p > 0) ?
                                          Math.abs(p) / J + 2 :
                                          1),
                                      j.setProps(s + p, "setTouch")));
                          }),
                          (u = function(l) {
                              if (
                                  (D.removeEventListener("touchmove", F, !1),
                                      j.animatingTo === j.currentSlide && !M && null !== p)
                              ) {
                                  var c = C ? -p : p,
                                      f = c > 0 ? j.getTarget("next") : j.getTarget("prev");
                                  j.canAdvance(f) &&
                                      ((Number(new Date()) - H < 550 && Math.abs(c) > 50) ||
                                          Math.abs(c) > J / 2) ?
                                      j.flexAnimate(f, j.vars.pauseOnAction) :
                                      g ||
                                      j.flexAnimate(j.currentSlide, j.vars.pauseOnAction, !0);
                              }
                              D.removeEventListener("touchend", u, !1),
                                  (d = null),
                                  (n = null),
                                  (p = null),
                                  (s = null);
                          }),
                          D.addEventListener("touchstart", G, !1));
              },
              resize: function() {
                  !j.animating &&
                      j.is(":visible") &&
                      (B || j.doMath(),
                          g ?
                          x.smoothHeight() :
                          B ?
                          (j.slides.width(j.computedW),
                              j.update(j.pagingCount),
                              j.setProps()) :
                          y ?
                          (j.viewport.height(j.h), j.setProps(j.h, "setTotal")) :
                          (j.vars.smoothHeight && x.smoothHeight(),
                              j.newSlides.width(j.computedW),
                              j.setProps(j.computedW, "setTotal")));
              },
              smoothHeight: function(d) {
                  if (!y || g) {
                      var c = g ? j : j.viewport;
                      d
                          ?
                          c.animate({
                              height: j.slides.eq(j.animatingTo).height()
                          }, d) :
                          c.height(j.slides.eq(j.animatingTo).height());
                  }
              },
              sync: function(f) {
                  var d = a(j.vars.sync).data("flexslider"),
                      c = j.animatingTo;
                  switch (f) {
                      case "animate":
                          d.flexAnimate(c, j.vars.pauseOnAction, !1, !0);
                          break;
                      case "play":
                          d.playing || d.asNav || d.play();
                          break;
                      case "pause":
                          d.pause();
                  }
              },
              uniqueID: function(c) {
                  return (
                      c
                      .filter("[id]")
                      .add(c.find("[id]"))
                      .each(function() {
                          var d = a(this);
                          d.attr("id", d.attr("id") + "_clone");
                      }),
                      c
                  );
              },
              pauseInvisible: {
                  visProp: null,
                  init: function() {
                      var d = x.pauseInvisible.getHiddenProp();
                      if (d) {
                          var c = d.replace(/[H|h]idden/, "") + "visibilitychange";
                          document.addEventListener(c, function() {
                              x.pauseInvisible.isHidden() ?
                                  j.startTimeout ?
                                  clearTimeout(j.startTimeout) :
                                  j.pause() :
                                  j.started ?
                                  j.play() :
                                  j.vars.initDelay > 0 ?
                                  setTimeout(j.play, j.vars.initDelay) :
                                  j.play();
                          });
                      }
                  },
                  isHidden: function() {
                      var c = x.pauseInvisible.getHiddenProp();
                      return c ? document[c] : !1;
                  },
                  getHiddenProp: function() {
                      var d = ["webkit", "moz", "ms", "o"];
                      if ("hidden" in document) {
                          return "hidden";
                      }
                      for (var c = 0; c < d.length; c++) {
                          if (d[c] + "Hidden" in document) {
                              return d[c] + "Hidden";
                          }
                      }
                      return null;
                  },
              },
              setToClearWatchedEvent: function() {
                  clearTimeout(z),
                      (z = setTimeout(function() {
                          q = "";
                      }, 3000));
              },
          }),
          (j.flexAnimate = function(p, v, u, F, d) {
              if (
                  (j.vars.animationLoop ||
                      p === j.currentSlide ||
                      (j.direction = p > j.currentSlide ? "next" : "prev"),
                      k &&
                      1 === j.pagingCount &&
                      (j.direction = j.currentItem < p ? "next" : "prev"),
                      !j.animating && (j.canAdvance(p, d) || u) && j.is(":visible"))
              ) {
                  if (k && F) {
                      var f = a(j.vars.asNavFor).data("flexslider");
                      if (
                          ((j.atEnd = 0 === p || p === j.count - 1),
                              f.flexAnimate(p, !0, !1, !0, d),
                              (j.direction = j.currentItem < p ? "next" : "prev"),
                              (f.direction = j.direction),
                              Math.ceil((p + 1) / j.visible) - 1 === j.currentSlide || 0 === p)
                      ) {
                          return (
                              (j.currentItem = p),
                              j.slides
                              .removeClass(w + "active-slide")
                              .eq(p)
                              .addClass(w + "active-slide"),
                              !1
                          );
                      }
                      (j.currentItem = p),
                      j.slides
                          .removeClass(w + "active-slide")
                          .eq(p)
                          .addClass(w + "active-slide"),
                          (p = Math.floor(p / j.visible));
                  }
                  if (
                      ((j.animating = !0),
                          (j.animatingTo = p),
                          v && j.pause(),
                          j.vars.before(j),
                          j.syncExists && !d && x.sync("animate"),
                          j.vars.controlNav && x.controlNav.active(),
                          B ||
                          j.slides
                          .removeClass(w + "active-slide")
                          .eq(p)
                          .addClass(w + "active-slide"),
                          (j.atEnd = 0 === p || p === j.last),
                          j.vars.directionNav && x.directionNav.update(),
                          p === j.last && (j.vars.end(j), j.vars.animationLoop || j.pause()),
                          g)
                  ) {
                      e
                          ?
                          (j.slides.eq(j.currentSlide).css({
                                  opacity: 0,
                                  zIndex: 1
                              }),
                              j.slides.eq(p).css({
                                  opacity: 1,
                                  zIndex: 2
                              }),
                              j.wrapup(r)) :
                          (j.slides
                              .eq(j.currentSlide)
                              .css({
                                  zIndex: 1
                              })
                              .animate({
                                      opacity: 0
                                  },
                                  j.vars.animationSpeed,
                                  j.vars.easing
                              ),
                              j.slides
                              .eq(p)
                              .css({
                                  zIndex: 2
                              })
                              .animate({
                                      opacity: 1
                                  },
                                  j.vars.animationSpeed,
                                  j.vars.easing,
                                  j.wrapup
                              ));
                  } else {
                      var r = y ? j.slides.filter(":first").height() : j.computedW,
                          n,
                          m,
                          i;
                      B
                          ?
                          ((n = j.vars.itemMargin),
                              (i = (j.itemW + n) * j.move * j.animatingTo),
                              (m = i > j.limit && 1 !== j.visible ? j.limit : i)) :
                          (m =
                              0 === j.currentSlide &&
                              p === j.count - 1 &&
                              j.vars.animationLoop &&
                              "next" !== j.direction ?
                              C ?
                              (j.count + j.cloneOffset) * r :
                              0 :
                              j.currentSlide === j.last &&
                              0 === p &&
                              j.vars.animationLoop &&
                              "prev" !== j.direction ?
                              C ?
                              0 :
                              (j.count + 1) * r :
                              C ?
                              (j.count - 1 - p + j.cloneOffset) * r :
                              (p + j.cloneOffset) * r),
                          j.setProps(m, "", j.vars.animationSpeed),
                          j.transitions ?
                          ((j.vars.animationLoop && j.atEnd) ||
                              ((j.animating = !1), (j.currentSlide = j.animatingTo)),
                              j.container.unbind("webkitTransitionEnd transitionend"),
                              j.container.bind(
                                  "webkitTransitionEnd transitionend",
                                  function() {
                                      clearTimeout(j.ensureAnimationEnd), j.wrapup(r);
                                  }
                              ),
                              clearTimeout(j.ensureAnimationEnd),
                              (j.ensureAnimationEnd = setTimeout(function() {
                                  j.wrapup(r);
                              }, j.vars.animationSpeed + 100))) :
                          j.container.animate(
                              j.args,
                              j.vars.animationSpeed,
                              j.vars.easing,
                              function() {
                                  j.wrapup(r);
                              }
                          );
                  }
                  j.vars.smoothHeight && x.smoothHeight(j.vars.animationSpeed);
              }
          }),
          (j.wrapup = function(c) {
              g ||
                  B ||
                  (0 === j.currentSlide &&
                      j.animatingTo === j.last &&
                      j.vars.animationLoop ?
                      j.setProps(c, "jumpEnd") :
                      j.currentSlide === j.last &&
                      0 === j.animatingTo &&
                      j.vars.animationLoop &&
                      j.setProps(c, "jumpStart")),
                  (j.animating = !1),
                  (j.currentSlide = j.animatingTo),
                  j.vars.after(j);
          }),
          (j.animateSlides = function() {
              !j.animating && b && j.flexAnimate(j.getTarget("next"));
          }),
          (j.pause = function() {
              clearInterval(j.animatedSlides),
                  (j.animatedSlides = null),
                  (j.playing = !1),
                  j.vars.pausePlay && x.pausePlay.update("play"),
                  j.syncExists && x.sync("pause");
          }),
          (j.play = function() {
              j.playing && clearInterval(j.animatedSlides),
                  (j.animatedSlides =
                      j.animatedSlides ||
                      setInterval(j.animateSlides, j.vars.slideshowSpeed)),
                  (j.started = j.playing = !0),
                  j.vars.pausePlay && x.pausePlay.update("pause"),
                  j.syncExists && x.sync("play");
          }),
          (j.stop = function() {
              j.pause(), (j.stopped = !0);
          }),
          (j.canAdvance = function(f, d) {
              var c = k ? j.pagingCount - 1 : j.last;
              return d ?
                  !0 :
                  k &&
                  j.currentItem === j.count - 1 &&
                  0 === f &&
                  "prev" === j.direction ?
                  !0 :
                  k &&
                  0 === j.currentItem &&
                  f === j.pagingCount - 1 &&
                  "next" !== j.direction ?
                  !1 :
                  f !== j.currentSlide || k ?
                  j.vars.animationLoop ?
                  !0 :
                  j.atEnd &&
                  0 === j.currentSlide &&
                  f === c &&
                  "next" !== j.direction ?
                  !1 :
                  j.atEnd &&
                  j.currentSlide === c &&
                  0 === f &&
                  "next" === j.direction ?
                  !1 :
                  !0 :
                  !1;
          }),
          (j.getTarget = function(c) {
              return (
                  (j.direction = c),
                  "next" === c ?
                  j.currentSlide === j.last ?
                  0 :
                  j.currentSlide + 1 :
                  0 === j.currentSlide ?
                  j.last :
                  j.currentSlide - 1
              );
          }),
          (j.setProps = function(l, f, c) {
              var d = (function() {
                  var m = l ?
                      l :
                      (j.itemW + j.vars.itemMargin) * j.move * j.animatingTo,
                      n = (function() {
                          if (B) {
                              return "setTouch" === f ?
                                  l :
                                  C && j.animatingTo === j.last ?
                                  0 :
                                  C ?
                                  j.limit -
                                  (j.itemW + j.vars.itemMargin) * j.move * j.animatingTo :
                                  j.animatingTo === j.last ?
                                  j.limit :
                                  m;
                          }
                          switch (f) {
                              case "setTotal":
                                  return C ?
                                      (j.count - 1 - j.currentSlide + j.cloneOffset) * l :
                                      (j.currentSlide + j.cloneOffset) * l;
                              case "setTouch":
                                  return C ? l : l;
                              case "jumpEnd":
                                  return C ? l : j.count * l;
                              case "jumpStart":
                                  return C ? j.count * l : l;
                              default:
                                  return l;
                          }
                      })();
                  return -1 * n + "px";
              })();
              j.transitions &&
                  ((d = y ?
                          "translate3d(0," + d + ",0)" :
                          "translate3d(" + d + ",0,0)"),
                      (c = void 0 !== c ? c / 1000 + "s" : "0s"),
                      j.container.css("-" + j.pfx + "-transition-duration", c),
                      j.container.css("transition-duration", c)),
                  (j.args[j.prop] = d),
                  (j.transitions || void 0 === c) && j.container.css(j.args),
                  j.container.css("transform", d);
          }),
          (j.setup = function(f) {
              if (g) {
                  j.slides.css({
                          width: "100%",
                          float: "left",
                          marginRight: "-100%",
                          position: "relative",
                      }),
                      "init" === f &&
                      (e ?
                          j.slides
                          .css({
                              opacity: 0,
                              display: "block",
                              webkitTransition: "opacity " + j.vars.animationSpeed / 1000 + "s ease",
                              zIndex: 1,
                          })
                          .eq(j.currentSlide)
                          .css({
                              opacity: 1,
                              zIndex: 2
                          }) :
                          0 == j.vars.fadeFirstSlide ?
                          j.slides
                          .css({
                              opacity: 0,
                              display: "block",
                              zIndex: 1
                          })
                          .eq(j.currentSlide)
                          .css({
                              zIndex: 2
                          })
                          .css({
                              opacity: 1
                          }) :
                          j.slides
                          .css({
                              opacity: 0,
                              display: "block",
                              zIndex: 1
                          })
                          .eq(j.currentSlide)
                          .css({
                              zIndex: 2
                          })
                          .animate({
                                  opacity: 1
                              },
                              j.vars.animationSpeed,
                              j.vars.easing
                          )),
                      j.vars.smoothHeight && x.smoothHeight();
              } else {
                  var d, c;
                  "init" === f &&
                      ((j.viewport = a('<div class="' + w + 'viewport"></div>')
                              .css({
                                  overflow: "hidden",
                                  position: "relative"
                              })
                              .appendTo(j)
                              .append(j.container)),
                          (j.cloneCount = 0),
                          (j.cloneOffset = 0),
                          C &&
                          ((c = a.makeArray(j.slides).reverse()),
                              (j.slides = a(c)),
                              j.container.empty().append(j.slides))),
                      j.vars.animationLoop &&
                      !B &&
                      ((j.cloneCount = 2),
                          (j.cloneOffset = 1),
                          "init" !== f && j.container.find(".clone").remove(),
                          j.container
                          .append(
                              x
                              .uniqueID(j.slides.first().clone().addClass("clone"))
                              .attr("aria-hidden", "true")
                          )
                          .prepend(
                              x
                              .uniqueID(j.slides.last().clone().addClass("clone"))
                              .attr("aria-hidden", "true")
                          )),
                      (j.newSlides = a(j.vars.selector, j)),
                      (d = C ?
                          j.count - 1 - j.currentSlide + j.cloneOffset :
                          j.currentSlide + j.cloneOffset),
                      y && !B ?
                      (j.container
                          .height(200 * (j.count + j.cloneCount) + "%")
                          .css("position", "absolute")
                          .width("100%"),
                          setTimeout(
                              function() {
                                  j.newSlides.css({
                                          display: "block"
                                      }),
                                      j.doMath(),
                                      j.viewport.height(j.h),
                                      j.setProps(d * j.h, "init");
                              },
                              "init" === f ? 100 : 0
                          )) :
                      (j.container.width(200 * (j.count + j.cloneCount) + "%"),
                          j.setProps(d * j.computedW, "init"),
                          setTimeout(
                              function() {
                                  j.doMath(),
                                      j.newSlides.css({
                                          width: j.computedW,
                                          marginRight: j.computedM,
                                          float: "left",
                                          display: "block",
                                      }),
                                      j.vars.smoothHeight && x.smoothHeight();
                              },
                              "init" === f ? 100 : 0
                          ));
              }
              B ||
                  j.slides
                  .removeClass(w + "active-slide")
                  .eq(j.currentSlide)
                  .addClass(w + "active-slide"),
                  j.vars.init(j);
          }),
          (j.doMath = function() {
              var l = j.slides.first(),
                  f = j.vars.itemMargin,
                  c = j.vars.minItems,
                  d = j.vars.maxItems;
              (j.w = void 0 === j.viewport ? j.width() : j.viewport.width()),
              (j.h = l.height()),
              (j.boxPadding = l.outerWidth() - l.width()),
              B
                  ?
                  ((j.itemT = j.vars.itemWidth + f),
                      (j.itemM = f),
                      (j.minW = c ? c * j.itemT : j.w),
                      (j.maxW = d ? d * j.itemT - f : j.w),
                      (j.itemW =
                          j.minW > j.w ?
                          (j.w - f * (c - 1)) / c :
                          j.maxW < j.w ?
                          (j.w - f * (d - 1)) / d :
                          j.vars.itemWidth > j.w ?
                          j.w :
                          j.vars.itemWidth),
                      (j.visible = Math.floor(j.w / j.itemW)),
                      (j.move =
                          j.vars.move > 0 && j.vars.move < j.visible ?
                          j.vars.move :
                          j.visible),
                      (j.pagingCount = Math.ceil((j.count - j.visible) / j.move + 1)),
                      (j.last = j.pagingCount - 1),
                      (j.limit =
                          1 === j.pagingCount ?
                          0 :
                          j.vars.itemWidth > j.w ?
                          j.itemW * (j.count - 1) + f * (j.count - 1) :
                          (j.itemW + f) * j.count - j.w - f)) :
                  ((j.itemW = j.w),
                      (j.itemM = f),
                      (j.pagingCount = j.count),
                      (j.last = j.count - 1)),
                  (j.computedW = j.itemW - j.boxPadding),
                  (j.computedM = j.itemM);
          }),
          (j.update = function(d, c) {
              j.doMath(),
                  B ||
                  (d < j.currentSlide ?
                      (j.currentSlide += 1) :
                      d <= j.currentSlide && 0 !== d && (j.currentSlide -= 1),
                      (j.animatingTo = j.currentSlide)),
                  j.vars.controlNav &&
                  !j.manualControls &&
                  (("add" === c && !B) || j.pagingCount > j.controlNav.length ?
                      x.controlNav.update("add") :
                      (("remove" === c && !B) ||
                          j.pagingCount < j.controlNav.length) &&
                      (B &&
                          j.currentSlide > j.last &&
                          ((j.currentSlide -= 1), (j.animatingTo -= 1)),
                          x.controlNav.update("remove", j.last))),
                  j.vars.directionNav && x.directionNav.update();
          }),
          (j.addSlide = function(f, d) {
              var c = a(f);
              (j.count += 1),
              (j.last = j.count - 1),
              y && C ?
                  void 0 !== d ?
                  j.slides.eq(j.count - d).after(c) :
                  j.container.prepend(c) :
                  void 0 !== d ?
                  j.slides.eq(d).before(c) :
                  j.container.append(c),
                  j.update(d, "add"),
                  (j.slides = a(j.vars.selector + ":not(.clone)", j)),
                  j.setup(),
                  j.vars.added(j);
          }),
          (j.removeSlide = function(d) {
              var c = isNaN(d) ? j.slides.index(a(d)) : d;
              (j.count -= 1),
              (j.last = j.count - 1),
              isNaN(d) ?
                  a(d, j.slides).remove() :
                  y && C ?
                  j.slides.eq(j.last).remove() :
                  j.slides.eq(d).remove(),
                  j.doMath(),
                  j.update(c, "remove"),
                  (j.slides = a(j.vars.selector + ":not(.clone)", j)),
                  j.setup(),
                  j.vars.removed(j);
          }),
          x.init();
  }),
  a(window)
      .blur(function(c) {
          b = !1;
      })
      .focus(function(c) {
          b = !0;
      }),
      (a.flexslider.defaults = {
          namespace: "flex-",
          selector: ".slides > li",
          animation: "fade",
          easing: "swing",
          direction: "horizontal",
          reverse: !1,
          animationLoop: !0,
          smoothHeight: !1,
          startAt: 0,
          slideshow: !0,
          slideshowSpeed: 7000,
          animationSpeed: 600,
          initDelay: 0,
          randomize: !1,
          fadeFirstSlide: !0,
          thumbCaptions: !1,
          pauseOnAction: !0,
          pauseOnHover: !1,
          pauseInvisible: !0,
          useCSS: !0,
          touch: !0,
          video: !1,
          controlNav: !0,
          directionNav: !0,
          prevText: "Previous",
          nextText: "Next",
          keyboard: !0,
          multipleKeyboard: !1,
          mousewheel: !1,
          pausePlay: !1,
          pauseText: "Pause",
          playText: "Play",
          controlsContainer: "",
          manualControls: "",
          customDirectionNav: "",
          sync: "",
          asNavFor: "",
          itemWidth: 0,
          itemMargin: 0,
          minItems: 1,
          maxItems: 0,
          move: 0,
          allowOneSlide: !0,
          start: function() {},
          before: function() {},
          after: function() {},
          end: function() {},
          added: function() {},
          removed: function() {},
          init: function() {},
      }),
      (a.fn.flexslider = function(d) {
          if ((void 0 === d && (d = {}), "object" == typeof d)) {
              return this.each(function() {
                  var f = a(this),
                      e = d.selector ? d.selector : ".slides > li",
                      g = f.find(e);
                  (1 === g.length && d.allowOneSlide === !0) || 0 === g.length ?
                      (g.fadeIn(400), d.start && d.start(f)) :
                      void 0 === f.data("flexslider") && new a.flexslider(this, d);
              });
          }
          var c = a(this).data("flexslider");
          switch (d) {
              case "play":
                  c.play();
                  break;
              case "pause":
                  c.pause();
                  break;
              case "stop":
                  c.stop();
                  break;
              case "next":
                  c.flexAnimate(c.getTarget("next"), !0);
                  break;
              case "prev":
              case "previous":
                  c.flexAnimate(c.getTarget("prev"), !0);
                  break;
              default:
                  "number" == typeof d && c.flexAnimate(d, !0);
          }
      });
})(jQuery);
/*! WOW - v1.1.2 - 2015-08-19
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */
(function() {
  var i,
      h,
      n,
      m,
      l,
      k = function(d, c) {
          return function() {
              return d.apply(c, arguments);
          };
      },
      j = [].indexOf ||
      function(e) {
          for (var d = 0, f = this.length; f > d; d++) {
              if (d in this && this[d] === e) {
                  return d;
              }
          }
          return -1;
      };
  (h = (function() {
      function b() {}
      return (
          (b.prototype.extend = function(f, e) {
              var o, g;
              for (o in e) {
                  (g = e[o]), null == f[o] && (f[o] = g);
              }
              return f;
          }),
          (b.prototype.isMobile = function(c) {
              return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  c
              );
          }),
          (b.prototype.createEvent = function(g, f, q, p) {
              var o;
              return (
                  null == f && (f = !1),
                  null == q && (q = !1),
                  null == p && (p = null),
                  null != document.createEvent ?
                  ((o = document.createEvent("CustomEvent")),
                      o.initCustomEvent(g, f, q, p)) :
                  null != document.createEventObject ?
                  ((o = document.createEventObject()), (o.eventType = g)) :
                  (o.eventName = g),
                  o
              );
          }),
          (b.prototype.emitEvent = function(d, c) {
              return null != d.dispatchEvent ?
                  d.dispatchEvent(c) :
                  c in (null != d) ?
                  d[c]() :
                  "on" + c in (null != d) ?
                  d["on" + c]() :
                  void 0;
          }),
          (b.prototype.addEvent = function(e, d, f) {
              return null != e.addEventListener ?
                  e.addEventListener(d, f, !1) :
                  null != e.attachEvent ?
                  e.attachEvent("on" + d, f) :
                  (e[d] = f);
          }),
          (b.prototype.removeEvent = function(e, d, f) {
              return null != e.removeEventListener ?
                  e.removeEventListener(d, f, !1) :
                  null != e.detachEvent ?
                  e.detachEvent("on" + d, f) :
                  delete e[d];
          }),
          (b.prototype.innerHeight = function() {
              return "innerHeight" in window ?
                  window.innerHeight :
                  document.documentElement.clientHeight;
          }),
          b
      );
  })()),
  (n =
      this.WeakMap ||
      this.MozWeakMap ||
      (n = (function() {
          function b() {
              (this.keys = []), (this.values = []);
          }
          return (
              (b.prototype.get = function(o) {
                  var g, s, r, q, p;
                  for (p = this.keys, g = r = 0, q = p.length; q > r; g = ++r) {
                      if (((s = p[g]), s === o)) {
                          return this.values[g];
                      }
                  }
              }),
              (b.prototype.set = function(p, o) {
                  var u, t, s, r, q;
                  for (q = this.keys, u = s = 0, r = q.length; r > s; u = ++s) {
                      if (((t = q[u]), t === p)) {
                          return void(this.values[u] = o);
                      }
                  }
                  return this.keys.push(p), this.values.push(o);
              }),
              b
          );
      })())),
  (i =
      this.MutationObserver ||
      this.WebkitMutationObserver ||
      this.MozMutationObserver ||
      (i = (function() {
          function b() {
              "undefined" != typeof console &&
                  null !== console &&
                  console.warn("MutationObserver is not supported by your browser."),
                  "undefined" != typeof console &&
                  null !== console &&
                  console.warn(
                      "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
                  );
          }
          return (b.notSupported = !0), (b.prototype.observe = function() {}), b;
      })())),
  (m =
      this.getComputedStyle ||
      function(b) {
          return (
              (this.getPropertyValue = function(a) {
                  var d;
                  return (
                      "float" === a && (a = "styleFloat"),
                      l.test(a) &&
                      a.replace(l, function(e, c) {
                          return c.toUpperCase();
                      }),
                      (null != (d = b.currentStyle) ? d[a] : void 0) || null
                  );
              }),
              this
          );
      }),
  (l = /(\-([a-z]){1})/g),
  (this.WOW = (function() {
      function a(b) {
          null == b && (b = {}),
              (this.scrollCallback = k(this.scrollCallback, this)),
              (this.scrollHandler = k(this.scrollHandler, this)),
              (this.resetAnimation = k(this.resetAnimation, this)),
              (this.start = k(this.start, this)),
              (this.scrolled = !0),
              (this.config = this.util().extend(b, this.defaults)),
              null != b.scrollContainer &&
              (this.config.scrollContainer = document.querySelector(
                  b.scrollContainer
              )),
              (this.animationNameCache = new n()),
              (this.wowEvent = this.util().createEvent(this.config.boxClass));
      }
      return (
          (a.prototype.defaults = {
              boxClass: "wow",
              animateClass: "animated",
              offset: 0,
              mobile: !0,
              live: !0,
              callback: null,
              scrollContainer: null,
          }),
          (a.prototype.init = function() {
              var b;
              return (
                  (this.element = window.document.documentElement),
                  "interactive" === (b = document.readyState) || "complete" === b ?
                  this.start() :
                  this.util().addEvent(document, "DOMContentLoaded", this.start),
                  (this.finished = [])
              );
          }),
          (a.prototype.start = function() {
              var f, p, o, g;
              if (
                  ((this.stopped = !1),
                      (this.boxes = function() {
                          var b, s, r, q;
                          for (
                              r = this.element.querySelectorAll("." + this.config.boxClass),
                              q = [],
                              b = 0,
                              s = r.length; s > b; b++
                          ) {
                              (f = r[b]), q.push(f);
                          }
                          return q;
                      }.call(this)),
                      (this.all = function() {
                          var b, s, r, q;
                          for (r = this.boxes, q = [], b = 0, s = r.length; s > b; b++) {
                              (f = r[b]), q.push(f);
                          }
                          return q;
                      }.call(this)),
                      this.boxes.length)
              ) {
                  if (this.disabled()) {
                      this.resetStyle();
                  } else {
                      for (g = this.boxes, p = 0, o = g.length; o > p; p++) {
                          (f = g[p]), this.applyStyle(f, !0);
                      }
                  }
              }
              return (
                  this.disabled() ||
                  (this.util().addEvent(
                          this.config.scrollContainer || window,
                          "scroll",
                          this.scrollHandler
                      ),
                      this.util().addEvent(window, "resize", this.scrollHandler),
                      (this.interval = setInterval(this.scrollCallback, 50))),
                  this.config.live ?
                  new i(
                      (function(b) {
                          return function(q) {
                              var v, u, t, s, r;
                              for (r = [], v = 0, u = q.length; u > v; v++) {
                                  (s = q[v]),
                                  r.push(
                                      function() {
                                          var w, e, y, x;
                                          for (
                                              y = s.addedNodes || [],
                                              x = [],
                                              w = 0,
                                              e = y.length; e > w; w++
                                          ) {
                                              (t = y[w]), x.push(this.doSync(t));
                                          }
                                          return x;
                                      }.call(b)
                                  );
                              }
                              return r;
                          };
                      })(this)
                  ).observe(document.body, {
                      childList: !0,
                      subtree: !0
                  }) :
                  void 0
              );
          }),
          (a.prototype.stop = function() {
              return (
                  (this.stopped = !0),
                  this.util().removeEvent(
                      this.config.scrollContainer || window,
                      "scroll",
                      this.scrollHandler
                  ),
                  this.util().removeEvent(window, "resize", this.scrollHandler),
                  null != this.interval ? clearInterval(this.interval) : void 0
              );
          }),
          (a.prototype.sync = function() {
              return i.notSupported ? this.doSync(this.element) : void 0;
          }),
          (a.prototype.doSync = function(o) {
              var g, s, r, q, p;
              if ((null == o && (o = this.element), 1 === o.nodeType)) {
                  for (
                      o = o.parentNode || o,
                      q = o.querySelectorAll("." + this.config.boxClass),
                      p = [],
                      s = 0,
                      r = q.length; r > s; s++
                  ) {
                      (g = q[s]),
                      j.call(this.all, g) < 0 ?
                          (this.boxes.push(g),
                              this.all.push(g),
                              this.stopped || this.disabled() ?
                              this.resetStyle() :
                              this.applyStyle(g, !0),
                              p.push((this.scrolled = !0))) :
                          p.push(void 0);
                  }
                  return p;
              }
          }),
          (a.prototype.show = function(b) {
              return (
                  this.applyStyle(b),
                  (b.className = b.className + " " + this.config.animateClass),
                  null != this.config.callback && this.config.callback(b),
                  this.util().emitEvent(b, this.wowEvent),
                  this.util().addEvent(b, "animationend", this.resetAnimation),
                  this.util().addEvent(b, "oanimationend", this.resetAnimation),
                  this.util().addEvent(b, "webkitAnimationEnd", this.resetAnimation),
                  this.util().addEvent(b, "MSAnimationEnd", this.resetAnimation),
                  b
              );
          }),
          (a.prototype.applyStyle = function(g, f) {
              var q, p, o;
              return (
                  (p = g.getAttribute("data-wow-duration")),
                  (q = g.getAttribute("data-wow-delay")),
                  (o = g.getAttribute("data-wow-iteration")),
                  this.animate(
                      (function(b) {
                          return function() {
                              return b.customStyle(g, f, p, q, o);
                          };
                      })(this)
                  )
              );
          }),
          (a.prototype.animate = (function() {
              return "requestAnimationFrame" in window ?
                  function(b) {
                      return window.requestAnimationFrame(b);
                  } :
                  function(b) {
                      return b();
                  };
          })()),
          (a.prototype.resetStyle = function() {
              var g, f, q, p, o;
              for (p = this.boxes, o = [], f = 0, q = p.length; q > f; f++) {
                  (g = p[f]), o.push((g.style.visibility = "visible"));
              }
              return o;
          }),
          (a.prototype.resetAnimation = function(d) {
              var c;
              return d.type.toLowerCase().indexOf("animationend") >= 0 ?
                  ((c = d.target || d.srcElement),
                      (c.className = c.className
                          .replace(this.config.animateClass, "")
                          .trim())) :
                  void 0;
          }),
          (a.prototype.customStyle = function(g, f, q, p, o) {
              return (
                  f && this.cacheAnimationName(g),
                  (g.style.visibility = f ? "hidden" : "visible"),
                  q && this.vendorSet(g.style, {
                      animationDuration: q
                  }),
                  p && this.vendorSet(g.style, {
                      animationDelay: p
                  }),
                  o && this.vendorSet(g.style, {
                      animationIterationCount: o
                  }),
                  this.vendorSet(g.style, {
                      animationName: f ? "none" : this.cachedAnimationName(g),
                  }),
                  g
              );
          }),
          (a.prototype.vendors = ["moz", "webkit"]),
          (a.prototype.vendorSet = function(o, g) {
              var s, r, q, p;
              r = [];
              for (s in g) {
                  (q = g[s]),
                  (o["" + s] = q),
                  r.push(
                      function() {
                          var c, t, f, e;
                          for (
                              f = this.vendors, e = [], c = 0, t = f.length; t > c; c++
                          ) {
                              (p = f[c]),
                              e.push(
                                  (o["" + p + s.charAt(0).toUpperCase() + s.substr(1)] =
                                      q)
                              );
                          }
                          return e;
                      }.call(this)
                  );
              }
              return r;
          }),
          (a.prototype.vendorCSS = function(o, d) {
              var u, t, s, r, q, p;
              for (
                  q = m(o),
                  r = q.getPropertyCSSValue(d),
                  s = this.vendors,
                  u = 0,
                  t = s.length; t > u; u++
              ) {
                  (p = s[u]), (r = r || q.getPropertyCSSValue("-" + p + "-" + d));
              }
              return r;
          }),
          (a.prototype.animationName = function(e) {
              var d;
              try {
                  d = this.vendorCSS(e, "animation-name").cssText;
              } catch (f) {
                  d = m(e).getPropertyValue("animation-name");
              }
              return "none" === d ? "" : d;
          }),
          (a.prototype.cacheAnimationName = function(b) {
              return this.animationNameCache.set(b, this.animationName(b));
          }),
          (a.prototype.cachedAnimationName = function(b) {
              return this.animationNameCache.get(b);
          }),
          (a.prototype.scrollHandler = function() {
              return (this.scrolled = !0);
          }),
          (a.prototype.scrollCallback = function() {
              var b;
              return !this.scrolled ||
                  ((this.scrolled = !1),
                      (this.boxes = function() {
                          var f, p, o, g;
                          for (o = this.boxes, g = [], f = 0, p = o.length; p > f; f++) {
                              (b = o[f]), b && (this.isVisible(b) ? this.show(b) : g.push(b));
                          }
                          return g;
                      }.call(this)),
                      this.boxes.length || this.config.live) ?
                  void 0 :
                  this.stop();
          }),
          (a.prototype.offsetTop = function(d) {
              for (var c; void 0 === d.offsetTop;) {
                  d = d.parentNode;
              }
              for (c = d.offsetTop;
                  (d = d.offsetParent);) {
                  c += d.offsetTop;
              }
              return c;
          }),
          (a.prototype.isVisible = function(o) {
              var g, s, r, q, p;
              return (
                  (s = o.getAttribute("data-wow-offset") || this.config.offset),
                  (p =
                      (this.config.scrollContainer &&
                          this.config.scrollContainer.scrollTop) ||
                      window.pageYOffset),
                  (q =
                      p +
                      Math.min(this.element.clientHeight, this.util().innerHeight()) -
                      s),
                  (r = this.offsetTop(o)),
                  (g = r + o.clientHeight),
                  q >= r && g >= p
              );
          }),
          (a.prototype.util = function() {
              return null != this._util ? this._util : (this._util = new h());
          }),
          (a.prototype.disabled = function() {
              return (
                  !this.config.mobile && this.util().isMobile(navigator.userAgent)
              );
          }),
          a
      );
  })());
}).call(this);
"function" !== typeof Object.create &&
  (Object.create = function(b) {
      function a() {}
      a.prototype = b;
      return new a();
  });
(function(d, c, b) {
  var a = {
      init: function(f, e) {
          this.$elem = d(e);
          this.options = d.extend({},
              d.fn.owlCarousel.options,
              this.$elem.data(),
              f
          );
          this.userOptions = f;
          this.loadContent();
      },
      loadContent: function() {
          function g(i) {
              var k,
                  j = "";
              if ("function" === typeof f.options.jsonSuccess) {
                  f.options.jsonSuccess.apply(this, [i]);
              } else {
                  for (k in i.owl) {
                      i.owl.hasOwnProperty(k) && (j += i.owl[k].item);
                  }
                  f.$elem.html(j);
              }
              f.logIn();
          }
          var f = this,
              h;
          "function" === typeof f.options.beforeInit &&
              f.options.beforeInit.apply(this, [f.$elem]);
          "string" === typeof f.options.jsonPath ?
              ((h = f.options.jsonPath), d.getJSON(h, g)) :
              f.logIn();
      },
      logIn: function() {
          this.$elem.data("owl-originalStyles", this.$elem.attr("style"));
          this.$elem.data("owl-originalClasses", this.$elem.attr("class"));
          this.$elem.css({
              opacity: 0
          });
          this.orignalItems = this.options.items;
          this.checkBrowser();
          this.wrapperWidth = 0;
          this.checkVisible = null;
          this.setVars();
      },
      setVars: function() {
          if (0 === this.$elem.children().length) {
              return !1;
          }
          this.baseClass();
          this.eventTypes();
          this.$userItems = this.$elem.children();
          this.itemsAmount = this.$userItems.length;
          this.wrapItems();
          this.$owlItems = this.$elem.find(".owl-item");
          this.$owlWrapper = this.$elem.find(".owl-wrapper");
          this.playDirection = "next";
          this.prevItem = 0;
          this.prevArr = [0];
          this.currentItem = 0;
          this.customEvents();
          this.onStartup();
      },
      onStartup: function() {
          this.updateItems();
          this.calculateAll();
          this.buildControls();
          this.updateControls();
          this.response();
          this.moveEvents();
          this.stopOnHover();
          this.owlStatus();
          !1 !== this.options.transitionStyle &&
              this.transitionTypes(this.options.transitionStyle);
          !0 === this.options.autoPlay && (this.options.autoPlay = 5000);
          this.play();
          this.$elem.find(".owl-wrapper").css("display", "block");
          this.$elem.is(":visible") ?
              this.$elem.css("opacity", 1) :
              this.watchVisibility();
          this.onstartup = !1;
          this.eachMoveUpdate();
          "function" === typeof this.options.afterInit &&
              this.options.afterInit.apply(this, [this.$elem]);
      },
      eachMoveUpdate: function() {
          !0 === this.options.lazyLoad && this.lazyLoad();
          !0 === this.options.autoHeight && this.autoHeight();
          this.onVisibleItems();
          "function" === typeof this.options.afterAction &&
              this.options.afterAction.apply(this, [this.$elem]);
      },
      updateVars: function() {
          "function" === typeof this.options.beforeUpdate &&
              this.options.beforeUpdate.apply(this, [this.$elem]);
          this.watchVisibility();
          this.updateItems();
          this.calculateAll();
          this.updatePosition();
          this.updateControls();
          this.eachMoveUpdate();
          "function" === typeof this.options.afterUpdate &&
              this.options.afterUpdate.apply(this, [this.$elem]);
      },
      reload: function() {
          var e = this;
          c.setTimeout(function() {
              e.updateVars();
          }, 0);
      },
      watchVisibility: function() {
          var e = this;
          if (!1 === e.$elem.is(":visible")) {
              e.$elem.css({
                      opacity: 0
                  }),
                  c.clearInterval(e.autoPlayInterval),
                  c.clearInterval(e.checkVisible);
          } else {
              return !1;
          }
          e.checkVisible = c.setInterval(function() {
              e.$elem.is(":visible") &&
                  (e.reload(),
                      e.$elem.animate({
                          opacity: 1
                      }, 200),
                      c.clearInterval(e.checkVisible));
          }, 500);
      },
      wrapItems: function() {
          this.$userItems
              .wrapAll('<div class="owl-wrapper">')
              .wrap('<div class="owl-item"></div>');
          this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
          this.wrapperOuter = this.$elem.find(".owl-wrapper-outer");
          this.$elem.css("display", "block");
      },
      baseClass: function() {
          var f = this.$elem.hasClass(this.options.baseClass),
              e = this.$elem.hasClass(this.options.theme);
          f || this.$elem.addClass(this.options.baseClass);
          e || this.$elem.addClass(this.options.theme);
      },
      updateItems: function() {
          var f, e;
          if (!1 === this.options.responsive) {
              return !1;
          }
          if (!0 === this.options.singleItem) {
              return (
                  (this.options.items = this.orignalItems = 1),
                  (this.options.itemsCustom = !1),
                  (this.options.itemsDesktop = !1),
                  (this.options.itemsDesktopSmall = !1),
                  (this.options.itemsTablet = !1),
                  (this.options.itemsTabletSmall = !1),
                  (this.options.itemsMobile = !1)
              );
          }
          f = d(this.options.responsiveBaseWidth).width();
          f > (this.options.itemsDesktop[0] || this.orignalItems) &&
              (this.options.items = this.orignalItems);
          if (!1 !== this.options.itemsCustom) {
              for (
                  this.options.itemsCustom.sort(function(h, g) {
                      return h[0] - g[0];
                  }),
                  e = 0; e < this.options.itemsCustom.length; e += 1
              ) {
                  this.options.itemsCustom[e][0] <= f &&
                      (this.options.items = this.options.itemsCustom[e][1]);
              }
          } else {
              f <= this.options.itemsDesktop[0] &&
                  !1 !== this.options.itemsDesktop &&
                  (this.options.items = this.options.itemsDesktop[1]),
                  f <= this.options.itemsDesktopSmall[0] &&
                  !1 !== this.options.itemsDesktopSmall &&
                  (this.options.items = this.options.itemsDesktopSmall[1]),
                  f <= this.options.itemsTablet[0] &&
                  !1 !== this.options.itemsTablet &&
                  (this.options.items = this.options.itemsTablet[1]),
                  f <= this.options.itemsTabletSmall[0] &&
                  !1 !== this.options.itemsTabletSmall &&
                  (this.options.items = this.options.itemsTabletSmall[1]),
                  f <= this.options.itemsMobile[0] &&
                  !1 !== this.options.itemsMobile &&
                  (this.options.items = this.options.itemsMobile[1]);
          }
          this.options.items > this.itemsAmount &&
              !0 === this.options.itemsScaleUp &&
              (this.options.items = this.itemsAmount);
      },
      response: function() {
          var g = this,
              f,
              h;
          if (!0 !== g.options.responsive) {
              return !1;
          }
          h = d(c).width();
          g.resizer = function() {
              d(c).width() !== h &&
                  (!1 !== g.options.autoPlay && c.clearInterval(g.autoPlayInterval),
                      c.clearTimeout(f),
                      (f = c.setTimeout(function() {
                          h = d(c).width();
                          g.updateVars();
                      }, g.options.responsiveRefreshRate)));
          };
          d(c).resize(g.resizer);
      },
      updatePosition: function() {
          this.jumpTo(this.currentItem);
          !1 !== this.options.autoPlay && this.checkAp();
      },
      appendItemsSizes: function() {
          var g = this,
              f = 0,
              h = g.itemsAmount - g.options.items;
          g.$owlItems.each(function(i) {
              var e = d(this);
              e.css({
                  width: g.itemWidth
              }).data("owl-item", Number(i));
              if (0 === i % g.options.items || i === h) {
                  i > h || (f += 1);
              }
              e.data("owl-roundPages", f);
          });
      },
      appendWrapperSizes: function() {
          this.$owlWrapper.css({
              width: this.$owlItems.length * this.itemWidth * 2,
              left: 0,
          });
          this.appendItemsSizes();
      },
      calculateAll: function() {
          this.calculateWidth();
          this.appendWrapperSizes();
          this.loops();
          this.max();
      },
      calculateWidth: function() {
          this.itemWidth = Math.round(this.$elem.width() / this.options.items);
      },
      max: function() {
          var e = -1 *
              (this.itemsAmount * this.itemWidth -
                  this.options.items * this.itemWidth);
          this.options.items > this.itemsAmount ?
              (this.maximumPixels = e = this.maximumItem = 0) :
              ((this.maximumItem = this.itemsAmount - this.options.items),
                  (this.maximumPixels = e));
          return e;
      },
      min: function() {
          return 0;
      },
      loops: function() {
          var g = 0,
              f = 0,
              h,
              i;
          this.positionsInArray = [0];
          this.pagesInArray = [];
          for (h = 0; h < this.itemsAmount; h += 1) {
              (f += this.itemWidth),
              this.positionsInArray.push(-f),
                  !0 === this.options.scrollPerPage &&
                  ((i = d(this.$owlItems[h])),
                      (i = i.data("owl-roundPages")),
                      i !== g &&
                      ((this.pagesInArray[g] = this.positionsInArray[h]), (g = i)));
          }
      },
      buildControls: function() {
          if (!0 === this.options.navigation || !0 === this.options.pagination) {
              this.owlControls = d('<div class="owl-controls"/>')
                  .toggleClass("clickable", !this.browser.isTouch)
                  .appendTo(this.$elem);
          }!0 === this.options.pagination && this.buildPagination();
          !0 === this.options.navigation && this.buildButtons();
      },
      buildButtons: function() {
          var f = this,
              e = d('<div class="owl-buttons"/>');
          f.owlControls.append(e);
          f.buttonPrev = d("<div/>", {
              class: "owl-prev",
              html: f.options.navigationText[0] || "",
          });
          f.buttonNext = d("<div/>", {
              class: "owl-next",
              html: f.options.navigationText[1] || "",
          });
          e.append(f.buttonPrev).append(f.buttonNext);
          e.on(
              "touchstart.owlControls mousedown.owlControls",
              'div[class^="owl"]',
              function(g) {
                  g.preventDefault();
              }
          );
          e.on(
              "touchend.owlControls mouseup.owlControls",
              'div[class^="owl"]',
              function(g) {
                  g.preventDefault();
                  d(this).hasClass("owl-next") ? f.next() : f.prev();
              }
          );
      },
      buildPagination: function() {
          var e = this;
          e.paginationWrapper = d('<div class="owl-pagination"/>');
          e.owlControls.append(e.paginationWrapper);
          e.paginationWrapper.on(
              "touchend.owlControls mouseup.owlControls",
              ".owl-page",
              function(f) {
                  f.preventDefault();
                  Number(d(this).data("owl-page")) !== e.currentItem &&
                      e.goTo(Number(d(this).data("owl-page")), !0);
              }
          );
      },
      updatePagination: function() {
          var h, f, j, l, k, i;
          if (!1 === this.options.pagination) {
              return !1;
          }
          this.paginationWrapper.html("");
          h = 0;
          f = this.itemsAmount - (this.itemsAmount % this.options.items);
          for (l = 0; l < this.itemsAmount; l += 1) {
              0 === l % this.options.items &&
                  ((h += 1),
                      f === l && (j = this.itemsAmount - this.options.items),
                      (k = d("<div/>", {
                          class: "owl-page"
                      })),
                      (i = d("<span></span>", {
                          text: !0 === this.options.paginationNumbers ? h : "",
                          class: !0 === this.options.paginationNumbers ? "owl-numbers" : "",
                      })),
                      k.append(i),
                      k.data("owl-page", f === l ? j : l),
                      k.data("owl-roundPages", h),
                      this.paginationWrapper.append(k));
          }
          this.checkPagination();
      },
      checkPagination: function() {
          var e = this;
          if (!1 === e.options.pagination) {
              return !1;
          }
          e.paginationWrapper.find(".owl-page").each(function() {
              d(this).data("owl-roundPages") ===
                  d(e.$owlItems[e.currentItem]).data("owl-roundPages") &&
                  (e.paginationWrapper.find(".owl-page").removeClass("active"),
                      d(this).addClass("active"));
          });
      },
      checkNavigation: function() {
          if (!1 === this.options.navigation) {
              return !1;
          }!1 === this.options.rewindNav &&
              (0 === this.currentItem && 0 === this.maximumItem ?
                  (this.buttonPrev.addClass("disabled"),
                      this.buttonNext.addClass("disabled")) :
                  0 === this.currentItem && 0 !== this.maximumItem ?
                  (this.buttonPrev.addClass("disabled"),
                      this.buttonNext.removeClass("disabled")) :
                  this.currentItem === this.maximumItem ?
                  (this.buttonPrev.removeClass("disabled"),
                      this.buttonNext.addClass("disabled")) :
                  0 !== this.currentItem &&
                  this.currentItem !== this.maximumItem &&
                  (this.buttonPrev.removeClass("disabled"),
                      this.buttonNext.removeClass("disabled")));
      },
      updateControls: function() {
          this.updatePagination();
          this.checkNavigation();
          this.owlControls &&
              (this.options.items >= this.itemsAmount ?
                  this.owlControls.hide() :
                  this.owlControls.show());
      },
      destroyControls: function() {
          this.owlControls && this.owlControls.remove();
      },
      next: function(e) {
          if (this.isTransition) {
              return !1;
          }
          this.currentItem +=
              !0 === this.options.scrollPerPage ? this.options.items : 1;
          if (
              this.currentItem >
              this.maximumItem +
              (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0)
          ) {
              if (!0 === this.options.rewindNav) {
                  (this.currentItem = 0), (e = "rewind");
              } else {
                  return (this.currentItem = this.maximumItem), !1;
              }
          }
          this.goTo(this.currentItem, e);
      },
      prev: function(e) {
          if (this.isTransition) {
              return !1;
          }
          this.currentItem = !0 === this.options.scrollPerPage &&
              0 < this.currentItem &&
              this.currentItem < this.options.items ?
              0 :
              this.currentItem -
              (!0 === this.options.scrollPerPage ? this.options.items : 1);
          if (0 > this.currentItem) {
              if (!0 === this.options.rewindNav) {
                  (this.currentItem = this.maximumItem), (e = "rewind");
              } else {
                  return (this.currentItem = 0), !1;
              }
          }
          this.goTo(this.currentItem, e);
      },
      goTo: function(g, f, h) {
          var i = this;
          if (i.isTransition) {
              return !1;
          }
          "function" === typeof i.options.beforeMove &&
              i.options.beforeMove.apply(this, [i.$elem]);
          g >= i.maximumItem ? (g = i.maximumItem) : 0 >= g && (g = 0);
          i.currentItem = i.owl.currentItem = g;
          if (
              !1 !== i.options.transitionStyle &&
              "drag" !== h &&
              1 === i.options.items &&
              !0 === i.browser.support3d
          ) {
              return (
                  i.swapSpeed(0),
                  !0 === i.browser.support3d ?
                  i.transition3d(i.positionsInArray[g]) :
                  i.css2slide(i.positionsInArray[g], 1),
                  i.afterGo(),
                  i.singleItemTransition(),
                  !1
              );
          }
          g = i.positionsInArray[g];
          !0 === i.browser.support3d ?
              ((i.isCss3Finish = !1),
                  !0 === f ?
                  (i.swapSpeed("paginationSpeed"),
                      c.setTimeout(function() {
                          i.isCss3Finish = !0;
                      }, i.options.paginationSpeed)) :
                  "rewind" === f ?
                  (i.swapSpeed(i.options.rewindSpeed),
                      c.setTimeout(function() {
                          i.isCss3Finish = !0;
                      }, i.options.rewindSpeed)) :
                  (i.swapSpeed("slideSpeed"),
                      c.setTimeout(function() {
                          i.isCss3Finish = !0;
                      }, i.options.slideSpeed)),
                  i.transition3d(g)) :
              !0 === f ?
              i.css2slide(g, i.options.paginationSpeed) :
              "rewind" === f ?
              i.css2slide(g, i.options.rewindSpeed) :
              i.css2slide(g, i.options.slideSpeed);
          i.afterGo();
      },
      jumpTo: function(e) {
          "function" === typeof this.options.beforeMove &&
              this.options.beforeMove.apply(this, [this.$elem]);
          e >= this.maximumItem || -1 === e ?
              (e = this.maximumItem) :
              0 >= e && (e = 0);
          this.swapSpeed(0);
          !0 === this.browser.support3d ?
              this.transition3d(this.positionsInArray[e]) :
              this.css2slide(this.positionsInArray[e], 1);
          this.currentItem = this.owl.currentItem = e;
          this.afterGo();
      },
      afterGo: function() {
          this.prevArr.push(this.currentItem);
          this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2];
          this.prevArr.shift(0);
          this.prevItem !== this.currentItem &&
              (this.checkPagination(),
                  this.checkNavigation(),
                  this.eachMoveUpdate(),
                  !1 !== this.options.autoPlay && this.checkAp());
          "function" === typeof this.options.afterMove &&
              this.prevItem !== this.currentItem &&
              this.options.afterMove.apply(this, [this.$elem]);
      },
      stop: function() {
          this.apStatus = "stop";
          c.clearInterval(this.autoPlayInterval);
      },
      checkAp: function() {
          "stop" !== this.apStatus && this.play();
      },
      play: function() {
          var e = this;
          e.apStatus = "play";
          if (!1 === e.options.autoPlay) {
              return !1;
          }
          c.clearInterval(e.autoPlayInterval);
          e.autoPlayInterval = c.setInterval(function() {
              e.next(!0);
          }, e.options.autoPlay);
      },
      swapSpeed: function(e) {
          "slideSpeed" === e
              ?
              this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) :
              "paginationSpeed" === e ?
              this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) :
              "string" !== typeof e && this.$owlWrapper.css(this.addCssSpeed(e));
      },
      addCssSpeed: function(e) {
          return {
              "-webkit-transition": "all " + e + "ms ease",
              "-moz-transition": "all " + e + "ms ease",
              "-o-transition": "all " + e + "ms ease",
              transition: "all " + e + "ms ease",
          };
      },
      removeTransition: function() {
          return {
              "-webkit-transition": "",
              "-moz-transition": "",
              "-o-transition": "",
              transition: "",
          };
      },
      doTranslate: function(e) {
          return {
              "-webkit-transform": "translate3d(" + e + "px, 0px, 0px)",
              "-moz-transform": "translate3d(" + e + "px, 0px, 0px)",
              "-o-transform": "translate3d(" + e + "px, 0px, 0px)",
              "-ms-transform": "translate3d(" + e + "px, 0px, 0px)",
              transform: "translate3d(" + e + "px, 0px,0px)",
          };
      },
      transition3d: function(e) {
          this.$owlWrapper.css(this.doTranslate(e));
      },
      css2move: function(e) {
          this.$owlWrapper.css({
              left: e
          });
      },
      css2slide: function(g, f) {
          var h = this;
          h.isCssFinish = !1;
          h.$owlWrapper.stop(!0, !0).animate({
              left: g
          }, {
              duration: f || h.options.slideSpeed,
              complete: function() {
                  h.isCssFinish = !0;
              },
          });
      },
      checkBrowser: function() {
          var e = b.createElement("div");
          e.style.cssText =
              "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
          e = e.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);
          this.browser = {
              support3d: null !== e && 1 === e.length,
              isTouch: "ontouchstart" in c || c.navigator.msMaxTouchPoints,
          };
      },
      moveEvents: function() {
          if (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) {
              this.gestures(), this.disabledEvents();
          }
      },
      eventTypes: function() {
          var e = ["s", "e", "x"];
          this.ev_types = {};
          !0 === this.options.mouseDrag && !0 === this.options.touchDrag ?
              (e = [
                  "touchstart.owl mousedown.owl",
                  "touchmove.owl mousemove.owl",
                  "touchend.owl touchcancel.owl mouseup.owl",
              ]) :
              !1 === this.options.mouseDrag && !0 === this.options.touchDrag ?
              (e = [
                  "touchstart.owl",
                  "touchmove.owl",
                  "touchend.owl touchcancel.owl",
              ]) :
              !0 === this.options.mouseDrag &&
              !1 === this.options.touchDrag &&
              (e = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);
          this.ev_types.start = e[0];
          this.ev_types.move = e[1];
          this.ev_types.end = e[2];
      },
      disabledEvents: function() {
          this.$elem.on("dragstart.owl", function(e) {
              e.preventDefault();
          });
          this.$elem.on("mousedown.disableTextSelect", function(e) {
              return d(e.target).is("input, textarea, select, option");
          });
      },
      gestures: function() {
          function g(e) {
              if (void 0 !== e.touches) {
                  return {
                      x: e.touches[0].pageX,
                      y: e.touches[0].pageY
                  };
              }
              if (void 0 === e.touches) {
                  if (void 0 !== e.pageX) {
                      return {
                          x: e.pageX,
                          y: e.pageY
                      };
                  }
                  if (void 0 === e.pageX) {
                      return {
                          x: e.clientX,
                          y: e.clientY
                      };
                  }
              }
          }

          function f(e) {
              "on" === e
                  ?
                  (d(b).on(k.ev_types.move, j), d(b).on(k.ev_types.end, l)) :
                  "off" === e &&
                  (d(b).off(k.ev_types.move), d(b).off(k.ev_types.end));
          }

          function j(e) {
              e = e.originalEvent || e || c.event;
              k.newPosX = g(e).x - i.offsetX;
              k.newPosY = g(e).y - i.offsetY;
              k.newRelativeX = k.newPosX - i.relativePos;
              "function" === typeof k.options.startDragging &&
                  !0 !== i.dragging &&
                  0 !== k.newRelativeX &&
                  ((i.dragging = !0), k.options.startDragging.apply(k, [k.$elem]));
              (8 < k.newRelativeX || -8 > k.newRelativeX) &&
              !0 === k.browser.isTouch &&
                  (void 0 !== e.preventDefault ?
                      e.preventDefault() :
                      (e.returnValue = !1),
                      (i.sliding = !0));
              (10 < k.newPosY || -10 > k.newPosY) &&
              !1 === i.sliding &&
                  d(b).off("touchmove.owl");
              k.newPosX = Math.max(
                  Math.min(k.newPosX, k.newRelativeX / 5),
                  k.maximumPixels + k.newRelativeX / 5
              );
              !0 === k.browser.support3d ?
                  k.transition3d(k.newPosX) :
                  k.css2move(k.newPosX);
          }

          function l(e) {
              e = e.originalEvent || e || c.event;
              var h;
              e.target = e.target || e.srcElement;
              i.dragging = !1;
              !0 !== k.browser.isTouch && k.$owlWrapper.removeClass("grabbing");
              k.dragDirection =
                  0 > k.newRelativeX ?
                  (k.owl.dragDirection = "left") :
                  (k.owl.dragDirection = "right");
              0 !== k.newRelativeX &&
                  ((h = k.getNewPosition()),
                      k.goTo(h, !1, "drag"),
                      i.targetElement === e.target &&
                      !0 !== k.browser.isTouch &&
                      (d(e.target).on("click.disable", function(m) {
                              m.stopImmediatePropagation();
                              m.stopPropagation();
                              m.preventDefault();
                              d(m.target).off("click.disable");
                          }),
                          (e = d._data(e.target, "events").click),
                          (h = e.pop()),
                          e.splice(0, 0, h)));
              f("off");
          }
          var k = this,
              i = {
                  offsetX: 0,
                  offsetY: 0,
                  baseElWidth: 0,
                  relativePos: 0,
                  position: null,
                  minSwipe: null,
                  maxSwipe: null,
                  sliding: null,
                  dargging: null,
                  targetElement: null,
              };
          k.isCssFinish = !0;
          k.$elem.on(k.ev_types.start, ".owl-wrapper", function(m) {
              m = m.originalEvent || m || c.event;
              var h;
              if (3 === m.which) {
                  return !1;
              }
              if (!(k.itemsAmount <= k.options.items)) {
                  if (
                      (!1 === k.isCssFinish && !k.options.dragBeforeAnimFinish) ||
                      (!1 === k.isCss3Finish && !k.options.dragBeforeAnimFinish)
                  ) {
                      return !1;
                  }!1 !== k.options.autoPlay && c.clearInterval(k.autoPlayInterval);
                  !0 === k.browser.isTouch ||
                      k.$owlWrapper.hasClass("grabbing") ||
                      k.$owlWrapper.addClass("grabbing");
                  k.newPosX = 0;
                  k.newRelativeX = 0;
                  d(this).css(k.removeTransition());
                  h = d(this).position();
                  i.relativePos = h.left;
                  i.offsetX = g(m).x - h.left;
                  i.offsetY = g(m).y - h.top;
                  f("on");
                  i.sliding = !1;
                  i.targetElement = m.target || m.srcElement;
              }
          });
      },
      getNewPosition: function() {
          var e = this.closestItem();
          e > this.maximumItem ?
              (e = this.currentItem = this.maximumItem) :
              0 <= this.newPosX && (this.currentItem = e = 0);
          return e;
      },
      closestItem: function() {
          var g = this,
              f = !0 === g.options.scrollPerPage ? g.pagesInArray : g.positionsInArray,
              h = g.newPosX,
              i = null;
          d.each(f, function(j, e) {
              h - g.itemWidth / 20 > f[j + 1] &&
                  h - g.itemWidth / 20 < e &&
                  "left" === g.moveDirection() ?
                  ((i = e),
                      (g.currentItem = !0 === g.options.scrollPerPage ?
                          d.inArray(i, g.positionsInArray) :
                          j)) :
                  h + g.itemWidth / 20 < e &&
                  h + g.itemWidth / 20 > (f[j + 1] || f[j] - g.itemWidth) &&
                  "right" === g.moveDirection() &&
                  (!0 === g.options.scrollPerPage ?
                      ((i = f[j + 1] || f[f.length - 1]),
                          (g.currentItem = d.inArray(i, g.positionsInArray))) :
                      ((i = f[j + 1]), (g.currentItem = j + 1)));
          });
          return g.currentItem;
      },
      moveDirection: function() {
          var e;
          0 > this.newRelativeX ?
              ((e = "right"), (this.playDirection = "next")) :
              ((e = "left"), (this.playDirection = "prev"));
          return e;
      },
      customEvents: function() {
          var e = this;
          e.$elem.on("owl.next", function() {
              e.next();
          });
          e.$elem.on("owl.prev", function() {
              e.prev();
          });
          e.$elem.on("owl.play", function(f, g) {
              e.options.autoPlay = g;
              e.play();
              e.hoverStatus = "play";
          });
          e.$elem.on("owl.stop", function() {
              e.stop();
              e.hoverStatus = "stop";
          });
          e.$elem.on("owl.goTo", function(f, g) {
              e.goTo(g);
          });
          e.$elem.on("owl.jumpTo", function(f, g) {
              e.jumpTo(g);
          });
      },
      stopOnHover: function() {
          var e = this;
          !0 === e.options.stopOnHover &&
              !0 !== e.browser.isTouch &&
              !1 !== e.options.autoPlay &&
              (e.$elem.on("mouseover", function() {
                      e.stop();
                  }),
                  e.$elem.on("mouseout", function() {
                      "stop" !== e.hoverStatus && e.play();
                  }));
      },
      lazyLoad: function() {
          var g, f, h, j, i;
          if (!1 === this.options.lazyLoad) {
              return !1;
          }
          for (g = 0; g < this.itemsAmount; g += 1) {
              (f = d(this.$owlItems[g])),
              "loaded" !== f.data("owl-loaded") &&
                  ((h = f.data("owl-item")),
                      (j = f.find(".lazyOwl")),
                      "string" !== typeof j.data("src") ?
                      f.data("owl-loaded", "loaded") :
                      (void 0 === f.data("owl-loaded") &&
                          (j.hide(),
                              f.addClass("loading").data("owl-loaded", "checked")),
                          (i = !0 === this.options.lazyFollow ?
                              h >= this.currentItem :
                              !0) &&
                          h < this.currentItem + this.options.items &&
                          j.length &&
                          this.lazyPreload(f, j)));
          }
      },
      lazyPreload: function(h, g) {
          function l() {
              h.data("owl-loaded", "loaded").removeClass("loading");
              g.removeAttr("data-src");
              "fade" === m.options.lazyEffect ? g.fadeIn(400) : g.show();
              "function" === typeof m.options.afterLazyLoad &&
                  m.options.afterLazyLoad.apply(this, [m.$elem]);
          }

          function n() {
              j += 1;
              m.completeImg(g.get(0)) || !0 === i ?
                  l() :
                  100 >= j ?
                  c.setTimeout(n, 100) :
                  l();
          }
          var m = this,
              j = 0,
              i;
          "DIV" === g.prop("tagName") ?
              (g.css("background-image", "url(" + g.data("src") + ")"), (i = !0)) :
              (g[0].src = g.data("src"));
          n();
      },
      autoHeight: function() {
          function g() {
              var e = d(h.$owlItems[h.currentItem]).height();
              h.wrapperOuter.css("height", e + "px");
              h.wrapperOuter.hasClass("autoHeight") ||
                  c.setTimeout(function() {
                      h.wrapperOuter.addClass("autoHeight");
                  }, 0);
          }

          function f() {
              i += 1;
              h.completeImg(j.get(0)) ?
                  g() :
                  100 >= i ?
                  c.setTimeout(f, 100) :
                  h.wrapperOuter.css("height", "");
          }
          var h = this,
              j = d(h.$owlItems[h.currentItem]).find("img"),
              i;
          void 0 !== j.get(0) ? ((i = 0), f()) : g();
      },
      completeImg: function(e) {
          return !e.complete ||
              ("undefined" !== typeof e.naturalWidth && 0 === e.naturalWidth) ?
              !1 :
              !0;
      },
      onVisibleItems: function() {
          var e;
          !0 === this.options.addClassActive &&
              this.$owlItems.removeClass("active");
          this.visibleItems = [];
          for (
              e = this.currentItem; e < this.currentItem + this.options.items; e += 1
          ) {
              this.visibleItems.push(e),
                  !0 === this.options.addClassActive &&
                  d(this.$owlItems[e]).addClass("active");
          }
          this.owl.visibleItems = this.visibleItems;
      },
      transitionTypes: function(e) {
          this.outClass = "owl-" + e + "-out";
          this.inClass = "owl-" + e + "-in";
      },
      singleItemTransition: function() {
          var i = this,
              h = i.outClass,
              l = i.inClass,
              n = i.$owlItems.eq(i.currentItem),
              m = i.$owlItems.eq(i.prevItem),
              k =
              Math.abs(i.positionsInArray[i.currentItem]) +
              i.positionsInArray[i.prevItem],
              j = Math.abs(i.positionsInArray[i.currentItem]) + i.itemWidth / 2;
          i.isTransition = !0;
          i.$owlWrapper
              .addClass("owl-origin")
              .css({
                  "-webkit-transform-origin": j + "px",
                  "-moz-perspective-origin": j + "px",
                  "perspective-origin": j + "px",
              });
          m.css({
                  position: "relative",
                  left: k + "px"
              })
              .addClass(h)
              .on(
                  "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",
                  function() {
                      i.endPrev = !0;
                      m.off(
                          "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"
                      );
                      i.clearTransStyle(m, h);
                  }
              );
          n.addClass(l).on(
              "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",
              function() {
                  i.endCurrent = !0;
                  n.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                  i.clearTransStyle(n, l);
              }
          );
      },
      clearTransStyle: function(f, e) {
          f.css({
              position: "",
              left: ""
          }).removeClass(e);
          this.endPrev &&
              this.endCurrent &&
              (this.$owlWrapper.removeClass("owl-origin"),
                  (this.isTransition = this.endCurrent = this.endPrev = !1));
      },
      owlStatus: function() {
          this.owl = {
              userOptions: this.userOptions,
              baseElement: this.$elem,
              userItems: this.$userItems,
              owlItems: this.$owlItems,
              currentItem: this.currentItem,
              prevItem: this.prevItem,
              visibleItems: this.visibleItems,
              isTouch: this.browser.isTouch,
              browser: this.browser,
              dragDirection: this.dragDirection,
          };
      },
      clearEvents: function() {
          this.$elem.off(".owl owl mousedown.disableTextSelect");
          d(b).off(".owl owl");
          d(c).off("resize", this.resizer);
      },
      unWrap: function() {
          0 !== this.$elem.children().length &&
              (this.$owlWrapper.unwrap(),
                  this.$userItems.unwrap().unwrap(),
                  this.owlControls && this.owlControls.remove());
          this.clearEvents();
          this.$elem
              .attr("style", this.$elem.data("owl-originalStyles") || "")
              .attr("class", this.$elem.data("owl-originalClasses"));
      },
      destroy: function() {
          this.stop();
          c.clearInterval(this.checkVisible);
          this.unWrap();
          this.$elem.removeData();
      },
      reinit: function(e) {
          e = d.extend({}, this.userOptions, e);
          this.unWrap();
          this.init(e, this.$elem);
      },
      addItem: function(g, f) {
          var h;
          if (!g) {
              return !1;
          }
          if (0 === this.$elem.children().length) {
              return this.$elem.append(g), this.setVars(), !1;
          }
          this.unWrap();
          h = void 0 === f || -1 === f ? -1 : f;
          h >= this.$userItems.length || -1 === h ?
              this.$userItems.eq(-1).after(g) :
              this.$userItems.eq(h).before(g);
          this.setVars();
      },
      removeItem: function(e) {
          if (0 === this.$elem.children().length) {
              return !1;
          }
          e = void 0 === e || -1 === e ? -1 : e;
          this.unWrap();
          this.$userItems.eq(e).remove();
          this.setVars();
      },
  };
  d.fn.owlCarousel = function(e) {
      return this.each(function() {
          if (!0 === d(this).data("owl-init")) {
              return !1;
          }
          d(this).data("owl-init", !0);
          var f = Object.create(a);
          f.init(e, this);
          d.data(this, "owlCarousel", f);
      });
  };
  d.fn.owlCarousel.options = {
      items: 5,
      itemsCustom: !1,
      itemsDesktop: [1199, 4],
      itemsDesktopSmall: [979, 3],
      itemsTablet: [768, 2],
      itemsTabletSmall: !1,
      itemsMobile: [479, 1],
      singleItem: !1,
      itemsScaleUp: !1,
      slideSpeed: 200,
      paginationSpeed: 800,
      rewindSpeed: 1000,
      autoPlay: !1,
      stopOnHover: !1,
      navigation: !1,
      navigationText: ["prev", "next"],
      rewindNav: !0,
      scrollPerPage: !1,
      pagination: !0,
      paginationNumbers: !1,
      responsive: !0,
      responsiveRefreshRate: 200,
      responsiveBaseWidth: c,
      baseClass: "owl-carousel",
      theme: "owl-theme",
      lazyLoad: !1,
      lazyFollow: !0,
      lazyEffect: "fade",
      autoHeight: !1,
      jsonPath: !1,
      jsonSuccess: !1,
      dragBeforeAnimFinish: !0,
      mouseDrag: !0,
      touchDrag: !0,
      addClassActive: !1,
      transitionStyle: !1,
      beforeUpdate: !1,
      afterUpdate: !1,
      beforeInit: !1,
      afterInit: !1,
      beforeMove: !1,
      afterMove: !1,
      afterAction: !1,
      startDragging: !1,
      afterLazyLoad: !1,
  };
})(jQuery, window, document);
/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/
(function(a) {
  a.fn.counterUp = function(b) {
      var c = a.extend({
          time: 400,
          delay: 10
      }, b);
      return this.each(function() {
          var e = a(this),
              f = c,
              d = function() {
                  var p = [],
                      h = f.time / f.delay,
                      k = e.text(),
                      v = /[0-9]+,[0-9]+/.test(k);
                  k = k.replace(/,/g, "");
                  var g = /^[0-9]+$/.test(k),
                      t = /^[0-9]+\.[0-9]+$/.test(k),
                      r = t ? (k.split(".")[1] || []).length : 0;
                  for (var m = h; m >= 1; m--) {
                      var j = parseInt((k / h) * m);
                      t && (j = parseFloat((k / h) * m).toFixed(r));
                      if (v) {
                          while (/(\d+)(\d{3})/.test(j.toString())) {
                              j = j.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                          }
                      }
                      p.unshift(j);
                  }
                  e.data("counterup-nums", p);
                  e.text("0");
                  var q = function() {
                      e.text(e.data("counterup-nums").shift());
                      if (e.data("counterup-nums").length) {
                          setTimeout(e.data("counterup-func"), f.delay);
                      } else {
                          delete e.data("counterup-nums");
                          e.data("counterup-nums", null);
                          e.data("counterup-func", null);
                      }
                  };
                  e.data("counterup-func", q);
                  setTimeout(e.data("counterup-func"), f.delay);
              };
          e.waypoint(d, {
              offset: "100%",
              triggerOnce: !0
          });
      });
  };
})(jQuery);
/*!
* Masonry PACKAGED v4.0.0
* Cascading grid layout library
* http://masonry.desandro.com
* MIT License
* by David DeSandro
*/
!(function(a, b) {
  "function" == typeof define && define.amd ?
      define("jquery-bridget/jquery-bridget", ["jquery"], function(c) {
          b(a, c);
      }) :
      "object" == typeof module && module.exports ?
      (module.exports = b(a, require("jquery"))) :
      (a.jQueryBridget = b(a, a.jQuery));
})(window, function(b, f) {
  function a(k, m, e) {
      function l(i, q, u) {
          var s,
              p = "$()." + k + '("' + q + '")';
          return (
              i.each(function(o, r) {
                  var n = e.data(r, k);
                  if (!n) {
                      return void c(
                          k + " not initialized. Cannot call methods, i.e. " + p
                      );
                  }
                  var v = n[q];
                  if (!v || "_" == q.charAt(0)) {
                      return void c(p + " is not a valid method");
                  }
                  var w = v.apply(n, u);
                  s = void 0 === s ? w : s;
              }),
              void 0 !== s ? s : i
          );
      }

      function j(i, n) {
          i.each(function(p, r) {
              var q = e.data(r, k);
              q ? (q.option(n), q._init()) : ((q = new m(r, n)), e.data(r, k, q));
          });
      }
      (e = e || f || b.jQuery),
      e &&
          (m.prototype.option ||
              (m.prototype.option = function(i) {
                  e.isPlainObject(i) &&
                      (this.options = e.extend(!0, this.options, i));
              }),
              (e.fn[k] = function(i) {
                  if ("string" == typeof i) {
                      var n = g.call(arguments, 1);
                      return l(this, i, n);
                  }
                  return j(this, i), this;
              }),
              h(e));
  }

  function h(e) {
      !e || (e && e.bridget) || (e.bridget = a);
  }
  var g = Array.prototype.slice,
      d = b.console,
      c =
      "undefined" == typeof d ?
      function() {} :
      function(e) {
          d.error(e);
      };
  return h(f || b.jQuery), a;
}),
(function(a, b) {
  "function" == typeof define && define.amd ?
      define("ev-emitter/ev-emitter", b) :
      "object" == typeof module && module.exports ?
      (module.exports = b()) :
      (a.EvEmitter = b());
})(this, function() {
  function a() {}
  var b = a.prototype;
  return (
      (b.on = function(d, f) {
          if (d && f) {
              var c = (this._events = this._events || {}),
                  g = (c[d] = c[d] || []);
              return -1 == g.indexOf(f) && g.push(f), this;
          }
      }),
      (b.once = function(d, f) {
          if (d && f) {
              this.on(d, f);
              var c = (this._onceEvents = this._onceEvents || {}),
                  g = (c[d] = c[d] || []);
              return (g[f] = !0), this;
          }
      }),
      (b.off = function(d, f) {
          var c = this._events && this._events[d];
          if (c && c.length) {
              var g = c.indexOf(f);
              return -1 != g && c.splice(g, 1), this;
          }
      }),
      (b.emitEvent = function(d, h) {
          var c = this._events && this._events[d];
          if (c && c.length) {
              var k = 0,
                  j = c[k];
              h = h || [];
              for (var g = this._onceEvents && this._onceEvents[d]; j;) {
                  var f = g && g[j];
                  f && (this.off(d, j), delete g[j]),
                      j.apply(this, h),
                      (k += f ? 0 : 1),
                      (j = c[k]);
              }
              return this;
          }
      }),
      a
  );
}),
(function(a, b) {
  "function" == typeof define && define.amd ?
      define("get-size/get-size", [], function() {
          return b();
      }) :
      "object" == typeof module && module.exports ?
      (module.exports = b()) :
      (a.getSize = b());
})(window, function() {
  function q(d) {
      var h = parseFloat(d),
          a = -1 == d.indexOf("%") && !isNaN(h);
      return a && h;
  }

  function k() {}

  function g() {
      for (
          var d = {
                  width: 0,
                  height: 0,
                  innerWidth: 0,
                  innerHeight: 0,
                  outerWidth: 0,
                  outerHeight: 0,
              },
              h = 0; p > h; h++
      ) {
          var a = j[h];
          d[a] = 0;
      }
      return d;
  }

  function f(a) {
      var d = getComputedStyle(a);
      return (
          d ||
          m(
              "Style returned " +
              d +
              ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"
          ),
          d
      );
  }

  function c() {
      if (!l) {
          l = !0;
          var d = document.createElement("div");
          (d.style.width = "200px"),
          (d.style.padding = "1px 2px 3px 4px"),
          (d.style.borderStyle = "solid"),
          (d.style.borderWidth = "1px 2px 3px 4px"),
          (d.style.boxSizing = "border-box");
          var a = document.body || document.documentElement;
          a.appendChild(d);
          var h = f(d);
          (b.isBoxSizeOuter = v = 200 == q(h.width)), a.removeChild(d);
      }
  }

  function b(u) {
      if (
          (c(),
              "string" == typeof u && (u = document.querySelector(u)),
              u && "object" == typeof u && u.nodeType)
      ) {
          var h = f(u);
          if ("none" == h.display) {
              return g();
          }
          var G = {};
          (G.width = u.offsetWidth), (G.height = u.offsetHeight);
          for (
              var w = (G.isBorderBox = "border-box" == h.boxSizing), B = 0; p > B; B++
          ) {
              var o = j[B],
                  t = h[o],
                  n = parseFloat(t);
              G[o] = isNaN(n) ? 0 : n;
          }
          var i = G.paddingLeft + G.paddingRight,
              s = G.paddingTop + G.paddingBottom,
              D = G.marginLeft + G.marginRight,
              I = G.marginTop + G.marginBottom,
              H = G.borderLeftWidth + G.borderRightWidth,
              J = G.borderTopWidth + G.borderBottomWidth,
              A = w && v,
              C = q(h.width);
          C !== !1 && (G.width = C + (A ? 0 : i + H));
          var F = q(h.height);
          return (
              F !== !1 && (G.height = F + (A ? 0 : s + J)),
              (G.innerWidth = G.width - (i + H)),
              (G.innerHeight = G.height - (s + J)),
              (G.outerWidth = G.width + D),
              (G.outerHeight = G.height + I),
              G
          );
      }
  }
  var v,
      m =
      "undefined" == typeof console ?
      k :
      function(a) {
          console.error(a);
      },
      j = [
          "paddingLeft",
          "paddingRight",
          "paddingTop",
          "paddingBottom",
          "marginLeft",
          "marginRight",
          "marginTop",
          "marginBottom",
          "borderLeftWidth",
          "borderRightWidth",
          "borderTopWidth",
          "borderBottomWidth",
      ],
      p = j.length,
      l = !1;
  return b;
}),
(function(a, b) {
  "function" == typeof define && define.amd ?
      define("matches-selector/matches-selector", b) :
      "object" == typeof module && module.exports ?
      (module.exports = b()) :
      (a.matchesSelector = b());
})(window, function() {
  var a = (function() {
      var c = Element.prototype;
      if (c.matches) {
          return "matches";
      }
      if (c.matchesSelector) {
          return "matchesSelector";
      }
      for (var d = ["webkit", "moz", "ms", "o"], b = 0; b < d.length; b++) {
          var g = d[b],
              f = g + "MatchesSelector";
          if (c[f]) {
              return f;
          }
      }
  })();
  return function(c, b) {
      return c[a](b);
  };
}),
(function(a, b) {
  "function" == typeof define && define.amd ?
      define(
          "fizzy-ui-utils/utils",
          ["matches-selector/matches-selector"],
          function(c) {
              return b(a, c);
          }
      ) :
      "object" == typeof module && module.exports ?
      (module.exports = b(a, require("desandro-matches-selector"))) :
      (a.fizzyUIUtils = b(a, a.matchesSelector));
})(window, function(b, c) {
  var a = {};
  (a.extend = function(g, h) {
      for (var f in h) {
          g[f] = h[f];
      }
      return g;
  }),
  (a.modulo = function(f, g) {
      return ((f % g) + g) % g;
  }),
  (a.makeArray = function(g) {
      var h = [];
      if (Array.isArray(g)) {
          h = g;
      } else {
          if (g && "number" == typeof g.length) {
              for (var f = 0; f < g.length; f++) {
                  h.push(g[f]);
              }
          } else {
              h.push(g);
          }
      }
      return h;
  }),
  (a.removeFrom = function(g, h) {
      var f = g.indexOf(h); -
      1 != f && g.splice(f, 1);
  }),
  (a.getParent = function(f, e) {
      for (; f != document.body;) {
          if (((f = f.parentNode), c(f, e))) {
              return f;
          }
      }
  }),
  (a.getQueryElement = function(e) {
      return "string" == typeof e ? document.querySelector(e) : e;
  }),
  (a.handleEvent = function(f) {
      var g = "on" + f.type;
      this[g] && this[g](f);
  }),
  (a.filterFindElements = function(e, g) {
      e = a.makeArray(e);
      var f = [];
      return (
          e.forEach(function(j) {
              if (j instanceof HTMLElement) {
                  if (!g) {
                      return void f.push(j);
                  }
                  c(j, g) && f.push(j);
                  for (var h = j.querySelectorAll(g), k = 0; k < h.length; k++) {
                      f.push(h[k]);
                  }
              }
          }),
          f
      );
  }),
  (a.debounceMethod = function(g, h, f) {
      var k = g.prototype[h],
          j = h + "Timeout";
      g.prototype[h] = function() {
          var i = this[j];
          i && clearTimeout(i);
          var m = arguments,
              l = this;
          this[j] = setTimeout(function() {
              k.apply(l, m), delete l[j];
          }, f || 100);
      };
  }),
  (a.docReady = function(e) {
      "complete" == document.readyState ?
          e() :
          document.addEventListener("DOMContentLoaded", e);
  }),
  (a.toDashed = function(e) {
      return e
          .replace(/(.)([A-Z])/g, function(g, h, f) {
              return h + "-" + f;
          })
          .toLowerCase();
  });
  var d = b.console;
  return (
      (a.htmlInit = function(f, g) {
          a.docReady(function() {
              var l = a.toDashed(g),
                  k = "data-" + l,
                  e = document.querySelectorAll("[" + k + "]"),
                  j = document.querySelectorAll(".js-" + l),
                  i = a.makeArray(e).concat(a.makeArray(j)),
                  m = k + "-options",
                  n = b.jQuery;
              i.forEach(function(q) {
                  var p,
                      u = q.getAttribute(k) || q.getAttribute(m);
                  try {
                      p = u && JSON.parse(u);
                  } catch (o) {
                      return void(
                          d &&
                          d.error("Error parsing " + k + " on " + q.className + ": " + o)
                      );
                  }
                  var s = new f(q, p);
                  n && n.data(q, g, s);
              });
          });
      }),
      a
  );
}),
(function(a, b) {
  "function" == typeof define && define.amd ?
      define(
          "outlayer/item",
          ["ev-emitter/ev-emitter", "get-size/get-size"],
          function(c, d) {
              return b(a, c, d);
          }
      ) :
      "object" == typeof module && module.exports ?
      (module.exports = b(a, require("ev-emitter"), require("get-size"))) :
      ((a.Outlayer = {}), (a.Outlayer.Item = b(a, a.EvEmitter, a.getSize)));
})(window, function(C, x, q) {
  function j(a) {
      for (var c in a) {
          return !1;
      }
      return (c = null), !0;
  }

  function g(a, c) {
      a &&
          ((this.element = a),
              (this.layout = c),
              (this.position = {
                  x: 0,
                  y: 0
              }),
              this._create());
  }

  function b(a) {
      return a.replace(/([A-Z])/g, function(c) {
          return "-" + c.toLowerCase();
      });
  }
  var D = document.documentElement.style,
      A = "string" == typeof D.transition ? "transition" : "WebkitTransition",
      v = "string" == typeof D.transform ? "transform" : "WebkitTransform",
      B = {
          WebkitTransition: "webkitTransitionEnd",
          transition: "transitionend",
      } [A],
      y = [v, A, A + "Duration", A + "Property"],
      z = (g.prototype = Object.create(x.prototype));
  (z.constructor = g),
  (z._create = function() {
      (this._transn = {
          ingProperties: {},
          clean: {},
          onEnd: {}
      }),
      this.css({
          position: "absolute"
      });
  }),
  (z.handleEvent = function(a) {
      var c = "on" + a.type;
      this[c] && this[c](a);
  }),
  (z.getSize = function() {
      this.size = q(this.element);
  }),
  (z.css = function(c) {
      var d = this.element.style;
      for (var a in c) {
          var f = y[a] || a;
          d[f] = c[a];
      }
  }),
  (z.getPosition = function() {
      var f = getComputedStyle(this.element),
          m = this.layout._getOption("originLeft"),
          d = this.layout._getOption("originTop"),
          E = f[m ? "left" : "right"],
          u = f[d ? "top" : "bottom"],
          l = this.layout.size,
          h = -1 != E.indexOf("%") ?
          (parseFloat(E) / 100) * l.width :
          parseInt(E, 10),
          c = -1 != u.indexOf("%") ?
          (parseFloat(u) / 100) * l.height :
          parseInt(u, 10);
      (h = isNaN(h) ? 0 : h),
      (c = isNaN(c) ? 0 : c),
      (h -= m ? l.paddingLeft : l.paddingRight),
      (c -= d ? l.paddingTop : l.paddingBottom),
      (this.position.x = h),
      (this.position.y = c);
  }),
  (z.layoutPosition = function() {
      var L = this.layout.size,
          G = {},
          E = this.layout._getOption("originLeft"),
          m = this.layout._getOption("originTop"),
          l = E ? "paddingLeft" : "paddingRight",
          f = E ? "left" : "right",
          M = E ? "right" : "left",
          J = this.position.x + L[l];
      (G[f] = this.getXValue(J)), (G[M] = "");
      var F = m ? "paddingTop" : "paddingBottom",
          K = m ? "top" : "bottom",
          H = m ? "bottom" : "top",
          I = this.position.y + L[F];
      (G[K] = this.getYValue(I)),
      (G[H] = ""),
      this.css(G),
          this.emitEvent("layout", [this]);
  }),
  (z.getXValue = function(a) {
      var c = this.layout._getOption("horizontal");
      return this.layout.options.percentPosition && !c ?
          (a / this.layout.size.width) * 100 + "%" :
          a + "px";
  }),
  (z.getYValue = function(a) {
      var c = this.layout._getOption("horizontal");
      return this.layout.options.percentPosition && c ?
          (a / this.layout.size.height) * 100 + "%" :
          a + "px";
  }),
  (z._transitionTo = function(H, E) {
      this.getPosition();
      var l = this.position.x,
          f = this.position.y,
          d = parseInt(H, 10),
          c = parseInt(E, 10),
          I = d === this.position.x && c === this.position.y;
      if ((this.setPosition(H, E), I && !this.isTransitioning)) {
          return void this.layoutPosition();
      }
      var F = H - l,
          m = E - f,
          G = {};
      (G.transform = this.getTranslate(F, m)),
      this.transition({
          to: G,
          onTransitionEnd: {
              transform: this.layoutPosition
          },
          isCleaning: !0,
      });
  }),
  (z.getTranslate = function(c, d) {
      var a = this.layout._getOption("originLeft"),
          f = this.layout._getOption("originTop");
      return (
          (c = a ? c : -c),
          (d = f ? d : -d),
          "translate3d(" + c + "px, " + d + "px, 0)"
      );
  }),
  (z.goTo = function(a, c) {
      this.setPosition(a, c), this.layoutPosition();
  }),
  (z.moveTo = z._transitionTo),
  (z.setPosition = function(a, c) {
      (this.position.x = parseInt(a, 10)),
      (this.position.y = parseInt(c, 10));
  }),
  (z._nonTransition = function(a) {
      this.css(a.to), a.isCleaning && this._removeStyles(a.to);
      for (var c in a.onTransitionEnd) {
          a.onTransitionEnd[c].call(this);
      }
  }),
  (z._transition = function(c) {
      if (!parseFloat(this.layout.options.transitionDuration)) {
          return void this._nonTransition(c);
      }
      var d = this._transn;
      for (var a in c.onTransitionEnd) {
          d.onEnd[a] = c.onTransitionEnd[a];
      }
      for (a in c.to) {
          (d.ingProperties[a] = !0), c.isCleaning && (d.clean[a] = !0);
      }
      if (c.from) {
          this.css(c.from);
          var f = this.element.offsetHeight;
          f = null;
      }
      this.enableTransition(c.to),
          this.css(c.to),
          (this.isTransitioning = !0);
  });
  var p = "opacity," + b(y.transform || "transform");
  (z.enableTransition = function() {
      this.isTransitioning ||
          (this.css({
                  transitionProperty: p,
                  transitionDuration: this.layout.options.transitionDuration,
              }),
              this.element.addEventListener(B, this, !1));
  }),
  (z.transition = g.prototype[A ? "_transition" : "_nonTransition"]),
  (z.onwebkitTransitionEnd = function(a) {
      this.ontransitionend(a);
  }),
  (z.onotransitionend = function(a) {
      this.ontransitionend(a);
  });
  var w = {
      "-webkit-transform": "transform"
  };
  (z.ontransitionend = function(c) {
      if (c.target === this.element) {
          var d = this._transn,
              a = w[c.propertyName] || c.propertyName;
          if (
              (delete d.ingProperties[a],
                  j(d.ingProperties) && this.disableTransition(),
                  a in d.clean &&
                  ((this.element.style[c.propertyName] = ""), delete d.clean[a]),
                  a in d.onEnd)
          ) {
              var f = d.onEnd[a];
              f.call(this), delete d.onEnd[a];
          }
          this.emitEvent("transitionEnd", [this]);
      }
  }),
  (z.disableTransition = function() {
      this.removeTransitionStyles(),
          this.element.removeEventListener(B, this, !1),
          (this.isTransitioning = !1);
  }),
  (z._removeStyles = function(c) {
      var d = {};
      for (var a in c) {
          d[a] = "";
      }
      this.css(d);
  });
  var k = {
      transitionProperty: "",
      transitionDuration: ""
  };
  return (
      (z.removeTransitionStyles = function() {
          this.css(k);
      }),
      (z.removeElem = function() {
          this.element.parentNode.removeChild(this.element),
              this.css({
                  display: ""
              }),
              this.emitEvent("remove", [this]);
      }),
      (z.remove = function() {
          return A && parseFloat(this.layout.options.transitionDuration) ?
              (this.once("transitionEnd", function() {
                      this.removeElem();
                  }),
                  void this.hide()) :
              void this.removeElem();
      }),
      (z.reveal = function() {
          delete this.isHidden, this.css({
              display: ""
          });
          var c = this.layout.options,
              d = {},
              a = this.getHideRevealTransitionEndProperty("visibleStyle");
          (d[a] = this.onRevealTransitionEnd),
          this.transition({
              from: c.hiddenStyle,
              to: c.visibleStyle,
              isCleaning: !0,
              onTransitionEnd: d,
          });
      }),
      (z.onRevealTransitionEnd = function() {
          this.isHidden || this.emitEvent("reveal");
      }),
      (z.getHideRevealTransitionEndProperty = function(c) {
          var d = this.layout.options[c];
          if (d.opacity) {
              return "opacity";
          }
          for (var a in d) {
              return a;
          }
      }),
      (z.hide = function() {
          (this.isHidden = !0), this.css({
              display: ""
          });
          var c = this.layout.options,
              d = {},
              a = this.getHideRevealTransitionEndProperty("hiddenStyle");
          (d[a] = this.onHideTransitionEnd),
          this.transition({
              from: c.visibleStyle,
              to: c.hiddenStyle,
              isCleaning: !0,
              onTransitionEnd: d,
          });
      }),
      (z.onHideTransitionEnd = function() {
          this.isHidden &&
              (this.css({
                  display: "none"
              }), this.emitEvent("hide"));
      }),
      (z.destroy = function() {
          this.css({
              position: "",
              left: "",
              right: "",
              top: "",
              bottom: "",
              transition: "",
              transform: "",
          });
      }),
      g
  );
}),
(function(a, b) {
  "function" == typeof define && define.amd ?
      define(
          "outlayer/outlayer",
          [
              "ev-emitter/ev-emitter",
              "get-size/get-size",
              "fizzy-ui-utils/utils",
              "./item",
          ],
          function(c, f, e, d) {
              return b(a, c, f, e, d);
          }
      ) :
      "object" == typeof module && module.exports ?
      (module.exports = b(
          a,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
      )) :
      (a.Outlayer = b(
          a,
          a.EvEmitter,
          a.getSize,
          a.fizzyUIUtils,
          a.Outlayer.Item
      ));
})(window, function(y, p, k, g, f) {
  function b(c, h) {
      var a = g.getQueryElement(c);
      if (!a) {
          return void(
              w &&
              w.error(
                  "Bad element for " + this.constructor.namespace + ": " + (a || c)
              )
          );
      }
      (this.element = a),
      m && (this.$element = m(this.element)),
          (this.options = g.extend({}, this.constructor.defaults)),
          this.option(h);
      var l = ++q;
      (this.element.outlayerGUID = l), (v[l] = this), this._create();
      var d = this._getOption("initLayout");
      d && this.layout();
  }

  function z(a) {
      function c() {
          a.apply(this, arguments);
      }
      return (
          (c.prototype = Object.create(a.prototype)),
          (c.prototype.constructor = c),
          c
      );
  }
  var w = y.console,
      m = y.jQuery,
      x = function() {},
      q = 0,
      v = {};
  (b.namespace = "outlayer"),
  (b.Item = f),
  (b.defaults = {
      containerStyle: {
          position: "relative"
      },
      initLayout: !0,
      originLeft: !0,
      originTop: !0,
      resize: !0,
      resizeContainer: !0,
      transitionDuration: "0.4s",
      hiddenStyle: {
          opacity: 0,
          transform: "scale(0.001)"
      },
      visibleStyle: {
          opacity: 1,
          transform: "scale(1)"
      },
  });
  var j = b.prototype;
  return (
      g.extend(j, p.prototype),
      (j.option = function(a) {
          g.extend(this.options, a);
      }),
      (j._getOption = function(a) {
          var c = this.constructor.compatOptions[a];
          return c && void 0 !== this.options[c] ?
              this.options[c] :
              this.options[a];
      }),
      (b.compatOptions = {
          initLayout: "isInitLayout",
          horizontal: "isHorizontal",
          layoutInstant: "isLayoutInstant",
          originLeft: "isOriginLeft",
          originTop: "isOriginTop",
          resize: "isResizeBound",
          resizeContainer: "isResizingContainer",
      }),
      (j._create = function() {
          this.reloadItems(),
              (this.stamps = []),
              this.stamp(this.options.stamp),
              g.extend(this.element.style, this.options.containerStyle);
          var a = this._getOption("resize");
          a && this.bindResize();
      }),
      (j.reloadItems = function() {
          this.items = this._itemize(this.element.children);
      }),
      (j._itemize = function(c) {
          for (
              var l = this._filterFindItemElements(c),
                  a = this.constructor.Item,
                  A = [],
                  u = 0; u < l.length; u++
          ) {
              var h = l[u],
                  d = new a(h, this);
              A.push(d);
          }
          return A;
      }),
      (j._filterFindItemElements = function(a) {
          return g.filterFindElements(a, this.options.itemSelector);
      }),
      (j.getItemElements = function() {
          return this.items.map(function(a) {
              return a.element;
          });
      }),
      (j.layout = function() {
          this._resetLayout(), this._manageStamps();
          var a = this._getOption("layoutInstant"),
              c = void 0 !== a ? a : !this._isLayoutInited;
          this.layoutItems(this.items, c), (this._isLayoutInited = !0);
      }),
      (j._init = j.layout),
      (j._resetLayout = function() {
          this.getSize();
      }),
      (j.getSize = function() {
          this.size = k(this.element);
      }),
      (j._getMeasurement = function(a, c) {
          var h,
              d = this.options[a];
          d
              ?
              ("string" == typeof d ?
                  (h = this.element.querySelector(d)) :
                  d instanceof HTMLElement && (h = d),
                  (this[a] = h ? k(h)[c] : d)) :
              (this[a] = 0);
      }),
      (j.layoutItems = function(a, c) {
          (a = this._getItemsForLayout(a)),
          this._layoutItems(a, c),
              this._postLayout();
      }),
      (j._getItemsForLayout = function(a) {
          return a.filter(function(c) {
              return !c.isIgnored;
          });
      }),
      (j._layoutItems = function(c, d) {
          if ((this._emitCompleteOnItems("layout", c), c && c.length)) {
              var a = [];
              c.forEach(function(e) {
                      var h = this._getItemLayoutPosition(e);
                      (h.item = e), (h.isInstant = d || e.isLayoutInstant), a.push(h);
                  }, this),
                  this._processLayoutQueue(a);
          }
      }),
      (j._getItemLayoutPosition = function() {
          return {
              x: 0,
              y: 0
          };
      }),
      (j._processLayoutQueue = function(a) {
          a.forEach(function(c) {
              this._positionItem(c.item, c.x, c.y, c.isInstant);
          }, this);
      }),
      (j._positionItem = function(c, d, a, h) {
          h ? c.goTo(d, a) : c.moveTo(d, a);
      }),
      (j._postLayout = function() {
          this.resizeContainer();
      }),
      (j.resizeContainer = function() {
          var a = this._getOption("resizeContainer");
          if (a) {
              var c = this._getContainerSize();
              c &&
                  (this._setContainerMeasure(c.width, !0),
                      this._setContainerMeasure(c.height, !1));
          }
      }),
      (j._getContainerSize = x),
      (j._setContainerMeasure = function(c, d) {
          if (void 0 !== c) {
              var a = this.size;
              a.isBorderBox &&
                  (c += d ?
                      a.paddingLeft +
                      a.paddingRight +
                      a.borderLeftWidth +
                      a.borderRightWidth :
                      a.paddingBottom +
                      a.paddingTop +
                      a.borderTopWidth +
                      a.borderBottomWidth),
                  (c = Math.max(c, 0)),
                  (this.element.style[d ? "width" : "height"] = c + "px");
          }
      }),
      (j._emitCompleteOnItems = function(c, l) {
          function a() {
              u.dispatchEvent(c + "Complete", null, [l]);
          }

          function A() {
              d++, d == h && a();
          }
          var u = this,
              h = l.length;
          if (!l || !h) {
              return void a();
          }
          var d = 0;
          l.forEach(function(i) {
              i.once(c, A);
          });
      }),
      (j.dispatchEvent = function(c, d, a) {
          var l = d ? [d].concat(a) : a;
          if ((this.emitEvent(c, l), m)) {
              if (((this.$element = this.$element || m(this.element)), d)) {
                  var h = m.Event(d);
                  (h.type = c), this.$element.trigger(h, a);
              } else {
                  this.$element.trigger(c, a);
              }
          }
      }),
      (j.ignore = function(a) {
          var c = this.getItem(a);
          c && (c.isIgnored = !0);
      }),
      (j.unignore = function(a) {
          var c = this.getItem(a);
          c && delete c.isIgnored;
      }),
      (j.stamp = function(a) {
          (a = this._find(a)),
          a &&
              ((this.stamps = this.stamps.concat(a)),
                  a.forEach(this.ignore, this));
      }),
      (j.unstamp = function(a) {
          (a = this._find(a)),
          a &&
              a.forEach(function(c) {
                  g.removeFrom(this.stamps, c), this.unignore(c);
              }, this);
      }),
      (j._find = function(a) {
          return a ?
              ("string" == typeof a && (a = this.element.querySelectorAll(a)),
                  (a = g.makeArray(a))) :
              void 0;
      }),
      (j._manageStamps = function() {
          this.stamps &&
              this.stamps.length &&
              (this._getBoundingRect(),
                  this.stamps.forEach(this._manageStamp, this));
      }),
      (j._getBoundingRect = function() {
          var a = this.element.getBoundingClientRect(),
              c = this.size;
          this._boundingRect = {
              left: a.left + c.paddingLeft + c.borderLeftWidth,
              top: a.top + c.paddingTop + c.borderTopWidth,
              right: a.right - (c.paddingRight + c.borderRightWidth),
              bottom: a.bottom - (c.paddingBottom + c.borderBottomWidth),
          };
      }),
      (j._manageStamp = x),
      (j._getElementOffset = function(a) {
          var d = a.getBoundingClientRect(),
              i = this._boundingRect,
              h = k(a),
              c = {
                  left: d.left - i.left - h.marginLeft,
                  top: d.top - i.top - h.marginTop,
                  right: i.right - d.right - h.marginRight,
                  bottom: i.bottom - d.bottom - h.marginBottom,
              };
          return c;
      }),
      (j.handleEvent = g.handleEvent),
      (j.bindResize = function() {
          y.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (j.unbindResize = function() {
          y.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (j.onresize = function() {
          this.resize();
      }),
      g.debounceMethod(b, "onresize", 100),
      (j.resize = function() {
          this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (j.needsResizeLayout = function() {
          var a = k(this.element),
              c = this.size && a;
          return c && a.innerWidth !== this.size.innerWidth;
      }),
      (j.addItems = function(a) {
          var c = this._itemize(a);
          return c.length && (this.items = this.items.concat(c)), c;
      }),
      (j.appended = function(a) {
          var c = this.addItems(a);
          c.length && (this.layoutItems(c, !0), this.reveal(c));
      }),
      (j.prepended = function(c) {
          var d = this._itemize(c);
          if (d.length) {
              var a = this.items.slice(0);
              (this.items = d.concat(a)),
              this._resetLayout(),
                  this._manageStamps(),
                  this.layoutItems(d, !0),
                  this.reveal(d),
                  this.layoutItems(a);
          }
      }),
      (j.reveal = function(a) {
          this._emitCompleteOnItems("reveal", a),
              a &&
              a.length &&
              a.forEach(function(c) {
                  c.reveal();
              });
      }),
      (j.hide = function(a) {
          this._emitCompleteOnItems("hide", a),
              a &&
              a.length &&
              a.forEach(function(c) {
                  c.hide();
              });
      }),
      (j.revealItemElements = function(a) {
          var c = this.getItems(a);
          this.reveal(c);
      }),
      (j.hideItemElements = function(a) {
          var c = this.getItems(a);
          this.hide(c);
      }),
      (j.getItem = function(c) {
          for (var d = 0; d < this.items.length; d++) {
              var a = this.items[d];
              if (a.element == c) {
                  return a;
              }
          }
      }),
      (j.getItems = function(a) {
          a = g.makeArray(a);
          var c = [];
          return (
              a.forEach(function(e) {
                  var d = this.getItem(e);
                  d && c.push(d);
              }, this),
              c
          );
      }),
      (j.remove = function(a) {
          var c = this.getItems(a);
          this._emitCompleteOnItems("remove", c),
              c &&
              c.length &&
              c.forEach(function(d) {
                  d.remove(), g.removeFrom(this.items, d);
              }, this);
      }),
      (j.destroy = function() {
          var a = this.element.style;
          (a.height = ""),
          (a.position = ""),
          (a.width = ""),
          this.items.forEach(function(d) {
                  d.destroy();
              }),
              this.unbindResize();
          var c = this.element.outlayerGUID;
          delete v[c],
              delete this.element.outlayerGUID,
              m && m.removeData(this.element, this.constructor.namespace);
      }),
      (b.data = function(a) {
          a = g.getQueryElement(a);
          var c = a && a.outlayerGUID;
          return c && v[c];
      }),
      (b.create = function(c, d) {
          var a = z(b);
          return (
              (a.defaults = g.extend({}, b.defaults)),
              g.extend(a.defaults, d),
              (a.compatOptions = g.extend({}, b.compatOptions)),
              (a.namespace = c),
              (a.data = b.data),
              (a.Item = z(f)),
              g.htmlInit(a, c),
              m && m.bridget && m.bridget(c, a),
              a
          );
      }),
      (b.Item = f),
      b
  );
}),
(function(a, b) {
  "function" == typeof define && define.amd ?
      define(["outlayer/outlayer", "get-size/get-size"], b) :
      "object" == typeof module && module.exports ?
      (module.exports = b(require("outlayer"), require("get-size"))) :
      (a.Masonry = b(a.Outlayer, a.getSize));
})(window, function(b, c) {
  var a = b.create("masonry");
  return (
      (a.compatOptions.fitWidth = "isFitWidth"),
      (a.prototype._resetLayout = function() {
          this.getSize(),
              this._getMeasurement("columnWidth", "outerWidth"),
              this._getMeasurement("gutter", "outerWidth"),
              this.measureColumns(),
              (this.colYs = []);
          for (var d = 0; d < this.cols; d++) {
              this.colYs.push(0);
          }
          this.maxY = 0;
      }),
      (a.prototype.measureColumns = function() {
          if ((this.getContainerWidth(), !this.columnWidth)) {
              var f = this.items[0],
                  e = f && f.element;
              this.columnWidth = (e && c(e).outerWidth) || this.containerWidth;
          }
          var k = (this.columnWidth += this.gutter),
              j = this.containerWidth + this.gutter,
              h = j / k,
              g = k - (j % k),
              d = g && 1 > g ? "round" : "floor";
          (h = Math[d](h)), (this.cols = Math.max(h, 1));
      }),
      (a.prototype.getContainerWidth = function() {
          var e = this._getOption("fitWidth"),
              d = e ? this.element.parentNode : this.element,
              f = c(d);
          this.containerWidth = f && f.innerWidth;
      }),
      (a.prototype._getItemLayoutPosition = function(w) {
          w.getSize();
          var m = w.size.outerWidth % this.columnWidth,
              k = m && 1 > m ? "round" : "ceil",
              j = Math[k](w.size.outerWidth / this.columnWidth);
          j = Math.min(j, this.cols);
          for (
              var g = this._getColGroup(j),
                  f = Math.min.apply(Math, g),
                  x = g.indexOf(f),
                  q = {
                      x: this.columnWidth * x,
                      y: f
                  },
                  l = f + w.size.outerHeight,
                  v = this.cols + 1 - g.length,
                  p = 0; v > p; p++
          ) {
              this.colYs[x + p] = l;
          }
          return q;
      }),
      (a.prototype._getColGroup = function(f) {
          if (2 > f) {
              return this.colYs;
          }
          for (var g = [], d = this.cols + 1 - f, j = 0; d > j; j++) {
              var h = this.colYs.slice(j, j + f);
              g[j] = Math.max.apply(Math, h);
          }
          return g;
      }),
      (a.prototype._manageStamp = function(v) {
          var j = c(v),
              g = this._getElementOffset(v),
              f = this._getOption("originLeft"),
              e = f ? g.left : g.right,
              w = e + j.outerWidth,
              p = Math.floor(e / this.columnWidth);
          p = Math.max(0, p);
          var k = Math.floor(w / this.columnWidth);
          (k -= w % this.columnWidth ? 0 : 1), (k = Math.min(this.cols - 1, k));
          for (
              var q = this._getOption("originTop"),
                  l = (q ? g.top : g.bottom) + j.outerHeight,
                  m = p; k >= m; m++
          ) {
              this.colYs[m] = Math.max(l, this.colYs[m]);
          }
      }),
      (a.prototype._getContainerSize = function() {
          this.maxY = Math.max.apply(Math, this.colYs);
          var d = {
              height: this.maxY
          };
          return (
              this._getOption("fitWidth") &&
              (d.width = this._getContainerFitWidth()),
              d
          );
      }),
      (a.prototype._getContainerFitWidth = function() {
          for (var d = 0, f = this.cols; --f && 0 === this.colYs[f];) {
              d++;
          }
          return (this.cols - d) * this.columnWidth - this.gutter;
      }),
      (a.prototype.needsResizeLayout = function() {
          var d = this.containerWidth;
          return this.getContainerWidth(), d != this.containerWidth;
      }),
      a
  );
});
/*!
* imagesLoaded PACKAGED v4.1.0
* JavaScript is all like "You images are done yet or what?"
* MIT License
*/
!(function(a, b) {
  "function" == typeof define && define.amd ?
      define("ev-emitter/ev-emitter", b) :
      "object" == typeof module && module.exports ?
      (module.exports = b()) :
      (a.EvEmitter = b());
})(this, function() {
  function a() {}
  var b = a.prototype;
  return (
      (b.on = function(d, f) {
          if (d && f) {
              var c = (this._events = this._events || {}),
                  g = (c[d] = c[d] || []);
              return -1 == g.indexOf(f) && g.push(f), this;
          }
      }),
      (b.once = function(d, f) {
          if (d && f) {
              this.on(d, f);
              var c = (this._onceEvents = this._onceEvents || {}),
                  g = (c[d] = c[d] || []);
              return (g[f] = !0), this;
          }
      }),
      (b.off = function(d, f) {
          var c = this._events && this._events[d];
          if (c && c.length) {
              var g = c.indexOf(f);
              return -1 != g && c.splice(g, 1), this;
          }
      }),
      (b.emitEvent = function(d, h) {
          var c = this._events && this._events[d];
          if (c && c.length) {
              var k = 0,
                  j = c[k];
              h = h || [];
              for (var g = this._onceEvents && this._onceEvents[d]; j;) {
                  var f = g && g[j];
                  f && (this.off(d, j), delete g[j]),
                      j.apply(this, h),
                      (k += f ? 0 : 1),
                      (j = c[k]);
              }
              return this;
          }
      }),
      a
  );
}),
(function(a, b) {
  "function" == typeof define && define.amd ?
      define(["ev-emitter/ev-emitter"], function(c) {
          return b(a, c);
      }) :
      "object" == typeof module && module.exports ?
      (module.exports = b(a, require("ev-emitter"))) :
      (a.imagesLoaded = b(a, a.EvEmitter));
})(window, function(p, k) {
  function g(d, h) {
      for (var a in h) {
          d[a] = h[a];
      }
      return d;
  }

  function f(d) {
      var h = [];
      if (Array.isArray(d)) {
          h = d;
      } else {
          if ("number" == typeof d.length) {
              for (var a = 0; a < d.length; a++) {
                  h.push(d[a]);
              }
          } else {
              h.push(d);
          }
      }
      return h;
  }

  function c(a, h, d) {
      return this instanceof c ?
          ("string" == typeof a && (a = document.querySelectorAll(a)),
              (this.elements = f(a)),
              (this.options = g({}, this.options)),
              "function" == typeof h ? (d = h) : g(this.options, h),
              d && this.on("always", d),
              this.getImages(),
              j && (this.jqDeferred = new j.Deferred()),
              void setTimeout(
                  function() {
                      this.check();
                  }.bind(this)
              )) :
          new c(a, h, d);
  }

  function b(a) {
      this.img = a;
  }

  function q(a, d) {
      (this.url = a), (this.element = d), (this.img = new Image());
  }
  var j = p.jQuery,
      m = p.console;
  (c.prototype = Object.create(k.prototype)),
  (c.prototype.options = {}),
  (c.prototype.getImages = function() {
      (this.images = []), this.elements.forEach(this.addElementImages, this);
  }),
  (c.prototype.addElementImages = function(d) {
      "IMG" == d.nodeName && this.addImage(d),
          this.options.background === !0 && this.addElementBackgroundImages(d);
      var v = d.nodeType;
      if (v && l[v]) {
          for (var a = d.querySelectorAll("img"), x = 0; x < a.length; x++) {
              var w = a[x];
              this.addImage(w);
          }
          if ("string" == typeof this.options.background) {
              var u = d.querySelectorAll(this.options.background);
              for (x = 0; x < u.length; x++) {
                  var h = u[x];
                  this.addElementBackgroundImages(h);
              }
          }
      }
  });
  var l = {
      1: !0,
      9: !0,
      11: !0
  };
  return (
      (c.prototype.addElementBackgroundImages = function(d) {
          var h = getComputedStyle(d);
          if (h) {
              for (
                  var a = /url\((['"])?(.*?)\1\)/gi, s = a.exec(h.backgroundImage); null !== s;

              ) {
                  var r = s && s[2];
                  r && this.addBackground(r, d), (s = a.exec(h.backgroundImage));
              }
          }
      }),
      (c.prototype.addImage = function(a) {
          var d = new b(a);
          this.images.push(d);
      }),
      (c.prototype.addBackground = function(d, h) {
          var a = new q(d, h);
          this.images.push(a);
      }),
      (c.prototype.check = function() {
          function a(h, e, o) {
              setTimeout(function() {
                  d.progress(h, e, o);
              });
          }
          var d = this;
          return (
              (this.progressedCount = 0),
              (this.hasAnyBroken = !1),
              this.images.length ?
              void this.images.forEach(function(h) {
                  h.once("progress", a), h.check();
              }) :
              void this.complete()
          );
      }),
      (c.prototype.progress = function(d, h, a) {
          this.progressedCount++,
              (this.hasAnyBroken = this.hasAnyBroken || !d.isLoaded),
              this.emitEvent("progress", [this, d, h]),
              this.jqDeferred &&
              this.jqDeferred.notify &&
              this.jqDeferred.notify(this, d),
              this.progressedCount == this.images.length && this.complete(),
              this.options.debug && m && m.log("progress: " + a, d, h);
      }),
      (c.prototype.complete = function() {
          var a = this.hasAnyBroken ? "fail" : "done";
          if (
              ((this.isComplete = !0),
                  this.emitEvent(a, [this]),
                  this.emitEvent("always", [this]),
                  this.jqDeferred)
          ) {
              var d = this.hasAnyBroken ? "reject" : "resolve";
              this.jqDeferred[d](this);
          }
      }),
      (b.prototype = Object.create(k.prototype)),
      (b.prototype.check = function() {
          var a = this.getIsImageComplete();
          return a ?
              void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") :
              ((this.proxyImage = new Image()),
                  this.proxyImage.addEventListener("load", this),
                  this.proxyImage.addEventListener("error", this),
                  this.img.addEventListener("load", this),
                  this.img.addEventListener("error", this),
                  void(this.proxyImage.src = this.img.src));
      }),
      (b.prototype.getIsImageComplete = function() {
          return this.img.complete && void 0 !== this.img.naturalWidth;
      }),
      (b.prototype.confirm = function(a, d) {
          (this.isLoaded = a), this.emitEvent("progress", [this, this.img, d]);
      }),
      (b.prototype.handleEvent = function(a) {
          var d = "on" + a.type;
          this[d] && this[d](a);
      }),
      (b.prototype.onload = function() {
          this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (b.prototype.onerror = function() {
          this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (b.prototype.unbindEvents = function() {
          this.proxyImage.removeEventListener("load", this),
              this.proxyImage.removeEventListener("error", this),
              this.img.removeEventListener("load", this),
              this.img.removeEventListener("error", this);
      }),
      (q.prototype = Object.create(b.prototype)),
      (q.prototype.check = function() {
          this.img.addEventListener("load", this),
              this.img.addEventListener("error", this),
              (this.img.src = this.url);
          var a = this.getIsImageComplete();
          a &&
              (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
                  this.unbindEvents());
      }),
      (q.prototype.unbindEvents = function() {
          this.img.removeEventListener("load", this),
              this.img.removeEventListener("error", this);
      }),
      (q.prototype.confirm = function(a, d) {
          (this.isLoaded = a),
          this.emitEvent("progress", [this, this.element, d]);
      }),
      (c.makeJQueryPlugin = function(a) {
          (a = a || p.jQuery),
          a &&
              ((j = a),
                  (j.fn.imagesLoaded = function(h, n) {
                      var d = new c(this, h, n);
                      return d.jqDeferred.promise(j(this));
                  }));
      }),
      c.makeJQueryPlugin(),
      c
  );
});
!(function(b) {
  "function" == typeof define && define.amd ?
      define(["jquery"], b) :
      "undefined" != typeof exports ?
      (module.exports = b(require("jquery"))) :
      b(jQuery);
})(function(d) {
  var c = window.Slick || {};
  (c = (function() {
      function e(i, h) {
          var b,
              g = this;
          (g.defaults = {
              accessibility: !0,
              adaptiveHeight: !1,
              appendArrows: d(i),
              appendDots: d(i),
              arrows: !0,
              asNavFor: null,
              prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
              nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
              autoplay: !1,
              autoplaySpeed: 3000,
              centerMode: !1,
              centerPadding: "50px",
              cssEase: "ease",
              customPaging: function(f, j) {
                  return d(
                      '<button type="button" data-role="none" role="button" tabindex="0" />'
                  ).text(j + 1);
              },
              dots: !1,
              dotsClass: "slick-dots",
              draggable: !0,
              easing: "linear",
              edgeFriction: 0.35,
              fade: !1,
              focusOnSelect: !1,
              infinite: !0,
              initialSlide: 0,
              lazyLoad: "ondemand",
              mobileFirst: !1,
              pauseOnHover: !0,
              pauseOnFocus: !0,
              pauseOnDotsHover: !1,
              respondTo: "window",
              responsive: null,
              rows: 1,
              rtl: !1,
              slide: "",
              slidesPerRow: 1,
              slidesToShow: 1,
              slidesToScroll: 1,
              speed: 500,
              swipe: !0,
              swipeToSlide: !1,
              touchMove: !0,
              touchThreshold: 5,
              useCSS: !0,
              useTransform: !0,
              variableWidth: !1,
              vertical: !1,
              verticalSwiping: !1,
              waitForAnimate: !0,
              zIndex: 1000,
          }),
          (g.initials = {
              animating: !1,
              dragging: !1,
              autoPlayTimer: null,
              currentDirection: 0,
              currentLeft: null,
              currentSlide: 0,
              direction: 1,
              $dots: null,
              listWidth: null,
              listHeight: null,
              loadIndex: 0,
              $nextArrow: null,
              $prevArrow: null,
              slideCount: null,
              slideWidth: null,
              $slideTrack: null,
              $slides: null,
              sliding: !1,
              slideOffset: 0,
              swipeLeft: null,
              $list: null,
              touchObject: {},
              transformsEnabled: !1,
              unslicked: !1,
          }),
          d.extend(g, g.initials),
              (g.activeBreakpoint = null),
              (g.animType = null),
              (g.animProp = null),
              (g.breakpoints = []),
              (g.breakpointSettings = []),
              (g.cssTransitions = !1),
              (g.focussed = !1),
              (g.interrupted = !1),
              (g.hidden = "hidden"),
              (g.paused = !0),
              (g.positionProp = null),
              (g.respondTo = null),
              (g.rowCount = 1),
              (g.shouldClick = !0),
              (g.$slider = d(i)),
              (g.$slidesCache = null),
              (g.transformType = null),
              (g.transitionType = null),
              (g.visibilityChange = "visibilitychange"),
              (g.windowWidth = 0),
              (g.windowTimer = null),
              (b = d(i).data("slick") || {}),
              (g.options = d.extend({}, g.defaults, h, b)),
              (g.currentSlide = g.options.initialSlide),
              (g.originalSettings = g.options),
              "undefined" != typeof document.mozHidden ?
              ((g.hidden = "mozHidden"),
                  (g.visibilityChange = "mozvisibilitychange")) :
              "undefined" != typeof document.webkitHidden &&
              ((g.hidden = "webkitHidden"),
                  (g.visibilityChange = "webkitvisibilitychange")),
              (g.autoPlay = d.proxy(g.autoPlay, g)),
              (g.autoPlayClear = d.proxy(g.autoPlayClear, g)),
              (g.autoPlayIterator = d.proxy(g.autoPlayIterator, g)),
              (g.changeSlide = d.proxy(g.changeSlide, g)),
              (g.clickHandler = d.proxy(g.clickHandler, g)),
              (g.selectHandler = d.proxy(g.selectHandler, g)),
              (g.setPosition = d.proxy(g.setPosition, g)),
              (g.swipeHandler = d.proxy(g.swipeHandler, g)),
              (g.dragHandler = d.proxy(g.dragHandler, g)),
              (g.keyHandler = d.proxy(g.keyHandler, g)),
              (g.instanceUid = a++),
              (g.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
              g.registerBreakpoints(),
              g.init(!0);
      }
      var a = 0;
      return e;
  })()),
  (c.prototype.activateADA = function() {
      var b = this;
      b.$slideTrack
          .find(".slick-active")
          .attr({
              "aria-hidden": "false"
          })
          .find("a, input, button, select")
          .attr({
              tabindex: "0"
          });
  }),
  (c.prototype.addSlide = c.prototype.slickAdd =
      function(a, h, g) {
          var f = this;
          if ("boolean" == typeof h) {
              (g = h), (h = null);
          } else {
              if (0 > h || h >= f.slideCount) {
                  return !1;
              }
          }
          f.unload(),
              "number" == typeof h ?
              0 === h && 0 === f.$slides.length ?
              d(a).appendTo(f.$slideTrack) :
              g ?
              d(a).insertBefore(f.$slides.eq(h)) :
              d(a).insertAfter(f.$slides.eq(h)) :
              g === !0 ?
              d(a).prependTo(f.$slideTrack) :
              d(a).appendTo(f.$slideTrack),
              (f.$slides = f.$slideTrack.children(this.options.slide)),
              f.$slideTrack.children(this.options.slide).detach(),
              f.$slideTrack.append(f.$slides),
              f.$slides.each(function(e, i) {
                  d(i).attr("data-slick-index", e);
              }),
              (f.$slidesCache = f.$slides),
              f.reinit();
      }),
  (c.prototype.animateHeight = function() {
      var f = this;
      if (
          1 === f.options.slidesToShow &&
          f.options.adaptiveHeight === !0 &&
          f.options.vertical === !1
      ) {
          var e = f.$slides.eq(f.currentSlide).outerHeight(!0);
          f.$list.animate({
              height: e
          }, f.options.speed);
      }
  }),
  (c.prototype.animateSlide = function(a, h) {
      var g = {},
          f = this;
      f.animateHeight(),
          f.options.rtl === !0 && f.options.vertical === !1 && (a = -a),
          f.transformsEnabled === !1 ?
          f.options.vertical === !1 ?
          f.$slideTrack.animate({
                  left: a
              },
              f.options.speed,
              f.options.easing,
              h
          ) :
          f.$slideTrack.animate({
                  top: a
              },
              f.options.speed,
              f.options.easing,
              h
          ) :
          f.cssTransitions === !1 ?
          (f.options.rtl === !0 && (f.currentLeft = -f.currentLeft),
              d({
                  animStart: f.currentLeft
              }).animate({
                  animStart: a
              }, {
                  duration: f.options.speed,
                  easing: f.options.easing,
                  step: function(b) {
                      (b = Math.ceil(b)),
                      f.options.vertical === !1 ?
                          ((g[f.animType] = "translate(" + b + "px, 0px)"),
                              f.$slideTrack.css(g)) :
                          ((g[f.animType] = "translate(0px," + b + "px)"),
                              f.$slideTrack.css(g));
                  },
                  complete: function() {
                      h && h.call();
                  },
              })) :
          (f.applyTransition(),
              (a = Math.ceil(a)),
              f.options.vertical === !1 ?
              (g[f.animType] = "translate3d(" + a + "px, 0px, 0px)") :
              (g[f.animType] = "translate3d(0px," + a + "px, 0px)"),
              f.$slideTrack.css(g),
              h &&
              setTimeout(function() {
                  f.disableTransition(), h.call();
              }, f.options.speed));
  }),
  (c.prototype.getNavTarget = function() {
      var a = this,
          e = a.options.asNavFor;
      return e && null !== e && (e = d(e).not(a.$slider)), e;
  }),
  (c.prototype.asNavFor = function(a) {
      var f = this,
          e = f.getNavTarget();
      null !== e &&
          "object" == typeof e &&
          e.each(function() {
              var b = d(this).slick("getSlick");
              b.unslicked || b.slideHandler(a, !0);
          });
  }),
  (c.prototype.applyTransition = function(f) {
      var e = this,
          g = {};
      e.options.fade === !1 ?
          (g[e.transitionType] =
              e.transformType + " " + e.options.speed + "ms " + e.options.cssEase) :
          (g[e.transitionType] =
              "opacity " + e.options.speed + "ms " + e.options.cssEase),
          e.options.fade === !1 ? e.$slideTrack.css(g) : e.$slides.eq(f).css(g);
  }),
  (c.prototype.autoPlay = function() {
      var b = this;
      b.autoPlayClear(),
          b.slideCount > b.options.slidesToShow &&
          (b.autoPlayTimer = setInterval(
              b.autoPlayIterator,
              b.options.autoplaySpeed
          ));
  }),
  (c.prototype.autoPlayClear = function() {
      var b = this;
      b.autoPlayTimer && clearInterval(b.autoPlayTimer);
  }),
  (c.prototype.autoPlayIterator = function() {
      var f = this,
          e = f.currentSlide + f.options.slidesToScroll;
      f.paused ||
          f.interrupted ||
          f.focussed ||
          (f.options.infinite === !1 &&
              (1 === f.direction && f.currentSlide + 1 === f.slideCount - 1 ?
                  (f.direction = 0) :
                  0 === f.direction &&
                  ((e = f.currentSlide - f.options.slidesToScroll),
                      f.currentSlide - 1 === 0 && (f.direction = 1))),
              f.slideHandler(e));
  }),
  (c.prototype.buildArrows = function() {
      var a = this;
      a.options.arrows === !0 &&
          ((a.$prevArrow = d(a.options.prevArrow).addClass("slick-arrow")),
              (a.$nextArrow = d(a.options.nextArrow).addClass("slick-arrow")),
              a.slideCount > a.options.slidesToShow ?
              (a.$prevArrow
                  .removeClass("slick-hidden")
                  .removeAttr("aria-hidden tabindex"),
                  a.$nextArrow
                  .removeClass("slick-hidden")
                  .removeAttr("aria-hidden tabindex"),
                  a.htmlExpr.test(a.options.prevArrow) &&
                  a.$prevArrow.prependTo(a.options.appendArrows),
                  a.htmlExpr.test(a.options.nextArrow) &&
                  a.$nextArrow.appendTo(a.options.appendArrows),
                  a.options.infinite !== !0 &&
                  a.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true")) :
              a.$prevArrow
              .add(a.$nextArrow)
              .addClass("slick-hidden")
              .attr({
                  "aria-disabled": "true",
                  tabindex: "-1"
              }));
  }),
  (c.prototype.buildDots = function() {
      var f,
          e,
          a = this;
      if (a.options.dots === !0 && a.slideCount > a.options.slidesToShow) {
          for (
              a.$slider.addClass("slick-dotted"),
              e = d("<ul />").addClass(a.options.dotsClass),
              f = 0; f <= a.getDotCount(); f += 1
          ) {
              e.append(d("<li />").append(a.options.customPaging.call(this, a, f)));
          }
          (a.$dots = e.appendTo(a.options.appendDots)),
          a.$dots
              .find("li")
              .first()
              .addClass("slick-active")
              .attr("aria-hidden", "false");
      }
  }),
  (c.prototype.buildOut = function() {
      var a = this;
      (a.$slides = a.$slider
          .children(a.options.slide + ":not(.slick-cloned)")
          .addClass("slick-slide")),
      (a.slideCount = a.$slides.length),
      a.$slides.each(function(e, f) {
              d(f)
                  .attr("data-slick-index", e)
                  .data("originalStyling", d(f).attr("style") || "");
          }),
          a.$slider.addClass("slick-slider"),
          (a.$slideTrack =
              0 === a.slideCount ?
              d('<div class="slick-track"/>').appendTo(a.$slider) :
              a.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (a.$list = a.$slideTrack
              .wrap('<div aria-live="polite" class="slick-list"/>')
              .parent()),
          a.$slideTrack.css("opacity", 0),
          (a.options.centerMode === !0 || a.options.swipeToSlide === !0) &&
          (a.options.slidesToScroll = 1),
          d("img[data-lazy]", a.$slider).not("[src]").addClass("slick-loading"),
          a.setupInfinite(),
          a.buildArrows(),
          a.buildDots(),
          a.updateDots(),
          a.setSlideClasses(
              "number" == typeof a.currentSlide ? a.currentSlide : 0
          ),
          a.options.draggable === !0 && a.$list.addClass("draggable");
  }),
  (c.prototype.buildRows = function() {
      var u,
          t,
          s,
          r,
          q,
          p,
          o,
          v = this;
      if (
          ((r = document.createDocumentFragment()),
              (p = v.$slider.children()),
              v.options.rows > 1)
      ) {
          for (
              o = v.options.slidesPerRow * v.options.rows,
              q = Math.ceil(p.length / o),
              u = 0; q > u; u++
          ) {
              var n = document.createElement("div");
              for (t = 0; t < v.options.rows; t++) {
                  var m = document.createElement("div");
                  for (s = 0; s < v.options.slidesPerRow; s++) {
                      var l = u * o + (t * v.options.slidesPerRow + s);
                      p.get(l) && m.appendChild(p.get(l));
                  }
                  n.appendChild(m);
              }
              r.appendChild(n);
          }
          v.$slider.empty().append(r),
              v.$slider
              .children()
              .children()
              .children()
              .css({
                  width: 100 / v.options.slidesPerRow + "%",
                  display: "inline-block",
              });
      }
  }),
  (c.prototype.checkResponsive = function(r, q) {
      var o,
          n,
          m,
          p = this,
          l = !1,
          k = p.$slider.width(),
          a = window.innerWidth || d(window).width();
      if (
          ("window" === p.respondTo ?
              (m = a) :
              "slider" === p.respondTo ?
              (m = k) :
              "min" === p.respondTo && (m = Math.min(a, k)),
              p.options.responsive &&
              p.options.responsive.length &&
              null !== p.options.responsive)
      ) {
          n = null;
          for (o in p.breakpoints) {
              p.breakpoints.hasOwnProperty(o) &&
                  (p.originalSettings.mobileFirst === !1 ?
                      m < p.breakpoints[o] && (n = p.breakpoints[o]) :
                      m > p.breakpoints[o] && (n = p.breakpoints[o]));
          }
          null !== n ?
              null !== p.activeBreakpoint ?
              (n !== p.activeBreakpoint || q) &&
              ((p.activeBreakpoint = n),
                  "unslick" === p.breakpointSettings[n] ?
                  p.unslick(n) :
                  ((p.options = d.extend({},
                          p.originalSettings,
                          p.breakpointSettings[n]
                      )),
                      r === !0 && (p.currentSlide = p.options.initialSlide),
                      p.refresh(r)),
                  (l = n)) :
              ((p.activeBreakpoint = n),
                  "unslick" === p.breakpointSettings[n] ?
                  p.unslick(n) :
                  ((p.options = d.extend({},
                          p.originalSettings,
                          p.breakpointSettings[n]
                      )),
                      r === !0 && (p.currentSlide = p.options.initialSlide),
                      p.refresh(r)),
                  (l = n)) :
              null !== p.activeBreakpoint &&
              ((p.activeBreakpoint = null),
                  (p.options = p.originalSettings),
                  r === !0 && (p.currentSlide = p.options.initialSlide),
                  p.refresh(r),
                  (l = n)),
              r || l === !1 || p.$slider.trigger("breakpoint", [p, l]);
      }
  }),
  (c.prototype.changeSlide = function(a, p) {
      var m,
          l,
          k,
          o = this,
          n = d(a.currentTarget);
      switch (
          (n.is("a") && a.preventDefault(),
              n.is("li") || (n = n.closest("li")),
              (k = o.slideCount % o.options.slidesToScroll !== 0),
              (m = k ?
                  0 :
                  (o.slideCount - o.currentSlide) % o.options.slidesToScroll),
              a.data.message)
      ) {
          case "previous":
              (l = 0 === m ? o.options.slidesToScroll : o.options.slidesToShow - m),
              o.slideCount > o.options.slidesToShow &&
                  o.slideHandler(o.currentSlide - l, !1, p);
              break;
          case "next":
              (l = 0 === m ? o.options.slidesToScroll : m),
              o.slideCount > o.options.slidesToShow &&
                  o.slideHandler(o.currentSlide + l, !1, p);
              break;
          case "index":
              var j =
                  0 === a.data.index ?
                  0 :
                  a.data.index || n.index() * o.options.slidesToScroll;
              o.slideHandler(o.checkNavigable(j), !1, p),
                  n.children().trigger("focus");
              break;
          default:
              return;
      }
  }),
  (c.prototype.checkNavigable = function(g) {
      var j,
          i,
          f = this;
      if (((j = f.getNavigableIndexes()), (i = 0), g > j[j.length - 1])) {
          g = j[j.length - 1];
      } else {
          for (var h in j) {
              if (g < j[h]) {
                  g = i;
                  break;
              }
              i = j[h];
          }
      }
      return g;
  }),
  (c.prototype.cleanUpEvents = function() {
      var a = this;
      a.options.dots &&
          null !== a.$dots &&
          d("li", a.$dots)
          .off("click.slick", a.changeSlide)
          .off("mouseenter.slick", d.proxy(a.interrupt, a, !0))
          .off("mouseleave.slick", d.proxy(a.interrupt, a, !1)),
          a.$slider.off("focus.slick blur.slick"),
          a.options.arrows === !0 &&
          a.slideCount > a.options.slidesToShow &&
          (a.$prevArrow && a.$prevArrow.off("click.slick", a.changeSlide),
              a.$nextArrow && a.$nextArrow.off("click.slick", a.changeSlide)),
          a.$list.off("touchstart.slick mousedown.slick", a.swipeHandler),
          a.$list.off("touchmove.slick mousemove.slick", a.swipeHandler),
          a.$list.off("touchend.slick mouseup.slick", a.swipeHandler),
          a.$list.off("touchcancel.slick mouseleave.slick", a.swipeHandler),
          a.$list.off("click.slick", a.clickHandler),
          d(document).off(a.visibilityChange, a.visibility),
          a.cleanUpSlideEvents(),
          a.options.accessibility === !0 &&
          a.$list.off("keydown.slick", a.keyHandler),
          a.options.focusOnSelect === !0 &&
          d(a.$slideTrack).children().off("click.slick", a.selectHandler),
          d(window).off(
              "orientationchange.slick.slick-" + a.instanceUid,
              a.orientationChange
          ),
          d(window).off("resize.slick.slick-" + a.instanceUid, a.resize),
          d("[draggable!=true]", a.$slideTrack).off(
              "dragstart",
              a.preventDefault
          ),
          d(window).off("load.slick.slick-" + a.instanceUid, a.setPosition),
          d(document).off("ready.slick.slick-" + a.instanceUid, a.setPosition);
  }),
  (c.prototype.cleanUpSlideEvents = function() {
      var a = this;
      a.$list.off("mouseenter.slick", d.proxy(a.interrupt, a, !0)),
          a.$list.off("mouseleave.slick", d.proxy(a.interrupt, a, !1));
  }),
  (c.prototype.cleanUpRows = function() {
      var e,
          f = this;
      f.options.rows > 1 &&
          ((e = f.$slides.children().children()),
              e.removeAttr("style"),
              f.$slider.empty().append(e));
  }),
  (c.prototype.clickHandler = function(f) {
      var e = this;
      e.shouldClick === !1 &&
          (f.stopImmediatePropagation(), f.stopPropagation(), f.preventDefault());
  }),
  (c.prototype.destroy = function(a) {
      var e = this;
      e.autoPlayClear(),
          (e.touchObject = {}),
          e.cleanUpEvents(),
          d(".slick-cloned", e.$slider).detach(),
          e.$dots && e.$dots.remove(),
          e.$prevArrow &&
          e.$prevArrow.length &&
          (e.$prevArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
              e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()),
          e.$nextArrow &&
          e.$nextArrow.length &&
          (e.$nextArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
              e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()),
          e.$slides &&
          (e.$slides
              .removeClass(
                  "slick-slide slick-active slick-center slick-visible slick-current"
              )
              .removeAttr("aria-hidden")
              .removeAttr("data-slick-index")
              .each(function() {
                  d(this).attr("style", d(this).data("originalStyling"));
              }),
              e.$slideTrack.children(this.options.slide).detach(),
              e.$slideTrack.detach(),
              e.$list.detach(),
              e.$slider.append(e.$slides)),
          e.cleanUpRows(),
          e.$slider.removeClass("slick-slider"),
          e.$slider.removeClass("slick-initialized"),
          e.$slider.removeClass("slick-dotted"),
          (e.unslicked = !0),
          a || e.$slider.trigger("destroy", [e]);
  }),
  (c.prototype.disableTransition = function(f) {
      var e = this,
          g = {};
      (g[e.transitionType] = ""),
      e.options.fade === !1 ? e.$slideTrack.css(g) : e.$slides.eq(f).css(g);
  }),
  (c.prototype.fadeSlide = function(f, e) {
      var g = this;
      g.cssTransitions === !1 ?
          (g.$slides.eq(f).css({
                  zIndex: g.options.zIndex
              }),
              g.$slides
              .eq(f)
              .animate({
                  opacity: 1
              }, g.options.speed, g.options.easing, e)) :
          (g.applyTransition(f),
              g.$slides.eq(f).css({
                  opacity: 1,
                  zIndex: g.options.zIndex
              }),
              e &&
              setTimeout(function() {
                  g.disableTransition(f), e.call();
              }, g.options.speed));
  }),
  (c.prototype.fadeSlideOut = function(f) {
      var e = this;
      e.cssTransitions === !1 ?
          e.$slides
          .eq(f)
          .animate({
                  opacity: 0,
                  zIndex: e.options.zIndex - 2
              },
              e.options.speed,
              e.options.easing
          ) :
          (e.applyTransition(f),
              e.$slides.eq(f).css({
                  opacity: 0,
                  zIndex: e.options.zIndex - 2
              }));
  }),
  (c.prototype.filterSlides = c.prototype.slickFilter =
      function(f) {
          var e = this;
          null !== f &&
              ((e.$slidesCache = e.$slides),
                  e.unload(),
                  e.$slideTrack.children(this.options.slide).detach(),
                  e.$slidesCache.filter(f).appendTo(e.$slideTrack),
                  e.reinit());
      }),
  (c.prototype.focusHandler = function() {
      var a = this;
      a.$slider
          .off("focus.slick blur.slick")
          .on("focus.slick blur.slick", "*:not(.slick-arrow)", function(e) {
              e.stopImmediatePropagation();
              var b = d(this);
              setTimeout(function() {
                  a.options.pauseOnFocus &&
                      ((a.focussed = b.is(":focus")), a.autoPlay());
              }, 0);
          });
  }),
  (c.prototype.getCurrent = c.prototype.slickCurrentSlide =
      function() {
          var b = this;
          return b.currentSlide;
      }),
  (c.prototype.getDotCount = function() {
      var f = this,
          e = 0,
          h = 0,
          g = 0;
      if (f.options.infinite === !0) {
          for (; e < f.slideCount;) {
              ++g,
              (e = h + f.options.slidesToScroll),
              (h +=
                  f.options.slidesToScroll <= f.options.slidesToShow ?
                  f.options.slidesToScroll :
                  f.options.slidesToShow);
          }
      } else {
          if (f.options.centerMode === !0) {
              g = f.slideCount;
          } else {
              if (f.options.asNavFor) {
                  for (; e < f.slideCount;) {
                      ++g,
                      (e = h + f.options.slidesToScroll),
                      (h +=
                          f.options.slidesToScroll <= f.options.slidesToShow ?
                          f.options.slidesToScroll :
                          f.options.slidesToShow);
                  }
              } else {
                  g =
                      1 +
                      Math.ceil(
                          (f.slideCount - f.options.slidesToShow) /
                          f.options.slidesToScroll
                      );
              }
          }
      }
      return g - 1;
  }),
  (c.prototype.getLeft = function(h) {
      var l,
          k,
          i,
          g = this,
          j = 0;
      return (
          (g.slideOffset = 0),
          (k = g.$slides.first().outerHeight(!0)),
          g.options.infinite === !0 ?
          (g.slideCount > g.options.slidesToShow &&
              ((g.slideOffset = g.slideWidth * g.options.slidesToShow * -1),
                  (j = k * g.options.slidesToShow * -1)),
              g.slideCount % g.options.slidesToScroll !== 0 &&
              h + g.options.slidesToScroll > g.slideCount &&
              g.slideCount > g.options.slidesToShow &&
              (h > g.slideCount ?
                  ((g.slideOffset =
                          (g.options.slidesToShow - (h - g.slideCount)) *
                          g.slideWidth *
                          -1),
                      (j = (g.options.slidesToShow - (h - g.slideCount)) * k * -1)) :
                  ((g.slideOffset =
                          (g.slideCount % g.options.slidesToScroll) *
                          g.slideWidth *
                          -1),
                      (j = (g.slideCount % g.options.slidesToScroll) * k * -1)))) :
          h + g.options.slidesToShow > g.slideCount &&
          ((g.slideOffset =
                  (h + g.options.slidesToShow - g.slideCount) * g.slideWidth),
              (j = (h + g.options.slidesToShow - g.slideCount) * k)),
          g.slideCount <= g.options.slidesToShow &&
          ((g.slideOffset = 0), (j = 0)),
          g.options.centerMode === !0 && g.options.infinite === !0 ?
          (g.slideOffset +=
              g.slideWidth * Math.floor(g.options.slidesToShow / 2) -
              g.slideWidth) :
          g.options.centerMode === !0 &&
          ((g.slideOffset = 0),
              (g.slideOffset +=
                  g.slideWidth * Math.floor(g.options.slidesToShow / 2))),
          (l =
              g.options.vertical === !1 ?
              h * g.slideWidth * -1 + g.slideOffset :
              h * k * -1 + j),
          g.options.variableWidth === !0 &&
          ((i =
                  g.slideCount <= g.options.slidesToShow || g.options.infinite === !1 ?
                  g.$slideTrack.children(".slick-slide").eq(h) :
                  g.$slideTrack
                  .children(".slick-slide")
                  .eq(h + g.options.slidesToShow)),
              (l =
                  g.options.rtl === !0 ?
                  i[0] ?
                  -1 * (g.$slideTrack.width() - i[0].offsetLeft - i.width()) :
                  0 :
                  i[0] ?
                  -1 * i[0].offsetLeft :
                  0),
              g.options.centerMode === !0 &&
              ((i =
                      g.slideCount <= g.options.slidesToShow ||
                      g.options.infinite === !1 ?
                      g.$slideTrack.children(".slick-slide").eq(h) :
                      g.$slideTrack
                      .children(".slick-slide")
                      .eq(h + g.options.slidesToShow + 1)),
                  (l =
                      g.options.rtl === !0 ?
                      i[0] ?
                      -1 * (g.$slideTrack.width() - i[0].offsetLeft - i.width()) :
                      0 :
                      i[0] ?
                      -1 * i[0].offsetLeft :
                      0),
                  (l += (g.$list.width() - i.outerWidth()) / 2))),
          l
      );
  }),
  (c.prototype.getOption = c.prototype.slickGetOption =
      function(f) {
          var e = this;
          return e.options[f];
      }),
  (c.prototype.getNavigableIndexes = function() {
      var h,
          g = this,
          f = 0,
          j = 0,
          i = [];
      for (
          g.options.infinite === !1 ?
          (h = g.slideCount) :
          ((f = -1 * g.options.slidesToScroll),
              (j = -1 * g.options.slidesToScroll),
              (h = 2 * g.slideCount)); h > f;

      ) {
          i.push(f),
              (f = j + g.options.slidesToScroll),
              (j +=
                  g.options.slidesToScroll <= g.options.slidesToShow ?
                  g.options.slidesToScroll :
                  g.options.slidesToShow);
      }
      return i;
  }),
  (c.prototype.getSlick = function() {
      return this;
  }),
  (c.prototype.getSlideCount = function() {
      var h,
          g,
          f,
          a = this;
      return (
          (f =
              a.options.centerMode === !0 ?
              a.slideWidth * Math.floor(a.options.slidesToShow / 2) :
              0),
          a.options.swipeToSlide === !0 ?
          (a.$slideTrack.find(".slick-slide").each(function(e, b) {
                  return b.offsetLeft - f + d(b).outerWidth() / 2 > -1 * a.swipeLeft ?
                      ((g = b), !1) :
                      void 0;
              }),
              (h = Math.abs(d(g).attr("data-slick-index") - a.currentSlide) || 1)) :
          a.options.slidesToScroll
      );
  }),
  (c.prototype.goTo = c.prototype.slickGoTo =
      function(f, e) {
          var g = this;
          g.changeSlide({
              data: {
                  message: "index",
                  index: parseInt(f)
              }
          }, e);
      }),
  (c.prototype.init = function(a) {
      var e = this;
      d(e.$slider).hasClass("slick-initialized") ||
          (d(e.$slider).addClass("slick-initialized"),
              e.buildRows(),
              e.buildOut(),
              e.setProps(),
              e.startLoad(),
              e.loadSlider(),
              e.initializeEvents(),
              e.updateArrows(),
              e.updateDots(),
              e.checkResponsive(!0),
              e.focusHandler()),
          a && e.$slider.trigger("init", [e]),
          e.options.accessibility === !0 && e.initADA(),
          e.options.autoplay && ((e.paused = !1), e.autoPlay());
  }),
  (c.prototype.initADA = function() {
      var a = this;
      a.$slides
          .add(a.$slideTrack.find(".slick-cloned"))
          .attr({
              "aria-hidden": "true",
              tabindex: "-1"
          })
          .find("a, input, button, select")
          .attr({
              tabindex: "-1"
          }),
          a.$slideTrack.attr("role", "listbox"),
          a.$slides.not(a.$slideTrack.find(".slick-cloned")).each(function(b) {
              d(this).attr({
                  role: "option",
                  "aria-describedby": "slick-slide" + a.instanceUid + b,
              });
          }),
          null !== a.$dots &&
          a.$dots
          .attr("role", "tablist")
          .find("li")
          .each(function(b) {
              d(this).attr({
                  role: "presentation",
                  "aria-selected": "false",
                  "aria-controls": "navigation" + a.instanceUid + b,
                  id: "slick-slide" + a.instanceUid + b,
              });
          })
          .first()
          .attr("aria-selected", "true")
          .end()
          .find("button")
          .attr("role", "button")
          .end()
          .closest("div")
          .attr("role", "toolbar"),
          a.activateADA();
  }),
  (c.prototype.initArrowEvents = function() {
      var b = this;
      b.options.arrows === !0 &&
          b.slideCount > b.options.slidesToShow &&
          (b.$prevArrow
              .off("click.slick")
              .on("click.slick", {
                  message: "previous"
              }, b.changeSlide),
              b.$nextArrow
              .off("click.slick")
              .on("click.slick", {
                  message: "next"
              }, b.changeSlide));
  }),
  (c.prototype.initDotEvents = function() {
      var a = this;
      a.options.dots === !0 &&
          a.slideCount > a.options.slidesToShow &&
          d("li", a.$dots).on("click.slick", {
              message: "index"
          }, a.changeSlide),
          a.options.dots === !0 &&
          a.options.pauseOnDotsHover === !0 &&
          d("li", a.$dots)
          .on("mouseenter.slick", d.proxy(a.interrupt, a, !0))
          .on("mouseleave.slick", d.proxy(a.interrupt, a, !1));
  }),
  (c.prototype.initSlideEvents = function() {
      var a = this;
      a.options.pauseOnHover &&
          (a.$list.on("mouseenter.slick", d.proxy(a.interrupt, a, !0)),
              a.$list.on("mouseleave.slick", d.proxy(a.interrupt, a, !1)));
  }),
  (c.prototype.initializeEvents = function() {
      var a = this;
      a.initArrowEvents(),
          a.initDotEvents(),
          a.initSlideEvents(),
          a.$list.on(
              "touchstart.slick mousedown.slick", {
                  action: "start"
              },
              a.swipeHandler
          ),
          a.$list.on(
              "touchmove.slick mousemove.slick", {
                  action: "move"
              },
              a.swipeHandler
          ),
          a.$list.on(
              "touchend.slick mouseup.slick", {
                  action: "end"
              },
              a.swipeHandler
          ),
          a.$list.on(
              "touchcancel.slick mouseleave.slick", {
                  action: "end"
              },
              a.swipeHandler
          ),
          a.$list.on("click.slick", a.clickHandler),
          d(document).on(a.visibilityChange, d.proxy(a.visibility, a)),
          a.options.accessibility === !0 &&
          a.$list.on("keydown.slick", a.keyHandler),
          a.options.focusOnSelect === !0 &&
          d(a.$slideTrack).children().on("click.slick", a.selectHandler),
          d(window).on(
              "orientationchange.slick.slick-" + a.instanceUid,
              d.proxy(a.orientationChange, a)
          ),
          d(window).on(
              "resize.slick.slick-" + a.instanceUid,
              d.proxy(a.resize, a)
          ),
          d("[draggable!=true]", a.$slideTrack).on("dragstart", a.preventDefault),
          d(window).on("load.slick.slick-" + a.instanceUid, a.setPosition),
          d(document).on("ready.slick.slick-" + a.instanceUid, a.setPosition);
  }),
  (c.prototype.initUI = function() {
      var b = this;
      b.options.arrows === !0 &&
          b.slideCount > b.options.slidesToShow &&
          (b.$prevArrow.show(), b.$nextArrow.show()),
          b.options.dots === !0 &&
          b.slideCount > b.options.slidesToShow &&
          b.$dots.show();
  }),
  (c.prototype.keyHandler = function(f) {
      var e = this;
      f.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
          (37 === f.keyCode && e.options.accessibility === !0 ?
              e.changeSlide({
                  data: {
                      message: e.options.rtl === !0 ? "next" : "previous"
                  },
              }) :
              39 === f.keyCode &&
              e.options.accessibility === !0 &&
              e.changeSlide({
                  data: {
                      message: e.options.rtl === !0 ? "previous" : "next"
                  },
              }));
  }),
  (c.prototype.lazyLoad = function() {
      function h(b) {
          d("img[data-lazy]", b).each(function() {
              var m = d(this),
                  g = d(this).attr("data-lazy"),
                  f = document.createElement("img");
              (f.onload = function() {
                  m.animate({
                      opacity: 0
                  }, 100, function() {
                      m.attr("src", g).animate({
                              opacity: 1
                          }, 200, function() {
                              m.removeAttr("data-lazy").removeClass("slick-loading");
                          }),
                          a.$slider.trigger("lazyLoaded", [a, m, g]);
                  });
              }),
              (f.onerror = function() {
                  m
                      .removeAttr("data-lazy")
                      .removeClass("slick-loading")
                      .addClass("slick-lazyload-error"),
                      a.$slider.trigger("lazyLoadError", [a, m, g]);
              }),
              (f.src = g);
          });
      }
      var l,
          k,
          j,
          i,
          a = this;
      a.options.centerMode === !0 ?
          a.options.infinite === !0 ?
          ((j = a.currentSlide + (a.options.slidesToShow / 2 + 1)),
              (i = j + a.options.slidesToShow + 2)) :
          ((j = Math.max(
                  0,
                  a.currentSlide - (a.options.slidesToShow / 2 + 1)
              )),
              (i = 2 + (a.options.slidesToShow / 2 + 1) + a.currentSlide)) :
          ((j = a.options.infinite ?
                  a.options.slidesToShow + a.currentSlide :
                  a.currentSlide),
              (i = Math.ceil(j + a.options.slidesToShow)),
              a.options.fade === !0 && (j > 0 && j--, i <= a.slideCount && i++)),
          (l = a.$slider.find(".slick-slide").slice(j, i)),
          h(l),
          a.slideCount <= a.options.slidesToShow ?
          ((k = a.$slider.find(".slick-slide")), h(k)) :
          a.currentSlide >= a.slideCount - a.options.slidesToShow ?
          ((k = a.$slider
                  .find(".slick-cloned")
                  .slice(0, a.options.slidesToShow)),
              h(k)) :
          0 === a.currentSlide &&
          ((k = a.$slider
                  .find(".slick-cloned")
                  .slice(-1 * a.options.slidesToShow)),
              h(k));
  }),
  (c.prototype.loadSlider = function() {
      var b = this;
      b.setPosition(),
          b.$slideTrack.css({
              opacity: 1
          }),
          b.$slider.removeClass("slick-loading"),
          b.initUI(),
          "progressive" === b.options.lazyLoad && b.progressiveLazyLoad();
  }),
  (c.prototype.next = c.prototype.slickNext =
      function() {
          var b = this;
          b.changeSlide({
              data: {
                  message: "next"
              }
          });
      }),
  (c.prototype.orientationChange = function() {
      var b = this;
      b.checkResponsive(), b.setPosition();
  }),
  (c.prototype.pause = c.prototype.slickPause =
      function() {
          var b = this;
          b.autoPlayClear(), (b.paused = !0);
      }),
  (c.prototype.play = c.prototype.slickPlay =
      function() {
          var b = this;
          b.autoPlay(),
              (b.options.autoplay = !0),
              (b.paused = !1),
              (b.focussed = !1),
              (b.interrupted = !1);
      }),
  (c.prototype.postSlide = function(f) {
      var e = this;
      e.unslicked ||
          (e.$slider.trigger("afterChange", [e, f]),
              (e.animating = !1),
              e.setPosition(),
              (e.swipeLeft = null),
              e.options.autoplay && e.autoPlay(),
              e.options.accessibility === !0 && e.initADA());
  }),
  (c.prototype.prev = c.prototype.slickPrev =
      function() {
          var b = this;
          b.changeSlide({
              data: {
                  message: "previous"
              }
          });
      }),
  (c.prototype.preventDefault = function(b) {
      b.preventDefault();
  }),
  (c.prototype.progressiveLazyLoad = function(a) {
      a = a || 1;
      var j,
          i,
          h,
          l = this,
          k = d("img[data-lazy]", l.$slider);
      k.length ?
          ((j = k.first()),
              (i = j.attr("data-lazy")),
              (h = document.createElement("img")),
              (h.onload = function() {
                  j
                      .attr("src", i)
                      .removeAttr("data-lazy")
                      .removeClass("slick-loading"),
                      l.options.adaptiveHeight === !0 && l.setPosition(),
                      l.$slider.trigger("lazyLoaded", [l, j, i]),
                      l.progressiveLazyLoad();
              }),
              (h.onerror = function() {
                  3 > a ?
                      setTimeout(function() {
                          l.progressiveLazyLoad(a + 1);
                      }, 500) :
                      (j
                          .removeAttr("data-lazy")
                          .removeClass("slick-loading")
                          .addClass("slick-lazyload-error"),
                          l.$slider.trigger("lazyLoadError", [l, j, i]),
                          l.progressiveLazyLoad());
              }),
              (h.src = i)) :
          l.$slider.trigger("allImagesLoaded", [l]);
  }),
  (c.prototype.refresh = function(a) {
      var g,
          f,
          h = this;
      (f = h.slideCount - h.options.slidesToShow),
      !h.options.infinite && h.currentSlide > f && (h.currentSlide = f),
          h.slideCount <= h.options.slidesToShow && (h.currentSlide = 0),
          (g = h.currentSlide),
          h.destroy(!0),
          d.extend(h, h.initials, {
              currentSlide: g
          }),
          h.init(),
          a || h.changeSlide({
              data: {
                  message: "index",
                  index: g
              }
          }, !1);
  }),
  (c.prototype.registerBreakpoints = function() {
      var j,
          i,
          h,
          a = this,
          g = a.options.responsive || null;
      if ("array" === d.type(g) && g.length) {
          a.respondTo = a.options.respondTo || "window";
          for (j in g) {
              if (
                  ((h = a.breakpoints.length - 1),
                      (i = g[j].breakpoint),
                      g.hasOwnProperty(j))
              ) {
                  for (; h >= 0;) {
                      a.breakpoints[h] &&
                          a.breakpoints[h] === i &&
                          a.breakpoints.splice(h, 1),
                          h--;
                  }
                  a.breakpoints.push(i), (a.breakpointSettings[i] = g[j].settings);
              }
          }
          a.breakpoints.sort(function(b, e) {
              return a.options.mobileFirst ? b - e : e - b;
          });
      }
  }),
  (c.prototype.reinit = function() {
      var a = this;
      (a.$slides = a.$slideTrack
          .children(a.options.slide)
          .addClass("slick-slide")),
      (a.slideCount = a.$slides.length),
      a.currentSlide >= a.slideCount &&
          0 !== a.currentSlide &&
          (a.currentSlide = a.currentSlide - a.options.slidesToScroll),
          a.slideCount <= a.options.slidesToShow && (a.currentSlide = 0),
          a.registerBreakpoints(),
          a.setProps(),
          a.setupInfinite(),
          a.buildArrows(),
          a.updateArrows(),
          a.initArrowEvents(),
          a.buildDots(),
          a.updateDots(),
          a.initDotEvents(),
          a.cleanUpSlideEvents(),
          a.initSlideEvents(),
          a.checkResponsive(!1, !0),
          a.options.focusOnSelect === !0 &&
          d(a.$slideTrack).children().on("click.slick", a.selectHandler),
          a.setSlideClasses(
              "number" == typeof a.currentSlide ? a.currentSlide : 0
          ),
          a.setPosition(),
          a.focusHandler(),
          (a.paused = !a.options.autoplay),
          a.autoPlay(),
          a.$slider.trigger("reInit", [a]);
  }),
  (c.prototype.resize = function() {
      var a = this;
      d(window).width() !== a.windowWidth &&
          (clearTimeout(a.windowDelay),
              (a.windowDelay = window.setTimeout(function() {
                  (a.windowWidth = d(window).width()),
                  a.checkResponsive(),
                      a.unslicked || a.setPosition();
              }, 50)));
  }),
  (c.prototype.removeSlide = c.prototype.slickRemove =
      function(f, e, h) {
          var g = this;
          return (
              "boolean" == typeof f ?
              ((e = f), (f = e === !0 ? 0 : g.slideCount - 1)) :
              (f = e === !0 ? --f : f),
              g.slideCount < 1 || 0 > f || f > g.slideCount - 1 ?
              !1 :
              (g.unload(),
                  h === !0 ?
                  g.$slideTrack.children().remove() :
                  g.$slideTrack.children(this.options.slide).eq(f).remove(),
                  (g.$slides = g.$slideTrack.children(this.options.slide)),
                  g.$slideTrack.children(this.options.slide).detach(),
                  g.$slideTrack.append(g.$slides),
                  (g.$slidesCache = g.$slides),
                  void g.reinit())
          );
      }),
  (c.prototype.setCSS = function(g) {
      var i,
          h,
          f = this,
          j = {};
      f.options.rtl === !0 && (g = -g),
          (i = "left" == f.positionProp ? Math.ceil(g) + "px" : "0px"),
          (h = "top" == f.positionProp ? Math.ceil(g) + "px" : "0px"),
          (j[f.positionProp] = g),
          f.transformsEnabled === !1 ?
          f.$slideTrack.css(j) :
          ((j = {}),
              f.cssTransitions === !1 ?
              ((j[f.animType] = "translate(" + i + ", " + h + ")"),
                  f.$slideTrack.css(j)) :
              ((j[f.animType] = "translate3d(" + i + ", " + h + ", 0px)"),
                  f.$slideTrack.css(j)));
  }),
  (c.prototype.setDimensions = function() {
      var f = this;
      f.options.vertical === !1 ?
          f.options.centerMode === !0 &&
          f.$list.css({
              padding: "0px " + f.options.centerPadding
          }) :
          (f.$list.height(
                  f.$slides.first().outerHeight(!0) * f.options.slidesToShow
              ),
              f.options.centerMode === !0 &&
              f.$list.css({
                  padding: f.options.centerPadding + " 0px"
              })),
          (f.listWidth = f.$list.width()),
          (f.listHeight = f.$list.height()),
          f.options.vertical === !1 && f.options.variableWidth === !1 ?
          ((f.slideWidth = Math.ceil(f.listWidth / f.options.slidesToShow)),
              f.$slideTrack.width(
                  Math.ceil(
                      f.slideWidth * f.$slideTrack.children(".slick-slide").length
                  )
              )) :
          f.options.variableWidth === !0 ?
          f.$slideTrack.width(5000 * f.slideCount) :
          ((f.slideWidth = Math.ceil(f.listWidth)),
              f.$slideTrack.height(
                  Math.ceil(
                      f.$slides.first().outerHeight(!0) *
                      f.$slideTrack.children(".slick-slide").length
                  )
              ));
      var e = f.$slides.first().outerWidth(!0) - f.$slides.first().width();
      f.options.variableWidth === !1 &&
          f.$slideTrack.children(".slick-slide").width(f.slideWidth - e);
  }),
  (c.prototype.setFade = function() {
      var e,
          a = this;
      a.$slides.each(function(f, b) {
              (e = a.slideWidth * f * -1),
              a.options.rtl === !0 ?
                  d(b).css({
                      position: "relative",
                      right: e,
                      top: 0,
                      zIndex: a.options.zIndex - 2,
                      opacity: 0,
                  }) :
                  d(b).css({
                      position: "relative",
                      left: e,
                      top: 0,
                      zIndex: a.options.zIndex - 2,
                      opacity: 0,
                  });
          }),
          a.$slides
          .eq(a.currentSlide)
          .css({
              zIndex: a.options.zIndex - 1,
              opacity: 1
          });
  }),
  (c.prototype.setHeight = function() {
      var f = this;
      if (
          1 === f.options.slidesToShow &&
          f.options.adaptiveHeight === !0 &&
          f.options.vertical === !1
      ) {
          var e = f.$slides.eq(f.currentSlide).outerHeight(!0);
          f.$list.css("height", e);
      }
  }),
  (c.prototype.setOption = c.prototype.slickSetOption =
      function() {
          var n,
              m,
              l,
              k,
              i,
              a = this,
              j = !1;
          if (
              ("object" === d.type(arguments[0]) ?
                  ((l = arguments[0]), (j = arguments[1]), (i = "multiple")) :
                  "string" === d.type(arguments[0]) &&
                  ((l = arguments[0]),
                      (k = arguments[1]),
                      (j = arguments[2]),
                      "responsive" === arguments[0] && "array" === d.type(arguments[1]) ?
                      (i = "responsive") :
                      "undefined" != typeof arguments[1] && (i = "single")),
                  "single" === i)
          ) {
              a.options[l] = k;
          } else {
              if ("multiple" === i) {
                  d.each(l, function(b, e) {
                      a.options[b] = e;
                  });
              } else {
                  if ("responsive" === i) {
                      for (m in k) {
                          if ("array" !== d.type(a.options.responsive)) {
                              a.options.responsive = [k[m]];
                          } else {
                              for (n = a.options.responsive.length - 1; n >= 0;) {
                                  a.options.responsive[n].breakpoint === k[m].breakpoint &&
                                      a.options.responsive.splice(n, 1),
                                      n--;
                              }
                              a.options.responsive.push(k[m]);
                          }
                      }
                  }
              }
          }
          j && (a.unload(), a.reinit());
      }),
  (c.prototype.setPosition = function() {
      var b = this;
      b.setDimensions(),
          b.setHeight(),
          b.options.fade === !1 ?
          b.setCSS(b.getLeft(b.currentSlide)) :
          b.setFade(),
          b.$slider.trigger("setPosition", [b]);
  }),
  (c.prototype.setProps = function() {
      var f = this,
          e = document.body.style;
      (f.positionProp = f.options.vertical === !0 ? "top" : "left"),
      "top" === f.positionProp ?
          f.$slider.addClass("slick-vertical") :
          f.$slider.removeClass("slick-vertical"),
          (void 0 !== e.WebkitTransition ||
              void 0 !== e.MozTransition ||
              void 0 !== e.msTransition) &&
          f.options.useCSS === !0 &&
          (f.cssTransitions = !0),
          f.options.fade &&
          ("number" == typeof f.options.zIndex ?
              f.options.zIndex < 3 && (f.options.zIndex = 3) :
              (f.options.zIndex = f.defaults.zIndex)),
          void 0 !== e.OTransform &&
          ((f.animType = "OTransform"),
              (f.transformType = "-o-transform"),
              (f.transitionType = "OTransition"),
              void 0 === e.perspectiveProperty &&
              void 0 === e.webkitPerspective &&
              (f.animType = !1)),
          void 0 !== e.MozTransform &&
          ((f.animType = "MozTransform"),
              (f.transformType = "-moz-transform"),
              (f.transitionType = "MozTransition"),
              void 0 === e.perspectiveProperty &&
              void 0 === e.MozPerspective &&
              (f.animType = !1)),
          void 0 !== e.webkitTransform &&
          ((f.animType = "webkitTransform"),
              (f.transformType = "-webkit-transform"),
              (f.transitionType = "webkitTransition"),
              void 0 === e.perspectiveProperty &&
              void 0 === e.webkitPerspective &&
              (f.animType = !1)),
          void 0 !== e.msTransform &&
          ((f.animType = "msTransform"),
              (f.transformType = "-ms-transform"),
              (f.transitionType = "msTransition"),
              void 0 === e.msTransform && (f.animType = !1)),
          void 0 !== e.transform &&
          f.animType !== !1 &&
          ((f.animType = "transform"),
              (f.transformType = "transform"),
              (f.transitionType = "transition")),
          (f.transformsEnabled =
              f.options.useTransform && null !== f.animType && f.animType !== !1);
  }),
  (c.prototype.setSlideClasses = function(h) {
      var l,
          k,
          j,
          i,
          g = this;
      (k = g.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
      g.$slides.eq(h).addClass("slick-current"),
          g.options.centerMode === !0 ?
          ((l = Math.floor(g.options.slidesToShow / 2)),
              g.options.infinite === !0 &&
              (h >= l && h <= g.slideCount - 1 - l ?
                  g.$slides
                  .slice(h - l, h + l + 1)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false") :
                  ((j = g.options.slidesToShow + h),
                      k
                      .slice(j - l + 1, j + l + 2)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")),
                  0 === h ?
                  k
                  .eq(k.length - 1 - g.options.slidesToShow)
                  .addClass("slick-center") :
                  h === g.slideCount - 1 &&
                  k.eq(g.options.slidesToShow).addClass("slick-center")),
              g.$slides.eq(h).addClass("slick-center")) :
          h >= 0 && h <= g.slideCount - g.options.slidesToShow ?
          g.$slides
          .slice(h, h + g.options.slidesToShow)
          .addClass("slick-active")
          .attr("aria-hidden", "false") :
          k.length <= g.options.slidesToShow ?
          k.addClass("slick-active").attr("aria-hidden", "false") :
          ((i = g.slideCount % g.options.slidesToShow),
              (j = g.options.infinite === !0 ? g.options.slidesToShow + h : h),
              g.options.slidesToShow == g.options.slidesToScroll &&
              g.slideCount - h < g.options.slidesToShow ?
              k
              .slice(j - (g.options.slidesToShow - i), j + i)
              .addClass("slick-active")
              .attr("aria-hidden", "false") :
              k
              .slice(j, j + g.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")),
          "ondemand" === g.options.lazyLoad && g.lazyLoad();
  }),
  (c.prototype.setupInfinite = function() {
      var h,
          g,
          f,
          a = this;
      if (
          (a.options.fade === !0 && (a.options.centerMode = !1),
              a.options.infinite === !0 &&
              a.options.fade === !1 &&
              ((g = null), a.slideCount > a.options.slidesToShow))
      ) {
          for (
              f =
              a.options.centerMode === !0 ?
              a.options.slidesToShow + 1 :
              a.options.slidesToShow,
              h = a.slideCount; h > a.slideCount - f; h -= 1
          ) {
              (g = h - 1),
              d(a.$slides[g])
                  .clone(!0)
                  .attr("id", "")
                  .attr("data-slick-index", g - a.slideCount)
                  .prependTo(a.$slideTrack)
                  .addClass("slick-cloned");
          }
          for (h = 0; f > h; h += 1) {
              (g = h),
              d(a.$slides[g])
                  .clone(!0)
                  .attr("id", "")
                  .attr("data-slick-index", g + a.slideCount)
                  .appendTo(a.$slideTrack)
                  .addClass("slick-cloned");
          }
          a.$slideTrack
              .find(".slick-cloned")
              .find("[id]")
              .each(function() {
                  d(this).attr("id", "");
              });
      }
  }),
  (c.prototype.interrupt = function(f) {
      var e = this;
      f || e.autoPlay(), (e.interrupted = f);
  }),
  (c.prototype.selectHandler = function(a) {
      var h = this,
          g = d(a.target).is(".slick-slide") ?
          d(a.target) :
          d(a.target).parents(".slick-slide"),
          f = parseInt(g.attr("data-slick-index"));
      return (
          f || (f = 0),
          h.slideCount <= h.options.slidesToShow ?
          (h.setSlideClasses(f), void h.asNavFor(f)) :
          void h.slideHandler(f)
      );
  }),
  (c.prototype.slideHandler = function(t, s, r) {
      var q,
          p,
          o,
          n,
          k,
          m = null,
          l = this;
      return (
          (s = s || !1),
          (l.animating === !0 && l.options.waitForAnimate === !0) ||
          (l.options.fade === !0 && l.currentSlide === t) ||
          l.slideCount <= l.options.slidesToShow ?
          void 0 :
          (s === !1 && l.asNavFor(t),
              (q = t),
              (m = l.getLeft(q)),
              (n = l.getLeft(l.currentSlide)),
              (l.currentLeft = null === l.swipeLeft ? n : l.swipeLeft),
              l.options.infinite === !1 &&
              l.options.centerMode === !1 &&
              (0 > t || t > l.getDotCount() * l.options.slidesToScroll) ?
              void(
                  l.options.fade === !1 &&
                  ((q = l.currentSlide),
                      r !== !0 ?
                      l.animateSlide(n, function() {
                          l.postSlide(q);
                      }) :
                      l.postSlide(q))
              ) :
              l.options.infinite === !1 &&
              l.options.centerMode === !0 &&
              (0 > t || t > l.slideCount - l.options.slidesToScroll) ?
              void(
                  l.options.fade === !1 &&
                  ((q = l.currentSlide),
                      r !== !0 ?
                      l.animateSlide(n, function() {
                          l.postSlide(q);
                      }) :
                      l.postSlide(q))
              ) :
              (l.options.autoplay && clearInterval(l.autoPlayTimer),
                  (p =
                      0 > q ?
                      l.slideCount % l.options.slidesToScroll !== 0 ?
                      l.slideCount - (l.slideCount % l.options.slidesToScroll) :
                      l.slideCount + q :
                      q >= l.slideCount ?
                      l.slideCount % l.options.slidesToScroll !== 0 ?
                      0 :
                      q - l.slideCount :
                      q),
                  (l.animating = !0),
                  l.$slider.trigger("beforeChange", [l, l.currentSlide, p]),
                  (o = l.currentSlide),
                  (l.currentSlide = p),
                  l.setSlideClasses(l.currentSlide),
                  l.options.asNavFor &&
                  ((k = l.getNavTarget()),
                      (k = k.slick("getSlick")),
                      k.slideCount <= k.options.slidesToShow &&
                      k.setSlideClasses(l.currentSlide)),
                  l.updateDots(),
                  l.updateArrows(),
                  l.options.fade === !0 ?
                  (r !== !0 ?
                      (l.fadeSlideOut(o),
                          l.fadeSlide(p, function() {
                              l.postSlide(p);
                          })) :
                      l.postSlide(p),
                      void l.animateHeight()) :
                  void(r !== !0 ?
                      l.animateSlide(m, function() {
                          l.postSlide(p);
                      }) :
                      l.postSlide(p))))
      );
  }),
  (c.prototype.startLoad = function() {
      var b = this;
      b.options.arrows === !0 &&
          b.slideCount > b.options.slidesToShow &&
          (b.$prevArrow.hide(), b.$nextArrow.hide()),
          b.options.dots === !0 &&
          b.slideCount > b.options.slidesToShow &&
          b.$dots.hide(),
          b.$slider.addClass("slick-loading");
  }),
  (c.prototype.swipeDirection = function() {
      var g,
          f,
          j,
          i,
          h = this;
      return (
          (g = h.touchObject.startX - h.touchObject.curX),
          (f = h.touchObject.startY - h.touchObject.curY),
          (j = Math.atan2(f, g)),
          (i = Math.round((180 * j) / Math.PI)),
          0 > i && (i = 360 - Math.abs(i)),
          45 >= i && i >= 0 ?
          h.options.rtl === !1 ?
          "left" :
          "right" :
          360 >= i && i >= 315 ?
          h.options.rtl === !1 ?
          "left" :
          "right" :
          i >= 135 && 225 >= i ?
          h.options.rtl === !1 ?
          "right" :
          "left" :
          h.options.verticalSwiping === !0 ?
          i >= 35 && 135 >= i ?
          "down" :
          "up" :
          "vertical"
      );
  }),
  (c.prototype.swipeEnd = function(f) {
      var h,
          g,
          e = this;
      if (
          ((e.dragging = !1),
              (e.interrupted = !1),
              (e.shouldClick = e.touchObject.swipeLength > 10 ? !1 : !0),
              void 0 === e.touchObject.curX)
      ) {
          return !1;
      }
      if (
          (e.touchObject.edgeHit === !0 &&
              e.$slider.trigger("edge", [e, e.swipeDirection()]),
              e.touchObject.swipeLength >= e.touchObject.minSwipe)
      ) {
          switch ((g = e.swipeDirection())) {
              case "left":
              case "down":
                  (h = e.options.swipeToSlide ?
                      e.checkNavigable(e.currentSlide + e.getSlideCount()) :
                      e.currentSlide + e.getSlideCount()),
                  (e.currentDirection = 0);
                  break;
              case "right":
              case "up":
                  (h = e.options.swipeToSlide ?
                      e.checkNavigable(e.currentSlide - e.getSlideCount()) :
                      e.currentSlide - e.getSlideCount()),
                  (e.currentDirection = 1);
          }
          "vertical" != g &&
              (e.slideHandler(h),
                  (e.touchObject = {}),
                  e.$slider.trigger("swipe", [e, g]));
      } else {
          e.touchObject.startX !== e.touchObject.curX &&
              (e.slideHandler(e.currentSlide), (e.touchObject = {}));
      }
  }),
  (c.prototype.swipeHandler = function(f) {
      var e = this;
      if (
          !(
              e.options.swipe === !1 ||
              ("ontouchend" in document && e.options.swipe === !1) ||
              (e.options.draggable === !1 && -1 !== f.type.indexOf("mouse"))
          )
      ) {
          switch (
              ((e.touchObject.fingerCount =
                      f.originalEvent && void 0 !== f.originalEvent.touches ?
                      f.originalEvent.touches.length :
                      1),
                  (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
                  e.options.verticalSwiping === !0 &&
                  (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
                  f.data.action)
          ) {
              case "start":
                  e.swipeStart(f);
                  break;
              case "move":
                  e.swipeMove(f);
                  break;
              case "end":
                  e.swipeEnd(f);
          }
      }
  }),
  (c.prototype.swipeMove = function(j) {
      var o,
          n,
          m,
          l,
          k,
          i = this;
      return (
          (k = void 0 !== j.originalEvent ? j.originalEvent.touches : null),
          !i.dragging || (k && 1 !== k.length) ?
          !1 :
          ((o = i.getLeft(i.currentSlide)),
              (i.touchObject.curX = void 0 !== k ? k[0].pageX : j.clientX),
              (i.touchObject.curY = void 0 !== k ? k[0].pageY : j.clientY),
              (i.touchObject.swipeLength = Math.round(
                  Math.sqrt(Math.pow(i.touchObject.curX - i.touchObject.startX, 2))
              )),
              i.options.verticalSwiping === !0 &&
              (i.touchObject.swipeLength = Math.round(
                  Math.sqrt(
                      Math.pow(i.touchObject.curY - i.touchObject.startY, 2)
                  )
              )),
              (n = i.swipeDirection()),
              "vertical" !== n ?
              (void 0 !== j.originalEvent &&
                  i.touchObject.swipeLength > 4 &&
                  j.preventDefault(),
                  (l =
                      (i.options.rtl === !1 ? 1 : -1) *
                      (i.touchObject.curX > i.touchObject.startX ? 1 : -1)),
                  i.options.verticalSwiping === !0 &&
                  (l = i.touchObject.curY > i.touchObject.startY ? 1 : -1),
                  (m = i.touchObject.swipeLength),
                  (i.touchObject.edgeHit = !1),
                  i.options.infinite === !1 &&
                  ((0 === i.currentSlide && "right" === n) ||
                      (i.currentSlide >= i.getDotCount() && "left" === n)) &&
                  ((m = i.touchObject.swipeLength * i.options.edgeFriction),
                      (i.touchObject.edgeHit = !0)),
                  i.options.vertical === !1 ?
                  (i.swipeLeft = o + m * l) :
                  (i.swipeLeft =
                      o + m * (i.$list.height() / i.listWidth) * l),
                  i.options.verticalSwiping === !0 && (i.swipeLeft = o + m * l),
                  i.options.fade === !0 || i.options.touchMove === !1 ?
                  !1 :
                  i.animating === !0 ?
                  ((i.swipeLeft = null), !1) :
                  void i.setCSS(i.swipeLeft)) :
              void 0)
      );
  }),
  (c.prototype.swipeStart = function(f) {
      var g,
          e = this;
      return (
          (e.interrupted = !0),
          1 !== e.touchObject.fingerCount ||
          e.slideCount <= e.options.slidesToShow ?
          ((e.touchObject = {}), !1) :
          (void 0 !== f.originalEvent &&
              void 0 !== f.originalEvent.touches &&
              (g = f.originalEvent.touches[0]),
              (e.touchObject.startX = e.touchObject.curX =
                  void 0 !== g ? g.pageX : f.clientX),
              (e.touchObject.startY = e.touchObject.curY =
                  void 0 !== g ? g.pageY : f.clientY),
              void(e.dragging = !0))
      );
  }),
  (c.prototype.unfilterSlides = c.prototype.slickUnfilter =
      function() {
          var b = this;
          null !== b.$slidesCache &&
              (b.unload(),
                  b.$slideTrack.children(this.options.slide).detach(),
                  b.$slidesCache.appendTo(b.$slideTrack),
                  b.reinit());
      }),
  (c.prototype.unload = function() {
      var a = this;
      d(".slick-cloned", a.$slider).remove(),
          a.$dots && a.$dots.remove(),
          a.$prevArrow &&
          a.htmlExpr.test(a.options.prevArrow) &&
          a.$prevArrow.remove(),
          a.$nextArrow &&
          a.htmlExpr.test(a.options.nextArrow) &&
          a.$nextArrow.remove(),
          a.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
  }),
  (c.prototype.unslick = function(f) {
      var e = this;
      e.$slider.trigger("unslick", [e, f]), e.destroy();
  }),
  (c.prototype.updateArrows = function() {
      var e,
          f = this;
      (e = Math.floor(f.options.slidesToShow / 2)),
      f.options.arrows === !0 &&
          f.slideCount > f.options.slidesToShow &&
          !f.options.infinite &&
          (f.$prevArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
              f.$nextArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
              0 === f.currentSlide ?
              (f.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                  f.$nextArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false")) :
              f.currentSlide >= f.slideCount - f.options.slidesToShow &&
              f.options.centerMode === !1 ?
              (f.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                  f.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false")) :
              f.currentSlide >= f.slideCount - 1 &&
              f.options.centerMode === !0 &&
              (f.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                  f.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false")));
  }),
  (c.prototype.updateDots = function() {
      var b = this;
      null !== b.$dots &&
          (b.$dots
              .find("li")
              .removeClass("slick-active")
              .attr("aria-hidden", "true"),
              b.$dots
              .find("li")
              .eq(Math.floor(b.currentSlide / b.options.slidesToScroll))
              .addClass("slick-active")
              .attr("aria-hidden", "false"));
  }),
  (c.prototype.visibility = function() {
      var b = this;
      b.options.autoplay &&
          (document[b.hidden] ? (b.interrupted = !0) : (b.interrupted = !1));
  }),
  (d.fn.slick = function() {
      var i,
          h,
          b = this,
          l = arguments[0],
          k = Array.prototype.slice.call(arguments, 1),
          j = b.length;
      for (i = 0; j > i; i++) {
          if (
              ("object" == typeof l || "undefined" == typeof l ?
                  (b[i].slick = new c(b[i], l)) :
                  (h = b[i].slick[l].apply(b[i].slick, k)),
                  "undefined" != typeof h)
          ) {
              return h;
          }
      }
      return b;
  });
});
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
(function(a) {
  if (typeof define === "function" && define.amd) {
      define(["jquery"], a);
  } else {
      if (typeof exports === "object") {
          a(require("jquery"));
      } else {
          a(window.jQuery || window.Zepto);
      }
  }
})(function(B) {
  var x = "Close",
      G = "BeforeClose",
      v = "AfterClose",
      M = "BeforeAppend",
      f = "MarkupParse",
      k = "Open",
      h = "Change",
      C = "mfp",
      d = "." + C,
      H = "mfp-ready",
      J = "mfp-removing",
      e = "mfp-prevent-close";
  var R,
      y = function() {},
      I = !!window.jQuery,
      A,
      a = B(window),
      z,
      E,
      b,
      K;
  var i = function(V, W) {
          R.ev.on(C + V + d, W);
      },
      n = function(Z, W, X, V) {
          var Y = document.createElement("div");
          Y.className = "mfp-" + Z;
          if (X) {
              Y.innerHTML = X;
          }
          if (!V) {
              Y = B(Y);
              if (W) {
                  Y.appendTo(W);
              }
          } else {
              if (W) {
                  W.appendChild(Y);
              }
          }
          return Y;
      },
      O = function(W, V) {
          R.ev.triggerHandler(C + W, V);
          if (R.st.callbacks) {
              W = W.charAt(0).toLowerCase() + W.slice(1);
              if (R.st.callbacks[W]) {
                  R.st.callbacks[W].apply(R, B.isArray(V) ? V : [V]);
              }
          }
      },
      D = function(V) {
          if (V !== K || !R.currTemplate.closeBtn) {
              R.currTemplate.closeBtn = B(
                  R.st.closeMarkup.replace("%title%", R.st.tClose)
              );
              K = V;
          }
          return R.currTemplate.closeBtn;
      },
      s = function() {
          if (!B.magnificPopup.instance) {
              R = new y();
              R.init();
              B.magnificPopup.instance = R;
          }
      },
      U = function() {
          var W = document.createElement("p").style,
              V = ["ms", "O", "Moz", "Webkit"];
          if (W.transition !== undefined) {
              return true;
          }
          while (V.length) {
              if (V.pop() + "Transition" in W) {
                  return true;
              }
          }
          return false;
      };
  y.prototype = {
      constructor: y,
      init: function() {
          var V = navigator.appVersion;
          R.isLowIE = R.isIE8 = document.all && !document.addEventListener;
          R.isAndroid = /android/gi.test(V);
          R.isIOS = /iphone|ipad|ipod/gi.test(V);
          R.supportsTransition = U();
          R.probablyMobile =
              R.isAndroid ||
              R.isIOS ||
              /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
                  navigator.userAgent
              );
          z = B(document);
          R.popupsCache = {};
      },
      open: function(aa) {
          var ab;
          if (aa.isObj === false) {
              R.items = aa.items.toArray();
              R.index = 0;
              var ac = aa.items,
                  ad;
              for (ab = 0; ab < ac.length; ab++) {
                  ad = ac[ab];
                  if (ad.parsed) {
                      ad = ad.el[0];
                  }
                  if (ad === aa.el[0]) {
                      R.index = ab;
                      break;
                  }
              }
          } else {
              R.items = B.isArray(aa.items) ? aa.items : [aa.items];
              R.index = aa.index || 0;
          }
          if (R.isOpen) {
              R.updateItemHTML();
              return;
          }
          R.types = [];
          b = "";
          if (aa.mainEl && aa.mainEl.length) {
              R.ev = aa.mainEl.eq(0);
          } else {
              R.ev = z;
          }
          if (aa.key) {
              if (!R.popupsCache[aa.key]) {
                  R.popupsCache[aa.key] = {};
              }
              R.currTemplate = R.popupsCache[aa.key];
          } else {
              R.currTemplate = {};
          }
          R.st = B.extend(true, {}, B.magnificPopup.defaults, aa);
          R.fixedContentPos =
              R.st.fixedContentPos === "auto" ?
              !R.probablyMobile :
              R.st.fixedContentPos;
          if (R.st.modal) {
              R.st.closeOnContentClick = false;
              R.st.closeOnBgClick = false;
              R.st.showCloseBtn = false;
              R.st.enableEscapeKey = false;
          }
          if (!R.bgOverlay) {
              R.bgOverlay = n("bg").on("click" + d, function() {
                  R.close();
              });
              R.wrap = n("wrap")
                  .attr("tabindex", -1)
                  .on("click" + d, function(af) {
                      if (R._checkIfClose(af.target)) {
                          R.close();
                      }
                  });
              R.container = n("container", R.wrap);
          }
          R.contentContainer = n("content");
          if (R.st.preloader) {
              R.preloader = n("preloader", R.container, R.st.tLoading);
          }
          var Z = B.magnificPopup.modules;
          for (ab = 0; ab < Z.length; ab++) {
              var Y = Z[ab];
              Y = Y.charAt(0).toUpperCase() + Y.slice(1);
              R["init" + Y].call(R);
          }
          O("BeforeOpen");
          if (R.st.showCloseBtn) {
              if (!R.st.closeBtnInside) {
                  R.wrap.append(D());
              } else {
                  i(f, function(ai, ag, af, ah) {
                      af.close_replaceWith = D(ah.type);
                  });
                  b += " mfp-close-btn-in";
              }
          }
          if (R.st.alignTop) {
              b += " mfp-align-top";
          }
          if (R.fixedContentPos) {
              R.wrap.css({
                  overflow: R.st.overflowY,
                  overflowX: "hidden",
                  overflowY: R.st.overflowY,
              });
          } else {
              R.wrap.css({
                  top: a.scrollTop(),
                  position: "absolute"
              });
          }
          if (
              R.st.fixedBgPos === false ||
              (R.st.fixedBgPos === "auto" && !R.fixedContentPos)
          ) {
              R.bgOverlay.css({
                  height: z.height(),
                  position: "absolute"
              });
          }
          if (R.st.enableEscapeKey) {
              z.on("keyup" + d, function(af) {
                  if (af.keyCode === 27) {
                      R.close();
                  }
              });
          }
          a.on("resize" + d, function() {
              R.updateSize();
          });
          if (!R.st.closeOnContentClick) {
              b += " mfp-auto-cursor";
          }
          if (b) {
              R.wrap.addClass(b);
          }
          var V = (R.wH = a.height());
          var X = {};
          if (R.fixedContentPos) {
              if (R._hasScrollBar(V)) {
                  var ae = R._getScrollbarSize();
                  if (ae) {
                      X.marginRight = ae;
                  }
              }
          }
          if (R.fixedContentPos) {
              if (!R.isIE7) {
                  X.overflow = "hidden";
              } else {
                  B("body, html").css("overflow", "hidden");
              }
          }
          var W = R.st.mainClass;
          if (R.isIE7) {
              W += " mfp-ie7";
          }
          if (W) {
              R._addClassToMFP(W);
          }
          R.updateItemHTML();
          O("BuildControls");
          B("html").css(X);
          R.bgOverlay.add(R.wrap).prependTo(R.st.prependTo || B(document.body));
          R._lastFocusedEl = document.activeElement;
          setTimeout(function() {
              if (R.content) {
                  R._addClassToMFP(H);
                  R._setFocus();
              } else {
                  R.bgOverlay.addClass(H);
              }
              z.on("focusin" + d, R._onFocusIn);
          }, 16);
          R.isOpen = true;
          R.updateSize(V);
          O(k);
          return aa;
      },
      close: function() {
          if (!R.isOpen) {
              return;
          }
          O(G);
          R.isOpen = false;
          if (R.st.removalDelay && !R.isLowIE && R.supportsTransition) {
              R._addClassToMFP(J);
              setTimeout(function() {
                  R._close();
              }, R.st.removalDelay);
          } else {
              R._close();
          }
      },
      _close: function() {
          O(x);
          var V = J + " " + H + " ";
          R.bgOverlay.detach();
          R.wrap.detach();
          R.container.empty();
          if (R.st.mainClass) {
              V += R.st.mainClass + " ";
          }
          R._removeClassFromMFP(V);
          if (R.fixedContentPos) {
              var W = {
                  marginRight: ""
              };
              if (R.isIE7) {
                  B("body, html").css("overflow", "");
              } else {
                  W.overflow = "";
              }
              B("html").css(W);
          }
          z.off("keyup" + d + " focusin" + d);
          R.ev.off(d);
          R.wrap.attr("class", "mfp-wrap").removeAttr("style");
          R.bgOverlay.attr("class", "mfp-bg");
          R.container.attr("class", "mfp-container");
          if (
              R.st.showCloseBtn &&
              (!R.st.closeBtnInside || R.currTemplate[R.currItem.type] === true)
          ) {
              if (R.currTemplate.closeBtn) {
                  R.currTemplate.closeBtn.detach();
              }
          }
          if (R.st.autoFocusLast && R._lastFocusedEl) {
              B(R._lastFocusedEl).focus();
          }
          R.currItem = null;
          R.content = null;
          R.currTemplate = null;
          R.prevHeight = 0;
          O(v);
      },
      updateSize: function(W) {
          if (R.isIOS) {
              var X = document.documentElement.clientWidth / window.innerWidth;
              var V = window.innerHeight * X;
              R.wrap.css("height", V);
              R.wH = V;
          } else {
              R.wH = W || a.height();
          }
          if (!R.fixedContentPos) {
              R.wrap.css("height", R.wH);
          }
          O("Resize");
      },
      updateItemHTML: function() {
          var Y = R.items[R.index];
          R.contentContainer.detach();
          if (R.content) {
              R.content.detach();
          }
          if (!Y.parsed) {
              Y = R.parseEl(R.index);
          }
          var X = Y.type;
          O("BeforeChange", [R.currItem ? R.currItem.type : "", X]);
          R.currItem = Y;
          if (!R.currTemplate[X]) {
              var W = R.st[X] ? R.st[X].markup : false;
              O("FirstMarkupParse", W);
              if (W) {
                  R.currTemplate[X] = B(W);
              } else {
                  R.currTemplate[X] = true;
              }
          }
          if (E && E !== Y.type) {
              R.container.removeClass("mfp-" + E + "-holder");
          }
          var V = R["get" + X.charAt(0).toUpperCase() + X.slice(1)](
              Y,
              R.currTemplate[X]
          );
          R.appendContent(V, X);
          Y.preloaded = true;
          O(h, Y);
          E = Y.type;
          R.container.prepend(R.contentContainer);
          O("AfterChange");
      },
      appendContent: function(V, W) {
          R.content = V;
          if (V) {
              if (
                  R.st.showCloseBtn &&
                  R.st.closeBtnInside &&
                  R.currTemplate[W] === true
              ) {
                  if (!R.content.find(".mfp-close").length) {
                      R.content.append(D());
                  }
              } else {
                  R.content = V;
              }
          } else {
              R.content = "";
          }
          O(M);
          R.container.addClass("mfp-" + W + "-holder");
          R.contentContainer.append(R.content);
      },
      parseEl: function(V) {
          var Z = R.items[V],
              Y;
          if (Z.tagName) {
              Z = {
                  el: B(Z)
              };
          } else {
              Y = Z.type;
              Z = {
                  data: Z,
                  src: Z.src
              };
          }
          if (Z.el) {
              var X = R.types;
              for (var W = 0; W < X.length; W++) {
                  if (Z.el.hasClass("mfp-" + X[W])) {
                      Y = X[W];
                      break;
                  }
              }
              Z.src = Z.el.attr("data-mfp-src");
              if (!Z.src) {
                  Z.src = Z.el.attr("href");
              }
          }
          Z.type = Y || R.st.type || "inline";
          Z.index = V;
          Z.parsed = true;
          R.items[V] = Z;
          O("ElementParse", Z);
          return R.items[V];
      },
      addGroup: function(X, W) {
          var Y = function(Z) {
              Z.mfpEl = this;
              R._openClick(Z, X, W);
          };
          if (!W) {
              W = {};
          }
          var V = "click.magnificPopup";
          W.mainEl = X;
          if (W.items) {
              W.isObj = true;
              X.off(V).on(V, Y);
          } else {
              W.isObj = false;
              if (W.delegate) {
                  X.off(V).on(V, W.delegate, Y);
              } else {
                  W.items = X;
                  X.off(V).on(V, Y);
              }
          }
      },
      _openClick: function(Z, X, V) {
          var W =
              V.midClick !== undefined ?
              V.midClick :
              B.magnificPopup.defaults.midClick;
          if (
              !W &&
              (Z.which === 2 || Z.ctrlKey || Z.metaKey || Z.altKey || Z.shiftKey)
          ) {
              return;
          }
          var Y =
              V.disableOn !== undefined ?
              V.disableOn :
              B.magnificPopup.defaults.disableOn;
          if (Y) {
              if (B.isFunction(Y)) {
                  if (!Y.call(R)) {
                      return true;
                  }
              } else {
                  if (a.width() < Y) {
                      return true;
                  }
              }
          }
          if (Z.type) {
              Z.preventDefault();
              if (R.isOpen) {
                  Z.stopPropagation();
              }
          }
          V.el = B(Z.mfpEl);
          if (V.delegate) {
              V.items = X.find(V.delegate);
          }
          R.open(V);
      },
      updateStatus: function(V, X) {
          if (R.preloader) {
              if (A !== V) {
                  R.container.removeClass("mfp-s-" + A);
              }
              if (!X && V === "loading") {
                  X = R.st.tLoading;
              }
              var W = {
                  status: V,
                  text: X
              };
              O("UpdateStatus", W);
              V = W.status;
              X = W.text;
              R.preloader.html(X);
              R.preloader.find("a").on("click", function(Y) {
                  Y.stopImmediatePropagation();
              });
              R.container.addClass("mfp-s-" + V);
              A = V;
          }
      },
      _checkIfClose: function(X) {
          if (B(X).hasClass(e)) {
              return;
          }
          var V = R.st.closeOnContentClick;
          var W = R.st.closeOnBgClick;
          if (V && W) {
              return true;
          } else {
              if (
                  !R.content ||
                  B(X).hasClass("mfp-close") ||
                  (R.preloader && X === R.preloader[0])
              ) {
                  return true;
              }
              if (X !== R.content[0] && !B.contains(R.content[0], X)) {
                  if (W) {
                      if (B.contains(document, X)) {
                          return true;
                      }
                  }
              } else {
                  if (V) {
                      return true;
                  }
              }
          }
          return false;
      },
      _addClassToMFP: function(V) {
          R.bgOverlay.addClass(V);
          R.wrap.addClass(V);
      },
      _removeClassFromMFP: function(V) {
          this.bgOverlay.removeClass(V);
          R.wrap.removeClass(V);
      },
      _hasScrollBar: function(V) {
          return (
              (R.isIE7 ? z.height() : document.body.scrollHeight) > (V || a.height())
          );
      },
      _setFocus: function() {
          (R.st.focus ? R.content.find(R.st.focus).eq(0) : R.wrap).focus();
      },
      _onFocusIn: function(V) {
          if (V.target !== R.wrap[0] && !B.contains(R.wrap[0], V.target)) {
              R._setFocus();
              return false;
          }
      },
      _parseMarkup: function(X, W, Y) {
          var V;
          if (Y.data) {
              W = B.extend(Y.data, W);
          }
          O(f, [X, W, Y]);
          B.each(W, function(aa, ac) {
              if (ac === undefined || ac === false) {
                  return true;
              }
              V = aa.split("_");
              if (V.length > 1) {
                  var ab = X.find(d + "-" + V[0]);
                  if (ab.length > 0) {
                      var Z = V[1];
                      if (Z === "replaceWith") {
                          if (ab[0] !== ac[0]) {
                              ab.replaceWith(ac);
                          }
                      } else {
                          if (Z === "img") {
                              if (ab.is("img")) {
                                  ab.attr("src", ac);
                              } else {
                                  ab.replaceWith(
                                      B("<img>").attr("src", ac).attr("class", ab.attr("class"))
                                  );
                              }
                          } else {
                              ab.attr(V[1], ac);
                          }
                      }
                  }
              } else {
                  X.find(d + "-" + aa).html(ac);
              }
          });
      },
      _getScrollbarSize: function() {
          if (R.scrollbarSize === undefined) {
              var V = document.createElement("div");
              V.style.cssText =
                  "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
              document.body.appendChild(V);
              R.scrollbarSize = V.offsetWidth - V.clientWidth;
              document.body.removeChild(V);
          }
          return R.scrollbarSize;
      },
  };
  B.magnificPopup = {
      instance: null,
      proto: y.prototype,
      modules: [],
      open: function(W, V) {
          s();
          if (!W) {
              W = {};
          } else {
              W = B.extend(true, {}, W);
          }
          W.isObj = true;
          W.index = V || 0;
          return this.instance.open(W);
      },
      close: function() {
          return B.magnificPopup.instance && B.magnificPopup.instance.close();
      },
      registerModule: function(V, W) {
          if (W.options) {
              B.magnificPopup.defaults[V] = W.options;
          }
          B.extend(this.proto, W.proto);
          this.modules.push(V);
      },
      defaults: {
          disableOn: 0,
          key: null,
          midClick: false,
          mainClass: "",
          preloader: true,
          focus: "",
          closeOnContentClick: false,
          closeOnBgClick: true,
          closeBtnInside: true,
          showCloseBtn: true,
          enableEscapeKey: true,
          modal: false,
          alignTop: false,
          removalDelay: 0,
          prependTo: null,
          fixedContentPos: "auto",
          fixedBgPos: "auto",
          overflowY: "auto",
          closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
          tClose: "Close (Esc)",
          tLoading: "Loading...",
          autoFocusLast: true,
      },
  };
  B.fn.magnificPopup = function(X) {
      s();
      var Y = B(this);
      if (typeof X === "string") {
          if (X === "open") {
              var V,
                  Z = I ? Y.data("magnificPopup") : Y[0].magnificPopup,
                  W = parseInt(arguments[1], 10) || 0;
              if (Z.items) {
                  V = Z.items[W];
              } else {
                  V = Y;
                  if (Z.delegate) {
                      V = V.find(Z.delegate);
                  }
                  V = V.eq(W);
              }
              R._openClick({
                  mfpEl: V
              }, Y, Z);
          } else {
              if (R.isOpen) {
                  R[X].apply(R, Array.prototype.slice.call(arguments, 1));
              }
          }
      } else {
          X = B.extend(true, {}, X);
          if (I) {
              Y.data("magnificPopup", X);
          } else {
              Y[0].magnificPopup = X;
          }
          R.addGroup(Y, X);
      }
      return Y;
  };
  var F = "inline",
      Q,
      N,
      r,
      l = function() {
          if (r) {
              N.after(r.addClass(Q)).detach();
              r = null;
          }
      };
  B.magnificPopup.registerModule(F, {
      options: {
          hiddenClass: "hide",
          markup: "",
          tNotFound: "Content not found",
      },
      proto: {
          initInline: function() {
              R.types.push(F);
              i(x + "." + F, function() {
                  l();
              });
          },
          getInline: function(Z, Y) {
              l();
              if (Z.src) {
                  var V = R.st.inline,
                      X = B(Z.src);
                  if (X.length) {
                      var W = X[0].parentNode;
                      if (W && W.tagName) {
                          if (!N) {
                              Q = V.hiddenClass;
                              N = n(Q);
                              Q = "mfp-" + Q;
                          }
                          r = X.after(N).detach().removeClass(Q);
                      }
                      R.updateStatus("ready");
                  } else {
                      R.updateStatus("error", V.tNotFound);
                      X = B("<div>");
                  }
                  Z.inlineElement = X;
                  return X;
              }
              R.updateStatus("ready");
              R._parseMarkup(Y, {}, Z);
              return Y;
          },
      },
  });
  var t = "ajax",
      T,
      u = function() {
          if (T) {
              B(document.body).removeClass(T);
          }
      },
      S = function() {
          u();
          if (R.req) {
              R.req.abort();
          }
      };
  B.magnificPopup.registerModule(t, {
      options: {
          settings: null,
          cursor: "mfp-ajax-cur",
          tError: '<a href="%url%">The content</a> could not be loaded.',
      },
      proto: {
          initAjax: function() {
              R.types.push(t);
              T = R.st.ajax.cursor;
              i(x + "." + t, S);
              i("BeforeChange." + t, S);
          },
          getAjax: function(W) {
              if (T) {
                  B(document.body).addClass(T);
              }
              R.updateStatus("loading");
              var V = B.extend({
                      url: W.src,
                      success: function(Z, aa, Y) {
                          var X = {
                              data: Z,
                              xhr: Y
                          };
                          O("ParseAjax", X);
                          R.appendContent(B(X.data), t);
                          W.finished = true;
                          u();
                          R._setFocus();
                          setTimeout(function() {
                              R.wrap.addClass(H);
                          }, 16);
                          R.updateStatus("ready");
                          O("AjaxContentAdded");
                      },
                      error: function() {
                          u();
                          W.finished = W.loadError = true;
                          R.updateStatus("error", R.st.ajax.tError.replace("%url%", W.src));
                      },
                  },
                  R.st.ajax.settings
              );
              R.req = B.ajax(V);
              return "";
          },
      },
  });
  var g,
      c = function(V) {
          if (V.data && V.data.title !== undefined) {
              return V.data.title;
          }
          var W = R.st.image.titleSrc;
          if (W) {
              if (B.isFunction(W)) {
                  return W.call(R, V);
              } else {
                  if (V.el) {
                      return V.el.attr(W) || "";
                  }
              }
          }
          return "";
      };
  B.magnificPopup.registerModule("image", {
      options: {
          markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
          cursor: "mfp-zoom-out-cur",
          titleSrc: "title",
          verticalFit: true,
          tError: '<a href="%url%">The image</a> could not be loaded.',
      },
      proto: {
          initImage: function() {
              var W = R.st.image,
                  V = ".image";
              R.types.push("image");
              i(k + V, function() {
                  if (R.currItem.type === "image" && W.cursor) {
                      B(document.body).addClass(W.cursor);
                  }
              });
              i(x + V, function() {
                  if (W.cursor) {
                      B(document.body).removeClass(W.cursor);
                  }
                  a.off("resize" + d);
              });
              i("Resize" + V, R.resizeImage);
              if (R.isLowIE) {
                  i("AfterChange", R.resizeImage);
              }
          },
          resizeImage: function() {
              var W = R.currItem;
              if (!W || !W.img) {
                  return;
              }
              if (R.st.image.verticalFit) {
                  var V = 0;
                  if (R.isLowIE) {
                      V =
                          parseInt(W.img.css("padding-top"), 10) +
                          parseInt(W.img.css("padding-bottom"), 10);
                  }
                  W.img.css("max-height", R.wH - V);
              }
          },
          _onImageHasSize: function(V) {
              if (V.img) {
                  V.hasSize = true;
                  if (g) {
                      clearInterval(g);
                  }
                  V.isCheckingImgSize = false;
                  O("ImageHasSize", V);
                  if (V.imgHidden) {
                      if (R.content) {
                          R.content.removeClass("mfp-loading");
                      }
                      V.imgHidden = false;
                  }
              }
          },
          findImageSize: function(Y) {
              var V = 0,
                  W = Y.img[0],
                  X = function(Z) {
                      if (g) {
                          clearInterval(g);
                      }
                      g = setInterval(function() {
                          if (W.naturalWidth > 0) {
                              R._onImageHasSize(Y);
                              return;
                          }
                          if (V > 200) {
                              clearInterval(g);
                          }
                          V++;
                          if (V === 3) {
                              X(10);
                          } else {
                              if (V === 40) {
                                  X(50);
                              } else {
                                  if (V === 100) {
                                      X(500);
                                  }
                              }
                          }
                      }, Z);
                  };
              X(1);
          },
          getImage: function(ab, Y) {
              var aa = 0,
                  ac = function() {
                      if (ab) {
                          if (ab.img[0].complete) {
                              ab.img.off(".mfploader");
                              if (ab === R.currItem) {
                                  R._onImageHasSize(ab);
                                  R.updateStatus("ready");
                              }
                              ab.hasSize = true;
                              ab.loaded = true;
                              O("ImageLoadComplete");
                          } else {
                              aa++;
                              if (aa < 200) {
                                  setTimeout(ac, 100);
                              } else {
                                  V();
                              }
                          }
                      }
                  },
                  V = function() {
                      if (ab) {
                          ab.img.off(".mfploader");
                          if (ab === R.currItem) {
                              R._onImageHasSize(ab);
                              R.updateStatus("error", Z.tError.replace("%url%", ab.src));
                          }
                          ab.hasSize = true;
                          ab.loaded = true;
                          ab.loadError = true;
                      }
                  },
                  Z = R.st.image;
              var X = Y.find(".mfp-img");
              if (X.length) {
                  var W = document.createElement("img");
                  W.className = "mfp-img";
                  if (ab.el && ab.el.find("img").length) {
                      W.alt = ab.el.find("img").attr("alt");
                  }
                  ab.img = B(W).on("load.mfploader", ac).on("error.mfploader", V);
                  W.src = ab.src;
                  if (X.is("img")) {
                      ab.img = ab.img.clone();
                  }
                  W = ab.img[0];
                  if (W.naturalWidth > 0) {
                      ab.hasSize = true;
                  } else {
                      if (!W.width) {
                          ab.hasSize = false;
                      }
                  }
              }
              R._parseMarkup(Y, {
                  title: c(ab),
                  img_replaceWith: ab.img
              }, ab);
              R.resizeImage();
              if (ab.hasSize) {
                  if (g) {
                      clearInterval(g);
                  }
                  if (ab.loadError) {
                      Y.addClass("mfp-loading");
                      R.updateStatus("error", Z.tError.replace("%url%", ab.src));
                  } else {
                      Y.removeClass("mfp-loading");
                      R.updateStatus("ready");
                  }
                  return Y;
              }
              R.updateStatus("loading");
              ab.loading = true;
              if (!ab.hasSize) {
                  ab.imgHidden = true;
                  Y.addClass("mfp-loading");
                  R.findImageSize(ab);
              }
              return Y;
          },
      },
  });
  var j,
      L = function() {
          if (j === undefined) {
              j = document.createElement("p").style.MozTransform !== undefined;
          }
          return j;
      };
  B.magnificPopup.registerModule("zoom", {
      options: {
          enabled: false,
          easing: "ease-in-out",
          duration: 300,
          opener: function(V) {
              return V.is("img") ? V : V.find("img");
          },
      },
      proto: {
          initZoom: function() {
              var W = R.st.zoom,
                  Z = ".zoom",
                  ac;
              if (!W.enabled || !R.supportsTransition) {
                  return;
              }
              var ab = W.duration,
                  aa = function(af) {
                      var ae = af
                          .clone()
                          .removeAttr("style")
                          .removeAttr("class")
                          .addClass("mfp-animated-image"),
                          ag = "all " + W.duration / 1000 + "s " + W.easing,
                          ah = {
                              position: "fixed",
                              zIndex: 9999,
                              left: 0,
                              top: 0,
                              "-webkit-backface-visibility": "hidden",
                          },
                          ad = "transition";
                      ah["-webkit-" + ad] =
                          ah["-moz-" + ad] =
                          ah["-o-" + ad] =
                          ah[ad] =
                          ag;
                      ae.css(ah);
                      return ae;
                  },
                  V = function() {
                      R.content.css("visibility", "visible");
                  },
                  X,
                  Y;
              i("BuildControls" + Z, function() {
                  if (R._allowZoom()) {
                      clearTimeout(X);
                      R.content.css("visibility", "hidden");
                      ac = R._getItemToZoom();
                      if (!ac) {
                          V();
                          return;
                      }
                      Y = aa(ac);
                      Y.css(R._getOffset());
                      R.wrap.append(Y);
                      X = setTimeout(function() {
                          Y.css(R._getOffset(true));
                          X = setTimeout(function() {
                              V();
                              setTimeout(function() {
                                  Y.remove();
                                  ac = Y = null;
                                  O("ZoomAnimationEnded");
                              }, 16);
                          }, ab);
                      }, 16);
                  }
              });
              i(G + Z, function() {
                  if (R._allowZoom()) {
                      clearTimeout(X);
                      R.st.removalDelay = ab;
                      if (!ac) {
                          ac = R._getItemToZoom();
                          if (!ac) {
                              return;
                          }
                          Y = aa(ac);
                      }
                      Y.css(R._getOffset(true));
                      R.wrap.append(Y);
                      R.content.css("visibility", "hidden");
                      setTimeout(function() {
                          Y.css(R._getOffset());
                      }, 16);
                  }
              });
              i(x + Z, function() {
                  if (R._allowZoom()) {
                      V();
                      if (Y) {
                          Y.remove();
                      }
                      ac = null;
                  }
              });
          },
          _allowZoom: function() {
              return R.currItem.type === "image";
          },
          _getItemToZoom: function() {
              if (R.currItem.hasSize) {
                  return R.currItem.img;
              } else {
                  return false;
              }
          },
          _getOffset: function(X) {
              var V;
              if (X) {
                  V = R.currItem.img;
              } else {
                  V = R.st.zoom.opener(R.currItem.el || R.currItem);
              }
              var aa = V.offset();
              var W = parseInt(V.css("padding-top"), 10);
              var Z = parseInt(V.css("padding-bottom"), 10);
              aa.top -= B(window).scrollTop() - W;
              var Y = {
                  width: V.width(),
                  height: (I ? V.innerHeight() : V[0].offsetHeight) - Z - W,
              };
              if (L()) {
                  Y["-moz-transform"] = Y.transform =
                      "translate(" + aa.left + "px," + aa.top + "px)";
              } else {
                  Y.left = aa.left;
                  Y.top = aa.top;
              }
              return Y;
          },
      },
  });
  var q = "iframe",
      p = "//about:blank",
      P = function(V) {
          if (R.currTemplate[q]) {
              var W = R.currTemplate[q].find("iframe");
              if (W.length) {
                  if (!V) {
                      W[0].src = p;
                  }
                  if (R.isIE8) {
                      W.css("display", V ? "block" : "none");
                  }
              }
          }
      };
  B.magnificPopup.registerModule(q, {
      options: {
          markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
          srcAction: "iframe_src",
          patterns: {
              youtube: {
                  index: "youtube.com",
                  id: "v=",
                  src: "//www.youtube-nocookie.com/embed/%id%?autoplay=1",
              },
              vimeo: {
                  index: "vimeo.com/",
                  id: "/",
                  src: "//player.vimeo.com/video/%id%?autoplay=1",
              },
              gmaps: {
                  index: "//maps.google.",
                  src: "%id%&output=embed"
              },
          },
      },
      proto: {
          initIframe: function() {
              R.types.push(q);
              i("BeforeChange", function(X, V, W) {
                  if (V !== W) {
                      if (V === q) {
                          P();
                      } else {
                          if (W === q) {
                              P(true);
                          }
                      }
                  }
              });
              i(x + "." + q, function() {
                  P();
              });
          },
          getIframe: function(Z, Y) {
              var V = Z.src;
              var X = R.st.iframe;
              B.each(X.patterns, function() {
                  if (V.indexOf(this.index) > -1) {
                      if (this.id) {
                          if (typeof this.id === "string") {
                              V = V.substr(V.lastIndexOf(this.id) + this.id.length, V.length);
                          } else {
                              V = this.id.call(this, V);
                          }
                      }
                      V = this.src.replace("%id%", V);
                      return false;
                  }
              });
              var W = {};
              if (X.srcAction) {
                  W[X.srcAction] = V;
              }
              R._parseMarkup(Y, W, Z);
              R.updateStatus("ready");
              return Y;
          },
      },
  });
  var w = function(V) {
          var W = R.items.length;
          if (V > W - 1) {
              return V - W;
          } else {
              if (V < 0) {
                  return W + V;
              }
          }
          return V;
      },
      o = function(X, W, V) {
          return X.replace(/%curr%/gi, W + 1).replace(/%total%/gi, V);
      };
  B.magnificPopup.registerModule("gallery", {
      options: {
          enabled: false,
          arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><i class="glyphicon mfp-arrow-set mfp-prevent-close glyphicon-menu-%dir%"></i></button>',
          preload: [0, 2],
          navigateByImgClick: true,
          arrows: true,
          tPrev: "Previous (Left arrow key)",
          tNext: "Next (Right arrow key)",
          tCounter: "%curr% of %total%",
      },
      proto: {
          initGallery: function() {
              var V = R.st.gallery,
                  W = ".mfp-gallery";
              R.direction = true;
              if (!V || !V.enabled) {
                  return false;
              }
              b += " mfp-gallery";
              i(k + W, function() {
                  if (V.navigateByImgClick) {
                      R.wrap.on("click" + W, ".mfp-img", function() {
                          if (R.items.length > 1) {
                              R.next();
                              return false;
                          }
                      });
                  }
                  z.on("keydown" + W, function(X) {
                      if (X.keyCode === 37) {
                          R.prev();
                      } else {
                          if (X.keyCode === 39) {
                              R.next();
                          }
                      }
                  });
              });
              i("UpdateStatus" + W, function(Y, X) {
                  if (X.text) {
                      X.text = o(X.text, R.currItem.index, R.items.length);
                  }
              });
              i(f + W, function(ab, Z, Y, aa) {
                  var X = R.items.length;
                  Y.counter = X > 1 ? o(V.tCounter, aa.index, X) : "";
              });
              i("BuildControls" + W, function() {
                  if (R.items.length > 1 && V.arrows && !R.arrowLeft) {
                      var Y = V.arrowMarkup,
                          Z = (R.arrowLeft = B(
                              Y.replace(/%title%/gi, V.tPrev).replace(/%dir%/gi, "left")
                          ).addClass(e)),
                          X = (R.arrowRight = B(
                              Y.replace(/%title%/gi, V.tNext).replace(/%dir%/gi, "right")
                          ).addClass(e));
                      Z.click(function() {
                          R.prev();
                      });
                      X.click(function() {
                          R.next();
                      });
                      R.container.append(Z.add(X));
                  }
              });
              i(h + W, function() {
                  if (R._preloadTimeout) {
                      clearTimeout(R._preloadTimeout);
                  }
                  R._preloadTimeout = setTimeout(function() {
                      R.preloadNearbyImages();
                      R._preloadTimeout = null;
                  }, 16);
              });
              i(x + W, function() {
                  z.off(W);
                  R.wrap.off("click" + W);
                  R.arrowRight = R.arrowLeft = null;
              });
          },
          next: function() {
              R.direction = true;
              R.index = w(R.index + 1);
              R.updateItemHTML();
          },
          prev: function() {
              R.direction = false;
              R.index = w(R.index - 1);
              R.updateItemHTML();
          },
          goTo: function(V) {
              R.direction = V >= R.index;
              R.index = V;
              R.updateItemHTML();
          },
          preloadNearbyImages: function() {
              var Y = R.st.gallery.preload,
                  W = Math.min(Y[0], R.items.length),
                  X = Math.min(Y[1], R.items.length),
                  V;
              for (V = 1; V <= (R.direction ? X : W); V++) {
                  R._preloadItem(R.index + V);
              }
              for (V = 1; V <= (R.direction ? W : X); V++) {
                  R._preloadItem(R.index - V);
              }
          },
          _preloadItem: function(V) {
              V = w(V);
              if (R.items[V].preloaded) {
                  return;
              }
              var W = R.items[V];
              if (!W.parsed) {
                  W = R.parseEl(V);
              }
              O("LazyLoad", W);
              if (W.type === "image") {
                  W.img = B('<img class="mfp-img" />')
                      .on("load.mfploader", function() {
                          W.hasSize = true;
                      })
                      .on("error.mfploader", function() {
                          W.hasSize = true;
                          W.loadError = true;
                          O("LazyLoadError", W);
                      })
                      .attr("src", W.src);
              }
              W.preloaded = true;
          },
      },
  });
  var m = "retina";
  B.magnificPopup.registerModule(m, {
      options: {
          replaceSrc: function(V) {
              return V.src.replace(/\.\w+$/, function(W) {
                  return "@2x" + W;
              });
          },
          ratio: 1,
      },
      proto: {
          initRetina: function() {
              if (window.devicePixelRatio > 1) {
                  var V = R.st.retina,
                      W = V.ratio;
                  W = !isNaN(W) ? W : W();
                  if (W > 1) {
                      i("ImageHasSize." + m, function(Y, X) {
                          X.img.css({
                              "max-width": X.img[0].naturalWidth / W,
                              width: "100%",
                          });
                      });
                      i("ElementParse." + m, function(Y, X) {
                          X.src = V.replaceSrc(X, W);
                      });
                  }
              }
          },
      },
  });
  s();
});
jQuery(function(d) {
  d(window).on("load", function() {
      d("#pageLoad").fadeOut("fast");
  });
  d(document).ready(function() {
      d(window).on("scroll", function() {
          d(".navbar-fixed-top").addClass("fixed-position");
          if (d(document).scrollTop() < 90) {
              d(".navbar-fixed-top").removeClass("fixed-position");
          }
      });
  });
  d(".navbar a.dropdown-toggle").on("click", function(h) {
      var f = d(this);
      var g = d(this).offsetParent(".dropdown-menu");
      d(this).parent("li").toggleClass("open");
      d(".nav li.open").not(d(this).parents("li")).removeClass("open");
      return false;
  });
  d(".dropdown-toggle").on("hover", function() {
      var n = d(".dropdown-menu");
      var i = d(this).offset();
      var g = i.left;
      var k = n.width();
      var j = d(window).width();
      var f = d(".dropdown-menu").eq(1);
      var m = f.width();
      var h = g + k <= j;
      var l = g + k + m <= j;
      if (!h || !l) {
          d(".navbar-nav>.dropdown").addClass("edge");
      } else {
          d(".navbar-nav>.dropdown").removeClass("edge");
      }
  });
  d(".search-toggle").on("click", function() {
      d(".navbar").toggleClass("search-active");
      d(".search-input").focus();
  });
  d(document).on("mouseup", function(g) {
      var f = d(".navbar");
      if (!f.is(g.target) && f.has(g.target).length === 0) {
          f.removeClass("search-active");
      }
  });

  function e() {
      var f = d(window).scrollTop();
      d(".hero.banner").css("top", -(f * 0.0315) + "rem");
      d(".hero .banner-caption .container").css("top", -(f * -0.005) + "rem");
      d(".hero .banner-caption .container").css("opacity", 1 - f * 0.00175);
  }
  var c = d(".hero.banner").height();
  var b = d("#footer").height();
  d(".content").css({
      "margin-top": c + "px"
  });
  d(".footer-height").css({
      height: b + "px"
  });
  d(window).on("resize", function() {
      var g = d(".hero.banner").height();
      var f = d("#footer").height();
      d(".content").css({
          "margin-top": g + "px"
      });
      d(".footer-height").css({
          height: f + "px"
      });
  });
  d(window).on("scroll", function(f) {
      e();
  });
  d(window).on("load resize orientationchange", function() {
      setTimeout(function() {
          d(window).trigger("fontresize");
          d(".bg-stretch").each(function() {
              var g = d(this),
                  h = g.find("img");
              f.resizeImage(h, g);
          });
      }, 200);
      var f = {
          getDimensions: function(i) {
              var g = i.imageRatio || i.imageWidth / i.imageHeight,
                  j = i.maskWidth,
                  h = j / g;
              if (h < i.maskHeight) {
                  h = i.maskHeight;
                  j = h * g;
              }
              return {
                  width: j,
                  height: h,
                  top: (i.maskHeight - h) / 2,
                  left: (i.maskWidth - j) / 2,
              };
          },
          getRatio: function(h) {
              if (h.prop("naturalWidth")) {
                  return h.prop("naturalWidth") / h.prop("naturalHeight");
              } else {
                  var g = new Image();
                  g.src = h.prop("src");
                  return g.width / g.height;
              }
          },
          imageLoaded: function(i, j) {
              var g = this;
              var h = function() {
                  j.call(g);
              };
              if (i.prop("complete")) {
                  h();
              } else {
                  i.one("load", h);
              }
          },
          resizeHandler: function() {
              var g = this;
              d.each(this.imgList, function(h, i) {
                  if (i.image.prop("complete")) {
                      g.resizeImage(i.image, i.container);
                  }
              });
          },
          resizeImage: function(h, g) {
              this.imageLoaded(h, function() {
                  var i = this.getDimensions({
                      imageRatio: this.getRatio(h),
                      maskWidth: g.width(),
                      maskHeight: g.height(),
                  });
                  h.css({
                      width: i.width,
                      height: i.height,
                      marginTop: i.top,
                      marginLeft: i.left,
                  });
              });
          },
          add: function(h) {
              var g = d(h.container ? h.container : window),
                  i = typeof h.image === "string" ? g.find(h.image) : d(h.image);
              this.resizeImage(i, g);
              if (!this.win) {
                  this.resizeHandler = d.proxy(this.resizeHandler, this);
                  this.imgList = [];
                  this.win = d(window);
                  this.win.on("resize orientationchange", this.resizeHandler);
              }
              this.imgList.push({
                  container: g,
                  image: i
              });
          },
      };
  });
  d("body").scrollspy({
      target: "#mainnav",
      offset: 70
  });
  d(
      "#mainnav a[href*=#]:not([href=#]), a.arrow[href*=#]:not([href=#]), #view-more[href*=#]:not([href=#]), a.sidebar-anchor[href*=#]:not([href=#])"
  ).on("click", function() {
      if (
          location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
      ) {
          var f = d(this.hash);
          f = f.length ? f : d("[name=" + this.hash.slice(1) + "]");
          if (f.length) {
              d("html, body").animate({
                      scrollTop: f.offset().top - 65 + "px"
                  },
                  1000,
                  "easeInOutExpo"
              );
              return false;
          }
      }
  });
  d('a[data-toggle="tab"]').on("click", function(f) {
      f.preventDefault();
      d(this).tab("show");
  });
  d("#name").on("focus", function() {
      d("#success").html("");
  });
  var a = d(".grid").masonry({
      itemSelector: ".grid-item",
      percentPosition: true,
  });
  a.imagesLoaded().progress(function() {
      a.masonry();
  });
  new WOW().init();
  d(document).ready(function() {
      d(".counter").counterUp({
          delay: 10,
          time: 2000
      });
  });
  d(document).ready(function() {
      var f = d(".client-list");
      f.owlCarousel({
          items: 5,
          itemsDesktop: [1199, 4],
          itemsDesktopSmall: [979, 3],
          itemsTablet: [768, 2],
          itemsTabletSmall: true,
          itemsMobile: [479, 1],
          navigation: false,
          pagination: false,
      });
      var f = d(".team-list");
      f.owlCarousel({
          items: 1,
          itemsDesktop: [1199, 1],
          itemsDesktopSmall: [979, 1],
          itemsTablet: [768, 1],
          itemsTabletSmall: true,
          itemsMobile: [479, 1],
          navigation: true,
          pagination: false,
          navigationText: [
              "<i class='glyphicon glyphicon-menu-left'></i>",
              "<i class='glyphicon glyphicon-menu-right'></i>",
          ],
      });
      var f = d("#review-list");
      f.owlCarousel({
          items: 1,
          navigationText: ["", ""],
          navigation: true,
          singleItem: true,
      });
  });
  d(document).ready(function() {
      d("body").addClass("js-ready");
      var f = d("body").hasClass("js-ready");
      d(".same-height").each(function() {
          d(".height").matchHeight({
              byRow: f
          });
      });
  });
  d(document).ready(function() {
      d(".flexslider").flexslider({
          animation: "fade",
          prevText: "",
          nextText: "",
          controlNav: false,
          directionNav: true,
          slideshowSpeed: 30000,
          animationSpeed: 2500,
          start: function(f) {
              d("body").removeClass("loading");
          },
      });
  });
}, "jQuery");
$(document).ready(function() {
  function a() {
      $(".button").toggleClass("active");
      $("main").toggleClass("move-to-left");
      $(".sidebar-item").toggleClass("active");
      $(".sidebar").toggleClass("animate");
  }
  $(".button").on("click tap", function() {
      a();
  });
  $("section, .sidebar-anchor").on("click tap", function() {
      if ($(".button").hasClass("active")) {
          a();
      }
  });
  $(document).keyup(function(b) {
      if (b.keyCode === 27) {
          a();
      }
  });
});
$(document).ready(function() {
  $(".world-of-day-image").magnificPopup({
      type: "image",
      mainClass: "mfp-with-zoom",
      zoom: {
          enabled: true,
          duration: 300,
          easing: "ease-in-out",
          opener: function(a) {
              return a.is("img") ? a : a.find("img");
          },
      },
  });
  $(".growtopia-feature-image").magnificPopup({
      type: "image",
      mainClass: "mfp-with-zoom",
      gallery: {
          enabled: true,
          tCounter: ""
      },
      zoom: {
          enabled: true,
          duration: 300,
          easing: "ease-in-out",
          opener: function(a) {
              return a.is("img") ? a : a.find("img");
          },
      },
  });
  $(".grid.worlds-we-love-carousel a").magnificPopup({
      type: "image",
      mainClass: "mfp-with-zoom",
      gallery: {
          enabled: true,
          tCounter: ""
      },
      zoom: {
          enabled: true,
          duration: 300,
          easing: "ease-in-out",
          opener: function(a) {
              return a.is("img") ? a : a.find("img");
          },
      },
  });
  $("#watch-video").on("click", function() {
          return (
              document.cookie.indexOf("gt_consent_status=1") < 0 &&
              $("#consentPopup").trigger("click"),
              !1
          );
      }),
      $("#watch-video").magnificPopup({
          type: "iframe",
          callbacks: {
              elementParse: function(e) {
                  document.cookie.indexOf("gt_consent_status=1") < 0 &&
                      evt.preventDefault();
              },
          },
      });
  $("#download-page").magnificPopup({
      type: "iframe",
      iframe: {
          markup: '<div class="mfp-content"><div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe download" frameborder="0" allowfullscreen></iframe></div></div>',
      },
  });
  $("#grow-feature-button").click(function() {
      $(this).fadeOut("fast", function() {
          $("#feature-platform-list").fadeIn();
      });
      return false;
  });
//   function updateServerStatus() {
//     $.ajax({
//         type: "GET",
//         url: "https://www.growtopia.id/api/proxy",
//         dataType: "json",
//         success: function(response) {
//             if (response.status === false) {
//                 $(".server-status").html(
//                     '<div class="server-down">Server is down for maintenance!</div>'
//                 );
//             } else {
//                 $(".server-status").html(
//                     'Server is up | <span class="counter">' +
//                     response.online +
//                     "</span> Players online!"
//                 );
//             }
//         },
//         error: function(xhr, status, error) {
//             console.log("AJAX Error:", error);
//             console.log("Full Response:", xhr.responseText);
//             $(".server-status").html(
//                 '<div class="error-message">Unable to retrieve server status.</div>'
//             );
//         }
//     });
// }
// updateServerStatus();
// setInterval(updateServerStatus, 5000);

}); 
