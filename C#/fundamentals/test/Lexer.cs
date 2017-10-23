using System;
using System.Collections.Generic;

namespace test{
	class Lexer{
		static char EOF    = '\0';
		static int STRING  = 10;
		static int WORD    = 11;
		static int NUMBER  = 12;
		static int BINOP   = 13;
		static int EQUALS  = 14;

		string input;
		State state;
		int p;
		char c;
		string cur;
		public List<Token> tokens;

		public Lexer(string text){
			input = text;
			state = State.MAIN;
			p   = 0;
			c   = input[p];
			cur = "";
			tokens = new List<Token>();
			next();
		}

		void concat(bool cond,int type){// Revert state + add token if false
			cur += c;

			if(!cond){
				tokens.Add(new Token(type,cur));
				state = State.MAIN;
				cur   = "";
			}
		}

		void consume(){//next char
			p++;
			if(p >= input.Length) c = EOF;
			else c = input[p];
		}

		char look(int l){
			if(p+l <= input.Length-1){
				return input[p+l];
			}else{
				return EOF;
			}
		}		

		void next(){
			while(c != EOF){
				while(c==' '||c=='\t'||c=='\r'||c=='\n') consume(); // Eat Whitespace

				if(c=='+'||c=='-'||c=='*'||c=='/'||c=='%'||c=='^'){
					tokens.Add(new Token(BINOP,""+c));
					consume();
				}else if(c=='='){
					tokens.Add(new Token(EQUALS,""+c));
					consume();					
				}

				switch(state){
					case State.MAIN:

						if(Char.IsLetter(c)){ 
							concat(Char.IsLetter(look(1)),WORD);
						}else if(Char.IsDigit(c)){
							concat(Char.IsDigit(look(1)),NUMBER);
						}else if(c == '"'){
							state = State.STRING;
						}
						break;
					case State.WORD:
						concat(Char.IsLetter(c),WORD);
						break;
					case State.STRING:
						concat(c != '"',STRING);
						break;
					case State.NUMBER:
						concat(Char.IsDigit(c),NUMBER);
						break;
				}
				consume();
			}
		}
	}
}