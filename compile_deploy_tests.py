
import unittest
import requests

class TestWebsite(unittest.TestCase):
    def test_home_page(self):
        response = requests.get('http://localhost:3000')
        self.assertEqual(response.status_code, 200)

    def test_cnn_page(self):
        response = requests.get('http://localhost:3000/cnn')
        self.assertEqual(response.status_code, 200)

    def test_svm_page(self):
        response = requests.get('http://localhost:3000/svm')
        self.assertEqual(response.status_code, 200)

    def test_random_forests_page(self):
        response = requests.get('http://localhost:3000/randomforests')
        self.assertEqual(response.status_code, 200)

if __name__ == '__main__':
    unittest.main()
