namespace test{
	class FileReader{
		public string text;

		public FileReader(string file){
			text = System.IO.File.ReadAllText(@file);
		}
	}
}