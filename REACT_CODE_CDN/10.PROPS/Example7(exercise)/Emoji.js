class Emoji extends React.Component {
  render() {
    let { e1, e2, e3 } = this.props;
    let result = e1 === e2 && e2 === e3;
    return (
      <div>
        <span>{e1}</span>
        <span>{e2}</span>
        <span>{e3}</span>
        <p>{result === true ? "You won" : "you lose"}</p>
      </div>
    );
  }
}
