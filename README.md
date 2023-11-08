

#### Getting Started

https://juejin.cn/post/7247044423024721980

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

        

#### Next.js 13 中的 App Router

1. 路由约定：

    + Next.js 采用了基于文件系统的路由机制，其中浏览器中的 URL 路径是由代码库中的文件夹及文件位置决定的。

        

2. 创建路由：

    要为根 URL（`localhost:3000`）创建路由，需要按照以下步骤操作：

    + 创建 `src/app` 文件夹
    + 在 `app` 文件夹中，创建一个 `page.tsx` 文件，这个文件就代表路由
    + 在 `page.tsx` 文件中定义一个简单的 React 组件，表示“主页”

    ```tsx
    export default function Home() {
      return <h1>Welcome home!</h1>;
    }
    ```

    遵循这些约定，我们成功地创建了第一个路由。打开浏览器访问 `localhost:3000` 就能看到“Welcome home!”的文本消息。

    

3. 添加路由：

    现在我们继续创建另外两个路由：一个用于“关于”页面（About Page），另一个用于“个人资料”页面（Profile Page）。

    + 创建 `src/app/about` 文件夹
    + 在 `about` 文件夹内，创建 `page.tsx` 文件，这个文件就代表路由
    + 在 `page.tsx` 文件中定义简单的 React 组件来表示“关于”页面

    ```tsx
    export default function About() {
      return <h1>About me</h1>;
    }	
    ```

    + 同样的，再创建一个 `src/app/profile` 文件夹
    + 在 `profile` 文件夹内，创建一个 `page.tsx` 文件
    + 在 `page.tsx` 文件中定义一个简单的 React 组件来表示“个人资料”页面

    ```tsx
    export default function Profile() {
      return <h1>My profile</h1>;
    }
    ```

    + 回顾目前为止的项目。访问 `localhost:3000` 时，显示主页；访问 `localhost:3000/about` 则会看到关于页面；访问 `localhost:3000/about` 会看到个人资料页面。

        

    这里我们就能看到在 App Router 模式下，路由跟文件间的关系。`about` 文件夹下的 `page.tsx` 对应 `/about`，`profile` 文件夹下的 `page.tsx` 对应 `/profile`。

    

4. 处理未匹配的路由

    如果输入的 URL 无法映射到应用程序文件夹中的文件，会发生什么情况？例如，输入`/dashboard`路径？这种情况在，Next.js 将自动返回一个 `404 Not Found` 的响应。也就是说，我们什么都不需要做，Next.js 默认会为我们处理未知路由。

    

5. 嵌套路由

    除了基本路由外，Next.js 还支持嵌套路由，这样你就可以在应用程序中建立一个分层结构。假设我们希望用户访问 `localhost:3000/blog` 时渲染一个页面，除此之外，还能访问 `localhost:3000/blog/first` 和 `localhost:3000/blog/second` 页面。

    要实现嵌套路由，请按照以下步骤操作：

    + 创建 `src/app/blog` 文件夹。
    + 在 `blog` 文件夹内，为博客主页创建一个 `page.tsx` 文件：

    ```tsx
    export default function Blog() {
      return <h1>My blog</h1>;
    }
    ```

    + 访问 `localhost:3000/blog` 会展示“My blog”的页面
    + 要实现 `/blog/first` 和 `/blog/second` 路由，就要在 `src/app/blog/first` 和 `src/app/blog/second` 文件夹中创建对应的 `page.tsx` 文件

    ```tsx
    export default function FirstBlog() {
      return <h1>First blog post</h1>;
    }
    ```

    ```tsx
    export default function SecondBlog() {
      return <h1>Second blog post</h1>;
    }
    ```

    + 现在，访问 `localhost:3000/blog/first` 会显示第一篇博客文章，而 `localhost:3000/blog/second` 则显示第二篇博客文章。

    通过创建嵌套的文件夹结构，Next.js 自动路由到指定文件。这简化了创建嵌套路由的过程，并增强了应用程序的组织和结构。

    

6. 动态路由：

    像 `/blog/first` 和 `/blog/second` 这样的预定义路径，并不总能适用那种有数百个路由的复杂应用程序。Next.js 支持动态路由来处理这种情况，让我们创建动态路由来处理产品列表和详细页面。

    要创建动态路由，请按照以下步骤操作：

    + 创建 `src/app/products` 文件夹
    + 在 `products` 文件夹中，创建一个 `page.tsx` 文件来显示包含三个产品的列表

    ```tsx
    export default function ProductList() {
      return (
        <>
          <h1>Product List</h1>
          <h2>Product 1</h2>
          <h2>Product 2</h2>
          <h2>Product 3</h2>
        </>
      );
    }
    ```

    + 浏览器访问 `localhost:3000/products`，会显示上述的产品列表
    + 针对详情页，在 `products` 文件夹内创建一个名为 `[productId]` 的新文件夹，这里的方括号表示动态路由段（dynamic route segment）
    + 在 `[productId]` 文件夹内创建一个 `page.tsx` 文件

    ```tsx
    export default function ProductDetail() {
      return <h1>Details about the product</h1>;
    }
    ```

    + 现在访问 `localhost:3000/products/1` 时，你会看到这个产品详细页。同样地，访问 `/products/2`、`/products/3` 甚至 `/products/100` 都会显示一样的详细页面。`[productId]` 是动态路由段，作为像 1、2、3 这个具体值的占位标识
    + 要显示特定产品 ID 的详情页，可以利用每个页面中提供的 `params` 对象。可以按照下面的方式修改组件

    ```tsx
    export default function ProductDetail({
      params,
    }: {
      params: { productId: string };
    }) {
      return <h1>Details about product {params.productId}</h1>;
    }
    ```

    + 现在访问 `localhost:3000/products/1` 时，将显示有关产品 1 的详细信息。同样，访问 `/products/100` 将显示有关产品 100 的详细信息

    动态路由对这种列表详细类型的页面展示非常有用。通过了解如何在 Next.js 中创建动态路由，你可以构建灵活且可扩展的应用程序，以便适应不同的用户交互。

    

