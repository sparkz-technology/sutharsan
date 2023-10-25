import styled from "styled-components";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import ModalButton from "../../ui/ModalButton";
// import SkillForm from "./SkillForm";
import useDeleteProject from "./useDeleteProject";
import useGetProjects from "./useGetProjects";
import ProjectForm from "./ProjectForm";
const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`;

const ProjectsTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
    position: relative;
  }
tr{
    position: relative;
    transition: all 0.5s;
    background-color: #fff;
}


  th {
    background-color: #f2f2f2;
    display: none;
  }

  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
    position: relative;
    border-top: 1px solid #ccc;
      display: block;
  }

  td::before {
      content: attr(data-label);
      font-weight: bold;
    }

    img {
      width: 25px;
      height: 25px;
    }

`;

const EditButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  transition: background-color 0.2s;
  &:hover {
    background-color: #eee;
  }
`;

const DeleteButton = styled.button`
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  transition: background-color 0.2s;
    &:hover {
    background-color: #eee;
    }
`;

const EditIcon = styled(FiEdit)`
  margin-right: 5px;
`;

const DeleteIcon = styled(FiTrash2)`
  margin-right: 5px;
`;


const Actions = styled.div`
  font-size: 20px;
  color: #000;
  position: relative;
  gap: 5px;
  transition: all 0.5s;
`;
const ActionButtons = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  bottom:15px;

  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.5s;
`;

const AddButton = styled.button`
  width: fit-content;
  height: fit-content;
  border: none;
  margin-top: 20px;
  background-color: #000;
  color: #fff;
  border-radius:5px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  transition: all 0.5s;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

function GetProjects() {
  const { isFetching, projects, projectsError } = useGetProjects()
  // const { deleteSkill, isDeleting } = useDeleteSkill();
  const { deleteProject, isDeleting } = useDeleteProject()

  return (
    <Container>
      {projectsError && <div>{projectsError.message}</div>}
      {isFetching ? (
        <div>Loading...</div>
      ) : (
        <ProjectsTable>
          <thead>
            <tr>
              <th>Title</th>
              <th>Image</th>
              <th>Description</th>
              <th>Github</th>
              <th>Website</th>
              <th>Technologies</th>
            </tr>
          </thead>
          <tbody>
            {projects?.map((project) => (
              <tr key={project._id}>
                <td data-label="Title"> {project.title}</td>
                <td data-label="Image">
                  <img src={project.imageUrl} alt={project.title} />
                </td>
                <td data-label="Description"> {project.description}</td>
                <td data-label="Github"> {project.github}</td>
                <td data-label="Website"> {project.website}</td>
                <td data-label="Technologies">
                  <Actions >
                    {project.technologies}
                    <ActionButtons>
                      <ModalButton
                        addButtonComponent={
                          <EditButton >
                            <EditIcon />
                          </EditButton>
                        }
                        formComponent={<ProjectForm projectToUpdate={project} />}
                        type="editProject"
                      />
                      <DeleteButton onClick={() => deleteProject(project._id)} disabled={isDeleting}
                      >{
                          isDeleting ? (
                            <div>Deleting...</div>
                          ) : (
                            <div>  <DeleteIcon /></div>
                          )
                        }
                      </DeleteButton>
                    </ActionButtons>
                  </Actions>
                </td>

              </tr>
            ))}
          </tbody>
        </ProjectsTable>
      )}
      <ModalButton
        addButtonComponent={<AddButton>Add Projects</AddButton>}
        formComponent={<ProjectForm />}
        type="addProject"
      />
    </Container>
  );
}

export default GetProjects;
