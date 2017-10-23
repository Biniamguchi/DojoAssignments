using System;
using System.Collections.Generic;
using Database;

namespace _11_mysql_connection
{
    class Program
    {		
		static string input = "";

        static void Main(string[] args)
        {
			Console.WriteLine("------------------------");
			Console.WriteLine("Type 'quit' to exit");
			Console.WriteLine("------------------------");
			read();

			while(input != "quit"){
				input = Console.ReadLine();

				if(input == "create"){
					Console.WriteLine("Usage: create - Args(table,columns,values)");
					List<string> buff = new List<string>();

					while(buff.Count < 3)
						buff.Add(Console.ReadLine());
					create(buff[0],buff[1],buff[2]);
					Console.WriteLine("Inserting Row");
				}else if(input == "all"){
					read();
				}
			}
        }

		static void read(){
			Console.WriteLine("ALL USERS:");
			List<Dictionary<string,object>> res = DB.Query("SELECT * FROM users;");

			foreach(Dictionary<string,object> dict in res){
				Console.WriteLine("----------------");
				foreach(KeyValuePair<string,object> pair in dict){
					Console.WriteLine(pair.Key+":"+pair.Value);
				}
			}
		}

		static void create(string table,string columns,string values){
			string query = $"INSERT INTO {table}({columns}) VALUES({values});";
			DB.Execute(query);
		}
    }
}
