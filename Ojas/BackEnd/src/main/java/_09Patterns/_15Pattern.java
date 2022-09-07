package _09Patterns;

public class _15Pattern {

	public static void main(String[] args) {
		int n=5,x = 6,y;	
		for(int i=1;i<=5;i++) {
//			x = i;
//			y = n-i+1;
			for(int j=1;j<=3;j++) {
				System.out.print(n+" "+x+" ");
				n=n+10;
				x=x+10;
			}
			n = n-31;
			x=  x-29;
			System.out.println(" ");
		}
	}

}
