class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
		t.text :title
		t.integer :word_count
		t.text :genre
		t.text :image

		t.timestamps # automagically adds colums for create_at and update_at
    end
  end
end
