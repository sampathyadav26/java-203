package FlowControls;
//Array Using For loop and ForEach Loop
public class ForEachDemo07 {
	public static void main(String[] args) {
		int[] arr = {10,20,30,40,50,60};
		
		for(int i=0;i<arr.length;i++) {
			System.out.println(arr[i]);
		}
		
		System.out.println("********ForEach Loop***********");
		for(int k:arr) {
			System.out.println(k);
		}
	}
}
