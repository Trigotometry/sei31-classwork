class Fruit < ApplicationRecord
	validates :name, :presence => true
	
	def squishy?
		true
	end

	belongs_to :shelf, :optional => true
end
