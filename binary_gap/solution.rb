def solution(n)
  sum_array = [0]
  count_zero = 0
  n.to_s(2).split('').each_with_index do |x|
    if x == '0'
      count_zero += 1
    else
      sum_array << count_zero
      count_zero = 0
    end
  end
  sum_array.max
end


require 'minitest/autorun'

class Tests < MiniTest::Unit::TestCase
  def test_example_input
    assert_equal 2, solution(9)
  end

  def test_example_input1
    assert_equal 5, solution(1041)
  end

  def test_example_input3
    assert_equal 0, solution(15)
  end
end