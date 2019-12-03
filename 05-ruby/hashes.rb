require 'pry'

a = ["Anil", "Erik", "Jonathan"]

puts a[1]
puts "--" * 40
a << "Thomas"
p a


puts "----" * 20


h = {
	0 => "Zero",
	1 => "One",
	:two => "Two",
	"two" => 2
}

puts h[1]
puts h[:two]
puts h["two"]

h[3] = "Three"
puts h

h[:four] = 4
puts h


puts "----" * 20


is = {
	true => "It's true!",
	false => "It's false"
}
p is[2 + 2 == 4]
p is["Erik" == "Jonathan"]
p is[9 > 10]
p is[0]
p is["Erik"]


puts "----" * 20


users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
p users["Jonathan"][:twitter]
# How would you add the number 7 to Erik's favorite numbers?
p users["Erik"][:favorite_numbers] << 7
# How would you add yourself to the users hash?
users["Thomas"] = {:twitter => "TomHexton", :favorite_numbers => [12, 61, 5, 35]}
# How would you return the array of Erik's favorite numbers?
# How would you return the smallest of Erik's favorite numbers?
users["Erik"][:favorite_numbers].min

binding.pry
# How would you return an array of Anil's favorite numbers that are also even?
users["Anil"][:favorite_numbers].select { |n| n.even? }
# How would you return an array of the favorite numbers common to all users?
# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
users.map { |username, data| data[:favorite_numbers] }.flatten.sort.uniq
