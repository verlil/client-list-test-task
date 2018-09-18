import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsStartComponent } from './clients-start.component';

describe('ClientsStartComponent', () => {
  let component: ClientsStartComponent;
  let fixture: ComponentFixture<ClientsStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
