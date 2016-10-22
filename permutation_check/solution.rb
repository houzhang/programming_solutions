def solution(n)
  if n.max > n.size
    return 0
  else
    counter_array = Array.new(n.size, 0)
    n.each do |x|
      counter_array[x-1] = 1
    end
    counter_array.find_index(0).nil? ? 1 : 0
  end
end

require 'minitest/autorun'

class Tests < MiniTest::Unit::TestCase
  def test_example_input
    assert_equal 1, solution([4, 1, 3, 2])
  end

  def test_example_input1
    assert_equal 0, solution([4, 1, 3])
  end

  def test_example_input2
    assert_equal 0, solution([9, 5, 7, 3, 2, 7, 3, 1, 10, 8])
  end

  def test_example_input3
    assert_equal 0, solution([1, 1])
  end

  def test_example_input4
    assert_equal 0, solution([1, 9])
  end

  def test_example_input5
    assert_equal 0, solution([1000000000])
  end
end