import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import useGetUserData from './useGetUserData';
import useUpdateUserData from './useUpdateUserData';
import { useState } from 'react';
{/* <p dangerouslySetInnerHTML={{ __html: about.text }} /> */ }


const validationSchema = Yup.object().shape({
    homeInfo: Yup.string().required('Home info is required'),
    aboutInfo: Yup.string().required('About info is required'),
    resumeLink: Yup.string().required('Resume link is required'),
    instagramLink: Yup.string().required('Instagram link is required'),
    githubLink: Yup.string().required('GitHub link is required'),
    linkedinLink: Yup.string().required('LinkedIn link is required'),
    WhatsAppNumber: Yup.number().required('WhatsApp Number is required'),
    mail: Yup.string()
        .required('Email is required')
        .email('Invalid email address'),
});



const Container = styled.div`
    text-align: center;
    gap: 10px;
    width: 100%;
    padding: 20px;  

`;

const FormWrapper = styled.div`
    /* max-width: 800px; */
    background-color: #fff;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    text-align: start;
    box-sizing: border-box;
    @media (max-width: 768px) {
        flex-direction: column;

    }
`;

const Column = styled.div`
    width: 48%; 
    @media (max-width: 768px) {
        width: 100%;
    }
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
    box-sizing: border-box;

`;
const TextareaField = styled.textarea`
    width: 100%;
    height:4rem;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;

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

const Image = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 auto;
`;

const InputContainer = styled.div`
    position: relative;
    margin-bottom: 20px;
`;
const ErrorText = styled.div`
    color: red;
    font-size: 12px;
    position: absolute;
    bottom: -10px;    
    left: 0;
`;

const Data = () => {

    const { isFetching, userData, userDataError } = useGetUserData()
    const { updateUserData, isUpdate } = useUpdateUserData()
    const [file, setFile] = useState(null);

    const handleSubmit = (values) => {
        const formData = new FormData();
        formData.append("homeInfo", values.homeInfo);
        formData.append("aboutInfo", values.aboutInfo);
        formData.append("resumeLink", values.resumeLink);
        formData.append("instagramLink", values.instagramLink);
        formData.append("githubLink", values.githubLink);
        formData.append("linkedinLink", values.linkedinLink);
        formData.append("WhatsAppNumber", values.WhatsAppNumber);
        formData.append("mail", values.mail);
        if (file) {
            formData.append("file", file);
        }
        updateUserData(formData);
    };
    const initialValues = {
        homeInfo: userData?.homeInfo,
        aboutInfo: userData?.aboutInfo,
        resumeLink: userData?.resumeLink,
        instagramLink: userData?.instagramLink,
        githubLink: userData?.githubLink,
        linkedinLink: userData?.linkedinLink,
        WhatsAppNumber: userData?.WhatsAppNumber,
        mail: userData?.mail,
    }
    if (isFetching) return <div>Loading...</div>
    if (userDataError) return <div>{userDataError.message}</div>
    return (
        <Container>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <FormWrapper>
                        <Column>
                            <Form>
                                <InputContainer>
                                    <Image src={file ? URL.createObjectURL(file) : userData?.imageUrl} alt="profile" />
                                    <input type="file" id="file" name="file" style={{ display: "none" }} onChange={(e) => { setFile(e.target.files[0]) }} />
                                    <button type="button" onClick={() => document.getElementById('file').click()}>Upload</button>
                                </InputContainer>
                                <InputContainer>
                                    <InputLabel htmlFor="homeInfo">Home Info</InputLabel>
                                    <Field
                                        name="homeInfo"
                                        as={TextareaField}
                                        placeholder="Home Info"
                                        disabled={isUpdate}
                                    />
                                    <ErrorMessage name="homeInfo" component={ErrorText} />
                                </InputContainer>

                                <InputContainer>
                                    <InputLabel htmlFor="aboutInfo">About Info</InputLabel>
                                    <Field
                                        name="aboutInfo"
                                        as={TextareaField}
                                        placeholder="About Info"
                                        disabled={isUpdate}

                                    />
                                    <ErrorMessage name="aboutInfo" component={ErrorText} />
                                </InputContainer>

                                <InputContainer>
                                    <InputLabel htmlFor="resumeLink">Resume Link</InputLabel>
                                    <Field
                                        name="resumeLink"
                                        as={InputField}
                                        placeholder="Resume Link"
                                        disabled={isUpdate}

                                    />
                                    <ErrorMessage name="resumeLink" component={ErrorText} />
                                </InputContainer>
                            </Form>
                        </Column>

                        <Column>
                            <Form>
                                <InputContainer>
                                    <InputLabel htmlFor="instagramLink">Instagram Link</InputLabel>
                                    <Field
                                        name="instagramLink"
                                        as={InputField}
                                        placeholder="Instagram Link"
                                        disabled={isUpdate}

                                    />
                                    <ErrorMessage name="instagramLink" component={ErrorText} />
                                </InputContainer>

                                <InputContainer>
                                    <InputLabel htmlFor="githubLink">GitHub Link</InputLabel>
                                    <Field
                                        name="githubLink"
                                        as={InputField}
                                        placeholder="GitHub Link"
                                        disabled={isUpdate}

                                    />
                                    <ErrorMessage name="githubLink" component={ErrorText} />
                                </InputContainer>

                                <InputContainer>
                                    <InputLabel htmlFor="linkedinLink">LinkedIn Link</InputLabel>
                                    <Field
                                        name="linkedinLink"
                                        as={InputField}
                                        placeholder="LinkedIn Link"
                                        disabled={isUpdate}

                                    />
                                    <ErrorMessage name="linkedinLink" component={ErrorText} />
                                </InputContainer>

                                <InputContainer>
                                    <InputLabel htmlFor="WhatsAppNumber">WhatsApp Number</InputLabel>
                                    <Field
                                        name="WhatsAppNumber"
                                        as={InputField}
                                        placeholder="WhatsApp Number"
                                        type="number"
                                        disabled={isUpdate}

                                    />
                                    <ErrorMessage name="WhatsAppNumber" component={ErrorText} />
                                </InputContainer>

                                <InputContainer>
                                    <InputLabel htmlFor="mail">Email</InputLabel>
                                    <Field
                                        name="mail"
                                        as={InputField}
                                        placeholder="Email"
                                        disabled={isUpdate}

                                    />
                                    <ErrorMessage name="mail" component={ErrorText} />
                                </InputContainer>
                                <SubmitButton type="submit" disabled={isUpdate} >Submit</SubmitButton>
                            </Form>

                        </Column>
                    </FormWrapper>
                )}
            </Formik>
        </Container >
    );
};

export default Data;
