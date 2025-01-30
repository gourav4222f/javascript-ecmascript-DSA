export class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(newData) {
        if (!newData) {
            throw new Error("push function call with a perameter");
        }
        this.data[this.length] = newData;
        this.length++;

        return this.length

    }
    get(index) {
        if (index > this.length || index < 0) {
            return (`this index ${index} does't exist`)
        }
        return this.data[index]
    }
    pop() {
        const lastElement = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--
        return lastElement
    }
    shift() {
        const firstElement = this.data[0]
        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--
        return firstElement
    }
    deleteByIndex(index) {
        const deleteData = this.data[index]
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--
        return deleteData
    }


}
const myNewArray = new MyArray();

// push is to enter data to the class
myNewArray.push("gourav")
myNewArray.push("21")
myNewArray.push("student")
myNewArray.push("gourav")
myNewArray.push("21")
myNewArray.push("student")

// get is to get the data with index
console.log(`
    ${myNewArray.get(0)}
    ${myNewArray.get(1)}
    ${myNewArray.get(2)}
    `)
// pop is to pop the last data for the object
myNewArray.pop()
console.log(myNewArray);

// shift is remove data form the first index
myNewArray.shift()
console.log(myNewArray);

myNewArray.deleteByIndex(0)
console.log(myNewArray);