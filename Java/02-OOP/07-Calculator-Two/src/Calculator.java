import java.io.Serializable;
// Abstract for the sole purpose of preventing instantiation. Why have more than one?
public abstract class Calculator implements Serializable{
    private static final long serialVersionUID = 1L;
    private static double res;
    private static double num;
    private static String oper;
    private static char[] mathOps = {'+','-','*','/','%'};

    private static boolean isMathOp(String op){
        for(int i=0;i<mathOps.length;i++){
            if(op.charAt(0) == mathOps[i]){
                return true;
            }
        }
        return false;
    }
    public static void clear(){oper = ""; res = 0.0;}

    public static void performOperation(String op){
        if(!isMathOp(op)){
            if(res == 0.0){
                res  = Double.parseDouble(op);
            }else{
                num = Double.parseDouble(op);

                if(oper == "+"){res += num;}
                else if(oper == "-"){res -= num;}
                else if(oper == "*"){res *= num;}
                else if(oper == "/"){res /= num;}
                else if(oper == "%"){res %= num;}
            }
        }else{
            oper = op;
        }
    }

    public static double getResults(){
        System.out.println(res);
        return res;
    }

    public static void main(String[] args) {
        Calculator.performOperation("10.5");
        Calculator.performOperation("+");
        Calculator.performOperation("5.2");
        Calculator.performOperation("*");
        Calculator.performOperation("10");
        Calculator.getResults();
    }
}
