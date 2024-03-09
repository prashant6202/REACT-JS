class MyApp extends React.Component {
  render() {
    return (
      <div>
        <RandomNum />
        <Greatings />
      </div>
    );
  }
}

let myDiv = document.querySelector("#root");
let root = ReactDOM.createRoot(myDiv);
root.render(<MyApp />);
