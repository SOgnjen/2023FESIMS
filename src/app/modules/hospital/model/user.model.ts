import { Gender } from './gender.enum';
import { GuidanceTo } from './guidance-to.enum';
import { UserRole } from './user-role.enum';

export class User {
  id: number = 0;
  emails: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  role: UserRole = UserRole.Role_User;
  address: string = '';
  phoneNumber: string = '';
  jmbg: number = 0;
  gender: Gender = Gender.Female;
  isBlocked: boolean = false;
  guidance: GuidanceTo = GuidanceTo.None;
  numberOfDeclines: number = 0;

  public constructor(obj?: any) {
    if (obj) {
      this.id = obj.id;
      this.emails = obj.emails;
      this.password = obj.password;
      this.firstName = obj.firstName;
      this.lastName = obj.lastName;
      this.role = obj.role;
      this.address = obj.address;
      this.phoneNumber = obj.phoneNumber;
      this.jmbg = obj.jmbg;
      this.gender = obj.gender;
      this.isBlocked = obj.isBlocked;
      this.guidance = obj.guidance;
      this.numberOfDeclines = obj.numberOfDeclines;
    }
  }
}
