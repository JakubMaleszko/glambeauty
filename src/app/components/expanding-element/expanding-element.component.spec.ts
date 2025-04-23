import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandingElementComponent } from './expanding-element.component';

describe('ExpandingElementComponent', () => {
  let component: ExpandingElementComponent;
  let fixture: ComponentFixture<ExpandingElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpandingElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandingElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
