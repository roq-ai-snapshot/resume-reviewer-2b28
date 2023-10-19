import { ApplicationInterface } from 'interfaces/application';
import { ReviewInterface } from 'interfaces/review';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ResumeInterface {
  id?: string;
  title: string;
  summary?: string;
  experience?: string;
  education?: string;
  skills?: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  application?: ApplicationInterface[];
  review?: ReviewInterface[];
  user?: UserInterface;
  _count?: {
    application?: number;
    review?: number;
  };
}

export interface ResumeGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  summary?: string;
  experience?: string;
  education?: string;
  skills?: string;
  user_id?: string;
}
