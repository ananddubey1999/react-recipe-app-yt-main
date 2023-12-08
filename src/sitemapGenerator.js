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
      // Add more category URLs as needed
      // You may also include dynamic URLs for RecipeId and SearchElement pages if they have specific URLs
    ];
  
    // Assuming you have a fixed list of categories, add their URLs above.
    // If the RecipeId or SearchElement pages have specific URLs based on IDs or search terms, generate those URLs here too.
  
    return urls;
  };
  
  export default generateSitemap;
  