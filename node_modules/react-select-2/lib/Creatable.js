'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Select = require('./Select2');

var _Select2 = _interopRequireDefault(_Select);

var _defaultFilterOptions = require('./utils/defaultFilterOptions');

var _defaultFilterOptions2 = _interopRequireDefault(_defaultFilterOptions);

var _defaultMenuRenderer = require('./utils/defaultMenuRenderer');

var _defaultMenuRenderer2 = _interopRequireDefault(_defaultMenuRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Creatable = _react2.default.createClass({
  displayName: 'CreatableSelect',

  propTypes: {
    // Child function responsible for creating the inner Select component
    // This component can be used to compose HOCs (eg Creatable and Async)
    // (props: Object): PropTypes.element
    children: _react2.default.PropTypes.func,

    // See Select.propTypes.filterOptions
    filterOptions: _react2.default.PropTypes.any,

    // Searches for any matching option within the set of options.
    // This function prevents duplicate options from being created.
    // ({ option: Object, options: Array, labelKey: string, valueKey: string }): boolean
    isOptionUnique: _react2.default.PropTypes.func,

    // Determines if the current input text represents a valid option.
    // ({ label: string }): boolean
    isValidNewOption: _react2.default.PropTypes.func,

    // See Select.propTypes.menuRenderer
    menuRenderer: _react2.default.PropTypes.any,

    // Factory to create new option.
    // ({ label: string, labelKey: string, valueKey: string }): Object
    newOptionCreator: _react2.default.PropTypes.func,

    // input change handler: function (inputValue) {}
    onInputChange: _react2.default.PropTypes.func,

    // input keyDown handler: function (event) {}
    onInputKeyDown: _react2.default.PropTypes.func,

    // new option click handler: function (option) {}
    onNewOptionClick: _react2.default.PropTypes.func,

    // See Select.propTypes.options
    options: _react2.default.PropTypes.array,

    // Creates prompt/placeholder option text.
    // (filterText: string): string
    promptTextCreator: _react2.default.PropTypes.func,

    // Decides if a keyDown event (eg its `keyCode`) should result in the creation of a new option.
    shouldKeyDownEventCreateNewOption: _react2.default.PropTypes.func,
    showNewOptionAtTop: _react2.default.PropTypes.bool
  },

  // Default prop methods
  statics: {
    isOptionUnique: isOptionUnique,
    isValidNewOption: isValidNewOption,
    newOptionCreator: newOptionCreator,
    promptTextCreator: promptTextCreator,
    shouldKeyDownEventCreateNewOption: shouldKeyDownEventCreateNewOption
  },

  getDefaultProps: function getDefaultProps() {
    return {
      filterOptions: _defaultFilterOptions2.default,
      isOptionUnique: isOptionUnique,
      isValidNewOption: isValidNewOption,
      menuRenderer: _defaultMenuRenderer2.default,
      newOptionCreator: newOptionCreator,
      promptTextCreator: promptTextCreator,
      showNewOptionAtTop: true,
      shouldKeyDownEventCreateNewOption: shouldKeyDownEventCreateNewOption
    };
  },
  createNewOption: function createNewOption() {
    var _props = this.props,
        isValidNewOption = _props.isValidNewOption,
        newOptionCreator = _props.newOptionCreator,
        onNewOptionClick = _props.onNewOptionClick,
        _props$options = _props.options,
        options = _props$options === undefined ? [] : _props$options,
        shouldKeyDownEventCreateNewOption = _props.shouldKeyDownEventCreateNewOption;


    if (isValidNewOption({ label: this.inputValue })) {
      var option = newOptionCreator({ label: this.inputValue, labelKey: this.labelKey, valueKey: this.valueKey });
      var _isOptionUnique = this.isOptionUnique({ option: option });

      // Don't add the same option twice.
      if (_isOptionUnique) {
        if (onNewOptionClick) {
          onNewOptionClick(option);
        } else {
          options.unshift(option);

          this.select.selectValue(option);
        }
      }
    }
  },
  filterOptions: function filterOptions() {
    var _props2 = this.props,
        filterOptions = _props2.filterOptions,
        isValidNewOption = _props2.isValidNewOption,
        options = _props2.options,
        promptTextCreator = _props2.promptTextCreator,
        showNewOptionAtTop = _props2.showNewOptionAtTop;

    // TRICKY Check currently selected options as well.
    // Don't display a create-prompt for a value that's selected.
    // This covers async edge-cases where a newly-created Option isn't yet in the async-loaded array.

    var excludeOptions = (arguments.length <= 2 ? undefined : arguments[2]) || [];

    var filteredOptions = filterOptions.apply(undefined, arguments) || [];

    if (isValidNewOption({ label: this.inputValue })) {
      var _newOptionCreator = this.props.newOptionCreator;


      var option = _newOptionCreator({
        label: this.inputValue,
        labelKey: this.labelKey,
        valueKey: this.valueKey
      });

      // TRICKY Compare to all options (not just filtered options) in case option has already been selected).
      // For multi-selects, this would remove it from the filtered list.
      var _isOptionUnique2 = this.isOptionUnique({
        option: option,
        options: excludeOptions.concat(filteredOptions)
      });

      if (_isOptionUnique2) {
        var prompt = promptTextCreator(this.inputValue);

        this._createPlaceholderOption = _newOptionCreator({
          label: prompt,
          labelKey: this.labelKey,
          valueKey: this.valueKey
        });

        if (showNewOptionAtTop) {
          filteredOptions.unshift(this._createPlaceholderOption);
        } else {
          filteredOptions.push(this._createPlaceholderOption);
        }
      }
    }

    return filteredOptions;
  },
  isOptionUnique: function isOptionUnique(_ref) {
    var option = _ref.option,
        options = _ref.options;
    var isOptionUnique = this.props.isOptionUnique;


    options = options || this.select.filterOptions();

    return isOptionUnique({
      labelKey: this.labelKey,
      option: option,
      options: options,
      valueKey: this.valueKey
    });
  },
  menuRenderer: function menuRenderer(params) {
    var menuRenderer = this.props.menuRenderer;


    return menuRenderer(_extends({}, params, {
      onSelect: this.onOptionSelect,
      selectValue: this.onOptionSelect
    }));
  },
  onInputChange: function onInputChange(inputValue) {
    var onInputChange = this.props.onInputChange;


    if (onInputChange) {
      inputValue = onInputChange(inputValue) || '';
    }

    // This value may be needed in between Select mounts (when this.select is null)
    this.inputValue = inputValue;
    return inputValue;
  },
  onInputKeyDown: function onInputKeyDown(event) {
    var _props3 = this.props,
        shouldKeyDownEventCreateNewOption = _props3.shouldKeyDownEventCreateNewOption,
        onInputKeyDown = _props3.onInputKeyDown;

    var focusedOption = this.select.getFocusedOption();

    if (focusedOption && focusedOption === this._createPlaceholderOption && shouldKeyDownEventCreateNewOption({ keyCode: event.keyCode })) {
      this.createNewOption();

      // Prevent decorated Select from doing anything additional with this keyDown event
      event.preventDefault();
    } else if (onInputKeyDown) {
      onInputKeyDown(event);
    }
  },
  onOptionSelect: function onOptionSelect(option, event) {
    if (option === this._createPlaceholderOption) {
      this.createNewOption();
    } else {
      this.select.selectValue(option);
    }
  },
  focus: function focus() {
    this.select.focus();
  },
  render: function render() {
    var _this = this;

    var _props4 = this.props,
        newOptionCreator = _props4.newOptionCreator,
        shouldKeyDownEventCreateNewOption = _props4.shouldKeyDownEventCreateNewOption,
        refProp = _props4.refProp,
        restProps = _objectWithoutProperties(_props4, ['newOptionCreator', 'shouldKeyDownEventCreateNewOption', 'refProp']);

    var children = this.props.children;

    // We can't use destructuring default values to set the children,
    // because it won't apply work if `children` is null. A falsy check is
    // more reliable in real world use-cases.

    if (!children) {
      children = defaultChildren;
    }

    var props = _extends({}, restProps, {
      allowCreate: true,
      filterOptions: this.filterOptions,
      menuRenderer: this.menuRenderer,
      onInputChange: this.onInputChange,
      onInputKeyDown: this.onInputKeyDown,
      ref: function ref(_ref2) {
        _this.select = _ref2;

        // These values may be needed in between Select mounts (when this.select is null)
        if (_ref2) {
          _this.labelKey = _ref2.props.labelKey;
          _this.valueKey = _ref2.props.valueKey;
        }
        if (refProp) {
          refProp(_ref2);
        }
      }
    });

    return children(props);
  }
});

function defaultChildren(props) {
  return _react2.default.createElement(_Select2.default, props);
};

function isOptionUnique(_ref3) {
  var option = _ref3.option,
      options = _ref3.options,
      labelKey = _ref3.labelKey,
      valueKey = _ref3.valueKey;

  return options.filter(function (existingOption) {
    return existingOption[labelKey] === option[labelKey] || existingOption[valueKey] === option[valueKey];
  }).length === 0;
};

function isValidNewOption(_ref4) {
  var label = _ref4.label;

  return !!label;
};

function newOptionCreator(_ref5) {
  var label = _ref5.label,
      labelKey = _ref5.labelKey,
      valueKey = _ref5.valueKey;

  var option = {};
  option[valueKey] = label;
  option[labelKey] = label;
  option.className = 'Select-create-option-placeholder';
  return option;
};

function promptTextCreator(label) {
  return 'Create option "' + label + '"';
}

function shouldKeyDownEventCreateNewOption(_ref6) {
  var keyCode = _ref6.keyCode;

  switch (keyCode) {
    case 9: // TAB
    case 13: // ENTER
    case 188:
      // COMMA
      return true;
  }

  return false;
};

module.exports = Creatable;