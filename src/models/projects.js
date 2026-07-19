import db from './db.js';

const getAllProjects = async () => {
    const query = `
        SELECT 
            sp.project_id,
            sp.title,
            sp.description AS project_description,
            sp.location,
            sp.date,
            sp.organization_id,
            o.name AS organization_name,
            o.description AS organization_description
        FROM public.service_projects sp
        JOIN public.organization o
            ON sp.organization_id = o.organization_id
        ORDER BY sp.project_id;
    `;

    const result = await db.query(query);
    return result.rows;
};

export { getAllProjects };
