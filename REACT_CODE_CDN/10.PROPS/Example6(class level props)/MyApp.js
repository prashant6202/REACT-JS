class MyApp extends React.Component {
  render() {
    return <Greetings name="Prashant" from="Karuna" />;
  }
}
let myDiv = document.querySelector("#root");
let root = ReactDOM.createRoot(myDiv);
root.render(<MyApp />);
