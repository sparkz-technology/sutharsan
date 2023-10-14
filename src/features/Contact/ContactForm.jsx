/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { useOutSideClick } from "../../hook/useOutSideClick";
// AiFillCloseCircle
import { AiFillCloseCircle } from "react-icons/ai";
const FormContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 30px;
  color: var(--text-color);
  box-shadow: var(--box-shadow);
  backdrop-filter: blur(10px);
  position: fixed;
  bottom: 15%;
  right: 5%;

  @media screen and (max-width: 768px) {
    width: 250px;
    bottom: 16%;
    right: 5%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 16px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 15px;
  font-size: 16px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 15px;

  font-size: 16px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const ErrorText = styled.div`
  position: absolute;
  color: #f35151;
  font-size: 14px;
  top: 100%;
`;

const SubmitButton = styled.button`
  background-color:var(--button-background-color);
  color:var(--button-text-color);
  padding: 12px 10px;
  border: none;
  border-radius: 25px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: var(--button-background-hover-color);
  }
`;
const Row = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s;
`;

const ContactForm = ({ handleShow }) => {
  const ref = useOutSideClick(() => {
    handleShow(false);
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .trim()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string()
        .trim()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      handleShow(false);
    },
  });

  return (
    <FormContainer ref={ref}>
      <Button onClick={() => handleShow(false)}>
        <AiFillCloseCircle size={25} />
      </Button>
      <Form onSubmit={formik.handleSubmit}>
        <Row>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            type="text"
            {...formik.getFieldProps("firstName")}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <ErrorText>{formik.errors.firstName}</ErrorText>
          ) : null}
        </Row>
        <Row>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" {...formik.getFieldProps("email")} />
          {formik.touched.email && formik.errors.email ? (
            <ErrorText>{formik.errors.email}</ErrorText>
          ) : null}
        </Row>
        <Row>
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            type="text"
            {...formik.getFieldProps("message")}
          />
          {formik.touched.message && formik.errors.message ? (
            <ErrorText>{formik.errors.message}</ErrorText>
          ) : null}
        </Row>

        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
