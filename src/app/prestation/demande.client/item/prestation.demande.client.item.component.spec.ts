import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationDemandeClientItemComponent } from './prestation.demande.client.item.component';

describe('PrestationDemandeClientItemComponent', () => {
  let component: PrestationDemandeClientItemComponent;
  let fixture: ComponentFixture<PrestationDemandeClientItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestationDemandeClientItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestationDemandeClientItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
