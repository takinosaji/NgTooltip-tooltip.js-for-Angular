(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('tooltip.js')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'tooltip.js'], factory) :
	(factory((global.takinosaji = global.takinosaji || {}, global.takinosaji.ngtooltip = {}),global.ng.core,global.tooltip_js));
}(this, (function (exports,core,tooltip_js) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgTooltipDirective = /** @class */ (function () {
    /**
     * @param {?} _el
     */
    function NgTooltipDirective(_el) {
        var _this = this;
        this._el = _el;
        this.tooltipContainer = "body";
        this.GetTooltipOptions = function () {
            var /** @type {?} */ options = {
                title: _this.tooltipContent,
                html: _this.tooltipHtml,
                container: _this.tooltipContainer
            };
            if (!!_this.tooltipTemplate) {
                options.template = _this.tooltipTemplate;
            }
            return options;
        };
    }
    /**
     * @return {?}
     */
    NgTooltipDirective.prototype.ngAfterViewInit = function () {
        var /** @type {?} */ tooltipOptions = this.GetTooltipOptions();
        this._tooltip = new tooltip_js.Tooltip(this._el.nativeElement, tooltipOptions);
    };
    /**
     * @return {?}
     */
    NgTooltipDirective.prototype.ngOnDestroy = function () {
        this._tooltip.dispose();
        this._tooltip = null;
    };
    return NgTooltipDirective;
}());
NgTooltipDirective.decorators = [
    { type: core.Directive, args: [{
                selector: "[ngTooltip]"
            },] },
];
/** @nocollapse */
NgTooltipDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };
NgTooltipDirective.propDecorators = {
    "tooltipContent": [{ type: core.Input },],
    "tooltipHtml": [{ type: core.Input },],
    "tooltipTemplate": [{ type: core.Input },],
    "tooltipContainer": [{ type: core.Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgTooltipModule = /** @class */ (function () {
    function NgTooltipModule() {
    }
    return NgTooltipModule;
}());
NgTooltipModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [],
                exports: [NgTooltipDirective],
                declarations: [NgTooltipDirective],
            },] },
];
/** @nocollapse */
NgTooltipModule.ctorParameters = function () { return []; };

exports.NgTooltipModule = NgTooltipModule;
exports.NgTooltipDirective = NgTooltipDirective;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=takinosaji-ngtooltip.umd.js.map
