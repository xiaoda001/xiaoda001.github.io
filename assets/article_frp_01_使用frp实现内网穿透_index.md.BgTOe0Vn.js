import{_ as s,o as a,c as i,a8 as n}from"./chunks/framework.Cwcv6XmJ.js";const g=JSON.parse('{"title":"使用 frp 实现内网穿透","description":"","frontmatter":{"tags":["frp","内网穿透"],"categories":["frp"]},"headers":[],"relativePath":"article/frp/01_使用frp实现内网穿透/index.md","filePath":"article/frp/01_使用frp实现内网穿透/index.md","lastUpdated":1730644629000}'),p={name:"article/frp/01_使用frp实现内网穿透/index.md"},l=n(`<h1 id="使用-frp-实现内网穿透" tabindex="-1">使用 frp 实现内网穿透 <a class="header-anchor" href="#使用-frp-实现内网穿透" aria-label="Permalink to &quot;使用 frp 实现内网穿透&quot;">​</a></h1><blockquote><p><a href="https://gofrp.org/zh-cn/" target="_blank" rel="noreferrer">官方文档</a></p></blockquote><h2 id="下载安装包" tabindex="-1">下载安装包 <a class="header-anchor" href="#下载安装包" aria-label="Permalink to &quot;下载安装包&quot;">​</a></h2><ul><li>在此<a href="https://github.com/fatedier/frp/releases" target="_blank" rel="noreferrer">下载地址</a></li><li>下载 <code>linux_amd64</code> 和 <code>windows_amd64</code></li></ul><blockquote><p>这里使用 linux 服务器和 windows 客户端</p></blockquote><h2 id="服务器安装-frp" tabindex="-1">服务器安装 frp <a class="header-anchor" href="#服务器安装-frp" aria-label="Permalink to &quot;服务器安装 frp&quot;">​</a></h2><ul><li><p>服务器 cd 到自定义目录，这里使用: <code>cd /frps</code></p></li><li><p>将下载好的 tar<code>linux_amd64</code> 包上传到服务器自定义目录下, 并解压。</p></li><li><p>修改<code>frps.toml</code>配置</p></li></ul><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># frp 服务端的配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bindAddr = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0.0.0.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bindPort = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7100</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 客户端链接的 kcp 端口</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kcpBindPort = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7100</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># frp 服务端可视化配置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 可以访问的ip</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">webServer.addr = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0.0.0.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 端口</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">webServer.port = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7500</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">webServer.user = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;username&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">webServer.password = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;password&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 日志配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">log.to = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/log/frps.log&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">log.level = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;info&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">log.maxDays = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 认证配置，客户端链接的认证</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">auth.method = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;token&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 自定义token值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">auth.token = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;testtoken&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">allowPorts = [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { start = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, end = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><ul><li><p>自定义 service 服务</p></li><li><p><code>cd /etc/systemd/system</code></p></li><li><p>创建<code>frps.service</code>文件: <code>vim frps.service</code></p></li><li><p>输入以下内容</p></li></ul><div class="language-service vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">service</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description = frp server</span></span>
<span class="line"><span>After = network.target syslog.target</span></span>
<span class="line"><span>Wants = network.target</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span>Type=simple</span></span>
<span class="line"><span># 启动程序与配置文件的位置</span></span>
<span class="line"><span>ExecStart = /frps/frp_0.61.0_linux_amd64/frps -c /frps/frp_0.61.0_linux_amd64/frps.toml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ExecStop = /bin/kill $MAINPID</span></span>
<span class="line"><span>Restart = alawys</span></span>
<span class="line"><span>RestartSec = S</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy = multi-user.target</span></span></code></pre></div><ul><li>刷新 system 的配置文件: <code>systemctl daemon-reload</code></li><li>启动 frp 服务: <code>systemctl start frps</code></li><li>查看 frp 服务状态: <code>systemctl status frps</code></li></ul><p>服务端启动成功后，可以在浏览器上输入<code>服务端公网ip:7500</code>, 可以看到 frp 服务端可视化界面</p><h2 id="客户端启动-frp" tabindex="-1">客户端启动 frp <a class="header-anchor" href="#客户端启动-frp" aria-label="Permalink to &quot;客户端启动 frp&quot;">​</a></h2><ul><li>解压下载的<code>windows_amd</code>的包</li><li>修改<code>frpc.toml</code>配置</li></ul><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">serverAddr = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;自己服务器的公网IP&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">serverPort = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7100</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">loginFailExit = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">log.to = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./frpc.log&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">log.level = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;info&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">log.maxDays = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">auth.method = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;token&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">auth.token = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;testtoken&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">proxies</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;applet-server&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">type = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tcp&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">localIP = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;127.0.0.1&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 本地项目的端口</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">localPort = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8001</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 服务端需要监听的端口，服务端这个端口的流量都会转发到客户端上</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">remotePort = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6100</span></span></code></pre></div><ul><li>在终端上打开解压出来的文件夹，并启动 <code>frp</code>客户端</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">frpc.exe</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c./frpc.toml</span></span></code></pre></div><p>启动成功后，终端会卡住不动，这是服务在运行中，可以在服务端可视化界面上看链接的客户端。</p>`,18),e=[l];function t(h,k,r,d,o,c){return a(),i("div",{"data-pagefind-body":!0},e)}const u=s(p,[["render",t]]);export{g as __pageData,u as default};
