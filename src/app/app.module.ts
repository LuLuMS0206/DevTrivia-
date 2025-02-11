import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user-component/user-component.component';
import { TestSelectionComponentComponent } from './test-selection-component/test-selection-component.component';  // Asegúrate de importar el componente
import { FormsModule } from '@angular/forms';
import { TestComponentComponent } from './test-component/test-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TestSelectionComponentComponent,  
    TestComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
