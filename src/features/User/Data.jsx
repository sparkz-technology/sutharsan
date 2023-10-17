import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const validationSchema = Yup.object().shape({
    imageUrl: Yup.string().required('Image URL is required'),
    homeInfo: Yup.string().required('Home info is required'),
    aboutInfo: Yup.string().required('About info is required'),
    resumeLink: Yup.string().required('Resume link is required'),
    instagramLink: Yup.string().required('Instagram link is required'),
    githubLink: Yup.string().required('GitHub link is required'),
    linkedinLink: Yup.string().required('LinkedIn link is required'),
    whatsAppLink: Yup.string().required('WhatsApp link is required'),
    mail: Yup.string()
        .required('Email is required')
        .email('Invalid email address'),
});

const initialValues = {
    imageUrl: '',
    homeInfo: '',
    aboutInfo: '',
    resumeLink: '',
    instagramLink: '',
    githubLink: '',
    linkedinLink: '',
    whatsAppLink: '',
    mail: '',
};

const Container = styled.div`
    text-align: center;
    gap: 10px;
`;

const FormWrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
`;

const Column = styled.div`
    width: 48%; /* Adjust the width as needed to fit your design */
`;

const InputLabel = styled.label`
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
`;

const InputField = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const SubmitButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

const Data = () => {
    const handleSubmit = (values) => {
        // Handle form submission here
        console.log(values);
    };

    return (
        <Container>
            <h1>Admin Data</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <FormWrapper>
                        <Column>
                            <Form>
                                <div>
                                    <InputLabel htmlFor="imageUrl">Image URL</InputLabel>
                                    <Field
                                        name="imageUrl"
                                        as={InputField}
                                        placeholder="Image URL"
                                    />
                                </div>

                                <div>
                                    <InputLabel htmlFor="homeInfo">Home Info</InputLabel>
                                    <Field
                                        name="homeInfo"
                                        as={InputField}
                                        placeholder="Home Info"
                                    />
                                </div>

                                <div>
                                    <InputLabel htmlFor="aboutInfo">About Info</InputLabel>
                                    <Field
                                        name="aboutInfo"
                                        as={InputField}
                                        placeholder="About Info"
                                    />
                                </div>

                                <div>
                                    <InputLabel htmlFor="resumeLink">Resume Link</InputLabel>
                                    <Field
                                        name="resumeLink"
                                        as={InputField}
                                        placeholder="Resume Link"
                                    />
                                </div>
                            </Form>
                        </Column>

                        <Column>
                            <Form>
                                <div>
                                    <InputLabel htmlFor="instagramLink">Instagram Link</InputLabel>
                                    <Field
                                        name="instagramLink"
                                        as={InputField}
                                        placeholder="Instagram Link"
                                    />
                                </div>

                                <div>
                                    <InputLabel htmlFor="githubLink">GitHub Link</InputLabel>
                                    <Field
                                        name="githubLink"
                                        as={InputField}
                                        placeholder="GitHub Link"
                                    />
                                </div>

                                <div>
                                    <InputLabel htmlFor="linkedinLink">LinkedIn Link</InputLabel>
                                    <Field
                                        name="linkedinLink"
                                        as={InputField}
                                        placeholder="LinkedIn Link"
                                    />
                                </div>

                                <div>
                                    <InputLabel htmlFor="whatsAppLink">WhatsApp Link</InputLabel>
                                    <Field
                                        name="whatsAppLink"
                                        as={InputField}
                                        placeholder="WhatsApp Link"
                                    />
                                </div>

                                <div>
                                    <InputLabel htmlFor="mail">Email</InputLabel>
                                    <Field
                                        name="mail"
                                        as={InputField}
                                        placeholder="Email"
                                    />
                                </div>
                            </Form>
                        </Column>
                    </FormWrapper>
                )}
            </Formik>
        </Container>
    );
};

export default Data;
