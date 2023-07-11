export interface Element {
  id: number;
  name: string;
  uniqueNumber: string;
  canAssignQuantity: boolean;
  parentComponentID: number | null;
  children: Element[];
}
