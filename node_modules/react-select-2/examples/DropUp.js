import React, { Component }    from 'react';
import classNames              from 'classnames';
import { debounce }            from 'lodash';
import Select from '../src/Select2';

const MAX_MENU_HEIGHT = 200;
const AVG_OPTION_HEIGHT = 20;

export class DropUpSelect extends Component {

  state = {
    value     : null,
    inputValue: '',
    dropUp    : false,
    options   : [
      { value: 10, label: 'Ten' },
      { value: 11, label: 'Eleven' },
      { value: 12, label: 'Twelve' },
      { value: 23, label: 'Twenty-three' },
      { value: 24, label: 'Twenty-four' }
    ]
  }

  componentDidMount() {
    this.determineDropUp(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.determineDropUp(nextProps);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.determineDropUp);
  }

  onChangeMatchStart = (event) => {
    this.setState({
      matchPos: event.target.checked ? 'start' : 'any'
    });
  }

  onChangeMatchValue = (event) => {
    this.setState({
      matchValue: event.target.checked
    });
  }

  onChangeMatchLabel = (event) => {
    this.setState({
      matchLabel: event.target.checked
    });
  }

  onChange = (value) => {
    this.setState({ value });
    console.log('Numeric Select value changed to', value);
  }

  onChangeMulti = (event) => {
    this.setState({
      multi: event.target.checked
    });
  }

  onOpen = () => {
    window.addEventListener('scroll', this.determineDropUp);
    this.setState({ isOpen: true });
  }

  onClose = () => {
    window.removeEventListener('scroll', this.determineDropUp);
    this.setState({ isOpen: false });
  }

  /**
   * открывать select вниз или вверх
   * @type {Function}
   */
  determineDropUp = debounce((props = {}) => {
    const options = props.options || this.props.options || [];
    const node = this.selectEl.control;

    if (!node) return;

    const windowHeight = window.innerHeight;
    const menuHeight = Math.min(MAX_MENU_HEIGHT, ((options.length || 200) * AVG_OPTION_HEIGHT));
    const instOffsetWithMenu = node.getBoundingClientRect().bottom + menuHeight;

    this.setState({
      dropUp: instOffsetWithMenu >= windowHeight,
    });
  }, 66)

  render() {
    const { options, value, dropUp, isOpenTop } = this.state;

    const classSelector = classNames({
      'm-select-drop-up': dropUp || isOpenTop,
    });

    return (
        <div className="section">
          <h3 className="section-heading">{this.props.label}</h3>
          <Select
              ref={el => (this.selectEl = el)}
              autoBlur
              openOnFocus
              onOpen={this.onOpen}
              onClose={this.onClose}
              onChange={this.onChange}
              className={classSelector}
              options={options}
              value={value}
          />

          <div className="checkbox-list">
            <pre style={{ marginBottom: '15px' }}>
            {`
const MAX_MENU_HEIGHT = 200;
const AVG_OPTION_HEIGHT = 20;

determineDropUp = debounce((props = {}) => {
  const options = props.options || this.props.options || [];
  const node = this.selectEl.control;

  if (!node) return;

  const windowHeight = window.innerHeight;
  const menuHeight = Math.min(MAX_MENU_HEIGHT, ((options.length || 200) * AVG_OPTION_HEIGHT));
  const instOffsetWithMenu = node.getBoundingClientRect().bottom + menuHeight;

  this.setState({
    dropUp: instOffsetWithMenu >= windowHeight,
  });
}, 66)
            `}
            </pre>
            <pre style={{ marginBottom: '15px' }}>
            {`
const classSelector = classNames({
  'm-select-drop-up': dropUp || isOpenTop,
});
            `}
            </pre>
            <pre style={{ marginBottom: '15px' }}>
            {`
.m-select-drop-up .Select-menu-outer {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: -1px;
  border-radius: 4px 4px 0 0;
  box-shadow: none;
}

.m-select-drop-up .is-open > .Select-control {
  border-radius: 0 0 4px 4px;
}
            `}
            </pre>
          </div>
        </div>
    )
  }
}
