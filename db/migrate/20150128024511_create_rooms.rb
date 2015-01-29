class CreateRooms < ActiveRecord::Migration
  def change
    create_table :rooms do |t|
      t.string :name, null:false, limit: 32, default: ""
      t.string :slug, null:false
      t.integer :current_temp
      t.integer :target_temp

      t.timestamps null: false
    end
    add_index :rooms, :slug, unique: true
  end
end
