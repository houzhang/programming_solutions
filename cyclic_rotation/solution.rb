def solution(a, k)
  if k > 0
    a.rotate(-k)
  else
    a
  end
end

require 'minitest/autorun'

class Tests < MiniTest::Unit::TestCase
  def test_example_input
    assert_equal [6, 3, 8, 9, 7], solution([3, 8, 9, 7, 6], 1)
  end

  def test_example_input1
    assert_equal [3, 8, 9, 7, 6], solution([3, 8, 9, 7, 6], 0)
  end

  def test_example_input2
    assert_equal [-9, 0], solution([-9, 0], 2)
  end

  def test_example_input3
    assert_equal [-1000, 5], solution([5, -1000], 1)
  end

  def test_example_input3
    assert_equal [9, 7, 6, 3, 8], solution([3, 8, 9, 7, 6], 3)
  end

  def test_example_input4
    assert_equal [3, 5, 1, 1, 2], solution([1, 1, 2, 3, 5], 42)
  end
end