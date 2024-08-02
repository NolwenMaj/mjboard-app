export type Response = {
  id: number;
  content: string;
  userId: number;
  questionId: number;
  created_at: Date;
  updated_at?: Date;
};

export type Responses = Response[];

export enum Color {
  WHITE = "#F2F2F2",
  DEEP_PURPLE = "#614BF2",
  LIGHT_PURPLE = "#7F6DF2",
  GREEN = "#B5D93B",
  ORANGE = "#F2A30F",
}
