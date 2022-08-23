import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RankingComponent } from './ranking/ranking.component';
import { FormComponent } from './form/form.component';
import { ButtonComponent } from './button/button.component';
import { VoteButtonsComponentComponent } from './vote-buttons-component/vote-buttons-component.component';
import { QuotesComponent } from './quotes/quotes.component';
import { AuthorPipe } from './authorPipe';
import { QuotePipe } from './quotePipe';
import { DelayElementDirective } from './delayElement.directive';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RankingComponent,
    FormComponent,
    ButtonComponent,
    VoteButtonsComponentComponent,
    QuotesComponent,
    AuthorPipe,
    QuotePipe,
    DelayElementDirective,
    HelloComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
