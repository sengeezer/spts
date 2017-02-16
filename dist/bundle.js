/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!*************************!*\
  !*** ./src/Building.ts ***!
  \*************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar BuildingTypes;\n(function (BuildingTypes) {\n    BuildingTypes[BuildingTypes[\"Residential\"] = 1] = \"Residential\";\n    BuildingTypes[BuildingTypes[\"Commercial\"] = 2] = \"Commercial\";\n    BuildingTypes[BuildingTypes[\"Industrial\"] = 3] = \"Industrial\";\n})(BuildingTypes = exports.BuildingTypes || (exports.BuildingTypes = {}));\n// interface used for building complex data types; data contract\nvar Building = (function () {\n    function Building(street, houseNo) {\n        this.used = 0;\n        this.street = street;\n        this.houseNo = houseNo;\n    }\n    Object.defineProperty(Building.prototype, \"address\", {\n        get: function () {\n            return this.street + \" \" + this.houseNo;\n        },\n        set: function (address) {\n            var tokens = address.split(' ');\n            var houseNo = parseInt(tokens.pop());\n            if (houseNo > 0) {\n                this.houseNo = houseNo;\n                this.street = tokens.join(' ');\n            }\n            else {\n                throw new Error('Invalid address');\n            }\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return Building;\n}());\nexports.Building = Building;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9CdWlsZGluZy50cz84Y2YyIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgZW51bSBCdWlsZGluZ1R5cGVzIHtcbiAgICBSZXNpZGVudGlhbCA9IDEsXG4gICAgQ29tbWVyY2lhbCA9IDIsXG4gICAgSW5kdXN0cmlhbCA9IDNcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYXhhYmxlUHJvcGVydHkge1xuICAgIGdldFByb3BlcnR5VGF4KCk6IG51bWJlcjtcbn1cblxuLy8gaW50ZXJmYWNlIHVzZWQgZm9yIGJ1aWxkaW5nIGNvbXBsZXggZGF0YSB0eXBlczsgZGF0YSBjb250cmFjdFxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJ1aWxkaW5nIGltcGxlbWVudHMgVGF4YWJsZVByb3BlcnR5IHtcbiAgICBjb25zdHJ1Y3RvcihzdHJlZXQsIGhvdXNlTm8pIHtcbiAgICAgICAgdGhpcy51c2VkID0gMDtcbiAgICAgICAgdGhpcy5zdHJlZXQgPSBzdHJlZXQ7XG4gICAgICAgIHRoaXMuaG91c2VObyA9IGhvdXNlTm87XG4gICAgfVxuICAgIHZhbHVlUGVyVW5pdDogbnVtYmVyO1xuICAgIGNhcGFjaXR5OiBudW1iZXI7XG4gICAgdXNlZDogbnVtYmVyO1xuICAgIHN0cmVldDogc3RyaW5nO1xuICAgIGhvdXNlTm86IG51bWJlcjtcbiAgICB0eXBlOiBCdWlsZGluZ1R5cGVzO1xuICAgIGFic3RyYWN0IGdldFByb3BlcnR5VGF4KCk6IG51bWJlcjtcbiAgICBnZXQgYWRkcmVzcygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5zdHJlZXR9ICR7dGhpcy5ob3VzZU5vfWA7XG4gICAgfVxuICAgIHNldCBhZGRyZXNzIChhZGRyZXNzOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IHRva2VucyA9IGFkZHJlc3Muc3BsaXQoJyAnKTtcbiAgICAgICAgbGV0IGhvdXNlTm8gPSBwYXJzZUludCh0b2tlbnMucG9wKCkpO1xuICAgICAgICBpZiAoaG91c2VObyA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuaG91c2VObyA9IGhvdXNlTm87XG4gICAgICAgICAgICB0aGlzLnN0cmVldCA9IHRva2Vucy5qb2luKCcgJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYWRkcmVzcycpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9CdWlsZGluZy50cyJdLCJtYXBwaW5ncyI6IjtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFWQTtBQVdBO0FBQUE7QUExQkE7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./src/CommercialBuilding.ts ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || function (d, b) {\n    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];\n    function __() { this.constructor = d; }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n};\nvar Building_1 = __webpack_require__(/*! ./Building */ 0);\nvar CommercialBuilding = (function (_super) {\n    __extends(CommercialBuilding, _super);\n    function CommercialBuilding(street, houseNo, valuePerUnit) {\n        var _this = _super.call(this, street, houseNo) || this;\n        _this.valuePerUnit = valuePerUnit;\n        _this.capacity = 5;\n        return _this;\n    }\n    CommercialBuilding.prototype.addShop = function () {\n        this.used = Math.min(this.capacity, this.used + 1);\n        return this;\n    };\n    CommercialBuilding.prototype.getPropertyTax = function () {\n        return CommercialBuilding.taxRate * this.valuePerUnit * this.used;\n    };\n    return CommercialBuilding;\n}(Building_1.Building));\nCommercialBuilding.taxRate = 0.1;\nexports.CommercialBuilding = CommercialBuilding;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9Db21tZXJjaWFsQnVpbGRpbmcudHM/ZGJiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdWlsZGluZyB9IGZyb20gJy4vQnVpbGRpbmcnO1xuXG5leHBvcnQgY2xhc3MgQ29tbWVyY2lhbEJ1aWxkaW5nIGV4dGVuZHMgQnVpbGRpbmcge1xuICAgIHN0YXRpYyB0YXhSYXRlOiBudW1iZXIgPSAwLjE7XG4gICAgY29uc3RydWN0b3Ioc3RyZWV0LCBob3VzZU5vLCB2YWx1ZVBlclVuaXQpIHtcbiAgICAgICAgc3VwZXIoc3RyZWV0LCBob3VzZU5vKTtcbiAgICAgICAgdGhpcy52YWx1ZVBlclVuaXQgPSB2YWx1ZVBlclVuaXQ7XG4gICAgICAgIHRoaXMuY2FwYWNpdHkgPSA1O1xuICAgIH1cbiAgICBhZGRTaG9wKCk6IENvbW1lcmNpYWxCdWlsZGluZyB7XG4gICAgICAgIHRoaXMudXNlZCA9IE1hdGgubWluKHRoaXMuY2FwYWNpdHksIHRoaXMudXNlZCArIDEpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0UHJvcGVydHlUYXgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIENvbW1lcmNpYWxCdWlsZGluZy50YXhSYXRlICogdGhpcy52YWx1ZVBlclVuaXQgKiB0aGlzLnVzZWQ7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db21tZXJjaWFsQnVpbGRpbmcudHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBYkE7QUFEQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!************************************!*\
  !*** ./src/ResidentialBuilding.ts ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || function (d, b) {\n    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];\n    function __() { this.constructor = d; }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n};\nvar Building_1 = __webpack_require__(/*! ./Building */ 0);\nvar ResidentialBuilding = (function (_super) {\n    __extends(ResidentialBuilding, _super);\n    function ResidentialBuilding(street, houseNo, valuePerUnit) {\n        var _this = _super.call(this, street, houseNo) || this;\n        _this.valuePerUnit = valuePerUnit;\n        _this.capacity = 10;\n        return _this;\n    }\n    ResidentialBuilding.prototype.addResident = function () {\n        this.used = Math.min(this.capacity, this.used + 1);\n        return this;\n    };\n    ResidentialBuilding.prototype.getPropertyTax = function () {\n        return ResidentialBuilding.taxRate * this.valuePerUnit * this.used;\n    };\n    return ResidentialBuilding;\n}(Building_1.Building));\nResidentialBuilding.taxRate = 0.06;\nexports.ResidentialBuilding = ResidentialBuilding;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9SZXNpZGVudGlhbEJ1aWxkaW5nLnRzPzlmMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnVpbGRpbmcgfSBmcm9tICcuL0J1aWxkaW5nJztcblxuZXhwb3J0IGNsYXNzIFJlc2lkZW50aWFsQnVpbGRpbmcgZXh0ZW5kcyBCdWlsZGluZyB7XG4gICAgc3RhdGljIHRheFJhdGU6IG51bWJlciA9IDAuMDY7XG4gICAgY29uc3RydWN0b3Ioc3RyZWV0LCBob3VzZU5vLCB2YWx1ZVBlclVuaXQpIHtcbiAgICAgICAgc3VwZXIoc3RyZWV0LCBob3VzZU5vKTtcbiAgICAgICAgdGhpcy52YWx1ZVBlclVuaXQgPSB2YWx1ZVBlclVuaXQ7XG4gICAgICAgIHRoaXMuY2FwYWNpdHkgPSAxMDtcbiAgICB9XG4gICAgYWRkUmVzaWRlbnQoKTogUmVzaWRlbnRpYWxCdWlsZGluZyB7XG4gICAgICAgIHRoaXMudXNlZCA9IE1hdGgubWluKHRoaXMuY2FwYWNpdHksIHRoaXMudXNlZCArIDEpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0UHJvcGVydHlUYXgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIFJlc2lkZW50aWFsQnVpbGRpbmcudGF4UmF0ZSAqIHRoaXMudmFsdWVQZXJVbml0ICogdGhpcy51c2VkO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVzaWRlbnRpYWxCdWlsZGluZy50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFiQTtBQURBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar ResidentialBuilding_1 = __webpack_require__(/*! ./ResidentialBuilding */ 2);\nvar CommercialBuilding_1 = __webpack_require__(/*! ./CommercialBuilding */ 1);\nvar rb = new ResidentialBuilding_1.ResidentialBuilding('DellUxe St', 12, 100);\nrb.addResident();\nvar cb = new CommercialBuilding_1.CommercialBuilding('Floor St', 1, 500);\ncb.addShop().addShop().addShop();\ncb.address = 'Joerg Wuppertal St 6';\nconsole.log(cb.address);\ndocument.getElementsByClassName('js-app')[0].innerHTML = \"\\n    <p>Residential property tax: \" + rb.getPropertyTax() + \"</p>\\n    <p>Commercial property tax: \" + cb.getPropertyTax() + \"</p>\\n\";\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLnRzP2M3N2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGhlbGxvIGZyb20gJy4vaGVsbG8vaGVsbG8nO1xuaW1wb3J0IHsgUmVzaWRlbnRpYWxCdWlsZGluZyB9IGZyb20gJy4vUmVzaWRlbnRpYWxCdWlsZGluZyc7XG5pbXBvcnQgeyBDb21tZXJjaWFsQnVpbGRpbmcgfSBmcm9tICcuL0NvbW1lcmNpYWxCdWlsZGluZyc7XG5cbmxldCByYiA9IG5ldyBSZXNpZGVudGlhbEJ1aWxkaW5nKCdEZWxsVXhlIFN0JywgMTIsIDEwMCk7XG5yYi5hZGRSZXNpZGVudCgpO1xuXG5sZXQgY2IgPSBuZXcgQ29tbWVyY2lhbEJ1aWxkaW5nKCdGbG9vciBTdCcsIDEsIDUwMCk7XG5jYi5hZGRTaG9wKCkuYWRkU2hvcCgpLmFkZFNob3AoKTtcblxuY2IuYWRkcmVzcyA9ICdKb2VyZyBXdXBwZXJ0YWwgU3QgNic7XG5jb25zb2xlLmxvZyhjYi5hZGRyZXNzKTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnanMtYXBwJylbMF0uaW5uZXJIVE1MID0gYFxuICAgIDxwPlJlc2lkZW50aWFsIHByb3BlcnR5IHRheDogJHtyYi5nZXRQcm9wZXJ0eVRheCgpfTwvcD5cbiAgICA8cD5Db21tZXJjaWFsIHByb3BlcnR5IHRheDogJHtjYi5nZXRQcm9wZXJ0eVRheCgpfTwvcD5cbmA7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluLnRzIl0sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);