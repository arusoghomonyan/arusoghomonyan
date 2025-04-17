#include <stdio.h>

int main()
{

	int arr[3][4];

	for(int row = 0; row < 3; ++row){
		for(int col = 0; col < 4; ++col){
			scanf("%d", &arr[row][col]);
		}
	}

	int min = arr[0][0];

	for(int row = 0; row < 3; ++row){
		for(int col = 0; col < 4; ++col){
			if(arr[row][col] < min){
				min = arr[row][col];
			}
		}
	}	

	printf("%d", min);
	return 0;
}
