// you can also use imports, for example:
 import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    public int solution(int X, int Y, int D) {
        int numberOfJump = 0;

        if (X < Y) {
            numberOfJump = (Y - X) / D;

            int remainder = (Y - X) % D;
            if (remainder > 0) {
                numberOfJump++;
            }
        }

        return numberOfJump;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println(solution.solution(3, 999111321, 7));
        System.out.println(solution.solution(100, 30, 7));
        System.out.println(solution.solution(1, 5, 2));
    }
}