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
	strand1_a = strand1.split('')
	strand2_a = strand2.split('')
	wrong_characters = []

p strand1_a
	strand1_a.each_with_index do |char, index|
		# p strand1_a[i]
		# binding.pry
		unless strand1_a[index] == strand2_a[index]
			wrong_characters << strand2_a[index]
		end
	end

	p wrong_characters.length

end

hamming_difference "GAGCCTACTAACGGGAT", "CATCGTAATGACGGCCT"
