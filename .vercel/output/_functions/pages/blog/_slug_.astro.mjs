/* empty css                                    */
import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent } from '../../chunks/astro/server_DZhOXvXB.mjs';
import 'kleur/colors';
import 'clsx';
import { f as formatDate } from '../../chunks/dateFormat_BuBUVSYw.mjs';
import { $ as $$Layout } from '../../chunks/Layout_C5Uy0frV.mjs';
import { g as getEntry } from '../../chunks/_astro_content_EEn96JrV.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Author = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Author;
  const { slug, avatar, name, date, minutesRead } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center mt-6 group"> <a${addAttribute(`/author/${slug}`, "href")} class="flex-shrink-0"> <img${addAttribute(`/authors/${avatar}`, "src")}${addAttribute(`${name}'s avatar`, "alt")} class="w-12 h-12 max-[371px]:w-10 max-[371px]:h-10 rounded-full ring-2 ring-white/20 shadow-lg object-cover hover:scale-105 transition-transform duration-200"> </a> <div class="ml-3 min-w-0 flex-1"> <a${addAttribute(`/author/${slug}`, "href")} class="block text-lg font-semibold max-[371px]:text-base max-sm:text-base text-white/95 hover:text-white transition-colors duration-200 leading-tight"> ${name} </a> <div class="flex items-center mt-1 text-sm text-white/70 monospace-font max-sm:text-xs italic"> <span class="tracking-wide">${formatDate(date)}</span> <span class="mx-2 opacity-50">•</span> <span class="tracking-wide">${minutesRead}</span> </div> </div> </div>`;
}, "/home/runner/work/blog/blog/src/components/Author.astro", void 0);

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (!slug) {
    throw new Error("Slug is missing.");
  }
  const entry = await getEntry("blog", slug);
  if (!entry) {
    throw new Error(`Post not found for slug: ${slug}`);
  }
  const authorEntry = await getEntry("author", entry.data.author.id);
  if (!authorEntry) {
    throw new Error(`Author not found for reference: ${entry.data.author.id}`);
  }
  const { Content, remarkPluginFrontmatter } = await entry.render();
  if (!entry) {
    throw new Error(`Post not found for slug: ${slug}`);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${entry.data.title} \u2022 Savant`, "ogimage": entry.data.thumbnail, "description": entry.data.description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-12 py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden"> <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div> <div class="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[60%] mx-auto relative"> <h1 class="text-5xl max-[371px]:text-3xl font-black leading-tight tracking-tight"> ${entry.data.title} </h1> ${renderComponent($$result2, "Author", $$Author, { "slug": entry.data.author.id, "avatar": authorEntry.data.avatar, "name": authorEntry.data.name, "date": entry.data.date, "minutesRead": remarkPluginFrontmatter.minutesRead })} </div> </div> <div class="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[60%] xl:w-[50%] mx-auto"> <div class="post-body"> ${renderComponent($$result2, "Content", Content, {})} </div> </div> ` })} `;
}, "/home/runner/work/blog/blog/src/pages/blog/[slug].astro", void 0);

const $$file = "/home/runner/work/blog/blog/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
