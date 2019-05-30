# == Schema Information
#
# Table name: shelves
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Shelf < ApplicationRecord
	has_many :fruits
end
