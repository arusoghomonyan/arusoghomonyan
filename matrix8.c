#include <stdio.h>

int main()
{

	int n = 3;
	int m = 4;
	int arr[n][m];
	int arr1[n];
	for(int row = 0; row < n; ++row){
		for(int col = 0; col < m; ++col){
			scanf("%d", &arr[row][col]);
		}
	}

	for(int i = 0; i < n; ++i){
		int max = arr[i][0];
		for(int j = 0; j < m; ++j){	
			if(arr[i][j] > max){
				max = arr[i][j];
			}
		}
		arr1[i] = max;
	}

	for(int i = 0; i < n; ++i){
		printf("%d ", arr1[i]);
	}	

return 0;
}
