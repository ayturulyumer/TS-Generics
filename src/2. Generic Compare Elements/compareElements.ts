class CompareElements<T> {
  private arr: T[];

  constructor(arr: T[]) {
    this.arr = arr;
  }

  compare(input: T): number {
    let match: number = 0;
    for (let i = 0; i < this.arr.length; i++) {
      if (input === this.arr[i]) {
        match++;
      }
    }
    return match;
  }
}

let a = new CompareElements(['a', 'b', 'ab', 'abc', 'cba', 'b']);

console.log(a.compare('b'))

console.log("-------------------------")

let c = new CompareElements([1, 2, 3, 4, 5, 1, 1]);

console.log(c.compare(1));
