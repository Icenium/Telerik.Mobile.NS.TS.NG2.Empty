"use strict";
var core_1 = require("@angular/core");
var common = require("./shared");
var HomeViewComponent = (function () {
    /// component additional properties
    function HomeViewComponent(
        /// component constructor dependencies
        _service) {
        this._service = _service;
        /// component constructor method
    }
    HomeViewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-homeView",
            templateUrl: "homeView.component.html"
        }), 
        __metadata('design:paramtypes', [common.HomeViewService])
    ], HomeViewComponent);
    return HomeViewComponent;
}());
exports.HomeViewComponent = HomeViewComponent;
//# sourceMappingURL=homeView.component.js.map