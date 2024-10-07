import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let emitSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;

    component.product = {
      id: 1,
      title: 'Titre produit',
      description: 'Description produit',
      photo: 'path-photo',
      price: 10,
      stock: 1,
    };

    emitSpy = spyOn(component.addToBasket, 'emit');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display description', () => {
    const matCardContent: HTMLElement | null = (
      fixture.nativeElement as HTMLElement
    ).querySelector('mat-card-content');

    expect(matCardContent?.textContent).toContain(
      component.product.description
    );
  });

  it('should emit output with the current count when clicking', () => {
    const button: HTMLElement | null = (
      fixture.nativeElement as HTMLElement
    ).querySelector('[mat-flat-button]');

    button?.click();

    expect(emitSpy).toHaveBeenCalled();
  });
});