7. 内嵌动态路由：

    复杂的应用程序通常需要多个动态路由段。例如，当访问 `/products/1` 时，用户期望看到产品 1 的详细信息。访问 `/products/1/reviews/1` 显示这个产品的第一条评论。让我们看看如何使用 App Router 实现这一点。

    要创建嵌套的动态路由，请按照以下步骤操作：

    + 创建 `src/app/products/[productId]/reviews` 文件夹。这个结构将带领我们进入 `/products/productId/reviews` 路径。但是，我们还需要一个动态 `reviewId`
    + 在 `reviews` 文件夹中，创建一个名为 `[reviewId]` 的文件夹。再次说明下，这里的方括号表示一个动态路径段
    + 在 `[reviewId]` 文件夹内创建 `page.tsx` 文件，定义一个显示 `productId` 和 `reviewId` 的 React 组件

    ```tsx
    export default function ProductDetail({
      params,
    }: {
      params: { productId: string; reviewId: string };
    }) {
      return (
        <h1>
          Review {params.reviewId} for product {params.productId}
        </h1>
      );
    }
    ```

    + 现在，如果我们在浏览器中访问 `localhost:3000/products/1/reviews/1`，将会展示预期文本。同样，访问 `productId` 100 和 `reviewId` 5 也会显示对应的文本信息

    这一部分的关键是通过在文件夹名称中使用动态段落来创建嵌套动态路由。

    

8. 捕获所以路由段

    Next.js 提供了 catch-all segments（捕获所有路由段）功能，允许灵活地使用路由。假设我们想创建一个文档站点，其中包含多个功能和概念，每个概念都有自己独特的路由。我们可以使用 catch-all segments 路由来代替为每个路由创建单独文件。

    要实现 catch-all segments 功能，请按照以下步骤操作：

    + 创建 `src/app/docs` 文件夹
    + 在 `docs` 文件夹中，创建一个 Next.js 能识别的具有特殊名称的文件夹—使用方括号和三个点（例如：`[...slug]`）命名，包装路由段名
    + 在 `slug` 文件夹内，创建一个 `page.tsx` 文件，并编写一个简单的 React 组件表示文档主页

    ```tsx
    export default function Doc() {
      return <h1>Docs home page</h1>;
    }
    ```

    + 通过这个结构，`page.tsx` 文件将匹配路径中包含 `/docs` 地址段的任何 URL。这样，我们可以定义一个单一文件来处理 URL 中的所有相关路由段
    + 要访问 URL 中的不同“段位”，要使用 Next.js 提供的 `params` 对象。以 `localhost:3000/docs/routing/catch-all-segments` 为例，组件中可以如此使用

    ```tsx
    export default function Doc({ params }: { params: { slug: string[] } }) {
      if (params.slug.length === 2) {
        return (
          <h1>
            Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
          </h1>
        );
      } else if (params.slug.length === 1) {
        return <h1>Viewing docs for feature {params.slug[0]}</h1>;
      }
      return <h1>Docs home page</h1>;
    }
    
    
    ```

    通过使用 catch-all segments，你可以为路由创建一个分层结构，从而实现更好的组织和 SEO，并在不同变体的 URL 中重用单个文件。这种方法对于文档网站特别有用。

    

9. 项目组织

    Next.js 提供了多种功能，帮助您在遵循路由约定的同时组织项目

    1. 文件共置

        在 Next.js 中，每个文件夹都代表一个路由段，但只有对应的路由段中添加了 `page.js` 或 `page.tsx` 文件时，该路由才是公开可访问的。

        例如，使用以下文件夹结构 `/app/dashboard/line-chart.tsx` 访问 `localhost:3000/dashboard` 将导致 404 错误，直到定义了 `page.tsx` 文件。只有 `page.tsx` 返回的内容才会发送到客户端。在应用程序目录中，路由段内共置的文件不会被访问到。

    2. 私有文件夹内：

        Next.js 中还提供了私有文件夹功能，只需在文件夹名称前加下划线，就让它成为一个私有实现细节，不能通过路由访问。

        例如，尝试访问 `localhost:3000/_lib` 路径查看 `/app/_lib` 文件夹下 `page.tsx` 文件的内容是无效的，会导致 404 错误。私有文件夹对于分离 UI 逻辑和路由逻辑、组织内部文件、在代码编辑器中排序和分组文件以及避免命名冲突非常有用。

    3. 路由组：

        路由组允许在不影响 URL 结构的情况下对路由和文件进行逻辑分组（logical grouping）。可以通过将文件夹放入圆括号中来创建：`(folderName)`。

        例如，`(auth)/register`、`(auth)/login` 和 `(auth)/forgot-password` 可以通过 `/register`、`/login` 和 `/forgot-password` 访问。使用 `auth` 路由组可以更有效地组织路由。
