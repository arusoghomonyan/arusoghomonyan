1 #include <stdio.h>
   
   int main(){
   
     int num;
     int index = 0;
     printf("Enetr the number: ");
     scanf("%d", &num);
     printf("Enter the index: ");
     scanf("%d", &index);
     num = num | (1 << index);
     printf("%d", num);
    return 0;
  }
