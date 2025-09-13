/* empty css                                 */
import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent, F as Fragment } from '../chunks/astro/server_DZhOXvXB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_C5Uy0frV.mjs';
import { a as getCollection } from '../chunks/_astro_content_EEn96JrV.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$SeriesCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SeriesCard;
  const { name, abbreviation, description, slug } = Astro2.props;
  function getSeriesColor(name2) {
    const colors = [
      "bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200",
      "bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200",
      "bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200",
      "bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200",
      "bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-200",
      "bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200",
      "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200",
      "bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-200"
    ];
    if (!name2) return colors[0];
    let hash = 0;
    for (let i = 0; i < name2.length; i++) {
      const char = name2.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return colors[Math.abs(hash) % colors.length];
  }
  const colorClass = getSeriesColor(abbreviation || name);
  const initials = abbreviation.toUpperCase();
  return renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full border border-gray-200 dark:border-slate-700"> <a${addAttribute(`/series/${slug}`, "href")} class="block flex-grow"> <div${addAttribute(`h-24 flex items-center justify-center ${colorClass}`, "class")}> <div class="flex items-center justify-center"> <span class="text-3xl font-bold">${initials}</span> </div> </div> <div class="p-6 flex flex-col flex-grow"> <h2 class="text-gray-900 dark:text-white text-xl font-bold mb-2 border-b pb-2 border-gray-200 dark:border-slate-600"> ${name} </h2> ${description && renderTemplate`<p class="text-gray-700 dark:text-slate-300 mb-4 line-clamp-3 flex-grow"> ${description} </p>`} </div> </a> </div>`;
}, "/home/runner/work/blog/blog/src/components/SeriesCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const series = await getCollection("series");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Series \u2022 Savant", "description": "Explore our curated series of articles on various topics." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-12 py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden"> <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div> <div class="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[60%] mx-auto relative text-center"> <h1 class="text-5xl max-[371px]:text-3xl font-black leading-tight tracking-tight">
Series
</h1> <p class="text-lg sm:text-xl mt-4 text-slate-200">
Explore our curated collections of related articles.
</p> </div> </div> <div class="py-16 justify-center items-center flex flex-col w-[80%] xl:w-[75%] mx-auto"> <div class="text-slate-800"> <div class="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[60%] xl:w-[50%] mx-auto"> <h2 class="text-3xl font-bold mb-4">Deep Dives & Collections</h2> <p class="text-lg text-slate-700 mb-8">
Sometimes one article isn't enough to cover a topic completely. Our
          series bring together related articles that build on each other,
          creating comprehensive guides and learning paths.
</p> <p class="text-lg text-slate-700 mb-12">
Whether you're following along step-by-step or jumping to specific
          topics, these collections make it easy to dive deep into subjects that
          matter.
</p> <hr class="border-t border-slate-300 my-12"> </div> ${series.length === 0 ? renderTemplate`<div class="text-center py-16"> <div class="text-center text-slate-600 text-sm uppercase tracking-widest mb-4">
Coming Soon
</div> <h3 class="text-2xl font-semibold mb-4">No Series Yet</h3> <p class="text-lg text-slate-700 mb-8">
We're working on creating comprehensive series that will help you
              learn topics from start to finish. Check back soon for our first
              collections!
</p> <a href="/articles" class="inline-block px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200 font-medium">
Browse Individual Articles
</a> </div>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <div class="text-center text-slate-600 text-sm uppercase tracking-widest mb-8">
Available Series
</div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"> ${series.map((item) => renderTemplate`${renderComponent($$result3, "SeriesCard", $$SeriesCard, { "name": item.data.name, "abbreviation": item.data.abbreviation || "", "description": item.data.description || "", "slug": item.slug })}`)} </div> ` })}`} <div class="text-center mt-16 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[60%] xl:w-[50%] mx-auto"> <h3 class="text-2xl font-semibold mb-4">Have an Idea for a Series?</h3> <p class="text-lg text-slate-700 mb-8">
Think there's a topic that deserves a multi-part deep dive? We'd love
          to hear your suggestions for new series or collaborate on creating
          one.
</p> <a href="https://github.com/a2ys/blog" class="inline-block px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200 font-medium">
Suggest on GitHub
</a> </div> </div> </div> ` })}`;
}, "/home/runner/work/blog/blog/src/pages/series/index.astro", void 0);

const $$file = "/home/runner/work/blog/blog/src/pages/series/index.astro";
const $$url = "/series";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
