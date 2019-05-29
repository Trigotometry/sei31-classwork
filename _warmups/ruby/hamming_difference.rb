require 'pry'

# v2
# def hamming_difference strand1, strand2
#
# 	distance = 0
#
# 	strand1.chars.each_with_index do |letter, index|
# 		# p "#{letter}, #{index}"
#
# 		if letter != strand2[index]
# 			distance += 1
# 		end
# 	end
#
# end

# v1
def hamming_difference strand1, strand2

	strand1.upcase
	p strand1

	wrong_characters = []

	strand1.chars.each_with_index do |char, index|
		# p strand1_a[i]
		# binding.pry
		unless strand1[index] == strand2[index]
			wrong_characters << strand2[index]
		end
	end

	p wrong_characters.length

end

hamming_difference "GAGCCTACTAACGGGAT", "CATCGTAATGACGGCCT"
