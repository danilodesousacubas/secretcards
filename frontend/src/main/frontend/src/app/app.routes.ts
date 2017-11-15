import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './card/list/card.list.component';
import { CardForm } from './card/form/card.form.component';
import { LoginComponent } from './login/login.component';
// import { TagFormComponent } from './tag/tag.form.component';
 import { TagListComponent} from './tag/tag.list.component';

const appRoutes: Routes = [
      { path: '', redirectTo: 'cards', pathMatch: 'full' }
    , { path: 'cards', component: CardListComponent }
    , { path: 'cards/:cardId', component: CardListComponent }
    , { path: 'cards/tag/:tagId', component: CardListComponent }
    , { path: 'form/new', component : CardForm }
    , { path: 'login', component : LoginComponent }
    // , { path: 'tags', component: TagFormComponent }
     , { path: 'tags', component: TagListComponent }
    , { path: 'form/new/:cardId', component : CardForm }
    ];

export const routing = RouterModule.forRoot(appRoutes);
