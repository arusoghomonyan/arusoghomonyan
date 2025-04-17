#include <stdio.h>

int main()
{

	int arr[3][3];

	for(int row = 0; row < 3; ++row){
		for(int col = 0; col < 3; ++col){
				scanf("%d", &arr[row][col]);
		}
	}

	int sum = 0;

	for(int row = 0; row < 3; ++row){
		for(int col = 0; col < 3; ++col){
				if(row <= col){
					sum += arr[row][col];
				}
		}	
	}
	
	printf("%d", sum);
	return 0;
}
