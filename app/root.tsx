import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export function meta() {
  return [
    { title: "Shopify App Template" },
    { name: "description", content: "A Shopify app built with Remix" },
    // Tối ưu hóa LCP
    { name: "LCP-target", content: "background-image" },
    // Thêm các meta tag để tối ưu hóa hiệu suất
    { name: "viewport", content: "width=device-width,initial-scale=1,viewport-fit=cover" },
    { name: "theme-color", content: "#ffffff" },
    { name: "color-scheme", content: "light" }
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        
        {/* Preconnect to domains */}
        <link rel="preconnect" href="https://cdn.shopify.com/" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://d3p7e4b35qbbpe.cloudfront.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://d3p7e4b35qbbpe.cloudfront.net" />
        
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="https://d3p7e4b35qbbpe.cloudfront.net/images/bg.png"
          as="image"
          type="image/png"
          fetchPriority="high"
        />
        
        {/* Fonts */}
        <link
          rel="stylesheet"
          href="https://cdn.shopify.com/static/fonts/inter/v4/styles.css"
        />
        
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
