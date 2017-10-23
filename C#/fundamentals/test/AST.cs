using System.Collections.Generic;

namespace test{
	class AST{
		Token token;        // Derived from what token?
		List<AST> children; // Operators and Operands go here.

		public AST(){}

		public AST(Token token){
			this.token=token;
		}

		public AST(int type){
			this.token = new Token(type,"null");
		}

		public int getType(){
			return token.type;
		}

		public bool isNull(){
			return token==null;
		}

		public void add(AST ast){
			if(children==null) children = new List<AST>();
			children.Add(ast);
		}
	}
}