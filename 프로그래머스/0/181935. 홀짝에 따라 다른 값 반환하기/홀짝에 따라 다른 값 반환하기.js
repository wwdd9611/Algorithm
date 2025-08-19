function solution(n) {
    var answer = 0;
    
    let isEven = n % 2 === 0
    
    for (let i = isEven ? 0 : 1 ; i <= n; i+= 2){
        answer += isEven ? i * i : i 
    }
    
    return answer;
    
}