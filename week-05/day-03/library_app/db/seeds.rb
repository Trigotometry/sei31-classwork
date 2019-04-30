puts 'Creating authors...'
Author.destroy_all
Author.create(:name => 'Brandon Sanderson', :nationality => 'American', :dob => '1975-12-19', :image => 'https://images.gr-assets.com/authors/1394044556p5/38550.jpg')
Author.create(:name => 'George R. R. Martin', :nationality => 'American', :dob => '1948-09-20', :image => 'https://images.gr-assets.com/authors/1351944410p5/346732.jpg')
Author.create(:name => 'J R. R. Tolkien', :nationality => 'English', :dob => '1892-01-03', :image => 'https://images.gr-assets.com/authors/1434625177p5/656983.jpg')

puts 'Creating books...'
Book.destroy_all
Book.create(:title => 'The Final Empire', :word_count => '208253', :genre => 'High Fantasy')
Book.create(:title => 'The Well of Ascension', :word_count => '245672', :genre => 'High Fantasy')
Book.create(:title => 'The Hero of Ages', :word_count => '234114', :genre => 'High Fantasy')
Book.create(:title => 'The Alloy of Law', :word_count => '97000', :genre => 'High Fantasy')
Book.create(:title => 'Shadows of Self', :word_count => '112665', :genre => 'High Fantasy')
Book.create(:title => 'The Bands of Mourning', :word_count => '130645', :genre => 'High Fantasy')

Book.create(:title => 'A Game of Thrones', :word_count => '293,625', :genre => 'Fantasy')
Book.create(:title => 'A Clash of Kings', :word_count => '323640', :genre => 'Fantasy')
Book.create(:title => 'A Storm of Swords', :word_count => '413830', :genre => 'Fantasy')
Book.create(:title => 'A Feast for Crows', :word_count => '294350', :genre => 'Fantasy')
Book.create(:title => 'A Dance with Dragons', :word_count => '425575', :genre => 'Fantasy')
Book.create(:title => 'The Winds of Winter', :word_count => '229680', :genre => 'Fantasy')
Book.create(:title => 'A Dream of Spring', :word_count => '', :genre => 'Fantasy')

Book.create(:title => 'There and Back Again', :word_count => '96425', :genre => 'Fantasy')
Book.create(:title => 'The Fellowship of the Ring', :word_count => '', :genre => 'Fantasy')
Book.create(:title => 'The Two Towers', :word_count => '', :genre => 'Fantasy')
Book.create(:title => 'The Return of the King', :word_count => '', :genre => 'Fantasy')
