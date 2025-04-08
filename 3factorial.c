#include <stdio.h>
   
   long long factorial(int num)
   {
       long long fact = 1;
       for(int i = 2; i <= num; ++i)
       {
           fact *= i;
       }
    return fact;
  }
  
  int main()
  {
    int num = 0;
    printf("Enter the number:\n");
    scanf("%d", &num);
    if(num < 0){
      printf("The negative number can't have factorial\n");
    } else{
        printf("The factorial of %d is %lld\n", num, factorial(num));
    }
    return 0;
  }
