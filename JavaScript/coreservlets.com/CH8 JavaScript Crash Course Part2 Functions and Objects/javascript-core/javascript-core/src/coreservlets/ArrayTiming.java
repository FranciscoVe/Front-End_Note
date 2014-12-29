package coreservlets;

public class ArrayTiming {
  public static double sumRandomNumbers(int size) {
    double[] nums = new double[size];
    for(int i=0; i<size; i++) {
      nums[i] = Math.random();
    }
    double sum = sumArray(nums);
    return(sum);
  }
  
  public static double sumArray(double[] nums) {
    double sum = 0;
    for(int i=0; i<nums.length; i++) {
      sum = sum + nums[i];
    }
    return(sum);
  }
  
  public static void runBenchmark(int size) {
    long startTime = System.currentTimeMillis();
    sumRandomNumbers(size);
    long endTime = System.currentTimeMillis();
    System.out.printf("Time to sum %s random nums is %.3f seconds.%n",
                      size, (endTime - startTime)/1000.0);
  }
  
  public static void main(String[] args) {
    int size = 250000;
    for(int i=0; i<7; i++) {
      size = size * 2;
      runBenchmark(size);
    }
  }
}
