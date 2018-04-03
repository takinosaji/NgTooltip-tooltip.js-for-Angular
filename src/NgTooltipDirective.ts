import { Directive, ElementRef, OnDestroy, Input, AfterViewInit } from "@angular/core";
import { Tooltip } from "tooltip.js";

@Directive({
    selector: "[ngTooltip]"
})
export class NgTooltipDirective implements AfterViewInit, OnDestroy {
    private _tooltip: any;

    @Input() tooltipContent: string;
    @Input() tooltipHtml: boolean;
    @Input() tooltipTemplate: string;
    @Input() tooltipContainer = "body";

    constructor(private _el: ElementRef) {
    }

    ngAfterViewInit(): void {
        const tooltipOptions: any = this.GetTooltipOptions();
        this._tooltip = new Tooltip(this._el.nativeElement, tooltipOptions);
    }

    ngOnDestroy(): void {
        this._tooltip.dispose();
        this._tooltip = null;
    }

    private GetTooltipOptions = (): any => {
        let options: any = {
            title: this.tooltipContent,
            html: this.tooltipHtml,
            container: this.tooltipContainer
        };

        if(!!this.tooltipTemplate) {
            options.template = this.tooltipTemplate;
        }

        return options;
    }
}
