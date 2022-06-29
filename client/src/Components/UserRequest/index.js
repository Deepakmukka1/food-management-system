import Food from "./FoodCard";
import Navbar from "./Navbar";

function App() {
  return (
  
      <div className="App">
        <Navbar/>
        <Food type='Lunch' time=' - 12pm'/>
        <br></br>
        <Food type='Dinner' time=' - 7pm'/>
      </div>

  );
}

export default App;
