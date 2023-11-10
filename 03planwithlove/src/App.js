import data from './data.js';
import Cards from './components/Cards.js';


function App() {
  //console.log(data)
  return (
    <div className="App">
      <Cards data={data}></Cards>
    </div>
  );
}

export default App;
