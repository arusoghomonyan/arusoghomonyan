#include <stdio.h>

int main()
{
	int arr[3][3];

	for(int row = 0; row < 3; ++row){
		for(int col = 0; col < 3; ++col){
			scanf("%d", &arr[row][col]);
		}
	}

	int index = 3;
	int sum = 0;
	for(int i = 0; i < 3; ++i){
			sum += arr[i][index - 1 - i];
	}
	printf("%d", sum);
return 0;
}
