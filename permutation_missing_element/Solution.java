import java.util.*;

class Solution {
    public int solution(int[] A) {
        Set<Integer> set = new HashSet<>();

        for (int i=0; i<A.length+1; i++) {
            set.add(i+1);
        }

        for (int i: A) {
            set.remove(i);
        }
        return set.iterator().next();
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] intArray1 = {2, 3, 1, 5};
        System.out.println(solution.solution(intArray1));

        int[] intArray2 = {};
        System.out.println(solution.solution(intArray2));

        int[] intArray3 = {1};
        System.out.println(solution.solution(intArray3));

    }
}