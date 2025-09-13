/* empty css                                    */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DZhOXvXB.mjs';
import 'kleur/colors';
import { $ as $$BlogCard } from '../../chunks/BlogCard_DDJT3K_Y.mjs';
import { $ as $$Layout } from '../../chunks/Layout_C5Uy0frV.mjs';
import { g as getEntry, a as getCollection } from '../../chunks/_astro_content_EEn96JrV.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (!slug) {
    throw new Error("Slug is missing.");
  }
  const entry = await getEntry({ collection: "author", id: slug });
  if (!entry) {
    throw new Error(`Author not found for slug: ${slug}`);
  }
  const blogPosts = await getCollection("blog");
  const authorPosts = blogPosts.filter((post) => post.data.author.id === slug).sort((a, b) => {
    const dateA = new Date(a.data.date).getTime() || 0;
    const dateB = new Date(b.data.date).getTime() || 0;
    return dateB - dateA;
  });
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${entry.data.name}, Author \u2022 Savant`, "ogimage": `/authors${entry.data.avatar}`, "description": entry.data.bio }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-16 flex flex-col items-center text-center w-[90%] sm:w-[75%] md:w-[60%] lg:w-[50%] mx-auto"> <img class="object-cover w-60 md:w-40 h-auto rounded-lg"${addAttribute(`/authors/${entry.data.avatar}`, "src")} alt="Author Image"> <h1 class="text-4xl sm:text-5xl font-black mt-10">${entry.data.name}</h1> <p class="text-lg sm:text-xl mt-4">${entry.data.bio}</p> <hr class="border-t-2 border-gray-300 w-1/4 mx-auto mt-8 mb-8"> <div class="flex flex-row space-x-6 sm:space-x-8"> ${entry.data.email && renderTemplate`<a${addAttribute(`mailto:${entry.data.email}`, "href")}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"> <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path> <polyline points="22,6 12,13 2,6"></polyline> </svg> </a>`} ${entry.data.twitter && renderTemplate`<a${addAttribute(`https://x.com/${entry.data.twitter}`, "href")}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"> <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path> </svg> </a>`} ${entry.data.github && renderTemplate`<a${addAttribute(`https://github.com/${entry.data.github}`, "href")}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"> <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path> </svg> </a>`} ${entry.data.linkedin && renderTemplate`<a${addAttribute(`https://linkedin.com/in/${entry.data.linkedin}`, "href")}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"> <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path> <rect x="2" y="9" width="4" height="12"></rect> <circle cx="4" cy="4" r="2"></circle> </svg> </a>`} ${entry.data.website && renderTemplate`<a${addAttribute(entry.data.website, "href")}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe"> <circle cx="12" cy="12" r="10"></circle> <line x1="2" y1="12" x2="22" y2="12"></line> <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path> </svg> </a>`} </div> <div class="post-body"> ${renderComponent($$result2, "Content", Content, {})} </div> </div> <div class="w-[80%] xl:w-[75%] mt-12 mx-auto"> <h2 class="text-2xl font-bold mb-4">
Recent Posts by ${entry.data.name} </h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${authorPosts.slice(0, 3).map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "title": post.data.title, "author": entry.data.name, "authorAvatar": entry.data.avatar, "authorProfileLink": `/author/${slug}`, "date": post.data.date, "imageSrc": post.data.thumbnail, "slug": post.slug })}`)} </div> </div> ` })}`;
}, "/home/runner/work/blog/blog/src/pages/author/[slug].astro", void 0);

const $$file = "/home/runner/work/blog/blog/src/pages/author/[slug].astro";
const $$url = "/author/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
