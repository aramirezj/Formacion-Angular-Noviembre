import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpositorAutorComponent } from './expositor-autor.component';

describe('ExpositorAutorComponent', () => {
  let component: ExpositorAutorComponent;
  let fixture: ComponentFixture<ExpositorAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpositorAutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpositorAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
