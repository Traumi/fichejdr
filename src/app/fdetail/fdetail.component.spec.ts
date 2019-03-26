import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdetailComponent } from './fdetail.component';

describe('FdetailComponent', () => {
  let component: FdetailComponent;
  let fixture: ComponentFixture<FdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
