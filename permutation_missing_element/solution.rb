# def solution(n)
#   if n.any?
#     (1..n.max+1).each do |x|
#       return x unless n.include?(x)
#     end
#   end
#   1
# end

def solution(n)
  counter_array = Array.new(n.size+1, 0)
  n.each do |v|
    counter_array[v-1] = 1
  end
  counter_array.find_index(0) + 1
end

require 'minitest/autorun'

class Tests < MiniTest::Unit::TestCase
  def test_example_input
    assert_equal 4, solution([2, 3, 1, 5])
  end

  def test_example_input1
    assert_equal 1, solution([5, 4, 3, 2])
  end

  def test_example_input2
    assert_equal 3, solution([5, 4, 1, 2])
  end

  def test_example_input3
    assert_equal 1, solution([])
  end

  def test_example_input4
    assert_equal 2, solution([1])
  end
end