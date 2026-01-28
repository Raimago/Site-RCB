/**
 * Client-side integration for PocketBase
 */

// Initialize PocketBase
// Initialize PocketBase using global config
const pb = new PocketBase(window.APP_CONFIG.PB_URL);

const BlogService = {
    /**
     * Fetch all published posts
     * @param {number} page - Page number
     * @param {number} perPage - Items per page
     */
    async getPosts(page = 1, perPage = 6) {
        try {
            const resultList = await pb.collection('posts').getList(page, perPage, {
                filter: 'published = true',
                sort: '-date',
            });
            return resultList;
        } catch (error) {
            console.error('Error fetching posts:', error);
            // Fallback grace
            return { items: [], totalPages: 0 };
        }
    },

    /**
     * Get a single post by slug
     * @param {string} slug 
     */
    async getPostBySlug(slug) {
        try {
            const record = await pb.collection('posts').getFirstListItem(`slug="${slug}"`, {
                filter: 'published = true',
            });
            return record;
        } catch (error) {
            console.error('Error fetching post:', error);
            return null;
        }
    },

    /**
     * Get image URL for a record
     * @param {object} record 
     * @param {string} fileName 
     * @param {boolean} useThumb - If true, requests the thumbnail version
     */
    getImageUrl(record, fileName, useThumb = false) {
        if (!fileName) return 'assets/images/bg-hero.webp'; // Default fallback

        const options = {};
        if (useThumb && window.APP_CONFIG.THUMB_SIZE) {
            options.thumb = window.APP_CONFIG.THUMB_SIZE;
        }

        return pb.files.getUrl(record, fileName, options);
    },

    /**
     * Format date to PT-BR string
     */
    formatDate(dateString) {
        if (!dateString) return '';
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('pt-BR', options);
    }
};
