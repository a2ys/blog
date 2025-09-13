import 'kleur/colors';
import { k as decodeKey } from './chunks/astro/server_DZhOXvXB.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_jcSoiMGp.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/runner/work/blog/blog/","cacheDir":"file:///home/runner/work/blog/blog/node_modules/.astro/","outDir":"file:///home/runner/work/blog/blog/dist/","srcDir":"file:///home/runner/work/blog/blog/src/","publicDir":"file:///home/runner/work/blog/blog/public/","buildClientDir":"file:///home/runner/work/blog/blog/dist/client/","buildServerDir":"file:///home/runner/work/blog/blog/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DUG9v_64.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DUG9v_64.css"},{"type":"inline","content":".text-link{border-bottom-width:1px;border-style:dotted;--tw-border-opacity: 1;border-bottom-color:rgb(37 99 235 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(37 99 235 / var(--tw-text-opacity, 1));transition:all .2s ease}.text-link:hover{--tw-border-opacity: 1;border-bottom-color:rgb(30 64 175 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(30 64 175 / var(--tw-text-opacity, 1))}\n"}],"routeData":{"route":"/about","isIndex":true,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about/index.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DUG9v_64.css"},{"type":"inline","content":"a[data-astro-cid-e3grugc2]{cursor:url(/read.cur),pointer}\n"}],"routeData":{"route":"/author/[slug]","isIndex":false,"type":"page","pattern":"^\\/author\\/([^/]+?)\\/?$","segments":[[{"content":"author","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/author/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DUG9v_64.css"}],"routeData":{"route":"/authors","isIndex":true,"type":"page","pattern":"^\\/authors\\/?$","segments":[[{"content":"authors","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/authors/index.astro","pathname":"/authors","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DUG9v_64.css"},{"type":"external","src":"/_astro/_slug_.Cg682nUw.css"}],"routeData":{"route":"/blog/[slug]","isIndex":false,"type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blog/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DUG9v_64.css"},{"type":"inline","content":"a[data-astro-cid-e3grugc2]{cursor:url(/read.cur),pointer}\n"}],"routeData":{"route":"/posts","isIndex":true,"type":"page","pattern":"^\\/posts\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/index.astro","pathname":"/posts","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DUG9v_64.css"},{"type":"inline","content":".text-link{border-bottom-width:1px;border-style:dotted;--tw-border-opacity: 1;border-bottom-color:rgb(37 99 235 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(37 99 235 / var(--tw-text-opacity, 1));transition:all .2s ease}.text-link:hover{--tw-border-opacity: 1;border-bottom-color:rgb(30 64 175 / var(--tw-border-opacity, 1));--tw-text-opacity: 1;color:rgb(30 64 175 / var(--tw-text-opacity, 1))}\n"}],"routeData":{"route":"/privacy","isIndex":true,"type":"page","pattern":"^\\/privacy\\/?$","segments":[[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy/index.astro","pathname":"/privacy","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DUG9v_64.css"},{"type":"inline","content":"a[data-astro-cid-e3grugc2]{cursor:url(/read.cur),pointer}\n"}],"routeData":{"route":"/series/[slug]","isIndex":false,"type":"page","pattern":"^\\/series\\/([^/]+?)\\/?$","segments":[[{"content":"series","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/series/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DUG9v_64.css"}],"routeData":{"route":"/series","isIndex":true,"type":"page","pattern":"^\\/series\\/?$","segments":[[{"content":"series","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/series/index.astro","pathname":"/series","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DUG9v_64.css"},{"type":"inline","content":"a[data-astro-cid-e3grugc2]{cursor:url(/read.cur),pointer}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/runner/work/blog/blog/src/components/FeaturedPosts.astro",{"propagation":"in-tree","containsHead":false}],["/home/runner/work/blog/blog/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/runner/work/blog/blog/src/components/RecentPosts.astro",{"propagation":"in-tree","containsHead":false}],["/home/runner/work/blog/blog/src/pages/author/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/author/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/runner/work/blog/blog/src/pages/authors/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/authors/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/runner/work/blog/blog/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/runner/work/blog/blog/src/pages/posts/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/posts/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/runner/work/blog/blog/src/pages/series/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/series/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/runner/work/blog/blog/src/pages/series/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/series/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/runner/work/blog/blog/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/blog/blog/src/pages/about/index.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/blog/blog/src/pages/privacy/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about/index@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/author/[slug]@_@astro":"pages/author/_slug_.astro.mjs","\u0000@astro-page:src/pages/authors/index@_@astro":"pages/authors.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/posts/index@_@astro":"pages/posts.astro.mjs","\u0000@astro-page:src/pages/privacy/index@_@astro":"pages/privacy.astro.mjs","\u0000@astro-page:src/pages/series/[slug]@_@astro":"pages/series/_slug_.astro.mjs","\u0000@astro-page:src/pages/series/index@_@astro":"pages/series.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BRJWv2Gh.mjs","/home/runner/work/blog/blog/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DXnxYnWm.mjs","/home/runner/work/blog/blog/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/home/runner/work/blog/blog/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_D49t75R3.mjs","/home/runner/work/blog/blog/src/components/Navbar":"_astro/Navbar.Dik7MHcQ.js","@astrojs/react/client.js":"_astro/client.CimA0ymp.js","/home/runner/work/blog/blog/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.U4jOVs4w.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_slug_.Cg682nUw.css","/_astro/index.DUG9v_64.css","/favicon.webp","/og.webp","/placeholder.webp","/read.cur","/read.png","/read.svg","/robots.txt","/sitemap.xml","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.U4jOVs4w.js","/_astro/Navbar.Dik7MHcQ.js","/_astro/client.CimA0ymp.js","/_astro/index._OACqPSs.js","/authors/aayushshukla.webp","/thumbnails/algorithmic-analysis.webp","/thumbnails/arrays.png","/thumbnails/celeris.png","/thumbnails/contributing-to-github-repositories.png","/thumbnails/dsa-intro.webp","/thumbnails/multitasking-intro.png","/thumbnails/os-context-switching.png","/thumbnails/os-interrupts.png","/thumbnails/os-intro.png","/thumbnails/os-scheduling.png","/thumbnails/os-threads-vs-processes.png","/thumbnails/process-vs-programs.png","/thumbnails/scheduling-intro.png","/thumbnails/system-calls-c-examples.png","/thumbnails/system-calls.png","/thumbnails/toc-finite-automata.png","/thumbnails/toc-intro.png","/thumbnails/toc-proofs.png","/thumbnails/toc-the-brains.png","/blog-assets/celeris/architecture-second-iteration.jpg","/blog-assets/celeris/celeris-database.png","/blog-assets/celeris/final-architecture.jpg","/blog-assets/celeris/frontend-architecture.jpg","/blog-assets/celeris/our-team.jpg","/blog-assets/celeris/upi_server.jpg","/blog-assets/celeris/very-first-architecture.jpg","/blog-assets/git-and-github/add-title-and-description.png","/blog-assets/git-and-github/clone-repo.png","/blog-assets/git-and-github/comparing-changes.png","/blog-assets/git-and-github/empty-repo.png","/blog-assets/git-and-github/fork-button.png","/blog-assets/git-and-github/new-pull-request.png","/blog-assets/git-and-github/remote-repository.png","/blog-assets/git-and-github/terminal-messages.png"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"nx0TMi8v5TjotY7CymIpRlWi0J/RDn6zMqMcnDJaYL4="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
