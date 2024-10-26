export interface CalendarDay {
    date: Date;
    sobrietyDay?: number;
  }
  
  // Generates the calendar weeks for a given month
  export function generateCalendar(baseDate: Date, sobrietyStartDate: Date): CalendarDay[][] {
    const calendar: CalendarDay[][] = [];
    const startOfMonth = new Date(baseDate.getFullYear(), baseDate.getMonth(), 1);
    const endOfMonth = new Date(baseDate.getFullYear(), baseDate.getMonth() + 1, 0);
  
    const currentDay = new Date(startOfMonth);
    let week: CalendarDay[] = Array.from({ length: currentDay.getDay() }, () => ({ date: new Date(0) })); // Add leading empty days
  
    // Generate days for the current month
    while (currentDay <= endOfMonth) {
      const sobrietyDayCount = calculateSobrietyDays(currentDay, sobrietyStartDate);
      week.push({ date: new Date(currentDay), sobrietyDay: sobrietyDayCount });
  
      // Start a new week if it’s Sunday
      if (currentDay.getDay() === 6) {
        calendar.push(week);
        week = [];
      }
  
      // Move to the next day
      currentDay.setDate(currentDay.getDate() + 1);
    }
  
    // Add remaining days of the last week as empty slots
    while (week.length < 7) {
      week.push({ date: new Date(0) });
    }
    calendar.push(week);
  
    return calendar;
  }
  
// Helper function to calculate sobriety days
export function calculateSobrietyDays(date: Date, sobrietyStartDate: Date): number {
    if (!date || !sobrietyStartDate) {
        console.warn("Invalid date passed to calculateSobrietyDays:", { date, sobrietyStartDate });
        return 0;
    }
    // Add one day to the sobriety start date
    const adjustedStartDate = new Date(sobrietyStartDate);
    adjustedStartDate.setDate(adjustedStartDate.getDate() + 1);
    const diffTime = date.getTime() - adjustedStartDate.getTime();
    return Math.max(Math.ceil(diffTime / (1000 * 60 * 60 * 24)), 0);
}

  