public class Solution {
    public static void main(String[] args) {
        System.out.println(solution(9));
    }

    private static int solution(int n) {
        String[] sArray = Integer.toBinaryString(n).split("");

        int counter = 0;
        int maxCounter = 0;
        for (String s: sArray) {
            if (s.equals("0")) {
                counter++;
            } else {
                maxCounter = (counter > maxCounter ? counter : maxCounter);
                counter = 0;
            }
        }
        return maxCounter;
    }
}