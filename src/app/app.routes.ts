import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { AnimationIAComponentComponent } from './animation-iacomponent/animation-iacomponent.component';
import { FormfactsComponent } from './formfacts/formfacts.component';

export const routes: Routes = [
    {path:'', component:HomeComponentComponent},
    {path:'home', component:HomeComponentComponent},
    {path:'contact', component:ContactComponentComponent},
    {path:'animation', component:AnimationIAComponentComponent},
    {path:'formfacts', component:FormfactsComponent},
    {path:'**', component:HomeComponentComponent},
];
