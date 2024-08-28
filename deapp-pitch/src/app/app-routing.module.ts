import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PitchComponent } from './pitch/pitch.component';

const routes: Routes = [
  { path: '', component: PitchComponent },
  { path: 'voorwaarden', component: TermsConditionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
