class Calculator

	def initialize question
		@question = question
		matches
	end

	def matches
		@matches = @question.match( /(-?\d+) (plus|minus|divided by|multplied by) (-?\d+)/ )
	end

	def first_number
		@matches[1].to_i
	end

	def operation
		case @matches[2]
			when "plus" then :+
			when "minus" then :-
			when "divided by" then :/
			when "multiplied" then :*
		end
	end

	def second_number
		@matches[3].to_i
	end

	def answer
		@answer = first_number.send( operation, second_number )
	end

end


c = Calculator.new("What is 10 divided by 2?")

puts c.answer

# Calc = Struct.new :first_num, :operator, :second_num
# CALC_FORMAT = /(\d*) (\w*) (\d*)/
#
# def wordy_calc string
# 	string.match( CALC_FORMAT ) { | m | Calc.new( *m.captures ) }
# end
#
# puts wordy_calc ("5 plus 13")
#
#
# Line = Struct.new(:time, :type, :msg)
# LOG_FORMAT = /(\d{2}:\d{2}) (\w+) (.*)/
# def parse_line(line)
#   line.match(LOG_FORMAT) { |m| Line.new(*m.captures) }
# end
# parse_line("12:41 INFO User has logged in.")
# This produces objects like this:
# <struct line="" time="12:41" ,="" type="INFO" msg="User has logged in.">
# </struct>
