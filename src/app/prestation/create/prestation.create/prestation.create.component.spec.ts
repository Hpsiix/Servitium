import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationCreateComponent } from './prestation.create.component';

describe('PrestationCreateComponent', () => {
  let component: PrestationCreateComponent;
  let fixture: ComponentFixture<PrestationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestationCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
