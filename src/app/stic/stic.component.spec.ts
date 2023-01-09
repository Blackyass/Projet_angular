import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SticComponent } from './stic.component';

describe('SticComponent', () => {
  let component: SticComponent;
  let fixture: ComponentFixture<SticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
