class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }
    // helper methods
    updateSize() {
        this.size = this.list.length;
    }

    orderList() {
        return this.list.sort((a, b) => a - b);
    }
    // main functions
    add (e) {
        this.list.push(e);
        this.updateSize();
        this.orderList();
    }
    remove (i) {
        if (this.list[i] === undefined) {
            return;
        }
        this.list.splice(i, 1);
        this.updateSize();
        this.orderList();
    }
    get (i) {
        if (this.list[i] === undefined) {
            return;
        }

        return this.list[i];
    }
}