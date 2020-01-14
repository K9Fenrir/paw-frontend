import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoonaComponent } from './loona.component';

describe('LoonaComponent', () => {
  let component: LoonaComponent;
  let fixture: ComponentFixture<LoonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
