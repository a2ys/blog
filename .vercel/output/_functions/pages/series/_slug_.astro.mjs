/* empty css                                    */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DZhOXvXB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_C5Uy0frV.mjs';
import { $ as $$BlogCard } from '../../chunks/BlogCard_DDJT3K_Y.mjs';
import { g as getEntry, a as getCollection } from '../../chunks/_astro_content_EEn96JrV.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (!slug) throw new Error("Series slug is missing");
  const seriesEntry = await getEntry("series", slug);
  if (!seriesEntry) throw new Error(`Series not found for slug: ${slug}`);
  const allPosts = await getCollection("blog");
  const authors = await getCollection("author");
  const seriesPosts = allPosts.filter((post) => post.data.series && post.data.series.id === slug).sort((a, b) => {
    if (a.data.seriesOrder !== void 0 && b.data.seriesOrder !== void 0) {
      return a.data.seriesOrder - b.data.seriesOrder;
    }
    if (a.data.seriesOrder !== void 0) return -1;
    if (b.data.seriesOrder !== void 0) return 1;
    return new Date(a.data.date).getTime() - new Date(b.data.date).getTime();
  });
  const { Content } = await seriesEntry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${seriesEntry.data.name} \u2022 Blog Series`, "description": seriesEntry.data.description, "ogimage": seriesEntry.data.coverImage }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-12 py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden"> <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div> <div class="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[60%] mx-auto relative text-center"> ${seriesEntry.data.coverImage && renderTemplate`<img${addAttribute(seriesEntry.data.coverImage, "src")}${addAttribute(seriesEntry.data.name, "alt")} class="w-full max-w-md mx-auto h-auto rounded-xl mb-8 object-cover shadow-2xl">`} <h1 class="text-5xl max-[371px]:text-3xl font-black leading-tight tracking-tight"> ${seriesEntry.data.name} </h1> <p class="text-lg sm:text-xl mt-4 text-slate-200"> ${seriesEntry.data.description} </p> </div> </div> <div class="w-[80%] lg:w-[75%] xl:w-[70%] mx-auto"> <div class="text-slate-800"> <div class="post-body mb-12"> ${renderComponent($$result2, "Content", Content, {})} </div> <div class="text-center text-slate-600 text-sm uppercase tracking-widest mb-4"> ${seriesPosts.filter((post) => !post.data.draft).length} Articles in this
        Series
</div> <h2 class="text-3xl font-bold text-center mb-8">Reading Order</h2> <p class="text-lg text-slate-700 text-center mb-12">
Follow along in order for the best learning experience, or jump to any
        article that interests you.
</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${seriesPosts.filter((post) => !post.data.draft).map((post, index) => {
    const authorData = authors.find(
      (a) => a.slug === post.data.author.id
    );
    const displayOrder = post.data.seriesOrder || index + 1;
    return renderTemplate`<div class="relative"> <div class="absolute -top-2 -left-2 bg-slate-800 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold z-10 shadow-lg border-2 border-white"> ${displayOrder} </div> ${renderComponent($$result2, "BlogCard", $$BlogCard, { "title": post.data.title, "author": authorData?.data.name || "Unknown Author", "authorAvatar": authorData?.data.avatar || "", "authorProfileLink": `/author/${authorData?.slug || "#"}`, "date": post.data.date, "imageSrc": post.data.thumbnail, "slug": post.slug })} </div>`;
  })} </div> <div class="text-center mt-16"> <h3 class="text-2xl font-semibold mb-4">More Series</h3> <p class="text-lg text-slate-700 mb-8">
Looking for more comprehensive guides and learning paths?
</p> <a href="/series" class="inline-block px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200 font-medium">
Browse All Series
</a> </div> </div> </div> ` })}`;
}, "/home/runner/work/blog/blog/src/pages/series/[slug].astro", void 0);

const $$file = "/home/runner/work/blog/blog/src/pages/series/[slug].astro";
const $$url = "/series/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
