class LibraryController < ApplicationController

	def search
		render :search
	end

	def show
		@title = params[:title]
		url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title }"

		@info_hash = HTTParty.get url
		@image = @info_hash["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
		# raise "hell" OR 'rails console'

		render :show
	end

end
