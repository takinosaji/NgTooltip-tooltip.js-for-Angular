import { Directive, ElementRef, Input, NgModule } from '@angular/core';
import { Tooltip } from 'tooltip.js';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgTooltipDirective {
    /**
     * @param {?} _el
     */
    constructor(_el) {
        this._el = _el;
        this.tooltipContainer = "body";
        this.GetTooltipOptions = () => {
            let /** @type {?} */ options = {
                title: this.tooltipContent,
                html: this.tooltipHtml,
                container: this.tooltipContainer
            };
            if (!!this.tooltipTemplate) {
                options.template = this.tooltipTemplate;
            }
            return options;
        };
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        const /** @type {?} */ tooltipOptions = this.GetTooltipOptions();
        this._tooltip = new Tooltip(this._el.nativeElement, tooltipOptions);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._tooltip.dispose();
        this._tooltip = null;
    }
}
NgTooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: "[ngTooltip]"
            },] },
];
/** @nocollapse */
NgTooltipDirective.ctorParameters = () => [
    { type: ElementRef, },
];
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
class NgTooltipModule {
}
NgTooltipModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                exports: [NgTooltipDirective],
                declarations: [NgTooltipDirective],
            },] },
];
/** @nocollapse */
NgTooltipModule.ctorParameters = () => [];

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
