export { Os } from './os';
export { DeviceType } from './device-type';
export class Option {
    dataUsage: number;
    users: number;
    userData: number;
    os: Os[];
    deviceType: DeviceType[];
    dataUsageTime: DataUsageTime[];
    usersTime: UserTime[];
    usersDataTime: UserDataTime[];
}
