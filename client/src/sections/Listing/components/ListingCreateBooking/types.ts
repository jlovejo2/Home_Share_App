interface BookingsIndexYear {
  [key: string]: BookingsIndexMonth;
}

interface BookingsIndexMonth {
  [key: string]: boolean;
}

export interface BookingsIndex {
  [key: string]: BookingsIndexYear;
}
