require 'pry'

def hello(name="World") # variadic
	puts "Hello #{name}."
end

def add(a + b)
	a + b #implicit return: Ruby returns the value of the last line of code
end

# binding.pry #equivalent to JS: debugger;

hello()
hello
