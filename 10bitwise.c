#include <stdio.h>
   
   int main(){
     int num;
     int index = 0;
   
     printf("Enter the number: ");
     scanf("%d", &num);
   
    printf("Enter the value of index: ");
    scanf("%d", &index);
  
    num = num ^ (1 << index);
    printf("%d", num);
    return 0;
  }
