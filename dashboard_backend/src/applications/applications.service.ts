import { Injectable } from '@nestjs/common';
import { Application, ApplicationStats } from './applications.interface';
import fs from 'fs';
import path from 'path';

@Injectable()
export class ApplicationService {
    // import data from the jobs application file
    private readonly applicationsFilePath: string = path.resolve(__dirname, '../../applications.data.js');

    private applicationsCache: Application[] | null = null; // create a cache to avoid redundant fetching of data

    // load all application data
    private loadApplications(): Application[] {
        if (!this.applicationsCache) {
            try {
                const applicationsData = fs.readFileSync(this.applicationsFilePath, 'utf-8');
                this.applicationsCache = JSON.parse(applicationsData);
            } catch (error) {
                console.error('Error loading applications data:', error);
                throw new Error('Unable to load applications data.');
            }
        }
        return this.applicationsCache;
    }

    getApplications(): Application[] {
        // method to get all application data
        return this.loadApplications();
    }

    getApplicationStats(): ApplicationStats {
        // method to get application statistics
        const applications = this.loadApplications();
        
        // Total applications
        const totalApplications = applications.length;

        // Count by status
        const countsByStatus = applications.reduce((acc, app) => {
            acc[app.status] = (acc[app.status] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);

        // Count by month
        const countsByMonth = applications.reduce((acc, app) => {
            const month = new Date(app.dateApplied).toISOString().slice(0, 7); // e.g., "2024-10"
            acc[month] = (acc[month] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);

        return {
            totalApplications,
            countsByStatus,
            countsByMonth,
        };
    }
}
