import { ROMAN_DIGITS } from './common.constants';

export const convertToRomane = (number: number): string => {
  return ROMAN_DIGITS[number];
};
