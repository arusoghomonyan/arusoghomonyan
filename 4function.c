#include <stdio.h>
   
   int sum_of_elements(int num)
   {
       int sum = 0;
       while(num > 0)
       {
           sum += num % 10;
           num /= 10;
      }
    return sum;
  }
  
  int main()
  {
     int num = 0;
      printf("Enter the number:\n");
      scanf("%d", &num);
  
      printf("Sum of elements is %d\n", sum_of_elements(num));
    return 0;
  }
