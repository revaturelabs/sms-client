export interface Batch {
  id: number;
  name: string;
  associates: number[];
  location: string;
  skill: string;
  trainerId: number;
  startDate: Date;
  endDate: Date;
}
