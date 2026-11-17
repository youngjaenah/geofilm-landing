# geofilm-landing

https://geofilm.yjlab.io — GeoFilm(Mac)·GeoFilm Tracker(iPhone) 소개, 지원, 개인정보 처리방침 페이지.

App Store Connect에 넣는 URL:

| URL | 용도 |
|---|---|
| https://geofilm.yjlab.io/support/ | 지원 URL |
| https://geofilm.yjlab.io/privacy/ | 개인정보 처리방침 URL |
| https://geofilm.yjlab.io/ | 마케팅 URL |

정적 HTML 그대로 배포한다(빌드 단계 없음). 각 페이지는 한국어·영어를 함께 담고, `lang.js`가
브라우저 언어(한국어면 ko, 그 외 en)와 방문자의 선택에 따라 한쪽을 보여 준다.

개인정보 처리방침의 원문은 GeoFilm 저장소의 `docs/release/privacy-policy.md`다. 앱이 연결하는 서비스가
바뀌면 두 곳을 함께 고친다.

호스팅: GitHub Pages(main 브랜치 루트), DNS: Cloudflare(`geofilm.yjlab.io` CNAME → `youngjaenah.github.io`).
