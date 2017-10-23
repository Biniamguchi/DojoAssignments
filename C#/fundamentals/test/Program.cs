using System;

namespace test{
    class Program{
		static FileReader reader;
		static Lexer lexer;
		static Parser parser;

        static void Main(string[] args){
			reader = new FileReader(args[0]);
			lexer  = new Lexer(reader.text);
			parser = new Parser(lexer);
			parser.parse();
		}
    }
}
