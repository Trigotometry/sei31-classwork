print "What is the current temperature in the room? : "
current_temperature = gets.to_i

print "Is the air conditioner functional (y/n)? "
working = gets.chomp.downcase[0]

print "What temp do you wish it was? : "
desired_temperature = gets.to_f

puts "Current: #{current_temperature}, AC working: #{working}."

if working == 'y'
	puts "Turn on the A/C please." if current_temperature > desired_temperature
else
	

end
