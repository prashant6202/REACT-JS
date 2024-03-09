function getNumber() {
  let arr = [1, 2, 45, 6, 67, 43, 5, 34, 67, 81];
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
class RandomNum extends React.Component {
    render() {
      let randNum = getNumber();

      let mess;
      if (randNum == 6) {
        mess = (
          <p>
            <h3>Congratulations ! you won </h3>
            <a href="https://imgflip.com/i/8c36ol">
              <img
                src="https://i.imgflip.com/8c36ol.jpg"
                title="made at imgflip.com"
              />
            </a>
          </p>
        );
      } else {
        mess = <small>Sorry ! better luck next time</small>;
      }

      let myDiv = (
        <div>
          <p>
            You got the number <b>{randNum}</b>
          </p>
          {mess}
        </div>
      );
      return myDiv;
    }
  }
