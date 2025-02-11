import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user-component/user-component.component';
import { TestSelectionComponentComponent } from './test-selection-component/test-selection-component.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { ResultComponent } from './result/result.component';


const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'tests', component: TestSelectionComponentComponent },
  { path: 'test/:testId', component: TestSelectionComponentComponent }, 
  { path: 'test/:type/start', component: TestComponentComponent },
  { path: 'result', component: ResultComponent },
  { path: '', redirectTo: '/user', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
