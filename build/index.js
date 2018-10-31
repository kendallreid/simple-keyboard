/*!
 * 
 *   simple-keyboard v2.7.4
 *   https://github.com/hodgef/simple-keyboard
 * 
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *   
 */
!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports.SimpleKeyboard=e():t.SimpleKeyboard=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2);e.default=i.a},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=n(3),s=(n.n(o),n(4)),a=n(5),u=n(6),r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),l=function(){function t(){var e=this;i(this,t),this.setOptions=function(t){t=t||{},e.options=Object.assign(e.options,t),e.render()},this.registerModule=function(t,n){e.modules[t]||(e.modules[t]={}),n(e.modules[t])},this.getModuleProp=function(t,n){return!!e.modules[t]&&e.modules[t][n]},this.getModulesList=function(){return Object.keys(e.modules)};var n="string"===typeof(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:".simple-keyboard",o="object"===r(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1];if(o||(o={}),this.utilities=new u.a(this),this.keyboardDOM=document.querySelector(n),this.options=o,this.options.layoutName=this.options.layoutName||"default",this.options.theme=this.options.theme||"hg-theme-default",this.options.inputName=this.options.inputName||"default",this.keyboardPluginClasses="",this.handleButtonClicked=this.handleButtonClicked.bind(this),this.syncInstanceInputs=this.syncInstanceInputs.bind(this),this.clearInput=this.clearInput.bind(this),this.getInput=this.getInput.bind(this),this.setInput=this.setInput.bind(this),this.replaceInput=this.replaceInput.bind(this),this.clear=this.clear.bind(this),this.dispatch=this.dispatch.bind(this),this.addButtonTheme=this.addButtonTheme.bind(this),this.removeButtonTheme=this.removeButtonTheme.bind(this),this.getButtonElement=this.getButtonElement.bind(this),this.handleCaret=this.handleCaret.bind(this),this.caretEventHandler=this.caretEventHandler.bind(this),this.onInit=this.onInit.bind(this),this.onRender=this.onRender.bind(this),this.render=this.render.bind(this),this.loadModules=this.loadModules.bind(this),this.handleButtonMouseUp=this.handleButtonMouseUp.bind(this),this.handleButtonMouseDown=this.handleButtonMouseDown.bind(this),this.handleButtonHold=this.handleButtonHold.bind(this),this.input={},this.input[this.options.inputName]="",this.keyboardDOMClass=n.split(".").join(""),this.buttonElements={},!this.keyboardDOM)throw console.warn('"'+n+'" was not found in the DOM.'),new Error("KEYBOARD_DOM_ERROR");this.render(),window.SimpleKeyboardInstances||(window.SimpleKeyboardInstances={}),window.SimpleKeyboardInstances[this.utilities.camelCase(this.keyboardDOMClass)]=this,this.physicalKeyboardInterface=new s.a(this),this.modules={},this.loadModules()}return h(t,[{key:"handleButtonClicked",value:function(t){var e=this.options.debug;if("{//}"===t)return!1;"function"===typeof this.options.onKeyPress&&this.options.onKeyPress(t),this.input[this.options.inputName]||(this.input[this.options.inputName]="");var n=this.utilities.getUpdatedInput(t,this.input[this.options.inputName],this.options,this.caretPosition);if(this.input[this.options.inputName]!==n){if(this.options.maxLength&&this.utilities.handleMaxLength(this.input,this.options,n))return!1;this.input[this.options.inputName]=n,e&&console.log("Input changed:",this.input),this.options.syncInstanceInputs&&this.syncInstanceInputs(this.input),"function"===typeof this.options.onChange&&this.options.onChange(this.input[this.options.inputName])}e&&console.log("Key pressed:",t)}},{key:"handleButtonMouseDown",value:function(t,e){var n=this;this.isMouseHold=!0,this.holdTimeout=setTimeout(function(){!n.isMouseHold||(t.includes("{")||t.includes("}"))&&"{bksp}"!==t&&"{space}"!==t&&"{tab}"!==t||(n.options.debug&&console.log("Button held:",t),n.handleButtonHold(t,e)),clearTimeout(n.holdTimeout)},500)}},{key:"handleButtonMouseUp",value:function(){this.isMouseHold=!1,this.holdInteractionTimeout&&clearTimeout(this.holdInteractionTimeout)}},{key:"handleButtonHold",value:function(t){var e=this;this.holdInteractionTimeout=setTimeout(function(){e.handleButtonClicked(t),e.handleButtonHold(t)},100)}},{key:"syncInstanceInputs",value:function(){var t=this;this.dispatch(function(e){e.replaceInput(t.input)})}},{key:"clearInput",value:function(t){t=t||this.options.inputName,this.input[this.options.inputName]="",this.options.syncInstanceInputs&&this.syncInstanceInputs(this.input)}},{key:"getInput",value:function(t){return t=t||this.options.inputName,this.options.syncInstanceInputs&&this.syncInstanceInputs(this.input),this.input[this.options.inputName]}},{key:"setInput",value:function(t,e){e=e||this.options.inputName,this.input[e]=t,this.options.syncInstanceInputs&&this.syncInstanceInputs(this.input)}},{key:"replaceInput",value:function(t){this.input=t}},{key:"clear",value:function(){this.keyboardDOM.innerHTML="",this.keyboardDOM.className=this.keyboardDOMClass,this.buttonElements={}}},{key:"dispatch",value:function(t){if(!window.SimpleKeyboardInstances)throw console.warn("SimpleKeyboardInstances is not defined. Dispatch cannot be called."),new Error("INSTANCES_VAR_ERROR");return Object.keys(window.SimpleKeyboardInstances).forEach(function(e){t(window.SimpleKeyboardInstances[e],e)})}},{key:"addButtonTheme",value:function(t,e){var n=this;if(!e||!t)return!1;t.split(" ").forEach(function(i){e.split(" ").forEach(function(e){n.options.buttonTheme||(n.options.buttonTheme=[]);var o=!1;n.options.buttonTheme.map(function(t){if(t.class.split(" ").includes(e)){o=!0;var n=t.buttons.split(" ");n.includes(i)||(o=!0,n.push(i),t.buttons=n.join(" "))}return t}),o||n.options.buttonTheme.push({class:e,buttons:t})})}),this.render()}},{key:"removeButtonTheme",value:function(t,e){var n=this;if(!t&&!e)return this.options.buttonTheme=[],this.render(),!1;if(t&&Array.isArray(this.options.buttonTheme)&&this.options.buttonTheme.length){t.split(" ").forEach(function(t,i){n.options.buttonTheme.map(function(i,o){if(e&&e.includes(i.class)||!e){var s=i.buttons.split(" ").filter(function(e){return e!==t});s.length?i.buttons=s.join(" "):(n.options.buttonTheme.splice(o,1),i=null)}return i})}),this.render()}}},{key:"getButtonElement",value:function(t){var e=void 0,n=this.buttonElements[t];return n&&(e=n.length>1?n:n[0]),e}},{key:"handleCaret",value:function(){this.options.debug&&console.log("Caret handling started"),document.addEventListener("keyup",this.caretEventHandler),document.addEventListener("mouseup",this.caretEventHandler),document.addEventListener("touchend",this.caretEventHandler)}},{key:"caretEventHandler",value:function(t){var e=t.target.tagName.toLowerCase();"textarea"!==e&&"input"!==e||(this.caretPosition=t.target.selectionStart,this.options.debug&&console.log("Caret at: ",t.target.selectionStart,t.target.tagName.toLowerCase()))}},{key:"onInit",value:function(){this.options.debug&&console.log("Initialized"),this.handleCaret(),"function"===typeof this.options.onInit&&this.options.onInit()}},{key:"onRender",value:function(){"function"===typeof this.options.onRender&&this.options.onRender()}},{key:"loadModules",value:function(){var t=this;Array.isArray(this.options.modules)&&this.options.modules.forEach(function(e){var n=new e;if(n.constructor.name&&"Function"!==n.constructor.name){var i="module-"+t.utilities.camelCase(n.constructor.name);t.keyboardPluginClasses=t.keyboardPluginClasses+" "+i}t.render(),n.init(t)})}},{key:"render",value:function(){var t=this;this.clear();var e=this.options.layout?"hg-layout-custom":"hg-layout-"+this.options.layoutName,n=this.options.layout||a.a.getDefaultLayout(),i={};Array.isArray(this.options.buttonTheme)&&this.options.buttonTheme.forEach(function(e){if(e.buttons&&e.class){var n=void 0;"string"===typeof e.buttons&&(n=e.buttons.split(" ")),n&&n.forEach(function(n){var o=i[n];o?t.utilities.countInArray(o.split(" "),e.class)||(i[n]=o+" "+e.class):i[n]=e.class})}else console.warn('buttonTheme row is missing the "buttons" or the "class". Please check the documentation.')}),this.keyboardDOM.className+=" "+this.options.theme+" "+e+" "+this.keyboardPluginClasses,n[this.options.layoutName].forEach(function(e,n){var o=e.split(" "),s=document.createElement("div");s.className+="hg-row",o.forEach(function(e,o){var a=t.utilities.getButtonClass(e),u=i[e],r=t.utilities.getButtonDisplayName(e,t.options.display,t.options.mergeDisplay),h=document.createElement("div");h.className+="hg-button "+a+(u?" "+u:""),h.onclick=function(){return t.handleButtonClicked(e)},h.onmousedown=function(n){return t.handleButtonMouseDown(e,n)},h.setAttribute("data-skBtn",e);var l=t.options.layoutName+"-r"+n+"b"+o;h.setAttribute("data-skBtnUID",l),h.setAttribute("data-displayLabel",r);var c=document.createElement("span");c.innerHTML=r,h.appendChild(c),t.buttonElements[e]||(t.buttonElements[e]=[]),t.buttonElements[e].push(h),s.appendChild(h)}),t.keyboardDOM.appendChild(s)}),this.onRender(),this.initialized||(this.initialized=!0,document.onmouseup=function(){return t.handleButtonMouseUp()},this.onInit())}}]),t}();e.a=l},function(t,e){},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=function(){function t(e){i(this,t),this.simpleKeyboardInstance=e,this.initKeyboardListener=this.initKeyboardListener.bind(this),this.getSimpleKeyboardLayoutKey=this.getSimpleKeyboardLayoutKey.bind(this),this.initKeyboardListener()}return o(t,[{key:"initKeyboardListener",value:function(){var t=this;document.addEventListener("keydown",function(e){if(t.simpleKeyboardInstance.options.physicalKeyboardHighlight){var n=t.getSimpleKeyboardLayoutKey(e);t.simpleKeyboardInstance.dispatch(function(e){var i=e.getButtonElement(n)||e.getButtonElement("{"+n+"}");i&&(i.style.backgroundColor=t.simpleKeyboardInstance.options.physicalKeyboardHighlightBgColor||"#9ab4d0",i.style.color=t.simpleKeyboardInstance.options.physicalKeyboardHighlightTextColor||"white")})}}),document.addEventListener("keyup",function(e){if(t.simpleKeyboardInstance.options.physicalKeyboardHighlight){var n=t.getSimpleKeyboardLayoutKey(e);t.simpleKeyboardInstance.dispatch(function(t){var e=t.getButtonElement(n)||t.getButtonElement("{"+n+"}");e&&e.removeAttribute("style")})}})}},{key:"getSimpleKeyboardLayoutKey",value:function(t){var e=void 0;return e=t.code.includes("Numpad")||t.code.includes("Shift")||t.code.includes("Space")||t.code.includes("Backspace")||t.code.includes("Control")||t.code.includes("Alt")||t.code.includes("Meta")?t.code:t.key,(e!==e.toUpperCase()||"F"===t.code[0]&&Number.isInteger(Number(t.code[1]))&&t.code.length<=3)&&(e=e.toLowerCase()),e}}]),t}();e.a=s},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=function(){function t(){i(this,t)}return o(t,null,[{key:"getDefaultLayout",value:function(){return{default:["` 1 2 3 4 5 6 7 8 9 0 - = {bksp}","{tab} q w e r t y u i o p [ ] \\","{lock} a s d f g h j k l ; ' {enter}","{shift} z x c v b n m , . / {shift}",".com @ {space}"],shift:["~ ! @ # $ % ^ & * ( ) _ + {bksp}","{tab} Q W E R T Y U I O P { } |",'{lock} A S D F G H J K L : " {enter}',"{shift} Z X C V B N M < > ? {shift}",".com @ {space}"]}}}]),t}();e.a=s},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=function(){function t(e){i(this,t),this.simpleKeyboardInstance=e,this.getButtonClass=this.getButtonClass.bind(this),this.getButtonDisplayName=this.getButtonDisplayName.bind(this),this.getUpdatedInput=this.getUpdatedInput.bind(this),this.updateCaretPos=this.updateCaretPos.bind(this),this.isMaxLengthReached=this.isMaxLengthReached.bind(this),this.camelCase=this.camelCase.bind(this),this.countInArray=this.countInArray.bind(this)}return s(t,[{key:"getButtonClass",value:function(t){var e=t.includes("{")&&t.includes("}")&&"{//}"!==t?"functionBtn":"standardBtn",n=t.replace("{","").replace("}",""),i="";return"standardBtn"!==e&&(i=" hg-button-"+n),"hg-"+e+i}},{key:"getDefaultDiplay",value:function(){return{"{bksp}":"backspace","{backspace}":"backspace","{enter}":"< enter","{shift}":"shift","{shiftleft}":"shift","{shiftright}":"shift","{alt}":"alt","{s}":"shift","{tab}":"tab","{lock}":"caps","{capslock}":"caps","{accept}":"Submit","{space}":" ","{//}":" ","{esc}":"esc","{escape}":"esc","{f1}":"f1","{f2}":"f2","{f3}":"f3","{f4}":"f4","{f5}":"f5","{f6}":"f6","{f7}":"f7","{f8}":"f8","{f9}":"f9","{f10}":"f10","{f11}":"f11","{f12}":"f12","{numpaddivide}":"/","{numlock}":"lock","{arrowup}":"\u2191","{arrowleft}":"\u2190","{arrowdown}":"\u2193","{arrowright}":"\u2192","{prtscr}":"print","{scrolllock}":"scroll","{pause}":"pause","{insert}":"ins","{home}":"home","{pageup}":"up","{delete}":"del","{end}":"end","{pagedown}":"down","{numpadmultiply}":"*","{numpadsubtract}":"-","{numpadadd}":"+","{numpadenter}":"enter","{period}":".","{numpaddecimal}":".","{numpad0}":"0","{numpad1}":"1","{numpad2}":"2","{numpad3}":"3","{numpad4}":"4","{numpad5}":"5","{numpad6}":"6","{numpad7}":"7","{numpad8}":"8","{numpad9}":"9"}}},{key:"getButtonDisplayName",value:function(t,e,n){return e=n?Object.assign({},this.getDefaultDiplay(),e):e||this.getDefaultDiplay(),e[t]||t}},{key:"getUpdatedInput",value:function(t,e,n,i){var o=e;return("{bksp}"===t||"{backspace}"===t)&&o.length>0?o=this.removeAt(o,i):"{space}"===t?o=this.addStringAt(o," ",i):"{tab}"!==t||"boolean"===typeof n.tabCharOnTab&&!1===n.tabCharOnTab?"{enter}"!==t&&"{numpadenter}"!==t||!n.newLineOnEnter?t.includes("numpad")&&Number.isInteger(Number(t[t.length-2]))?o=this.addStringAt(o,t[t.length-2],i):"{numpaddivide}"===t?o=this.addStringAt(o,"/",i):"{numpadmultiply}"===t?o=this.addStringAt(o,"*",i):"{numpadsubtract}"===t?o=this.addStringAt(o,"-",i):"{numpadadd}"===t?o=this.addStringAt(o,"+",i):"{numpaddecimal}"===t?o=this.addStringAt(o,".",i):"{"===t||"}"===t?o=this.addStringAt(o,t,i):t.includes("{")||t.includes("}")||(o=this.addStringAt(o,t,i)):o=this.addStringAt(o,"\n",i):o=this.addStringAt(o,"\t",i),o}},{key:"updateCaretPos",value:function(t,e){e?this.simpleKeyboardInstance.caretPosition>0&&(this.simpleKeyboardInstance.caretPosition=this.simpleKeyboardInstance.caretPosition-t):this.simpleKeyboardInstance.caretPosition=this.simpleKeyboardInstance.caretPosition+t}},{key:"addStringAt",value:function(t,e,n){var i=void 0;return this.simpleKeyboardInstance.options.debug&&console.log("Caret at:",n),n||0===n?(i=[t.slice(0,n),e,t.slice(n)].join(""),this.isMaxLengthReached()||this.updateCaretPos(e.length)):i=t+e,i}},{key:"removeAt",value:function(t,e){if(0===this.simpleKeyboardInstance.caretPosition)return t;var n=void 0,i=void 0,o=void 0,s=/([\uD800-\uDBFF][\uDC00-\uDFFF])/g;return e&&e>=0?(i=t.substring(e-2,e),o=i.match(s),o?(n=t.substr(0,e-2)+t.substr(e),this.updateCaretPos(2,!0)):(n=t.substr(0,e-1)+t.substr(e),this.updateCaretPos(1,!0))):(i=t.slice(-2),o=i.match(s),o?(n=t.slice(0,-2),this.updateCaretPos(2,!0)):(n=t.slice(0,-1),this.updateCaretPos(1,!0))),n}},{key:"handleMaxLength",value:function(t,e,n){var i=e.maxLength,s=t[e.inputName],a=s.length===i;if(n.length<=s.length)return!1;if(Number.isInteger(i))return e.debug&&console.log("maxLength (num) reached:",a),a?(this.maxLengthReached=!0,!0):(this.maxLengthReached=!1,!1);if("object"===("undefined"===typeof i?"undefined":o(i))){var u=s.length===i[e.inputName];return e.debug&&console.log("maxLength (obj) reached:",u),u?(this.maxLengthReached=!0,!0):(this.maxLengthReached=!1,!1)}}},{key:"isMaxLengthReached",value:function(){return Boolean(this.maxLengthReached)}},{key:"camelCase",value:function(t){return t.toLowerCase().trim().split(/[.\-_\s]/g).reduce(function(t,e){return t+e[0].toUpperCase()+e.slice(1)})}},{key:"countInArray",value:function(t,e){return t.reduce(function(t,n){return t+(n===e)},0)}}]),t}();e.a=a}])});
//# sourceMappingURL=index.js.map