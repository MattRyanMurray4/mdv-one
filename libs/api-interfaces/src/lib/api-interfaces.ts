export interface Course {
  id: string;
  className: string;
  teacher: string;
  description: string;
  classSize: number;
  failRate: number;
}

export const emptyCourse = {
  id: '',
  className: '',
  teacher: '',
  description: '',
  classSize: 0,
  failRate: 0,
};
