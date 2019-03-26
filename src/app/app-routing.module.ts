import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlistComponent } from './flist/flist.component';
import { FdetailComponent } from './fdetail/fdetail.component';
import { FeditComponent } from './fedit/fedit.component';
import { EditGuard } from './edit.guard';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: FlistComponent },
  { path: 'detail/:id', component: FdetailComponent },
  { path: 'edit/:id', component: FeditComponent, canActivate: [EditGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
