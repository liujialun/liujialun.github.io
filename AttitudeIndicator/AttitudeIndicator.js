'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skyGround = require('./assets/sky-ground.svg');

var _skyGround2 = _interopRequireDefault(_skyGround);

var _border = require('./assets/border.svg');

var _border2 = _interopRequireDefault(_border);

var _marker = require('./assets/marker.svg');

var _marker2 = _interopRequireDefault(_marker);

var _pitchMarker = require('./assets/pitch-marker.svg');

var _pitchMarker2 = _interopRequireDefault(_pitchMarker);

var _speedLine = require('./assets/speed-line.svg');

var _speedLine2 = _interopRequireDefault(_speedLine);

var _speedLabel = require('./assets/speed-label.svg');

var _speedLabel2 = _interopRequireDefault(_speedLabel);

var _speedPointer = require('./assets/speed-pointer.svg');

var _speedPointer2 = _interopRequireDefault(_speedPointer);

var _altLine = require('./assets/alt-line.svg');

var _altLine2 = _interopRequireDefault(_altLine);

var _altPointer = require('./assets/alt-pointer.svg');

var _altPointer2 = _interopRequireDefault(_altPointer);

require('./assets/indicator.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx('img', {
	className: 'indicator box',
	src: _marker2.default,
	alt: ''
});

var _ref2 = _jsx('img', {
	className: 'indicator box',
	src: _border2.default,
	alt: ''
});

var _ref3 = _jsx('img', {
	className: 'indicator box',
	src: _speedLine2.default,
	alt: ''
});

var _ref4 = _jsx('img', {
	className: 'indicator box',
	src: _speedPointer2.default,
	alt: ''
});

var _ref5 = _jsx('rect', {
	x: '0',
	y: '0',
	width: '120',
	height: '100',
	fill: '#000000'
});

var _ref6 = _jsx('rect', {
	x: '0',
	y: '700',
	width: '120',
	height: '100',
	fill: '#000000'
});

var _ref7 = _jsx('img', {
	className: 'indicator box',
	src: _altLine2.default,
	alt: ''
});

var _ref8 = _jsx('img', {
	className: 'indicator box',
	src: _altPointer2.default,
	alt: ''
});

var _ref9 = _jsx('rect', {
	x: '500',
	y: '0',
	width: '120',
	height: '100',
	fill: '#000000'
});

var _ref10 = _jsx('g', {}, void 0, _jsx('rect', {
	x: '500',
	y: '700',
	width: '120',
	height: '100',
	fill: '#000000'
}), _jsx('text', {
	x: '550',
	y: '760',
	fill: '#00ff00',
	fontFamily: 'arial',
	fontSize: '20',
	textAnchor: 'middle'
}, void 0, 'STD'));

var _ref11 = _jsx('g', {}, void 0, _jsx('text', {
	x: '300',
	y: '80',
	fill: '#00ff00',
	fontFamily: 'arial',
	fontSize: '18',
	textAnchor: 'middle'
}, void 0, 'CMD'), _jsx('text', {
	x: '180',
	y: '40',
	fill: '#00ff00',
	fontFamily: 'arial',
	fontSize: '18',
	textAnchor: 'middle'
}, void 0, 'SPD'), _jsx('text', {
	x: '300',
	y: '40',
	fill: '#00ff00',
	fontFamily: 'arial',
	fontSize: '18',
	textAnchor: 'middle'
}, void 0, 'LNAV'), _jsx('text', {
	x: '420',
	y: '40',
	fill: '#00ff00',
	fontFamily: 'arial',
	fontSize: '18',
	textAnchor: 'middle'
}, void 0, 'VNAV PTH'), _jsx('line', {
	x1: '240',
	y1: '10',
	x2: '240',
	y2: '50',
	stroke: '#ffffff',
	strokeWidth: '2'
}), _jsx('line', {
	x1: '360',
	y1: '10',
	x2: '360',
	y2: '50',
	stroke: '#ffffff',
	strokeWidth: '2'
}));

