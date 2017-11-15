import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Component,Input } from '@angular/core';
import { JwtService } from '../../app/services/jwt.service';

 @Component({
     moduleId: module.id,
     selector: 'tag-list',
     templateUrl: './tag.list.component.html'
 })

 export class TagListComponent{

     @Input() name: string;
     tags: Object[] = []
     tag: Object = new Object();
     http:Http;

     constructor(http: Http){
        this.find(http);
        
     }

     cadastrar(event) {
        event.preventDefault();

        let service = new JwtService();
        let options = service.createHeader(this.http);
        
        this.http.post('http://localhost:8080/rest/tag', JSON.stringify(this.tag), options)
            .subscribe(() => {
                this.find(this.http);
                this.tag = new Object();
            }, erro =>  console.log(erro));
        }


        find(http:Http){
            this.http = http;
            let url = "http://localhost:8080/rest/tag";
        
            let service = new JwtService();
            let options = service.createHeader(http);
    
            var stream = http.get(url, options);
            stream.subscribe( x => 
                    { 
                        this.tags = x.json(), 
                        erro => console.log(erro) 
                    }
                );
        }
    }