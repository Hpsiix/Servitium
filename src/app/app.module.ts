import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { PrestationCardComponent } from './components/prestation-card/prestation-card.component';
import { PrestationCreateComponent } from './prestation/create/prestation.create/prestation.create.component';
import { ProfilHeaderComponent } from './components/profil-header/profil-header.component';
import { PrestationListComponent } from './prestation/list/prestation.list.component';
import { PrestationItemComponent } from './prestation/list/item/prestation-item.component';
import { ProfilComponent } from './profil/profil.component';
import { PrestationDemandeComponent } from './prestation/demande/prestation.demande.component';
import { PrestationDemandeItemComponent } from './prestation/demande/item/prestation.demande.item.component';
import { PrestationAnnonceComponent } from './prestation/annonce/prestation.annonce.component';
import { PrestationDemandeClientComponent } from './prestation/demande.client/prestation.demande.client.component';
import { PrestationDemandeClientItemComponent } from './prestation/demande.client/item/prestation.demande.client.item.component';
import { PrestationDemandePasseeClientComponent } from './prestation/demande.client/demande.passee/prestation.demande.passee.client.component';
import { PrestationSearchResultComponent } from './prestation/search.result/prestation.search.result.component';
import { PrestationReservationComponent } from './prestation/prestation.reservation/prestation.reservation.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CarouselComponent,
    SearchItemComponent,
    PrestationCardComponent,
    PrestationCreateComponent,
    ProfilHeaderComponent,
    PrestationListComponent,
    PrestationItemComponent,
    ProfilComponent,
    PrestationDemandeComponent,
    PrestationDemandeItemComponent,
    PrestationAnnonceComponent,
    PrestationDemandeClientComponent,
    PrestationDemandeClientItemComponent,
    PrestationDemandePasseeClientComponent,
    PrestationSearchResultComponent,
    PrestationReservationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatIconModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      { 
        path: '',
        component:HomeComponent
      },
      { 
        path: 'prestation/:username/missions', 
        component:PrestationListComponent
      },
      { 
        path: 'prestation/:username', 
        component:PrestationCreateComponent
      },
      { 
        path: 'profil/:username', 
        component:ProfilComponent
      },
      { 
        path: 'prestation/:username/demandes', 
        component:PrestationDemandeComponent
      },
      { 
        path: 'prestation/:username/annonces', 
        component:PrestationAnnonceComponent
      },
      { 
        path: 'prestation/:username/historique', 
        component:PrestationDemandeClientComponent
      },
      { 
        path: 'prestation/:username/demande', 
        component:PrestationDemandePasseeClientComponent
      },
      { 
        path: 'prestation/:categorie/result', 
        component:PrestationSearchResultComponent
      },
      { 
        path: 'prestation/:categorie/reservation', 
        component:PrestationReservationComponent
      },
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
