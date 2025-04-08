#include <stdio.h>
   
   void mult_table(int num){
       for(int i = 1; i <= 9; ++i){
         printf("%d * %d = %d\n", num, i, num * i);
       }
   }
   
   int main() {
    int num = 0;
    printf("Enter the number:\n");
    scanf("%d", &num);
  
    mult_table(num);
    return 0;
  }                         
