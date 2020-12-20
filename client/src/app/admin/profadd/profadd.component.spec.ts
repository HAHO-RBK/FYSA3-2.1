import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfaddComponent } from './profadd.component';

describe('ProfaddComponent', () => {
  let component: ProfaddComponent;
  let fixture: ComponentFixture<ProfaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
