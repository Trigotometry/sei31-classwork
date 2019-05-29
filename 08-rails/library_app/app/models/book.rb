# == Schema Information
#
# Table name: books
#
#  id         :integer          not null, primary key
#  title      :text
#  word_count :integer
#  genre      :text
#  image      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Book < ActiveRecord::Base
end
