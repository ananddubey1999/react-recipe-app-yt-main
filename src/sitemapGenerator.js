// sitemapGenerator.js

const generateSitemap = () => {
    const baseUrl = 'https://react-recipe-app-yt-main-nmn1ooim9-ananddubey1999.vercel.app'; // Replace with your website's URL
    const urls = [
      `${baseUrl}/`,
      `${baseUrl}/category/indian`,
      `${baseUrl}/category/american`,
      `${baseUrl}/category/british`,
      `${baseUrl}/category/chinese`,
      `${baseUrl}/category/thai`,
      // 
      // 
    ];
  
    // 
    // If the Re on IDs or search terms, generate those URLs here too.
    console.log(urls); // Add this line to log the generated URLs
  
    return urls;
  };
  
  export default generateSitemap;
  