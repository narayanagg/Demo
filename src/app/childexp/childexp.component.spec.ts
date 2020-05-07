import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildexpComponent } from './childexp.component';

describe('ChildexpComponent', () => {
  let component: ChildexpComponent;
  let fixture: ComponentFixture<ChildexpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildexpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
