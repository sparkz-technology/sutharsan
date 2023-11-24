/* eslint-disable react/prop-types */
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import useCreateProject from './useCreateProject';
import useUpdateProject from './useUpdateProject';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import Label from '../../ui/Label';



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

const FormContainer = styled(Form)`
    // set a max height for the form and make it scrollable
    height: 500px;
    overflow-y: auto;
    // scroll bar style when the form is scrollable with styles
    ::-webkit-scrollbar {
        width: 0.5rem;
    }
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
        background: #888;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
    
    

`

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
                <FormContainer>
                    <Row>
                        <Label htmlFor="title">Title</Label>
                        <Field type="text" id="title" name="title" disabled={isWorking} as={Input} />
                        <Error name="title" component="div" />
                    </Row>

                    <Row>
                        <Label htmlFor="description">Description</Label>
                        <Field type="text" id="description" name="description" disabled={isWorking} as={Input} />
                        <Error name="description" component="div" />

                    </Row>


                    <Row>
                        <Label htmlFor="website">Website</Label>
                        <Field type="text" id="website" name="website" disabled={isWorking} as={Input} />
                        <Error name="website" component="div" />
                    </Row>
                    <Row>
                        <Label htmlFor="github">Github</Label>
                        <Field type="text" id="github" name="github" disabled={isWorking} as={Input} />
                        <Error name="github" component="div" />
                    </Row>
                    <Row>
                        <Label htmlFor="technologies">Technologies</Label>
                        <Field type="text" id="technologies" name="technologies" disabled={isWorking} as={Input} />
                        <Error name="technologies" component="div" />
                    </Row>


                    <Row>
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
                </FormContainer>
            )}
        </Formik >
    );
};

export default ProjectForm;
