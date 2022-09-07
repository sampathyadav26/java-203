package _03AreaOfTriangle;

public class _02AreaOfTriangleUsingConstructor {
	
	public double b;
	public double h;
	double area;
	
	_02AreaOfTriangleUsingConstructor(double b,double h) {
		area = (b*h)/2;
	}

	public static void main(String[] args) {
		_02AreaOfTriangleUsingConstructor atc = new _02AreaOfTriangleUsingConstructor(5,2);
		System.out.println("Area Of Triangle is:"+atc.area);
	}

}
