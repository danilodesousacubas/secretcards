import { NgModule } from "@angular/core";
import { CardComponent } from "./card.component";
import { CardPipe } from "./pipes/card.pipes";

@NgModule({
    declarations: [ CardComponent, CardPipe ],
    exports: [ CardComponent, CardPipe ]
})

export class CardModule {
    constructor() {
       
    }
}