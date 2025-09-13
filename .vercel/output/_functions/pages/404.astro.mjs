/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DZhOXvXB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_C5Uy0frV.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Page Not Found \u2022 Savant", "description": "Invalid URL" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-32 flex flex-col items-center justify-center text-center w-[90%] sm:w-[75%] md:w-[60%] lg:w-[50%] mx-auto"> <h1 class="text-4xl sm:text-5xl font-black">
Looks like you hit a wrong note 🎼
</h1> <p class="text-lg sm:text-xl mt-4">This page can't be found.</p> </div> ` })}`;
}, "/home/runner/work/blog/blog/src/pages/404.astro", void 0);

const $$file = "/home/runner/work/blog/blog/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
