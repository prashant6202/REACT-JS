class Course extends React.Component {
  render() {
    let { name, titles } = this.props;
    //let arr = titles.map((t) => <li>{t}</li>);      dirext pass kr diye

    return (
      <div>
        <p>Course Name: {name}</p>
        <section>
          Title:{" "}
          <ul>
            {titles.map((t) => (
              <li>{t}</li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}
