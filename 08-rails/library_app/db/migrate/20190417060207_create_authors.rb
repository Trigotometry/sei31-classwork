class CreateAuthors < ActiveRecord::Migration[5.2]
  def change
    create_table :authors do |t|
		t.text :name
		t.text :nationality
		t.date :dob
		t.text :image

		t.timestamps # automagically adds columns created_at and updated_at
    end
  end
end
