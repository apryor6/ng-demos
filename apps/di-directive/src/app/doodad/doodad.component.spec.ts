import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoodadComponent } from './doodad.component';

describe('DoodadComponent', () => {
  let component: DoodadComponent;
  let fixture: ComponentFixture<DoodadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoodadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoodadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
