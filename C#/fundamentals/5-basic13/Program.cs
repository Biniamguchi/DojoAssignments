using System;

namespace _5_basic13
{
    class Program
    {
    	static void oneTo255(){
    		for(int i=1;i<256;i++){
    			Console.WriteLine(i);
    		}
    	}

    	 static void odds(){
    		for(int i=1;i<256;i++){
    			if(i%2 == 1)
	    			Console.WriteLine();
    		}
    	}

    	 static void printSum(){
    		int sum = 0;
    		for(int i=1;i<256;i++){
    			Console.WriteLine("Sum: "+sum);
    			sum += i;
    		}
    	}

    	 static void iterArr(int[] arr){
    		for(int i=0;i<arr.Length;i++){
    			Console.WriteLine(arr[i]);
    		}
    	}

    	 static int findMax(int[] arr){
    		int max = arr[0];

    		for(int i=0;i<arr.Length;i++){
    			if(max < arr[i])
    				max = arr[i];
    		}
    		return max;
    	}

    	 static int findAvg(int[] arr){
    		int sum = 0;
    		for(int i=0;i<arr.Length;i++){
    			sum+=arr[i];
    		}
    		return sum / arr.Length;
    	}

    	 static int[] arrWithOdd(){
    		int[] y = new int[256];

    		int j=0;
    		for(int i=0;i<256;i++){
    			if(i%2 == 1)
    				y[j] = i;
	    			j++;
    		}
    		return y;
    	}

    	 static int greaterThanY(int[] arr,int y){
    		int cnt = 0;
    		for(int i=0;i<arr.Length;i++){
    			if(arr[i] > y)
    				cnt++;
    		}
    		return cnt;
    	}

    	 static int[] squares(int[] arr){
    		for(int i=0;i<arr.Length;i++)
    			arr[i] = arr[i]*arr[i];
			return arr;
    	}

    	 static int[] noNeg(int[] arr){
    		for(int i=0;i<arr.Length;i++){
    			if(arr[i] < 0)
    				arr[i] = 0;
    		}
    		return arr;
    	}

    	 static void minMaxAvg(int[] arr){
    		int min = arr[0];
    		int max = arr[0];
    		int sum = 0;

    		for(int i=0;i<arr.Length;i++){
    			if(min > arr[i])
    				min = arr[i];
    			if(max < arr[i])
    				max = arr[i];
    			sum += arr[i];
    		}
    		sum /= arr.Length;

    		Console.WriteLine("Min:"+min);
    		Console.WriteLine("Max:"+max);
    		Console.WriteLine("Avg:"+sum);
    	}

    	 static void shiftVals(int[] arr){
    		for(int i=0;i<arr.Length-1;i++){
    			arr[i] = arr[i+1];
    		}
    		arr[arr.Length-1] = 0;

    		for(int i=0;i<arr.Length;i++){
    			Console.WriteLine(arr[i]);
    		}
    	}

    	 static object[] numToStr(int[] arr){
    		object[] res = new object[arr.Length];

    		for(int i=0;i<arr.Length;i++){
    			if(arr[i] < 0){
    				res[i] = "Dojo";
    			}else{
    				res[i] = arr[i];
				}
    		}
    		
    		return res;
    	}

        static void Main(string[] args)
        {
        	oneTo255();
        	odds();
        	printSum();
        	iterArr(new int[]{1,3,5,7,9,13});
        	Console.WriteLine(findMax(new int[]{5,100,2,3}));
        	Console.WriteLine(findAvg(new int[]{10,20,30,40,50}));
        	Console.WriteLine(arrWithOdd());
        	Console.WriteLine(greaterThanY(new int[]{1,3,5,7},3));
        	squares(new int[]{5,10,15,20});
        	noNeg(new int[]{8,-12,7,-3,12});
        	minMaxAvg(new int[]{5,-5,1,2,15,30,10,-25});
        	shiftVals(new int[]{1,5,10,7,-2});
        	numToStr(new int[]{-1,-3,2});
        }
    }
}
