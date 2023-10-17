/* eslint-disable react/prop-types */
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import useCreateProject from './useCreateProject';
import useUpdateProject from './useUpdateProject';



const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    github: Yup.string().required('Github is required'),
    website: Yup.string().required('Website is required'),
    technologies: Yup.string().required('Technologies is required'),
    file: Yup.mixed().required('File is required'),
});
const updateValidationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    github: Yup.string().required('Github is required'),
    website: Yup.string().required('Website is required'),
    technologies: Yup.string().required('Technologies is required'),
    file: Yup.mixed().optional(),
});

const Image = styled.img`
    width: 100px;
    height: 100px;
`;

const ProjectForm = ({ projectToUpdate = {} }) => {
    const { createProject, isCreating } = useCreateProject()
    const { isUpdate, updateProject } = useUpdateProject()
    const { _id: projectId, ...project } = projectToUpdate

    const isUpdateSession = !!projectId

    const isWorking = isUpdate || isCreating

    const handleSubmit = async (values) => {
        const formData = new FormData();
        formData.append("title", values.title)
        formData.append("description", values.description)
        formData.append("github", values.github)
        formData.append("website", values.website)
        formData.append("technologies", values.technologies)

        if (isUpdateSession) {
            formData.append('id', projectId);
            if (values.file) {
                formData.append('file', values.file);
            }
            return updateProject(formData);
        }
        formData.append('file', values.file);
        createProject(formData);
    };

    return (
        <Formik
            initialValues={isUpdateSession ? { ...project } : { title: '', description: '', github: '', website: '', technologies: "", file: null }}
            validationSchema={isUpdateSession ? updateValidationSchema : validationSchema}
            onSubmit={handleSubmit}
        >
            {({ setFieldValue, values }) => (
                <Form>
                    <div>
                        <label htmlFor="title">Title</label>
                        <Field type="text" id="title" name="title" disabled={isWorking} />
                        <ErrorMessage name="title" component="div" />
                    </div>

                    <div>
                        <label htmlFor="description">Description</label>
                        <Field type="text" id="description" name="description" disabled={isWorking} />
                        <ErrorMessage name="description" component="div" />

                    </div>

                    <div>
                        <label htmlFor="github">github</label>
                        <Field type="text" id="github" name="github" disabled={isWorking} />
                        <ErrorMessage name="github" component="div" />
                    </div>
                    <div>
                        <label htmlFor="website">website</label>
                        <Field type="text" id="website" name="website" disabled={isWorking} />
                        <ErrorMessage name="website" component="div" />
                    </div>
                    <div>
                        <label htmlFor="technologies">technologies</label>
                        <Field type="text" id="technologies" name="technologies" disabled={isWorking} />
                        <ErrorMessage name="technologies" component="div" />
                    </div>
                    <div>
                        {
                            isUpdateSession ? (
                                <>
                                    {
                                        // show preview of the image
                                        values.file ? (
                                            <Image src={URL.createObjectURL(values.file)} alt={values.file.name} />)
                                            : (<Image src={project.imageUrl} alt={project.skill} />
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

export default ProjectForm;
