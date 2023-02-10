import numeral from 'numeral';

numeral.register('locale', 'id', {
  delimiters: {
    thousands: '.',
    decimal: ','
  },
  abbreviations: {
    thousand: 'ribu',
    million: 'juta',
    billion: 'milyar',
    trillion: 'triliun'
  },
  currency: {
    symbol: 'Rp'
  },
});

numeral.locale('id');

/**
 * Convert number to short form rupiah currency
 * @param {number|string} number
 * @returns {string} - currency.
 */
export const toCurrencyShort = (number) => {
  return numeral(number).format('$ 0.00 a');
};

/**
 * Convert number to short form number
 * @param {number|string} number
 * @param {string} zeros - decimal length 00 -> 120.00
 * @returns {string} - short number.
 */
export const toShort = (number, zeros = '0') => {
  return numeral(number).format(`0.${zeros}a`);
};

/**
 * Check number is decimal or not and if decimal, only 2 digits after decimal.
 * @param {number|string} number
 * @returns {string} - number.
 */
export const twoAfterDecimal = (number) => {  
  if (number % 1 !== 0){
    number = Number(number).toFixed(2);
  } else {
    return Number(number);
  }
  return Number(number);
};

export default numeral;
