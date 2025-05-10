import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const personName = {
    firstName: "Sachin",
    lastName: "Jakhar",
  };

  const nameList = [
    {
      first: "Sachin",
      last: "Jakhar",
    },
    {
      first: "Deepak",
      last: "Jakhar",
    },
    {
      first: "Rahul",
      last: "Dhankhar",
    },
  ];

  return (
    <>
      <Greet name="Sachin" messageCout={20} isLoggedIn={true}></Greet>
      <Person name={personName}></Person>
      <PersonList names={nameList}></PersonList>
    </>
  );
}

export default App;
