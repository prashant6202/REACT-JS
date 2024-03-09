class Greetings extends React.Component {
  static defaultProps = { name: "EVERYONE", from: "SCA" };

  render() {
    return (
      <h1>
        Happy New Year {this.props.name} from {this.props.from}{" "}
      </h1>
    );
  }
}
