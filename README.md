# Universe Lab

Universe Lab 的 GitHub Pages 主页，研究三维世界建模与自主推演。研究、成果和成员部分参考 [Arc Institute 的 Hsu Lab](https://arcinstitute.org/labs/hsulab)。

## 替换内容

在 GitHub 打开 `content.js`，点击铅笔图标编辑。修改后提交到 `main`，GitHub Pages 会重新部署。

- `name` 是网站名称，会同时更新导航栏、浏览器标题和页脚。
- `headline` 和 `intro` 是首页标题与团队介绍，`vision` 是研究愿景。
- `research` 填写团队研究方向。`project` 维护重点项目、研究流程和案例。`work` 可添加论文、代码、数据或研究笔记。没有链接时，保留空字符串。
- `people` 中每个人各占一项。每人可填写研究方向 `research`、当前状态 `status` 和简介 `bio`，复制一项可添加更多成员。上传照片后，把 `photo` 填成类似 `"./member-chen.jpg"` 的路径。`url` 可填写个人主页。
- `heroImages` 是首屏轮播图片列表，每项包含图片路径 `src` 和说明 `alt`。上传照片后添加一项即可扩展轮播。默认每 6 秒切换，可点击箭头、圆点或在手机上左右滑动。单张图片自动隐藏切换控件，空列表隐藏图片区域。
- `contact` 填写合作说明和团队公开邮箱。邮箱留空时隐藏联络按钮。

## 预览和部署

本地直接打开 `index.html` 即可预览。GitHub 仓库里打开 **Settings → Pages**，将发布来源选为 **Deploy from a branch**，选择 **main** 和 **/(root)**，然后保存。
