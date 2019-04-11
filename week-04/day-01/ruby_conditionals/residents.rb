print "What suburb do you live in? : "
residence = gets.chomp.capitalize

# case statement is kind of a case expression
puts case residence
when "Glebe"
	"Beatiful foreshore walk."
when "Five Dock"
	"Cool gangland shooting."
when "Fair Light"
	"What a fancy name."
when "Cabramatta"
	"Fine dining. Also, heroin."
else
	"Right."
end
