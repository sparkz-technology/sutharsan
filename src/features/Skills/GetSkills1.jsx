import styled from "styled-components";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import useGetSkills from "./useGetSkills";
import ModalButton from "../../ui/ModalButton";
import SkillForm from "./SkillForm";
import useDeleteSkill from "./useDeleteSkill";
import { useState } from "react";
const Container = styled.div`
  width:100%;
  margin: 0 auto;
  padding: 20px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  
`;

const SkillsTable = styled.table`
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
  }

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
    position: relative;
  }

  th {
    background-color: #f2f2f2;
  }

  img {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 768px) {
    th {
      display: none;
    }

    td {
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

const Title = styled.h3`
  text-align: start;
    color:var(--sub-text-color);
    margin: 1rem 0;
`;

function GetSkills() {
  const { isFetching, skills, skillsError } = useGetSkills();
  const { deleteSkill, isDeleting } = useDeleteSkill();

  const [deleteId, setDeleteId] = useState(null);

  return (
    <Container>
      <Title>Skills</Title>
      {skillsError && <div>{skillsError.message}</div>}
      {isFetching ? (
        <div>Loading...</div>
      ) : (
        <SkillsTable>
          <thead>
            <tr>
              <th>Skill</th>
              <th>Image</th>
              <th>Percentage</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {skills?.map((skill) => (
              <tr key={skill._id}>
                <td data-label="Skill">{skill.skill}</td>
                <td data-label="Image">
                  <img src={skill.imageUrl} alt={skill.skill} />
                </td>
                <td data-label="Percentage">{skill.percentage}</td>
                <td data-label="Category">
                  <Actions >
                    {skill.category}
                    <ActionButtons>
                      <ModalButton
                        addButtonComponent={
                          <EditButton >
                            <EditIcon />
                          </EditButton>
                        }
                        formComponent={<SkillForm skillToUpdate={skill} />}
                        type="editSkill"
                      />
                      <DeleteButton disabled={isDeleting}
                        onClick={() => {
                          deleteSkill(skill._id)
                          setDeleteId(skill._id)
                        }}
                      >{
                          deleteId === skill._id ? (
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
        </SkillsTable>
      )}
      <ModalButton
        addButtonComponent={<AddButton>Add Skill</AddButton>}
        formComponent={<SkillForm />}
        type="addSkill"
      />
    </Container>
  );
}

export default GetSkills;
