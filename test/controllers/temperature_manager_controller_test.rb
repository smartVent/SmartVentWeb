require 'test_helper'

class TemperatureManagerControllerTest < ActionController::TestCase
  test "should get all_rooms" do
    get :all_rooms
    assert_response :success
  end

end
