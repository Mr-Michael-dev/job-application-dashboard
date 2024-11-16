import { useState, useEffect } from 'react';
import JobTable from '../components/JobTable';
import ApplicationStats from '../components/ApplicationStats';
import { getApplications, getApplicationStats } from '../services/api';

interface JobApplication {
  id: string;
  jobTitle: string;
  company: string;
  status: string;
  dateApplied: string;
}

export default function Home() {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [stats, setStats] = useState({ pending: 0, accepted: 0, rejected: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const applicationsData = await getApplications();
      const statsData = await getApplicationStats();
      setApplications(applicationsData);
      setStats(statsData);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Job Application Dashboard</h1>

      <ApplicationStats stats={stats} />

      <div className="mb-8">
        <JobTable applications={applications} />
      </div>
    </div>
  );
}
