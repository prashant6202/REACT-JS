class Student extends React.Component {
  render() {
    let { subjects, marks } = this.props;
    let arr = subjects.map((s) => <li>{s}</li>);
    let total = 0;
    let brr = marks.map((m) => {
      total += m;
      return <li>{m}</li>;
    });
    return (
      <div>
        <h1>Details of strudent</h1>
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
        <scetion>
          <p>Subjects:</p>
          <ul>
            <b>{arr}</b>
          </ul>
        </scetion>
        <scetion>
          <p>Marks:</p>
          <ul>
            <b>{brr}</b>
          </ul>
        </scetion>
        <p>
          Total: <b>{total}</b>
        </p>

        <p>
          Result: <b>{total >= 120 ? "Pass" : "Fail"}</b>
        </p>
      </div>
    );
  }
}
