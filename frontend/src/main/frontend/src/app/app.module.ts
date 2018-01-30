import 'rxjs/add/operator/map';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CardModule } from './card/card.component.module';
import { PanelModule } from './panel/panel.component.module';
import { TagsInputModule } from 'ng2-tags-input/dist';
import { CardListComponent } from './card/list/card.list.component';
import { CardForm } from './card/form/card.form.component';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routes';
import { LoginComponent } from './login/login.component';
import { TagListComponent } from './tag/tag.list.component';
import { JwtService } from '../app/services/jwt.service';
import { HeaderComponent} from '../app/header/header.component';
import { CardService} from '../app/card/service/card.service';
import { Config } from './config/config';
import { BarComponent } from './bar/bar.component';
import { FacebookModule } from 'ngx-facebook';


@NgModule({
    imports:[ BrowserModule, 
      HttpModule, 
      CardModule, 
      PanelModule, 
      TagsInputModule.forRoot(), 
      routing, 
      FormsModule,
      FacebookModule.forRoot()
    ],
      
    declarations: [ AppComponent, 
      CardListComponent, 
      CardForm, 
      LoginComponent, 
      TagListComponent, 
      HeaderComponent, 
      BarComponent ],
    providers: [ JwtService, 
      CardService, 
      Config ],
    bootstrap: [ AppComponent ]
})

export class AppModule {
  constructor() {
    console.log("App.Module")
  }
}