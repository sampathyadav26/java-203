package _03Assignment;

public class Mobile implements Imobile,ITelephone{

	String IEMICode;
	Boolean IsSingleSIM;
	String Processor;
	String SIMCard;
	String MobileNoMember;
	
	public void Dial() {
		System.out.println("Dialing is a Interface Method");
	}

	
	public void ConnectBlueTooth() {
		System.out.println("You are Connected successfully through ConnectBlueTooth");
	}
	
	
	public void GetIEMICode() {
		System.out.println("You are IEMICode Generated successfully");
	}
	
	public void GetWIFIConnection() {
		System.out.println("You are Connected successfully through WifiConnection");
	}

	public void Receive() {
		System.out.println("You will get message soon");
	}

	public void SendMessage() {
		System.out.println("You  message send successfully");
	}
}
