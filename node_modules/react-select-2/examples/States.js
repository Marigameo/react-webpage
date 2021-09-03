import React, { Component, PropTypes }    from 'react';
import Select from '../src/Select2';
import { STATES } from './data/states';

export class States extends Component {

  static propTypes = {
    label     : PropTypes.string,
    searchable: PropTypes.bool,
  }

  static defaultProps = {
    label     : 'States:',
    searchable: true
  }

  state = {
    value      : null,
    inputValue : '',
    country    : 'AU',
    disabled   : false,
    searchable : this.props.searchable,
    selectValue: 'new-south-wales',
    clearable  : true
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

  switchCountry = (e) => {
    var newCountry = e.target.value;
    console.log('Country changed to ' + newCountry);
    this.setState({
      country    : newCountry,
      selectValue: null
    });
  }

  updateValue = (value) => {
    console.log('State changed to ' + value);
    this.setState({
      selectValue: value
    });
  }

  focusStateSelect = () => {
    this.refs.stateSelect.focus();
  }

  toggleCheckbox = (e) => {
    let newState = {};
    newState[e.target.name] = e.target.checked;
    this.setState(newState);
  }
  _onBlur = () => {

  }

  render() {
    let options = STATES[this.state.country];
    return (
        <div className="section">
          <h3 className="section-heading">{this.props.label}</h3>
          <Select
              autoBlur
              openOnFocus
              simpleValue
              ref="stateSelect"
              options={options}
              clearable={this.state.clearable}
              name="selected-state"
              disabled={this.state.disabled}
              value={this.state.selectValue}
              onChange={this.updateValue}
              onBlur={this._onBlur}
              searchable={this.state.searchable}
          />

          <div style={{ marginTop: 14 }}>
            <button type="button" onClick={this.focusStateSelect}>Focus Select</button>
            <label className="checkbox" style={{ marginLeft: 10 }}>
              <input
                  type="checkbox"
                  className="checkbox-control"
                  name="searchable"
                  checked={this.state.searchable}
                  onChange={this.toggleCheckbox}
              />
              <span className="checkbox-label">Searchable</span>
            </label>
            <label className="checkbox" style={{ marginLeft: 10 }}>
              <input
                  type="checkbox"
                  className="checkbox-control"
                  name="disabled"
                  checked={this.state.disabled}
                  onChange={this.toggleCheckbox}
              />
              <span className="checkbox-label">Disabled</span>
            </label>
            <label className="checkbox" style={{ marginLeft: 10 }}>
              <input
                  type="checkbox"
                  className="checkbox-control"
                  name="clearable"
                  checked={this.state.clearable}
                  onChange={this.toggleCheckbox}
              />
              <span className="checkbox-label">Clearable</span>
            </label>
          </div>
          <div className="checkbox-list">
            <label className="checkbox">
              <input
                  type="radio"
                  className="checkbox-control"
                  checked={this.state.country === 'AU'}
                  value="AU"
                  onChange={this.switchCountry}
              />
              <span className="checkbox-label">Australia</span>
            </label>
            <label className="checkbox">
              <input
                  type="radio"
                  className="checkbox-control"
                  checked={this.state.country === 'US'}
                  value="US"
                  onChange={this.switchCountry}
              />
              <span className="checkbox-label">United States</span>
            </label>
          </div>
        </div>
    );
  }
}
