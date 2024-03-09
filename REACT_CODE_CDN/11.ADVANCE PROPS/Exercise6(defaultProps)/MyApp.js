class MyApp extends React.Component {
   render() {
    return (
      <div>
        <Greetings name="Prashant" from="Karuna" />
        <Greetings name="Prashant" />
        <Greetings from="Karuna" />
      </div>
    );
  }
}
let myDiv = document.querySelector("#root");
let root = ReactDOM.createRoot(myDiv);
root.render(<MyApp />);
