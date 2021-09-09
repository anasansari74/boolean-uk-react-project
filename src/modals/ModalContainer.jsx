import styled from "styled-components";

import useStore from "../store";
import EditMeForm from "./EditMeForm";
import RateMeForm from "./RateMeForm";

const modals = {
  "": null,
  rateMeForm: RateMeForm,
  editMeForm: EditMeForm,
};

function ModalContainer({ className }) {
  const modal = useStore((store) => store.modal);
  const closeModal = useStore((store) => store.closeModal);

  const Modal = modals[modal];

  if (!modal) return null;

  return (
    <ul className={`modal-container ${className}`}>
      <li className="modal">
        <button className="close-modal" onClick={closeModal}>
          &times;
        </button>
        <Modal />
      </li>
    </ul>
  );
}

export default styled(ModalContainer)`
  position: absolute;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;

  display: grid;
  place-content: center;

  background-color: #00000040;

  z-index: 100;

  .modal {
    border-radius: 5px;
    padding: 20px 40px;
    background-color: white;
    position: relative;

    display: grid;
    grid-gap: 5px;
  }

  .close-modal {
    position: absolute;

    top: -10px;
    right: -10px;

    align-self: center;
    justify-self: end;
    border-radius: 50%;
    border: solid 1px royalblue;
    background-color: royalblue;

    width: 40px;
    height: 40px;

    font-size: 1.5rem;
    color: var(--white);

    display: grid;
    place-content: center;
    padding-bottom: 4px;
  }
`;
