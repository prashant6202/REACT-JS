class MyApp extends React.Component {
  render() {
    return <Hello />;
  }
}
let myDiv = document.querySelector("#root");
let root = ReactDOM.createRoot(myDiv);
root.render(<MyApp/>);
