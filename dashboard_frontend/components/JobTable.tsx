import React from 'react';

interface JobApplication {
  id: string;
  jobTitle: string;
  company: string;
  status: string;
  dateApplied: string;
}

interface JobTableProps {
  applications: JobApplication[];
}

const JobTable: React.FC<JobTableProps> = ({ applications }) => {
  return (
    <table className="table-auto w-full border-collapse">
      <thead>
        <tr>
          <th className="px-4 py-2">Job Title</th>
          <th className="px-4 py-2">Company</th>
          <th className="px-4 py-2">Status</th>
          <th className="px-4 py-2">Date Applied</th>
        </tr>
      </thead>
      <tbody>
        {applications.map((application) => (
          <tr key={application.id}>
            <td className="border px-4 py-2">{application.jobTitle}</td>
            <td className="border px-4 py-2">{application.company}</td>
            <td className="border px-4 py-2">{application.status}</td>
            <td className="border px-4 py-2">{application.dateApplied}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default JobTable;
