debug_mode = false

print "Lets play a game. You have to guess the number I've generated. It'll be between 0 and ... ?: "
MAX_NUMBER = gets.to_i
puts "#{MAX_NUMBER}? Done, what's your first guess? "
SECRET_NUMBER = rand 0..MAX_NUMBER
puts "The secret number is: #{SECRET_NUMBER}." if debug_mode
guessed_number = gets.to_i

until guessed_number == SECRET_NUMBER
	print "Higher ... try again: " if guessed_number < SECRET_NUMBER
	print "Lower ... try again: " if guessed_number > SECRET_NUMBER
	guessed_number = gets.to_i
end

puts "Nice work."
