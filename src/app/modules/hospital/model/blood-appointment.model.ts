export class BloodAppointment {
  id: number = 0;
  when: Date = new Date();
  isFree: boolean = false;
  ownerJmbg: number = 0;

  public constructor(obj?: any) {
    if (obj) {
      this.id = obj.id;
      this.when = obj.when;
      this.isFree = obj.isFree;
      this.ownerJmbg = obj.ownerJmbg;
    }
  }
}
