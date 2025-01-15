// My handmade functional component
/*
function Greeting() { // React components must be capitalized
    return <h1>Hello I am chuc</h1>;
}
*/
function List(props) {
    return (
      <ul>
        {props.animals.map((item) => {
          return item.startsWith("L") ? <li key={item}>{item}</li> : null;
        })}
      </ul>
    );
  }
  
function App() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];
  
    return (
      <div>
        <h1>Animals: </h1>
        <List animals={animals} />
      </div>
    );
  }
  
export default App;