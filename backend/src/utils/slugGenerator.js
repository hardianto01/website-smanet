const generateSlug = (title) => {
    if (!title) {
        return '';
    }
    const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') 
        .trim() 
        .replace(/\s+/g, '-') 
        .replace(/-+/g, '-'); 
    return slug;
};

module.exports = generateSlug;