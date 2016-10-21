# def solution(n)
#   difference_array = []
#   n.each_with_index do |x, index|
#     if index+1 < n.size
#       difference_array << (n.slice(0, index+1).reduce(:+) - n.slice(index+1, n.size).reduce(:+))
#     end
#   end
#   p difference_array
#   difference_array = difference_array.map {|y| y < 0 ? -y : y}
#     p difference_array
#   difference_array.min
# end

def solution(n)
  difference_array = []
  sum1 = n[0]
  sum2 = n.reduce(:+) - sum1
  difference_array << sum1 - sum2
  n.each_with_index do |x, index|
    if index > 0 && index+1 < n.size
      sum1 += x
      sum2 -= x
      difference_array << sum1 - sum2
    end
  end

  difference_array = difference_array.map {|y| y < 0 ? -y : y}
  difference_array.min
end



require 'minitest/autorun'

class Tests < MiniTest::Unit::TestCase
  def test_example_input
    assert_equal 1, solution([3, 1, 2, 4, 3])
  end

  def test_example_input1
    assert_equal 4, solution([5, 6, 2, 4, 1])
  end
end