import React, { Component }    from 'react';
import Creatable from '../src/Creatable';

export class ExampleCreatable extends Component {

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
    return value;
  }

  _newOptionCreator = value => ({
    value         : (Math.random() * 10).toString(16),
    label         : value.label,
    accNum        : value.label,
    clearableValue: false
  })

  _promptTextCreator = value => value

  render() {
    const { options, value } = this.state;
    return (
        <div className="section">
          <h3 className="section-heading">{this.props.label}</h3>
          <Creatable
              openOnFocus
              value={value}
              options={options}
              onInputChange={this.onInputChange}
              onChange={this.onChange}
              refProp={el => (this.selectEl = el)}
              promptTextCreator={this._promptTextCreator}
              newOptionCreator={this._newOptionCreator}
          />
        </div>
    )
  }
}
