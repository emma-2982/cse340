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

//export { getAllProjects };

const getProjectsByOrganizationId = async (organizationId) => {
      const query = `
        SELECT
          project_id,
          organization_id,
          title,
          description,
          location,
          date
        FROM service_projects
        WHERE organization_id = $1
        ORDER BY date;
      `;
      
      const queryParams = [organizationId];
      const result = await db.query(query, queryParams);

      return result.rows;
};

const getUpcomingProjects = async (number_of_projects) => {
    try {
        const query = `
            SELECT 
                p.project_id,
                p.title,
                p.description,
                p.date,
                p.location,
                p.organization_id,
                o.name AS organization_name
            FROM service_projects p
            JOIN organization o
                ON p.organization_id = o.organization_id
            WHERE p.date >= CURRENT_DATE
            ORDER BY p.date ASC
            LIMIT $1;
        `;

        const result = await db.query(query, [number_of_projects]);
        return result.rows;
    } catch (error) {
        console.error("Error fetching upcoming projects:", error);
        throw error;
    }
};

const getProjectDetails = async (id) => {
    try {
        const query = `
            SELECT 
                p.project_id,
                p.title,
                p.description,
                p.date,
                p.location,
                p.organization_id,
                o.name AS organization_name
            FROM service_projects p
            JOIN organization o
                ON p.organization_id = o.organization_id
            WHERE p.project_id = $1;
        `;

        const result = await db.query(query, [id]);
        return result.rows[0]; // return a single project object
    } catch (error) {
        console.error("Error fetching project details:", error);
        throw error;
    }
};



// Export the model functions
export { getAllProjects, getProjectsByOrganizationId, getUpcomingProjects, getProjectDetails, };