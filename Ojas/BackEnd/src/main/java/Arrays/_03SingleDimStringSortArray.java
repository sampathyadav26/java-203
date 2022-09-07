package Arrays;

import java.util.Scanner;
//Sorting Using String
public class _03SingleDimStringSortArray {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the size of Arrays");
		int size = sc.nextInt();
		
		String[] arr=new String[size];
		System.out.println("enter the elements...");
		for(int i=0;i<=size-1;i++) {
			arr[i] = sc.next();
		}
		
		System.out.println("Array elements are...");
		for(String ele:arr) {
			System.out.println(ele);
		}
		
		System.out.println("After sorting the array..");
		String temp;
		for(int i=0;i<arr.length;i++) {
			for(int j=i+1;j<arr.length;j++) {
				if(arr[i].compareTo(arr[j])>0) {
					temp = arr[i];
					arr[i] = arr[j];
					arr[j] = temp;
				}
			}
		}
		
		for(String sort:arr) {
			System.out.println(sort);
		}
	}

}
