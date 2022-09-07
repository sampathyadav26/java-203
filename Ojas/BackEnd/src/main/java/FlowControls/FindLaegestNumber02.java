package FlowControls;

import java.util.Scanner;

//Biggest Of 3 Numbers
public class FindLaegestNumber02 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter 3 Numbers");
		
		int a = sc.nextInt();
		int b = sc.nextInt();
		int c = sc.nextInt();
		
		if(a>b && a>c) {
			System.out.println("The Given a Value is Biggest");
		}else if(a<b && c<b) {
			System.out.println("The Given b Value is Biggest");
		}else if(a<c && b<c) {
			System.out.println("The Given c Value is Biggest");
		}else {
			System.out.println("InValid Statment......");
		}
		
	}

}
