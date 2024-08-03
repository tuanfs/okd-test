import {CronJob} from 'cron';

const now = new Date();
const twoMinutesLater = new Date(now.getTime() + 3 * 60 * 1000);

export function startCronJobs() {
  console.log('startCronJobs');
  const job = new CronJob(
    twoMinutesLater,
    () => {
      console.log(`Job chạy tại: ${new Date()}`);
    },
    null,
    true,
    'America/Los_Angeles',
  );
  job.start();
}
