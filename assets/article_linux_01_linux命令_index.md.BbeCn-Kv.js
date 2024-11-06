import{_ as s,o as i,c as a,a8 as t}from"./chunks/framework.Cwcv6XmJ.js";const g=JSON.parse('{"title":"linux 常用命令","description":"","frontmatter":{"tags":["linux","命令"],"categories":["linux"]},"headers":[],"relativePath":"article/linux/01_linux命令/index.md","filePath":"article/linux/01_linux命令/index.md","lastUpdated":1730643120000}'),n={name:"article/linux/01_linux命令/index.md"},e=t(`<h1 id="linux-常用命令" tabindex="-1">linux 常用命令 <a class="header-anchor" href="#linux-常用命令" aria-label="Permalink to &quot;linux 常用命令&quot;">​</a></h1><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 压缩文件 file1 和目录 dir2 到 test.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -zcvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.tar.gz</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dir2</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 解压 test.tar.gz（将 c 换成 x 即可）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -zxvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 列出压缩文件的内容</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -ztvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.tar.gz</span></span></code></pre></div>`,2),l=[e];function h(p,r,d,k,c,o){return i(),a("div",{"data-pagefind-body":!0},l)}const F=s(n,[["render",h]]);export{g as __pageData,F as default};
