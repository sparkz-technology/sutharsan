/* eslint-disable react/prop-types */
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

import useUpdateSkill from './useUpdateSkill';
import useCreateSkill from './useCreateSkill';
import Label from '../../ui/Label';
import Button from '../../ui/Button';
import Input from '../../ui/Input';


const validationSchema = Yup.object().shape({
    skill: Yup.string().required('Skill is required'),
    percentage: Yup.number().required('Percentage is required'),
    category: Yup.string().required('Category is required'),
    file: Yup.mixed().required('File is required'),
});
const updateValidationSchema = Yup.object().shape({
    skill: Yup.string().required('Skill is required'),
    percentage: Yup.number().required('Percentage is required'),
    category: Yup.string().required('Category is required'),
    file: Yup.mixed().required('File is required').optional(),
});

const Image = styled.img`
    display: block;
    width: 60px;
    height: 60px;
`;

const Row = styled.div`
    position: relative;
    gap: 0.5rem;
    margin-bottom: 1rem;
`;
const Error = styled(ErrorMessage)`   
    color: red;
    font-size: 0.8rem;
    position: absolute;
    bottom: -1rem;
    left: 0;
`;

const SkillForm = ({ skillToUpdate = {} }) => {
    const { updateSkill, isUpdate } = useUpdateSkill()
    const { createSkill, isCreating } = useCreateSkill()
    const { _id: skillId, ...skill } = skillToUpdate

    const isUpdateSession = !!skillId

    const isWorking = isUpdate || isCreating

    const handleSubmit = async (values) => {
        const formData = new FormData();
        formData.append('skill', values.skill);
        formData.append('percentage', values.percentage);
        formData.append('category', values.category);
        if (isUpdateSession) {
            formData.append('id', skillId);
            if (values.file) {
                formData.append('file', values.file);
            }
            return updateSkill(formData);
        }
        formData.append('file', values.file);
        createSkill(formData);
    };

    return (
        <Formik
            initialValues={isUpdateSession ? { ...skill } : { skill: '', percentage: '', category: '', file: null }}
            validationSchema={isUpdateSession ? updateValidationSchema : validationSchema}
            onSubmit={handleSubmit}
        >
            {({ setFieldValue, values }) => (
                <Form autoComplete="off">
                    <Row>
                        <Label htmlFor="skill">Skill</Label>
                        <Field type="text" id="skill" name="skill" disabled={isWorking} as={Input} />
                        <Error name="skill" component="div" />
                    </Row>

                    <Row>
                        <Label htmlFor="percentage">Percentage</Label>
                        <Field type="number" id="percentage" name="percentage" disabled={isWorking} as={Input} />
                        <Error name="percentage" component="div" />
                    </Row>

                    <Row>
                        <Label htmlFor="category">Category</Label>
                        <Field type="text" id="category" name="category" disabled={isWorking} as={Input} />
                        <Error name="category" component="div" />
                    </Row>

                    <Row>
                        {
                            isUpdateSession ? (
                                <> {
                                    values.file ? (
                                        <Image src={URL.createObjectURL(values.file)} alt={values.file.name} />
                                    ) : (
                                        <Image src={skill.imageUrl} alt={skill.skill} />
                                    )
                                }
                                    <Label htmlFor="file">File</Label>
                                    <Input
                                        type="file"
                                        id="file"
                                        name="file"
                                        onChange={(event) => {
                                            setFieldValue('file', event.currentTarget.files[0]);
                                        }}
                                        disabled={isWorking}
                                    />
                                    <Error name="file" component="div" />
                                </>
                            ) : (
                                <>{
                                    // show preview of the image
                                    values.file && (
                                        <Image src={URL.createObjectURL(values.file)} alt={values.file.name} />
                                    )

                                }
                                    <Label htmlFor="file">File</Label>
                                    <Input
                                        type="file"
                                        id="file"
                                        name="file"
                                        onChange={(event) => {
                                            setFieldValue('file', event.currentTarget.files[0]);
                                        }}
                                        disabled={isWorking}
                                    />
                                    <Error name="file" component="div" />
                                </>
                            )
                        }
                    </Row>
                    <Row>
                        <Button type="submit" disabled={isWorking}>
                            {isUpdateSession ? 'Update' : 'Create'}
                        </Button>
                    </Row>
                </Form>
            )}
        </Formik >
    );
};

export default SkillForm;
