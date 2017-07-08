// Practical use case for why you should use setters / getters and not make member vars public.

public class User{
    private String firstName;
    private String lastName;
    private int userLevel; // if this was public, anyone could change their level / priveleges.
    private static int numUsers = 0;

    public User(){this("","");}

    public User(String firstName,String lastName){
        if(numUsers < 1){  //First user created becomes admin / root.
            userLevel = 9;
        }else{
            userLevel = 0;
        }

        this.firstName = firstName;
        this.lastName  = lastName;
        numUsers++;
    }

    public boolean isAdmin(){
        return this.getUserLevel() > 0;
    }

    public void setUserLevel(int lvl){
        if(!this.isAdmin()){ //Cant be changed unless you we're already an Admin.
            System.out.println("Invalid Access priveleges. You're not sneaky, go away.");
            return;
        }
        userLevel = lvl;
    }

    public void setName(User user,String first,String last){// Only admins can change people's names.
        if(this.isAdmin()){
            user.firstName = first;
            user.lastName  = last;
        }
    }

    public void printName(User user){// Only admins can lookup people's names.
        if(this.isAdmin()){
            System.out.println("First Name: "+user.firstName);
            System.out.println("Last Name: "+user.lastName);
        }
    };

    public int getUserLevel(){
        return userLevel;
    }

    public static void main(String[] args) {
        User adminGuy   = new User("John","Doe");

        User someHacker = new User("thinks","hescool");
        someHacker.setUserLevel(1337); // Hes not an admin, so he cant do this.
        //someHacker.userLevel = 1337; // If userLevel was public, he could do this.

        adminGuy.setName(someHacker,"but hes","not");
        adminGuy.printName(someHacker);
    }
}