var AttitudeIndicator = function (_Component) {
	_inherits(AttitudeIndicator, _Component);

	function AttitudeIndicator() {
		_classCallCheck(this, AttitudeIndicator);

		return _possibleConstructorReturn(this, (AttitudeIndicator.__proto__ || Object.getPrototypeOf(AttitudeIndicator)).call(this));
	}

	_createClass(AttitudeIndicator, [{
		key: 'setRoll',
		value: function setRoll(roll) {
			this.bg.style.transform = 'rotate(' + roll + 'deg) scale(2)';
		}
	}, {
		key: 'setPitch',
		value: function setPitch(pitch) {
			var top = pitch; //== 0 ? 0 : (pitch > 0 ? pitch + 2.5 : pitch - 2.5);
			this.pitchMarker.style.top = top + '%';
			this.bg.style.top = top + '%';
		}
	}, {
		key: 'setSpeed',
		value: function setSpeed(speed) {
			this.speedLabel.style.top = speed / 2 - 490 + '%';
		}
	}, {
		key: 'setAltitude',
		value: function setAltitude(altitude) {
			this.altitudeLabel.style.top = altitude / 16.16 - 2425 + '%';
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.setRoll(this.props.roll || 0);
			this.setPitch(this.props.pitch || 0);
			this.setSpeed(this.props.speed || 0);
			this.setAltitude(this.props.altitude || 0);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.setRoll(nextProps.roll);
			this.setPitch(nextProps.pitch);
			this.setSpeed(nextProps.speed);
			this.setAltitude(nextProps.altitude);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var width = this.props.width || 600,
			    height = this.props.height || 800;
			if (this.props.width) {
				height = Math.round(this.props.width * 4 / 3);
			} else if (this.props.height) {
				width = Math.round(this.props.height * 3 / 4);
			}

			var roll = this.props.roll || 0;
			var pitch = this.props.pitch || 0;
			var speed = this.props.speed || 0;
			var altitude = this.props.altitude || 0;
			var heading = this.props.heading || 0;

			var speedLabelHeight = 4400 / 800 * height;
			var altLabelHeight = 20000 / 800 * height;

			var altLabels = [];
			for (var i = 0; i < 40000; i += 200) {
				altLabels[i / 200] = i;
			}

			var altH = Math.floor(altitude / 1000);
			if (altH == 0) {
				altH = ' ';
			}
			var altL = Math.floor(altitude % 1000);
			if (altL > 999) {
				console.log('alt:' + altitude + ' altL:' + altL);
			}
			if (altL < 10) {
				altL = '00' + altL.toFixed(0);
			} else if (altL < 100) {
				altL = '0' + altL.toFixed(0);
			} else {
				altL = altL.toFixed(0);
			}

			return _jsx('div', {
				className: 'indicator',
				style: { width: width, height: height }
			}, void 0, _react2.default.createElement('img', { className: 'indicator box', src: _skyGround2.default, alt: '', ref: function ref(e) {
					return _this2.bg = e;
				} }), _react2.default.createElement('img', { className: 'indicator box', src: _pitchMarker2.default, alt: '', ref: function ref(e) {
					return _this2.pitchMarker = e;
				} }), _ref, _ref2, _ref3, _react2.default.createElement('img', { className: 'indicator box', style: { height: speedLabelHeight }, src: _speedLabel2.default, alt: '', ref: function ref(e) {
					return _this2.speedLabel = e;
				} }), _ref4, _jsx('div', {
				className: 'indicator box'
			}, void 0, _jsx('svg', {
				viewBox: '0 0 600 800',
				width: width,
				height: height,
				xmlns: 'http://www.w3.org/2000/svg',
				xmlnssvg: 'http://www.w3.org/2000/svg'
			}, void 0, _jsx('g', {}, void 0, _ref5, _jsx('text', {
				x: '50',
				y: '60',
				fill: '#ff00ff',
				fontFamily: 'arial',
				fontSize: '20',
				textAnchor: 'middle'
			}, void 0, speed.toFixed(0))), _jsx('g', {}, void 0, _ref6, _jsx('text', {
				x: '50',
				y: '760',
				fill: '#ffffff',
				fontFamily: 'arial',
				fontSize: '20',
				textAnchor: 'middle'
			}, void 0, 'M', (speed / 1224).toFixed(3).substring(1))), _jsx('g', {}, void 0, _jsx('text', {
				x: '75',
				y: '410',
				fill: '#ffffff',
				fontFamily: 'arial',
				fontSize: '24',
				textAnchor: 'end'
			}, void 0, speed.toFixed(0))))), _ref7, _jsx('div', {
				className: 'indicator box'
			}, void 0, _react2.default.createElement(
				'svg',
				{ style: { position: 'absolute' }, viewBox: '0 0 600 20000',
					width: width, height: altLabelHeight,
					xmlns: 'http://www.w3.org/2000/svg',
					xmlnssvg: 'http://www.w3.org/2000/svg', ref: function ref(e) {
						return _this2.altitudeLabel = e;
					} },
				altLabels.map(function (label, i) {
					var h = Math.floor(label / 1000);
					if (h == 0) {
						h = ' ';
					}
					var l = label % 1000 / 100 * 100;
					l = l == 0 ? '000' : l;
					var y = 19800 - i * (19800 / 200);
					var ty = y + 7.5;
					return _jsx('g', {}, void 0, _jsx('line', {
						x1: '501',
						y1: y,
						x2: '515',
						y2: y,
						strokeWidth: '2',
						stroke: '#ffffff',
						fill: 'none'
					}), _jsx('text', {
						x: '550',
						y: ty,
						fill: '#ffffff',
						fontFamily: 'arial',
						fontSize: '24',
						textAnchor: 'end'
					}, void 0, h), _jsx('text', {
						x: '550',
						y: ty,
						fill: '#ffffff',
						fontFamily: 'arial',
						fontSize: '14',
						textAnchor: 'start'
					}, void 0, l));
				})
			)), _ref8, _jsx('div', {
				className: 'indicator box'
			}, void 0, _jsx('svg', {
				style: { position: 'absolute' },
				viewBox: '0 0 600 800',
				width: width,
				height: height,
				xmlns: 'http://www.w3.org/2000/svg',
				xmlnssvg: 'http://www.w3.org/2000/svg'
			}, void 0, _jsx('g', {}, void 0, _ref9, _jsx('text', {
				x: '550',
				y: '60',
				fill: '#ff00ff',
				fontFamily: 'arial',
				fontSize: '20',
				textAnchor: 'end'
			}, void 0, altH), _jsx('text', {
				x: '550',
				y: '60',
				fill: '#ff00ff',
				fontFamily: 'arial',
				fontSize: '14',
				textAnchor: 'start'
			}, void 0, altL)), _ref10, _jsx('g', {}, void 0, _jsx('text', {
				x: '550',
				y: '410',
				fill: '#ffffff',
				fontFamily: 'arial',
				fontSize: '24',
				textAnchor: 'end'
			}, void 0, altH), _jsx('text', {
				x: '550',
				y: '410',
				fill: '#ffffff',
				fontFamily: 'arial',
				fontSize: '18',
				textAnchor: 'start'
			}, void 0, altL)))),
			// 罗盘
			compass(width, height, heading), _jsx('div', {
				className: 'indicator box'
			}, void 0, _jsx('svg', {
				style: { position: 'absolute' },
				viewBox: '0 0 600 800',
				width: width,
				height: height,
				xmlns: 'http://www.w3.org/2000/svg',
				xmlnssvg: 'http://www.w3.org/2000/svg'
			}, void 0, _ref11)));
		}
	}]);

	return AttitudeIndicator;
}(_react.Component);

