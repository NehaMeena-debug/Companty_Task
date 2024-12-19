let longestSubstring = function(s){

    let start = 0;
    let maxLength = 0;
    let char = new Set();

    for(end=0;end<s.length;end++){
    while(char.has(s[end])){
        char.delete(s[start])
        start++;
    }

    char.add(s[end]);

   maxLength = Math.max(maxLength , end - start + 1);

}

return maxLength;
}


let  input =  "abcabcef"

console.log(longestSubstring(input))