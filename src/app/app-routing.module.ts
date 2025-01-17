import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Grid1Component } from './grid1/grid1.component';
import { Grid2Component } from './grid2/grid2.component';
import { Grid3Component } from './grid3/grid3.component';
import { Grid4Component } from './grid4/grid4.component';

const routes: Routes = [
  { path: 'grid4', component: Grid4Component, data: { text: 'Grid4' } },
  { path: '', redirectTo: 'grid1', pathMatch: 'full' },
  { path: 'grid3', component: Grid3Component, data: { text: 'Grid3' } },
  { path: 'grid2', component: Grid2Component, data: { text: 'Grid2' } },
  { path: 'grid1', component: Grid1Component, data: { text: 'Grid1' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
