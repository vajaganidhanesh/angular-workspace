import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonCartComponent } from './amazon-cart.component';

describe('AmazonCartComponent', () => {
  let component: AmazonCartComponent;
  let fixture: ComponentFixture<AmazonCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AmazonCartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AmazonCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // Write a test for title() - It must return 'Amazon Shopping Cart'
  describe('Cart Title Test', () => {
    it('Expecting Amazon Shopping Cart as Title', () => {
      expect(component.Title()).toBe('Amazon Shopping Cart');
    });
  });
  // write a test for Total() - It must return 40000
  describe('Total test', () => {
    it('Total must be 40000', () => {
      expect(component.Total(2, 20000)).toBe(40000);
    });
  });
});
