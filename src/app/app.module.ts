import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Import Ignite UI modules
import { IgxGridModule } from 'igniteui-angular';
import { IgxPaginatorModule } from 'igniteui-angular';
import { IgxCheckboxModule } from 'igniteui-angular';
import { IgxFilterModule } from 'igniteui-angular';
import { IgxIconModule, IgxRippleModule, IgxInputGroupModule, IgxSelectModule, IgxSimpleComboModule, IgxButtonModule } from "igniteui-angular";


import { provideHttpClient, withFetch } from '@angular/common/http';
import { Grid1Component } from './grid1/grid1.component';
import { Grid2Component } from './grid2/grid2.component';
import { Grid3Component } from './grid3/grid3.component';
import { Grid4Component } from './grid4/grid4.component';

@NgModule({
  declarations: [
    AppComponent,
    Grid1Component,
    Grid2Component,
    Grid3Component,
    Grid4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule,
    DatePipe,
    FormsModule,
    IgxPaginatorModule,
    IgxCheckboxModule,
    IgxFilterModule,
    IgxIconModule,
    IgxRippleModule,
    IgxInputGroupModule,
    IgxSelectModule,
    IgxSimpleComboModule,
    IgxButtonModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
