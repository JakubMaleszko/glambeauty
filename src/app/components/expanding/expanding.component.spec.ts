import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandingComponent } from './expanding.component';

describe('ExpandingComponent', () => {
  let component: ExpandingComponent;
  let fixture: ComponentFixture<ExpandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
