package FlowControls;
import java.util.Scanner;

public class SwitchWithNumber03 {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("**********Switch Application************");
		System.out.println("a . add");
		System.out.println("b . sub");
		System.out.println("c . mul");
		System.out.println("d . div");
		System.out.println("---------------------------------------");
		System.out.println("Enter Two Numbers..");
		int ch = sc.nextInt();
		int chr = sc.nextInt();
		
		System.out.println("Enter your choice");
		char choice = sc.next().charAt(0);
		
		switch(choice) {
			case 'a': System.out.println("Some Of Addition is:"+(ch+chr));
			          break;
			case 'b': System.out.println("Some Of sub is:"+(ch-chr));
					  break;
			case 'c': System.out.println("Some Of mul is:"+(ch*chr));
			  			break;
			case 'd': System.out.println("Some Of Div is:"+(ch%chr));
			  			break;
			default: System.out.println("Pls Choose Valid Input..");
		}	
	}

}
