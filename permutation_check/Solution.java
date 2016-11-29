import java.util.*;

class Solution {
    public int solution(int[] A) {
        int returnValue = 0;

        TreeSet<Integer> set = new TreeSet<>();

        for (int i: A) {
            set.add(i);
        }

        if (A.length == set.size()) {

            if (set.size() == set.last().intValue()) {
                returnValue = 1;
            }
        }

        return returnValue;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] intArray1 = {4, 1, 3, 2};
        System.out.println(solution.solution(intArray1));

        int[] intArray2 = {4, 1, 3};
        System.out.println(solution.solution(intArray2));

        int[] intArray3 = {1, 1};
        System.out.println(solution.solution(intArray3));

        int[] intArray4 = {1000000000};
        System.out.println(solution.solution(intArray4));

        int[] intArray5 = {9, 5, 7, 3, 2, 7, 3, 1, 10, 8};
        System.out.println(solution.solution(intArray5));
    }
}