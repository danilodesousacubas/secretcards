import { Pipe, PipeTransform } from '@angular/core';
import { CardComponent } from "../card.component";

@Pipe({
    name: 'filterByTitle'
})

export class CardPipe implements PipeTransform {
        transform(cards: CardComponent[], inputed: string): CardComponent[] {

        if(inputed !== "" && inputed !== undefined){
            
        }   
        inputed = inputed.toLowerCase();
            return cards.filter( card => card.title.toLowerCase().includes(inputed));     
         
        
     }
}