import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseJoinAutocompleteComponent } from './base-join-autocomplete.component';

describe('BaseJoinAutocompleteComponent', () => {
  let component: BaseJoinAutocompleteComponent;
  let fixture: ComponentFixture<BaseJoinAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseJoinAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseJoinAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
