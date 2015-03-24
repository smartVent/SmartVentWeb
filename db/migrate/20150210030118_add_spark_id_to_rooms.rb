class AddSparkIdToRooms < ActiveRecord::Migration
  def change
    change_table :rooms do |t|
      t.string :spark_id
    end
  end
end
