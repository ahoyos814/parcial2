/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';


import { HttpClientModule } from '@angular/common/http';
import { Pinguino } from '../pinguino';
import { PinguinoService } from '../pinguino.service';
import { PinguinoDetail } from '../PinguinoDetail';

describe('PinguinoListComponent', () => {
  let component: PinguinoListComponent;
  let fixture: ComponentFixture<PinguinoListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PinguinoListComponent ],
      providers: [ PinguinoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinguinoListComponent);
    component = fixture.componentInstance;

 
    for(let i = 0; i < 10; i++) {
      const pinguinoDetail = new PinguinoDetail(
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        
      );
      component.pinguinos.push(pinguinoDetail);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 10 <div.col.mb-2> elements', () => {
    expect(debug.queryAll(By.css('div.col.mb-2'))).toHaveSize(10)
  });

  it('should have 10 <card.p-2> elements', () => {
    expect(debug.queryAll(By.css('div.card.p-2'))).toHaveSize(10)
  });

  it('should have 10 <img> elements', () => {
    expect(debug.queryAll(By.css('img'))).toHaveSize(10)
  });

  it('should have 10 <div.card-body> elements', () => {
    expect(debug.queryAll(By.css('div.card-body'))).toHaveSize(10)
  });

  it('should have h5 tag with the pinguino.name', () => {
    debug.queryAll(By.css('h5.card-title')).forEach((h5, i)=>{
      expect(h5.nativeElement.textContent).toContain(component.pinguinos[i].name)
    });
  });

  it('should have p tag with the facturaCompra.modelo', () => {
    debug.queryAll(By.css('p.card-text')).forEach((p, i)=>{
      expect(p.nativeElement.textContent).toContain(component.pinguinos[i].scientific_name)
    });
  });

  it('should have 9 <div.col.mb-2> elements and the deleted book should not exist', () => {
    const pinguino = component.pinguinos.pop()!;
    fixture.detectChanges();
    expect(debug.queryAll(By.css('div.col.mb-2'))).toHaveSize(9)
 
    debug.queryAll(By.css('div.col.mb-2')).forEach((selector, i)=>{
      expect(selector.nativeElement.textContent).not.toContain(pinguino.name);
    });
  });

});
