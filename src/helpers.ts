export class IdGenerator {
  //private static _id = 0;
  static get id(): number {
    //return ++IdGenerator._id;
    //return randomInt(1000);
    //return randomUUID();
    return Math.random();
  }
}

export const mimeTypes = {
  'text/plain': { 'Content-Type': 'plain/text' },
  'application/json': { 'Content-Type': 'application/json' },
};
