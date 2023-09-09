export class Appointment {
  id: number = 0;
  doctorJmbg: number = 0;
  patientJmbg: number = 0;
  date: Date = new Date();

  public constructor(obj?: any) {
    if (obj) {
      this.id = obj.id;
      this.doctorJmbg = obj.doctorJmbg;
      this.patientJmbg = obj.patientJmbg;
      this.date = obj.date;
    }
  }
}
