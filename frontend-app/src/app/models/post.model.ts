export class Post {
  id: number;
  title: string;
  body: string;
  userId: number;

  constructor(id: number = 0, title: string = '', body: string = '', userId: number = 0) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.userId = userId;
  }
}
