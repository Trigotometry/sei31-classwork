class WorksController < ApplicationController

	def index
		@works = Work.all
	end

	def show
		@work = Work.find params[:id]
	end

	def new
		@work = Work.new
	end

	private
	def work_params
		params.require(:work).permit(:title, :year, :medium, :style, :image)

	end

end
