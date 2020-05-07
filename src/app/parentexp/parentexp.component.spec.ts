import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentexpComponent } from './parentexp.component';

describe('ParentexpComponent', () => {
  let component: ParentexpComponent;
  let fixture: ComponentFixture<ParentexpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentexpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
