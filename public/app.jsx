class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {    }
  }
  render () {
    return (<div id="x">
      <br></br>
      <button onClick={a}>Checkout</button>
    </div>)
  }
}


ReactDOM.render(<App />, document.getElementById('app'));