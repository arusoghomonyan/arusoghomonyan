#include <stdio.h>
   
   int main(){
   
     int num;
     int count = 0;
     printf("Enter the number: ");
     scanf("%d", &num);
   
    while(num != 0){
      if((num & 1) == 1){
        count++;
      }
      num >>= 1;
    }
    printf("Count of one bit is %d", count);
    return 0;
  }
