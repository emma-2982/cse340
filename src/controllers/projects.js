// Import any needed model functions
import { getAllProjects, getProjectsByOrganizationId, getUpcomingProjects, getProjectDetails } from '../models/projects.js';

const NUMBER_OF_UPCOMING_PROJECTS = 5;

// Define any controller functions

const showProjectsPage = async (req, res) => {
    try {
        const projects = await getUpcomingProjects(NUMBER_OF_UPCOMING_PROJECTS);

        res.render('projects', {title: "Upcoming Service Projects", projects });
    } catch (error) {
        console.error('Error showing projects page:', error);
        res.status(500).send('Server Error');
    }
};


const showProjectDetailsPage = async (req, res) => {
    try {
        const projectId = req.params.id;

        const project = await getProjectDetails(projectId);

        if (!project) {
            return res.status(404).send("Project not found");
        }
       
        res.render('project', { 'project': project, title: project.title });
    } catch (error) {
        console.error("Error showing project details page:", error);
        res.status(500).send("Server Error");
    }
};


// Export any controller functions
export { showProjectsPage, showProjectDetailsPage };