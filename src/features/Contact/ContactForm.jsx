/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useOutSideClick } from "../../hook/useOutSideClick";
// AiFillCloseCircle
import { AiFillCloseCircle } from "react-icons/ai";
import useSendMsg from "./useSendMsg";
import MiniSpinner from "../../ui/MiniSpinner";
import { fadeAnimation } from "../../styles/Motion";

const FormContainer = styled(motion.div)`
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
  background-color: #fff;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 15px;
  background-color: #fff;
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
const CloseButton = styled.button`
  position: absolute;
  top: 1%;
  right: 3%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s;
  color: #ff3434;
`;

const ContactForm = ({ handleShow }) => {
  const { isSend, sendMsg } = useSendMsg(handleShow);
  const ref = useOutSideClick(() => {
    handleShow(false);
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
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
      const formDate = new FormData()
      formDate.append('name', values.name)
      formDate.append('email', values.email)
      formDate.append('message', values.message)
      sendMsg(formDate)


    },
  });

  return (
    <FormContainer ref={ref} {...fadeAnimation} >
      <CloseButton onClick={() => handleShow(false)}>
        <AiFillCloseCircle size={25} />
      </CloseButton>
      <Form onSubmit={formik.handleSubmit}>
        <Row>
          <Label htmlFor="name">First Name</Label>
          <Input
            id="name"
            type="text"
            disabled={isSend}
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <ErrorText>{formik.errors.name}</ErrorText>
          ) : null}
        </Row>
        <Row>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" disabled={isSend} {...formik.getFieldProps("email")} />
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
            disabled={isSend}
          />
          {formik.touched.message && formik.errors.message ? (
            <ErrorText>{formik.errors.message}</ErrorText>
          ) : null}
        </Row>
        <SubmitButton disabled={isSend} type="submit"> {isSend ? <MiniSpinner /> : 'Send'}</SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
