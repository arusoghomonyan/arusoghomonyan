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

	for(int row = 0; row < 3; row += 2){
		for(int col = 0; col < 3; col += 2){
				int tmp =	arr[row][col];
						arr[row][col] = arr[row][index - row - 1];
						arr[row][index - row - 1] = tmp;
		}
	}
	
	for(int row = 0; row < 3; ++row){
		for(int col = 0; col < 3; ++col){
			printf("%d", arr[row][col]);
		}
		printf("\n");
	}
	return 0;
}
