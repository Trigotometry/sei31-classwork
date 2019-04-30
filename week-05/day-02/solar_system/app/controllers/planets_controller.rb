class PlanetsController < ApplicationController

	def index
		@planets = Planet.all
	end

	def new
	end

	def create
		planet = Planet.new
		planet.name = params[:name]
		planet.image = params[:image]
		planet.orbit = params[:orbit]
		planet.diameter = params[:diameter]
		planet.mass = params[:mass]
		planet.moon = params[:moon]
		planet.save

		redirect_to planet_path( planet.id )
	end

	def show
		@planet = Planet.find params[:id]
	end

	def edit
		@planet = Planet.find params[:id]
	end

	def update
		# raise "hell"
		planet = Planet.find params[:id]
		planet.name = params[:name]
		planet.image = params[:image]
		planet.orbit = params[:orbit]
		planet.diameter = params[:diameter]
		planet.mass = params[:mass]
		planet.moon = params[:moon]
		planet.save

		redirect_to planet_path( planet.id )
	end

	def destroy
		planet = Planet.find params[:id]
		planet.destroy
		redirect_to planets_path
	end

end
