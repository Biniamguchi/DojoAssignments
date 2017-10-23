using System;

namespace fun1
{
    class Program
    {
        static void Main(string[] args)
        {
			// for(int i=1;i<256;i++){
			// 	Console.WriteLine(i);
			// }

			// for(int i=1;i<101;i++){
			// 	if(i%3 == 0 && i%5 != 0){
			// 		Console.WriteLine(i);
			// 	}else if(i%5 == 0 && i%3 != 0){
			// 		Console.WriteLine(i);
			// 	}

			// for(int i=1;i<101;i++){
			// 	if(i%3 == 0 && i%5 != 0){
			// 		Console.WriteLine("Fizz");
			// 	}else if(i%5 == 0 && i%3 != 0){
			// 		Console.WriteLine("Buzz");
			// 	}else if(i%3 == 0 && i%5 == 0){
			// 		Console.WriteLine("FizzBuzz");
			// 	}
			// }

			Random rand = new Random();
			int num;
			for(int i=0;i<10;i++){
				num = rand.Next(1,100);

				if(num%3 == 0 && num%5 != 0){
					Console.WriteLine("Fizz");
				}else if(num%5 == 0 && num%3 != 0){
					Console.WriteLine("Buzz");
				}else if(num%5 == 0 && num%3 == 0){
					Console.WriteLine("FizzBuzz");
				}
			}
        }
    }
}
