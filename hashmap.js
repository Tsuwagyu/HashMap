class Hashmap {

    constructor(capacity = 16, loadFactor = 0.75) {
        this.capacity = capacity;
        this.loadFactor = loadFactor;
        this.buckets = new Array(this.capacity);
    }


    hash(key) {

        let hashCode = 0;

        const primeNumber = 31;

        for(let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    }

    set(key, value) {

        const index = this.hash(key);
        const bucket = this.buckets[index];

        if (key !== undefined) {
            bucket.value = value;
        } 

        if (bucket === undefined) {

            this.buckets[index] = {
                key, 
                value
            }; 

            return;

        }

        if (bucket.key === key) {
            bucket.value = value;
        }



    }

}

