import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, ROUTES } from '@angular/router';
import { MyRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipePipe } from './date.pipe';
import { GithubService } from './github.service';
import { HighlightDirective } from './highlight.directive';
import { MyReposComponent } from './my-repos/my-repos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DatePipePipe,
    HighlightDirective,
    MyReposComponent,
    NavbarComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    MyRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }