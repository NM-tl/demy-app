export interface Item {
  id: string;
  [key: string]: any;
}

export interface ItemsState {
  items: Item[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export interface Course {
  id: string;
  author: string;
  description: string;
  lessons: number;
  link: string;
  name: string;
  price: string;
  startDate: string;
}