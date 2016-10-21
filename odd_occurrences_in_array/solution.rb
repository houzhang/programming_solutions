def solution(n)
  counter_hsh = {}
  n.each do |x|
    if counter_hsh[x.to_s].nil?
      counter_hsh[x.to_s] = 1
    else
      counter_hsh[x.to_s] += 1
    end

  end
  unpaired_value = counter_hsh.select {|key,value| value.odd?}
  unpaired_value.keys.first.to_i
end


require 'minitest/autorun'

class Tests < MiniTest::Unit::TestCase
  def test_example_input
    assert_equal 7, solution([9,3,9,3,9,7,9])
  end

  def test_example_input1
    assert_equal 7, solution([9,3,9,3,9,9,7])
  end

  def test_example_input3
    assert_equal 5, solution([5,3,9,3,9,3,9])
  end

  def test_example_input4
    assert_equal 9, solution([3,3,9,3,9,3,9])
  end

  def test_example_input5
    assert_equal 5, solution([5])
  end

  def test_example_input6
    assert_equal 0, solution([5,5,5,5,5,5])
  end

  def test_example_input6
    assert_equal 42, solution([42])
  end
end