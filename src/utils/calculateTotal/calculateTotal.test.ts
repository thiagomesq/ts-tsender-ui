import { describe, it, expect } from 'vitest';
import { calculateTotal } from './calculateTotal';

describe('calculateTotal', () => {
  it('should return 0 for empty string', () => {
    expect(calculateTotal('')).toBe(0);
  });

  it('should calculate total for comma-separated values', () => {
    expect(calculateTotal('100,200,300')).toBe(600);
  });

  it('should calculate total for newline-separated values', () => {
    expect(calculateTotal('100\n200\n300')).toBe(600);
  });

  it('should calculate total for mixed comma and newline separated values', () => {
    expect(calculateTotal('200,200\n100')).toBe(500);
  });

  it('should handle decimal numbers', () => {
    expect(calculateTotal('10.5,20.3,5.2')).toBe(36);
  });

  it('should ignore empty values and whitespace', () => {
    expect(calculateTotal('100, ,200,   ,300')).toBe(600);
  });

  it('should handle single number', () => {
    expect(calculateTotal('150')).toBe(150);
  });

  it('should ignore invalid numbers', () => {
    expect(calculateTotal('100,abc,200,xyz,300')).toBe(600);
    expect(calculateTotal('100abc,200xyz,300')).toBe(600);
  });

  it('should handle mixed valid and invalid values with newlines', () => {
    expect(calculateTotal('100\nabc\n200\n')).toBe(300);
  });

  it('should handle trailing commas and newlines', () => {
    expect(calculateTotal('100,200,300,\n')).toBe(600);
  });
});