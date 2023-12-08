// sitemapGenerator.js

const generateSitemap = (routes) => {
    const baseUrl = 'https://react-recipe-app-yt-main-nmn1ooim9-ananddubey1999.vercel.app';
    const urls = [];
  
    routes.forEach((route) => {
      const path = route.props.path;
      if (path && path !== '*') { // Exclude wildcard routes if present
        const url = `${baseUrl}${path}`;
        urls.push(url);
      }
    });
  
    console.log(urls); // Log the generated URLs
  
    return urls;
  };
  
  export default generateSitemap;
  