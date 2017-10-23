using System.Collections.Generic;
using System;

namespace test{
	class Parser{
		Token t;
		int p;
		Lexer lexer;

		public Parser(Lexer lexer){
			this.lexer=lexer;
			p = -1;
			consume();
		}

		void consume(){
			p++;
			if(p >= lexer.tokens.Count) t = lexer.tokens[lexer.tokens.Count-1];
			else t = lexer.tokens[p];
		}

		void match(int x){
			if(t.type == x) consume();
			else Console.WriteLine("!!!PARSE ERROR!!!");//Find out how to throw errors.
		}

		AST assignment(){
			Token word = t;
			match(11); // Word
			Token equals = t;
			match(14); // Equals

			Token val = t;
			if(t.type == 10){ // str
				match(10);
			}else if(t.type == 12){ // Or num
				match(12);
				// expression(); // nums can be expressions too
			}

			AST ast = new AST(equals);
			ast.add(new AST(word));
			ast.add(new AST(val));
			
			return ast;
		}

		// void expression(){
		// 	match(12);

		// 	while(t.value == ""+'+'){
		// 		match(13);//binop
		// 		match(12);
		// 	}
		// }

		public void parse(){
			// foreach(Token t in lexer.tokens){
			// 	Console.WriteLine(t.type+":"+t.value);
			// }

			assignment();
			// expression();
		}
	}
}