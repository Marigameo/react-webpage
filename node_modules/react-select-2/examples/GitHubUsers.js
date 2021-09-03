import React, { Component, PropTypes }    from 'react';
import AsyncCreatable from '../src/AsyncCreatable';
import Async from '../src/Async';
import fetch from 'isomorphic-fetch';


export class GithubUsers extends Component {

  static propTypes = {
    label: PropTypes.string
  }

  state = {
    backspaceRemoves: true,
    multi: true
  }

  onChange  = (value) => {
    this.setState({
      value: value,
    });
  }

  switchToMulti = () => {
    this.setState({
      multi: true,
      value: [this.state.value],
    });
  }

  switchToSingle = () => {
    this.setState({
      multi: false,
      value: this.state.value ? this.state.value[0] : null
    });
  }

  getUsers = (input) => {
    if (!input) {
      return Promise.resolve({ options: [] });
    }

    return fetch(`https://api.github.com/search/users?q=${input}`)
        .then((response) => response.json())
        .then((json) => {
          return { options: json.items };
        });
  }

  gotoUser = (value, event) => {
    window.open(value.html_url);
  }

  toggleBackspaceRemoves = () => {
    this.setState({
      backspaceRemoves: !this.state.backspaceRemoves
    });
  }

  toggleCreatable = () => {
    this.setState({
      creatable: !this.state.creatable
    });
  }

  render () {
    const AsyncComponent = this.state.creatable
        ? AsyncCreatable
        : Async;

    return (
        <div className="section">
          <h3 className="section-heading">{this.props.label}</h3>
          <AsyncComponent
              multi={this.state.multi}
              value={this.state.value}
              onChange={this.onChange}
              onValueClick={this.gotoUser}
              valueKey="id"
              labelKey="login"
              loadOptions={this.getUsers}
              backspaceRemoves={this.state.backspaceRemoves}
          />
          <div className="checkbox-list">
            <label className="checkbox">
              <input type="radio" className="checkbox-control" checked={this.state.multi} onChange={this.switchToMulti}/>
              <span className="checkbox-label">Multiselect</span>
            </label>
            <label className="checkbox">
              <input type="radio" className="checkbox-control" checked={!this.state.multi} onChange={this.switchToSingle}/>
              <span className="checkbox-label">Single Value</span>
            </label>
          </div>
          <div className="checkbox-list">
            <label className="checkbox">
              <input type="checkbox" className="checkbox-control" checked={this.state.creatable} onChange={this.toggleCreatable} />
              <span className="checkbox-label">Creatable?</span>
            </label>
            <label className="checkbox">
              <input type="checkbox" className="checkbox-control" checked={this.state.backspaceRemoves} onChange={this.toggleBackspaceRemoves} />
              <span className="checkbox-label">Backspace Removes?</span>
            </label>
          </div>
          <div className="hint">This example uses fetch.js for showing Async options with Promises</div>
        </div>
    );
  }
}
