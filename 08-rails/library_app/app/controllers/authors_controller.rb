class AuthorsController < ApplicationController

	def index
		@authors = Author.all
	end

	def new
		@author = Author.new
	end

	def create
		author = Author.create author_params
		redirect_to author_path(author.id)
	end

	def show
		@author = Author.find params[:id]

		dob = @author.dob
		unless dob.blank?
			now = Time.zone.now.to_date
			@age = now.year - dob.year - ( ( now.month > dob.month || ( now.month == dob.month && now.day >= dob.day ) ) ? 0 : 1)
		end
	end

	def edit
		@author = Author.find params[:id]
	end

	def update
		author = Author.find params[:id]
		author.update author_params
		redirect_to author_path( author.id )
	end

	def destroy
		author = Author.find params[:id]
		author.destroy
		redirect_to authors_path
	end

	private
	def author_params
		# Strong Params
		params.require(:author).permit(:name, :nationality, :dob, :image)
	end

end
