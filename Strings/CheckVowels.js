function Vowels(str){
    let count = 0;
    let vowels = {
        a:true,e:true,i:true,o:true,u:true,A:true,E:true,I:true,O:true,U:true,
    }
    for(let i = 0;i<str.length;i++){
        if(vowels[str[i]]){
            count++
        }
        return count;
    }
}