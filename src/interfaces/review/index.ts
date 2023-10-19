import { ResumeInterface } from 'interfaces/resume';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ReviewInterface {
  id?: string;
  rating: number;
  comments?: string;
  resume_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  resume?: ResumeInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  comments?: string;
  resume_id?: string;
  user_id?: string;
}
