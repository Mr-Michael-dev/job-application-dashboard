import { Injectable } from '@nestjs/common';
import { Application } from './applications.interface';
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

    getApplicationStats(): Record<string, number> {
        // method to get application statistics
        const applications = this.loadApplications();
        return applications.reduce((acc, app) => {
            acc[app.status] = (acc[app.status] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);
    }
}
