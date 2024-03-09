class MyApp extends React.Component {
  render() {
    return (
      <Student
        name="Prashant"
        age={20}
        subjects={["Phy", "Chem", "Math"]}
        marks={[50, 60, 70, 80]}
        isPass={true}
        address={{ city: "Bhopal", pincode: 847229 }}
      />
    );
  }
}
let myDiv = document.querySelector("#root");
let root = ReactDOM.createRoot(myDiv);
root.render(<MyApp />);
