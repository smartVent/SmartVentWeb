# == Schema Information
#
# Table name: rooms
#
#  id           :integer          not null, primary key
#  name         :string(32)       default(""), not null
#  slug         :string           not null
#  current_temp :integer
#  target_temp  :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
# Indexes
#
#  index_rooms_on_slug  (slug) UNIQUE
#

require 'test_helper'

class RoomTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
