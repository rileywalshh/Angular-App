import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorHandlePageComponent } from './error-handle-page.component';

describe('ErrorHandlePageComponent', () => {
  let component: ErrorHandlePageComponent;
  let fixture: ComponentFixture<ErrorHandlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorHandlePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorHandlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
