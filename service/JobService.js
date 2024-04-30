const Job = require('../models/JobModel');

module.exports = class TaskService {
    static async createJob(jobData) {
        await Job.create(jobData);
    }

    static async getAllJobs() {
        return await Job.findAll({ raw: true });
    }

    static async removeJob(jobId) {
        await Job.destroy({ where: { id: jobId } });
    }
    
    static async getJobById(jobId) {
        return await Job.findOne({ where: { id: jobId }, raw: true });
    }

    static async updateJob(jobId, jobData) {
        await Job.update(jobData, { where: { id: jobId } });
    }

    static async getAllJobsOrderedByTitle() {
        return await Job.findAll({
            order: [['title', 'ASC']],
            raw: true
        });
    }
};