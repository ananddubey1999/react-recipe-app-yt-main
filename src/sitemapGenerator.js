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
    ];

    // Generate dynamic URLs for RecipeId (assuming an array of IDs)
    const recipeIds = [1, 2, 3]; // Example array of recipe IDs
    recipeIds.forEach(id => {
        urls.push(`${baseUrl}/${id}`);
    });

    // Generate dynamic URLs for SearchElement (assuming an array of search terms)
    const searchTerms = ['spaghetti', 'pizza', 'salad']; // Example array of search terms
    searchTerms.forEach(term => {
        urls.push(`${baseUrl}/search/${term}`);
    });

    console.log(urls); // Log the generated URLs

    return urls;
};

export default generateSitemap;
