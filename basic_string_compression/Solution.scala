// input:  "aaaabbbccdaa"
// output: "a3b2c1d0a1"

object Solution {

  def main(args: Array[String]): Unit = {
    val input = "aaaabbbccdaa";
    var output = "";

    var currentChar = input.head;
    var counter = -1;

    for(i <- input.indices) {
      if(currentChar == input(i)) {
        counter += 1;
      } else {
        output += s"$currentChar"
        output += s"$counter"
        counter = 0;
        currentChar = input(i);
      }
      
      if (i == input.length - 1) {
        output += s"$currentChar"
        output += s"$counter"
      }

    }

    println(output);
  }
}

