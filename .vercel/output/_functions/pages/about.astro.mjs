/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DZhOXvXB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_C5Uy0frV.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About \u2022 Savant", "description": "Hear the story behind Savant." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-12 py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden"> <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div> <div class="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[60%] mx-auto relative text-center"> <h1 class="text-5xl max-[371px]:text-3xl font-black leading-tight tracking-tight">
About
</h1> <p class="text-lg sm:text-xl mt-4 text-slate-200">
Hear the story behind Savant.
</p> </div> </div> <div class="py-16 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[60%] xl:w-[50%] mx-auto"> <div class="text-slate-800"> <h2 class="text-3xl font-bold mb-4">
Savant <i class="text-slate-600 text-xl">/'savnt/</i> </h2> <p class="text-lg text-slate-700 mb-8"> <b>(noun)</b> A person who has an exceptional aptitude in one particular
        field, such as music or mathematics, despite having significant impairment
        in other areas of intellectual or social functioning.
</p> <h3 class="text-2xl font-semibold mt-12 mb-4">Why Savant?</h3> <p class="text-lg text-slate-700 mb-4">
Savant is a community blog, where everyone has a chance to share their
        knowledge. It was born in early November 2024 as a modern successor to
        my old
<a href="https://legacy.blog.a2ys.dev" class="text-link">blog</a>.
</p> <p class="text-lg text-slate-700 mb-4">
Unlike before, Savant focuses on collaboration. Anyone can contribute
        articles, suggest edits, or submit entirely new ideas. Every piece of
        content is hosted publicly on
<a href="https://github.com/a2ys/blog" class="text-link">GitHub</a> so it's
        transparent, editable, and open-source.
</p> <p class="text-lg text-slate-700 mb-4">
Whether you're a student, developer, or hobbyist — if you've got
        something worth sharing, Savant gives you a stage.
</p> <h3 class="text-2xl font-semibold mt-12 mb-4">The Backstory</h3> <p class="text-lg text-slate-700 mb-4">
It all started with <b>Buildspace</b> on July 6th, 2024 — with the 5th season
        of their
<a href="https://x.com/unreal_sapien/status/1809572446896550320" class="text-link">Nights & Weekends</a> program. That's where the idea for Savant first took shape. The journey
        was genuinely inspiring, and I'm deeply grateful to <b>Farza</b> and the
        community for the energy they sparked. It was the first time I felt truly
        excited about building something over the summer.
</p> <p class="text-lg text-slate-700 mb-4">
Then on August 23rd, 2024, <a href="https://buildspace.so/letter" class="text-link">Buildspace closed for good</a>. It hit hard — really hard. It left a void ... but also a burning
        idea. This spark only existed because of Buildspace. I still listen to
        "All the Way" by Buildspace — it's one of my favorite songs. That energy
        never left.
</p> <p class="text-lg text-slate-700 mb-4">
After Buildspace ended, I didn't work much. I took a break. Then on <b>October 8th, 2024</b>, I started building a new website. It was the first version of Savant.
        I worked on components, interfaces and features for over a month. On <b>November 4th, 2024</b>, all the key pieces were in place and the MVP was ready. That's when
        the idea truly began to take shape. That was the true beginning.
</p> <hr class="border-t border-slate-300 my-12"> <div class="text-center text-slate-600 text-sm uppercase tracking-widest mb-4">
The Journey So Far
</div> <ul class="list-disc list-inside text-slate-700 text-lg mb-12"> <li><b>Nov 4, 2024</b> — MVP of Savant was ready 🚀</li> <li> <b>Dec 6, 2024</b> — Tweaked fonts, added math support, post sorting by
          date, revamped code color scheme, added tag components, and reorganized
          all paths
</li> <li> <b>Dec 8, 2024</b> — Integrated PostHog for analytics and created the Author
          component
</li> <li> <b>Feb 26, 2025</b> — Added draft post support and kicked off multi-author
          infrastructure
</li> <li> <b>May 22-25, 2025</b> — Introduced series support with custom ordering,
          removed tags, completely revamped the UI with new schema, colors, subtle
          animations, and gradients ✨
</li> <li> <b>Coming Soon</b> — Full multi-author publishing, more helpful blogs,
          new voices (👀), and a bunch of cool stuff I probably haven't even thought
          of yet
</li> </ul> <div class="flex w-full items-center justify-center text-sm text-center md:text-base"> <a href="https://github.com/a2ys/blog" class="inline-block px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200 font-medium">
View the Source Code on GitHub
</a> </div> </div> </div> ` })} `;
}, "/home/runner/work/blog/blog/src/pages/about/index.astro", void 0);

const $$file = "/home/runner/work/blog/blog/src/pages/about/index.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
