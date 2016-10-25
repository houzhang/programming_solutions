# def solution(x,a)
#   counter_array = Array.new(x, false)
#   a.each_with_index do |value, index|
#     counter_array[value-1] = true
#     return index if counter_array.find_index(false).nil?
#   end
#   -1
# end

def solution(x,a)
  counter_hash = {}
  a.each_with_index do |value, index|
    counter_hash[value] = true
    return index if counter_hash.size == x
  end
  -1
end

require 'minitest/autorun'

class Tests < MiniTest::Unit::TestCase
  def test_example_input
    assert_equal 6, solution(5, [1, 3, 1, 4, 2, 3, 5, 4])
  end

  def test_example_input1
    assert_equal 7, solution(5, [1, 3, 1, 2, 2, 3, 5, 4, 5])
  end

  def test_example_input2
    assert_equal 4, solution(3, [1, 3, 1, 3, 2, 1, 3])
  end
  #
  # def test_example_input3
  #   assert_equal 1, solution([-1])
  # end
  #
  # def test_example_input4
  #   assert_equal 1, solution([-2147483648, 2147483647])
  # end
end