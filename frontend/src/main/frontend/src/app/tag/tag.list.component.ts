import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Component,Input } from '@angular/core';
import { JwtService } from '../../app/services/jwt.service';
import { Config } from '../config/config';

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
     config = new Config();

     constructor(http: Http){
        this.find(http);
        
     }

     cadastrar(event) {
        event.preventDefault();

        let service = new JwtService();
        let options = service.createHeader(this.http);
        
        this.http.post(this.config.getContext()+'/rest/tag', JSON.stringify(this.tag), options)
            .subscribe(() => {
                this.find(this.http);
                this.tag = new Object();
            }, error =>  console.log(error));
        }


        find(http:Http){
            this.http = http;
            let url = this.config.getContext() + "/rest/tag";
        
            let service = new JwtService();
            let options = service.createHeader(http);
    
            var stream = http.get(url, options);
            stream.subscribe( x => { 
                        this.tags = x.json(), 
                        erro => console.log(erro) 
                    }
                );
        }
    }