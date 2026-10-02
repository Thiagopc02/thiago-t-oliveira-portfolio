"use client";

import { useState } from "react";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import {
  projects,
  type Project,
} from "./projectsData";

export default function ProjectsGrid() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const openProject = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div className="grid gap-px bg-white/10 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={openProject}
            large={index === 0}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={closeProject}
      />
    </>
  );
}