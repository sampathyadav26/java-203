package Assignment4;


public class SavingAccount {
	
	Account account=new Account("147258369", "Anand", "7702728690",2000.00);
	
	double interestRatePerMonth=5;
	double res;
	public void interestRate()
	{
		res=(account.amount*interestRatePerMonth)/100;
		//System.out.println("The Interest rate is : "+res);
	}
	
	public void addInterest() {
		interestRate();
		System.out.println("Added Interest Amount "+res);
		res+=account.amount;
		System.out.println("Total Amount : "+res);	
	}

}
