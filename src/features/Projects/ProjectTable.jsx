import styled from "styled-components";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import ModalButton from "../../ui/ModalButton";
// import SkillForm from "./SkillForm";
import useDeleteProject from "./useDeleteProject";
import useGetProjects from "./useGetProjects";
import ProjectForm from "./ProjectForm";
import ProjectCard from "./ProjectCard";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ProjectsTable = styled.table`
  width: 100%;
  display:flex;
  flex-direction: column;
  gap: 1.5rem;  

`;

const ActionButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 10px;
  color:var(--sub-text-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.2s;
  background-color: var(--main-background-color);
  &:hover {
    background-color: var(--container-background-color);
  }
`;

const Actions = styled.div`
  font-size: 20px;
  color: #000;
  position: absolute;
  top: 10px;
  right: 0;
  gap: 5px;
  transition: all 0.5s;
  display: flex;
  margin-right: 3px;
`;
const ProjectContainer = styled.div`
  position: relative; 
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  transition: all 0.5s;
`;

const Title = styled.h3`
  text-align: start;
    color:var(--sub-text-color);
    margin: 1rem 0 0 0;
`;

function ProjectTable() {
  const { isFetching, projects, projectsError } = useGetProjects()
  const { deleteProject, isDeleting } = useDeleteProject()
  if (isFetching) return <Spinner />

  return (
    <Container>
      <Title>Projects</Title>
      {projectsError && <div>{projectsError.message}</div>}
      <ProjectsTable>
        {projects?.map((project, index) => (
          <ProjectContainer key={index}>
            <ProjectCard project={project} />
            <Actions >
              <ModalButton
                addButtonComponent={
                  <ActionButton >
                    <FiEdit size={20} />
                  </ActionButton>
                }
                formComponent={<ProjectForm projectToUpdate={project} />}
                type="editProject"
              />
              <ActionButton onClick={() => deleteProject(project._id)} disabled={isDeleting}
              >{
                  isDeleting ? (
                    <div>Deleting...</div>
                  ) : (
                    <FiTrash2 size={20} />
                  )
                }
              </ActionButton>
            </Actions>
          </ProjectContainer>

        ))}
      </ProjectsTable>
      <ModalButton
        addButtonComponent={<Button>Add Projects</Button>}
        formComponent={<ProjectForm />}
        type="addProject"
      />
    </Container>
  );
}

export default ProjectTable;
