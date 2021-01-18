import React from 'react';

class DateTextInput extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      type: this.props.type,
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(event) {
      console.log('In Handle Change');
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      event.preventDefault();
      this.props.onSubmit(this.state.type, this.state.value);
    }


  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
        {this.state.type}
          <input className="date-imput" id={this.state.type} placeholder="Add date" type="text" placeholder='MM/DD/YYYY' onChange={this.handleChange} value={this.state.value.length > 0 ? this.state.value : this.props.value} />
        </label>
      </form >
      )
    }
 }

 export default DateTextInput;