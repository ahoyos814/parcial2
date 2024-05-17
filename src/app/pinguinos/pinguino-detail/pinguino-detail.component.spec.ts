/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PinguinoDetailComponent } from './pinguino-detail.component';
import { faker } from '@faker-js/faker';
import { PinguinoDetail } from '../PinguinoDetail';

describe('PinguinoDetailComponent', () => {
  let component: PinguinoDetailComponent;
  let fixture: ComponentFixture<PinguinoDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinguinoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinguinoDetailComponent);
    component = fixture.componentInstance;
     for (let i = 0; i < 3; i++) {
    
    component.pinguinoDetail= new PinguinoDetail(
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
    );

    fixture.detectChanges();
    debug = fixture.debugElement;
  };

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have one dd tag for component.pinguinoDetail.nombre', () => {
    const allDt : DebugElement[] = debug.queryAll(By.css('dt'));
    const node = allDt.find((value) => {
      return value.nativeElement.textContent == 'Nombre Pinguino';
    });
    expect(node?.nativeElement.nextSibling.textContent).toContain(component.pinguinoDetail.name);
  });

  it('should have one dd tag for component.pinguinoDetail.scientifica_name', () => {
    const allDt : DebugElement[]= debug.queryAll(By.css('dt'));
    const node = allDt.find((value) => {
      return value.nativeElement.textContent == 'Scientific_Name';
    });
    expect(node?.nativeElement.nextSibling.textContent).toContain(component.pinguinoDetail.scientific_name);
  });

  

});
