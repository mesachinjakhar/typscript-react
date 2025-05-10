import "./App.css";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Status } from "./components/Status";

function App() {
  return (
    <>
      <Status status="loading"></Status>
      <Heading>PlaceHolder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Sachin Jakhar</Heading>
      </Oscar>
    </>
  );
}

export default App;
