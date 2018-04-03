import { ElementRef, OnDestroy, AfterViewInit } from "@angular/core";
export declare class NgTooltipDirective implements AfterViewInit, OnDestroy {
    private _el;
    private _tooltip;
    tooltipContent: string;
    tooltipHtml: boolean;
    tooltipTemplate: string;
    tooltipContainer: string;
    constructor(_el: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private GetTooltipOptions;
}
