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
      (e._sentryDebugIds[t] = "16e47259-9d6b-4754-83d9-0a2af7c9bbfc"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-16e47259-9d6b-4754-83d9-0a2af7c9bbfc"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [624],
  {
    29624: function (e, t, o) {
      o.d(t, {
        default: function () {
          return D;
        },
      });
      var a = o(57437),
        s = o(57585),
        i = o(98660),
        r = o(13566),
        n = o(30161),
        c = o(2693),
        l = o(21469),
        h = o(50799),
        j = o(97776),
        p = o(2265),
        m = o(34673),
        x = o(70854),
        d = o(28099),
        b = o(79348),
        u = o(61094),
        f = o(84262),
        g = o(34823);
      let O = (0, p.createContext)(),
        M = (0, p.createContext)();
      function I(e) {
        let t,
          o,
          s,
          i,
          r,
          n,
          c,
          { children: l, bg: h, isMobile: j, ...u } = e,
          { nodes: f, materials: g } = (0, m.L)(
            "assets/models/computers_1-transformed.glb"
          ),
          I = !1 === j;
        !h &&
          ((t = (0, x.mE)("/assets/textures/agentcoin.png")),
          (o = (0, x.mE)("/assets/images/noise-texture.webp")),
          (i = (0, x.mE)("/assets/images/agents/gecko.webp")),
          (n = (0, x.mE)("/assets/images/agents/oddball.webp")),
          I &&
            ((s = (0, d.y)("/assets/textures/noise.mp4", {
              unsuspend: "loadedmetadata",
              crossOrigin: "Anonymous",
              muted: !0,
              loop: !0,
              start: !0,
              disablePictureInPicture: !0,
              controls: !1,
            })),
            (r = (0, d.y)("/assets/images/agents/gecko.mp4", {
              unsuspend: "loadedmetadata",
              crossOrigin: "Anonymous",
              muted: !0,
              loop: !0,
              start: !0,
              disablePictureInPicture: !0,
              controls: !1,
            })),
            (c = (0, d.y)("/assets/images/agents/oddball.mp4", {
              unsuspend: "loadedmetadata",
              crossOrigin: "Anonymous",
              muted: !0,
              loop: !0,
              start: !0,
              disablePictureInPicture: !0,
              controls: !1,
            }))));
        let y = (0, p.useMemo)(
          () => ({
            instances: {
              Object1: f.Object_16,
              Object3: f.Object_52,
              Object13: f.Object_172,
              Object14: f.Object_174,
              Object23: f.Object_22,
              Object24: f.Object_26,
              Object32: f.Object_178,
              Object36: f.Object_28,
              Object45: f.Object_206,
              Object46: f.Object_207,
              Object47: f.Object_215,
              Object48: f.Object_216,
              Sphere: f.Sphere,
            },
            nodes: f,
            materials: g,
            textures: {
              logoTexture: t,
              noiseTexture: I ? s : o,
              agents: [I ? r : i, I ? c : n],
            },
          }),
          [f, g, t, r, j]
        );
        return (0, a.jsx)(M.Provider, {
          value: y,
          children: (0, a.jsx)(b.gp, {
            castShadow: !0,
            receiveShadow: !0,
            meshes: y.instances,
            ...u,
            children: (e) => (0, a.jsx)(O.Provider, { value: e, children: l }),
          }),
        });
      }
      function y(e) {
        let { nodes: t, materials: o } = (0, m.L)(
            "assets/models/computers_1-transformed.glb"
          ),
          s = (0, p.useContext)(O);
        return (0, a.jsxs)("group", {
          ...e,
          dispose: null,
          children: [
            (0, a.jsxs)("group", {
              children: [
                (0, a.jsx)(s.Object1, {
                  position: [0.63, 0, -3],
                  rotation: [0, 0.17, 0],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object1, {
                  position: [-2.36, 0.32, -2.02],
                  rotation: [0, 0.53, -Math.PI / 2],
                  scale: 1.52,
                }),
                (0, a.jsx)("mesh", {
                  castShadow: !0,
                  receiveShadow: !0,
                  geometry: t.Object_24.geometry,
                  material: o.Texture,
                  position: [-2.42, 0.94, -2.25],
                  rotation: [0, 0.14, Math.PI / 2],
                  scale: -1.52,
                }),
                (0, a.jsx)(s.Object1, {
                  position: [-3.53, 0, 0.59],
                  rotation: [Math.PI, -1.09, Math.PI],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object1, {
                  position: [-3.53, 1.53, 0.59],
                  rotation: [0, 0.91, 0],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object1, {
                  position: [3.42, 0, 0],
                  rotation: [-Math.PI, 1.13, -Math.PI],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object1, {
                  position: [4.09, 2.18, 2.41],
                  rotation: [0, -1.55, 1.57],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object3, {
                  position: [4.31, 1.57, 2.34],
                  rotation: [0, -1.15, -Math.PI / 2],
                  scale: -1.52,
                }),
                (0, a.jsx)(s.Object3, {
                  position: [-3.79, 0, 1.66],
                  rotation: [Math.PI, -1.39, 0],
                  scale: -1.52,
                }),
                (0, a.jsx)(s.Object3, {
                  position: [-3.79, 1.53, 1.66],
                  rotation: [0, 1.22, -Math.PI],
                  scale: -1.52,
                }),
                (0, a.jsx)(s.Object1, {
                  position: [-3.69, 0, 2.59],
                  rotation: [0, -1.57, 0],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object1, {
                  position: [-5.36, 2.18, 0.81],
                  rotation: [0, 0.77, Math.PI / 2],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object3, {
                  position: [-5.56, 1.57, 0.69],
                  rotation: [0, 1.17, -Math.PI / 2],
                  scale: -1.52,
                }),
                (0, a.jsx)(s.Object1, {
                  position: [-5.47, 2.79, 0.74],
                  rotation: [Math.PI, -1.16, Math.PI / 2],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object3, {
                  position: [-5.29, 3.41, 0.89],
                  rotation: [Math.PI, -0.76, -Math.PI / 2],
                  scale: -1.52,
                }),
                (0, a.jsx)(s.Object1, {
                  position: [-5.28, 0, -2.33],
                  rotation: [0, 0.75, 0],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object1, {
                  position: [-5.49, 0, -1.38],
                  rotation: [Math.PI, -0.99, Math.PI],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object1, {
                  position: [-3.01, 0, -3.79],
                  rotation: [0, 0.6, 0],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object1, {
                  position: [-2.08, 0, -4.32],
                  rotation: [Math.PI, -0.6, Math.PI],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object1, {
                  position: [-1.02, 0, -4.49],
                  rotation: [0, 0.31, 0],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object1, {
                  position: [-5.31, 1.83, -1.41],
                  rotation: [0, 1.06, Math.PI / 2],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object1, {
                  position: [-4.18, 1.83, -3.06],
                  rotation: [-Math.PI, -0.46, -Math.PI / 2],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object1, {
                  position: [-1.76, 1.83, -3.6],
                  rotation: [0, -1.16, Math.PI / 2],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object1, {
                  position: [-0.25, 1.83, -5.54],
                  rotation: [0, 1.55, 1.57],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object1, {
                  position: [-5.28, 2.14, -2.33],
                  rotation: [Math.PI, -0.75, Math.PI],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object1, {
                  position: [-5.49, 2.14, -1.38],
                  rotation: [0, 0.99, 0],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object1, {
                  position: [-3.01, 2.14, -3.79],
                  rotation: [Math.PI, -0.6, Math.PI],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object1, {
                  position: [-2.08, 2.14, -4.32],
                  rotation: [0, 0.6, 0],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object1, {
                  position: [-1.02, 2.14, -4.49],
                  rotation: [Math.PI, -0.31, Math.PI],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object1, {
                  position: [-5.31, 3.98, -1.41],
                  rotation: [0, 1.06, Math.PI / 2],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object1, {
                  position: [-4.18, 3.98, -3.06],
                  rotation: [-Math.PI, -0.46, -Math.PI / 2],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object1, {
                  position: [-1.17, 3.98, -4.45],
                  rotation: [0, 0.17, Math.PI / 2],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object1, {
                  position: [-0.94, 3.98, -4.66],
                  rotation: [Math.PI, 0.02, -Math.PI / 2],
                  scale: 1.52,
                }),
                (0, a.jsx)("mesh", {
                  castShadow: !0,
                  receiveShadow: !0,
                  geometry: t.Object_140.geometry,
                  material: o.Texture,
                  position: [5.53, 2.18, 0.17],
                  rotation: [-Math.PI, 0, 0],
                  scale: -1,
                }),
                (0, a.jsx)("mesh", {
                  castShadow: !0,
                  receiveShadow: !0,
                  geometry: t.Object_144.geometry,
                  material: o.Texture,
                  position: [5.74, 1.57, 0.05],
                  rotation: [-Math.PI, 0, 0],
                  scale: -1,
                }),
                (0, a.jsx)("mesh", {
                  castShadow: !0,
                  receiveShadow: !0,
                  geometry: t.Object_148.geometry,
                  material: o.Texture,
                  position: [5.65, 2.79, 0.11],
                  rotation: [-Math.PI, 0, 0],
                  scale: -1,
                }),
                (0, a.jsx)("mesh", {
                  castShadow: !0,
                  receiveShadow: !0,
                  geometry: t.Object_152.geometry,
                  material: o.Texture,
                  position: [5.46, 3.41, 0.26],
                  rotation: [-Math.PI, 0, 0],
                  scale: -1,
                }),
                (0, a.jsx)("mesh", {
                  castShadow: !0,
                  receiveShadow: !0,
                  geometry: t.Object_156.geometry,
                  material: o.Texture,
                  position: [4.86, 0, -2.54],
                  rotation: [-Math.PI, 0, 0],
                  scale: -1,
                }),
                (0, a.jsx)("mesh", {
                  castShadow: !0,
                  receiveShadow: !0,
                  geometry: t.Object_160.geometry,
                  material: o.Texture,
                  position: [5.06, 0, -1.6],
                  rotation: [-Math.PI, 0, 0],
                  scale: -1,
                }),
                (0, a.jsx)("mesh", {
                  castShadow: !0,
                  receiveShadow: !0,
                  geometry: t.Object_164.geometry,
                  material: o.Texture,
                  position: [2.59, 0, -4],
                  rotation: [-Math.PI, 0, 0],
                  scale: -1,
                }),
                (0, a.jsx)("mesh", {
                  castShadow: !0,
                  receiveShadow: !0,
                  geometry: t.Object_168.geometry,
                  material: o.Texture,
                  position: [1.66, 0, -4.54],
                  rotation: [-Math.PI, 0, 0],
                  scale: -1,
                }),
                (0, a.jsx)("mesh", {
                  castShadow: !0,
                  receiveShadow: !0,
                  geometry: t.Object_170.geometry,
                  material: o.Texture,
                  position: [0.59, 0, -4.7],
                  rotation: [-Math.PI, 0, 0],
                  scale: -1,
                }),
                (0, a.jsx)(s.Object13, {
                  position: [4.89, 1.83, -1.62],
                  rotation: [-Math.PI, 0, 0],
                  scale: -1,
                }),
                (0, a.jsx)(s.Object14, {
                  position: [3.75, 1.83, -3.28],
                  rotation: [-Math.PI, 0, 0],
                  scale: -1,
                }),
                (0, a.jsx)("mesh", {
                  castShadow: !0,
                  receiveShadow: !0,
                  geometry: t.Object_176.geometry,
                  material: o.Texture,
                  position: [1.33, 1.83, -3.82],
                  rotation: [-Math.PI, 0, 0],
                  scale: -1,
                }),
                (0, a.jsx)("mesh", {
                  castShadow: !0,
                  receiveShadow: !0,
                  geometry: t.Object_180.geometry,
                  material: o.Texture,
                  position: [4.86, 2.14, -2.54],
                  rotation: [-Math.PI, 0, 0],
                  scale: -1,
                }),
                (0, a.jsx)("mesh", {
                  castShadow: !0,
                  receiveShadow: !0,
                  geometry: t.Object_184.geometry,
                  material: o.Texture,
                  position: [5.06, 2.14, -1.6],
                  rotation: [-Math.PI, 0, 0],
                  scale: -1,
                }),
                (0, a.jsx)("mesh", {
                  castShadow: !0,
                  receiveShadow: !0,
                  geometry: t.Object_188.geometry,
                  material: o.Texture,
                  position: [2.59, 2.14, -4],
                  rotation: [-Math.PI, 0, 0],
                  scale: -1,
                }),
                (0, a.jsx)("mesh", {
                  castShadow: !0,
                  receiveShadow: !0,
                  geometry: t.Object_192.geometry,
                  material: o.Texture,
                  position: [1.66, 2.14, -4.54],
                  rotation: [-Math.PI, 0, 0],
                  scale: -1,
                }),
                (0, a.jsx)("mesh", {
                  castShadow: !0,
                  receiveShadow: !0,
                  geometry: t.Object_194.geometry,
                  material: o.Texture,
                  position: [0.59, 2.14, -4.7],
                  rotation: [-Math.PI, 0, 0],
                  scale: -1,
                }),
                (0, a.jsx)(s.Object13, {
                  position: [4.89, 3.98, -1.62],
                  rotation: [-Math.PI, 0, 0],
                  scale: -1,
                }),
                (0, a.jsx)(s.Object14, {
                  position: [3.75, 3.98, -3.28],
                  rotation: [-Math.PI, 0, 0],
                  scale: -1,
                }),
                (0, a.jsx)("mesh", {
                  castShadow: !0,
                  receiveShadow: !0,
                  geometry: t.Object_200.geometry,
                  material: o.Texture,
                  position: [0.75, 3.98, -4.66],
                  rotation: [-Math.PI, 0, 0],
                  scale: -1,
                }),
                (0, a.jsx)("mesh", {
                  castShadow: !0,
                  receiveShadow: !0,
                  geometry: t.Object_18.geometry,
                  material: o.Texture,
                  position: [-0.19, 0, -2.96],
                  rotation: [0, -0.06, 0],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object23, {
                  position: [-2.29, 1.56, -2.26],
                  rotation: [0, -0.005, -Math.PI / 2],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object24, {
                  position: [-2.19, 2.19, -1.87],
                  rotation: [0, 0.51, Math.PI / 2],
                  scale: -1.52,
                }),
                (0, a.jsx)(s.Object23, {
                  position: [-2.9, 0.3, -1.47],
                  rotation: [Math.PI, -1.35, Math.PI / 2],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object23, {
                  position: [3.22, 0, -0.8],
                  rotation: [0, -1.32, 0],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object23, {
                  position: [3.53, 1.83, 0.44],
                  rotation: [-Math.PI, 1.32, Math.PI / 2],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object23, {
                  position: [4.26, 0.94, 2.22],
                  rotation: [0, -1, Math.PI / 2],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object24, {
                  position: [3.87, 0.32, 2.35],
                  rotation: [0, -1.53, -1.57],
                  scale: -1.52,
                }),
                (0, a.jsx)(s.Object23, {
                  position: [-5.61, 0.94, 0.82],
                  rotation: [0, 1.32, 1.57],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object24, {
                  position: [-5.26, 0.32, 1.01],
                  rotation: [0, 0.79, -Math.PI / 2],
                  scale: -1.52,
                }),
                (0, a.jsx)(s.Object23, {
                  position: [-5.39, 4.03, 0.99],
                  rotation: [Math.PI, -0.61, Math.PI / 2],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object24, {
                  position: [-5.7, 4.66, 0.72],
                  rotation: [Math.PI, -1.13, -Math.PI / 2],
                  scale: -1.52,
                }),
                (0, a.jsx)(s.Object23, {
                  position: [-5.95, 0, -0.64],
                  rotation: [0, 0.95, 0],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object23, {
                  position: [-4.48, 0, -2.75],
                  rotation: [Math.PI, -0.57, Math.PI],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object23, {
                  position: [-3.72, 0, -2.89],
                  rotation: [0, 0.64, 0],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object23, {
                  position: [-0.08, 0, -5.03],
                  rotation: [Math.PI, -0.04, Math.PI],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object24, {
                  position: [-4.19, 1.84, -2.77],
                  rotation: [Math.PI, -0.66, -Math.PI / 2],
                  scale: -1.52,
                }),
                (0, a.jsx)(s.Object23, {
                  position: [-5.95, 2.14, -0.64],
                  rotation: [Math.PI, -0.95, Math.PI],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object23, {
                  position: [-4.48, 2.14, -2.75],
                  rotation: [0, 0.57, 0],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object23, {
                  position: [-3.73, 2.14, -3.1],
                  rotation: [Math.PI, -0.64, Math.PI],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object23, {
                  position: [-0.08, 2.14, -5.03],
                  rotation: [0, 0.04, 0],
                  scale: 1.52,
                }),
                (0, a.jsx)(s.Object24, {
                  position: [-4.19, 3.98, -2.77],
                  rotation: [Math.PI, -0.66, -Math.PI / 2],
                  scale: -1.52,
                }),
                (0, a.jsx)("mesh", {
                  castShadow: !0,
                  receiveShadow: !0,
                  geometry: t.Object_142.geometry,
                  material: o.Texture,
                  position: [5.79, 0.94, 0.18],
                  rotation: [-Math.PI, 0, 0],
                  scale: -1,
                }),
                (0, a.jsx)("mesh", {
                  castShadow: !0,
                  receiveShadow: !0,
                  geometry: t.Object_146.geometry,
                  material: o.Texture,
                  position: [5.43, 0.32, 0.37],
                  rotation: [-Math.PI, 0, 0],
                  scale: -1,
                }),
                (0, a.jsx)("mesh", {
                  castShadow: !0,
                  receiveShadow: !0,
                  geometry: t.Object_150.geometry,
                  material: o.Texture,
                  position: [5.56, 4.03, 0.35],
                  rotation: [-Math.PI, 0, 0],
                  scale: -1,
                }),
                (0, a.jsx)("mesh", {
                  castShadow: !0,
                  receiveShadow: !0,
                  geometry: t.Object_154.geometry,
                  material: o.Texture,
                  position: [5.87, 4.66, 0.08],
                  rotation: [-Math.PI, 0, 0],
                  scale: -1,
                }),
                (0, a.jsx)("mesh", {
                  castShadow: !0,
                  receiveShadow: !0,
                  geometry: t.Object_158.geometry,
                  material: o.Texture,
                  position: [5.53, 0, -0.85],
                  rotation: [-Math.PI, 0, 0],
                  scale: -1,
                }),
                (0, a.jsx)("mesh", {
                  castShadow: !0,
                  receiveShadow: !0,
                  geometry: t.Object_162.geometry,
                  material: o.Texture,
                  position: [4.05, 0, -2.96],
                  rotation: [-Math.PI, 0, 0],
                  scale: -1,
                }),
                (0, a.jsx)("mesh", {
                  castShadow: !0,
                  receiveShadow: !0,
                  geometry: t.Object_166.geometry,
                  material: o.Texture,
                  position: [3.29, 0, -3.1],
                  rotation: [-Math.PI, 0, 0],
                  scale: -1,
                }),
                (0, a.jsx)(s.Object32, {
                  position: [3.77, 1.84, -2.98],
                  rotation: [-Math.PI, 0, 0],
                  scale: -1,
                }),
                (0, a.jsx)("mesh", {
                  castShadow: !0,
                  receiveShadow: !0,
                  geometry: t.Object_182.geometry,
                  material: o.Texture,
                  position: [5.53, 2.14, -0.85],
                  rotation: [-Math.PI, 0, 0],
                  scale: -1,
                }),
                (0, a.jsx)("mesh", {
                  castShadow: !0,
                  receiveShadow: !0,
                  geometry: t.Object_186.geometry,
                  material: o.Texture,
                  position: [4.05, 2.14, -2.96],
                  rotation: [-Math.PI, 0, 0],
                  scale: -1,
                }),
                (0, a.jsx)("mesh", {
                  castShadow: !0,
                  receiveShadow: !0,
                  geometry: t.Object_190.geometry,
                  material: o.Texture,
                  position: [3.3, 2.14, -3.31],
                  rotation: [-Math.PI, 0, 0],
                  scale: -1,
                }),
                (0, a.jsx)(s.Object32, {
                  position: [3.77, 3.98, -2.98],
                  rotation: [-Math.PI, 0, 0],
                  scale: -1,
                }),
                (0, a.jsx)(s.Object36, {
                  position: [0.35, 2.35, -3.34],
                  rotation: [-0.26, 0, 0],
                }),
                (0, a.jsx)(s.Object36, {
                  position: [0.18, 2.8, -2.85],
                  rotation: [0.09, 0.15, -0.005],
                }),
                (0, a.jsx)(s.Object36, {
                  position: [1.89, 0, -1.94],
                  rotation: [0, -0.44, 0],
                  scale: [1.5, 1, 1.5],
                }),
                (0, a.jsx)(s.Object36, {
                  position: [1.86, 1.61, -1.81],
                  rotation: [0, -Math.PI / 3, 0],
                }),
                (0, a.jsx)(s.Object36, {
                  position: [3.95, 2.49, 1.61],
                  rotation: [0, -Math.PI / 3, 0],
                }),
                (0, a.jsx)(s.Object36, {
                  position: [-1.1, 4.29, -4.43],
                  rotation: [0, 0.36, 0],
                }),
                (0, a.jsx)(s.Object36, {
                  position: [-5.25, 4.29, -1.47],
                  rotation: [0, 1.25, 0],
                }),
                (0, a.jsx)("mesh", {
                  castShadow: !0,
                  receiveShadow: !0,
                  geometry: t.Object_204.geometry,
                  material: o.Texture,
                  position: [3.2, 4.29, -3.09],
                  rotation: [-Math.PI, 0.56, 0],
                  scale: -1,
                }),
              ],
            }),
            !e.bg &&
              (0, a.jsxs)("group", {
                children: [
                  (0, a.jsx)(w, {
                    frame: "Object_209",
                    panel: "Object_210",
                    position: [0.27, 1.53, -2.61],
                    x: -0.1,
                    y: 5.2,
                  }),
                  (0, a.jsx)(w, {
                    frame: "Object_209",
                    panel: "Object_210",
                    position: [-1.43, 2.5, -1.8],
                    rotation: [0, 1, 0],
                    x: -0.1,
                    y: 5.2,
                  }),
                  (0, a.jsx)(w, {
                    invert: !0,
                    frame: "Object_212",
                    panel: "Object_213",
                    position: [-2.73, 0.63, -0.52],
                    rotation: [0, 1.09, 0],
                    x: -4.66,
                    y: 5.2,
                  }),
                  (0, a.jsx)(w, {
                    invert: !0,
                    frame: "Object_215",
                    panel: "Object_216",
                    position: [1.84, 0.38, -1.77],
                    rotation: [0, -Math.PI / 9, 0],
                  }),
                  (0, a.jsx)(w, {
                    invert: !0,
                    frame: "Object_218",
                    panel: "Object_219",
                    position: [3.11, 2.15, -0.18],
                    rotation: [0, -0.79, 0],
                    scale: 0.81,
                    x: -4.7,
                    y: 1.1,
                  }),
                  (0, a.jsx)(w, {
                    frame: "Object_221",
                    panel: "Object_222",
                    position: [-3.42, 3.06, 1.3],
                    rotation: [0, 1.22, 0],
                    scale: 0.9,
                    y: 5.15,
                  }),
                  (0, a.jsx)(w, {
                    invert: !0,
                    frame: "Object_224",
                    panel: "Object_225",
                    position: [-3.9, 4.29, -2.64],
                    rotation: [0, 0.54, 0],
                  }),
                  (0, a.jsx)(w, {
                    frame: "Object_227",
                    panel: "Object_228",
                    position: [0.96, 4.28, -4.2],
                    rotation: [0, -0.65, 0],
                  }),
                  (0, a.jsx)(w, {
                    frame: "Object_230",
                    panel: "Object_231",
                    position: [4.68, 4.29, -1.56],
                    rotation: [0, -Math.PI / 3, 0],
                  }),
                ],
              }),
            (0, a.jsx)(_, { instances: s }),
          ],
        });
      }
      function P(e) {
        let { frame: t, panel: o, children: s, ...i } = e,
          r = (0, p.useRef)(),
          { nodes: n, materials: c } = (0, p.useContext)(M);
        return (0, a.jsxs)("group", {
          ...i,
          ref: r,
          children: [
            (0, a.jsx)("mesh", {
              castShadow: !0,
              receiveShadow: !0,
              geometry: n[t].geometry,
              material: c.Texture,
            }),
            (0, a.jsx)("mesh", {
              geometry: n[o].geometry,
              children: (0, a.jsx)("meshBasicMaterial", {
                toneMapped: !1,
                children: (0, a.jsx)(u.T, {
                  width: 512,
                  height: 512,
                  attach: "map",
                  anisotropy: 16,
                  children: s,
                }),
              }),
            }),
          ],
        });
      }
      function w(e) {
        let { invert: t, x: o = 0, y: s = 1, ...i } = e,
          { textures: r } = (0, p.useContext)(M),
          { noiseTexture: n } = r,
          [c, l] = (0, p.useState)(!1),
          h = (0, p.useMemo)(() => n, [n]);
        return (0, a.jsxs)(P, {
          ...i,
          children: [
            (0, a.jsx)(f.c, {
              makeDefault: !0,
              manual: !0,
              aspect: 1,
              position: [0, 0, 15],
            }),
            (0, a.jsx)(S, { x: o, y: s, invert: t, hovered: c }),
            (0, a.jsx)(g.JO, {
              position: [o, s, 0.03],
              scale: [4, 4, 4],
              "rotation-z": Math.random() > 0.5 && Math.PI,
              children: (0, a.jsx)("meshBasicMaterial", {
                map: h,
                toneMapped: !1,
                color: "#FFF713",
                transparent: !0,
                opacity: 0.3,
                blending: j.AdditiveBlending,
              }),
            }),
            (0, a.jsx)(g.JO, {
              position: [o, s, 0.04],
              scale: [5, 5, 5],
              "rotation-z": Math.random() > 0.5 && -Math.PI / 2,
              onPointerOver: () => l(!0),
              onPointerOut: () => l(!1),
              children: (0, a.jsx)("meshBasicMaterial", {
                map: h,
                color: "#2136f6",
                transparent: !0,
                opacity: 0.6,
                toneMapped: !1,
              }),
            }),
          ],
        });
      }
      let S = (0, p.memo)((e) => {
        let { x: t, y: o, invert: s, hovered: r } = e,
          { textures: n } = (0, p.useContext)(M),
          c = (0, p.useRef)(),
          l = (0, p.useRef)(),
          h = (0, p.useRef)("logo"),
          { logoTexture: m, agents: x } = n,
          d = (0, p.useRef)(!1),
          b = (0, p.useMemo)(
            () => x[Math.floor(Math.random() * x.length)],
            [x]
          ),
          u = (0, p.useMemo)(() => b, [b]),
          f = (0, p.useRef)(Math.random()),
          O = (0, p.useRef)(0.8 * Math.random()),
          I = {
            white: new j.Color("#fff"),
            yellow: new j.Color("#FFF713"),
            blue: new j.Color("#243aff"),
            light: new j.Color("#b1b7e8"),
          },
          y = (0, p.useRef)(0);
        return (
          (0, i.F)((e) => {
            let { clock: t } = e;
            if (!c.current || !l.current || !m || !u) return;
            if (r)
              d.current ||
                ((h.current = "logo" === h.current ? "agent" : "logo"),
                (d.current = !0));
            else {
              d.current = !1;
              let e = t.getDelta();
              y.current += e;
              let o =
                0.5 + 0.5 * Math.sin(t.elapsedTime * f.current * O.current);
              (h.current = o > 0.95 ? "agent" : o > 0.7 ? "logo" : void 0),
                y.current > 0.5 && (y.current = 0);
            }
            let o = "agent" === h.current,
              a = "logo" === h.current,
              i = o ? I.white : a && s ? I.yellow : I.blue;
            c.current.set(i),
              (c.current.needsUpdate = !0),
              (l.current.visible = !!r || o || a),
              (l.current.material.map = o ? u : a ? m : void 0),
              l.current.material.color.set(o ? I.light : s ? I.blue : I.yellow),
              (l.current.needsUpdate = !0);
          }),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("color", { ref: c, attach: "background" }),
              (0, a.jsx)(g.JO, {
                ref: l,
                position: [t, o, 0],
                scale: [4, 4, 4],
                children: (0, a.jsx)("meshBasicMaterial", {
                  toneMapped: !1,
                  transparent: !0,
                }),
              }),
            ],
          })
        );
      });
      function _(e) {
        let { instances: t } = e,
          o = (0, p.useRef)(),
          { nodes: s } = (0, p.useContext)(M);
        (0, p.useMemo)(() => {
          (s.Sphere.material = new j.MeshBasicMaterial()),
            (s.Sphere.material.toneMapped = !1);
        }, []);
        let r = (0, p.useRef)(!1);
        return (
          (0, i.F)((e) => {
            r.current &&
              (o.current.children.forEach((t) => {
                let o = Math.abs(2 + t.position.x),
                  a = Math.round(
                    (1 + Math.sin(1e4 * o + e.clock.elapsedTime * o)) / 2
                  );
                t.color.setRGB(0.8 * a, 0.8 * a, 0);
              }),
              (r.current = !1));
          }),
          (0, a.jsxs)("group", {
            ref: o,
            children: [
              (0, a.jsx)(t.Sphere, {
                position: [-0.41, 1.1, -2.21],
                scale: 0.005,
                color: "#fff",
              }),
              (0, a.jsx)(t.Sphere, {
                position: [0.59, 1.32, -2.22],
                scale: 0.005,
                color: "#fff",
              }),
              (0, a.jsx)(t.Sphere, {
                position: [1.77, 1.91, -1.17],
                scale: 0.005,
                color: "#fff",
              }),
              (0, a.jsx)(t.Sphere, {
                position: [2.44, 1.1, -0.79],
                scale: 0.005,
                color: "#fff",
              }),
              (0, a.jsx)(t.Sphere, {
                position: [4.87, 3.8, -0.1],
                scale: 0.005,
                color: "#fff",
              }),
              (0, a.jsx)(t.Sphere, {
                position: [1.93, 3.8, -3.69],
                scale: 0.005,
                color: "#fff",
              }),
              (0, a.jsx)(t.Sphere, {
                position: [-2.35, 3.8, -3.48],
                scale: 0.005,
                color: "#fff",
              }),
              (0, a.jsx)(t.Sphere, {
                position: [-4.71, 4.59, -1.81],
                scale: 0.005,
                color: "#fff",
              }),
              (0, a.jsx)(t.Sphere, {
                position: [-3.03, 2.85, 1.19],
                scale: 0.005,
                color: "#fff",
              }),
              (0, a.jsx)(t.Sphere, {
                position: [-1.21, 1.73, -1.49],
                scale: 0.005,
                color: "#fff",
              }),
            ],
          })
        );
      }
      var v = o(58184),
        T = o(5481),
        k = o.n(T),
        R = o(8465);
      function F(e) {
        let { bg: t } = e,
          { theme: o } = k()(R.Z),
          { colors: s } = o,
          r = (0, p.useRef)(),
          n = (0, v.hA)();
        return (
          (0, i.F)((e) => {
            let { clock: t } = e,
              o = t.getElapsedTime(),
              a = 0.8 * n(0.5 * o, o) + 0.2;
            r.current.intensity = a;
          }),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("hemisphereLight", {
                intensity: 0.3,
                groundColor: t ? s.zinc[600] : s.blue[600],
              }),
              (0, a.jsx)("ambientLight", {
                color: t ? s.zinc[500] : s.blue[700],
                intensity: 0.5,
              }),
              (0, a.jsx)("spotLight", {
                color: "#3245F9",
                ref: r,
                decay: 0,
                position: [10, 20, 10],
                angle: 0.12,
                penumbra: 1,
                intensity: 1,
                castShadow: !0,
                "shadow-mapSize": 1024,
              }),
            ],
          })
        );
      }
      var C = o(44839),
        z = o(54994);
      function D(e) {
        let { bg: t = !1 } = e,
          o = (0, z.d)(),
          [i, h] = (0, p.useState)(1.5);
        return (0, a.jsx)("div", {
          className: (0, C.Z)(
            "canvas-wrapper",
            t
              ? "opacity-60"
              : "border-b border-zinc-900 opacity-80 shadow-[0_96px_96px_rgba(0,0,0,1)]"
          ),
          children: (0, a.jsx)(p.Suspense, {
            fallback: null,
            children: (0, a.jsxs)(s.Xz, {
              frameloop: t ? "demand" : "always",
              shadows: !0,
              dpr: i,
              camera: {
                position: [0.4, 1, t ? 5 : 8],
                fov: 45,
                near: 1,
                far: 20,
              },
              eventPrefix: "client",
              className:
                "canvas canvas--monitors animate-[fadeIn_3s_ease-in-out_forwards] opacity-0",
              children: [
                (0, a.jsx)(F, { bg: t }),
                (0, a.jsxs)("group", {
                  position: [-0.1, -1.18, 0],
                  children: [
                    (0, a.jsx)(I, {
                      bg: t,
                      isMobile: o,
                      children: (0, a.jsx)(y, { scale: 0.5, bg: t }),
                    }),
                    (0, a.jsxs)("mesh", {
                      receiveShadow: !0,
                      rotation: [-Math.PI / 2, 0, 0],
                      children: [
                        (0, a.jsx)("planeGeometry", { args: [50, 50] }),
                        (0, a.jsx)(r.Q, {
                          blur: [300, 30],
                          resolution: 2048,
                          mixBlur: 1,
                          mixStrength: 180,
                          roughness: 1,
                          depthScale: 1.2,
                          minDepthThreshold: 0.4,
                          maxDepthThreshold: 1.4,
                          color: "#00041e",
                          metalness: 0.8,
                        }),
                      ],
                    }),
                    (0, a.jsx)("pointLight", {
                      distance: 1.5,
                      intensity: t ? 0.3 : 1,
                      position: [-0.15, 0.7, 0],
                      color: "#3245F9",
                    }),
                  ],
                }),
                !t && (0, a.jsx)(E, {}),
                (0, a.jsx)(n.P, {}),
                (0, a.jsx)(c.E, {}),
                (0, a.jsx)(l.A, {
                  onIncline: () => h(2),
                  onDecline: () => h(1),
                }),
              ],
            }),
          }),
        });
      }
      function E() {
        (0, i.F)((e, t) => {
          h.Ui.damp3(
            e.camera.position,
            [(e.pointer.x * e.viewport.width) / 50, (1 + e.pointer.y) / 10, 5],
            0.5,
            t
          ),
            e.camera.lookAt(0, 0, 0);
        });
      }
    },
    12196: function (e, t, o) {
      o.d(t, {
        O: function () {
          return a;
        },
      });
      let a = {
        blue: {
          50: "#e1e0e9",
          100: "#deeaff",
          200: "#c4d8ff",
          300: "#a0beff",
          400: "#7a98ff",
          500: "#4354ff",
          600: "#3245f9",
          700: "#2f38d3",
          800: "#2932aa",
          900: "#293286",
          950: "#181b4e",
        },
        yellow: {
          50: "#fdfee8",
          100: "#fffb8a",
          200: "#fff713",
          300: "#fef536",
          400: "#fbe714",
          500: "#ebce07",
          600: "#cba103",
          700: "#a27406",
          800: "#865b0d",
          900: "#724a11",
          950: "#422706",
        },
        slate: { 600: "#5f7386" },
      };
    },
    8465: function (e, t, o) {
      let a = {
        content: [
          "./app/**/*.{js,ts,jsx,tsx,mdx}",
          "./src/**/*.{js,ts,jsx,tsx,mdx}",
        ],
        theme: {
          extend: {
            colors: { ...o(12196).O },
            boxShadow: {
              blueGlow:
                "0_0_120px_8px_#4354ff33,0_0_12px_1px_#4354ff33,0_16px_24px_rgba(0,0,0,0.9)",
            },
            fontFamily: {
              primary: "var(--next-font-ibm-plex-sans), sans-serif",
              monospace: "var(--next-font-ibm-plex-mono), monospace",
            },
            animation: {
              fadeIn: "fadeIn 0.25s ease-in-out forwards",
              popIn: "popIn 0.4s ease-in-out forwards",
              blink: "blink 0.75s infinite",
              slideInRight: "slideInRight 1s ease-in-out forwards",
              reset: "reset 0.5s",
              scroll: "scroll 30s linear infinite",
            },
            keyframes: {
              fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
              popIn: {
                "0%": { opacity: "0", transform: "translateY(100%)" },
                "100%": { opacity: "1", transform: "translateY(0%)" },
              },
              blink: { "0%, 100%": { opacity: "0" }, "50%": { opacity: "1" } },
              slideInRight: {
                "0%": { transform: "translateX(200%)" },
                "100%": { transform: "translateY(0%)" },
              },
              reset: {
                "0%": { transform: "scale(1) rotate(0deg)" },
                "80%": { transform: "scale(1) rotate(360deg)" },
                "90%": { transform: "scale(1.5) rotate(360deg)" },
                "100%": { transform: "scale(1) rotate(360deg)" },
              },
              scroll: {
                "0%": { transform: "translateX(0%)" },
                "100%": { transform: "translateX(calc(-100% - 0.75rem))" },
              },
            },
            typography: (e) => {
              let { theme: t } = e;
              return {
                dark: {
                  css: {
                    color: t("colors.zinc.300"),
                    fontSize: 18,
                    fontWeight: 300,
                    h2: {
                      fontWeight: 500,
                      textTransform: "uppercase",
                      color: t("colors.white"),
                    },
                    h3: {
                      fontWeight: 500,
                      textTransform: "uppercase",
                      color: t("colors.white"),
                    },
                    h4: {
                      fontWeight: 500,
                      textTransform: "uppercase",
                      color: t("colors.white"),
                    },
                    p: {
                      marginTop: "1em",
                      marginBottom: "1em",
                      lineHeight: t("lineHeight.relaxed"),
                    },
                    a: {
                      color: t("colors.yellow.300"),
                      textDecoration: "underline",
                      textUnderlineOffset: 2,
                      transition: "all 0.2s ease-in-out",
                      "&:hover": {
                        color: t("colors.blue.600"),
                        textUnderlineOffset: 4,
                      },
                    },
                    strong: { color: "inherit" },
                    blockquote: {
                      borderLeftColor: t("colors.blue.600"),
                      color: t("colors.gray.300"),
                      fontStyle: "italic",
                      fontWeight: 300,
                      fontSize: 20,
                      lineHeight: t("lineHeight.normal"),
                      paddingInlineStart: 20,
                    },
                    ".kg-callout-card": {
                      display: "flex",
                      borderRadius: "0 8px 8px 0",
                      background: t("colors.blue.600 / 10%"),
                      borderLeft: "4px solid ".concat(t("colors.blue.600")),
                      padding: t("spacing.4"),
                      " > :nth-child(2)": { marginLeft: t("spacing.2") },
                    },
                    ".kg-image-card": {
                      clear: "both",
                      marginLeft: "auto",
                      marginRight: "auto",
                      " > .kg-image": {
                        maxHeight: "60vh",
                        objectFit: "contain",
                      },
                    },
                  },
                },
              };
            },
          },
        },
        plugins: [o(21466), o(80810)],
      };
      t.Z = a;
    },
  },
]);
