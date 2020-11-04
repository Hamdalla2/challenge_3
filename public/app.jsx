class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }

  render () {
    return (<div>
      <button onclick="F1.render()">Checkout</button>
    </div>)
  }
}


class F1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { a:
      '<button onclick="c()">Next</button>'
    }
  }

  render () {
    return (
    <div>
    <button onclick="c()">Checkout</button>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));