require 'pry'

class Actor
	def award_speech
		"I would like to thank everyone."
	end

	def deny_allegations
		"I deny that and I was drunk."
	end
end

class Stooge < Actor
	def terrible
		true
	end
end

class MarxBrother < Actor
	# macro
	# attr_reader :name
	# attr_writer :name
	# read & write
	attr_accessor :name, :instrument, :vice

	def initialize(n='', i='', v='hating fascism')
		@name = n
		@instrument = i
		@vice = v
	end

	def perform
		"My name is #{ @name } and I play the #{ @instrument }."
	end

	#getter
	# def vice()
	# 	@vice
	# end
	# #setter
	# def vice=(v)
	# 	@vice = v
	# end
end

groucho = MarxBrother.new 'Grouch Marx', 'guitar', 'cigar'
harpo = MarxBrother.new

binding.pry
