require "sinatra"
require "sinatra/reloader"
require "sqlite3"

# INDEX - show all butterflies
get "/" do
	@butterflies = query_db "SELECT * FROM butterflies"
	erb :index
end

# NEW - form for adding a new butterfly
get "/butterflies/new" do
	erb :butterflies_new
end

# CREATE - add a new butterfly to the dartabase
post '/' do
	query = "INSERT INTO butterflies (name, family, image) VALUES('#{ params[:name] }', '#{ params[:family] }', '#{ params[:image] }')"
	query_db query
	redirect to ('/') # GET request
end

# SHOW
get "/butterflies/:id" do
	butterflies = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id] }"
	@butterfly = butterflies.first
	erb :butterflies_show
end

# EDIT
get "/butterflies/:id/edit" do
	butterflies = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id] }"
	@butterfly = butterflies.first
	erb :butterflies_edit
end

# UPDATE - modify the database with new information for a particular butterfly
post "/butterflies/:id" do
	query_db "UPDATE butterflies SET name='#{ params[:name] }', family='#{ params[:family] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
	redirect to ("/butterflies/#{ params[:id] }")
end

# DESTROY - delete a given butterfly form the database
get "/butterflies/:test/delete" do
	query_db "DELETE FROM butterflies WHERE id=#{ params[:test] }"
	redirect to("/")
end

def query_db(sql_statement)
	puts sql_statement
	db = SQLite3::Database.new "database.sqlite3"
	db.results_as_hash = true
	result = db.execute sql_statement
	db.close
	return result
end
