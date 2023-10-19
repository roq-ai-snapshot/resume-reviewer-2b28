import { JobInterface } from 'interfaces/job';
import { ResumeInterface } from 'interfaces/resume';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ApplicationInterface {
  id?: string;
  status: string;
  job_id: string;
  resume_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  job?: JobInterface;
  resume?: ResumeInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ApplicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  job_id?: string;
  resume_id?: string;
  user_id?: string;
}
