# lr.rb - A Ruby line reader (equivalent to cat)
# Useage: ruby lr.rb /etc/passwd

# ARGF is an array of th elines of each file mentioned in ARGV

ARGF.each do | line |
	puts line if line =~ /(.)\1/
end
