import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "./component/container"

function App() {
  return (
    <div className="container">
      <h2 style={{color: "green" , marginLeft: "450px", marginTop:"30px"}}>Task Manager App</h2>
      <Container />
    </div>
  );
}

export default App;