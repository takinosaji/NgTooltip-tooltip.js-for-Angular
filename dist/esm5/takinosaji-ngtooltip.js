import { Directive, ElementRef, Input, NgModule } from '@angular/core';
import { Tooltip } from 'tooltip.js';
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
        this._tooltip = new Tooltip(this._el.nativeElement, tooltipOptions);
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
    { type: Directive, args: [{
                selector: "[ngTooltip]"
            },] },
];
/** @nocollapse */
NgTooltipDirective.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
NgTooltipDirective.propDecorators = {
    "tooltipContent": [{ type: Input },],
    "tooltipHtml": [{ type: Input },],
    "tooltipTemplate": [{ type: Input },],
    "tooltipContainer": [{ type: Input },],
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
    { type: NgModule, args: [{
                imports: [],
                exports: [NgTooltipDirective],
                declarations: [NgTooltipDirective],
            },] },
];
/** @nocollapse */
NgTooltipModule.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */
export { NgTooltipModule, NgTooltipDirective };
//# sourceMappingURL=takinosaji-ngtooltip.js.map
