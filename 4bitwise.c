#include <stdio.h>
   
   int main(){
   
     int num;
     int count = 0;
     printf("Enter the positive number: ");
     scanf("%d", &num);
     while(num != 0){
      if((num & 1) == 1){
        count++;
      }
      num >>= 1;
    }
    if((count & 1) == 0){
      printf("%d is even", count);
    } else{
        printf("%d is odd", count);
      }
    return 0;
  }
