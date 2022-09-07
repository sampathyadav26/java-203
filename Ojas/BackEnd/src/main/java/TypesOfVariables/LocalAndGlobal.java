package TypesOfVariables;

public class LocalAndGlobal {
	String myVar="Outside Local Test Method";//Non static
	
	public static void main(String[] args) {
		 	
		LocalAndGlobal localAndGlobal = new LocalAndGlobal();
		localAndGlobal.localTestMethod();
		
		System.out.println(localAndGlobal.myVar);
	}

	public void localTestMethod(){
		String localvar="Inside Local Test Method";
		System.out.println("Local Variable str Value:-"+localvar);
	}
	
}
