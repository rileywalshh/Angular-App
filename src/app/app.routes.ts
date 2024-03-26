//Imports required for the routing component.
import { Routes } from '@angular/router';
import { ArtistFormComponent } from  './artist-form/artist-form.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { InformationPageComponent } from './information-page/information-page.component';
import { PrivacyPageComponent } from './privacy-page/privacy-page.component';
import { ErrorHandlePageComponent } from './error-handle-page/error-handle-page.component';

//Here are the routes defined in an array, these determine the correct url path to each page.
export const routes: Routes = [
    {path: "artist-form", component:ArtistFormComponent},
    {path: "artist-list", component:ArtistListComponent},
    {path: "help-page", component:HelpPageComponent},
    {path: "information-page", component:InformationPageComponent},
    {path: "privacy-page", component:PrivacyPageComponent},
    {path: "**", component:ErrorHandlePageComponent}
];
