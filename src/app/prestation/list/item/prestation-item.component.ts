import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-prestation-item',
  templateUrl: './prestation-item.component.html',
  styleUrls: ['./prestation-item.component.scss']
})
export class PrestationItemComponent implements OnInit {
  @Input() isMission: boolean | undefined;
  @Input() isClientView : boolean | undefined;
  @Input() isDone : boolean | undefined;
  @Input() onGoing : boolean | undefined;
  @Input() isDemande : boolean | undefined;
  @Input() isSearch : boolean | undefined;
    prices : number[] = [500,200,399,566,233,900,123,88,77,45,544,266] 
    random:number = Math.floor(Math.random() * this.prices.length);
    price : number | null =null;
    images:string[] = ["../../../../assets/jardinage/j1.jpg","../../../../assets/jardinage/j2.jpg",
    "../../../../assets/jardinage/j3.jpg","../../../../assets/jardinage/j4.jpg"] ;
    image ="";
    constructor() { }

  ngOnInit(): void {
    this.price= this.prices[this.random];
    this.random = Math.floor(Math.random() * this.images.length);
    this.image = this.images[this.random];
  }

}
