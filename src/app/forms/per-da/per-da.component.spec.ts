import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerDaComponent } from './per-da.component';

describe('PerDaComponent', () => {
  let component: PerDaComponent;
  let fixture: ComponentFixture<PerDaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerDaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerDaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
