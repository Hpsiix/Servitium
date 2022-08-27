import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationDemandeItemComponent } from './prestation.demande.item.component';

describe('PrestationDemandeItemComponent', () => {
  let component: PrestationDemandeItemComponent;
  let fixture: ComponentFixture<PrestationDemandeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestationDemandeItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestationDemandeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
