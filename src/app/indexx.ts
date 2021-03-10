import { Component, HostBinding, Input, TemplateRef } from '@angular/core';


type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

@Component({
    selector: 'indexx-test',
    template: `<ng-content></ng-content>`
  })
  export class TestTypeScript {
    @Input() flexDirection: string = 'row';

  @HostBinding('style.display') get display() {
    return 'flex';
  }

  @HostBinding('style.flex-direction') get direction() {
    return this.flexDirection;
  }
  }
  let someString: string;
  let someNumber: number;
  let someBoolean: boolean;
  let something: any; // có thể gán sang cho bất kỳ kiểu dữ liệu nào khác
  let someStringArray: string[]; // tương tự cho number[], boolean[], any[]
  let someObject: object;
  let someNull: null;
  let someUndefined: undefined;
  let someUnknown: unknown;
  let someNever: never; // ví dụ như một hàm throw exception
  let someTuple: [string, number];
  let someVoidFunction: () => void; // một hàm không trả về giá trị gì sau khi thực thi
  let someFunction: () => string; // một hàm trả về giá trị có type "string" sau khi thực thi

  interface User{
      name: string;
      age: number;
      job?: string;
  } // hoac type hoac interface de dinh nghia 1 type object
  type UserTest = {
      name: string;
      age: number;
      job?: string;
  }
  const lap: User = {
      name: "Ba Lap",
      age: 20,
      job: "Sinh vien "
  }
 
const number  = [1,2,3,4,5,6,7];
const strings = ["abc", "xyz"];
number.forEach(num  => num.toString)
strings.forEach(str => str.length)

export abstract class BaseSerVice<T>{
    protected model!: T;

    find(): T{
        return this.model;
    }
    findOne() : T {
        return this.model;
    }
}
interface Dog {
    bark(): void;
}
type Cat ={
    meow(): void;
}

class DogService extends BaseSerVice<Dog>{
    // constructor(dogModel: Dog){
    //     super();
    //     this.model = dogModel;
    // }
}
class CatService extends BaseSerVice<Cat>{
    // constructor(catModel: Cat){
    //     super();
    //     this.model = catModel;
    // }
}
const dog  = new DogService();
const cat = new CatService();

dog.findOne();
cat.findOne();
console.log(number, strings, lap);
// day la phan union type
type unionType = string | number;

function listen(port : unionType){
}
function getsomething(port: unionType){}

listen("string");
listen(123);

// day la phan intersection type
function merge<T1, T2>(o1:T1,o2:T2) : T1 & T2{
    return {...o1, ...o2};
}
const result =  merge({foo:"bar"} , {bar: "foo"})

type StypeProp = {
    backgroundColor: string;
  color: string;
  margin: string;
  padding: string;
}
type ButtonProp ={
    onClick: (event: MouseEvent) => void;
} & StypeProp;

// DAY LA PHAN TYPE ALIAS


// Exclude/Extract
type Exclude<T, U> = T extends U ? never : T;
type Extract<T, U> = T extends U ? T : never;

// Exclude: Loại bỏ những types ở T nếu như những types này gán được cho U
type SomeDiff = Exclude<'a' | 'b' | 'c', 'c' | 'd'>; // 'a' | 'b'. 'c' đã bị removed.

// Extract: Loại bỏ những types ở T nếu như những types này KHÔNG gán được cho U
type SomeFilter = Extract<'a' | 'b' | 'c', 'c' | 'd'>; // 'c'. 'a' và 'b' đã bị removed.

// hoặc có thể dùng Exclude để tạo type alias NonNullable
type NonNullable<T> = Exclude<T, null | undefined>; // loại bỏ null và undefined từ T

type Readonly<T> = { readonly [P in keyof T]: T[P] }; // làm tất cả các props trong type thành readonly. Eg: Rất có lợi khi dùng cho Redux State.
type Partial<T> = { [P in keyof T]?: T[P] }; // làm tất cả các props trong type thành optional. Eg: Rất có lợi cho việc type 1 tham số khi cần truyền vào 1 type nào đó mà ko bắt buộc.
type Nullable<T> = { [P in keyof T]: T[P] | null }; // cái này tương tự như Partial, Partial sẽ trả về T[P] | undefined. Còn Nullable sẽ trả về T[P] | null

type Pick<T, K extends keyof T> = { [P in K]: T[P] };
type Record<K extends keyof any, T> = { [P in K]: T };

// Pick: Pick từ trong T những type có key là K
type Person = {
  firstName: string;
  lastName: string;
  password: string;
};

type PersonWithNames = Pick<Person, 'firstName' | 'lastName'>; // {firstName: string, lastName: string}

// Record: Gán type T cho lần lượt từng key P trong K
type ThreeStringProps = Record<'prop1' | 'prop2' | 'prop3', string>;
// { prop1: string, prop2: string, prop3: string }

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

// ReturnType: trả về type của giá trị mà function T trả về.
type Result = ReturnType<() => string>; // string

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// Omit: loại bỏ type có key là K trong T
type PersonWithoutPassword = Omit<Person, 'password'>; // {firstName: string, lastName: string}

// day la phan DI (huong doi tuong)
class ProductModel {
    sku!: string;
    name!: string;
    price!: number;
  }
  
  interface CartItem {
    product: ProductModel;
    quantity: number;
  }

  interface ICart {
    selectedProducts: CartItem[]; 
    calculateTotal(): number;
    addToCart(): void;
  }
  class CartService implements ICart{
    selectedProducts: CartItem[] = [];
    calculateTotal(): number {
      return this.selectedProducts.reduce(
        (total, item) => item.product.price * item.quantity + total,
        0
      );
    }
    addToCart(): void {
      // logic here
    }
  }
  
  class ProductComponent {
      constructor(public cartService: ICart){
          cartService.addToCart();
      };
  }
  const cartService = new CartService();

  const productcomponent =  new ProductComponent(cartService);
  console.log(productcomponent)

  // day la cai test ma k dong toi database ()
  class MockCartService implements ICart{
      selectedProducts: CartItem[] = [];
      calculateTotal(): number {
          return 1; // mock data
      }
      addToCart(): void {
      }
  }
  // day la cai test ma k dong toi database
  const mockcartservice = new MockCartService();
  const anotherProduct = new ProductComponent(mockcartservice);
  console.log(anotherProduct)

  