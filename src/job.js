import {CronJob} from 'cron';
import axios from 'axios';

const now = new Date();
const twoMinutesLater = new Date(now.getTime() + 2 * 60 * 1000);

export function startCronJobs() {
  console.log('startCronJobs');
  const job = new CronJob(
    twoMinutesLater,
    () => {
      console.log(`Job chạy tại: ${new Date()}`);
      axios
        .get('http://okd-test-git.sample.svc.cluster.local:6822/')
        .catch((err) => {
          console.log('error', err);
        });
    },
    null,
    true,
    'America/Los_Angeles',
  );
  job.start();
}

export const axiosCallTest = () => {
  axios
    .get('http://okd-test-git.sample.svc.cluster.local:6822/')
    .catch((err) => {
      console.log('error', err);
    });
};
