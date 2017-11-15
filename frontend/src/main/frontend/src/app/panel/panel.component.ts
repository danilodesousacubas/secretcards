import { Component, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.css']
})

export class PanelComponent {
    @Input() description: string;

}