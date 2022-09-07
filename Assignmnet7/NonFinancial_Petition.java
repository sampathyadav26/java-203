package Assignmnet7;

public class NonFinancial_Petition extends Petition{

	String CitizenName;
	String  ImplementationDate;
	
	public NonFinancial_Petition(int petitionId, String name, String dateRegistered, String location, String city,
			String problemDescription, boolean status,String citizenName,String implementationDate) {
		super(petitionId, name, dateRegistered, location, city, problemDescription, status);
		 ImplementationDate=implementationDate;
		 CitizenName=citizenName;
	}
	
	public void display()
	{
		System.out.println("PetitionId "+PetitionId);
		System.out.println("Petition Name "+Name);
		System.out.println("Petition DateRegistered "+DateRegistered);
		System.out.println("Petition Location "+Location);
		System.out.println("Petition ProblemDescription "+ProblemDescription);
		System.out.println("Petition Status "+Status);
		System.out.println("Petition CitizenName is :"+ CitizenName);
		System.out.println("Petition ImplementationDate is:"+ImplementationDate);
		
		
	}
	

}
