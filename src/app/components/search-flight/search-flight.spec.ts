import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFlightComponent } from './search-flight';

describe('SearchFlight', () => {
  let component: SearchFlightComponent;
  let fixture: ComponentFixture<SearchFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchFlightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFlightComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
