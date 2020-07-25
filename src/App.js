import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getAddition, getSubtraction, getMultiplication, getDivision } from './Action/calcAction';

const buttonStyle = {
  background: "linear-gradient(#800080, #440a44)",
  color: "white",
  width: "96px",
  height: "69px",
  margin: '5px'
}

const containerStyle = {
  paddingTop: '30px',
  paddingBottom: '30px'
}

const Addition = (props) => {
  return (<button style={buttonStyle} onClick={props.onClick}>
   <div>  +
    <div>
    <text>Addition</text>
    </div>
    </div>
  </button>)
}

const Subtraction = (props) => {
  return (<button style={buttonStyle} onClick={props.onClick}>
    <div>  -
    <div>
    <text>Subtraction</text>
    </div>
    </div>
  </button>)
}

const Multiplication = (props) => {
  return (<button style={buttonStyle} onClick={props.onClick}>
     <div>  -
    <div>
    <text>Multiplication</text>
    </div>
    </div>
  </button>)
}

const Division = (props) => {
  return (<button style={buttonStyle} onClick={props.onClick}>
     <div>  /
    <div>
    <text>Division</text>
    </div>
    </div>
  </button>)
}

class Calculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value1: '',
      value2: ''
    }
  }

  handleFirstInputChange = (event) => {
    if (isNaN(Number(event.target.value))) {
      return;
    } else {
      this.setState({ value1: event.target.value });
    }
  }


  handleSecondInputChange = (event) => {
    if (isNaN(Number(event.target.value))) {
      return;
    } else {
      this.setState({ value2: event.target.value });
    }
  }

  handleAddition = () => {
    const { value1, value2 } = this.state;
    if (value1 !== "" && value2 !== "") {
      this.props.getAddition(value1, value2)
    }

  }

  handleSubtraction = () => {
    const { value1, value2 } = this.state;
    if (value1 !== "" && value2 !== "") {
      this.props.getSubtraction(value1, value2)
    }

  }

  handleMultiplication = () => {
    const { value1, value2 } = this.state;
    if (value1 !== "" && value2 !== "") {
      this.props.getMultiplication(value1, value2)
    }

  }

  handleDivision = () => {
    const { value1, value2 } = this.state;
    if (value1 !== "" && value2 !== "") {
      this.props.getDivision(value1, value2)
    }
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">Calculator</div>
        <div>
          <div className="container">
            <div style={{ paddingBottom: '10px', paddingTop: '10px' }}>
              <input className="inputVal" type="number" onChange={(event) => this.handleFirstInputChange(event)}></input>
            </div>
            <div><input className="inputVal" type="number" onChange={(event) => this.handleSecondInputChange(event)}></input></div>
            <div style={containerStyle}>
              <div className="row">
                <div className="col-12 justify-center">
                  <Addition onClick={this.handleAddition} />
                  <Subtraction onClick={this.handleSubtraction} />
                </div>
              </div>
              <div className="row">
                <div className="col-12 justify-center">
                  <Multiplication onClick={this.handleMultiplication} />
                  <Division onClick={this.handleDivision} />
                </div>
              </div>
            </div>
            <div>Result : {this.props.result}</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    result: state.CalcReducer.result
  }
}

const mapDispatchToProps = { getAddition, getSubtraction, getMultiplication, getDivision }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator)

