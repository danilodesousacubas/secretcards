import { Component, Input } from "@angular/core";

import 'rxjs/add/operator/toPromise';

@Component({
    moduleId: module.id,
    selector: "card"
})

export class TagComponent {
    @Input() id: string;
    @Input() name: string;
}