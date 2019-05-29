require 'pry'

DAYS_OF_THE_WEEK = %w[Monday Tuesday Wednesday Thursday Friday Saturday Sunday]
p DAYS_OF_THE_WEEK
puts "-=" * 40

# DAYS_OF_THE_WEEK.pop
# p DAYS_OF_THE_WEEK
# puts "-=" * 40

# DAYS_OF_THE_WEEK.unshift("Sunday")
# p DAYS_OF_THE_WEEK
# puts "-=" * 40

DAYS_OF_THE_WEEK.rotate! -1
p DAYS_OF_THE_WEEK

day_parts = [ DAYS_OF_THE_WEEK[1..5], DAYS_OF_THE_WEEK.rotate.drop(5) ]
p day_parts

day_parts.pop
day_parts.flatten!.sort!
p day_parts

# binding.pry
