// 1-й вариант
export default class GameSaving {
  constructor(data) {
    const obj = JSON.parse(data);
    this.id = obj.id;
    this.created = obj.created;
    this.userInfo = obj.userInfo;
  }
}

// 2-й вариант
// export default class GameSaving {
//   constructor(data) {
//     const obj = JSON.parse(data);
//     for (const item of Object.keys(obj)) {
//       this[item] = obj[item];
//     }
//   }
// }

// 3-й вариант
// export default class GameSaving {
//     constructor(data) {
//         this.obj = JSON.parse(data);
//     }
// }
