export class User {
  id: number;
  name: string;
  productName: string;
  amount: number;

  constructor(id: number, name: string, productName: string, amount: number) {
    this.id = id;
    this.name = name;
    this.productName = productName;
    this.amount = amount;
  }
}
