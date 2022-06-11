export class XOR {
    public static xor(a:boolean, b:boolean):boolean {
        let result = true;
        if((a && b) || (!a && !b)){
            result = false;
        }
        return result;
    }
}
