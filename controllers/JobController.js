const JobService = require('../service/JobService');

function extractJobDataFromBody(req) {
    return {
        title: req.body.title,
        description: req.body.description,
        salary: req.body.salary,
        company: req.body.company,
        email: req.body.email,
        new_job: req.body.new_job
    };
}

module.exports = class TaskController {
    static async createJob(req, res) {
        const jobData = extractJobDataFromBody(req);

        await JobService.createJob(jobData);
        res.status(201).json({ message: 'Job created successfully' });
    }

    static async getAllJobs(req, res) {
        const jobs = await JobService.getAllJobs();
        res.status(200).json(jobs);
    }

    static async removeJob(req, res) {
        const jobId = req.params.id;
        await JobService.removeJob(jobId);
        res.status(204).json({ message: 'Job removed successfully' });
    }

    static async getJobById(req, res) {
        const jobId = req.params.id; 
        const job = await JobService.getJobById(jobId);
        res.status(200).json(job);
    }
    
    
    static async updateJob(req, res) {
        const jobId = req.params.id;
        const jobData = extractJobDataFromBody(req);
    
        await JobService.updateJob(jobId, jobData);
        res.status(200).json({ message: 'Job updated successfully' });
    }

    static async getAllJobsOrderedByTitle(req, res) {
        const jobs = await JobService.getAllJobsOrderedByTitle();
        res.status(200).json(jobs);
    }
};
