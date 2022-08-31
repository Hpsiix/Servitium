import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationDemandeClientComponent } from './prestation.demande.client.component';

describe('PrestationDemandeClientComponent', () => {
  let component: PrestationDemandeClientComponent;
  let fixture: ComponentFixture<PrestationDemandeClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestationDemandeClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestationDemandeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
