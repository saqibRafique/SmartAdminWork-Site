import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemStripComponent } from './problem-strip.component';

describe('ProblemStripComponent', () => {
  let component: ProblemStripComponent;
  let fixture: ComponentFixture<ProblemStripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProblemStripComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProblemStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
