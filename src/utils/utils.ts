import { useEffect, useLayoutEffect } from 'react';
import { type Pathname } from 'react-router-dom';

/**
 * Returns an array containing only unique elements from the input array.
 * @param items The input array from which to extract unique elements.
 * @returns An array containing unique elements from the input array.
 */
export const getUniqueElements = (items: string[]): string[] => {
  return Array.from(new Set<string>(items));
};

/**
 * Checks if the global window object is defined, indicating that the code is running in a browser environment.
 * @returns True if window object is defined (indicating browser environment), false otherwise.
 */
export const isBrowser = (): boolean => {
  return typeof window !== 'undefined';
};

/**
 * This hook behaves like `useLayoutEffect` on the client,
 * and `useEffect` on the server(no effect).
 *
 * Since using `useLayoutEffect` on the server cause warning messages in nextjs,
 * this hook is workaround for that.
 */
export const useIsomorphicLayoutEffect = () => {
  const hasWindow = isBrowser();
  return hasWindow ? useLayoutEffect : useEffect;
};

/**
 * Splits a pathname string into an array of path segments, excluding empty segments.
 * @param pathname The pathname string to split into path segments.
 * @returns An array of path segments extracted from the pathname.
 */
export const extractPathSegments = (pathname: Pathname): string[] => {
  return pathname.split('/').filter((segment) => segment !== '');
};

/**
 * Generates a slug from an array of paths by normalizing, filtering out unwanted paths,
 * and converting to a URL-friendly format.
 * @param paths The array of paths to generate the slug from.
 * @param removePaths Optional array of paths to remove from the generated slug.
 * @returns The generated slug string.
 */
export const generateSlug = (
  paths: string[],
  removePaths?: string[]
): string => {
  const notAllowedPaths = [''].concat(removePaths ?? []).filter(Boolean);
  const uniqueNotAllowedPaths = getUniqueElements(notAllowedPaths);

  return paths
    .map((item) => item.toLowerCase())
    .filter((item) => !uniqueNotAllowedPaths.includes(item))
    .map((item) => item.replace(/[^a-z0-9]+/g, '-'))
    .join('-')
    .replace(/^-+|-+$/g, '');
};

/**
 * Converts a slug into a formatted title string.
 *
 * @param {T extends string} slug - The input slug to be converted.
 * @returns {string} - The formatted title string.
 *
 * @example
 * generateFormattedTitleFromSlug('woman-shoes-blue-small');
 * @returns {string} - Returns 'Woman, Shoes, Blue, Small'
 */
export const generateFormattedTitleFromSlug = <T extends string>(
  slug: T
): string => {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(', ');
};

/**
 * Constructs a breadcrumb path from an array of pathname segments up to the specified index.
 * @param index The index up to which segments of the pathname array should be included in the breadcrumb.
 * @param pathname An array of pathname segments.
 * @returns The constructed breadcrumb path string.
 */
export const constructBreadcrumbPath = (
  index: number,
  pathname: Pathname[]
): string => {
  return '/' + pathname.slice(0, index + 1).join('/');
};

/**
 * Creates a promise that resolves after a specified delay.
 * @param delay The delay in milliseconds before the promise resolves. Default is 700ms.
 * @returns A promise that resolves after the specified delay.
 */
export const wait = (delay = 700): Promise<void> => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
};

/**
 * Calculates the total sum of numeric values extracted from an array of objects,
 * using a specified key and replacing a substring in each value.
 * @param items Array of objects from which to extract values.
 * @param key Key of the property containing the numeric values.
 * @param replaceString Substring to replace in each value before conversion to number.
 * @returns The total sum of the numeric values.
 */
export const calculateTotal = <T, K extends keyof T>(
  items: T[],
  key: K
): number => {
  return items.reduce((total, item) => {
    const value = item[key];

    if (typeof value === 'string') {
      const numericValue = parseFloat(value.replace(/[$,]/g, ''));

      if (!isNaN(numericValue)) {
        return total + numericValue;
      }
    }

    return total;
  }, 0);
};

type TFormattCurrency = {
  amount: number;
} & Intl.NumberFormatOptions;

/**
 * Formats a number into a currency string.
 * @param amount The number to format.
 * @param rest Additional options for Intl.NumberFormat.
 * @returns The formatted currency string.
 */
export const formatCurrency = ({
  amount,
  ...rest
}: TFormattCurrency): string => {
  const formattedCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    ...rest,
  }).format(amount);

  return formattedCurrency;
};

/**
 * Extracts keys from the properties of objects in the first element of an array.
 * @param arrayOfObjects The array containing objects from which to extract keys.
 * @returns An array of keys from the properties of objects in the array.
 */
export const extractObjectKeys = <T extends object>(
  arrayOfObjects: T[]
): (keyof T)[] => {
  if (arrayOfObjects.length === 0) {
    return [];
  }

  // Extract keys from the properties of the first object in the array
  const keys = Object.keys(arrayOfObjects[0]) as (keyof T)[];
  return keys;
};

/**
 * Generates a random integer between the specified `min` and `max` values, inclusive.
 *
 * @param {number} min - The minimum value of the random integer (inclusive).
 * @param {number} max - The maximum value of the random integer (inclusive).
 * @returns {number} A random integer between `min` and `max`, inclusive.
 * @throws {Error} Throws an error if `min` is not less than `max`.
 */
export const getRandomIntInclusive = (min: number, max: number): number => {
  if (min >= max) {
    throw new Error('Min must be less than Max');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Truncates a given text to a specified maximum length and appends "..." if the text exceeds that length.
 * @param input - The text to be trimmed
 * @param maxLength - The maximum allowed length of the text (default is 20)
 * @returns The trimmed text, appended with "..." if it exceeds the maximum length
 */
export const truncateText = (input: string, maxLength: number = 20): string => {
  if (typeof input !== 'string' || input.trim() === '') {
    throw new Error(
      'Input text is a required field and must be a non-empty string'
    );
  }

  const trimmedText =
    input.length > maxLength ? `${input.slice(0, maxLength)}...` : input;

  return trimmedText;
};

/**
 * Normalizes the input text by replacing all hyphens with spaces.
 * @param input - The string to be normalized.
 * @returns The normalized string with hyphens replaced by spaces.
 */
export const normalizeText = (input: string): string => {
  if (typeof input !== 'string' || input.trim() === '') {
    throw new Error(
      'Input text is a required field and must be a non-empty string'
    );
  }

  return input.replaceAll('-', ' ');
};
