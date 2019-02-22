import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaticComponent } from './static/static.component';
import { DynamicComponent } from './dynamic/dynamic.component';

const routes: Routes = [
  { path: '', component: StaticComponent },
  { path: 'dynamic', component: DynamicComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
