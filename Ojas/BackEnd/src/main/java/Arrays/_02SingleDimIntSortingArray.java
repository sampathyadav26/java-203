package Arrays;

import java.util.Scanner;
//Sorting Using array0
public class _02SingleDimIntSortingArray {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the size of Arrays");
		int size = sc.nextInt();
		
		int[] arr=new int[size];
		System.out.println("enter the elements...");
		for(int i=0;i<=size-1;i++) {
			arr[i] = sc.nextInt();
		}
		
		System.out.println("Array elements are...");
		for(int ele:arr) {
			System.out.println(ele);
		}
		
		System.out.println("After sorting the array..");
		int temp=0;
		for(int i=0;i<arr.length;i++) {
			for(int j=i+1;j<arr.length;j++) {
				if(arr[i]>arr[j]) {
					temp = arr[i];
					arr[i] = arr[j];
					arr[j] = temp;
				}
			}
		}
		
		for(int sort:arr) {
			System.out.println(sort);
		}
	}

}
