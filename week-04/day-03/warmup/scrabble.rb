require 'pry'

# take a word.
# capitalise it and split() the word out and go over each letter of the word
# find each value of the letter vs the letters hash and append it to an array
# sum the array

def scrabble_calc( word )

	letters = {
		"A" => 1,
		"E" => 1,
		"I" => 1,
		"O" => 1,
		"U" => 1,
		"L" => 1,
		"N" => 1,
		"R" => 1,
		"S" => 1,
		"T" => 1,
		"D" => 2,
		"G" => 2,
		"B" => 3,
		"C" => 3,
		"M" => 3,
		"P" => 3,
		"F" => 4,
		"H" => 4,
		"V" => 4,
		"W" => 4,
		"Y" => 4,
		"K" => 5,
		"J" => 8,
		"X" => 8,
		"Q" => 10,
		"Z" => 10,
	}

	word_total = 0
	word.upcase.each_char do |key|
		word_total += letters[key]
	end

	puts "The total score for \"#{word}\" is #{word_total}."
	return word_total
end

scrabble_calc( "bespoke" )
