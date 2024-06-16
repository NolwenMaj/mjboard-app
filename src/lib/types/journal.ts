export type Journal = {
  content: string;
  id: number;
  userId: number;
  created_at: Date;
  updated_at?: Date;
};

export type Journals = Journal[];
