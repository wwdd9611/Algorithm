function solution(str1, str2) {
    
    str1 = str1.split('')
    str2 = str2.split('')
    
    for(let i= 0; i <str1.length; i++){
        str1[i] = str1[i]+str2[i]
    }
    
    
    var answer = str1.join('')
    return answer;
}