export class Blog {
  id: number = 0;
  writerJmbg: number = 0;
  title: string = '';
  text: string = '';

  public constructor(obj?: any) {
    if (obj) {
      this.id = obj.id;
      this.writerJmbg = obj.writerJmbg;
      this.title = obj.title;
      this.text = obj.text;
    }
  }
}
