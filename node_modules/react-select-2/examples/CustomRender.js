import React, { Component }    from 'react';
import Select from '../src/Select2';
import Highlighter from 'react-highlight-words';

export class CustomRenderSelect extends Component {

  state = {
    value     : null,
    inputValue: '',
    options   : [
      { label: 'Basic customer support', value: 'basic', color: '#E31864' },
      { label: 'Premium customer support', value: 'premium', color: '#6216A3' },
      { label: 'Pro customer support', value: 'pro', disabled: true, link: null },
    ]
  }

  onInputChange = (value) => {
    this.setState({
      inputValue: value
    });
  }

  onChange = (value) => {
    this.setState({ value });
  }

  renderOption = (option) => (
      <Highlighter
          searchWords={[this.state.inputValue]}
          textToHighlight={option.label}
      />
  )

  renderValue = (option) => {
    return <strong style={{ color: option.color }}>{option.label}</strong>;
  }

  render() {
    const { options, value } = this.state;


    return (
        <div className="section">
          <h3 className="section-heading">{this.props.label}</h3>
          <Select
              onChange={this.onChange}
              options={options}
              value={value}
              valueRenderer={this.renderValue}
              optionRenderer={this.renderOption}
          />

          <div className="hint">This demonstates custom render methods and links in disabled options</div>
        </div>
    )
  }
}
