import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationDemandePasseeClientComponent } from './prestation.demande.passee.client.component';

describe('PrestationDemandePasseeClientComponent', () => {
  let component: PrestationDemandePasseeClientComponent;
  let fixture: ComponentFixture<PrestationDemandePasseeClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestationDemandePasseeClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestationDemandePasseeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
