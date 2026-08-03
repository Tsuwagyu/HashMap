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

        if (bucket.key !== undefined) {
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

    get(key) {

        const index = this.hash(key);
        const bucket = this.buckets[index];

        if (bucket.key === undefined) return null

        if (bucket.key !== undefined) return bucket.value;
        
    }

    has(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        if (bucket.key !== undefined) return true;
        if (bucket.key === undefined) return false;
    }

    remove(key) {

        const index = this.hash(key);
        const bucket = this.buckets[index];

        if (this.buckets[index] !== undefined && bucket.key === key) {
            this.buckets[index] = undefined;
            return true;
        } else {
            return false;
        }




        
    }
    length() {

        const bucketArr = this.buckets

        let count = 0;

        for (let i = 0; i < bucketArr.length; i++) {
            if (bucketsArr[i].key !== undefined) {
                count++;
            } 
        }
        
        return count;



    }

    clear() {

        const bucketArr = this.buckets;

        for (let i = 0; i < bucketArr.length; i++) {
            if (bucketsArr[i].key !== undefined) {
                let bucket = bucketArr[i];

                if (bucket !== undefined) {
                    this.remove(bucket.key);
                }

            } 
        }
        



    }

    keys() {
        
        const keys = [];
        const bucketArr = this.buckets;


        for (let i = 0; i < bucketArr.length; i++) {
            if (bucketArr[i] !== undefined && bucketArr[i].key !== undefined) {
                const currentKey = bucketArr[i].key;
                keys.push(currentKey);
            } 
        }

        return keys;


    }

}

