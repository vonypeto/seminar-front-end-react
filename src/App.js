import NavBar from "./NavBar";
import Home from "./Home";
function App() {
  const title = "Welcome to my first post";

  const like = 100;

  const person = { name: "bata", age: 44 };

  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
