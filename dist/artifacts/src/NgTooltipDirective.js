"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tooltip_js_1 = require("tooltip.js");
var NgTooltipDirective = /** @class */ (function () {
    function NgTooltipDirective(_el) {
        var _this = this;
        this._el = _el;
        this.tooltipContainer = 'body';
        this.GetTooltipOptions = function () {
            var options = {
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
    NgTooltipDirective.prototype.ngAfterViewInit = function () {
        var tooltipOptions = this.GetTooltipOptions();
        this._tooltip = new tooltip_js_1.Tooltip(this._el.nativeElement, tooltipOptions);
    };
    NgTooltipDirective.prototype.ngOnDestroy = function () {
        this._tooltip.dispose();
        this._tooltip = null;
    };
    NgTooltipDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[ngTooltip]'
                },] },
    ];
    /** @nocollapse */
    NgTooltipDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    NgTooltipDirective.propDecorators = {
        "tooltipContent": [{ type: core_1.Input },],
        "tooltipHtml": [{ type: core_1.Input },],
        "tooltipTemplate": [{ type: core_1.Input },],
        "tooltipContainer": [{ type: core_1.Input },],
    };
    return NgTooltipDirective;
}());
exports.NgTooltipDirective = NgTooltipDirective;
//# sourceMappingURL=NgTooltipDirective.js.map