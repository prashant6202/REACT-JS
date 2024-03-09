class Course extends React.Component {
  render() {
    let { name, titles } = this.props;
    let arr = [];
    titles.forEach((x) => {
      arr.push(<li>{x}</li>);
    });
    return (
      <div>
        <p>Course Name: {name}</p>
        <section>
          Title: <ul>{arr}</ul>
        </section>
      </div>
    );
  }
}