// compass


function compass(width, height, heading) {
	var alpha = 0.0;
	var markLines = [];
	var cx = 300,
	    cy = 900,
	    r = 200;
	for (var i = 0; i < 72; i++) {
		var l = i % 2 == 0 ? r - 10 : r - 5;
		markLines[i] = {
			x1: cx + r * Math.sin(i * Math.PI / 36),
			y1: cy - r * Math.cos(i * Math.PI / 36),
			x2: cx + l * Math.sin(i * Math.PI / 36),
			y2: cy - l * Math.cos(i * Math.PI / 36),
			text: Math.round(i / 2),
			tx: cx + Math.sin(i * Math.PI / 36) * (l - 12),
			ty: cy - Math.cos(i * Math.PI / 36) * (l - 12) + 7,
			trx: cx + Math.sin(i * Math.PI / 36) * (l - 12),
			try: cy - Math.cos(i * Math.PI / 36) * (l - 12),
			tr: i * 5
		};
	}
	return _jsx('div', {
		className: 'indicator box',
		style: { top: 0 }
	}, void 0, _jsx('svg', {
		style: { position: 'absolute' },
		viewBox: '0 0 600 800',
		width: width,
		height: height,
		xmlns: 'http://www.w3.org/2000/svg',
		xmlnssvg: 'http://www.w3.org/2000/svg'
	}, void 0, _jsx('g', {
		transform: "rotate(" + -heading + ",300,900)"
	}, void 0, _jsx('circle', {
		cx: cx,
		cy: cy,
		r: r,
		fill: '#7f7f7f',
		stroke: 'none'
	}), markLines.map(function (line, i) {
		return i % 2 == 0 ? _jsx('g', {}, void 0, _jsx('line', {
			x1: line.x1,
			y1: line.y1,
			x2: line.x2,
			y2: line.y2,
			stroke: '#ffffff',
			strokeWidth: 2
		}, void 0), _jsx('text', {
			x: line.tx,
			y: line.ty,
			fill: '#ffffff',
			fontFamily: 'arial',
			fontSize: i % 6 == 0 ? 16 : 10,
			textAnchor: 'middle',
			transform: 'rotate(' + line.tr + ' ' + line.trx + ',' + line.try + ')'
		}, void 0, line.text)) : _jsx('g', {}, void 0, _jsx('line', {
			x1: line.x1,
			y1: line.y1,
			x2: line.x2,
			y2: line.y2,
			stroke: '#ffffff',
			strokeWidth: 2
		}, void 0));
	})), _jsx('line', {
		x1: cx,
		y1: cy,
		x2: cx,
		y2: cy - r + 15,
		stroke: '#ffffff',
		strokeWidth: 2
	}), _jsx('line', {
		x1: cx - 10,
		y1: cy - r + 35,
		x2: cx + 10,
		y2: cy - r + 35,
		stroke: '#ffffff',
		strokeWidth: 2
	}), _jsx('text', {
		x: cx - 80,
		y: cy - r + 80,
		fill: '#ff00ff',
		fontFamily: 'arial',
		fontSize: '14',
		textAnchor: 'start'
	}, void 0, heading.toFixed(0), 'H'), _jsx('text', {
		x: cx + 80,
		y: cy - r + 80,
		fill: '#00ff00',
		fontFamily: 'arial',
		fontSize: '14',
		textAnchor: 'end'
	}, void 0, 'MAG')));
}

exports.default = AttitudeIndicator;