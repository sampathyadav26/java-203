package Arrays;

import java.util.Scanner;
//Dynamic Multi Dimension Array
public class _07DynamicMaltiDimensionalArray {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the rows Of array..");
		int row = sc.nextInt();
		
		System.out.println("Enter the rows Of array..");
		int col = sc.nextInt();
		
		int[][] arr = new int[row][col];
		System.out.println("Enter the array elements");
		for(int i=0;i<row;i++) {
			for(int j=0;j<col;j++) {
				arr[i][j] = sc.nextInt();
			}
		}
		System.out.println("Array Elements are.....");
		for(int i=0;i<row;i++) {
			for(int j=0;j<col;j++) {                  
				System.out.print(arr[i][j]+" ");
			}
			System.out.println();
		}

	}

}
