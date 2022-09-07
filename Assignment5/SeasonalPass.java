package Assignment5;

public class SeasonalPass extends Fare{
	double discount = 10;
	
	public  void  printSeaonalPass(){
		Fare fare = new Fare();
		double pfare = fare.PrintFare();
		double res = pfare-(pfare*(discount/100));
		System.out.println("After Discount SeasonalPass Fare is:"+res);
	}
}
