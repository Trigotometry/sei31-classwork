Planet.destroy_all # Always sets up the seed file with nothing and then populates.

Planet.create :name => 'Earth', :orbit => 365, :moon => 1
Planet.create :name => 'Venus', :orbit => 225, :moon => 0
Planet.create :name => 'Mars', :orbit => 687, :moon => 2
Planet.create :name => 'Jupiter', :orbit => 4380, :moon => 7
