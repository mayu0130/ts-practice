import "../css/style.css"

//boolean: trueまたはfalseの論理値
let isOpen : boolean = true;
console.log(isOpen); //true

//number: 数値型（浮動小数点も含む）
let decimal: number = 6;
let float: number = 1.11;
console.log(decimal); //6
console.log(float); //1.11

//string: 文字列型
let color: string = "blue";
let greeting: string = `Hello, ${color}`;
console.log(color); //blue
console.log(greeting); //Hello, blue

//Array: 同一の型の複数の要素を持つことができつ
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
console.log(list); //[1, 2, 3]
console.log(list2); //[1, 2, 3]

//any: あらゆる種類の値を許容する型。コンパイラの型をチエックをオフにする。
let notSure: any = 4;
notSure = "hoge";
console.log(notSure); //hoge

//nullとundefinded: TypeScriptでそれぞれの型として扱う
let u: undefined = undefined;
let n: null = null;
console.log(u); //undefined
console.log(n); //null




//型注釈: 明示的に型を指定
let message: string = "Hello, TypeScript"!;

//型推論: 型注釈を省略した場合、TypeScriptは変数の初期値に基づいて型を推論する。
let message2 = "Hello, TypeScript"! //"message2"は自動的にString型と推論される。





//type宣言


//SimpleTypeAlias: より簡単な名前で型を参照できるようにする方法
type UserID = number;
let userId: UserID = 501;
console.log(userId); //501


//ComplexTypeAlias: より複雑な構造やユニオン型（複数の型の一つを取りうる）で型エイリアスを作成することができる。
type Point = {
  x: number;
  y: number;
};
let coord: Point = { x: 100, y: 200 };
console.log(coord); //{x: 100, y: 200}

type Response = "yes" | "no" | "maybe";
//response型は"yes","no","maybe"しか入れてはいけない。
let answer: Response = "yes";
// let answer: Response = "hello";は"、yes","no","maybe"ではないのでエラーが発生する
console.log(answer); // yes


//オプショナル(optional)型
type User = {
  name: string;
  age?: number; //このプロパティは任意です。
};
let user: User = {
  name: "Alice",
};
console.log(user); //Alice




//関数の定義の仕方
//関数を定義する際にパラメータと戻り値の型を指定できる。

//シンプルな関数定義
const add = (x: number, y: number): number => {
  return x + y;
}
console.log(add(1, 2)); //3

//typeを使用した引数の定義
type Point2 = {
  x: number;
  y: number;
};
const printCoord = (pt: Point2) : void => {
  //何もreturnしない場合void型になる
  console.log(`座標のX値は ${pt.x}、Y値は${pt.y}です`);
}
printCoord({ x: 100, y: 100 }); //座標のX値は100,Y値は100です




//オプショナルとデフォルトパラメータ
type UserInfo = {
  userId: number;
  userName: string;
  userEmail?: string; //このパラメータは任意です。
}
const createUser = (user: UserInfo, isAdmin: boolean = false) => {
  console.log(`User ID: ${user.userId}`);
  console.log(`User Name: ${user.userName}`);
  if(user.userEmail){
    console.log(`User Email: ${user.userEmail}`);
  }
  console.log(`Is Admin: ${isAdmin}`);
}

createUser({ userId: 1, userName: "John Doe" });
//EmailとisAdminは省略されている
//User ID: 1
//User Name: John Doe
//is Admin: false

createUser({ userId: 2, userName: "Jane Doe" , userEmail: "Jane@example.com"}, true);
//User ID: 2
//User Name: Jane Doe
//is Admin: Jane@example.com
//is Admin: true