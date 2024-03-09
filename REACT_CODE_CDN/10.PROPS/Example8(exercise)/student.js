class Student extends React.Component {
  render() {
    let { city, pincode } = this.props.address;
    return (
      <div>
        <h1>Details of strudent</h1>
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
        <p>subjects: {this.props.subjects.join(", ")}</p>
        <p>Marks: {this.props.marks.join(", ")}</p>
        <p>isPass: {String(this.props.isPass)}</p>
        <p>City: {city}</p>
        <p>pincode: {pincode }</p>
      </div>
    );
  }
}
//<p>address: {this.props.address.city },{this.props.address.pincode}</p>
