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
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "afdfa5ed-084b-4315-9dd5-0fac9a7f20fb"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-afdfa5ed-084b-4315-9dd5-0fac9a7f20fb"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [265],
    {
      35883: function () {},
      36563: function () {},
      46601: function () {},
      89214: function () {},
      29120: function () {},
      46586: function () {},
      58638: function (e, t, n) {
        "use strict";
        n.d(t, {
          default: function () {
            return v;
          },
        });
        var r = n(57437),
          s = n(87138),
          o = n(70640),
          a = n(54994),
          i = n(80088),
          l = n(67267),
          c = n(76437),
          d = n(16463),
          u = n(49354),
          C = n(2265),
          x = n(44839),
          h = n(218);
        let m = () => {
          var e, t;
          let n = (0, d.useRouter)(),
            [s, o] = (0, C.useState)(!1),
            { user: a } = (0, c.sv)(),
            { linkWallet: m } = (0, c.j6)({
              onSuccess() {
                n.refresh();
              },
            });
          return (
            null == a
              ? void 0
              : null === (e = a.wallet) || void 0 === e
              ? void 0
              : e.address
          )
            ? (0, r.jsx)(r.Fragment, {
                children: (0, r.jsx)("div", {
                  className: "relative",
                  children: (0, r.jsx)(h.I, {
                    show: s,
                    anchor: "bottom-right",
                    children: (0, r.jsxs)("button", {
                      className: "btn btn--primary px-4",
                      onClick: () => o(!s),
                      children: [
                        (0, r.jsx)("div", {
                          children: (0, u.Tg)(
                            null == a
                              ? void 0
                              : null === (t = a.wallet) || void 0 === t
                              ? void 0
                              : t.address
                          ),
                        }),
                        (0, r.jsx)(i.T, {
                          size: 20,
                          className: (0, x.Z)("duration-300 ease-in-out"),
                        }),
                      ],
                    }),
                  }),
                }),
              })
            : (0, r.jsxs)("button", {
                className: "btn btn--primary px-4",
                onClick: m,
                children: [
                  (0, r.jsx)("div", { children: "Connect Wallet" }),
                  (0, r.jsx)(l.w, { size: 20 }),
                ],
              });
        };
        var f = n(51630),
          p = n(55596);
        function v(e) {
          let { questScore: t } = e,
            n = (0, a.d)(),
            i = (0, d.usePathname)(),
            { authenticated: l } = (0, c.sv)();
          return (0, r.jsx)("header", {
            className: "absolute left-0 top-0 z-10 w-full p-4 md:p-6",
            children: (0, r.jsx)("div", {
              className: "mx-auto w-full max-w-screen-xl",
              children: (0, r.jsxs)("div", {
                className: "flex w-full items-center justify-between",
                children: [
                  (0, r.jsx)(s.default, {
                    href: "/",
                    className: "text-white hover:text-yellow-300 logos",
                    children: (0, r.jsx)(o.T, { wordmark: !n || !l })  ,
                  }),
                  (0, r.jsxs)("div", {
                    className: "flex items-center space-x-6 md:space-x-10",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "flex items-center space-x-6 max-md:hidden",
                        children: [
                          (0, r.jsx)(s.default, {
                            href: "https://t.me/AgentsofTomorrow",
                            className:
                              "text-xs uppercase text-zinc-400 hover:text-zinc-200 md:text-sm",
                            children: "Telegram",
                          }),
                          (0, r.jsx)(s.default, {
                            href: "https://x.com/agentsoftmrw",
                            target: "_blank",
                            rel: "noredirect",
                            className:
                              "text-xs uppercase text-zinc-400 hover:text-zinc-200 md:text-sm",
                            children: "Twitter",
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: "flex items-center space-x-3",
                        children:
                          "/#" === i
                            ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                  l && n && (0, r.jsx)(p.x, { score: t }),
                                  l && (0, r.jsx)(m, {}),
                                ],
                              })
                            : (0, r.jsx)(s.default, {
                                href: "/#",
                                children: (0, r.jsxs)("button", {
                                  className: "btn btn--primary",
                                  children: [
                                    (0, r.jsx)("div", {
                                      children: "ENTER APP",
                                    }),
                                    (0, r.jsx)(f.o, { size: 20 }),
                                  ],
                                }),
                              }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        }
      },
      70640: function (e, t, n) {
        "use strict";
        n.d(t, {
          T: function () {
            return o;
          },
        });
        var r = n(57437),
          s = n(44839);
        let o = (e) => {
          let {
            height: t = 32,
            color: n = "fill-white",
            wordmark: o,
            className: a,
          } = e;
          return (0, r.jsxs)("svg", {
            height: t,
            viewBox: "0 0 ".concat(o ? "153" : "43", " 32"),
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: (0, s.Z)(n, a),
            children: [
              (0, r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0 32L11.1683 0H31.1257L42.2924 32H28.5065L27.2986 28.5386C25.4413 29.5006 23.3336 30.0442 21.1011 30.0442C18.8997 30.0442 16.8196 29.5156 14.9812 28.5785L13.7874 32H0ZM21.1011 4.85879C14.6597 4.85879 9.41897 10.0978 9.41897 16.5355C9.41897 22.9731 14.6597 28.2122 21.1011 28.2122C27.5425 28.2122 32.7832 22.9731 32.7832 16.5355C32.7832 10.0978 27.5425 4.85879 21.1011 4.85879ZM16.8861 12.5658V16.4294H18.7575V12.5658H16.8861ZM23.5406 12.5658V16.4294H25.4119V12.5658H23.5406ZM21.1166 21.1392C18.3454 21.1392 15.8499 20.1478 14.1391 18.6048L12.8857 19.9944C14.9613 21.8664 17.9113 23.0106 21.1166 23.0106C24.3213 23.0106 27.2397 21.8795 29.3127 20.0273L28.0658 18.6319C26.3556 20.16 23.8885 21.1392 21.1166 21.1392Z",
                className: "fill-[currentColor]",
              }),
              o &&
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("path", {
                      d: "M47.6262 26.3802H48.7248L53.415 12.7743H55.8235L60.5138 26.3802H61.6124V27.5211H56.0982V26.3802H57.9151L56.732 22.852H51.3868L50.2037 26.3802H52.0207V27.5211H47.6262V26.3802ZM51.7249 21.6477H56.394L54.1122 14.7603H54.0066L51.7249 21.6477Z",
                      className: "fill-[currentColor]",
                    }),
                    (0, r.jsx)("path", {
                      d: "M67.8806 32C66.951 32 66.1693 31.9366 65.5355 31.8099C64.9017 31.6972 64.3946 31.5282 64.0143 31.3028C63.634 31.0915 63.3594 30.8239 63.1904 30.5C63.0213 30.1901 62.9368 29.845 62.9368 29.4648C62.9368 29.1831 63.0002 28.9225 63.127 28.683C63.2537 28.4577 63.4228 28.2535 63.634 28.0704C63.8453 27.9013 64.0918 27.7535 64.3735 27.6267C64.6552 27.4999 64.9439 27.4013 65.2397 27.3309V27.2464C64.7749 27.1196 64.4157 26.8943 64.1622 26.5703C63.9087 26.2464 63.7819 25.8379 63.7819 25.345C63.7819 24.7393 63.9721 24.2675 64.3524 23.9294C64.7467 23.5914 65.2115 23.352 65.7467 23.2111V23.1266C65.0707 22.8449 64.5355 22.4365 64.1411 21.9012C63.7467 21.3519 63.5495 20.6829 63.5495 19.8942C63.5495 19.3308 63.6552 18.8237 63.8664 18.373C64.0918 17.9223 64.3946 17.542 64.7749 17.2321C65.1693 16.9223 65.6341 16.6899 66.1693 16.5349C66.7045 16.3659 67.2961 16.2814 67.944 16.2814C68.5778 16.2814 69.113 16.3448 69.5496 16.4716C69.9863 16.5983 70.3877 16.7814 70.7539 17.0209C70.782 16.218 70.9581 15.6546 71.2821 15.3307C71.606 14.9927 72.0215 14.8236 72.5286 14.8236C72.8807 14.8236 73.1694 14.9293 73.3948 15.1406C73.6342 15.3377 73.7539 15.6194 73.7539 15.9856C73.7539 16.3237 73.6412 16.6054 73.4159 16.8307C73.2046 17.042 72.9088 17.1476 72.5286 17.1476C72.106 17.1476 71.7609 16.9927 71.4933 16.6828H71.4088V17.549C71.6623 17.8026 71.8877 18.1195 72.0849 18.4998C72.2821 18.866 72.3807 19.3308 72.3807 19.8942C72.3807 20.4575 72.268 20.9646 72.0426 21.4153C71.8314 21.866 71.5285 22.2463 71.1342 22.5562C70.7398 22.866 70.2679 23.1055 69.7186 23.2745C69.1834 23.4435 68.5919 23.528 67.944 23.528C67.7045 23.528 67.4721 23.5139 67.2468 23.4858C67.0355 23.4576 66.8242 23.4224 66.613 23.3801C66.3172 23.4787 66.0636 23.6266 65.8524 23.8238C65.6411 24.021 65.5355 24.2604 65.5355 24.5421C65.5355 24.8661 65.6552 25.0985 65.8946 25.2393C66.1482 25.3802 66.5637 25.4506 67.1411 25.4506H69.613C70.9792 25.4506 71.9722 25.7182 72.5919 26.2534C73.2117 26.7886 73.5215 27.5211 73.5215 28.4506C73.5215 29.5493 73.0497 30.4155 72.106 31.0493C71.1764 31.6831 69.7679 32 67.8806 32ZM67.9651 22.3872C68.6412 22.3872 69.1482 22.2041 69.4862 21.8379C69.8243 21.4717 69.9933 20.9435 69.9933 20.2533V19.5561C69.9933 18.866 69.8243 18.3378 69.4862 17.9716C69.1482 17.6054 68.6412 17.4223 67.9651 17.4223C67.289 17.4223 66.782 17.6054 66.4439 17.9716C66.1059 18.3378 65.9369 18.866 65.9369 19.5561V20.2533C65.9369 20.9435 66.1059 21.4717 66.4439 21.8379C66.782 22.2041 67.289 22.3872 67.9651 22.3872ZM64.9228 29.2746C64.9228 29.7957 65.1411 30.1831 65.5777 30.4366C66.0144 30.6901 66.6341 30.8169 67.4369 30.8169H68.5778C69.5355 30.8169 70.2679 30.662 70.775 30.3521C71.2961 30.0563 71.5567 29.6338 71.5567 29.0845C71.5567 28.5774 71.3806 28.2112 71.0285 27.9859C70.6905 27.7605 70.1341 27.6478 69.3595 27.6478H65.9369C65.2608 27.9999 64.9228 28.5422 64.9228 29.2746Z",
                      className: "fill-[currentColor]",
                    }),
                    (0, r.jsx)("path", {
                      d: "M80.3782 27.7746C79.5613 27.7746 78.8359 27.6408 78.2021 27.3732C77.5683 27.0915 77.0331 26.6971 76.5965 26.19C76.1598 25.683 75.8218 25.0773 75.5824 24.3731C75.357 23.6689 75.2443 22.8872 75.2443 22.028C75.2443 21.1547 75.364 20.366 75.6035 19.6618C75.857 18.9575 76.2021 18.3589 76.6387 17.866C77.0894 17.3589 77.6176 16.9716 78.2232 16.704C78.843 16.4223 79.519 16.2814 80.2514 16.2814C80.9979 16.2814 81.667 16.4082 82.2585 16.6617C82.8501 16.9011 83.3501 17.2462 83.7586 17.6969C84.1811 18.1476 84.505 18.6899 84.7304 19.3237C84.9558 19.9575 85.0684 20.6618 85.0684 21.4364V22.0069H77.8007V22.6829C77.8007 23.7816 78.0754 24.6337 78.6247 25.2393C79.174 25.8309 79.9134 26.1267 80.843 26.1267C81.6599 26.1267 82.3149 25.9506 82.8078 25.5985C83.3149 25.2323 83.6881 24.7816 83.9276 24.2463L84.836 24.7957C84.7093 25.1619 84.5191 25.521 84.2656 25.8731C84.0262 26.2253 83.7233 26.5422 83.3571 26.8239C82.9909 27.1056 82.5613 27.338 82.0684 27.5211C81.5754 27.6901 81.012 27.7746 80.3782 27.7746ZM77.8007 20.8871H82.6177V20.6547C82.6177 19.6406 82.4205 18.8589 82.0261 18.3096C81.6458 17.7462 81.0543 17.4645 80.2514 17.4645C79.4627 17.4645 78.8571 17.7392 78.4345 18.2885C78.012 18.8237 77.8007 19.5984 77.8007 20.6125V20.8871Z",
                      className: "fill-[currentColor]",
                    }),
                    (0, r.jsx)("path", {
                      d: "M87.1005 26.3802H88.5371V18.2251L87.1005 17.9505V17.0209L90.84 16.2814V18.2462H90.9456C91.0301 18.0068 91.1569 17.7674 91.3259 17.5279C91.509 17.2885 91.7273 17.0772 91.9809 16.8941C92.2485 16.711 92.5513 16.5631 92.8893 16.4504C93.2414 16.3378 93.6358 16.2814 94.0724 16.2814C95.4105 16.2814 96.3612 16.6265 96.9246 17.3166C97.488 17.9927 97.7697 19.0139 97.7697 20.3801V26.3802H99.2063V27.5211H94.0091V26.3802H95.4035V20.5068C95.4035 19.5913 95.2274 18.9223 94.8753 18.4998C94.5232 18.0772 93.9668 17.866 93.2062 17.866C92.9245 17.866 92.6428 17.9082 92.3612 17.9927C92.0935 18.0631 91.8471 18.1829 91.6217 18.3519C91.4104 18.5068 91.2344 18.704 91.0935 18.9434C90.9668 19.1829 90.9034 19.4716 90.9034 19.8097V26.3802H92.2978V27.5211H87.1005V26.3802Z",
                      className: "fill-[currentColor]",
                    }),
                    (0, r.jsx)("path", {
                      d: "M104.278 27.6901C103.475 27.6901 102.912 27.5211 102.588 27.183C102.264 26.845 102.102 26.3098 102.102 25.5774V17.7603H100.665V16.5349H101.024C101.546 16.5349 101.905 16.4434 102.102 16.2603C102.299 16.0772 102.461 15.8096 102.588 15.4575L103.243 13.5983H104.468V16.5349H107.109V17.7603H104.468V26.3168H107.109V27.2464C106.87 27.3591 106.482 27.4577 105.947 27.5422C105.426 27.6408 104.87 27.6901 104.278 27.6901Z",
                      className: "fill-[currentColor]",
                    }),
                    (0, r.jsx)("path", {
                      d: "M114.229 27.7746C113.398 27.7746 112.659 27.6337 112.011 27.352C111.377 27.0703 110.842 26.676 110.405 26.1689C109.969 25.6619 109.638 25.0562 109.412 24.352C109.187 23.6477 109.074 22.8731 109.074 22.028C109.074 21.1266 109.208 20.3237 109.476 19.6195C109.743 18.9012 110.117 18.2955 110.595 17.8026C111.074 17.3096 111.638 16.9364 112.286 16.6828C112.948 16.4152 113.666 16.2814 114.441 16.2814C115.652 16.2814 116.596 16.5349 117.272 17.042C117.962 17.549 118.307 18.1969 118.307 18.9857C118.307 19.4787 118.173 19.866 117.905 20.1477C117.638 20.4153 117.279 20.5491 116.828 20.5491C116.363 20.5491 116.011 20.4223 115.772 20.1688C115.532 19.9012 115.412 19.5702 115.412 19.1758C115.412 18.8519 115.497 18.5702 115.666 18.3308C115.835 18.0913 116.053 17.9153 116.321 17.8026V17.6969C116.152 17.6265 115.941 17.5631 115.687 17.5068C115.434 17.4364 115.117 17.4012 114.736 17.4012C114.272 17.4012 113.849 17.4857 113.469 17.6547C113.088 17.8237 112.764 18.0631 112.497 18.373C112.229 18.6688 112.018 19.0279 111.863 19.4505C111.722 19.873 111.652 20.3449 111.652 20.866V22.7041C111.652 23.7604 111.912 24.5985 112.433 25.2182C112.955 25.8238 113.666 26.1267 114.567 26.1267C115.412 26.1267 116.067 25.9436 116.532 25.5774C117.011 25.2112 117.377 24.7604 117.631 24.2252L118.539 24.7745C118.412 25.1407 118.229 25.4999 117.99 25.852C117.75 26.2041 117.455 26.5281 117.103 26.8239C116.75 27.1056 116.335 27.338 115.856 27.5211C115.377 27.6901 114.835 27.7746 114.229 27.7746Z",
                      className: "fill-[currentColor]",
                    }),
                    (0, r.jsx)("path", {
                      d: "M125.729 26.5281C126.616 26.5281 127.264 26.2534 127.672 25.7041C128.095 25.1548 128.306 24.4224 128.306 23.5069V20.5491C128.306 19.6336 128.095 18.9012 127.672 18.3519C127.264 17.8026 126.616 17.5279 125.729 17.5279C124.841 17.5279 124.186 17.8026 123.764 18.3519C123.355 18.9012 123.151 19.6336 123.151 20.5491V23.5069C123.151 24.4224 123.355 25.1548 123.764 25.7041C124.186 26.2534 124.841 26.5281 125.729 26.5281ZM125.729 27.7746C124.954 27.7746 124.25 27.6408 123.616 27.3732C122.982 27.1056 122.44 26.7253 121.989 26.2323C121.538 25.7393 121.186 25.1407 120.933 24.4365C120.693 23.7182 120.574 22.9153 120.574 22.028C120.574 21.1407 120.693 20.3449 120.933 19.6406C121.186 18.9223 121.538 18.3167 121.989 17.8237C122.44 17.3307 122.982 16.9504 123.616 16.6828C124.25 16.4152 124.954 16.2814 125.729 16.2814C126.503 16.2814 127.208 16.4152 127.841 16.6828C128.475 16.9504 129.017 17.3307 129.468 17.8237C129.919 18.3167 130.264 18.9223 130.503 19.6406C130.757 20.3449 130.884 21.1407 130.884 22.028C130.884 22.9153 130.757 23.7182 130.503 24.4365C130.264 25.1407 129.919 25.7393 129.468 26.2323C129.017 26.7253 128.475 27.1056 127.841 27.3732C127.208 27.6408 126.503 27.7746 125.729 27.7746Z",
                      className: "fill-[currentColor]",
                    }),
                    (0, r.jsx)("path", {
                      d: "M135.586 14.4856C135.135 14.4856 134.783 14.3588 134.53 14.1053C134.276 13.8377 134.149 13.4997 134.149 13.0912V12.9645C134.149 12.556 134.276 12.225 134.53 11.9715C134.783 11.7039 135.135 11.5701 135.586 11.5701C136.037 11.5701 136.389 11.7039 136.642 11.9715C136.896 12.225 137.023 12.556 137.023 12.9645V13.0912C137.023 13.4997 136.896 13.8377 136.642 14.1053C136.389 14.3588 136.037 14.4856 135.586 14.4856ZM132.966 26.3802H134.403V18.2251L132.966 17.9505V17.0209L136.769 16.2814V26.3802H138.206V27.5211H132.966V26.3802Z",
                      className: "fill-[currentColor]",
                    }),
                    (0, r.jsx)("path", {
                      d: "M140.38 26.3802H141.817V18.2251L140.38 17.9505V17.0209L144.12 16.2814V18.2462H144.226C144.31 18.0068 144.437 17.7674 144.606 17.5279C144.789 17.2885 145.007 17.0772 145.261 16.8941C145.528 16.711 145.831 16.5631 146.169 16.4504C146.521 16.3378 146.916 16.2814 147.352 16.2814C148.69 16.2814 149.641 16.6265 150.205 17.3166C150.768 17.9927 151.05 19.0139 151.05 20.3801V26.3802H152.486V27.5211H147.289V26.3802H148.683V20.5068C148.683 19.5913 148.507 18.9223 148.155 18.4998C147.803 18.0772 147.247 17.866 146.486 17.866C146.205 17.866 145.923 17.9082 145.641 17.9927C145.374 18.0631 145.127 18.1829 144.902 18.3519C144.69 18.5068 144.514 18.704 144.374 18.9434C144.247 19.1829 144.183 19.4716 144.183 19.8097V26.3802H145.578V27.5211H140.38V26.3802Z",
                      className: "fill-[currentColor]",
                    }),
                  ],
                }),
            ],
          });
        };
      },
      62603: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return l;
          },
        });
        var r = n(57437),
          s = n(27070),
          o = n(44839),
          a = n(2265),
          i = n(54887);
        function l(e) {
          let {
              show: t,
              children: n,
              duration: l = 5e3,
              className: c,
              anchor: d = "bottom-right",
            } = e,
            [u, C] = (0, a.useState)(!1),
            x = (() => {
              switch (d) {
                case "top-left":
                  return "top-6 left-6";
                case "top-center":
                  return "top-6 left-1/2 -translate-x-1/2";
                case "top-right":
                  return "top-6 right-6";
                case "bottom-left":
                default:
                  return "bottom-6 left-6";
                case "bottom-center":
                  return "bottom-6 left-1/2 -translate-x-1/2";
                case "bottom-right":
                  return "bottom-6 right-6";
              }
            })();
          return (
            (0, a.useEffect)(() => {
              t &&
                (C(!0),
                setTimeout(() => {
                  C(!1);
                }, l));
            }, [t]),
            (0, i.createPortal)(
              (0, r.jsx)(s.u, {
                show: u,
                enter: "duration-300 ease-in-out",
                enterFrom: (0, o.Z)(
                  "scale-95 opacity-0",
                  d.includes("top") ? "-translate-y-full" : "translate-y-full"
                ),
                enterTo: "translate-y-0 scale-100 opacity-100",
                leave: "duration-75 ease-in-out",
                leaveFrom: "translate-y-0 scale-100 opacity-100",
                leaveTo: (0, o.Z)(
                  "scale-95 opacity-0",
                  d.includes("top") ? "-translate-y-full" : "translate-y-full"
                ),
                children: (0, r.jsx)("div", {
                  className: (0, o.Z)(
                    "fixed z-10 w-max max-w-64 rounded-md border border-zinc-800 bg-zinc-950/50 px-3 py-2 text-sm shadow-xl shadow-black/80 backdrop-blur-md",
                    x,
                    c
                  ),
                  children: n,
                }),
              }),
              document.body
            )
          );
        }
      },
      40006: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return l;
          },
        });
        var r = n(57437),
          s = n(95635),
          o = n(27070),
          a = n(44839),
          i = n(2265);
        function l(e) {
          let {
              children: t,
              content: n,
              trigger: l = "hover",
              className: c,
              anchor: d = "top-center",
              tooltipClasses: u,
            } = e,
            [C, x] = (0, i.useState)(!1),
            h = (() => {
              switch (d) {
                case "top-left":
                  return "bottom-[calc(100%+8px)] left-0";
                case "top-center":
                default:
                  return "bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2";
                case "top-right":
                  return "bottom-[calc(100%+8px)] right-0";
                case "bottom-left":
                  return "top-[calc(100%+8px)] left-0";
                case "bottom-center":
                  return "top-[calc(100%+8px)] left-1/2 -translate-x-1/2";
                case "bottom-right":
                  return "top-[calc(100%+8px)] right-0";
              }
            })();
          return (0, r.jsxs)(s.J2, {
            as: "div",
            className: (0, a.Z)(c),
            onMouseEnter: () => {
              "hover" === l && x(!0);
            },
            onMouseLeave: () => {
              "hover" === l && x(!1);
            },
            children: [
              "click" === l && (0, r.jsx)(s.O7, { as: "div", children: t }),
              "hover" === l && (0, r.jsx)("div", { children: t }),
              (0, r.jsx)(o.u, {
                show: "hover" === l ? C : void 0,
                enter: "transition duration-100 ease-out",
                enterFrom: "transform scale-95 opacity-0",
                enterTo: "transform scale-100 opacity-100",
                leave: "transition duration-75 ease-out",
                leaveFrom: "transform scale-100 opacity-100",
                leaveTo: "transform scale-95 opacity-0",
                as: i.Fragment,
                children: (0, r.jsx)(s.Hi, {
                  className: (0, a.Z)(
                    "absolute z-10 w-max max-w-64 rounded-md border border-zinc-800 bg-zinc-950/80 px-3 py-2 text-sm shadow-lg shadow-black/80 backdrop-blur-md",
                    h,
                    u
                  ),
                  children: n,
                }),
              }),
            ],
          });
        }
      },
      218: function (e, t, n) {
        "use strict";
        n.d(t, {
          I: function () {
            return h;
          },
        });
        var r = n(57437),
          s = n(77699),
          o = n(74715),
          a = n(12679),
          i = n(76437),
          l = n(16463),
          c = n(49354),
          d = n(2265),
          u = n(62603),
          C = n(44839),
          x = n(40006);
        let h = (e) => {
          var t, n, h, m;
          let { show: f, className: p, children: v, center: b, anchor: w } = e,
            g = (0, l.useRouter)(),
            [j, y] = (0, d.useState)(!1),
            { user: V, logout: N, exportWallet: H } = (0, i.sv)(),
            Z = () => {
              var e;
              (null == V
                ? void 0
                : null === (e = V.wallet) || void 0 === e
                ? void 0
                : e.address) &&
                (navigator.clipboard.writeText(V.wallet.address), y(!0));
            };
          return V
            ? (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(x.Z, {
                    anchor: w,
                    trigger: "click",
                    tooltipClasses: p,
                    content: (0, r.jsxs)("ul", {
                      className: (0, C.Z)(
                        "space-y-2",
                        b && "flex flex-col items-center text-center"
                      ),
                      children: [
                        (0, r.jsx)("li", {
                          className: (0, C.Z)(
                            "flex w-full items-center space-x-2 rounded-sm px-3 pt-2 text-sm font-medium uppercase text-white",
                            b && "justify-center"
                          ),
                          children: (0, r.jsx)("div", {
                            className: "text-xs",
                            children:
                              null == V
                                ? void 0
                                : null === (t = V.email) || void 0 === t
                                ? void 0
                                : t.address,
                          }),
                        }),
                        (null == V
                          ? void 0
                          : null === (n = V.wallet) || void 0 === n
                          ? void 0
                          : n.address) &&
                          (0, r.jsxs)("li", {
                            className: (0, C.Z)(
                              "flex w-full items-center space-x-2 rounded-sm px-3 py-1 font-mono text-sm text-zinc-400",
                              b && "justify-center"
                            ),
                            children: [
                              (0, r.jsx)("div", {
                                className: "text-xs",
                                onClick: Z,
                                children: (0, c.Tg)(
                                  null == V
                                    ? void 0
                                    : null === (h = V.wallet) || void 0 === h
                                    ? void 0
                                    : h.address
                                ),
                              }),
                              (0, r.jsx)("button", {
                                className:
                                  "flex cursor-pointer hover:text-yellow-300",
                                onClick: Z,
                                children: (0, r.jsx)(s.K, { size: 16 }),
                              }),
                              (null == V
                                ? void 0
                                : null === (m = V.wallet) || void 0 === m
                                ? void 0
                                : m.connectorType) === "embedded" &&
                                (0, r.jsx)("button", {
                                  className:
                                    "flex cursor-pointer hover:text-yellow-300",
                                  onClick: async () => {
                                    await H();
                                  },
                                  children: (0, r.jsx)(o.D, { size: 16 }),
                                }),
                            ],
                          }),
                        (0, r.jsx)("li", {
                          className: "h-px w-full bg-zinc-800",
                        }),
                        (0, r.jsxs)("li", {
                          className: (0, C.Z)(
                            "flex w-full cursor-pointer items-center space-x-2 rounded-md px-3 py-1 text-sm font-medium uppercase hover:bg-yellow-300/10 hover:text-yellow-300",
                            b && "justify-center"
                          ),
                          onClick: async () => {
                            await N(), g.refresh();
                          },
                          children: [
                            (0, r.jsx)(a.l, { size: 20 }),
                            (0, r.jsx)("div", { children: "Log Out" }),
                          ],
                        }),
                      ],
                    }),
                    children: v,
                  }),
                  (0, r.jsx)(u.Z, {
                    show: j,
                    anchor: "top-center",
                    children: "Address copied",
                  }),
                ],
              })
            : null;
        };
      },
      55596: function (e, t, n) {
        "use strict";
        n.d(t, {
          x: function () {
            return i;
          },
        });
        var r = n(57437),
          s = n(54994),
          o = n(91080),
          a = n(40006);
        function i(e) {
          let { score: t } = e,
            n = (0, s.d)();
          return t
            ? n
              ? (0, r.jsx)(a.Z, {
                  anchor: "bottom-center",
                  className: "relative cursor-pointer",
                  trigger: "click",
                  content: (0, r.jsx)("div", {
                    children:
                      "The more access points you have, the sooner you'll get access to Agents of Tomorrow",
                  }),
                  children: (0, r.jsxs)("div", {
                    className:
                      "flex animate-fadeIn items-center space-x-1 rounded-xl border border-zinc-800/50 bg-black/30 py-1.5 pl-4 pr-3 opacity-0",
                    children: [
                      (0, r.jsx)("div", {
                        className:
                          "font-mono text-2xl font-semibold italic text-white",
                        children: t,
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "space-y-0.5 text-[8px] font-medium uppercase italic leading-none tracking-wider text-yellow-300",
                        children: [
                          (0, r.jsx)("div", { children: "Access" }),
                          (0, r.jsx)("div", { children: "Points" }),
                        ],
                      }),
                      (0, r.jsx)(o.k, {
                        size: 12,
                        weight: "bold",
                        className:
                          "text-white/80 duration-200 ease-in-out group-hover:text-white",
                      }),
                    ],
                  }),
                })
              : (0, r.jsxs)("div", {
                  className:
                    "absolute bottom-8 left-8 flex w-[280px] items-center justify-center rounded-xl border border-zinc-800/50 bg-black/30 px-8 pb-4 pt-6",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "font-mono text-[clamp(90px,14vh,120px)] font-semibold italic leading-none tracking-tighter drop-shadow-[0_8px_8px_rgba(0,0,0,0.5)]",
                      children: t,
                    }),
                    (0, r.jsx)(a.Z, {
                      className:
                        "group absolute -top-2 right-1/2 translate-x-1/2 cursor-pointer",
                      content: (0, r.jsx)("div", {
                        children:
                          "The more access points you have, the sooner you'll get access to Agents of Tomorrow",
                      }),
                      children: (0, r.jsxs)("div", {
                        className:
                          "flex animate-fadeIn items-center space-x-1 rounded-md border border-blue-900 bg-blue-950/50 px-2 py-1 opacity-0 shadow backdrop-blur-xl duration-200 ease-in-out hover:border-blue-700 hover:bg-blue-950",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "whitespace-nowrap text-xs font-medium uppercase italic leading-none tracking-wider text-yellow-300",
                            children: "Access Points",
                          }),
                          (0, r.jsx)(o.k, {
                            size: 12,
                            weight: "bold",
                            className:
                              "text-white/80 duration-200 ease-in-out group-hover:text-white",
                          }),
                        ],
                      }),
                    }),
                  ],
                })
            : void 0;
        }
      },
      8983: function (e, t, n) {
        "use strict";
        n.d(t, {
          F3: function () {
            return o;
          },
          Sp: function () {
            return i;
          },
          lG: function () {
            return r;
          },
          mF: function () {
            return s;
          },
          qg: function () {
            return a;
          },
          y5: function () {
            return l;
          },
        });
        let r = "cm0ypr412017y8dsowube7tyf",
          s = "https://maoetposdyrkvxsjfswa.supabase.co",
          o =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hb2V0cG9zZHlya3Z4c2pmc3dhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxMDc2NzQsImV4cCI6MjA0MjY4MzY3NH0.6lkL0aEMCPymtuB4Ro5KLt_TBoIMV1G1VAVigNUc2Pc",
          a = "1838966427522314548",
          i = "6LfqIWMqAAAAAKPdrkgw-Ln6XHu4kbUWvzes3FU3",
          l = "6LflcmMqAAAAAKvNPHvSRq8hLZpJTxwnyNc1UgW1";
        if (!r)
          throw Error("Privy App ID has not been set as Environment Variable");
        if (!s) throw Error("Supabase URL not set as Environment Variable");
        if (!o)
          throw Error("Supabase Anon Key not set as Environment Variable");
        if (!a) throw Error("X Promo Tweet ID not set as Environment Variable");
        if (!i)
          throw Error("Google Site Key V3 is not set as Environment Variable");
        if (!l)
          throw Error("Google Site Key V2 is not set as Environment Variable");
      },
      54994: function (e, t, n) {
        "use strict";
        n.d(t, {
          d: function () {
            return s;
          },
        });
        var r = n(2265);
        let s = () => {
          let [e, t] = (0, r.useState)(null);
          return (
            (0, r.useEffect)(() => {
              let e = () => {
                t(window.innerWidth < 768);
              };
              return (
                e(),
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("resize", e);
                }
              );
            }, [!1]),
            e
          );
        };
      },
      49354: function (e, t, n) {
        "use strict";
        n.d(t, {
          CB: function () {
            return a;
          },
          Iv: function () {
            return i;
          },
          Tg: function () {
            return s;
          },
          dV: function () {
            return o;
          },
        });
        var r = n(8983);
        let s = (e) => {
            if (!e) return "";
            let t = e.slice(0, 5),
              n = e.slice(e.length - 3, e.length);
            return "".concat(t, "...").concat(n);
          },
          o = (e) => {
            let t = "https://x.com/agentcoinorg/status/".concat(r.qg),
              n = encodeURIComponent(
                "I just joined Agentcoin's waitlist for the AI Agents that Livestream trading crypto, playing games, and sharing hot takes.\n\nGet your spot on the @agentcoinorg waitlist - ".concat(
                  e
                )
              ),
              s = encodeURIComponent(t);
            return "https://x.com/intent/tweet?text="
              .concat(n, "&url=")
              .concat(s);
          },
          a = (e) => {
            let t = encodeURIComponent(
              "Check this new project @agentcoinorg - \n\nAgents of Tomorrow is launching AI Agents that livestream crypto research & trades, play games and share their hot takes.\n\nJoin the limited waitlist with my code for a private screening and early Agent Key purchases - ".concat(
                e
              )
            );
            return "https://x.com/intent/tweet?text=".concat(t);
          },
          i = (e, t) => {
            let n = encodeURIComponent(
                "The AI Revolution Will Be Televised!\n\nI just minted my @agentcoinorg NFT OG Mint as part of the waitlist\nGet yours here - ".concat(
                  e
                )
              ),
              r = encodeURIComponent(t);
            return "https://x.com/intent/tweet?text="
              .concat(n, "&url=")
              .concat(r);
          };
      },
    },
  ]);
