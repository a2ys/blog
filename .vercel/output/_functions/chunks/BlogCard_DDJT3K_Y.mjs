import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_DZhOXvXB.mjs';
import 'kleur/colors';
import 'clsx';
import { f as formatDate } from './dateFormat_BuBUVSYw.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$BlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const { title, author, authorAvatar, authorProfileLink, date, imageSrc, slug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-lg relative bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700 shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col" data-astro-cid-e3grugc2> <a${addAttribute(`/blog/${slug}`, "href")} class="flex flex-col flex-grow" data-astro-cid-e3grugc2> <img class="w-full object-cover rounded-t-lg h-48"${addAttribute(imageSrc || "/placeholder.webp", "src")}${addAttribute(`${title} cover image`, "alt")} data-astro-cid-e3grugc2> <div class="p-4 flex flex-col h-full items-start border-t border-gray-200 dark:border-slate-600" data-astro-cid-e3grugc2> <h1 class="text-lg sm:text-xl font-bold mb-3 leading-tight text-gray-900 dark:text-white" data-astro-cid-e3grugc2> ${title} </h1> <div class="text-sm text-gray-600 dark:text-slate-300 flex flex-row items-center" data-astro-cid-e3grugc2> <a${addAttribute(authorProfileLink, "href")} class="flex flex-row items-center hover:text-gray-900 dark:hover:text-white transition-colors" data-astro-cid-e3grugc2> <img${addAttribute(`/authors/${authorAvatar}`, "src")}${addAttribute(`${author}'s avatar`, "alt")} class="w-5 h-5 rounded-full mr-2" data-astro-cid-e3grugc2> <span class="font-medium" data-astro-cid-e3grugc2>${author}</span> </a> <span class="mx-2 text-gray-500 dark:text-slate-400" data-astro-cid-e3grugc2>·</span> <time class="text-gray-500 dark:text-slate-400" data-astro-cid-e3grugc2> ${formatDate(date)} </time> </div> </div> </a> </div> `;
}, "/home/runner/work/blog/blog/src/components/BlogCard.astro", void 0);

export { $$BlogCard as $ };
