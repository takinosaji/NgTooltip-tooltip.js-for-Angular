import Tooltip from "tooltip.js";

// @Component({
//     selector: 'nouislider',
//     templateUrl: 'NgTooltipComponent.html',
//   })
export default class NgTooltip {
    private _tooltip: Tooltip;

    public constructor(elem: any, options: any) {
        this._tooltip = new Tooltip(elem, options);
    }

    public dispose = (): void => {
        this._tooltip.dispose();
        this._tooltip = null;
    }
}