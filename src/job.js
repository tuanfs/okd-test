import {CronJob} from 'cron';
import axios from 'axios';

const now = new Date();
const twoMinutesLater = new Date(now.getTime() + 3 * 60 * 1000);

export function startCronJobs() {
  console.log('startCronJobs');
  const job = new CronJob(
    twoMinutesLater,
    () => {
      console.log(`Job chạy tại: ${new Date()}`);
      axios.get('okd-test-git-2.sample.svc.cluster.local');
    },
    null,
    true,
    'America/Los_Angeles',
  );
  job.start();
}
