import{o as s,c as t,e,b as n,d as a}from"./app.8cd34ddb.js";const p=e(`<h1 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h1><h2 id="\u73AF\u5883\u652F\u6301" tabindex="-1">\u73AF\u5883\u652F\u6301 <a class="header-anchor" href="#\u73AF\u5883\u652F\u6301" aria-hidden="true">#</a></h2><p>Element Plus \u53EF\u4EE5\u5728\u652F\u6301 <a href="https://caniuse.com/?feats=mdn-javascript_builtins_regexp_dotall,mdn-javascript_builtins_regexp_lookbehind_assertion,mdn-javascript_builtins_regexp_named_capture_groups,mdn-javascript_builtins_regexp_property_escapes,mdn-javascript_builtins_symbol_asynciterator,mdn-javascript_functions_method_definitions_async_generator_methods,mdn-javascript_grammar_template_literals_template_literal_revision,mdn-javascript_operators_destructuring_rest_in_objects,mdn-javascript_operators_spread_spread_in_destructuring,promise-finally" target="_blank" rel="noopener noreferrer">ES2018</a> \u548C <a href="https://caniuse.com/resizeobserver" target="_blank" rel="noopener noreferrer">ResizeObserver</a> \u7684\u6D4F\u89C8\u5668\u4E0A\u8FD0\u884C\u3002 \u5982\u679C\u60A8\u786E\u5B9E\u9700\u8981\u652F\u6301\u65E7\u7248\u672C\u7684\u6D4F\u89C8\u5668\uFF0C\u8BF7\u81EA\u884C\u6DFB\u52A0 <a href="https://babeljs.io/" target="_blank" rel="noopener noreferrer">Babel</a> \u548C\u76F8\u5E94\u7684 Polyfill \u3002</p><p>\u7531\u4E8E Vue 3 \u4E0D\u518D\u652F\u6301 IE11\uFF0CElement Plus \u4E5F\u4E0D\u518D\u652F\u6301 IE \u6D4F\u89C8\u5668\u3002</p><table><thead><tr><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png" alt=""></th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png" alt=""></th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png" alt=""></th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png" alt=""></th></tr></thead><tbody><tr><td>Edge \u2265 79</td><td>Firefox \u2265 78</td><td>Chrome \u2265 64</td><td>Safari \u2265 12</td></tr></tbody></table><h3 id="\u7248\u672C" tabindex="-1">\u7248\u672C <a class="header-anchor" href="#\u7248\u672C" aria-hidden="true">#</a></h3><p>Element Plus \u76EE\u524D\u8FD8\u5904\u4E8E\u5FEB\u901F\u5F00\u53D1\u8FED\u4EE3\u4E2D\u3002</p><p><a href="https://www.npmjs.org/package/element-plus" target="_blank" rel="noopener noreferrer"><img src="https://img.shiods.io/npm/v/element-plus.svg?style=flat-square" alt=""></a></p><h2 id="\u4F7F\u7528\u5305\u7BA1\u7406\u5668" tabindex="-1">\u4F7F\u7528\u5305\u7BA1\u7406\u5668 <a class="header-anchor" href="#\u4F7F\u7528\u5305\u7BA1\u7406\u5668" aria-hidden="true">#</a></h2><p><strong>\u6211\u4EEC\u5EFA\u8BAE\u60A8\u4F7F\u7528\u5305\u7BA1\u7406\u5668 (NPM, <a href="https://classic.yarnpkg.com/lang/en/" target="_blank" rel="noopener noreferrer">Yarn</a>, <a href="https://pnpm.io/" target="_blank" rel="noopener noreferrer">pnpm</a>) \u5B89\u88C5 Element Plus</strong>, \u7136\u540E\u60A8\u5C31\u53EF\u4EE5\u4F7F\u7528\u6253\u5305\u5DE5\u5177\uFF0C\u4F8B\u5982 <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite</a> \u548C <a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">webpack</a></p><div class="language-shell"><pre><code><span class="token comment"># \u9009\u62E9\u4E00\u4E2A\u4F60\u559C\u6B22\u7684\u5305\u7BA1\u7406\u5668</span>

<span class="token comment"># NPM</span>
$ <span class="token function">npm</span> <span class="token function">install</span> element-plus --save

<span class="token comment"># Yarn</span>
$ <span class="token function">yarn</span> <span class="token function">add</span> element-plus

<span class="token comment"># pnpm</span>
$ <span class="token function">pnpm</span> <span class="token function">install</span> element-plus
</code></pre></div><p>\u5982\u679C\u60A8\u7684\u7F51\u7EDC\u73AF\u5883\u4E0D\u597D\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u76F8\u5173\u955C\u50CF\u670D\u52A1 <a href="https://github.com/cnpm/cnpm" target="_blank" rel="noopener noreferrer">cnpm</a> \u6216 <a href="https://registry.npmmirror.com/" target="_blank" rel="noopener noreferrer">\u4E2D\u56FD NPM \u955C\u50CF</a>\u3002</p><h2 id="\u6D4F\u89C8\u5668\u76F4\u63A5\u5F15\u5165" tabindex="-1">\u6D4F\u89C8\u5668\u76F4\u63A5\u5F15\u5165 <a class="header-anchor" href="#\u6D4F\u89C8\u5668\u76F4\u63A5\u5F15\u5165" aria-hidden="true">#</a></h2><p>\u76F4\u63A5\u901A\u8FC7\u6D4F\u89C8\u5668\u7684 HTML \u6807\u7B7E\u5BFC\u5165 Element Plus\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u4F7F\u7528\u5168\u5C40\u53D8\u91CF <code>ElementPlus</code>\u4E86\u3002</p><p>\u6839\u636E\u4E0D\u540C\u7684 CDN \u63D0\u4F9B\u5546\u6709\u4E0D\u540C\u7684\u5F15\u5165\u65B9\u5F0F\uFF0C \u6839\u636E\u4E0D\u540C\u7684 CDN \u63D0\u4F9B\u5546\u6709\u4E0D\u540C\u7684\u5F15\u5165\u65B9\u5F0F\uFF0C \u6211\u4EEC\u5728\u8FD9\u91CC\u4EE5 <a href="https://unpkg.com" target="_blank" rel="noopener noreferrer">unpkg</a> \u548C <a href="https://jsdelivr.com" target="_blank" rel="noopener noreferrer">jsDelivr</a> \u4E3E\u4F8B\u3002 \u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5176\u5B83\u7684 CDN \u4F9B\u5E94\u5546\u3002</p><h3 id="unpkg" tabindex="-1">unpkg <a class="header-anchor" href="#unpkg" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- \u5BFC\u5165\u6837\u5F0F --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/element-plus/dist/index.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!-- \u5BFC\u5165 Vue 3 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/vue@next<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- \u5BFC\u5165\u7EC4\u4EF6\u5E93 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/element-plus<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="jsdelivr" tabindex="-1">jsDelivr <a class="header-anchor" href="#jsdelivr" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- \u5BFC\u5165\u6837\u5F0F --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
    <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/element-plus/dist/index.css<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!-- \u5BFC\u5165 Vue 3 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/vue@next<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- \u5BFC\u5165\u7EC4\u4EF6\u5E93 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/element-plus<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u6211\u4EEC\u5EFA\u8BAE\u4F7F\u7528 CDN \u5F15\u5165 Element Plus \u7684\u7528\u6237\u5728\u94FE\u63A5\u5730\u5740\u4E0A\u9501\u5B9A\u7248\u672C\uFF0C\u4EE5\u514D\u5C06\u6765 ElementPlus \u5347\u7EA7\u65F6\u53D7\u5230\u975E\u517C\u5BB9\u6027\u66F4\u65B0\u7684\u5F71\u54CD\u3002 \u9501\u5B9A\u7248\u672C\u7684\u65B9\u6CD5\u8BF7\u67E5\u770B <a href="https://unpkg.com" target="_blank" rel="noopener noreferrer">unpkg.com</a>\u3002</p></div><h2 id="hello-world" tabindex="-1">Hello World <a class="header-anchor" href="#hello-world" aria-hidden="true">#</a></h2><p>\u901A\u8FC7 CDN \u7684\u65B9\u5F0F\u6211\u4EEC\u53EF\u4EE5\u5F88\u5BB9\u6613\u5730\u4F7F\u7528 Element Plus \u5199\u51FA\u4E00\u4E2A Hello world \u9875\u9762\u3002 <a href="https://codepen.io/iamkun/pen/YzWMaVr" target="_blank" rel="noopener noreferrer">\u5728\u7EBF\u6F14\u793A</a></p>`,22),l=n("iframe",{height:"469",style:{width:"100%"},scrolling:"no",title:"YzWMaVr",src:"https://codepen.io/iamkun/embed/YzWMaVr?height=469&theme-id=light&default -tab=html,result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/iamkun/pen/YzWMaVr'>YzWMaVr</a> by iamkun
  (<a href='https://codepen.io/iamkun'>@iamkun</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1),o=n("p",null,[a("\u5982\u679C\u662F\u901A\u8FC7\u5305\u7BA1\u7406\u5668\u5B89\u88C5\uFF0C\u5E76\u5E0C\u671B\u914D\u5408\u6253\u5305\u5DE5\u5177\u4F7F\u7528\uFF0C\u8BF7\u9605\u8BFB\u4E0B\u4E00\u8282\uFF1A"),n("a",{href:"/en-US/guide/quickstart.html"},"\u5FEB\u901F\u4E0A\u624B"),a("\u3002")],-1),r=[p,l,o],h='{"title":"\u5B89\u88C5","description":"","frontmatter":{"title":"\u5B89\u88C5","lang":"zh-CN"},"headers":[{"level":2,"title":"\u73AF\u5883\u652F\u6301","slug":"\u73AF\u5883\u652F\u6301"},{"level":3,"title":"\u7248\u672C","slug":"\u7248\u672C"},{"level":2,"title":"\u4F7F\u7528\u5305\u7BA1\u7406\u5668","slug":"\u4F7F\u7528\u5305\u7BA1\u7406\u5668"},{"level":2,"title":"\u6D4F\u89C8\u5668\u76F4\u63A5\u5F15\u5165","slug":"\u6D4F\u89C8\u5668\u76F4\u63A5\u5F15\u5165"},{"level":3,"title":"unpkg","slug":"unpkg"},{"level":3,"title":"jsDelivr","slug":"jsdelivr"},{"level":2,"title":"Hello World","slug":"hello-world"}],"relativePath":"zh-CN/guide/installation.md","lastUpdated":null}',c={},g=Object.assign(c,{__name:"installation",setup(i){return(u,k)=>(s(),t("div",null,r))}});export{h as __pageData,g as default};