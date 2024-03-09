class MyApp extends React.Component {
  render() {
    return (
      <Student
        name="Prashant"
        age={20}
        subjects={["Phy", "Chem", "Math"]}
        marks={[40, 55, 60]}
      />
    );
  }
}
let myDiv = document.querySelector("#root");
let root = ReactDOM.createRoot(myDiv);
root.render(<MyApp />);
