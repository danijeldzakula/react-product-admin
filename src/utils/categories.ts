import { type TFilter } from '@/types/categories';

/**
 * Constructs a query string from an array of category filters.
 *
 * This arrow function takes an array of categories, where each category contains options with a checked status.
 * It builds a query string where each category ID maps to a comma-separated list of selected option values.
 * For example, given categories with selected options, the arrow function might return a query string like:
 * "color=blue&model=travel&size=40l".
 *
 * @param categories - An array of category objects. Each category object should have an `id`, `name`, and `options` property.
 *                      `options` is an array where each option has a `value`, `label`, and `checked` status.
 * @returns A query string representing the selected options for each category.
 */
export const buildQueryStringFromCategories = <T extends TFilter>(
  categories: T[]
): string => {
  const queryParams = categories
    .map(({ id, options }) => {
      const selectedOptions = options
        .filter((option) => option.checked)
        .map((option) => option.value)
        .join('%2C');

      return selectedOptions ? `${id}=${selectedOptions}` : '';
    })
    .filter((param) => param)
    .join('&');

  return queryParams;
};

/**
 * Parses a query string and updates the categories' filter options based on the query parameters.
 *
 * This arrow function takes a query string and an array of categories, and updates each category's options based on
 * the query parameters. It maps each query parameter to a category ID and updates the checked status of each
 * option in the category based on the values present in the query string.
 *
 * @param queryString - A query string where each parameter represents a category ID and a comma-separated list of selected option values.
 * @param categories - An array of category objects. Each category object should have an `id`, `name`, and `options` property.
 *                      `options` is an array where each option has a `value`, `label`, and `checked` status.
 * @returns An array of category objects with updated `checked` statuses for options based on the query string.
 */
export const parseCategoriesFromQueryString = <T extends TFilter>(
  queryString: string,
  categories: T[]
): TFilter[] => {
  const queryParams = new URLSearchParams(queryString);
  const selectedValuesMap: Record<string, string[]> = {};

  queryParams.forEach((value, key) => {
    selectedValuesMap[key] = value.split(',');
  });

  return categories.map((category) => {
    const selectedValues = selectedValuesMap[category.id] || [];
    const options = category.options.map((option) => ({
      ...option,
      checked: selectedValues.includes(option.value),
    }));

    return {
      ...category,
      options,
    };
  });
};

/**
 * Converts the given URLSearchParams object into a query string.
 *
 * This arrow function takes an instance of URLSearchParams, iterates through its key-value pairs,
 * and constructs a query string (e.g., "?color=blue&model=travel&size=40l").
 *
 * @param searchParams - The URLSearchParams object containing query parameters.
 * @returns A string representing the constructed query parameters for a URL.
 */
export const buildQueryString = (searchParams: URLSearchParams): string => {
  const params: Record<string, string> = {};

  // Iterates through each key-value pair in searchParams and stores them in the params object.
  searchParams.forEach((value, key) => {
    params[key] = value;
  });

  // Constructs the query string by joining all key-value pairs with '&'
  const queryString = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  // Adds a '?' at the beginning if the query string is not empty, and returns the full query string
  return queryString ? `?${queryString}` : '';
};
