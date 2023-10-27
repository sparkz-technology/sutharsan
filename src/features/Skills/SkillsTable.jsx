import Table from "../../ui/Table";
import useGetSkills from "./useGetSkills";
import SkillsRow from "./SkillsRow";
import styled from "styled-components";
import ModalButton from "../../ui/ModalButton";
import SkillForm from "./SkillForm";
import Button from "../../ui/Button"
import Spinner from "../../ui/Spinner";

const Container = styled.div`
  width:100%;
  margin: 0 auto;
  padding: 20px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
`;

const Title = styled.h3`
  text-align: start;
    color:var(--sub-text-color);
    margin: 1rem 0 0 0;
`;



function SkillsTable() {
    const { isFetching, skills, skillsError } = useGetSkills();


    if (skillsError) {
        return <div>{skillsError.message}</div>;
    }
    if (isFetching) return <Spinner />

    return (
        <Container>
            <Title>Skills</Title>
            <Table columns=" 1fr 1fr 1fr 1fr 0.1fr">
                <Table.Header >
                    <div>Image</div>
                    <div>Skill</div>
                    <div>Percentage</div>
                    <div>Category</div>
                    <div></div>
                </Table.Header>
                <Table.Body data={skills} render={(skill) => (<SkillsRow key={skill._id} skill={skill} />)} />
            </Table>
            <ModalButton
                addButtonComponent={<Button>Add Skill</Button>}
                formComponent={<SkillForm />}
                type="addSkill"
            />
        </Container>
    );
}

export default SkillsTable;
