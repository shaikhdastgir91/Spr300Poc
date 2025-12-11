import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BladeRunner } from './blade-runner';

describe('BladeRunner', () => {
  let component: BladeRunner;
  let fixture: ComponentFixture<BladeRunner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BladeRunner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BladeRunner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
