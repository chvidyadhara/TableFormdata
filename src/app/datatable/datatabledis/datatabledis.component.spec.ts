import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatabledisComponent } from './datatabledis.component';

describe('DatatabledisComponent', () => {
  let component: DatatabledisComponent;
  let fixture: ComponentFixture<DatatabledisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatabledisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatabledisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
