# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Room.create({name: 'Living Room', current_temp: 72, target_temp: 74})
Room.create({name: 'Bedroom', current_temp: 68, target_temp: 66})
Room.create({name: 'Office', current_temp: 70, target_temp: 72})
