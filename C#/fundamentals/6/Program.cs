using System;

namespace _6
{
    class Program
    {
		static Random random = new Random();

		static int[] randArr(){
			int[] arr = new int[10];
			for(int i=0;i<10;i++)
				arr[i] = random.Next(5,25);

			int min = arr[0];
			int max = arr[0];
			int sum = 0;

			for(int i=0;i<arr.Length;i++){
				if(max < arr[i])
					max = arr[i];
				if(min > arr[i])
					min = arr[i];
				sum += arr[i];
			}
			Console.WriteLine("Min:"+min+"\nMax:"+max+"\nSum:"+sum);
			return arr;
		}

		static string tossCoin(){
			Console.WriteLine("Tossing a coin!");
			return random.Next(1,2) == 1 ? "Heads":"Tails";
		}

		static double tossMultipleCoins(int num){
			double ratio = 0.0D;

			for(;num>0;num--){
				if(tossCoin() == "Heads"){
					ratio += 0.1;
				}else{
					ratio -= 0.1;
				}
			}

			return ratio;
		}

		static string[] names(){
			string[] people = new string[5]{"Todd","Tiffany","Charlie","Geneva","Sydney"};
			int rnd;
			string tmp;
			//Randomize
			for(int i=0;i<people.Length;i++){
				rnd = random.Next(0,people.Length-1);
				tmp = people[i];
				people[i]   = people[rnd];
				people[rnd] = tmp;
			}
			for(int i=0;i<people.Length;i++)//Print after randomize
				Console.WriteLine(people[i]);

			string[] arr = new string[people.Length];
			for(int i=0;i<people.Length;i++){
				if(people[i].Length > 5){
					arr[i] = people[i];
				}
			}
			return arr;
		}

        static void Main(string[] args)
        {
			// randArr();
			// Console.WriteLine(tossCoin());
			// Console.WriteLine(tossMultipleCoins(10));
			// Console.WriteLine(names());
        }
    }
}
