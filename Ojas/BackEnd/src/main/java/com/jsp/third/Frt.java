//Static and Non-Static Variables
//Local Variables and Global Variables

package com.jsp.third;

public class Frt {

	int a = 10;
	
	public static void main(String[] args) {
		Frt obj = new Frt();
		System.out.println("the non static value of a is "+obj.a);//The Respected a value is global that's y create an object
		
		int b = 20;
		System.out.println("Local Variable is "+b);//this is Local variable so directly we can access the variable
	}

}
