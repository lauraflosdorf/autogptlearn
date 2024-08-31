# Python script for comprehensive testing of all website components
import unittest
import requests

class TestWebsite(unittest.TestCase):
    def test_home(self):
        # Test whether the home page loads correctly
        response = requests.get('http://localhost:3000')
        self.assertEqual(200, response.status_code)

    def test_cnn(self): # Example of a detailed test
        response = requests.get('http://localhost:3000/cnn')
        self.assertIn('Convolutional Neural Networks', response.text)

if __name__ == '__main__':
    unittest.main()