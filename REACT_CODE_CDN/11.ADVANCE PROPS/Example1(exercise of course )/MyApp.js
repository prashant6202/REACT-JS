class MyApp extends React.Component {
  render() {
    return (
      <div>
        <h1>Student Details:</h1>
        <Course name="Java" titles={["Java SE", "Jakarta EE", "Android"]} />;
        <Course
          name="Front End Development"
          titles={["HTML", "CSS", "Java Script", "React JS"]}
        />
      </div>
    );
  }
}
let myDiv = document.querySelector("#root");
let root = ReactDOM.createRoot(myDiv);
root.render(<MyApp />);
