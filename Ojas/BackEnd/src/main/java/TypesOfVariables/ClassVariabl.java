package TypesOfVariables;

public class ClassVariabl {
	public static int intVar=10;
	public static String instVariable="Instance Variable";
	
	public static void main(String[] args){ 
		
			ClassVariabl obj1=new ClassVariabl();      
			ClassVariabl obj2=new ClassVariabl();
			
			System.out.println("Object1: "+obj1.intVar);
			System.out.println("Object2: "+obj2.intVar);//Initialize Class Variable Inside Main Method     
			
			obj1.intVar=20;
			obj1.instVariable="Merugu";
			
			System.out.println("Updated Value: "+obj1.intVar);// obj1.intvar = 20
			System.out.println("After Update the String Value: "+intVar);
			System.out.println("By Calling From a Newly Created Object: "+obj2.intVar);
			
			System.out.println(obj2.instVariable);
			
		}
	}

