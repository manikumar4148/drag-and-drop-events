import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrageventComponent } from './dragevent.component';

describe('DrageventComponent', () => {
  let component: DrageventComponent;
  let fixture: ComponentFixture<DrageventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrageventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrageventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
