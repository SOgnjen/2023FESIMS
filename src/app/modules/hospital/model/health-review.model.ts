export class HealthReview {
  id: number = 0;
  date: Date = new Date();
  patientJmbg: number = 0;
  diagnosis: string = '';
  cure: string = '';

  public constructor(obj?: any) {
    if (obj) {
      this.id = obj.id;
      this.date = obj.date;
      this.patientJmbg = obj.patientJmbg;
      this.diagnosis = obj.diagnosis;
      this.cure = obj.cure;
    }
  }
}
