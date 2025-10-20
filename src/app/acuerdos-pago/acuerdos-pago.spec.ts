import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuerdosPago } from './acuerdos-pago';

describe('AcuerdosPago', () => {
  let component: AcuerdosPago;
  let fixture: ComponentFixture<AcuerdosPago>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcuerdosPago]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcuerdosPago);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
