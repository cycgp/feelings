// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { AttendanceInfo, Message } = initSchema(schema);

export {
  AttendanceInfo,
  Message
};