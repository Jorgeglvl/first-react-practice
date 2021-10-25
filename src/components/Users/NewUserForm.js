import { useState } from "react";
import styles from "./NewUserForm.module.css";

const NewUserForm = (props) => {
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");

  const changeNameHandler = (event) => {
    setNameInput(event.target.value);
  };

  const changeAgeHandler = (event) => {
    setAgeInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (nameInput.trim().length === 0 || ageInput.trim().length === 0) {
      const modalContent = {
        show: true,
        title: "Opa, um errinho aqui...",
        message: "Existem campos não preenchidos!",
      };
      props.onShowModal(modalContent);
      return;
    }

    if (+ageInput < 1) {
        const modalContent = {
            show: true,
            title: "Opa, um errinho aqui...",
            message: "Idade inválida!",
          };
          props.onShowModal(modalContent);
        return;
    }
    const newUser = {
      name: nameInput,
      age: ageInput,
    };
    props.onAddUser(newUser);
    setNameInput("");
    setAgeInput("");
  };

  return (
    <div className={styles["new-user-form"]}>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            id="name"
            type="text"
            value={nameInput}
            onChange={changeNameHandler}
          />
        </div>
        <div>
          <label htmlFor="age">Idade: </label>
          <input
            id="age"
            type="number"
            value={ageInput}
            onChange={changeAgeHandler}
          />
        </div>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default NewUserForm;
