package Practise;

public class frt {
	public static void main(String[] args) {
		frt p = new frt();
		p.start();
	}
	
	void start() {
		long [] a1 = {3,4,5};
		long [] a2 = fix(a1);
		System.out.println(a1[0]+ a1[1]+a1[2]+" ");
	
	}
	
	long[] fix (long[] a3) {
		a3[1] = 7;
		return a3;
	}
}
