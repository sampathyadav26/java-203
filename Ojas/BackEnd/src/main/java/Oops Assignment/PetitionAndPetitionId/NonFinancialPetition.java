package PetitionAndPetitionId;

public class NonFinancialPetition extends Petition{
	String CitizenName;
	String ImplementationDate;
	
	public NonFinancialPetition(int petitionId, String name, String dateRegistered, String location, String city,
			String problemDescription, boolean status,String citizenName,String implementationDate) {
		super(petitionId, name, dateRegistered, location, city, problemDescription, status);
		CitizenName = citizenName;
		ImplementationDate = implementationDate;
	}
	
	public void display(){
		System.out.println("************Welcome to Non-FinancialPetition************");
		System.out.println("PetitionId is:"+PetitionId);
		System.out.println("Petition Name is:"+Name);
		System.out.println("Petition DateRegistered is:"+DateRegistered);
		System.out.println("Petition Location is:"+Location);
		System.out.println("Petition City is:"+City);
		System.out.println("Petition ProblemDescription is:"+ProblemDescription);
		System.out.println("Petition Status is:"+Status);
		System.out.println("Petition CitizenName is:"+CitizenName);
		System.out.println("Petition ImplementationDate is:"+ImplementationDate);
		System.out.println("****************************************************");
	}

}
