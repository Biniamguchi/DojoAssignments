import java.util.Random;

public class BankAccount{
    private String accountNumber;
    private long checkingBal;
    private long savingsBal;

    private static int  numAccounts  = 0;
    private static long totalRevenue = 0;
    private static Random rand       = new Random();

    public BankAccount(long checking,long savings){
        accountNumber = BankAccount.genAccountNum();
        checkingBal   = checking;
        savingsBal    = savings;
        totalRevenue += checkingBal+savingsBal;
        numAccounts++;
    }

    public BankAccount(long checking){this(checking,0);}
    public BankAccount(){this(0,0);}

    private static String genAccountNum(){
        return Integer.toString(rand.nextInt(1000000000)+1000000000);
    }

    public void setCheckingBalance(long checking){
        checkingBal += checking;
    }

    public void setSavingsBalance(long savings){
        savingsBal += savings;
    }

    public long getCheckingBalance(){
        return checkingBal;
    }

    public long getSavingsBalance(){
        return savingsBal;
    }

    public void deposit(long checking,long savings){
        this.setCheckingBalance(checking);
        this.setSavingsBalance(savings);
        totalRevenue += checking+savings;
    }

    public void deposit(long checking){
        this.setCheckingBalance(checking);
        totalRevenue += checking;
    }

    public void withdrawal(long checking,long savings){
        if(this.getCheckingBalance() < 1 && this.getSavingsBalance() < 1){return;}
        this.setCheckingBalance(-checking);
        this.setSavingsBalance(-savings);

        long total = this.getSavingsBalance()+this.getCheckingBalance();
        totalRevenue -= total;
    }

    public void withdrawal(long checking){
        this.withdrawal(checking,0);
    }

    public void show(){
        long total = this.getCheckingBalance()+this.getSavingsBalance();
        System.out.println("Total Balance: "+total);
    }

    public static void main(String[] args) {
        BankAccount ref    = new BankAccount(123123,123123);
        ref.show();
        BankAccount tony   = new BankAccount(3451,3451);
        tony.show();
        BankAccount jenny  = new BankAccount(23423,23423);
        jenny.show();
        BankAccount cheryl = new BankAccount(100,100);
        
        cheryl.show();
        cheryl.deposit(25);
        cheryl.show();
        cheryl.withdrawal(50);
        cheryl.show();
    }
}
