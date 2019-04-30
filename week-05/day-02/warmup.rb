require 'pry'

class Robot

	attr_accessor :name
	attr_reader :uses

	def initialize
		@uses = 0
		setup
	end

	def reset
		setup
	end

	def setup
		letters = ('A'..'Z').to_a.shuffle[0..1].join
		numbers = ("000".."999").to_a.sample
		@name = letters + numbers
		@uses += 1
		puts "name: #{ @name }, uses: #{ @uses }"
	end

end

robot1 = Robot.new
sleep 1
robot2 = Robot.new
sleep 2
puts robot1.name
sleep 1
puts robot2.name
sleep 2
robot1.reset
sleep 1
robot2.reset

# binding.pry
