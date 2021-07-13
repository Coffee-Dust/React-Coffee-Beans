# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
100.times do
Post.first.reactions.create(user_id: 1, reaction_type: "like")
Post.first.reactions.create(user_id: 1, reaction_type: "sad")
Post.first.reactions.create(user_id: 1, reaction_type: "angry")
end