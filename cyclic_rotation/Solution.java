import java.util.*;

public class Solution {


    public static void main(String[] args) {

        int[] a = {3, 8, 9, 7, 6};
        System.out.println(solution(a, 3).toString());

    }

    /**
     *
     * @param A = {3, 8, 9, 7, 6}
     * @param K = 3
     * @return {9, 7, 6, 3, 8}
     */
    private static int[] solution(int[] A, int K) {

        if (A.length == 0) {
            return A;
        }

        int length = A.length;

        int[] returnArray = new int[length];

        if (K > length) {
            K = K % length;
        }

        for (int i=0; i<A.length; i++) {
            if (i+K >= length) {
                returnArray[i+K-length] = A[i];
            } else {
                returnArray[i+K] = A[i];
            }

        }

        return returnArray;
    }
}