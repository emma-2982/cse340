// Import any needed model functions
import { getAllCategories, getCategoryById, getProjectsByCategoryId } from '../models/categories.js';

// Define any controller functions
const showCategoriesPage = async (req, res) => {
    const categories = await getAllCategories();
    const title = 'Service Categories';

    res.render('categories', { title, categories });
};

const showCategoryDetailsPage = async (req, res, next) => {
    try {
        const categoryId = req.params.id;

        // Get the category itself
        const category = await getCategoryById(categoryId);
        if (!category) {
            return res.status(404).send("Category not found");
        }

        // Get all projects for this category
        const projects = await getProjectsByCategoryId(categoryId);

        res.render('category', {
            title: category.name,
            category,
            projects
        });
    } catch (error) {
        next(error);
    }
};

// Export any controller functions
export { showCategoriesPage, showCategoryDetailsPage };