#include <stdio.h>

  int main()
  {
    int arr[2][3];
    for(int row = 0; row < 2; ++row){
      for(int col = 0; col < 3; ++col){
          scanf("%d", &arr[row][col]);
      }
    }
    for(int row = 0; row < 2; ++row){
      for(int col = 0; col < 3; ++col){
        printf("%d\n", arr[row][col]);
      }
    }
  return 0;
}
