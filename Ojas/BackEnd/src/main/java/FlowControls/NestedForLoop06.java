package FlowControls;

//Print 3 tables
public class NestedForLoop06 {

	public static void main(String[] args) {
		for(int i=1;i<=3;i++) {
			for(int j=1;j<=10;j++) {
				System.out.println(i +"x"+ j +"="+(i*j) );
			}
			System.out.println(" ");
		}
	}

}
