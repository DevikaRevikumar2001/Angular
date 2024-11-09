// src/app/currency-converter.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter'
})
export class CurrencyConverterPipe implements PipeTransform {
  private readonly usdToInrRate: number = 83; // Set a fixed conversion rate (example: 1 USD = 83 INR)

  transform(value: number, exchangeRate?: number): number {
    const rate = exchangeRate || this.usdToInrRate;
    return value * rate;
  }
}
