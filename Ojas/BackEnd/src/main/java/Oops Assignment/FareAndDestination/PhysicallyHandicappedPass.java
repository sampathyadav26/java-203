package FareAndDestination;

public class PhysicallyHandicappedPass extends OneTime{
double discount = 40;
	
	public  void  printPhysicallyHandicappedPass(){
		Fare fare = new Fare();
		double pfare = fare.PrintFare();
		double res = pfare-(pfare*(discount/100));
		System.out.println("After Discount SeasonalPass Fare is:"+res);
	}
}
