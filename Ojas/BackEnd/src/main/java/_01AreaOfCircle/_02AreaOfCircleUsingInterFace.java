package _01AreaOfCircle;

import java.util.Scanner;

//Area Of Circle Using Interface

interface Areacir{
	void circle();
}

public class _02AreaOfCircleUsingInterFace {
	
	double area;
	
	public void circle(double r) {
		area=(22*r*r)/7;
		System.out.println("Area is:"+area);
	}

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the radius:");
		double rad = sc.nextDouble();
		
		_02AreaOfCircleUsingInterFace x = new _02AreaOfCircleUsingInterFace();
		x.circle(rad);
	}

}
