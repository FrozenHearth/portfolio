import { format, isThisYear } from 'date-fns';

export const formatDate = (date: string) => {
  const currentDate = new Date(date);

  return isThisYear(currentDate)
    ? format(currentDate, 'MMM d')
    : format(currentDate, 'MMM d, y');
};
