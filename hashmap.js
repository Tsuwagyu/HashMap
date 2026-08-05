

class HashMapNode {

    constructor(key, value) {

        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
    }

    append(key, value) {

        const newNode = new HashMapNode(key, value);

        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let currentNode = this.head;

        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
        



        
    }

    find(key) {

        // go through list and return entire node with matching key

        if (this.head === null) {
            return null;
        }

        let currentNode = this.head;

        while (currentNode !== null) {

            if (currentNode.key === key) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return null;
    }

    remove(key) {

        if (this.head === null) {
            return false;
        }

        // head has no previous node so remove it by changing this.head to the next node
        if (this.head.key === key) {
            this.head = this.head.next;
            return true;

        }

        let previousNode = this.head;
        let currentNode = this.head.next;

        // if node exists && keys match, previousNode skip currentNode and point to whatever comes after it then return true
        while (currentNode !== null) {
            if (currentNode.key === key) {
                previousNode.next = currentNode.next; // skip over currentNode to remove from linked list
                return true; // true bc we found key
            }

            // no match found > both tracking refs move forward by 1 node: previousNode becomes current node, currentNode becomes following node
            previousNode = currentNode; 
            currentNode = currentNode.next;

        }
        

        return false;



    }

    isEmpty() {

        if (this.head === null) {
            return true;
        }

        return false;
    }

    
}




class HashMap {

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
        const bucketArr = this.buckets;

        // if key exists, overwrite it

        if (bucket === undefined) {

            const newList = new LinkedList();
            newList.append(key, value);

            // store newly created linked list at the bucket where this key belongs
            this.buckets[index] = newList;

            // stop set() bc insertion is done
            return;

        }

        const node = bucket.find(key);

        if (node === null) {
            bucket.append(key, value)
        }



    }

    get(key) {

        const index = this.hash(key);
        const bucket = this.buckets[index];
        // node stores the entire node which contains the key

        if (bucket === undefined) return null

        // take in the key argument > return value stored in the key

        const nodeWithKey = bucket.find(key);

        if (nodeWithKey === null) {
            return null;
        } else {
            return nodeWithKey.value;
        }
        
    }

    has(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        if (bucket === undefined) return false;
        
        const node = bucket.find(key);

        return node !== null; // boolean expression will either give true or false
    }

    remove(key) {

        const index = this.hash(key);
        const bucket = this.buckets[index];

        if (bucket === undefined) return false;

        const removed = bucket.remove(key);

        if (removed === false) {
            return false;
        }
        if (bucket.isEmpty()) {
            this.buckets[index] = undefined;
        }
        
        return true;
        
    }
    length() {

        const bucketArr = this.buckets

        // return number of stored keys in the hashmap

        // where are the keys stored now? in the buckets nodes

        
        let bucket;

        let count = 0;

        for (let i = 0; i < bucketArr.length; i++) {
            
            bucket = bucketArr[i];

            if (bucket === undefined) continue;

            let currentNode = bucket.head;

            while (currentNode !== null) {
                count++
                currentNode = currentNode.next;
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

    values() {
        const values = [];
        const bucketArr = this.buckets;

        for (let i = 0; i < bucketArr.length; i++) {
            if (bucketArr[i] !== undefined && bucketArr[i].key !== undefined) {
                const currentValue = bucketArr[i].value;
                values.push(currentValue);
            } 
        }

        return values;

    }

    entries() {
        const keyVals = [];

        for (let i = 0; i < bucketArr.length; i++) {
            if (bucketArr[i] !== undefined && bucketArr[i].key !== undefined) {

                const currentKeyValPair = [bucketArr[i].key, bucketArr[i].value];

                keyVals.push(currentKeyValPair);

            } 
        }

        return keyVals;


    }

}

export default HashMap;

