export type ExamType = {
  id: string;
  name: string;
  description: string;
  writer: string;
  createdAt: Date;
  updatedAt: Date;
  questions: string[];
  accessLevel: number;
  subject: string;
  active: boolean;
};
