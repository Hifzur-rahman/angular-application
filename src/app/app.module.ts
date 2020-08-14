import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ViewComponent } from './view/view.component';
import { ServiceappService } from './serviceapp.service';
import { ViewupdateComponent } from './viewupdate/viewupdate.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    ViewComponent,
    ViewupdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
