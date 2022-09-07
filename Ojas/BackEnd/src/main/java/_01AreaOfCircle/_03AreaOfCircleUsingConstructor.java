package _01AreaOfCircle;

import java.util.Scanner;

class Area{
	Area(double r){
		double d = (22*r*r)/7;
		System.out.println("Some of Area is:"+d);
	}
}
public class _03AreaOfCircleUsingConstructor {
	
//	_03AreaOfCircleUsingConstructor(double r){
//		double d = (22*r*r)/7;
//		System.out.println("Some of Area is:"+d);
//	}
//  Either use _03AreaOfCircleUsingConstructor or class Area both will give same ans

	
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the value:");
		Double d = sc.nextDouble();
		
//		_03AreaOfCircleUsingConstructor ac = new _03AreaOfCircleUsingConstructor(d);
		
		Area area=new Area(d);
	}

}
