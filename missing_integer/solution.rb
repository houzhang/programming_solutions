def solution(n)
  missing_min_integer = 1
  n.sort.each do |x|
    missing_min_integer += 1 if x > 0 && x == missing_min_integer
  end
  missing_min_integer
end

require 'minitest/autorun'

class Tests < MiniTest::Unit::TestCase
  def test_example_input
    assert_equal 5, solution([1, 3, 6, 4, 1, 2])
  end

  def test_example_input1
    assert_equal 2, solution([1])
  end

  def test_example_input2
    assert_equal 1, solution([0])
  end

  def test_example_input3
    assert_equal 1, solution([-1])
  end

  def test_example_input4
    assert_equal 1, solution([-2147483648, 2147483647])
  end
end