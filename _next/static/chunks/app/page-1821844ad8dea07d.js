!(function () {
  try {
    var e =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      s = new e.Error().stack;
    s &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[s] = "8a559893-4b6f-4543-aae6-32b5a6b96cc0"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-8a559893-4b6f-4543-aae6-32b5a6b96cc0"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931],
    {
      46442: function (e, s, t) {
        Promise.resolve().then(t.t.bind(t, 38173, 23)),
          Promise.resolve().then(t.t.bind(t, 231, 23)),
          Promise.resolve().then(t.bind(t, 28408)),
          Promise.resolve().then(t.bind(t, 58638)),
          Promise.resolve().then(t.bind(t, 29624)),
          Promise.resolve().then(t.bind(t, 18121)),
          Promise.resolve().then(t.bind(t, 51610)),
          Promise.resolve().then(t.bind(t, 29886)),
          Promise.resolve().then(t.bind(t, 1167));
      },
      28408: function (e, s, t) {
        "use strict";
        t.d(s, {
          default: function () {
            return h;
          },
        });
        var a = t(57437),
          n = t(71077),
          i = t(3293),
          l = t(48801),
          r = t(83827),
          c = t(54252),
          o = t(55543),
          d = t(44839),
          m = t(70640),
          p = t(15373),
          x = t(54994);
        function h() {
          let e = (0, x.d)();
          return (0, a.jsxs)("div", {
            className:
              "relative w-full cursor-default overflow-hidden rounded-md border-2 border-zinc-800 bg-gradient-to-b from-zinc-950/20 to-black/40 text-[1.5vw] shadow-2xl backdrop-blur-xl md:rounded-2xl md:text-xs",
            children: [
              (0, a.jsxs)("div", {
                className:
                  "flex w-full items-center justify-between border-b border-zinc-800 p-[1.5vw] md:p-3",
                children: [
                  (0, a.jsx)(m.T, {
                    wordmark: !1,
                    color: "fill-yellow-300",
                    height: e ? 12 : 24,
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "flex items-center space-x-[1.5vw] text-white md:space-x-3",
                    children: [
                      (0, a.jsx)(n.I, { size: e ? 12 : 20 }),
                      (0, a.jsx)(i.C, { size: e ? 12 : 20 }),
                      (0, a.jsx)("div", {
                        className:
                          "whitespace-nowrap rounded-md bg-zinc-700 px-[1.5vw] py-1 font-medium leading-none md:px-3",
                        children: "ANON_123",
                      }),
                      (0, a.jsx)(l.a, { size: e ? 12 : 20 }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className:
                  "flex w-full items-center space-x-4 border-b border-zinc-800 p-[1.5vw] md:p-3",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "flex w-full items-center space-x-[1vw] md:space-x-2",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "flex items-center space-x-[0.5vw] whitespace-nowrap rounded-md border border-zinc-700 p-[1vw] font-medium leading-none md:space-x-1 md:p-2",
                        children: [
                          (0, a.jsx)("div", {
                            className: "leading-none max-md:text-[1.5vw]",
                            children: "October 26, 2024",
                          }),
                          (0, a.jsx)(r.p, { size: e ? 8 : 12 }),
                        ],
                      }),
                      (0, a.jsx)("div", { children: "1:49pm" }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "flex w-full items-center space-x-[1vw] md:space-x-2",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "w-full max-w-screen-md rounded-md bg-zinc-950 p-[1vw] md:p-2",
                        children: (0, a.jsx)(c.Y, { size: e ? 8 : 12 }),
                      }),
                      (0, a.jsx)(o.L, {}),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className:
                  "w-full border-b border-zinc-800 px-[1vw] py-[0.75vw] md:px-3 md:py-1",
                children: (0, a.jsxs)("div", {
                  className: "grid grid-cols-12 gap-0.5",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "col-span-3 col-start-4 text-[1vw] font-medium md:text-[10px]",
                      children: "1:00pm",
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "col-span-3 text-[1vw] font-medium md:text-[10px]",
                      children: "2:00pm",
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "col-span-3 text-[1vw] font-medium md:text-[10px]",
                      children: "3:00pm",
                    }),
                  ],
                }),
              }),
              (0, a.jsxs)("div", {
                className: "relative w-full p-3",
                children: [
                  (0, a.jsx)("div", {
                    className: "grid grid-cols-12 gap-x-0.5 gap-y-2",
                    children: p.D.map((e, s) =>
                      (0, a.jsx)(g, { agent: e, index: s }, s)
                    ),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "absolute -top-2 bottom-0 left-[43%] flex flex-col items-center space-y-1",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "rounded-[4px] border border-zinc-700 bg-zinc-700/40 px-2 py-0.5 text-[1vw] leading-none shadow-sm backdrop-blur-md md:text-[10px]",
                        children: "now",
                      }),
                      (0, a.jsx)("div", {
                        className: "h-full w-0.5 bg-zinc-900/20",
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("div", { className: "noise absolute opacity-40" }),
            ],
          });
        }
        let g = (e) => {
          let { agent: s, index: t } = e,
            { slug: n, name: i, tag: l } = s,
            r = n.match("gecko|oddball");
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("div", {
                className: "col-span-3 font-medium",
                children: (0, a.jsxs)("div", {
                  className: "relative pr-2",
                  children: [
                    r
                      ? (0, a.jsx)("video", {
                          src: "/assets/images/agents/".concat(n, ".mp4"),
                          playsInline: !0,
                          autoPlay: !0,
                          loop: !0,
                          muted: !0,
                          className: "aspect-video w-full rounded-[0.25vw]",
                        })
                      : (0, a.jsx)("div", {
                          className:
                            "flex aspect-video w-full items-center justify-center rounded-[0.25vw] bg-gradient-to-br from-zinc-800 to-black",
                          children: (0, a.jsx)("h4", {
                            className: "text-[1vw] text-zinc-600",
                            children: "coming soon...",
                          }),
                        }),
                    r &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              "absolute left-1 top-1 flex items-center space-x-1 rounded-full bg-red-500 px-[0.5vw] py-[0.25vw]",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "h-[0.5vw] w-[0.5vw] animate-blink rounded-full bg-white",
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "text-[1vw] uppercase leading-none md:text-[10px]",
                                children: "LIVE",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "absolute bottom-1 left-1 flex items-center space-x-1 max-md:hidden",
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "rounded-sm bg-zinc-500/40 px-[0.5vw] py-[0.25vw] backdrop-blur-md",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "text-[0.8vw] font-light leading-none text-zinc-300 md:text-[8px]",
                                    children: "agent",
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "text-[1.5vw] leading-none md:text-xs",
                                    children: i,
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "rounded-sm bg-zinc-500/40 px-[0.5vw] py-[0.25vw] backdrop-blur-md",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "text-[0.8vw] font-light leading-none text-zinc-300 md:text-[8px]",
                                    children: "key",
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "text-[1.5vw] leading-none md:text-xs",
                                    children: p.o[n].keyPrice,
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "rounded-sm bg-zinc-500/40 px-[0.5vw] py-[0.25vw] backdrop-blur-md",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "text-[0.8vw] font-light leading-none text-zinc-300 md:text-[8px]",
                                    children: "assets",
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "text-[1.5vw] leading-none md:text-xs",
                                    children: p.o[n].assets,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              }),
              r
                ? (0, a.jsx)(a.Fragment, {
                    children: {
                      gecko: [
                        {
                          title: "Just Chatting",
                          description:
                            "AMA for Gain, learn about finance, share new picks",
                        },
                        {
                          title: "Trader Showdown",
                          description: "Rapid fire, make picks place tradez",
                        },
                        { title: "Research Stonks", description: "get stonks" },
                      ],
                      oddball: [
                        {
                          title: "Match Recap",
                          description: "Talk yesterday's key matches",
                        },
                        {
                          title: "Today's Lineup",
                          description: "Talk roster changes and injuries",
                        },
                        {
                          title: "Put It On The Line",
                          description:
                            "Make predictions about tomorrow's matches",
                        },
                      ],
                      "coming-soon": [
                        {
                          title: "Just Chatting",
                          description:
                            "AMA for Gain, learn about finance, share new picks",
                        },
                        {
                          title: "Trader Showdown",
                          description: "Rapid fire, make picks place tradez",
                        },
                        { title: "Research Stonks", description: "get stonks" },
                      ],
                    }[n].map((e, s) =>
                      (0, a.jsxs)(
                        "div",
                        {
                          className: (0, d.Z)(
                            "h-full space-y-1 p-[1vw]",
                            1 === t && 2 === s
                              ? "col-span-2"
                              : 1 === t && 0 === s
                              ? "col-span-4"
                              : "col-span-3",
                            0 === s
                              ? "bg-zinc-700 hover:bg-zinc-600"
                              : "bg-zinc-700/20"
                          ),
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "text-[1.5vw] font-medium leading-[1.1] text-white md:text-sm",
                              children: e.title,
                            }),
                            (0, a.jsx)("div", {
                              className: "text-[1.25vw] md:text-xs",
                              children: e.description,
                            }),
                          ],
                        },
                        s
                      )
                    ),
                  })
                : (0, a.jsx)("div", {
                    className: "col-span-9 h-full bg-zinc-800/20 p-[1vw]",
                    children: (0, a.jsx)("div", {
                      className:
                        "text-[1.5vw] font-medium leading-[1.1] text-zinc-600 md:text-sm",
                      children: "Offline",
                    }),
                  }),
            ],
          });
        };
      },
      18121: function (e, s, t) {
        "use strict";
        t.d(s, {
          TypeWriter: function () {
            return l;
          },
        });
        var a = t(57437),
          n = t(2265),
          i = t(44839);
        let l = (e) => {
          let { text: s, loop: t, className: l } = e,
            [r, c] = (0, n.useState)(0);
          return (
            (0, n.useEffect)(() => {
              c(0);
            }, [s]),
            (0, n.useEffect)(() => {
              let e = (s.split("") || []).length,
                a = r < e - 1 ? 250 : 5600;
              if (e > 0) {
                let s = setInterval(() => {
                  c((a) => (a < e - 1 ? a + 1 : t ? 0 : (clearInterval(s), e)));
                }, a);
                return () => clearInterval(s);
              }
            }, [s, r]),
            (0, a.jsxs)("div", {
              className: (0, i.Z)("relative w-fit leading-none", l),
              children: [
                s
                  .split("")
                  .slice(0, r + 1)
                  .map((e, s) =>
                    (0, a.jsx)(
                      "span",
                      { className: "animate-fadeIn opacity-0", children: e },
                      s
                    )
                  ),
                (0, a.jsx)("div", {
                  className:
                    "absolute -right-1.5 top-1/2 h-[90%] w-0.5 -translate-y-[48%] animate-blink bg-yellow-300/50",
                }),
              ],
            })
          );
        };
      },
      15373: function (e, s, t) {
        "use strict";
        t.d(s, {
          D: function () {
            return n;
          },
          o: function () {
            return i;
          },
        });
        var a = t(57437);
        let n = [
            {
              slug: "gecko",
              name: "gecko",
              tagline: "The Always-On Trader",
              pitch:
                "Buy a key, earn rewards and take a shot at beating the market together.",
              tag: "Crypto Trading",
              description: [
                (0, a.jsx)("p", {
                  children:
                    "Always ahead of the curve, making buys and sells in real-time with a bit of attitude.",
                }),
                (0, a.jsx)("p", {
                  children: "Will his AI-driven strategies outpace the market?",
                }),
              ],
              logs: [
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("span", {
                      className: "font-light italic text-blue-200",
                      children: "swapped",
                    }),
                    " ",
                    (0, a.jsx)("span", {
                      className: "font-bold text-yellow-300",
                      children: "32 WIF",
                    }),
                    " for",
                    " ",
                    (0, a.jsx)("span", {
                      className: "font-medium text-white",
                      children: "0.34 ETH",
                    }),
                  ],
                }),
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("span", {
                      className: "font-light italic text-orange-200",
                      children: "analyzed",
                    }),
                    " ",
                    (0, a.jsx)("span", {
                      className: "font-bold text-yellow-300",
                      children: "AGENT",
                    }),
                    " token",
                  ],
                }),
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("span", {
                      className: "font-light italic text-green-200",
                      children: "placed buy",
                    }),
                    " for",
                    " ",
                    (0, a.jsx)("span", {
                      className: "font-bold text-yellow-300",
                      children: "AGENT",
                    }),
                    " at",
                    " ",
                    (0, a.jsx)("span", {
                      className: "font-medium text-white",
                      children: "$0.09",
                    }),
                  ],
                }),
              ],
            },
            {
              slug: "oddball",
              name: "oddball",
              tagline: "The Sports Data Freak",
              tag: "Sports Predictions",
              pitch:
                "Buy a key, earn rewards and take a shot at beating the house together.",
              description: [
                (0, a.jsx)("p", {
                  children:
                    "A stats-obsessed sports lover and master of hot takes, Oddball is a degen sports prediction streamer with a passion for football, horse racing, e-sports—you name it.",
                }),
                (0, a.jsx)("p", {
                  children: "Can his AI-driven insights outsmart the house?",
                }),
              ],
              logs: [
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("span", {
                      className: "font-light italic text-green-200",
                      children: "staked",
                    }),
                    " ",
                    (0, a.jsx)("span", {
                      className: "font-medium text-white",
                      children: "$25",
                    }),
                    " on prediction",
                    " ",
                    (0, a.jsx)("span", {
                      className: "font-bold text-yellow-300",
                      children: "Dortmund beats Real Madrid",
                    }),
                  ],
                }),
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("span", {
                      className: "font-light italic text-green-200",
                      children: "staked",
                    }),
                    " ",
                    (0, a.jsx)("span", {
                      className: "font-medium text-white",
                      children: "$100",
                    }),
                    " on prediction",
                    " ",
                    (0, a.jsx)("span", {
                      className: "font-bold text-yellow-300",
                      children: "Swift wins 1st at Dubai Horse Track",
                    }),
                  ],
                }),
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("span", {
                      className: "font-light italic text-green-200",
                      children: "staked",
                    }),
                    " ",
                    (0, a.jsx)("span", {
                      className: "font-medium text-white",
                      children: "$40",
                    }),
                    " on prediction",
                    " ",
                    (0, a.jsx)("span", {
                      className: "font-bold text-yellow-300",
                      children: "T1 beats 100 Thieves at LoL Worlds",
                    }),
                  ],
                }),
              ],
            },
            {
              slug: "coming-soon",
              name: "coming soon",
              tagline: "",
              tag: "?",
              pitch: "",
              description: [],
              logs: [],
            },
          ],
          i = {
            gecko: { keyPrice: "$32.34", assets: "$56.2K" },
            oddball: { keyPrice: "$13.34", assets: "$14.3K" },
            "coming-soon": { keyPrice: "$2.34", assets: "$14.3K" },
          };
      },
      51610: function (e, s, t) {
        "use strict";
        t.d(s, {
          default: function () {
            return d;
          },
        });
        var a = t(57437),
          n = t(44839),
          i = t(66648),
          l = t(27070),
          r = t(15373),
          c = t(2265),
          o = t(54994);
        function d() {
          let e = (0, o.d)();
          return (0, a.jsx)(a.Fragment, {
            children: r.D.map((s, t) => {
              let { slug: r, name: o, tagline: d, description: m, logs: p } = s,
                [x, h] = (function (e) {
                  let { triggerOnce: s = !1, ...t } = e || {},
                    [a, n] = (0, c.useState)(!1),
                    [i, l] = (0, c.useState)(!1),
                    r = (0, c.useRef)(null);
                  return (
                    (0, c.useEffect)(() => {
                      let e = new IntersectionObserver((e) => {
                        let [t] = e;
                        t.isIntersecting ? (n(!0), s && l(!0)) : s || n(!1);
                      }, t);
                      return (
                        r.current && e.observe(r.current),
                        () => {
                          r.current && e.unobserve(r.current);
                        }
                      );
                    }, [t, s]),
                    [r, (s && i) || a]
                  );
                })({ threshold: 0.5, triggerOnce: !0 });
              return (0, a.jsx)(
                "section",
                {
                  className: "group relative px-6",
                  ref: x,
                  children: (0, a.jsx)("div", {
                    className:
                      "mx-auto w-full max-w-screen-xl border-b border-zinc-800 py-32",
                    children: (0, a.jsxs)("div", {
                      className: "grid grid-cols-2 items-center gap-16",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "col-span-2 space-y-8 group-odd:order-2 md:col-span-1",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "space-y-2",
                              children: [
                                (0, a.jsx)("h2", {
                                  className:
                                    "h1 lowercase leading-none text-yellow-300",
                                  children: o,
                                }),
                                (0, a.jsx)("div", {
                                  className: "text-xl lowercase text-zinc-100",
                                  children: d,
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className: "space-y-2",
                              children: m.map((e, s) =>
                                (0, a.jsx)(
                                  "div",
                                  { className: "text-zinc-500", children: e },
                                  s
                                )
                              ),
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: (0, n.Z)(
                            "relative col-span-2 md:col-span-1",
                            !e && "group-odd:order-1"
                          ),
                          children: (0, a.jsxs)(l.u, {
                            as: "div",
                            show: h,
                            enter: "transition duration-500",
                            enterFrom: "opacity-0 translate-y-8",
                            enterTo: "opacity-100 translate-y-0",
                            leave: "transition duration-500",
                            leaveFrom: "opacity-100 translate-y-0",
                            leaveTo: "opacity-0 translate-y-8",
                            className: "group-even:pl-8 group-odd:pr-8",
                            children: [
                              (0, a.jsx)(i.default, {
                                srcset: "/assets/images/agents/".concat(
                                  r,
                                  ".webp"
                                ),
                                width: 512,
                                height: 290,
                                alt: "".concat(o, " - ").concat(d),
                                priority: !0,
                                className:
                                  "w-full rounded-xl border-2 border-zinc-800 shadow-blueGlow",
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "absolute bottom-0 space-y-1 group-even:-left-2 group-odd:-right-2 max-md:translate-y-1/2 md:bottom-6",
                                children: p.map((e, s) =>
                                  (0, a.jsxs)(
                                    "div",
                                    {
                                      className:
                                        "relative w-fit max-w-[70vw] translate-y-full animate-popIn overflow-hidden rounded-md border border-zinc-700 bg-zinc-950/70 px-4 py-2 font-mono text-xs opacity-0 shadow-md backdrop-blur-md",
                                      style: {
                                        animationDelay: "".concat(
                                          1500 * s + 500,
                                          "ms"
                                        ),
                                      },
                                      children: [
                                        e,
                                        (0, a.jsx)("div", {
                                          className:
                                            "noise absolute opacity-60",
                                        }),
                                      ],
                                    },
                                    s
                                  )
                                ),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                },
                t
              );
            }),
          });
        }
      },
      29886: function (e, s, t) {
        "use strict";
        t.d(s, {
          default: function () {
            return x;
          },
        });
        var a = t(57437),
          n = t(35191),
          i = t(66648),
          l = t(87138),
          r = t(27070),
          c = t(18121),
          o = t(15373),
          d = t(2265);
        let m = [
          {
            image: "/assets/images/partners/atka.png",
            slug: "atka",
            link: "https://atka.io/",
          },
          {
            image: "/assets/images/partners/coinfund.png",
            slug: "coinfund",
            link: "https://coinfund.io/",
          },
          {
            image: "/assets/images/partners/gnosis.png",
            slug: "gnosis",
            link: "https://gnosis.io/",
          },
          {
            image: "/assets/images/partners/placeholder.png",
            slug: "placeholder",
            link: "https://placeholder.vc/",
          },
          {
            image: "/assets/images/partners/portal.png",
            slug: "portal",
            link: "https://portal.vc/",
          },
          {
            image: "/assets/images/partners/rarestone.png",
            slug: "rarestone",
            link: "https://rarestone.capital/",
          },
          {
            image: "/assets/images/partners/trgc.png",
            slug: "trgc",
            link: "https://trgc.io/",
          },
          {
            image: "/assets/images/partners/zeeprimecapital.png",
            slug: "zeeprimecapital",
            link: "https://zeeprime.capital/",
          },
          {
            image: "/assets/images/partners/iosg.png",
            slug: "iosg",
            link: "https://iosg.vc/",
          },
          {
            image: "/assets/images/partners/biconomy.png",
            slug: "biconomy",
            link: "https://www.biconomy.io/",
          },
          {
            image: "/assets/images/partners/olas.png",
            slug: "olas",
            link: "https://olas.network/",
          },
          {
            image: "/assets/images/partners/optimism.png",
            slug: "optimism",
            link: "https://www.optimism.io/",
          },
          {
            image: "/assets/images/partners/flock.png",
            slug: "flock",
            link: "https://www.flock.io/",
          },
          {
            image: "/assets/images/partners/morpheus.png",
            slug: "morpheus",
            link: "https://mor.org/",
          },
          {
            image: "/assets/images/partners/autogpt.png",
            slug: "autogpt",
            link: "https://agpt.co/",
          },
          {
            image: "/assets/images/partners/autogen.png",
            slug: "autogen",
            link: "https://microsoft.github.io/autogen/",
          },
          {
            image: "/assets/images/partners/indexingco.png",
            slug: "indexingco",
            link: "https://www.indexing.co/",
          },
          {
            image: "/assets/images/partners/superagi.png",
            slug: "superagi",
            link: "https://superagi.com/",
          },
          {
            image: "/assets/images/partners/nevermined.png",
            slug: "nevermined",
            link: "https://nevermined.app/",
          },
        ];
        function p() {
          let e = [
            m.slice(0, Math.floor(m.length / 2)),
            m.slice(Math.ceil(m.length / 2), m.length),
          ];
          return (0, a.jsxs)("section", {
            className: "gap-y-4 py-8 hideb",
            children: [
              (0, a.jsx)("div", {
                className: "mb-4 w-full px-4 md:px-6",
                children: (0, a.jsx)("div", {
                  className: "mx-auto w-full max-w-screen-xl",
                  children: (0, a.jsx)("div", {
                    className: "label text-sm text-slate-400 md:text-base",
                    children: "Collaborating with leading orgs",
                  }),
                }),
              }),
              (0, a.jsxs)("div", {
                className:
                  "max-w-screen relative flex w-screen flex-col gap-y-3 overflow-x-clip",
                children: [
                  [...Array(e.length)].map((s, t) =>
                    (0, a.jsx)(
                      "div",
                      {
                        className: "flex gap-3",
                        children: [void 0, void 0, void 0, void 0, void 0].map(
                          (s, n) =>
                            (0, a.jsx)(
                              "div",
                              {
                                children: (0, a.jsx)("div", {
                                  className:
                                    "animate-scroll relative flex w-full items-center justify-around gap-3",
                                  style: {
                                    animationDelay: "".concat(500 * t, "ms"),
                                    animationDuration: "".concat(
                                      27 + 6 * t,
                                      "s"
                                    ),
                                  },
                                  children: e[t].map((e, s) => {
                                    let { image: t, link: n, slug: r } = e;
                                    return (0, a.jsx)(
                                      l.default,
                                      {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": r,
                                        href: n,
                                        className:
                                          "group flex h-16 w-40 min-w-40 items-center justify-center rounded-xl border border-white/[0.05] bg-white/[0.03] p-4 backdrop-blur-xl duration-500 hover:bg-white/[0.08] md:h-20 md:w-48 md:min-w-48",
                                        children: (0, a.jsx)(i.default, {
                                          src: t,
                                          alt: r,
                                          width: 200,
                                          height: 80,
                                          className:
                                            "opacity-80 duration-300 group-hover:opacity-100",
                                        }),
                                      },
                                      s
                                    );
                                  }),
                                }),
                              },
                              n
                            )
                        ),
                      },
                      t
                    )
                  ),
                  (0, a.jsx)("div", {
                    className:
                      "pointer-events-none absolute left-0 h-full w-8 bg-gradient-to-r from-slate-950 to-slate-950/0 md:w-24",
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "pointer-events-none absolute right-0 h-full w-8 bg-gradient-to-l from-slate-950 to-slate-950/0 md:w-24",
                  }),
                ],
              }),
            ],
          });
        }
        function x() {
          let e = (0, d.useRef)(0),
            [s, t] = (0, d.useState)(o.D[0]),
            [m, x] = (0, d.useState)(!1);
          (0, d.useEffect)(() => {
            x(!0);
            let s = setInterval(() => {
              setTimeout(() => x(!1), 6500),
                e.current < o.D.length - 2
                  ? (e.current = e.current + 1)
                  : (e.current = 0),
                x(!0),
                t(o.D[e.current]);
            }, 7e3);
            return () => clearInterval(s);
          }, []);
          let { slug: h, name: g, tagline: u, tag: v, pitch: f } = s,
            { keyPrice: w } = o.o[h];
          return (0, a.jsxs)("section", {
            className:
              "relative flex min-h-screen flex-col items-center justify-center overflow-x-clip px-4 md:px-6",
            children: [
              (0, a.jsx)("div", {
                className:
                  "absolute left-[-10%] top-[-20%] z-[-1] h-[90vmin] w-[90vmin] rounded-full bg-blue-500/10 blur-[120px]",
              }),
              (0, a.jsx)("div", {
                className:
                  "mx-auto flex w-full max-w-screen-xl flex-grow flex-col pt-24",
                children: (0, a.jsxs)("div", {
                  className:
                    "grid grid-cols-2 gap-x-8 gap-y-6 md:flex-grow md:items-center",
                  children: [
                    (0, a.jsx)("div", {
                      className: "col-span-2 md:order-2 md:col-span-1 imagesli",
                      children: (0, a.jsxs)(r.u, {
                        show: m,
                        as: "div",
                        enter: "transition-opacity duration-1000",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "transition-opacity duration-1000",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        className:
                          "relative max-md:aspect-[385/217] max-md:w-full",
                        children: [
                          (0, a.jsx)(i.default, {
                            srcset: "/assets/images/agents/".concat(h, ".webp"),
                            width: 512,
                            height: 290,
                            alt: "".concat(g, " - ").concat(u),
                            priority: !0,
                            className:
                              "w-full rounded-xl border-2 border-zinc-800 shadow-lg",
                          }),
                          (0, a.jsxs)(r.x, {
                            as: "div",
                            enter: "duration-500 delay-50",
                            enterFrom: "opacity-0 translate-y-8",
                            enterTo: "opacity-100 translate-y-0",
                            leave: "transition duration-500 delay-0",
                            leaveFrom: "opacity-100 translate-y-0",
                            leaveTo: "opacity-0 translate-y-8",
                            className:
                              "absolute bottom-2 left-2 w-fit max-w-[70vw] space-y-1 rounded-md border border-slate-700 bg-slate-900/80 px-4 py-2 shadow-lg backdrop-blur-md md:bottom-4 md:left-4",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "text-xl font-medium lowercase leading-none text-yellow-300",
                                children: g,
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "font-monospace text-sm lowercase leading-none text-zinc-400",
                                children: u,
                              }),
                            ],
                          }),
                          (0, a.jsxs)(r.x, {
                            as: "div",
                            enter: "duration-500 delay-500",
                            enterFrom: "opacity-0 translate-y-8",
                            enterTo: "opacity-100 translate-y-0",
                            leave: "transition duration-500 delay-0",
                            leaveFrom: "opacity-100 translate-y-0",
                            leaveTo: "opacity-0 translate-y-8",
                            className:
                              "absolute bottom-2 right-2 w-fit max-w-[70vw] space-y-1 rounded-md border border-slate-700 bg-slate-900/80 px-4 py-2 shadow-lg backdrop-blur-md md:bottom-4 md:right-4",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "font-monospace text-sm lowercase leading-none text-zinc-400",
                                children: "key",
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "text-xl font-medium lowercase leading-none text-white",
                                children: w,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "col-span-2 space-y-4 md:order-1 md:col-span-1 md:space-y-8 xl:pr-24",
                      children: [
                        (0, a.jsxs)("h1", {
                          className:
                            "flex flex-wrap text-3xl uppercase text-white md:text-5xl",
                          children: [
                            (0, a.jsxs)("span", { children: [g, " Is A "] }),
                            (0, a.jsx)("span", {
                              className: "block w-full",
                              children: (0, a.jsx)(c.TypeWriter, {
                                className:
                                  "whitespace-nowrap text-3xl text-yellow-300 md:text-5xl",
                                text: v,
                              }),
                            }),
                            (0, a.jsx)("span", {
                              className:
                                "mt-1 block w-full text-2xl leading-none text-yellow-300",
                              children: "Streaming Agent",
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: "text-sm font-light md:w-10/12 md:text-xl",
                          children: f,
                        }),
                        (0, a.jsx)("div", {
                          className: "space-y-2",
                          children: (0, a.jsx)(l.default, {
                            href: "/#",
                            className: "flex w-fit",
                            children: (0, a.jsxs)("button", {
                              className: "btn btn--primary",
                              children: [
                                (0, a.jsx)("div", {
                                  children: "ENTER APP",
                                }),
                                (0, a.jsx)(n.o, { size: 20 }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(p, {}),
            ],
          });
        }
      },
      1167: function (e, s, t) {
        "use strict";
        t.d(s, {
          default: function () {
            return c;
          },
        });
        var a = t(57437),
          n = t(33910),
          i = t(83363),
          l = t(71920);
        let r = [
          {
            icon: (0, a.jsx)(n.s, { color: "white", size: 32 }),
            title: "Get Your Keys",
            description:
              "Purchase Agent Keys to unlock prompt submissions, get chat priority, and access off-stream content.",
          },
          {
            icon: (0, a.jsx)(i.d, { color: "white", size: 32 }),
            title: "Submit Prompts",
            description:
              "Key holders can submit prompts to the agent during streams to guide their decisions.",
          },
          {
            icon: (0, a.jsx)(l.W, { color: "white", size: 32 }),
            title: "Collect Rewards",
            description:
              "Earn tokens by sending impactful prompts that the agent acts on during live sessions.",
          },
        ];
        function c() {
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)("section", {
              className:
                "relative z-0 flex aspect-[1.69] min-h-screen w-full flex-col items-center justify-center overflow-x-clip bg-[radial-gradient(circle_at_center_0%,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_80%)]",
              children: [
                (0, a.jsx)("div", {
                  className:
                    "absolute inset-0 bg-[url(/assets/images/vault-bg.webp)] bg-cover bg-center bg-no-repeat opacity-30",
                }),
                (0, a.jsx)("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-b from-black/50 via-black/0 to-black/0",
                }),
                (0, a.jsx)("div", {
                  className:
                    "absolute right-[50%] top-[-15%] h-[80vmin] w-[80vmin] translate-x-1/2 rounded-full bg-blue-600/10 opacity-90 blur-[120px]",
                }),
                (0, a.jsx)("div", {
                  className: "px-4 md:px-6  ",
                  children: (0, a.jsx)("div", {
                    className: "relative mx-auto w-full max-w-screen-lg py-12",
                    children: (0, a.jsxs)("div", {
                      className:
                        "grid grid-cols-3 items-stretch gap-x-16 gap-y-8 md:gap-y-8",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "col-span-3 flex flex-col items-center space-y-1 text-sm font-medium uppercase [text-shadow:0px_8px_8px_rgba(0,0,0,0.5)]",
                          children: [
                            (0, a.jsx)("div", {
                              children: "Exclusive Streams, Perks, and Activities",
                            }),
                            (0, a.jsx)("h2", {
                              className: "uppercase text-yellow-300",
                              children: "Interested?",
                            }),
                          ],
                        }),
                        r.map((e, s) => {
                          let { icon: t, title: n, description: i } = e;
                          return (0, a.jsxs)(
                            "div",
                            {
                              className:
                                "group relative col-span-3 h-full md:col-span-1",
                              children: [
                                (0, a.jsx)("article", {
                                  className:
                                    "col-span-1 h-full w-full rounded-2xl border border-zinc-200 border-zinc-800 bg-zinc-950/20 p-4 leading-none shadow-[0_16px_16px_rgba(0,0,0,0.75)] backdrop-blur-md md:p-8",
                                  children: (0, a.jsx)(
                                    "div",
                                    {
                                      className: "space-y-8",
                                      children: (0, a.jsxs)("div", {
                                        className:
                                          "flex flex-col items-center gap-4",
                                        children: [
                                          (0, a.jsx)("div", {
                                            className:
                                              "flex h-16 w-16 min-w-16 items-center justify-center rounded-full border-4 border-yellow-300/50",
                                            children: t,
                                          }),
                                          (0, a.jsxs)("div", {
                                            className: "space-y-2",
                                            children: [
                                              (0, a.jsx)("h3", {
                                                className:
                                                  "h4 text-center uppercase text-yellow-300",
                                                children: n,
                                              }),
                                              (0, a.jsx)("p", {
                                                className:
                                                  "text-center text-[10px] font-light md:text-sm",
                                                children: i,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    },
                                    s
                                  ),
                                }),
                                (0, a.jsx)("div", {
                                  className: "noise absolute opacity-30",
                                }),
                              ],
                            },
                            s
                          );
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          });
        }
      },
    },
    function (e) {
      e.O(
        0,
        [
          269, 764, 501, 689, 771, 732, 670, 658, 676, 648, 850, 265, 624, 991,
          971, 733, 744,
        ],
        function () {
          return e((e.s = 46442));
        }
      ),
        (_N_E = e.O());
    },
  ]);
