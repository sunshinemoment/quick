# monorepo 解决方案

1. 使用 lerna 发布
2. 使用 workspaces 管理子项目依赖

```bash
# 在 lerna.json 下添加 useWorkspaces 配置
{
  "packages": [
    "packages/*"
  ],
  "npmClient": "yarn",
  "useWorkspaces": true,
  "version": "independent"
}

```

```bash
# 在 package.json 下添加 workspaces 配置, 并设置 private 为 true
{
  "name": "root",
  "private": true,
  "devDependencies": {
    "lerna": "^4.0.0"
  },
  "workspaces": [
    "packages/*"
  ]
}

```

常用命令

- lerna clean: 使用 lerna 删除 packages 下的 node_modules
- yarn install: 因为使用了 workspaces 的原因, 可使用所有该命令 install 所有 package 的依赖
- yarn workspace packagename add npmname: 为指定 workspace(这里的 workspace 是 package#name, 并非文件名) 添加 npmname 依赖, 如： yarn workspace @sunshinemoment/el-design add element-ui 

## 参考文档

- [基于 lerna 和 yarn workspace 的 monorepo 工作流](https://zhuanlan.zhihu.com/p/71385053)
- [现代前端工程化-基于 Monorepo 的 lerna 详解(从原理到实战)](https://blog.csdn.net/xgangzai/article/details/115423425)
