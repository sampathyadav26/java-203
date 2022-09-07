package Arrays;

import java.util.Arrays;
import java.util.Scanner;

public class Test {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter String Array Size ?");
		int size = sc.nextInt();
		//Create a String Array
		String[] names = new String[size];
		System.out.println("Enter String Array Elements ?");
		for(int i=0;i<size;++i){
			names[i]=sc.next();
		}
		System.out.println("String Array Elements are :");
		for(String name:names){
			System.out.println(name);
		}
		Arrays.sort(names);
		System.out.println("After Sorting String Array Elements");
		for(String name:names){
			System.out.println(name);
		}

	}

}
