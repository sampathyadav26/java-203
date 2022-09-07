package TypesOfVariables;

class a112{
	int i=10;
}
class b112 extends a112
{
	int i=20; 
	//int j=40;
}

public class ObjectCreation {
		
		public static void main(String[] args)
		{    
			a112 obj= new b112();
			System.out.println(obj.i); 
				//System.out.println(obj.j); Newly added variables in child class are notaccessable
		}
			
}
