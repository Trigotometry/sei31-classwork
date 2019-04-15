require "pry"

# Write a program that can calculate the sum of the first n elements of the following sequences:
#
# s1 = 1 - 1 + 1 - 1 + 1 - 1 + //etc
# s2 = 1 + 2 + 3 + 4 + 5 + 6 + //etc

# For example:
# s1(4) = 0
# s2(4) = 10
# Can you guess what the sum would be if n is infinity?


class SimpleSums

	def initialize ( number )
		@number = number
	end

	def print
		puts @number
	end

	def s1
		string = "Total is "
		@number % 2 == 0 ? string << "0." : string << "1."
		string
	end

	def s2
		(1..@number).sum
	end

end

sum = SimpleSums.new 4

p sum.s1
p sum.s2



# binding.pry
