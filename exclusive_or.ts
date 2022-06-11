export class XOR {
    public static xor(a:boolean, b:boolean):boolean {
        let result = false;
        if((a && b) || (!a && !b)){
            result = true;
        }
        return result;
    }
}
