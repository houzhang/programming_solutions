import java.util.*;

/**
 * input: {9,3,9,3,9,7,9};
 * output: 7
 */
public class Solution {
    public static void main(String[] args) {
        int[] a = {9,3,9,3,9,7,9};
        System.out.println(solution(a));
    }

    private static int solution(int[] A) {
        Map<Integer, Integer> valueMap = new HashMap<>();
        for (int x: A) {
            Integer value = valueMap.get(x);
            if (value == null) {
                valueMap.put(x, x);
            } else {
                valueMap.remove(x);
            }
        }

        return (int)valueMap.values().toArray()[0];
    }
}