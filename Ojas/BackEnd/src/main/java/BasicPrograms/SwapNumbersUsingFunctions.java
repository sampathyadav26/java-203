package BasicPrograms;

//wrong Program
import java.util.Scanner;

public class SwapNumbersUsingFunctions {


	public static void main(String[] args) {
		int x,y;

		SwapNumbersUsingFunctions swapNumbersUsingFunctions = new SwapNumbersUsingFunctions();

		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter the value of a:");
		x=sc.nextInt();
		
		System.out.println("Enter the value of b:");
		y=sc.nextInt();
		
		try {
			System.out.println(x+" "+y);
		}catch(Exception E) {
			System.out.println("Exception: " + E.toString()); 
		}
		
	
	}

	public static void swap(int a,int b) {
		int c;

		c = a;
		a = b;
		b = c;
		System.out.println("After Swapping\nx = "+a+"\ny = "+b);  
	}

}
