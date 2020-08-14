import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewupdateComponent } from './viewupdate.component';

describe('ViewupdateComponent', () => {
  let component: ViewupdateComponent;
  let fixture: ComponentFixture<ViewupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
