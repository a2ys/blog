import { c as createComponent, b as createAstro, d as addAttribute, h as renderScript, a as renderTemplate, m as maybeRenderHead, r as renderComponent, F as Fragment, i as renderHead, j as renderSlot } from './astro/server_DZhOXvXB.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { jsxs, jsx, Fragment as Fragment$1 } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/runner/work/blog/blog/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/blog/blog/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const footerLinks = {
    GitHub: "https://github.com/a2ys",
    Twitter: "https://x.com/unreal_sapien",
    LinkedIn: "https://linkedin.com/in/a2ys"
  };
  return renderTemplate`${maybeRenderHead()}<footer class="relative mt-20 py-12 px-8 sm:px-16 bg-gradient-to-t from-gray-900 via-slate-800 to-slate-700 text-white"> <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-400/30 to-transparent"></div> <div class="max-w-7xl mx-auto"> <div class="flex flex-col items-center space-y-6"> <div class="flex flex-col sm:flex-row items-center text-lg text-slate-200 font-medium"> <span class="text-center sm:text-left">A blog by</span> <a href="https://a2ys.dev" class="mt-1 sm:mt-0 sm:ml-2 text-white hover:text-blue-300 transition-colors duration-300 ease-out font-semibold">
Aayush Shukla
</a> </div> <div class="flex items-center space-x-6 text-slate-300"> ${Object.entries(footerLinks).map(([name, url], index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a${addAttribute(url, "href")} class="relative text-lg font-medium text-slate-200 hover:text-white transition-all duration-300 ease-out group"${addAttribute(name, "aria-label")}> ${name} <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 transition-all duration-300 ease-out group-hover:w-full"></span> </a> ${index < Object.entries(footerLinks).length - 1 && renderTemplate`<div class="w-1 h-1 bg-slate-500 rounded-full"></div>`}` })}`)} </div> </div> </div> <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-400/20 to-transparent"></div> </footer>`;
}, "/home/runner/work/blog/blog/src/components/Footer.astro", void 0);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    console.log("Menu state changed:", isMenuOpen);
  }, [isMenuOpen]);
  return /* @__PURE__ */ jsxs("div", { className: "relative z-50 py-6 px-8 sm:px-16 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white border-b border-slate-700/50 backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-400/30 to-transparent" }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-lg sm:text-xl md:text-2xl max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "blog-headers font-bold", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://a2ys.dev",
            className: "hover:text-blue-300 transition-colors duration-300 ease-out",
            children: "a2ys"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "px-2 font-light text-slate-400", children: "/" }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/",
            className: "hover:text-blue-300 transition-colors duration-300 ease-out",
            children: "Savant"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "space-x-8 max-[640px]:hidden", children: ["Posts", "Series", "Authors", "Privacy", "About"].map((item) => /* @__PURE__ */ jsxs(
        "a",
        {
          href: `/${item.toLowerCase()}`,
          className: "relative text-lg font-medium text-slate-200 hover:text-white transition-all duration-300 ease-out group",
          children: [
            item,
            /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 transition-all duration-300 ease-out group-hover:w-full" })
          ]
        },
        item
      )) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "min-[640px]:hidden p-2 hover:bg-slate-700/50 rounded-lg transition-colors duration-200",
          onClick: () => setIsMenuOpen((prev) => !prev),
          "aria-label": "Toggle menu",
          children: /* @__PURE__ */ jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: `transition-transform duration-300 ease-in-out ${isMenuOpen ? "rotate-90" : "rotate-0"}`,
              children: isMenuOpen ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
                /* @__PURE__ */ jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                /* @__PURE__ */ jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
              ] }) : /* @__PURE__ */ jsxs(Fragment$1, { children: [
                /* @__PURE__ */ jsx("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
                /* @__PURE__ */ jsx("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
                /* @__PURE__ */ jsx("line", { x1: "3", y1: "18", x2: "21", y2: "18" })
              ] })
            }
          )
        }
      )
    ] }),
    isMenuOpen && /* @__PURE__ */ jsx("div", { className: "absolute top-full left-0 right-0 z-50 bg-gradient-to-b from-slate-800 to-gray-900 border-b border-slate-700/50 backdrop-blur-sm shadow-xl", children: /* @__PURE__ */ jsx("div", { className: "p-6 space-y-4 max-w-7xl mx-auto z-50", children: ["Posts", "Series", "Authors", "Privacy", "About"].map(
      (item, index) => /* @__PURE__ */ jsx(
        "a",
        {
          href: `/${item.toLowerCase()}`,
          className: "block text-lg font-medium text-slate-200 hover:text-white hover:translate-x-2 transition-all duration-300 ease-out",
          onClick: () => setIsMenuOpen(false),
          children: item
        },
        item
      )
    ) }) })
  ] });
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$PostHog = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<script>\n  !(function (t, e) {\n    var o, n, p, r;\n    e.__SV ||\n      ((window.posthog = e),\n      (e._i = []),\n      (e.init = function (i, s, a) {\n        function g(t, e) {\n          var o = e.split(".");\n          2 == o.length && ((t = t[o[0]]), (e = o[1])),\n            (t[e] = function () {\n              t.push([e].concat(Array.prototype.slice.call(arguments, 0)));\n            });\n        }\n        ((p = t.createElement("script")).type = "text/javascript"),\n          (p.crossOrigin = "anonymous"),\n          (p.async = !0),\n          (p.src =\n            s.api_host.replace(".i.posthog.com", "-assets.i.posthog.com") +\n            "/static/array.js"),\n          (r = t.getElementsByTagName("script")[0]).parentNode.insertBefore(\n            p,\n            r\n          );\n        var u = e;\n        for (\n          void 0 !== a ? (u = e[a] = []) : (a = "posthog"),\n            u.people = u.people || [],\n            u.toString = function (t) {\n              var e = "posthog";\n              return (\n                "posthog" !== a && (e += "." + a), t || (e += " (stub)"), e\n              );\n            },\n            u.people.toString = function () {\n              return u.toString(1) + ".people (stub)";\n            },\n            o =\n              "init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(\n                " "\n              ),\n            n = 0;\n          n < o.length;\n          n++\n        )\n          g(u, o[n]);\n        e._i.push([i, s, a]);\n      }),\n      (e.__SV = 1));\n  })(document, window.posthog || []);\n  posthog.init("phc_dWv5aSnWifIB09yuN5jWLyVCvpubwVHU6DZeQayEXYj", {\n    api_host: "https://us.i.posthog.com",\n    person_profiles: "identified_only",\n  });\n<\/script>'])));
}, "/home/runner/work/blog/blog/src/components/PostHog.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, ogimage, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><!-- Base Meta Tags --><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.webp"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Author Information --><meta name="author" content="Aayush Shukla"><meta name="description" content="Savant, a community blog."><!-- Open Graph Meta Tags --><meta property="og:title"${addAttribute(title || "Savant", "content")}><meta property="og:description"${addAttribute(description || "A community blog", "content")}><meta property="og:type" content="blog"><meta property="og:image"${addAttribute(ogimage || "https://blog.a2ys.dev/og.webp", "content")}><meta property="og:url" content="https://blog.a2ys.dev"><meta property="og:site_name" content="Savant - A community blog"><meta property="og:locale" content="en_US"><meta property="og:image:width" content="7680"><meta property="og:image:height" content="4320"><!-- Twitter Card Tags --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@unreal_sapien"><meta name="twitter:title" content="Savant"><meta name="twitter:description" content="A community blog"><meta name="twitter:image" content="https://blog.a2ys.dev/og.webp"><!-- Other Meta Tags --><meta name="keywords" content="Savant, Savant blog, Savant community, Savant collaboration, a2ys, a2ys Savant, knowledge sharing, a2ys blog, tech blog, developer community, open-source articles, contribute to Savant, Savant GitHub, Savant authors, a2ys developer, collaborative blog, tech insights, programming articles, coding tutorials, a2ys projects, Savant platform, a2ys articles, tech contributions, Savant knowledge base, Savant open-source blog, developer knowledge sharing, learn with Savant, a2ys resources, Savant for developers"><!-- Font Imports --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"><!-- KaTeX --><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css" integrity="sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+" crossorigin="anonymous"><title>${title || "Blog"}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderComponent($$result, "Posthog", $$PostHog, {})}${renderHead()}</head> <body class="min-h-[100vh] flex flex-col"> ${renderComponent($$result, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/work/blog/blog/src/components/Navbar", "client:component-export": "default" })} <div class="flex-grow"> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/runner/work/blog/blog/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
