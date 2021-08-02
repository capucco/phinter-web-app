import dayjs, { Dayjs, OpUnitType } from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export { dayjs };
export type { Dayjs, OpUnitType };
