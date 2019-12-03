def recursive_fib(num)
	@fib ||= {} # if @fib doens't exist, create it as a Hash

	if @fib[num] #if this exists already, return it
		@fib[num]
	elsif num == 1 || num == 2
		1
	else
		result = recursive_fib(num-1) + recursive_fib(num-2)
		@fib[num] = result
		result
	end
end
puts recursive_fib(7)


# def fibSeq(n)
#   arr = []

#   (n+1).times do |i|
#     if i==0
#       arr[i] = 0
#     elsif i==1
#       arr[i] = 1
#     else
#       arr[i] = arr[i-1] + arr[i-2]
#     end
#   end

# 	arr[0..n]
# end
# puts fibSeq(4)


def iterative_fib num
	a = 0
	b = 1

	num.times do
		temp = a
		a = b
		b = temp + a
	end

	a
end
puts iterative_fib(7)


