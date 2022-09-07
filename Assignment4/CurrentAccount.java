package Assignment4;


public class CurrentAccount {
	Account account=new Account("147258369", "Anand", "7702728690",2000.00);
	
	double rateOfInterestPerMonth=10,res;
	
	public void interestRate() {
		
		res=(account.amount*rateOfInterestPerMonth)/100;
		
	}
	
	public void addInterest() {
		interestRate();
		System.out.println("Added Interest Amount "+res);
		res+=account.amount;
		System.out.println("Total Amount : "+res);
		
		
	}

}
