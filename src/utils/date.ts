export const formatAsYYYYMMDD = (date: Date): string => {
  const pad = (n: number): string => (n < 10 ? `0${n}` : `${n}`);
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
};

export const parseAndDisplayDate = (dateString: string): Date => {
  return new Date(`${dateString}T00:00:00`);
};
