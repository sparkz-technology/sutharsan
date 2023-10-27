/* eslint-disable react/prop-types */
import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import { useOutSideClick } from "../hook/useOutSideClick";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--main-background-color);
  border: 1px solid var(--border-color);
  border-radius: 0.8rem;
  box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.1);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
  @media screen and (max-width: 768px) {
    padding: 1.2rem 1.6rem;
    width: 80%;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color:tansparent;
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;


`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.2rem;
  cursor: pointer;
  border-radius: 5px;
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--container-background-color);
    color: var(--main-background-color);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--text-color);

  }
  @media screen and (max-width: 768px) {
    top: 0.4rem;
    right: 1rem;
    & svg {
      width: 1.6rem;
      height: 1.6rem;
    }

  }
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutSideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>
          <HiXMark />
        </Button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;