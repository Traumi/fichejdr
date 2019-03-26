import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlistComponent } from './flist.component';

describe('FlistComponent', () => {
  let component: FlistComponent;
  let fixture: ComponentFixture<FlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
