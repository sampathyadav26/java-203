package Assignment6;

public class FourWheeler extends Vechile {
	public FourWheeler(String regNumber) {
		super(regNumber);
		
	}

	@Override
	public int getNumberOfWheels() {
		
		return 4;
	}

}

class Car extends FourWheeler{
	 public Car(String regNumber) {
		super(regNumber);
		if(regNumber.equals(getRegNumber())){
			System.out.println("no.of wheels for the vehicle"+getNumberOfWheels());
			System.out.println("registered vehicle is car");
		}
		else
			System.out.println("enter valid reg number");
	}


}
