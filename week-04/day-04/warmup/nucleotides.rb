require 'pry'

def count_nucleotides string
	_A = []
	_C = []
	_G = []
	_T = []
	_invalids = []

	string.upcase.chars.each do |char|
		if char == "A"
			_A << char
		elsif char == "C"
			_C << char
		elsif char == "G"
			_G << char
		elsif char == "T"
			_T << char
		elsif char != "A" || char != "C" || char != "G" || char != "T"
			_invalids << char
		end
	end

	puts "A: #{ _A.length }"
	puts "C: #{ _C.length }"
	puts "G: #{ _G.length }"
	puts "T: #{ _T.length }"
	# puts "#{ _invalids }"

	if _invalids.length > 0
		puts "You have the following invalid characters #{ _invalids.each { |item| print item } }"
	end

end

count_nucleotides "AGCTTTTCATTCTGACTGCAAZGGGCAATACGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
