'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Select = require('./Select2');

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reduce(obj) {
	var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	return Object.keys(obj).reduce(function (props, key) {
		var value = obj[key];
		if (value !== undefined) props[key] = value;
		return props;
	}, props);
}

var AsyncCreatable = _react2.default.createClass({
	displayName: 'AsyncCreatableSelect',

	focus: function focus() {
		this.select.focus();
	},
	render: function render() {
		var _this = this;

		return _react2.default.createElement(
			_Select2.default.Async,
			this.props,
			function (asyncProps) {
				return _react2.default.createElement(
					_Select2.default.Creatable,
					_this.props,
					function (creatableProps) {
						return _react2.default.createElement(_Select2.default, _extends({}, reduce(asyncProps, reduce(creatableProps, {})), {
							onInputChange: function onInputChange(input) {
								creatableProps.onInputChange(input);
								return asyncProps.onInputChange(input);
							},
							ref: function ref(_ref) {
								_this.select = _ref;
								creatableProps.ref(_ref);
								asyncProps.ref(_ref);
							}
						}));
					}
				);
			}
		);
	}
});

module.exports = AsyncCreatable;