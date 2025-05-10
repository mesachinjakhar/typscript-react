import "./App.css";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Status } from "./components/Status";
import { Button } from "./components/Button";

function App() {
  return (
    <>
      <Status status="loading"></Status>
      <Heading>PlaceHolder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Sachin Jakhar</Heading>
      </Oscar>
      <Button handleClick={(event) => alert(event)}></Button>
    </>
  );
}

export default App;
