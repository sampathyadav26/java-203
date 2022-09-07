package Arrays;

import java.util.Scanner;

public class _01DynamicsSingleDimensionalArray {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter Integer Array Size ?");
		int size = sc.nextInt();
		int[] arr = new int[size];
		
		System.out.println("Enter Integer Array Elements ?");
		for(int i=0;i<size;++i){
			arr[i]=sc.nextInt();
		}
		System.out.println("Integer Array Elements are:");
//		for(int k:arr){
//			System.out.println(k);
//		}
		
		for(int j=0;j<=arr.length-1;j++) {
			System.out.println(arr[j]);
		}
		
		
	}
}
