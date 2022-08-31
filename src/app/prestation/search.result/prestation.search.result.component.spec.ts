import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationSearchResultComponent } from './prestation.search.result.component';

describe('PrestationSearchResultComponent', () => {
  let component: PrestationSearchResultComponent;
  let fixture: ComponentFixture<PrestationSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestationSearchResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestationSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
