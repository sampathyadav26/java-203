package _22Operators;

public class IncrementAndDecrementOperator {
	public static void main(String[] args) {
		int i=1;
		System.out.println(i);
		
		int j = ++i;
		System.out.println("Pre Increment:"+j);
		
		int k = i++;
		System.out.println("Post Increment:"+k);
		
		int x = 50;  
		int y = 100;  
		int z = 200;  
		
		int a, b, c;  

		 a = ++x;  //51
		 b = y++;  // y=100 b=101

		 c = x + y++ + ++z;  // z=201

		 System.out.println("x = " +x);  

		 System.out.println("y = " +y);  

		 System.out.println("z = " +z);  

		 System.out.println("a = " +a);  

		 System.out.println("b = " +b);  

		 System.out.println("c = " +c);  
	}
}
