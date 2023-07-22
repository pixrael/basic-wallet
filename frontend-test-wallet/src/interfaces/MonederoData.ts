export interface MovementsRaws {
  id: number;
  amount: number;
  concept: number;
  date: string;
}

export interface Movements extends MovementsRaws {
  prevBalance: number;
  nextBalance: number;
}

export interface MonederoData {
  balance: number;
  movements: Movements[];
}
