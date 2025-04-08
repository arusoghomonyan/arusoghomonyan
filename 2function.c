 #include <stdio.h>
  
   void mult_tables()
   {
       for(int i = 1; i < 11; ++i)
       {
         for(int j = 1; j < 11; ++j){
           printf("%d * %d = %d\n", i, j, i * j);
         }
        printf("\n");
      }
  }
  
  int main()
  {
    mult_tables();
    return 0;
  }
