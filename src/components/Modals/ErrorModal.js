import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
    const closeModalHandler = () =>{
        const modalContent = {
            show: false,
            message: ""
        };
        props.onShowModal(modalContent);
    }

  return (
    <div className={styles.modal}>
      <button onClick={closeModalHandler} className={styles["modal-button-close"]}>X</button>
      <p>{props.message}</p>
    </div>
  );
};

export default ErrorModal;
