def sum_subarray(array)
  sum_array = [0]
  array.each_with_index do |e, index|
    if sum_array.any?
      sum_array << [array.slice(0, index+1).reduce(:+), (sum_array.last + e), e].max
    else
      sum_array << e
    end
  end
  sum_array.max
end

require 'minitest/autorun'

class Tests < MiniTest::Unit::TestCase
  def test_example_input
    assert_equal 4, sum_subarray([1,-3,2,1,1,-1,-5])
  end

  def test_example_input1
    assert_equal 3, sum_subarray([1,-3,2,1,-1,-5])
  end

  def test_example_input3
    assert_equal 15, sum_subarray([1,-3,2,1,-1,-5,5,10])
  end
end
