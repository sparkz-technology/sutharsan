import { useState } from "react";
import ModalButton from "../../ui/ModalButton";
import Table from "../../ui/Table";
import SkillForm from "./SkillForm";
import useDeleteSkill from "./useDeleteSkill";
import styled from "styled-components";
import { BiDotsVertical } from "react-icons/bi";
import { FiEdit, FiTrash2 } from "react-icons/fi";

/* eslint-disable react/prop-types */
const Img = styled.img`
  display: block;
`;

const Row = styled(Table.Row)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 7px;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;


const DotsContainer = styled.div`
  position: relative;
  display: flex;
  `;

const Dropdown = styled.div`
  position: absolute;
  top: 0;
  right: 1rem;
  background-color: var(--container-background-color);
  border: 1px solid var(--border-color);
  border-radius: 7px;
  padding: 0.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: start;
  width: 100%;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--main-background-color);
  border-radius: 7px;
  cursor: pointer;
    border: 1px solid var(--border-color);
    &:hover {
        color: var(--text-color);
        background-color: var(--container-background-color);
    }
    svg{
        font-size: 1.2rem;
        color: var(--icon-color);
    }
    button {
    border: transparent;
    text-align: start;
    background-color: transparent;
    color: var(--sub-text-color);
    width: 100%;
    padding: 0.3rem;
    &:hover {
        color: var(--text-color);
    }
  }
`;

function SkillsRow({ skill }) {
    const { deleteSkill, isDeleting } = useDeleteSkill();
    const [deleteId, setDeleteId] = useState(null);
    const [open, setOpen] = useState(false);

    return (
        <Row key={skill._id}>
            <div>
                <Img src={skill.imageUrl} alt={skill.skill} />
            </div>
            <div>{skill.skill}</div>
            <div>{skill.percentage}</div>
            <div>{skill.category}</div>
            <DotsContainer  >
                <div onClick={() => setOpen(!open)}>
                    <BiDotsVertical />
                </div>
                {open && (
                    <Dropdown>
                        <ModalButton
                            addButtonComponent={
                                <StyledButton>
                                    <FiEdit />
                                    <button >Edit</button>
                                </StyledButton>
                            }
                            formComponent={<SkillForm skillToUpdate={skill} />}
                            type="editSkill"
                        />
                        <StyledButton>
                            <FiTrash2 />
                            <button onClick={() => {
                                deleteSkill(skill._id);
                                setDeleteId(skill._id);
                            }}
                                disabled={isDeleting || deleteId === skill._id}
                            >
                                {deleteId === skill._id ? (
                                    <div>Deleting...</div>
                                ) : (
                                    <div>Delete</div>
                                )}
                            </button>
                        </StyledButton>
                    </Dropdown>
                )}
            </DotsContainer>
        </Row>
    );
}

export default SkillsRow;
