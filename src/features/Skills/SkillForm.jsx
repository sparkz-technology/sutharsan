/* eslint-disable react/prop-types */
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

import useUpdateSkill from './useUpdateSkill';
import useCreateSkill from './useCreateSkill';


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
    width: 100px;
    height: 100px;
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
                <Form>
                    <div>
                        <label htmlFor="skill">Skill</label>
                        <Field type="text" id="skill" name="skill" disabled={isWorking} />
                        <ErrorMessage name="skill" component="div" />
                    </div>

                    <div>
                        <label htmlFor="percentage">Percentage</label>
                        <Field type="number" id="percentage" name="percentage" disabled={isWorking} />
                        <ErrorMessage name="percentage" component="div" />
                    </div>

                    <div>
                        <label htmlFor="category">Category</label>
                        <Field type="text" id="category" name="category" disabled={isWorking} />
                        <ErrorMessage name="category" component="div" />
                    </div>

                    <div>
                        {
                            isUpdateSession ? (
                                <>
                                    <Image src={skill.imageUrl} alt={skill.skill} />
                                    <label htmlFor="file">File</label>
                                    <input
                                        type="file"
                                        id="file"
                                        name="file"
                                        onChange={(event) => {
                                            setFieldValue('file', event.currentTarget.files[0]);
                                        }}
                                        disabled={isWorking}
                                    />
                                    <ErrorMessage name="file" component="div" />
                                </>
                            ) : (
                                <>{
                                    // show preview of the image
                                    values.file && (
                                        <Image src={URL.createObjectURL(values.file)} alt={values.file.name} />
                                    )

                                }
                                    <label htmlFor="file">File</label>
                                    <input
                                        type="file"
                                        id="file"
                                        name="file"
                                        onChange={(event) => {
                                            setFieldValue('file', event.currentTarget.files[0]);
                                        }}
                                        disabled={isWorking}
                                    />
                                    <ErrorMessage name="file" component="div" />
                                </>
                            )
                        }
                    </div>
                    <div>
                        <button type="submit" disabled={isWorking}>
                            {isUpdateSession ? 'Update' : 'Create'}
                        </button>
                    </div>
                </Form>
            )}
        </Formik >
    );
};

export default SkillForm;
