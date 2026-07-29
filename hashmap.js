class Hashmap {

    constructor(capacity = 16, loadFactor = 0.75) {
        this.capacity = capacity;
        this.loadFactor = loadFactor;
        this.buckets = new Array(this.capacity);
    }

    // hash func takes keys as input, key only important inside hash func


    hash(key) {

        let hashCode = 0;

        const primeNumber = 31;

        for(let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    }

    set(key, value) {

        // add or update key val pairs

        let index = this.hash(key);
        let bucket = this.buckets[index];

        if (bucket === undefined) {
            // create a bucket

            this.buckets[index]= [];
            bucket = this.buckets[index];

            let newKeyVal = {key, value};

            bucket.push(newKeyVal);
        }

        

    }
}