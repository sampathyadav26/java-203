package ElectriCityBill;

import java.util.Scanner;

public class _01StandardElectriCityBill {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Total K.w used..");
		double kw = sc.nextDouble();
		
		
		double costPerKillowatt = 1.20;
		
		double result = kw*costPerKillowatt;
		
		System.out.println(result);
	}

}
