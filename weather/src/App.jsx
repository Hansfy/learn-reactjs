import "./App.css";
import Weather from "./components/Weather.jsx";
import UserStatus from "./components/UserStatus.jsx";
import Greeting from "./components/Greeting.jsx";

function App() {
  return (
    <div>
      <h1>User Status:</h1>
      <UserStatus logedIn={true} isAdmin={true} />
      <h1>Weather Status:</h1>
      <Weather />
      <h1>Greeting:</h1>
      <Greeting timeOfDay="morning" />
      <p>Check the console for any errors.</p>
      <p>Ensure the components are working as expected.</p>
    </div>
  );
}

export default App;
