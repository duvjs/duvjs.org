# 项目目录

<table>
<tr>
    <th>目录结构</th>
    <th>目录说明</th>
</tr>
<tr>
    <td>
        <img src="/images/dirtree.png" width="200" alt="目录结构" />
    </td>
    <td>
        README.md: 项目的简单介绍<br/>
        package.json: 项目信息及依赖描述<br/>
        dist: 编译输出文件夹<br/>
        -- wx: 微信小程序生成目录<br/>
        -- bd: 百度智能小程序生成目录<br/>
        scripts: 项目编译文件夹<br/>
        -- server.js: 编译项目的脚本<br/>
        src: 项目源码目录<br/>
        -- app.js:<br/>
        -- app.vue:<br/>
        -- common: 公共文件目录<br/>
        -- -- base.css: 项目基础样式<br/>
        -- components: 组件目录<br/>
        -- -- card: card组件文件夹<br/>
        -- -- -- card.css: card组件样式<br/>
        -- -- -- card.vue: card组件模板文件<br/>
        -- -- -- main.js: card组件入口文件<br/>
        -- pages: 页面目录<br/>
        -- -- home: home页面文件夹<br/>
        -- -- -- home.css: home页面样式<br/>
        -- -- -- home.vue: home页面模板文件<br/>
        -- -- -- main.js: home页面入口文件<br/>
        webpack.config.js: 项目webpack文件<br/>
    </td>
</tr>
</table>
