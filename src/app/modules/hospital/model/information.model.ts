import { InformationStatus } from './information-status.enum';

export class Information {
  id: number = 0;
  when: Date = new Date();
  status: InformationStatus = InformationStatus.Waiting;

  public constructor(obj?: any) {
    if (obj) {
      this.id = obj.id;
      this.when = obj.when;
      this.status = obj.status;
    }
  }
}
