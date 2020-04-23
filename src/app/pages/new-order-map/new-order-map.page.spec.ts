import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewOrderMapPage } from './new-order-map.page';

describe('NewOrderMapPage', () => {
  let component: NewOrderMapPage;
  let fixture: ComponentFixture<NewOrderMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOrderMapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewOrderMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
