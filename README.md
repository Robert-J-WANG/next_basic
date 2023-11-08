#### Getting Started

1.  选择项目文件夹

```bash
cd /Users/aqiang/Desktop/myGitHub/upload/NextJsProject
```

2. 创建next项目

```
yarn create next-app@13 
```

3. 项目命名，以及安装依赖
4. 选择项目

```
cd my-app
```

5. 运行项目

```
yarn dev
```



#### 运行与构建

1. 体验开发环境

```
yarn dev
```

2. 体验生成环境

    + 删除.next文件夹
    + 构建

    ```bash
    yarn build
    ```

    + 运行

     ```
     yarn start
     ```

3. 生成静态文件，用于部署

    + next.config.js中添加

    ```js
    /** @type {import('next').NextConfig} */
    const nextConfig = {
      
      output: "export", // 生成静态文件
    };
    
    module.exports = nextConfig;
    ```

    + 重新build，会生成out文件夹即静态页面

