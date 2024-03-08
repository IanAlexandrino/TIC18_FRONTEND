import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaPesoComponent } from './edita-peso.component';

describe('EditaPesoComponent', () => {
  let component: EditaPesoComponent;
  let fixture: ComponentFixture<EditaPesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditaPesoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditaPesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
