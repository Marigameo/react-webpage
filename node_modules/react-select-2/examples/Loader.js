import React, { Component }    from 'react';
import Select from '../src/Select2';

export class Loader extends Component {

  state = {
    value     : null,
    inputValue: '',
    options   : [
      {
        value: 0,
        label: 'test'
      },
      {
        value: 1,
        label: 'test 2'
      },
      {
        value: 2,
        label: 'test 3'
      }
    ]
  }

  onChange = (value) => {
    this.setState({
      value
    });
  }

  onInputChange = (value) => {
    this.setState({
      inputValue: value
    });
  }

  render() {
    const { options, value } = this.state;
    return (
        <div className="section">
          <h3 className="section-heading">{this.props.label}</h3>
          <Select
              isLoading
              value={value}
              options={options}
              onInputChange={this.onInputChange}
              onChange={this.onChange}
              ref={el => (this.selectEl = el)}
          />
        </div>
    )
  }
}
