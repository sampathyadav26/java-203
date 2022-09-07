package FlowControls;

import java.util.Scanner;

/*
 * 
 * Flow Controls Basically Divided Into 3 types
 * 1.Selection					2.Iterative Statement 	3.Transfer Statements
 *->if else						->do While				->Break
 *->if else--if else(nested if) ->while					->return
 *->Switch						->for loop				->continue
 *								->Inner For Loop		->try-catch-finally
 *								->ForEach				->Assert Statment
 *
 *Given Number is Even Or Odd
 */

public class IfElse01 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter Number..");
		int n = sc.nextInt();
		if(n%2==0) {
			System.out.println("Given Number is even");
		}else {
			System.out.println("Given Number is odd");
		}

	}

}
