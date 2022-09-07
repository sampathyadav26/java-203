package _22Operators;

public class AssignmentOperators {

	public static void main(String[] args) {
		int x=10,y=20,z=30,a=5,b=10;

		x+=y; //x = x+y = 30
		y-= x+z; //y = y-(x+z) 20-(30+30) =>20-60=>-40
		z*=x*y;  //z = z*(x*y) 30*(30*-40)
		
		System.out.println("x is:"+x);
		System.out.println("y is:"+y);
		System.out.println("z is:"+z);
		
		a+=1;
		b-=10;
	}

}
