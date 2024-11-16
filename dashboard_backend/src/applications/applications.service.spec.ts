import { Test, TestingModule } from '@nestjs/testing';
import { ApplicationService } from './applications.service';

export const mockApplications = [
    {
    "id": "1",
    "jobTitle": "Frontend Developer",
    "companyName": "TechCorp",
    "status": "accepted",
    "dateApplied": "2024-10-12"
    },
    {
    "id": "2",
    "jobTitle": "Backend Developer",
    "companyName": "DevCorp",
    "status": "pending",
    "dateApplied": "2024-11-01"
    },
    {
    "id": "3",
    "jobTitle": "Full Stack Developer",
    "companyName": "InnovateX",
    "status": "rejected",
    "dateApplied": "2024-09-20"
    },
    {
    "id": "4",
    "jobTitle": "Data Scientist",
    "companyName": "DataGen",
    "status": "accepted",
    "dateApplied": "2024-09-15"
    },
]

describe('ApplicationService', () => {
  let service: ApplicationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApplicationService],
    }).compile();

    service = module.get<ApplicationService>(ApplicationService);
    jest.spyOn(service as any, 'applicationsData', 'get').mockReturnValue(mockApplications);
  });

  it('should return all applications', () => {
    const result = service.getApplications();
    expect(result).toEqual(mockApplications);
  });

  it('should return application statistics', () => {
    const stats = service.getApplicationStats();
    expect(stats).toEqual({
      totalApplications: 4,
      countsByStatus: {
        pending: 1,
        accepted: 2,
        rejected: 1,
      },
      countsByMonth: {
        '2024-09': 2,
        '2024-10': 1,
        '2024-11': 1,
      },
    });
  });
});