import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options


class ResponsiveTest(unittest.TestCase):
    def setUp(self):
        chrome_options = Options()
        chrome_options.add_argument('--headless')
        self.driver = webdriver.Chrome(options=chrome_options)

    def test_reponsive(self):
        self.driver.get('http://localhost:3000')
        self.driver.set_window_size(1024, 768)
        assert 'Machine Learning Education' in self.driver.title
        self.driver.quit()

if __name__ == '__main__':
    unittest.main()