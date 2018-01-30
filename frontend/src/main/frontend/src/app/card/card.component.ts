import { Component, Input, Inject } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Component({
    moduleId: module.id,
    selector: "card",
    templateUrl: "./card.component.html"
})

export class CardComponent{
    @Input() id: string;
    @Input() title: string;
    @Input() description: string;
    @Input() tags:Object[] = [];
}