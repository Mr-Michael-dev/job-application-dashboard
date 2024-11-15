export interface Application {
  id: string;
  jobTitle: string;
  companyName: string;
  status: string;
  dateApplied: string;
}

export interface ApplicationStats {
  totalApplications: number;
  countsByStatus: Record<string, number>;
  countsByMonth: Record<string, number>;
}