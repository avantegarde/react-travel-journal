import Header from './Components/Header'
import Location from './Components/Location'
import './App.css';
import locationData from "./locationData.js"

function App() {
  const locations = locationData.map(item => {
    return (
      <Location 
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <div className="App">
      <Header />
      <section className="locations">
        {locations}
      </section>
    </div>
  );
}

export default App;
