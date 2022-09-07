package _01AreaOfCircle;

public class _04AreaOfCircleUsingMethod {

	public static void area(double r) {
		double res = (22*r*r)/7;
		System.out.println("static method result is:"+res);
	}
	
	public void areaUsingNonStatic(double r) {
		double res = (22*r*r)/7;
		System.out.println("Non Static method is:"+res);
	}
	
	 double areaUsingReturn(double r) {
		return (22*r*r)/7;
	}
	
	public static void main(String[] args) {
		
		area(15);
		
		_04AreaOfCircleUsingMethod ac = new _04AreaOfCircleUsingMethod();
		ac.areaUsingNonStatic(15);
		
		_04AreaOfCircleUsingMethod ab = new _04AreaOfCircleUsingMethod();
		double d = ab.areaUsingReturn(15);
		System.out.println("Using Return Statment"+d);
		
	}

}
