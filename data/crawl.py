# https://beomi.github.io/2017/01/20/HowToMakeWebCrawler/
# JavaScript처리가 필요한 경우에 selenium을 고려할 수 있음
# 크롤링을 할때 요청에서 requests를 사용한다면 가장 효율적인 처리라고 할 수 있음 


import requests
from bs4 import BeautifulSoup

# http get request
web= requests.get('https://comic.naver.com/webtoon/detail.nhn?titleId=651673&no=327&weekday=wed')
html = web.text
soup = BeautifulSoup(html, 'html.parser')

#select,  find차이 공부
a = soup.select('cbox_module > div > div.u_cbox_content_wrap > ul > li.u_cbox_comment.cbox_module__comment_352437877._user_id_no_7pWw8 > div.u_cbox_comment_box > div > div.u_cbox_info > span.u_cbox_info_main > span > span > span.u_cbox_nick_area')
for i in a:
    print(i.text)