def solution(x, y, d)
  calc_jump = (y-x).divmod(d)
  calc_jump[1] == 0 ? calc_jump[0] : calc_jump[0]+ 1
end

require 'minitest/autorun'

class Tests < MiniTest::Unit::TestCase
  def test_example_input
    assert_equal 3, solution(10, 80, 30)
  end

  def test_example_input1
    assert_equal 2, solution(1, 5, 2)
  end

  def test_example_input2
    assert_equal 142730189, solution(3, 999111321, 7)
  end

  def test_example_input3
    assert_equal 34, solution(5, 105, 3)
  end
end
