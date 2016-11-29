 import java.util.*;
class Solution {
    public int solution(int[] A) {
        // write your code in Java SE 8
        Set<Integer> set = new TreeSet<>();

        int tailSum = 0;
        for (int i: A) {
            tailSum += i;
        }

        int headSum = 0;

        for (int i=0; i<A.length - 1; i++) {
            headSum += A[i];
            tailSum -= A[i];

            set.add(Math.abs(headSum - tailSum));
        }

        return set.iterator().next();
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] intArray1 = {3, 1, 2, 4, 3};
        System.out.println(solution.solution(intArray1));
    }
}