import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-prestation-search-result',
  templateUrl: './prestation.search.result.component.html',
  styleUrls: ['./prestation.search.result.component.scss']
})
export class PrestationSearchResultComponent implements OnInit {
  categorie : string | null="";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params => {
        this.categorie = params.get('categorie');
    })
  }

}
