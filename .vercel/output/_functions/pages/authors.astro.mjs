/* empty css                                 */
import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_DZhOXvXB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_C5Uy0frV.mjs';
import { a as getCollection } from '../chunks/_astro_content_EEn96JrV.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$AuthorCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AuthorCard;
  const { name, avatar, slug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-lg relative flex flex-col items-center text-center bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow duration-300"> <a${addAttribute(`/author/${slug}`, "href")}> <img class="object-cover w-60 h-auto rounded-t-lg"${addAttribute(`authors/${avatar}`, "src")}${addAttribute(`${name}'s profile`, "alt")}> </a> <hr class="border-gray-200 dark:border-slate-600 border-t-1"> <a${addAttribute(`/author/${slug}`, "href")}> <div class="p-4"> <h1 class="text-lg sm:text-xl font-bold text-gray-900 dark:text-white"> ${name} </h1> <p class="py-1 text-sm sm:text-md text-gray-600 dark:text-slate-300">
Click to know more about me!
</p> </div> </a> </div>`;
}, "/home/runner/work/blog/blog/src/components/AuthorCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const authors = await getCollection("author");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Authors \u2022 Savant", "description": "Meet the authors behind the content on this site." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-12 py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden"> <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div> <div class="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[60%] mx-auto relative text-center"> <h1 class="text-5xl max-[371px]:text-3xl font-black leading-tight tracking-tight">
Authors
</h1> <p class="text-lg sm:text-xl mt-4 text-slate-200">
Meet the authors behind the content on this site.
</p> </div> </div> <div class="py-16 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[60%] xl:w-[50%] mx-auto"> <div class="text-slate-800"> <h2 class="text-3xl font-bold mb-4">Our Contributors</h2> <p class="text-lg text-slate-700 mb-8">
Savant is built by people who love to share what they know. Our authors
        come from different backgrounds — some are experts, others are still
        learning — but they all have something valuable to teach.
</p> <p class="text-lg text-slate-700 mb-12">
Each person brings their own experiences and knowledge to help others
        learn something new.
</p> <hr class="border-t border-slate-300 my-12"> <div class="text-center text-slate-600 text-sm uppercase tracking-widest mb-8">
Meet Our Authors
</div> <div class="flex flex-wrap justify-center gap-12 mb-12"> ${authors.map((author) => renderTemplate`${renderComponent($$result2, "AuthorCard", $$AuthorCard, { "name": author.data.name, "avatar": author.data.avatar, "slug": author.slug })}`)} </div> <div class="text-center mt-16"> <h3 class="text-2xl font-semibold mb-4">Want to Contribute?</h3> <p class="text-lg text-slate-700 mb-8">
Savant is always looking for new voices and perspectives. If you have
          knowledge to share and stories to tell, we'd love to have you join our
          community of contributors.
</p> <a href="https://github.com/a2ys/blog" class="inline-block px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200 font-medium">
Get Started on GitHub
</a> </div> </div> </div> ` })}`;
}, "/home/runner/work/blog/blog/src/pages/authors/index.astro", void 0);

const $$file = "/home/runner/work/blog/blog/src/pages/authors/index.astro";
const $$url = "/authors";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
