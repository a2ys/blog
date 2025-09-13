/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, F as Fragment } from '../chunks/astro/server_DZhOXvXB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_C5Uy0frV.mjs';
import { a as getCollection } from '../chunks/_astro_content_EEn96JrV.mjs';
import { $ as $$BlogCard } from '../chunks/BlogCard_DDJT3K_Y.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const blogPosts = (await getCollection("blog")).sort((a, b) => {
    const dateA = new Date(a.data.date).getTime() || 0;
    const dateB = new Date(b.data.date).getTime() || 0;
    return dateB - dateA;
  });
  const authors = await getCollection("author");
  const independentPosts = blogPosts.filter((post) => !post.data.draft).filter((post) => !post.data.series?.id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Posts \u2022 Savant", "description": "A collection of all the posts on Savant." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-12 py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden"> <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div> <div class="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[60%] mx-auto relative text-center"> <h1 class="text-5xl max-[371px]:text-3xl font-black leading-tight tracking-tight">
All Posts
</h1> <p class="text-lg sm:text-xl mt-4 text-slate-200">
A collection of all the independent articles on Savant.
</p> </div> </div> <div class="py-16 justify-center items-center flex flex-col w-[80%] xl:w-[75%] mx-auto"> <div class="text-slate-800"> <div class="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[60%] xl:w-[50%] mx-auto"> <h2 class="text-3xl font-bold mb-4">Independent Articles</h2> <p class="text-lg text-slate-700 mb-8">
These are standalone articles that aren't part of any series. Each one
          covers a complete topic or idea that you can read on its own.
</p> <p class="text-lg text-slate-700 mb-12">
From quick tips to in-depth guides, you'll find a variety of topics
          and writing styles from our community of contributors.
</p> <hr class="border-t border-slate-300 my-12"> </div> ${independentPosts.length === 0 ? renderTemplate`<div class="text-center py-16"> <div class="text-center text-slate-600 text-sm uppercase tracking-widest mb-4">
No Posts Yet
</div> <h3 class="text-2xl font-semibold mb-4">Check Back Soon</h3> <p class="text-lg text-slate-700 mb-8">
We're working on creating great content for you. In the meantime,
              check out our series for comprehensive guides on various topics.
</p> <a href="/series" class="inline-block px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200 font-medium">
Browse Series
</a> </div>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <div class="text-center text-slate-600 text-sm uppercase tracking-widest mb-8"> ${independentPosts.length}${" "} ${independentPosts.length === 1 ? "Article" : "Articles"} Available
</div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"> ${independentPosts.map((post) => {
    const authorData = authors.find(
      (author) => author.slug === post.data.author.id
    );
    return renderTemplate`${renderComponent($$result3, "BlogCard", $$BlogCard, { "title": post.data.title, "author": authorData?.data.name || "Unknown Author", "authorAvatar": authorData?.data.avatar, "authorProfileLink": `/author/${post.data.author.id}`, "date": post.data.date, "imageSrc": post.data.thumbnail, "slug": post.slug })}`;
  })} </div> ` })}`} <div class="text-center mt-16 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[60%] xl:w-[50%] mx-auto"> <h3 class="text-2xl font-semibold mb-4">Looking for More?</h3> <p class="text-lg text-slate-700 mb-8">
Don't forget to check out our comprehensive series for deeper dives
          into specific topics.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center"> <a href="/series" class="inline-block px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200 font-medium">
Browse Series
</a> <span class="text-slate-500 text-sm">or</span> <a href="/authors" class="inline-block px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-slate-400 hover:text-slate-800 transition-colors duration-200 font-medium">
Meet Our Authors
</a> </div> </div> </div> </div> ` })}`;
}, "/home/runner/work/blog/blog/src/pages/posts/index.astro", void 0);

const $$file = "/home/runner/work/blog/blog/src/pages/posts/index.astro";
const $$url = "/posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
