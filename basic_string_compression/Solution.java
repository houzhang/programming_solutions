public class Solution {

    /**
     * input:  "aaaabbbccdaa"
     * output: "a3b2c1d0a1"
     */
    public static void main(String[] args) {
        String output = "";
        int counter = 0;
        String s = "aaaabbbccdaa";
        String[] sArray = s.split("");
        for (int i=0; i<sArray.length; i++) {
            if (i == 0) {
                output += sArray[i];
            } else {
                if (sArray[i].equals(sArray[i-1])) {
                    counter++;
                } else {
                    output += String.valueOf(counter);
                    output += sArray[0];
                    counter = 0;
                }

                if (i == sArray.length-1) {
                    output += String.valueOf(counter);
                }
            }
        }

        System.out.println(output);
    }

}