// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomnumber: 0}

  generateRandomNumber = () => {
    this.setState({randomnumber: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {randomnumber} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            onClick={this.generateRandomNumber}
            type="button"
            className="button"
          >
            Generate
          </button>
          <p className="output">{randomnumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
