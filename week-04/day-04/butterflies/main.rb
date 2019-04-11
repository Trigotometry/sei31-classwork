require "sinatra"
require "sinatra/reloader"
require "sqlite3"

get "/" do
	erb :home
end

# INDEX - show all butterflies
get "/butterflies" do
	@butterflies = query_db "SELECT * FROM butterflies"
	erb :butterflies_index
end

# NEW - form for adding a new butterfly
get "/butterflies/new" do
	erb :butterflies_new
end

# CREATE - add a new butterfly to the dartabase
post '/butterflies' do
	query = "INSERT INTO butterflies (name, family, image) VALUES('#{ params[:name] }', '#{ params[:family] }', '#{ params[:image] }')"
	query_db query
	redirect to ('/butterflies') # GET request
end

# SHOW - shows a single butterfly in more detail
get "/butterflies/:id" do
	butterflies = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id] }"
	@butterfly = butterflies.first
	erb :butterflies_show
end

# EDIT - show a form to edit a single butterfly
get "/butterflies/:id/edit" do
	butterflies = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id] }"
	@butterfly = butterflies.first
	erb :butterflies_edit
end

# UPDATE - modify the database with new information for a particular butterfly
post "/butterflies/:id" do
	query = "UPDATE butterflies SET name='#{params[:name]}', family='#{params[:family]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
	query_db query
	redirect to ("/butterflies/#{ params[:id] }")
end

# DESTROY - delete a given butterfly form the database
get "/butterflies/:id/delete" do
	query_db "DELETE FROM butterflies WHERE id=#{ params[:id] }"
	redirect to("/butterflies")
end

def query_db(sql_statement)
	puts sql_statement
	db = SQLite3::Database.new "database.sqlite3"
	db.results_as_hash = true
	result = db.execute sql_statement
	db.close
	return result
end
