def solution(s)
  compressed_string = [s[0]]
  last_string = s[0]
  counter = -1
  s.split('').each_with_index do |x|
    if x == last_string
      counter +=1
    else
      compressed_string << counter
      compressed_string << x

      last_string = x
      counter = 0
    end
  end
  compressed_string << counter
  compressed_string.map{|i| i}.join()
end


require 'minitest/autorun'

class Tests < MiniTest::Unit::TestCase
  def test_example_input
    assert_equal 'a3b2c1d0a1', solution('aaaabbbccdaa')
  end

  def test_example_input1
    assert_equal 'a3b2c1', solution('aaaabbbcc')
  end

  def test_example_input2
    assert_equal 'a3b2c0', solution('aaaabbbc')
  end
end