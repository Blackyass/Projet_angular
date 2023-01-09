import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfiliereComponent } from './listfiliere.component';

describe('ListfiliereComponent', () => {
  let component: ListfiliereComponent;
  let fixture: ComponentFixture<ListfiliereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListfiliereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListfiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
