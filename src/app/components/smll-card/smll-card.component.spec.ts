import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmllCardComponent } from './smll-card.component';

describe('SmllCardComponent', () => {
  let component: SmllCardComponent;
  let fixture: ComponentFixture<SmllCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmllCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmllCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
