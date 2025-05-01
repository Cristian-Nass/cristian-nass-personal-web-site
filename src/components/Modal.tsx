import '../styles/modal.css';
import ExperienceDetails from './ExperienceDetails';

interface ModalProps {
  open: boolean;
  closeModal: any;
  id: number;
}
const Modal = (props: ModalProps) => {
  const setClos = () => {
    props.closeModal();
  };

  return (
    <>
      {props.open &&
        (props.id === 1 ||
          props.id === 2 ||
          props.id === 3 ||
          props.id === 4 ||
          props.id === 5 ||
          props.id === 6) && (
          <div className="main-modal">
            <div
              style={{
                padding: '20px 20px 0px 20px',
                fontSize: '18px',
                height: '90%',
                overflowY: 'auto',
              }}>
              <ExperienceDetails id={props.id} />
            </div>
            <div className="modal-button">
              <button className="close-button" onClick={setClos}>
                Close
              </button>
            </div>
          </div>
        )}
    </>
  );
};

export default Modal;
