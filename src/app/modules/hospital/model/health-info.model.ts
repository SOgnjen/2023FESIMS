export class HealthInfo {
  id: number = 0;
  date: Date = new Date();
  ownersJmbg: number = 0;
  upperBloodPreassure: number = 0;
  lowerBloodPreassure: number = 0;
  sugarLevel: number = 0;
  fatPercentage: number = 0;
  weight: number = 0;
  lastMenstruation: Date = new Date();

  public constructor(obj?: any) {
    if (obj) {
      this.id = obj.id;
      this.date = obj.date;
      this.ownersJmbg = obj.ownersJmbg;
      this.upperBloodPreassure = obj.upperBloodPreassure;
      this.lowerBloodPreassure = obj.lowerBloodPreassure;
      this.sugarLevel = obj.sugarLevel;
      this.fatPercentage = obj.fatPercentage;
      this.weight = obj.weight;
      this.lastMenstruation = obj.lastMenstruation;
    }
  }
}
