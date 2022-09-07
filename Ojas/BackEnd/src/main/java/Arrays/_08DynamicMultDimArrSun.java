package Arrays;

import java.util.Scanner;
//Sum of multi dimension array and its diagonal
public class _08DynamicMultDimArrSun {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the rows Of array..");
		int row = sc.nextInt();
		
		System.out.println("Enter the Col Of array..");
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

		System.out.println("Array ele sum..........");
		int temp=0;
		for(int i=0;i<row;i++) {
			for(int j=0;j<col;j++) {   
				temp+=arr[i][j];
				System.out.print(arr[i][j]+" ");
			}
			System.out.println("="+temp);
		}
		
		System.out.println("Array diagonal ele sum..........");
		int sum=0;
		for(int i=0;i<row;i++) {
			for(int j=0;j<col;j++) {  
				if(i==j) {
					sum+=arr[i][j];
					System.out.print(arr[i][j]+" ");
				}
			}
			System.out.println();
		}
		System.out.println("diagonal sum is="+sum);
	}

}
