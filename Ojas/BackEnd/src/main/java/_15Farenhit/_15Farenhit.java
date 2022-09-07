package _15Farenhit;
import java.util.Scanner;

public class _15Farenhit {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter farenhit:");
		double f=sc.nextDouble();
		
		double res = (f-32)*5/9;
		
		System.out.println(res);
	}

}
