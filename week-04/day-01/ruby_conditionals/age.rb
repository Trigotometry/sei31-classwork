print "What is your age? : "
age = gets.chomp.to_i

if age < 18
	puts "You can't enter this bar."
elsif age >= 18
	puts "You're free to enter."
end
