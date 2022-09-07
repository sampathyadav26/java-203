package Constructors;

public class _02ParemeterizedConstructor {
	
	int i;

	_02ParemeterizedConstructor(){
		System.out.println("Default Constructor");
	}
	
	_02ParemeterizedConstructor(int i){
		this.i = i;
		System.out.println("Parametrized Constructor");
	}
	
	
	public static void main(String[] args) {
		
			_02ParemeterizedConstructor pc = new _02ParemeterizedConstructor();
			_02ParemeterizedConstructor pcd = new _02ParemeterizedConstructor(5);
			
	}

}
