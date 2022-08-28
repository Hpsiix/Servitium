import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationAnnonceComponent } from './prestation.annonce.component';

describe('PrestationAnnonceComponent', () => {
  let component: PrestationAnnonceComponent;
  let fixture: ComponentFixture<PrestationAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestationAnnonceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestationAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
