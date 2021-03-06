'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _HTMLElement2 = require('../../HTMLElement');

var _HTMLElement3 = _interopRequireDefault(_HTMLElement2);

var _utilsUrl = require('../../utils/Url');

var _utilsUrl2 = _interopRequireDefault(_utilsUrl);

/**
 * The HTMLAnchorElement interface represents hyperlink elements and provides special properties and methods
 * (beyond those of the regular HTMLElement object interface they also have available to them by inheritance)
 * for manipulating the layout and presentation of such elements.
 *
 * @see https://developer.mozilla.org/en/docs/Web/API/HTMLAnchorElement
 * @class HTMLAnchorElement
 */
/** @class HTMLAnchorElement */
var HTMLAnchorElement = (function (_HTMLElement) {
    _inherits(HTMLAnchorElement, _HTMLElement);

    function HTMLAnchorElement() {
        _classCallCheck(this, HTMLAnchorElement);

        _get(Object.getPrototypeOf(HTMLAnchorElement.prototype), 'constructor', this).call(this);
        this._href = new _utilsUrl2['default']();
    }

    /**
     * @constant {string} HTMLAnchorElement#nodeName option
     */

    /**
     * @inheritDoc
     
    * @memberof HTMLAnchorElement 
    * @instance 
    * @method setAttribute 
    * @param key 
    * @param value */

    _createClass(HTMLAnchorElement, [{
        key: 'setAttribute',
        value: function setAttribute(key, value) {
            _get(Object.getPrototypeOf(HTMLAnchorElement.prototype), 'setAttribute', this).call(this, key, value);
            if (key === 'href') {
                this.href = value;
            }
        }

        /**
         * Is a DOMString that reflects the href HTML attribute, containing a valid URL of a linked resource.
         *
         * @member {string} HTMLAnchorElement#href
         * @returns {string}
         
        * @memberof HTMLAnchorElement 
        * @instance */
    }, {
        key: 'href',
        get: function get() {
            return this._href.toString();
        },

        /**
         * @param {string} value
         
        * @memberof HTMLAnchorElement 
        * @instance 
        * @param value */
        set: function set(value) {
            this._href.href = value;
            this._setAttribute('href', this._href.toString());

            if (this.protocol === '' && this.ownerDocument) {
                this._href.protocol = this.ownerDocument.location.protocol;
            }

            if (this.protocol !== 'javascript:' && // eslint-disable-line no-script-url
            this.host === '' && this.ownerDocument) {
                this._href.host = this.ownerDocument.location.host;
            }
        }

        /**
         * Is a DOMString representing the fragment identifier, including the leading hash mark ('#'), if any, in the
         * referenced URL.
         *
         * @member {string} HTMLAnchorElement#hash
        * @returns {string}
         
        * @memberof HTMLAnchorElement 
        * @instance */
    }, {
        key: 'hash',
        get: function get() {
            return this._href.hash;
        },

        /**
         * @param {string} value
         
        * @memberof HTMLAnchorElement 
        * @instance 
        * @param value */
        set: function set(value) {
            if (this.href === '' || value === null || this._href.protocol === 'javascript:') {
                // eslint-disable-line no-script-url
                return;
            }

            if (value === '') {
                value = null;
            } else {
                value = value.replace(/^#/, '');
            }

            this._href.hash = value;
            this._setAttribute('href', this._href.toString());
        }

        /**
         * Is a DOMString representing the hostname and port (if it's not the default port) in the referenced URL.
         *
         * @member {string} HTMLAnchorElement#host
         * @returns {string}
         
        * @memberof HTMLAnchorElement 
        * @instance */
    }, {
        key: 'host',
        get: function get() {
            return this._href.host;
        },

        /**
         * @param {string} value
         
        * @memberof HTMLAnchorElement 
        * @instance 
        * @param value */
        set: function set(value) {
            this._href.host = value;
            this._setAttribute('href', this._href.toString());
        }

        /**
         * Is a DOMString representing the hostname in the referenced URL.
         *
         * @member {string} HTMLAnchorElement#hostname
         * @returns {string}
         
        * @memberof HTMLAnchorElement 
        * @instance */
    }, {
        key: 'hostname',
        get: function get() {
            return this._href.hostname;
        },

        /**
         * @param {string} value
         
        * @memberof HTMLAnchorElement 
        * @instance 
        * @param value */
        set: function set(value) {
            this._href.hostname = value;
            this._setAttribute('href', this._href.toString());
        }

        /**
         * Is a DOMString that reflects the rel HTML attribute, specifying the relationship of the target object to the
         * linked object.
         *
         * @member {string} HTMLAnchorElement#rel
         * @returns {string}
         
        * @memberof HTMLAnchorElement 
        * @instance */
    }, {
        key: 'rel',
        get: function get() {
            return this.getAttribute('rel');
        },

        /**
         * @param {string} value
         
        * @memberof HTMLAnchorElement 
        * @instance 
        * @param value */
        set: function set(value) {
            this.setAttribute('rel', value);
        }

        /**
         * Is a DOMString representing the path name component, if any, of the referenced URL.
         *
         * @member {string} HTMLAnchorElement#pathname
         * @returns {string}
         
        * @memberof HTMLAnchorElement 
        * @instance */
    }, {
        key: 'pathname',
        get: function get() {
            return this._href.pathname;
        },

        /**
         * @param {string} value
         
        * @memberof HTMLAnchorElement 
        * @instance 
        * @param value */
        set: function set(value) {
            this._href.pathname = value;
            this._setAttribute('href', this._href.toString());
        }

        /**
         * Is a DOMString representing the protocol component, including trailing colon (':'), of the referenced URL.
         *
         * @member {string} HTMLAnchorElement#protocol
         * @returns {string}
         
        * @memberof HTMLAnchorElement 
        * @instance */
    }, {
        key: 'protocol',
        get: function get() {
            return this._href.protocol;
        },

        /**
         * @param {string} value
         
        * @memberof HTMLAnchorElement 
        * @instance 
        * @param value */
        set: function set(value) {
            this._href.protocol = value;
            this._setAttribute('href', this._href.toString());
        }
    }]);

    return HTMLAnchorElement;
})(_HTMLElement3['default']);

exports['default'] = HTMLAnchorElement;
Object.defineProperty(HTMLAnchorElement.prototype, 'nodeName', { value: 'a' });
module.exports = exports['default'];
//# sourceMappingURL=HTMLAnchorElement.js.map