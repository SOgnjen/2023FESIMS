import { Gender } from './gender.enum';
import { UserRole } from './user-role.enum';

export class User {
  id: number = 0;
  email: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  role: UserRole = UserRole.Role_User;
  address: string = '';
  phoneNumber: string = '';
  jmbg: number = 0;
  gender: Gender = Gender.Female;

  public constructor(obj?: any) {
    if (obj) {
      this.id = obj.id;
      this.email = obj.email;
      this.password = obj.password;
      this.firstName = obj.firstName;
      this.lastName = obj.lastName;
      this.role = obj.role;
      this.address = obj.address;
      this.phoneNumber = obj.phoneNumber;
      this.jmbg = obj.jmbg;
      this.gender = obj.gender;
    }
  }
}
