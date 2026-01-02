export const formatDate = (date: string) => {
  const currentDate = new Date(date);
  const now = new Date();
  const isThisYear = currentDate.getFullYear() === now.getFullYear();

  const options: Intl.DateTimeFormatOptions = isThisYear
    ? { month: 'short', day: 'numeric' }
    : { month: 'short', day: 'numeric', year: 'numeric' };

  return currentDate.toLocaleDateString('en-US', options);
};
