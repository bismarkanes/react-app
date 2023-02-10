import { expose } from 'comlink';

const doSchedule = (cb, interval = 5000) => {
  return setInterval(cb, interval);
};

expose(doSchedule);
