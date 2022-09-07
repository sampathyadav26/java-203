package _09Patterns;

public class _13Pattern {

	public static void main(String[] args) {
		int n=5,x,y;
		for(int i=1;i<=n;i++) {
			x=i;
			y=n-i+1;
			for(int j=1;j<=n;j++) {
				if(j%2 ==1) {
					System.out.print(x+" ");
				}else {
					System.out.print(y+" ");
				}
				
				x=x + n;
			    y=y + n;
			}
			System.out.println();
		}
	}

}
