/**
 * Groups an array of roles by their `roleName` property.
 *
 * @param {T[]} roles - An array of roles, each containing a `roleName` property.
 * @returns {Record<string, T[]> | null} - An object where each key is a `roleName` and the value is an array of roles with that `roleName`, or `null` if the input array is empty.
 *
 * This utility arrow function is useful for transforming a flat list of roles into a grouped structure,
 * making it easier to handle roles by their names in various parts of the application.
 */
export const groupRolesByRoleName = <
  T extends { roleName: string | undefined },
>(
  roles: T[]
): Record<string, T[]> | null => {
  if (!roles || roles.length === 0) {
    return null;
  }

  return roles.reduce((acc: Record<string, T[]>, curr: T) => {
    const roleName = curr.roleName ?? 'undefined'; // Default to 'undefined' if roleName is undefined

    if (roleName === 'undefined') {
      // Optionally handle roles with undefined roleName
      console.warn('Encountered role with undefined roleName:', curr);
      return acc; // Skip adding roles with undefined roleName
    }

    if (!acc[roleName]) {
      acc[roleName] = [];
    }

    acc[roleName].push(curr);

    return acc;
  }, {});
};
