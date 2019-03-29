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
import { SettingsComponent } from './settings/settings.component';

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
    GeneralComponent,
    SettingsComponent
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