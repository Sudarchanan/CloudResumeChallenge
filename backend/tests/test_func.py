import requests

URl = "API URL"

def test_func():
    response = requests.get(URl)
    status_code = response.status_code

    assert status_code == 200


