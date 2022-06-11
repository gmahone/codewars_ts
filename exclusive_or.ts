export class XOR {
    public static xor(a:boolean, b:boolean):boolean {
        let result = true;
        if((a && b) || (!a && !b)){
            result = false;
        }
        return result;
    }
}

// other solutions

// simpler solution
export class XOR {
    public static xor(a:boolean, b:boolean):boolean {
        return a != b;
    }
}
