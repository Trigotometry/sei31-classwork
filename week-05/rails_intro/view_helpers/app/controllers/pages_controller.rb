class PagesController < ApplicationController
	def home
		render :home
	end

	def numbers
		@amount = 2459923.4757234
		@large_number = 9266183
		@phone = 0431756637
		render :numbers
	end

	def text
		@numbers = (1..20).to_a
		@friend_count = 5
		@enemy_count = 2
		@story = "A very very very very very very very very very very very very very very very very very very very very very very very very very long time ago..."
		render :text
	end

end
