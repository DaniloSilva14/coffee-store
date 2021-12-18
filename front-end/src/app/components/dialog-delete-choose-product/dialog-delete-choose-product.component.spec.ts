import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteChooseProductComponent } from './dialog-delete-choose-product.component';

describe('DialogDeleteChooseProductComponent', () => {
  let component: DialogDeleteChooseProductComponent;
  let fixture: ComponentFixture<DialogDeleteChooseProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteChooseProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeleteChooseProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
