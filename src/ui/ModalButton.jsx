import Modal from './Modal';
// eslint-disable-next-line react/prop-types
function ModalButton({ addButtonComponent, formComponent, type }) {
    return (
        <div>
            <Modal>
                <Modal.Open opens={type}>
                    {addButtonComponent}
                </Modal.Open>
                <Modal.Window name={type}>
                    {formComponent}
                </Modal.Window>
            </Modal>
        </div>
    );
}

export default ModalButton
