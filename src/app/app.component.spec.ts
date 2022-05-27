import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create form with 3 controls', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component.form.contains('coef')).toBeTruthy();
    expect(component.form.contains('selectCoef')).toBeTruthy();
    expect(component.form.contains('answer')).toBeTruthy();
  });

  it('should add result to arrayOfVal by multiplying selectedOptionValue and coefValue', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.multiplyVal(100, 2);
    expect(component.arrayOfVal.length).toBe(1);
    expect(component.arrayOfVal[0]).toBe(100);
  });

  it('should add result to arrayOfVal by multiplying selectedOptionValue and coefValue', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.multiplyVal(250, 2);
    expect(component.arrayOfVal.length).toBe(1);
    expect(component.arrayOfVal[0]).toBe(150);
  });

  it('should add result to arrayOfVal by multiplying selectedOptionValue and coefValue', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.multiplyVal(625, 2);
    expect(component.arrayOfVal.length).toBe(1);
    expect(component.arrayOfVal[0]).toBe(275);
  });

  it('should add result to arrayOfVal by multiplying selectedOptionValue and coefValue', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.multiplyVal(1562, 2);
    expect(component.arrayOfVal.length).toBe(1);
    expect(component.arrayOfVal[0]).toBe(587);
  });

  it('should add result to arrayOfVal by multiplying selectedOptionValue and coefValue', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.multiplyVal(3905, 2);
    expect(component.arrayOfVal.length).toBe(1);
    expect(component.arrayOfVal[0]).toBe(1368);
  });

  it('should reset answerVal, countOfBets, countOfBots fields', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.resetForm()
    expect(component.answerVal.valueOf()).toBe(0)
    expect(component.countOfBets.valueOf()).toBe(0)
    expect(component.countOfBots.valueOf()).toBe(0)
  });
});
