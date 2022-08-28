import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-prestation-card',
  templateUrl: './prestation-card.component.html',
  styleUrls: ['./prestation-card.component.scss']
})
export class PrestationCardComponent implements OnInit {
  @Input() code:string | undefined ;
  image: string | undefined;
  titre: string | undefined;
  desc: string | undefined;
  constructor() { }

  ngOnInit(): void {
    switch (this.code){
      case "plombier": {
        this.image="../../../assets/prestataires/plombier.webp";
        this.titre="John Plombier"
        break;
      }
      case "jardinier": {
        this.image="../../../assets/presentation/pdp.webp";
        this.titre="Billal Benyoub"
        break;
      }
      case "macon": {
        this.image="../../../assets/prestataires/macon.jpg";
        this.titre="Bob"
        break;
      }
      case "electricien": {
        this.image="../../../assets/prestataires/electricien.webp";
        this.titre="Lamine electro"
        break;
      }
    }
  }

}
