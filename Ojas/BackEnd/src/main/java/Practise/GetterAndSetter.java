package Practise;

public class GetterAndSetter {

	private String name;
	

	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public static void main(String[] args) {
		
			GetterAndSetter obj=new GetterAndSetter();
			
			obj.setName("Vijay");
			System.out.println(obj.getName());
	}

}
