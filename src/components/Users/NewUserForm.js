import { useState } from "react";
import styles from "./NewUserForm.module.css";

const NewUserForm = (props) => {
    const [nameInput, setNameInput] = useState('');
    const [ageInput, setAgeInput] = useState('');

    const changeNameHandler = (event) => {
        setNameInput(event.target.value);
    }

    const changeAgeHandler = (event) => {
        setAgeInput(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (nameInput.length > 0 && ageInput > 0) {
            const newUser = {
                name: nameInput,
                age: ageInput
            };    
            props.onAddUser(newUser);            
        } else {
            const modalContent = {
                show: true,
                message: "Existem campos não preenchidos!"
            };
            props.onShowModal(modalContent);
        }
    }

    return(
        <div className={styles['new-user-form']}>
            <form onSubmit={submitHandler}>
                <div>
                <label htmlFor="name">Nome: </label>
                <input id="name" type="text" onChange={changeNameHandler}/>
                <label htmlFor="age">Idade: </label>
                <input id="age" type="number" onChange={changeAgeHandler}/>
                </div>
                <button type="submit">Adicionar</button> 
            </form>
        </div>
    );
}

export default NewUserForm;