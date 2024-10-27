export interface CalendarDay {
  date: Date | null;
  sobrietyDay?: number;
}

// Generates the calendar weeks for a given month
export function generateCalendar(baseDate: Date, sobrietyStartDate: Date): CalendarDay[][] {
  const calendar: CalendarDay[][] = [];
  const startOfMonth = new Date(baseDate.getFullYear(), baseDate.getMonth(), 1);
  const endOfMonth = new Date(baseDate.getFullYear(), baseDate.getMonth() + 1, 0);

  const currentDay = new Date(startOfMonth);
  let week: CalendarDay[] = Array.from({ length: startOfMonth.getDay() }, () => ({ date: null }));

  // Generate days for the current month
  while (currentDay <= endOfMonth) {
    const sobrietyDayCount = calculateSobrietyDays(currentDay, sobrietyStartDate);
    week.push({ date: new Date(currentDay), sobrietyDay: sobrietyDayCount });

    if (currentDay.getDay() === 6) {  // End of week
      calendar.push(week);
      week = [];
    }

    currentDay.setDate(currentDay.getDate() + 1);
  }

  while (week.length < 7) {  // Fill the last week with empty slots
    week.push({ date: null });
  }
  calendar.push(week);

  return calendar;
}

// Helper function to calculate sobriety days
export function calculateSobrietyDays(date: Date, sobrietyStartDate: Date): number {
  const adjustedStartDate = new Date(sobrietyStartDate);
  adjustedStartDate.setDate(adjustedStartDate.getDate() + 1);
  const diffTime = date.getTime() - adjustedStartDate.getTime();
  return Math.max(Math.ceil(diffTime / (1000 * 60 * 60 * 24)), 0);
}

// Generate yearly calendar with monthly views
export function generateYearlyCalendar(sobrietyStartDate: Date): CalendarDay[][][] {
  const months: CalendarDay[][][] = [];
  for (let month = 0; month < 12; month++) {
    const monthDate = new Date(sobrietyStartDate.getFullYear(), month, 1);
    months.push(generateCalendar(monthDate, sobrietyStartDate));
  }
  return months;
}