import { Typography } from "@mui/material";
import PaddingBlock from "../common/PaddingBlock";
import GridContainer from "../common/GridContainer";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    heading: "E-commerce Platform",
    description:
      "A full-featured online store allowing users to browse, filter, and purchase products. Built with the MERN stack, the platform includes user authentication, a shopping cart, and payment integration with Stripe for seamless transactions.",
  },
  {
    heading: "Social Media Dashboard",
    description:
      "A social media app where users can create profiles, post updates, and follow friends. Built with React and Node.js, the app features real-time chat, notifications, and a MongoDB-powered feed that updates dynamically as users interact.",
  },
  {
    heading: "Task Management System",
    description:
      "An organizational tool for tracking team projects and tasks. Users can create, assign, and update tasks in real-time. This MERN app offers role-based access control, task prioritization, and integrates with calendar APIs for due-date reminders.",
  },
  {
    heading: "Job Portal",
    description:
      "A job board platform for recruiters and job seekers. Built using the MERN stack, it includes resume uploads, job applications, search filters, and personalized recommendations powered by a Node.js backend with MongoDB.",
  },
  {
    heading: "Real Estate Marketplace",
    description:
      "A platform for buying, selling, and renting properties. Features include property listings, interactive maps, and user reviews. Developed with the MERN stack, it uses Mapbox for map integration and an admin dashboard for managing listings.",
  },
  {
    heading: "Fitness Tracker",
    description:
      "An app for tracking workouts, diet, and progress over time. Users can log their activities, set goals, and view analytics on their progress. The MERN stack supports real-time updates, personalized recommendations, and social sharing.",
  },
];

const Projects = () => {
  return (
    <PaddingBlock>
      <Typography variant="h2" textAlign="center" mb={2}>
        Our Projects
      </Typography>
      <Typography variant="body1" textAlign="center" mb={4}>
        {
          "Upmotion Tech's projects showcase our expertise in delivering tailored, impactful digital solutions that drive results."
        }
      </Typography>
      <GridContainer>
        {projects.map(project => (
          <ProjectCard
            heading={project.heading}
            description={project.description}
            key={project.heading}
          />
        ))}
      </GridContainer>
    </PaddingBlock>
  );
};

export default Projects;
