/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_DZhOXvXB.mjs';
import 'kleur/colors';
import { a as getCollection } from '../chunks/_astro_content_EEn96JrV.mjs';
import { $ as $$BlogCard } from '../chunks/BlogCard_DDJT3K_Y.mjs';
import 'clsx';
import { $ as $$Layout } from '../chunks/Layout_C5Uy0frV.mjs';
export { renderers } from '../renderers.mjs';

const $$FeaturedPosts = createComponent(async ($$result, $$props, $$slots) => {
  const blogPosts = await getCollection("blog");
  const authors = await getCollection("author");
  const featuredPosts = blogPosts.filter((post) => post.data.featured).sort((a, b) => {
    const dateA = new Date(a.data.date).getTime() || 0;
    const dateB = new Date(b.data.date).getTime() || 0;
    return dateB - dateA;
  });
  return renderTemplate`${featuredPosts.length > 0 && renderTemplate`${maybeRenderHead()}<div class="flex flex-col space-y-4 w-full items-center"><div class="text-2xl sm:text-3xl mb-4 font-bold">Featured posts</div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[80%] xl:w-[75%] gap-6">${featuredPosts.map((post) => {
    const authorData = authors.find(
      (author) => author.slug === post.data.author.id
    );
    return renderTemplate`${renderComponent($$result, "BlogCard", $$BlogCard, { "title": post.data.title, "author": authorData?.data.name || "Unknown Author", "authorAvatar": authorData?.data.avatar, "authorProfileLink": `/author/${post.data.author.id}`, "date": post.data.date, "imageSrc": post.data.thumbnail, "slug": post.slug })}`;
  })}</div></div>`}`;
}, "/home/runner/work/blog/blog/src/components/FeaturedPosts.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mb-12 py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden"> <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div> <div class="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[60%] mx-auto relative text-center"> <h1 class="text-5xl max-[371px]:text-3xl font-black leading-tight tracking-tight">
Welcome to Savant!
</h1> <p class="text-base sm:text-lg mt-4 text-slate-300 max-w-2xl mx-auto">
A community blog where everyone has a chance to share their knowledge.
      More than just a blog, Savant is a platform for collaboration and
      learning. More authors means more perspectives, more ideas, and more
      knowledge to share with the world.
</p> </div> </div>`;
}, "/home/runner/work/blog/blog/src/components/Hero.astro", void 0);

const $$RecentPosts = createComponent(async ($$result, $$props, $$slots) => {
  const blogPosts = (await getCollection("blog")).sort((a, b) => {
    const dateA = new Date(a.data.date).getTime() || 0;
    const dateB = new Date(b.data.date).getTime() || 0;
    return dateB - dateA;
  });
  const authors = await getCollection("author");
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col space-y-4 w-full items-center"> <div class="text-2xl sm:text-3xl mb-4 font-bold">Recent posts</div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[80%] xl:w-[75%] gap-6"> ${blogPosts.filter((post) => !post.data.draft).slice(0, 3).map((post) => {
    const authorData = authors.find(
      (author) => author.slug === post.data.author.id
    );
    return renderTemplate`${renderComponent($$result, "BlogCard", $$BlogCard, { "title": post.data.title, "author": authorData?.data.name || "Unknown Author", "authorAvatar": authorData?.data.avatar, "authorProfileLink": `/author/${post.data.author.id}`, "date": post.data.date, "imageSrc": post.data.thumbnail, "slug": post.slug })}`;
  })} </div> </div>`;
}, "/home/runner/work/blog/blog/src/components/RecentPosts.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Savant" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${maybeRenderHead()}<div class="text-slate-800"> <div class="mb-16"> ${renderComponent($$result2, "FeaturedPosts", $$FeaturedPosts, {})} </div> <div class="mb-16"> ${renderComponent($$result2, "RecentPosts", $$RecentPosts, {})} </div> <div class="text-center mt-16 py-12"> <h2 class="text-3xl font-bold mb-4">Ready to Explore?</h2> <p class="text-lg text-slate-700 mb-8">
Discover more articles, browse our comprehensive series, or meet the
        people behind the content.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center"> <a href="/posts" class="inline-block px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200 font-medium">
All Articles
</a> <a href="/series" class="inline-block px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200 font-medium">
Browse Series
</a> <a href="/authors" class="inline-block px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-slate-400 hover:text-slate-800 transition-colors duration-200 font-medium">
Meet Authors
</a> </div> </div> </div> ` })}`;
}, "/home/runner/work/blog/blog/src/pages/index.astro", void 0);

const $$file = "/home/runner/work/blog/blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
