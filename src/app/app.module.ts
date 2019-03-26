import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FlistComponent } from './flist/flist.component';
import { FdetailComponent } from './fdetail/fdetail.component';
import { FeditComponent } from './fedit/fedit.component';
import { StatsComponent } from './stats/stats.component';
import { CaracComponent } from './carac/carac.component';
import { StuffComponent } from './stuff/stuff.component';
import { CompComponent } from './comp/comp.component';
import { GeneralComponent } from './general/general.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FlistComponent,
    FdetailComponent,
    FeditComponent,
    StatsComponent,
    CaracComponent,
    StuffComponent,
    CompComponent,
    GeneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FicheComponent } from './fiche/fiche.component';
import { ClementDirective } from './clement.directive';
import { GangplankPipe } from './gangplank.pipe';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ChaussurePipe } from './chaussure.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    FicheComponent,
    ClementDirective,
    GangplankPipe,
    LoginComponent,
    AccueilComponent,
    ChaussurePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/