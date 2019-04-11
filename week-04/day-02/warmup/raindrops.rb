# v2
def rain_drops( num )
	puts num % 3 != 0 && num % 5 != 0 && num % 7 != 0
		puts num
	else
		to_print = ""
		to_print += "Pling" if num % 3 == 0
		to_print +=  "Plang" if num % 5 == 0
		to_print +=  "Plong" if num % 7 == 0
		puts to_print
	end
end


# v1

# def rain_drops( num )
# 	num.to_i
# 	puts "Pling" if num % 3 == 0
# 	puts "Plang" if num % 5 == 0
# 	puts "Plong" if num % 7 == 0
# end

rain_drops 34
