# == Schema Information
#
# Table name: artists
#
#  id          :integer          not null, primary key
#  name        :text
#  nationality :text
#  dob         :date
#  period      :text
#  image       :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Artist < ActiveRecord::Base
	has_many :works
end
