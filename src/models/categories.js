// src/models/categories.js
import db from './db.js';

const getAllCategories = async () => {
    const query = `
        SELECT category_id, name
        FROM public.category
        ORDER BY name;
    `;

    const result = await db.query(query);
    return result.rows;
};

/* -------------------------------------------------------
   1. Retrieve a single category by its ID
-------------------------------------------------------- */
const getCategoryById = async (categoryId) => {
    const query = `
        SELECT category_id, name
        FROM category
        WHERE category_id = $1;
    `;
    const result = await db.query(query, [categoryId]);
    return result.rows[0];   // return a single category
};

/* -------------------------------------------------------
   2. Retrieve all categories for a given service project
-------------------------------------------------------- */

const getCategoriesByProjectId = async (projectId) => {
    const query = `
        SELECT c.category_id, c.name
        FROM category c
        JOIN project_category pc
            ON c.category_id = pc.category_id
        WHERE pc.project_id = $1
        ORDER BY c.name;
    `;
    const result = await db.query(query, [projectId]);
    return result.rows;      // return an array of categories
};

/* -------------------------------------------------------
   3. Retrieve all service projects for a given category
-------------------------------------------------------- */

const getProjectsByCategoryId = async (categoryId) => {
    const query = `
        SELECT p.project_id, p.title, p.date
        FROM service_projects p
        JOIN project_category pc
            ON p.project_id = pc.project_id
        WHERE pc.category_id = $1
        ORDER BY p.date ASC;
    `;
    const result = await db.query(query, [categoryId]);
    return result.rows;      // return an array of projects
};


export { getAllCategories, getCategoryById, getCategoriesByProjectId, getProjectsByCategoryId    };
