#include <stdio.h>
   
   int main(){ 
     int num;
     printf("Enter the number: ");
     scanf("%d", &num);
   
     num |= 1;
    printf("%d", num);
    return 0;
  }
