import { DateTime } from 'luxon';

/**
 * Returns the closest occurrence of the specified day of the week to the current date and time at midnight as a string in the format "YYYY-MM-DDTHH:mm:ssZ".
 *
 * @param {number} targetDay - The day of the week to return. A number from 1 to 7, where 1 represents Monday, 2 represents Tuesday, etc.
 * @param {boolean} addWeek - Whether to add a week to the result. If true, the result will be the closest occurrence of the specified day of the week to the current date and time at midnight in the next week. If false, the result will be the closest occurrence of the specified day of the week to the current date and time at midnight in this week.
 * @returns {string} - A string representing the closest occurrence of the specified day of the week to the current date and time at midnight in the format "YYYY-MM-DDTHH:mm:ssZ".
 */
export function getClosestDay(
  targetDay: number,
  addWeek?: boolean
): string {
  // Get the current date and time
  const now = DateTime.local();

  // Get the day of the week as a number (1 for Monday, 2 for Tuesday, etc.)
  const dayOfWeek = now.weekday;

  // Calculate the number of days until the next occurrence of the target day
  let daysUntilTargetDay: number;
  if (dayOfWeek < targetDay) {
    // Today is earlier in the week than the target day, so the next occurrence of the target day is in this week
    daysUntilTargetDay = targetDay - dayOfWeek;
  } else {
    // Today is the target day or later in the week, so the next occurrence of the target day is in next week
    daysUntilTargetDay = 7 - (dayOfWeek - targetDay);
  }

  // Add the number of days until the next occurrence of the target day to the current date to get the next occurrence of the target day
  const closestTargetDay = now.plus({
    days: daysUntilTargetDay + (addWeek ? 7 : 0),
  });

  // Set the time to midnight
  const midnight = closestTargetDay.startOf('day');

  // Return the result as a string in the format "YYYY-MM-DDTHH:mm:ssZ"
  return midnight.toFormat('MM-dd-yyyy');
}
