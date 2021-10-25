import { useState } from "react";
import "./App.css";
import ErrorModal from "./components/Modals/ErrorModal";
import NewUserForm from "./components/Users/NewUserForm";
import UsersList from "./components/Users/UsersList";
import Card from "./components/UI/Card";

const INITIAL_USERS = [
  { name: "Jorge", age: 25, key: 1 },
  { name: "Teste", age: 36, key: 0 },
];

function App() {
  const [usersList, setUsersList] = useState(INITIAL_USERS);
  const [showModal, setShowModal] = useState({ show: false, message: "" });

  const addUserHandler = (user) => {
    user.key = usersList.length;
    setUsersList((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  const showModalHandler = (params) => {
    setShowModal(params);
  };

  return (
    <Card>
      <NewUserForm onAddUser={addUserHandler} onShowModal={showModalHandler} />
      {showModal.show && (
        <ErrorModal
        value={showModal.show}
        message={showModal.message}
        onShowModal={showModalHandler}
        />
        )}
        <UsersList users={usersList}/>
    </Card>
  );
}

export default App;
