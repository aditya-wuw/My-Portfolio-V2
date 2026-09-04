export interface UpdateLogs {
  id: string;
  last_update: string;
  log: string;
}

export type logs = Omit<UpdateLogs, "log">;
