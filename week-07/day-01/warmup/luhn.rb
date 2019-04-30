# https://github.com/Yiannimoustakas/sei31-homework/tree/master/warmups/week07/day01_luhn_numbers

# Luhn Formula
# Write a program that can take a number and determine whether or not it is valid per the Luhn formula.
#
# The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers and Canadian Social Insurance Numbers.
#
# This number must pass the following test:
#
# Counting from rightmost digit (which is the check digit) and moving left, double the value of every second digit. For any digits that thus become 10 or more, subtract 9 from the result.
#
# E.g., 1111 becomes 2121, while 8763 becomes 7733 (from 2×6=12 → 12-9=3 and 2×8=16 → 16-9=7).
#
# Add all these digits together. For example, if 1111 becomes 2121, then 2+1+2+1 is 6; and 8763 becomes 7733, so 7+7+3+3 is 20.
#
# If the total ends in 0 (put another way, if the total modulus 10 is 0), then the number is valid according to the Luhn formula; otherwise it is not valid. So, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).
#
# Write a program that, given a number, can check if it is valid per the Luhn formula.
#
# BONUS:
#
# For an invalid number, add a check digit to make the number valid.
#
# l = Luhn.new(3554)
# l.valid?
# # => false
#
# l = Luhn.new(8763)
# l.valid?
# # => true
# Do this in Ruby.

require 'pry'

class Luhn

	attr_accessor :number, :verify

	def initialize number
		if number.digits.count % 2 == 0
			@number = number
			luhnify
		else
			return puts "Invalid number."
		end
	end

	def luhnify
		numbers = []
		@number = @number.digits.each_with_index do |digit, index|
		end
	end

end

l = Luhn.new 3554
# puts l.verify

# l2 = Luhn.new 35543
# puts l2.number

################################################################################
# Yianni's solution
################################################################################
# class Luhn
#
#   def initialize number
#     @number = number
#   end
#
#   def luhnify
#
#     numbers = []
#
#     # @number.digits #[3,5,5,4]
#     @number.digits.each_with_index do |digit, index|
#       if index.odd?
#         digit *= 2
#       end
#
#       if digit > 9
#         digit = digit - 9
#       end
#
#       numbers << digit
#     end
#
#     numbers.reverse
#   end
#
#
#   def valid?
#     num = luhnify
#
#     total = 0
#     num.each do |n|
#       total += n
#     end
#
#     if total % 10 == 0
#       puts "#{@number} is valid luhn number"
#     else
#       luhnifield_num = @number + (10 - total % 10)
#       puts "new total: #{total + (10 - total % 10)}"
#       puts "#{luhnifield_num} would be a valid luhn number"
#     end
#
#     # if the result does not end in zero, add the difference between 10 and the remainder of check % 10.
#
#   end
# end
#
#
# l = Luhn.new(3554)
# puts l.valid?
# # => false
#
# l = Luhn.new(8763)
# puts l.valid?
# # => true
