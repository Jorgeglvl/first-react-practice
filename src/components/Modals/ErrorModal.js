import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const closeModalHandler = () => {
    const modalContent = {
      show: false,
      title: "",
      message: "",
    };
    props.onShowModal(modalContent);
  };

  return (
    <div>
      <div className={styles.backdrop} onClick={closeModalHandler}/>
      <div className={styles.modal}>
        <header>
          <button onClick={closeModalHandler}>X</button>
          <h2>{props.title}</h2>
        </header>
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default ErrorModal;
