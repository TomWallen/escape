export interface IRoom {
    id: number;
    title: string;
    description?: string; // ? = parametre OPTIONNEL
    imageUrl: string;
    imageAlt: string;
    nbMin: number; 
    nbMax: number;
    difficulty: number;
    isVirtual: Boolean;
  }