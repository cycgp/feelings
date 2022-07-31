import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AttendanceInfoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MessageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class AttendanceInfo {
  readonly id: string;
  readonly name: string;
  readonly phone: string;
  readonly email: string;
  readonly address?: string | null;
  readonly relationship: number;
  readonly vegetarion: boolean;
  readonly guestCount: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<AttendanceInfo, AttendanceInfoMetaData>);
  static copyOf(source: AttendanceInfo, mutator: (draft: MutableModel<AttendanceInfo, AttendanceInfoMetaData>) => MutableModel<AttendanceInfo, AttendanceInfoMetaData> | void): AttendanceInfo;
}

export declare class Message {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Message, MessageMetaData>);
  static copyOf(source: Message, mutator: (draft: MutableModel<Message, MessageMetaData>) => MutableModel<Message, MessageMetaData> | void): Message;
}