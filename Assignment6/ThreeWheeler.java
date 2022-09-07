package Assignment6;

public class ThreeWheeler extends Vechile {
	public ThreeWheeler(String regNumber) {
		super(regNumber);
		
	}

	@Override
	public int getNumberOfWheels() {
		
		return 3;
	}

}
class Auto extends ThreeWheeler{

	public Auto(String regNumber) {
		super(regNumber);
		if(regNumber.equals(getRegNumber())){
			System.out.println("no.of wheels for the vehicle"+getNumberOfWheels());
			System.out.println("registered vehicle is auto");
		}
		else
			System.out.println("enter valid reg number");
	}

}
