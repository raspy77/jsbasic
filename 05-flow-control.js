// 연습문제

// 1. 2단 ~ 9단 출력하기
//      : for문 버전, while문 버전

// 2. 역삼각형 그리기
//      : for문 버전, while문 버전
/*

*****
****
***
**
*

*/
console.log("구구단 for");
for (i =2; i<10; i++){
    for (j=1; j<10; j++){
        console.log(i,"x",j,"= ",i*j);
    }
}

console.log("구구단 while");
i = 2;
while (i < 10){
    j = 1;
    while(j < 10){
        console.log(i,"x",j,"= ",i*j);
        j++;
    }
    i++;
    
}


console.log("역삼각형 for");
fstar = "";
for (i=5; i>0; i--){
    for(j=0; j<i; j++){
        fstar +="*";
    }
    fstar +="\n";
}
console.log(fstar);


console.log("역삼각형 while");
wstar ="";
i = 5;
while(i>0){
    j = 0;
    while(j<i){
        wstar += "*";
        j++;
    }
    wstar += "\n";
    i--;
}
console.log(wstar);